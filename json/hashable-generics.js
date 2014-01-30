[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashable-generics/docs/Data-Hashable-Generic.html#",
      "description": {
        "fct-module": "Data.Hashable.Generic",
        "fct-package": "hashable-generics",
        "fct-signature": "module",
        "fct-source": "src/Data-Hashable-Generic.html",
        "fct-type": "module",
        "title": "Generic"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hashable Generic",
        "module": "Data.Hashable.Generic",
        "name": "Generic",
        "normalized": "",
        "package": "hashable-generics",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashable-generics/docs/Data-Hashable-Generic.html#t:Hashable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of types that can be converted to a hash value.\n\u003c/p\u003e\u003cp\u003eMinimal implementation: \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Hashable.Generic",
        "fct-package": "hashable-generics",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Hashable"
      },
      "index": {
        "description": "The class of types that can be converted to hash value Minimal implementation hash or hashWithSalt",
        "hierarchy": "Data Hashable Generic",
        "module": "Data.Hashable.Generic",
        "name": "Hashable",
        "normalized": "",
        "package": "hashable-generics",
        "partial": "Hashable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashable-generics/docs/Data-Hashable-Generic.html#v:gHashWithSalt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003eGHC.Generics\u003c/a\u003e-based \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e implementation\n\u003c/p\u003e\u003cp\u003eThis provides a generic \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e implementation for one type at a\n time. If the type of the value \u003ccode\u003e\u003ca\u003egHashWithSalt\u003c/a\u003e\u003c/code\u003e is asked to hash\n contains values of other types, those types have to provide\n \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e instances. This also means that recursive types can only\n be used with \u003ccode\u003e\u003ca\u003egHashWithSalt\u003c/a\u003e\u003c/code\u003e if a \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e instance has been defined\n as well (see examples below).\n\u003c/p\u003e\u003cp\u003eThe typical usage for \u003ccode\u003e\u003ca\u003egHashWithSalt\u003c/a\u003e\u003c/code\u003e is for reducing boilerplate code\n when defining \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e instances for ordinary algebraic\n datatypes. See the code below for some simple usage examples:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DeriveGeneric #-}\n\n import Data.Hashable\n import Data.Hashable.Generic ( gHashWithSalt )\n import GHC.Generics\n\n -- simple record\n data Foo = Foo AccountId Name Address\n          deriving Generic\n\n type Address      = [String]\n type Name         = String\n newtype AccountId = AccountId Int\n\n -- Note: Even though gHashWithSalt could be curried, we explicitly list\n --       the parameters. If you don't do this, GHC will not inline the\n --       definition of gHashWithSalt, and the performance will not match\n --       a non-generic implementation. If you use this method, the generic\n --       hashWithSalt will generate the exact same code as a hand-rolled\n --       one.\n --\n --       Also, the INLINEABLE pragma is there to help hashable data\n --       structures in other modules write more efficient generic hashable\n --       instances too. This is the best way to get extremely performant,\n --       fully generic hash functions.\n instance Hashable AccountId\n instance Hashable Foo where\n     hashWithSalt s x = gHashWithSalt s x\n     {-# INLINEABLE hashWithSalt #-}\n\n -- recursive list-like type\n data N = Z | S N deriving Generic\n\n instance Hashable N where\n     hashWithSalt s x = gHashWithSalt s x\n     {-# INLINEABLE hashWithSalt #-}\n\n -- parametric and recursive type\n data Bar a = Bar0 | Bar1 a | Bar2 (Bar a)\n            deriving Generic\n\n instance Hashable a =\u003e Hashable (Bar a) where\n     hashWithSalt s x = gHashWithSalt s x\n     {-# INLINEABLE hashWithSalt #-}\n\u003c/pre\u003e\u003cp\u003eNote: The \u003ccode\u003eGHashable\u003c/code\u003e type-class showing up in the type-signature is\n       used internally and not exported on purpose.\n\u003c/p\u003e",
        "fct-module": "Data.Hashable.Generic",
        "fct-package": "hashable-generics",
        "fct-signature": "Int -\u003e a -\u003e Int",
        "fct-source": "src/Data-Hashable-Generic.html#gHashWithSalt",
        "fct-type": "function",
        "title": "gHashWithSalt"
      },
      "index": {
        "description": "GHC.Generics based hashWithSalt implementation This provides generic hashWithSalt implementation for one type at time If the type of the value gHashWithSalt is asked to hash contains values of other types those types have to provide Hashable instances This also means that recursive types can only be used with gHashWithSalt if Hashable instance has been defined as well see examples below The typical usage for gHashWithSalt is for reducing boilerplate code when defining Hashable instances for ordinary algebraic datatypes See the code below for some simple usage examples LANGUAGE DeriveGeneric import Data.Hashable import Data.Hashable.Generic gHashWithSalt import GHC.Generics simple record data Foo Foo AccountId Name Address deriving Generic type Address String type Name String newtype AccountId AccountId Int Note Even though gHashWithSalt could be curried we explicitly list the parameters If you don do this GHC will not inline the definition of gHashWithSalt and the performance will not match non-generic implementation If you use this method the generic hashWithSalt will generate the exact same code as hand-rolled one Also the INLINEABLE pragma is there to help hashable data structures in other modules write more efficient generic hashable instances too This is the best way to get extremely performant fully generic hash functions instance Hashable AccountId instance Hashable Foo where hashWithSalt gHashWithSalt INLINEABLE hashWithSalt recursive list-like type data deriving Generic instance Hashable where hashWithSalt gHashWithSalt INLINEABLE hashWithSalt parametric and recursive type data Bar Bar0 Bar1 Bar2 Bar deriving Generic instance Hashable Hashable Bar where hashWithSalt gHashWithSalt INLINEABLE hashWithSalt Note The GHashable type-class showing up in the type-signature is used internally and not exported on purpose",
        "hierarchy": "Data Hashable Generic",
        "module": "Data.Hashable.Generic",
        "name": "gHashWithSalt",
        "normalized": "Int-\u003ea-\u003eInt",
        "package": "hashable-generics",
        "partial": "Hash With Salt",
        "signature": "Int-\u003ea-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashable-generics/docs/Data-Hashable-Generic.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a hash value for the argument.\n\u003c/p\u003e\u003cp\u003eThe general contract of \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This integer need not remain consistent from one execution\n    of an application to another execution of the same\n    application.\n\u003c/li\u003e\u003cli\u003e If two values are equal according to the \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e method, then\n    applying the \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e method on each of the two values must\n    produce the same integer result.\n\u003c/li\u003e\u003cli\u003e It is \u003cem\u003enot\u003c/em\u003e required that if two values are unequal\n    according to the \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e method, then applying the \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e\n    method on each of the two values must produce distinct\n    integer results.  However, the programmer should be aware\n    that producing distinct integer results for unequal values\n    may improve the performance of hashing-based data\n    structures.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Hashable.Generic",
        "fct-package": "hashable-generics",
        "fct-signature": "a -\u003e Int",
        "fct-type": "method",
        "title": "hash"
      },
      "index": {
        "description": "Return hash value for the argument The general contract of hash is This integer need not remain consistent from one execution of an application to another execution of the same application If two values are equal according to the method then applying the hash method on each of the two values must produce the same integer result It is not required that if two values are unequal according to the method then applying the hash method on each of the two values must produce distinct integer results However the programmer should be aware that producing distinct integer results for unequal values may improve the performance of hashing-based data structures",
        "hierarchy": "Data Hashable Generic",
        "module": "Data.Hashable.Generic",
        "name": "hash",
        "normalized": "a-\u003eInt",
        "package": "hashable-generics",
        "partial": "",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashable-generics/docs/Data-Hashable-Generic.html#v:hashWithSalt",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a hash value for the argument, using the given salt.\n\u003c/p\u003e\u003cp\u003eThis method can be used to compute different hash values for\n the same input by providing a different salt in each\n application of the method.\n\u003c/p\u003e\u003cp\u003eThe contract for \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e is the same as for \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e, with\n the additional requirement that any instance that defines\n \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e must make use of the salt in its implementation.\n\u003c/p\u003e",
        "fct-module": "Data.Hashable.Generic",
        "fct-package": "hashable-generics",
        "fct-signature": "Int -\u003e a -\u003e Int",
        "fct-type": "method",
        "title": "hashWithSalt"
      },
      "index": {
        "description": "Return hash value for the argument using the given salt This method can be used to compute different hash values for the same input by providing different salt in each application of the method The contract for hashWithSalt is the same as for hash with the additional requirement that any instance that defines hashWithSalt must make use of the salt in its implementation",
        "hierarchy": "Data Hashable Generic",
        "module": "Data.Hashable.Generic",
        "name": "hashWithSalt",
        "normalized": "Int-\u003ea-\u003eInt",
        "package": "hashable-generics",
        "partial": "With Salt",
        "signature": "Int-\u003ea-\u003eInt"
      }
    }
  }
]