[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/implicit-params/docs/Data-Implicit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eData.Implicit\u003c/a\u003e provides both named and unnamed implicit parameters that\nsupport default values (given by the \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e class from the \u003ccode\u003edata-default\u003c/code\u003e\npackage). It makes no use of the \u003ccode\u003eImplicitParams\u003c/code\u003e extension and instead\neverything is done using type classes.\n\u003c/p\u003e\u003cp\u003eHere is an example of unnamed implicit parameters:\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE FlexibleContexts #-}\nimport \u003ca\u003eData.Implicit\u003c/a\u003e\n\nputParam :: \u003ccode\u003e\u003ca\u003eImplicit_\u003c/a\u003e\u003c/code\u003e String =\u003e IO ()\nputParam = putStrLn $ \"Param was: \" ++ show (\u003ccode\u003e\u003ca\u003eparam_\u003c/a\u003e\u003c/code\u003e :: String)\n\u003c/pre\u003e\u003cp\u003eWe define \u003ccode\u003eputParam\u003c/code\u003e, which is a simple function which takes an implicit\nparameter of type \u003ccode\u003eString\u003c/code\u003e, and prints it to the screen. The \u003ccode\u003e\u003ca\u003eparam_\u003c/a\u003e\u003c/code\u003e function\nis used to retrieve the unnamed implicit parameter of type \u003ccode\u003eString\u003c/code\u003e from\n\u003ccode\u003eputParam\u003c/code\u003e's context. The type signature is necessary to force \u003ccode\u003e\u003ca\u003eparam_\u003c/a\u003e\u003c/code\u003e to\nreturn a \u003ccode\u003eString\u003c/code\u003e, as this cannot be inferred due to the polymorphism of\n\u003ccode\u003eshow\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputParam\n\u003c/code\u003e\u003c/strong\u003eParam was \"\"\n\u003c/pre\u003e\u003cp\u003eThis is how we call \u003ccode\u003eputParam\u003c/code\u003e without specifying its implicit parameters. If\nan implicit parameter is left unspecified, its value is defaulted to \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e,\nassuming that its type has a \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e instance. If not, then it is a type\nerror not to specify the value of an implicit parameter.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputParam $~ \"hello, world\"\n\u003c/code\u003e\u003c/strong\u003eParam was \"hello, world\"\n\u003c/pre\u003e\u003cp\u003eThe operator \u003ccode\u003e\u003ca\u003e$~\u003c/a\u003e\u003c/code\u003e takes a function \u003ccode\u003ef\u003c/code\u003e and a value to which to set the\nhomotypic implicit parameter on \u003ccode\u003ef\u003c/code\u003e. It applies the implicit parameter to \u003ccode\u003ef\u003c/code\u003e\nand returns the result. There is also a prefix version of \u003ccode\u003e$~\u003c/code\u003e whose arguments\nare flipped called \u003ccode\u003e\u003ca\u003esetParam_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHere is an example of named implicit parameters:\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE DataKinds, FlexibleContexts, RankNTypes #-}\nimport \u003ca\u003eData.Implicit\u003c/a\u003e\nimport \u003ca\u003eData.Proxy\u003c/a\u003e\n\nfoo :: Proxy \"foo\"\nfoo = Proxy\n\nbar :: Proxy \"bar\"\nbar = Proxy\n\nputFooBar :: (\u003ccode\u003e\u003ca\u003eImplicit\u003c/a\u003e\u003c/code\u003e \"foo\" String, \u003ccode\u003e\u003ca\u003eImplicit\u003c/a\u003e\u003c/code\u003e \"bar\" String) =\u003e IO ()\nputFooBar = do\n    putStrLn $ \"foo was: \" ++ show (param foo :: String)\n    putStrLn $ \"bar was: \" ++ show (param bar :: String)\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eImplicit\u003c/a\u003e\u003c/code\u003e constraint is the named equivalent of \u003ccode\u003e\u003ca\u003eImplicit_\u003c/a\u003e\u003c/code\u003e. It takes an\nadditional argument \u003ccode\u003es\u003c/code\u003e to specify the name of the implicit parameter.\nImplicit parameters can be \"named\" using any type (of any kind, on compilers\nthat support the \u003ccode\u003ePolyKinds\u003c/code\u003e extension). (The above code uses type-level\nstrings of the \u003ccode\u003eSymbol\u003c/code\u003e kind from the \u003ca\u003eGHC.TypeLits\u003c/a\u003e module, which is the\nrecommended way to name implicit parameters. However, \u003ccode\u003eSymbol\u003c/code\u003e requires the\n\u003ccode\u003eDataKinds\u003c/code\u003e extension and at least version 7.8 of GHC (7.6 is broken; see GHC\nbug #7502), so you are free to use other types of other kinds if you want to\nsupport older versions of GHC.) \u003ccode\u003e\u003ca\u003eparam\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetParam\u003c/a\u003e\u003c/code\u003e work like their unnamed\ncounterparts \u003ccode\u003e\u003ca\u003eparam_\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetParam_\u003c/a\u003e\u003c/code\u003e, but they also take a proxy argument to\nspecify the name of the implicit parameter. The code above defines \u003ccode\u003efoo\u003c/code\u003e and\n\u003ccode\u003ebar\u003c/code\u003e to hide away the (slightly ugly) proxy stuff.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputFooBar\n\u003c/code\u003e\u003c/strong\u003efoo was: \"\"\nbar was: \"\"\n\u003c/pre\u003e\u003cp\u003eOnce again, the defaults of unspecified implicit parameters are given by the\n\u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esetParam foo \"hello, world\" putFooBar\n\u003c/code\u003e\u003c/strong\u003efoo was: \"hello, world\"\nbar was: \"\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esetParam bar \"goodbye\" $ setParam foo \"hello, world\" putFooBar\n\u003c/code\u003e\u003c/strong\u003efoo was: \"hello, world\"\nbar was: \"goodbye\"\n\u003c/pre\u003e\u003cp\u003eAn infix version of \u003ccode\u003esetParam\u003c/code\u003e is also provided, \u003ccode\u003e\u003ca\u003e~$\u003c/a\u003e\u003c/code\u003e. Using \u003ccode\u003e~$\u003c/code\u003e, the above\nexample would be:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputFooBar ~$ foo ~$ bar $$ \"goodbye\" $$ \"hello, world\"\n\u003c/code\u003e\u003c/strong\u003efoo was: \"hello, world\"\nbar was: \"goodbye\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Implicit",
        "fct-package": "implicit-params",
        "fct-signature": "module",
        "fct-source": "src/Data-Implicit.html",
        "fct-type": "module",
        "title": "Implicit"
      },
      "index": {
        "description": "Data.Implicit provides both named and unnamed implicit parameters that support default values given by the Default class from the data-default package It makes no use of the ImplicitParams extension and instead everything is done using type classes Here is an example of unnamed implicit parameters LANGUAGE FlexibleContexts import Data.Implicit putParam Implicit String IO putParam putStrLn Param was show param String We define putParam which is simple function which takes an implicit parameter of type String and prints it to the screen The param function is used to retrieve the unnamed implicit parameter of type String from putParam context The type signature is necessary to force param to return String as this cannot be inferred due to the polymorphism of show putParam Param was This is how we call putParam without specifying its implicit parameters If an implicit parameter is left unspecified its value is defaulted to def assuming that its type has Default instance If not then it is type error not to specify the value of an implicit parameter putParam hello world Param was hello world The operator takes function and value to which to set the homotypic implicit parameter on It applies the implicit parameter to and returns the result There is also prefix version of whose arguments are flipped called setParam Here is an example of named implicit parameters LANGUAGE DataKinds FlexibleContexts RankNTypes import Data.Implicit import Data.Proxy foo Proxy foo foo Proxy bar Proxy bar bar Proxy putFooBar Implicit foo String Implicit bar String IO putFooBar do putStrLn foo was show param foo String putStrLn bar was show param bar String The Implicit constraint is the named equivalent of Implicit It takes an additional argument to specify the name of the implicit parameter Implicit parameters can be named using any type of any kind on compilers that support the PolyKinds extension The above code uses type-level strings of the Symbol kind from the GHC.TypeLits module which is the recommended way to name implicit parameters However Symbol requires the DataKinds extension and at least version of GHC is broken see GHC bug so you are free to use other types of other kinds if you want to support older versions of GHC param and setParam work like their unnamed counterparts param and setParam but they also take proxy argument to specify the name of the implicit parameter The code above defines foo and bar to hide away the slightly ugly proxy stuff putFooBar foo was bar was Once again the defaults of unspecified implicit parameters are given by the Default class setParam foo hello world putFooBar foo was hello world bar was setParam bar goodbye setParam foo hello world putFooBar foo was hello world bar was goodbye An infix version of setParam is also provided Using the above example would be putFooBar foo bar goodbye hello world foo was hello world bar was goodbye",
        "hierarchy": "Data Implicit",
        "module": "Data.Implicit",
        "name": "Implicit",
        "normalized": "",
        "package": "implicit-params",
        "partial": "Implicit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/implicit-params/docs/Data-Implicit.html#t:Implicit",
      "description": {
        "fct-descr": "\u003cp\u003eThe constraint \u003ccode\u003e\u003ccode\u003e\u003ca\u003eImplicit\u003c/a\u003e\u003c/code\u003e \"foo\" String\u003c/code\u003e on a function \u003ccode\u003ef\u003c/code\u003e indicates\n that an implicit parameter named \u003ccode\u003e\"foo\"\u003c/code\u003e of type \u003ccode\u003eString\u003c/code\u003e is passed to\n \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Implicit",
        "fct-package": "implicit-params",
        "fct-signature": "class",
        "fct-source": "src/Data-Implicit.html#Implicit",
        "fct-type": "class",
        "title": "Implicit"
      },
      "index": {
        "description": "The constraint Implicit foo String on function indicates that an implicit parameter named foo of type String is passed to",
        "hierarchy": "Data Implicit",
        "module": "Data.Implicit",
        "name": "Implicit",
        "normalized": "",
        "package": "implicit-params",
        "partial": "Implicit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/implicit-params/docs/Data-Implicit.html#t:Implicit_",
      "description": {
        "fct-descr": "\u003cp\u003eThe constraint \u003ccode\u003e\u003ccode\u003e\u003ca\u003eImplicit_\u003c/a\u003e\u003c/code\u003e String\u003c/code\u003e on a function \u003ccode\u003ef\u003c/code\u003e indicates that an\n unnamed implicit parameter of type \u003ccode\u003eString\u003c/code\u003e is passed to \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Implicit",
        "fct-package": "implicit-params",
        "fct-signature": "class",
        "fct-source": "src/Data-Implicit.html#Implicit_",
        "fct-type": "class",
        "title": "Implicit_"
      },
      "index": {
        "description": "The constraint Implicit String on function indicates that an unnamed implicit parameter of type String is passed to",
        "hierarchy": "Data Implicit",
        "module": "Data.Implicit",
        "name": "Implicit_",
        "normalized": "",
        "package": "implicit-params",
        "partial": "Implicit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/implicit-params/docs/Data-Implicit.html#v:-126--36-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix version of \u003ccode\u003e\u003ca\u003esetParam\u003c/a\u003e\u003c/code\u003e with flipped arguments.\n\u003c/p\u003e",
        "fct-module": "Data.Implicit",
        "fct-package": "implicit-params",
        "fct-signature": "b) -\u003e proxy s -\u003e a -\u003e b",
        "fct-source": "src/Data-Implicit.html#~%24",
        "fct-type": "function",
        "title": "(~$)"
      },
      "index": {
        "description": "An infix version of setParam with flipped arguments",
        "hierarchy": "Data Implicit",
        "module": "Data.Implicit",
        "name": "(~$) ~$",
        "normalized": "a)-\u003eb c-\u003ed-\u003ea",
        "package": "implicit-params",
        "partial": "",
        "signature": "b)-\u003eproxy s-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/implicit-params/docs/Data-Implicit.html#v:-126-.",
      "description": {
        "fct-descr": "\u003cp\u003eModify an unnamed implicit parameter.\n\u003c/p\u003e",
        "fct-module": "Data.Implicit",
        "fct-package": "implicit-params",
        "fct-signature": "c) -\u003e (a -\u003e b) -\u003e c",
        "fct-source": "src/Data-Implicit.html#~.",
        "fct-type": "function",
        "title": "(~.)"
      },
      "index": {
        "description": "Modify an unnamed implicit parameter",
        "hierarchy": "Data Implicit",
        "module": "Data.Implicit",
        "name": "(~.) ~.",
        "normalized": "a)-\u003e(b-\u003ec)-\u003ea",
        "package": "implicit-params",
        "partial": "",
        "signature": "c)-\u003e(a-\u003eb)-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/implicit-params/docs/Data-Implicit.html#v:-126-..",
      "description": {
        "fct-descr": "\u003cp\u003eModify a named implicit parameter.\n\u003c/p\u003e",
        "fct-module": "Data.Implicit",
        "fct-package": "implicit-params",
        "fct-signature": "c) -\u003e proxy s -\u003e (a -\u003e b) -\u003e c",
        "fct-source": "src/Data-Implicit.html#~..",
        "fct-type": "function",
        "title": "(~..)"
      },
      "index": {
        "description": "Modify named implicit parameter",
        "hierarchy": "Data Implicit",
        "module": "Data.Implicit",
        "name": "(~..) ~..",
        "normalized": "a)-\u003eb c-\u003e(d-\u003ee)-\u003ea",
        "package": "implicit-params",
        "partial": "",
        "signature": "c)-\u003eproxy s-\u003e(a-\u003eb)-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/implicit-params/docs/Data-Implicit.html#v:-36--126-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix version of \u003ccode\u003e\u003ca\u003esetParam_\u003c/a\u003e\u003c/code\u003e with flipped arguments.\n\u003c/p\u003e",
        "fct-module": "Data.Implicit",
        "fct-package": "implicit-params",
        "fct-signature": "b) -\u003e a -\u003e b",
        "fct-source": "src/Data-Implicit.html#%24~",
        "fct-type": "function",
        "title": "($~)"
      },
      "index": {
        "description": "An infix version of setParam with flipped arguments",
        "hierarchy": "Data Implicit",
        "module": "Data.Implicit",
        "name": "($~) $~",
        "normalized": "a)-\u003eb-\u003ea",
        "package": "implicit-params",
        "partial": "",
        "signature": "b)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/implicit-params/docs/Data-Implicit.html#v:-36--36-",
      "description": {
        "fct-descr": "\u003cp\u003eA left-associated version of \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Implicit",
        "fct-package": "implicit-params",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Data-Implicit.html#%24%24",
        "fct-type": "function",
        "title": "($$)"
      },
      "index": {
        "description": "left-associated version of",
        "hierarchy": "Data Implicit",
        "module": "Data.Implicit",
        "name": "($$) $$",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "implicit-params",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/implicit-params/docs/Data-Implicit.html#v:param",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eparam\u003c/a\u003e\u003c/code\u003e retrieves the implicit parameter named \u003ccode\u003es\u003c/code\u003e of type \u003ccode\u003ea\u003c/code\u003e from\n the context \u003ccode\u003e\u003ccode\u003e\u003ca\u003eImplicit\u003c/a\u003e\u003c/code\u003e s a\u003c/code\u003e. The name \u003ccode\u003es\u003c/code\u003e is specified by a proxy\n argument passed to \u003ccode\u003eparam\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Implicit",
        "fct-package": "implicit-params",
        "fct-signature": "proxy s -\u003e a",
        "fct-source": "src/Data-Implicit.html#param",
        "fct-type": "method",
        "title": "param"
      },
      "index": {
        "description": "param retrieves the implicit parameter named of type from the context Implicit The name is specified by proxy argument passed to param",
        "hierarchy": "Data Implicit",
        "module": "Data.Implicit",
        "name": "param",
        "normalized": "a b-\u003ec",
        "package": "implicit-params",
        "partial": "",
        "signature": "proxy s-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/implicit-params/docs/Data-Implicit.html#v:param_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eparam_\u003c/a\u003e\u003c/code\u003e retrieves the unnamed implicit parameter of type \u003ccode\u003ea\u003c/code\u003e from\n the context \u003ccode\u003e\u003ccode\u003e\u003ca\u003eImplicit_\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Implicit",
        "fct-package": "implicit-params",
        "fct-signature": "a",
        "fct-source": "src/Data-Implicit.html#param_",
        "fct-type": "method",
        "title": "param_"
      },
      "index": {
        "description": "param retrieves the unnamed implicit parameter of type from the context Implicit",
        "hierarchy": "Data Implicit",
        "module": "Data.Implicit",
        "name": "param_",
        "normalized": "",
        "package": "implicit-params",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/implicit-params/docs/Data-Implicit.html#v:setParam",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esetParam\u003c/a\u003e\u003c/code\u003e supplies a value for an implicit parameter named \u003ccode\u003es\u003c/code\u003e to a\n function which takes a homotypic and homonymous implicit parameter. The\n name \u003ccode\u003es\u003c/code\u003e is specified by a proxy argument passed to \u003ccode\u003esetParam\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Implicit",
        "fct-package": "implicit-params",
        "fct-signature": "b) -\u003e b",
        "fct-source": "src/Data-Implicit.html#setParam",
        "fct-type": "function",
        "title": "setParam"
      },
      "index": {
        "description": "setParam supplies value for an implicit parameter named to function which takes homotypic and homonymous implicit parameter The name is specified by proxy argument passed to setParam",
        "hierarchy": "Data Implicit",
        "module": "Data.Implicit",
        "name": "setParam",
        "normalized": "a)-\u003ea",
        "package": "implicit-params",
        "partial": "Param",
        "signature": "b)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/implicit-params/docs/Data-Implicit.html#v:setParam_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esetParam_\u003c/a\u003e\u003c/code\u003e supplies a value for an unnamed implicit parameter to a\n function which takes a homotypic implicit parameter.\n\u003c/p\u003e",
        "fct-module": "Data.Implicit",
        "fct-package": "implicit-params",
        "fct-signature": "b) -\u003e b",
        "fct-source": "src/Data-Implicit.html#setParam_",
        "fct-type": "function",
        "title": "setParam_"
      },
      "index": {
        "description": "setParam supplies value for an unnamed implicit parameter to function which takes homotypic implicit parameter",
        "hierarchy": "Data Implicit",
        "module": "Data.Implicit",
        "name": "setParam_",
        "normalized": "a)-\u003ea",
        "package": "implicit-params",
        "partial": "Param",
        "signature": "b)-\u003eb"
      }
    }
  }
]