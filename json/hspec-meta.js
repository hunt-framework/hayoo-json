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
        "word": "hspec-meta"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.Meta",
          "name": "Meta",
          "package": "hspec-meta",
          "source": "src/Test-Hspec-Meta.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Hspec Meta",
          "module": "Test.Hspec.Meta",
          "name": "Meta",
          "package": "hspec-meta",
          "partial": "Meta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hspec-meta/docs/Test-Hspec-Meta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for examples.\n\u003c/p\u003e",
          "module": "Test.Hspec.Meta",
          "name": "Example",
          "package": "hspec-meta",
          "source": "src/Test-Hspec-Core-Type.html#Example",
          "type": "class"
        },
        "index": {
          "description": "type class for examples",
          "hierarchy": "Test Hspec Meta",
          "module": "Test.Hspec.Meta",
          "name": "Example",
          "package": "hspec-meta",
          "partial": "Example",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hspec-meta/docs/Test-Hspec-Meta.html#t:Example"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.Meta",
          "name": "Spec",
          "package": "hspec-meta",
          "source": "src/Test-Hspec-Core-Type.html#Spec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test Hspec Meta",
          "module": "Test.Hspec.Meta",
          "name": "Spec",
          "package": "hspec-meta",
          "partial": "Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hspec-meta/docs/Test-Hspec-Meta.html#t:Spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a custom action after every spec item.\n\u003c/p\u003e",
          "module": "Test.Hspec.Meta",
          "name": "after",
          "package": "hspec-meta",
          "signature": "IO () -\u003e Spec -\u003e Spec",
          "source": "src/Test-Hspec.html#after",
          "type": "function"
        },
        "index": {
          "description": "Run custom action after every spec item",
          "hierarchy": "Test Hspec Meta",
          "module": "Test.Hspec.Meta",
          "name": "after",
          "normalized": "IO()-\u003eSpec-\u003eSpec",
          "package": "hspec-meta",
          "signature": "IO()-\u003eSpec-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-meta/docs/Test-Hspec-Meta.html#v:after"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a custom action before and/or after every spec item.\n\u003c/p\u003e",
          "module": "Test.Hspec.Meta",
          "name": "around",
          "package": "hspec-meta",
          "signature": "(IO () -\u003e IO ()) -\u003e Spec -\u003e Spec",
          "source": "src/Test-Hspec.html#around",
          "type": "function"
        },
        "index": {
          "description": "Run custom action before and or after every spec item",
          "hierarchy": "Test Hspec Meta",
          "module": "Test.Hspec.Meta",
          "name": "around",
          "normalized": "(IO()-\u003eIO())-\u003eSpec-\u003eSpec",
          "package": "hspec-meta",
          "signature": "(IO()-\u003eIO())-\u003eSpec-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-meta/docs/Test-Hspec-Meta.html#v:around"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a custom action before every spec item.\n\u003c/p\u003e",
          "module": "Test.Hspec.Meta",
          "name": "before",
          "package": "hspec-meta",
          "signature": "IO () -\u003e Spec -\u003e Spec",
          "source": "src/Test-Hspec.html#before",
          "type": "function"
        },
        "index": {
          "description": "Run custom action before every spec item",
          "hierarchy": "Test Hspec Meta",
          "module": "Test.Hspec.Meta",
          "name": "before",
          "normalized": "IO()-\u003eSpec-\u003eSpec",
          "package": "hspec-meta",
          "signature": "IO()-\u003eSpec-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-meta/docs/Test-Hspec-Meta.html#v:before"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003edescribe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Hspec.Meta",
          "name": "context",
          "package": "hspec-meta",
          "signature": "String -\u003e Spec -\u003e Spec",
          "source": "src/Test-Hspec.html#context",
          "type": "function"
        },
        "index": {
          "description": "An alias for describe",
          "hierarchy": "Test Hspec Meta",
          "module": "Test.Hspec.Meta",
          "name": "context",
          "normalized": "String-\u003eSpec-\u003eSpec",
          "package": "hspec-meta",
          "signature": "String-\u003eSpec-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-meta/docs/Test-Hspec-Meta.html#v:context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine a list of specs into a larger spec.\n\u003c/p\u003e",
          "module": "Test.Hspec.Meta",
          "name": "describe",
          "package": "hspec-meta",
          "signature": "String -\u003e Spec -\u003e Spec",
          "source": "src/Test-Hspec.html#describe",
          "type": "function"
        },
        "index": {
          "description": "Combine list of specs into larger spec",
          "hierarchy": "Test Hspec Meta",
          "module": "Test.Hspec.Meta",
          "name": "describe",
          "normalized": "String-\u003eSpec-\u003eSpec",
          "package": "hspec-meta",
          "signature": "String-\u003eSpec-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-meta/docs/Test-Hspec-Meta.html#v:describe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a type restricted version of \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.  It can be used to get better\n error messages on type mismatches.\n\u003c/p\u003e\u003cp\u003eCompare e.g.\n\u003c/p\u003e\u003cpre\u003e it \"exposes some behavior\" $ example $ do\n   putStrLn\n\u003c/pre\u003e\u003cp\u003ewith\n\u003c/p\u003e\u003cpre\u003e it \"exposes some behavior\" $ do\n   putStrLn\n\u003c/pre\u003e",
          "module": "Test.Hspec.Meta",
          "name": "example",
          "package": "hspec-meta",
          "signature": "Expectation -\u003e Expectation",
          "source": "src/Test-Hspec.html#example",
          "type": "function"
        },
        "index": {
          "description": "This is type restricted version of id It can be used to get better error messages on type mismatches Compare e.g it exposes some behavior example do putStrLn with it exposes some behavior do putStrLn",
          "hierarchy": "Test Hspec Meta",
          "module": "Test.Hspec.Meta",
          "name": "example",
          "normalized": "Expectation-\u003eExpectation",
          "package": "hspec-meta",
          "signature": "Expectation-\u003eExpectation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-meta/docs/Test-Hspec-Meta.html#v:example"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun given spec and write a report to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e.\n Exit with \u003ccode\u003e\u003ca\u003eexitFailure\u003c/a\u003e\u003c/code\u003e if at least one spec item fails.\n\u003c/p\u003e",
          "module": "Test.Hspec.Meta",
          "name": "hspec",
          "package": "hspec-meta",
          "signature": "Spec -\u003e IO ()",
          "source": "src/Test-Hspec-Runner.html#hspec",
          "type": "function"
        },
        "index": {
          "description": "Run given spec and write report to stdout Exit with exitFailure if at least one spec item fails",
          "hierarchy": "Test Hspec Meta",
          "module": "Test.Hspec.Meta",
          "name": "hspec",
          "normalized": "Spec-\u003eIO()",
          "package": "hspec-meta",
          "signature": "Spec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-meta/docs/Test-Hspec-Meta.html#v:hspec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a spec item.\n\u003c/p\u003e\u003cp\u003eA spec item consists of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a textual description of a desired behavior\n\u003c/li\u003e\u003cli\u003e an example for that behavior\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e describe \"absolute\" $ do\n   it \"returns a positive number when given a negative number\" $\n     absolute (-1) == 1\n\u003c/pre\u003e",
          "module": "Test.Hspec.Meta",
          "name": "it",
          "package": "hspec-meta",
          "signature": "String -\u003e a -\u003e Spec",
          "source": "src/Test-Hspec.html#it",
          "type": "function"
        },
        "index": {
          "description": "Create spec item spec item consists of textual description of desired behavior an example for that behavior describe absolute do it returns positive number when given negative number absolute",
          "hierarchy": "Test Hspec Meta",
          "module": "Test.Hspec.Meta",
          "name": "it",
          "normalized": "String-\u003ea-\u003eSpec",
          "package": "hspec-meta",
          "signature": "String-\u003ea-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-meta/docs/Test-Hspec-Meta.html#v:it"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun examples of given spec in parallel.\n\u003c/p\u003e",
          "module": "Test.Hspec.Meta",
          "name": "parallel",
          "package": "hspec-meta",
          "signature": "Spec -\u003e Spec",
          "source": "src/Test-Hspec.html#parallel",
          "type": "function"
        },
        "index": {
          "description": "Run examples of given spec in parallel",
          "hierarchy": "Test Hspec Meta",
          "module": "Test.Hspec.Meta",
          "name": "parallel",
          "normalized": "Spec-\u003eSpec",
          "package": "hspec-meta",
          "signature": "Spec-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-meta/docs/Test-Hspec-Meta.html#v:parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a pending example.\n\u003c/p\u003e\u003cp\u003eIf you want to textually specify a behavior but do not have an example yet,\n use this:\n\u003c/p\u003e\u003cpre\u003e describe \"fancyFormatter\" $ do\n   it \"can format text in a way that everyone likes\" $\n     pending\n\u003c/pre\u003e",
          "module": "Test.Hspec.Meta",
          "name": "pending",
          "package": "hspec-meta",
          "signature": "Expectation",
          "source": "src/Test-Hspec-Core-Type.html#pending",
          "type": "function"
        },
        "index": {
          "description": "Specifies pending example If you want to textually specify behavior but do not have an example yet use this describe fancyFormatter do it can format text in way that everyone likes pending",
          "hierarchy": "Test Hspec Meta",
          "module": "Test.Hspec.Meta",
          "name": "pending",
          "package": "hspec-meta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-meta/docs/Test-Hspec-Meta.html#v:pending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a pending example with a reason for why it's pending.\n\u003c/p\u003e\u003cpre\u003e describe \"fancyFormatter\" $ do\n   it \"can format text in a way that everyone likes\" $\n     pendingWith \"waiting for clarification from the designers\"\n\u003c/pre\u003e",
          "module": "Test.Hspec.Meta",
          "name": "pendingWith",
          "package": "hspec-meta",
          "signature": "String -\u003e Expectation",
          "source": "src/Test-Hspec-Core-Type.html#pendingWith",
          "type": "function"
        },
        "index": {
          "description": "Specifies pending example with reason for why it pending describe fancyFormatter do it can format text in way that everyone likes pendingWith waiting for clarification from the designers",
          "hierarchy": "Test Hspec Meta",
          "module": "Test.Hspec.Meta",
          "name": "pendingWith",
          "normalized": "String-\u003eExpectation",
          "package": "hspec-meta",
          "partial": "With",
          "signature": "String-\u003eExpectation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-meta/docs/Test-Hspec-Meta.html#v:pendingWith"
      }
    }
  ]
]