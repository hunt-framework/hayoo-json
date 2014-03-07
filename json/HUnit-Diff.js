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
        "word": "HUnit-Diff"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVery basic support for diffing with HUnit.\n\u003c/p\u003e\u003cp\u003eLimitations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Prints the whole value, not just the difference with a few lines of\n    context.\n\u003c/li\u003e\u003cli\u003e Relies on the similarity of pretty-printed \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e results which\n    sorta-kinda works much of the time but may sometimes highlight\n    differences too eagerly.\n\u003c/li\u003e\u003cli\u003e Always colors the differences for ANSI terminals, regardless of output\n    target.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eDespite these limitations, I find it more useful than HUnit's defaults.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.HUnit.Diff",
          "name": "Diff",
          "package": "HUnit-Diff",
          "source": "src/Test-HUnit-Diff.html",
          "type": "module"
        },
        "index": {
          "description": "Very basic support for diffing with HUnit Limitations Prints the whole value not just the difference with few lines of context Relies on the similarity of pretty-printed show results which sorta-kinda works much of the time but may sometimes highlight differences too eagerly Always colors the differences for ANSI terminals regardless of output target Despite these limitations find it more useful than HUnit defaults",
          "hierarchy": "Test HUnit Diff",
          "module": "Test.HUnit.Diff",
          "name": "Diff",
          "package": "HUnit-Diff",
          "partial": "Diff",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HUnit-Diff/docs/Test-HUnit-Diff.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003e@=?\u003c/a\u003e\u003c/code\u003e but producing a colored diff on failure.\n\u003c/p\u003e",
          "module": "Test.HUnit.Diff",
          "name": "(@==?)",
          "package": "HUnit-Diff",
          "signature": "a -\u003e a -\u003e Assertion",
          "source": "src/Test-HUnit-Diff.html#%40%3D%3D%3F",
          "type": "function"
        },
        "index": {
          "description": "Like but producing colored diff on failure",
          "hierarchy": "Test HUnit Diff",
          "module": "Test.HUnit.Diff",
          "name": "(@==?) @==?",
          "normalized": "a-\u003ea-\u003eAssertion",
          "package": "HUnit-Diff",
          "signature": "a-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit-Diff/docs/Test-HUnit-Diff.html#v:-64--61--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003e@?=\u003c/a\u003e\u003c/code\u003e but producing a colored diff on failure.\n\u003c/p\u003e",
          "module": "Test.HUnit.Diff",
          "name": "(@?==)",
          "package": "HUnit-Diff",
          "signature": "a -\u003e a -\u003e Assertion",
          "source": "src/Test-HUnit-Diff.html#%40%3F%3D%3D",
          "type": "function"
        },
        "index": {
          "description": "Like but producing colored diff on failure",
          "hierarchy": "Test HUnit Diff",
          "module": "Test.HUnit.Diff",
          "name": "(@?==) @?==",
          "normalized": "a-\u003ea-\u003eAssertion",
          "package": "HUnit-Diff",
          "signature": "a-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit-Diff/docs/Test-HUnit-Diff.html#v:-64--63--61--61-"
      }
    }
  ]
]