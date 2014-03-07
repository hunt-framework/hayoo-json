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
        "word": "groups"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Group",
          "name": "Group",
          "package": "groups",
          "source": "src/Data-Group.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Group",
          "module": "Data.Group",
          "name": "Group",
          "package": "groups",
          "partial": "Group",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/groups/docs/Data-Group.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAbelian\u003c/a\u003e\u003c/code\u003e group is a \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e that follows the rule:\n\u003c/p\u003e\u003cpre\u003ea \u003c\u003e b == b \u003c\u003e a\u003c/pre\u003e",
          "module": "Data.Group",
          "name": "Abelian",
          "package": "groups",
          "source": "src/Data-Group.html#Abelian",
          "type": "class"
        },
        "index": {
          "description": "An Abelian group is Group that follows the rule",
          "hierarchy": "Data Group",
          "module": "Data.Group",
          "name": "Abelian",
          "package": "groups",
          "partial": "Abelian",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groups/docs/Data-Group.html#t:Abelian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e plus a function, \u003ccode\u003e\u003ca\u003einvert\u003c/a\u003e\u003c/code\u003e, such that: \n\u003c/p\u003e\u003cpre\u003ea \u003c\u003e invert a == mempty\u003c/pre\u003e\u003cpre\u003einvert a \u003c\u003e a == mempty\u003c/pre\u003e",
          "module": "Data.Group",
          "name": "Group",
          "package": "groups",
          "source": "src/Data-Group.html#Group",
          "type": "class"
        },
        "index": {
          "description": "Group is Monoid plus function invert such that invert mempty invert mempty",
          "hierarchy": "Data Group",
          "module": "Data.Group",
          "name": "Group",
          "package": "groups",
          "partial": "Group",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groups/docs/Data-Group.html#t:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Group",
          "name": "invert",
          "package": "groups",
          "signature": "m -\u003e m",
          "source": "src/Data-Group.html#invert",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Group",
          "module": "Data.Group",
          "name": "invert",
          "normalized": "a-\u003ea",
          "package": "groups",
          "signature": "m-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groups/docs/Data-Group.html#v:invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003epow\u003c/a\u003e\u003c/code\u003e a n == a \u003c\u003e a \u003c\u003e ... \u003c\u003e a\u003c/pre\u003e\u003cpre\u003e (n lots of a)\u003c/pre\u003e\u003cp\u003eIf n is negative, the result is inverted.\n\u003c/p\u003e",
          "module": "Data.Group",
          "name": "pow",
          "package": "groups",
          "signature": "m -\u003e x -\u003e m",
          "source": "src/Data-Group.html#pow",
          "type": "method"
        },
        "index": {
          "description": "pow lots of If is negative the result is inverted",
          "hierarchy": "Data Group",
          "module": "Data.Group",
          "name": "pow",
          "normalized": "a-\u003eb-\u003ea",
          "package": "groups",
          "signature": "m-\u003ex-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groups/docs/Data-Group.html#v:pow"
      }
    }
  ]
]