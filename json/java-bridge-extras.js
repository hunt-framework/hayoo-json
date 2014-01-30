[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/java-bridge-extras/docs/Foreign-Java-Control.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for controlling actions inside the Java monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Foreign.Java.Control",
        "fct-package": "java-bridge-extras",
        "fct-signature": "module",
        "fct-source": "src/Foreign-Java-Control.html",
        "fct-type": "module",
        "title": "Control"
      },
      "index": {
        "description": "Utilities for controlling actions inside the Java monad",
        "hierarchy": "Foreign Java Control",
        "module": "Foreign.Java.Control",
        "name": "Control",
        "normalized": "",
        "package": "java-bridge-extras",
        "partial": "Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/java-bridge-extras/docs/Foreign-Java-Control.html#v:for",
      "description": {
        "fct-descr": "\u003cp\u003eReiterate a computation on a given value as long\n as a condition is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Foreign.Java.Control",
        "fct-package": "java-bridge-extras",
        "fct-signature": "a -\u003e (a -\u003e m Bool) -\u003e (a -\u003e m a) -\u003e m a",
        "fct-source": "src/Foreign-Java-Control.html#for",
        "fct-type": "function",
        "title": "for"
      },
      "index": {
        "description": "Reiterate computation on given value as long as condition is True",
        "hierarchy": "Foreign Java Control",
        "module": "Foreign.Java.Control",
        "name": "for",
        "normalized": "a-\u003e(a-\u003eb Bool)-\u003e(a-\u003eb a)-\u003eb a",
        "package": "java-bridge-extras",
        "partial": "",
        "signature": "a-\u003e(a-\u003em Bool)-\u003e(a-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/java-bridge-extras/docs/Foreign-Java-Control.html#v:unless",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action if the given predicate\n evaluates to \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Foreign.Java.Control",
        "fct-package": "java-bridge-extras",
        "fct-signature": "m Bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Foreign-Java-Control.html#unless",
        "fct-type": "function",
        "title": "unless"
      },
      "index": {
        "description": "Execute an action if the given predicate evaluates to False",
        "hierarchy": "Foreign Java Control",
        "module": "Foreign.Java.Control",
        "name": "unless",
        "normalized": "a Bool-\u003ea()-\u003ea()",
        "package": "java-bridge-extras",
        "partial": "",
        "signature": "m Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/java-bridge-extras/docs/Foreign-Java-Control.html#v:until",
      "description": {
        "fct-descr": "\u003cp\u003eReiterate a computation on a given value until\n a condition is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Foreign.Java.Control",
        "fct-package": "java-bridge-extras",
        "fct-signature": "a -\u003e (a -\u003e m (Bool, a)) -\u003e m a",
        "fct-source": "src/Foreign-Java-Control.html#until",
        "fct-type": "function",
        "title": "until"
      },
      "index": {
        "description": "Reiterate computation on given value until condition is True",
        "hierarchy": "Foreign Java Control",
        "module": "Foreign.Java.Control",
        "name": "until",
        "normalized": "a-\u003e(a-\u003eb(Bool,a))-\u003eb a",
        "package": "java-bridge-extras",
        "partial": "",
        "signature": "a-\u003e(a-\u003em(Bool,a))-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/java-bridge-extras/docs/Foreign-Java-Control.html#v:when",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action if the given predicate\n evaluates to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Foreign.Java.Control",
        "fct-package": "java-bridge-extras",
        "fct-signature": "m Bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Foreign-Java-Control.html#when",
        "fct-type": "function",
        "title": "when"
      },
      "index": {
        "description": "Execute an action if the given predicate evaluates to True",
        "hierarchy": "Foreign Java Control",
        "module": "Foreign.Java.Control",
        "name": "when",
        "normalized": "a Bool-\u003ea()-\u003ea()",
        "package": "java-bridge-extras",
        "partial": "",
        "signature": "m Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/java-bridge-extras/docs/Foreign-Java-Control.html#v:whether",
      "description": {
        "fct-descr": "\u003cp\u003eExecute either the first or the second action,\n depending on whether the given predicate evaluates\n to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Foreign.Java.Control",
        "fct-package": "java-bridge-extras",
        "fct-signature": "m Bool -\u003e m a -\u003e m a -\u003e m a",
        "fct-source": "src/Foreign-Java-Control.html#whether",
        "fct-type": "function",
        "title": "whether"
      },
      "index": {
        "description": "Execute either the first or the second action depending on whether the given predicate evaluates to True or False",
        "hierarchy": "Foreign Java Control",
        "module": "Foreign.Java.Control",
        "name": "whether",
        "normalized": "a Bool-\u003ea b-\u003ea b-\u003ea b",
        "package": "java-bridge-extras",
        "partial": "",
        "signature": "m Bool-\u003em a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/java-bridge-extras/docs/Foreign-Java-Control.html#v:while",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation as long as the given predicate\n evaluates to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Foreign.Java.Control",
        "fct-package": "java-bridge-extras",
        "fct-signature": "m Bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Foreign-Java-Control.html#while",
        "fct-type": "function",
        "title": "while"
      },
      "index": {
        "description": "Run computation as long as the given predicate evaluates to True",
        "hierarchy": "Foreign Java Control",
        "module": "Foreign.Java.Control",
        "name": "while",
        "normalized": "a Bool-\u003ea()-\u003ea()",
        "package": "java-bridge-extras",
        "partial": "",
        "signature": "m Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/java-bridge-extras/docs/Foreign-Java-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities to ease IO operations in the Java monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Foreign.Java.IO",
        "fct-package": "java-bridge-extras",
        "fct-signature": "module",
        "fct-source": "src/Foreign-Java-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "Utilities to ease IO operations in the Java monad",
        "hierarchy": "Foreign Java IO",
        "module": "Foreign.Java.IO",
        "name": "IO",
        "normalized": "",
        "package": "java-bridge-extras",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/java-bridge-extras/docs/Foreign-Java-IO.html#t:PrintLn",
      "description": {
        "fct-module": "Foreign.Java.IO",
        "fct-package": "java-bridge-extras",
        "fct-signature": "class",
        "fct-source": "src/Foreign-Java-IO.html#PrintLn",
        "fct-type": "class",
        "title": "PrintLn"
      },
      "index": {
        "description": "",
        "hierarchy": "Foreign Java IO",
        "module": "Foreign.Java.IO",
        "name": "PrintLn",
        "normalized": "",
        "package": "java-bridge-extras",
        "partial": "Print Ln",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/java-bridge-extras/docs/Foreign-Java-IO.html#v:print",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but with a specialized\n version for Strings plus it can be used within any\n \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e monad (such as IO and Java).\n\u003c/p\u003e",
        "fct-module": "Foreign.Java.IO",
        "fct-package": "java-bridge-extras",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Foreign-Java-IO.html#print",
        "fct-type": "method",
        "title": "print"
      },
      "index": {
        "description": "Like putStr show but with specialized version for Strings plus it can be used within any MonadIO monad such as IO and Java",
        "hierarchy": "Foreign Java IO",
        "module": "Foreign.Java.IO",
        "name": "print",
        "normalized": "a-\u003eb()",
        "package": "java-bridge-extras",
        "partial": "",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/java-bridge-extras/docs/Foreign-Java-IO.html#v:println",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but with a specialized\n version for Strings plus it can be used within any\n \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e monad (such as IO and Java).\n\u003c/p\u003e",
        "fct-module": "Foreign.Java.IO",
        "fct-package": "java-bridge-extras",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Foreign-Java-IO.html#println",
        "fct-type": "method",
        "title": "println"
      },
      "index": {
        "description": "Like putStrLn show but with specialized version for Strings plus it can be used within any MonadIO monad such as IO and Java",
        "hierarchy": "Foreign Java IO",
        "module": "Foreign.Java.IO",
        "name": "println",
        "normalized": "a-\u003eb()",
        "package": "java-bridge-extras",
        "partial": "",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/java-bridge-extras/docs/Foreign-Java-Maybe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvery java methods returns in priniciple either Nothing or\n Just a value. This is quite cumbersome to work with. This module\n contains utility functions for working with Maybe values in the\n java monad.\n\u003c/p\u003e\u003cp\u003eThis module offers the orphan instance (!)\n\u003c/p\u003e\u003cpre\u003e instance JavaObject a =\u003e JavaObject (Maybe a)\n\u003c/pre\u003e\u003cp\u003eThis instance allows you to apply \u003ccode\u003e\u003ca\u003etoString\u003c/a\u003e\u003c/code\u003e and the like\n without unwrapping a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003easObject\u003c/a\u003e\u003c/code\u003e function provided by this instance\n is undefined (since \u003ccode\u003enull\u003c/code\u003e is not an object). This is also the\n reason why this instance is not included in \u003ca\u003eForeign.Java\u003c/a\u003e by\n default. Invoking it will call \u003ccode\u003eerror \u003ca\u003eNullPointerException\u003c/a\u003e\u003c/code\u003e.\n In other words: This fine module will bring back all the joy of\n Java you might miss in Haskell :-)\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etoString\u003c/a\u003e\u003c/code\u003e will return \u003ccode\u003enull\u003c/code\u003e for \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehashCode\u003c/a\u003e\u003c/code\u003e will return \u003ccode\u003e0\u003c/code\u003e for \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eclassOf\u003c/a\u003e\u003c/code\u003e will return the class for \u003ccode\u003ejava.lang.Void\u003c/code\u003e on \u003ccode\u003eNothing\u003c/code\u003e,\n as this is a class for which there gare no object instances. This is\n only a stopgap and slightly incorrect, as null is not an object,\n and does therefor not have a class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Foreign.Java.Maybe",
        "fct-package": "java-bridge-extras",
        "fct-signature": "module",
        "fct-source": "src/Foreign-Java-Maybe.html",
        "fct-type": "module",
        "title": "Maybe"
      },
      "index": {
        "description": "Every java methods returns in priniciple either Nothing or Just value This is quite cumbersome to work with This module contains utility functions for working with Maybe values in the java monad This module offers the orphan instance instance JavaObject JavaObject Maybe This instance allows you to apply toString and the like without unwrapping Maybe value Note that the asObject function provided by this instance is undefined since null is not an object This is also the reason why this instance is not included in Foreign.Java by default Invoking it will call error NullPointerException In other words This fine module will bring back all the joy of Java you might miss in Haskell toString will return null for Nothing hashCode will return for Nothing classOf will return the class for java.lang.Void on Nothing as this is class for which there gare no object instances This is only stopgap and slightly incorrect as null is not an object and does therefor not have class",
        "hierarchy": "Foreign Java Maybe",
        "module": "Foreign.Java.Maybe",
        "name": "Maybe",
        "normalized": "",
        "package": "java-bridge-extras",
        "partial": "Maybe",
        "signature": ""
      }
    }
  }
]