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
        "word": "tasty-ant-xml"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eTestTree\u003c/a\u003e\u003c/code\u003e and produce an XML file summarising the test results\n in the same schema that would be produced by Apache Ant's JUnit test runner.\n This schema can be intepreted by the Jenkins continuous integration server,\n amongst other tools.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Tasty.Runners.AntXML",
          "name": "AntXML",
          "package": "tasty-ant-xml",
          "source": "src/Test-Tasty-Runners-AntXML.html",
          "type": "module"
        },
        "index": {
          "description": "Run TestTree and produce an XML file summarising the test results in the same schema that would be produced by Apache Ant JUnit test runner This schema can be intepreted by the Jenkins continuous integration server amongst other tools",
          "hierarchy": "Test Tasty Runners AntXML",
          "module": "Test.Tasty.Runners.AntXML",
          "name": "AntXML",
          "package": "tasty-ant-xml",
          "partial": "Ant XML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tasty-ant-xml/docs/Test-Tasty-Runners-AntXML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo run tests using this ingredient, use \u003ccode\u003e\u003ca\u003edefaultMainWithIngredients\u003c/a\u003e\u003c/code\u003e,\n  passing \u003ccode\u003e\u003ca\u003eantXMLRunner\u003c/a\u003e\u003c/code\u003e as one possible ingredient. This ingredient will run\n  tests if you pass the \u003ccode\u003e--xml\u003c/code\u003e command line option. For example,\n  \u003ccode\u003e--xml=junit.xml\u003c/code\u003e will run all the tests and generate \u003ccode\u003ejunit.xml\u003c/code\u003e as output.\n\u003c/p\u003e",
          "module": "Test.Tasty.Runners.AntXML",
          "name": "antXMLRunner",
          "package": "tasty-ant-xml",
          "signature": "Ingredient",
          "source": "src/Test-Tasty-Runners-AntXML.html#antXMLRunner",
          "type": "function"
        },
        "index": {
          "description": "To run tests using this ingredient use defaultMainWithIngredients passing antXMLRunner as one possible ingredient This ingredient will run tests if you pass the xml command line option For example xml junit.xml will run all the tests and generate junit.xml as output",
          "hierarchy": "Test Tasty Runners AntXML",
          "module": "Test.Tasty.Runners.AntXML",
          "name": "antXMLRunner",
          "package": "tasty-ant-xml",
          "partial": "XMLRunner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-ant-xml/docs/Test-Tasty-Runners-AntXML.html#v:antXMLRunner"
      }
    }
  ]
]