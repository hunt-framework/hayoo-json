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
        "word": "equivalence"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an alternative interface to the union-find implementation\n in ''Data.Equivalence.STT''. It is wrapped into the monad\n transformer \u003ccode\u003e\u003ca\u003eEquivT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "Monad",
          "package": "equivalence",
          "source": "src/Data-Equivalence-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "This is an alternative interface to the union-find implementation in Data.Equivalence.STT It is wrapped into the monad transformer EquivT",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "Monad",
          "package": "equivalence",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis monad encapsulates computations maintaining an equivalence\nrelation. A monadic computation of type \u003ccode\u003e\u003ca\u003eEquivM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es c v a\u003c/code\u003e maintains a\nstate space indexed by type \u003ccode\u003es\u003c/code\u003e, maintains an equivalence relation\nover elements of type \u003ccode\u003ev\u003c/code\u003e with equivalence class descriptors of type\n\u003ccode\u003ec\u003c/code\u003e and returns a value of type \u003ccode\u003ea\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "EquivM",
          "package": "equivalence",
          "source": "src/Data-Equivalence-Monad.html#EquivM",
          "type": "type"
        },
        "index": {
          "description": "This monad encapsulates computations maintaining an equivalence relation monadic computation of type EquivM maintains state space indexed by type maintains an equivalence relation over elements of type with equivalence class descriptors of type and returns value of type",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "EquivM",
          "package": "equivalence",
          "partial": "Equiv",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#t:EquivM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis monad is a special case of \u003ccode\u003e\u003ca\u003eEquivM\u003c/a\u003e\u003c/code\u003e that only maintains\ntrivial equivalence class descriptors of type \u003ccode\u003e()\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "EquivM'",
          "package": "equivalence",
          "source": "src/Data-Equivalence-Monad.html#EquivM%27",
          "type": "type"
        },
        "index": {
          "description": "This monad is special case of EquivM that only maintains trivial equivalence class descriptors of type",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "EquivM'",
          "package": "equivalence",
          "partial": "Equiv M'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#t:EquivM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis monad transformer encapsulates computations maintaining an\nequivalence relation. A monadic computation of type \u003ccode\u003e\u003ca\u003eEquivT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es c v m\na\u003c/code\u003e maintains a state space indexed by type \u003ccode\u003es\u003c/code\u003e, maintains an\nequivalence relation over elements of type \u003ccode\u003ev\u003c/code\u003e with equivalence class\ndescriptors of type \u003ccode\u003ec\u003c/code\u003e and contains an internal monadic computation\nof type \u003ccode\u003em a\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "EquivT",
          "package": "equivalence",
          "source": "src/Data-Equivalence-Monad.html#EquivT",
          "type": "newtype"
        },
        "index": {
          "description": "This monad transformer encapsulates computations maintaining an equivalence relation monadic computation of type EquivT maintains state space indexed by type maintains an equivalence relation over elements of type with equivalence class descriptors of type and contains an internal monadic computation of type",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "EquivT",
          "package": "equivalence",
          "partial": "Equiv",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#t:EquivT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis monad transformer is a special case of \u003ccode\u003e\u003ca\u003eEquivT\u003c/a\u003e\u003c/code\u003e that only\nmaintains trivial equivalence class descriptors of type \u003ccode\u003e()\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "EquivT'",
          "package": "equivalence",
          "source": "src/Data-Equivalence-Monad.html#EquivT%27",
          "type": "type"
        },
        "index": {
          "description": "This monad transformer is special case of EquivT that only maintains trivial equivalence class descriptors of type",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "EquivT'",
          "package": "equivalence",
          "partial": "Equiv T'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#t:EquivT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class specifies the interface for a monadic computation that\nmaintains an equivalence relation.  \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "MonadEquiv",
          "package": "equivalence",
          "source": "src/Data-Equivalence-Monad.html#MonadEquiv",
          "type": "class"
        },
        "index": {
          "description": "This class specifies the interface for monadic computation that maintains an equivalence relation",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "MonadEquiv",
          "package": "equivalence",
          "partial": "Monad Equiv",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#t:MonadEquiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function decides whether the two given equivalence classes\n      are the same. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "(===)",
          "package": "equivalence",
          "signature": "c -\u003e c -\u003e m Bool",
          "source": "src/Data-Equivalence-Monad.html#%3D%3D%3D",
          "type": "method"
        },
        "index": {
          "description": "This function decides whether the two given equivalence classes are the same",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "(===) ===",
          "normalized": "a-\u003ea-\u003eb Bool",
          "package": "equivalence",
          "signature": "c-\u003ec-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:-61--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Equivalence.Monad",
          "name": "EquivT",
          "package": "equivalence",
          "signature": "EquivT",
          "source": "src/Data-Equivalence-Monad.html#EquivT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "EquivT",
          "package": "equivalence",
          "partial": "Equiv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:EquivT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function obtains the descriptor of the given element's\n        equivalence class. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "classDesc",
          "package": "equivalence",
          "signature": "v -\u003e m d",
          "source": "src/Data-Equivalence-Monad.html#classDesc",
          "type": "method"
        },
        "index": {
          "description": "This function obtains the descriptor of the given element equivalence class",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "classDesc",
          "normalized": "a-\u003eb c",
          "package": "equivalence",
          "partial": "Desc",
          "signature": "v-\u003em d",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:classDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function combines the two given equivalence\n      classes. Afterwards both arguments represent the same equivalence\n      class! One of it is returned in order to represent the new combined\n      equivalence class. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "combine",
          "package": "equivalence",
          "signature": "c -\u003e c -\u003e m c",
          "source": "src/Data-Equivalence-Monad.html#combine",
          "type": "method"
        },
        "index": {
          "description": "This function combines the two given equivalence classes Afterwards both arguments represent the same equivalence class One of it is returned in order to represent the new combined equivalence class",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "combine",
          "normalized": "a-\u003ea-\u003eb a",
          "package": "equivalence",
          "signature": "c-\u003ec-\u003em c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function combines all equivalence classes in the given\n      list. Afterwards all elements in the argument list represent the same\n      equivalence class! \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "combineAll",
          "package": "equivalence",
          "signature": "[c] -\u003e m ()",
          "source": "src/Data-Equivalence-Monad.html#combineAll",
          "type": "method"
        },
        "index": {
          "description": "This function combines all equivalence classes in the given list Afterwards all elements in the argument list represent the same equivalence class",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "combineAll",
          "normalized": "[a]-\u003eb()",
          "package": "equivalence",
          "partial": "All",
          "signature": "[c]-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:combineAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function returns the descriptor of the given\n      equivalence class. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "desc",
          "package": "equivalence",
          "signature": "c -\u003e m d",
          "source": "src/Data-Equivalence-Monad.html#desc",
          "type": "method"
        },
        "index": {
          "description": "This function returns the descriptor of the given equivalence class",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "desc",
          "normalized": "a-\u003eb c",
          "package": "equivalence",
          "signature": "c-\u003em d",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function equates the given two elements. That is it\n        unions the equivalence classes of the two elements. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "equate",
          "package": "equivalence",
          "signature": "v -\u003e v -\u003e m ()",
          "source": "src/Data-Equivalence-Monad.html#equate",
          "type": "method"
        },
        "index": {
          "description": "This function equates the given two elements That is it unions the equivalence classes of the two elements",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "equate",
          "normalized": "a-\u003ea-\u003eb()",
          "package": "equivalence",
          "signature": "v-\u003ev-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:equate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function equates the element in the given list. That is, it\n      unions the equivalence classes of the elements and combines their\n      descriptor. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "equateAll",
          "package": "equivalence",
          "signature": "[v] -\u003e m ()",
          "source": "src/Data-Equivalence-Monad.html#equateAll",
          "type": "method"
        },
        "index": {
          "description": "This function equates the element in the given list That is it unions the equivalence classes of the elements and combines their descriptor",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "equateAll",
          "normalized": "[a]-\u003eb()",
          "package": "equivalence",
          "partial": "All",
          "signature": "[v]-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:equateAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function decides whether the two given elements are\n        equivalent in the current equivalence relation \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "equivalent",
          "package": "equivalence",
          "signature": "v -\u003e v -\u003e m Bool",
          "source": "src/Data-Equivalence-Monad.html#equivalent",
          "type": "method"
        },
        "index": {
          "description": "This function decides whether the two given elements are equivalent in the current equivalence relation",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "equivalent",
          "normalized": "a-\u003ea-\u003eb Bool",
          "package": "equivalence",
          "signature": "v-\u003ev-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:equivalent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function provides the equivalence class the given element\n      is contained in. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "getClass",
          "package": "equivalence",
          "signature": "v -\u003e m c",
          "source": "src/Data-Equivalence-Monad.html#getClass",
          "type": "method"
        },
        "index": {
          "description": "This function provides the equivalence class the given element is contained in",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "getClass",
          "normalized": "a-\u003eb c",
          "package": "equivalence",
          "partial": "Class",
          "signature": "v-\u003em c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:getClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function removes the given equivalence class. If the\n      equivalence class does not exists anymore \u003ccode\u003eFalse\u003c/code\u003e is returned;\n      otherwise \u003ccode\u003eTrue\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "remove",
          "package": "equivalence",
          "signature": "c -\u003e m Bool",
          "source": "src/Data-Equivalence-Monad.html#remove",
          "type": "method"
        },
        "index": {
          "description": "This function removes the given equivalence class If the equivalence class does not exists anymore False is returned otherwise True",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "remove",
          "normalized": "a-\u003eb Bool",
          "package": "equivalence",
          "signature": "c-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function removes the equivalence class of the given\n      element. If there is no corresponding equivalence class, \u003ccode\u003eFalse\u003c/code\u003e is\n      returned; otherwise \u003ccode\u003eTrue\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "removeClass",
          "package": "equivalence",
          "signature": "v -\u003e m Bool",
          "source": "src/Data-Equivalence-Monad.html#removeClass",
          "type": "method"
        },
        "index": {
          "description": "This function removes the equivalence class of the given element If there is no corresponding equivalence class False is returned otherwise True",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "removeClass",
          "normalized": "a-\u003eb Bool",
          "package": "equivalence",
          "partial": "Class",
          "signature": "v-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:removeClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function runs a monadic computation that maintains an\nequivalence relation. The first tow arguments specify how to construct\nan equivalence class descriptor for a singleton class and how to\ncombine two equivalence class descriptors. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "runEquivM",
          "package": "equivalence",
          "signature": "(v -\u003e c)-\u003e (c -\u003e c -\u003e c)-\u003e (forall s.  EquivM s c v a)-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "This function runs monadic computation that maintains an equivalence relation The first tow arguments specify how to construct an equivalence class descriptor for singleton class and how to combine two equivalence class descriptors",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "runEquivM",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003e(c d EquivM e b a f)-\u003ef",
          "package": "equivalence",
          "partial": "Equiv",
          "signature": "(v-\u003ec)-\u003e(c-\u003ec-\u003ec)-\u003e(forall s. EquivM s c v a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:runEquivM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is a special case of \u003ccode\u003e\u003ca\u003erunEquivM\u003c/a\u003e\u003c/code\u003e that only maintains\ntrivial equivalence class descriptors of type \u003ccode\u003e()\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "runEquivM'",
          "package": "equivalence",
          "signature": "(forall s.  EquivM' s v a) -\u003e a",
          "source": "src/Data-Equivalence-Monad.html#runEquivM%27",
          "type": "function"
        },
        "index": {
          "description": "This function is special case of runEquivM that only maintains trivial equivalence class descriptors of type",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "runEquivM'",
          "normalized": "(a b EquivM' c d e)-\u003ee",
          "package": "equivalence",
          "partial": "Equiv M'",
          "signature": "(forall s. EquivM' s v a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:runEquivM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function runs a monadic computation that maintains an\nequivalence relation. The first tow arguments specify how to construct\nan equivalence class descriptor for a singleton class and how to\ncombine two equivalence class descriptors. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "runEquivT",
          "package": "equivalence",
          "signature": "(v -\u003e c)-\u003e (c -\u003e c -\u003e c)-\u003e (forall s.  EquivT s c v m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "This function runs monadic computation that maintains an equivalence relation The first tow arguments specify how to construct an equivalence class descriptor for singleton class and how to combine two equivalence class descriptors",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "runEquivT",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003e(c d EquivT e b a f g)-\u003ef g",
          "package": "equivalence",
          "partial": "Equiv",
          "signature": "(v-\u003ec)-\u003e(c-\u003ec-\u003ec)-\u003e(forall s. EquivT s c v m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:runEquivT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is a special case of \u003ccode\u003e\u003ca\u003erunEquivT\u003c/a\u003e\u003c/code\u003e that only maintains\ntrivial equivalence class descriptors of type \u003ccode\u003e()\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Equivalence.Monad",
          "name": "runEquivT'",
          "package": "equivalence",
          "signature": "(forall s.  EquivT' s v m a) -\u003e m a",
          "source": "src/Data-Equivalence-Monad.html#runEquivT%27",
          "type": "function"
        },
        "index": {
          "description": "This function is special case of runEquivT that only maintains trivial equivalence class descriptors of type",
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "runEquivT'",
          "normalized": "(a b EquivT' c d e f)-\u003ee f",
          "package": "equivalence",
          "partial": "Equiv T'",
          "signature": "(forall s. EquivT' s v m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:runEquivT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Equivalence.Monad",
          "name": "unEquivT",
          "package": "equivalence",
          "signature": "ReaderT (Equiv s c v) (STT s m) a",
          "source": "src/Data-Equivalence-Monad.html#EquivT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Equivalence Monad",
          "module": "Data.Equivalence.Monad",
          "name": "unEquivT",
          "package": "equivalence",
          "partial": "Equiv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-Monad.html#v:unEquivT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an implementation of Tarjan's Union-Find algorithm (Robert\n E. Tarjan. \u003ca\u003eEfficiency of a Good But Not Linear Set Union\n Algorithm\u003c/a\u003e, JACM 22(2), 1975) in order to maintain an equivalence\n relation. \n\u003c/p\u003e\u003cp\u003eThis implementation is a port of the \u003cem\u003eunion-find\u003c/em\u003e package using the\n ST monad transformer (instead of the IO monad).\n\u003c/p\u003e\u003cp\u003eThe implementation is based on mutable references.  Each\n equivalence class has exactly one member that serves as its\n representative element.  Every element either is the representative\n element of its equivalence class or points to another element in\n the same equivalence class.  Equivalence testing thus consists of\n following the pointers to the representative elements and then\n comparing these for identity.\n\u003c/p\u003e\u003cp\u003eThe algorithm performs lazy path compression.  That is, whenever we\n walk along a path greater than length 1 we automatically update the\n pointers along the path to directly point to the representative\n element.  Consequently future lookups will be have a path length of\n at most 1.\n\u003c/p\u003e\u003cp\u003eEach equivalence class remains a descriptor, i.e. some piece of\n data attached to an equivalence class which is combined when two\n classes are unioned.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Equivalence.STT",
          "name": "STT",
          "package": "equivalence",
          "source": "src/Data-Equivalence-STT.html",
          "type": "module"
        },
        "index": {
          "description": "This is an implementation of Tarjan Union-Find algorithm Robert Tarjan Efficiency of Good But Not Linear Set Union Algorithm JACM in order to maintain an equivalence relation This implementation is port of the union-find package using the ST monad transformer instead of the IO monad The implementation is based on mutable references Each equivalence class has exactly one member that serves as its representative element Every element either is the representative element of its equivalence class or points to another element in the same equivalence class Equivalence testing thus consists of following the pointers to the representative elements and then comparing these for identity The algorithm performs lazy path compression That is whenever we walk along path greater than length we automatically update the pointers along the path to directly point to the representative element Consequently future lookups will be have path length of at most Each equivalence class remains descriptor i.e some piece of data attached to an equivalence class which is combined when two classes are unioned",
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "STT",
          "package": "equivalence",
          "partial": "STT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Equivalence.STT",
          "name": "Class",
          "package": "equivalence",
          "source": "src/Data-Equivalence-STT.html#Class",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "Class",
          "package": "equivalence",
          "partial": "Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#t:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the top-level data structure that represents an\nequivalence relation. An equivalence relation of type \u003ccode\u003e\u003ca\u003eEquiv\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es c a\u003c/code\u003e\nlives in the state space indexed by \u003ccode\u003es\u003c/code\u003e, contains equivalence class\ndescriptors of type \u003ccode\u003ec\u003c/code\u003e and has elements of type \u003ccode\u003ea\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Equivalence.STT",
          "name": "Equiv",
          "package": "equivalence",
          "source": "src/Data-Equivalence-STT.html#Equiv",
          "type": "data"
        },
        "index": {
          "description": "This is the top-level data structure that represents an equivalence relation An equivalence relation of type Equiv lives in the state space indexed by contains equivalence class descriptors of type and has elements of type",
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "Equiv",
          "package": "equivalence",
          "partial": "Equiv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#t:Equiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function returns the descriptor of the given element's\nequivalence class. \n\u003c/p\u003e",
          "module": "Data.Equivalence.STT",
          "name": "classDesc",
          "package": "equivalence",
          "signature": "Equiv s c a -\u003e a -\u003e STT s m c",
          "source": "src/Data-Equivalence-STT.html#classDesc",
          "type": "function"
        },
        "index": {
          "description": "This function returns the descriptor of the given element equivalence class",
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "classDesc",
          "normalized": "Equiv a b c-\u003ec-\u003eSTT a d b",
          "package": "equivalence",
          "partial": "Desc",
          "signature": "Equiv s c a-\u003ea-\u003eSTT s m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#v:classDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function combines the two given equivalence\nclasses. Afterwards both arguments represent the same equivalence\nclass! One of it is returned in order to represent the new combined\nequivalence class. \n\u003c/p\u003e",
          "module": "Data.Equivalence.STT",
          "name": "combine",
          "package": "equivalence",
          "signature": "Equiv s c a -\u003e Class s c a -\u003e Class s c a -\u003e STT s m (Class s c a)",
          "source": "src/Data-Equivalence-STT.html#combine",
          "type": "function"
        },
        "index": {
          "description": "This function combines the two given equivalence classes Afterwards both arguments represent the same equivalence class One of it is returned in order to represent the new combined equivalence class",
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "combine",
          "normalized": "Equiv a b c-\u003eClass a b c-\u003eClass a b c-\u003eSTT a d(Class a b c)",
          "package": "equivalence",
          "signature": "Equiv s c a-\u003eClass s c a-\u003eClass s c a-\u003eSTT s m(Class s c a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function combines all equivalence classes in the given\nlist. Afterwards all elements in the argument list represent the same\nequivalence class! \n\u003c/p\u003e",
          "module": "Data.Equivalence.STT",
          "name": "combineAll",
          "package": "equivalence",
          "signature": "Equiv s c a -\u003e [Class s c a] -\u003e STT s m ()",
          "source": "src/Data-Equivalence-STT.html#combineAll",
          "type": "function"
        },
        "index": {
          "description": "This function combines all equivalence classes in the given list Afterwards all elements in the argument list represent the same equivalence class",
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "combineAll",
          "normalized": "Equiv a b c-\u003e[Class a b c]-\u003eSTT a d()",
          "package": "equivalence",
          "partial": "All",
          "signature": "Equiv s c a-\u003e[Class s c a]-\u003eSTT s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#v:combineAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function returns the descriptor of the given\nequivalence class. \n\u003c/p\u003e",
          "module": "Data.Equivalence.STT",
          "name": "desc",
          "package": "equivalence",
          "signature": "Equiv s c a -\u003e Class s c a -\u003e STT s m c",
          "source": "src/Data-Equivalence-STT.html#desc",
          "type": "function"
        },
        "index": {
          "description": "This function returns the descriptor of the given equivalence class",
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "desc",
          "normalized": "Equiv a b c-\u003eClass a b c-\u003eSTT a d b",
          "package": "equivalence",
          "signature": "Equiv s c a-\u003eClass s c a-\u003eSTT s m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#v:desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function equates the two given elements. That is, it unions\nthe equivalence classes of the two elements and combines their\ndescriptor. \n\u003c/p\u003e",
          "module": "Data.Equivalence.STT",
          "name": "equate",
          "package": "equivalence",
          "signature": "Equiv s c a -\u003e a -\u003e a -\u003e STT s m ()",
          "source": "src/Data-Equivalence-STT.html#equate",
          "type": "function"
        },
        "index": {
          "description": "This function equates the two given elements That is it unions the equivalence classes of the two elements and combines their descriptor",
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "equate",
          "normalized": "Equiv a b c-\u003ec-\u003ec-\u003eSTT a d()",
          "package": "equivalence",
          "signature": "Equiv s c a-\u003ea-\u003ea-\u003eSTT s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#v:equate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function equates the element in the given list. That is, it\nunions the equivalence classes of the elements and combines their\ndescriptor. \n\u003c/p\u003e",
          "module": "Data.Equivalence.STT",
          "name": "equateAll",
          "package": "equivalence",
          "signature": "Equiv s c a -\u003e [a] -\u003e STT s m ()",
          "source": "src/Data-Equivalence-STT.html#equateAll",
          "type": "function"
        },
        "index": {
          "description": "This function equates the element in the given list That is it unions the equivalence classes of the elements and combines their descriptor",
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "equateAll",
          "normalized": "Equiv a b c-\u003e[c]-\u003eSTT a d()",
          "package": "equivalence",
          "partial": "All",
          "signature": "Equiv s c a-\u003e[a]-\u003eSTT s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#v:equateAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function decides whether the two given elements are in the\nsame equivalence class according to the given equivalence relation\nrepresentation. \n\u003c/p\u003e",
          "module": "Data.Equivalence.STT",
          "name": "equivalent",
          "package": "equivalence",
          "signature": "Equiv s c a -\u003e a -\u003e a -\u003e STT s m Bool",
          "source": "src/Data-Equivalence-STT.html#equivalent",
          "type": "function"
        },
        "index": {
          "description": "This function decides whether the two given elements are in the same equivalence class according to the given equivalence relation representation",
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "equivalent",
          "normalized": "Equiv a b c-\u003ec-\u003ec-\u003eSTT a d Bool",
          "package": "equivalence",
          "signature": "Equiv s c a-\u003ea-\u003ea-\u003eSTT s m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#v:equivalent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function provides the equivalence class the given element is\ncontained in. \n\u003c/p\u003e",
          "module": "Data.Equivalence.STT",
          "name": "getClass",
          "package": "equivalence",
          "signature": "Equiv s c a -\u003e a -\u003e STT s m (Class s c a)",
          "source": "src/Data-Equivalence-STT.html#getClass",
          "type": "function"
        },
        "index": {
          "description": "This function provides the equivalence class the given element is contained in",
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "getClass",
          "normalized": "Equiv a b c-\u003ec-\u003eSTT a d(Class a b c)",
          "package": "equivalence",
          "partial": "Class",
          "signature": "Equiv s c a-\u003ea-\u003eSTT s m(Class s c a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#v:getClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function constructs the initial data structure for\nmaintaining an equivalence relation. That is it represents, the fines\n(or least) equivalence class (of the set of all elements of type\n\u003ccode\u003ea\u003c/code\u003e). The arguments are used to maintain equivalence class\ndescriptors. \n\u003c/p\u003e",
          "module": "Data.Equivalence.STT",
          "name": "leastEquiv",
          "package": "equivalence",
          "signature": "(a -\u003e c)-\u003e (c -\u003e c -\u003e c)-\u003e STT s m (Equiv s c a)",
          "type": "function"
        },
        "index": {
          "description": "This function constructs the initial data structure for maintaining an equivalence relation That is it represents the fines or least equivalence class of the set of all elements of type The arguments are used to maintain equivalence class descriptors",
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "leastEquiv",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003eSTT c d(Equiv c b a)",
          "package": "equivalence",
          "partial": "Equiv",
          "signature": "(a-\u003ec)-\u003e(c-\u003ec-\u003ec)-\u003eSTT s m(Equiv s c a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#v:leastEquiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function removes the given equivalence class. If the\nequivalence class does not exists anymore \u003ccode\u003eFalse\u003c/code\u003e is returned;\notherwise \u003ccode\u003eTrue\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Equivalence.STT",
          "name": "remove",
          "package": "equivalence",
          "signature": "Equiv s c a -\u003e Class s c a -\u003e STT s m Bool",
          "source": "src/Data-Equivalence-STT.html#remove",
          "type": "function"
        },
        "index": {
          "description": "This function removes the given equivalence class If the equivalence class does not exists anymore False is returned otherwise True",
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "remove",
          "normalized": "Equiv a b c-\u003eClass a b c-\u003eSTT a d Bool",
          "package": "equivalence",
          "signature": "Equiv s c a-\u003eClass s c a-\u003eSTT s m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function removes the equivalence class of the given\nelement. If there is no corresponding equivalence class, \u003ccode\u003eFalse\u003c/code\u003e is\nreturned; otherwise \u003ccode\u003eTrue\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Equivalence.STT",
          "name": "removeClass",
          "package": "equivalence",
          "signature": "Equiv s c a -\u003e a -\u003e STT s m Bool",
          "source": "src/Data-Equivalence-STT.html#removeClass",
          "type": "function"
        },
        "index": {
          "description": "This function removes the equivalence class of the given element If there is no corresponding equivalence class False is returned otherwise True",
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "removeClass",
          "normalized": "Equiv a b c-\u003ec-\u003eSTT a d Bool",
          "package": "equivalence",
          "partial": "Class",
          "signature": "Equiv s c a-\u003ea-\u003eSTT s m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#v:removeClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function decides whether the two given equivalence classes\nare the same. \n\u003c/p\u003e",
          "module": "Data.Equivalence.STT",
          "name": "same",
          "package": "equivalence",
          "signature": "Equiv s c a -\u003e Class s c a -\u003e Class s c a -\u003e STT s m Bool",
          "source": "src/Data-Equivalence-STT.html#same",
          "type": "function"
        },
        "index": {
          "description": "This function decides whether the two given equivalence classes are the same",
          "hierarchy": "Data Equivalence STT",
          "module": "Data.Equivalence.STT",
          "name": "same",
          "normalized": "Equiv a b c-\u003eClass a b c-\u003eClass a b c-\u003eSTT a d Bool",
          "package": "equivalence",
          "signature": "Equiv s c a-\u003eClass s c a-\u003eClass s c a-\u003eSTT s m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/equivalence/docs/Data-Equivalence-STT.html#v:same"
      }
    }
  ]
]