[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Expectations-Lens.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHspec expectations for the lens stuff\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Hspec.Expectations.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "module",
        "fct-source": "src/Test-Hspec-Expectations-Lens.html",
        "fct-type": "module",
        "title": "Lens"
      },
      "index": {
        "description": "Hspec expectations for the lens stuff",
        "hierarchy": "Test Hspec Expectations Lens",
        "module": "Test.Hspec.Expectations.Lens",
        "name": "Lens",
        "normalized": "",
        "package": "hspec-expectations-lens",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Expectations-Lens.html#v:shouldHave",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003es `shouldHave` l\u003c/code\u003e sets the expectation that \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e \u003ccode\u003el\u003c/code\u003e has\n non-zero number of targets in the structure \u003ccode\u003es\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e s `shouldBe` t &#8801; s `shouldHave` only t\n\u003c/pre\u003e\u003cpre\u003e\n shouldHave :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s =\u003e s -\u003e \u003ccode\u003e\u003ca\u003eGetter\u003c/a\u003e\u003c/code\u003e     s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldHave :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s =\u003e s -\u003e \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e       s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldHave :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s =\u003e s -\u003e \u003ccode\u003e\u003ca\u003eIso'\u003c/a\u003e\u003c/code\u003e       s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldHave :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s =\u003e s -\u003e \u003ccode\u003e\u003ca\u003eLens'\u003c/a\u003e\u003c/code\u003e      s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldHave :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s =\u003e s -\u003e \u003ccode\u003e\u003ca\u003eTraversal'\u003c/a\u003e\u003c/code\u003e s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldHave :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s =\u003e s -\u003e \u003ccode\u003e\u003ca\u003ePrism'\u003c/a\u003e\u003c/code\u003e     s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Test.Hspec.Expectations.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "s -\u003e Getting Any s a -\u003e Expectation",
        "fct-source": "src/Test-Hspec-Expectations-Lens.html#shouldHave",
        "fct-type": "function",
        "title": "shouldHave"
      },
      "index": {
        "description": "shouldHave sets the expectation that Fold has non-zero number of targets in the structure shouldBe shouldHave only shouldHave Show Getter Expectation shouldHave Show Fold Expectation shouldHave Show Iso Expectation shouldHave Show Lens Expectation shouldHave Show Traversal Expectation shouldHave Show Prism Expectation",
        "hierarchy": "Test Hspec Expectations Lens",
        "module": "Test.Hspec.Expectations.Lens",
        "name": "shouldHave",
        "normalized": "a-\u003eGetting Any a b-\u003eExpectation",
        "package": "hspec-expectations-lens",
        "partial": "Have",
        "signature": "s-\u003eGetting Any s a-\u003eExpectation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Expectations-Lens.html#v:shouldList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003es `shouldList` ts `through` l\u003c/code\u003e sets the expectation that\n \u003ccode\u003ets\u003c/code\u003e is a list of the Fold \u003ccode\u003el\u003c/code\u003e targets in \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n shouldList :: (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e [a] -\u003e \u003ccode\u003e\u003ca\u003eGetter\u003c/a\u003e\u003c/code\u003e     s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldList :: (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e [a] -\u003e \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e       s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldList :: (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e [a] -\u003e \u003ccode\u003e\u003ca\u003eLens'\u003c/a\u003e\u003c/code\u003e      s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldList :: (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e [a] -\u003e \u003ccode\u003e\u003ca\u003eIso'\u003c/a\u003e\u003c/code\u003e       s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldList :: (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e [a] -\u003e \u003ccode\u003e\u003ca\u003eTraversal'\u003c/a\u003e\u003c/code\u003e s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldList :: (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e [a] -\u003e \u003ccode\u003e\u003ca\u003ePrism'\u003c/a\u003e\u003c/code\u003e     s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Test.Hspec.Expectations.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "s -\u003e [a] -\u003e Getting (Endo [a]) s a -\u003e Expectation",
        "fct-source": "src/Test-Hspec-Expectations-Lens.html#shouldList",
        "fct-type": "function",
        "title": "shouldList"
      },
      "index": {
        "description": "shouldList ts through sets the expectation that ts is list of the Fold targets in shouldList Show Show Eq Getter Expectation shouldList Show Show Eq Fold Expectation shouldList Show Show Eq Lens Expectation shouldList Show Show Eq Iso Expectation shouldList Show Show Eq Traversal Expectation shouldList Show Show Eq Prism Expectation",
        "hierarchy": "Test Hspec Expectations Lens",
        "module": "Test.Hspec.Expectations.Lens",
        "name": "shouldList",
        "normalized": "a-\u003e[b]-\u003eGetting(Endo[b])a b-\u003eExpectation",
        "package": "hspec-expectations-lens",
        "partial": "List",
        "signature": "s-\u003e[a]-\u003eGetting(Endo[a])s a-\u003eExpectation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Expectations-Lens.html#v:shouldNotHave",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003es `shouldNotHave` l\u003c/code\u003e sets the expectation that \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e \u003ccode\u003el\u003c/code\u003e\n has exactly zero targets in the structue \u003ccode\u003es\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n shouldNotHave :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s =\u003e s -\u003e \u003ccode\u003e\u003ca\u003eGetter\u003c/a\u003e\u003c/code\u003e     s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldNotHave :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s =\u003e s -\u003e \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e       s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldNotHave :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s =\u003e s -\u003e \u003ccode\u003e\u003ca\u003eIso'\u003c/a\u003e\u003c/code\u003e       s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldNotHave :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s =\u003e s -\u003e \u003ccode\u003e\u003ca\u003eLens'\u003c/a\u003e\u003c/code\u003e      s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldNotHave :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s =\u003e s -\u003e \u003ccode\u003e\u003ca\u003eTraversal'\u003c/a\u003e\u003c/code\u003e s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldNotHave :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s =\u003e s -\u003e \u003ccode\u003e\u003ca\u003ePrism'\u003c/a\u003e\u003c/code\u003e     s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Test.Hspec.Expectations.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "s -\u003e Getting All s a -\u003e Expectation",
        "fct-source": "src/Test-Hspec-Expectations-Lens.html#shouldNotHave",
        "fct-type": "function",
        "title": "shouldNotHave"
      },
      "index": {
        "description": "shouldNotHave sets the expectation that Fold has exactly zero targets in the structue shouldNotHave Show Getter Expectation shouldNotHave Show Fold Expectation shouldNotHave Show Iso Expectation shouldNotHave Show Lens Expectation shouldNotHave Show Traversal Expectation shouldNotHave Show Prism Expectation",
        "hierarchy": "Test Hspec Expectations Lens",
        "module": "Test.Hspec.Expectations.Lens",
        "name": "shouldNotHave",
        "normalized": "a-\u003eGetting All a b-\u003eExpectation",
        "package": "hspec-expectations-lens",
        "partial": "Not Have",
        "signature": "s-\u003eGetting All s a-\u003eExpectation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Expectations-Lens.html#v:shouldPerform",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ea `shouldPerform` t `through` l\u003c/code\u003e sets the expectation that \u003ccode\u003et\u003c/code\u003e is\n a target of the \u003ccode\u003e\u003ca\u003eMonadicFold\u003c/a\u003e\u003c/code\u003e \u003ccode\u003el\u003c/code\u003e applied to the result of action \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n shouldPerform :: (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e s -\u003e a -\u003e \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e      \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldPerform :: (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e s -\u003e a -\u003e \u003ccode\u003e\u003ca\u003eMonadicFold\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Test.Hspec.Expectations.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "IO s -\u003e a -\u003e Acting IO (Leftmost a) s s a b -\u003e Expectation",
        "fct-source": "src/Test-Hspec-Expectations-Lens.html#shouldPerform",
        "fct-type": "function",
        "title": "shouldPerform"
      },
      "index": {
        "description": "shouldPerform through sets the expectation that is target of the MonadicFold applied to the result of action shouldPerform Show Eq IO Action IO Expectation shouldPerform Show Eq IO MonadicFold IO Expectation",
        "hierarchy": "Test Hspec Expectations Lens",
        "module": "Test.Hspec.Expectations.Lens",
        "name": "shouldPerform",
        "normalized": "IO a-\u003eb-\u003eActing IO(Leftmost b)a a b c-\u003eExpectation",
        "package": "hspec-expectations-lens",
        "partial": "Perform",
        "signature": "IO s-\u003ea-\u003eActing IO(Leftmost a)s s a b-\u003eExpectation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Expectations-Lens.html#v:shouldPreview",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003es `shouldPreview` t `through` l\u003c/code\u003e sets the expectation that\n you \u003ccode\u003ey\u003c/code\u003e is the first target of the \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e \u003ccode\u003el\u003c/code\u003e in \u003ccode\u003es\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n shouldPreview :: (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e a -\u003e \u003ccode\u003e\u003ca\u003eGetter\u003c/a\u003e\u003c/code\u003e     s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldPreview :: (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e a -\u003e \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e       s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldPreview :: (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e a -\u003e \u003ccode\u003e\u003ca\u003eLens'\u003c/a\u003e\u003c/code\u003e      s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldPreview :: (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e a -\u003e \u003ccode\u003e\u003ca\u003eIso'\u003c/a\u003e\u003c/code\u003e       s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldPreview :: (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e a -\u003e \u003ccode\u003e\u003ca\u003eTraversal'\u003c/a\u003e\u003c/code\u003e s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldPreview :: (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e a -\u003e \u003ccode\u003e\u003ca\u003ePrism'\u003c/a\u003e\u003c/code\u003e     s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Test.Hspec.Expectations.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "s -\u003e a -\u003e Getting (First a) s a -\u003e Expectation",
        "fct-source": "src/Test-Hspec-Expectations-Lens.html#shouldPreview",
        "fct-type": "function",
        "title": "shouldPreview"
      },
      "index": {
        "description": "shouldPreview through sets the expectation that you is the first target of the Fold in shouldPreview Show Show Eq Getter Expectation shouldPreview Show Show Eq Fold Expectation shouldPreview Show Show Eq Lens Expectation shouldPreview Show Show Eq Iso Expectation shouldPreview Show Show Eq Traversal Expectation shouldPreview Show Show Eq Prism Expectation",
        "hierarchy": "Test Hspec Expectations Lens",
        "module": "Test.Hspec.Expectations.Lens",
        "name": "shouldPreview",
        "normalized": "a-\u003eb-\u003eGetting(First b)a b-\u003eExpectation",
        "package": "hspec-expectations-lens",
        "partial": "Preview",
        "signature": "s-\u003ea-\u003eGetting(First a)s a-\u003eExpectation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Expectations-Lens.html#v:shouldThrow",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ea `shouldThrow` l\u003c/code\u003e sets the expectation that\n \u003ccode\u003ea\u003c/code\u003e throws an exception that \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e \u003ccode\u003el\u003c/code\u003e can catch\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eTest.Hspec\u003c/a\u003e exports \u003ccode\u003e\u003ca\u003eshouldThrow\u003c/a\u003e\u003c/code\u003e too; it\n only allows \u003ccode\u003ee -\u003e Bool\u003c/code\u003e selectors, which is less general and often less convenient\n\u003c/p\u003e\u003cpre\u003e\n shouldThrow :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a -\u003e \u003ccode\u003e\u003ca\u003eGetter\u003c/a\u003e\u003c/code\u003e     s b -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldThrow :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a -\u003e \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e       s b -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldThrow :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a -\u003e \u003ccode\u003e\u003ca\u003eLens'\u003c/a\u003e\u003c/code\u003e      s b -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldThrow :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a -\u003e \u003ccode\u003e\u003ca\u003eIso'\u003c/a\u003e\u003c/code\u003e       s b -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldThrow :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a -\u003e \u003ccode\u003e\u003ca\u003eTraversal'\u003c/a\u003e\u003c/code\u003e s b -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldThrow :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a -\u003e \u003ccode\u003e\u003ca\u003ePrism'\u003c/a\u003e\u003c/code\u003e     s b -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Test.Hspec.Expectations.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "IO a -\u003e Getting (First b) SomeException b -\u003e Expectation",
        "fct-source": "src/Test-Hspec-Expectations-Lens.html#shouldThrow",
        "fct-type": "function",
        "title": "shouldThrow"
      },
      "index": {
        "description": "shouldThrow sets the expectation that throws an exception that Fold can catch Test.Hspec exports shouldThrow too it only allows Bool selectors which is less general and often less convenient shouldThrow IO Getter Expectation shouldThrow IO Fold Expectation shouldThrow IO Lens Expectation shouldThrow IO Iso Expectation shouldThrow IO Traversal Expectation shouldThrow IO Prism Expectation",
        "hierarchy": "Test Hspec Expectations Lens",
        "module": "Test.Hspec.Expectations.Lens",
        "name": "shouldThrow",
        "normalized": "IO a-\u003eGetting(First b)SomeException b-\u003eExpectation",
        "package": "hspec-expectations-lens",
        "partial": "Throw",
        "signature": "IO a-\u003eGetting(First b)SomeException b-\u003eExpectation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Expectations-Lens.html#v:shouldView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003es `shouldView` t `through` l\u003c/code\u003e sets the expectation that\n you can see target \u003ccode\u003et\u003c/code\u003e in the structure \u003ccode\u003es\u003c/code\u003e though a \u003ccode\u003e\u003ca\u003eGetter\u003c/a\u003e\u003c/code\u003e \u003ccode\u003el\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n shouldView ::           (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e a -\u003e \u003ccode\u003e\u003ca\u003eGetter\u003c/a\u003e\u003c/code\u003e     s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldView :: (\u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e m, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e a -\u003e \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e       s m -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldView ::           (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e a -\u003e \u003ccode\u003e\u003ca\u003eIso'\u003c/a\u003e\u003c/code\u003e       s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldView ::           (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e a -\u003e \u003ccode\u003e\u003ca\u003eLens'\u003c/a\u003e\u003c/code\u003e      s a -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldView :: (\u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e m, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e a -\u003e \u003ccode\u003e\u003ca\u003eTraversal'\u003c/a\u003e\u003c/code\u003e s m -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n shouldView :: (\u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e m, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a) =\u003e s -\u003e a -\u003e \u003ccode\u003e\u003ca\u003ePrism'\u003c/a\u003e\u003c/code\u003e     s m -\u003e \u003ccode\u003e\u003ca\u003eExpectation\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Test.Hspec.Expectations.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "s -\u003e a -\u003e Getting a s a -\u003e Expectation",
        "fct-source": "src/Test-Hspec-Expectations-Lens.html#shouldView",
        "fct-type": "function",
        "title": "shouldView"
      },
      "index": {
        "description": "shouldView through sets the expectation that you can see target in the structure though Getter shouldView Show Show Eq Getter Expectation shouldView Monoid Show Show Eq Fold Expectation shouldView Show Show Eq Iso Expectation shouldView Show Show Eq Lens Expectation shouldView Monoid Show Show Eq Traversal Expectation shouldView Monoid Show Show Eq Prism Expectation",
        "hierarchy": "Test Hspec Expectations Lens",
        "module": "Test.Hspec.Expectations.Lens",
        "name": "shouldView",
        "normalized": "a-\u003eb-\u003eGetting b a b-\u003eExpectation",
        "package": "hspec-expectations-lens",
        "partial": "View",
        "signature": "s-\u003ea-\u003eGetting a s a-\u003eExpectation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Expectations-Lens.html#v:through",
      "description": {
        "fct-descr": "\u003cp\u003eA helper to fight parentheses\n\u003c/p\u003e\u003cpre\u003e\n through &#8801; id\n\u003c/pre\u003e\u003cpre\u003e\n through :: \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n through :: \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Test.Hspec.Expectations.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Test-Hspec-Expectations-Lens.html#through",
        "fct-type": "function",
        "title": "through"
      },
      "index": {
        "description": "helper to fight parentheses through id through Int Int through Char Char",
        "hierarchy": "Test Hspec Expectations Lens",
        "module": "Test.Hspec.Expectations.Lens",
        "name": "through",
        "normalized": "a-\u003ea",
        "package": "hspec-expectations-lens",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule is designed to be conveniently imported instead of \u003ca\u003eTest.Hspec\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eIt reexports \u003ca\u003eTest.Hspec\u003c/a\u003e without expectations (except for \u003ccode\u003e\u003ca\u003eshouldBe\u003c/a\u003e\u003c/code\u003e)\n and \u003ca\u003eTest.Hspec.Expectations.Lens\u003c/a\u003e expectations\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "module",
        "fct-source": "src/Test-Hspec-Lens.html",
        "fct-type": "module",
        "title": "Lens"
      },
      "index": {
        "description": "Module is designed to be conveniently imported instead of Test.Hspec It reexports Test.Hspec without expectations except for shouldBe and Test.Hspec.Expectations.Lens expectations",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "Lens",
        "normalized": "",
        "package": "hspec-expectations-lens",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#t:Example",
      "description": {
        "fct-descr": "\u003cp\u003eA type class for examples.\n\u003c/p\u003e",
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Example"
      },
      "index": {
        "description": "type class for examples",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "Example",
        "normalized": "",
        "package": "hspec-expectations-lens",
        "partial": "Example",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#t:Spec",
      "description": {
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Spec"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "Spec",
        "normalized": "",
        "package": "hspec-expectations-lens",
        "partial": "Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#v:after",
      "description": {
        "fct-descr": "\u003cp\u003eRun a custom action after every spec item.\n\u003c/p\u003e",
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "IO () -\u003e Spec -\u003e Spec",
        "fct-type": "function",
        "title": "after"
      },
      "index": {
        "description": "Run custom action after every spec item",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "after",
        "normalized": "IO()-\u003eSpec-\u003eSpec",
        "package": "hspec-expectations-lens",
        "partial": "",
        "signature": "IO()-\u003eSpec-\u003eSpec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#v:around",
      "description": {
        "fct-descr": "\u003cp\u003eRun a custom action before and/or after every spec item.\n\u003c/p\u003e",
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "(IO () -\u003e IO ()) -\u003e Spec -\u003e Spec",
        "fct-type": "function",
        "title": "around"
      },
      "index": {
        "description": "Run custom action before and or after every spec item",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "around",
        "normalized": "(IO()-\u003eIO())-\u003eSpec-\u003eSpec",
        "package": "hspec-expectations-lens",
        "partial": "",
        "signature": "(IO()-\u003eIO())-\u003eSpec-\u003eSpec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#v:before",
      "description": {
        "fct-descr": "\u003cp\u003eRun a custom action before every spec item.\n\u003c/p\u003e",
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "IO () -\u003e Spec -\u003e Spec",
        "fct-type": "function",
        "title": "before"
      },
      "index": {
        "description": "Run custom action before every spec item",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "before",
        "normalized": "IO()-\u003eSpec-\u003eSpec",
        "package": "hspec-expectations-lens",
        "partial": "",
        "signature": "IO()-\u003eSpec-\u003eSpec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#v:context",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003edescribe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "String -\u003e Spec -\u003e Spec",
        "fct-type": "function",
        "title": "context"
      },
      "index": {
        "description": "An alias for describe",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "context",
        "normalized": "String-\u003eSpec-\u003eSpec",
        "package": "hspec-expectations-lens",
        "partial": "",
        "signature": "String-\u003eSpec-\u003eSpec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#v:describe",
      "description": {
        "fct-descr": "\u003cp\u003eCombine a list of specs into a larger spec.\n\u003c/p\u003e",
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "String -\u003e Spec -\u003e Spec",
        "fct-type": "function",
        "title": "describe"
      },
      "index": {
        "description": "Combine list of specs into larger spec",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "describe",
        "normalized": "String-\u003eSpec-\u003eSpec",
        "package": "hspec-expectations-lens",
        "partial": "",
        "signature": "String-\u003eSpec-\u003eSpec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#v:example",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a type restricted version of \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.  It can be used to get better\n error messages on type mismatches.\n\u003c/p\u003e\u003cp\u003eCompare e.g.\n\u003c/p\u003e\u003cpre\u003e it \"exposes some behavior\" $ example $ do\n   putStrLn\n\u003c/pre\u003e\u003cp\u003ewith\n\u003c/p\u003e\u003cpre\u003e it \"exposes some behavior\" $ do\n   putStrLn\n\u003c/pre\u003e",
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "Expectation -\u003e Expectation",
        "fct-type": "function",
        "title": "example"
      },
      "index": {
        "description": "This is type restricted version of id It can be used to get better error messages on type mismatches Compare e.g it exposes some behavior example do putStrLn with it exposes some behavior do putStrLn",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "example",
        "normalized": "Expectation-\u003eExpectation",
        "package": "hspec-expectations-lens",
        "partial": "",
        "signature": "Expectation-\u003eExpectation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#v:hspec",
      "description": {
        "fct-descr": "\u003cp\u003eRun given spec and write a report to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e.\n Exit with \u003ccode\u003e\u003ca\u003eexitFailure\u003c/a\u003e\u003c/code\u003e if at least one spec item fails.\n\u003c/p\u003e",
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "Spec -\u003e IO ()",
        "fct-type": "function",
        "title": "hspec"
      },
      "index": {
        "description": "Run given spec and write report to stdout Exit with exitFailure if at least one spec item fails",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "hspec",
        "normalized": "Spec-\u003eIO()",
        "package": "hspec-expectations-lens",
        "partial": "",
        "signature": "Spec-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#v:it",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a spec item.\n\u003c/p\u003e\u003cp\u003eA spec item consists of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a textual description of a desired behavior\n\u003c/li\u003e\u003cli\u003e an example for that behavior\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e describe \"absolute\" $ do\n   it \"returns a positive number when given a negative number\" $\n     absolute (-1) == 1\n\u003c/pre\u003e",
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "String -\u003e a -\u003e Spec",
        "fct-type": "function",
        "title": "it"
      },
      "index": {
        "description": "Create spec item spec item consists of textual description of desired behavior an example for that behavior describe absolute do it returns positive number when given negative number absolute",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "it",
        "normalized": "String-\u003ea-\u003eSpec",
        "package": "hspec-expectations-lens",
        "partial": "",
        "signature": "String-\u003ea-\u003eSpec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#v:parallel",
      "description": {
        "fct-descr": "\u003cp\u003eRun examples of given spec in parallel.\n\u003c/p\u003e",
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "Spec -\u003e Spec",
        "fct-type": "function",
        "title": "parallel"
      },
      "index": {
        "description": "Run examples of given spec in parallel",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "parallel",
        "normalized": "Spec-\u003eSpec",
        "package": "hspec-expectations-lens",
        "partial": "",
        "signature": "Spec-\u003eSpec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#v:pending",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a pending example.\n\u003c/p\u003e\u003cp\u003eIf you want to textually specify a behavior but do not have an example yet,\n use this:\n\u003c/p\u003e\u003cpre\u003e describe \"fancyFormatter\" $ do\n   it \"can format text in a way that everyone likes\" $\n     pending\n\u003c/pre\u003e",
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "Expectation",
        "fct-type": "function",
        "title": "pending"
      },
      "index": {
        "description": "Specifies pending example If you want to textually specify behavior but do not have an example yet use this describe fancyFormatter do it can format text in way that everyone likes pending",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "pending",
        "normalized": "",
        "package": "hspec-expectations-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#v:pendingWith",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a pending example with a reason for why it's pending.\n\u003c/p\u003e\u003cpre\u003e describe \"fancyFormatter\" $ do\n   it \"can format text in a way that everyone likes\" $\n     pendingWith \"waiting for clarification from the designers\"\n\u003c/pre\u003e",
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "String -\u003e Expectation",
        "fct-type": "function",
        "title": "pendingWith"
      },
      "index": {
        "description": "Specifies pending example with reason for why it pending describe fancyFormatter do it can format text in way that everyone likes pendingWith waiting for clarification from the designers",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "pendingWith",
        "normalized": "String-\u003eExpectation",
        "package": "hspec-expectations-lens",
        "partial": "With",
        "signature": "String-\u003eExpectation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-expectations-lens/docs/Test-Hspec-Lens.html#v:shouldBe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eactual `shouldBe` expected\u003c/code\u003e sets the expectation that \u003ccode\u003eactual\u003c/code\u003e is equal\n to \u003ccode\u003eexpected\u003c/code\u003e (this is just an alias for \u003ccode\u003e\u003ca\u003e@?=\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Test.Hspec.Lens",
        "fct-package": "hspec-expectations-lens",
        "fct-signature": "a -\u003e a -\u003e Expectation",
        "fct-type": "function",
        "title": "shouldBe"
      },
      "index": {
        "description": "actual shouldBe expected sets the expectation that actual is equal to expected this is just an alias for",
        "hierarchy": "Test Hspec Lens",
        "module": "Test.Hspec.Lens",
        "name": "shouldBe",
        "normalized": "a-\u003ea-\u003eExpectation",
        "package": "hspec-expectations-lens",
        "partial": "Be",
        "signature": "a-\u003ea-\u003eExpectation"
      }
    }
  }
]