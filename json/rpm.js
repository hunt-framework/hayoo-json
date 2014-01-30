[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eSystem.Rpm.Combinators\u003c/code\u003e provides a mechanism for comparing\n  attributes of an Rpm against some sort of specification.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Rpm.Combinators",
        "fct-package": "rpm",
        "fct-signature": "module",
        "fct-source": "src/System-Rpm-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "System.Rpm.Combinators provides mechanism for comparing attributes of an Rpm against some sort of specification",
        "hierarchy": "System Rpm Combinators",
        "module": "System.Rpm.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "rpm",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#t:Rpm",
      "description": {
        "fct-module": "System.Rpm.Combinators",
        "fct-package": "rpm",
        "fct-signature": "type",
        "fct-source": "src/System-Rpm-Combinators.html#Rpm",
        "fct-type": "type",
        "title": "Rpm"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Combinators",
        "module": "System.Rpm.Combinators",
        "name": "Rpm",
        "normalized": "",
        "package": "rpm",
        "partial": "Rpm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#t:RpmP",
      "description": {
        "fct-descr": "\u003cp\u003eA predicate type that takes an \u003ccode\u003e\u003ca\u003eRpmInfo\u003c/a\u003e\u003c/code\u003e datatype and returns a\nvalue of Bool depending on its evaluation.\n\u003c/p\u003e",
        "fct-module": "System.Rpm.Combinators",
        "fct-package": "rpm",
        "fct-signature": "type",
        "fct-source": "src/System-Rpm-Combinators.html#RpmP",
        "fct-type": "type",
        "title": "RpmP"
      },
      "index": {
        "description": "predicate type that takes an RpmInfo datatype and returns value of Bool depending on its evaluation",
        "hierarchy": "System Rpm Combinators",
        "module": "System.Rpm.Combinators",
        "name": "RpmP",
        "normalized": "",
        "package": "rpm",
        "partial": "Rpm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-124--124-.",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a logical combinator used for constructing more complex\nsequences of combinators by requiring one of the predicates to be true.\n\u003c/p\u003e",
        "fct-module": "System.Rpm.Combinators",
        "fct-package": "rpm",
        "fct-signature": "RpmP -\u003e RpmP -\u003e RpmP",
        "fct-source": "src/System-Rpm-Combinators.html#.%7C%7C.",
        "fct-type": "function",
        "title": "(.||.)"
      },
      "index": {
        "description": "This is logical combinator used for constructing more complex sequences of combinators by requiring one of the predicates to be true",
        "hierarchy": "System Rpm Combinators",
        "module": "System.Rpm.Combinators",
        "name": "(.||.) .||.",
        "normalized": "RpmP-\u003eRpmP-\u003eRpmP",
        "package": "rpm",
        "partial": "",
        "signature": "RpmP-\u003eRpmP-\u003eRpmP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-38--38-.",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a logical combinator used for constructing more complex\nsequences of combinators by requiring both predicates to be true.\n\u003c/p\u003e",
        "fct-module": "System.Rpm.Combinators",
        "fct-package": "rpm",
        "fct-signature": "RpmP -\u003e RpmP -\u003e RpmP",
        "fct-source": "src/System-Rpm-Combinators.html#.%26%26.",
        "fct-type": "function",
        "title": "(.&&.)"
      },
      "index": {
        "description": "This is logical combinator used for constructing more complex sequences of combinators by requiring both predicates to be true",
        "hierarchy": "System Rpm Combinators",
        "module": "System.Rpm.Combinators",
        "name": "(.&&.) .&&.",
        "normalized": "RpmP-\u003eRpmP-\u003eRpmP",
        "package": "rpm",
        "partial": "",
        "signature": "RpmP-\u003eRpmP-\u003eRpmP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-47--61-.",
      "description": {
        "fct-module": "System.Rpm.Combinators",
        "fct-package": "rpm",
        "fct-signature": "Rpm a -\u003e a -\u003e RpmP",
        "fct-source": "src/System-Rpm-Combinators.html#.%2F%3D.",
        "fct-type": "function",
        "title": "(./=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Combinators",
        "module": "System.Rpm.Combinators",
        "name": "(./=.) ./=.",
        "normalized": "Rpm a-\u003ea-\u003eRpmP",
        "package": "rpm",
        "partial": "",
        "signature": "Rpm a-\u003ea-\u003eRpmP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-60--61-.",
      "description": {
        "fct-module": "System.Rpm.Combinators",
        "fct-package": "rpm",
        "fct-signature": "Rpm a -\u003e a -\u003e RpmP",
        "fct-source": "src/System-Rpm-Combinators.html#.%3C%3D.",
        "fct-type": "function",
        "title": "(.\u003c=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Combinators",
        "module": "System.Rpm.Combinators",
        "name": "(.\u003c=.) .\u003c=.",
        "normalized": "Rpm a-\u003ea-\u003eRpmP",
        "package": "rpm",
        "partial": "",
        "signature": "Rpm a-\u003ea-\u003eRpmP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-60-.",
      "description": {
        "fct-module": "System.Rpm.Combinators",
        "fct-package": "rpm",
        "fct-signature": "Rpm a -\u003e a -\u003e RpmP",
        "fct-source": "src/System-Rpm-Combinators.html#.%3C.",
        "fct-type": "function",
        "title": "(.\u003c.)"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Combinators",
        "module": "System.Rpm.Combinators",
        "name": "(.\u003c.) .\u003c.",
        "normalized": "Rpm a-\u003ea-\u003eRpmP",
        "package": "rpm",
        "partial": "",
        "signature": "Rpm a-\u003ea-\u003eRpmP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-61--61-.",
      "description": {
        "fct-module": "System.Rpm.Combinators",
        "fct-package": "rpm",
        "fct-signature": "Rpm a-\u003e a-\u003e RpmP",
        "fct-type": "function",
        "title": "(.==.)"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Combinators",
        "module": "System.Rpm.Combinators",
        "name": "(.==.) .==.",
        "normalized": "Rpm a-\u003ea-\u003eRpmP",
        "package": "rpm",
        "partial": "",
        "signature": "Rpm a-\u003ea-\u003eRpmP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-62--61-.",
      "description": {
        "fct-module": "System.Rpm.Combinators",
        "fct-package": "rpm",
        "fct-signature": "Rpm a -\u003e a -\u003e RpmP",
        "fct-source": "src/System-Rpm-Combinators.html#.%3E%3D.",
        "fct-type": "function",
        "title": "(.\u003e=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Combinators",
        "module": "System.Rpm.Combinators",
        "name": "(.\u003e=.) .\u003e=.",
        "normalized": "Rpm a-\u003ea-\u003eRpmP",
        "package": "rpm",
        "partial": "",
        "signature": "Rpm a-\u003ea-\u003eRpmP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:.-62-.",
      "description": {
        "fct-module": "System.Rpm.Combinators",
        "fct-package": "rpm",
        "fct-signature": "Rpm a -\u003e a -\u003e RpmP",
        "fct-source": "src/System-Rpm-Combinators.html#.%3E.",
        "fct-type": "function",
        "title": "(.\u003e.)"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Combinators",
        "module": "System.Rpm.Combinators",
        "name": "(.\u003e.) .\u003e.",
        "normalized": "Rpm a-\u003ea-\u003eRpmP",
        "package": "rpm",
        "partial": "",
        "signature": "Rpm a-\u003ea-\u003eRpmP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:notP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enotP\u003c/code\u003e is used to negate its \u003ccode\u003e\u003ca\u003eRpmP\u003c/a\u003e\u003c/code\u003e when run.\n\u003c/p\u003e",
        "fct-module": "System.Rpm.Combinators",
        "fct-package": "rpm",
        "fct-signature": "RpmP-\u003e RpmP",
        "fct-type": "function",
        "title": "notP"
      },
      "index": {
        "description": "notP is used to negate its RpmP when run",
        "hierarchy": "System Rpm Combinators",
        "module": "System.Rpm.Combinators",
        "name": "notP",
        "normalized": "RpmP-\u003eRpmP",
        "package": "rpm",
        "partial": "",
        "signature": "RpmP-\u003eRpmP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:oneP",
      "description": {
        "fct-module": "System.Rpm.Combinators",
        "fct-package": "rpm",
        "fct-signature": "RpmP",
        "fct-type": "function",
        "title": "oneP"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Combinators",
        "module": "System.Rpm.Combinators",
        "name": "oneP",
        "normalized": "",
        "package": "rpm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Combinators.html#v:zeroP",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezeroP\u003c/a\u003e\u003c/code\u003e combinator, much like the \u003ccode\u003e\u003ca\u003eoneP\u003c/a\u003e\u003c/code\u003e combinator, is more\nfor completeness than anything.\n\u003c/p\u003e",
        "fct-module": "System.Rpm.Combinators",
        "fct-package": "rpm",
        "fct-signature": "RpmP",
        "fct-type": "function",
        "title": "zeroP"
      },
      "index": {
        "description": "The zeroP combinator much like the oneP combinator is more for completeness than anything",
        "hierarchy": "System Rpm Combinators",
        "module": "System.Rpm.Combinators",
        "name": "zeroP",
        "normalized": "",
        "package": "rpm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is mainly for internal purposes and these functions\n   should not be called directly.\n   --  Remove \u003ccode\u003etestName\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Rpm.Info",
        "fct-package": "rpm",
        "fct-signature": "module",
        "fct-source": "src/System-Rpm-Info.html",
        "fct-type": "module",
        "title": "Info"
      },
      "index": {
        "description": "This module is mainly for internal purposes and these functions should not be called directly Remove testName",
        "hierarchy": "System Rpm Info",
        "module": "System.Rpm.Info",
        "name": "Info",
        "normalized": "",
        "package": "rpm",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#t:RpmInfo",
      "description": {
        "fct-module": "System.Rpm.Info",
        "fct-package": "rpm",
        "fct-signature": "data",
        "fct-source": "src/System-Rpm-Info.html#RpmInfo",
        "fct-type": "data",
        "title": "RpmInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Info",
        "module": "System.Rpm.Info",
        "name": "RpmInfo",
        "normalized": "",
        "package": "rpm",
        "partial": "Rpm Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:RpmI",
      "description": {
        "fct-module": "System.Rpm.Info",
        "fct-package": "rpm",
        "fct-signature": "RpmI",
        "fct-source": "src/System-Rpm-Info.html#RpmInfo",
        "fct-type": "function",
        "title": "RpmI"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Info",
        "module": "System.Rpm.Info",
        "name": "RpmI",
        "normalized": "",
        "package": "rpm",
        "partial": "Rpm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:buildHost",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Rpm.Info",
        "fct-package": "rpm",
        "fct-signature": "String",
        "fct-source": "src/System-Rpm-Info.html#RpmInfo",
        "fct-type": "function",
        "title": "buildHost"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Info",
        "module": "System.Rpm.Info",
        "name": "buildHost",
        "normalized": "",
        "package": "rpm",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:buildTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Rpm.Info",
        "fct-package": "rpm",
        "fct-signature": "Integer",
        "fct-source": "src/System-Rpm-Info.html#RpmInfo",
        "fct-type": "function",
        "title": "buildTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Info",
        "module": "System.Rpm.Info",
        "name": "buildTime",
        "normalized": "",
        "package": "rpm",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:description",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Rpm.Info",
        "fct-package": "rpm",
        "fct-signature": "String",
        "fct-source": "src/System-Rpm-Info.html#RpmInfo",
        "fct-type": "function",
        "title": "description"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Info",
        "module": "System.Rpm.Info",
        "name": "description",
        "normalized": "",
        "package": "rpm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Rpm.Info",
        "fct-package": "rpm",
        "fct-signature": "String",
        "fct-source": "src/System-Rpm-Info.html#RpmInfo",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Info",
        "module": "System.Rpm.Info",
        "name": "name",
        "normalized": "",
        "package": "rpm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:release",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Rpm.Info",
        "fct-package": "rpm",
        "fct-signature": "String",
        "fct-source": "src/System-Rpm-Info.html#RpmInfo",
        "fct-type": "function",
        "title": "release"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Info",
        "module": "System.Rpm.Info",
        "name": "release",
        "normalized": "",
        "package": "rpm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:rpmInfoFromFile",
      "description": {
        "fct-module": "System.Rpm.Info",
        "fct-package": "rpm",
        "fct-signature": "FilePath-\u003e IO (Maybe RpmInfo)",
        "fct-type": "function",
        "title": "rpmInfoFromFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Info",
        "module": "System.Rpm.Info",
        "name": "rpmInfoFromFile",
        "normalized": "FilePath-\u003eIO(Maybe RpmInfo)",
        "package": "rpm",
        "partial": "Info From File",
        "signature": "FilePath-\u003eIO(Maybe RpmInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:rpmInfoFromXml",
      "description": {
        "fct-module": "System.Rpm.Info",
        "fct-package": "rpm",
        "fct-signature": "String-\u003e Maybe RpmInfo",
        "fct-type": "function",
        "title": "rpmInfoFromXml"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Info",
        "module": "System.Rpm.Info",
        "name": "rpmInfoFromXml",
        "normalized": "String-\u003eMaybe RpmInfo",
        "package": "rpm",
        "partial": "Info From Xml",
        "signature": "String-\u003eMaybe RpmInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:size",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Rpm.Info",
        "fct-package": "rpm",
        "fct-signature": "Integer",
        "fct-source": "src/System-Rpm-Info.html#RpmInfo",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Info",
        "module": "System.Rpm.Info",
        "name": "size",
        "normalized": "",
        "package": "rpm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:summary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Rpm.Info",
        "fct-package": "rpm",
        "fct-signature": "String",
        "fct-source": "src/System-Rpm-Info.html#RpmInfo",
        "fct-type": "function",
        "title": "summary"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Info",
        "module": "System.Rpm.Info",
        "name": "summary",
        "normalized": "",
        "package": "rpm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Info.html#v:version",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Rpm.Info",
        "fct-package": "rpm",
        "fct-signature": "String",
        "fct-source": "src/System-Rpm-Info.html#RpmInfo",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "",
        "hierarchy": "System Rpm Info",
        "module": "System.Rpm.Info",
        "name": "version",
        "normalized": "",
        "package": "rpm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Xml.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is responsible for generating a XML representation of a Rpm.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Rpm.Xml",
        "fct-package": "rpm",
        "fct-signature": "module",
        "fct-source": "src/System-Rpm-Xml.html",
        "fct-type": "module",
        "title": "Xml"
      },
      "index": {
        "description": "This module is responsible for generating XML representation of Rpm",
        "hierarchy": "System Rpm Xml",
        "module": "System.Rpm.Xml",
        "name": "Xml",
        "normalized": "",
        "package": "rpm",
        "partial": "Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rpm/docs/System-Rpm-Xml.html#v:executeRpm2Xml",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexecuteRpm2Xml\u003c/a\u003e\u003c/code\u003e takes a path to an RPM package and generates an\n XML representation in the form of a string.\n\u003c/p\u003e",
        "fct-module": "System.Rpm.Xml",
        "fct-package": "rpm",
        "fct-signature": "FilePath-\u003e IO (Maybe String)",
        "fct-type": "function",
        "title": "executeRpm2Xml"
      },
      "index": {
        "description": "executeRpm2Xml takes path to an RPM package and generates an XML representation in the form of string",
        "hierarchy": "System Rpm Xml",
        "module": "System.Rpm.Xml",
        "name": "executeRpm2Xml",
        "normalized": "FilePath-\u003eIO(Maybe String)",
        "package": "rpm",
        "partial": "Rpm Xml",
        "signature": "FilePath-\u003eIO(Maybe String)"
      }
    }
  }
]