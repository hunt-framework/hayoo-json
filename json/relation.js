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
        "word": "relation"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Relation.Examples.E02",
          "name": "E02",
          "package": "relation",
          "source": "src/Data-Relation-Examples-E02.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "E02",
          "package": "relation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExample 2:\n\u003c/p\u003e\u003cp\u003eA student x can take n classes.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Each student must take at least 1 class\n\u003c/li\u003e\u003cli\u003e Each class must have at least one student.\n\u003c/li\u003e\u003c/ul\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep enrollment\n\u003c/code\u003e\u003c/strong\u003eRelation{domain =\n           fromList\n             [(\"Antonio\", fromList [\"History\"]),\n              (\"Rebeca\", fromList [\"History\", \"Mathematics\"]),\n              (\"Rolando\", fromList [\"Comunication\", \"Religion\"]),\n              (\"Teresa\", fromList [\"Architecture\", \"Religion\"])],\n         range =\n           fromList\n             [(\"Architecture\", fromList [\"Teresa\"]),\n              (\"Comunication\", fromList [\"Rolando\"]),\n              (\"History\", fromList [\"Antonio\", \"Rebeca\"]),\n              (\"Mathematics\", fromList [\"Rebeca\"]),\n              (\"Religion\", fromList [\"Rolando\", \"Teresa\"])]}\n\u003c/pre\u003e",
          "module": "Data.Relation.Examples.E02",
          "name": "enrollment",
          "package": "relation",
          "signature": "Relation [Char] [Char]",
          "source": "src/Data-Relation-Examples-E02.html#enrollment",
          "type": "function"
        },
        "index": {
          "description": "Example student can take classes Each student must take at least class Each class must have at least one student enrollment Relation domain fromList Antonio fromList History Rebeca fromList History Mathematics Rolando fromList Comunication Religion Teresa fromList Architecture Religion range fromList Architecture fromList Teresa Comunication fromList Rolando History fromList Antonio Rebeca Mathematics fromList Rebeca Religion fromList Rolando Teresa",
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "enrollment",
          "normalized": "Relation[Char][Char]",
          "package": "relation",
          "signature": "Relation[Char][Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:enrollment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Relation.Examples.E02",
          "name": "id1",
          "package": "relation",
          "signature": "Set [Char] -\u003e (Bool, Set [Char])",
          "source": "src/Data-Relation-Examples-E02.html#id1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "id1",
          "normalized": "Set[Char]-\u003e(Bool,Set[Char])",
          "package": "relation",
          "signature": "Set[Char]-\u003e(Bool,Set[Char])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:id1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Relation.Examples.E02",
          "name": "id1R",
          "package": "relation",
          "signature": "Set b -\u003e Relation a b -\u003e Bool",
          "source": "src/Data-Relation-Examples-E02.html#id1R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "id1R",
          "normalized": "Set a-\u003eRelation b a-\u003eBool",
          "package": "relation",
          "signature": "Set b-\u003eRelation a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:id1R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Relation.Examples.E02",
          "name": "id2",
          "package": "relation",
          "signature": "Set [Char] -\u003e (Bool, Set [Char])",
          "source": "src/Data-Relation-Examples-E02.html#id2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "id2",
          "normalized": "Set[Char]-\u003e(Bool,Set[Char])",
          "package": "relation",
          "signature": "Set[Char]-\u003e(Bool,Set[Char])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:id2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Relation.Examples.E02",
          "name": "id2R",
          "package": "relation",
          "signature": "Set b -\u003e Relation a b -\u003e Bool",
          "source": "src/Data-Relation-Examples-E02.html#id1R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "id2R",
          "normalized": "Set a-\u003eRelation b a-\u003eBool",
          "package": "relation",
          "signature": "Set b-\u003eRelation a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:id2R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Relation.Examples.E02",
          "name": "id3",
          "package": "relation",
          "signature": "Set [Char] -\u003e (Bool, Set [Char])",
          "source": "src/Data-Relation-Examples-E02.html#id3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "id3",
          "normalized": "Set[Char]-\u003e(Bool,Set[Char])",
          "package": "relation",
          "signature": "Set[Char]-\u003e(Bool,Set[Char])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:id3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Relation.Examples.E02",
          "name": "id3R",
          "package": "relation",
          "signature": "Set a -\u003e Relation a b -\u003e Bool",
          "source": "src/Data-Relation-Examples-E02.html#id3R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "id3R",
          "normalized": "Set a-\u003eRelation a b-\u003eBool",
          "package": "relation",
          "signature": "Set a-\u003eRelation a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:id3R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Relation.Examples.E02",
          "name": "id4",
          "package": "relation",
          "signature": "Set [Char] -\u003e (Bool, Set [Char])",
          "source": "src/Data-Relation-Examples-E02.html#id4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "id4",
          "normalized": "Set[Char]-\u003e(Bool,Set[Char])",
          "package": "relation",
          "signature": "Set[Char]-\u003e(Bool,Set[Char])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:id4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Relation.Examples.E02",
          "name": "id4R",
          "package": "relation",
          "signature": "Set a -\u003e Relation a b -\u003e Bool",
          "source": "src/Data-Relation-Examples-E02.html#id3R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "id4R",
          "normalized": "Set a-\u003eRelation a b-\u003eBool",
          "package": "relation",
          "signature": "Set a-\u003eRelation a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:id4R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep others\n\u003c/code\u003e\u003c/strong\u003efromList [\"Architecture\", \"Comunication\", \"Religion\"]\n\u003c/pre\u003e",
          "module": "Data.Relation.Examples.E02",
          "name": "others",
          "package": "relation",
          "signature": "Set [Char]",
          "source": "src/Data-Relation-Examples-E02.html#others",
          "type": "function"
        },
        "index": {
          "description": "others fromList Architecture Comunication Religion",
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "others",
          "normalized": "Set[Char]",
          "package": "relation",
          "signature": "Set[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:others"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocumentation Tests\n\u003c/p\u003e\u003cp\u003eAll examples in this module are tested automatically with Doctest, and pretty printed with \u003ca\u003eText.Groom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis output is provided as proof of the correctness of the REPL (\u003ccode\u003e\u003e\u003e\u003e\u003c/code\u003e) text:\n\u003c/p\u003e\u003cpre\u003e\n   There are 12 tests, with 12 total interactions.\n   Examples: 12  Tried: 12  Errors: 0  Failures: 0\n\u003c/pre\u003e",
          "module": "Data.Relation.Examples.E02",
          "name": "p",
          "package": "relation",
          "signature": "a -\u003e IO ()",
          "source": "src/Data-Relation-Examples-E02.html#p",
          "type": "function"
        },
        "index": {
          "description": "Documentation Tests All examples in this module are tested automatically with Doctest and pretty printed with Text.Groom This output is provided as proof of the correctness of the REPL text There are tests with total interactions Examples Tried Errors Failures",
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "p",
          "normalized": "a-\u003eIO()",
          "package": "relation",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep rebecaenrollment\n\u003c/code\u003e\u003c/strong\u003efromList [\"History\", \"Mathematics\"]\n\u003c/pre\u003e",
          "module": "Data.Relation.Examples.E02",
          "name": "rebecaenrollment",
          "package": "relation",
          "signature": "Set [Char]",
          "source": "src/Data-Relation-Examples-E02.html#rebecaenrollment",
          "type": "function"
        },
        "index": {
          "description": "rebecaenrollment fromList History Mathematics",
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "rebecaenrollment",
          "normalized": "Set[Char]",
          "package": "relation",
          "signature": "Set[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:rebecaenrollment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Relation.Examples.E02",
          "name": "religion",
          "package": "relation",
          "signature": "Set [Char]",
          "source": "src/Data-Relation-Examples-E02.html#religion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "religion",
          "normalized": "Set[Char]",
          "package": "relation",
          "signature": "Set[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:religion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep t11\n\u003c/code\u003e\u003c/strong\u003e(True, fromList [\"Religion\"])\n\u003c/pre\u003e",
          "module": "Data.Relation.Examples.E02",
          "name": "t11",
          "package": "relation",
          "signature": "(Bool, Set [Char])",
          "source": "src/Data-Relation-Examples-E02.html#t11",
          "type": "function"
        },
        "index": {
          "description": "t11 True fromList Religion",
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "t11",
          "normalized": "(Bool,Set[Char])",
          "package": "relation",
          "signature": "(Bool,Set[Char])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:t11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep t12\n\u003c/code\u003e\u003c/strong\u003e(True, fromList [\"Rolando\", \"Teresa\"])\n\u003c/pre\u003e",
          "module": "Data.Relation.Examples.E02",
          "name": "t12",
          "package": "relation",
          "signature": "(Bool, Set [Char])",
          "source": "src/Data-Relation-Examples-E02.html#t12",
          "type": "function"
        },
        "index": {
          "description": "t12 True fromList Rolando Teresa",
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "t12",
          "normalized": "(Bool,Set[Char])",
          "package": "relation",
          "signature": "(Bool,Set[Char])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:t12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep t13\n\u003c/code\u003e\u003c/strong\u003e(True, fromList [\"Teresa\"])\n\u003c/pre\u003e",
          "module": "Data.Relation.Examples.E02",
          "name": "t13",
          "package": "relation",
          "signature": "(Bool, Set [Char])",
          "source": "src/Data-Relation-Examples-E02.html#t13",
          "type": "function"
        },
        "index": {
          "description": "t13 True fromList Teresa",
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "t13",
          "normalized": "(Bool,Set[Char])",
          "package": "relation",
          "signature": "(Bool,Set[Char])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:t13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep t14\n\u003c/code\u003e\u003c/strong\u003e(True, fromList [\"Architecture\", \"Religion\"])\n\u003c/pre\u003e",
          "module": "Data.Relation.Examples.E02",
          "name": "t14",
          "package": "relation",
          "signature": "(Bool, Set [Char])",
          "source": "src/Data-Relation-Examples-E02.html#t14",
          "type": "function"
        },
        "index": {
          "description": "t14 True fromList Architecture Religion",
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "t14",
          "normalized": "(Bool,Set[Char])",
          "package": "relation",
          "signature": "(Bool,Set[Char])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:t14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep takingreligion\n\u003c/code\u003e\u003c/strong\u003efromList [\"Rolando\", \"Teresa\"]\n\u003c/pre\u003e",
          "module": "Data.Relation.Examples.E02",
          "name": "takingreligion",
          "package": "relation",
          "signature": "Set [Char]",
          "source": "src/Data-Relation-Examples-E02.html#takingreligion",
          "type": "function"
        },
        "index": {
          "description": "takingreligion fromList Rolando Teresa",
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "takingreligion",
          "normalized": "Set[Char]",
          "package": "relation",
          "signature": "Set[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:takingreligion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep takingreligion2\n\u003c/code\u003e\u003c/strong\u003eRelation{domain =\n           fromList\n             [(\"Rolando\", fromList [\"Religion\"]),\n              (\"Teresa\", fromList [\"Religion\"])],\n         range = fromList [(\"Religion\", fromList [\"Rolando\", \"Teresa\"])]}\n\u003c/pre\u003e",
          "module": "Data.Relation.Examples.E02",
          "name": "takingreligion2",
          "package": "relation",
          "signature": "Relation [Char] [Char]",
          "source": "src/Data-Relation-Examples-E02.html#takingreligion2",
          "type": "function"
        },
        "index": {
          "description": "takingreligion2 Relation domain fromList Rolando fromList Religion Teresa fromList Religion range fromList Religion fromList Rolando Teresa",
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "takingreligion2",
          "normalized": "Relation[Char][Char]",
          "package": "relation",
          "signature": "Relation[Char][Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:takingreligion2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep religion\n\u003c/code\u003e\u003c/strong\u003efromList [\"Religion\"]\n\u003c/pre\u003e",
          "module": "Data.Relation.Examples.E02",
          "name": "teresa",
          "package": "relation",
          "signature": "Set [Char]",
          "source": "src/Data-Relation-Examples-E02.html#teresa",
          "type": "function"
        },
        "index": {
          "description": "religion fromList Religion",
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "teresa",
          "normalized": "Set[Char]",
          "package": "relation",
          "signature": "Set[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:teresa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep test1\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Relation.Examples.E02",
          "name": "test1",
          "package": "relation",
          "signature": "Bool",
          "source": "src/Data-Relation-Examples-E02.html#test1",
          "type": "function"
        },
        "index": {
          "description": "test1 True",
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "test1",
          "package": "relation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:test1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep testAll\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Relation.Examples.E02",
          "name": "testAll",
          "package": "relation",
          "signature": "Bool",
          "source": "src/Data-Relation-Examples-E02.html#testAll",
          "type": "function"
        },
        "index": {
          "description": "testAll True",
          "hierarchy": "Data Relation Examples E02",
          "module": "Data.Relation.Examples.E02",
          "name": "testAll",
          "package": "relation",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation-Examples-E02.html#v:testAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRelations are modeled as assciations between two elements.\n\u003c/p\u003e\u003cp\u003eRelations offer efficient search for any of the two elements.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ca\u003eData.Map\u003c/a\u003e, an element ca be associated more than once.\n\u003c/p\u003e\u003cp\u003eThe two purposes of this structure are:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Associating elements\n\u003c/li\u003e\u003cli\u003e Provide efficient searches for either of the two elements.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eSince neither \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e nor \u003ccode\u003efold\u003c/code\u003e are implemented, you \u003cem\u003emust\u003c/em\u003e convert\n the structure to a list to process sequentially.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Relation",
          "name": "Relation",
          "package": "relation",
          "source": "src/Data-Relation.html",
          "type": "module"
        },
        "index": {
          "description": "Relations are modeled as assciations between two elements Relations offer efficient search for any of the two elements Unlike Data.Map an element ca be associated more than once The two purposes of this structure are Associating elements Provide efficient searches for either of the two elements Since neither map nor fold are implemented you must convert the structure to list to process sequentially",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "Relation",
          "package": "relation",
          "partial": "Relation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis implementation avoids using \u003ccode\u003e\u003ca\u003eS.Set (a,b)\u003c/a\u003e\u003c/code\u003e because\n it it is necessary to search for an item without knowing both \u003ccode\u003eD\u003c/code\u003e and \u003ccode\u003eR\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn \u003ca\u003eS.Set\u003c/a\u003e, you must know both values to search.\n\u003c/p\u003e\u003cp\u003eThus, we have are two maps to updated together.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Always be careful with the associated set of the key.\n\u003c/li\u003e\u003cli\u003e If you union two relations, apply union to the set of values.\n\u003c/li\u003e\u003cli\u003e If you subtract, take care when handling the set of values.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eAs a multi-map, each key is asscoated with a Set of values v.\n\u003c/p\u003e\u003cp\u003eWe do not allow the associations with the \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e Set.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "Relation",
          "package": "relation",
          "source": "src/Data-Relation.html#Relation",
          "type": "data"
        },
        "index": {
          "description": "This implementation avoids using S.Set because it it is necessary to search for an item without knowing both and In S.Set you must know both values to search Thus we have are two maps to updated together Always be careful with the associated set of the key If you union two relations apply union to the set of values If you subtract take care when handling the set of values As multi-map each key is asscoated with Set of values We do not allow the associations with the empty Set",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "Relation",
          "package": "relation",
          "partial": "Relation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#t:Relation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e( Case a |\u003e r b )\u003c/pre\u003e",
          "module": "Data.Relation",
          "name": "(|$\u003e)",
          "package": "relation",
          "signature": "Set a -\u003e Set b -\u003e Relation a b -\u003e Set b",
          "source": "src/Data-Relation.html#%7C%24%3E",
          "type": "function"
        },
        "index": {
          "description": "Case",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "(|$\u003e) |$\u003e",
          "normalized": "Set a-\u003eSet b-\u003eRelation a b-\u003eSet b",
          "package": "relation",
          "signature": "Set a-\u003eSet b-\u003eRelation a b-\u003eSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:-124--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRange restriction for a relation. Modeled on z.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "(|\u003e)",
          "package": "relation",
          "signature": "Relation a b -\u003e Set b -\u003e Relation a b",
          "source": "src/Data-Relation.html#%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Range restriction for relation Modeled on",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "(|\u003e) |\u003e",
          "normalized": "Relation a b-\u003eSet b-\u003eRelation a b",
          "package": "relation",
          "signature": "Relation a b-\u003eSet b-\u003eRelation a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDomain restriction for a relation. Modeled on z.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "(\u003c|)",
          "package": "relation",
          "signature": "Set a -\u003e Relation a b -\u003e Relation a b",
          "source": "src/Data-Relation.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "Domain restriction for relation Modeled on",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "(\u003c|) \u003c|",
          "normalized": "Set a-\u003eRelation a b-\u003eRelation a b",
          "package": "relation",
          "signature": "Set a-\u003eRelation a b-\u003eRelation a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(Case b \u003c| r a)\u003c/pre\u003e",
          "module": "Data.Relation",
          "name": "(\u003c$|)",
          "package": "relation",
          "signature": "Set a -\u003e Set b -\u003e Relation a b -\u003e Set a",
          "source": "src/Data-Relation.html#%3C%24%7C",
          "type": "function"
        },
        "index": {
          "description": "Case",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "(\u003c$|) \u003c$|",
          "normalized": "Set a-\u003eSet b-\u003eRelation a b-\u003eSet a",
          "package": "relation",
          "signature": "Set a-\u003eSet b-\u003eRelation a b-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:-60--36--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compact set of sets the values of which can be \u003ccode\u003eJust (Set x)\u003c/code\u003e or \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe cases of \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e are purged.\n\u003c/p\u003e\u003cp\u003eIt is similar to \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "compactSet",
          "package": "relation",
          "signature": "Set (Maybe (Set a)) -\u003e Set a",
          "source": "src/Data-Relation.html#compactSet",
          "type": "function"
        },
        "index": {
          "description": "compact set of sets the values of which can be Just Set or Nothing The cases of Nothing are purged It is similar to concat",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "compactSet",
          "normalized": "Set(Maybe(Set a))-\u003eSet a",
          "package": "relation",
          "partial": "Set",
          "signature": "Set(Maybe(Set a))-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:compactSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete an association in the relation.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "delete",
          "package": "relation",
          "signature": "a -\u003e b -\u003e Relation a b -\u003e Relation a b",
          "source": "src/Data-Relation.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete an association in the relation",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "delete",
          "normalized": "a-\u003eb-\u003eRelation a b-\u003eRelation a b",
          "package": "relation",
          "signature": "a-\u003eb-\u003eRelation a b-\u003eRelation a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the domain in the relation, as a Set, in its entirety.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "dom",
          "package": "relation",
          "signature": "Relation a b -\u003e Set a",
          "source": "src/Data-Relation.html#dom",
          "type": "function"
        },
        "index": {
          "description": "Returns the domain in the relation as Set in its entirety",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "dom",
          "normalized": "Relation a b-\u003eSet a",
          "package": "relation",
          "signature": "Relation a b-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:dom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a relation with no elements.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "empty",
          "package": "relation",
          "signature": "Relation a b",
          "source": "src/Data-Relation.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct relation with no elements",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "empty",
          "package": "relation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list must be formatted like: [(k1, v1), (k2, v2),..,(kn, vn)].\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "fromList",
          "package": "relation",
          "signature": "[(a, b)] -\u003e Relation a b",
          "source": "src/Data-Relation.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "The list must be formatted like k1 v1 k2 v2 kn vn",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eRelation a b",
          "package": "relation",
          "partial": "List",
          "signature": "[(a,b)]-\u003eRelation a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a relation \u003ccode\u003e x \u003c/code\u003e and \u003ccode\u003e y \u003c/code\u003e in the relation \u003ccode\u003e r \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "insert",
          "package": "relation",
          "signature": "a -\u003e b -\u003e Relation a b -\u003e Relation a b",
          "source": "src/Data-Relation.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert relation and in the relation",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eRelation a b-\u003eRelation a b",
          "package": "relation",
          "signature": "a-\u003eb-\u003eRelation a b-\u003eRelation a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Set of values associated with a value in the domain.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "lookupDom",
          "package": "relation",
          "signature": "a -\u003e Relation a b -\u003e Maybe (Set b)",
          "source": "src/Data-Relation.html#lookupDom",
          "type": "function"
        },
        "index": {
          "description": "The Set of values associated with value in the domain",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "lookupDom",
          "normalized": "a-\u003eRelation a b-\u003eMaybe(Set b)",
          "package": "relation",
          "partial": "Dom",
          "signature": "a-\u003eRelation a b-\u003eMaybe(Set b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:lookupDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Set of values associated with a value in the range.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "lookupRan",
          "package": "relation",
          "signature": "b -\u003e Relation a b -\u003e Maybe (Set a)",
          "source": "src/Data-Relation.html#lookupRan",
          "type": "function"
        },
        "index": {
          "description": "The Set of values associated with value in the range",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "lookupRan",
          "normalized": "a-\u003eRelation b a-\u003eMaybe(Set b)",
          "package": "relation",
          "partial": "Ran",
          "signature": "b-\u003eRelation a b-\u003eMaybe(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:lookupRan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the relation contains the association \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "member",
          "package": "relation",
          "signature": "a -\u003e b -\u003e Relation a b -\u003e Bool",
          "source": "src/Data-Relation.html#member",
          "type": "function"
        },
        "index": {
          "description": "True if the relation contains the association and",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "member",
          "normalized": "a-\u003eb-\u003eRelation a b-\u003eBool",
          "package": "relation",
          "signature": "a-\u003eb-\u003eRelation a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the element \u003ccode\u003e x \u003c/code\u003e exists in the domain of \u003ccode\u003e r \u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "memberDom",
          "package": "relation",
          "signature": "a -\u003e Relation a b -\u003e Bool",
          "source": "src/Data-Relation.html#memberDom",
          "type": "function"
        },
        "index": {
          "description": "True if the element exists in the domain of",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "memberDom",
          "normalized": "a-\u003eRelation a b-\u003eBool",
          "package": "relation",
          "partial": "Dom",
          "signature": "a-\u003eRelation a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:memberDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the element exists in the range.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "memberRan",
          "package": "relation",
          "signature": "b -\u003e Relation a b -\u003e Bool",
          "source": "src/Data-Relation.html#memberRan",
          "type": "function"
        },
        "index": {
          "description": "True if the element exists in the range",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "memberRan",
          "normalized": "a-\u003eRelation b a-\u003eBool",
          "package": "relation",
          "partial": "Ran",
          "signature": "b-\u003eRelation a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:memberRan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the relation \u003cem\u003edoes not\u003c/em\u003e contain the association \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "notMember",
          "package": "relation",
          "signature": "a -\u003e b -\u003e Relation a b -\u003e Bool",
          "source": "src/Data-Relation.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "True if the relation does not contain the association and",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "notMember",
          "normalized": "a-\u003eb-\u003eRelation a b-\u003eBool",
          "package": "relation",
          "partial": "Member",
          "signature": "a-\u003eb-\u003eRelation a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the relation \u003ccode\u003er\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e relation.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "null",
          "package": "relation",
          "signature": "Relation a b -\u003e Bool",
          "source": "src/Data-Relation.html#null",
          "type": "function"
        },
        "index": {
          "description": "True if the relation is the empty relation",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "null",
          "normalized": "Relation a b-\u003eBool",
          "package": "relation",
          "signature": "Relation a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the range of the relation, as a Set, in its entirety.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "ran",
          "package": "relation",
          "signature": "Relation a b -\u003e Set b",
          "source": "src/Data-Relation.html#ran",
          "type": "function"
        },
        "index": {
          "description": "Returns the range of the relation as Set in its entirety",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "ran",
          "normalized": "Relation a b-\u003eSet b",
          "package": "relation",
          "signature": "Relation a b-\u003eSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:ran"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eRelation\u003c/a\u003e\u003c/code\u003e consiting of an association between: \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "singleton",
          "package": "relation",
          "signature": "a -\u003e b -\u003e Relation a b",
          "source": "src/Data-Relation.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Builds Relation consiting of an association between and",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eRelation a b",
          "package": "relation",
          "signature": "a-\u003eb-\u003eRelation a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esize r\u003c/code\u003e returns the number of tuples in the relation.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "size",
          "package": "relation",
          "signature": "Relation a b -\u003e Int",
          "source": "src/Data-Relation.html#size",
          "type": "function"
        },
        "index": {
          "description": "size returns the number of tuples in the relation",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "size",
          "normalized": "Relation a b-\u003eInt",
          "package": "relation",
          "signature": "Relation a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a List from a Relation.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "toList",
          "package": "relation",
          "signature": "Relation a b -\u003e [(a, b)]",
          "source": "src/Data-Relation.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Builds List from Relation",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "toList",
          "normalized": "Relation a b-\u003e[(a,b)]",
          "package": "relation",
          "partial": "List",
          "signature": "Relation a b-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRelation\u003c/a\u003e\u003c/code\u003e that results from the union of two relations: \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "union",
          "package": "relation",
          "signature": "Relation a b -\u003e Relation a b -\u003e Relation a b",
          "source": "src/Data-Relation.html#union",
          "type": "function"
        },
        "index": {
          "description": "The Relation that results from the union of two relations and",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "union",
          "normalized": "Relation a b-\u003eRelation a b-\u003eRelation a b",
          "package": "relation",
          "signature": "Relation a b-\u003eRelation a b-\u003eRelation a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion a list of relations using the \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e relation.\n\u003c/p\u003e",
          "module": "Data.Relation",
          "name": "unions",
          "package": "relation",
          "signature": "[Relation a b] -\u003e Relation a b",
          "source": "src/Data-Relation.html#unions",
          "type": "function"
        },
        "index": {
          "description": "Union list of relations using the empty relation",
          "hierarchy": "Data Relation",
          "module": "Data.Relation",
          "name": "unions",
          "normalized": "[Relation a b]-\u003eRelation a b",
          "package": "relation",
          "signature": "[Relation a b]-\u003eRelation a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relation/docs/Data-Relation.html#v:unions"
      }
    }
  ]
]