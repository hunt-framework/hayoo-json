[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#",
      "description": {
        "fct-module": "Data.Record.StateFields",
        "fct-package": "state-record",
        "fct-signature": "module",
        "fct-source": "src/Data-Record-StateFields.html",
        "fct-type": "module",
        "title": "StateFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record StateFields",
        "module": "Data.Record.StateFields",
        "name": "StateFields",
        "normalized": "",
        "package": "state-record",
        "partial": "State Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eA primitive field descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.Record.StateFields",
        "fct-package": "state-record",
        "fct-signature": "data",
        "fct-source": "src/Data-Record-StateFields-Core.html#Field",
        "fct-type": "data",
        "title": "Field"
      },
      "index": {
        "description": "primitive field descriptor",
        "hierarchy": "Data Record StateFields",
        "module": "Data.Record.StateFields",
        "name": "Field",
        "normalized": "",
        "package": "state-record",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#t:FieldPath",
      "description": {
        "fct-descr": "\u003cp\u003eA compound field descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.Record.StateFields",
        "fct-package": "state-record",
        "fct-signature": "data",
        "fct-source": "src/Data-Record-StateFields.html#FieldPath",
        "fct-type": "data",
        "title": "FieldPath"
      },
      "index": {
        "description": "compound field descriptor",
        "hierarchy": "Data Record StateFields",
        "module": "Data.Record.StateFields",
        "name": "FieldPath",
        "normalized": "",
        "package": "state-record",
        "partial": "Field Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#t:SomeField",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of field descriptors. A descriptor of type 'f a b' refers to a\n   field of type \u003ccode\u003eb\u003c/code\u003e nested somewhere within a record of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Record.StateFields",
        "fct-package": "state-record",
        "fct-signature": "class",
        "fct-source": "src/Data-Record-StateFields.html#SomeField",
        "fct-type": "class",
        "title": "SomeField"
      },
      "index": {
        "description": "The class of field descriptors descriptor of type refers to field of type nested somewhere within record of type",
        "hierarchy": "Data Record StateFields",
        "module": "Data.Record.StateFields",
        "name": "SomeField",
        "normalized": "",
        "package": "state-record",
        "partial": "Some Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:-47--47-",
      "description": {
        "fct-descr": "\u003cp\u003eJoin two field descriptors into a compound.\n   \u003ccode\u003e\u003ca\u003e//\u003c/a\u003e\u003c/code\u003e is left-associative with precedence level 9.\n\u003c/p\u003e",
        "fct-module": "Data.Record.StateFields",
        "fct-package": "state-record",
        "fct-signature": "f a b -\u003e g b c -\u003e FieldPath f g b a c",
        "fct-source": "src/Data-Record-StateFields.html#%2F%2F",
        "fct-type": "function",
        "title": "(//)"
      },
      "index": {
        "description": "Join two field descriptors into compound is left-associative with precedence level",
        "hierarchy": "Data Record StateFields",
        "module": "Data.Record.StateFields",
        "name": "(//) //",
        "normalized": "a b c-\u003ed c e-\u003eFieldPath a d c b e",
        "package": "state-record",
        "partial": "",
        "signature": "f a b-\u003eg b c-\u003eFieldPath f g b a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:enter",
      "description": {
        "fct-descr": "\u003cp\u003eEnter the context of a field and run a stateful computation there.\n\u003c/p\u003e",
        "fct-module": "Data.Record.StateFields",
        "fct-package": "state-record",
        "fct-signature": "f s a -\u003e State a b -\u003e m b",
        "fct-source": "src/Data-Record-StateFields.html#enter",
        "fct-type": "function",
        "title": "enter"
      },
      "index": {
        "description": "Enter the context of field and run stateful computation there",
        "hierarchy": "Data Record StateFields",
        "module": "Data.Record.StateFields",
        "name": "enter",
        "normalized": "a b c-\u003eState c d-\u003ee d",
        "package": "state-record",
        "partial": "",
        "signature": "f s a-\u003eState a b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:enterT",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eenter\u003c/a\u003e\u003c/code\u003e, but allows the stateful computation on the field to\n   share the same underlying monad as the enclosing record.\n\u003c/p\u003e",
        "fct-module": "Data.Record.StateFields",
        "fct-package": "state-record",
        "fct-signature": "f s a -\u003e StateT a m b -\u003e StateT s m b",
        "fct-source": "src/Data-Record-StateFields.html#enterT",
        "fct-type": "function",
        "title": "enterT"
      },
      "index": {
        "description": "Like enter but allows the stateful computation on the field to share the same underlying monad as the enclosing record",
        "hierarchy": "Data Record StateFields",
        "module": "Data.Record.StateFields",
        "name": "enterT",
        "normalized": "a b c-\u003eStateT c d e-\u003eStateT b d e",
        "package": "state-record",
        "partial": "",
        "signature": "f s a-\u003eStateT a m b-\u003eStateT s m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:getField",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of a field.\n\u003c/p\u003e",
        "fct-module": "Data.Record.StateFields",
        "fct-package": "state-record",
        "fct-signature": "f a b -\u003e a -\u003e b",
        "fct-source": "src/Data-Record-StateFields.html#getField",
        "fct-type": "method",
        "title": "getField"
      },
      "index": {
        "description": "Get the value of field",
        "hierarchy": "Data Record StateFields",
        "module": "Data.Record.StateFields",
        "name": "getField",
        "normalized": "a b c-\u003eb-\u003ec",
        "package": "state-record",
        "partial": "Field",
        "signature": "f a b-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:getf",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of a field from the state.\n\u003c/p\u003e",
        "fct-module": "Data.Record.StateFields",
        "fct-package": "state-record",
        "fct-signature": "f s a -\u003e m a",
        "fct-source": "src/Data-Record-StateFields.html#getf",
        "fct-type": "function",
        "title": "getf"
      },
      "index": {
        "description": "Get the value of field from the state",
        "hierarchy": "Data Record StateFields",
        "module": "Data.Record.StateFields",
        "name": "getf",
        "normalized": "a b c-\u003ed c",
        "package": "state-record",
        "partial": "",
        "signature": "f s a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:modField",
      "description": {
        "fct-descr": "\u003cp\u003eModify the value of a field by applying a function.\n\u003c/p\u003e",
        "fct-module": "Data.Record.StateFields",
        "fct-package": "state-record",
        "fct-signature": "f s a -\u003e (a -\u003e a) -\u003e s -\u003e s",
        "fct-source": "src/Data-Record-StateFields.html#modField",
        "fct-type": "function",
        "title": "modField"
      },
      "index": {
        "description": "Modify the value of field by applying function",
        "hierarchy": "Data Record StateFields",
        "module": "Data.Record.StateFields",
        "name": "modField",
        "normalized": "a b c-\u003e(c-\u003ec)-\u003eb-\u003eb",
        "package": "state-record",
        "partial": "Field",
        "signature": "f s a-\u003e(a-\u003ea)-\u003es-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:modf",
      "description": {
        "fct-descr": "\u003cp\u003eModify the value of a field in the state by applying a function.\n\u003c/p\u003e",
        "fct-module": "Data.Record.StateFields",
        "fct-package": "state-record",
        "fct-signature": "f s a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Data-Record-StateFields.html#modf",
        "fct-type": "function",
        "title": "modf"
      },
      "index": {
        "description": "Modify the value of field in the state by applying function",
        "hierarchy": "Data Record StateFields",
        "module": "Data.Record.StateFields",
        "name": "modf",
        "normalized": "a b c-\u003e(c-\u003ec)-\u003ed()",
        "package": "state-record",
        "partial": "",
        "signature": "f s a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:putField",
      "description": {
        "fct-descr": "\u003cp\u003ePut a value into a field.\n\u003c/p\u003e",
        "fct-module": "Data.Record.StateFields",
        "fct-package": "state-record",
        "fct-signature": "f a b -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Data-Record-StateFields.html#putField",
        "fct-type": "method",
        "title": "putField"
      },
      "index": {
        "description": "Put value into field",
        "hierarchy": "Data Record StateFields",
        "module": "Data.Record.StateFields",
        "name": "putField",
        "normalized": "a b c-\u003ec-\u003eb-\u003eb",
        "package": "state-record",
        "partial": "Field",
        "signature": "f a b-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:putf",
      "description": {
        "fct-descr": "\u003cp\u003ePut a value into a field in the state.\n\u003c/p\u003e",
        "fct-module": "Data.Record.StateFields",
        "fct-package": "state-record",
        "fct-signature": "f s a -\u003e a -\u003e m ()",
        "fct-source": "src/Data-Record-StateFields.html#putf",
        "fct-type": "function",
        "title": "putf"
      },
      "index": {
        "description": "Put value into field in the state",
        "hierarchy": "Data Record StateFields",
        "module": "Data.Record.StateFields",
        "name": "putf",
        "normalized": "a b c-\u003ec-\u003ed()",
        "package": "state-record",
        "partial": "",
        "signature": "f s a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:record",
      "description": {
        "fct-descr": "\u003cp\u003eModify the given 'data' or 'newtype' declaration so that all field names\n   are prefixed with an underscore followed by the given string, and\n   generate declarations of field descriptors for all fields, each bound to\n   the corresponding field name prefixed with the given string (but no\n   underscore).\n\u003c/p\u003e\u003cp\u003eExample usage (this goes at the top level of a module):\n\u003c/p\u003e\u003cpre\u003e record \"foo\" [d| data Foo = Foo { bar :: Int, baz :: Int } |]\n\u003c/pre\u003e\u003cp\u003eNote: the second parameter is Q [Dec] because this is what the [d| |]\n   form returns, which is the most convenient way to use this function.\n   However, the list must contain exactly one declaration, and it must be\n   a 'data' or 'newtype' declaration.\n\u003c/p\u003e\u003cp\u003eNote: in addition to adding the given prefix to each name, the first\n   character of the original name is capitalized.\n\u003c/p\u003e",
        "fct-module": "Data.Record.StateFields",
        "fct-package": "state-record",
        "fct-signature": "String -\u003e Q [Dec] -\u003e Q [Dec]",
        "fct-source": "src/Data-Record-StateFields-Core.html#record",
        "fct-type": "function",
        "title": "record"
      },
      "index": {
        "description": "Modify the given data or newtype declaration so that all field names are prefixed with an underscore followed by the given string and generate declarations of field descriptors for all fields each bound to the corresponding field name prefixed with the given string but no underscore Example usage this goes at the top level of module record foo data Foo Foo bar Int baz Int Note the second parameter is Dec because this is what the form returns which is the most convenient way to use this function However the list must contain exactly one declaration and it must be data or newtype declaration Note in addition to adding the given prefix to each name the first character of the original name is capitalized",
        "hierarchy": "Data Record StateFields",
        "module": "Data.Record.StateFields",
        "name": "record",
        "normalized": "String-\u003eQ[Dec]-\u003eQ[Dec]",
        "package": "state-record",
        "partial": "",
        "signature": "String-\u003eQ[Dec]-\u003eQ[Dec]"
      }
    }
  }
]