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
        "word": "state-record"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record.StateFields",
          "name": "StateFields",
          "package": "state-record",
          "source": "src/Data-Record-StateFields.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Record StateFields",
          "module": "Data.Record.StateFields",
          "name": "StateFields",
          "package": "state-record",
          "partial": "State Fields",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA primitive field descriptor.\n\u003c/p\u003e",
          "module": "Data.Record.StateFields",
          "name": "Field",
          "package": "state-record",
          "source": "src/Data-Record-StateFields-Core.html#Field",
          "type": "data"
        },
        "index": {
          "description": "primitive field descriptor",
          "hierarchy": "Data Record StateFields",
          "module": "Data.Record.StateFields",
          "name": "Field",
          "package": "state-record",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compound field descriptor.\n\u003c/p\u003e",
          "module": "Data.Record.StateFields",
          "name": "FieldPath",
          "package": "state-record",
          "source": "src/Data-Record-StateFields.html#FieldPath",
          "type": "data"
        },
        "index": {
          "description": "compound field descriptor",
          "hierarchy": "Data Record StateFields",
          "module": "Data.Record.StateFields",
          "name": "FieldPath",
          "package": "state-record",
          "partial": "Field Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#t:FieldPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of field descriptors. A descriptor of type 'f a b' refers to a\n   field of type \u003ccode\u003eb\u003c/code\u003e nested somewhere within a record of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Record.StateFields",
          "name": "SomeField",
          "package": "state-record",
          "source": "src/Data-Record-StateFields.html#SomeField",
          "type": "class"
        },
        "index": {
          "description": "The class of field descriptors descriptor of type refers to field of type nested somewhere within record of type",
          "hierarchy": "Data Record StateFields",
          "module": "Data.Record.StateFields",
          "name": "SomeField",
          "package": "state-record",
          "partial": "Some Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#t:SomeField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin two field descriptors into a compound.\n   \u003ccode\u003e\u003ca\u003e//\u003c/a\u003e\u003c/code\u003e is left-associative with precedence level 9.\n\u003c/p\u003e",
          "module": "Data.Record.StateFields",
          "name": "(//)",
          "package": "state-record",
          "signature": "f a b -\u003e g b c -\u003e FieldPath f g b a c",
          "source": "src/Data-Record-StateFields.html#%2F%2F",
          "type": "function"
        },
        "index": {
          "description": "Join two field descriptors into compound is left-associative with precedence level",
          "hierarchy": "Data Record StateFields",
          "module": "Data.Record.StateFields",
          "name": "(//) //",
          "normalized": "a b c-\u003ed c e-\u003eFieldPath a d c b e",
          "package": "state-record",
          "signature": "f a b-\u003eg b c-\u003eFieldPath f g b a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnter the context of a field and run a stateful computation there.\n\u003c/p\u003e",
          "module": "Data.Record.StateFields",
          "name": "enter",
          "package": "state-record",
          "signature": "f s a -\u003e State a b -\u003e m b",
          "source": "src/Data-Record-StateFields.html#enter",
          "type": "function"
        },
        "index": {
          "description": "Enter the context of field and run stateful computation there",
          "hierarchy": "Data Record StateFields",
          "module": "Data.Record.StateFields",
          "name": "enter",
          "normalized": "a b c-\u003eState c d-\u003ee d",
          "package": "state-record",
          "signature": "f s a-\u003eState a b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:enter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eenter\u003c/a\u003e\u003c/code\u003e, but allows the stateful computation on the field to\n   share the same underlying monad as the enclosing record.\n\u003c/p\u003e",
          "module": "Data.Record.StateFields",
          "name": "enterT",
          "package": "state-record",
          "signature": "f s a -\u003e StateT a m b -\u003e StateT s m b",
          "source": "src/Data-Record-StateFields.html#enterT",
          "type": "function"
        },
        "index": {
          "description": "Like enter but allows the stateful computation on the field to share the same underlying monad as the enclosing record",
          "hierarchy": "Data Record StateFields",
          "module": "Data.Record.StateFields",
          "name": "enterT",
          "normalized": "a b c-\u003eStateT c d e-\u003eStateT b d e",
          "package": "state-record",
          "signature": "f s a-\u003eStateT a m b-\u003eStateT s m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:enterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of a field.\n\u003c/p\u003e",
          "module": "Data.Record.StateFields",
          "name": "getField",
          "package": "state-record",
          "signature": "f a b -\u003e a -\u003e b",
          "source": "src/Data-Record-StateFields.html#getField",
          "type": "method"
        },
        "index": {
          "description": "Get the value of field",
          "hierarchy": "Data Record StateFields",
          "module": "Data.Record.StateFields",
          "name": "getField",
          "normalized": "a b c-\u003eb-\u003ec",
          "package": "state-record",
          "partial": "Field",
          "signature": "f a b-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:getField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of a field from the state.\n\u003c/p\u003e",
          "module": "Data.Record.StateFields",
          "name": "getf",
          "package": "state-record",
          "signature": "f s a -\u003e m a",
          "source": "src/Data-Record-StateFields.html#getf",
          "type": "function"
        },
        "index": {
          "description": "Get the value of field from the state",
          "hierarchy": "Data Record StateFields",
          "module": "Data.Record.StateFields",
          "name": "getf",
          "normalized": "a b c-\u003ed c",
          "package": "state-record",
          "signature": "f s a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:getf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the value of a field by applying a function.\n\u003c/p\u003e",
          "module": "Data.Record.StateFields",
          "name": "modField",
          "package": "state-record",
          "signature": "f s a -\u003e (a -\u003e a) -\u003e s -\u003e s",
          "source": "src/Data-Record-StateFields.html#modField",
          "type": "function"
        },
        "index": {
          "description": "Modify the value of field by applying function",
          "hierarchy": "Data Record StateFields",
          "module": "Data.Record.StateFields",
          "name": "modField",
          "normalized": "a b c-\u003e(c-\u003ec)-\u003eb-\u003eb",
          "package": "state-record",
          "partial": "Field",
          "signature": "f s a-\u003e(a-\u003ea)-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:modField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the value of a field in the state by applying a function.\n\u003c/p\u003e",
          "module": "Data.Record.StateFields",
          "name": "modf",
          "package": "state-record",
          "signature": "f s a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-Record-StateFields.html#modf",
          "type": "function"
        },
        "index": {
          "description": "Modify the value of field in the state by applying function",
          "hierarchy": "Data Record StateFields",
          "module": "Data.Record.StateFields",
          "name": "modf",
          "normalized": "a b c-\u003e(c-\u003ec)-\u003ed()",
          "package": "state-record",
          "signature": "f s a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:modf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a value into a field.\n\u003c/p\u003e",
          "module": "Data.Record.StateFields",
          "name": "putField",
          "package": "state-record",
          "signature": "f a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Record-StateFields.html#putField",
          "type": "method"
        },
        "index": {
          "description": "Put value into field",
          "hierarchy": "Data Record StateFields",
          "module": "Data.Record.StateFields",
          "name": "putField",
          "normalized": "a b c-\u003ec-\u003eb-\u003eb",
          "package": "state-record",
          "partial": "Field",
          "signature": "f a b-\u003eb-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:putField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a value into a field in the state.\n\u003c/p\u003e",
          "module": "Data.Record.StateFields",
          "name": "putf",
          "package": "state-record",
          "signature": "f s a -\u003e a -\u003e m ()",
          "source": "src/Data-Record-StateFields.html#putf",
          "type": "function"
        },
        "index": {
          "description": "Put value into field in the state",
          "hierarchy": "Data Record StateFields",
          "module": "Data.Record.StateFields",
          "name": "putf",
          "normalized": "a b c-\u003ec-\u003ed()",
          "package": "state-record",
          "signature": "f s a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:putf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the given 'data' or 'newtype' declaration so that all field names\n   are prefixed with an underscore followed by the given string, and\n   generate declarations of field descriptors for all fields, each bound to\n   the corresponding field name prefixed with the given string (but no\n   underscore).\n\u003c/p\u003e\u003cp\u003eExample usage (this goes at the top level of a module):\n\u003c/p\u003e\u003cpre\u003e record \"foo\" [d| data Foo = Foo { bar :: Int, baz :: Int } |]\n\u003c/pre\u003e\u003cp\u003eNote: the second parameter is Q [Dec] because this is what the [d| |]\n   form returns, which is the most convenient way to use this function.\n   However, the list must contain exactly one declaration, and it must be\n   a 'data' or 'newtype' declaration.\n\u003c/p\u003e\u003cp\u003eNote: in addition to adding the given prefix to each name, the first\n   character of the original name is capitalized.\n\u003c/p\u003e",
          "module": "Data.Record.StateFields",
          "name": "record",
          "package": "state-record",
          "signature": "String -\u003e Q [Dec] -\u003e Q [Dec]",
          "source": "src/Data-Record-StateFields-Core.html#record",
          "type": "function"
        },
        "index": {
          "description": "Modify the given data or newtype declaration so that all field names are prefixed with an underscore followed by the given string and generate declarations of field descriptors for all fields each bound to the corresponding field name prefixed with the given string but no underscore Example usage this goes at the top level of module record foo data Foo Foo bar Int baz Int Note the second parameter is Dec because this is what the form returns which is the most convenient way to use this function However the list must contain exactly one declaration and it must be data or newtype declaration Note in addition to adding the given prefix to each name the first character of the original name is capitalized",
          "hierarchy": "Data Record StateFields",
          "module": "Data.Record.StateFields",
          "name": "record",
          "normalized": "String-\u003eQ[Dec]-\u003eQ[Dec]",
          "package": "state-record",
          "signature": "String-\u003eQ[Dec]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/state-record/docs/Data-Record-StateFields.html#v:record"
      }
    }
  ]
]