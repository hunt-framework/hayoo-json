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
        "word": "enumset"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtract and inject an Enum value into an EnumSet.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.EnumSet.PackedEnum",
          "name": "PackedEnum",
          "package": "enumset",
          "source": "src/Data-EnumSet-PackedEnum.html",
          "type": "module"
        },
        "index": {
          "description": "Extract and inject an Enum value into an EnumSet",
          "hierarchy": "Data EnumSet PackedEnum",
          "module": "Data.EnumSet.PackedEnum",
          "name": "PackedEnum",
          "package": "enumset",
          "partial": "Packed Enum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet-PackedEnum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e T w a b\u003c/code\u003e describes a contiguous set of bit indices into the word type \u003ccode\u003ew\u003c/code\u003e\nwhere the indices are of type \u003ccode\u003ea\u003c/code\u003e and the set of indices represent a value of type \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EnumSet.PackedEnum",
          "name": "T",
          "package": "enumset",
          "source": "src/Data-EnumSet-PackedEnum.html#T",
          "type": "data"
        },
        "index": {
          "description": "describes contiguous set of bit indices into the word type where the indices are of type and the set of indices represent value of type",
          "hierarchy": "Data EnumSet PackedEnum",
          "module": "Data.EnumSet.PackedEnum",
          "name": "T",
          "package": "enumset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet-PackedEnum.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet.PackedEnum",
          "name": "Cons",
          "package": "enumset",
          "signature": "Cons w Int",
          "source": "src/Data-EnumSet-PackedEnum.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet PackedEnum",
          "module": "Data.EnumSet.PackedEnum",
          "name": "Cons",
          "package": "enumset",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet-PackedEnum.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear all bits at the specified indices.\n\u003c/p\u003e",
          "module": "Data.EnumSet.PackedEnum",
          "name": "clear",
          "package": "enumset",
          "signature": "T w a b -\u003e T w a -\u003e T w a",
          "source": "src/Data-EnumSet-PackedEnum.html#clear",
          "type": "function"
        },
        "index": {
          "description": "Clear all bits at the specified indices",
          "hierarchy": "Data EnumSet PackedEnum",
          "module": "Data.EnumSet.PackedEnum",
          "name": "clear",
          "normalized": "T a b c-\u003eT a b-\u003eT a b",
          "package": "enumset",
          "signature": "T w a b-\u003eT w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet-PackedEnum.html#v:clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an enumeration set, where an value of type \u003ccode\u003eb\u003c/code\u003e\nis placed at the specified indices.\n\u003c/p\u003e",
          "module": "Data.EnumSet.PackedEnum",
          "name": "pack",
          "package": "enumset",
          "signature": "T w a b -\u003e b -\u003e T w a",
          "source": "src/Data-EnumSet-PackedEnum.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Create an enumeration set where an value of type is placed at the specified indices",
          "hierarchy": "Data EnumSet PackedEnum",
          "module": "Data.EnumSet.PackedEnum",
          "name": "pack",
          "normalized": "T a b c-\u003ec-\u003eT a b",
          "package": "enumset",
          "signature": "T w a b-\u003eb-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet-PackedEnum.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverwrite an enumset at the specified indices with the value of type \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EnumSet.PackedEnum",
          "name": "put",
          "package": "enumset",
          "signature": "T w a b -\u003e b -\u003e T w a -\u003e T w a",
          "source": "src/Data-EnumSet-PackedEnum.html#put",
          "type": "function"
        },
        "index": {
          "description": "Overwrite an enumset at the specified indices with the value of type",
          "hierarchy": "Data EnumSet PackedEnum",
          "module": "Data.EnumSet.PackedEnum",
          "name": "put",
          "normalized": "T a b c-\u003ec-\u003eT a b-\u003eT a b",
          "package": "enumset",
          "signature": "T w a b-\u003eb-\u003eT w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet-PackedEnum.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract an enumeration value from the specified index set.\n\u003c/p\u003e",
          "module": "Data.EnumSet.PackedEnum",
          "name": "unpack",
          "package": "enumset",
          "signature": "T w a b -\u003e T w a -\u003e b",
          "source": "src/Data-EnumSet-PackedEnum.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Extract an enumeration value from the specified index set",
          "hierarchy": "Data EnumSet PackedEnum",
          "module": "Data.EnumSet.PackedEnum",
          "name": "unpack",
          "normalized": "T a b c-\u003eT a b-\u003ec",
          "package": "enumset",
          "signature": "T w a b-\u003eT w a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet-PackedEnum.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimilar to Data.Edison.Coll.EnumSet\nbut it allows to choose the underlying type for bit storage.\nThis is really a low-level module for type-safe foreign function interfaces.\n\u003c/p\u003e\u003cp\u003eThe integer representation of the enumeration type\nis the bit position of the flag within the bitvector.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.EnumSet",
          "name": "EnumSet",
          "package": "enumset",
          "source": "src/Data-EnumSet.html",
          "type": "module"
        },
        "index": {
          "description": "Similar to Data.Edison.Coll.EnumSet but it allows to choose the underlying type for bit storage This is really low-level module for type-safe foreign function interfaces The integer representation of the enumeration type is the bit position of the flag within the bitvector",
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "EnumSet",
          "package": "enumset",
          "partial": "Enum Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "T",
          "package": "enumset",
          "source": "src/Data-EnumSet.html#T",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "T",
          "package": "enumset",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "(.|.)",
          "package": "enumset",
          "signature": "T w a -\u003e T w a -\u003e T w a",
          "source": "src/Data-EnumSet.html#.%26.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "(.|.) .|.",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "enumset",
          "signature": "T w a-\u003eT w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:.-124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "(.&.)",
          "package": "enumset",
          "signature": "T w a -\u003e T w a -\u003e T w a",
          "source": "src/Data-EnumSet.html#.%26.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "(.&.) .&.",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "enumset",
          "signature": "T w a-\u003eT w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:.-38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "(.-.)",
          "package": "enumset",
          "signature": "T w a -\u003e T w a -\u003e T w a",
          "source": "src/Data-EnumSet.html#.%26.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "(.-.) .-.",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "enumset",
          "signature": "T w a-\u003eT w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:.-45-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "Cons",
          "package": "enumset",
          "signature": "Cons",
          "source": "src/Data-EnumSet.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "Cons",
          "package": "enumset",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "accessor",
          "package": "enumset",
          "signature": "a -\u003e T (T w a) Bool",
          "source": "src/Data-EnumSet.html#accessor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "accessor",
          "normalized": "a-\u003eT(T b a)Bool",
          "package": "enumset",
          "signature": "a-\u003eT(T w a)Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:accessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecould also be named \u003ccode\u003edelete\u003c/code\u003e like in \u003ccode\u003eSet\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.EnumSet",
          "name": "clear",
          "package": "enumset",
          "signature": "a -\u003e T w a -\u003e T w a",
          "source": "src/Data-EnumSet.html#clear",
          "type": "function"
        },
        "index": {
          "description": "could also be named delete like in Set",
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "clear",
          "normalized": "a-\u003eT b a-\u003eT b a",
          "package": "enumset",
          "signature": "a-\u003eT w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "decons",
          "package": "enumset",
          "signature": "word",
          "source": "src/Data-EnumSet.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "decons",
          "package": "enumset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:decons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "disjoint",
          "package": "enumset",
          "signature": "T w a -\u003e T w a -\u003e Bool",
          "source": "src/Data-EnumSet.html#disjoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "disjoint",
          "normalized": "T a b-\u003eT a b-\u003eBool",
          "package": "enumset",
          "signature": "T w a-\u003eT w a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:disjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "empty",
          "package": "enumset",
          "signature": "T w a",
          "source": "src/Data-EnumSet.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "empty",
          "package": "enumset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "flip",
          "package": "enumset",
          "signature": "a -\u003e T w a -\u003e T w a",
          "source": "src/Data-EnumSet.html#flip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "flip",
          "normalized": "a-\u003eT b a-\u003eT b a",
          "package": "enumset",
          "signature": "a-\u003eT w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "fromBool",
          "package": "enumset",
          "signature": "a -\u003e Bool -\u003e T w a",
          "source": "src/Data-EnumSet.html#fromBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "fromBool",
          "normalized": "a-\u003eBool-\u003eT b a",
          "package": "enumset",
          "partial": "Bool",
          "signature": "a-\u003eBool-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:fromBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "fromEnum",
          "package": "enumset",
          "signature": "a -\u003e T w a",
          "source": "src/Data-EnumSet.html#fromEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "fromEnum",
          "normalized": "a-\u003eT b a",
          "package": "enumset",
          "partial": "Enum",
          "signature": "a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:fromEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "fromEnums",
          "package": "enumset",
          "signature": "[a] -\u003e T w a",
          "source": "src/Data-EnumSet.html#fromEnums",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "fromEnums",
          "normalized": "[a]-\u003eT b a",
          "package": "enumset",
          "partial": "Enums",
          "signature": "[a]-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:fromEnums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecould also be named \u003ccode\u003emember\u003c/code\u003e like in \u003ccode\u003eSet\u003c/code\u003e or \u003ccode\u003eelem\u003c/code\u003e as in '[]'\n\u003c/p\u003e",
          "module": "Data.EnumSet",
          "name": "get",
          "package": "enumset",
          "signature": "a -\u003e T w a -\u003e Bool",
          "source": "src/Data-EnumSet.html#get",
          "type": "function"
        },
        "index": {
          "description": "could also be named member like in Set or elem as in",
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "get",
          "normalized": "a-\u003eT b a-\u003eBool",
          "package": "enumset",
          "signature": "a-\u003eT w a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "intToEnums",
          "package": "enumset",
          "signature": "T w a -\u003e [a]",
          "source": "src/Data-EnumSet.html#intToEnums",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "intToEnums",
          "normalized": "T a b-\u003e[b]",
          "package": "enumset",
          "partial": "To Enums",
          "signature": "T w a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:intToEnums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efloor of binary logarithm -\nIntended for getting the position of a single set bit.\nThis in turn is intended for implementing an \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e instance\nif you only know masks but no bit positions.\n\u003c/p\u003e",
          "module": "Data.EnumSet",
          "name": "mostSignificantPosition",
          "package": "enumset",
          "signature": "T w a -\u003e Int",
          "source": "src/Data-EnumSet.html#mostSignificantPosition",
          "type": "function"
        },
        "index": {
          "description": "floor of binary logarithm Intended for getting the position of single set bit This in turn is intended for implementing an Enum instance if you only know masks but no bit positions",
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "mostSignificantPosition",
          "normalized": "T a b-\u003eInt",
          "package": "enumset",
          "partial": "Significant Position",
          "signature": "T w a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:mostSignificantPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "null",
          "package": "enumset",
          "signature": "T w a -\u003e Bool",
          "source": "src/Data-EnumSet.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "null",
          "normalized": "T a b-\u003eBool",
          "package": "enumset",
          "signature": "T w a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "put",
          "package": "enumset",
          "signature": "a -\u003e Bool -\u003e T w a -\u003e T w a",
          "source": "src/Data-EnumSet.html#put",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "put",
          "normalized": "a-\u003eBool-\u003eT b a-\u003eT b a",
          "package": "enumset",
          "signature": "a-\u003eBool-\u003eT w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecould also be named \u003ccode\u003einsert\u003c/code\u003e like in \u003ccode\u003eSet\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.EnumSet",
          "name": "set",
          "package": "enumset",
          "signature": "a -\u003e T w a -\u003e T w a",
          "source": "src/Data-EnumSet.html#set",
          "type": "function"
        },
        "index": {
          "description": "could also be named insert like in Set",
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "set",
          "normalized": "a-\u003eT b a-\u003eT b a",
          "package": "enumset",
          "signature": "a-\u003eT w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "singleton",
          "package": "enumset",
          "signature": "a -\u003e T w a",
          "source": "src/Data-EnumSet.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "singleton",
          "normalized": "a-\u003eT b a",
          "package": "enumset",
          "signature": "a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset a bit -\nIntended for implementing an \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e instance\nif you only know masks but no bit positions.\n\u003c/p\u003e",
          "module": "Data.EnumSet",
          "name": "singletonByPosition",
          "package": "enumset",
          "signature": "Int -\u003e T w a",
          "source": "src/Data-EnumSet.html#singletonByPosition",
          "type": "function"
        },
        "index": {
          "description": "set bit Intended for implementing an Enum instance if you only know masks but no bit positions",
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "singletonByPosition",
          "normalized": "Int-\u003eT a b",
          "package": "enumset",
          "partial": "By Position",
          "signature": "Int-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:singletonByPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubset a b\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003ea\u003c/code\u003e is a subset of \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EnumSet",
          "name": "subset",
          "package": "enumset",
          "signature": "T w a -\u003e T w a -\u003e Bool",
          "source": "src/Data-EnumSet.html#subset",
          "type": "function"
        },
        "index": {
          "description": "subset is True if is subset of",
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "subset",
          "normalized": "T a b-\u003eT a b-\u003eBool",
          "package": "enumset",
          "signature": "T w a-\u003eT w a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:subset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "toEnums",
          "package": "enumset",
          "signature": "T w a -\u003e [a]",
          "source": "src/Data-EnumSet.html#toEnums",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "toEnums",
          "normalized": "T a b-\u003e[b]",
          "package": "enumset",
          "partial": "Enums",
          "signature": "T w a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:toEnums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "unions",
          "package": "enumset",
          "signature": "[T w a] -\u003e T w a",
          "source": "src/Data-EnumSet.html#unions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "unions",
          "normalized": "[T a b]-\u003eT a b",
          "package": "enumset",
          "signature": "[T w a]-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "xor",
          "package": "enumset",
          "signature": "T w a -\u003e T w a -\u003e T w a",
          "source": "src/Data-EnumSet.html#.%26.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "xor",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "enumset",
          "signature": "T w a-\u003eT w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-EnumSet.html#v:xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet.PackedRecord",
          "name": "PackedRecord",
          "package": "enumset",
          "source": "src/Data-FlagSet-PackedRecord.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data FlagSet PackedRecord",
          "module": "Data.FlagSet.PackedRecord",
          "name": "PackedRecord",
          "package": "enumset",
          "partial": "Packed Record",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet-PackedRecord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet.PackedRecord",
          "name": "accessorIntByMask",
          "package": "enumset",
          "signature": "Mask w a b -\u003e T (T w a) i",
          "source": "src/Data-FlagSet-PackedRecord.html#accessorIntByMask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet PackedRecord",
          "module": "Data.FlagSet.PackedRecord",
          "name": "accessorIntByMask",
          "normalized": "Mask a b c-\u003eT(T a b)d",
          "package": "enumset",
          "partial": "Int By Mask",
          "signature": "Mask w a b-\u003eT(T w a)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet-PackedRecord.html#v:accessorIntByMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet.PackedRecord",
          "name": "accessorIntByRange",
          "package": "enumset",
          "signature": "Int -\u003e Int -\u003e T (T w a) i",
          "source": "src/Data-FlagSet-PackedRecord.html#accessorIntByRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet PackedRecord",
          "module": "Data.FlagSet.PackedRecord",
          "name": "accessorIntByRange",
          "normalized": "Int-\u003eInt-\u003eT(T a b)c",
          "package": "enumset",
          "partial": "Int By Range",
          "signature": "Int-\u003eInt-\u003eT(T w a)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet-PackedRecord.html#v:accessorIntByRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet.PackedRecord",
          "name": "getIntByMask",
          "package": "enumset",
          "signature": "Mask w a b -\u003e T w a -\u003e i",
          "source": "src/Data-FlagSet-PackedRecord.html#getIntByMask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet PackedRecord",
          "module": "Data.FlagSet.PackedRecord",
          "name": "getIntByMask",
          "normalized": "Mask a b c-\u003eT a b-\u003ed",
          "package": "enumset",
          "partial": "Int By Mask",
          "signature": "Mask w a b-\u003eT w a-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet-PackedRecord.html#v:getIntByMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet.PackedRecord",
          "name": "getIntByRange",
          "package": "enumset",
          "signature": "Int -\u003e Int -\u003e T w a -\u003e i",
          "source": "src/Data-FlagSet-PackedRecord.html#getIntByRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet PackedRecord",
          "module": "Data.FlagSet.PackedRecord",
          "name": "getIntByRange",
          "normalized": "Int-\u003eInt-\u003eT a b-\u003ec",
          "package": "enumset",
          "partial": "Int By Range",
          "signature": "Int-\u003eInt-\u003eT w a-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet-PackedRecord.html#v:getIntByRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet.PackedRecord",
          "name": "putIntByMask",
          "package": "enumset",
          "signature": "Mask w a b -\u003e i -\u003e T w a -\u003e T w a",
          "source": "src/Data-FlagSet-PackedRecord.html#putIntByMask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet PackedRecord",
          "module": "Data.FlagSet.PackedRecord",
          "name": "putIntByMask",
          "normalized": "Mask a b c-\u003ed-\u003eT a b-\u003eT a b",
          "package": "enumset",
          "partial": "Int By Mask",
          "signature": "Mask w a b-\u003ei-\u003eT w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet-PackedRecord.html#v:putIntByMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet.PackedRecord",
          "name": "putIntByRange",
          "package": "enumset",
          "signature": "Int -\u003e Int -\u003e i -\u003e T w a -\u003e T w a",
          "source": "src/Data-FlagSet-PackedRecord.html#putIntByRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet PackedRecord",
          "module": "Data.FlagSet.PackedRecord",
          "name": "putIntByRange",
          "normalized": "Int-\u003eInt-\u003ea-\u003eT b c-\u003eT b c",
          "package": "enumset",
          "partial": "Int By Range",
          "signature": "Int-\u003eInt-\u003ei-\u003eT w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet-PackedRecord.html#v:putIntByRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA bit vector that represents a record in a bit-packed way.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.FlagSet",
          "name": "FlagSet",
          "package": "enumset",
          "source": "src/Data-FlagSet.html",
          "type": "module"
        },
        "index": {
          "description": "bit vector that represents record in bit-packed way",
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "FlagSet",
          "package": "enumset",
          "partial": "Flag Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet",
          "name": "Enum",
          "package": "enumset",
          "source": "src/Data-FlagSet.html#Enum",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "Enum",
          "package": "enumset",
          "partial": "Enum",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#t:Enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMask w a b\u003c/code\u003e describes a field of a \u003ccode\u003eT w a\u003c/code\u003e that has type \u003ccode\u003eValue w b\u003c/code\u003e.\nOn the machine level a \u003ccode\u003e\u003ca\u003eMask\u003c/a\u003e\u003c/code\u003e value is a vector of bits,\nwhere set bits represent the bits belonging to one record field.\nThere must be only one mask value for every pair of types \u003ccode\u003e(a,b)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.FlagSet",
          "name": "Mask",
          "package": "enumset",
          "source": "src/Data-FlagSet.html#Mask",
          "type": "newtype"
        },
        "index": {
          "description": "Mask describes field of that has type Value On the machine level Mask value is vector of bits where set bits represent the bits belonging to one record field There must be only one mask value for every pair of types",
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "Mask",
          "package": "enumset",
          "partial": "Mask",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#t:Mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines a mask with a value, that matches this mask.\nIn \u003ccode\u003eMaskedValue mask value\u003c/code\u003e, \u003ccode\u003evalue\u003c/code\u003e must be a subset of \u003ccode\u003emask\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.FlagSet",
          "name": "MaskedValue",
          "package": "enumset",
          "source": "src/Data-FlagSet.html#MaskedValue",
          "type": "data"
        },
        "index": {
          "description": "Combines mask with value that matches this mask In MaskedValue mask value value must be subset of mask",
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "MaskedValue",
          "package": "enumset",
          "partial": "Masked Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#t:MaskedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic bit vector data type.\nIt does not provide a lot of functionality,\nsince that could not be done in a safe way.\n\u003c/p\u003e\u003cp\u003eThe type \u003ccode\u003ea\u003c/code\u003e identifies the maintained flags.\nIt may be an empty type\nbut it may also be an enumeration\nof record fields with concrete values.\nIn the latter case you are encouraged to define an \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e instance\nfor this enumeration.\nBe aware that it is different from \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e of Prelude.\n\u003c/p\u003e",
          "module": "Data.FlagSet",
          "name": "T",
          "package": "enumset",
          "source": "src/Data-FlagSet.html#T",
          "type": "newtype"
        },
        "index": {
          "description": "The basic bit vector data type It does not provide lot of functionality since that could not be done in safe way The type identifies the maintained flags It may be an empty type but it may also be an enumeration of record fields with concrete values In the latter case you are encouraged to define an Enum instance for this enumeration Be aware that it is different from Enum of Prelude",
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "T",
          "package": "enumset",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type parameter \u003ccode\u003ew\u003c/code\u003e is the type of the underlying bit vector.\nThe type parameter \u003ccode\u003eb\u003c/code\u003e is a phantom type,\nthat is specific for a certain range of bits.\n\u003c/p\u003e",
          "module": "Data.FlagSet",
          "name": "Value",
          "package": "enumset",
          "source": "src/Data-FlagSet.html#Value",
          "type": "newtype"
        },
        "index": {
          "description": "The type parameter is the type of the underlying bit vector The type parameter is phantom type that is specific for certain range of bits",
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "Value",
          "package": "enumset",
          "partial": "Value",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet",
          "name": "Cons",
          "package": "enumset",
          "signature": "Cons",
          "source": "src/Data-FlagSet.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "Cons",
          "package": "enumset",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet",
          "name": "Mask",
          "package": "enumset",
          "signature": "Mask",
          "source": "src/Data-FlagSet.html#Mask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "Mask",
          "package": "enumset",
          "partial": "Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:Mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet",
          "name": "MaskedValue",
          "package": "enumset",
          "signature": "MaskedValue w w",
          "source": "src/Data-FlagSet.html#MaskedValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "MaskedValue",
          "package": "enumset",
          "partial": "Masked Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:MaskedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet",
          "name": "Value",
          "package": "enumset",
          "signature": "Value",
          "source": "src/Data-FlagSet.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "Value",
          "package": "enumset",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet",
          "name": "accessor",
          "package": "enumset",
          "signature": "Mask w a b -\u003e T (T w a) (Value w b)",
          "source": "src/Data-FlagSet.html#accessor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "accessor",
          "normalized": "Mask a b c-\u003eT(T a b)(Value a c)",
          "package": "enumset",
          "signature": "Mask w a b-\u003eT(T w a)(Value w b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:accessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a flag set from a list of flags.\nHowever you may prefer to assemble flags\nusing \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eMaskedValue\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.FlagSet",
          "name": "compose",
          "package": "enumset",
          "signature": "[a] -\u003e T w a",
          "source": "src/Data-FlagSet.html#compose",
          "type": "function"
        },
        "index": {
          "description": "Compose flag set from list of flags However you may prefer to assemble flags using mconcat or mappend on MaskedValue",
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "compose",
          "normalized": "[a]-\u003eT b a",
          "package": "enumset",
          "signature": "[a]-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompose a flag set into flags.\nThe flags are generated using the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e instance.\nWe do not recommend to use the result list for further processing,\nsince testing of flags is much faster using \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e.\nHowever you may find it useful to \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e the list.\n\u003c/p\u003e",
          "module": "Data.FlagSet",
          "name": "decompose",
          "package": "enumset",
          "signature": "T w a -\u003e [a]",
          "source": "src/Data-FlagSet.html#decompose",
          "type": "function"
        },
        "index": {
          "description": "Decompose flag set into flags The flags are generated using the Bounded and Enum instance We do not recommend to use the result list for further processing since testing of flags is much faster using match However you may find it useful to show the list",
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "decompose",
          "normalized": "T a b-\u003e[b]",
          "package": "enumset",
          "signature": "T w a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:decompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet",
          "name": "decons",
          "package": "enumset",
          "signature": "word",
          "source": "src/Data-FlagSet.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "decons",
          "package": "enumset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:decons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e should return an integer\n   that represents the position of the \u003ccode\u003ea\u003c/code\u003e value\n   in the list of all enumeration items.\n   In contrast to that,\n   \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e must return the according bit pattern.\n\u003c/p\u003e",
          "module": "Data.FlagSet",
          "name": "fromEnum",
          "package": "enumset",
          "signature": "a -\u003e MaskedValue w a",
          "source": "src/Data-FlagSet.html#fromEnum",
          "type": "method"
        },
        "index": {
          "description": "fromEnum should return an integer that represents the position of the value in the list of all enumeration items In contrast to that fromEnum must return the according bit pattern",
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "fromEnum",
          "normalized": "a-\u003eMaskedValue b a",
          "package": "enumset",
          "partial": "Enum",
          "signature": "a-\u003eMaskedValue w a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:fromEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet",
          "name": "fromMaskedValue",
          "package": "enumset",
          "signature": "MaskedValue w a -\u003e T w a",
          "source": "src/Data-FlagSet.html#fromMaskedValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "fromMaskedValue",
          "normalized": "MaskedValue a b-\u003eT a b",
          "package": "enumset",
          "partial": "Masked Value",
          "signature": "MaskedValue w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:fromMaskedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet",
          "name": "get",
          "package": "enumset",
          "signature": "Mask w a b -\u003e T w a -\u003e Value w b",
          "source": "src/Data-FlagSet.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "get",
          "normalized": "Mask a b c-\u003eT a b-\u003eValue a c",
          "package": "enumset",
          "signature": "Mask w a b-\u003eT w a-\u003eValue w b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet",
          "name": "maskValue",
          "package": "enumset",
          "signature": "Mask w a b -\u003e Value w b -\u003e MaskedValue w a",
          "source": "src/Data-FlagSet.html#maskValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "maskValue",
          "normalized": "Mask a b c-\u003eValue a c-\u003eMaskedValue a b",
          "package": "enumset",
          "partial": "Value",
          "signature": "Mask w a b-\u003eValue w b-\u003eMaskedValue w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:maskValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet",
          "name": "match",
          "package": "enumset",
          "signature": "T w a -\u003e MaskedValue w a -\u003e Bool",
          "source": "src/Data-FlagSet.html#match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "match",
          "normalized": "T a b-\u003eMaskedValue a b-\u003eBool",
          "package": "enumset",
          "signature": "T w a-\u003eMaskedValue w a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll bits in Value must be contained in the mask.\nThis condition is not checked by \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAccording to names in \u003ca\u003eData.Accessor\u003c/a\u003e it should be called \u003ccode\u003eset\u003c/code\u003e,\nbut in \u003ca\u003eData.Bits\u003c/a\u003e and thus \u003ca\u003eData.EnumSet\u003c/a\u003e\nthis is already used in the pair \u003ccode\u003eset\u003c/code\u003e/\u003ccode\u003eclear\u003c/code\u003e.\n\u003ccode\u003eput\u003c/code\u003e/\u003ccode\u003eget\u003c/code\u003e resembles the pair in \u003ca\u003eControl.Monad.State\u003c/a\u003e in the \u003ccode\u003emtl\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Data.FlagSet",
          "name": "put",
          "package": "enumset",
          "signature": "Mask w a b -\u003e Value w b -\u003e T w a -\u003e T w a",
          "source": "src/Data-FlagSet.html#put",
          "type": "function"
        },
        "index": {
          "description": "All bits in Value must be contained in the mask This condition is not checked by put According to names in Data.Accessor it should be called set but in Data.Bits and thus Data.EnumSet this is already used in the pair set clear put get resembles the pair in Control.Monad.State in the mtl package",
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "put",
          "normalized": "Mask a b c-\u003eValue a c-\u003eT a b-\u003eT a b",
          "package": "enumset",
          "signature": "Mask w a b-\u003eValue w b-\u003eT w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet",
          "name": "unmask",
          "package": "enumset",
          "signature": "w",
          "source": "src/Data-FlagSet.html#Mask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "unmask",
          "package": "enumset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:unmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FlagSet",
          "name": "unvalue",
          "package": "enumset",
          "signature": "w",
          "source": "src/Data-FlagSet.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FlagSet",
          "module": "Data.FlagSet",
          "name": "unvalue",
          "package": "enumset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumset/docs/Data-FlagSet.html#v:unvalue"
      }
    }
  ]
]