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
        "word": "data-list-sequences"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFind sequences within lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.List.Sequences",
          "name": "Sequences",
          "package": "data-list-sequences",
          "source": "src/Data-List-Sequences.html",
          "type": "module"
        },
        "index": {
          "description": "Find sequences within lists",
          "hierarchy": "Data List Sequences",
          "module": "Data.List.Sequences",
          "name": "Sequences",
          "package": "data-list-sequences",
          "partial": "Sequences",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-list-sequences/docs/Data-List-Sequences.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorks pretty much like \u003ccode\u003e\u003ca\u003esplitSeq\u003c/a\u003e\u003c/code\u003e, except that a tuple with only the\n sequence starting at the first element and the rest of the list is\n returned.\n\u003c/p\u003e\u003cpre\u003e spanSeq ((==) . succ) \"abcxyz123\"\n (\"abc\",\"xyz123\")\n\u003c/pre\u003e",
          "module": "Data.List.Sequences",
          "name": "spanSeq",
          "package": "data-list-sequences",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Data-List-Sequences.html#spanSeq",
          "type": "function"
        },
        "index": {
          "description": "Works pretty much like splitSeq except that tuple with only the sequence starting at the first element and the rest of the list is returned spanSeq succ abcxyz123 abc xyz123",
          "hierarchy": "Data List Sequences",
          "module": "Data.List.Sequences",
          "name": "spanSeq",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "data-list-sequences",
          "partial": "Seq",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-list-sequences/docs/Data-List-Sequences.html#v:spanSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind sequences within a list and return them as new list of sequences.\n The first argument is a function that takes two subsequent elements of the\n given list (second argument) and returns whether the second element\n follows the first one in a sequence.\n\u003c/p\u003e\u003cpre\u003e splitSeq ((==) . succ) [1,2,3,5,6,7]\n [[1,2,3],[5,6,7]]\n\u003c/pre\u003e",
          "module": "Data.List.Sequences",
          "name": "splitSeq",
          "package": "data-list-sequences",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-List-Sequences.html#splitSeq",
          "type": "function"
        },
        "index": {
          "description": "Find sequences within list and return them as new list of sequences The first argument is function that takes two subsequent elements of the given list second argument and returns whether the second element follows the first one in sequence splitSeq succ",
          "hierarchy": "Data List Sequences",
          "module": "Data.List.Sequences",
          "name": "splitSeq",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "data-list-sequences",
          "partial": "Seq",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-list-sequences/docs/Data-List-Sequences.html#v:splitSeq"
      }
    }
  ]
]