[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/doctest-prop/docs/Test-DocTest-Prop.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package allows you to write QuickCheck properties and HUnit\nassertions within doctest, using functions that keep silence when test\nsucceeds and print out the test outputs otherwise.\n\u003c/p\u003e\u003cp\u003eTo enjoy behavior driven development in Haskell, first import\n\u003ccode\u003eTest.DocTest.Prop\u003c/code\u003e, and use \u003ccode\u003eprop\u003c/code\u003e, \u003ccode\u003epropWith\u003c/code\u003e and \u003ccode\u003eunit\u003c/code\u003e to write\nin-place tests, as follows.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Test.DocTest.Prop\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprop $ \\x -\u003e x*2 == x+x\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprop ((\u003c2) . fromEnum :: Bool -\u003e Bool)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epropWith (quietArgs{maxSize=3}) $ (\u003c10).length\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eassert $ 1+1==2\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Test.DocTest.Prop",
        "fct-package": "doctest-prop",
        "fct-signature": "module",
        "fct-source": "src/Test-DocTest-Prop.html",
        "fct-type": "module",
        "title": "Prop"
      },
      "index": {
        "description": "This package allows you to write QuickCheck properties and HUnit assertions within doctest using functions that keep silence when test succeeds and print out the test outputs otherwise To enjoy behavior driven development in Haskell first import Test.DocTest.Prop and use prop propWith and unit to write in-place tests as follows import Test.DocTest.Prop prop prop fromEnum Bool Bool propWith quietArgs maxSize length assert",
        "hierarchy": "Test DocTest Prop",
        "module": "Test.DocTest.Prop",
        "name": "Prop",
        "normalized": "",
        "package": "doctest-prop",
        "partial": "Prop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/doctest-prop/docs/Test-DocTest-Prop.html#v:assert",
      "description": {
        "fct-module": "Test.DocTest.Prop",
        "fct-package": "doctest-prop",
        "fct-signature": "t -\u003e Assertion",
        "fct-type": "function",
        "title": "assert"
      },
      "index": {
        "description": "",
        "hierarchy": "Test DocTest Prop",
        "module": "Test.DocTest.Prop",
        "name": "assert",
        "normalized": "a-\u003eAssertion",
        "package": "doctest-prop",
        "partial": "",
        "signature": "t-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/doctest-prop/docs/Test-DocTest-Prop.html#v:prop",
      "description": {
        "fct-descr": "\u003cp\u003eTest the QuickCheck property.\n\u003c/p\u003e",
        "fct-module": "Test.DocTest.Prop",
        "fct-package": "doctest-prop",
        "fct-signature": "p -\u003e IO ()",
        "fct-source": "src/Test-DocTest-Prop.html#prop",
        "fct-type": "function",
        "title": "prop"
      },
      "index": {
        "description": "Test the QuickCheck property",
        "hierarchy": "Test DocTest Prop",
        "module": "Test.DocTest.Prop",
        "name": "prop",
        "normalized": "a-\u003eIO()",
        "package": "doctest-prop",
        "partial": "",
        "signature": "p-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/doctest-prop/docs/Test-DocTest-Prop.html#v:propWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eprop\u003c/code\u003e with customized arguments.\n\u003c/p\u003e",
        "fct-module": "Test.DocTest.Prop",
        "fct-package": "doctest-prop",
        "fct-signature": "Args -\u003e p -\u003e IO ()",
        "fct-source": "src/Test-DocTest-Prop.html#propWith",
        "fct-type": "function",
        "title": "propWith"
      },
      "index": {
        "description": "prop with customized arguments",
        "hierarchy": "Test DocTest Prop",
        "module": "Test.DocTest.Prop",
        "name": "propWith",
        "normalized": "Args-\u003ea-\u003eIO()",
        "package": "doctest-prop",
        "partial": "With",
        "signature": "Args-\u003ep-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/doctest-prop/docs/Test-DocTest-Prop.html#v:quietArgs",
      "description": {
        "fct-descr": "\u003cp\u003eThe standard arguments for QuickCheck but the chatty flag is off.\n\u003c/p\u003e",
        "fct-module": "Test.DocTest.Prop",
        "fct-package": "doctest-prop",
        "fct-signature": "Args",
        "fct-source": "src/Test-DocTest-Prop.html#quietArgs",
        "fct-type": "function",
        "title": "quietArgs"
      },
      "index": {
        "description": "The standard arguments for QuickCheck but the chatty flag is off",
        "hierarchy": "Test DocTest Prop",
        "module": "Test.DocTest.Prop",
        "name": "quietArgs",
        "normalized": "",
        "package": "doctest-prop",
        "partial": "Args",
        "signature": ""
      }
    }
  }
]