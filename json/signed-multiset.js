[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of signed multisets.\n\u003c/p\u003e\u003cp\u003eA signed multiset is like a multiset (or bag), but additionally allows for\n \u003cem\u003enegative membership\u003c/em\u003e.\n That is, in a signed multiset, an object can occur a negative number of\n times.\n\u003c/p\u003e\u003cp\u003eFor a theory of signed multisets, see\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Wayne D. Blizard. Negative membership.\n   \u003cem\u003eNotre Dame Journal of Formal Logic\u003c/em\u003e, 31(3):346--368, 1990.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSince many function names (but not the type name) clash with Prelude names,\n this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.,\n\u003c/p\u003e\u003cpre\u003e  import Data.SignedMultiset (SignedMultiset)\n  import qualified Data.SignedMultiset as SignedMultiset\n\u003c/pre\u003e\u003cp\u003eFunction comments contain the function's time complexity in so-called big-O\n notation, with \u003cem\u003en\u003c/em\u003e referring to the number of multiset members involved.\n\u003c/p\u003e\u003cp\u003eSigned-multiset types are constructed by the type constructor\n \u003ccode\u003e\u003ca\u003eSignedMultiset\u003c/a\u003e\u003c/code\u003e.\n The number of times an object appears in a signed multiset is called its\n \u003ccode\u003e\u003ca\u003emultiplicity\u003c/a\u003e\u003c/code\u003e.\n An object is said to be a \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e of a signed multiset if it has a nonzero\n multiplicity.\n The number of members of a signed multiset is referred to as its \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e,\n while the \u003ccode\u003e\u003ca\u003ecardinality\u003c/a\u003e\u003c/code\u003e of a signed multiset is the sum of the multiplicities\n of its members.\n A signed multiset is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if it is without members.\n\u003c/p\u003e\u003cp\u003eTextually, signed multisets are represented by listing their members and, in\n parentheses, their multiplicities between curly brackets.\n For instance, the signed multiset that contains -1 copies of 2, 2 copies of\n 3, and -4 copies of 5 is denoted by \u003ccode\u003e\"{2(-1),3(2),5(-4)}\"\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "module",
        "fct-source": "src/Data-SignedMultiset.html",
        "fct-type": "module",
        "title": "SignedMultiset"
      },
      "index": {
        "description": "An efficient implementation of signed multisets signed multiset is like multiset or bag but additionally allows for negative membership That is in signed multiset an object can occur negative number of times For theory of signed multisets see Wayne Blizard Negative membership Notre Dame Journal of Formal Logic Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.SignedMultiset SignedMultiset import qualified Data.SignedMultiset as SignedMultiset Function comments contain the function time complexity in so-called big-O notation with referring to the number of multiset members involved Signed-multiset types are constructed by the type constructor SignedMultiset The number of times an object appears in signed multiset is called its multiplicity An object is said to be member of signed multiset if it has nonzero multiplicity The number of members of signed multiset is referred to as its size while the cardinality of signed multiset is the sum of the multiplicities of its members signed multiset is empty if it is without members Textually signed multisets are represented by listing their members and in parentheses their multiplicities between curly brackets For instance the signed multiset that contains copies of copies of and copies of is denoted by",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "SignedMultiset",
        "normalized": "",
        "package": "signed-multiset",
        "partial": "Signed Multiset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#t:Additive",
      "description": {
        "fct-descr": "\u003cp\u003eAn element of the free abelian group on \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "newtype",
        "fct-source": "src/Data-SignedMultiset.html#Additive",
        "fct-type": "newtype",
        "title": "Additive"
      },
      "index": {
        "description": "An element of the free abelian group on",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "Additive",
        "normalized": "",
        "package": "signed-multiset",
        "partial": "Additive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#t:SignedMultiset",
      "description": {
        "fct-descr": "\u003cp\u003eA signed multiset over objects of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "data",
        "fct-source": "src/Data-SignedMultiset.html#SignedMultiset",
        "fct-type": "data",
        "title": "SignedMultiset"
      },
      "index": {
        "description": "signed multiset over objects of type",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "SignedMultiset",
        "normalized": "",
        "package": "signed-multiset",
        "partial": "Signed Multiset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:Additive",
      "description": {
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "Additive",
        "fct-source": "src/Data-SignedMultiset.html#Additive",
        "fct-type": "function",
        "title": "Additive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "Additive",
        "normalized": "",
        "package": "signed-multiset",
        "partial": "Additive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:additiveMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n * log n)\u003c/em\u003e. Apply the given function to all objects of the signed\n multiset. If the the function maps distinct objects to the same new object,\n the multiplicity of the new object is the sum of the multiplicities of the\n two original objects.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "(a -\u003e b) -\u003e SignedMultiset a -\u003e SignedMultiset b",
        "fct-source": "src/Data-SignedMultiset.html#additiveMap",
        "fct-type": "function",
        "title": "additiveMap"
      },
      "index": {
        "description": "log Apply the given function to all objects of the signed multiset If the the function maps distinct objects to the same new object the multiplicity of the new object is the sum of the multiplicities of the two original objects",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "additiveMap",
        "normalized": "(a-\u003eb)-\u003eSignedMultiset a-\u003eSignedMultiset b",
        "package": "signed-multiset",
        "partial": "Map",
        "signature": "(a-\u003eb)-\u003eSignedMultiset a-\u003eSignedMultiset b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:additiveUnion",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return the additive union of two signed multisets. The\n multiplicity of an object in the returned multiset is the sum of its\n multiplicities in the argument multisets.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#additiveUnion",
        "fct-type": "function",
        "title": "additiveUnion"
      },
      "index": {
        "description": "Return the additive union of two signed multisets The multiplicity of an object in the returned multiset is the sum of its multiplicities in the argument multisets",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "additiveUnion",
        "normalized": "SignedMultiset a-\u003eSignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "Union",
        "signature": "SignedMultiset a-\u003eSignedMultiset a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:cardinality",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return the cardinality of the signed multiset, i.e., the sum of\n the multiplicities of all objects.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e Int",
        "fct-source": "src/Data-SignedMultiset.html#cardinality",
        "fct-type": "function",
        "title": "cardinality"
      },
      "index": {
        "description": "Return the cardinality of the signed multiset i.e the sum of the multiplicities of all objects",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "cardinality",
        "normalized": "SignedMultiset a-\u003eInt",
        "package": "signed-multiset",
        "partial": "",
        "signature": "SignedMultiset a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a copy of the given object from a signed multiset, i.e.,\n decrement the multiplicity of the object by 1.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "a -\u003e SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "log Delete copy of the given object from signed multiset i.e decrement the multiplicity of the object by",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "delete",
        "normalized": "a-\u003eSignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "",
        "signature": "a-\u003eSignedMultiset a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:deleteAll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete all copies of the given object from a signed multiset,\n i.e., set the multiplicity of the object to zero.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "a -\u003e SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#deleteAll",
        "fct-type": "function",
        "title": "deleteAll"
      },
      "index": {
        "description": "log Delete all copies of the given object from signed multiset i.e set the multiplicity of the object to zero",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "deleteAll",
        "normalized": "a-\u003eSignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "All",
        "signature": "a-\u003eSignedMultiset a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:deleteMany",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a specified number of copies of the given object from\n a signed multiset, i.e., decrement the multiplicity of the object by the\n specified number. If the specified number is negative, new copies of the\n object are inserted into the set.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "a -\u003e Int -\u003e SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#deleteMany",
        "fct-type": "function",
        "title": "deleteMany"
      },
      "index": {
        "description": "log Delete specified number of copies of the given object from signed multiset i.e decrement the multiplicity of the object by the specified number If the specified number is negative new copies of the object are inserted into the set",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "deleteMany",
        "normalized": "a-\u003eInt-\u003eSignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "Many",
        "signature": "a-\u003eInt-\u003eSignedMultiset a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty signed multiset, i.e., the multiset in which every object\n has multiplicity zero.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty signed multiset i.e the multiset in which every object has multiplicity zero",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "empty",
        "normalized": "",
        "package": "signed-multiset",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Apply the given predicate to the members of the signed multiset and\n their multiplicities. The returned multiset contains the copies of the\n members that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "(a -\u003e Int -\u003e Bool) -\u003e SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Apply the given predicate to the members of the signed multiset and their multiplicities The returned multiset contains the copies of the members that satisfy the predicate",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "filter",
        "normalized": "(a-\u003eInt-\u003eBool)-\u003eSignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "",
        "signature": "(a-\u003eInt-\u003eBool)-\u003eSignedMultiset a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Perform a left-associative fold on the members of the signed\n multiset and their multiplicities using the given operator and start value.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "(a -\u003e b -\u003e Int -\u003e a) -\u003e a -\u003e SignedMultiset b -\u003e a",
        "fct-source": "src/Data-SignedMultiset.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Perform left-associative fold on the members of the signed multiset and their multiplicities using the given operator and start value",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003eInt-\u003ea)-\u003ea-\u003eSignedMultiset b-\u003ea",
        "package": "signed-multiset",
        "partial": "",
        "signature": "(a-\u003eb-\u003eInt-\u003ea)-\u003ea-\u003eSignedMultiset b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Perform a strict left-associative fold on the members of the signed\n multiset and their multiplicities using the given operator and start value.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "(a -\u003e b -\u003e Int -\u003e a) -\u003e a -\u003e SignedMultiset b -\u003e a",
        "fct-source": "src/Data-SignedMultiset.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "Perform strict left-associative fold on the members of the signed multiset and their multiplicities using the given operator and start value",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003eInt-\u003ea)-\u003ea-\u003eSignedMultiset b-\u003ea",
        "package": "signed-multiset",
        "partial": "",
        "signature": "(a-\u003eb-\u003eInt-\u003ea)-\u003ea-\u003eSignedMultiset b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Perform a right-associative fold on the members of the signed\n multiset and their multiplicities using the given operator and start value.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "(a -\u003e Int -\u003e b -\u003e b) -\u003e b -\u003e SignedMultiset a -\u003e b",
        "fct-source": "src/Data-SignedMultiset.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Perform right-associative fold on the members of the signed multiset and their multiplicities using the given operator and start value",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "foldr",
        "normalized": "(a-\u003eInt-\u003eb-\u003eb)-\u003eb-\u003eSignedMultiset a-\u003eb",
        "package": "signed-multiset",
        "partial": "",
        "signature": "(a-\u003eInt-\u003eb-\u003eb)-\u003eb-\u003eSignedMultiset a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:foldr-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Perform a strict right-associative fold on the members of the\n signed multiset and their multiplicities using the given operator and start\n value.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "(a -\u003e Int -\u003e b -\u003e b) -\u003e b -\u003e SignedMultiset a -\u003e b",
        "fct-source": "src/Data-SignedMultiset.html#foldr%27",
        "fct-type": "function",
        "title": "foldr'"
      },
      "index": {
        "description": "Perform strict right-associative fold on the members of the signed multiset and their multiplicities using the given operator and start value",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "foldr'",
        "normalized": "(a-\u003eInt-\u003eb-\u003eb)-\u003eb-\u003eSignedMultiset a-\u003eb",
        "package": "signed-multiset",
        "partial": "",
        "signature": "(a-\u003eInt-\u003eb-\u003eb)-\u003eb-\u003eSignedMultiset a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k * log n)\u003c/em\u003e (with \u003cem\u003ek\u003c/em\u003e the length of the argument list). Construct a\n signed multiset from a list of object/multiplicity pairs.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "[(a, Int)] -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "log with the length of the argument list Construct signed multiset from list of object multiplicity pairs",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "fromList",
        "normalized": "[(a,Int)]-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "List",
        "signature": "[(a,Int)]-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:fromLists",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k * log n)\u003c/em\u003e (with \u003cem\u003ek\u003c/em\u003e the combined length of the argument lists).\n Construct a signed multiset by, starting from the empty multiset, inserting\n copies of objects from the first argument list and deleting copies of objects\n from the second argument list.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "[a] -\u003e [a] -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#fromLists",
        "fct-type": "function",
        "title": "fromLists"
      },
      "index": {
        "description": "log with the combined length of the argument lists Construct signed multiset by starting from the empty multiset inserting copies of objects from the first argument list and deleting copies of objects from the second argument list",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "fromLists",
        "normalized": "[a]-\u003e[a]-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "Lists",
        "signature": "[a]-\u003e[a]-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:getAdditive",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#Additive",
        "fct-type": "function",
        "title": "getAdditive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "getAdditive",
        "normalized": "",
        "package": "signed-multiset",
        "partial": "Additive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert a new copy of the given object into a signed multiset,\n i.e., increment the multiplicity of the object by 1.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "a -\u003e SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Insert new copy of the given object into signed multiset i.e increment the multiplicity of the object by",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "insert",
        "normalized": "a-\u003eSignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "",
        "signature": "a-\u003eSignedMultiset a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:insertMany",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert a specified number of new copies of the given object\n into a signed multiset, i.e., increment the multiplicity of the object by\n the specified number. If the specified number is negative, copies are\n deleted from the set.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "a -\u003e Int -\u003e SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#insertMany",
        "fct-type": "function",
        "title": "insertMany"
      },
      "index": {
        "description": "log Insert specified number of new copies of the given object into signed multiset i.e increment the multiplicity of the object by the specified number If the specified number is negative copies are deleted from the set",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "insertMany",
        "normalized": "a-\u003eInt-\u003eSignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "Many",
        "signature": "a-\u003eInt-\u003eSignedMultiset a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return the intersection of two signed multisets. If an object has\n nonzero multiplicity in both argument multisets, its multiplicity in the\n returned multiset is the minimum of its multiplicities in the argument\n multisets; otherwise, its multiplicity in the returned multiset is zero.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "Return the intersection of two signed multisets If an object has nonzero multiplicity in both argument multisets its multiplicity in the returned multiset is the minimum of its multiplicities in the argument multisets otherwise its multiplicity in the returned multiset is zero",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "intersection",
        "normalized": "SignedMultiset a-\u003eSignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "",
        "signature": "SignedMultiset a-\u003eSignedMultiset a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:isNegative",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return whether all objects in the signed multiset have nonpositive\n multiplicities.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e Bool",
        "fct-source": "src/Data-SignedMultiset.html#isNegative",
        "fct-type": "function",
        "title": "isNegative"
      },
      "index": {
        "description": "Return whether all objects in the signed multiset have nonpositive multiplicities",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "isNegative",
        "normalized": "SignedMultiset a-\u003eBool",
        "package": "signed-multiset",
        "partial": "Negative",
        "signature": "SignedMultiset a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:isPositive",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return whether all objects in the signed multiset have nonnegative\n multiplicities.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e Bool",
        "fct-source": "src/Data-SignedMultiset.html#isPositive",
        "fct-type": "function",
        "title": "isPositive"
      },
      "index": {
        "description": "Return whether all objects in the signed multiset have nonnegative multiplicities",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "isPositive",
        "normalized": "SignedMultiset a-\u003eBool",
        "package": "signed-multiset",
        "partial": "Positive",
        "signature": "SignedMultiset a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:isSet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return whether the signed multiset is a set, i.e., whether all\n object have either multiplicity zero or else multiplicity 1.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e Bool",
        "fct-source": "src/Data-SignedMultiset.html#isSet",
        "fct-type": "function",
        "title": "isSet"
      },
      "index": {
        "description": "Return whether the signed multiset is set i.e whether all object have either multiplicity zero or else multiplicity",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "isSet",
        "normalized": "SignedMultiset a-\u003eBool",
        "package": "signed-multiset",
        "partial": "Set",
        "signature": "SignedMultiset a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:isSubmultisetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return whether the first signed multiset is a submultiset of the\n second, i.e., whether each object that has nonzero multiplicity \u003ccode\u003em\u003c/code\u003e in the\n first multiset has nonzero multiplicity \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003em \u003c= n\u003c/code\u003e in the second.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e SignedMultiset a -\u003e Bool",
        "fct-source": "src/Data-SignedMultiset.html#isSubmultisetOf",
        "fct-type": "function",
        "title": "isSubmultisetOf"
      },
      "index": {
        "description": "Return whether the first signed multiset is submultiset of the second i.e whether each object that has nonzero multiplicity in the first multiset has nonzero multiplicity with in the second",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "isSubmultisetOf",
        "normalized": "SignedMultiset a-\u003eSignedMultiset a-\u003eBool",
        "package": "signed-multiset",
        "partial": "Submultiset Of",
        "signature": "SignedMultiset a-\u003eSignedMultiset a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n * log n)\u003c/em\u003e. Apply the given function to all objects of the signed\n multiset. If the the function maps distinct objects to the same new object,\n the multiplicity of the new object is the maximum of the nonzero \n multiplicities of the two original objects.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "(a -\u003e b) -\u003e SignedMultiset a -\u003e SignedMultiset b",
        "fct-source": "src/Data-SignedMultiset.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "log Apply the given function to all objects of the signed multiset If the the function maps distinct objects to the same new object the multiplicity of the new object is the maximum of the nonzero multiplicities of the two original objects",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eSignedMultiset a-\u003eSignedMultiset b",
        "package": "signed-multiset",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eSignedMultiset a-\u003eSignedMultiset b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Return whether the given object is a member of the signed\n multiset, i.e., whether the object has nonzero multiplicity.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "a -\u003e SignedMultiset a -\u003e Bool",
        "fct-source": "src/Data-SignedMultiset.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "log Return whether the given object is member of the signed multiset i.e whether the object has nonzero multiplicity",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "member",
        "normalized": "a-\u003eSignedMultiset a-\u003eBool",
        "package": "signed-multiset",
        "partial": "",
        "signature": "a-\u003eSignedMultiset a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:modulus",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return the modulus of the signed multiset. The multiplicity of an\n object in the returned multiset is the absolute value of its multiplicity in\n the argument multiset.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#modulus",
        "fct-type": "function",
        "title": "modulus"
      },
      "index": {
        "description": "Return the modulus of the signed multiset The multiplicity of an object in the returned multiset is the absolute value of its multiplicity in the argument multiset",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "modulus",
        "normalized": "SignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "",
        "signature": "SignedMultiset a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:multiplicity",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Return the multiplicity of the given object in the signed\n multiset.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "a -\u003e SignedMultiset a -\u003e Int",
        "fct-source": "src/Data-SignedMultiset.html#multiplicity",
        "fct-type": "function",
        "title": "multiplicity"
      },
      "index": {
        "description": "log Return the multiplicity of the given object in the signed multiset",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "multiplicity",
        "normalized": "a-\u003eSignedMultiset a-\u003eInt",
        "package": "signed-multiset",
        "partial": "",
        "signature": "a-\u003eSignedMultiset a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:multiply",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return the additive union of the given number of copies of the\n signed multiset.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "Int -\u003e SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#multiply",
        "fct-type": "function",
        "title": "multiply"
      },
      "index": {
        "description": "Return the additive union of the given number of copies of the signed multiset",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "multiply",
        "normalized": "Int-\u003eSignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "",
        "signature": "Int-\u003eSignedMultiset a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Return whether the given object is \u003cem\u003enot\u003c/em\u003e a member of the signed\n multiset, i.e., whether the object has multiplicity zero.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "a -\u003e SignedMultiset a -\u003e Bool",
        "fct-source": "src/Data-SignedMultiset.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "log Return whether the given object is not member of the signed multiset i.e whether the object has multiplicity zero",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "notMember",
        "normalized": "a-\u003eSignedMultiset a-\u003eBool",
        "package": "signed-multiset",
        "partial": "Member",
        "signature": "a-\u003eSignedMultiset a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Return whether the signed multiset is empty, i.e., whether every\n object has multiplicity zero.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e Bool",
        "fct-source": "src/Data-SignedMultiset.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Return whether the signed multiset is empty i.e whether every object has multiplicity zero",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "null",
        "normalized": "SignedMultiset a-\u003eBool",
        "package": "signed-multiset",
        "partial": "",
        "signature": "SignedMultiset a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Apply the given predicate to the members of the signed multiset and\n their multiplicity. The first returned multiset contains the copies of the\n members that satisfy the predicate, while the second returned multiset\n contains the copies of the members that do not satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "(a -\u003e Int -\u003e Bool) -\u003e SignedMultiset a -\u003e (SignedMultiset a, SignedMultiset a)",
        "fct-source": "src/Data-SignedMultiset.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "Apply the given predicate to the members of the signed multiset and their multiplicity The first returned multiset contains the copies of the members that satisfy the predicate while the second returned multiset contains the copies of the members that do not satisfy the predicate",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "partition",
        "normalized": "(a-\u003eInt-\u003eBool)-\u003eSignedMultiset a-\u003e(SignedMultiset a,SignedMultiset a)",
        "package": "signed-multiset",
        "partial": "",
        "signature": "(a-\u003eInt-\u003eBool)-\u003eSignedMultiset a-\u003e(SignedMultiset a,SignedMultiset a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:root",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return the root of the signed multiset. The multiplicity of an\n object in the returned multiset is zero if its multiplicity in the argument\n multiset is zero and 1 otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#root",
        "fct-type": "function",
        "title": "root"
      },
      "index": {
        "description": "Return the root of the signed multiset The multiplicity of an object in the returned multiset is zero if its multiplicity in the argument multiset is zero and otherwise",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "root",
        "normalized": "SignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "",
        "signature": "SignedMultiset a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:shadow",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return the shadow of the signed multiset. The multiplicity of an\n object in the returned multiset is the additive inverse of its multiplicity\n in the argument multiset.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#shadow",
        "fct-type": "function",
        "title": "shadow"
      },
      "index": {
        "description": "Return the shadow of the signed multiset The multiplicity of an object in the returned multiset is the additive inverse of its multiplicity in the argument multiset",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "shadow",
        "normalized": "SignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "",
        "signature": "SignedMultiset a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:signum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return the signum of the signed multiset. The multiplicity of an\n object in the returned multiset is -1 if it has negative multiplicity in the\n argument multiset, zero if its multiplicity in the argument multiset is zero,\n and 1 if it has positive multiplicity in the argument multiset.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#signum",
        "fct-type": "function",
        "title": "signum"
      },
      "index": {
        "description": "Return the signum of the signed multiset The multiplicity of an object in the returned multiset is if it has negative multiplicity in the argument multiset zero if its multiplicity in the argument multiset is zero and if it has positive multiplicity in the argument multiset",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "signum",
        "normalized": "SignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "",
        "signature": "SignedMultiset a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Create a signed multiset that contains exactly one copy of the\n given object.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Create signed multiset that contains exactly one copy of the given object",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "singleton",
        "normalized": "a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "",
        "signature": "a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Return the number of members of the signed multiset, i.e., the\n number of objects that have nonzero multiplicity.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e Int",
        "fct-source": "src/Data-SignedMultiset.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Return the number of members of the signed multiset i.e the number of objects that have nonzero multiplicity",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "size",
        "normalized": "SignedMultiset a-\u003eInt",
        "package": "signed-multiset",
        "partial": "",
        "signature": "SignedMultiset a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Split the signed multiset into a multiset containing the copies of\n the members with a multiplicity less than or equal to the given number and a\n multiset containing the copies of the members with a multiplicity greater\n than the given number.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "Int -\u003e SignedMultiset a -\u003e (SignedMultiset a, SignedMultiset a)",
        "fct-source": "src/Data-SignedMultiset.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Split the signed multiset into multiset containing the copies of the members with multiplicity less than or equal to the given number and multiset containing the copies of the members with multiplicity greater than the given number",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "split",
        "normalized": "Int-\u003eSignedMultiset a-\u003e(SignedMultiset a,SignedMultiset a)",
        "package": "signed-multiset",
        "partial": "",
        "signature": "Int-\u003eSignedMultiset a-\u003e(SignedMultiset a,SignedMultiset a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the signed multiset to a list that associates all members\n of the multiset with their multiplicity.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e [(a, Int)]",
        "fct-source": "src/Data-SignedMultiset.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert the signed multiset to list that associates all members of the multiset with their multiplicity",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "toList",
        "normalized": "SignedMultiset a-\u003e[(a,Int)]",
        "package": "signed-multiset",
        "partial": "List",
        "signature": "SignedMultiset a-\u003e[(a,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:toLists",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n + k)\u003c/em\u003e (with \u003cem\u003ek\u003c/em\u003e the combined length of the returned lists). Return two\n lists, such that: for each object with a positive multiplicity \u003ccode\u003em\u003c/code\u003e in the\n signed multiset, the first list contains \u003ccode\u003em\u003c/code\u003e copies and the second list\n contains no copies of the object; for each object with a negative\n multiplicity \u003ccode\u003e-n\u003c/code\u003e, the first list contains no and the second list contains\n \u003ccode\u003en\u003c/code\u003e copies of the object; and for each object with zero multiplicity,\n neither list contains a copy of the object.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e ([a], [a])",
        "fct-source": "src/Data-SignedMultiset.html#toLists",
        "fct-type": "function",
        "title": "toLists"
      },
      "index": {
        "description": "with the combined length of the returned lists Return two lists such that for each object with positive multiplicity in the signed multiset the first list contains copies and the second list contains no copies of the object for each object with negative multiplicity the first list contains no and the second list contains copies of the object and for each object with zero multiplicity neither list contains copy of the object",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "toLists",
        "normalized": "SignedMultiset a-\u003e([a],[a])",
        "package": "signed-multiset",
        "partial": "Lists",
        "signature": "SignedMultiset a-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return the union of two signed multisets. The multiplicity of an\n object in the returned multiset is the maximum of its nonzero multiplicities\n in the argument multisets.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Return the union of two signed multisets The multiplicity of an object in the returned multiset is the maximum of its nonzero multiplicities in the argument multisets",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "union",
        "normalized": "SignedMultiset a-\u003eSignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "",
        "signature": "SignedMultiset a-\u003eSignedMultiset a-\u003eSignedMultiset a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/signed-multiset/docs/Data-SignedMultiset.html#v:unitstep",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return the left-continuous unit step of the signed multiset. The\n multiplicity of an object in the returned multiset is zero if it has negative\n multiplicity in the argument multiset, and 1 otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.SignedMultiset",
        "fct-package": "signed-multiset",
        "fct-signature": "SignedMultiset a -\u003e SignedMultiset a",
        "fct-source": "src/Data-SignedMultiset.html#unitstep",
        "fct-type": "function",
        "title": "unitstep"
      },
      "index": {
        "description": "Return the left-continuous unit step of the signed multiset The multiplicity of an object in the returned multiset is zero if it has negative multiplicity in the argument multiset and otherwise",
        "hierarchy": "Data SignedMultiset",
        "module": "Data.SignedMultiset",
        "name": "unitstep",
        "normalized": "SignedMultiset a-\u003eSignedMultiset a",
        "package": "signed-multiset",
        "partial": "",
        "signature": "SignedMultiset a-\u003eSignedMultiset a"
      }
    }
  }
]