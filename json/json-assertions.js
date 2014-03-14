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
        "word": "json-assertions"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003ejson-assertions\u003c/code\u003e is a library for validating that your JSON encoding matches \nwhat you are actually expecting. It does this by providing you with a DSL to \ntraverse a JSON document at the same time as you traverse the value that was \nencoded. As you traverse the JSON document, you are building up assertions (by \nasserting that you expect certain keys and array indices to exist), and you can \nalso add your own assertions to check the contents of object properties.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eJSONTest\u003c/a\u003e\u003c/code\u003e is an indexed monad, so you will need to enable \u003ccode\u003eRebindableSyntax\u003c/code\u003e \nand bring indexed monadic bind into scope:\n\u003c/p\u003e\u003cpre\u003e \n import Prelude hiding (Monad(..))\n import Control.Monad.Indexed ((\u003e\u003e\u003e=), ireturn)\n import Test.JSON.Assertions\n import Data.Aeson\n\n return :: a -\u003e JSONTest i i a\n return = ireturn\n\n (\u003e\u003e=) :: m i j a -\u003e (a -\u003e m j k b) -\u003e m i k b\n (\u003e\u003e=) = (\u003e\u003e\u003e=)\n\u003c/pre\u003e\u003cp\u003eYou can now write tests as an action in the \u003ccode\u003e\u003ca\u003eJSONTest\u003c/a\u003e\u003c/code\u003e monad. The first index \nis the type of the object you wish to encode, and the second parameter is the \ntype that the test ends in. For example, consider the following:\n\u003c/p\u003e\u003cpre\u003e data Person = Person { personName :: String }\n instance ToJSON Person where\n   toJSON p = object [ \"name\" .= personName p ]\n\u003c/pre\u003e\u003cp\u003eWe can write a test to check that the JSON encoding of a \u003ccode\u003ePerson\u003c/code\u003e's name is\ncorrect:\n\u003c/p\u003e\u003cpre\u003e personTest :: JSONTest Person String String\n personTest = do\n   expectedName \u003c- key \"name\"\n   assertEq expectedName\n\u003c/pre\u003e\u003cp\u003eFor more information, you may wish to read \u003ca\u003ehttp://ocharles.org.uk/blog/posts/2013-11-24-using-indexed-free-monads-to-quickcheck-json.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.JSON.Assertions",
          "name": "Assertions",
          "package": "json-assertions",
          "source": "src/Test-JSON-Assertions.html",
          "type": "module"
        },
        "index": {
          "description": "json-assertions is library for validating that your JSON encoding matches what you are actually expecting It does this by providing you with DSL to traverse JSON document at the same time as you traverse the value that was encoded As you traverse the JSON document you are building up assertions by asserting that you expect certain keys and array indices to exist and you can also add your own assertions to check the contents of object properties JSONTest is an indexed monad so you will need to enable RebindableSyntax and bring indexed monadic bind into scope import Prelude hiding Monad import Control.Monad.Indexed ireturn import Test.JSON.Assertions import Data.Aeson return JSONTest return ireturn You can now write tests as an action in the JSONTest monad The first index is the type of the object you wish to encode and the second parameter is the type that the test ends in For example consider the following data Person Person personName String instance ToJSON Person where toJSON object name personName We can write test to check that the JSON encoding of Person name is correct personTest JSONTest Person String String personTest do expectedName key name assertEq expectedName For more information you may wish to read http ocharles.org.uk blog posts using-indexed-free-monads-to-quickcheck-json.html",
          "hierarchy": "Test JSON Assertions",
          "module": "Test.JSON.Assertions",
          "name": "Assertions",
          "package": "json-assertions",
          "partial": "Assertions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json-assertions/docs/Test-JSON-Assertions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.JSON.Assertions",
          "name": "JSONTest",
          "package": "json-assertions",
          "source": "src/Test-JSON-Assertions.html#JSONTest",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test JSON Assertions",
          "module": "Test.JSON.Assertions",
          "name": "JSONTest",
          "package": "json-assertions",
          "partial": "JSONTest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/json-assertions/docs/Test-JSON-Assertions.html#t:JSONTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that the current JSON value is exactly equal to the result of\n calling \u003ccode\u003e\u003ca\u003etoJSON\u003c/a\u003e\u003c/code\u003e on a value.\n\u003c/p\u003e",
          "module": "Test.JSON.Assertions",
          "name": "assertEq",
          "package": "json-assertions",
          "signature": "a -\u003e JSONTest i i ()",
          "source": "src/Test-JSON-Assertions.html#assertEq",
          "type": "function"
        },
        "index": {
          "description": "Assert that the current JSON value is exactly equal to the result of calling toJSON on value",
          "hierarchy": "Test JSON Assertions",
          "module": "Test.JSON.Assertions",
          "name": "assertEq",
          "normalized": "a-\u003eJSONTest b b()",
          "package": "json-assertions",
          "partial": "Eq",
          "signature": "a-\u003eJSONTest i i()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-assertions/docs/Test-JSON-Assertions.html#v:assertEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinalize a \u003ccode\u003e\u003ca\u003eJSONTest\u003c/a\u003e\u003c/code\u003e by calling \u003ccode\u003e\u003ca\u003estop\u003c/a\u003e\u003c/code\u003e at the end.\n\u003c/p\u003e",
          "module": "Test.JSON.Assertions",
          "name": "jsonTest",
          "package": "json-assertions",
          "signature": "JSONTest i j a -\u003e JSONTest i () a",
          "source": "src/Test-JSON-Assertions.html#jsonTest",
          "type": "function"
        },
        "index": {
          "description": "Finalize JSONTest by calling stop at the end",
          "hierarchy": "Test JSON Assertions",
          "module": "Test.JSON.Assertions",
          "name": "jsonTest",
          "normalized": "JSONTest a b c-\u003eJSONTest a()c",
          "package": "json-assertions",
          "partial": "Test",
          "signature": "JSONTest i j a-\u003eJSONTest i()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-assertions/docs/Test-JSON-Assertions.html#v:jsonTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse into the value underneath a specific key in the JSON structure. \n The return value is the value inside the Haskell value - that is, the result \n applying the associated morphism.\n\u003c/p\u003e",
          "module": "Test.JSON.Assertions",
          "name": "key",
          "package": "json-assertions",
          "signature": "String-\u003e (i -\u003e j)-\u003e JSONTest i j j",
          "type": "function"
        },
        "index": {
          "description": "Traverse into the value underneath specific key in the JSON structure The return value is the value inside the Haskell value that is the result applying the associated morphism",
          "hierarchy": "Test JSON Assertions",
          "module": "Test.JSON.Assertions",
          "name": "key",
          "normalized": "String-\u003e(a-\u003eb)-\u003eJSONTest a b b",
          "package": "json-assertions",
          "signature": "String-\u003e(i-\u003ej)-\u003eJSONTest i j j",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-assertions/docs/Test-JSON-Assertions.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse the specific index of a JSON array.\n The return value is the value inside the Haskell value - that is, the result \n applying the associated morphism.\n\u003c/p\u003e",
          "module": "Test.JSON.Assertions",
          "name": "nth",
          "package": "json-assertions",
          "signature": "Int-\u003e (i -\u003e j)-\u003e JSONTest i j j",
          "type": "function"
        },
        "index": {
          "description": "Traverse the specific index of JSON array The return value is the value inside the Haskell value that is the result applying the associated morphism",
          "hierarchy": "Test JSON Assertions",
          "module": "Test.JSON.Assertions",
          "name": "nth",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eJSONTest a b b",
          "package": "json-assertions",
          "signature": "Int-\u003e(i-\u003ej)-\u003eJSONTest i j j",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-assertions/docs/Test-JSON-Assertions.html#v:nth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing \u003ccode\u003e\u003ca\u003estop\u003c/a\u003e\u003c/code\u003e discards the indices in the monad, which can help when you\n need to \u003ccode\u003eisum\u003c/code\u003e multiple tests that end in different states.\n\u003c/p\u003e",
          "module": "Test.JSON.Assertions",
          "name": "stop",
          "package": "json-assertions",
          "signature": "JSONTest a () r",
          "source": "src/Test-JSON-Assertions.html#stop",
          "type": "function"
        },
        "index": {
          "description": "Using stop discards the indices in the monad which can help when you need to isum multiple tests that end in different states",
          "hierarchy": "Test JSON Assertions",
          "module": "Test.JSON.Assertions",
          "name": "stop",
          "normalized": "JSONTest a()b",
          "package": "json-assertions",
          "signature": "JSONTest a()r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-assertions/docs/Test-JSON-Assertions.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eJSONTest\u003c/a\u003e\u003c/code\u003e against a Haskell value that can be encoded to JSON. \n Returns a list of strings describing the failed assertions, or the empty list\n if all assertions were satisfied.\n\u003c/p\u003e",
          "module": "Test.JSON.Assertions",
          "name": "testJSON",
          "package": "json-assertions",
          "signature": "JSONTest i j a -\u003e i -\u003e [String]",
          "source": "src/Test-JSON-Assertions.html#testJSON",
          "type": "function"
        },
        "index": {
          "description": "Run JSONTest against Haskell value that can be encoded to JSON Returns list of strings describing the failed assertions or the empty list if all assertions were satisfied",
          "hierarchy": "Test JSON Assertions",
          "module": "Test.JSON.Assertions",
          "name": "testJSON",
          "normalized": "JSONTest a b c-\u003ea-\u003e[String]",
          "package": "json-assertions",
          "partial": "JSON",
          "signature": "JSONTest i j a-\u003ei-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-assertions/docs/Test-JSON-Assertions.html#v:testJSON"
      }
    }
  ]
]