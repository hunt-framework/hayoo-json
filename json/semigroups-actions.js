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
        "word": "semigroups-actions"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Act.Enum",
          "name": "Enum",
          "package": "semigroups-actions",
          "source": "src/Data-Semigroup-Act-Enum.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Semigroup Act Enum",
          "module": "Data.Semigroup.Act.Enum",
          "name": "Enum",
          "package": "semigroups-actions",
          "partial": "Enum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act-Enum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for an integer acting on an instance of both \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e.\n The index wrap around the bounds, so\n \u003ccode\u003eSum 1 \u003ccode\u003e\u003ca\u003eact\u003c/a\u003e\u003c/code\u003e (EnumBoundedIntAct maxBound) == (EnumBoundedIntAct minBound)\u003c/code\u003e etc.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Act.Enum",
          "name": "EnumBoundedIntAct",
          "package": "semigroups-actions",
          "source": "src/Data-Semigroup-Act-Enum.html#EnumBoundedIntAct",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper for an integer acting on an instance of both Enum and Bounded The index wrap around the bounds so Sum act EnumBoundedIntAct maxBound EnumBoundedIntAct minBound etc",
          "hierarchy": "Data Semigroup Act Enum",
          "module": "Data.Semigroup.Act.Enum",
          "name": "EnumBoundedIntAct",
          "package": "semigroups-actions",
          "partial": "Enum Bounded Int Act",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act-Enum.html#t:EnumBoundedIntAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for an integer acting on an \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e. If the resulting index is\n out of the enum bounds, an exception is raised.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Act.Enum",
          "name": "EnumIntAct",
          "package": "semigroups-actions",
          "source": "src/Data-Semigroup-Act-Enum.html#EnumIntAct",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper for an integer acting on an Enum If the resulting index is out of the enum bounds an exception is raised",
          "hierarchy": "Data Semigroup Act Enum",
          "module": "Data.Semigroup.Act.Enum",
          "name": "EnumIntAct",
          "package": "semigroups-actions",
          "partial": "Enum Int Act",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act-Enum.html#t:EnumIntAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Act.Enum",
          "name": "EnumBoundedIntAct",
          "package": "semigroups-actions",
          "signature": "EnumBoundedIntAct a",
          "source": "src/Data-Semigroup-Act-Enum.html#EnumBoundedIntAct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Act Enum",
          "module": "Data.Semigroup.Act.Enum",
          "name": "EnumBoundedIntAct",
          "package": "semigroups-actions",
          "partial": "Enum Bounded Int Act",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act-Enum.html#v:EnumBoundedIntAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Act.Enum",
          "name": "EnumIntAct",
          "package": "semigroups-actions",
          "signature": "EnumIntAct a",
          "source": "src/Data-Semigroup-Act-Enum.html#EnumIntAct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Act Enum",
          "module": "Data.Semigroup.Act.Enum",
          "name": "EnumIntAct",
          "package": "semigroups-actions",
          "partial": "Enum Int Act",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act-Enum.html#v:EnumIntAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Act",
          "name": "Act",
          "package": "semigroups-actions",
          "source": "src/Data-Semigroup-Act.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Semigroup Act",
          "module": "Data.Semigroup.Act",
          "name": "Act",
          "package": "semigroups-actions",
          "partial": "Act",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an action of monoid \u003ccode\u003eg\u003c/code\u003e to set \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLaws: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eact\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e must be a homomorphism of monoids.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Act",
          "name": "MonoidAct",
          "package": "semigroups-actions",
          "source": "src/Data-Semigroup-Act.html#MonoidAct",
          "type": "class"
        },
        "index": {
          "description": "Represents an action of monoid to set Laws Endo act must be homomorphism of monoids",
          "hierarchy": "Data Semigroup Act",
          "module": "Data.Semigroup.Act",
          "name": "MonoidAct",
          "package": "semigroups-actions",
          "partial": "Monoid Act",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act.html#t:MonoidAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for constructing a monoid action from \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Act",
          "name": "OptionSet",
          "package": "semigroups-actions",
          "source": "src/Data-Semigroup-Act.html#OptionSet",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper for constructing monoid action from Option",
          "hierarchy": "Data Semigroup Act",
          "module": "Data.Semigroup.Act",
          "name": "OptionSet",
          "package": "semigroups-actions",
          "partial": "Option Set",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act.html#t:OptionSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for represeting the action of natural numbers with\n multiplication on a monoid.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Act",
          "name": "Repeat",
          "package": "semigroups-actions",
          "source": "src/Data-Semigroup-Act.html#Repeat",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper for represeting the action of natural numbers with multiplication on monoid",
          "hierarchy": "Data Semigroup Act",
          "module": "Data.Semigroup.Act",
          "name": "Repeat",
          "package": "semigroups-actions",
          "partial": "Repeat",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act.html#t:Repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for a group acting on itself.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Act",
          "name": "SelfAct",
          "package": "semigroups-actions",
          "source": "src/Data-Semigroup-Act.html#SelfAct",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper for group acting on itself",
          "hierarchy": "Data Semigroup Act",
          "module": "Data.Semigroup.Act",
          "name": "SelfAct",
          "package": "semigroups-actions",
          "partial": "Self Act",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act.html#t:SelfAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an action of semigroup \u003ccode\u003eg\u003c/code\u003e to set \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLaws: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eact\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e must be a homomorphism of semigroups.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Act",
          "name": "SemigroupAct",
          "package": "semigroups-actions",
          "source": "src/Data-Semigroup-Act.html#SemigroupAct",
          "type": "class"
        },
        "index": {
          "description": "Represents an action of semigroup to set Laws Endo act must be homomorphism of semigroups",
          "hierarchy": "Data Semigroup Act",
          "module": "Data.Semigroup.Act",
          "name": "SemigroupAct",
          "package": "semigroups-actions",
          "partial": "Semigroup Act",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act.html#t:SemigroupAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Act",
          "name": "OptionSet",
          "package": "semigroups-actions",
          "signature": "OptionSet",
          "source": "src/Data-Semigroup-Act.html#OptionSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Act",
          "module": "Data.Semigroup.Act",
          "name": "OptionSet",
          "package": "semigroups-actions",
          "partial": "Option Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act.html#v:OptionSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Act",
          "name": "Repeat",
          "package": "semigroups-actions",
          "signature": "Repeat",
          "source": "src/Data-Semigroup-Act.html#Repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Act",
          "module": "Data.Semigroup.Act",
          "name": "Repeat",
          "package": "semigroups-actions",
          "partial": "Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act.html#v:Repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Act",
          "name": "SelfAct",
          "package": "semigroups-actions",
          "signature": "SelfAct a",
          "source": "src/Data-Semigroup-Act.html#SelfAct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Act",
          "module": "Data.Semigroup.Act",
          "name": "SelfAct",
          "package": "semigroups-actions",
          "partial": "Self Act",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act.html#v:SelfAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Act",
          "name": "act",
          "package": "semigroups-actions",
          "signature": "g -\u003e a -\u003e a",
          "source": "src/Data-Semigroup-Act.html#act",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semigroup Act",
          "module": "Data.Semigroup.Act",
          "name": "act",
          "normalized": "a-\u003eb-\u003eb",
          "package": "semigroups-actions",
          "signature": "g-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act.html#v:act"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Act",
          "name": "getOptionSet",
          "package": "semigroups-actions",
          "signature": "a",
          "source": "src/Data-Semigroup-Act.html#OptionSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Act",
          "module": "Data.Semigroup.Act",
          "name": "getOptionSet",
          "package": "semigroups-actions",
          "partial": "Option Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act.html#v:getOptionSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Act",
          "name": "unwrapRepeat",
          "package": "semigroups-actions",
          "signature": "a",
          "source": "src/Data-Semigroup-Act.html#Repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Act",
          "module": "Data.Semigroup.Act",
          "name": "unwrapRepeat",
          "package": "semigroups-actions",
          "partial": "Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups-actions/docs/Data-Semigroup-Act.html#v:unwrapRepeat"
      }
    }
  ]
]