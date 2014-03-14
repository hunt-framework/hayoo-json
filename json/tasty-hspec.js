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
        "word": "tasty-hspec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Tasty.Hspec",
          "name": "Hspec",
          "package": "tasty-hspec",
          "source": "src/Test-Tasty-Hspec.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Tasty Hspec",
          "module": "Test.Tasty.Hspec",
          "name": "Hspec",
          "package": "tasty-hspec",
          "partial": "Hspec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tasty-hspec/docs/Test-Tasty-Hspec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a test or a group of tests\n\u003c/p\u003e",
          "module": "Test.Tasty.Hspec",
          "name": "TestName",
          "package": "tasty-hspec",
          "type": "type"
        },
        "index": {
          "description": "The name of test or group of tests",
          "hierarchy": "Test Tasty Hspec",
          "module": "Test.Tasty.Hspec",
          "name": "TestName",
          "package": "tasty-hspec",
          "partial": "Test Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tasty-hspec/docs/Test-Tasty-Hspec.html#t:TestName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main data structure defining a test suite.\n\u003c/p\u003e\u003cp\u003eIt consists of individual test cases and properties, organized in named\n groups which form a tree-like hierarchy.\n\u003c/p\u003e\u003cp\u003eThere is no generic way to create a test case. Instead, every test\n provider (tasty-hunit, tasty-smallcheck etc.) provides a function to\n turn a test case into a \u003ccode\u003e\u003ca\u003eTestTree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eGroups can be created using \u003ccode\u003e\u003ca\u003etestGroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Tasty.Hspec",
          "name": "TestTree",
          "package": "tasty-hspec",
          "type": "data"
        },
        "index": {
          "description": "The main data structure defining test suite It consists of individual test cases and properties organized in named groups which form tree-like hierarchy There is no generic way to create test case Instead every test provider tasty-hunit tasty-smallcheck etc provides function to turn test case into TestTree Groups can be created using testGroup",
          "hierarchy": "Test Tasty Hspec",
          "module": "Test.Tasty.Hspec",
          "name": "TestTree",
          "package": "tasty-hspec",
          "partial": "Test Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tasty-hspec/docs/Test-Tasty-Hspec.html#t:TestTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn an hspec \u003ccode\u003eSpec\u003c/code\u003e into a tasty \u003ccode\u003eTestTree\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e module AnimalsSpec (tests) where\n\n import Test.Tasty.Hspec\n\n tests :: TestTree\n tests = testGroup \"animals\"\n     [ testCase \"mammals\" mammalsSpec\n     , testCase \"birds\"   birdsSpec\n     ]\n\n mammalsSpec :: Spec\n mammalsSpec = do\n     describe \"cow\" $ do\n         it \"moos\" $\n             speak cow `shouldBe` \"moo\"\n\n         it \"eats grass\" $\n             hungryFor cow `shouldBe` \"grass\"\n\n birdsSpec :: Spec\n birdsSpec = do\n     describe \"ostrich\" $ do\n         it \"sticks its head in sand\" $\n             fmap (`shouldBe` InSand) getHeadState\n\u003c/pre\u003e",
          "module": "Test.Tasty.Hspec",
          "name": "testCase",
          "package": "tasty-hspec",
          "signature": "TestName -\u003e Spec -\u003e TestTree",
          "source": "src/Test-Tasty-Hspec.html#testCase",
          "type": "function"
        },
        "index": {
          "description": "Turn an hspec Spec into tasty TestTree module AnimalsSpec tests where import Test.Tasty.Hspec tests TestTree tests testGroup animals testCase mammals mammalsSpec testCase birds birdsSpec mammalsSpec Spec mammalsSpec do describe cow do it moos speak cow shouldBe moo it eats grass hungryFor cow shouldBe grass birdsSpec Spec birdsSpec do describe ostrich do it sticks its head in sand fmap shouldBe InSand getHeadState",
          "hierarchy": "Test Tasty Hspec",
          "module": "Test.Tasty.Hspec",
          "name": "testCase",
          "normalized": "TestName-\u003eSpec-\u003eTestTree",
          "package": "tasty-hspec",
          "partial": "Case",
          "signature": "TestName-\u003eSpec-\u003eTestTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-hspec/docs/Test-Tasty-Hspec.html#v:testCase"
      }
    }
  ]
]