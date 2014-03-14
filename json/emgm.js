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
        "word": "emgm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Type classes used for generic functions with \u003cem\u003eone\u003c/em\u003e generic argument.\n\u003c/p\u003e\u003cp\u003eA \u003cem\u003egeneric function\u003c/em\u003e is defined as an instance of \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eGeneric2\u003c/a\u003e\u003c/code\u003e, or\n \u003ccode\u003e\u003ca\u003eGeneric3\u003c/a\u003e\u003c/code\u003e. Each method in the class serves for a case in the datatype\n representation\n\u003c/p\u003e\u003cp\u003eA \u003cem\u003erepresentation dispatcher\u003c/em\u003e simplifies the use of a generic function. There\n must be an instance of each of the classes \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFRep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFRep2\u003c/a\u003e\u003c/code\u003e, etc. (that\n apply) for every datatype.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Base",
          "name": "Base",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Type classes used for generic functions with one generic argument generic function is defined as an instance of Generic Generic2 or Generic3 Each method in the class serves for case in the datatype representation representation dispatcher simplifies the use of generic function There must be an instance of each of the classes Rep FRep FRep2 etc that apply for every datatype",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "Base",
          "package": "emgm",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation dispatcher for bifunctor types (kind \u003ccode\u003e* -\u003e *\u003c/code\u003e) used with\n \u003ccode\u003e\u003ca\u003eGeneric2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "BiFRep2",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#BiFRep2",
          "type": "class"
        },
        "index": {
          "description": "Representation dispatcher for bifunctor types kind used with Generic2",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "BiFRep2",
          "package": "emgm",
          "partial": "Bi FRep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#t:BiFRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation dispatcher for functor types (kind \u003ccode\u003e* -\u003e *\u003c/code\u003e) used with\n \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "FRep",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#FRep",
          "type": "class"
        },
        "index": {
          "description": "Representation dispatcher for functor types kind used with Generic",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "FRep",
          "package": "emgm",
          "partial": "FRep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#t:FRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation dispatcher for functor types (kind \u003ccode\u003e* -\u003e *\u003c/code\u003e) used with\n \u003ccode\u003e\u003ca\u003eGeneric2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "FRep2",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#FRep2",
          "type": "class"
        },
        "index": {
          "description": "Representation dispatcher for functor types kind used with Generic2",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "FRep2",
          "package": "emgm",
          "partial": "FRep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#t:FRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation dispatcher for functor types (kind \u003ccode\u003e* -\u003e *\u003c/code\u003e) used with\n \u003ccode\u003e\u003ca\u003eGeneric3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "FRep3",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#FRep3",
          "type": "class"
        },
        "index": {
          "description": "Representation dispatcher for functor types kind used with Generic3",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "FRep3",
          "package": "emgm",
          "partial": "FRep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#t:FRep3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class forms the foundation for defining generic functions with a\n single generic argument. Each method represents a type case. There are cases\n for primitive types, structural representation types, and for user-defined\n datatypes.\n\u003c/p\u003e\u003cp\u003eThe included modules using \u003ccode\u003eGeneric\u003c/code\u003e are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Collect\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Compare\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Constructor\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Crush\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Enum\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Read\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Show\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Generics.EMGM.Base",
          "name": "Generic",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#Generic",
          "type": "class"
        },
        "index": {
          "description": "This class forms the foundation for defining generic functions with single generic argument Each method represents type case There are cases for primitive types structural representation types and for user-defined datatypes The included modules using Generic are Generics.EMGM.Functions.Collect Generics.EMGM.Functions.Compare Generics.EMGM.Functions.Constructor Generics.EMGM.Functions.Crush Generics.EMGM.Functions.Enum Generics.EMGM.Functions.Read Generics.EMGM.Functions.Show",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "Generic",
          "package": "emgm",
          "partial": "Generic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#t:Generic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class forms the foundation for defining generic functions with two\n generic arguments. See \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003cp\u003eThe included modules using \u003ccode\u003eGeneric2\u003c/code\u003e are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Map\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Transpose\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Generics.EMGM.Base",
          "name": "Generic2",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#Generic2",
          "type": "class"
        },
        "index": {
          "description": "This class forms the foundation for defining generic functions with two generic arguments See Generic for details The included modules using Generic2 are Generics.EMGM.Functions.Map Generics.EMGM.Functions.Transpose",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "Generic2",
          "package": "emgm",
          "partial": "Generic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#t:Generic2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class forms the foundation for defining generic functions with three\n generic arguments. See \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003cp\u003eThe included modules using \u003ccode\u003eGeneric3\u003c/code\u003e are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.UnzipWith\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.ZipWith\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Generics.EMGM.Base",
          "name": "Generic3",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#Generic3",
          "type": "class"
        },
        "index": {
          "description": "This class forms the foundation for defining generic functions with three generic arguments See Generic for details The included modules using Generic3 are Generics.EMGM.Functions.UnzipWith Generics.EMGM.Functions.ZipWith",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "Generic3",
          "package": "emgm",
          "partial": "Generic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#t:Generic3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation dispatcher for monomorphic types (kind \u003ccode\u003e*\u003c/code\u003e) used with\n \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e. Every structure type and supported datatype should have an\n instance of \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "Rep",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#Rep",
          "type": "class"
        },
        "index": {
          "description": "Representation dispatcher for monomorphic types kind used with Generic Every structure type and supported datatype should have an instance of Rep",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "Rep",
          "package": "emgm",
          "partial": "Rep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#t:Rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "bifrep2",
          "package": "emgm",
          "signature": "g a1 b1 -\u003e g a2 b2 -\u003e g (f a1 a2) (f b1 b2)",
          "source": "src/Generics-EMGM-Base.html#bifrep2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "bifrep2",
          "normalized": "a b c-\u003ea b c-\u003ea(d b b)(d c c)",
          "package": "emgm",
          "signature": "g a b-\u003eg a b-\u003eg(f a a)(f b b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:bifrep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "frep",
          "package": "emgm",
          "signature": "g a -\u003e g (f a)",
          "source": "src/Generics-EMGM-Base.html#frep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "frep",
          "normalized": "a b-\u003ea(c b)",
          "package": "emgm",
          "signature": "g a-\u003eg(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:frep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "frep2",
          "package": "emgm",
          "signature": "g a b -\u003e g (f a) (f b)",
          "source": "src/Generics-EMGM-Base.html#frep2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "frep2",
          "normalized": "a b c-\u003ea(d b)(d c)",
          "package": "emgm",
          "signature": "g a b-\u003eg(f a)(f b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:frep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "frep3",
          "package": "emgm",
          "signature": "g a b c -\u003e g (f a) (f b) (f c)",
          "source": "src/Generics-EMGM-Base.html#frep3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "frep3",
          "normalized": "a b c d-\u003ea(e b)(e c)(e d)",
          "package": "emgm",
          "signature": "g a b c-\u003eg(f a)(f b)(f c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:frep3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the primitive type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "rchar",
          "package": "emgm",
          "signature": "g Char",
          "source": "src/Generics-EMGM-Base.html#rchar",
          "type": "method"
        },
        "index": {
          "description": "Case for the primitive type Char",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rchar",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rchar2",
          "package": "emgm",
          "signature": "g Char Char",
          "source": "src/Generics-EMGM-Base.html#rchar2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rchar2",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rchar2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rchar3",
          "package": "emgm",
          "signature": "g Char Char Char",
          "source": "src/Generics-EMGM-Base.html#rchar3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rchar3",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rchar3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for constructors. It is used to hold the meta-information about a\n constructor, e.g. name, arity, fixity, etc. This is not needed for many\n generic functions, so the default implementation is:\n\u003c/p\u003e\u003cpre\u003e\n   rcon = const id\n\u003c/pre\u003e",
          "module": "Generics.EMGM.Base",
          "name": "rcon",
          "package": "emgm",
          "signature": "ConDescr -\u003e g a -\u003e g a",
          "source": "src/Generics-EMGM-Base.html#rcon",
          "type": "method"
        },
        "index": {
          "description": "Case for constructors It is used to hold the meta-information about constructor e.g name arity fixity etc This is not needed for many generic functions so the default implementation is rcon const id",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rcon",
          "normalized": "ConDescr-\u003ea b-\u003ea b",
          "package": "emgm",
          "signature": "ConDescr-\u003eg a-\u003eg a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rcon2",
          "package": "emgm",
          "signature": "ConDescr -\u003e g a1 a2 -\u003e g a1 a2",
          "source": "src/Generics-EMGM-Base.html#rcon2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rcon2",
          "normalized": "ConDescr-\u003ea b b-\u003ea b b",
          "package": "emgm",
          "signature": "ConDescr-\u003eg a a-\u003eg a a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rcon2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rcon3",
          "package": "emgm",
          "signature": "ConDescr -\u003e g a1 a2 a3 -\u003e g a1 a2 a3",
          "source": "src/Generics-EMGM-Base.html#rcon3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rcon3",
          "normalized": "ConDescr-\u003ea b b b-\u003ea b b b",
          "package": "emgm",
          "signature": "ConDescr-\u003eg a a a-\u003eg a a a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rcon3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the primitive type \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "rdouble",
          "package": "emgm",
          "signature": "g Double",
          "source": "src/Generics-EMGM-Base.html#rdouble",
          "type": "method"
        },
        "index": {
          "description": "Case for the primitive type Double",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rdouble",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rdouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rdouble2",
          "package": "emgm",
          "signature": "g Double Double",
          "source": "src/Generics-EMGM-Base.html#rdouble2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rdouble2",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rdouble2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rdouble3",
          "package": "emgm",
          "signature": "g Double Double Double",
          "source": "src/Generics-EMGM-Base.html#rdouble3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rdouble3",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rdouble3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rep",
          "package": "emgm",
          "signature": "g a",
          "source": "src/Generics-EMGM-Base.html#rep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rep",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the primitive type \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "rfloat",
          "package": "emgm",
          "signature": "g Float",
          "source": "src/Generics-EMGM-Base.html#rfloat",
          "type": "method"
        },
        "index": {
          "description": "Case for the primitive type Float",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rfloat",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rfloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rfloat2",
          "package": "emgm",
          "signature": "g Float Float",
          "source": "src/Generics-EMGM-Base.html#rfloat2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rfloat2",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rfloat2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rfloat3",
          "package": "emgm",
          "signature": "g Float Float Float",
          "source": "src/Generics-EMGM-Base.html#rfloat3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rfloat3",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rfloat3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the primitive type \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "rint",
          "package": "emgm",
          "signature": "g Int",
          "source": "src/Generics-EMGM-Base.html#rint",
          "type": "method"
        },
        "index": {
          "description": "Case for the primitive type Int",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rint",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rint2",
          "package": "emgm",
          "signature": "g Int Int",
          "source": "src/Generics-EMGM-Base.html#rint2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rint2",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rint2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rint3",
          "package": "emgm",
          "signature": "g Int Int Int",
          "source": "src/Generics-EMGM-Base.html#rint3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rint3",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rint3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the primitive type \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "rinteger",
          "package": "emgm",
          "signature": "g Integer",
          "source": "src/Generics-EMGM-Base.html#rinteger",
          "type": "method"
        },
        "index": {
          "description": "Case for the primitive type Integer",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rinteger",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rinteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rinteger2",
          "package": "emgm",
          "signature": "g Integer Integer",
          "source": "src/Generics-EMGM-Base.html#rinteger2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rinteger2",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rinteger2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rinteger3",
          "package": "emgm",
          "signature": "g Integer Integer Integer",
          "source": "src/Generics-EMGM-Base.html#rinteger3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rinteger3",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rinteger3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for labeled field. Contains the label string. This is not needed for\n many generic functions, so the default implementation is:\n\u003c/p\u003e\u003cpre\u003e\n   rlbl = const id\n\u003c/pre\u003e",
          "module": "Generics.EMGM.Base",
          "name": "rlbl",
          "package": "emgm",
          "signature": "LblDescr -\u003e g a -\u003e g a",
          "source": "src/Generics-EMGM-Base.html#rlbl",
          "type": "method"
        },
        "index": {
          "description": "Case for labeled field Contains the label string This is not needed for many generic functions so the default implementation is rlbl const id",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rlbl",
          "normalized": "LblDescr-\u003ea b-\u003ea b",
          "package": "emgm",
          "signature": "LblDescr-\u003eg a-\u003eg a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rlbl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rlbl2",
          "package": "emgm",
          "signature": "LblDescr -\u003e g a1 a2 -\u003e g a1 a2",
          "source": "src/Generics-EMGM-Base.html#rlbl2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rlbl2",
          "normalized": "LblDescr-\u003ea b b-\u003ea b b",
          "package": "emgm",
          "signature": "LblDescr-\u003eg a a-\u003eg a a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rlbl2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rlbl3",
          "package": "emgm",
          "signature": "LblDescr -\u003e g a1 a2 a3 -\u003e g a1 a2 a3",
          "source": "src/Generics-EMGM-Base.html#rlbl3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rlbl3",
          "normalized": "LblDescr-\u003ea b b b-\u003ea b b b",
          "package": "emgm",
          "signature": "LblDescr-\u003eg a a a-\u003eg a a a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rlbl3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the structural representation type \u003ccode\u003e:*:\u003c/code\u003e (product). Represents\n the fields of a constructor.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "rprod",
          "package": "emgm",
          "signature": "g a -\u003e g b -\u003e g (a :*: b)",
          "source": "src/Generics-EMGM-Base.html#rprod",
          "type": "method"
        },
        "index": {
          "description": "Case for the structural representation type product Represents the fields of constructor",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rprod",
          "normalized": "a b-\u003ea c-\u003ea(b*c)",
          "package": "emgm",
          "signature": "g a-\u003eg b-\u003eg(a*b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rprod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rprod2",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g (a1 :*: b1) (a2 :*: b2)",
          "source": "src/Generics-EMGM-Base.html#rprod2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rprod2",
          "normalized": "a b b-\u003ea c c-\u003ea(b*c)(b*c)",
          "package": "emgm",
          "signature": "g a a-\u003eg b b-\u003eg(a*b)(a*b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rprod2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rprod3",
          "package": "emgm",
          "signature": "g a1 a2 a3 -\u003e g b1 b2 b3 -\u003e g (a1 :*: b1) (a2 :*: b2) (a3 :*: b3)",
          "source": "src/Generics-EMGM-Base.html#rprod3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rprod3",
          "normalized": "a b b b-\u003ea c c c-\u003ea(b*c)(b*c)(b*c)",
          "package": "emgm",
          "signature": "g a a a-\u003eg b b b-\u003eg(a*b)(a*b)(a*b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rprod3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the structural representation type \u003ccode\u003e:+:\u003c/code\u003e (sum). Represents\n alternative constructors.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "rsum",
          "package": "emgm",
          "signature": "g a -\u003e g b -\u003e g (a :+: b)",
          "source": "src/Generics-EMGM-Base.html#rsum",
          "type": "method"
        },
        "index": {
          "description": "Case for the structural representation type sum Represents alternative constructors",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rsum",
          "normalized": "a b-\u003ea c-\u003ea(b c)",
          "package": "emgm",
          "signature": "g a-\u003eg b-\u003eg(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rsum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rsum2",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g (a1 :+: b1) (a2 :+: b2)",
          "source": "src/Generics-EMGM-Base.html#rsum2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rsum2",
          "normalized": "a b b-\u003ea c c-\u003ea(b c)(b c)",
          "package": "emgm",
          "signature": "g a a-\u003eg b b-\u003eg(a b)(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rsum2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "rsum3",
          "package": "emgm",
          "signature": "g a1 a2 a3 -\u003e g b1 b2 b3 -\u003e g (a1 :+: b1) (a2 :+: b2) (a3 :+: b3)",
          "source": "src/Generics-EMGM-Base.html#rsum3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rsum3",
          "normalized": "a b b b-\u003ea c c c-\u003ea(b c)(b c)(b c)",
          "package": "emgm",
          "signature": "g a a a-\u003eg b b b-\u003eg(a b)(a b)(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rsum3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for datatypes. This method is used to define the structural\n representation of an arbitrary Haskell datatype. The first argument is the\n embedding-projection pair, necessary for establishing the isomorphism\n between datatype and representation. The second argument is the\n run-time representation using the methods of \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "rtype",
          "package": "emgm",
          "signature": "EP b a -\u003e g a -\u003e g b",
          "source": "src/Generics-EMGM-Base.html#rtype",
          "type": "method"
        },
        "index": {
          "description": "Case for datatypes This method is used to define the structural representation of an arbitrary Haskell datatype The first argument is the embedding-projection pair necessary for establishing the isomorphism between datatype and representation The second argument is the run-time representation using the methods of Generic",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rtype",
          "normalized": "EP a b-\u003ec b-\u003ec a",
          "package": "emgm",
          "signature": "EP b a-\u003eg a-\u003eg b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ertype\u003c/a\u003e\u003c/code\u003e. This case is the primary difference that separates\n \u003ccode\u003e\u003ca\u003eGeneric2\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e. Since we have two generic type parameters, we\n need to have two \u003ccode\u003e\u003ca\u003eEP\u003c/a\u003e\u003c/code\u003e values. Each translates between the Haskell type and\n its generic representation.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "rtype2",
          "package": "emgm",
          "signature": "EP a2 a1 -\u003e EP b2 b1 -\u003e g a1 b1 -\u003e g a2 b2",
          "source": "src/Generics-EMGM-Base.html#rtype2",
          "type": "method"
        },
        "index": {
          "description": "See rtype This case is the primary difference that separates Generic2 from Generic Since we have two generic type parameters we need to have two EP values Each translates between the Haskell type and its generic representation",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rtype2",
          "normalized": "EP a a-\u003eEP b b-\u003ec a b-\u003ec a b",
          "package": "emgm",
          "signature": "EP a a-\u003eEP b b-\u003eg a b-\u003eg a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rtype2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ertype\u003c/a\u003e\u003c/code\u003e. This case is the primary difference that separates\n \u003ccode\u003e\u003ca\u003eGeneric3\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e. Since we have three generic type parameters, we\n need three \u003ccode\u003e\u003ca\u003eEP\u003c/a\u003e\u003c/code\u003e values. Each translates between the Haskell type and its\n generic representation.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "rtype3",
          "package": "emgm",
          "signature": "EP a2 a1 -\u003e EP b2 b1 -\u003e EP c2 c1 -\u003e g a1 b1 c1 -\u003e g a2 b2 c2",
          "source": "src/Generics-EMGM-Base.html#rtype3",
          "type": "method"
        },
        "index": {
          "description": "See rtype This case is the primary difference that separates Generic3 from Generic Since we have three generic type parameters we need three EP values Each translates between the Haskell type and its generic representation",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "rtype3",
          "normalized": "EP a a-\u003eEP b b-\u003eEP c c-\u003ed a b c-\u003ed a b c",
          "package": "emgm",
          "signature": "EP a a-\u003eEP b b-\u003eEP c c-\u003eg a b c-\u003eg a b c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:rtype3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the structural representation type \u003ccode\u003e\u003ca\u003eUnit\u003c/a\u003e\u003c/code\u003e. Represents a\n constructor with no arguments.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Base",
          "name": "runit",
          "package": "emgm",
          "signature": "g Unit",
          "source": "src/Generics-EMGM-Base.html#runit",
          "type": "method"
        },
        "index": {
          "description": "Case for the structural representation type Unit Represents constructor with no arguments",
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "runit",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:runit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "runit2",
          "package": "emgm",
          "signature": "g Unit Unit",
          "source": "src/Generics-EMGM-Base.html#runit2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "runit2",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:runit2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Base",
          "name": "runit3",
          "package": "emgm",
          "signature": "g Unit Unit Unit",
          "source": "src/Generics-EMGM-Base.html#runit3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM Base",
          "module": "Generics.EMGM.Base",
          "name": "runit3",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Base.html#v:runit3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic representation and instances for \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Data.Bool",
          "name": "Bool",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Bool.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic representation and instances for Bool",
          "hierarchy": "Generics EMGM Data Bool",
          "module": "Generics.EMGM.Data.Bool",
          "name": "Bool",
          "package": "emgm",
          "partial": "Bool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Bool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Data.Bool",
          "name": "BoolS",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Bool.html#BoolS",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics EMGM Data Bool",
          "module": "Generics.EMGM.Data.Bool",
          "name": "BoolS",
          "package": "emgm",
          "partial": "Bool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Bool.html#t:BoolS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003ebifrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Bool",
          "name": "bifrep2Bool",
          "package": "emgm",
          "signature": "g Bool Bool",
          "source": "src/Generics-EMGM-Data-Bool.html#bifrep2Bool",
          "type": "function"
        },
        "index": {
          "description": "Representation of Bool for bifrep2",
          "hierarchy": "Generics EMGM Data Bool",
          "module": "Generics.EMGM.Data.Bool",
          "name": "bifrep2Bool",
          "package": "emgm",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Bool.html#v:bifrep2Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Bool",
          "name": "conFalse",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-Bool.html#conFalse",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for False",
          "hierarchy": "Generics EMGM Data Bool",
          "module": "Generics.EMGM.Data.Bool",
          "name": "conFalse",
          "package": "emgm",
          "partial": "False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Bool.html#v:conFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Bool",
          "name": "conTrue",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-Bool.html#conTrue",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for True",
          "hierarchy": "Generics EMGM Data Bool",
          "module": "Generics.EMGM.Data.Bool",
          "name": "conTrue",
          "package": "emgm",
          "partial": "True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Bool.html#v:conTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Bool",
          "name": "frep2Bool",
          "package": "emgm",
          "signature": "g Bool Bool",
          "source": "src/Generics-EMGM-Data-Bool.html#frep2Bool",
          "type": "function"
        },
        "index": {
          "description": "Representation of Bool for frep2",
          "hierarchy": "Generics EMGM Data Bool",
          "module": "Generics.EMGM.Data.Bool",
          "name": "frep2Bool",
          "package": "emgm",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Bool.html#v:frep2Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Bool",
          "name": "frep3Bool",
          "package": "emgm",
          "signature": "g Bool Bool Bool",
          "source": "src/Generics-EMGM-Data-Bool.html#frep3Bool",
          "type": "function"
        },
        "index": {
          "description": "Representation of Bool for frep3",
          "hierarchy": "Generics EMGM Data Bool",
          "module": "Generics.EMGM.Data.Bool",
          "name": "frep3Bool",
          "package": "emgm",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Bool.html#v:frep3Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Bool",
          "name": "frepBool",
          "package": "emgm",
          "signature": "g Bool",
          "source": "src/Generics-EMGM-Data-Bool.html#frepBool",
          "type": "function"
        },
        "index": {
          "description": "Representation of Bool for frep",
          "hierarchy": "Generics EMGM Data Bool",
          "module": "Generics.EMGM.Data.Bool",
          "name": "frepBool",
          "package": "emgm",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Bool.html#v:frepBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Bool",
          "name": "repBool",
          "package": "emgm",
          "signature": "g Bool",
          "source": "src/Generics-EMGM-Data-Bool.html#repBool",
          "type": "function"
        },
        "index": {
          "description": "Representation of Bool for rep",
          "hierarchy": "Generics EMGM Data Bool",
          "module": "Generics.EMGM.Data.Bool",
          "name": "repBool",
          "package": "emgm",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Bool.html#v:repBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic representation and instances for \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Data.Either",
          "name": "Either",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Either.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic representation and instances for Either",
          "hierarchy": "Generics EMGM Data Either",
          "module": "Generics.EMGM.Data.Either",
          "name": "Either",
          "package": "emgm",
          "partial": "Either",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Either.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Data.Either",
          "name": "EitherS",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Either.html#EitherS",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics EMGM Data Either",
          "module": "Generics.EMGM.Data.Either",
          "name": "EitherS",
          "package": "emgm",
          "partial": "Either",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Either.html#t:EitherS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003ebifrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Either",
          "name": "bifrep2Either",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g (Either a1 b1) (Either a2 b2)",
          "source": "src/Generics-EMGM-Data-Either.html#bifrep2Either",
          "type": "function"
        },
        "index": {
          "description": "Representation of Either for bifrep2",
          "hierarchy": "Generics EMGM Data Either",
          "module": "Generics.EMGM.Data.Either",
          "name": "bifrep2Either",
          "normalized": "a b b-\u003ea c c-\u003ea(Either b c)(Either b c)",
          "package": "emgm",
          "partial": "Either",
          "signature": "g a a-\u003eg b b-\u003eg(Either a b)(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Either.html#v:bifrep2Either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Either",
          "name": "conLeft",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-Either.html#conLeft",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for Left",
          "hierarchy": "Generics EMGM Data Either",
          "module": "Generics.EMGM.Data.Either",
          "name": "conLeft",
          "package": "emgm",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Either.html#v:conLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Either",
          "name": "conRight",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-Either.html#conRight",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for Right",
          "hierarchy": "Generics EMGM Data Either",
          "module": "Generics.EMGM.Data.Either",
          "name": "conRight",
          "package": "emgm",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Either.html#v:conRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Either",
          "name": "frep2Either",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g (Either a1 b1) (Either a2 b2)",
          "source": "src/Generics-EMGM-Data-Either.html#frep2Either",
          "type": "function"
        },
        "index": {
          "description": "Representation of Either for frep2",
          "hierarchy": "Generics EMGM Data Either",
          "module": "Generics.EMGM.Data.Either",
          "name": "frep2Either",
          "normalized": "a b b-\u003ea c c-\u003ea(Either b c)(Either b c)",
          "package": "emgm",
          "partial": "Either",
          "signature": "g a a-\u003eg b b-\u003eg(Either a b)(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Either.html#v:frep2Either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Either",
          "name": "frep3Either",
          "package": "emgm",
          "signature": "g a1 a2 a3 -\u003e g b1 b2 b3 -\u003e g (Either a1 b1) (Either a2 b2) (Either a3 b3)",
          "source": "src/Generics-EMGM-Data-Either.html#frep3Either",
          "type": "function"
        },
        "index": {
          "description": "Representation of Either for frep3",
          "hierarchy": "Generics EMGM Data Either",
          "module": "Generics.EMGM.Data.Either",
          "name": "frep3Either",
          "normalized": "a b b b-\u003ea c c c-\u003ea(Either b c)(Either b c)(Either b c)",
          "package": "emgm",
          "partial": "Either",
          "signature": "g a a a-\u003eg b b b-\u003eg(Either a b)(Either a b)(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Either.html#v:frep3Either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Either",
          "name": "frepEither",
          "package": "emgm",
          "signature": "g a -\u003e g b -\u003e g (Either a b)",
          "source": "src/Generics-EMGM-Data-Either.html#frepEither",
          "type": "function"
        },
        "index": {
          "description": "Representation of Either for frep",
          "hierarchy": "Generics EMGM Data Either",
          "module": "Generics.EMGM.Data.Either",
          "name": "frepEither",
          "normalized": "a b-\u003ea c-\u003ea(Either b c)",
          "package": "emgm",
          "partial": "Either",
          "signature": "g a-\u003eg b-\u003eg(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Either.html#v:frepEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Either",
          "name": "repEither",
          "package": "emgm",
          "signature": "g (Either a b)",
          "source": "src/Generics-EMGM-Data-Either.html#repEither",
          "type": "function"
        },
        "index": {
          "description": "Representation of Either for rep",
          "hierarchy": "Generics EMGM Data Either",
          "module": "Generics.EMGM.Data.Either",
          "name": "repEither",
          "package": "emgm",
          "partial": "Either",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Either.html#v:repEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic representation and instances for lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Data.List",
          "name": "List",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-List.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic representation and instances for lists",
          "hierarchy": "Generics EMGM Data List",
          "module": "Generics.EMGM.Data.List",
          "name": "List",
          "package": "emgm",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Data.List",
          "name": "ListS",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-List.html#ListS",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics EMGM Data List",
          "module": "Generics.EMGM.Data.List",
          "name": "ListS",
          "package": "emgm",
          "partial": "List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-List.html#t:ListS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of lists for \u003ccode\u003e\u003ca\u003ebifrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.List",
          "name": "bifrep2List",
          "package": "emgm",
          "signature": "g a b -\u003e g [a] [b]",
          "source": "src/Generics-EMGM-Data-List.html#bifrep2List",
          "type": "function"
        },
        "index": {
          "description": "Representation of lists for bifrep2",
          "hierarchy": "Generics EMGM Data List",
          "module": "Generics.EMGM.Data.List",
          "name": "bifrep2List",
          "normalized": "a b c-\u003ea[b][c]",
          "package": "emgm",
          "partial": "List",
          "signature": "g a b-\u003eg[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-List.html#v:bifrep2List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for ''cons'': \u003ccode\u003e(:)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.List",
          "name": "conCons",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-List.html#conCons",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for cons",
          "hierarchy": "Generics EMGM Data List",
          "module": "Generics.EMGM.Data.List",
          "name": "conCons",
          "package": "emgm",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-List.html#v:conCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for ''nil'': \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.List",
          "name": "conNil",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-List.html#conNil",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for nil",
          "hierarchy": "Generics EMGM Data List",
          "module": "Generics.EMGM.Data.List",
          "name": "conNil",
          "package": "emgm",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-List.html#v:conNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of lists for \u003ccode\u003e\u003ca\u003efrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.List",
          "name": "frep2List",
          "package": "emgm",
          "signature": "g a b -\u003e g [a] [b]",
          "source": "src/Generics-EMGM-Data-List.html#frep2List",
          "type": "function"
        },
        "index": {
          "description": "Representation of lists for frep2",
          "hierarchy": "Generics EMGM Data List",
          "module": "Generics.EMGM.Data.List",
          "name": "frep2List",
          "normalized": "a b c-\u003ea[b][c]",
          "package": "emgm",
          "partial": "List",
          "signature": "g a b-\u003eg[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-List.html#v:frep2List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of lists for \u003ccode\u003e\u003ca\u003efrep3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.List",
          "name": "frep3List",
          "package": "emgm",
          "signature": "g a b c -\u003e g [a] [b] [c]",
          "source": "src/Generics-EMGM-Data-List.html#frep3List",
          "type": "function"
        },
        "index": {
          "description": "Representation of lists for frep3",
          "hierarchy": "Generics EMGM Data List",
          "module": "Generics.EMGM.Data.List",
          "name": "frep3List",
          "normalized": "a b c d-\u003ea[b][c][d]",
          "package": "emgm",
          "partial": "List",
          "signature": "g a b c-\u003eg[a][b][c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-List.html#v:frep3List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of lists for \u003ccode\u003e\u003ca\u003efrep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.List",
          "name": "frepList",
          "package": "emgm",
          "signature": "g a -\u003e g [a]",
          "source": "src/Generics-EMGM-Data-List.html#frepList",
          "type": "function"
        },
        "index": {
          "description": "Representation of lists for frep",
          "hierarchy": "Generics EMGM Data List",
          "module": "Generics.EMGM.Data.List",
          "name": "frepList",
          "normalized": "a b-\u003ea[b]",
          "package": "emgm",
          "partial": "List",
          "signature": "g a-\u003eg[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-List.html#v:frepList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of lists for \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.List",
          "name": "repList",
          "package": "emgm",
          "signature": "g [a]",
          "source": "src/Generics-EMGM-Data-List.html#repList",
          "type": "function"
        },
        "index": {
          "description": "Representation of lists for rep",
          "hierarchy": "Generics EMGM Data List",
          "module": "Generics.EMGM.Data.List",
          "name": "repList",
          "normalized": "a[b]",
          "package": "emgm",
          "partial": "List",
          "signature": "g[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-List.html#v:repList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic representation and instances for \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "Maybe",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Maybe.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic representation and instances for Maybe",
          "hierarchy": "Generics EMGM Data Maybe",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "Maybe",
          "package": "emgm",
          "partial": "Maybe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Maybe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Data.Maybe",
          "name": "MaybeS",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Maybe.html#MaybeS",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics EMGM Data Maybe",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "MaybeS",
          "package": "emgm",
          "partial": "Maybe",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Maybe.html#t:MaybeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003ebifrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "bifrep2Maybe",
          "package": "emgm",
          "signature": "g a b -\u003e g (Maybe a) (Maybe b)",
          "source": "src/Generics-EMGM-Data-Maybe.html#bifrep2Maybe",
          "type": "function"
        },
        "index": {
          "description": "Representation of Maybe for bifrep2",
          "hierarchy": "Generics EMGM Data Maybe",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "bifrep2Maybe",
          "normalized": "a b c-\u003ea(Maybe b)(Maybe c)",
          "package": "emgm",
          "partial": "Maybe",
          "signature": "g a b-\u003eg(Maybe a)(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Maybe.html#v:bifrep2Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "conJust",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-Maybe.html#conJust",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for Just",
          "hierarchy": "Generics EMGM Data Maybe",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "conJust",
          "package": "emgm",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Maybe.html#v:conJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "conNothing",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-Maybe.html#conNothing",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for Nothing",
          "hierarchy": "Generics EMGM Data Maybe",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "conNothing",
          "package": "emgm",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Maybe.html#v:conNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "frep2Maybe",
          "package": "emgm",
          "signature": "g a b -\u003e g (Maybe a) (Maybe b)",
          "source": "src/Generics-EMGM-Data-Maybe.html#frep2Maybe",
          "type": "function"
        },
        "index": {
          "description": "Representation of Maybe for frep2",
          "hierarchy": "Generics EMGM Data Maybe",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "frep2Maybe",
          "normalized": "a b c-\u003ea(Maybe b)(Maybe c)",
          "package": "emgm",
          "partial": "Maybe",
          "signature": "g a b-\u003eg(Maybe a)(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Maybe.html#v:frep2Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "frep3Maybe",
          "package": "emgm",
          "signature": "g a b c -\u003e g (Maybe a) (Maybe b) (Maybe c)",
          "source": "src/Generics-EMGM-Data-Maybe.html#frep3Maybe",
          "type": "function"
        },
        "index": {
          "description": "Representation of Maybe for frep3",
          "hierarchy": "Generics EMGM Data Maybe",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "frep3Maybe",
          "normalized": "a b c d-\u003ea(Maybe b)(Maybe c)(Maybe d)",
          "package": "emgm",
          "partial": "Maybe",
          "signature": "g a b c-\u003eg(Maybe a)(Maybe b)(Maybe c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Maybe.html#v:frep3Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "frepMaybe",
          "package": "emgm",
          "signature": "g a -\u003e g (Maybe a)",
          "source": "src/Generics-EMGM-Data-Maybe.html#frepMaybe",
          "type": "function"
        },
        "index": {
          "description": "Representation of Maybe for frep",
          "hierarchy": "Generics EMGM Data Maybe",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "frepMaybe",
          "normalized": "a b-\u003ea(Maybe b)",
          "package": "emgm",
          "partial": "Maybe",
          "signature": "g a-\u003eg(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Maybe.html#v:frepMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "repMaybe",
          "package": "emgm",
          "signature": "g (Maybe a)",
          "source": "src/Generics-EMGM-Data-Maybe.html#repMaybe",
          "type": "function"
        },
        "index": {
          "description": "Representation of Maybe for rep",
          "hierarchy": "Generics EMGM Data Maybe",
          "module": "Generics.EMGM.Data.Maybe",
          "name": "repMaybe",
          "package": "emgm",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Maybe.html#v:repMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic representation and instances for \u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "Ratio",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Ratio.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic representation and instances for Ratio",
          "hierarchy": "Generics EMGM Data Ratio",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "Ratio",
          "package": "emgm",
          "partial": "Ratio",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Ratio.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Data.Ratio",
          "name": "RatioS",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Ratio.html#RatioS",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics EMGM Data Ratio",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "RatioS",
          "package": "emgm",
          "partial": "Ratio",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Ratio.html#t:RatioS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003ebifrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "bifrep2Ratio",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g (Ratio a1) (Ratio a2)",
          "source": "src/Generics-EMGM-Data-Ratio.html#bifrep2Ratio",
          "type": "function"
        },
        "index": {
          "description": "Representation of Ratio for bifrep2",
          "hierarchy": "Generics EMGM Data Ratio",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "bifrep2Ratio",
          "normalized": "a b b-\u003ea(Ratio b)(Ratio b)",
          "package": "emgm",
          "partial": "Ratio",
          "signature": "g a a-\u003eg(Ratio a)(Ratio a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Ratio.html#v:bifrep2Ratio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for \u003ccode\u003e\u003ca\u003e%\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "conRatio",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-Ratio.html#conRatio",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for",
          "hierarchy": "Generics EMGM Data Ratio",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "conRatio",
          "package": "emgm",
          "partial": "Ratio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Ratio.html#v:conRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "frep2Ratio",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g (Ratio a1) (Ratio a2)",
          "source": "src/Generics-EMGM-Data-Ratio.html#frep2Ratio",
          "type": "function"
        },
        "index": {
          "description": "Representation of Ratio for frep2",
          "hierarchy": "Generics EMGM Data Ratio",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "frep2Ratio",
          "normalized": "a b b-\u003ea(Ratio b)(Ratio b)",
          "package": "emgm",
          "partial": "Ratio",
          "signature": "g a a-\u003eg(Ratio a)(Ratio a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Ratio.html#v:frep2Ratio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "frep3Ratio",
          "package": "emgm",
          "signature": "g a1 a2 a3 -\u003e g (Ratio a1) (Ratio a2) (Ratio a3)",
          "source": "src/Generics-EMGM-Data-Ratio.html#frep3Ratio",
          "type": "function"
        },
        "index": {
          "description": "Representation of Ratio for frep3",
          "hierarchy": "Generics EMGM Data Ratio",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "frep3Ratio",
          "normalized": "a b b b-\u003ea(Ratio b)(Ratio b)(Ratio b)",
          "package": "emgm",
          "partial": "Ratio",
          "signature": "g a a a-\u003eg(Ratio a)(Ratio a)(Ratio a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Ratio.html#v:frep3Ratio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "frepRatio",
          "package": "emgm",
          "signature": "g a -\u003e g (Ratio a)",
          "source": "src/Generics-EMGM-Data-Ratio.html#frepRatio",
          "type": "function"
        },
        "index": {
          "description": "Representation of Ratio for frep",
          "hierarchy": "Generics EMGM Data Ratio",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "frepRatio",
          "normalized": "a b-\u003ea(Ratio b)",
          "package": "emgm",
          "partial": "Ratio",
          "signature": "g a-\u003eg(Ratio a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Ratio.html#v:frepRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "repRatio",
          "package": "emgm",
          "signature": "g (Ratio a)",
          "source": "src/Generics-EMGM-Data-Ratio.html#repRatio",
          "type": "function"
        },
        "index": {
          "description": "Representation of Ratio for rep",
          "hierarchy": "Generics EMGM Data Ratio",
          "module": "Generics.EMGM.Data.Ratio",
          "name": "repRatio",
          "package": "emgm",
          "partial": "Ratio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Ratio.html#v:repRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic representation and instances for tuples of arity 0\n (''unit'') and 2 to 7.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Tuple.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic representation and instances for tuples of arity unit and to",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple",
          "package": "emgm",
          "partial": "Tuple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple0S",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Tuple.html#Tuple0S",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple0S",
          "package": "emgm",
          "partial": "Tuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#t:Tuple0S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple2S",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Tuple.html#Tuple2S",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple2S",
          "package": "emgm",
          "partial": "Tuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#t:Tuple2S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple3S",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Tuple.html#Tuple3S",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple3S",
          "package": "emgm",
          "partial": "Tuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#t:Tuple3S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple4S",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Tuple.html#Tuple4S",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple4S",
          "package": "emgm",
          "partial": "Tuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#t:Tuple4S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple5S",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Tuple.html#Tuple5S",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple5S",
          "package": "emgm",
          "partial": "Tuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#t:Tuple5S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple6S",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Tuple.html#Tuple6S",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple6S",
          "package": "emgm",
          "partial": "Tuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#t:Tuple6S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple7S",
          "package": "emgm",
          "source": "src/Generics-EMGM-Data-Tuple.html#Tuple7S",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "Tuple7S",
          "package": "emgm",
          "partial": "Tuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#t:Tuple7S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e()\u003c/code\u003e for \u003ccode\u003e\u003ca\u003ebifrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "bifrep2Tuple0",
          "package": "emgm",
          "signature": "g () ()",
          "source": "src/Generics-EMGM-Data-Tuple.html#bifrep2Tuple0",
          "type": "function"
        },
        "index": {
          "description": "Representation of for bifrep2",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "bifrep2Tuple0",
          "normalized": "a()()",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:bifrep2Tuple0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003ebifrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "bifrep2Tuple2",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g (a1, b1) (a2, b2)",
          "source": "src/Generics-EMGM-Data-Tuple.html#bifrep2Tuple2",
          "type": "function"
        },
        "index": {
          "description": "Representation of for bifrep2",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "bifrep2Tuple2",
          "normalized": "a b b-\u003ea c c-\u003ea(b,c)(b,c)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a-\u003eg b b-\u003eg(a,b)(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:bifrep2Tuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003ebifrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "bifrep2Tuple3",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g c1 c2 -\u003e g (a1, b1, c1) (a2, b2, c2)",
          "source": "src/Generics-EMGM-Data-Tuple.html#bifrep2Tuple3",
          "type": "function"
        },
        "index": {
          "description": "Representation of for bifrep2",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "bifrep2Tuple3",
          "normalized": "a b b-\u003ea c c-\u003ea d d-\u003ea(b,c,d)(b,c,d)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a-\u003eg b b-\u003eg c c-\u003eg(a,b,c)(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:bifrep2Tuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003ebifrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "bifrep2Tuple4",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g c1 c2 -\u003e g d1 d2 -\u003e g (a1, b1, c1, d1) (a2, b2, c2, d2)",
          "source": "src/Generics-EMGM-Data-Tuple.html#bifrep2Tuple4",
          "type": "function"
        },
        "index": {
          "description": "Representation of for bifrep2",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "bifrep2Tuple4",
          "normalized": "a b b-\u003ea c c-\u003ea d d-\u003ea e e-\u003ea(b,c,d,e)(b,c,d,e)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a-\u003eg b b-\u003eg c c-\u003eg d d-\u003eg(a,b,c,d)(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:bifrep2Tuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,)\u003c/code\u003e for \u003ccode\u003ebfrep2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "bifrep2Tuple5",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g c1 c2 -\u003e g d1 d2 -\u003e g e1 e2 -\u003e g (a1, b1, c1, d1, e1) (a2, b2, c2, d2, e2)",
          "source": "src/Generics-EMGM-Data-Tuple.html#bifrep2Tuple5",
          "type": "function"
        },
        "index": {
          "description": "Representation of for bfrep2",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "bifrep2Tuple5",
          "normalized": "a b b-\u003ea c c-\u003ea d d-\u003ea e e-\u003ea f f-\u003ea(b,c,d,e,f)(b,c,d,e,f)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a-\u003eg b b-\u003eg c c-\u003eg d d-\u003eg e e-\u003eg(a,b,c,d,e)(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:bifrep2Tuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003ebifrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "bifrep2Tuple6",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g c1 c2 -\u003e g d1 d2 -\u003e g e1 e2 -\u003e g f1 f2 -\u003e g (a1, b1, c1, d1, e1, f1) (a2, b2, c2, d2, e2, f2)",
          "source": "src/Generics-EMGM-Data-Tuple.html#bifrep2Tuple6",
          "type": "function"
        },
        "index": {
          "description": "Representation of for bifrep2",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "bifrep2Tuple6",
          "normalized": "a b b-\u003ea c c-\u003ea d d-\u003ea e e-\u003ea f f-\u003ea g g-\u003ea(b,c,d,e,f,g)(b,c,d,e,f,g)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a-\u003eg b b-\u003eg c c-\u003eg d d-\u003eg e e-\u003eg f f-\u003eg(a,b,c,d,e,f)(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:bifrep2Tuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003ebifrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "bifrep2Tuple7",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g c1 c2 -\u003e g d1 d2 -\u003e g e1 e2 -\u003e g f1 f2 -\u003e g h1 h2 -\u003e g (a1, b1, c1, d1, e1, f1, h1) (a2, b2, c2, d2, e2, f2, h2)",
          "source": "src/Generics-EMGM-Data-Tuple.html#bifrep2Tuple7",
          "type": "function"
        },
        "index": {
          "description": "Representation of for bifrep2",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "bifrep2Tuple7",
          "normalized": "a b b-\u003ea c c-\u003ea d d-\u003ea e e-\u003ea f f-\u003ea g g-\u003ea h h-\u003ea(b,c,d,e,f,g,h)(b,c,d,e,f,g,h)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a-\u003eg b b-\u003eg c c-\u003eg d d-\u003eg e e-\u003eg f f-\u003eg h h-\u003eg(a,b,c,d,e,f,h)(a,b,c,d,e,f,h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:bifrep2Tuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "conTuple0",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-Tuple.html#conTuple0",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "conTuple0",
          "package": "emgm",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:conTuple0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for \u003ccode\u003e(,)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "conTuple2",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-Tuple.html#conTuple2",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "conTuple2",
          "package": "emgm",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:conTuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for \u003ccode\u003e(,,)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "conTuple3",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-Tuple.html#conTuple3",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "conTuple3",
          "package": "emgm",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:conTuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for \u003ccode\u003e(,,,)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "conTuple4",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-Tuple.html#conTuple4",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "conTuple4",
          "package": "emgm",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:conTuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for \u003ccode\u003e(,,,,)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "conTuple5",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-Tuple.html#conTuple5",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "conTuple5",
          "package": "emgm",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:conTuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for \u003ccode\u003e(,,,,,)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "conTuple6",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-Tuple.html#conTuple6",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "conTuple6",
          "package": "emgm",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:conTuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor description for \u003ccode\u003e(,,,,,,)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "conTuple7",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Data-Tuple.html#conTuple7",
          "type": "function"
        },
        "index": {
          "description": "Constructor description for",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "conTuple7",
          "package": "emgm",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:conTuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e()\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep2Tuple0",
          "package": "emgm",
          "signature": "g () ()",
          "source": "src/Generics-EMGM-Data-Tuple.html#frep2Tuple0",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep2",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep2Tuple0",
          "normalized": "a()()",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frep2Tuple0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep2Tuple2",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g (a1, b1) (a2, b2)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frep2Tuple2",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep2",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep2Tuple2",
          "normalized": "a b b-\u003ea c c-\u003ea(b,c)(b,c)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a-\u003eg b b-\u003eg(a,b)(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frep2Tuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep2Tuple3",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g c1 c2 -\u003e g (a1, b1, c1) (a2, b2, c2)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frep2Tuple3",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep2",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep2Tuple3",
          "normalized": "a b b-\u003ea c c-\u003ea d d-\u003ea(b,c,d)(b,c,d)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a-\u003eg b b-\u003eg c c-\u003eg(a,b,c)(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frep2Tuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep2Tuple4",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g c1 c2 -\u003e g d1 d2 -\u003e g (a1, b1, c1, d1) (a2, b2, c2, d2)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frep2Tuple4",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep2",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep2Tuple4",
          "normalized": "a b b-\u003ea c c-\u003ea d d-\u003ea e e-\u003ea(b,c,d,e)(b,c,d,e)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a-\u003eg b b-\u003eg c c-\u003eg d d-\u003eg(a,b,c,d)(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frep2Tuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep2Tuple5",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g c1 c2 -\u003e g d1 d2 -\u003e g e1 e2 -\u003e g (a1, b1, c1, d1, e1) (a2, b2, c2, d2, e2)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frep2Tuple5",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep2",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep2Tuple5",
          "normalized": "a b b-\u003ea c c-\u003ea d d-\u003ea e e-\u003ea f f-\u003ea(b,c,d,e,f)(b,c,d,e,f)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a-\u003eg b b-\u003eg c c-\u003eg d d-\u003eg e e-\u003eg(a,b,c,d,e)(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frep2Tuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep2Tuple6",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g c1 c2 -\u003e g d1 d2 -\u003e g e1 e2 -\u003e g f1 f2 -\u003e g (a1, b1, c1, d1, e1, f1) (a2, b2, c2, d2, e2, f2)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frep2Tuple6",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep2",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep2Tuple6",
          "normalized": "a b b-\u003ea c c-\u003ea d d-\u003ea e e-\u003ea f f-\u003ea g g-\u003ea(b,c,d,e,f,g)(b,c,d,e,f,g)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a-\u003eg b b-\u003eg c c-\u003eg d d-\u003eg e e-\u003eg f f-\u003eg(a,b,c,d,e,f)(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frep2Tuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep2Tuple7",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g c1 c2 -\u003e g d1 d2 -\u003e g e1 e2 -\u003e g f1 f2 -\u003e g h1 h2 -\u003e g (a1, b1, c1, d1, e1, f1, h1) (a2, b2, c2, d2, e2, f2, h2)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frep2Tuple7",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep2",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep2Tuple7",
          "normalized": "a b b-\u003ea c c-\u003ea d d-\u003ea e e-\u003ea f f-\u003ea g g-\u003ea h h-\u003ea(b,c,d,e,f,g,h)(b,c,d,e,f,g,h)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a-\u003eg b b-\u003eg c c-\u003eg d d-\u003eg e e-\u003eg f f-\u003eg h h-\u003eg(a,b,c,d,e,f,h)(a,b,c,d,e,f,h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frep2Tuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e()\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep3Tuple0",
          "package": "emgm",
          "signature": "g () () ()",
          "source": "src/Generics-EMGM-Data-Tuple.html#frep3Tuple0",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep3",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep3Tuple0",
          "normalized": "a()()()",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g()()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frep3Tuple0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep3Tuple2",
          "package": "emgm",
          "signature": "g a1 a2 a3 -\u003e g b1 b2 b3 -\u003e g (a1, b1) (a2, b2) (a3, b3)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frep3Tuple2",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep3",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep3Tuple2",
          "normalized": "a b b b-\u003ea c c c-\u003ea(b,c)(b,c)(b,c)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a a-\u003eg b b b-\u003eg(a,b)(a,b)(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frep3Tuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep3Tuple3",
          "package": "emgm",
          "signature": "g a1 a2 a3 -\u003e g b1 b2 b3 -\u003e g c1 c2 c3 -\u003e g (a1, b1, c1) (a2, b2, c2) (a3, b3, c3)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frep3Tuple3",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep3",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep3Tuple3",
          "normalized": "a b b b-\u003ea c c c-\u003ea d d d-\u003ea(b,c,d)(b,c,d)(b,c,d)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a a-\u003eg b b b-\u003eg c c c-\u003eg(a,b,c)(a,b,c)(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frep3Tuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep3Tuple4",
          "package": "emgm",
          "signature": "g a1 a2 a3 -\u003e g b1 b2 b3 -\u003e g c1 c2 c3 -\u003e g d1 d2 d3 -\u003e g (a1, b1, c1, d1) (a2, b2, c2, d2) (a3, b3, c3, d3)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frep3Tuple4",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep3",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep3Tuple4",
          "normalized": "a b b b-\u003ea c c c-\u003ea d d d-\u003ea e e e-\u003ea(b,c,d,e)(b,c,d,e)(b,c,d,e)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a a-\u003eg b b b-\u003eg c c c-\u003eg d d d-\u003eg(a,b,c,d)(a,b,c,d)(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frep3Tuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep3Tuple5",
          "package": "emgm",
          "signature": "g a1 a2 a3 -\u003e g b1 b2 b3 -\u003e g c1 c2 c3 -\u003e g d1 d2 d3 -\u003e g e1 e2 e3 -\u003e g (a1, b1, c1, d1, e1) (a2, b2, c2, d2, e2) (a3, b3, c3, d3, e3)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frep3Tuple5",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep3",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep3Tuple5",
          "normalized": "a b b b-\u003ea c c c-\u003ea d d d-\u003ea e e e-\u003ea f f f-\u003ea(b,c,d,e,f)(b,c,d,e,f)(b,c,d,e,f)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a a-\u003eg b b b-\u003eg c c c-\u003eg d d d-\u003eg e e e-\u003eg(a,b,c,d,e)(a,b,c,d,e)(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frep3Tuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep3Tuple6",
          "package": "emgm",
          "signature": "g a1 a2 a3 -\u003e g b1 b2 b3 -\u003e g c1 c2 c3 -\u003e g d1 d2 d3 -\u003e g e1 e2 e3 -\u003e g f1 f2 f3 -\u003e g (a1, b1, c1, d1, e1, f1) (a2, b2, c2, d2, e2, f2) (a3, b3, c3, d3, e3, f3)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frep3Tuple6",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep3",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep3Tuple6",
          "normalized": "a b b b-\u003ea c c c-\u003ea d d d-\u003ea e e e-\u003ea f f f-\u003ea g g g-\u003ea(b,c,d,e,f,g)(b,c,d,e,f,g)(b,c,d,e,f,g)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a a-\u003eg b b b-\u003eg c c c-\u003eg d d d-\u003eg e e e-\u003eg f f f-\u003eg(a,b,c,d,e,f)(a,b,c,d,e,f)(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frep3Tuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep3Tuple7",
          "package": "emgm",
          "signature": "g a1 a2 a3 -\u003e g b1 b2 b3 -\u003e g c1 c2 c3 -\u003e g d1 d2 d3 -\u003e g e1 e2 e3 -\u003e g f1 f2 f3 -\u003e g h1 h2 h3 -\u003e g (a1, b1, c1, d1, e1, f1, h1) (a2, b2, c2, d2, e2, f2, h2) (a3, b3, c3, d3, e3, f3, h3)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frep3Tuple7",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep3",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frep3Tuple7",
          "normalized": "a b b b-\u003ea c c c-\u003ea d d d-\u003ea e e e-\u003ea f f f-\u003ea g g g-\u003ea h h h-\u003ea(b,c,d,e,f,g,h)(b,c,d,e,f,g,h)(b,c,d,e,f,g,h)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a a a-\u003eg b b b-\u003eg c c c-\u003eg d d d-\u003eg e e e-\u003eg f f f-\u003eg h h h-\u003eg(a,b,c,d,e,f,h)(a,b,c,d,e,f,h)(a,b,c,d,e,f,h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frep3Tuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e()\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frepTuple0",
          "package": "emgm",
          "signature": "g ()",
          "source": "src/Generics-EMGM-Data-Tuple.html#frepTuple0",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frepTuple0",
          "normalized": "a()",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frepTuple0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frepTuple2",
          "package": "emgm",
          "signature": "g a -\u003e g b -\u003e g (a, b)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frepTuple2",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frepTuple2",
          "normalized": "a b-\u003ea c-\u003ea(b,c)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a-\u003eg b-\u003eg(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frepTuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frepTuple3",
          "package": "emgm",
          "signature": "g a -\u003e g b -\u003e g c -\u003e g (a, b, c)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frepTuple3",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frepTuple3",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea(b,c,d)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a-\u003eg b-\u003eg c-\u003eg(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frepTuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frepTuple4",
          "package": "emgm",
          "signature": "g a -\u003e g b -\u003e g c -\u003e g d -\u003e g (a, b, c, d)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frepTuple4",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frepTuple4",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea e-\u003ea(b,c,d,e)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a-\u003eg b-\u003eg c-\u003eg d-\u003eg(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frepTuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frepTuple5",
          "package": "emgm",
          "signature": "g a -\u003e g b -\u003e g c -\u003e g d -\u003e g e -\u003e g (a, b, c, d, e)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frepTuple5",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frepTuple5",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea e-\u003ea f-\u003ea(b,c,d,e,f)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a-\u003eg b-\u003eg c-\u003eg d-\u003eg e-\u003eg(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frepTuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frepTuple6",
          "package": "emgm",
          "signature": "g a -\u003e g b -\u003e g c -\u003e g d -\u003e g e -\u003e g f -\u003e g (a, b, c, d, e, f)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frepTuple6",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frepTuple6",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea e-\u003ea f-\u003ea g-\u003ea(b,c,d,e,f,g)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a-\u003eg b-\u003eg c-\u003eg d-\u003eg e-\u003eg f-\u003eg(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frepTuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003efrep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frepTuple7",
          "package": "emgm",
          "signature": "g a -\u003e g b -\u003e g c -\u003e g d -\u003e g e -\u003e g f -\u003e g h -\u003e g (a, b, c, d, e, f, h)",
          "source": "src/Generics-EMGM-Data-Tuple.html#frepTuple7",
          "type": "function"
        },
        "index": {
          "description": "Representation of for frep",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "frepTuple7",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea e-\u003ea f-\u003ea g-\u003ea h-\u003ea(b,c,d,e,f,g,h)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g a-\u003eg b-\u003eg c-\u003eg d-\u003eg e-\u003eg f-\u003eg h-\u003eg(a,b,c,d,e,f,h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:frepTuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e()\u003c/code\u003e for \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "repTuple0",
          "package": "emgm",
          "signature": "g ()",
          "source": "src/Generics-EMGM-Data-Tuple.html#repTuple0",
          "type": "function"
        },
        "index": {
          "description": "Representation of for rep",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "repTuple0",
          "normalized": "a()",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:repTuple0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "repTuple2",
          "package": "emgm",
          "signature": "g (a, b)",
          "source": "src/Generics-EMGM-Data-Tuple.html#repTuple2",
          "type": "function"
        },
        "index": {
          "description": "Representation of for rep",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "repTuple2",
          "normalized": "a(b,c)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:repTuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "repTuple3",
          "package": "emgm",
          "signature": "g (a, b, c)",
          "source": "src/Generics-EMGM-Data-Tuple.html#repTuple3",
          "type": "function"
        },
        "index": {
          "description": "Representation of for rep",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "repTuple3",
          "normalized": "a(b,c,d)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:repTuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "repTuple4",
          "package": "emgm",
          "signature": "g (a, b, c, d)",
          "source": "src/Generics-EMGM-Data-Tuple.html#repTuple4",
          "type": "function"
        },
        "index": {
          "description": "Representation of for rep",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "repTuple4",
          "normalized": "a(b,c,d,e)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:repTuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "repTuple5",
          "package": "emgm",
          "signature": "g (a, b, c, d, e)",
          "source": "src/Generics-EMGM-Data-Tuple.html#repTuple5",
          "type": "function"
        },
        "index": {
          "description": "Representation of for rep",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "repTuple5",
          "normalized": "a(b,c,d,e,f)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:repTuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "repTuple6",
          "package": "emgm",
          "signature": "g (a, b, c, d, e, f)",
          "source": "src/Generics-EMGM-Data-Tuple.html#repTuple6",
          "type": "function"
        },
        "index": {
          "description": "Representation of for rep",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "repTuple6",
          "normalized": "a(b,c,d,e,f,g)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:repTuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e(,,,,,,)\u003c/code\u003e for \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "repTuple7",
          "package": "emgm",
          "signature": "g (a, b, c, d, e, f, h)",
          "source": "src/Generics-EMGM-Data-Tuple.html#repTuple7",
          "type": "function"
        },
        "index": {
          "description": "Representation of for rep",
          "hierarchy": "Generics EMGM Data Tuple",
          "module": "Generics.EMGM.Data.Tuple",
          "name": "repTuple7",
          "normalized": "a(b,c,d,e,f,g,h)",
          "package": "emgm",
          "partial": "Tuple",
          "signature": "g(a,b,c,d,e,f,h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Data-Tuple.html#v:repTuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic function that collects values of a specified type from a\n generic value.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Functions.Collect",
          "name": "Collect",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Collect.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic function that collects values of specified type from generic value",
          "hierarchy": "Generics EMGM Functions Collect",
          "module": "Generics.EMGM.Functions.Collect",
          "name": "Collect",
          "package": "emgm",
          "partial": "Collect",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Collect.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a generic function that takes a value of one type and returns a\n collection of values of another type.\n\u003c/p\u003e\u003cp\u003eFor datatypes to work with Collect, a special instance must be given. This\n instance is trivial to write. Given a type \u003ccode\u003eT\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e instance looks like\n this:\n\u003c/p\u003e\u003cpre\u003e  {-# LANGUAGE OverlappingInstances #-}\n\n  data T = ...\n\n  instance (Alternative f) =\u003e Rep (Collect f T) T where\n    rep = Collect pure\n\u003c/pre\u003e\u003cp\u003e(Note that overlapping instances are required.) This instance triggers when\n the result type (the \u003ccode\u003eT\u003c/code\u003e in \u003ccode\u003eCollect f T\u003c/code\u003e) matches the value type (the second\n \u003ccode\u003eT\u003c/code\u003e) contained within the argument to \u003ccode\u003e\u003ca\u003ecollect\u003c/a\u003e\u003c/code\u003e. See the source of this\n module for more examples.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Collect",
          "name": "Collect",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Collect.html#Collect",
          "type": "newtype"
        },
        "index": {
          "description": "The type of generic function that takes value of one type and returns collection of values of another type For datatypes to work with Collect special instance must be given This instance is trivial to write Given type the Rep instance looks like this LANGUAGE OverlappingInstances data instance Alternative Rep Collect where rep Collect pure Note that overlapping instances are required This instance triggers when the result type the in Collect matches the value type the second contained within the argument to collect See the source of this module for more examples",
          "hierarchy": "Generics EMGM Functions Collect",
          "module": "Generics.EMGM.Functions.Collect",
          "name": "Collect",
          "package": "emgm",
          "partial": "Collect",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Collect.html#t:Collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Collect",
          "name": "Collect",
          "package": "emgm",
          "signature": "Collect",
          "source": "src/Generics-EMGM-Functions-Collect.html#Collect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Collect",
          "module": "Generics.EMGM.Functions.Collect",
          "name": "Collect",
          "package": "emgm",
          "partial": "Collect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Collect.html#v:Collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect values of type \u003ccode\u003eb\u003c/code\u003e from some value of type \u003ccode\u003ea\u003c/code\u003e. An \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e means\n no values were collected. If you expected otherwise, be sure that you have an\n instance such as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eCollect\u003c/a\u003e\u003c/code\u003e B) B\u003c/code\u003e for the type \u003ccode\u003eB\u003c/code\u003e that you are\n collecting.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecollect\u003c/code\u003e works by searching a datatype for values that are the same type as\n the return type specified. Here are some examples using the same value with\n different return types:\n\u003c/p\u003e\u003cpre\u003e\n   ghci\u003e let x = [\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e 1, \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e 'a', \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e 2] :: [\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e]\n   ghci\u003e collect x :: [\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e]\n   [1,2]\n   ghci\u003e collect x :: [\u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e]\n   \"a\"\n   ghci\u003e collect x == x\n   \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eNote that the numerical constants have been declared \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e using the type\n annotation. Since these natively have the type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e a\u003c/code\u003e, you may need\n to give explicit types. By design, there is no connection that can be\n inferred between the return type and the argument type.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecollect\u003c/code\u003e only works if there is an instance for the return type as described\n in the \u003ccode\u003enewtype \u003ccode\u003e\u003ca\u003eCollect\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Collect\",\"Generics.EMGM\"]",
          "name": "collect",
          "package": "emgm",
          "signature": "a -\u003e f b",
          "source": "src/Generics-EMGM-Functions-Collect.html#collect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Collect.html#v:collect\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:collect\"]"
        },
        "index": {
          "description": "Collect values of type from some value of type An empty means no values were collected If you expected otherwise be sure that you have an instance such as Rep Collect for the type that you are collecting collect works by searching datatype for values that are the same type as the return type specified Here are some examples using the same value with different return types ghci let Left Right Left Either Int Char ghci collect Int ghci collect Char ghci collect True Note that the numerical constants have been declared Int using the type annotation Since these natively have the type Num you may need to give explicit types By design there is no connection that can be inferred between the return type and the argument type collect only works if there is an instance for the return type as described in the newtype Collect",
          "hierarchy": "Generics EMGM Functions Collect",
          "module": "Generics.EMGM.Functions.Collect",
          "name": "collect",
          "normalized": "a-\u003eb c",
          "package": "emgm",
          "signature": "a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Collect.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Collect",
          "name": "selCollect",
          "package": "emgm",
          "signature": "a -\u003e f b",
          "source": "src/Generics-EMGM-Functions-Collect.html#Collect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Collect",
          "module": "Generics.EMGM.Functions.Collect",
          "name": "selCollect",
          "normalized": "a-\u003eb c",
          "package": "emgm",
          "partial": "Collect",
          "signature": "a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Collect.html#v:selCollect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic functions for comparing two values in different ways.\n\u003c/p\u003e\u003cp\u003eThe fundamental function here is \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e, a function that returns the\n \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e of two values (less than, equal to, or greater than). It uses the\n same lexicographical ordering as \u003ccode\u003ederiving Ord\u003c/code\u003e (e.g. left alternative of a\n sum is less than the right alternative, the first component of a product is\n compared first while the second is only compared if the first is equal,\n etc.).\n\u003c/p\u003e\u003cp\u003eAll of the remaining functions are simply derived (in the most obvious way)\n from \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e. All of these functions are equivalent to methods in the \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e type classes. The difference with using this approach vs. \u003ccode\u003ederiving\n (Eq, Ord)\u003c/code\u003e is that you can write ad-hoc cases for certain datatypes while\n most of the functionality is handled generically.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "Compare",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Compare.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic functions for comparing two values in different ways The fundamental function here is compare function that returns the Ordering of two values less than equal to or greater than It uses the same lexicographical ordering as deriving Ord e.g left alternative of sum is less than the right alternative the first component of product is compared first while the second is only compared if the first is equal etc All of the remaining functions are simply derived in the most obvious way from compare All of these functions are equivalent to methods in the Eq and Ord type classes The difference with using this approach vs deriving Eq Ord is that you can write ad-hoc cases for certain datatypes while most of the functionality is handled generically",
          "hierarchy": "Generics EMGM Functions Compare",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "Compare",
          "package": "emgm",
          "partial": "Compare",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a generic function that takes two values of the same type and\n returns an \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "Compare",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Compare.html#Compare",
          "type": "newtype"
        },
        "index": {
          "description": "The type of generic function that takes two values of the same type and returns an Ordering",
          "hierarchy": "Generics EMGM Functions Compare",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "Compare",
          "package": "emgm",
          "partial": "Compare",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#t:Compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Compare",
          "name": "Compare",
          "package": "emgm",
          "signature": "Compare",
          "source": "src/Generics-EMGM-Functions-Compare.html#Compare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Compare",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "Compare",
          "package": "emgm",
          "partial": "Compare",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:Compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two values and return an \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e (i.e. \u003ccode\u003eLT\u003c/code\u003e, \u003ccode\u003eGT\u003c/code\u003e, or \u003ccode\u003eEQ\u003c/code\u003e).\n This is implemented exactly as if the datatype was \u003ccode\u003ederiving Ord\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Compare\",\"Generics.EMGM\"]",
          "name": "compare",
          "package": "emgm",
          "signature": "a -\u003e a -\u003e Ordering",
          "source": "src/Generics-EMGM-Functions-Compare.html#compare",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:compare\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:compare\"]"
        },
        "index": {
          "description": "Compare two values and return an Ordering i.e LT GT or EQ This is implemented exactly as if the datatype was deriving Ord",
          "hierarchy": "Generics EMGM Functions Compare",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "compare",
          "normalized": "a-\u003ea-\u003eOrdering",
          "package": "emgm",
          "signature": "a-\u003ea-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEqual to. Returns \u003ccode\u003ex == y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Compare\",\"Generics.EMGM\"]",
          "name": "eq",
          "package": "emgm",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Generics-EMGM-Functions-Compare.html#eq",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:eq\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:eq\"]"
        },
        "index": {
          "description": "Equal to Returns",
          "hierarchy": "Generics EMGM Functions Compare",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "eq",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "emgm",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreater than. Returns \u003ccode\u003ex \u003e y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Compare\",\"Generics.EMGM\"]",
          "name": "gt",
          "package": "emgm",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Generics-EMGM-Functions-Compare.html#gt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:gt\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:gt\"]"
        },
        "index": {
          "description": "Greater than Returns",
          "hierarchy": "Generics EMGM Functions Compare",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "gt",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "emgm",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreater than or equal to. Returns \u003ccode\u003ex \u003e= y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Compare\",\"Generics.EMGM\"]",
          "name": "gteq",
          "package": "emgm",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Generics-EMGM-Functions-Compare.html#gteq",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:gteq\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:gteq\"]"
        },
        "index": {
          "description": "Greater than or equal to Returns",
          "hierarchy": "Generics EMGM Functions Compare",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "gteq",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "emgm",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:gteq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess than. Returns \u003ccode\u003ex \u003c y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Compare\",\"Generics.EMGM\"]",
          "name": "lt",
          "package": "emgm",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Generics-EMGM-Functions-Compare.html#lt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:lt\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:lt\"]"
        },
        "index": {
          "description": "Less than Returns",
          "hierarchy": "Generics EMGM Functions Compare",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "lt",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "emgm",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess than or equal to. Returns \u003ccode\u003ex \u003c= y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Compare\",\"Generics.EMGM\"]",
          "name": "lteq",
          "package": "emgm",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Generics-EMGM-Functions-Compare.html#lteq",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:lteq\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:lteq\"]"
        },
        "index": {
          "description": "Less than or equal to Returns",
          "hierarchy": "Generics EMGM Functions Compare",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "lteq",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "emgm",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:lteq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum of two values.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Compare\",\"Generics.EMGM\"]",
          "name": "max",
          "package": "emgm",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Generics-EMGM-Functions-Compare.html#max",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:max\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:max\"]"
        },
        "index": {
          "description": "The maximum of two values",
          "hierarchy": "Generics EMGM Functions Compare",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "max",
          "normalized": "a-\u003ea-\u003ea",
          "package": "emgm",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minimum of two values.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Compare\",\"Generics.EMGM\"]",
          "name": "min",
          "package": "emgm",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Generics-EMGM-Functions-Compare.html#min",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:min\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:min\"]"
        },
        "index": {
          "description": "The minimum of two values",
          "hierarchy": "Generics EMGM Functions Compare",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "min",
          "normalized": "a-\u003ea-\u003ea",
          "package": "emgm",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot equal to. Returns \u003ccode\u003ex /= y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Compare\",\"Generics.EMGM\"]",
          "name": "neq",
          "package": "emgm",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Generics-EMGM-Functions-Compare.html#neq",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:neq\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:neq\"]"
        },
        "index": {
          "description": "Not equal to Returns",
          "hierarchy": "Generics EMGM Functions Compare",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "neq",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "emgm",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:neq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Compare",
          "name": "selCompare",
          "package": "emgm",
          "signature": "a -\u003e a -\u003e Ordering",
          "source": "src/Generics-EMGM-Functions-Compare.html#Compare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Compare",
          "module": "Generics.EMGM.Functions.Compare",
          "name": "selCompare",
          "normalized": "a-\u003ea-\u003eOrdering",
          "package": "emgm",
          "partial": "Compare",
          "signature": "a-\u003ea-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Compare.html#v:selCompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic functions that crush a container into an iteration over\n its elements.\n\u003c/p\u003e\u003cp\u003eCrush is a datatype-generic operation on container types. It is a\n generalization of folds, but it is not a catamorphism. To understand how\n crush works, one can think of it as generating a list of all elements and\n mapping an accumulating function over each one. With this image in mind, it\n is evident that (unlike a catamorphism) very little information can be\n determined about the structure of the container.\n\u003c/p\u003e\u003cp\u003eThe EMGM implementation of \u003ccode\u003e\u003ca\u003ecrush\u003c/a\u003e\u003c/code\u003e can not inherently know the associativity\n of the binary operator. Consequently, associativity is left as an argument,\n but there are variants specific to left- and right-associativity for\n convenience.\n\u003c/p\u003e\u003cp\u003eMany standard Haskell datatypes (e.g. \u003ccode\u003e[]\u003c/code\u003e, \u003ccode\u003eData.Tree\u003c/code\u003e) are designed such\n that a constructor with more than one argument (i.e. a product structurally\n represented by \u003ccode\u003e(:*:)\u003c/code\u003e) has the element on the left and any recursive points\n towards the right. Due to this, the right-associative functions would\n typically produce the expected values. See examples in the comments for\n \u003ccode\u003e\u003ca\u003eflattenr\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efirstr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "Crush",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Crush.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic functions that crush container into an iteration over its elements Crush is datatype-generic operation on container types It is generalization of folds but it is not catamorphism To understand how crush works one can think of it as generating list of all elements and mapping an accumulating function over each one With this image in mind it is evident that unlike catamorphism very little information can be determined about the structure of the container The EMGM implementation of crush can not inherently know the associativity of the binary operator Consequently associativity is left as an argument but there are variants specific to left and right-associativity for convenience Many standard Haskell datatypes e.g Data.Tree are designed such that constructor with more than one argument i.e product structurally represented by has the element on the left and any recursive points towards the right Due to this the right-associative functions would typically produce the expected values See examples in the comments for flattenr and firstr",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "Crush",
          "package": "emgm",
          "partial": "Crush",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociativity of the binary operator used for \u003ccode\u003e\u003ca\u003ecrush\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "Assoc",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Crush.html#Assoc",
          "type": "data"
        },
        "index": {
          "description": "Associativity of the binary operator used for crush",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "Assoc",
          "package": "emgm",
          "partial": "Assoc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#t:Assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a generic function that takes an associativity and two\n arguments of different types and returns a value of the type of the second.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "Crush",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Crush.html#Crush",
          "type": "newtype"
        },
        "index": {
          "description": "The type of generic function that takes an associativity and two arguments of different types and returns value of the type of the second",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "Crush",
          "package": "emgm",
          "partial": "Crush",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#t:Crush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associative\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "AssocLeft",
          "package": "emgm",
          "signature": "AssocLeft",
          "source": "src/Generics-EMGM-Functions-Crush.html#Assoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:AssocLeft\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:AssocLeft\"]"
        },
        "index": {
          "description": "Left-associative",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "AssocLeft",
          "package": "emgm",
          "partial": "Assoc Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:AssocLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-associative\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "AssocRight",
          "package": "emgm",
          "signature": "AssocRight",
          "source": "src/Generics-EMGM-Functions-Crush.html#Assoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:AssocRight\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:AssocRight\"]"
        },
        "index": {
          "description": "Right-associative",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "AssocRight",
          "package": "emgm",
          "partial": "Assoc Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:AssocRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Crush",
          "name": "Crush",
          "package": "emgm",
          "signature": "Crush",
          "source": "src/Generics-EMGM-Functions-Crush.html#Crush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "Crush",
          "package": "emgm",
          "partial": "Crush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:Crush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if all elements in a container satisfy the predicate \u003ccode\u003ep\u003c/code\u003e. This\n is a generalization the \u003ccode\u003ePrelude\u003c/code\u003e function of the same name.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "all",
          "package": "emgm",
          "signature": "(a -\u003e Bool) -\u003e f a -\u003e Bool",
          "source": "src/Generics-EMGM-Functions-Crush.html#all",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:all\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:all\"]"
        },
        "index": {
          "description": "Determine if all elements in container satisfy the predicate This is generalization the Prelude function of the same name",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eBool",
          "package": "emgm",
          "signature": "(a-\u003eBool)-\u003ef a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the conjunction of all elements in a container. This is a\n generalization of the \u003ccode\u003ePrelude\u003c/code\u003e function of the same name.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "and",
          "package": "emgm",
          "signature": "f Bool -\u003e Bool",
          "source": "src/Generics-EMGM-Functions-Crush.html#and",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:and\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:and\"]"
        },
        "index": {
          "description": "Compute the conjunction of all elements in container This is generalization of the Prelude function of the same name",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "and",
          "normalized": "a Bool-\u003eBool",
          "package": "emgm",
          "signature": "f Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if any element in a container satisfies the predicate \u003ccode\u003ep\u003c/code\u003e. This\n is a generalization of the \u003ccode\u003ePrelude\u003c/code\u003e function of the same name.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "any",
          "package": "emgm",
          "signature": "(a -\u003e Bool) -\u003e f a -\u003e Bool",
          "source": "src/Generics-EMGM-Functions-Crush.html#any",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:any\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:any\"]"
        },
        "index": {
          "description": "Determine if any element in container satisfies the predicate This is generalization of the Prelude function of the same name",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eBool",
          "package": "emgm",
          "signature": "(a-\u003eBool)-\u003ef a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function (\u003ccode\u003ea -\u003e b -\u003e b\u003c/code\u003e) to each element (\u003ccode\u003ea\u003c/code\u003e) of a container (\u003ccode\u003ef\n a\u003c/code\u003e) and an accumulator value (\u003ccode\u003eb\u003c/code\u003e) to produce an accumulated result (\u003ccode\u003eb\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis is the most general form in which you must specify the associativity.\n You may prefer to use \u003ccode\u003e\u003ca\u003ecrushr\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecrushl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "crush",
          "package": "emgm",
          "signature": "Assoc-\u003e (a -\u003e b -\u003e b)-\u003e b-\u003e f a-\u003e b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:crush\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:crush\"]"
        },
        "index": {
          "description": "Apply function to each element of container and an accumulator value to produce an accumulated result This is the most general form in which you must specify the associativity You may prefer to use crushr or crushl",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "crush",
          "normalized": "Assoc-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "emgm",
          "signature": "Assoc-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003ef a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:crush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA left-associative variant of \u003ccode\u003e\u003ca\u003ecrush\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "crushl",
          "package": "emgm",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e f a -\u003e b",
          "source": "src/Generics-EMGM-Functions-Crush.html#crushl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:crushl\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:crushl\"]"
        },
        "index": {
          "description": "left-associative variant of crush",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "crushl",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "emgm",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003ef a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:crushl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA right-associative variant of \u003ccode\u003e\u003ca\u003ecrush\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "crushr",
          "package": "emgm",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e f a -\u003e b",
          "source": "src/Generics-EMGM-Functions-Crush.html#crushr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:crushr\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:crushr\"]"
        },
        "index": {
          "description": "right-associative variant of crush",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "crushr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "emgm",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003ef a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:crushr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if an element is a member of a container. This is a\n generalization of the \u003ccode\u003ePrelude\u003c/code\u003e function of the same name.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "elem",
          "package": "emgm",
          "signature": "a -\u003e f a -\u003e Bool",
          "source": "src/Generics-EMGM-Functions-Crush.html#elem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:elem\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:elem\"]"
        },
        "index": {
          "description": "Determine if an element is member of container This is generalization of the Prelude function of the same name",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "elem",
          "normalized": "a-\u003eb a-\u003eBool",
          "package": "emgm",
          "signature": "a-\u003ef a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first element of a container. \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if the container is empty.\n\u003c/p\u003e\u003cp\u003eThis is the most general form in which you must specify the associativity and\n the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance. You may prefer to use the more convenient \u003ccode\u003e\u003ca\u003efirstr\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003efirstl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "first",
          "package": "emgm",
          "signature": "Assoc -\u003e f a -\u003e m a",
          "source": "src/Generics-EMGM-Functions-Crush.html#first",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:first\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:first\"]"
        },
        "index": {
          "description": "Extract the first element of container fail if the container is empty This is the most general form in which you must specify the associativity and the Monad instance You may prefer to use the more convenient firstr or firstl",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "first",
          "normalized": "Assoc-\u003ea b-\u003ec b",
          "package": "emgm",
          "signature": "Assoc-\u003ef a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA left-associative \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e variant of \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, for a list \u003ccode\u003els :: [a]\u003c/code\u003e, \u003ccode\u003efromJust (firstl ls) == last ls\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "firstl",
          "package": "emgm",
          "signature": "f a -\u003e Maybe a",
          "source": "src/Generics-EMGM-Functions-Crush.html#firstl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:firstl\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:firstl\"]"
        },
        "index": {
          "description": "left-associative Maybe variant of first Note that for list ls fromJust firstl ls last ls",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "firstl",
          "normalized": "a b-\u003eMaybe b",
          "package": "emgm",
          "signature": "f a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:firstl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA right-associative \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e variant of \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, for a list \u003ccode\u003els :: [a]\u003c/code\u003e, \u003ccode\u003efromJust (firstr ls) == head ls\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "firstr",
          "package": "emgm",
          "signature": "f a -\u003e Maybe a",
          "source": "src/Generics-EMGM-Functions-Crush.html#firstr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:firstr\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:firstr\"]"
        },
        "index": {
          "description": "right-associative Maybe variant of first Note that for list ls fromJust firstr ls head ls",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "firstr",
          "normalized": "a b-\u003eMaybe b",
          "package": "emgm",
          "signature": "f a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:firstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten the elements of a container into a list.\n\u003c/p\u003e\u003cp\u003eThis is the most general form in which you must specify the associativity.\n You may prefer to use \u003ccode\u003e\u003ca\u003eflattenr\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eflattenl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "flatten",
          "package": "emgm",
          "signature": "Assoc -\u003e f a -\u003e [a]",
          "source": "src/Generics-EMGM-Functions-Crush.html#flatten",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:flatten\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:flatten\"]"
        },
        "index": {
          "description": "Flatten the elements of container into list This is the most general form in which you must specify the associativity You may prefer to use flattenr or flattenl",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "flatten",
          "normalized": "Assoc-\u003ea b-\u003e[b]",
          "package": "emgm",
          "signature": "Assoc-\u003ef a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA left-associative variant of \u003ccode\u003e\u003ca\u003eflatten\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, for a list \u003ccode\u003els :: [a]\u003c/code\u003e, \u003ccode\u003eflattenl ls == reverse ls\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "flattenl",
          "package": "emgm",
          "signature": "f a -\u003e [a]",
          "source": "src/Generics-EMGM-Functions-Crush.html#flattenl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:flattenl\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:flattenl\"]"
        },
        "index": {
          "description": "left-associative variant of flatten Note that for list ls flattenl ls reverse ls",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "flattenl",
          "normalized": "a b-\u003e[b]",
          "package": "emgm",
          "signature": "f a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:flattenl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA right-associative variant of \u003ccode\u003e\u003ca\u003eflatten\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, for a list \u003ccode\u003els :: [a]\u003c/code\u003e, \u003ccode\u003eflattenr ls == ls\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "flattenr",
          "package": "emgm",
          "signature": "f a -\u003e [a]",
          "source": "src/Generics-EMGM-Functions-Crush.html#flattenr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:flattenr\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:flattenr\"]"
        },
        "index": {
          "description": "right-associative variant of flatten Note that for list ls flattenr ls ls",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "flattenr",
          "normalized": "a b-\u003e[b]",
          "package": "emgm",
          "signature": "f a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:flattenr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the maximum element of a container. If the container is empty,\n return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. This is a generalization of the \u003ccode\u003ePrelude\u003c/code\u003e function of the\n same name.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "maximum",
          "package": "emgm",
          "signature": "f a -\u003e Maybe a",
          "source": "src/Generics-EMGM-Functions-Crush.html#maximum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:maximum\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:maximum\"]"
        },
        "index": {
          "description": "Determine the maximum element of container If the container is empty return Nothing This is generalization of the Prelude function of the same name",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "maximum",
          "normalized": "a b-\u003eMaybe b",
          "package": "emgm",
          "signature": "f a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the minimum element of a container. If the container is empty,\n return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. This is a generalization of the \u003ccode\u003ePrelude\u003c/code\u003e function of the\n same name.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "minimum",
          "package": "emgm",
          "signature": "f a -\u003e Maybe a",
          "source": "src/Generics-EMGM-Functions-Crush.html#minimum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:minimum\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:minimum\"]"
        },
        "index": {
          "description": "Determine the minimum element of container If the container is empty return Nothing This is generalization of the Prelude function of the same name",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "minimum",
          "normalized": "a b-\u003eMaybe b",
          "package": "emgm",
          "signature": "f a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if an element is not a member of a container. This is a\n generalization of the \u003ccode\u003ePrelude\u003c/code\u003e function of the same name.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "notElem",
          "package": "emgm",
          "signature": "a -\u003e f a -\u003e Bool",
          "source": "src/Generics-EMGM-Functions-Crush.html#notElem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:notElem\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:notElem\"]"
        },
        "index": {
          "description": "Determine if an element is not member of container This is generalization of the Prelude function of the same name",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "notElem",
          "normalized": "a-\u003eb a-\u003eBool",
          "package": "emgm",
          "partial": "Elem",
          "signature": "a-\u003ef a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the disjunction of all elements in a container. This is a\n generalization of the \u003ccode\u003ePrelude\u003c/code\u003e function of the same name.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "or",
          "package": "emgm",
          "signature": "f Bool -\u003e Bool",
          "source": "src/Generics-EMGM-Functions-Crush.html#or",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:or\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:or\"]"
        },
        "index": {
          "description": "Compute the disjunction of all elements in container This is generalization of the Prelude function of the same name",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "or",
          "normalized": "a Bool-\u003eBool",
          "package": "emgm",
          "signature": "f Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the product of all elements in a container. This is a\n generalization of the \u003ccode\u003ePrelude\u003c/code\u003e function of the same name.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "product",
          "package": "emgm",
          "signature": "f a -\u003e a",
          "source": "src/Generics-EMGM-Functions-Crush.html#product",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:product\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:product\"]"
        },
        "index": {
          "description": "Compute the product of all elements in container This is generalization of the Prelude function of the same name",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "product",
          "normalized": "a b-\u003eb",
          "package": "emgm",
          "signature": "f a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Crush",
          "name": "selCrush",
          "package": "emgm",
          "signature": "Assoc -\u003e a -\u003e b -\u003e b",
          "source": "src/Generics-EMGM-Functions-Crush.html#Crush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "selCrush",
          "normalized": "Assoc-\u003ea-\u003eb-\u003eb",
          "package": "emgm",
          "partial": "Crush",
          "signature": "Assoc-\u003ea-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:selCrush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the sum of all elements in a container. This is a generalization of\n the \u003ccode\u003ePrelude\u003c/code\u003e function of the same name.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Crush\",\"Generics.EMGM\"]",
          "name": "sum",
          "package": "emgm",
          "signature": "f a -\u003e a",
          "source": "src/Generics-EMGM-Functions-Crush.html#sum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:sum\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:sum\"]"
        },
        "index": {
          "description": "Compute the sum of all elements in container This is generalization of the Prelude function of the same name",
          "hierarchy": "Generics EMGM Functions Crush",
          "module": "Generics.EMGM.Functions.Crush",
          "name": "sum",
          "normalized": "a b-\u003eb",
          "package": "emgm",
          "signature": "f a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Crush.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic function that enumerates the values of a datatype.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eenum\u003c/a\u003e\u003c/code\u003e generates a list of the values of a datatypes. It will produce all\n values of all supported datatypes (with only a few exceptions [1]). For\n datatypes that have an infinite enumeration (e.g. \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e[a]\u003c/code\u003e),\n \u003ccode\u003e\u003ca\u003eenum\u003c/a\u003e\u003c/code\u003e produces an infinite list.\n\u003c/p\u003e\u003cp\u003eA number of the techniques used to write \u003ccode\u003e\u003ca\u003eenum\u003c/a\u003e\u003c/code\u003e came from a talk by Mark\n Jones at the 2008 Advanced Functional Programming Summer School. The authors\n gratefully acknowledge his contribution.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e1\u003c/dt\u003e\u003cdd\u003e The exceptions are \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e. These are treated in the same way\n as their \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e instances are treated. The result looks like this:\n \u003ccode\u003e[0.0,-1.0,1.0,-2.0,..]\u003c/code\u003e, thus skipping all non-integral values. Note that\n these may overflow, because they are unbounded.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Functions.Enum",
          "name": "Enum",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Enum.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic function that enumerates the values of datatype enum generates list of the values of datatypes It will produce all values of all supported datatypes with only few exceptions For datatypes that have an infinite enumeration e.g Integer and enum produces an infinite list number of the techniques used to write enum came from talk by Mark Jones at the Advanced Functional Programming Summer School The authors gratefully acknowledge his contribution The exceptions are Float and Double These are treated in the same way as their Enum instances are treated The result looks like this thus skipping all non-integral values Note that these may overflow because they are unbounded",
          "hierarchy": "Generics EMGM Functions Enum",
          "module": "Generics.EMGM.Functions.Enum",
          "name": "Enum",
          "package": "emgm",
          "partial": "Enum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Enum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a generic function that takes no arguments and returns a list\n of some type.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Enum",
          "name": "Enum",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Enum.html#Enum",
          "type": "newtype"
        },
        "index": {
          "description": "The type of generic function that takes no arguments and returns list of some type",
          "hierarchy": "Generics EMGM Functions Enum",
          "module": "Generics.EMGM.Functions.Enum",
          "name": "Enum",
          "package": "emgm",
          "partial": "Enum",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Enum.html#t:Enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Enum",
          "name": "Enum",
          "package": "emgm",
          "signature": "Enum",
          "source": "src/Generics-EMGM-Functions-Enum.html#Enum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Enum",
          "module": "Generics.EMGM.Functions.Enum",
          "name": "Enum",
          "package": "emgm",
          "partial": "Enum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Enum.html#v:Enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the first element of the enumeration from \u003ccode\u003e\u003ca\u003eenum\u003c/a\u003e\u003c/code\u003e. This is\n often called the neutral or empty value.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Enum\",\"Generics.EMGM\"]",
          "name": "empty",
          "package": "emgm",
          "signature": "a",
          "source": "src/Generics-EMGM-Functions-Enum.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Enum.html#v:empty\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:empty\"]"
        },
        "index": {
          "description": "Returns the first element of the enumeration from enum This is often called the neutral or empty value",
          "hierarchy": "Generics EMGM Functions Enum",
          "module": "Generics.EMGM.Functions.Enum",
          "name": "empty",
          "package": "emgm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Enum.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate the values of a datatype. If the number of values is infinite,\n the result will be an infinite list. The remaining functions are derived from\n \u003ccode\u003e\u003ca\u003eenum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Enum\",\"Generics.EMGM\"]",
          "name": "enum",
          "package": "emgm",
          "signature": "[a]",
          "source": "src/Generics-EMGM-Functions-Enum.html#enum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Enum.html#v:enum\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:enum\"]"
        },
        "index": {
          "description": "Enumerate the values of datatype If the number of values is infinite the result will be an infinite list The remaining functions are derived from enum",
          "hierarchy": "Generics EMGM Functions Enum",
          "module": "Generics.EMGM.Functions.Enum",
          "name": "enum",
          "normalized": "[a]",
          "package": "emgm",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Enum.html#v:enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate the first \u003ccode\u003en\u003c/code\u003e values of a datatype. This is a shortcut for\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003egenericTake\u003c/a\u003e\u003c/code\u003e n (\u003ccode\u003e\u003ca\u003eenum\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Enum\",\"Generics.EMGM\"]",
          "name": "enumN",
          "package": "emgm",
          "signature": "n -\u003e [a]",
          "source": "src/Generics-EMGM-Functions-Enum.html#enumN",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Enum.html#v:enumN\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:enumN\"]"
        },
        "index": {
          "description": "Enumerate the first values of datatype This is shortcut for genericTake enum",
          "hierarchy": "Generics EMGM Functions Enum",
          "module": "Generics.EMGM.Functions.Enum",
          "name": "enumN",
          "normalized": "a-\u003e[b]",
          "package": "emgm",
          "signature": "n-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Enum.html#v:enumN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Enum",
          "name": "selEnum",
          "package": "emgm",
          "signature": "[a]",
          "source": "src/Generics-EMGM-Functions-Enum.html#Enum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Enum",
          "module": "Generics.EMGM.Functions.Enum",
          "name": "selEnum",
          "normalized": "[a]",
          "package": "emgm",
          "partial": "Enum",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Enum.html#v:selEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic functions that apply a transformation at every location of\n one type in a value of a possibly different type.\n\u003c/p\u003e\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003eeverywhere\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eeverywhere'\u003c/a\u003e\u003c/code\u003e have exactly the same type, but\n they apply the transformation in different fashions. \u003ccode\u003e\u003ca\u003eeverywhere\u003c/a\u003e\u003c/code\u003e uses\n bottom-up application while \u003ccode\u003e\u003ca\u003eeverywhere'\u003c/a\u003e\u003c/code\u003e uses a top-down approach. This may\n make a difference if you have recursive datatypes or use nested pattern\n matching in the higher-order function.\n\u003c/p\u003e\u003cp\u003eThese functions are very similar to others with the same names in the \"Scrap\n Your Boilerplate\" library (\u003ccode\u003esyb\u003c/code\u003e package). The SYB functions use rank-2\n types, while the EMGM functions use a single class constraint. Compare the\n types of the following:\n\u003c/p\u003e\u003cpre\u003e\n   -- SYB\n   everywhere :: (forall a. Data a =\u003e a -\u003e a) -\u003e forall a. Data a =\u003e a -\u003e a\n\u003c/pre\u003e\u003cpre\u003e\n   -- EMGM\n   everywhere :: (Rep (Everywhere a) b) =\u003e (a -\u003e a) -\u003e b -\u003e b\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "Everywhere",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Everywhere.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic functions that apply transformation at every location of one type in value of possibly different type The functions everywhere and everywhere have exactly the same type but they apply the transformation in different fashions everywhere uses bottom-up application while everywhere uses top-down approach This may make difference if you have recursive datatypes or use nested pattern matching in the higher-order function These functions are very similar to others with the same names in the Scrap Your Boilerplate library syb package The SYB functions use rank-2 types while the EMGM functions use single class constraint Compare the types of the following SYB everywhere forall Data forall Data EMGM everywhere Rep Everywhere",
          "hierarchy": "Generics EMGM Functions Everywhere",
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "Everywhere",
          "package": "emgm",
          "partial": "Everywhere",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Everywhere.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a generic function that takes a function of one type, a value\n of another type, and returns a value of the value type.\n\u003c/p\u003e\u003cp\u003eFor datatypes to work with Everywhere, a special instance must be given. This\n instance is trivial to write. For a non-recursive type, the instance is the\n same as described for \u003ccode\u003e\u003ca\u003eEverywhere'\u003c/a\u003e\u003c/code\u003e. For a recursive type \u003ccode\u003eT\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e\n instance looks like this:\n\u003c/p\u003e\u003cpre\u003e   {-# LANGUAGE OverlappingInstances #-}\n\u003c/pre\u003e\u003cpre\u003e\n   data T a = Val a | Rec (T a)\n\u003c/pre\u003e\u003cpre\u003e\n   instance (\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e (Everywhere (T a)) (T a), \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e (Everywhere (T a)) a) =\u003e \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e (Everywhere (T a)) (T a) where\n     \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e = Everywhere app\n       where\n         app f x =\n           case x of\n             Val v1 -\u003e f (Val (selEverywhere \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e f v1))\n             Rec v1 -\u003e f (Rec (selEverywhere \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e f v1))\n\u003c/pre\u003e\u003cp\u003eNote the requirement of overlapping instances.\n\u003c/p\u003e\u003cp\u003eThis instance is triggered when the function type (the first \u003ccode\u003eT a\u003c/code\u003e in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e\n (Everywhere (T a)) (T a)\u003c/code\u003e) matches some value type (the second \u003ccode\u003eT a\u003c/code\u003e)\n contained within the argument to \u003ccode\u003e\u003ca\u003eeverywhere\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "Everywhere",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Everywhere.html#Everywhere",
          "type": "newtype"
        },
        "index": {
          "description": "The type of generic function that takes function of one type value of another type and returns value of the value type For datatypes to work with Everywhere special instance must be given This instance is trivial to write For non-recursive type the instance is the same as described for Everywhere For recursive type the Rep instance looks like this LANGUAGE OverlappingInstances data Val Rec instance Rep Everywhere Rep Everywhere Rep Everywhere where rep Everywhere app where app case of Val v1 Val selEverywhere rep v1 Rec v1 Rec selEverywhere rep v1 Note the requirement of overlapping instances This instance is triggered when the function type the first in Rep Everywhere matches some value type the second contained within the argument to everywhere",
          "hierarchy": "Generics EMGM Functions Everywhere",
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "Everywhere",
          "package": "emgm",
          "partial": "Everywhere",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Everywhere.html#t:Everywhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type servers the same purpose as \u003ccode\u003e\u003ca\u003eEverywhere\u003c/a\u003e\u003c/code\u003e, except that \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e\n instances are designed to be top-down instead of bottom-up. That means, given\n any type \u003ccode\u003eU\u003c/code\u003e (recursive or not), the \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e instance looks like this:\n\u003c/p\u003e\u003cpre\u003e   {-# LANGUAGE OverlappingInstances #-}\n\u003c/pre\u003e\u003cpre\u003e\n   data U = ...\n\u003c/pre\u003e\u003cpre\u003e\n   instance \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e (Everywhere' U) U where\n     \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e = Everywhere' ($)\n\u003c/pre\u003e\u003cp\u003eNote the requirement of overlapping instances.\n\u003c/p\u003e\u003cp\u003eThis instance is triggered when the function type (the first \u003ccode\u003eU\u003c/code\u003e in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e\n (Everywhere U) U\u003c/code\u003e) matches some value type (the second \u003ccode\u003eU\u003c/code\u003e) contained within\n the argument to \u003ccode\u003e\u003ca\u003eeverywhere'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "Everywhere'",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Everywhere.html#Everywhere%27",
          "type": "newtype"
        },
        "index": {
          "description": "This type servers the same purpose as Everywhere except that Rep instances are designed to be top-down instead of bottom-up That means given any type recursive or not the Rep instance looks like this LANGUAGE OverlappingInstances data instance Rep Everywhere where rep Everywhere Note the requirement of overlapping instances This instance is triggered when the function type the first in Rep Everywhere matches some value type the second contained within the argument to everywhere",
          "hierarchy": "Generics EMGM Functions Everywhere",
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "Everywhere'",
          "package": "emgm",
          "partial": "Everywhere'",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Everywhere.html#t:Everywhere-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "Everywhere",
          "package": "emgm",
          "signature": "Everywhere",
          "source": "src/Generics-EMGM-Functions-Everywhere.html#Everywhere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Everywhere",
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "Everywhere",
          "package": "emgm",
          "partial": "Everywhere",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Everywhere.html#v:Everywhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "Everywhere'",
          "package": "emgm",
          "signature": "Everywhere'",
          "source": "src/Generics-EMGM-Functions-Everywhere.html#Everywhere%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Everywhere",
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "Everywhere'",
          "package": "emgm",
          "partial": "Everywhere'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Everywhere.html#v:Everywhere-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation \u003ccode\u003ea -\u003e a\u003c/code\u003e to values of type \u003ccode\u003ea\u003c/code\u003e within the argument\n of type \u003ccode\u003eb\u003c/code\u003e in a bottom-up manner. Values that do not have type \u003ccode\u003ea\u003c/code\u003e are\n passed through \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eeverywhere\u003c/code\u003e works by searching the datatype \u003ccode\u003eb\u003c/code\u003e for values that are the same\n type as the function argument type \u003ccode\u003ea\u003c/code\u003e. Here are some examples using the\n datatype declared in the documentation for \u003ccode\u003e\u003ca\u003eEverywhere\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cpre\u003e\n   ghci\u003e let f t = case t of { Val i -\u003e Val (i+(1::\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e)); other -\u003e other }\n   ghci\u003e everywhere f (Val (1::\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e))\n   Val 2\n   ghci\u003e everywhere f (Rec (Rec (Val (1::\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e))))\n   Rec (Rec (Val 2))\n\u003c/pre\u003e\u003cpre\u003e\n   ghci\u003e let x = [\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e 1, \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e 'a', \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e 2] :: [\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e]\n   ghci\u003e everywhere (*(3::\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e)) x\n   [\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e 3,\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e 'a',\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e 6]\n   ghci\u003e everywhere (\\x -\u003e x :: \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e) x == x\n   \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eNote the type annotations. Since numerical constants have the type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a\n =\u003e a\u003c/code\u003e, you may need to give explicit types. Also, the function \u003ccode\u003e\\x -\u003e x\u003c/code\u003e has\n type \u003ccode\u003ea -\u003e a\u003c/code\u003e, but we need to give it some non-polymorphic type here. By\n design, there is no connection that can be inferred between the value type\n and the function type.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eeverywhere\u003c/code\u003e only works if there is an instance for the return type as\n described in the \u003ccode\u003enewtype \u003ccode\u003e\u003ca\u003eEverywhere\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Everywhere\",\"Generics.EMGM\"]",
          "name": "everywhere",
          "package": "emgm",
          "signature": "(a -\u003e a) -\u003e b -\u003e b",
          "source": "src/Generics-EMGM-Functions-Everywhere.html#everywhere",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Everywhere.html#v:everywhere\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:everywhere\"]"
        },
        "index": {
          "description": "Apply transformation to values of type within the argument of type in bottom-up manner Values that do not have type are passed through id everywhere works by searching the datatype for values that are the same type as the function argument type Here are some examples using the datatype declared in the documentation for Everywhere ghci let case of Val Val Int other other ghci everywhere Val Int Val ghci everywhere Rec Rec Val Int Rec Rec Val ghci let Left Right Left Either Int Char ghci everywhere Int Left Right Left ghci everywhere Float True Note the type annotations Since numerical constants have the type Num you may need to give explicit types Also the function has type but we need to give it some non-polymorphic type here By design there is no connection that can be inferred between the value type and the function type everywhere only works if there is an instance for the return type as described in the newtype Everywhere",
          "hierarchy": "Generics EMGM Functions Everywhere",
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "everywhere",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "emgm",
          "signature": "(a-\u003ea)-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Everywhere.html#v:everywhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation \u003ccode\u003ea -\u003e a\u003c/code\u003e to values of type \u003ccode\u003ea\u003c/code\u003e within the argument\n of type \u003ccode\u003eb\u003c/code\u003e in a top-down manner. Values that do not have type \u003ccode\u003ea\u003c/code\u003e are passed\n through \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eeverywhere'\u003c/code\u003e is the same as \u003ccode\u003e\u003ca\u003eeverywhere\u003c/a\u003e\u003c/code\u003e with the exception of recursive\n datatypes. For example, compare the example used in the documentation for\n \u003ccode\u003e\u003ca\u003eeverywhere\u003c/a\u003e\u003c/code\u003e with the following.\n\u003c/p\u003e\u003cpre\u003e\n   ghci\u003e let f t = case t of { Val i -\u003e Val (i+(1::\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e)); other -\u003e other }\n   ghci\u003e everywhere' f (Val (1::\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e))\n   Val 2\n   ghci\u003e everywhere' f (Rec (Rec (Val (1::\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e))))\n   Rec (Rec (Val 1))\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003eeverywhere'\u003c/code\u003e only works if there is an instance for the return type as\n described in the \u003ccode\u003enewtype \u003ccode\u003e\u003ca\u003eEverywhere'\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Everywhere\",\"Generics.EMGM\"]",
          "name": "everywhere'",
          "package": "emgm",
          "signature": "(a -\u003e a) -\u003e b -\u003e b",
          "source": "src/Generics-EMGM-Functions-Everywhere.html#everywhere%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Everywhere.html#v:everywhere-39-\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:everywhere-39-\"]"
        },
        "index": {
          "description": "Apply transformation to values of type within the argument of type in top-down manner Values that do not have type are passed through id everywhere is the same as everywhere with the exception of recursive datatypes For example compare the example used in the documentation for everywhere with the following ghci let case of Val Val Int other other ghci everywhere Val Int Val ghci everywhere Rec Rec Val Int Rec Rec Val everywhere only works if there is an instance for the return type as described in the newtype Everywhere",
          "hierarchy": "Generics EMGM Functions Everywhere",
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "everywhere'",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "emgm",
          "signature": "(a-\u003ea)-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Everywhere.html#v:everywhere-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "selEverywhere",
          "package": "emgm",
          "signature": "(a -\u003e a) -\u003e b -\u003e b",
          "source": "src/Generics-EMGM-Functions-Everywhere.html#Everywhere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Everywhere",
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "selEverywhere",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "emgm",
          "partial": "Everywhere",
          "signature": "(a-\u003ea)-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Everywhere.html#v:selEverywhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "selEverywhere'",
          "package": "emgm",
          "signature": "(a -\u003e a) -\u003e b -\u003e b",
          "source": "src/Generics-EMGM-Functions-Everywhere.html#Everywhere%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Everywhere",
          "module": "Generics.EMGM.Functions.Everywhere",
          "name": "selEverywhere'",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "emgm",
          "partial": "Everywhere'",
          "signature": "(a-\u003ea)-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Everywhere.html#v:selEverywhere-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic functions that translate values of one type into values of\n another.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e is a generic version of the \u003ccode\u003ePrelude\u003c/code\u003e \u003ccode\u003emap\u003c/code\u003e function. It works\n on all supported container datatypes of kind \u003ccode\u003e* -\u003e *\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e function is\n equivalent to \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e after \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if that were possible.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ecast\u003c/a\u003e\u003c/code\u003e is a generic and configurable function for converting a value of one\n type into a value of another using instances provided by the programmer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Functions.Map",
          "name": "Map",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Map.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic functions that translate values of one type into values of another map is generic version of the Prelude map function It works on all supported container datatypes of kind The map function is equivalent to fmap after deriving Functor if that were possible cast is generic and configurable function for converting value of one type into value of another using instances provided by the programmer",
          "hierarchy": "Generics EMGM Functions Map",
          "module": "Generics.EMGM.Functions.Map",
          "name": "Map",
          "package": "emgm",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a generic function that takes a value of one type and returns a\n value of a different type.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Map",
          "name": "Map",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Map.html#Map",
          "type": "newtype"
        },
        "index": {
          "description": "The type of generic function that takes value of one type and returns value of different type",
          "hierarchy": "Generics EMGM Functions Map",
          "module": "Generics.EMGM.Functions.Map",
          "name": "Map",
          "package": "emgm",
          "partial": "Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Map.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Map",
          "name": "Map",
          "package": "emgm",
          "signature": "Map",
          "source": "src/Generics-EMGM-Functions-Map.html#Map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Map",
          "module": "Generics.EMGM.Functions.Map",
          "name": "Map",
          "package": "emgm",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Map.html#v:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a datatype \u003ccode\u003eF a b\u003c/code\u003e, \u003ccode\u003ebimap f g\u003c/code\u003e applies the function \u003ccode\u003ef :: a -\u003e c\u003c/code\u003e to\n every \u003ccode\u003ea\u003c/code\u003e-element and the function \u003ccode\u003eg :: b -\u003e d\u003c/code\u003e to every \u003ccode\u003eb\u003c/code\u003e-element. The\n result is a value with transformed elements: \u003ccode\u003eF c d\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Map\",\"Generics.EMGM\"]",
          "name": "bimap",
          "package": "emgm",
          "signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e f a b -\u003e f c d",
          "source": "src/Generics-EMGM-Functions-Map.html#bimap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Map.html#v:bimap\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:bimap\"]"
        },
        "index": {
          "description": "Given datatype bimap applies the function to every element and the function to every element The result is value with transformed elements",
          "hierarchy": "Generics EMGM Functions Map",
          "module": "Generics.EMGM.Functions.Map",
          "name": "bimap",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003ee a c-\u003ee b d",
          "package": "emgm",
          "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003ef a b-\u003ef c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Map.html#v:bimap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast a value of one type into a value of another. This is a configurable\n function that allows you to define your own type-safe conversions for a\n variety of types.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecast\u003c/code\u003e works with instances of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e i) o\u003c/code\u003e in which you choose the\n input type \u003ccode\u003ei\u003c/code\u003e and the output type \u003ccode\u003eo\u003c/code\u003e and implement the function of type \u003ccode\u003ei\n -\u003e o\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHere are some examples of instances (and flags you will need or want):\n\u003c/p\u003e\u003cpre\u003e   {-# LANGUAGE MultiParamTypeClasses  #-}\n   {-# LANGUAGE FlexibleContexts       #-}\n   {-# LANGUAGE FlexibleInstances      #-}\n   {-# OPTIONS_GHC -fno-warn-orphans   #-}\n\u003c/pre\u003e\u003cpre\u003e\n   instance \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e where\n     \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003echr\u003c/code\u003e\n\u003c/pre\u003e\u003cpre\u003e\n   instance \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e where\n     \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003erealToFrac\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cpre\u003e\n   instance \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e where\n     \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e (+42)\n\u003c/pre\u003e\u003cp\u003eThere are no pre-defined instances, and a call to \u003ccode\u003ecast\u003c/code\u003e will not compile if\n no instances for the input and output type pair are found, so you must define\n instances in order to use \u003ccode\u003ecast\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Map\",\"Generics.EMGM\"]",
          "name": "cast",
          "package": "emgm",
          "signature": "a -\u003e b",
          "source": "src/Generics-EMGM-Functions-Map.html#cast",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Map.html#v:cast\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:cast\"]"
        },
        "index": {
          "description": "Cast value of one type into value of another This is configurable function that allows you to define your own type-safe conversions for variety of types cast works with instances of Rep Map in which you choose the input type and the output type and implement the function of type Here are some examples of instances and flags you will need or want LANGUAGE MultiParamTypeClasses LANGUAGE FlexibleContexts LANGUAGE FlexibleInstances OPTIONS GHC fno-warn-orphans instance Rep Map Int Char where rep Map chr instance Rep Map Float Double where rep Map realToFrac instance Rep Map Integer Integer where rep Map There are no pre-defined instances and call to cast will not compile if no instances for the input and output type pair are found so you must define instances in order to use cast",
          "hierarchy": "Generics EMGM Functions Map",
          "module": "Generics.EMGM.Functions.Map",
          "name": "cast",
          "normalized": "a-\u003eb",
          "package": "emgm",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Map.html#v:cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to all elements of a container datatype (kind \u003ccode\u003e* -\u003e *\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Map\",\"Generics.EMGM\"]",
          "name": "map",
          "package": "emgm",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Generics-EMGM-Functions-Map.html#map",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Map.html#v:map\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:map\"]"
        },
        "index": {
          "description": "Apply function to all elements of container datatype kind",
          "hierarchy": "Generics EMGM Functions Map",
          "module": "Generics.EMGM.Functions.Map",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "emgm",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Map.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all \u003ccode\u003ea\u003c/code\u003e-values in \u003ccode\u003ef a\u003c/code\u003e with \u003ccode\u003eb\u003c/code\u003e. Defined as:\n \u003ccode\u003e\n   replace as b = map (const b) as\n \u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Map\",\"Generics.EMGM\"]",
          "name": "replace",
          "package": "emgm",
          "signature": "f a -\u003e b -\u003e f b",
          "source": "src/Generics-EMGM-Functions-Map.html#replace",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Map.html#v:replace\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:replace\"]"
        },
        "index": {
          "description": "Replace all values in with Defined as replace as map const as",
          "hierarchy": "Generics EMGM Functions Map",
          "module": "Generics.EMGM.Functions.Map",
          "name": "replace",
          "normalized": "a b-\u003ec-\u003ea c",
          "package": "emgm",
          "signature": "f a-\u003eb-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Map.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Map",
          "name": "selMap",
          "package": "emgm",
          "signature": "a -\u003e b",
          "source": "src/Generics-EMGM-Functions-Map.html#Map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Map",
          "module": "Generics.EMGM.Functions.Map",
          "name": "selMap",
          "normalized": "a-\u003eb",
          "package": "emgm",
          "partial": "Map",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Map.html#v:selMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Functions for extracting meta-information about the representation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "Meta",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Meta.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Functions for extracting meta-information about the representation",
          "hierarchy": "Generics EMGM Functions Meta",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "Meta",
          "package": "emgm",
          "partial": "Meta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Meta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a generic function that takes one value and returns an optional\n constructor description.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "Con",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Meta.html#Con",
          "type": "newtype"
        },
        "index": {
          "description": "The type of generic function that takes one value and returns an optional constructor description",
          "hierarchy": "Generics EMGM Functions Meta",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "Con",
          "package": "emgm",
          "partial": "Con",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Meta.html#t:Con"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class to reveal the embedding-projection pair for a given datatype and\n its isomorphic representation type.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "HasEP",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Meta.html#HasEP",
          "type": "class"
        },
        "index": {
          "description": "class to reveal the embedding-projection pair for given datatype and its isomorphic representation type",
          "hierarchy": "Generics EMGM Functions Meta",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "HasEP",
          "package": "emgm",
          "partial": "Has EP",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Meta.html#t:HasEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a generic function that takes a boolean to limit recursion and\n a value and returns a list of label descriptions for that constructor.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "Lbls",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Meta.html#Lbls",
          "type": "newtype"
        },
        "index": {
          "description": "The type of generic function that takes boolean to limit recursion and value and returns list of label descriptions for that constructor",
          "hierarchy": "Generics EMGM Functions Meta",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "Lbls",
          "package": "emgm",
          "partial": "Lbls",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Meta.html#t:Lbls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Meta",
          "name": "Con",
          "package": "emgm",
          "signature": "Con",
          "source": "src/Generics-EMGM-Functions-Meta.html#Con",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Meta",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "Con",
          "package": "emgm",
          "partial": "Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Meta.html#v:Con"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Meta",
          "name": "Lbls",
          "package": "emgm",
          "signature": "Lbls",
          "source": "src/Generics-EMGM-Functions-Meta.html#Lbls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Meta",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "Lbls",
          "package": "emgm",
          "partial": "Lbls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Meta.html#v:Lbls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a constructor description if the value is not a primitive. The\n argument is not evaluated and may be \u003ccode\u003eundefined\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Meta\",\"Generics.EMGM\"]",
          "name": "conDescr",
          "package": "emgm",
          "signature": "a -\u003e Maybe ConDescr",
          "source": "src/Generics-EMGM-Functions-Meta.html#conDescr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Meta.html#v:conDescr\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:conDescr\"]"
        },
        "index": {
          "description": "Returns constructor description if the value is not primitive The argument is not evaluated and may be undefined",
          "hierarchy": "Generics EMGM Functions Meta",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "conDescr",
          "normalized": "a-\u003eMaybe ConDescr",
          "package": "emgm",
          "partial": "Descr",
          "signature": "a-\u003eMaybe ConDescr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Meta.html#v:conDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parameter is never evaluated, so \u003ccode\u003eundefined\u003c/code\u003e is acceptable.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "epOf",
          "package": "emgm",
          "signature": "a -\u003e EP a b",
          "source": "src/Generics-EMGM-Functions-Meta.html#epOf",
          "type": "method"
        },
        "index": {
          "description": "The parameter is never evaluated so undefined is acceptable",
          "hierarchy": "Generics EMGM Functions Meta",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "epOf",
          "normalized": "a-\u003eEP a b",
          "package": "emgm",
          "partial": "Of",
          "signature": "a-\u003eEP a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Meta.html#v:epOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of descriptions for all labels in the head constructor. Does\n not recurse into the children. The argument is not evaluated and may be\n \u003ccode\u003eundefined\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Meta\",\"Generics.EMGM\"]",
          "name": "lblDescrs",
          "package": "emgm",
          "signature": "a -\u003e [LblDescr]",
          "source": "src/Generics-EMGM-Functions-Meta.html#lblDescrs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Meta.html#v:lblDescrs\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:lblDescrs\"]"
        },
        "index": {
          "description": "Returns list of descriptions for all labels in the head constructor Does not recurse into the children The argument is not evaluated and may be undefined",
          "hierarchy": "Generics EMGM Functions Meta",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "lblDescrs",
          "normalized": "a-\u003e[LblDescr]",
          "package": "emgm",
          "partial": "Descrs",
          "signature": "a-\u003e[LblDescr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Meta.html#v:lblDescrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Meta",
          "name": "selConstructor",
          "package": "emgm",
          "signature": "a -\u003e Maybe ConDescr",
          "source": "src/Generics-EMGM-Functions-Meta.html#Con",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Meta",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "selConstructor",
          "normalized": "a-\u003eMaybe ConDescr",
          "package": "emgm",
          "partial": "Constructor",
          "signature": "a-\u003eMaybe ConDescr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Meta.html#v:selConstructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Meta",
          "name": "selLabels",
          "package": "emgm",
          "signature": "Bool -\u003e a -\u003e [LblDescr]",
          "source": "src/Generics-EMGM-Functions-Meta.html#Lbls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Meta",
          "module": "Generics.EMGM.Functions.Meta",
          "name": "selLabels",
          "normalized": "Bool-\u003ea-\u003e[LblDescr]",
          "package": "emgm",
          "partial": "Labels",
          "signature": "Bool-\u003ea-\u003e[LblDescr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Meta.html#v:selLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic functions that parse strings to produce values.\n\u003c/p\u003e\u003cp\u003eThe functions in this module involve generically parsing a string and\n producing a value. They rely on the return type to determine the structure\n for parsing. Often, this can be determined by the type checker, but\n you will occasionally need to give an explicit type signature.\n\u003c/p\u003e\u003cp\u003eThe underlying parser is designed to be as similar to \u003ccode\u003ederiving Read\u003c/code\u003e (as\n implemented by GHC) as possible. Refer to documentation in \u003ca\u003eText.Read\u003c/a\u003e for\n details.\n\u003c/p\u003e\u003cp\u003eSince this library does not have access to the syntax of a \u003ccode\u003edata\u003c/code\u003e\n declaration, it relies on \u003ccode\u003e\u003ca\u003eConDescr\u003c/a\u003e\u003c/code\u003e for information. It is important that\n \u003ccode\u003e\u003ca\u003eConDescr\u003c/a\u003e\u003c/code\u003e accurately describe, for each constructor, the name, record\n labels (in same order as declared) if present, and fixity.\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003eGenerics.EMGM.Functions.Show\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Functions.Read",
          "name": "Read",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Read.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic functions that parse strings to produce values The functions in this module involve generically parsing string and producing value They rely on the return type to determine the structure for parsing Often this can be determined by the type checker but you will occasionally need to give an explicit type signature The underlying parser is designed to be as similar to deriving Read as implemented by GHC as possible Refer to documentation in Text.Read for details Since this library does not have access to the syntax of data declaration it relies on ConDescr for information It is important that ConDescr accurately describe for each constructor the name record labels in same order as declared if present and fixity See also Generics.EMGM.Functions.Show",
          "hierarchy": "Generics EMGM Functions Read",
          "module": "Generics.EMGM.Functions.Read",
          "name": "Read",
          "package": "emgm",
          "partial": "Read",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Read.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a generic function that takes a constructor-type argument and\n returns a parser combinator for some type.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Read",
          "name": "Read",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Read.html#Read",
          "type": "newtype"
        },
        "index": {
          "description": "The type of generic function that takes constructor-type argument and returns parser combinator for some type",
          "hierarchy": "Generics EMGM Functions Read",
          "module": "Generics.EMGM.Functions.Read",
          "name": "Read",
          "package": "emgm",
          "partial": "Read",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Read.html#t:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Read",
          "name": "Read",
          "package": "emgm",
          "signature": "Read",
          "source": "src/Generics-EMGM-Functions-Read.html#Read",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Read",
          "module": "Generics.EMGM.Functions.Read",
          "name": "Read",
          "package": "emgm",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Read.html#v:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ereads\u003c/a\u003e\u003c/code\u003e that returns \u003ccode\u003eJust value\u003c/code\u003e on a successful parse.\n Otherwise, \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. Note that a successful parse requires\n the input to be completely consumed.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Read\",\"Generics.EMGM\"]",
          "name": "read",
          "package": "emgm",
          "signature": "String -\u003e Maybe a",
          "source": "src/Generics-EMGM-Functions-Read.html#read",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Read.html#v:read\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:read\"]"
        },
        "index": {
          "description": "variant of reads that returns Just value on successful parse Otherwise read returns Nothing Note that successful parse requires the input to be completely consumed",
          "hierarchy": "Generics EMGM Functions Read",
          "module": "Generics.EMGM.Functions.Read",
          "name": "read",
          "normalized": "String-\u003eMaybe a",
          "package": "emgm",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Read.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eReadP\u003c/a\u003e\u003c/code\u003e parser combinator for the datatype \u003ccode\u003ea\u003c/code\u003e. This can be used\n with \u003ccode\u003eText.ParserCombinators.ReadP\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Read\",\"Generics.EMGM\"]",
          "name": "readP",
          "package": "emgm",
          "signature": "Int-\u003e ReadP a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Read.html#v:readP\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:readP\"]"
        },
        "index": {
          "description": "Generate ReadP parser combinator for the datatype This can be used with Text.ParserCombinators.ReadP",
          "hierarchy": "Generics EMGM Functions Read",
          "module": "Generics.EMGM.Functions.Read",
          "name": "readP",
          "normalized": "Int-\u003eReadP a",
          "package": "emgm",
          "signature": "Int-\u003eReadP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Read.html#v:readP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eReadPrec\u003c/a\u003e\u003c/code\u003e parser combinator for the datatype \u003ccode\u003ea\u003c/code\u003e that handles\n operator precedence. This uses the library in\n \u003ca\u003eText.ParserCombinators.ReadPrec\u003c/a\u003e and should be similar to a derived\n implementation of \u003ccode\u003eText.Read.readPrec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Read\",\"Generics.EMGM\"]",
          "name": "readPrec",
          "package": "emgm",
          "signature": "ReadPrec a",
          "source": "src/Generics-EMGM-Functions-Read.html#readPrec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Read.html#v:readPrec\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:readPrec\"]"
        },
        "index": {
          "description": "Generate ReadPrec parser combinator for the datatype that handles operator precedence This uses the library in Text.ParserCombinators.ReadPrec and should be similar to derived implementation of Text.Read.readPrec",
          "hierarchy": "Generics EMGM Functions Read",
          "module": "Generics.EMGM.Functions.Read",
          "name": "readPrec",
          "package": "emgm",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Read.html#v:readPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e with the minimum precedence (0).\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Read\",\"Generics.EMGM\"]",
          "name": "reads",
          "package": "emgm",
          "signature": "ReadS a",
          "source": "src/Generics-EMGM-Functions-Read.html#reads",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Read.html#v:reads\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:reads\"]"
        },
        "index": {
          "description": "variant of readsPrec with the minimum precedence",
          "hierarchy": "Generics EMGM Functions Read",
          "module": "Generics.EMGM.Functions.Read",
          "name": "reads",
          "package": "emgm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Read.html#v:reads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to parse a value from the front of the string using the given\n precedence. \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e returns a list of (parsed value, remaining string)\n pairs. If parsing fails, \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e returns an empty list.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Read\",\"Generics.EMGM\"]",
          "name": "readsPrec",
          "package": "emgm",
          "signature": "Int-\u003e ReadS a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Read.html#v:readsPrec\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:readsPrec\"]"
        },
        "index": {
          "description": "Attempt to parse value from the front of the string using the given precedence readsPrec returns list of parsed value remaining string pairs If parsing fails readsPrec returns an empty list",
          "hierarchy": "Generics EMGM Functions Read",
          "module": "Generics.EMGM.Functions.Read",
          "name": "readsPrec",
          "normalized": "Int-\u003eReadS a",
          "package": "emgm",
          "partial": "Prec",
          "signature": "Int-\u003eReadS a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Read.html#v:readsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Read",
          "name": "selRead",
          "package": "emgm",
          "signature": "ConType -\u003e ReadPrec a",
          "source": "src/Generics-EMGM-Functions-Read.html#Read",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Read",
          "module": "Generics.EMGM.Functions.Read",
          "name": "selRead",
          "normalized": "ConType-\u003eReadPrec a",
          "package": "emgm",
          "partial": "Read",
          "signature": "ConType-\u003eReadPrec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Read.html#v:selRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic functions that convert values to readable strings.\n\u003c/p\u003e\u003cp\u003eThe functions in this module involve generically producing a string from a\n value of a supported datatype. The functions \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e are\n modeled after those in the class \u003ccode\u003eShow\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eshows\u003c/a\u003e\u003c/code\u003e after the related\n function of the same name.\n\u003c/p\u003e\u003cp\u003eThe underlying unparser is designed to be as similar to \u003ccode\u003ederiving Show\u003c/code\u003e as\n possible. Refer to documentation in \u003ca\u003eText.Show\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eSince this library does not have access to the syntax of a \u003ccode\u003edata\u003c/code\u003e\n declaration, it relies on \u003ccode\u003e\u003ca\u003eConDescr\u003c/a\u003e\u003c/code\u003e for information. It is important that\n \u003ccode\u003e\u003ca\u003eConDescr\u003c/a\u003e\u003c/code\u003e accurately describe, for each constructor, the name, arity, record\n labels (in same order as declared) if present, and fixity.\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003eGenerics.EMGM.Functions.Read\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Functions.Show",
          "name": "Show",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Show.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic functions that convert values to readable strings The functions in this module involve generically producing string from value of supported datatype The functions showsPrec and show are modeled after those in the class Show and shows after the related function of the same name The underlying unparser is designed to be as similar to deriving Show as possible Refer to documentation in Text.Show for details Since this library does not have access to the syntax of data declaration it relies on ConDescr for information It is important that ConDescr accurately describe for each constructor the name arity record labels in same order as declared if present and fixity See also Generics.EMGM.Functions.Read",
          "hierarchy": "Generics EMGM Functions Show",
          "module": "Generics.EMGM.Functions.Show",
          "name": "Show",
          "package": "emgm",
          "partial": "Show",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Show.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a generic function that takes a constructor-type argument, a\n number (precedence), and a value and returns a \u003ccode\u003e\u003ca\u003eShowS\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Show",
          "name": "Show",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Show.html#Show",
          "type": "newtype"
        },
        "index": {
          "description": "The type of generic function that takes constructor-type argument number precedence and value and returns ShowS function",
          "hierarchy": "Generics EMGM Functions Show",
          "module": "Generics.EMGM.Functions.Show",
          "name": "Show",
          "package": "emgm",
          "partial": "Show",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Show.html#t:Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Show",
          "name": "Show",
          "package": "emgm",
          "signature": "Show",
          "source": "src/Generics-EMGM-Functions-Show.html#Show",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Show",
          "module": "Generics.EMGM.Functions.Show",
          "name": "Show",
          "package": "emgm",
          "partial": "Show",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Show.html#v:Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Show",
          "name": "selShow",
          "package": "emgm",
          "signature": "ConType -\u003e Int -\u003e a -\u003e ShowS",
          "source": "src/Generics-EMGM-Functions-Show.html#Show",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Show",
          "module": "Generics.EMGM.Functions.Show",
          "name": "selShow",
          "normalized": "ConType-\u003eInt-\u003ea-\u003eShowS",
          "package": "emgm",
          "partial": "Show",
          "signature": "ConType-\u003eInt-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Show.html#v:selShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eshows\u003c/a\u003e\u003c/code\u003e that returns a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eShowS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Show\",\"Generics.EMGM\"]",
          "name": "show",
          "package": "emgm",
          "signature": "a -\u003e String",
          "source": "src/Generics-EMGM-Functions-Show.html#show",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Show.html#v:show\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:show\"]"
        },
        "index": {
          "description": "variant of shows that returns String instead of ShowS",
          "hierarchy": "Generics EMGM Functions Show",
          "module": "Generics.EMGM.Functions.Show",
          "name": "show",
          "normalized": "a-\u003eString",
          "package": "emgm",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Show.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e with the minimum precedence (0).\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Show\",\"Generics.EMGM\"]",
          "name": "shows",
          "package": "emgm",
          "signature": "a -\u003e ShowS",
          "source": "src/Generics-EMGM-Functions-Show.html#shows",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Show.html#v:shows\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:shows\"]"
        },
        "index": {
          "description": "variant of showsPrec with the minimum precedence",
          "hierarchy": "Generics EMGM Functions Show",
          "module": "Generics.EMGM.Functions.Show",
          "name": "shows",
          "normalized": "a-\u003eShowS",
          "package": "emgm",
          "signature": "a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Show.html#v:shows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value to a readable string starting with the operator precedence\n of the enclosing context.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Show\",\"Generics.EMGM\"]",
          "name": "showsPrec",
          "package": "emgm",
          "signature": "Int-\u003e a-\u003e ShowS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Show.html#v:showsPrec\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:showsPrec\"]"
        },
        "index": {
          "description": "Convert value to readable string starting with the operator precedence of the enclosing context",
          "hierarchy": "Generics EMGM Functions Show",
          "module": "Generics.EMGM.Functions.Show",
          "name": "showsPrec",
          "normalized": "Int-\u003ea-\u003eShowS",
          "package": "emgm",
          "partial": "Prec",
          "signature": "Int-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Show.html#v:showsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic function thats transposes a value \u003ccode\u003ef (g a)\u003c/code\u003e to \u003ccode\u003eg (f a)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is an interesting generic function since it uses multiple other generic\n functions: \u003ccode\u003e\u003ca\u003eCrush\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eZipWith\u003c/a\u003e\u003c/code\u003e. Notably, \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eZipWith\u003c/a\u003e\u003c/code\u003e are required for definining the sum and product cases of the\n generic function. The others make the generic function easy to use.\n\u003c/p\u003e\u003cp\u003eNOTE: Be aware of the special case for empty values noted in the\n documentation of \u003ccode\u003etranpose\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Functions.Transpose",
          "name": "Transpose",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Transpose.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic function thats transposes value to This is an interesting generic function since it uses multiple other generic functions Crush Enum Map and ZipWith Notably Map and ZipWith are required for definining the sum and product cases of the generic function The others make the generic function easy to use NOTE Be aware of the special case for empty values noted in the documentation of tranpose",
          "hierarchy": "Generics EMGM Functions Transpose",
          "module": "Generics.EMGM.Functions.Transpose",
          "name": "Transpose",
          "package": "emgm",
          "partial": "Transpose",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Transpose.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a generic function that takes a generic value and non-generic\n container and returns the container filled with other generic values.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.Transpose",
          "name": "Transpose",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Transpose.html#Transpose",
          "type": "newtype"
        },
        "index": {
          "description": "The type of generic function that takes generic value and non-generic container and returns the container filled with other generic values",
          "hierarchy": "Generics EMGM Functions Transpose",
          "module": "Generics.EMGM.Functions.Transpose",
          "name": "Transpose",
          "package": "emgm",
          "partial": "Transpose",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Transpose.html#t:Transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Transpose",
          "name": "Transpose",
          "package": "emgm",
          "signature": "Transpose",
          "source": "src/Generics-EMGM-Functions-Transpose.html#Transpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Transpose",
          "module": "Generics.EMGM.Functions.Transpose",
          "name": "Transpose",
          "package": "emgm",
          "partial": "Transpose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Transpose.html#v:Transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.Transpose",
          "name": "selTranspose",
          "package": "emgm",
          "signature": "a -\u003e f c -\u003e m (f b)",
          "source": "src/Generics-EMGM-Functions-Transpose.html#Transpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions Transpose",
          "module": "Generics.EMGM.Functions.Transpose",
          "name": "selTranspose",
          "normalized": "a-\u003eb c-\u003ed(b e)",
          "package": "emgm",
          "partial": "Transpose",
          "signature": "a-\u003ef c-\u003em(f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Transpose.html#v:selTranspose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransposes the structure of nested containers (types \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e). \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e\n if the outermost container is empty, because there is no generic way to\n guarantee that both have unit constructors or, if they do, decide which one\n to choose. See \u003ccode\u003e\u003ca\u003etransposeE\u003c/a\u003e\u003c/code\u003e for an alternative approach.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Transpose\",\"Generics.EMGM\"]",
          "name": "transpose",
          "package": "emgm",
          "signature": "f (g a) -\u003e m (g (f a))",
          "source": "src/Generics-EMGM-Functions-Transpose.html#transpose",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Transpose.html#v:transpose\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:transpose\"]"
        },
        "index": {
          "description": "Transposes the structure of nested containers types and fail if the outermost container is empty because there is no generic way to guarantee that both have unit constructors or if they do decide which one to choose See transposeE for an alternative approach",
          "hierarchy": "Generics EMGM Functions Transpose",
          "module": "Generics.EMGM.Functions.Transpose",
          "name": "transpose",
          "normalized": "a(b c)-\u003ed(b(a c))",
          "package": "emgm",
          "signature": "f(g a)-\u003em(g(f a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Transpose.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient version of \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e that returns the \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e value on\n failure.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.Transpose\",\"Generics.EMGM\"]",
          "name": "transposeE",
          "package": "emgm",
          "signature": "f (g a) -\u003e g (f a)",
          "source": "src/Generics-EMGM-Functions-Transpose.html#transposeE",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Transpose.html#v:transposeE\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:transposeE\"]"
        },
        "index": {
          "description": "convenient version of transpose that returns the empty value on failure",
          "hierarchy": "Generics EMGM Functions Transpose",
          "module": "Generics.EMGM.Functions.Transpose",
          "name": "transposeE",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "emgm",
          "signature": "f(g a)-\u003eg(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-Transpose.html#v:transposeE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic function that applies a (non-generic) function to every\n element in a value, splitting the element into two. The result is a pair of\n structurally equivalent values, one with the elements from the first\n component of the splitting function and the other with the elements from the\n second component.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eUnzipWith\u003c/a\u003e\u003c/code\u003e can be seen as the dual of \u003ccode\u003eZipWith\u003c/code\u003e, though it has no direct\n \u003ccode\u003ePrelude\u003c/code\u003e counterpart. Only \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e has a \u003ccode\u003ePrelude\u003c/code\u003e analog.\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003eGenerics.EMGM.Functions.ZipWith\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Functions.UnzipWith",
          "name": "UnzipWith",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-UnzipWith.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic function that applies non-generic function to every element in value splitting the element into two The result is pair of structurally equivalent values one with the elements from the first component of the splitting function and the other with the elements from the second component UnzipWith can be seen as the dual of ZipWith though it has no direct Prelude counterpart Only unzip has Prelude analog See also Generics.EMGM.Functions.ZipWith",
          "hierarchy": "Generics EMGM Functions UnzipWith",
          "module": "Generics.EMGM.Functions.UnzipWith",
          "name": "UnzipWith",
          "package": "emgm",
          "partial": "Unzip With",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-UnzipWith.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a generic function that takes an argument of one type and\n returns a pair of values with two different types.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.UnzipWith",
          "name": "UnzipWith",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-UnzipWith.html#UnzipWith",
          "type": "newtype"
        },
        "index": {
          "description": "The type of generic function that takes an argument of one type and returns pair of values with two different types",
          "hierarchy": "Generics EMGM Functions UnzipWith",
          "module": "Generics.EMGM.Functions.UnzipWith",
          "name": "UnzipWith",
          "package": "emgm",
          "partial": "Unzip With",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-UnzipWith.html#t:UnzipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.UnzipWith",
          "name": "UnzipWith",
          "package": "emgm",
          "signature": "UnzipWith",
          "source": "src/Generics-EMGM-Functions-UnzipWith.html#UnzipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions UnzipWith",
          "module": "Generics.EMGM.Functions.UnzipWith",
          "name": "UnzipWith",
          "package": "emgm",
          "partial": "Unzip With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-UnzipWith.html#v:UnzipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.UnzipWith",
          "name": "selUnzipWith",
          "package": "emgm",
          "signature": "a -\u003e m (b, c)",
          "source": "src/Generics-EMGM-Functions-UnzipWith.html#UnzipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions UnzipWith",
          "module": "Generics.EMGM.Functions.UnzipWith",
          "name": "selUnzipWith",
          "normalized": "a-\u003eb(c,d)",
          "package": "emgm",
          "partial": "Unzip With",
          "signature": "a-\u003em(b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-UnzipWith.html#v:selUnzipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialized version of \u003ccode\u003e\u003ca\u003eunzipWith\u003c/a\u003e\u003c/code\u003e for pairs. Generic version of\n \u003ccode\u003ePrelude.unzip\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.UnzipWith\",\"Generics.EMGM\"]",
          "name": "unzip",
          "package": "emgm",
          "signature": "f (b, c) -\u003e (f b, f c)",
          "source": "src/Generics-EMGM-Functions-UnzipWith.html#unzip",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-UnzipWith.html#v:unzip\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:unzip\"]"
        },
        "index": {
          "description": "specialized version of unzipWith for pairs Generic version of Prelude.unzip",
          "hierarchy": "Generics EMGM Functions UnzipWith",
          "module": "Generics.EMGM.Functions.UnzipWith",
          "name": "unzip",
          "normalized": "a(b,c)-\u003e(a b,a c)",
          "package": "emgm",
          "signature": "f(b,c)-\u003e(f b,f c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-UnzipWith.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialized version of \u003ccode\u003e\u003ca\u003eunzipWithM\u003c/a\u003e\u003c/code\u003e using the identity monad and a\n splitting function that does not fail.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.UnzipWith\",\"Generics.EMGM\"]",
          "name": "unzipWith",
          "package": "emgm",
          "signature": "(a -\u003e (b, c)) -\u003e f a -\u003e (f b, f c)",
          "source": "src/Generics-EMGM-Functions-UnzipWith.html#unzipWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-UnzipWith.html#v:unzipWith\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:unzipWith\"]"
        },
        "index": {
          "description": "specialized version of unzipWithM using the identity monad and splitting function that does not fail",
          "hierarchy": "Generics EMGM Functions UnzipWith",
          "module": "Generics.EMGM.Functions.UnzipWith",
          "name": "unzipWith",
          "normalized": "(a-\u003e(b,c))-\u003ed a-\u003e(d b,d c)",
          "package": "emgm",
          "partial": "With",
          "signature": "(a-\u003e(b,c))-\u003ef a-\u003e(f b,f c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-UnzipWith.html#v:unzipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits a container into two structurally equivalent containers by applying\n a function to every element, which splits it into two corresponding elements.\n Fails if the spliting function fails\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.UnzipWith\",\"Generics.EMGM\"]",
          "name": "unzipWithM",
          "package": "emgm",
          "signature": "(a -\u003e m (b, c))-\u003e f a-\u003e m (f b, f c)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-UnzipWith.html#v:unzipWithM\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:unzipWithM\"]"
        },
        "index": {
          "description": "Splits container into two structurally equivalent containers by applying function to every element which splits it into two corresponding elements Fails if the spliting function fails",
          "hierarchy": "Generics EMGM Functions UnzipWith",
          "module": "Generics.EMGM.Functions.UnzipWith",
          "name": "unzipWithM",
          "normalized": "(a-\u003eb(c,d))-\u003ee a-\u003eb(e c,e d)",
          "package": "emgm",
          "partial": "With",
          "signature": "(a-\u003em(b,c))-\u003ef a-\u003em(f b,f c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-UnzipWith.html#v:unzipWithM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic function that applies a (non-generic) function to every\n pair of corresponding elements in two structurally equivalent polymorphic\n values to produce a third (also structurally equivalent) value with the\n result of each application in every element location.\n\u003c/p\u003e\u003cp\u003eThe important concepts for \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e are \u003cem\u003estructural equivalence\u003c/em\u003e and\n \u003cem\u003ecorresponding elements\u003c/em\u003e. For \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e to be successful (and not \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e),\n its two container arguments must have exactly the same shape. If the shapes\n of the arguments differ, then it is unclear what the shape of the result is\n supposed to be. As a result, \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e will \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCorresponding elements are those elements that are located in the same place\n in the tree of each argument. If you were to traverse the tree to get to\n element x in one tree, then its corresponding element y in the other tree\n should require the exact same path to reach it.\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003eGenerics.EMGM.Functions.UnzipWith\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Functions.ZipWith",
          "name": "ZipWith",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-ZipWith.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic function that applies non-generic function to every pair of corresponding elements in two structurally equivalent polymorphic values to produce third also structurally equivalent value with the result of each application in every element location The important concepts for zipWithM are structural equivalence and corresponding elements For zipWithM to be successful and not fail its two container arguments must have exactly the same shape If the shapes of the arguments differ then it is unclear what the shape of the result is supposed to be As result zipWithM will fail Corresponding elements are those elements that are located in the same place in the tree of each argument If you were to traverse the tree to get to element in one tree then its corresponding element in the other tree should require the exact same path to reach it See also Generics.EMGM.Functions.UnzipWith",
          "hierarchy": "Generics EMGM Functions ZipWith",
          "module": "Generics.EMGM.Functions.ZipWith",
          "name": "ZipWith",
          "package": "emgm",
          "partial": "Zip With",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-ZipWith.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a generic function that takes two arguments of two different\n types and returns a value of a third type in a Monad.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Functions.ZipWith",
          "name": "ZipWith",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-ZipWith.html#ZipWith",
          "type": "newtype"
        },
        "index": {
          "description": "The type of generic function that takes two arguments of two different types and returns value of third type in Monad",
          "hierarchy": "Generics EMGM Functions ZipWith",
          "module": "Generics.EMGM.Functions.ZipWith",
          "name": "ZipWith",
          "package": "emgm",
          "partial": "Zip With",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-ZipWith.html#t:ZipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.ZipWith",
          "name": "ZipWith",
          "package": "emgm",
          "signature": "ZipWith",
          "source": "src/Generics-EMGM-Functions-ZipWith.html#ZipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions ZipWith",
          "module": "Generics.EMGM.Functions.ZipWith",
          "name": "ZipWith",
          "package": "emgm",
          "partial": "Zip With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-ZipWith.html#v:ZipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Functions.ZipWith",
          "name": "selZipWith",
          "package": "emgm",
          "signature": "a -\u003e b -\u003e m c",
          "source": "src/Generics-EMGM-Functions-ZipWith.html#ZipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Functions ZipWith",
          "module": "Generics.EMGM.Functions.ZipWith",
          "name": "selZipWith",
          "normalized": "a-\u003eb-\u003ec d",
          "package": "emgm",
          "partial": "Zip With",
          "signature": "a-\u003eb-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-ZipWith.html#v:selZipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialized version of \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e for pairs. Generic version of\n \u003ccode\u003ePrelude.zip\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.ZipWith\",\"Generics.EMGM\"]",
          "name": "zip",
          "package": "emgm",
          "signature": "f a -\u003e f b -\u003e Maybe (f (a, b))",
          "source": "src/Generics-EMGM-Functions-ZipWith.html#zip",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-ZipWith.html#v:zip\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:zip\"]"
        },
        "index": {
          "description": "specialized version of zipWith for pairs Generic version of Prelude.zip",
          "hierarchy": "Generics EMGM Functions ZipWith",
          "module": "Generics.EMGM.Functions.ZipWith",
          "name": "zip",
          "normalized": "a b-\u003ea c-\u003eMaybe(a(b,c))",
          "package": "emgm",
          "signature": "f a-\u003ef b-\u003eMaybe(f(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-ZipWith.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialized version of \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e monad and a binary\n operator that does not fail. Generic version of \u003ccode\u003ePrelude.zipWith\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.ZipWith\",\"Generics.EMGM\"]",
          "name": "zipWith",
          "package": "emgm",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e Maybe (f c)",
          "source": "src/Generics-EMGM-Functions-ZipWith.html#zipWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-ZipWith.html#v:zipWith\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:zipWith\"]"
        },
        "index": {
          "description": "specialized version of zipWithM for the Maybe monad and binary operator that does not fail Generic version of Prelude.zipWith",
          "hierarchy": "Generics EMGM Functions ZipWith",
          "module": "Generics.EMGM.Functions.ZipWith",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003eMaybe(d c)",
          "package": "emgm",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003eMaybe(f c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-ZipWith.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two structurally equivalent containers into one by applying a\n function to every corresponding pair of elements. Fails if (1) the binary\n operator fails or (2) \u003ccode\u003ef a\u003c/code\u003e and \u003ccode\u003ef b\u003c/code\u003e have different shapes.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Functions.ZipWith\",\"Generics.EMGM\"]",
          "name": "zipWithM",
          "package": "emgm",
          "signature": "(a -\u003e b -\u003e m c)-\u003e f a-\u003e f b-\u003e m (f c)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-ZipWith.html#v:zipWithM\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:zipWithM\"]"
        },
        "index": {
          "description": "Combine two structurally equivalent containers into one by applying function to every corresponding pair of elements Fails if the binary operator fails or and have different shapes",
          "hierarchy": "Generics EMGM Functions ZipWith",
          "module": "Generics.EMGM.Functions.ZipWith",
          "name": "zipWithM",
          "normalized": "(a-\u003eb-\u003ec d)-\u003ee a-\u003ee b-\u003ec(e d)",
          "package": "emgm",
          "partial": "With",
          "signature": "(a-\u003eb-\u003em c)-\u003ef a-\u003ef b-\u003em(f c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Functions-ZipWith.html#v:zipWithM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Types and related functions for the representation used in EMGM.\n\u003c/p\u003e\u003cp\u003eEMGM uses a generic sum-of-products view of datatypes encoded into the\n \u003ccode\u003e\u003ca\u003eUnit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e:+:\u003c/code\u003e (sum), and \u003ccode\u003e:*:\u003c/code\u003e (product). Many Haskell datatypes can be\n represented in this way. Right-nested sums replace the \u003ccode\u003e|\u003c/code\u003e, and right-nested\n products replace the arguments to a constructor. Units replace constructors\n with no arguments.\n\u003c/p\u003e\u003cp\u003eSince constructors encode more than just a list of arguments, this library\n uses \u003ccode\u003e\u003ca\u003eConDescr\u003c/a\u003e\u003c/code\u003e to store that information. This includes name, arity, record\n labels, fixity, and operator precedence. Constructor descriptions are useful\n for generic operations such as \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and possibly others.\n\u003c/p\u003e\u003cp\u003eGeneric functions need to convert values between the Haskell datatype and its\n structure representation. This is done using the embedding-projection pair,\n which is simply a pair a functions for translating between two types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "Representation",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Types and related functions for the representation used in EMGM EMGM uses generic sum-of-products view of datatypes encoded into the Unit sum and product Many Haskell datatypes can be represented in this way Right-nested sums replace the and right-nested products replace the arguments to constructor Units replace constructors with no arguments Since constructors encode more than just list of arguments this library uses ConDescr to store that information This includes name arity record labels fixity and operator precedence Constructor descriptions are useful for generic operations such as Read and Show and possibly others Generic functions need to convert values between the Haskell datatype and its structure representation This is done using the embedding-projection pair which is simply pair functions for translating between two types",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "Representation",
          "package": "emgm",
          "partial": "Representation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"product\" encodes 2 constructor arguments. An analogous standard\n Haskell type is \u003ccode\u003e(a, b)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": ":*:",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#%3A%2A%3A",
          "type": "data"
        },
        "index": {
          "description": "The product encodes constructor arguments An analogous standard Haskell type is",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": ":*:",
          "package": "emgm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"sum\" encodes 2 constructor alternatives. An analogous standard\n Haskell type is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": ":+:",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "description": "The sum encodes constructor alternatives An analogous standard Haskell type is Either",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": ":+:",
          "package": "emgm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constructor's associativity.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "Associativity",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#Associativity",
          "type": "data"
        },
        "index": {
          "description": "constructor associativity",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "Associativity",
          "package": "emgm",
          "partial": "Associativity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#t:Associativity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains useful meta-information about the syntax used in a constructor\n declaration.\n\u003c/p\u003e\u003cp\u003eNOTE: It is important that the \u003ccode\u003e\u003ca\u003eConDescr\u003c/a\u003e\u003c/code\u003e value accurately describe the\n syntax in a constructor declaration. An incorrect description may lead to\n faulty \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "ConDescr",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#ConDescr",
          "type": "data"
        },
        "index": {
          "description": "Contains useful meta-information about the syntax used in constructor declaration NOTE It is important that the ConDescr value accurately describe the syntax in constructor declaration An incorrect description may lead to faulty Read or Show operation",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "ConDescr",
          "package": "emgm",
          "partial": "Con Descr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#t:ConDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of constructor syntax. Used in the generic functions \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "ConType",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#ConType",
          "type": "data"
        },
        "index": {
          "description": "Type of constructor syntax Used in the generic functions Read and Show",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "ConType",
          "package": "emgm",
          "partial": "Con Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#t:ConType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe embedding-projection pair contains two functions for converting between\n the datatype and its representation. An \u003ccode\u003eEP\u003c/code\u003e value preserves an isomorphism\n (ignoring \u003ccode\u003e_|_\u003c/code\u003es) between a datatype and its structure representation.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "EP",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#EP",
          "type": "data"
        },
        "index": {
          "description": "The embedding-projection pair contains two functions for converting between the datatype and its representation An EP value preserves an isomorphism ignoring between datatype and its structure representation",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "EP",
          "package": "emgm",
          "partial": "EP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#t:EP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constructor's fixity, associativity, and precedence.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "Fixity",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#Fixity",
          "type": "data"
        },
        "index": {
          "description": "constructor fixity associativity and precedence",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "Fixity",
          "package": "emgm",
          "partial": "Fixity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#t:Fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodes the string label for a field in a constructor defined with labeled\n fields (a.k.a. record syntax).\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "LblDescr",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#LblDescr",
          "type": "newtype"
        },
        "index": {
          "description": "Encodes the string label for field in constructor defined with labeled fields a.k.a record syntax",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "LblDescr",
          "package": "emgm",
          "partial": "Lbl Descr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#t:LblDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Representation",
          "name": "Prec",
          "package": "emgm",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "Prec",
          "package": "emgm",
          "partial": "Prec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#t:Prec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodes a constructor with no arguments. An analogous standard Haskell type\n is \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "Unit",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#Unit",
          "type": "data"
        },
        "index": {
          "description": "Encodes constructor with no arguments An analogous standard Haskell type is",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "Unit",
          "package": "emgm",
          "partial": "Unit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#t:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pair of arguments\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": ":*:",
          "package": "emgm",
          "signature": "a :*: b",
          "source": "src/Generics-EMGM-Representation.html#%3A%2A%3A",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v::-42-:\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v::-42-:\"]"
        },
        "index": {
          "description": "pair of arguments",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": ":*:",
          "package": "emgm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "ConDescr",
          "package": "emgm",
          "signature": "ConDescr",
          "source": "src/Generics-EMGM-Representation.html#ConDescr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:ConDescr\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:ConDescr\"]"
        },
        "index": {
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "ConDescr",
          "package": "emgm",
          "partial": "Con Descr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:ConDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "EP",
          "package": "emgm",
          "signature": "EP",
          "source": "src/Generics-EMGM-Representation.html#EP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:EP\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:EP\"]"
        },
        "index": {
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "EP",
          "package": "emgm",
          "partial": "EP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:EP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "Infix",
          "package": "emgm",
          "signature": "Infix Associativity Prec",
          "source": "src/Generics-EMGM-Representation.html#Fixity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:Infix\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:Infix\"]"
        },
        "index": {
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "Infix",
          "package": "emgm",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix with symbol (no record syntax)\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "InfixC",
          "package": "emgm",
          "signature": "InfixC String",
          "source": "src/Generics-EMGM-Representation.html#ConType",
          "type": "function"
        },
        "index": {
          "description": "Infix with symbol no record syntax",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "InfixC",
          "package": "emgm",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:InfixC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft alternative\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "L",
          "package": "emgm",
          "signature": "L a",
          "source": "src/Generics-EMGM-Representation.html#%3A%2B%3A",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:L\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:L\"]"
        },
        "index": {
          "description": "Left alternative",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "L",
          "package": "emgm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "LblDescr",
          "package": "emgm",
          "signature": "LblDescr String",
          "source": "src/Generics-EMGM-Representation.html#LblDescr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:LblDescr\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:LblDescr\"]"
        },
        "index": {
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "LblDescr",
          "package": "emgm",
          "partial": "Lbl Descr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:LblDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclared with infixl\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "LeftAssoc",
          "package": "emgm",
          "signature": "LeftAssoc",
          "source": "src/Generics-EMGM-Representation.html#Associativity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:LeftAssoc\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:LeftAssoc\"]"
        },
        "index": {
          "description": "Declared with infixl",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "LeftAssoc",
          "package": "emgm",
          "partial": "Left Assoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:LeftAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclared with infix\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "NonAssoc",
          "package": "emgm",
          "signature": "NonAssoc",
          "source": "src/Generics-EMGM-Representation.html#Associativity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:NonAssoc\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:NonAssoc\"]"
        },
        "index": {
          "description": "Declared with infix",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "NonAssoc",
          "package": "emgm",
          "partial": "Non Assoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:NonAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormal prefix-style constructor\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "NormalC",
          "package": "emgm",
          "signature": "NormalC",
          "source": "src/Generics-EMGM-Representation.html#ConType",
          "type": "function"
        },
        "index": {
          "description": "Normal prefix-style constructor",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "NormalC",
          "package": "emgm",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:NormalC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociativity and precedence are the same as function application.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "Prefix",
          "package": "emgm",
          "signature": "Prefix",
          "source": "src/Generics-EMGM-Representation.html#Fixity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:Prefix\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:Prefix\"]"
        },
        "index": {
          "description": "Associativity and precedence are the same as function application",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "Prefix",
          "package": "emgm",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight alternative\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "R",
          "package": "emgm",
          "signature": "R b",
          "source": "src/Generics-EMGM-Representation.html#%3A%2B%3A",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:R\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:R\"]"
        },
        "index": {
          "description": "Right alternative",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "R",
          "package": "emgm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecord-style (any fixity)\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "RecordC",
          "package": "emgm",
          "signature": "RecordC",
          "source": "src/Generics-EMGM-Representation.html#ConType",
          "type": "function"
        },
        "index": {
          "description": "Record-style any fixity",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "RecordC",
          "package": "emgm",
          "partial": "Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:RecordC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclared with infixr\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "RightAssoc",
          "package": "emgm",
          "signature": "RightAssoc",
          "source": "src/Generics-EMGM-Representation.html#Associativity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:RightAssoc\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:RightAssoc\"]"
        },
        "index": {
          "description": "Declared with infixr",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "RightAssoc",
          "package": "emgm",
          "partial": "Right Assoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:RightAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe only value of type \u003ccode\u003eUnit\u003c/code\u003e (ignoring \u003ccode\u003e_|_\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "Unit",
          "package": "emgm",
          "signature": "Unit",
          "source": "src/Generics-EMGM-Representation.html#Unit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:Unit\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:Unit\"]"
        },
        "index": {
          "description": "The only value of type Unit ignoring",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "Unit",
          "package": "emgm",
          "partial": "Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHave not seen the rcon yet\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "UnknownC",
          "package": "emgm",
          "signature": "UnknownC",
          "source": "src/Generics-EMGM-Representation.html#ConType",
          "type": "function"
        },
        "index": {
          "description": "Have not seen the rcon yet",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "UnknownC",
          "package": "emgm",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:UnknownC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecedence for function application: 10\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "appPrec",
          "package": "emgm",
          "signature": "Prec",
          "source": "src/Generics-EMGM-Representation.html#appPrec",
          "type": "function"
        },
        "index": {
          "description": "Precedence for function application",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "appPrec",
          "package": "emgm",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:appPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of fields.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "conArity",
          "package": "emgm",
          "signature": "Int",
          "source": "src/Generics-EMGM-Representation.html#ConDescr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:conArity\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:conArity\"]"
        },
        "index": {
          "description": "Number of fields",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "conArity",
          "package": "emgm",
          "partial": "Arity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:conArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFixity, associativity, precedence.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "conFixity",
          "package": "emgm",
          "signature": "Fixity",
          "source": "src/Generics-EMGM-Representation.html#ConDescr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:conFixity\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:conFixity\"]"
        },
        "index": {
          "description": "Fixity associativity precedence",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "conFixity",
          "package": "emgm",
          "partial": "Fixity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:conFixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the constructor (without parenthesese if infix).\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "conName",
          "package": "emgm",
          "signature": "String",
          "source": "src/Generics-EMGM-Representation.html#ConDescr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:conName\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:conName\"]"
        },
        "index": {
          "description": "Name of the constructor without parenthesese if infix",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "conName",
          "package": "emgm",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:conName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses labeled fields (a.k.a. record syntax).\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "conRecord",
          "package": "emgm",
          "signature": "Bool",
          "source": "src/Generics-EMGM-Representation.html#ConDescr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:conRecord\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:conRecord\"]"
        },
        "index": {
          "description": "Uses labeled fields a.k.a record syntax",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "conRecord",
          "package": "emgm",
          "partial": "Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:conRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a \u003ccode\u003ed\u003c/code\u003eatatype into its \u003ccode\u003er\u003c/code\u003eepresentation.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "from",
          "package": "emgm",
          "signature": "d -\u003e r",
          "source": "src/Generics-EMGM-Representation.html#EP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:from\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:from\"]"
        },
        "index": {
          "description": "Embed atatype into its epresentation",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "from",
          "normalized": "a-\u003eb",
          "package": "emgm",
          "signature": "d-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum precedence: 11\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "maxPrec",
          "package": "emgm",
          "signature": "Prec",
          "source": "src/Generics-EMGM-Representation.html#maxPrec",
          "type": "function"
        },
        "index": {
          "description": "Maximum precedence",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "maxPrec",
          "package": "emgm",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:maxPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM.Representation",
          "name": "minPrec",
          "package": "emgm",
          "signature": "Prec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "minPrec",
          "package": "emgm",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:minPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the precedence of a fixity value.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "prec",
          "package": "emgm",
          "signature": "Fixity -\u003e Prec",
          "source": "src/Generics-EMGM-Representation.html#prec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:prec\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:prec\"]"
        },
        "index": {
          "description": "Get the precedence of fixity value",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "prec",
          "normalized": "Fixity-\u003ePrec",
          "package": "emgm",
          "signature": "Fixity-\u003ePrec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:prec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecedence for record construction: 11\n\u003c/p\u003e",
          "module": "Generics.EMGM.Representation",
          "name": "recPrec",
          "package": "emgm",
          "signature": "Prec",
          "source": "src/Generics-EMGM-Representation.html#recPrec",
          "type": "function"
        },
        "index": {
          "description": "Precedence for record construction",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "recPrec",
          "package": "emgm",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:recPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProject \u003ccode\u003ed\u003c/code\u003eatatype from its \u003ccode\u003er\u003c/code\u003eepresentation.\n\u003c/p\u003e",
          "module": "[\"Generics.EMGM.Representation\",\"Generics.EMGM\"]",
          "name": "to",
          "package": "emgm",
          "signature": "r -\u003e d",
          "source": "src/Generics-EMGM-Representation.html#EP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:to\",\"http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:to\"]"
        },
        "index": {
          "description": "Project atatype from its epresentation",
          "hierarchy": "Generics EMGM Representation",
          "module": "Generics.EMGM.Representation",
          "name": "to",
          "normalized": "a-\u003eb",
          "package": "emgm",
          "signature": "r-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM-Representation.html#v:to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEMGM is \"Extensible and Modular Generics for the Masses,\" a library for\n datatype-generic programming in Haskell.\n\u003c/p\u003e\u003cp\u003eThis module exports the most commonly used types, classes, and functions. The\n documentation is organized by topic for convenient access.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.EMGM",
          "name": "EMGM",
          "package": "emgm",
          "source": "src/Generics-EMGM.html",
          "type": "module"
        },
        "index": {
          "description": "EMGM is Extensible and Modular Generics for the Masses library for datatype-generic programming in Haskell This module exports the most commonly used types classes and functions The documentation is organized by topic for convenient access",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "EMGM",
          "package": "emgm",
          "partial": "EMGM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"product\" encodes 2 constructor arguments. An analogous standard\n Haskell type is \u003ccode\u003e(a, b)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": ":*:",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#%3A%2A%3A",
          "type": "data"
        },
        "index": {
          "description": "The product encodes constructor arguments An analogous standard Haskell type is",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": ":*:",
          "package": "emgm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"sum\" encodes 2 constructor alternatives. An analogous standard\n Haskell type is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": ":+:",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "description": "The sum encodes constructor alternatives An analogous standard Haskell type is Either",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": ":+:",
          "package": "emgm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociativity of the binary operator used for \u003ccode\u003e\u003ca\u003ecrush\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "Assoc",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Crush.html#Assoc",
          "type": "data"
        },
        "index": {
          "description": "Associativity of the binary operator used for crush",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "Assoc",
          "package": "emgm",
          "partial": "Assoc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:Assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constructor's associativity.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "Associativity",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#Associativity",
          "type": "data"
        },
        "index": {
          "description": "constructor associativity",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "Associativity",
          "package": "emgm",
          "partial": "Associativity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:Associativity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation dispatcher for bifunctor types (kind \u003ccode\u003e* -\u003e *\u003c/code\u003e) used with\n \u003ccode\u003e\u003ca\u003eGeneric2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "BiFRep2",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#BiFRep2",
          "type": "class"
        },
        "index": {
          "description": "Representation dispatcher for bifunctor types kind used with Generic2",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "BiFRep2",
          "package": "emgm",
          "partial": "Bi FRep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:BiFRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains useful meta-information about the syntax used in a constructor\n declaration.\n\u003c/p\u003e\u003cp\u003eNOTE: It is important that the \u003ccode\u003e\u003ca\u003eConDescr\u003c/a\u003e\u003c/code\u003e value accurately describe the\n syntax in a constructor declaration. An incorrect description may lead to\n faulty \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "ConDescr",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#ConDescr",
          "type": "data"
        },
        "index": {
          "description": "Contains useful meta-information about the syntax used in constructor declaration NOTE It is important that the ConDescr value accurately describe the syntax in constructor declaration An incorrect description may lead to faulty Read or Show operation",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "ConDescr",
          "package": "emgm",
          "partial": "Con Descr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:ConDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe embedding-projection pair contains two functions for converting between\n the datatype and its representation. An \u003ccode\u003eEP\u003c/code\u003e value preserves an isomorphism\n (ignoring \u003ccode\u003e_|_\u003c/code\u003es) between a datatype and its structure representation.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "EP",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#EP",
          "type": "data"
        },
        "index": {
          "description": "The embedding-projection pair contains two functions for converting between the datatype and its representation An EP value preserves an isomorphism ignoring between datatype and its structure representation",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "EP",
          "package": "emgm",
          "partial": "EP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:EP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation dispatcher for functor types (kind \u003ccode\u003e* -\u003e *\u003c/code\u003e) used with\n \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "FRep",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#FRep",
          "type": "class"
        },
        "index": {
          "description": "Representation dispatcher for functor types kind used with Generic",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "FRep",
          "package": "emgm",
          "partial": "FRep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:FRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation dispatcher for functor types (kind \u003ccode\u003e* -\u003e *\u003c/code\u003e) used with\n \u003ccode\u003e\u003ca\u003eGeneric2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "FRep2",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#FRep2",
          "type": "class"
        },
        "index": {
          "description": "Representation dispatcher for functor types kind used with Generic2",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "FRep2",
          "package": "emgm",
          "partial": "FRep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:FRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation dispatcher for functor types (kind \u003ccode\u003e* -\u003e *\u003c/code\u003e) used with\n \u003ccode\u003e\u003ca\u003eGeneric3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "FRep3",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#FRep3",
          "type": "class"
        },
        "index": {
          "description": "Representation dispatcher for functor types kind used with Generic3",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "FRep3",
          "package": "emgm",
          "partial": "FRep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:FRep3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constructor's fixity, associativity, and precedence.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "Fixity",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#Fixity",
          "type": "data"
        },
        "index": {
          "description": "constructor fixity associativity and precedence",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "Fixity",
          "package": "emgm",
          "partial": "Fixity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:Fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class forms the foundation for defining generic functions with a\n single generic argument. Each method represents a type case. There are cases\n for primitive types, structural representation types, and for user-defined\n datatypes.\n\u003c/p\u003e\u003cp\u003eThe included modules using \u003ccode\u003eGeneric\u003c/code\u003e are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Collect\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Compare\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Constructor\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Crush\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Enum\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Read\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Show\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Generics.EMGM",
          "name": "Generic",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#Generic",
          "type": "class"
        },
        "index": {
          "description": "This class forms the foundation for defining generic functions with single generic argument Each method represents type case There are cases for primitive types structural representation types and for user-defined datatypes The included modules using Generic are Generics.EMGM.Functions.Collect Generics.EMGM.Functions.Compare Generics.EMGM.Functions.Constructor Generics.EMGM.Functions.Crush Generics.EMGM.Functions.Enum Generics.EMGM.Functions.Read Generics.EMGM.Functions.Show",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "Generic",
          "package": "emgm",
          "partial": "Generic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:Generic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class forms the foundation for defining generic functions with two\n generic arguments. See \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003cp\u003eThe included modules using \u003ccode\u003eGeneric2\u003c/code\u003e are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Map\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.Transpose\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Generics.EMGM",
          "name": "Generic2",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#Generic2",
          "type": "class"
        },
        "index": {
          "description": "This class forms the foundation for defining generic functions with two generic arguments See Generic for details The included modules using Generic2 are Generics.EMGM.Functions.Map Generics.EMGM.Functions.Transpose",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "Generic2",
          "package": "emgm",
          "partial": "Generic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:Generic2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class forms the foundation for defining generic functions with three\n generic arguments. See \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003cp\u003eThe included modules using \u003ccode\u003eGeneric3\u003c/code\u003e are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.UnzipWith\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eGenerics.EMGM.Functions.ZipWith\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Generics.EMGM",
          "name": "Generic3",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#Generic3",
          "type": "class"
        },
        "index": {
          "description": "This class forms the foundation for defining generic functions with three generic arguments See Generic for details The included modules using Generic3 are Generics.EMGM.Functions.UnzipWith Generics.EMGM.Functions.ZipWith",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "Generic3",
          "package": "emgm",
          "partial": "Generic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:Generic3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class to reveal the embedding-projection pair for a given datatype and\n its isomorphic representation type.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "HasEP",
          "package": "emgm",
          "source": "src/Generics-EMGM-Functions-Meta.html#HasEP",
          "type": "class"
        },
        "index": {
          "description": "class to reveal the embedding-projection pair for given datatype and its isomorphic representation type",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "HasEP",
          "package": "emgm",
          "partial": "Has EP",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:HasEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodes the string label for a field in a constructor defined with labeled\n fields (a.k.a. record syntax).\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "LblDescr",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#LblDescr",
          "type": "newtype"
        },
        "index": {
          "description": "Encodes the string label for field in constructor defined with labeled fields a.k.a record syntax",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "LblDescr",
          "package": "emgm",
          "partial": "Lbl Descr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:LblDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "Prec",
          "package": "emgm",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "Prec",
          "package": "emgm",
          "partial": "Prec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:Prec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation dispatcher for monomorphic types (kind \u003ccode\u003e*\u003c/code\u003e) used with\n \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e. Every structure type and supported datatype should have an\n instance of \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "Rep",
          "package": "emgm",
          "source": "src/Generics-EMGM-Base.html#Rep",
          "type": "class"
        },
        "index": {
          "description": "Representation dispatcher for monomorphic types kind used with Generic Every structure type and supported datatype should have an instance of Rep",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "Rep",
          "package": "emgm",
          "partial": "Rep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:Rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodes a constructor with no arguments. An analogous standard Haskell type\n is \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "Unit",
          "package": "emgm",
          "source": "src/Generics-EMGM-Representation.html#Unit",
          "type": "data"
        },
        "index": {
          "description": "Encodes constructor with no arguments An analogous standard Haskell type is",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "Unit",
          "package": "emgm",
          "partial": "Unit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#t:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "bifrep2",
          "package": "emgm",
          "signature": "g a1 b1 -\u003e g a2 b2 -\u003e g (f a1 a2) (f b1 b2)",
          "source": "src/Generics-EMGM-Base.html#bifrep2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "bifrep2",
          "normalized": "a b c-\u003ea b c-\u003ea(d b b)(d c c)",
          "package": "emgm",
          "signature": "g a b-\u003eg a b-\u003eg(f a a)(f b b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:bifrep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parameter is never evaluated, so \u003ccode\u003eundefined\u003c/code\u003e is acceptable.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "epOf",
          "package": "emgm",
          "signature": "a -\u003e EP a b",
          "source": "src/Generics-EMGM-Functions-Meta.html#epOf",
          "type": "method"
        },
        "index": {
          "description": "The parameter is never evaluated so undefined is acceptable",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "epOf",
          "normalized": "a-\u003eEP a b",
          "package": "emgm",
          "partial": "Of",
          "signature": "a-\u003eEP a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:epOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "frep",
          "package": "emgm",
          "signature": "g a -\u003e g (f a)",
          "source": "src/Generics-EMGM-Base.html#frep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "frep",
          "normalized": "a b-\u003ea(c b)",
          "package": "emgm",
          "signature": "g a-\u003eg(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:frep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "frep2",
          "package": "emgm",
          "signature": "g a b -\u003e g (f a) (f b)",
          "source": "src/Generics-EMGM-Base.html#frep2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "frep2",
          "normalized": "a b c-\u003ea(d b)(d c)",
          "package": "emgm",
          "signature": "g a b-\u003eg(f a)(f b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:frep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "frep3",
          "package": "emgm",
          "signature": "g a b c -\u003e g (f a) (f b) (f c)",
          "source": "src/Generics-EMGM-Base.html#frep3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "frep3",
          "normalized": "a b c d-\u003ea(e b)(e c)(e d)",
          "package": "emgm",
          "signature": "g a b c-\u003eg(f a)(f b)(f c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:frep3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the primitive type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "rchar",
          "package": "emgm",
          "signature": "g Char",
          "source": "src/Generics-EMGM-Base.html#rchar",
          "type": "method"
        },
        "index": {
          "description": "Case for the primitive type Char",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rchar",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rchar2",
          "package": "emgm",
          "signature": "g Char Char",
          "source": "src/Generics-EMGM-Base.html#rchar2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rchar2",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rchar2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rchar3",
          "package": "emgm",
          "signature": "g Char Char Char",
          "source": "src/Generics-EMGM-Base.html#rchar3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rchar3",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rchar3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for constructors. It is used to hold the meta-information about a\n constructor, e.g. name, arity, fixity, etc. This is not needed for many\n generic functions, so the default implementation is:\n\u003c/p\u003e\u003cpre\u003e\n   rcon = const id\n\u003c/pre\u003e",
          "module": "Generics.EMGM",
          "name": "rcon",
          "package": "emgm",
          "signature": "ConDescr -\u003e g a -\u003e g a",
          "source": "src/Generics-EMGM-Base.html#rcon",
          "type": "method"
        },
        "index": {
          "description": "Case for constructors It is used to hold the meta-information about constructor e.g name arity fixity etc This is not needed for many generic functions so the default implementation is rcon const id",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rcon",
          "normalized": "ConDescr-\u003ea b-\u003ea b",
          "package": "emgm",
          "signature": "ConDescr-\u003eg a-\u003eg a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rcon2",
          "package": "emgm",
          "signature": "ConDescr -\u003e g a1 a2 -\u003e g a1 a2",
          "source": "src/Generics-EMGM-Base.html#rcon2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rcon2",
          "normalized": "ConDescr-\u003ea b b-\u003ea b b",
          "package": "emgm",
          "signature": "ConDescr-\u003eg a a-\u003eg a a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rcon2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rcon3",
          "package": "emgm",
          "signature": "ConDescr -\u003e g a1 a2 a3 -\u003e g a1 a2 a3",
          "source": "src/Generics-EMGM-Base.html#rcon3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rcon3",
          "normalized": "ConDescr-\u003ea b b b-\u003ea b b b",
          "package": "emgm",
          "signature": "ConDescr-\u003eg a a a-\u003eg a a a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rcon3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the primitive type \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "rdouble",
          "package": "emgm",
          "signature": "g Double",
          "source": "src/Generics-EMGM-Base.html#rdouble",
          "type": "method"
        },
        "index": {
          "description": "Case for the primitive type Double",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rdouble",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rdouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rdouble2",
          "package": "emgm",
          "signature": "g Double Double",
          "source": "src/Generics-EMGM-Base.html#rdouble2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rdouble2",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rdouble2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rdouble3",
          "package": "emgm",
          "signature": "g Double Double Double",
          "source": "src/Generics-EMGM-Base.html#rdouble3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rdouble3",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rdouble3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rep",
          "package": "emgm",
          "signature": "g a",
          "source": "src/Generics-EMGM-Base.html#rep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rep",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the primitive type \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "rfloat",
          "package": "emgm",
          "signature": "g Float",
          "source": "src/Generics-EMGM-Base.html#rfloat",
          "type": "method"
        },
        "index": {
          "description": "Case for the primitive type Float",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rfloat",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rfloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rfloat2",
          "package": "emgm",
          "signature": "g Float Float",
          "source": "src/Generics-EMGM-Base.html#rfloat2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rfloat2",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rfloat2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rfloat3",
          "package": "emgm",
          "signature": "g Float Float Float",
          "source": "src/Generics-EMGM-Base.html#rfloat3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rfloat3",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rfloat3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the primitive type \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "rint",
          "package": "emgm",
          "signature": "g Int",
          "source": "src/Generics-EMGM-Base.html#rint",
          "type": "method"
        },
        "index": {
          "description": "Case for the primitive type Int",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rint",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rint2",
          "package": "emgm",
          "signature": "g Int Int",
          "source": "src/Generics-EMGM-Base.html#rint2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rint2",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rint2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rint3",
          "package": "emgm",
          "signature": "g Int Int Int",
          "source": "src/Generics-EMGM-Base.html#rint3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rint3",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rint3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the primitive type \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "rinteger",
          "package": "emgm",
          "signature": "g Integer",
          "source": "src/Generics-EMGM-Base.html#rinteger",
          "type": "method"
        },
        "index": {
          "description": "Case for the primitive type Integer",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rinteger",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rinteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rinteger2",
          "package": "emgm",
          "signature": "g Integer Integer",
          "source": "src/Generics-EMGM-Base.html#rinteger2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rinteger2",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rinteger2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rinteger3",
          "package": "emgm",
          "signature": "g Integer Integer Integer",
          "source": "src/Generics-EMGM-Base.html#rinteger3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rinteger3",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rinteger3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for labeled field. Contains the label string. This is not needed for\n many generic functions, so the default implementation is:\n\u003c/p\u003e\u003cpre\u003e\n   rlbl = const id\n\u003c/pre\u003e",
          "module": "Generics.EMGM",
          "name": "rlbl",
          "package": "emgm",
          "signature": "LblDescr -\u003e g a -\u003e g a",
          "source": "src/Generics-EMGM-Base.html#rlbl",
          "type": "method"
        },
        "index": {
          "description": "Case for labeled field Contains the label string This is not needed for many generic functions so the default implementation is rlbl const id",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rlbl",
          "normalized": "LblDescr-\u003ea b-\u003ea b",
          "package": "emgm",
          "signature": "LblDescr-\u003eg a-\u003eg a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rlbl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rlbl2",
          "package": "emgm",
          "signature": "LblDescr -\u003e g a1 a2 -\u003e g a1 a2",
          "source": "src/Generics-EMGM-Base.html#rlbl2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rlbl2",
          "normalized": "LblDescr-\u003ea b b-\u003ea b b",
          "package": "emgm",
          "signature": "LblDescr-\u003eg a a-\u003eg a a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rlbl2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rlbl3",
          "package": "emgm",
          "signature": "LblDescr -\u003e g a1 a2 a3 -\u003e g a1 a2 a3",
          "source": "src/Generics-EMGM-Base.html#rlbl3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rlbl3",
          "normalized": "LblDescr-\u003ea b b b-\u003ea b b b",
          "package": "emgm",
          "signature": "LblDescr-\u003eg a a a-\u003eg a a a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rlbl3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the structural representation type \u003ccode\u003e:*:\u003c/code\u003e (product). Represents\n the fields of a constructor.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "rprod",
          "package": "emgm",
          "signature": "g a -\u003e g b -\u003e g (a :*: b)",
          "source": "src/Generics-EMGM-Base.html#rprod",
          "type": "method"
        },
        "index": {
          "description": "Case for the structural representation type product Represents the fields of constructor",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rprod",
          "normalized": "a b-\u003ea c-\u003ea(b*c)",
          "package": "emgm",
          "signature": "g a-\u003eg b-\u003eg(a*b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rprod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rprod2",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g (a1 :*: b1) (a2 :*: b2)",
          "source": "src/Generics-EMGM-Base.html#rprod2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rprod2",
          "normalized": "a b b-\u003ea c c-\u003ea(b*c)(b*c)",
          "package": "emgm",
          "signature": "g a a-\u003eg b b-\u003eg(a*b)(a*b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rprod2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rprod3",
          "package": "emgm",
          "signature": "g a1 a2 a3 -\u003e g b1 b2 b3 -\u003e g (a1 :*: b1) (a2 :*: b2) (a3 :*: b3)",
          "source": "src/Generics-EMGM-Base.html#rprod3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rprod3",
          "normalized": "a b b b-\u003ea c c c-\u003ea(b*c)(b*c)(b*c)",
          "package": "emgm",
          "signature": "g a a a-\u003eg b b b-\u003eg(a*b)(a*b)(a*b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rprod3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the structural representation type \u003ccode\u003e:+:\u003c/code\u003e (sum). Represents\n alternative constructors.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "rsum",
          "package": "emgm",
          "signature": "g a -\u003e g b -\u003e g (a :+: b)",
          "source": "src/Generics-EMGM-Base.html#rsum",
          "type": "method"
        },
        "index": {
          "description": "Case for the structural representation type sum Represents alternative constructors",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rsum",
          "normalized": "a b-\u003ea c-\u003ea(b c)",
          "package": "emgm",
          "signature": "g a-\u003eg b-\u003eg(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rsum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rsum2",
          "package": "emgm",
          "signature": "g a1 a2 -\u003e g b1 b2 -\u003e g (a1 :+: b1) (a2 :+: b2)",
          "source": "src/Generics-EMGM-Base.html#rsum2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rsum2",
          "normalized": "a b b-\u003ea c c-\u003ea(b c)(b c)",
          "package": "emgm",
          "signature": "g a a-\u003eg b b-\u003eg(a b)(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rsum2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "rsum3",
          "package": "emgm",
          "signature": "g a1 a2 a3 -\u003e g b1 b2 b3 -\u003e g (a1 :+: b1) (a2 :+: b2) (a3 :+: b3)",
          "source": "src/Generics-EMGM-Base.html#rsum3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rsum3",
          "normalized": "a b b b-\u003ea c c c-\u003ea(b c)(b c)(b c)",
          "package": "emgm",
          "signature": "g a a a-\u003eg b b b-\u003eg(a b)(a b)(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rsum3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for datatypes. This method is used to define the structural\n representation of an arbitrary Haskell datatype. The first argument is the\n embedding-projection pair, necessary for establishing the isomorphism\n between datatype and representation. The second argument is the\n run-time representation using the methods of \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "rtype",
          "package": "emgm",
          "signature": "EP b a -\u003e g a -\u003e g b",
          "source": "src/Generics-EMGM-Base.html#rtype",
          "type": "method"
        },
        "index": {
          "description": "Case for datatypes This method is used to define the structural representation of an arbitrary Haskell datatype The first argument is the embedding-projection pair necessary for establishing the isomorphism between datatype and representation The second argument is the run-time representation using the methods of Generic",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rtype",
          "normalized": "EP a b-\u003ec b-\u003ec a",
          "package": "emgm",
          "signature": "EP b a-\u003eg a-\u003eg b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ertype\u003c/a\u003e\u003c/code\u003e. This case is the primary difference that separates\n \u003ccode\u003e\u003ca\u003eGeneric2\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e. Since we have two generic type parameters, we\n need to have two \u003ccode\u003e\u003ca\u003eEP\u003c/a\u003e\u003c/code\u003e values. Each translates between the Haskell type and\n its generic representation.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "rtype2",
          "package": "emgm",
          "signature": "EP a2 a1 -\u003e EP b2 b1 -\u003e g a1 b1 -\u003e g a2 b2",
          "source": "src/Generics-EMGM-Base.html#rtype2",
          "type": "method"
        },
        "index": {
          "description": "See rtype This case is the primary difference that separates Generic2 from Generic Since we have two generic type parameters we need to have two EP values Each translates between the Haskell type and its generic representation",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rtype2",
          "normalized": "EP a a-\u003eEP b b-\u003ec a b-\u003ec a b",
          "package": "emgm",
          "signature": "EP a a-\u003eEP b b-\u003eg a b-\u003eg a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rtype2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ertype\u003c/a\u003e\u003c/code\u003e. This case is the primary difference that separates\n \u003ccode\u003e\u003ca\u003eGeneric3\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e. Since we have three generic type parameters, we\n need three \u003ccode\u003e\u003ca\u003eEP\u003c/a\u003e\u003c/code\u003e values. Each translates between the Haskell type and its\n generic representation.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "rtype3",
          "package": "emgm",
          "signature": "EP a2 a1 -\u003e EP b2 b1 -\u003e EP c2 c1 -\u003e g a1 b1 c1 -\u003e g a2 b2 c2",
          "source": "src/Generics-EMGM-Base.html#rtype3",
          "type": "method"
        },
        "index": {
          "description": "See rtype This case is the primary difference that separates Generic3 from Generic Since we have three generic type parameters we need three EP values Each translates between the Haskell type and its generic representation",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "rtype3",
          "normalized": "EP a a-\u003eEP b b-\u003eEP c c-\u003ed a b c-\u003ed a b c",
          "package": "emgm",
          "signature": "EP a a-\u003eEP b b-\u003eEP c c-\u003eg a b c-\u003eg a b c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:rtype3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase for the structural representation type \u003ccode\u003e\u003ca\u003eUnit\u003c/a\u003e\u003c/code\u003e. Represents a\n constructor with no arguments.\n\u003c/p\u003e",
          "module": "Generics.EMGM",
          "name": "runit",
          "package": "emgm",
          "signature": "g Unit",
          "source": "src/Generics-EMGM-Base.html#runit",
          "type": "method"
        },
        "index": {
          "description": "Case for the structural representation type Unit Represents constructor with no arguments",
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "runit",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:runit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "runit2",
          "package": "emgm",
          "signature": "g Unit Unit",
          "source": "src/Generics-EMGM-Base.html#runit2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "runit2",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:runit2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.EMGM",
          "name": "runit3",
          "package": "emgm",
          "signature": "g Unit Unit Unit",
          "source": "src/Generics-EMGM-Base.html#runit3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics EMGM",
          "module": "Generics.EMGM",
          "name": "runit3",
          "package": "emgm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/emgm/docs/Generics-EMGM.html#v:runit3"
      }
    }
  ]
]