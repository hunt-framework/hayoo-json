[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module captures annotations on a value, and builds a \u003ccode\u003e\u003ca\u003eCapture\u003c/a\u003e\u003c/code\u003e value.\n   This module has two ways of writing annotations:\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eImpure\u003c/em\u003e: The impure method of writing annotations is susceptible to over-optimisation by GHC\n   - sometimes \u003ccode\u003e{-# OPTIONS_GHC -fno-cse #-}\u003c/code\u003e will be required.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ePure\u003c/em\u003e: The pure method is more verbose, and lacks some type safety.\n\u003c/p\u003e\u003cp\u003eAs an example of the two styles:\n\u003c/p\u003e\u003cpre\u003e data Foo = Foo {foo :: Int, bar :: Int}\n\u003c/pre\u003e\u003cpre\u003e impure = \u003ccode\u003e\u003ca\u003ecapture\u003c/a\u003e\u003c/code\u003e $ Foo {foo = 12, bar = \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e [1 \u003ccode\u003e\u003ca\u003e&=\u003c/a\u003e\u003c/code\u003e \"inner\", 2]} \u003ccode\u003e\u003ca\u003e&=\u003c/a\u003e\u003c/code\u003e \"top\"\u003c/pre\u003e\u003cpre\u003e pure = \u003ccode\u003e\u003ca\u003ecapture_\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003erecord\u003c/a\u003e\u003c/code\u003e Foo{} [foo := 12, bar :=+ [\u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e 1 \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e \"inner\", \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e 2]] \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e \"top\"\u003c/pre\u003e\u003cp\u003eBoth evaluate to:\n\u003c/p\u003e\u003cpre\u003e Capture (Ann \"top\") (Ctor (Foo 12 1) [Value 12, Many [Ann \"inner\" (Value 1), Value 2]]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "module",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html",
        "fct-type": "module",
        "title": "Annotate"
      },
      "index": {
        "description": "This module captures annotations on value and builds Capture value This module has two ways of writing annotations Impure The impure method of writing annotations is susceptible to over-optimisation by GHC sometimes OPTIONS GHC fno-cse will be required Pure The pure method is more verbose and lacks some type safety As an example of the two styles data Foo Foo foo Int bar Int impure capture Foo foo bar many inner top pure capture record Foo foo bar atom inner atom top Both evaluate to Capture Ann top Ctor Foo Value Many Ann inner Value Value",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "Annotate",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Annotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#t:Annotate",
      "description": {
        "fct-descr": "\u003cp\u003eThis type represents an annotated value. The type of the underlying value is not specified.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#Annotate",
        "fct-type": "data",
        "title": "Annotate"
      },
      "index": {
        "description": "This type represents an annotated value The type of the underlying value is not specified",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "Annotate",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Annotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#t:Any",
      "description": {
        "fct-descr": "\u003cp\u003eAny value, with a Data dictionary.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Any.html#Any",
        "fct-type": "data",
        "title": "Any"
      },
      "index": {
        "description": "Any value with Data dictionary",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "Any",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#t:Capture",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of capturing some annotations.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#Capture",
        "fct-type": "data",
        "title": "Capture"
      },
      "index": {
        "description": "The result of capturing some annotations",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "Capture",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Capture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:-38--61-",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an annotation to a value.\n\u003c/p\u003e\u003cp\u003eIt is recommended that anyone making use of this function redefine\n   it with a more restrictive type signature to control the type of the\n   annotation (the second argument). Any redefinitions of this function\n   should add an INLINE pragma, to reduce the chance of incorrect\n   optimisations.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "val -\u003e ann -\u003e val",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#%26%3D",
        "fct-type": "function",
        "title": "(&=)"
      },
      "index": {
        "description": "Add an annotation to value It is recommended that anyone making use of this function redefine it with more restrictive type signature to control the type of the annotation the second argument Any redefinitions of this function should add an INLINE pragma to reduce the chance of incorrect optimisations",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "(&=) &=",
        "normalized": "a-\u003eb-\u003ea",
        "package": "cmdargs",
        "partial": "",
        "signature": "val-\u003eann-\u003eval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:-43--61-",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an annotation to a value.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "Annotate ann -\u003e ann -\u003e Annotate ann",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#%2B%3D",
        "fct-type": "function",
        "title": "(+=)"
      },
      "index": {
        "description": "Add an annotation to value",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "(+=) +=",
        "normalized": "Annotate a-\u003ea-\u003eAnnotate a",
        "package": "cmdargs",
        "partial": "",
        "signature": "Annotate ann-\u003eann-\u003eAnnotate ann"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v::-61-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a field, \u003ccode\u003efieldname := value\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "(c -\u003e f) := f",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#Annotate",
        "fct-type": "function",
        "title": ":="
      },
      "index": {
        "description": "Construct field fieldname value",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": ":=",
        "normalized": "(a-\u003eb)b",
        "package": "cmdargs",
        "partial": "",
        "signature": "(c-\u003ef)f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v::-61--43-",
      "description": {
        "fct-descr": "\u003cp\u003eAdd annotations to a field.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "(c -\u003e f) :=+ [Annotate ann]",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#Annotate",
        "fct-type": "function",
        "title": ":=+"
      },
      "index": {
        "description": "Add annotations to field",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": ":=+",
        "normalized": "(a-\u003eb)[Annotate c]",
        "package": "cmdargs",
        "partial": "",
        "signature": "(c-\u003ef)[Annotate ann]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:Ann",
      "description": {
        "fct-descr": "\u003cp\u003eAn annotation attached to a value (\u003ccode\u003e\u003ca\u003e&=\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "Ann ann (Capture ann)",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#Capture",
        "fct-type": "function",
        "title": "Ann"
      },
      "index": {
        "description": "An annotation attached to value or",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "Ann",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Ann",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:Any",
      "description": {
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "Any a",
        "fct-source": "src/Data-Generics-Any.html#Any",
        "fct-type": "function",
        "title": "Any"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "Any",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:Ctor",
      "description": {
        "fct-descr": "\u003cp\u003eA constructor (a constructor, or \u003ccode\u003e\u003ca\u003erecord\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "Ctor Any [Capture ann]",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#Capture",
        "fct-type": "function",
        "title": "Ctor"
      },
      "index": {
        "description": "constructor constructor or record",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "Ctor",
        "normalized": "Ctor Any[Capture a]",
        "package": "cmdargs",
        "partial": "Ctor",
        "signature": "Ctor Any[Capture ann]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:Many",
      "description": {
        "fct-descr": "\u003cp\u003eMany values collapsed (\u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emany_\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "Many [Capture ann]",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#Capture",
        "fct-type": "function",
        "title": "Many"
      },
      "index": {
        "description": "Many values collapsed many or many",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "Many",
        "normalized": "Many[Capture a]",
        "package": "cmdargs",
        "partial": "Many",
        "signature": "Many[Capture ann]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:Missing",
      "description": {
        "fct-descr": "\u003cp\u003eA missing field (a \u003ccode\u003e\u003ca\u003eRecConError\u003c/a\u003e\u003c/code\u003e exception, or missing from \u003ccode\u003e\u003ca\u003erecord\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "Missing Any",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#Capture",
        "fct-type": "function",
        "title": "Missing"
      },
      "index": {
        "description": "missing field RecConError exception or missing from record",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "Missing",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:Value",
      "description": {
        "fct-descr": "\u003cp\u003eA value (just a value, or \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "Value Any",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#Capture",
        "fct-type": "function",
        "title": "Value"
      },
      "index": {
        "description": "value just value or atom",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "Value",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:atom",
      "description": {
        "fct-descr": "\u003cp\u003eLift a pure value to an annotation.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "val -\u003e Annotate ann",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#atom",
        "fct-type": "function",
        "title": "atom"
      },
      "index": {
        "description": "Lift pure value to an annotation",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "atom",
        "normalized": "a-\u003eAnnotate b",
        "package": "cmdargs",
        "partial": "",
        "signature": "val-\u003eAnnotate ann"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:capture",
      "description": {
        "fct-descr": "\u003cp\u003eCapture a value. Note that if the value is evaluated\n   more than once the result may be different, i.e.\n\u003c/p\u003e\u003cpre\u003e capture x /= capture x\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "val -\u003e Capture ann",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#capture",
        "fct-type": "function",
        "title": "capture"
      },
      "index": {
        "description": "Capture value Note that if the value is evaluated more than once the result may be different i.e capture capture",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "capture",
        "normalized": "a-\u003eCapture b",
        "package": "cmdargs",
        "partial": "",
        "signature": "val-\u003eCapture ann"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:capture_",
      "description": {
        "fct-descr": "\u003cp\u003eCapture the annotations from an annotated value.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "Annotate a -\u003e Capture a",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#capture_",
        "fct-type": "function",
        "title": "capture_"
      },
      "index": {
        "description": "Capture the annotations from an annotated value",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "capture_",
        "normalized": "Annotate a-\u003eCapture a",
        "package": "cmdargs",
        "partial": "",
        "signature": "Annotate a-\u003eCapture a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:defaultMissing",
      "description": {
        "fct-descr": "\u003cp\u003eRemove all Missing values by using any previous instances as default values\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "Capture ann -\u003e Capture ann",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#defaultMissing",
        "fct-type": "function",
        "title": "defaultMissing"
      },
      "index": {
        "description": "Remove all Missing values by using any previous instances as default values",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "defaultMissing",
        "normalized": "Capture a-\u003eCapture a",
        "package": "cmdargs",
        "partial": "Missing",
        "signature": "Capture ann-\u003eCapture ann"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:fromCapture",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the value inside a capture.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "Capture ann -\u003e Any",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#fromCapture",
        "fct-type": "function",
        "title": "fromCapture"
      },
      "index": {
        "description": "Return the value inside capture",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "fromCapture",
        "normalized": "Capture a-\u003eAny",
        "package": "cmdargs",
        "partial": "Capture",
        "signature": "Capture ann-\u003eAny"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:many",
      "description": {
        "fct-descr": "\u003cp\u003eCollapse multiple values in to one.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "[val] -\u003e val",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#many",
        "fct-type": "function",
        "title": "many"
      },
      "index": {
        "description": "Collapse multiple values in to one",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "many",
        "normalized": "[a]-\u003ea",
        "package": "cmdargs",
        "partial": "",
        "signature": "[val]-\u003eval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:many_",
      "description": {
        "fct-descr": "\u003cp\u003eCollapse many annotated values in to one.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "[Annotate a] -\u003e Annotate a",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#many_",
        "fct-type": "function",
        "title": "many_"
      },
      "index": {
        "description": "Collapse many annotated values in to one",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "many_",
        "normalized": "[Annotate a]-\u003eAnnotate a",
        "package": "cmdargs",
        "partial": "",
        "signature": "[Annotate a]-\u003eAnnotate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Annotate.html#v:record",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a constructor/record. The first argument should be\n   the type of field, the second should be a list of fields constructed\n   originally defined by \u003ccode\u003e:=\u003c/code\u003e or \u003ccode\u003e:=+\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation is not type safe, and may raise an exception at runtime\n   if any field has the wrong type or label.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Annotate",
        "fct-package": "cmdargs",
        "fct-signature": "a -\u003e [Annotate ann] -\u003e Annotate ann",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#record",
        "fct-type": "function",
        "title": "record"
      },
      "index": {
        "description": "Create constructor record The first argument should be the type of field the second should be list of fields constructed originally defined by or This operation is not type safe and may raise an exception at runtime if any field has the wrong type or label",
        "hierarchy": "System Console CmdArgs Annotate",
        "module": "System.Console.CmdArgs.Annotate",
        "name": "record",
        "normalized": "a-\u003e[Annotate b]-\u003eAnnotate b",
        "package": "cmdargs",
        "partial": "",
        "signature": "a-\u003e[Annotate ann]-\u003eAnnotate ann"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Default.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides default values for many types.\n   To use the default value simply write \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.CmdArgs.Default",
        "fct-package": "cmdargs",
        "fct-signature": "module",
        "fct-source": "src/System-Console-CmdArgs-Default.html",
        "fct-type": "module",
        "title": "Default"
      },
      "index": {
        "description": "This module provides default values for many types To use the default value simply write def",
        "hierarchy": "System Console CmdArgs Default",
        "module": "System.Console.CmdArgs.Default",
        "name": "Default",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Default.html#t:Default",
      "description": {
        "fct-descr": "\u003cp\u003eClass for default values.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Default",
        "fct-package": "cmdargs",
        "fct-signature": "class",
        "fct-source": "src/System-Console-CmdArgs-Default.html#Default",
        "fct-type": "class",
        "title": "Default"
      },
      "index": {
        "description": "Class for default values",
        "hierarchy": "System Console CmdArgs Default",
        "module": "System.Console.CmdArgs.Default",
        "name": "Default",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Default.html#v:def",
      "description": {
        "fct-descr": "\u003cp\u003eProvide a default value, such as \u003ccode\u003e()\u003c/code\u003e, \u003ccode\u003eFalse\u003c/code\u003e, \u003ccode\u003e0\u003c/code\u003e, \u003ccode\u003e[]\u003c/code\u003e, \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Default",
        "fct-package": "cmdargs",
        "fct-signature": "a",
        "fct-source": "src/System-Console-CmdArgs-Default.html#def",
        "fct-type": "method",
        "title": "def"
      },
      "index": {
        "description": "Provide default value such as False Nothing",
        "hierarchy": "System Console CmdArgs Default",
        "module": "System.Console.CmdArgs.Default",
        "name": "def",
        "normalized": "",
        "package": "cmdargs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module constructs command lines. You may either use the helper functions\n    (\u003ccode\u003e\u003ca\u003eflagNone\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eflagOpt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emode\u003c/a\u003e\u003c/code\u003e etc.) or construct the type directly. These\n    types are intended to give all the necessary power to the person constructing\n    a command line parser.\n\u003c/p\u003e\u003cp\u003eFor people constructing simpler command line parsers, the module\n    \u003ca\u003eSystem.Console.CmdArgs.Implicit\u003c/a\u003e may be more appropriate.\n\u003c/p\u003e\u003cp\u003eAs an example of a parser:\n\u003c/p\u003e\u003cpre\u003e\n    arguments :: \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e [(String,String)]\n    arguments = \u003ccode\u003e\u003ca\u003emode\u003c/a\u003e\u003c/code\u003e \"explicit\" [] \"Explicit sample program\" (\u003ccode\u003e\u003ca\u003eflagArg\u003c/a\u003e\u003c/code\u003e (upd \"file\") \"FILE\")\n        [\u003ccode\u003e\u003ca\u003eflagOpt\u003c/a\u003e\u003c/code\u003e \"world\" [\"hello\",\"h\"] (upd \"world\") \"WHO\" \"World argument\"\n        ,\u003ccode\u003e\u003ca\u003eflagReq\u003c/a\u003e\u003c/code\u003e [\"greeting\",\"g\"] (upd \"greeting\") \"MSG\" \"Greeting to give\"\n        ,\u003ccode\u003e\u003ca\u003eflagHelpSimple\u003c/a\u003e\u003c/code\u003e ((\"help\",\"\"):)]\n        where upd msg x v = Right $ (msg,x):v\n\u003c/pre\u003e\u003cp\u003eAnd this can be invoked by:\n\u003c/p\u003e\u003cpre\u003e\n    main = do\n        xs \u003c- \u003ccode\u003e\u003ca\u003eprocessArgs\u003c/a\u003e\u003c/code\u003e arguments\n        if (\"help\",\"\") `elem` xs then\n            print $ \u003ccode\u003e\u003ca\u003ehelpText\u003c/a\u003e\u003c/code\u003e [] \u003ccode\u003e\u003ca\u003eHelpFormatDefault\u003c/a\u003e\u003c/code\u003e arguments\n         else\n            print xs\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eGroups\u003c/em\u003e: The \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e structure allows flags/modes to be grouped for the purpose of\n    displaying help. When processing command lines, the group structure is ignored.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eModes\u003c/em\u003e: The Explicit module allows multiple mode programs by placing additional modes\n    in \u003ccode\u003e\u003ca\u003emodeGroupModes\u003c/a\u003e\u003c/code\u003e. Every mode is allowed sub-modes, and thus multiple levels of mode\n    may be created. Given a mode \u003ccode\u003ex\u003c/code\u003e with sub-modes \u003ccode\u003exs\u003c/code\u003e, if the first argument corresponds\n    to the name of a sub-mode, then that sub-mode will be applied. If not, then the arguments\n    will be processed by mode \u003ccode\u003ex\u003c/code\u003e. Consequently, if you wish to force the user to explicitly\n    enter a mode, simply give sub-modes, and leave \u003ccode\u003e\u003ca\u003emodeArgs\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003eNothing\u003c/code\u003e. Alternatively, if\n    you want one sub-mode to be selected by default, place all it's flags both in the sub-mode\n    and the outer mode.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eParsing rules\u003c/em\u003e: Command lines are parsed as per most GNU programs. Short arguments single\n    letter flags start with \u003ccode\u003e-\u003c/code\u003e, longer flags start with \u003ccode\u003e--\u003c/code\u003e, and everything else is considered\n    an argument. Anything after \u003ccode\u003e--\u003c/code\u003e alone is considered to be an argument. For example:\n\u003c/p\u003e\u003cpre\u003e -f --flag argument1 -- --argument2\n\u003c/pre\u003e\u003cp\u003eThis command line passes one single letter flag (\u003ccode\u003ef\u003c/code\u003e), one longer flag (\u003ccode\u003eflag\u003c/code\u003e) and two arguments\n    (\u003ccode\u003eargument1\u003c/code\u003e and \u003ccode\u003e--argument2\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "module",
        "fct-source": "src/System-Console-CmdArgs-Explicit.html",
        "fct-type": "module",
        "title": "Explicit"
      },
      "index": {
        "description": "This module constructs command lines You may either use the helper functions flagNone flagOpt mode etc or construct the type directly These types are intended to give all the necessary power to the person constructing command line parser For people constructing simpler command line parsers the module System.Console.CmdArgs.Implicit may be more appropriate As an example of parser arguments Mode String String arguments mode explicit Explicit sample program flagArg upd file FILE flagOpt world hello upd world WHO World argument flagReq greeting upd greeting MSG Greeting to give flagHelpSimple help where upd msg Right msg And this can be invoked by main do xs processArgs arguments if help elem xs then print helpText HelpFormatDefault arguments else print xs Groups The Group structure allows flags modes to be grouped for the purpose of displaying help When processing command lines the group structure is ignored Modes The Explicit module allows multiple mode programs by placing additional modes in modeGroupModes Every mode is allowed sub-modes and thus multiple levels of mode may be created Given mode with sub-modes xs if the first argument corresponds to the name of sub-mode then that sub-mode will be applied If not then the arguments will be processed by mode Consequently if you wish to force the user to explicitly enter mode simply give sub-modes and leave modeArgs as Nothing Alternatively if you want one sub-mode to be selected by default place all it flags both in the sub-mode and the outer mode Parsing rules Command lines are parsed as per most GNU programs Short arguments single letter flags start with longer flags start with and everything else is considered an argument Anything after alone is considered to be an argument For example flag argument1 argument2 This command line passes one single letter flag one longer flag flag and two arguments argument1 and argument2",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "Explicit",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Explicit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#t:Arg",
      "description": {
        "fct-descr": "\u003cp\u003eAn unnamed argument. Anything not starting with \u003ccode\u003e-\u003c/code\u003e is considered an argument,\n   apart from \u003ccode\u003e\"-\"\u003c/code\u003e which is considered to be the argument \u003ccode\u003e\"-\"\u003c/code\u003e, and any arguments\n   following \u003ccode\u003e\"--\"\u003c/code\u003e. For example:\n\u003c/p\u003e\u003cpre\u003e programname arg1 -j - --foo arg3 -- -arg4 --arg5=1 arg6\n\u003c/pre\u003e\u003cp\u003eWould have the arguments:\n\u003c/p\u003e\u003cpre\u003e [\"arg1\",\"-\",\"arg3\",\"-arg4\",\"--arg5=1\",\"arg6\"]\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Arg",
        "fct-type": "data",
        "title": "Arg"
      },
      "index": {
        "description": "An unnamed argument Anything not starting with is considered an argument apart from which is considered to be the argument and any arguments following For example programname arg1 foo arg3 arg4 arg5 arg6 Would have the arguments arg1 arg3 arg4 arg5 arg6",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "Arg",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#t:Complete",
      "description": {
        "fct-descr": "\u003cp\u003eHow to complete a command line option.\n   The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance is suitable for parsing from shell scripts.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Complete.html#Complete",
        "fct-type": "data",
        "title": "Complete"
      },
      "index": {
        "description": "How to complete command line option The Show instance is suitable for parsing from shell scripts",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "Complete",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Complete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#t:Flag",
      "description": {
        "fct-descr": "\u003cp\u003eA flag, consisting of a list of flag names and other information.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Flag",
        "fct-type": "data",
        "title": "Flag"
      },
      "index": {
        "description": "flag consisting of list of flag names and other information",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "Flag",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Flag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#t:FlagHelp",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of a flag, i.e. \u003ccode\u003e--foo=\u003cem\u003eTYPE\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "type",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#FlagHelp",
        "fct-type": "type",
        "title": "FlagHelp"
      },
      "index": {
        "description": "The type of flag i.e foo TYPE",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "FlagHelp",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Flag Help",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#t:FlagInfo",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFlagInfo\u003c/a\u003e\u003c/code\u003e type has the following meaning:\n\u003c/p\u003e\u003cpre\u003e              FlagReq     FlagOpt      FlagOptRare/FlagNone\n -xfoo        -x=foo      -x=foo       -x -foo\n -x foo       -x=foo      -x foo       -x foo\n -x=foo       -x=foo      -x=foo       -x=foo\n --xx foo     --xx=foo    --xx foo     --xx foo\n --xx=foo     --xx=foo    --xx=foo     --xx=foo\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#FlagInfo",
        "fct-type": "data",
        "title": "FlagInfo"
      },
      "index": {
        "description": "The FlagInfo type has the following meaning FlagReq FlagOpt FlagOptRare FlagNone xfoo foo foo foo foo foo foo foo foo foo foo foo xx foo xx foo xx foo xx foo xx foo xx foo xx foo xx foo",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "FlagInfo",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Flag Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#t:Group",
      "description": {
        "fct-descr": "\u003cp\u003eA group of items (modes or flags). The items are treated as a list, but the\n   group structure is used when displaying the help message.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Group",
        "fct-type": "data",
        "title": "Group"
      },
      "index": {
        "description": "group of items modes or flags The items are treated as list but the group structure is used when displaying the help message",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "Group",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#t:Help",
      "description": {
        "fct-descr": "\u003cp\u003eA help message that goes with either a flag or a mode.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "type",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Help",
        "fct-type": "type",
        "title": "Help"
      },
      "index": {
        "description": "help message that goes with either flag or mode",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "Help",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Help",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#t:HelpFormat",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the format to output the help.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Help.html#HelpFormat",
        "fct-type": "data",
        "title": "HelpFormat"
      },
      "index": {
        "description": "Specify the format to output the help",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "HelpFormat",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Help Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eA mode. Do not use the \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e constructor directly, instead\n   use \u003ccode\u003e\u003ca\u003emode\u003c/a\u003e\u003c/code\u003e to construct the \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e and then record updates.\n   Each mode has three main features:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A list of submodes (\u003ccode\u003e\u003ca\u003emodeGroupModes\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e A list of flags (\u003ccode\u003e\u003ca\u003emodeGroupFlags\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e Optionally an unnamed argument (\u003ccode\u003e\u003ca\u003emodeArgs\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo produce the help information for a mode, either use \u003ccode\u003ehelpText\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "mode Do not use the Mode constructor directly instead use mode to construct the Mode and then record updates Each mode has three main features list of submodes modeGroupModes list of flags modeGroupFlags Optionally an unnamed argument modeArgs To produce the help information for mode either use helpText or show",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "Mode",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eA name, either the name of a flag (\u003ccode\u003e--\u003cem\u003efoo\u003c/em\u003e\u003c/code\u003e) or the name of a mode.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "type",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "name either the name of flag foo or the name of mode",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "Name",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#t:Remap",
      "description": {
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "class",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Remap",
        "fct-type": "class",
        "title": "Remap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "Remap",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Remap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#t:Update",
      "description": {
        "fct-descr": "\u003cp\u003eA function to take a string, and a value, and either produce an error message\n   (\u003ccode\u003eLeft\u003c/code\u003e), or a modified value (\u003ccode\u003eRight\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "type",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Update",
        "fct-type": "type",
        "title": "Update"
      },
      "index": {
        "description": "function to take string and value and either produce an error message Left or modified value Right",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "Update",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:Arg",
      "description": {
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Arg",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Arg",
        "fct-type": "function",
        "title": "Arg"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "Arg",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:CompleteDir",
      "description": {
        "fct-descr": "\u003cp\u003eComplete to a prefix, and a directory\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "CompleteDir String FilePath",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Complete.html#Complete",
        "fct-type": "function",
        "title": "CompleteDir"
      },
      "index": {
        "description": "Complete to prefix and directory",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "CompleteDir",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Complete Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:CompleteFile",
      "description": {
        "fct-descr": "\u003cp\u003eComplete to a prefix, and a file\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "CompleteFile String FilePath",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Complete.html#Complete",
        "fct-type": "function",
        "title": "CompleteFile"
      },
      "index": {
        "description": "Complete to prefix and file",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "CompleteFile",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Complete File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:CompleteValue",
      "description": {
        "fct-descr": "\u003cp\u003eComplete to a particular value\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "CompleteValue String",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Complete.html#Complete",
        "fct-type": "function",
        "title": "CompleteValue"
      },
      "index": {
        "description": "Complete to particular value",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "CompleteValue",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Complete Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:Flag",
      "description": {
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Flag",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Flag",
        "fct-type": "function",
        "title": "Flag"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "Flag",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Flag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:FlagNone",
      "description": {
        "fct-descr": "\u003cp\u003eNo argument\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "FlagNone",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#FlagInfo",
        "fct-type": "function",
        "title": "FlagNone"
      },
      "index": {
        "description": "No argument",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "FlagNone",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Flag None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:FlagOpt",
      "description": {
        "fct-descr": "\u003cp\u003eOptional argument\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "FlagOpt String",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#FlagInfo",
        "fct-type": "function",
        "title": "FlagOpt"
      },
      "index": {
        "description": "Optional argument",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "FlagOpt",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Flag Opt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:FlagOptRare",
      "description": {
        "fct-descr": "\u003cp\u003eOptional argument that requires an = before the value\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "FlagOptRare String",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#FlagInfo",
        "fct-type": "function",
        "title": "FlagOptRare"
      },
      "index": {
        "description": "Optional argument that requires an before the value",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "FlagOptRare",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Flag Opt Rare",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:FlagReq",
      "description": {
        "fct-descr": "\u003cp\u003eRequired argument\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "FlagReq",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#FlagInfo",
        "fct-type": "function",
        "title": "FlagReq"
      },
      "index": {
        "description": "Required argument",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "FlagReq",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Flag Req",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:Group",
      "description": {
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Group",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Group",
        "fct-type": "function",
        "title": "Group"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "Group",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:HelpFormatAll",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay all modes.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "HelpFormatAll",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Help.html#HelpFormat",
        "fct-type": "function",
        "title": "HelpFormatAll"
      },
      "index": {
        "description": "Display all modes",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "HelpFormatAll",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Help Format All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:HelpFormatBash",
      "description": {
        "fct-descr": "\u003cp\u003eBash completion information\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "HelpFormatBash",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Help.html#HelpFormat",
        "fct-type": "function",
        "title": "HelpFormatBash"
      },
      "index": {
        "description": "Bash completion information",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "HelpFormatBash",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Help Format Bash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:HelpFormatDefault",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003eHelpFormatAll\u003c/a\u003e\u003c/code\u003e if there is not too much text, otherwise \u003ccode\u003e\u003ca\u003eHelpFormatOne\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "HelpFormatDefault",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Help.html#HelpFormat",
        "fct-type": "function",
        "title": "HelpFormatDefault"
      },
      "index": {
        "description": "Equivalent to HelpFormatAll if there is not too much text otherwise HelpFormatOne",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "HelpFormatDefault",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Help Format Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:HelpFormatOne",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay only the first mode.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "HelpFormatOne",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Help.html#HelpFormat",
        "fct-type": "function",
        "title": "HelpFormatOne"
      },
      "index": {
        "description": "Display only the first mode",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "HelpFormatOne",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Help Format One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:HelpFormatZsh",
      "description": {
        "fct-descr": "\u003cp\u003eZ shell completion information\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "HelpFormatZsh",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Help.html#HelpFormat",
        "fct-type": "function",
        "title": "HelpFormatZsh"
      },
      "index": {
        "description": "shell completion information",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "HelpFormatZsh",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Help Format Zsh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:Mode",
      "description": {
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Mode",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Mode",
        "fct-type": "function",
        "title": "Mode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "Mode",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:argRequire",
      "description": {
        "fct-descr": "\u003cp\u003eIs at least one of these arguments required, the command line will fail if none are set\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Bool",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Arg",
        "fct-type": "function",
        "title": "argRequire"
      },
      "index": {
        "description": "Is at least one of these arguments required the command line will fail if none are set",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "argRequire",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Require",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:argType",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of data for the argument, i.e. FILE/DIR/EXT\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "FlagHelp",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Arg",
        "fct-type": "function",
        "title": "argType"
      },
      "index": {
        "description": "The type of data for the argument i.e FILE DIR EXT",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "argType",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:argValue",
      "description": {
        "fct-descr": "\u003cp\u003eA way of processing the argument.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Update a",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Arg",
        "fct-type": "function",
        "title": "argValue"
      },
      "index": {
        "description": "way of processing the argument",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "argValue",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:checkMode",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that a mode is well formed.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Mode a -\u003e Maybe String",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#checkMode",
        "fct-type": "function",
        "title": "checkMode"
      },
      "index": {
        "description": "Check that mode is well formed",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "checkMode",
        "normalized": "Mode a-\u003eMaybe String",
        "package": "cmdargs",
        "partial": "Mode",
        "signature": "Mode a-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:complete",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a current state, return the set of commands you could type now, in preference order.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Mode a-\u003e [String]-\u003e (Int, Int)-\u003e [Complete]",
        "fct-type": "function",
        "title": "complete"
      },
      "index": {
        "description": "Given current state return the set of commands you could type now in preference order",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "complete",
        "normalized": "Mode a-\u003e[String]-\u003e(Int,Int)-\u003e[Complete]",
        "package": "cmdargs",
        "partial": "",
        "signature": "Mode a-\u003e[String]-\u003e(Int,Int)-\u003e[Complete]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:expandArgsAt",
      "description": {
        "fct-descr": "\u003cp\u003eExpand \u003ccode\u003e@\u003c/code\u003e directives in a list of arguments, usually obtained from \u003ccode\u003egetArgs\u003c/code\u003e.\n   As an example, given the file \u003ccode\u003etest.txt\u003c/code\u003e with the lines \u003ccode\u003ehello\u003c/code\u003e and \u003ccode\u003eworld\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e expandArgsAt [\"@test.txt\",\"!\"] == [\"hello\",\"world\",\"!\"]\n\u003c/pre\u003e\u003cp\u003eAny \u003ccode\u003e@\u003c/code\u003e directives in the files will be recursively expanded (raising an error\n   if there is infinite recursion).\n\u003c/p\u003e\u003cp\u003eTo supress \u003ccode\u003e@\u003c/code\u003e expansion, pass any \u003ccode\u003e@\u003c/code\u003e arguments after \u003ccode\u003e--\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "[String] -\u003e IO [String]",
        "fct-source": "src/System-Console-CmdArgs-Explicit-ExpandArgsAt.html#expandArgsAt",
        "fct-type": "function",
        "title": "expandArgsAt"
      },
      "index": {
        "description": "Expand directives in list of arguments usually obtained from getArgs As an example given the file test.txt with the lines hello and world expandArgsAt test.txt hello world Any directives in the files will be recursively expanded raising an error if there is infinite recursion To supress expansion pass any arguments after",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "expandArgsAt",
        "normalized": "[String]-\u003eIO[String]",
        "package": "cmdargs",
        "partial": "Args At",
        "signature": "[String]-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:flagArg",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an argument flag, with an update function and the type of the argument.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Update a -\u003e FlagHelp -\u003e Arg a",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#flagArg",
        "fct-type": "function",
        "title": "flagArg"
      },
      "index": {
        "description": "Create an argument flag with an update function and the type of the argument",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "flagArg",
        "normalized": "Update a-\u003eFlagHelp-\u003eArg a",
        "package": "cmdargs",
        "partial": "Arg",
        "signature": "Update a-\u003eFlagHelp-\u003eArg a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:flagBool",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a boolean flag, with a list of flag names, an update function and some help text.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "[Name] -\u003e (Bool -\u003e a -\u003e a) -\u003e Help -\u003e Flag a",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#flagBool",
        "fct-type": "function",
        "title": "flagBool"
      },
      "index": {
        "description": "Create boolean flag with list of flag names an update function and some help text",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "flagBool",
        "normalized": "[Name]-\u003e(Bool-\u003ea-\u003ea)-\u003eHelp-\u003eFlag a",
        "package": "cmdargs",
        "partial": "Bool",
        "signature": "[Name]-\u003e(Bool-\u003ea-\u003ea)-\u003eHelp-\u003eFlag a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:flagHelp",
      "description": {
        "fct-descr": "\u003cp\u003eThe help message associated with this flag.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Help",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Flag",
        "fct-type": "function",
        "title": "flagHelp"
      },
      "index": {
        "description": "The help message associated with this flag",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "flagHelp",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Help",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:flagHelpFormat",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a help flag triggered by \u003ccode\u003e-?\u003c/code\u003e/\u003ccode\u003e--help\u003c/code\u003e. The user\n   may optionally modify help by specifying the format, such as:\n\u003c/p\u003e\u003cpre\u003e --help=all          - help for all modes\n --help=html         - help in HTML format\n --help=100          - wrap the text at 100 characters\n --help=100,one      - full text wrapped at 100 characters\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "(HelpFormat -\u003e TextFormat -\u003e a -\u003e a) -\u003e Flag a",
        "fct-source": "src/System-Console-CmdArgs-Explicit.html#flagHelpFormat",
        "fct-type": "function",
        "title": "flagHelpFormat"
      },
      "index": {
        "description": "Create help flag triggered by help The user may optionally modify help by specifying the format such as help all help for all modes help html help in HTML format help wrap the text at characters help one full text wrapped at characters",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "flagHelpFormat",
        "normalized": "(HelpFormat-\u003eTextFormat-\u003ea-\u003ea)-\u003eFlag a",
        "package": "cmdargs",
        "partial": "Help Format",
        "signature": "(HelpFormat-\u003eTextFormat-\u003ea-\u003ea)-\u003eFlag a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:flagHelpSimple",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a help flag triggered by \u003ccode\u003e-?\u003c/code\u003e/\u003ccode\u003e--help\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "(a -\u003e a) -\u003e Flag a",
        "fct-source": "src/System-Console-CmdArgs-Explicit.html#flagHelpSimple",
        "fct-type": "function",
        "title": "flagHelpSimple"
      },
      "index": {
        "description": "Create help flag triggered by help",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "flagHelpSimple",
        "normalized": "(a-\u003ea)-\u003eFlag a",
        "package": "cmdargs",
        "partial": "Help Simple",
        "signature": "(a-\u003ea)-\u003eFlag a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:flagInfo",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about a flag's arguments.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "FlagInfo",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Flag",
        "fct-type": "function",
        "title": "flagInfo"
      },
      "index": {
        "description": "Information about flag arguments",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "flagInfo",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:flagNames",
      "description": {
        "fct-descr": "\u003cp\u003eThe names for the flag.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "[Name]",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Flag",
        "fct-type": "function",
        "title": "flagNames"
      },
      "index": {
        "description": "The names for the flag",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "flagNames",
        "normalized": "[Name]",
        "package": "cmdargs",
        "partial": "Names",
        "signature": "[Name]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:flagNone",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a flag taking no argument value, with a list of flag names, an update function\n   and some help text.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "[Name] -\u003e (a -\u003e a) -\u003e Help -\u003e Flag a",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#flagNone",
        "fct-type": "function",
        "title": "flagNone"
      },
      "index": {
        "description": "Create flag taking no argument value with list of flag names an update function and some help text",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "flagNone",
        "normalized": "[Name]-\u003e(a-\u003ea)-\u003eHelp-\u003eFlag a",
        "package": "cmdargs",
        "partial": "None",
        "signature": "[Name]-\u003e(a-\u003ea)-\u003eHelp-\u003eFlag a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:flagOpt",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a flag taking an optional argument value, with an optional value, a list of flag names,\n   an update function, the type of the argument and some help text.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "String -\u003e [Name] -\u003e Update a -\u003e FlagHelp -\u003e Help -\u003e Flag a",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#flagOpt",
        "fct-type": "function",
        "title": "flagOpt"
      },
      "index": {
        "description": "Create flag taking an optional argument value with an optional value list of flag names an update function the type of the argument and some help text",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "flagOpt",
        "normalized": "String-\u003e[Name]-\u003eUpdate a-\u003eFlagHelp-\u003eHelp-\u003eFlag a",
        "package": "cmdargs",
        "partial": "Opt",
        "signature": "String-\u003e[Name]-\u003eUpdate a-\u003eFlagHelp-\u003eHelp-\u003eFlag a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:flagReq",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a flag taking a required argument value, with a list of flag names,\n   an update function, the type of the argument and some help text.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "[Name] -\u003e Update a -\u003e FlagHelp -\u003e Help -\u003e Flag a",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#flagReq",
        "fct-type": "function",
        "title": "flagReq"
      },
      "index": {
        "description": "Create flag taking required argument value with list of flag names an update function the type of the argument and some help text",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "flagReq",
        "normalized": "[Name]-\u003eUpdate a-\u003eFlagHelp-\u003eHelp-\u003eFlag a",
        "package": "cmdargs",
        "partial": "Req",
        "signature": "[Name]-\u003eUpdate a-\u003eFlagHelp-\u003eHelp-\u003eFlag a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:flagType",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of data for the flag argument, i.e. FILE/DIR/EXT\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "FlagHelp",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Flag",
        "fct-type": "function",
        "title": "flagType"
      },
      "index": {
        "description": "The type of data for the flag argument i.e FILE DIR EXT",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "flagType",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:flagValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe way of processing a flag.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Update a",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Flag",
        "fct-type": "function",
        "title": "flagValue"
      },
      "index": {
        "description": "The way of processing flag",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "flagValue",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:flagVersion",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a version flag triggered by \u003ccode\u003e-V\u003c/code\u003e/\u003ccode\u003e--version\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "(a -\u003e a) -\u003e Flag a",
        "fct-source": "src/System-Console-CmdArgs-Explicit.html#flagVersion",
        "fct-type": "function",
        "title": "flagVersion"
      },
      "index": {
        "description": "Create version flag triggered by version",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "flagVersion",
        "normalized": "(a-\u003ea)-\u003eFlag a",
        "package": "cmdargs",
        "partial": "Version",
        "signature": "(a-\u003ea)-\u003eFlag a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:flagsVerbosity",
      "description": {
        "fct-descr": "\u003cp\u003eCreate verbosity flags triggered by \u003ccode\u003e-v\u003c/code\u003e/\u003ccode\u003e--verbose\u003c/code\u003e and\n   \u003ccode\u003e-q\u003c/code\u003e/\u003ccode\u003e--quiet\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "(Verbosity -\u003e a -\u003e a) -\u003e [Flag a]",
        "fct-source": "src/System-Console-CmdArgs-Explicit.html#flagsVerbosity",
        "fct-type": "function",
        "title": "flagsVerbosity"
      },
      "index": {
        "description": "Create verbosity flags triggered by verbose and quiet",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "flagsVerbosity",
        "normalized": "(Verbosity-\u003ea-\u003ea)-\u003e[Flag a]",
        "package": "cmdargs",
        "partial": "Verbosity",
        "signature": "(Verbosity-\u003ea-\u003ea)-\u003e[Flag a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:fromFlagOpt",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the value from inside a \u003ccode\u003e\u003ca\u003eFlagOpt\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFlagOptRare\u003c/a\u003e\u003c/code\u003e, or raises an error.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "FlagInfo -\u003e String",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#fromFlagOpt",
        "fct-type": "function",
        "title": "fromFlagOpt"
      },
      "index": {
        "description": "Extract the value from inside FlagOpt or FlagOptRare or raises an error",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "fromFlagOpt",
        "normalized": "FlagInfo-\u003eString",
        "package": "cmdargs",
        "partial": "Flag Opt",
        "signature": "FlagInfo-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:fromGroup",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a group into a list.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Group a -\u003e [a]",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#fromGroup",
        "fct-type": "function",
        "title": "fromGroup"
      },
      "index": {
        "description": "Convert group into list",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "fromGroup",
        "normalized": "Group a-\u003e[a]",
        "package": "cmdargs",
        "partial": "Group",
        "signature": "Group a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:groupHidden",
      "description": {
        "fct-descr": "\u003cp\u003eItems that are hidden (not displayed in the help message).\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "[a]",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Group",
        "fct-type": "function",
        "title": "groupHidden"
      },
      "index": {
        "description": "Items that are hidden not displayed in the help message",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "groupHidden",
        "normalized": "[a]",
        "package": "cmdargs",
        "partial": "Hidden",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:groupNamed",
      "description": {
        "fct-descr": "\u003cp\u003eItems that have been grouped, along with a description of each group.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "[(Help, [a])]",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Group",
        "fct-type": "function",
        "title": "groupNamed"
      },
      "index": {
        "description": "Items that have been grouped along with description of each group",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "groupNamed",
        "normalized": "[(Help,[a])]",
        "package": "cmdargs",
        "partial": "Named",
        "signature": "[(Help,[a])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:groupUnnamed",
      "description": {
        "fct-descr": "\u003cp\u003eNormal items.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "[a]",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Group",
        "fct-type": "function",
        "title": "groupUnnamed"
      },
      "index": {
        "description": "Normal items",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "groupUnnamed",
        "normalized": "[a]",
        "package": "cmdargs",
        "partial": "Unnamed",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:helpText",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a help message from a mode.  The first argument is a prefix,\n   which is prepended when not using \u003ccode\u003e\u003ca\u003eHelpFormatBash\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eHelpFormatZsh\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "[String] -\u003e HelpFormat -\u003e Mode a -\u003e [Text]",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Help.html#helpText",
        "fct-type": "function",
        "title": "helpText"
      },
      "index": {
        "description": "Generate help message from mode The first argument is prefix which is prepended when not using HelpFormatBash or HelpFormatZsh",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "helpText",
        "normalized": "[String]-\u003eHelpFormat-\u003eMode a-\u003e[Text]",
        "package": "cmdargs",
        "partial": "Text",
        "signature": "[String]-\u003eHelpFormat-\u003eMode a-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:joinArgs",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a sequence of arguments, join them together in a manner that could be used on\n   the command line, giving preference to the Windows \u003ccode\u003ecmd\u003c/code\u003e shell quoting conventions.\n\u003c/p\u003e\u003cp\u003eFor an alternative version, intended for actual running the result in a shell, see \u003ca\u003eSystem.Process.showCommandForUser\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/System-Console-CmdArgs-Explicit-SplitJoin.html#joinArgs",
        "fct-type": "function",
        "title": "joinArgs"
      },
      "index": {
        "description": "Given sequence of arguments join them together in manner that could be used on the command line giving preference to the Windows cmd shell quoting conventions For an alternative version intended for actual running the result in shell see System.Process.showCommandForUser",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "joinArgs",
        "normalized": "[String]-\u003eString",
        "package": "cmdargs",
        "partial": "Args",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:mode",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a mode with a name, an initial value, some help text, a way of processing arguments\n   and a list of flags.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Name -\u003e a -\u003e Help -\u003e Arg a -\u003e [Flag a] -\u003e Mode a",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#mode",
        "fct-type": "function",
        "title": "mode"
      },
      "index": {
        "description": "Create mode with name an initial value some help text way of processing arguments and list of flags",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "mode",
        "normalized": "Name-\u003ea-\u003eHelp-\u003eArg a-\u003e[Flag a]-\u003eMode a",
        "package": "cmdargs",
        "partial": "",
        "signature": "Name-\u003ea-\u003eHelp-\u003eArg a-\u003e[Flag a]-\u003eMode a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:modeArgs",
      "description": {
        "fct-descr": "\u003cp\u003eThe unnamed arguments, a series of arguments, followed optionally by one for all remaining slots\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "([Arg a], Maybe (Arg a))",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Mode",
        "fct-type": "function",
        "title": "modeArgs"
      },
      "index": {
        "description": "The unnamed arguments series of arguments followed optionally by one for all remaining slots",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "modeArgs",
        "normalized": "([Arg a],Maybe(Arg a))",
        "package": "cmdargs",
        "partial": "Args",
        "signature": "([Arg a],Maybe(Arg a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:modeCheck",
      "description": {
        "fct-descr": "\u003cp\u003eCheck the value reprsented by a mode is correct, after applying all flags\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "a -\u003e Either String a",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Mode",
        "fct-type": "function",
        "title": "modeCheck"
      },
      "index": {
        "description": "Check the value reprsented by mode is correct after applying all flags",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "modeCheck",
        "normalized": "a-\u003eEither String a",
        "package": "cmdargs",
        "partial": "Check",
        "signature": "a-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:modeEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an empty mode specifying only \u003ccode\u003e\u003ca\u003emodeValue\u003c/a\u003e\u003c/code\u003e. All other fields will usually be populated\n   using record updates.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "a -\u003e Mode a",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#modeEmpty",
        "fct-type": "function",
        "title": "modeEmpty"
      },
      "index": {
        "description": "Create an empty mode specifying only modeValue All other fields will usually be populated using record updates",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "modeEmpty",
        "normalized": "a-\u003eMode a",
        "package": "cmdargs",
        "partial": "Empty",
        "signature": "a-\u003eMode a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:modeExpandAt",
      "description": {
        "fct-descr": "\u003cp\u003eExpand \u003ccode\u003e@\u003c/code\u003e arguments with \u003ccode\u003eexpandArgsAt\u003c/code\u003e, defaults to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, only applied if using an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e processing function.\n   Only the root \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003es value will be used.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Bool",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Mode",
        "fct-type": "function",
        "title": "modeExpandAt"
      },
      "index": {
        "description": "Expand arguments with expandArgsAt defaults to True only applied if using an IO processing function Only the root Mode value will be used",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "modeExpandAt",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Expand At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:modeFlags",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the flags from a \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Mode a -\u003e [Flag a]",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#modeFlags",
        "fct-type": "function",
        "title": "modeFlags"
      },
      "index": {
        "description": "Extract the flags from Mode",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "modeFlags",
        "normalized": "Mode a-\u003e[Flag a]",
        "package": "cmdargs",
        "partial": "Flags",
        "signature": "Mode a-\u003e[Flag a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:modeGroupFlags",
      "description": {
        "fct-descr": "\u003cp\u003eGroups of flags\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Group (Flag a)",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Mode",
        "fct-type": "function",
        "title": "modeGroupFlags"
      },
      "index": {
        "description": "Groups of flags",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "modeGroupFlags",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Group Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:modeGroupModes",
      "description": {
        "fct-descr": "\u003cp\u003eThe available sub-modes\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Group (Mode a)",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Mode",
        "fct-type": "function",
        "title": "modeGroupModes"
      },
      "index": {
        "description": "The available sub-modes",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "modeGroupModes",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Group Modes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:modeHelp",
      "description": {
        "fct-descr": "\u003cp\u003eHelp text\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Help",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Mode",
        "fct-type": "function",
        "title": "modeHelp"
      },
      "index": {
        "description": "Help text",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "modeHelp",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Help",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:modeHelpSuffix",
      "description": {
        "fct-descr": "\u003cp\u003eA longer help suffix displayed after a mode\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "[String]",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Mode",
        "fct-type": "function",
        "title": "modeHelpSuffix"
      },
      "index": {
        "description": "longer help suffix displayed after mode",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "modeHelpSuffix",
        "normalized": "[String]",
        "package": "cmdargs",
        "partial": "Help Suffix",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:modeModes",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the modes from a \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Mode a -\u003e [Mode a]",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#modeModes",
        "fct-type": "function",
        "title": "modeModes"
      },
      "index": {
        "description": "Extract the modes from Mode",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "modeModes",
        "normalized": "Mode a-\u003e[Mode a]",
        "package": "cmdargs",
        "partial": "Modes",
        "signature": "Mode a-\u003e[Mode a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:modeNames",
      "description": {
        "fct-descr": "\u003cp\u003eThe names assigned to this mode (for the root mode, this name is used as the program name)\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "[Name]",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Mode",
        "fct-type": "function",
        "title": "modeNames"
      },
      "index": {
        "description": "The names assigned to this mode for the root mode this name is used as the program name",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "modeNames",
        "normalized": "[Name]",
        "package": "cmdargs",
        "partial": "Names",
        "signature": "[Name]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:modeReform",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a value, try to generate the input arguments.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "a -\u003e Maybe [String]",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Mode",
        "fct-type": "function",
        "title": "modeReform"
      },
      "index": {
        "description": "Given value try to generate the input arguments",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "modeReform",
        "normalized": "a-\u003eMaybe[String]",
        "package": "cmdargs",
        "partial": "Reform",
        "signature": "a-\u003eMaybe[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:modeValue",
      "description": {
        "fct-descr": "\u003cp\u003eValue to start with\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "a",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Mode",
        "fct-type": "function",
        "title": "modeValue"
      },
      "index": {
        "description": "Value to start with",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "modeValue",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:modes",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a list of modes, with a program name, an initial value, some help text and the child modes.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "String -\u003e a -\u003e Help -\u003e [Mode a] -\u003e Mode a",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#modes",
        "fct-type": "function",
        "title": "modes"
      },
      "index": {
        "description": "Create list of modes with program name an initial value some help text and the child modes",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "modes",
        "normalized": "String-\u003ea-\u003eHelp-\u003e[Mode a]-\u003eMode a",
        "package": "cmdargs",
        "partial": "",
        "signature": "String-\u003ea-\u003eHelp-\u003e[Mode a]-\u003eMode a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:parseBool",
      "description": {
        "fct-descr": "\u003cp\u003eParse a boolean, accepts as True: true yes on enabled 1. \n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "String -\u003e Maybe Bool",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#parseBool",
        "fct-type": "function",
        "title": "parseBool"
      },
      "index": {
        "description": "Parse boolean accepts as True true yes on enabled",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "parseBool",
        "normalized": "String-\u003eMaybe Bool",
        "package": "cmdargs",
        "partial": "Bool",
        "signature": "String-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:process",
      "description": {
        "fct-descr": "\u003cp\u003eProcess a list of flags (usually obtained from \u003ccode\u003egetArgs\u003c/code\u003e/\u003ccode\u003eexpandArgsAt\u003c/code\u003e) with a mode. Returns\n   \u003ccode\u003eLeft\u003c/code\u003e and an error message if the command line fails to parse, or \u003ccode\u003eRight\u003c/code\u003e and\n   the associated value.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Mode a -\u003e [String] -\u003e Either String a",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Process.html#process",
        "fct-type": "function",
        "title": "process"
      },
      "index": {
        "description": "Process list of flags usually obtained from getArgs expandArgsAt with mode Returns Left and an error message if the command line fails to parse or Right and the associated value",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "process",
        "normalized": "Mode a-\u003e[String]-\u003eEither String a",
        "package": "cmdargs",
        "partial": "",
        "signature": "Mode a-\u003e[String]-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:processArgs",
      "description": {
        "fct-descr": "\u003cp\u003eProcess the flags obtained by \u003ccode\u003e\u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eexpandArgsAt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e with a mode. Displays\n   an error and exits with failure if the command line fails to parse, or returns\n   the associated value. Implemented in terms of \u003ccode\u003e\u003ca\u003eprocess\u003c/a\u003e\u003c/code\u003e. This function makes\n   use of the following environment variables:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e$CMDARGS_COMPLETE\u003c/code\u003e - causes the program to produce completions using \u003ccode\u003e\u003ca\u003ecomplete\u003c/a\u003e\u003c/code\u003e, then exit.\n   Completions are based on the result of \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e, the index of the current argument is taken\n   from \u003ccode\u003e$CMDARGS_COMPLETE\u003c/code\u003e (set it to \u003ccode\u003e-\u003c/code\u003e to complete the last argument), and the index within\n   that argument is taken from \u003ccode\u003e$CMDARGS_COMPLETE_POS\u003c/code\u003e (if set).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e$CMDARGS_HELPER\u003c/code\u003e/\u003ccode\u003e$CMDARGS_HELPER_\u003cem\u003ePROG\u003c/em\u003e\u003c/code\u003e - uses the helper mechanism for entering command\n   line programs as described in \u003ca\u003eSystem.Console.CmdArgs.Helper\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Mode a -\u003e IO a",
        "fct-source": "src/System-Console-CmdArgs-Explicit.html#processArgs",
        "fct-type": "function",
        "title": "processArgs"
      },
      "index": {
        "description": "Process the flags obtained by getArgs and expandArgsAt with mode Displays an error and exits with failure if the command line fails to parse or returns the associated value Implemented in terms of process This function makes use of the following environment variables CMDARGS COMPLETE causes the program to produce completions using complete then exit Completions are based on the result of getArgs the index of the current argument is taken from CMDARGS COMPLETE set it to to complete the last argument and the index within that argument is taken from CMDARGS COMPLETE POS if set CMDARGS HELPER CMDARGS HELPER PROG uses the helper mechanism for entering command line programs as described in System.Console.CmdArgs.Helper",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "processArgs",
        "normalized": "Mode a-\u003eIO a",
        "package": "cmdargs",
        "partial": "Args",
        "signature": "Mode a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:processValue",
      "description": {
        "fct-descr": "\u003cp\u003eProcess a list of flags (usually obtained from \u003ccode\u003e\u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eexpandArgsAt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e) with a mode. Displays\n   an error and exits with failure if the command line fails to parse, or returns\n   the associated value. Implemeneted in terms of \u003ccode\u003e\u003ca\u003eprocess\u003c/a\u003e\u003c/code\u003e. This function\n   does not take account of any environment variables that may be set\n   (see \u003ccode\u003e\u003ca\u003eprocessArgs\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "Mode a -\u003e [String] -\u003e a",
        "fct-source": "src/System-Console-CmdArgs-Explicit.html#processValue",
        "fct-type": "function",
        "title": "processValue"
      },
      "index": {
        "description": "Process list of flags usually obtained from getArgs and expandArgsAt with mode Displays an error and exits with failure if the command line fails to parse or returns the associated value Implemeneted in terms of process This function does not take account of any environment variables that may be set see processArgs",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "processValue",
        "normalized": "Mode a-\u003e[String]-\u003ea",
        "package": "cmdargs",
        "partial": "Value",
        "signature": "Mode a-\u003e[String]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:remap",
      "description": {
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "remap",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#remap",
        "fct-type": "method",
        "title": "remap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "remap",
        "normalized": "",
        "package": "cmdargs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:remap2",
      "description": {
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e m a -\u003e m b",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#remap2",
        "fct-type": "function",
        "title": "remap2"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "remap2",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ec a-\u003ec b",
        "package": "cmdargs",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:remapUpdate",
      "description": {
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "t -\u003e (t1 -\u003e (t2, a -\u003e b)) -\u003e (t3 -\u003e t2 -\u003e f a) -\u003e t3 -\u003e t1 -\u003e f b",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#remapUpdate",
        "fct-type": "function",
        "title": "remapUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "remapUpdate",
        "normalized": "a-\u003e(a-\u003e(a,b-\u003ec))-\u003e(a-\u003ea-\u003ed b)-\u003ea-\u003ea-\u003ed c",
        "package": "cmdargs",
        "partial": "Update",
        "signature": "t-\u003e(t-\u003e(t,a-\u003eb))-\u003e(t-\u003et-\u003ef a)-\u003et-\u003et-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:splitArgs",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a string, split into the available arguments. The inverse of \u003ccode\u003e\u003ca\u003ejoinArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "String -\u003e [String]",
        "fct-source": "src/System-Console-CmdArgs-Explicit-SplitJoin.html#splitArgs",
        "fct-type": "function",
        "title": "splitArgs"
      },
      "index": {
        "description": "Given string split into the available arguments The inverse of joinArgs",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "splitArgs",
        "normalized": "String-\u003e[String]",
        "package": "cmdargs",
        "partial": "Args",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Explicit.html#v:toGroup",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list into a group, placing all fields in \u003ccode\u003e\u003ca\u003egroupUnnamed\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Explicit",
        "fct-package": "cmdargs",
        "fct-signature": "[a] -\u003e Group a",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#toGroup",
        "fct-type": "function",
        "title": "toGroup"
      },
      "index": {
        "description": "Convert list into group placing all fields in groupUnnamed",
        "hierarchy": "System Console CmdArgs Explicit",
        "module": "System.Console.CmdArgs.Explicit",
        "name": "toGroup",
        "normalized": "[a]-\u003eGroup a",
        "package": "cmdargs",
        "partial": "Group",
        "signature": "[a]-\u003eGroup a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-GetOpt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis provides a compatiblity wrapper to the \u003ccode\u003eSystem.Console.GetOpt\u003c/code\u003e module in \u003ccode\u003ebase\u003c/code\u003e.\n   That module is essentially a Haskell port of the GNU \u003ccode\u003egetopt\u003c/code\u003e library.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eChanges:\u003c/em\u003e The changes from \u003ccode\u003eGetOpt\u003c/code\u003e are listed in the documentation for each function.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.CmdArgs.GetOpt",
        "fct-package": "cmdargs",
        "fct-signature": "module",
        "fct-source": "src/System-Console-CmdArgs-GetOpt.html",
        "fct-type": "module",
        "title": "GetOpt"
      },
      "index": {
        "description": "This provides compatiblity wrapper to the System.Console.GetOpt module in base That module is essentially Haskell port of the GNU getopt library Changes The changes from GetOpt are listed in the documentation for each function",
        "hierarchy": "System Console CmdArgs GetOpt",
        "module": "System.Console.CmdArgs.GetOpt",
        "name": "GetOpt",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Get Opt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-GetOpt.html#t:ArgDescr",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes whether an option takes an argument or not, and if so\n   how the argument is injected into a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.GetOpt",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-GetOpt.html#ArgDescr",
        "fct-type": "data",
        "title": "ArgDescr"
      },
      "index": {
        "description": "Describes whether an option takes an argument or not and if so how the argument is injected into value of type",
        "hierarchy": "System Console CmdArgs GetOpt",
        "module": "System.Console.CmdArgs.GetOpt",
        "name": "ArgDescr",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Arg Descr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-GetOpt.html#t:ArgOrder",
      "description": {
        "fct-descr": "\u003cp\u003eWhat to do with options following non-options.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eChanges:\u003c/em\u003e Only \u003ccode\u003e\u003ca\u003ePermute\u003c/a\u003e\u003c/code\u003e is allowed, both \u003ccode\u003eRequireOrder\u003c/code\u003e and \u003ccode\u003eReturnInOrder\u003c/code\u003e\n   have been removed.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.GetOpt",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-GetOpt.html#ArgOrder",
        "fct-type": "data",
        "title": "ArgOrder"
      },
      "index": {
        "description": "What to do with options following non-options Changes Only Permute is allowed both RequireOrder and ReturnInOrder have been removed",
        "hierarchy": "System Console CmdArgs GetOpt",
        "module": "System.Console.CmdArgs.GetOpt",
        "name": "ArgOrder",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Arg Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-GetOpt.html#t:OptDescr",
      "description": {
        "fct-descr": "\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eOptDescr\u003c/a\u003e\u003c/code\u003e describes a single option/flag.\n\u003c/p\u003e\u003cp\u003eThe arguments to \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e list of short option characters\n\u003c/li\u003e\u003cli\u003e list of long option strings (without \u003ccode\u003e\"--\"\u003c/code\u003e, may not be 1 character long)\n\u003c/li\u003e\u003cli\u003e argument descriptor\n\u003c/li\u003e\u003cli\u003e explanation of option for userdata\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Console.CmdArgs.GetOpt",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-GetOpt.html#OptDescr",
        "fct-type": "data",
        "title": "OptDescr"
      },
      "index": {
        "description": "Each OptDescr describes single option flag The arguments to Option are list of short option characters list of long option strings without may not be character long argument descriptor explanation of option for userdata",
        "hierarchy": "System Console CmdArgs GetOpt",
        "module": "System.Console.CmdArgs.GetOpt",
        "name": "OptDescr",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Opt Descr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-GetOpt.html#v:NoArg",
      "description": {
        "fct-descr": "\u003cp\u003eno argument expected\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.GetOpt",
        "fct-package": "cmdargs",
        "fct-signature": "NoArg a",
        "fct-source": "src/System-Console-CmdArgs-GetOpt.html#ArgDescr",
        "fct-type": "function",
        "title": "NoArg"
      },
      "index": {
        "description": "no argument expected",
        "hierarchy": "System Console CmdArgs GetOpt",
        "module": "System.Console.CmdArgs.GetOpt",
        "name": "NoArg",
        "normalized": "",
        "package": "cmdargs",
        "partial": "No Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-GetOpt.html#v:OptArg",
      "description": {
        "fct-descr": "\u003cp\u003eoptional argument\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.GetOpt",
        "fct-package": "cmdargs",
        "fct-signature": "OptArg (Maybe String -\u003e a) String",
        "fct-source": "src/System-Console-CmdArgs-GetOpt.html#ArgDescr",
        "fct-type": "function",
        "title": "OptArg"
      },
      "index": {
        "description": "optional argument",
        "hierarchy": "System Console CmdArgs GetOpt",
        "module": "System.Console.CmdArgs.GetOpt",
        "name": "OptArg",
        "normalized": "OptArg(Maybe String-\u003ea)String",
        "package": "cmdargs",
        "partial": "Opt Arg",
        "signature": "OptArg(Maybe String-\u003ea)String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-GetOpt.html#v:Option",
      "description": {
        "fct-module": "System.Console.CmdArgs.GetOpt",
        "fct-package": "cmdargs",
        "fct-signature": "Option [Char] [String] (ArgDescr a) String",
        "fct-source": "src/System-Console-CmdArgs-GetOpt.html#OptDescr",
        "fct-type": "function",
        "title": "Option"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdArgs GetOpt",
        "module": "System.Console.CmdArgs.GetOpt",
        "name": "Option",
        "normalized": "Option[Char][String](ArgDescr a)String",
        "package": "cmdargs",
        "partial": "Option",
        "signature": "Option[Char][String](ArgDescr a)String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-GetOpt.html#v:Permute",
      "description": {
        "fct-module": "System.Console.CmdArgs.GetOpt",
        "fct-package": "cmdargs",
        "fct-signature": "Permute",
        "fct-source": "src/System-Console-CmdArgs-GetOpt.html#ArgOrder",
        "fct-type": "function",
        "title": "Permute"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdArgs GetOpt",
        "module": "System.Console.CmdArgs.GetOpt",
        "name": "Permute",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Permute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-GetOpt.html#v:ReqArg",
      "description": {
        "fct-descr": "\u003cp\u003eoption requires argument\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.GetOpt",
        "fct-package": "cmdargs",
        "fct-signature": "ReqArg (String -\u003e a) String",
        "fct-source": "src/System-Console-CmdArgs-GetOpt.html#ArgDescr",
        "fct-type": "function",
        "title": "ReqArg"
      },
      "index": {
        "description": "option requires argument",
        "hierarchy": "System Console CmdArgs GetOpt",
        "module": "System.Console.CmdArgs.GetOpt",
        "name": "ReqArg",
        "normalized": "ReqArg(String-\u003ea)String",
        "package": "cmdargs",
        "partial": "Req Arg",
        "signature": "ReqArg(String-\u003ea)String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-GetOpt.html#v:convert",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a help text and a list of option descriptions, generate a \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.GetOpt",
        "fct-package": "cmdargs",
        "fct-signature": "String -\u003e [OptDescr a] -\u003e Mode ([a], [String])",
        "fct-source": "src/System-Console-CmdArgs-GetOpt.html#convert",
        "fct-type": "function",
        "title": "convert"
      },
      "index": {
        "description": "Given help text and list of option descriptions generate Mode",
        "hierarchy": "System Console CmdArgs GetOpt",
        "module": "System.Console.CmdArgs.GetOpt",
        "name": "convert",
        "normalized": "String-\u003e[OptDescr a]-\u003eMode([a],[String])",
        "package": "cmdargs",
        "partial": "",
        "signature": "String-\u003e[OptDescr a]-\u003eMode([a],[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-GetOpt.html#v:getOpt",
      "description": {
        "fct-descr": "\u003cp\u003eProcess the command-line, and return the list of values that matched\n   (and those that didn't). The arguments are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The order requirements (see \u003ccode\u003e\u003ca\u003eArgOrder\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e The option descriptions (see \u003ccode\u003e\u003ca\u003eOptDescr\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e The actual command line arguments (presumably got from \n     \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egetOpt\u003c/a\u003e\u003c/code\u003e returns a triple consisting of the option arguments, a list\n   of non-options, and a list of error messages.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eChanges:\u003c/em\u003e The list of errors will contain at most one entry, and if an\n   error is present then the other two lists will be empty.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.GetOpt",
        "fct-package": "cmdargs",
        "fct-signature": "ArgOrder a -\u003e [OptDescr a] -\u003e [String] -\u003e ([a], [String], [String])",
        "fct-source": "src/System-Console-CmdArgs-GetOpt.html#getOpt",
        "fct-type": "function",
        "title": "getOpt"
      },
      "index": {
        "description": "Process the command-line and return the list of values that matched and those that didn The arguments are The order requirements see ArgOrder The option descriptions see OptDescr The actual command line arguments presumably got from getArgs getOpt returns triple consisting of the option arguments list of non-options and list of error messages Changes The list of errors will contain at most one entry and if an error is present then the other two lists will be empty",
        "hierarchy": "System Console CmdArgs GetOpt",
        "module": "System.Console.CmdArgs.GetOpt",
        "name": "getOpt",
        "normalized": "ArgOrder a-\u003e[OptDescr a]-\u003e[String]-\u003e([a],[String],[String])",
        "package": "cmdargs",
        "partial": "Opt",
        "signature": "ArgOrder a-\u003e[OptDescr a]-\u003e[String]-\u003e([a],[String],[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-GetOpt.html#v:getOpt-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eChanges:\u003c/em\u003e This is exactly the same as \u003ccode\u003e\u003ca\u003egetOpt\u003c/a\u003e\u003c/code\u003e, but the 3rd element of the\n   tuple (second last) will be an empty list.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.GetOpt",
        "fct-package": "cmdargs",
        "fct-signature": "ArgOrder a -\u003e [OptDescr a] -\u003e [String] -\u003e ([a], [String], [String], [String])",
        "fct-source": "src/System-Console-CmdArgs-GetOpt.html#getOpt%27",
        "fct-type": "function",
        "title": "getOpt'"
      },
      "index": {
        "description": "Changes This is exactly the same as getOpt but the rd element of the tuple second last will be an empty list",
        "hierarchy": "System Console CmdArgs GetOpt",
        "module": "System.Console.CmdArgs.GetOpt",
        "name": "getOpt'",
        "normalized": "ArgOrder a-\u003e[OptDescr a]-\u003e[String]-\u003e([a],[String],[String],[String])",
        "package": "cmdargs",
        "partial": "Opt'",
        "signature": "ArgOrder a-\u003e[OptDescr a]-\u003e[String]-\u003e([a],[String],[String],[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-GetOpt.html#v:usageInfo",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a string describing the usage of a command, derived from\n   the header (first argument) and the options described by the \n   second argument.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.GetOpt",
        "fct-package": "cmdargs",
        "fct-signature": "String -\u003e [OptDescr a] -\u003e String",
        "fct-source": "src/System-Console-CmdArgs-GetOpt.html#usageInfo",
        "fct-type": "function",
        "title": "usageInfo"
      },
      "index": {
        "description": "Return string describing the usage of command derived from the header first argument and the options described by the second argument",
        "hierarchy": "System Console CmdArgs GetOpt",
        "module": "System.Console.CmdArgs.GetOpt",
        "name": "usageInfo",
        "normalized": "String-\u003e[OptDescr a]-\u003eString",
        "package": "cmdargs",
        "partial": "Info",
        "signature": "String-\u003e[OptDescr a]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Helper.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for implementing CmdArgs helpers. A CmdArgs helper is an external program,\n   that helps a user construct the command line arguments. To use a helper set the\n   environment variable \u003ccode\u003e$CMDARGS_HELPER\u003c/code\u003e (or \u003ccode\u003e$CMDARGS_HELPER_\u003cem\u003eYOURPROGRAM\u003c/em\u003e\u003c/code\u003e) to\n   one of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eecho \u003cem\u003efoo\u003c/em\u003e\u003c/code\u003e will cause \u003ccode\u003e\u003cem\u003efoo\u003c/em\u003e\u003c/code\u003e to be used as the command arguments.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ecmdargs-browser\u003c/code\u003e will cause a web browser to appear to help entering the arguments.\n   For this command to work, you will need to install the \u003ccode\u003ecmdargs-browser\u003c/code\u003e package:\n   \u003ca\u003ehttp://hackage.haskell.org/package/cmdargs-browser\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "System.Console.CmdArgs.Helper",
        "fct-package": "cmdargs",
        "fct-signature": "module",
        "fct-source": "src/System-Console-CmdArgs-Helper.html",
        "fct-type": "module",
        "title": "Helper"
      },
      "index": {
        "description": "Module for implementing CmdArgs helpers CmdArgs helper is an external program that helps user construct the command line arguments To use helper set the environment variable CMDARGS HELPER or CMDARGS HELPER YOURPROGRAM to one of echo foo will cause foo to be used as the command arguments cmdargs-browser will cause web browser to appear to help entering the arguments For this command to work you will need to install the cmdargs-browser package http hackage.haskell.org package cmdargs-browser",
        "hierarchy": "System Console CmdArgs Helper",
        "module": "System.Console.CmdArgs.Helper",
        "name": "Helper",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Helper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Helper.html#t:Unknown",
      "description": {
        "fct-descr": "\u003cp\u003eUnknown value, representing the values stored within the \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e structure. While the values\n   are not observable, they behave identically to the original values.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Helper",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Helper.html#Unknown",
        "fct-type": "data",
        "title": "Unknown"
      },
      "index": {
        "description": "Unknown value representing the values stored within the Mode structure While the values are not observable they behave identically to the original values",
        "hierarchy": "System Console CmdArgs Helper",
        "module": "System.Console.CmdArgs.Helper",
        "name": "Unknown",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Helper.html#v:comment",
      "description": {
        "fct-descr": "\u003cp\u003eSend a comment which will be displayed on the calling console, mainly useful for debugging.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Helper",
        "fct-package": "cmdargs",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-CmdArgs-Helper.html#comment",
        "fct-type": "function",
        "title": "comment"
      },
      "index": {
        "description": "Send comment which will be displayed on the calling console mainly useful for debugging",
        "hierarchy": "System Console CmdArgs Helper",
        "module": "System.Console.CmdArgs.Helper",
        "name": "comment",
        "normalized": "String-\u003eIO()",
        "package": "cmdargs",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Helper.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eRun a remote command line entry.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Helper",
        "fct-package": "cmdargs",
        "fct-signature": "String-\u003e Mode a-\u003e [String]-\u003e IO (Either String [String])",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Run remote command line entry",
        "hierarchy": "System Console CmdArgs Helper",
        "module": "System.Console.CmdArgs.Helper",
        "name": "execute",
        "normalized": "String-\u003eMode a-\u003e[String]-\u003eIO(Either String[String])",
        "package": "cmdargs",
        "partial": "",
        "signature": "String-\u003eMode a-\u003e[String]-\u003eIO(Either String[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Helper.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReceive information about the mode to display.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Helper",
        "fct-package": "cmdargs",
        "fct-signature": "IO (Mode Unknown)",
        "fct-source": "src/System-Console-CmdArgs-Helper.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Receive information about the mode to display",
        "hierarchy": "System Console CmdArgs Helper",
        "module": "System.Console.CmdArgs.Helper",
        "name": "receive",
        "normalized": "",
        "package": "cmdargs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Helper.html#v:reply",
      "description": {
        "fct-descr": "\u003cp\u003eSend a reply with either an error, or a list of flags to use. This function exits the helper program.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Helper",
        "fct-package": "cmdargs",
        "fct-signature": "Either String [String] -\u003e IO ()",
        "fct-source": "src/System-Console-CmdArgs-Helper.html#reply",
        "fct-type": "function",
        "title": "reply"
      },
      "index": {
        "description": "Send reply with either an error or list of flags to use This function exits the helper program",
        "hierarchy": "System Console CmdArgs Helper",
        "module": "System.Console.CmdArgs.Helper",
        "name": "reply",
        "normalized": "Either String[String]-\u003eIO()",
        "package": "cmdargs",
        "partial": "",
        "signature": "Either String[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides simple command line argument processing.\n    The main function of interest is \u003ccode\u003e\u003ca\u003ecmdArgs\u003c/a\u003e\u003c/code\u003e.\n    A simple example is:\n\u003c/p\u003e\u003cpre\u003edata Sample = Sample {hello :: String} deriving (Show, Data, Typeable)\u003c/pre\u003e\u003cpre\u003e\nsample = Sample{hello = \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e&=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ehelp\u003c/a\u003e\u003c/code\u003e \"World argument\" \u003ccode\u003e\u003ca\u003e&=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eopt\u003c/a\u003e\u003c/code\u003e \"world\"}\n         \u003ccode\u003e\u003ca\u003e&=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esummary\u003c/a\u003e\u003c/code\u003e \"Sample v1\"\n\u003c/pre\u003e\u003cpre\u003emain = print =\u003c\u003c \u003ccode\u003e\u003ca\u003ecmdArgs\u003c/a\u003e\u003c/code\u003e sample\u003c/pre\u003e\u003cp\u003eAttributes are used to control a number of behaviours:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The help message: \u003ccode\u003e\u003ca\u003ehelp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etyp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edetails\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esummary\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprogram\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egroupname\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Flag behaviour: \u003ccode\u003e\u003ca\u003eopt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eenum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003everbosity\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eignore\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Flag name assignment: \u003ccode\u003e\u003ca\u003ename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexplicit\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Controlling non-flag arguments: \u003ccode\u003e\u003ca\u003eargs\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eargPos\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e multi-mode programs: \u003ccode\u003e\u003ca\u003emodes\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eauto\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eSupported Types\u003c/em\u003e: Each field in the record must be one of the supported\n    atomic types (\u003ccode\u003eString\u003c/code\u003e, \u003ccode\u003eInt\u003c/code\u003e, \u003ccode\u003eInteger\u003c/code\u003e, \u003ccode\u003eFloat\u003c/code\u003e, \u003ccode\u003eDouble\u003c/code\u003e, \u003ccode\u003eBool\u003c/code\u003e, an\n    enumeration, a tuple of atomic types) or a list (\u003ccode\u003e[]\u003c/code\u003e) or \u003ccode\u003eMaybe\u003c/code\u003e wrapping\n    at atomic type.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eMissing Fields\u003c/em\u003e: If a field is shared by multiple modes, it may be omitted\n    in subsequent modes, and will default to the previous value.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ePurity\u003c/em\u003e: Values created with annotations are not pure - the first\n    time they are computed they will include the annotations, but subsequently\n    they will not. If you wish to run the above example in a more robust way:\n\u003c/p\u003e\u003cpre\u003esample = \u003ccode\u003e\u003ca\u003ecmdArgsMode\u003c/a\u003e\u003c/code\u003e $ Sample{hello = ... -- as before\u003c/pre\u003e\u003cpre\u003emain = print =\u003c\u003c \u003ccode\u003e\u003ca\u003ecmdArgsRun\u003c/a\u003e\u003c/code\u003e sample\u003c/pre\u003e\u003cp\u003eEven using this scheme, sometimes GHC's optimisations may share values who\n    have the same annotation. To disable sharing you may need to specify\n    \u003ccode\u003e{-# OPTIONS_GHC -fno-cse #-}\u003c/code\u003e in the module you define the flags.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ePure annotations\u003c/em\u003e: Alternatively, you may use pure annotations, which are\n    referentially transparent, but less type safe and more verbose. The initial\n    example may be written as:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003esample = \u003ccode\u003e\u003ca\u003erecord\u003c/a\u003e\u003c/code\u003e Sample{} [hello := \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ehelp\u003c/a\u003e\u003c/code\u003e \"World argument\" \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eopt\u003c/a\u003e\u003c/code\u003e \"world\"]\u003c/code\u003e\n    \u003ccode\u003e         \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esummary\u003c/a\u003e\u003c/code\u003e \"Sample v1\"\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003emain = print =\u003c\u003c (cmdArgs_ sample :: IO Sample)\u003c/pre\u003e\u003cp\u003eAll the examples are written using impure annotations. To convert to pure\n    annotations follow the rules:\n\u003c/p\u003e\u003cpre\u003e Ctor {field1 = value1 &= ann1, field2 = value2} &= ann2 ==\u003e record Ctor{} [field1 := value1 += ann1, field2 := value2] += ann2\n Ctor (value1 &= ann1) value2 &= ann2 ==\u003e record Ctor{} [atom value1 += ann1, atom value2] += ann2\n modes [Ctor1{...}, Ctor2{...}] ==\u003e modes_ [record Ctor1{} [...], record Ctor2{} [...]]\n Ctor {field1 = enum [X &= ann, Y]} ==\u003e record Ctor{} [enum_ field1 [atom X += ann, atom Y]]\n\u003c/pre\u003e\u003cp\u003eIf you are willing to use TemplateHaskell, you can write in the impure syntax,\n    but have your code automatically translated to the pure style. For more details see\n    \u003ca\u003eSystem.Console.CmdArgs.Quote\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "module",
        "fct-source": "src/System-Console-CmdArgs-Implicit.html",
        "fct-type": "module",
        "title": "Implicit"
      },
      "index": {
        "description": "This module provides simple command line argument processing The main function of interest is cmdArgs simple example is data Sample Sample hello String deriving Show Data Typeable sample Sample hello def help World argument opt world summary Sample v1 main print cmdArgs sample Attributes are used to control number of behaviours The help message help typ details summary program groupname Flag behaviour opt enum verbosity ignore Flag name assignment name explicit Controlling non-flag arguments args argPos multi-mode programs modes auto Supported Types Each field in the record must be one of the supported atomic types String Int Integer Float Double Bool an enumeration tuple of atomic types or list or Maybe wrapping at atomic type Missing Fields If field is shared by multiple modes it may be omitted in subsequent modes and will default to the previous value Purity Values created with annotations are not pure the first time they are computed they will include the annotations but subsequently they will not If you wish to run the above example in more robust way sample cmdArgsMode Sample hello as before main print cmdArgsRun sample Even using this scheme sometimes GHC optimisations may share values who have the same annotation To disable sharing you may need to specify OPTIONS GHC fno-cse in the module you define the flags Pure annotations Alternatively you may use pure annotations which are referentially transparent but less type safe and more verbose The initial example may be written as sample record Sample hello def help World argument opt world summary Sample v1 main print cmdArgs sample IO Sample All the examples are written using impure annotations To convert to pure annotations follow the rules Ctor field1 value1 ann1 field2 value2 ann2 record Ctor field1 value1 ann1 field2 value2 ann2 Ctor value1 ann1 value2 ann2 record Ctor atom value1 ann1 atom value2 ann2 modes Ctor1 Ctor2 modes record Ctor1 record Ctor2 Ctor field1 enum ann record Ctor enum field1 atom ann atom If you are willing to use TemplateHaskell you can write in the impure syntax but have your code automatically translated to the pure style For more details see System.Console.CmdArgs.Quote",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "Implicit",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Implicit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#t:Ann",
      "description": {
        "fct-descr": "\u003cp\u003eThe general type of annotations that can be associated with a value.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Implicit-Ann.html#Ann",
        "fct-type": "data",
        "title": "Ann"
      },
      "index": {
        "description": "The general type of annotations that can be associated with value",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "Ann",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Ann",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#t:Annotate",
      "description": {
        "fct-descr": "\u003cp\u003eThis type represents an annotated value. The type of the underlying value is not specified.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#Annotate",
        "fct-type": "data",
        "title": "Annotate"
      },
      "index": {
        "description": "This type represents an annotated value The type of the underlying value is not specified",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "Annotate",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Annotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#t:CmdArgs",
      "description": {
        "fct-descr": "\u003cp\u003eA structure to store the additional data relating to \u003ccode\u003e--help\u003c/code\u003e,\n   \u003ccode\u003e--version\u003c/code\u003e, \u003ccode\u003e--quiet\u003c/code\u003e and \u003ccode\u003e--verbose\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Implicit-Type.html#CmdArgs",
        "fct-type": "data",
        "title": "CmdArgs"
      },
      "index": {
        "description": "structure to store the additional data relating to help version quiet and verbose",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "CmdArgs",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Cmd Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#t:Data",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class comprehends a fundamental primitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e for\nfolding over constructor applications, say terms. This primitive can\nbe instantiated in several ways to map over the immediate subterms\nof a term; see the \u003ccode\u003egmap\u003c/code\u003e combinators later in this class.  Indeed, a\ngeneric programmer does not necessarily need to use the ingenious gfoldl\nprimitive but rather the intuitive \u003ccode\u003egmap\u003c/code\u003e combinators.  The \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e\nprimitive is completed by means to query top-level constructors, to\nturn constructor representations into proper terms, and to list all\npossible datatype constructors.  This completion allows us to serve\ngeneric programming scenarios like read, show, equality, term generation.\n\u003c/p\u003e\u003cp\u003eThe combinators \u003ccode\u003e\u003ca\u003egmapT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapQ\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapM\u003c/a\u003e\u003c/code\u003e, etc are all provided with\ndefault definitions in terms of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e, leaving open the opportunity\nto provide datatype-specific definitions.\n(The inclusion of the \u003ccode\u003egmap\u003c/code\u003e combinators as members of class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e\nallows the programmer or the compiler to derive specialised, and maybe\nmore efficient code per datatype.  \u003cem\u003eNote\u003c/em\u003e: \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is more higher-order\nthan the \u003ccode\u003egmap\u003c/code\u003e combinators.  This is subject to ongoing benchmarking\nexperiments.  It might turn out that the \u003ccode\u003egmap\u003c/code\u003e combinators will be\nmoved out of the class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eConceptually, the definition of the \u003ccode\u003egmap\u003c/code\u003e combinators in terms of the\nprimitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e requires the identification of the \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e function\narguments.  Technically, we also need to identify the type constructor\n\u003ccode\u003ec\u003c/code\u003e for the construction of the result type from the folded term type.\n\u003c/p\u003e\u003cp\u003eIn the definition of \u003ccode\u003egmapQ\u003c/code\u003e\u003cem\u003ex\u003c/em\u003e combinators, we use phantom type\nconstructors for the \u003ccode\u003ec\u003c/code\u003e in the type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e because the result type\nof a query does not involve the (polymorphic) type of the term argument.\nIn the definition of \u003ccode\u003e\u003ca\u003egmapQl\u003c/a\u003e\u003c/code\u003e we simply use the plain constant type\nconstructor because \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is left-associative anyway and so it is\nreadily suited to fold a left-associative binary operation over the\nimmediate subterms.  In the definition of gmapQr, extra effort is\nneeded. We use a higher-order accumulation trick to mediate between\nleft-associative constructor application vs. right-associative binary\noperation (e.g., \u003ccode\u003e(:)\u003c/code\u003e).  When the query is meant to compute a value\nof type \u003ccode\u003er\u003c/code\u003e, then the result type withing generic folding is \u003ccode\u003er -\u003e r\u003c/code\u003e.\nSo the result of folding is a function to which we finally pass the\nright unit.\n\u003c/p\u003e\u003cp\u003eWith the \u003ccode\u003e-XDeriveDataTypeable\u003c/code\u003e option, GHC can generate instances of the\n\u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class automatically.  For example, given the declaration\n\u003c/p\u003e\u003cpre\u003e data T a b = C1 a b | C2 deriving (Typeable, Data)\n\u003c/pre\u003e\u003cp\u003eGHC will generate an instance that is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Data a, Data b) =\u003e Data (T a b) where\n     gfoldl k z (C1 a b) = z C1 `k` a `k` b\n     gfoldl k z C2       = z C2\n\n     gunfold k z c = case constrIndex c of\n                         1 -\u003e k (k (z C1))\n                         2 -\u003e z C2\n\n     toConstr (C1 _ _) = con_C1\n     toConstr C2       = con_C2\n\n     dataTypeOf _ = ty_T\n\n con_C1 = mkConstr ty_T \"C1\" [] Prefix\n con_C2 = mkConstr ty_T \"C2\" [] Prefix\n ty_T   = mkDataType \"Module.T\" [con_C1, con_C2]\n\u003c/pre\u003e\u003cp\u003eThis is suitable for datatypes that are exported transparently.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Data"
      },
      "index": {
        "description": "The Data class comprehends fundamental primitive gfoldl for folding over constructor applications say terms This primitive can be instantiated in several ways to map over the immediate subterms of term see the gmap combinators later in this class Indeed generic programmer does not necessarily need to use the ingenious gfoldl primitive but rather the intuitive gmap combinators The gfoldl primitive is completed by means to query top-level constructors to turn constructor representations into proper terms and to list all possible datatype constructors This completion allows us to serve generic programming scenarios like read show equality term generation The combinators gmapT gmapQ gmapM etc are all provided with default definitions in terms of gfoldl leaving open the opportunity to provide datatype-specific definitions The inclusion of the gmap combinators as members of class Data allows the programmer or the compiler to derive specialised and maybe more efficient code per datatype Note gfoldl is more higher-order than the gmap combinators This is subject to ongoing benchmarking experiments It might turn out that the gmap combinators will be moved out of the class Data Conceptually the definition of the gmap combinators in terms of the primitive gfoldl requires the identification of the gfoldl function arguments Technically we also need to identify the type constructor for the construction of the result type from the folded term type In the definition of gmapQ combinators we use phantom type constructors for the in the type of gfoldl because the result type of query does not involve the polymorphic type of the term argument In the definition of gmapQl we simply use the plain constant type constructor because gfoldl is left-associative anyway and so it is readily suited to fold left-associative binary operation over the immediate subterms In the definition of gmapQr extra effort is needed We use higher-order accumulation trick to mediate between left-associative constructor application vs right-associative binary operation e.g When the query is meant to compute value of type then the result type withing generic folding is So the result of folding is function to which we finally pass the right unit With the XDeriveDataTypeable option GHC can generate instances of the Data class automatically For example given the declaration data C1 C2 deriving Typeable Data GHC will generate an instance that is equivalent to instance Data Data Data where gfoldl C1 C1 gfoldl C2 C2 gunfold case constrIndex of C1 C2 toConstr C1 con C1 toConstr C2 con C2 dataTypeOf ty con C1 mkConstr ty C1 Prefix con C2 mkConstr ty C2 Prefix ty mkDataType Module.T con C1 con C2 This is suitable for datatypes that are exported transparently",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "Data",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eA mode. Do not use the \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e constructor directly, instead\n   use \u003ccode\u003e\u003ca\u003emode\u003c/a\u003e\u003c/code\u003e to construct the \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e and then record updates.\n   Each mode has three main features:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A list of submodes (\u003ccode\u003e\u003ca\u003emodeGroupModes\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e A list of flags (\u003ccode\u003e\u003ca\u003emodeGroupFlags\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e Optionally an unnamed argument (\u003ccode\u003e\u003ca\u003emodeArgs\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo produce the help information for a mode, either use \u003ccode\u003ehelpText\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Explicit-Type.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "mode Do not use the Mode constructor directly instead use mode to construct the Mode and then record updates Each mode has three main features list of submodes modeGroupModes list of flags modeGroupFlags Optionally an unnamed argument modeArgs To produce the help information for mode either use helpText or show",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "Mode",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#t:Typeable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Typeable"
      },
      "index": {
        "description": "The class Typeable allows concrete representation of type to be calculated",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "Typeable",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Typeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:-38--61-",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an annotation to a value. Note that if the value is evaluated\n   more than once the annotation will only be available the first time.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "val -\u003e Ann -\u003e val",
        "fct-source": "src/System-Console-CmdArgs-Implicit.html#%26%3D",
        "fct-type": "function",
        "title": "(&=)"
      },
      "index": {
        "description": "Add an annotation to value Note that if the value is evaluated more than once the annotation will only be available the first time",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "(&=) &=",
        "normalized": "a-\u003eAnn-\u003ea",
        "package": "cmdargs",
        "partial": "",
        "signature": "val-\u003eAnn-\u003eval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:-43--61-",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an annotation to a value.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Annotate ann -\u003e ann -\u003e Annotate ann",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#%2B%3D",
        "fct-type": "function",
        "title": "(+=)"
      },
      "index": {
        "description": "Add an annotation to value",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "(+=) +=",
        "normalized": "Annotate a-\u003ea-\u003eAnnotate a",
        "package": "cmdargs",
        "partial": "",
        "signature": "Annotate ann-\u003eann-\u003eAnnotate ann"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v::-61-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a field, \u003ccode\u003efieldname := value\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "(c -\u003e f) := f",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#Annotate",
        "fct-type": "function",
        "title": ":="
      },
      "index": {
        "description": "Construct field fieldname value",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": ":=",
        "normalized": "(a-\u003eb)b",
        "package": "cmdargs",
        "partial": "",
        "signature": "(c-\u003ef)f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:CmdArgs",
      "description": {
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "CmdArgs",
        "fct-source": "src/System-Console-CmdArgs-Implicit-Type.html#CmdArgs",
        "fct-type": "function",
        "title": "CmdArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "CmdArgs",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Cmd Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:argPos",
      "description": {
        "fct-descr": "\u003cp\u003eFlag: \"Put the nth non-flag argument here.\"\n\u003c/p\u003e\u003cp\u003eThis field should be used to store a particular argument position\n   (0-based).\n\u003c/p\u003e\u003cpre\u003e {hello = def &= argPos 0}\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Int -\u003e Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#argPos",
        "fct-type": "function",
        "title": "argPos"
      },
      "index": {
        "description": "Flag Put the nth non-flag argument here This field should be used to store particular argument position based hello def argPos",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "argPos",
        "normalized": "Int-\u003eAnn",
        "package": "cmdargs",
        "partial": "Pos",
        "signature": "Int-\u003eAnn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:args",
      "description": {
        "fct-descr": "\u003cp\u003eFlag: \"Put non-flag arguments here.\"\n\u003c/p\u003e\u003cp\u003eAll argument flags not captured by \u003ccode\u003e\u003ca\u003eargPos\u003c/a\u003e\u003c/code\u003e are returned by \u003ccode\u003e\u003ca\u003eargs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e {hello = def &= args}\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#args",
        "fct-type": "function",
        "title": "args"
      },
      "index": {
        "description": "Flag Put non-flag arguments here All argument flags not captured by argPos are returned by args hello def args",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "args",
        "normalized": "",
        "package": "cmdargs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:atom",
      "description": {
        "fct-descr": "\u003cp\u003eLift a pure value to an annotation.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "val -\u003e Annotate ann",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#atom",
        "fct-type": "function",
        "title": "atom"
      },
      "index": {
        "description": "Lift pure value to an annotation",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "atom",
        "normalized": "a-\u003eAnnotate b",
        "package": "cmdargs",
        "partial": "",
        "signature": "val-\u003eAnnotate ann"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:auto",
      "description": {
        "fct-descr": "\u003cp\u003eMode: \"If the user doesn't give a mode, use this one.\"\n\u003c/p\u003e\u003cp\u003eThis mode is the default. If no mode is specified and a mode has this\n   attribute then that mode is selected, otherwise an error is raised.\n\u003c/p\u003e\u003cpre\u003e modes [Mode1{..}, Mode2{..} &= auto, Mode3{..}]\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#auto",
        "fct-type": "function",
        "title": "auto"
      },
      "index": {
        "description": "Mode If the user doesn give mode use this one This mode is the default If no mode is specified and mode has this attribute then that mode is selected otherwise an error is raised modes Mode1 Mode2 auto Mode3",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "auto",
        "normalized": "",
        "package": "cmdargs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:cmdArgs",
      "description": {
        "fct-descr": "\u003cp\u003eTake impurely annotated records and run the corresponding command line.\n   Shortcut for \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecmdArgsRun\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ecmdArgsMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo use \u003ccode\u003e\u003ca\u003ecmdArgs\u003c/a\u003e\u003c/code\u003e with custom command line arguments see\n   \u003ccode\u003e\u003ca\u003ewithArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "a -\u003e IO a",
        "fct-source": "src/System-Console-CmdArgs-Implicit.html#cmdArgs",
        "fct-type": "function",
        "title": "cmdArgs"
      },
      "index": {
        "description": "Take impurely annotated records and run the corresponding command line Shortcut for cmdArgsRun cmdArgsMode To use cmdArgs with custom command line arguments see withArgs",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "cmdArgs",
        "normalized": "a-\u003eIO a",
        "package": "cmdargs",
        "partial": "Args",
        "signature": "a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:cmdArgsApply",
      "description": {
        "fct-descr": "\u003cp\u003ePerform the necessary actions dictated by a \u003ccode\u003e\u003ca\u003eCmdArgs\u003c/a\u003e\u003c/code\u003e structure.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003e\u003ca\u003ecmdArgsHelp\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003eJust\u003c/code\u003e, it will display the help message and exit.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003e\u003ca\u003ecmdArgsVersion\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003eJust\u003c/code\u003e, it will display the version and exit.\n\u003c/li\u003e\u003cli\u003e In all other circumstances it will return a value.\n\u003c/li\u003e\u003cli\u003e Additionally, if \u003ccode\u003e\u003ca\u003ecmdArgsVerbosity\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003eJust\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003everbosity\u003c/a\u003e\u003c/code\u003e)\n     it will set the verbosity (see \u003ccode\u003e\u003ca\u003esetVerbosity\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "CmdArgs a -\u003e IO a",
        "fct-source": "src/System-Console-CmdArgs-Implicit.html#cmdArgsApply",
        "fct-type": "function",
        "title": "cmdArgsApply"
      },
      "index": {
        "description": "Perform the necessary actions dictated by CmdArgs structure If cmdArgsHelp is Just it will display the help message and exit If cmdArgsVersion is Just it will display the version and exit In all other circumstances it will return value Additionally if cmdArgsVerbosity is Just see verbosity it will set the verbosity see setVerbosity",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "cmdArgsApply",
        "normalized": "CmdArgs a-\u003eIO a",
        "package": "cmdargs",
        "partial": "Args Apply",
        "signature": "CmdArgs a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:cmdArgsHelp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eJust\u003c/code\u003e if \u003ccode\u003e--help\u003c/code\u003e is given, then gives the help message for display, including a trailing newline.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Maybe String",
        "fct-source": "src/System-Console-CmdArgs-Implicit-Type.html#CmdArgs",
        "fct-type": "function",
        "title": "cmdArgsHelp"
      },
      "index": {
        "description": "Just if help is given then gives the help message for display including trailing newline",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "cmdArgsHelp",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Args Help",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:cmdArgsMode",
      "description": {
        "fct-descr": "\u003cp\u003eTake impurely annotated records and turn them in to a \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e value, that can\n   make use of the \u003ca\u003eSystem.Console.CmdArgs.Explicit\u003c/a\u003e functions (i.e. \u003ccode\u003eprocess\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eAnnotated records are impure, and will only contain annotations on\n   their first use. The result of this function is pure, and can be reused.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "a -\u003e Mode (CmdArgs a)",
        "fct-source": "src/System-Console-CmdArgs-Implicit.html#cmdArgsMode",
        "fct-type": "function",
        "title": "cmdArgsMode"
      },
      "index": {
        "description": "Take impurely annotated records and turn them in to Mode value that can make use of the System.Console.CmdArgs.Explicit functions i.e process Annotated records are impure and will only contain annotations on their first use The result of this function is pure and can be reused",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "cmdArgsMode",
        "normalized": "a-\u003eMode(CmdArgs a)",
        "package": "cmdargs",
        "partial": "Args Mode",
        "signature": "a-\u003eMode(CmdArgs a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:cmdArgsMode_",
      "description": {
        "fct-descr": "\u003cp\u003eTake purely annotated records and turn them in to a \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e value, that can\n   make use of the \u003ca\u003eSystem.Console.CmdArgs.Explicit\u003c/a\u003e functions (i.e. \u003ccode\u003eprocess\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Annotate Ann -\u003e Mode (CmdArgs a)",
        "fct-source": "src/System-Console-CmdArgs-Implicit.html#cmdArgsMode_",
        "fct-type": "function",
        "title": "cmdArgsMode_"
      },
      "index": {
        "description": "Take purely annotated records and turn them in to Mode value that can make use of the System.Console.CmdArgs.Explicit functions i.e process",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "cmdArgsMode_",
        "normalized": "Annotate Ann-\u003eMode(CmdArgs a)",
        "package": "cmdargs",
        "partial": "Args Mode",
        "signature": "Annotate Ann-\u003eMode(CmdArgs a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:cmdArgsPrivate",
      "description": {
        "fct-descr": "\u003cp\u003ePrivate: Only exported due to Haddock limitations.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "CmdArgsPrivate",
        "fct-source": "src/System-Console-CmdArgs-Implicit-Type.html#CmdArgs",
        "fct-type": "function",
        "title": "cmdArgsPrivate"
      },
      "index": {
        "description": "Private Only exported due to Haddock limitations",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "cmdArgsPrivate",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Args Private",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:cmdArgsRun",
      "description": {
        "fct-descr": "\u003cp\u003eRun a Mode structure. This function reads the command line arguments\n   and then performs as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If invalid arguments are given, it will display the error message\n     and exit.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003e--help\u003c/code\u003e is given, it will display the help message and exit.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003e--version\u003c/code\u003e is given, it will display the version and exit.\n\u003c/li\u003e\u003cli\u003e In all other circumstances the program will return a value.\n\u003c/li\u003e\u003cli\u003e Additionally, if either \u003ccode\u003e--quiet\u003c/code\u003e or \u003ccode\u003e--verbose\u003c/code\u003e is given (see \u003ccode\u003e\u003ca\u003everbosity\u003c/a\u003e\u003c/code\u003e)\n     it will set the verbosity (see \u003ccode\u003e\u003ca\u003esetVerbosity\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Mode (CmdArgs a) -\u003e IO a",
        "fct-source": "src/System-Console-CmdArgs-Implicit.html#cmdArgsRun",
        "fct-type": "function",
        "title": "cmdArgsRun"
      },
      "index": {
        "description": "Run Mode structure This function reads the command line arguments and then performs as follows If invalid arguments are given it will display the error message and exit If help is given it will display the help message and exit If version is given it will display the version and exit In all other circumstances the program will return value Additionally if either quiet or verbose is given see verbosity it will set the verbosity see setVerbosity",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "cmdArgsRun",
        "normalized": "Mode(CmdArgs a)-\u003eIO a",
        "package": "cmdargs",
        "partial": "Args Run",
        "signature": "Mode(CmdArgs a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:cmdArgsValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe underlying value being wrapped.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "a",
        "fct-source": "src/System-Console-CmdArgs-Implicit-Type.html#CmdArgs",
        "fct-type": "function",
        "title": "cmdArgsValue"
      },
      "index": {
        "description": "The underlying value being wrapped",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "cmdArgsValue",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Args Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:cmdArgsVerbosity",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eJust\u003c/code\u003e if \u003ccode\u003e--quiet\u003c/code\u003e or \u003ccode\u003e--verbose\u003c/code\u003e is given, then gives the verbosity to use.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Maybe Verbosity",
        "fct-source": "src/System-Console-CmdArgs-Implicit-Type.html#CmdArgs",
        "fct-type": "function",
        "title": "cmdArgsVerbosity"
      },
      "index": {
        "description": "Just if quiet or verbose is given then gives the verbosity to use",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "cmdArgsVerbosity",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Args Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:cmdArgsVersion",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eJust\u003c/code\u003e if \u003ccode\u003e--version\u003c/code\u003e is given, then gives the version message for display, including a trailing newline.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Maybe String",
        "fct-source": "src/System-Console-CmdArgs-Implicit-Type.html#CmdArgs",
        "fct-type": "function",
        "title": "cmdArgsVersion"
      },
      "index": {
        "description": "Just if version is given then gives the version message for display including trailing newline",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "cmdArgsVersion",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Args Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:cmdArgs_",
      "description": {
        "fct-descr": "\u003cp\u003eTake purely annotated records and run the corresponding command line.\n   Shortcut for \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecmdArgsRun\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ecmdArgsMode_\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo use \u003ccode\u003e\u003ca\u003ecmdArgs_\u003c/a\u003e\u003c/code\u003e with custom command line arguments see\n   \u003ccode\u003e\u003ca\u003ewithArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Annotate Ann -\u003e IO a",
        "fct-source": "src/System-Console-CmdArgs-Implicit.html#cmdArgs_",
        "fct-type": "function",
        "title": "cmdArgs_"
      },
      "index": {
        "description": "Take purely annotated records and run the corresponding command line Shortcut for cmdArgsRun cmdArgsMode To use cmdArgs with custom command line arguments see withArgs",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "cmdArgs_",
        "normalized": "Annotate Ann-\u003eIO a",
        "package": "cmdargs",
        "partial": "Args",
        "signature": "Annotate Ann-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:details",
      "description": {
        "fct-descr": "\u003cp\u003eMode: \"A longer description of this mode is ...\"\n\u003c/p\u003e\u003cp\u003eSuffix to be added to the help message.\n\u003c/p\u003e\u003cpre\u003e Sample{..} &= details [\"More details on the website www.example.org\"]\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "[String] -\u003e Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#details",
        "fct-type": "function",
        "title": "details"
      },
      "index": {
        "description": "Mode longer description of this mode is Suffix to be added to the help message Sample details More details on the website www.example.org",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "details",
        "normalized": "[String]-\u003eAnn",
        "package": "cmdargs",
        "partial": "",
        "signature": "[String]-\u003eAnn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:enum",
      "description": {
        "fct-descr": "\u003cp\u003eFlag: \"I want several different flags to set this one field to different values.\"\n\u003c/p\u003e\u003cp\u003eThis annotation takes a type which is an enumeration, and provides multiple\n   separate flags to set the field to each value. The first element in the list\n   is used as the value of the field.\n\u003c/p\u003e\u003cpre\u003e data State = On | Off deriving Data\n data Mode = Mode {state :: State}\n cmdArgs $ Mode {state = enum [On &= help \"Turn on\",Off &= help \"Turn off\"]}\n   --on   Turn on\n   --off  Turn off\n\u003c/pre\u003e\u003cp\u003eThis annotation can be used to allow multiple flags within a field:\n\u003c/p\u003e\u003cpre\u003e data Mode = Mode {state :: [State]}\n cmdArgs $ Mode {state = enum [[] &= ignore, [On] &= help \"Turn on\", [Off] &= help \"Turn off\"]}\n\u003c/pre\u003e\u003cp\u003eNow \u003ccode\u003e--on --off\u003c/code\u003e would produce \u003ccode\u003eMode [On,Off]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "[val] -\u003e val",
        "fct-source": "src/System-Console-CmdArgs-Implicit.html#enum",
        "fct-type": "function",
        "title": "enum"
      },
      "index": {
        "description": "Flag want several different flags to set this one field to different values This annotation takes type which is an enumeration and provides multiple separate flags to set the field to each value The first element in the list is used as the value of the field data State On Off deriving Data data Mode Mode state State cmdArgs Mode state enum On help Turn on Off help Turn off on Turn on off Turn off This annotation can be used to allow multiple flags within field data Mode Mode state State cmdArgs Mode state enum ignore On help Turn on Off help Turn off Now on off would produce Mode On Off",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "enum",
        "normalized": "[a]-\u003ea",
        "package": "cmdargs",
        "partial": "",
        "signature": "[val]-\u003eval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:enum_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eenum\u003c/a\u003e\u003c/code\u003e, but using the pure annotations.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "(c -\u003e f) -\u003e [Annotate Ann] -\u003e Annotate Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit.html#enum_",
        "fct-type": "function",
        "title": "enum_"
      },
      "index": {
        "description": "Like enum but using the pure annotations",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "enum_",
        "normalized": "(a-\u003eb)-\u003e[Annotate Ann]-\u003eAnnotate Ann",
        "package": "cmdargs",
        "partial": "",
        "signature": "(c-\u003ef)-\u003e[Annotate Ann]-\u003eAnnotate Ann"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:explicit",
      "description": {
        "fct-descr": "\u003cp\u003eFlag: \"Don't guess any names for this field.\"\n\u003c/p\u003e\u003cp\u003eA field should not have any flag names guessed for it.\n   All flag names must be specified by \u003ccode\u003eflag\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e {hello = def &= explicit &= name \"foo\"}\n   --foo=VALUE\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#explicit",
        "fct-type": "function",
        "title": "explicit"
      },
      "index": {
        "description": "Flag Don guess any names for this field field should not have any flag names guessed for it All flag names must be specified by flag hello def explicit name foo foo VALUE",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "explicit",
        "normalized": "",
        "package": "cmdargs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:groupname",
      "description": {
        "fct-descr": "\u003cp\u003eFlag/Mode: \"Give these flags/modes a group name in the help output.\"\n\u003c/p\u003e\u003cp\u003eThis mode will be used for all following modes/flags, until the\n   next \u003ccode\u003egroupname\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e {hello = def &= groupname \"Welcomes\"}\n Welcomes\n   -h --hello=VALUE\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "String -\u003e Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#groupname",
        "fct-type": "function",
        "title": "groupname"
      },
      "index": {
        "description": "Flag Mode Give these flags modes group name in the help output This mode will be used for all following modes flags until the next groupname hello def groupname Welcomes Welcomes hello VALUE",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "groupname",
        "normalized": "String-\u003eAnn",
        "package": "cmdargs",
        "partial": "",
        "signature": "String-\u003eAnn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:help",
      "description": {
        "fct-descr": "\u003cp\u003eFlag/Mode: \"The help message is ...\"\n\u003c/p\u003e\u003cp\u003eDescriptive text used in the help output.\n\u003c/p\u003e\u003cpre\u003e {hello = def &= help \"Help message\"}\n   -h --hello=VALUE      Help message\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "String -\u003e Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#help",
        "fct-type": "function",
        "title": "help"
      },
      "index": {
        "description": "Flag Mode The help message is Descriptive text used in the help output hello def help Help message hello VALUE Help message",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "help",
        "normalized": "String-\u003eAnn",
        "package": "cmdargs",
        "partial": "",
        "signature": "String-\u003eAnn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:helpArg",
      "description": {
        "fct-descr": "\u003cp\u003eModes: \"Customise the help argument.\"\n\u003c/p\u003e\u003cp\u003eAdd extra options to a help argument, such as \u003ccode\u003e\u003ca\u003ehelp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eignore\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eexplicit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e Sample{..} &= helpArg [explicit, name \"h\"]\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "[Ann] -\u003e Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#helpArg",
        "fct-type": "function",
        "title": "helpArg"
      },
      "index": {
        "description": "Modes Customise the help argument Add extra options to help argument such as help name ignore or explicit Sample helpArg explicit name",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "helpArg",
        "normalized": "[Ann]-\u003eAnn",
        "package": "cmdargs",
        "partial": "Arg",
        "signature": "[Ann]-\u003eAnn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:ignore",
      "description": {
        "fct-descr": "\u003cp\u003eFlag/Mode: \"Ignore this field, don't let the user set it.\"\n\u003c/p\u003e\u003cp\u003eA mode or field is not dealt with by CmdArgs.\n\u003c/p\u003e\u003cpre\u003e {hello = def, extra = def &= ignore}\n   --hello=VALUE\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#ignore",
        "fct-type": "function",
        "title": "ignore"
      },
      "index": {
        "description": "Flag Mode Ignore this field don let the user set it mode or field is not dealt with by CmdArgs hello def extra def ignore hello VALUE",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "ignore",
        "normalized": "",
        "package": "cmdargs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:modes",
      "description": {
        "fct-descr": "\u003cp\u003eModes: \"I want a program with multiple modes, like darcs or cabal.\"\n\u003c/p\u003e\u003cp\u003eTakes a list of modes, and creates a mode which includes them all.\n   If you want one of the modes to be chosen by default, see \u003ccode\u003e\u003ca\u003eauto\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e data Modes = Mode1 | Mode2 | Mode3 deriving Data\n cmdArgs $ modes [Mode1,Mode2,Mode3]\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "[val] -\u003e val",
        "fct-source": "src/System-Console-CmdArgs-Implicit.html#modes",
        "fct-type": "function",
        "title": "modes"
      },
      "index": {
        "description": "Modes want program with multiple modes like darcs or cabal Takes list of modes and creates mode which includes them all If you want one of the modes to be chosen by default see auto data Modes Mode1 Mode2 Mode3 deriving Data cmdArgs modes Mode1 Mode2 Mode3",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "modes",
        "normalized": "[a]-\u003ea",
        "package": "cmdargs",
        "partial": "",
        "signature": "[val]-\u003eval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:modes_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emodes\u003c/a\u003e\u003c/code\u003e, but using the pure annotations.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "[Annotate Ann] -\u003e Annotate Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit.html#modes_",
        "fct-type": "function",
        "title": "modes_"
      },
      "index": {
        "description": "Like modes but using the pure annotations",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "modes_",
        "normalized": "[Annotate Ann]-\u003eAnnotate Ann",
        "package": "cmdargs",
        "partial": "",
        "signature": "[Annotate Ann]-\u003eAnnotate Ann"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003eFlag: \"Use this flag name for this field.\"\n\u003c/p\u003e\u003cp\u003eAdd flags which trigger this option.\n\u003c/p\u003e\u003cpre\u003e {hello = def &= name \"foo\"}\n   -h --hello --foo=VALUE\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "String -\u003e Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "Flag Use this flag name for this field Add flags which trigger this option hello def name foo hello foo VALUE",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "name",
        "normalized": "String-\u003eAnn",
        "package": "cmdargs",
        "partial": "",
        "signature": "String-\u003eAnn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:noAtExpand",
      "description": {
        "fct-descr": "\u003cp\u003eProgram: \"Turn off @ expansion.\"\n\u003c/p\u003e\u003cp\u003eUsually arguments starting with @ are treated as a file containing\n   a set of arguments. This annotation turns off that behaviour.\n\u003c/p\u003e\u003cpre\u003e Sample{..} &= noAtExpand\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#noAtExpand",
        "fct-type": "function",
        "title": "noAtExpand"
      },
      "index": {
        "description": "Program Turn off expansion Usually arguments starting with are treated as file containing set of arguments This annotation turns off that behaviour Sample noAtExpand",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "noAtExpand",
        "normalized": "",
        "package": "cmdargs",
        "partial": "At Expand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:opt",
      "description": {
        "fct-descr": "\u003cp\u003eFlag: \"I want users to be able to omit the value associated with this flag.\"\n\u003c/p\u003e\u003cp\u003eMake the value of a flag optional. If \u003ccode\u003e--flag\u003c/code\u003e is given, it will\n   be treated as \u003ccode\u003e--flag=\u003cem\u003ethis_argument\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e {hello = def &= opt \"foo\"}\n   -h --hello[=VALUE]    (default=foo)\n\u003c/pre\u003e\u003cp\u003eNote that all flags in CmdArgs are optional, and if omitted will use their default value.\n   Those annotated with \u003ccode\u003eopt\u003c/code\u003e also allow the flag to be present without an associated value.\n   As an example:\n\u003c/p\u003e\u003cpre\u003e {hello = \"DEFAULT\" &= opt \"OPTIONAL\"}\n\u003c/pre\u003e\u003cpre\u003e $ main\n {hello = \"DEFAULT\"}\n $ main --hello\n {hello = \"OPTIONAL\"}\n $ main --hello=VALUE\n {hello = \"VALUE\"}\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "a -\u003e Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#opt",
        "fct-type": "function",
        "title": "opt"
      },
      "index": {
        "description": "Flag want users to be able to omit the value associated with this flag Make the value of flag optional If flag is given it will be treated as flag this argument hello def opt foo hello VALUE default foo Note that all flags in CmdArgs are optional and if omitted will use their default value Those annotated with opt also allow the flag to be present without an associated value As an example hello DEFAULT opt OPTIONAL main hello DEFAULT main hello hello OPTIONAL main hello VALUE hello VALUE",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "opt",
        "normalized": "a-\u003eAnn",
        "package": "cmdargs",
        "partial": "",
        "signature": "a-\u003eAnn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:program",
      "description": {
        "fct-descr": "\u003cp\u003eModes: \"My program executable is named ...\"\n\u003c/p\u003e\u003cp\u003eThis is the name of the program executable. Only used in the help message.\n   Defaults to the type of the mode.\n\u003c/p\u003e\u003cpre\u003e Sample{..} &= program \"sample\"\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "String -\u003e Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#program",
        "fct-type": "function",
        "title": "program"
      },
      "index": {
        "description": "Modes My program executable is named This is the name of the program executable Only used in the help message Defaults to the type of the mode Sample program sample",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "program",
        "normalized": "String-\u003eAnn",
        "package": "cmdargs",
        "partial": "",
        "signature": "String-\u003eAnn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:record",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a constructor/record. The first argument should be\n   the type of field, the second should be a list of fields constructed\n   originally defined by \u003ccode\u003e:=\u003c/code\u003e or \u003ccode\u003e:=+\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation is not type safe, and may raise an exception at runtime\n   if any field has the wrong type or label.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "a -\u003e [Annotate ann] -\u003e Annotate ann",
        "fct-source": "src/System-Console-CmdArgs-Annotate.html#record",
        "fct-type": "function",
        "title": "record"
      },
      "index": {
        "description": "Create constructor record The first argument should be the type of field the second should be list of fields constructed originally defined by or This operation is not type safe and may raise an exception at runtime if any field has the wrong type or label",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "record",
        "normalized": "a-\u003e[Annotate b]-\u003eAnnotate b",
        "package": "cmdargs",
        "partial": "",
        "signature": "a-\u003e[Annotate ann]-\u003eAnnotate ann"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:summary",
      "description": {
        "fct-descr": "\u003cp\u003eModes: \"My program name/version/copyright is ...\"\n\u003c/p\u003e\u003cp\u003eOne line summary of the entire program, the first line of\n   \u003ccode\u003e--help\u003c/code\u003e and the only line of \u003ccode\u003e--version\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e Sample{..} &= summary \"CmdArgs v0.0, (C) Neil Mitchell 1981\"\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "String -\u003e Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#summary",
        "fct-type": "function",
        "title": "summary"
      },
      "index": {
        "description": "Modes My program name version copyright is One line summary of the entire program the first line of help and the only line of version Sample summary CmdArgs v0.0 Neil Mitchell",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "summary",
        "normalized": "String-\u003eAnn",
        "package": "cmdargs",
        "partial": "",
        "signature": "String-\u003eAnn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:typ",
      "description": {
        "fct-descr": "\u003cp\u003eFlag: \"For this flag, users need to give something of type ...\"\n\u003c/p\u003e\u003cp\u003eThe the type of a flag's value, usually upper case. Only used\n   for the help message. Commonly the type will be \u003ccode\u003eFILE\u003c/code\u003e (\u003ccode\u003e\u003ca\u003etypFile\u003c/a\u003e\u003c/code\u003e)\n   or \u003ccode\u003eDIR\u003c/code\u003e (\u003ccode\u003e\u003ca\u003etypDir\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e {hello = def &= typ \"MESSAGE\"}\n   -h --hello=MESSAGE\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "String -\u003e Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#typ",
        "fct-type": "function",
        "title": "typ"
      },
      "index": {
        "description": "Flag For this flag users need to give something of type The the type of flag value usually upper case Only used for the help message Commonly the type will be FILE typFile or DIR typDir hello def typ MESSAGE hello MESSAGE",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "typ",
        "normalized": "String-\u003eAnn",
        "package": "cmdargs",
        "partial": "",
        "signature": "String-\u003eAnn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:typDir",
      "description": {
        "fct-descr": "\u003cp\u003eFlag: \"Users must give a directory for this flag's value.\"\n\u003c/p\u003e\u003cp\u003eAlias for \u003ccode\u003e\u003ccode\u003e\u003ca\u003etyp\u003c/a\u003e\u003c/code\u003e \u003ca\u003eDIR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#typDir",
        "fct-type": "function",
        "title": "typDir"
      },
      "index": {
        "description": "Flag Users must give directory for this flag value Alias for typ DIR",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "typDir",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:typFile",
      "description": {
        "fct-descr": "\u003cp\u003eFlag: \"Users must give a file for this flag's value.\"\n\u003c/p\u003e\u003cp\u003eAlias for \u003ccode\u003e\u003ccode\u003e\u003ca\u003etyp\u003c/a\u003e\u003c/code\u003e \u003ca\u003eFILE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#typFile",
        "fct-type": "function",
        "title": "typFile"
      },
      "index": {
        "description": "Flag Users must give file for this flag value Alias for typ FILE",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "typFile",
        "normalized": "",
        "package": "cmdargs",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:verbosity",
      "description": {
        "fct-descr": "\u003cp\u003eModes: \"My program needs verbosity flags.\"\n\u003c/p\u003e\u003cp\u003eAdd \u003ccode\u003e--verbose\u003c/code\u003e and \u003ccode\u003e--quiet\u003c/code\u003e flags.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#verbosity",
        "fct-type": "function",
        "title": "verbosity"
      },
      "index": {
        "description": "Modes My program needs verbosity flags Add verbose and quiet flags",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "verbosity",
        "normalized": "",
        "package": "cmdargs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:verbosityArgs",
      "description": {
        "fct-descr": "\u003cp\u003eModes: \"Customise the verbosity arguments.\"\n\u003c/p\u003e\u003cp\u003eAdd extra options to a verbosity arguments (\u003ccode\u003e--verbose\u003c/code\u003e and \u003ccode\u003e--quiet\u003c/code\u003e),\n   such as \u003ccode\u003e\u003ca\u003ehelp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eignore\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eexplicit\u003c/a\u003e\u003c/code\u003e. The verbose options come\n   first, followed by the quiet options.\n\u003c/p\u003e\u003cpre\u003e Sample{..} &= verbosityArgs [ignore] [name \"silent\", explicit]\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "[Ann] -\u003e [Ann] -\u003e Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#verbosityArgs",
        "fct-type": "function",
        "title": "verbosityArgs"
      },
      "index": {
        "description": "Modes Customise the verbosity arguments Add extra options to verbosity arguments verbose and quiet such as help name ignore or explicit The verbose options come first followed by the quiet options Sample verbosityArgs ignore name silent explicit",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "verbosityArgs",
        "normalized": "[Ann]-\u003e[Ann]-\u003eAnn",
        "package": "cmdargs",
        "partial": "Args",
        "signature": "[Ann]-\u003e[Ann]-\u003eAnn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Implicit.html#v:versionArg",
      "description": {
        "fct-descr": "\u003cp\u003eModes: \"Customise the version argument.\"\n\u003c/p\u003e\u003cp\u003eAdd extra options to a version argument, such as \u003ccode\u003e\u003ca\u003ehelp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eignore\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esummary\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eexplicit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e Sample{..} &= versionArg [ignore]\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdArgs.Implicit",
        "fct-package": "cmdargs",
        "fct-signature": "[Ann] -\u003e Ann",
        "fct-source": "src/System-Console-CmdArgs-Implicit-UI.html#versionArg",
        "fct-type": "function",
        "title": "versionArg"
      },
      "index": {
        "description": "Modes Customise the version argument Add extra options to version argument such as help name ignore summary or explicit Sample versionArg ignore",
        "hierarchy": "System Console CmdArgs Implicit",
        "module": "System.Console.CmdArgs.Implicit",
        "name": "versionArg",
        "normalized": "[Ann]-\u003eAnn",
        "package": "cmdargs",
        "partial": "Arg",
        "signature": "[Ann]-\u003eAnn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Quote.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a quotation feature to let you write command line\n   arguments in the impure style, but have them translated into the pure style,\n   as per \u003ca\u003eSystem.Console.CmdArgs.Implicit\u003c/a\u003e. An example:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell, DeriveDataTypeable, MagicHash #-}\n import System.Console.CmdArgs.Implicit\n import System.Console.CmdArgs.Quote\n\n data Sample = Sample {hello :: String} deriving (Show, Data, Typeable)\n\n $(cmdArgsQuote [d|\n     sample = Sample{hello = def &=# help \"World argument\" &=# opt \"world\"}\n                    &=# summary \"Sample v1\"\n \n     run = cmdArgs# sample :: IO Sample\n     |])\n\n main = print =\u003c\u003c run\n\u003c/pre\u003e\u003cp\u003eInside \u003ccode\u003e\u003ca\u003ecmdArgsQuote\u003c/a\u003e\u003c/code\u003e you supply the command line parser using attributes in the\n   impure style. If you run with \u003ccode\u003e-ddump-splices\u003c/code\u003e (to see the Template Haskell output),\n   you would see:\n\u003c/p\u003e\u003cpre\u003e run = cmdArgs_\n     (record Sample{} [hello := def += help \"World argument\" += opt \"world\"]\n         += summary \"Sample v1\")\n     :: IO Sample\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eStubs\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eTo define the original parser you may use either the standard impure annotations ('(&=)', \u003ccode\u003e\u003ca\u003emodes\u003c/a\u003e\u003c/code\u003e), or\n   the stub annotations versions defined in this module ('(&=#)', \u003ccode\u003e\u003ca\u003emodes\u003c/a\u003e\u003c/code\u003e). The stub versions do not include\n   a \u003ca\u003eData\u003c/a\u003e constraint, so can be used in situations where the Data instance is not yet available - typically\n   when defining the parser in the same module as the data type on GHC 7.2 and above. The stub versions should\n   never be used outside \u003ccode\u003e\u003ca\u003ecmdArgsQuote\u003c/a\u003e\u003c/code\u003e and will always raise an error.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eExplicit types\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThere will be a limited number of situations where an impure parser will require additional types, typically\n   on the result of \u003ccode\u003e\u003ca\u003ecmdArgs\u003c/a\u003e\u003c/code\u003e if the result is used without a fixed type - for example if you \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e it. Most users\n   will not need to add any types. In some cases you may need to remove some explicit types, where the intermediate\n   type of the annotations has changed - but again, this change should be rare.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eCompleteness\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe translation is not complete, although works for all practical instances I've tried. The translation works\n   by first expanding out the expression (inlining every function defined within the quote, inlining let bindings),\n   then performs the translation. This scheme leads to two consequences: 1) Any expensive computation executed inside\n   the quotation to produce the command line flags may be duplicated (a very unlikely scenario). 2) As I do not yet\n   have expansion rules for all possible expressions, the expansion (and subsequently the translation) may fail.\n   I am interested in any bug reports where the feature does not work as intended.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.CmdArgs.Quote",
        "fct-package": "cmdargs",
        "fct-signature": "module",
        "fct-source": "src/System-Console-CmdArgs-Quote.html",
        "fct-type": "module",
        "title": "Quote"
      },
      "index": {
        "description": "This module provides quotation feature to let you write command line arguments in the impure style but have them translated into the pure style as per System.Console.CmdArgs.Implicit An example LANGUAGE TemplateHaskell DeriveDataTypeable MagicHash import System.Console.CmdArgs.Implicit import System.Console.CmdArgs.Quote data Sample Sample hello String deriving Show Data Typeable cmdArgsQuote sample Sample hello def help World argument opt world summary Sample v1 run cmdArgs sample IO Sample main print run Inside cmdArgsQuote you supply the command line parser using attributes in the impure style If you run with ddump-splices to see the Template Haskell output you would see run cmdArgs record Sample hello def help World argument opt world summary Sample v1 IO Sample Stubs To define the original parser you may use either the standard impure annotations modes or the stub annotations versions defined in this module modes The stub versions do not include Data constraint so can be used in situations where the Data instance is not yet available typically when defining the parser in the same module as the data type on GHC and above The stub versions should never be used outside cmdArgsQuote and will always raise an error Explicit types There will be limited number of situations where an impure parser will require additional types typically on the result of cmdArgs if the result is used without fixed type for example if you show it Most users will not need to add any types In some cases you may need to remove some explicit types where the intermediate type of the annotations has changed but again this change should be rare Completeness The translation is not complete although works for all practical instances ve tried The translation works by first expanding out the expression inlining every function defined within the quote inlining let bindings then performs the translation This scheme leads to two consequences Any expensive computation executed inside the quotation to produce the command line flags may be duplicated very unlikely scenario As do not yet have expansion rules for all possible expressions the expansion and subsequently the translation may fail am interested in any bug reports where the feature does not work as intended",
        "hierarchy": "System Console CmdArgs Quote",
        "module": "System.Console.CmdArgs.Quote",
        "name": "Quote",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Quote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Quote.html#v:-38--61--35-",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003e&=\u003c/a\u003e\u003c/code\u003e without a \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e context, only to be used within \u003ccode\u003e\u003ca\u003ecmdArgsQuote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Quote",
        "fct-package": "cmdargs",
        "fct-signature": "a -\u003e Ann -\u003e a",
        "fct-source": "src/System-Console-CmdArgs-Quote.html#%26%3D%23",
        "fct-type": "function",
        "title": "(&=#)"
      },
      "index": {
        "description": "Version of without Data context only to be used within cmdArgsQuote",
        "hierarchy": "System Console CmdArgs Quote",
        "module": "System.Console.CmdArgs.Quote",
        "name": "(&=#) &=#",
        "normalized": "a-\u003eAnn-\u003ea",
        "package": "cmdargs",
        "partial": "",
        "signature": "a-\u003eAnn-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Quote.html#v:cmdArgs-35-",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003ecmdArgs\u003c/a\u003e\u003c/code\u003e without a \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e context, only to be used within \u003ccode\u003e\u003ca\u003ecmdArgsQuote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Quote",
        "fct-package": "cmdargs",
        "fct-signature": "a -\u003e IO a",
        "fct-source": "src/System-Console-CmdArgs-Quote.html#cmdArgs%23",
        "fct-type": "function",
        "title": "cmdArgs#"
      },
      "index": {
        "description": "Version of cmdArgs without Data context only to be used within cmdArgsQuote",
        "hierarchy": "System Console CmdArgs Quote",
        "module": "System.Console.CmdArgs.Quote",
        "name": "cmdArgs#",
        "normalized": "a-\u003eIO a",
        "package": "cmdargs",
        "partial": "Args",
        "signature": "a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Quote.html#v:cmdArgsMode-35-",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003ecmdArgsMode\u003c/a\u003e\u003c/code\u003e without a \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e context, only to be used within \u003ccode\u003e\u003ca\u003ecmdArgsQuote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Quote",
        "fct-package": "cmdargs",
        "fct-signature": "a -\u003e Mode (CmdArgs a)",
        "fct-source": "src/System-Console-CmdArgs-Quote.html#cmdArgsMode%23",
        "fct-type": "function",
        "title": "cmdArgsMode#"
      },
      "index": {
        "description": "Version of cmdArgsMode without Data context only to be used within cmdArgsQuote",
        "hierarchy": "System Console CmdArgs Quote",
        "module": "System.Console.CmdArgs.Quote",
        "name": "cmdArgsMode#",
        "normalized": "a-\u003eMode(CmdArgs a)",
        "package": "cmdargs",
        "partial": "Args Mode",
        "signature": "a-\u003eMode(CmdArgs a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Quote.html#v:cmdArgsQuote",
      "description": {
        "fct-descr": "\u003cp\u003eQuotation function to turn an impure version of \u003ca\u003eSystem.Console.CmdArgs.Implicit\u003c/a\u003e into a pure one.\n   For details see \u003ca\u003eSystem.Console.CmdArgs.Quote\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Quote",
        "fct-package": "cmdargs",
        "fct-signature": "Q [Dec] -\u003e Q [Dec]",
        "fct-source": "src/System-Console-CmdArgs-Quote.html#cmdArgsQuote",
        "fct-type": "function",
        "title": "cmdArgsQuote"
      },
      "index": {
        "description": "Quotation function to turn an impure version of System.Console.CmdArgs.Implicit into pure one For details see System.Console.CmdArgs.Quote",
        "hierarchy": "System Console CmdArgs Quote",
        "module": "System.Console.CmdArgs.Quote",
        "name": "cmdArgsQuote",
        "normalized": "Q[Dec]-\u003eQ[Dec]",
        "package": "cmdargs",
        "partial": "Args Quote",
        "signature": "Q[Dec]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Quote.html#v:enum-35-",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003eenum\u003c/a\u003e\u003c/code\u003e without a \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e context, only to be used within \u003ccode\u003e\u003ca\u003ecmdArgsQuote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Quote",
        "fct-package": "cmdargs",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/System-Console-CmdArgs-Quote.html#enum%23",
        "fct-type": "function",
        "title": "enum#"
      },
      "index": {
        "description": "Version of enum without Data context only to be used within cmdArgsQuote",
        "hierarchy": "System Console CmdArgs Quote",
        "module": "System.Console.CmdArgs.Quote",
        "name": "enum#",
        "normalized": "[a]-\u003ea",
        "package": "cmdargs",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Quote.html#v:modes-35-",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003emodes\u003c/a\u003e\u003c/code\u003e without a \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e context, only to be used within \u003ccode\u003e\u003ca\u003ecmdArgsQuote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Quote",
        "fct-package": "cmdargs",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/System-Console-CmdArgs-Quote.html#modes%23",
        "fct-type": "function",
        "title": "modes#"
      },
      "index": {
        "description": "Version of modes without Data context only to be used within cmdArgsQuote",
        "hierarchy": "System Console CmdArgs Quote",
        "module": "System.Console.CmdArgs.Quote",
        "name": "modes#",
        "normalized": "[a]-\u003ea",
        "package": "cmdargs",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Text.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module to represent text with very basic formatting. Values are of\n   type [\u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e] and shown with \u003ccode\u003e\u003ca\u003eshowText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs an example of the formatting:\n\u003c/p\u003e\u003cpre\u003e [Line \"Cooking for hungry people.\"\n ,Line \"Welcome to my cookery recipe program, I sure hope you enjoy using it!\"\n ,Line \"\"\n ,Cols [\"Omlette\",\"  A tasty eggy treat.\"]\n ,Cols [\"  -m\",\" --mushrooms\",\"  Some mushrooms, or in fact any other ingredients you have in the cupboards\"]\n ,Cols [\"  -e\",\" --eggs\", \"  But always you need eggs\"]\n ,Line \"\"\n ,Cols [\"Spagetti Bolognaise\", \"  An Italian delight.\"]\n ,Cols [\"  -s\",\" --spagetti\",\"  The first word in the name\"]\n ,Cols [\"  -b\",\" --bolognaise\",\"  The second word in the name\"]\n ,Cols [\"  -d\",\" --dolmio\",\"  The magic ingredient!\"]\n ,Line \"\"\n ,Line \"    The author of this program explicitly disclaims any liability for poisoning people who get their recipes off the internet.\"]\n\u003c/pre\u003e\u003cp\u003eWith \u003ccode\u003eputStrLn (\u003ccode\u003e\u003ca\u003eshowText\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eWrap\u003c/a\u003e\u003c/code\u003e 50) demo)\u003c/code\u003e gives:\n\u003c/p\u003e\u003cpre\u003e Cooking for hungry people.\n Welcome to my cookery recipe program, I sure hope\n you enjoy using it!\n\n Omlette              A tasty eggy treat.\n   -m --mushrooms   Some mushrooms, or in fact\n                    any other ingredients you have\n                    in the cupboards\n   -e --eggs        But always you need eggs\n\n Spagetti Bolognaise  An Italian delight.\n   -s --spagetti    The first word in the name\n   -b --bolognaise  The second word in the name\n   -d --dolmio      The magic ingredient!\n\n     The author of this program explicitly\n     disclaims any liability for poisoning people\n     who get their recipes off the internet.\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.Console.CmdArgs.Text",
        "fct-package": "cmdargs",
        "fct-signature": "module",
        "fct-source": "src/System-Console-CmdArgs-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "module to represent text with very basic formatting Values are of type Text and shown with showText As an example of the formatting Line Cooking for hungry people Line Welcome to my cookery recipe program sure hope you enjoy using it Line Cols Omlette tasty eggy treat Cols mushrooms Some mushrooms or in fact any other ingredients you have in the cupboards Cols eggs But always you need eggs Line Cols Spagetti Bolognaise An Italian delight Cols spagetti The first word in the name Cols bolognaise The second word in the name Cols dolmio The magic ingredient Line Line The author of this program explicitly disclaims any liability for poisoning people who get their recipes off the internet With putStrLn showText Wrap demo gives Cooking for hungry people Welcome to my cookery recipe program sure hope you enjoy using it Omlette tasty eggy treat mushrooms Some mushrooms or in fact any other ingredients you have in the cupboards eggs But always you need eggs Spagetti Bolognaise An Italian delight spagetti The first word in the name bolognaise The second word in the name dolmio The magic ingredient The author of this program explicitly disclaims any liability for poisoning people who get their recipes off the internet",
        "hierarchy": "System Console CmdArgs Text",
        "module": "System.Console.CmdArgs.Text",
        "name": "Text",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Text.html#t:Text",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type representing some text, typically used as \u003ccode\u003e[Text]\u003c/code\u003e. The formatting\n   is described by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLine\u003c/a\u003e\u003c/code\u003e values represent a paragraph of text, and may be wrapped depending on the \u003ccode\u003e\u003ca\u003eTextFormat\u003c/a\u003e\u003c/code\u003e.\n     If a \u003ccode\u003e\u003ca\u003eLine\u003c/a\u003e\u003c/code\u003e value is wrapped then all leading space will be treated as an indent.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eCols\u003c/a\u003e\u003c/code\u003e values represent columns of text. Within any \u003ccode\u003e[Text]\u003c/code\u003e all columns of the same length\n     are grouped in tabs, with the final column being wrapped if necessary. All columns are placed\n     adjacent with no space between them - for this reason most columns will start with a space.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Console.CmdArgs.Text",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Text.html#Text",
        "fct-type": "data",
        "title": "Text"
      },
      "index": {
        "description": "The data type representing some text typically used as Text The formatting is described by Line values represent paragraph of text and may be wrapped depending on the TextFormat If Line value is wrapped then all leading space will be treated as an indent Cols values represent columns of text Within any Text all columns of the same length are grouped in tabs with the final column being wrapped if necessary All columns are placed adjacent with no space between them for this reason most columns will start with space",
        "hierarchy": "System Console CmdArgs Text",
        "module": "System.Console.CmdArgs.Text",
        "name": "Text",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Text.html#t:TextFormat",
      "description": {
        "fct-descr": "\u003cp\u003eHow to output the text.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Text",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Text.html#TextFormat",
        "fct-type": "data",
        "title": "TextFormat"
      },
      "index": {
        "description": "How to output the text",
        "hierarchy": "System Console CmdArgs Text",
        "module": "System.Console.CmdArgs.Text",
        "name": "TextFormat",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Text Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Text.html#v:Cols",
      "description": {
        "fct-module": "System.Console.CmdArgs.Text",
        "fct-package": "cmdargs",
        "fct-signature": "Cols [String]",
        "fct-source": "src/System-Console-CmdArgs-Text.html#Text",
        "fct-type": "function",
        "title": "Cols"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdArgs Text",
        "module": "System.Console.CmdArgs.Text",
        "name": "Cols",
        "normalized": "Cols[String]",
        "package": "cmdargs",
        "partial": "Cols",
        "signature": "Cols[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Text.html#v:HTML",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay as HTML.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Text",
        "fct-package": "cmdargs",
        "fct-signature": "HTML",
        "fct-source": "src/System-Console-CmdArgs-Text.html#TextFormat",
        "fct-type": "function",
        "title": "HTML"
      },
      "index": {
        "description": "Display as HTML",
        "hierarchy": "System Console CmdArgs Text",
        "module": "System.Console.CmdArgs.Text",
        "name": "HTML",
        "normalized": "",
        "package": "cmdargs",
        "partial": "HTML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Text.html#v:Line",
      "description": {
        "fct-module": "System.Console.CmdArgs.Text",
        "fct-package": "cmdargs",
        "fct-signature": "Line String",
        "fct-source": "src/System-Console-CmdArgs-Text.html#Text",
        "fct-type": "function",
        "title": "Line"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdArgs Text",
        "module": "System.Console.CmdArgs.Text",
        "name": "Line",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Text.html#v:Wrap",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay as text wrapped at a certain width (see \u003ccode\u003e\u003ca\u003edefaultWrap\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Text",
        "fct-package": "cmdargs",
        "fct-signature": "Wrap Int",
        "fct-source": "src/System-Console-CmdArgs-Text.html#TextFormat",
        "fct-type": "function",
        "title": "Wrap"
      },
      "index": {
        "description": "Display as text wrapped at certain width see defaultWrap",
        "hierarchy": "System Console CmdArgs Text",
        "module": "System.Console.CmdArgs.Text",
        "name": "Wrap",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Wrap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Text.html#v:defaultWrap",
      "description": {
        "fct-descr": "\u003cp\u003eWrap with the default width of 80 characters.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Text",
        "fct-package": "cmdargs",
        "fct-signature": "TextFormat",
        "fct-source": "src/System-Console-CmdArgs-Text.html#defaultWrap",
        "fct-type": "function",
        "title": "defaultWrap"
      },
      "index": {
        "description": "Wrap with the default width of characters",
        "hierarchy": "System Console CmdArgs Text",
        "module": "System.Console.CmdArgs.Text",
        "name": "defaultWrap",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Wrap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Text.html#v:showText",
      "description": {
        "fct-descr": "\u003cp\u003eShow some text using the given formatting.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Text",
        "fct-package": "cmdargs",
        "fct-signature": "TextFormat -\u003e [Text] -\u003e String",
        "fct-source": "src/System-Console-CmdArgs-Text.html#showText",
        "fct-type": "function",
        "title": "showText"
      },
      "index": {
        "description": "Show some text using the given formatting",
        "hierarchy": "System Console CmdArgs Text",
        "module": "System.Console.CmdArgs.Text",
        "name": "showText",
        "normalized": "TextFormat-\u003e[Text]-\u003eString",
        "package": "cmdargs",
        "partial": "Text",
        "signature": "TextFormat-\u003e[Text]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Verbosity.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module to deal with verbosity, how 'chatty' a program should be.\n    This module defines the \u003ccode\u003e\u003ca\u003eVerbosity\u003c/a\u003e\u003c/code\u003e data type, along with functions\n    for manipulating a global verbosity value.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.CmdArgs.Verbosity",
        "fct-package": "cmdargs",
        "fct-signature": "module",
        "fct-source": "src/System-Console-CmdArgs-Verbosity.html",
        "fct-type": "module",
        "title": "Verbosity"
      },
      "index": {
        "description": "module to deal with verbosity how chatty program should be This module defines the Verbosity data type along with functions for manipulating global verbosity value",
        "hierarchy": "System Console CmdArgs Verbosity",
        "module": "System.Console.CmdArgs.Verbosity",
        "name": "Verbosity",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Verbosity.html#t:Verbosity",
      "description": {
        "fct-descr": "\u003cp\u003eThe verbosity data type\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Verbosity",
        "fct-package": "cmdargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdArgs-Verbosity.html#Verbosity",
        "fct-type": "data",
        "title": "Verbosity"
      },
      "index": {
        "description": "The verbosity data type",
        "hierarchy": "System Console CmdArgs Verbosity",
        "module": "System.Console.CmdArgs.Verbosity",
        "name": "Verbosity",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Verbosity.html#v:Loud",
      "description": {
        "fct-descr": "\u003cp\u003eOutput lots of messages (typically errors, warnings and status updates)\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Verbosity",
        "fct-package": "cmdargs",
        "fct-signature": "Loud",
        "fct-source": "src/System-Console-CmdArgs-Verbosity.html#Verbosity",
        "fct-type": "function",
        "title": "Loud"
      },
      "index": {
        "description": "Output lots of messages typically errors warnings and status updates",
        "hierarchy": "System Console CmdArgs Verbosity",
        "module": "System.Console.CmdArgs.Verbosity",
        "name": "Loud",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Loud",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Verbosity.html#v:Normal",
      "description": {
        "fct-descr": "\u003cp\u003eOutput normal messages (typically errors and warnings)\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Verbosity",
        "fct-package": "cmdargs",
        "fct-signature": "Normal",
        "fct-source": "src/System-Console-CmdArgs-Verbosity.html#Verbosity",
        "fct-type": "function",
        "title": "Normal"
      },
      "index": {
        "description": "Output normal messages typically errors and warnings",
        "hierarchy": "System Console CmdArgs Verbosity",
        "module": "System.Console.CmdArgs.Verbosity",
        "name": "Normal",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Verbosity.html#v:Quiet",
      "description": {
        "fct-descr": "\u003cp\u003eOnly output essential messages (typically errors)\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Verbosity",
        "fct-package": "cmdargs",
        "fct-signature": "Quiet",
        "fct-source": "src/System-Console-CmdArgs-Verbosity.html#Verbosity",
        "fct-type": "function",
        "title": "Quiet"
      },
      "index": {
        "description": "Only output essential messages typically errors",
        "hierarchy": "System Console CmdArgs Verbosity",
        "module": "System.Console.CmdArgs.Verbosity",
        "name": "Quiet",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Quiet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Verbosity.html#v:getVerbosity",
      "description": {
        "fct-descr": "\u003cp\u003eGet the global verbosity. Initially \u003ccode\u003eNormal\u003c/code\u003e before any calls to \u003ccode\u003e\u003ca\u003esetVerbosity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Verbosity",
        "fct-package": "cmdargs",
        "fct-signature": "IO Verbosity",
        "fct-source": "src/System-Console-CmdArgs-Verbosity.html#getVerbosity",
        "fct-type": "function",
        "title": "getVerbosity"
      },
      "index": {
        "description": "Get the global verbosity Initially Normal before any calls to setVerbosity",
        "hierarchy": "System Console CmdArgs Verbosity",
        "module": "System.Console.CmdArgs.Verbosity",
        "name": "getVerbosity",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Verbosity.html#v:isLoud",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to test if status updates should be output to the user.\n   \u003ccode\u003eTrue\u003c/code\u003e if the verbosity is set to \u003ccode\u003e\u003ca\u003eLoud\u003c/a\u003e\u003c/code\u003e (when \u003ccode\u003e--verbose\u003c/code\u003e is specified).\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Verbosity",
        "fct-package": "cmdargs",
        "fct-signature": "IO Bool",
        "fct-source": "src/System-Console-CmdArgs-Verbosity.html#isLoud",
        "fct-type": "function",
        "title": "isLoud"
      },
      "index": {
        "description": "Used to test if status updates should be output to the user True if the verbosity is set to Loud when verbose is specified",
        "hierarchy": "System Console CmdArgs Verbosity",
        "module": "System.Console.CmdArgs.Verbosity",
        "name": "isLoud",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Loud",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Verbosity.html#v:isNormal",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to test if warnings should be output to the user.\n   \u003ccode\u003eTrue\u003c/code\u003e if the verbosity is set to \u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eLoud\u003c/a\u003e\u003c/code\u003e (when \u003ccode\u003e--quiet\u003c/code\u003e is \u003cem\u003enot\u003c/em\u003e specified).\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Verbosity",
        "fct-package": "cmdargs",
        "fct-signature": "IO Bool",
        "fct-source": "src/System-Console-CmdArgs-Verbosity.html#isNormal",
        "fct-type": "function",
        "title": "isNormal"
      },
      "index": {
        "description": "Used to test if warnings should be output to the user True if the verbosity is set to Normal or Loud when quiet is not specified",
        "hierarchy": "System Console CmdArgs Verbosity",
        "module": "System.Console.CmdArgs.Verbosity",
        "name": "isNormal",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Verbosity.html#v:setVerbosity",
      "description": {
        "fct-descr": "\u003cp\u003eSet the global verbosity.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Verbosity",
        "fct-package": "cmdargs",
        "fct-signature": "Verbosity -\u003e IO ()",
        "fct-source": "src/System-Console-CmdArgs-Verbosity.html#setVerbosity",
        "fct-type": "function",
        "title": "setVerbosity"
      },
      "index": {
        "description": "Set the global verbosity",
        "hierarchy": "System Console CmdArgs Verbosity",
        "module": "System.Console.CmdArgs.Verbosity",
        "name": "setVerbosity",
        "normalized": "Verbosity-\u003eIO()",
        "package": "cmdargs",
        "partial": "Verbosity",
        "signature": "Verbosity-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Verbosity.html#v:whenLoud",
      "description": {
        "fct-descr": "\u003cp\u003eAn action to perform if the verbosity is loud, based on \u003ccode\u003e\u003ca\u003eisLoud\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Verbosity",
        "fct-package": "cmdargs",
        "fct-signature": "IO () -\u003e IO ()",
        "fct-source": "src/System-Console-CmdArgs-Verbosity.html#whenLoud",
        "fct-type": "function",
        "title": "whenLoud"
      },
      "index": {
        "description": "An action to perform if the verbosity is loud based on isLoud",
        "hierarchy": "System Console CmdArgs Verbosity",
        "module": "System.Console.CmdArgs.Verbosity",
        "name": "whenLoud",
        "normalized": "IO()-\u003eIO()",
        "package": "cmdargs",
        "partial": "Loud",
        "signature": "IO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs-Verbosity.html#v:whenNormal",
      "description": {
        "fct-descr": "\u003cp\u003eAn action to perform if the verbosity is normal or higher, based on \u003ccode\u003e\u003ca\u003eisNormal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdArgs.Verbosity",
        "fct-package": "cmdargs",
        "fct-signature": "IO () -\u003e IO ()",
        "fct-source": "src/System-Console-CmdArgs-Verbosity.html#whenNormal",
        "fct-type": "function",
        "title": "whenNormal"
      },
      "index": {
        "description": "An action to perform if the verbosity is normal or higher based on isNormal",
        "hierarchy": "System Console CmdArgs Verbosity",
        "module": "System.Console.CmdArgs.Verbosity",
        "name": "whenNormal",
        "normalized": "IO()-\u003eIO()",
        "package": "cmdargs",
        "partial": "Normal",
        "signature": "IO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdargs/docs/System-Console-CmdArgs.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports the implicit command line parser.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.CmdArgs",
        "fct-package": "cmdargs",
        "fct-signature": "module",
        "fct-source": "src/System-Console-CmdArgs.html",
        "fct-type": "module",
        "title": "CmdArgs"
      },
      "index": {
        "description": "This module re-exports the implicit command line parser",
        "hierarchy": "System Console CmdArgs",
        "module": "System.Console.CmdArgs",
        "name": "CmdArgs",
        "normalized": "",
        "package": "cmdargs",
        "partial": "Cmd Args",
        "signature": ""
      }
    }
  }
]