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
        "word": "rpm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eSystem.Rpm.Combinators\u003c/code\u003e provides a mechanism for comparing\n  attributes of an Rpm against some sort of specification.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Rpm.Combinators",
          "name": "Combinators",
          "package": "rpm",
          "source": "src/System-Rpm-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "System.Rpm.Combinators provides mechanism for comparing attributes of an Rpm against some sort of specification",
          "hierarchy": "System Rpm Combinators",
          "module": "System.Rpm.Combinators",
          "name": "Combinators",
          "package": "rpm",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Combinators",
          "name": "Rpm",
          "package": "rpm",
          "source": "src/System-Rpm-Combinators.html#Rpm",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Rpm Combinators",
          "module": "System.Rpm.Combinators",
          "name": "Rpm",
          "package": "rpm",
          "partial": "Rpm",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#t:Rpm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate type that takes an \u003ccode\u003e\u003ca\u003eRpmInfo\u003c/a\u003e\u003c/code\u003e datatype and returns a\nvalue of Bool depending on its evaluation.\n\u003c/p\u003e",
          "module": "System.Rpm.Combinators",
          "name": "RpmP",
          "package": "rpm",
          "source": "src/System-Rpm-Combinators.html#RpmP",
          "type": "type"
        },
        "index": {
          "description": "predicate type that takes an RpmInfo datatype and returns value of Bool depending on its evaluation",
          "hierarchy": "System Rpm Combinators",
          "module": "System.Rpm.Combinators",
          "name": "RpmP",
          "package": "rpm",
          "partial": "Rpm",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#t:RpmP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a logical combinator used for constructing more complex\nsequences of combinators by requiring one of the predicates to be true.\n\u003c/p\u003e",
          "module": "System.Rpm.Combinators",
          "name": "(.||.)",
          "package": "rpm",
          "signature": "RpmP -\u003e RpmP -\u003e RpmP",
          "source": "src/System-Rpm-Combinators.html#.%7C%7C.",
          "type": "function"
        },
        "index": {
          "description": "This is logical combinator used for constructing more complex sequences of combinators by requiring one of the predicates to be true",
          "hierarchy": "System Rpm Combinators",
          "module": "System.Rpm.Combinators",
          "name": "(.||.) .||.",
          "normalized": "RpmP-\u003eRpmP-\u003eRpmP",
          "package": "rpm",
          "signature": "RpmP-\u003eRpmP-\u003eRpmP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-124--124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a logical combinator used for constructing more complex\nsequences of combinators by requiring both predicates to be true.\n\u003c/p\u003e",
          "module": "System.Rpm.Combinators",
          "name": "(.&&.)",
          "package": "rpm",
          "signature": "RpmP -\u003e RpmP -\u003e RpmP",
          "source": "src/System-Rpm-Combinators.html#.%26%26.",
          "type": "function"
        },
        "index": {
          "description": "This is logical combinator used for constructing more complex sequences of combinators by requiring both predicates to be true",
          "hierarchy": "System Rpm Combinators",
          "module": "System.Rpm.Combinators",
          "name": "(.&&.) .&&.",
          "normalized": "RpmP-\u003eRpmP-\u003eRpmP",
          "package": "rpm",
          "signature": "RpmP-\u003eRpmP-\u003eRpmP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-38--38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Combinators",
          "name": "(./=.)",
          "package": "rpm",
          "signature": "Rpm a -\u003e a -\u003e RpmP",
          "source": "src/System-Rpm-Combinators.html#.%2F%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Combinators",
          "module": "System.Rpm.Combinators",
          "name": "(./=.) ./=.",
          "normalized": "Rpm a-\u003ea-\u003eRpmP",
          "package": "rpm",
          "signature": "Rpm a-\u003ea-\u003eRpmP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-47--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Combinators",
          "name": "(.\u003c=.)",
          "package": "rpm",
          "signature": "Rpm a -\u003e a -\u003e RpmP",
          "source": "src/System-Rpm-Combinators.html#.%3C%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Combinators",
          "module": "System.Rpm.Combinators",
          "name": "(.\u003c=.) .\u003c=.",
          "normalized": "Rpm a-\u003ea-\u003eRpmP",
          "package": "rpm",
          "signature": "Rpm a-\u003ea-\u003eRpmP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-60--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Combinators",
          "name": "(.\u003c.)",
          "package": "rpm",
          "signature": "Rpm a -\u003e a -\u003e RpmP",
          "source": "src/System-Rpm-Combinators.html#.%3C.",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Combinators",
          "module": "System.Rpm.Combinators",
          "name": "(.\u003c.) .\u003c.",
          "normalized": "Rpm a-\u003ea-\u003eRpmP",
          "package": "rpm",
          "signature": "Rpm a-\u003ea-\u003eRpmP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Combinators",
          "name": "(.==.)",
          "package": "rpm",
          "signature": "Rpm a-\u003e a-\u003e RpmP",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Combinators",
          "module": "System.Rpm.Combinators",
          "name": "(.==.) .==.",
          "normalized": "Rpm a-\u003ea-\u003eRpmP",
          "package": "rpm",
          "signature": "Rpm a-\u003ea-\u003eRpmP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-61--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Combinators",
          "name": "(.\u003e=.)",
          "package": "rpm",
          "signature": "Rpm a -\u003e a -\u003e RpmP",
          "source": "src/System-Rpm-Combinators.html#.%3E%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Combinators",
          "module": "System.Rpm.Combinators",
          "name": "(.\u003e=.) .\u003e=.",
          "normalized": "Rpm a-\u003ea-\u003eRpmP",
          "package": "rpm",
          "signature": "Rpm a-\u003ea-\u003eRpmP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-62--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Combinators",
          "name": "(.\u003e.)",
          "package": "rpm",
          "signature": "Rpm a -\u003e a -\u003e RpmP",
          "source": "src/System-Rpm-Combinators.html#.%3E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Combinators",
          "module": "System.Rpm.Combinators",
          "name": "(.\u003e.) .\u003e.",
          "normalized": "Rpm a-\u003ea-\u003eRpmP",
          "package": "rpm",
          "signature": "Rpm a-\u003ea-\u003eRpmP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enotP\u003c/code\u003e is used to negate its \u003ccode\u003e\u003ca\u003eRpmP\u003c/a\u003e\u003c/code\u003e when run.\n\u003c/p\u003e",
          "module": "System.Rpm.Combinators",
          "name": "notP",
          "package": "rpm",
          "signature": "RpmP-\u003e RpmP",
          "type": "function"
        },
        "index": {
          "description": "notP is used to negate its RpmP when run",
          "hierarchy": "System Rpm Combinators",
          "module": "System.Rpm.Combinators",
          "name": "notP",
          "normalized": "RpmP-\u003eRpmP",
          "package": "rpm",
          "signature": "RpmP-\u003eRpmP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:notP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Combinators",
          "name": "oneP",
          "package": "rpm",
          "signature": "RpmP",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Combinators",
          "module": "System.Rpm.Combinators",
          "name": "oneP",
          "package": "rpm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:oneP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezeroP\u003c/a\u003e\u003c/code\u003e combinator, much like the \u003ccode\u003e\u003ca\u003eoneP\u003c/a\u003e\u003c/code\u003e combinator, is more\nfor completeness than anything.\n\u003c/p\u003e",
          "module": "System.Rpm.Combinators",
          "name": "zeroP",
          "package": "rpm",
          "signature": "RpmP",
          "type": "function"
        },
        "index": {
          "description": "The zeroP combinator much like the oneP combinator is more for completeness than anything",
          "hierarchy": "System Rpm Combinators",
          "module": "System.Rpm.Combinators",
          "name": "zeroP",
          "package": "rpm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:zeroP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is mainly for internal purposes and these functions\n   should not be called directly.\n   --  Remove \u003ccode\u003etestName\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Rpm.Info",
          "name": "Info",
          "package": "rpm",
          "source": "src/System-Rpm-Info.html",
          "type": "module"
        },
        "index": {
          "description": "This module is mainly for internal purposes and these functions should not be called directly Remove testName",
          "hierarchy": "System Rpm Info",
          "module": "System.Rpm.Info",
          "name": "Info",
          "package": "rpm",
          "partial": "Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Info",
          "name": "RpmInfo",
          "package": "rpm",
          "source": "src/System-Rpm-Info.html#RpmInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Rpm Info",
          "module": "System.Rpm.Info",
          "name": "RpmInfo",
          "package": "rpm",
          "partial": "Rpm Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#t:RpmInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Info",
          "name": "RpmI",
          "package": "rpm",
          "signature": "RpmI",
          "source": "src/System-Rpm-Info.html#RpmInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Info",
          "module": "System.Rpm.Info",
          "name": "RpmI",
          "package": "rpm",
          "partial": "Rpm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:RpmI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Info",
          "name": "buildHost",
          "package": "rpm",
          "signature": "String",
          "source": "src/System-Rpm-Info.html#RpmInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Info",
          "module": "System.Rpm.Info",
          "name": "buildHost",
          "package": "rpm",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:buildHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Info",
          "name": "buildTime",
          "package": "rpm",
          "signature": "Integer",
          "source": "src/System-Rpm-Info.html#RpmInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Info",
          "module": "System.Rpm.Info",
          "name": "buildTime",
          "package": "rpm",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:buildTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Info",
          "name": "description",
          "package": "rpm",
          "signature": "String",
          "source": "src/System-Rpm-Info.html#RpmInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Info",
          "module": "System.Rpm.Info",
          "name": "description",
          "package": "rpm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Info",
          "name": "name",
          "package": "rpm",
          "signature": "String",
          "source": "src/System-Rpm-Info.html#RpmInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Info",
          "module": "System.Rpm.Info",
          "name": "name",
          "package": "rpm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Info",
          "name": "release",
          "package": "rpm",
          "signature": "String",
          "source": "src/System-Rpm-Info.html#RpmInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Info",
          "module": "System.Rpm.Info",
          "name": "release",
          "package": "rpm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Info",
          "name": "rpmInfoFromFile",
          "package": "rpm",
          "signature": "FilePath-\u003e IO (Maybe RpmInfo)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Info",
          "module": "System.Rpm.Info",
          "name": "rpmInfoFromFile",
          "normalized": "FilePath-\u003eIO(Maybe RpmInfo)",
          "package": "rpm",
          "partial": "Info From File",
          "signature": "FilePath-\u003eIO(Maybe RpmInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:rpmInfoFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Info",
          "name": "rpmInfoFromXml",
          "package": "rpm",
          "signature": "String-\u003e Maybe RpmInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Info",
          "module": "System.Rpm.Info",
          "name": "rpmInfoFromXml",
          "normalized": "String-\u003eMaybe RpmInfo",
          "package": "rpm",
          "partial": "Info From Xml",
          "signature": "String-\u003eMaybe RpmInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:rpmInfoFromXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Info",
          "name": "size",
          "package": "rpm",
          "signature": "Integer",
          "source": "src/System-Rpm-Info.html#RpmInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Info",
          "module": "System.Rpm.Info",
          "name": "size",
          "package": "rpm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Info",
          "name": "summary",
          "package": "rpm",
          "signature": "String",
          "source": "src/System-Rpm-Info.html#RpmInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Info",
          "module": "System.Rpm.Info",
          "name": "summary",
          "package": "rpm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Rpm.Info",
          "name": "version",
          "package": "rpm",
          "signature": "String",
          "source": "src/System-Rpm-Info.html#RpmInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Rpm Info",
          "module": "System.Rpm.Info",
          "name": "version",
          "package": "rpm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is responsible for generating a XML representation of a Rpm.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Rpm.Xml",
          "name": "Xml",
          "package": "rpm",
          "source": "src/System-Rpm-Xml.html",
          "type": "module"
        },
        "index": {
          "description": "This module is responsible for generating XML representation of Rpm",
          "hierarchy": "System Rpm Xml",
          "module": "System.Rpm.Xml",
          "name": "Xml",
          "package": "rpm",
          "partial": "Xml",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Xml.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexecuteRpm2Xml\u003c/a\u003e\u003c/code\u003e takes a path to an RPM package and generates an\n XML representation in the form of a string.\n\u003c/p\u003e",
          "module": "System.Rpm.Xml",
          "name": "executeRpm2Xml",
          "package": "rpm",
          "signature": "FilePath-\u003e IO (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "executeRpm2Xml takes path to an RPM package and generates an XML representation in the form of string",
          "hierarchy": "System Rpm Xml",
          "module": "System.Rpm.Xml",
          "name": "executeRpm2Xml",
          "normalized": "FilePath-\u003eIO(Maybe String)",
          "package": "rpm",
          "partial": "Rpm Xml",
          "signature": "FilePath-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Xml.html#v:executeRpm2Xml"
      }
    }
  ]
]