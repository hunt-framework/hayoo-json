[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines common utility functions that depend on data types\n  introduced by HaskHOL. See the \u003ca\u003eHaskHOL.Core.Lib\u003c/a\u003e module for utility functions\n  that do not have this dependence.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "module",
        "fct-source": "src/HaskHOL-Core-Basics.html",
        "fct-type": "module",
        "title": "Basics"
      },
      "index": {
        "description": "This module defines common utility functions that depend on data types introduced by HaskHOL See the HaskHOL.Core.Lib module for utility functions that do not have this dependence",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "Basics",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Basics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#t:Net",
      "description": {
        "fct-descr": "\u003cp\u003eInternally, \u003ccode\u003e\u003ca\u003eNet\u003c/a\u003e\u003c/code\u003es are represented with a tree structure; each node has a list\n  of labeled branches and a list of values.  The node labels are generated via\n  the following guidelines:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Flattening of combinations favors the left hand side such that the head of \n    an application is looked at first.\n\u003c/li\u003e\u003cli\u003e If the head of an application is variable, the whole term is considered \n    variable.\n\u003c/li\u003e\u003cli\u003e Type abstractions and type combinations are effectively treated as local \n    constants, though they do have their own node lable representations to avoid\n    any potential issues with user provided variable lists for \u003ccode\u003eenter\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Matching is conservative, such that all matching values will be returned, \n    but some non-matching values may be returned.  For example, a pattern term \n    of the form \u003ccode\u003ex `op` x\u003c/code\u003e will match any term of the form \u003ccode\u003ea `op` b\u003c/code\u003e \n    regardless of the values of \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Basics-Nets.html#Net",
        "fct-type": "data",
        "title": "Net"
      },
      "index": {
        "description": "Internally Net are represented with tree structure each node has list of labeled branches and list of values The node labels are generated via the following guidelines Flattening of combinations favors the left hand side such that the head of an application is looked at first If the head of an application is variable the whole term is considered variable Type abstractions and type combinations are effectively treated as local constants though they do have their own node lable representations to avoid any potential issues with user provided variable lists for enter Matching is conservative such that all matching values will be returned but some non-matching values may be returned For example pattern term of the form op will match any term of the form op regardless of the values of and",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "Net",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Net",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:alpha",
      "description": {
        "fct-descr": "\u003cp\u003eAlpha conversion for term abstractions.  Renames a bound variable to match\n  the name of a provided variable.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e First term is not a variable.\n\u003c/li\u003e\u003cli\u003e Second term is not an abstraction.\n\u003c/li\u003e\u003cli\u003e The types of the variable and bound variable do no agree.\n\u003c/li\u003e\u003cli\u003e The variable is free in the body of the abstraction.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e Either String HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#alpha",
        "fct-type": "function",
        "title": "alpha"
      },
      "index": {
        "description": "Alpha conversion for term abstractions Renames bound variable to match the name of provided variable Fails with Left in the following cases First term is not variable Second term is not an abstraction The types of the variable and bound variable do no agree The variable is free in the body of the abstraction",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "alpha",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:alphaTyabs",
      "description": {
        "fct-descr": "\u003cp\u003eAlpha conversion for type abstractions.  Renames a bound type variable to\n  match the name of a provided type variable.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the \n  following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The provided type is not a small type variable.\n\u003c/li\u003e\u003cli\u003e The provided term is not a type abstraction.\n\u003c/li\u003e\u003cli\u003e The type is free in the body of the type abstraction.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLTerm -\u003e Either String HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#alphaTyabs",
        "fct-type": "function",
        "title": "alphaTyabs"
      },
      "index": {
        "description": "Alpha conversion for type abstractions Renames bound type variable to match the name of provided type variable Fails with Left in the following cases The provided type is not small type variable The provided term is not type abstraction The type is free in the body of the type abstraction",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "alphaTyabs",
        "normalized": "HOLType-\u003eHOLTerm-\u003eEither String HOLTerm",
        "package": "haskhol-core",
        "partial": "Tyabs",
        "signature": "HOLType-\u003eHOLTerm-\u003eEither String HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:alphaUtype",
      "description": {
        "fct-descr": "\u003cp\u003eAlpha conversion for universal types.  Renames a bound type variable to match\n  the name of a provided type variable.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following\n  cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e First type is not a small type variable.\n\u003c/li\u003e\u003cli\u003e Second type is not a universal type.\n\u003c/li\u003e\u003cli\u003e The type variable is free in the body of the universal type.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLType -\u003e Either String HOLType",
        "fct-source": "src/HaskHOL-Core-Basics.html#alphaUtype",
        "fct-type": "function",
        "title": "alphaUtype"
      },
      "index": {
        "description": "Alpha conversion for universal types Renames bound type variable to match the name of provided type variable Fails with Left in the following cases First type is not small type variable Second type is not universal type The type variable is free in the body of the universal type",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "alphaUtype",
        "normalized": "HOLType-\u003eHOLType-\u003eEither String HOLType",
        "package": "haskhol-core",
        "partial": "Utype",
        "signature": "HOLType-\u003eHOLType-\u003eEither String HOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:binops",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003elistMkBinop\u003c/a\u003e\u003c/code\u003e.  Destructs a complex combination built with\n  a binary operator into its list of arguments.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e [HOLTerm]",
        "fct-source": "src/HaskHOL-Core-Basics.html#binops",
        "fct-type": "function",
        "title": "binops"
      },
      "index": {
        "description": "The inverse of listMkBinop Destructs complex combination built with binary operator into its list of arguments",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "binops",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003e[HOLTerm]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLTerm-\u003eHOLTerm-\u003e[HOLTerm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:bndvar",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the bound term of an abstraction.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n  provided term is not an abstraction.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#bndvar",
        "fct-type": "function",
        "title": "bndvar"
      },
      "index": {
        "description": "Returns the bound term of an abstraction Fails with Nothing if the provided term is not an abstraction",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "bndvar",
        "normalized": "HOLTerm-\u003eMaybe HOLTerm",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLTerm-\u003eMaybe HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:bndvarTyabs",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the bound type of a type abstraction.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n  provided term is not a type abstraction.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe HOLType",
        "fct-source": "src/HaskHOL-Core-Basics.html#bndvarTyabs",
        "fct-type": "function",
        "title": "bndvarTyabs"
      },
      "index": {
        "description": "Returns the bound type of type abstraction Fails with Nothing if the provided term is not type abstraction",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "bndvarTyabs",
        "normalized": "HOLTerm-\u003eMaybe HOLType",
        "package": "haskhol-core",
        "partial": "Tyabs",
        "signature": "HOLTerm-\u003eMaybe HOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:body",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the body term of an abstraction.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n  provided term is not an abstraction.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#body",
        "fct-type": "function",
        "title": "body"
      },
      "index": {
        "description": "Returns the body term of an abstraction Fails with Nothing if the provided term is not an abstraction",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "body",
        "normalized": "HOLTerm-\u003eMaybe HOLTerm",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLTerm-\u003eMaybe HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:bodyTyabs",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the body term of a type abstraction.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n  provided term is not a type abstraction.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#bodyTyabs",
        "fct-type": "function",
        "title": "bodyTyabs"
      },
      "index": {
        "description": "Returns the body term of type abstraction Fails with Nothing if the provided term is not type abstraction",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "bodyTyabs",
        "normalized": "HOLTerm-\u003eMaybe HOLTerm",
        "package": "haskhol-core",
        "partial": "Tyabs",
        "signature": "HOLTerm-\u003eMaybe HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:conjuncts",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of propositions in a complex conjunction.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e [HOLTerm]",
        "fct-source": "src/HaskHOL-Core-Basics.html#conjuncts",
        "fct-type": "function",
        "title": "conjuncts"
      },
      "index": {
        "description": "Returns the list of propositions in complex conjunction",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "conjuncts",
        "normalized": "HOLTerm-\u003e[HOLTerm]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLTerm-\u003e[HOLTerm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destBinary",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a binary application returning its left and right arguments.  Fails \n  with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not a binary application with the \n  specified operator name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destBinary",
        "fct-type": "function",
        "title": "destBinary"
      },
      "index": {
        "description": "Destructs binary application returning its left and right arguments Fails with Nothing if the provided term is not binary application with the specified operator name",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destBinary",
        "normalized": "String-\u003eHOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Binary",
        "signature": "String-\u003eHOLTerm-\u003eMaybe(HOLTerm,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destBinder",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs an abstraction of specified binder name into its bound variable and\n  its body term.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not an\n  abstraction with the specified binder name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destBinder",
        "fct-type": "function",
        "title": "destBinder"
      },
      "index": {
        "description": "Destructs an abstraction of specified binder name into its bound variable and its body term Fails with Nothing if the provided term is not an abstraction with the specified binder name",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destBinder",
        "normalized": "String-\u003eHOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Binder",
        "signature": "String-\u003eHOLTerm-\u003eMaybe(HOLTerm,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destBinop",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003edestBinary\u003c/a\u003e\u003c/code\u003e that tests for operator terms, not strings.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destBinop",
        "fct-type": "function",
        "title": "destBinop"
      },
      "index": {
        "description": "version of destBinary that tests for operator terms not strings",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destBinop",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Binop",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eMaybe(HOLTerm,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destConj",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for boolean conjunctions.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destConj",
        "fct-type": "function",
        "title": "destConj"
      },
      "index": {
        "description": "Destructor for boolean conjunctions",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destConj",
        "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Conj",
        "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destCons",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for list \u003ccode\u003eCONS\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destCons",
        "fct-type": "function",
        "title": "destCons"
      },
      "index": {
        "description": "Destructor for list CONS",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destCons",
        "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Cons",
        "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destDisj",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for boolean disjunctions.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destDisj",
        "fct-type": "function",
        "title": "destDisj"
      },
      "index": {
        "description": "Destructor for boolean disjunctions",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destDisj",
        "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Disj",
        "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destExists",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for existential term quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destExists",
        "fct-type": "function",
        "title": "destExists"
      },
      "index": {
        "description": "Destructor for existential term quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destExists",
        "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Exists",
        "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destForall",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for universal term quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destForall",
        "fct-type": "function",
        "title": "destForall"
      },
      "index": {
        "description": "Destructor for universal term quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destForall",
        "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Forall",
        "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destGAbs",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for generalized abstractions.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided\n  term is not an abstraction or generalized abstraction.  See \u003ccode\u003e\u003ca\u003emkGAbs\u003c/a\u003e\u003c/code\u003e for more \n  details.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destGAbs",
        "fct-type": "function",
        "title": "destGAbs"
      },
      "index": {
        "description": "Destructor for generalized abstractions Fails with Nothing if the provided term is not an abstraction or generalized abstraction See mkGAbs for more details",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destGAbs",
        "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
        "package": "haskhol-core",
        "partial": "GAbs",
        "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destImp",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for boolean implications.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destImp",
        "fct-type": "function",
        "title": "destImp"
      },
      "index": {
        "description": "Destructor for boolean implications",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destImp",
        "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Imp",
        "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destLet",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a let binding term into a list of its name and value pairs and its\n  body term.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if internally the term is not of the form\n\u003c/p\u003e\u003cpre\u003e LET (x1, v1) ... (xn, vn) LET_END\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe ([(HOLTerm, HOLTerm)], HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destLet",
        "fct-type": "function",
        "title": "destLet"
      },
      "index": {
        "description": "Destructs let binding term into list of its name and value pairs and its body term Fails with Nothing if internally the term is not of the form LET x1 v1 xn vn LET END",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destLet",
        "normalized": "HOLTerm-\u003eMaybe([(HOLTerm,HOLTerm)],HOLTerm)",
        "package": "haskhol-core",
        "partial": "Let",
        "signature": "HOLTerm-\u003eMaybe([(HOLTerm,HOLTerm)],HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destList",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for list terms.  Returns a list of the elements in the term.  Fails\n  with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if internall the term is not of the form\n\u003c/p\u003e\u003cpre\u003e x1 `CONS` .... xn `CONS` NIL\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe [HOLTerm]",
        "fct-source": "src/HaskHOL-Core-Basics.html#destList",
        "fct-type": "function",
        "title": "destList"
      },
      "index": {
        "description": "Destructor for list terms Returns list of the elements in the term Fails with Nothing if internall the term is not of the form x1 CONS xn CONS NIL",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destList",
        "normalized": "HOLTerm-\u003eMaybe[HOLTerm]",
        "package": "haskhol-core",
        "partial": "List",
        "signature": "HOLTerm-\u003eMaybe[HOLTerm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destNeg",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for boolean negations.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#destNeg",
        "fct-type": "function",
        "title": "destNeg"
      },
      "index": {
        "description": "Destructor for boolean negations",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destNeg",
        "normalized": "HOLTerm-\u003eMaybe HOLTerm",
        "package": "haskhol-core",
        "partial": "Neg",
        "signature": "HOLTerm-\u003eMaybe HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destNumeral",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a numeral term to an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if internally\n  the term is not of the form\n\u003c/p\u003e\u003cpre\u003e NUMERAL bits _0, where bits is a series of BIT0 and BIT1 terms  \n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe Integer",
        "fct-source": "src/HaskHOL-Core-Basics.html#destNumeral",
        "fct-type": "function",
        "title": "destNumeral"
      },
      "index": {
        "description": "Converts numeral term to an Integer Fails with Nothing if internally the term is not of the form NUMERAL bits where bits is series of BIT0 and BIT1 terms",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destNumeral",
        "normalized": "HOLTerm-\u003eMaybe Integer",
        "package": "haskhol-core",
        "partial": "Numeral",
        "signature": "HOLTerm-\u003eMaybe Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destTyAll",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for term-level universal type quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLType, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destTyAll",
        "fct-type": "function",
        "title": "destTyAll"
      },
      "index": {
        "description": "Destructor for term-level universal type quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destTyAll",
        "normalized": "HOLTerm-\u003eMaybe(HOLType,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Ty All",
        "signature": "HOLTerm-\u003eMaybe(HOLType,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destTyBinder",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a type abstraction of specified binder name into its bound type\n  variable and its body term.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not\n  a type abstraction with the specified type binder name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLTerm -\u003e Maybe (HOLType, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destTyBinder",
        "fct-type": "function",
        "title": "destTyBinder"
      },
      "index": {
        "description": "Destructs type abstraction of specified binder name into its bound type variable and its body term Fails with Nothing if the provided term is not type abstraction with the specified type binder name",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destTyBinder",
        "normalized": "String-\u003eHOLTerm-\u003eMaybe(HOLType,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Ty Binder",
        "signature": "String-\u003eHOLTerm-\u003eMaybe(HOLType,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destTyEx",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for term-level existential type quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLType, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destTyEx",
        "fct-type": "function",
        "title": "destTyEx"
      },
      "index": {
        "description": "Destructor for term-level existential type quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destTyEx",
        "normalized": "HOLTerm-\u003eMaybe(HOLType,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Ty Ex",
        "signature": "HOLTerm-\u003eMaybe(HOLType,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destUExists",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for unique, existential quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#destUExists",
        "fct-type": "function",
        "title": "destUExists"
      },
      "index": {
        "description": "Destructor for unique existential quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "destUExists",
        "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
        "package": "haskhol-core",
        "partial": "UExists",
        "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:disjuncts",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of propositions in a complex disjunction.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e [HOLTerm]",
        "fct-source": "src/HaskHOL-Core-Basics.html#disjuncts",
        "fct-type": "function",
        "title": "disjuncts"
      },
      "index": {
        "description": "Returns the list of propositions in complex disjunction",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "disjuncts",
        "normalized": "HOLTerm-\u003e[HOLTerm]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLTerm-\u003e[HOLTerm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:findPath",
      "description": {
        "fct-descr": "\u003cp\u003eSearches a term for a subterm that satisfies a given predicate, returning\n  a string that indicates the path to that subterm:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e'b'\u003c/code\u003e - Take the body of an abstraction.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e't'\u003c/code\u003e - Take the body of a type abstraction.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e'l'\u003c/code\u003e - Take the left path in a term combination.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e'r'\u003c/code\u003e - Take the right path in a term combination.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e'c'\u003c/code\u003e - Take the body in a type combination.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no satisfying subterm.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "(HOLTerm -\u003e Bool) -\u003e HOLTerm -\u003e Maybe String",
        "fct-source": "src/HaskHOL-Core-Basics.html#findPath",
        "fct-type": "function",
        "title": "findPath"
      },
      "index": {
        "description": "Searches term for subterm that satisfies given predicate returning string that indicates the path to that subterm Take the body of an abstraction Take the body of type abstraction Take the left path in term combination Take the right path in term combination Take the body in type combination Fails with Nothing if there is no satisfying subterm",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "findPath",
        "normalized": "(HOLTerm-\u003eBool)-\u003eHOLTerm-\u003eMaybe String",
        "package": "haskhol-core",
        "partial": "Path",
        "signature": "(HOLTerm-\u003eBool)-\u003eHOLTerm-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:findTerm",
      "description": {
        "fct-descr": "\u003cp\u003eSearches a term for a subterm that satisfies a given predicate.  Fails with\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no such term is found.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "(HOLTerm -\u003e Bool) -\u003e HOLTerm -\u003e Maybe HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#findTerm",
        "fct-type": "function",
        "title": "findTerm"
      },
      "index": {
        "description": "Searches term for subterm that satisfies given predicate Fails with Nothing if no such term is found",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "findTerm",
        "normalized": "(HOLTerm-\u003eBool)-\u003eHOLTerm-\u003eMaybe HOLTerm",
        "package": "haskhol-core",
        "partial": "Term",
        "signature": "(HOLTerm-\u003eBool)-\u003eHOLTerm-\u003eMaybe HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:findTerms",
      "description": {
        "fct-descr": "\u003cp\u003eSearches a term for all unique subterms that satisfy a given predicate.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "(HOLTerm -\u003e Bool) -\u003e HOLTerm -\u003e [HOLTerm]",
        "fct-source": "src/HaskHOL-Core-Basics.html#findTerms",
        "fct-type": "function",
        "title": "findTerms"
      },
      "index": {
        "description": "Searches term for all unique subterms that satisfy given predicate",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "findTerms",
        "normalized": "(HOLTerm-\u003eBool)-\u003eHOLTerm-\u003e[HOLTerm]",
        "package": "haskhol-core",
        "partial": "Terms",
        "signature": "(HOLTerm-\u003eBool)-\u003eHOLTerm-\u003e[HOLTerm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:followPath",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the subterm found by following a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e path as produced by \n  \u003ccode\u003e\u003ca\u003efindPath\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term does not a suitable \n  subterm for the given path.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLTerm -\u003e Maybe HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#followPath",
        "fct-type": "function",
        "title": "followPath"
      },
      "index": {
        "description": "Returns the subterm found by following String path as produced by findPath Fails with Nothing if the provided term does not suitable subterm for the given path",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "followPath",
        "normalized": "String-\u003eHOLTerm-\u003eMaybe HOLTerm",
        "package": "haskhol-core",
        "partial": "Path",
        "signature": "String-\u003eHOLTerm-\u003eMaybe HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:freeIn",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate to check if the first term is free in the second modulo\n  alpha-equivalence.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#freeIn",
        "fct-type": "function",
        "title": "freeIn"
      },
      "index": {
        "description": "Predicate to check if the first term is free in the second modulo alpha-equivalence",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "freeIn",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "In",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:genVar",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003egenVarWithName\u003c/a\u003e\u003c/code\u003e that defaults to the prefix \"_\".\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#genVar",
        "fct-type": "function",
        "title": "genVar"
      },
      "index": {
        "description": "version of genVarWithName that defaults to the prefix",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "genVar",
        "normalized": "HOLType-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Var",
        "signature": "HOLType-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:genVarWithName",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a new term variable consisting of a given prefix and the next value\n  in the fresh term counter.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLType -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#genVarWithName",
        "fct-type": "function",
        "title": "genVarWithName"
      },
      "index": {
        "description": "Generates new term variable consisting of given prefix and the next value in the fresh term counter",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "genVarWithName",
        "normalized": "String-\u003eHOLType-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Var With Name",
        "signature": "String-\u003eHOLType-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isBinary",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate that tests if a term is a binary application whose operator has the\n  given name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isBinary",
        "fct-type": "function",
        "title": "isBinary"
      },
      "index": {
        "description": "Predicate that tests if term is binary application whose operator has the given name",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isBinary",
        "normalized": "String-\u003eHOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Binary",
        "signature": "String-\u003eHOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isBinder",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate that tests if a term is an abstraction of specified binder name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isBinder",
        "fct-type": "function",
        "title": "isBinder"
      },
      "index": {
        "description": "Predicate that tests if term is an abstraction of specified binder name",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isBinder",
        "normalized": "String-\u003eHOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Binder",
        "signature": "String-\u003eHOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isBinop",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eisBinary\u003c/a\u003e\u003c/code\u003e that tests for operator terms, not strings.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isBinop",
        "fct-type": "function",
        "title": "isBinop"
      },
      "index": {
        "description": "version of isBinary that tests for operator terms not strings",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isBinop",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Binop",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isConj",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for boolean conjunctions.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isConj",
        "fct-type": "function",
        "title": "isConj"
      },
      "index": {
        "description": "Predicate for boolean conjunctions",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isConj",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Conj",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isCons",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for list \u003ccode\u003eCONS\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isCons",
        "fct-type": "function",
        "title": "isCons"
      },
      "index": {
        "description": "Predicate for list CONS",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isCons",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Cons",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isDisj",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for boolean disjunctions.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isDisj",
        "fct-type": "function",
        "title": "isDisj"
      },
      "index": {
        "description": "Predicate for boolean disjunctions",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isDisj",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Disj",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isExists",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for existential term quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isExists",
        "fct-type": "function",
        "title": "isExists"
      },
      "index": {
        "description": "Predicate for existential term quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isExists",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Exists",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isForall",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for universal term quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isForall",
        "fct-type": "function",
        "title": "isForall"
      },
      "index": {
        "description": "Predicate for universal term quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isForall",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Forall",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isGAbs",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for generalized abstractions.  See \u003ccode\u003e\u003ca\u003emkGAbs\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isGAbs",
        "fct-type": "function",
        "title": "isGAbs"
      },
      "index": {
        "description": "Predicate for generalized abstractions See mkGAbs for more details",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isGAbs",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "GAbs",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isImp",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for boolean implications.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isImp",
        "fct-type": "function",
        "title": "isImp"
      },
      "index": {
        "description": "Predicate for boolean implications",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isImp",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Imp",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isLet",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for let binding terms.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isLet",
        "fct-type": "function",
        "title": "isLet"
      },
      "index": {
        "description": "Predicate for let binding terms",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isLet",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Let",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isList",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for list terms.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isList",
        "fct-type": "function",
        "title": "isList"
      },
      "index": {
        "description": "Predicate for list terms",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isList",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "List",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isNeg",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for boolean negations.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isNeg",
        "fct-type": "function",
        "title": "isNeg"
      },
      "index": {
        "description": "Predicate for boolean negations",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isNeg",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Neg",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isTyAll",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for term-level universal type quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isTyAll",
        "fct-type": "function",
        "title": "isTyAll"
      },
      "index": {
        "description": "Predicate for term-level universal type quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isTyAll",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Ty All",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isTyBinder",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate that tests if a term is an abtraction of a specified type binder\n  name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isTyBinder",
        "fct-type": "function",
        "title": "isTyBinder"
      },
      "index": {
        "description": "Predicate that tests if term is an abtraction of specified type binder name",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isTyBinder",
        "normalized": "String-\u003eHOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Ty Binder",
        "signature": "String-\u003eHOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isTyEx",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for term-level existential type quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isTyEx",
        "fct-type": "function",
        "title": "isTyEx"
      },
      "index": {
        "description": "Predicate for term-level existential type quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isTyEx",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Ty Ex",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isUExists",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for unique, existential quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#isUExists",
        "fct-type": "function",
        "title": "isUExists"
      },
      "index": {
        "description": "Predicate for unique existential quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "isUExists",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "UExists",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkAbs",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a complex abstraction that represents a term with multiple\n  bound variables.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if any internal call to \u003ccode\u003e\u003ca\u003emkAbs\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLTerm] -\u003e HOLTerm -\u003e Either String HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#listMkAbs",
        "fct-type": "function",
        "title": "listMkAbs"
      },
      "index": {
        "description": "Constructs complex abstraction that represents term with multiple bound variables Fails with Left if any internal call to mkAbs fails",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "listMkAbs",
        "normalized": "[HOLTerm]-\u003eHOLTerm-\u003eEither String HOLTerm",
        "package": "haskhol-core",
        "partial": "Mk Abs",
        "signature": "[HOLTerm]-\u003eHOLTerm-\u003eEither String HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkBinop",
      "description": {
        "fct-descr": "\u003cp\u003eIteratively builds a complex combination using \u003ccode\u003e\u003ca\u003emkBinop\u003c/a\u003e\u003c/code\u003e, i.e.\n\u003c/p\u003e\u003cpre\u003e listMkBinop (/\\) [T, F, T] === T /\\ F /\\ T\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e [HOLTerm] -\u003e Either String HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#listMkBinop",
        "fct-type": "function",
        "title": "listMkBinop"
      },
      "index": {
        "description": "Iteratively builds complex combination using mkBinop i.e listMkBinop",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "listMkBinop",
        "normalized": "HOLTerm-\u003e[HOLTerm]-\u003eEither String HOLTerm",
        "package": "haskhol-core",
        "partial": "Mk Binop",
        "signature": "HOLTerm-\u003e[HOLTerm]-\u003eEither String HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkComb",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a complex combination that represents the application of a \n  function to a list of arguments.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if any internal call to \n  \u003ccode\u003e\u003ca\u003emkComb\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e [HOLTerm] -\u003e Either String HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#listMkComb",
        "fct-type": "function",
        "title": "listMkComb"
      },
      "index": {
        "description": "Constructs complex combination that represents the application of function to list of arguments Fails with Left if any internal call to mkComb fails",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "listMkComb",
        "normalized": "HOLTerm-\u003e[HOLTerm]-\u003eEither String HOLTerm",
        "package": "haskhol-core",
        "partial": "Mk Comb",
        "signature": "HOLTerm-\u003e[HOLTerm]-\u003eEither String HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkConj",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a complex conjunction from a given list of propositions.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLTerm] -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#listMkConj",
        "fct-type": "function",
        "title": "listMkConj"
      },
      "index": {
        "description": "Constructs complex conjunction from given list of propositions",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "listMkConj",
        "normalized": "[HOLTerm]-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Mk Conj",
        "signature": "[HOLTerm]-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkDisj",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a complex disjunction from a given list of propositions.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLTerm] -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#listMkDisj",
        "fct-type": "function",
        "title": "listMkDisj"
      },
      "index": {
        "description": "Constructs complex disjunction from given list of propositions",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "listMkDisj",
        "normalized": "[HOLTerm]-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Mk Disj",
        "signature": "[HOLTerm]-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkExists",
      "description": {
        "fct-descr": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003elistMkAbs\u003c/a\u003e\u003c/code\u003e for existential term quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLTerm] -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#listMkExists",
        "fct-type": "function",
        "title": "listMkExists"
      },
      "index": {
        "description": "specific version of listMkAbs for existential term quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "listMkExists",
        "normalized": "[HOLTerm]-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Mk Exists",
        "signature": "[HOLTerm]-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkForall",
      "description": {
        "fct-descr": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003elistMkAbs\u003c/a\u003e\u003c/code\u003e for universal term quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLTerm] -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#listMkForall",
        "fct-type": "function",
        "title": "listMkForall"
      },
      "index": {
        "description": "specific version of listMkAbs for universal term quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "listMkForall",
        "normalized": "[HOLTerm]-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Mk Forall",
        "signature": "[HOLTerm]-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkGAbs",
      "description": {
        "fct-descr": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003elistMkAbs\u003c/a\u003e\u003c/code\u003e for general abstractions.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLTerm] -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#listMkGAbs",
        "fct-type": "function",
        "title": "listMkGAbs"
      },
      "index": {
        "description": "specific version of listMkAbs for general abstractions",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "listMkGAbs",
        "normalized": "[HOLTerm]-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Mk GAbs",
        "signature": "[HOLTerm]-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkIComb",
      "description": {
        "fct-descr": "\u003cp\u003eAn iterative version of \u003ccode\u003e\u003ca\u003emkIComb\u003c/a\u003e\u003c/code\u003e that builds a complex combination given a\n  constant name and a list of arguments, attempting to find a correct\n  instantiation at every step.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The provided name is not a currently defiend constant.\n\u003c/li\u003e\u003cli\u003e Any internal call to mkIComb fails.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e [HOLTerm] -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#listMkIComb",
        "fct-type": "function",
        "title": "listMkIComb"
      },
      "index": {
        "description": "An iterative version of mkIComb that builds complex combination given constant name and list of arguments attempting to find correct instantiation at every step Throws HOLException in the following cases The provided name is not currently defiend constant Any internal call to mkIComb fails",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "listMkIComb",
        "normalized": "String-\u003e[HOLTerm]-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Mk IComb",
        "signature": "String-\u003e[HOLTerm]-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkArgs",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a list of term variables of a given prefix.  Names are adjusted\n  as necessary with \u003ccode\u003e\u003ca\u003evariant\u003c/a\u003e\u003c/code\u003e to avoid clashing with the provided list of term\n  variables.  The number and types of the resultant variables is directed by \n  the provided list of types, i.e.\n\u003c/p\u003e\u003cpre\u003e mkArgs \"x\" avoids [ty1, ... tyn] === [x1:ty1, ..., xn:tyn] where {x1, ..., xn} are not elements of avoids\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e [HOLTerm] -\u003e [HOLType] -\u003e [HOLTerm]",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkArgs",
        "fct-type": "function",
        "title": "mkArgs"
      },
      "index": {
        "description": "Constructs list of term variables of given prefix Names are adjusted as necessary with variant to avoid clashing with the provided list of term variables The number and types of the resultant variables is directed by the provided list of types i.e mkArgs avoids ty1 tyn x1 ty1 xn tyn where x1 xn are not elements of avoids",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkArgs",
        "normalized": "String-\u003e[HOLTerm]-\u003e[HOLType]-\u003e[HOLTerm]",
        "package": "haskhol-core",
        "partial": "Args",
        "signature": "String-\u003e[HOLTerm]-\u003e[HOLType]-\u003e[HOLTerm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkBinary",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a binary application given a constant name and two argument terms.\n  Note that no instantiation is performed, thus the constant must be monomorphic\n  or the provided arguments must match the constant's general type.  Throws a\n  \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if any of the internal calls to \u003ccode\u003e\u003ca\u003emkConst\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emkComb\u003c/a\u003e\u003c/code\u003e fail.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkBinary",
        "fct-type": "function",
        "title": "mkBinary"
      },
      "index": {
        "description": "Constructs binary application given constant name and two argument terms Note that no instantiation is performed thus the constant must be monomorphic or the provided arguments must match the constant general type Throws HOLException if any of the internal calls to mkConst or mkComb fail",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkBinary",
        "normalized": "String-\u003eHOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Binary",
        "signature": "String-\u003eHOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkBinder",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an abstraction given a binder name and two argument terms.  Throws\n  a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if any of the internal calls to \u003ccode\u003e\u003ca\u003emkConst\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emkAbs\u003c/a\u003e\u003c/code\u003e, or \n  \u003ccode\u003e\u003ca\u003emkComb\u003c/a\u003e\u003c/code\u003e fail.\n\u003c/p\u003e\u003cp\u003eNote that the given string can actually be any constant name of type \n  \u003ccode\u003e(A -\u003e *) -\u003e *\u003c/code\u003e, such that a well-typed term of the form \u003ccode\u003ec (\\x . t)\u003c/code\u003e can be\n  produced.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkBinder",
        "fct-type": "function",
        "title": "mkBinder"
      },
      "index": {
        "description": "Constructs an abstraction given binder name and two argument terms Throws HOLException if any of the internal calls to mkConst mkAbs or mkComb fail Note that the given string can actually be any constant name of type such that well-typed term of the form can be produced",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkBinder",
        "normalized": "String-\u003eHOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Binder",
        "signature": "String-\u003eHOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkBinop",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emkBinary\u003c/a\u003e\u003c/code\u003e that accepts the operator as a pre-constructed term.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e HOLTerm -\u003e Either String HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkBinop",
        "fct-type": "function",
        "title": "mkBinop"
      },
      "index": {
        "description": "version of mkBinary that accepts the operator as pre-constructed term",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkBinop",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
        "package": "haskhol-core",
        "partial": "Binop",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkConj",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for boolean conjunctions.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the internal\n  call to \u003ccode\u003e\u003ca\u003emkBinary\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkConj",
        "fct-type": "function",
        "title": "mkConj"
      },
      "index": {
        "description": "Constructor for boolean conjunctions Throws HOLException if the internal call to mkBinary fails",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkConj",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Conj",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkDisj",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for boolean disjunctions.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the internal\n  call to \u003ccode\u003e\u003ca\u003emkBinary\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkDisj",
        "fct-type": "function",
        "title": "mkDisj"
      },
      "index": {
        "description": "Constructor for boolean disjunctions Throws HOLException if the internal call to mkBinary fails",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkDisj",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Disj",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkExists",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for existential term quantification.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if \n  the internal call to \u003ccode\u003e\u003ca\u003emkBinder\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkExists",
        "fct-type": "function",
        "title": "mkExists"
      },
      "index": {
        "description": "Constructor for existential term quantification Throws HOLException if the internal call to mkBinder fails",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkExists",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Exists",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkForall",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for universal term quantification.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the\n  internal call to \u003ccode\u003e\u003ca\u003emkBinder\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkForall",
        "fct-type": "function",
        "title": "mkForall"
      },
      "index": {
        "description": "Constructor for universal term quantification Throws HOLException if the internal call to mkBinder fails",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkForall",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Forall",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkGAbs",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for generalized abstractions.  Generalized abstractions extend\n  term abstractions to the more general of notion of a function mapping some\n  structure to some term.  This allows us to bind patterns more complicated\n  than a variable, i.e. binding pairs\n\u003c/p\u003e\u003cpre\u003e \\ (x:num, y:num) -\u003e x + y\n\u003c/pre\u003e\u003cp\u003eor lists\n\u003c/p\u003e\u003cpre\u003e \\ CONS x xs -\u003e x\n\u003c/pre\u003e\u003cp\u003eNote that in the case where the pattern to bind is simply a variable \u003ccode\u003e\u003ca\u003emkGAbs\u003c/a\u003e\u003c/code\u003e\n  just calls \u003ccode\u003e\u003ca\u003emkAbs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkGAbs",
        "fct-type": "function",
        "title": "mkGAbs"
      },
      "index": {
        "description": "Constructor for generalized abstractions Generalized abstractions extend term abstractions to the more general of notion of function mapping some structure to some term This allows us to bind patterns more complicated than variable i.e binding pairs num num or lists CONS xs Note that in the case where the pattern to bind is simply variable mkGAbs just calls mkAbs",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkGAbs",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "GAbs",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkIComb",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emkComb\u003c/a\u003e\u003c/code\u003e that instantiates the type variables in the left hand\n  argument.  Relies internally on \u003ccode\u003e\u003ca\u003etypeMatch\u003c/a\u003e\u003c/code\u003e in order to provide a match\n  between the domain type of the function and the type of the argument.  Fails\n  with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if instantiation is impossible.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e Maybe HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkIComb",
        "fct-type": "function",
        "title": "mkIComb"
      },
      "index": {
        "description": "version of mkComb that instantiates the type variables in the left hand argument Relies internally on typeMatch in order to provide match between the domain type of the function and the type of the argument Fails with Nothing if instantiation is impossible",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkIComb",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eMaybe HOLTerm",
        "package": "haskhol-core",
        "partial": "IComb",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eMaybe HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkImp",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for boolean implications.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the internal\n  call to \u003ccode\u003e\u003ca\u003emkBinary\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkImp",
        "fct-type": "function",
        "title": "mkImp"
      },
      "index": {
        "description": "Constructor for boolean implications Throws HOLException if the internal call to mkBinary fails",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkImp",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Imp",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkMConst",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an instance of a constant of the provided name and type.  Relies\n  internally on \u003ccode\u003e\u003ca\u003etypeMatch\u003c/a\u003e\u003c/code\u003e in order to provide a match between the most general\n  type of the constant and the provided type.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the\n  following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The provided string is not the name of a defined constant.\n\u003c/li\u003e\u003cli\u003e Type matching fails.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLType -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkMConst",
        "fct-type": "function",
        "title": "mkMConst"
      },
      "index": {
        "description": "Constructs an instance of constant of the provided name and type Relies internally on typeMatch in order to provide match between the most general type of the constant and the provided type Throws HOLException in the following cases The provided string is not the name of defined constant Type matching fails",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkMConst",
        "normalized": "String-\u003eHOLType-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "MConst",
        "signature": "String-\u003eHOLType-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkNeg",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for boolean negations.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if any of the \n  internal calls to \u003ccode\u003e\u003ca\u003emkConst\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emkComb\u003c/a\u003e\u003c/code\u003e fail.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkNeg",
        "fct-type": "function",
        "title": "mkNeg"
      },
      "index": {
        "description": "Constructor for boolean negations Throws HOLException if any of the internal calls to mkConst or mkComb fail",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkNeg",
        "normalized": "HOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Neg",
        "signature": "HOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkTyAll",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for term-level universal type quantification.  Throws a \n  \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the internal call to \u003ccode\u003e\u003ca\u003emkTyBinder\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkTyAll",
        "fct-type": "function",
        "title": "mkTyAll"
      },
      "index": {
        "description": "Constructor for term-level universal type quantification Throws HOLException if the internal call to mkTyBinder fails",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkTyAll",
        "normalized": "HOLType-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Ty All",
        "signature": "HOLType-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkTyBinder",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a type abstraction given a type binder name, a type variable to\n  find, and a body term.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if any of the internal calls\n  to \u003ccode\u003e\u003ca\u003emkConst\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emkTyAbs\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003emkComb\u003c/a\u003e\u003c/code\u003e fail.\n\u003c/p\u003e\u003cp\u003eNote that the given string can actually be any constant name of type\n  \u003ccode\u003e(% 'a . *) -\u003e *\u003c/code\u003e, such that a well-typed term of the form \u003ccode\u003ec (\\\\x . t)\u003c/code\u003e can\n  be produced.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLType -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkTyBinder",
        "fct-type": "function",
        "title": "mkTyBinder"
      },
      "index": {
        "description": "Constructs type abstraction given type binder name type variable to find and body term Throws HOLException if any of the internal calls to mkConst mkTyAbs or mkComb fail Note that the given string can actually be any constant name of type such that well-typed term of the form can be produced",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkTyBinder",
        "normalized": "String-\u003eHOLType-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Ty Binder",
        "signature": "String-\u003eHOLType-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkTyEx",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for term-level existential type quantification.  Throws a \n  \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the internal call to \u003ccode\u003e\u003ca\u003emkTyBinder\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkTyEx",
        "fct-type": "function",
        "title": "mkTyEx"
      },
      "index": {
        "description": "Constructor for term-level existential type quantification Throws HOLException if the internal call to mkTyBinder fails",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkTyEx",
        "normalized": "HOLType-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Ty Ex",
        "signature": "HOLType-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkUExists",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for unique, existential term quantification.  Throws a \n  \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the internal call to \u003ccode\u003e\u003ca\u003emkBinder\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#mkUExists",
        "fct-type": "function",
        "title": "mkUExists"
      },
      "index": {
        "description": "Constructor for unique existential term quantification Throws HOLException if the internal call to mkBinder fails",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "mkUExists",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "UExists",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:netEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty \u003ccode\u003e\u003ca\u003eNet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "Net a",
        "fct-source": "src/HaskHOL-Core-Basics-Nets.html#netEmpty",
        "fct-type": "function",
        "title": "netEmpty"
      },
      "index": {
        "description": "The empty Net",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "netEmpty",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:netEnter",
      "description": {
        "fct-descr": "\u003cp\u003eInserts a new element, paired with a pattern term, into a provided net.  The \n  first argument is a list of variables that should be treated as local \n  constants, such that only patterns with those variables at the exact same \n  position will match.  See the documentation for \u003ccode\u003e\u003ca\u003eNet\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e\u003cp\u003eNever fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLTerm] -\u003e (HOLTerm, a) -\u003e Net a -\u003e HOL cls thry (Net a)",
        "fct-source": "src/HaskHOL-Core-Basics-Nets.html#netEnter",
        "fct-type": "function",
        "title": "netEnter"
      },
      "index": {
        "description": "Inserts new element paired with pattern term into provided net The first argument is list of variables that should be treated as local constants such that only patterns with those variables at the exact same position will match See the documentation for Net for more details Never fails",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "netEnter",
        "normalized": "[HOLTerm]-\u003e(HOLTerm,a)-\u003eNet a-\u003eHOL b c(Net a)",
        "package": "haskhol-core",
        "partial": "Enter",
        "signature": "[HOLTerm]-\u003e(HOLTerm,a)-\u003eNet a-\u003eHOL cls thry(Net a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:netLookup",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all values stored in a term net that satisfy a provided\n  pattern term.  See the documentation for \u003ccode\u003e\u003ca\u003eNet\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Net a -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Basics-Nets.html#netLookup",
        "fct-type": "function",
        "title": "netLookup"
      },
      "index": {
        "description": "Returns the list of all values stored in term net that satisfy provided pattern term See the documentation for Net for more details",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "netLookup",
        "normalized": "HOLTerm-\u003eNet a-\u003e[a]",
        "package": "haskhol-core",
        "partial": "Lookup",
        "signature": "HOLTerm-\u003eNet a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:netMerge",
      "description": {
        "fct-descr": "\u003cp\u003eMerges two term nets together.  The values for the two nets are merged,\n  maintaining order and uniqueness, with the term labels adjusted appropriately.\n  The algorithm to do so is courtesy of Don Syme via John Harrison's\n  implementation in HOL Light.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "Net a -\u003e Net a -\u003e Net a",
        "fct-source": "src/HaskHOL-Core-Basics-Nets.html#netMerge",
        "fct-type": "function",
        "title": "netMerge"
      },
      "index": {
        "description": "Merges two term nets together The values for the two nets are merged maintaining order and uniqueness with the term labels adjusted appropriately The algorithm to do so is courtesy of Don Syme via John Harrison implementation in HOL Light",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "netMerge",
        "normalized": "Net a-\u003eNet a-\u003eNet a",
        "package": "haskhol-core",
        "partial": "Merge",
        "signature": "Net a-\u003eNet a-\u003eNet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:occursIn",
      "description": {
        "fct-descr": "\u003cp\u003eChecks to see if the first type occurs in the second type.  Note that the\n  predicate is also satisfied if the two types are equal.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLType -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Basics.html#occursIn",
        "fct-type": "function",
        "title": "occursIn"
      },
      "index": {
        "description": "Checks to see if the first type occurs in the second type Note that the predicate is also satisfied if the two types are equal",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "occursIn",
        "normalized": "HOLType-\u003eHOLType-\u003eBool",
        "package": "haskhol-core",
        "partial": "In",
        "signature": "HOLType-\u003eHOLType-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:rand",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the right term of a combination.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided\n  term is not a combination.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#rand",
        "fct-type": "function",
        "title": "rand"
      },
      "index": {
        "description": "Returns the right term of combination Fails with Nothing if the provided term is not combination",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "rand",
        "normalized": "HOLTerm-\u003eMaybe HOLTerm",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLTerm-\u003eMaybe HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:rator",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the left term of a combination.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided\n  term is not a combination.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#rator",
        "fct-type": "function",
        "title": "rator"
      },
      "index": {
        "description": "Returns the left term of combination Fails with Nothing if the provided term is not combination",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "rator",
        "normalized": "HOLTerm-\u003eMaybe HOLTerm",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLTerm-\u003eMaybe HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:stripAbs",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a complex abstraction returning its list of bound variables and its\n  body term.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e ([HOLTerm], HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#stripAbs",
        "fct-type": "function",
        "title": "stripAbs"
      },
      "index": {
        "description": "Destructs complex abstraction returning its list of bound variables and its body term",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "stripAbs",
        "normalized": "HOLTerm-\u003e([HOLTerm],HOLTerm)",
        "package": "haskhol-core",
        "partial": "Abs",
        "signature": "HOLTerm-\u003e([HOLTerm],HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:stripComb",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a complex combination returning its function term and its list of\n  argument terms.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e (HOLTerm, [HOLTerm])",
        "fct-source": "src/HaskHOL-Core-Basics.html#stripComb",
        "fct-type": "function",
        "title": "stripComb"
      },
      "index": {
        "description": "Destructs complex combination returning its function term and its list of argument terms",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "stripComb",
        "normalized": "HOLTerm-\u003e(HOLTerm,[HOLTerm])",
        "package": "haskhol-core",
        "partial": "Comb",
        "signature": "HOLTerm-\u003e(HOLTerm,[HOLTerm])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:stripExists",
      "description": {
        "fct-descr": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003estripAbs\u003c/a\u003e\u003c/code\u003e for existential term quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e ([HOLTerm], HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#stripExists",
        "fct-type": "function",
        "title": "stripExists"
      },
      "index": {
        "description": "specific version of stripAbs for existential term quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "stripExists",
        "normalized": "HOLTerm-\u003e([HOLTerm],HOLTerm)",
        "package": "haskhol-core",
        "partial": "Exists",
        "signature": "HOLTerm-\u003e([HOLTerm],HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:stripForall",
      "description": {
        "fct-descr": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003estripAbs\u003c/a\u003e\u003c/code\u003e for universal term quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e ([HOLTerm], HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#stripForall",
        "fct-type": "function",
        "title": "stripForall"
      },
      "index": {
        "description": "specific version of stripAbs for universal term quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "stripForall",
        "normalized": "HOLTerm-\u003e([HOLTerm],HOLTerm)",
        "package": "haskhol-core",
        "partial": "Forall",
        "signature": "HOLTerm-\u003e([HOLTerm],HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:stripGAbs",
      "description": {
        "fct-descr": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003estripAbs\u003c/a\u003e\u003c/code\u003e for general abstractions.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e ([HOLTerm], HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#stripGAbs",
        "fct-type": "function",
        "title": "stripGAbs"
      },
      "index": {
        "description": "specific version of stripAbs for general abstractions",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "stripGAbs",
        "normalized": "HOLTerm-\u003e([HOLTerm],HOLTerm)",
        "package": "haskhol-core",
        "partial": "GAbs",
        "signature": "HOLTerm-\u003e([HOLTerm],HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:stripTyAll",
      "description": {
        "fct-descr": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003estripAbs\u003c/a\u003e\u003c/code\u003e for term-level universal type quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e ([HOLType], HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#stripTyAll",
        "fct-type": "function",
        "title": "stripTyAll"
      },
      "index": {
        "description": "specific version of stripAbs for term-level universal type quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "stripTyAll",
        "normalized": "HOLTerm-\u003e([HOLType],HOLTerm)",
        "package": "haskhol-core",
        "partial": "Ty All",
        "signature": "HOLTerm-\u003e([HOLType],HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:stripTyEx",
      "description": {
        "fct-descr": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003estripAbs\u003c/a\u003e\u003c/code\u003e for term-level existential type \n  quantification.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e ([HOLType], HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Basics.html#stripTyEx",
        "fct-type": "function",
        "title": "stripTyEx"
      },
      "index": {
        "description": "specific version of stripAbs for term-level existential type quantification",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "stripTyEx",
        "normalized": "HOLTerm-\u003e([HOLType],HOLTerm)",
        "package": "haskhol-core",
        "partial": "Ty Ex",
        "signature": "HOLTerm-\u003e([HOLType],HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:subst",
      "description": {
        "fct-descr": "\u003cp\u003eBasic term substitution.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e when the substitution would \n  result in an invalid term construction.\n\u003c/p\u003e\u003cp\u003eNote that the order of the elements of the substitution pairs matches other \n  environments in the systems, such that for the pair \u003ccode\u003e(A, B)\u003c/code\u003e \u003ccode\u003eB\u003c/code\u003e will be \n  substituted for all instances of \u003ccode\u003eA\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTermEnv -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Basics.html#subst",
        "fct-type": "function",
        "title": "subst"
      },
      "index": {
        "description": "Basic term substitution Throws HOLException when the substitution would result in an invalid term construction Note that the order of the elements of the substitution pairs matches other environments in the systems such that for the pair will be substituted for all instances of",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "subst",
        "normalized": "HOLTermEnv-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLTermEnv-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:thmFrees",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all free term variables in a theorem.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLThm -\u003e [HOLTerm]",
        "fct-source": "src/HaskHOL-Core-Basics.html#thmFrees",
        "fct-type": "function",
        "title": "thmFrees"
      },
      "index": {
        "description": "Returns the list of all free term variables in theorem",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "thmFrees",
        "normalized": "HOLThm-\u003e[HOLTerm]",
        "package": "haskhol-core",
        "partial": "Frees",
        "signature": "HOLThm-\u003e[HOLTerm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:typeMatch",
      "description": {
        "fct-descr": "\u003cp\u003eComputes a tiplet of substitution environments that can be used to make two\n  types match.  The triplet argument can be used to constrain the match, or\n  its three environments can be left empty to find the most general match.\n  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e in the event that a match cannot be found that satisfies\n  the provided constraint.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLType -\u003e SubstTrip -\u003e Maybe SubstTrip",
        "fct-source": "src/HaskHOL-Core-Basics.html#typeMatch",
        "fct-type": "function",
        "title": "typeMatch"
      },
      "index": {
        "description": "Computes tiplet of substitution environments that can be used to make two types match The triplet argument can be used to constrain the match or its three environments can be left empty to find the most general match Fails with Nothing in the event that match cannot be found that satisfies the provided constraint",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "typeMatch",
        "normalized": "HOLType-\u003eHOLType-\u003eSubstTrip-\u003eMaybe SubstTrip",
        "package": "haskhol-core",
        "partial": "Match",
        "signature": "HOLType-\u003eHOLType-\u003eSubstTrip-\u003eMaybe SubstTrip"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:typeVarsInThm",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all free type variables in a theorem.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLThm -\u003e [HOLType]",
        "fct-source": "src/HaskHOL-Core-Basics.html#typeVarsInThm",
        "fct-type": "function",
        "title": "typeVarsInThm"
      },
      "index": {
        "description": "Returns the list of all free type variables in theorem",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "typeVarsInThm",
        "normalized": "HOLThm-\u003e[HOLType]",
        "package": "haskhol-core",
        "partial": "Vars In Thm",
        "signature": "HOLThm-\u003e[HOLType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:tysubst",
      "description": {
        "fct-descr": "\u003cp\u003eBasic type substitution that ignores type operators and prunes the \n  substitution environment of bound variables rather than handle renaming.\n  Works for all types, variable and non-variable alike.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e when \n  the substitution would result in an invalid type construction.\n\u003c/p\u003e\u003cp\u003eNote that the order of the elements of the substitution pairs matches other \n  environments in the systems, such that for the pair \u003ccode\u003e(A, B)\u003c/code\u003e \u003ccode\u003eB\u003c/code\u003e will be \n  substituted for all instances of \u003ccode\u003eA\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Basics",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTypeEnv -\u003e HOLType -\u003e Either String HOLType",
        "fct-source": "src/HaskHOL-Core-Basics.html#tysubst",
        "fct-type": "function",
        "title": "tysubst"
      },
      "index": {
        "description": "Basic type substitution that ignores type operators and prunes the substitution environment of bound variables rather than handle renaming Works for all types variable and non-variable alike Fails with Left when the substitution would result in an invalid type construction Note that the order of the elements of the substitution pairs matches other environments in the systems such that for the pair will be substituted for all instances of",
        "hierarchy": "HaskHOL Core Basics",
        "module": "HaskHOL.Core.Basics",
        "name": "tysubst",
        "normalized": "HOLTypeEnv-\u003eHOLType-\u003eEither String HOLType",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLTypeEnv-\u003eHOLType-\u003eEither String HOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports HaskHOL's non-trivial extensions to the underlying HOL\n  system, i.e. the compile time operations.  These operations are split into\n  three categories:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Methods related to the Protect and Serve Mechanism for sealing and unsealing\n    data against a provided theory context.\n\u003c/li\u003e\u003cli\u003e Methods related to quasi-quoting of \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003es.  \n\u003c/li\u003e\u003cli\u003e Methods related to compile time extension and caching of theory contexts.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "module",
        "fct-source": "src/HaskHOL-Core-Ext.html",
        "fct-type": "module",
        "title": "Ext"
      },
      "index": {
        "description": "This module exports HaskHOL non-trivial extensions to the underlying HOL system i.e the compile time operations These operations are split into three categories Methods related to the Protect and Serve Mechanism for sealing and unsealing data against provided theory context Methods related to quasi-quoting of HOLTerm Methods related to compile time extension and caching of theory contexts",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "Ext",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Ext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#t:PTerm",
      "description": {
        "fct-descr": "\u003cp\u003eType synonym for protected \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "type",
        "fct-source": "src/HaskHOL-Core-Ext-Protected.html#PTerm",
        "fct-type": "type",
        "title": "PTerm"
      },
      "index": {
        "description": "Type synonym for protected HOLTerm",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "PTerm",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "PTerm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#t:PThm",
      "description": {
        "fct-descr": "\u003cp\u003eType synonym for protected \u003ccode\u003e\u003ca\u003eHOLThm\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "type",
        "fct-source": "src/HaskHOL-Core-Ext-Protected.html#PThm",
        "fct-type": "type",
        "title": "PThm"
      },
      "index": {
        "description": "Type synonym for protected HOLThm",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "PThm",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "PThm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#t:PType",
      "description": {
        "fct-descr": "\u003cp\u003eType synonym for protected \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "type",
        "fct-source": "src/HaskHOL-Core-Ext-Protected.html#PType",
        "fct-type": "type",
        "title": "PType"
      },
      "index": {
        "description": "Type synonym for protected HOLType",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "PType",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "PType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#t:Protected",
      "description": {
        "fct-descr": "\u003cp\u003eThe Protected class is the associated type class that facilitates our\n  protect/serve protection mechanism.\n\u003c/p\u003e\u003cp\u003eIt defines:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A data wrapper for our protected type.\n\u003c/li\u003e\u003cli\u003e Conversions to/from this new type, protect and serve.\n\u003c/li\u003e\u003cli\u003e Some boilerplate code to enable template haskell lifting.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "class",
        "fct-source": "src/HaskHOL-Core-Ext-Protected.html#Protected",
        "fct-type": "class",
        "title": "Protected"
      },
      "index": {
        "description": "The Protected class is the associated type class that facilitates our protect serve protection mechanism It defines data wrapper for our protected type Conversions to from this new type protect and serve Some boilerplate code to enable template haskell lifting",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "Protected",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Protected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:base",
      "description": {
        "fct-descr": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003ebaseQuoter\u003c/a\u003e\u003c/code\u003e for the core theory context, \u003ccode\u003e\u003ca\u003ectxtBase\u003c/a\u003e\u003c/code\u003e.\n  Example:\n\u003c/p\u003e\u003cpre\u003e [base| x = y |]\n\u003c/pre\u003e\u003cp\u003ewill parse the provided string and construct the \u003ccode\u003eHOLTerm\u003c/code\u003e \u003ccode\u003ex = y\u003c/code\u003e at compile\n  time.  Note that this term is protected, such that it has to be accessed via\n  \u003ccode\u003e\u003ca\u003eserve\u003c/a\u003e\u003c/code\u003e.  This is advantageous in computations that may be run many times, \n  for example:\n\u003c/p\u003e\u003cpre\u003e do tm \u003c- serve [base| x = y |]\n    ...\n\u003c/pre\u003e\u003cp\u003ewill parse the term exactly once, only checking the \u003ccode\u003ethry\u003c/code\u003e tag of the\n  computation for each evaluation.  Conversely,\n\u003c/p\u003e\u003cpre\u003e do tm \u003c- toHTm \"x = y\"\n    ...\n\u003c/pre\u003e\u003cp\u003ewill parse the term for every evaluation of that computation.  Generally, the\n  use of \u003ccode\u003e\u003ca\u003etoHTm\u003c/a\u003e\u003c/code\u003e is reserved for run time parsing and in larger computations\n  that themselves are evaluated at copmile time to minimize the amount of work\n  Template Haskell has to do.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/HaskHOL-Core-Ext-QQ.html#base",
        "fct-type": "function",
        "title": "base"
      },
      "index": {
        "description": "An instance of baseQuoter for the core theory context ctxtBase Example base will parse the provided string and construct the HOLTerm at compile time Note that this term is protected such that it has to be accessed via serve This is advantageous in computations that may be run many times for example do tm serve base will parse the term exactly once only checking the thry tag of the computation for each evaluation Conversely do tm toHTm will parse the term for every evaluation of that computation Generally the use of toHTm is reserved for run time parsing and in larger computations that themselves are evaluated at copmile time to minimize the amount of work Template Haskell has to do",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "base",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:baseQuoter",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the base quasi-quoter for the HaskHOL system.  When provided with a\n  theory context value, it constucts a theory specific quasi-quoter that parses\n  a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e as a term, protecting and lifting the result.\n\u003c/p\u003e\u003cp\u003eNote that, at this point in time, we only allowing quoting at the expression\n  level.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e QuasiQuoter",
        "fct-source": "src/HaskHOL-Core-Ext-QQ.html#baseQuoter",
        "fct-type": "function",
        "title": "baseQuoter"
      },
      "index": {
        "description": "This is the base quasi-quoter for the HaskHOL system When provided with theory context value it constucts theory specific quasi-quoter that parses String as term protecting and lifting the result Note that at this point in time we only allowing quoting at the expression level",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "baseQuoter",
        "normalized": "HOLContext a-\u003eQuasiQuoter",
        "package": "haskhol-core",
        "partial": "Quoter",
        "signature": "HOLContext thry-\u003eQuasiQuoter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:extendCtxt",
      "description": {
        "fct-descr": "\u003cp\u003eExtends a theory by evaluating a provided computation, returning a list of\n  declarations containing:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A new empty data declaration associated with the new theory.\n\u003c/li\u003e\u003cli\u003e A new type class associated with the new theory to be used with\n    \u003ccode\u003eDerivedCtxt\u003c/code\u003e along with the appropriate instances.\n\u003c/li\u003e\u003cli\u003e The context value for the new theory.\n\u003c/li\u003e\u003cli\u003e A class constraint alias that can be safely exported for use in type\n    signatures external to the library where it was defined.\n\u003c/li\u003e\u003cli\u003e A quasiquoter for the new theory.\n\u003c/li\u003e\u003cli\u003e A compile-time proof function for the new theory.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e extendCtxt ctxtBase loadBoolLib \"bool\"\n\u003c/pre\u003e\u003cp\u003ewill produce the following code\n\u003c/p\u003e\u003cpre\u003e data BoolThry deriving Typeable\n type BoolType = ExtThry BoolThry BaseThry\n\n class BaseCtxt a =\u003e BoolContext a\n instance BaseCtxt b =\u003e BoolContext (ExtThry BoolThry b)\n instance BoolContext b =\u003e BoolContext (ExtThry a b)\n \n class BoolContext a =\u003e BoolCtxt a\n instance BoolContext a =\u003e BoolCtxt a\n\n ctxtBool :: HOLContext BoolType\n ctxtBool = ...\n\n bool :: QuasiQuoter\n bool = baseQuoter ctxtBool\n\n proveBool :: String -\u003e HOL Proof BoolType HOLThm -\u003e Q [Dec]\n proveBool = proveCompileTime ctxtBool\n\n proveBoolMany :: [String] -\u003e HOL Proof BoolType [HOLThm] -\u003e Q [Dec]\n proveBoolMany = proveCompileTimeMany ctxtBool\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e HOL cls thry () -\u003e String -\u003e Q [Dec]",
        "fct-source": "src/HaskHOL-Core-Ext.html#extendCtxt",
        "fct-type": "function",
        "title": "extendCtxt"
      },
      "index": {
        "description": "Extends theory by evaluating provided computation returning list of declarations containing new empty data declaration associated with the new theory new type class associated with the new theory to be used with DerivedCtxt along with the appropriate instances The context value for the new theory class constraint alias that can be safely exported for use in type signatures external to the library where it was defined quasiquoter for the new theory compile-time proof function for the new theory For example extendCtxt ctxtBase loadBoolLib bool will produce the following code data BoolThry deriving Typeable type BoolType ExtThry BoolThry BaseThry class BaseCtxt BoolContext instance BaseCtxt BoolContext ExtThry BoolThry instance BoolContext BoolContext ExtThry class BoolContext BoolCtxt instance BoolContext BoolCtxt ctxtBool HOLContext BoolType ctxtBool bool QuasiQuoter bool baseQuoter ctxtBool proveBool String HOL Proof BoolType HOLThm Dec proveBool proveCompileTime ctxtBool proveBoolMany String HOL Proof BoolType HOLThm Dec proveBoolMany proveCompileTimeMany ctxtBool",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "extendCtxt",
        "normalized": "HOLContext a-\u003eHOL b a()-\u003eString-\u003eQ[Dec]",
        "package": "haskhol-core",
        "partial": "Ctxt",
        "signature": "HOLContext thry-\u003eHOL cls thry()-\u003eString-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:extractAxiom",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts an axiom from a provided context, protecting and lifting it with\n  \u003ccode\u003e\u003ca\u003eliftProtected\u003c/a\u003e\u003c/code\u003e.  The extraction is performed by looking for an axioms of\n  a given name, as specified when the axiom was created with \u003ccode\u003e\u003ca\u003enewAxiom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e String -\u003e Q [Dec]",
        "fct-source": "src/HaskHOL-Core-Ext-Protected.html#extractAxiom",
        "fct-type": "function",
        "title": "extractAxiom"
      },
      "index": {
        "description": "Extracts an axiom from provided context protecting and lifting it with liftProtected The extraction is performed by looking for an axioms of given name as specified when the axiom was created with newAxiom",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "extractAxiom",
        "normalized": "HOLContext a-\u003eString-\u003eQ[Dec]",
        "package": "haskhol-core",
        "partial": "Axiom",
        "signature": "HOLContext thry-\u003eString-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:extractBasicDefinition",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts a basic term definition from a provided context, protecting and \n  lifting it with \u003ccode\u003e\u003ca\u003eliftProtected\u003c/a\u003e\u003c/code\u003e.  The extraction is performed by looking for \n  a definition whose left hand side matches a provided constant name.\n  For example:\n\u003c/p\u003e\u003cpre\u003e extractBasicDefinition ctxtBool \"defT\" \"T\"\n\u003c/pre\u003e\u003cp\u003ewill return the spliceable list of declarations for the following theorem\n\u003c/p\u003e\u003cpre\u003e |- T = ( p:bool . p) = ( p:bool . p)\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e String -\u003e String -\u003e Q [Dec]",
        "fct-source": "src/HaskHOL-Core-Ext-Protected.html#extractBasicDefinition",
        "fct-type": "function",
        "title": "extractBasicDefinition"
      },
      "index": {
        "description": "Extracts basic term definition from provided context protecting and lifting it with liftProtected The extraction is performed by looking for definition whose left hand side matches provided constant name For example extractBasicDefinition ctxtBool defT will return the spliceable list of declarations for the following theorem bool bool",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "extractBasicDefinition",
        "normalized": "HOLContext a-\u003eString-\u003eString-\u003eQ[Dec]",
        "package": "haskhol-core",
        "partial": "Basic Definition",
        "signature": "HOLContext thry-\u003eString-\u003eString-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:liftProtected",
      "description": {
        "fct-descr": "\u003cp\u003eLifts a protected data value as a declaration of a given name with an ascribed\n  type signature.\n  For example:\n\u003c/p\u003e\u003cpre\u003e liftProtected \"protX\" (x::PData a Bool)\n\u003c/pre\u003e\u003cp\u003eproduces the following list of spliceable declarations\n\u003c/p\u003e\u003cpre\u003e [ [d| protX :: forall thry. BoolCtxt thry =\u003e PData a Bool |]\n , [d| protX = x |] ]\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eextractAxiom\u003c/a\u003e\u003c/code\u003e for a basic example of how this function may be used.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e PData a thry -\u003e Q [Dec]",
        "fct-source": "src/HaskHOL-Core-Ext-Protected.html#liftProtected",
        "fct-type": "function",
        "title": "liftProtected"
      },
      "index": {
        "description": "Lifts protected data value as declaration of given name with an ascribed type signature For example liftProtected protX PData Bool produces the following list of spliceable declarations protX forall thry BoolCtxt thry PData Bool protX See extractAxiom for basic example of how this function may be used",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "liftProtected",
        "normalized": "String-\u003ePData a b-\u003eQ[Dec]",
        "package": "haskhol-core",
        "partial": "Protected",
        "signature": "String-\u003ePData a thry-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:liftProtectedExp",
      "description": {
        "fct-descr": "\u003cp\u003eLifts a protected data value as an expression using an ascribed type.\n  For example:\n\u003c/p\u003e\u003cpre\u003e liftProtectedExp (x::PData a Bool)\n\u003c/pre\u003e\u003cp\u003eproduces the following spliceable expression\n\u003c/p\u003e\u003cpre\u003e [| x :: forall thry. BoolCtxt thry =\u003e PData a Bool |]\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "PData a thry -\u003e Q Exp",
        "fct-source": "src/HaskHOL-Core-Ext-Protected.html#liftProtectedExp",
        "fct-type": "function",
        "title": "liftProtectedExp"
      },
      "index": {
        "description": "Lifts protected data value as an expression using an ascribed type For example liftProtectedExp PData Bool produces the following spliceable expression forall thry BoolCtxt thry PData Bool",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "liftProtectedExp",
        "normalized": "PData a b-\u003eQ Exp",
        "package": "haskhol-core",
        "partial": "Protected Exp",
        "signature": "PData a thry-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:protect",
      "description": {
        "fct-descr": "\u003cp\u003eProtects a value by sealing it against a provided context.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e a -\u003e PData a thry",
        "fct-source": "src/HaskHOL-Core-Ext-Protected.html#protect",
        "fct-type": "method",
        "title": "protect"
      },
      "index": {
        "description": "Protects value by sealing it against provided context",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "protect",
        "normalized": "HOLContext a-\u003eb-\u003ePData b a",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLContext thry-\u003ea-\u003ePData a thry"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:proveCompileTime",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates a proof compilation, protects it with the theory used to evaluate\n  it, and then lifts it as a declaration of a given name with an ascribed type\n  signature.\n\u003c/p\u003e\u003cp\u003eRelies internally on \u003ccode\u003e\u003ca\u003eprotect\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftProtected\u003c/a\u003e\u003c/code\u003e to guarantee that the\n  resultant theorem is sealed with the right type.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e String -\u003e HOL Proof thry HOLThm -\u003e Q [Dec]",
        "fct-source": "src/HaskHOL-Core-Ext-Protected.html#proveCompileTime",
        "fct-type": "function",
        "title": "proveCompileTime"
      },
      "index": {
        "description": "Evaluates proof compilation protects it with the theory used to evaluate it and then lifts it as declaration of given name with an ascribed type signature Relies internally on protect and liftProtected to guarantee that the resultant theorem is sealed with the right type",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "proveCompileTime",
        "normalized": "HOLContext a-\u003eString-\u003eHOL Proof a HOLThm-\u003eQ[Dec]",
        "package": "haskhol-core",
        "partial": "Compile Time",
        "signature": "HOLContext thry-\u003eString-\u003eHOL Proof thry HOLThm-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:proveCompileTimeMany",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eproveCompileTime\u003c/a\u003e\u003c/code\u003e that works for a proof computation returning\n  multiple theorems.\n\u003c/p\u003e\u003cp\u003eNote that each resultant theorem must have a unique, provided name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e [String] -\u003e HOL Proof thry [HOLThm] -\u003e Q [Dec]",
        "fct-source": "src/HaskHOL-Core-Ext-Protected.html#proveCompileTimeMany",
        "fct-type": "function",
        "title": "proveCompileTimeMany"
      },
      "index": {
        "description": "version of proveCompileTime that works for proof computation returning multiple theorems Note that each resultant theorem must have unique provided name",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "proveCompileTimeMany",
        "normalized": "HOLContext a-\u003e[String]-\u003eHOL Proof a[HOLThm]-\u003eQ[Dec]",
        "package": "haskhol-core",
        "partial": "Compile Time Many",
        "signature": "HOLContext thry-\u003e[String]-\u003eHOL Proof thry[HOLThm]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:serve",
      "description": {
        "fct-descr": "\u003cp\u003eUnseals a protected value, returning it in a monadic computation whose\n      current working theory satisfies the context that the value was originally\n      sealed with.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "PData a thry -\u003e HOL cls thry a",
        "fct-source": "src/HaskHOL-Core-Ext-Protected.html#serve",
        "fct-type": "method",
        "title": "serve"
      },
      "index": {
        "description": "Unseals protected value returning it in monadic computation whose current working theory satisfies the context that the value was originally sealed with",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "serve",
        "normalized": "PData a b-\u003eHOL c b a",
        "package": "haskhol-core",
        "partial": "",
        "signature": "PData a thry-\u003eHOL cls thry a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:str",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a specialized quasi-quoter for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.  It can be used to strip\n  white space and automatically escape special characters.  It is typically used\n  in conjunction with \u003ccode\u003e\u003ca\u003etoHTm\u003c/a\u003e\u003c/code\u003e directly or indirectly.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Ext",
        "fct-package": "haskhol-core",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/HaskHOL-Core-Ext-QQ.html#str",
        "fct-type": "function",
        "title": "str"
      },
      "index": {
        "description": "This is specialized quasi-quoter for String It can be used to strip white space and automatically escape special characters It is typically used in conjunction with toHTm directly or indirectly",
        "hierarchy": "HaskHOL Core Ext",
        "module": "HaskHOL.Core.Ext",
        "name": "str",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a safe view of HOL terms for HaskHOL.  It also defines\n  the primitive functions related to terms.  For clarity, these functions have\n  been seperated based on their influential system: HOL Light, Stateless HOL,\n  and HOL2P.\n\u003c/p\u003e\u003cp\u003eNote that, per the stateless approach, any stateful, but still primitive,\n  functions related to terms have been relocated to the \u003ca\u003eHaskHOL.Core.State\u003c/a\u003e\n  module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "module",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html",
        "fct-type": "module",
        "title": "Terms"
      },
      "index": {
        "description": "This module exports safe view of HOL terms for HaskHOL It also defines the primitive functions related to terms For clarity these functions have been seperated based on their influential system HOL Light Stateless HOL and HOL2P Note that per the stateless approach any stateful but still primitive functions related to terms have been relocated to the HaskHOL.Core.State module",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "Terms",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Terms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#t:ConstTag",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type for constant tags, \u003ccode\u003e\u003ca\u003eConstTag\u003c/a\u003e\u003c/code\u003e, follows identically from the\n  implementation in Stateless HOL.  For more information regarding construction\n  of the different tags, see the documentation of the following functions:\n  \u003ccode\u003enewPrimConst\u003c/code\u003e, \u003ccode\u003enewDefinedConst\u003c/code\u003e, and \u003ccode\u003enewDefinedTypeOp\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#ConstTag",
        "fct-type": "data",
        "title": "ConstTag"
      },
      "index": {
        "description": "The data type for constant tags ConstTag follows identically from the implementation in Stateless HOL For more information regarding construction of the different tags see the documentation of the following functions newPrimConst newDefinedConst and newDefinedTypeOp",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "ConstTag",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Const Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#t:HOLTerm",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003e data type defines the internal constructors for HOL terms in\n  HaskHOL.  For more details, see the documentation for its view pattern data\n  type, \u003ccode\u003e\u003ca\u003eHOLTermView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTerm",
        "fct-type": "data",
        "title": "HOLTerm"
      },
      "index": {
        "description": "The HOLTerm data type defines the internal constructors for HOL terms in HaskHOL For more details see the documentation for its view pattern data type HOLTermView",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "HOLTerm",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOLTerm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#t:HOLTermEnv",
      "description": {
        "fct-descr": "\u003cp\u003eType synonym for the commonly used, list-based, term environment.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "type",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermEnv",
        "fct-type": "type",
        "title": "HOLTermEnv"
      },
      "index": {
        "description": "Type synonym for the commonly used list-based term environment",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "HOLTermEnv",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOLTerm Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#t:HOLTermView",
      "description": {
        "fct-descr": "\u003cp\u003eThe view pattern data type for HOL terms.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermView",
        "fct-type": "data",
        "title": "HOLTermView"
      },
      "index": {
        "description": "The view pattern data type for HOL terms",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "HOLTermView",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOLTerm View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#t:Inst",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eInst\u003c/code\u003e class provides the framework for type instantiation in HaskHOL.\n  Note that in the simplest cases, instantiation is simply a type substitution\n  for the types of term variables and constants.  Therefore, instantiation is \n  constrained by the \u003ccode\u003e\u003ca\u003eTypeSubst\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003eThe move to a polymorphic type system further complicates things as types can\n  now be bound at the term level, requiring renaming for type instantiation.\n  Since we have three different possible substitution environment types, we have\n  three different possible instantiation environment types and, therefore, three\n  different ways to handle renaming:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For \u003ccode\u003e(x::\u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003e, r::\u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e substitution pairs we rename in the case \n    where a type abstraction binds a type variable present in \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ex\u003c/code\u003e is\n    present in the body of the type abstraction.\n\u003c/li\u003e\u003cli\u003e For \u003ccode\u003e(_::\u003ccode\u003e\u003ca\u003eTypeOp\u003c/a\u003e\u003c/code\u003e, _::\u003ccode\u003e\u003ca\u003eTypeOp\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e substitution pairs we can safely ignore \n    renaming as our logic does not permit the binding of type operator \n    variables.\n\u003c/li\u003e\u003cli\u003e For \u003ccode\u003e(x::\u003ccode\u003e\u003ca\u003eTypeOp\u003c/a\u003e\u003c/code\u003e, r::\u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e substitution pairs we rename in the case \n    where a type abstraction binds a type variable present in \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ex\u003c/code\u003e is \n    present in the body of the type abstraction.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eJust as we did for the \u003ccode\u003e\u003ca\u003eTypeSubst\u003c/a\u003e\u003c/code\u003e class, we hide the internals of \u003ccode\u003eInst\u003c/code\u003e to\n  prevent unsound re-definition.  The correct functions to call for\n  type instantiation are \u003ccode\u003e\u003ca\u003einst\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003einstFull\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "class",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#Inst",
        "fct-type": "class",
        "title": "Inst"
      },
      "index": {
        "description": "The Inst class provides the framework for type instantiation in HaskHOL Note that in the simplest cases instantiation is simply type substitution for the types of term variables and constants Therefore instantiation is constrained by the TypeSubst class The move to polymorphic type system further complicates things as types can now be bound at the term level requiring renaming for type instantiation Since we have three different possible substitution environment types we have three different possible instantiation environment types and therefore three different ways to handle renaming For HOLTerm HOLTerm substitution pairs we rename in the case where type abstraction binds type variable present in and is present in the body of the type abstraction For TypeOp TypeOp substitution pairs we can safely ignore renaming as our logic does not permit the binding of type operator variables For TypeOp HOLTerm substitution pairs we rename in the case where type abstraction binds type variable present in and is present in the body of the type abstraction Just as we did for the TypeSubst class we hide the internals of Inst to prevent unsound re-definition The correct functions to call for type instantiation are inst and instFull",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "Inst",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Inst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:Abs",
      "description": {
        "fct-descr": "\u003cp\u003eA term abstraction consisting of a bound term and a body term.  Note that\n      the bound term must be a type variable.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "Abs HOLTerm HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermView",
        "fct-type": "function",
        "title": "Abs"
      },
      "index": {
        "description": "term abstraction consisting of bound term and body term Note that the bound term must be type variable",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "Abs",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Abs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:Comb",
      "description": {
        "fct-descr": "\u003cp\u003eA term application consisting of a function term and argument term.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "Comb HOLTerm HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermView",
        "fct-type": "function",
        "title": "Comb"
      },
      "index": {
        "description": "term application consisting of function term and argument term",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "Comb",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Comb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:Const",
      "description": {
        "fct-descr": "\u003cp\u003eA term constant consisting of a name, type, and tag.  See \u003ccode\u003e\u003ca\u003eConstTag\u003c/a\u003e\u003c/code\u003e for \n      more information.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "Const String HOLType ConstTag",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermView",
        "fct-type": "function",
        "title": "Const"
      },
      "index": {
        "description": "term constant consisting of name type and tag See ConstTag for more information",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "Const",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:TyAbs",
      "description": {
        "fct-descr": "\u003cp\u003eA term-level, type abstraction consisting of a bound type and a body term.\n      Note that the bound type must be a small, type variable.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "TyAbs HOLType HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermView",
        "fct-type": "function",
        "title": "TyAbs"
      },
      "index": {
        "description": "term-level type abstraction consisting of bound type and body term Note that the bound type must be small type variable",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "TyAbs",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Ty Abs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:TyComb",
      "description": {
        "fct-descr": "\u003cp\u003eA term-level, type application consisting of a body term and an argument \n      type. Note that the body term must have a universal type.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "TyComb HOLTerm HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermView",
        "fct-type": "function",
        "title": "TyComb"
      },
      "index": {
        "description": "term-level type application consisting of body term and an argument type Note that the body term must have universal type",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "TyComb",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Ty Comb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:Var",
      "description": {
        "fct-descr": "\u003cp\u003eA term variable consisting of a name and type.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "Var String HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermView",
        "fct-type": "function",
        "title": "Var"
      },
      "index": {
        "description": "term variable consisting of name and type",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "Var",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:aConv",
      "description": {
        "fct-descr": "\u003cp\u003eTests if two terms are alpha-equivalent\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#aConv",
        "fct-type": "function",
        "title": "aConv"
      },
      "index": {
        "description": "Tests if two terms are alpha-equivalent",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "aConv",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Conv",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:alphaOrder",
      "description": {
        "fct-descr": "\u003cp\u003eProvides an ordering for two terms modulo alpha-equivalence\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e Ordering",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#alphaOrder",
        "fct-type": "function",
        "title": "alphaOrder"
      },
      "index": {
        "description": "Provides an ordering for two terms modulo alpha-equivalence",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "alphaOrder",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eOrdering",
        "package": "haskhol-core",
        "partial": "Order",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:catFrees",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all free, term variables in a list of terms.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLTerm] -\u003e [HOLTerm]",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#catFrees",
        "fct-type": "function",
        "title": "catFrees"
      },
      "index": {
        "description": "Returns list of all free term variables in list of terms",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "catFrees",
        "normalized": "[HOLTerm]-\u003e[HOLTerm]",
        "package": "haskhol-core",
        "partial": "Frees",
        "signature": "[HOLTerm]-\u003e[HOLTerm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:destAbs",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a term abstraction, returning its bound term and body term. Fails\n  with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not an abstraction.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#destAbs",
        "fct-type": "function",
        "title": "destAbs"
      },
      "index": {
        "description": "Destructs term abstraction returning its bound term and body term Fails with Nothing if the provided term is not an abstraction",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "destAbs",
        "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Abs",
        "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:destComb",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a term combination, returning its function and argument terms.  \n  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not a combination.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#destComb",
        "fct-type": "function",
        "title": "destComb"
      },
      "index": {
        "description": "Destructs term combination returning its function and argument terms Fails with Nothing if the provided term is not combination",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "destComb",
        "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Comb",
        "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:destConst",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a term constant, returning its name and type.  Note that no constant\n  tag information is returned.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is\n  not a constant.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (String, HOLType)",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#destConst",
        "fct-type": "function",
        "title": "destConst"
      },
      "index": {
        "description": "Destructs term constant returning its name and type Note that no constant tag information is returned Fails with Nothing if the provided term is not constant",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "destConst",
        "normalized": "HOLTerm-\u003eMaybe(String,HOLType)",
        "package": "haskhol-core",
        "partial": "Const",
        "signature": "HOLTerm-\u003eMaybe(String,HOLType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:destEq",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs an equation term, returning the left and right hand side arguments.\n  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the term is not an equation, i.e. of the form \u003ccode\u003el = r\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#destEq",
        "fct-type": "function",
        "title": "destEq"
      },
      "index": {
        "description": "Destructs an equation term returning the left and right hand side arguments Fails with Nothing if the term is not an equation i.e of the form",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "destEq",
        "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Eq",
        "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:destTyAbs",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a type abstraction, returning its bound type and body term.  Fails\n  with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not a type abstraction.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLType, HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#destTyAbs",
        "fct-type": "function",
        "title": "destTyAbs"
      },
      "index": {
        "description": "Destructs type abstraction returning its bound type and body term Fails with Nothing if the provided term is not type abstraction",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "destTyAbs",
        "normalized": "HOLTerm-\u003eMaybe(HOLType,HOLTerm)",
        "package": "haskhol-core",
        "partial": "Ty Abs",
        "signature": "HOLTerm-\u003eMaybe(HOLType,HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:destTyComb",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a type combination, returning its body term and type argument.\n  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not a type combination.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLType)",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#destTyComb",
        "fct-type": "function",
        "title": "destTyComb"
      },
      "index": {
        "description": "Destructs type combination returning its body term and type argument Fails with Nothing if the provided term is not type combination",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "destTyComb",
        "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLType)",
        "package": "haskhol-core",
        "partial": "Ty Comb",
        "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:destVar",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a term variable, returning its name and type.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n  if the provided term is not a variable.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe (String, HOLType)",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#destVar",
        "fct-type": "function",
        "title": "destVar"
      },
      "index": {
        "description": "Destructs term variable returning its name and type Fails with Nothing if the provided term is not variable",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "destVar",
        "normalized": "HOLTerm-\u003eMaybe(String,HOLType)",
        "package": "haskhol-core",
        "partial": "Var",
        "signature": "HOLTerm-\u003eMaybe(String,HOLType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:frees",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all free, term variables in a term.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e [HOLTerm]",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#frees",
        "fct-type": "function",
        "title": "frees"
      },
      "index": {
        "description": "Returns list of all free term variables in term",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "frees",
        "normalized": "HOLTerm-\u003e[HOLTerm]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLTerm-\u003e[HOLTerm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:freesIn",
      "description": {
        "fct-descr": "\u003cp\u003eChecks a list of term variables to see if they are all free in a give term.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLTerm] -\u003e HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#freesIn",
        "fct-type": "function",
        "title": "freesIn"
      },
      "index": {
        "description": "Checks list of term variables to see if they are all free in give term",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "freesIn",
        "normalized": "[HOLTerm]-\u003eHOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "In",
        "signature": "[HOLTerm]-\u003eHOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:inst",
      "description": {
        "fct-descr": "\u003cp\u003eType instantiation for terms.  Accepts the same types of substitution\n  environments as discussed in the documentation for the \u003ccode\u003e\u003ca\u003eTypeSubst\u003c/a\u003e\u003c/code\u003e class, \n  with invalid substitution pairs being pruned internally by \u003ccode\u003e\u003ca\u003etypeSubst\u003c/a\u003e\u003c/code\u003e as \n  necessary.  \n\u003c/p\u003e\u003cp\u003eFor more information on why the \u003ccode\u003e\u003ca\u003eInst\u003c/a\u003e\u003c/code\u003e class constraint is necessary and how \n  renaming of bound types is performed, see that classes documentation.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "[(a, b)] -\u003e HOLTerm -\u003e HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#inst",
        "fct-type": "function",
        "title": "inst"
      },
      "index": {
        "description": "Type instantiation for terms Accepts the same types of substitution environments as discussed in the documentation for the TypeSubst class with invalid substitution pairs being pruned internally by typeSubst as necessary For more information on why the Inst class constraint is necessary and how renaming of bound types is performed see that classes documentation",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "inst",
        "normalized": "[(a,b)]-\u003eHOLTerm-\u003eHOLTerm",
        "package": "haskhol-core",
        "partial": "",
        "signature": "[(a,b)]-\u003eHOLTerm-\u003eHOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:instConst",
      "description": {
        "fct-descr": "\u003cp\u003eA simplified version of \u003ccode\u003e\u003ca\u003einst\u003c/a\u003e\u003c/code\u003e that works only for term constants.  Fails with\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not a constant.  Used internally by \n  \u003ccode\u003emkConst\u003c/code\u003e to guarantee that only constants are constructed.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e [(a, b)] -\u003e Maybe HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#instConst",
        "fct-type": "function",
        "title": "instConst"
      },
      "index": {
        "description": "simplified version of inst that works only for term constants Fails with Nothing if the provided term is not constant Used internally by mkConst to guarantee that only constants are constructed",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "instConst",
        "normalized": "HOLTerm-\u003e[(a,b)]-\u003eMaybe HOLTerm",
        "package": "haskhol-core",
        "partial": "Const",
        "signature": "HOLTerm-\u003e[(a,b)]-\u003eMaybe HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:instConstFull",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003einstConst\u003c/a\u003e\u003c/code\u003e that accepts a triplet of type substitition \n  environments.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e SubstTrip -\u003e Maybe HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#instConstFull",
        "fct-type": "function",
        "title": "instConstFull"
      },
      "index": {
        "description": "version of instConst that accepts triplet of type substitition environments",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "instConstFull",
        "normalized": "HOLTerm-\u003eSubstTrip-\u003eMaybe HOLTerm",
        "package": "haskhol-core",
        "partial": "Const Full",
        "signature": "HOLTerm-\u003eSubstTrip-\u003eMaybe HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:instFull",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003einst\u003c/a\u003e\u003c/code\u003e that accepts a triplet of type substitution environments.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "SubstTrip -\u003e HOLTerm -\u003e HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#instFull",
        "fct-type": "function",
        "title": "instFull"
      },
      "index": {
        "description": "version of inst that accepts triplet of type substitution environments",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "instFull",
        "normalized": "SubstTrip-\u003eHOLTerm-\u003eHOLTerm",
        "package": "haskhol-core",
        "partial": "Full",
        "signature": "SubstTrip-\u003eHOLTerm-\u003eHOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:isAbs",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for term abstractions.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#isAbs",
        "fct-type": "function",
        "title": "isAbs"
      },
      "index": {
        "description": "Predicate for term abstractions",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "isAbs",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Abs",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:isComb",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for term combinations.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#isComb",
        "fct-type": "function",
        "title": "isComb"
      },
      "index": {
        "description": "Predicate for term combinations",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "isComb",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Comb",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:isConst",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for term constants.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#isConst",
        "fct-type": "function",
        "title": "isConst"
      },
      "index": {
        "description": "Predicate for term constants",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "isConst",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Const",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:isEq",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for equations, i.e. terms of the form \u003ccode\u003el = r\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#isEq",
        "fct-type": "function",
        "title": "isEq"
      },
      "index": {
        "description": "Predicate for equations i.e terms of the form",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "isEq",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Eq",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:isTyAbs",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for type abstraction terms.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#isTyAbs",
        "fct-type": "function",
        "title": "isTyAbs"
      },
      "index": {
        "description": "Predicate for type abstraction terms",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "isTyAbs",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Ty Abs",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:isTyComb",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for type combination terms.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#isTyComb",
        "fct-type": "function",
        "title": "isTyComb"
      },
      "index": {
        "description": "Predicate for type combination terms",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "isTyComb",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Ty Comb",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:isVar",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for term variables.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#isVar",
        "fct-type": "function",
        "title": "isVar"
      },
      "index": {
        "description": "Predicate for term variables",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "isVar",
        "normalized": "HOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Var",
        "signature": "HOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:mkAbs",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a term abstraction of a given bound term and body term.  Fails with\n  \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the bound term is not a variable.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e Either String HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#mkAbs",
        "fct-type": "function",
        "title": "mkAbs"
      },
      "index": {
        "description": "Constructs term abstraction of given bound term and body term Fails with Left if the bound term is not variable",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "mkAbs",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
        "package": "haskhol-core",
        "partial": "Abs",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:mkComb",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a combination of two given terms.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the\n  following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The first term does not have a function type.\n\u003c/li\u003e\u003cli\u003e The types of the two terms does not agree.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e Either String HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#mkComb",
        "fct-type": "function",
        "title": "mkComb"
      },
      "index": {
        "description": "Constructs combination of two given terms Fails with Left in the following cases The first term does not have function type The types of the two terms does not agree",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "mkComb",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
        "package": "haskhol-core",
        "partial": "Comb",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:mkTyAbs",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a type abstraction term given a bound type and a body term.  Fails\n  with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The bound type is not a small type variable.\n\u003c/li\u003e\u003cli\u003e The bound type variable occurs in the type of a free variable in the body \n    term.  \n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLTerm -\u003e Either String HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#mkTyAbs",
        "fct-type": "function",
        "title": "mkTyAbs"
      },
      "index": {
        "description": "Constructs type abstraction term given bound type and body term Fails with Left in the following cases The bound type is not small type variable The bound type variable occurs in the type of free variable in the body term",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "mkTyAbs",
        "normalized": "HOLType-\u003eHOLTerm-\u003eEither String HOLTerm",
        "package": "haskhol-core",
        "partial": "Ty Abs",
        "signature": "HOLType-\u003eHOLTerm-\u003eEither String HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:mkTyComb",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a type combination term given a body term and a type argument to \n  apply.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The type argument is not a small type.\n\u003c/li\u003e\u003cli\u003e The type of the body term is not a universal type.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLType -\u003e Either String HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#mkTyComb",
        "fct-type": "function",
        "title": "mkTyComb"
      },
      "index": {
        "description": "Constructs type combination term given body term and type argument to apply Fails with Left in the following cases The type argument is not small type The type of the body term is not universal type",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "mkTyComb",
        "normalized": "HOLTerm-\u003eHOLType-\u003eEither String HOLTerm",
        "package": "haskhol-core",
        "partial": "Ty Comb",
        "signature": "HOLTerm-\u003eHOLType-\u003eEither String HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:mkVar",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a term variable of a given name and type.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLType -\u003e HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#mkVar",
        "fct-type": "function",
        "title": "mkVar"
      },
      "index": {
        "description": "Constructs term variable of given name and type",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "mkVar",
        "normalized": "String-\u003eHOLType-\u003eHOLTerm",
        "package": "haskhol-core",
        "partial": "Var",
        "signature": "String-\u003eHOLType-\u003eHOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:newPrimConst",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a primitive constant given a name and type.  Note that primitive\n  constants are tagged with a \u003ccode\u003ePrim\u003c/code\u003e \u003ccode\u003e\u003ca\u003eConstTag\u003c/a\u003e\u003c/code\u003e indicating that they have no\n  definition.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLType -\u003e HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#newPrimConst",
        "fct-type": "function",
        "title": "newPrimConst"
      },
      "index": {
        "description": "Constructs primitive constant given name and type Note that primitive constants are tagged with Prim ConstTag indicating that they have no definition",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "newPrimConst",
        "normalized": "String-\u003eHOLType-\u003eHOLTerm",
        "package": "haskhol-core",
        "partial": "Prim Const",
        "signature": "String-\u003eHOLType-\u003eHOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:primMkEq",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an equation term given the left and right hand side arguments.  \n  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the types of the terms are not alpha-equivalent.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e Either String HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#primMkEq",
        "fct-type": "function",
        "title": "primMkEq"
      },
      "index": {
        "description": "Constructs an equation term given the left and right hand side arguments Fails with Left if the types of the terms are not alpha-equivalent",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "primMkEq",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
        "package": "haskhol-core",
        "partial": "Mk Eq",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:tmEq",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an instance of the HOL equality constant, \u003ccode\u003e=\u003c/code\u003e, for a given type.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#tmEq",
        "fct-type": "function",
        "title": "tmEq"
      },
      "index": {
        "description": "Constructs an instance of the HOL equality constant for given type",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "tmEq",
        "normalized": "HOLType-\u003eHOLTerm",
        "package": "haskhol-core",
        "partial": "Eq",
        "signature": "HOLType-\u003eHOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:typeOpVarsInTerm",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all type operator variables in a term.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e [TypeOp]",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#typeOpVarsInTerm",
        "fct-type": "function",
        "title": "typeOpVarsInTerm"
      },
      "index": {
        "description": "Returns the list of all type operator variables in term",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "typeOpVarsInTerm",
        "normalized": "HOLTerm-\u003e[TypeOp]",
        "package": "haskhol-core",
        "partial": "Op Vars In Term",
        "signature": "HOLTerm-\u003e[TypeOp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:typeOpVarsInTerms",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all type operator variables in a list of terms.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLTerm] -\u003e [TypeOp]",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#typeOpVarsInTerms",
        "fct-type": "function",
        "title": "typeOpVarsInTerms"
      },
      "index": {
        "description": "Returns the list of all type operator variables in list of terms",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "typeOpVarsInTerms",
        "normalized": "[HOLTerm]-\u003e[TypeOp]",
        "package": "haskhol-core",
        "partial": "Op Vars In Terms",
        "signature": "[HOLTerm]-\u003e[TypeOp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:typeVarsInTerm",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all free, type variables in a term, not including \n  type operator variables.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e [HOLType]",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#typeVarsInTerm",
        "fct-type": "function",
        "title": "typeVarsInTerm"
      },
      "index": {
        "description": "Returns list of all free type variables in term not including type operator variables",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "typeVarsInTerm",
        "normalized": "HOLTerm-\u003e[HOLType]",
        "package": "haskhol-core",
        "partial": "Vars In Term",
        "signature": "HOLTerm-\u003e[HOLType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:typeVarsInTerms",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all free, type variables in a list of terms, not including\n  type operator variables.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLTerm] -\u003e [HOLType]",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#typeVarsInTerms",
        "fct-type": "function",
        "title": "typeVarsInTerms"
      },
      "index": {
        "description": "Returns list of all free type variables in list of terms not including type operator variables",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "typeVarsInTerms",
        "normalized": "[HOLTerm]-\u003e[HOLType]",
        "package": "haskhol-core",
        "partial": "Vars In Terms",
        "signature": "[HOLTerm]-\u003e[HOLType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:varFreeIn",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a variable or constant term is free in a given term.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#varFreeIn",
        "fct-type": "function",
        "title": "varFreeIn"
      },
      "index": {
        "description": "Checks if variable or constant term is free in given term",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "varFreeIn",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eBool",
        "package": "haskhol-core",
        "partial": "Free In",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:varSubst",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a basic term substitution using a substitution environment containing\n  pairs consisting of a term variable and a term to be substituted for that \n  variable.  Note that the order of elements in a substitution pair follows the\n  convention of most Haskell libraries, rather than the traditional HOL \n  convention:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The second element is substituted for the first, i.e. the substitution pair\n    \u003ccode\u003e(A, \\ x.x)\u003c/code\u003e indicates that the lambda term \u003ccode\u003e\\x.x\u003c/code\u003e should be substituted \n    for the term variable \u003ccode\u003eA\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTermEnv -\u003e HOLTerm -\u003e HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#varSubst",
        "fct-type": "function",
        "title": "varSubst"
      },
      "index": {
        "description": "Performs basic term substitution using substitution environment containing pairs consisting of term variable and term to be substituted for that variable Note that the order of elements in substitution pair follows the convention of most Haskell libraries rather than the traditional HOL convention The second element is substituted for the first i.e the substitution pair x.x indicates that the lambda term x.x should be substituted for the term variable",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "varSubst",
        "normalized": "HOLTermEnv-\u003eHOLTerm-\u003eHOLTerm",
        "package": "haskhol-core",
        "partial": "Subst",
        "signature": "HOLTermEnv-\u003eHOLTerm-\u003eHOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:variant",
      "description": {
        "fct-descr": "\u003cp\u003eRenames a term variable to avoid sharing a name with any of a given list of\n  term variables.  Rreturns the original term if it's not a term variable.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLTerm] -\u003e HOLTerm -\u003e HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#variant",
        "fct-type": "function",
        "title": "variant"
      },
      "index": {
        "description": "Renames term variable to avoid sharing name with any of given list of term variables Rreturns the original term if it not term variable",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "variant",
        "normalized": "[HOLTerm]-\u003eHOLTerm-\u003eHOLTerm",
        "package": "haskhol-core",
        "partial": "",
        "signature": "[HOLTerm]-\u003eHOLTerm-\u003eHOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:variants",
      "description": {
        "fct-descr": "\u003cp\u003eRenames a list of term variables to avoid sharing a name with any of a given\n  list of term variables.  As each term variable is processed it is added to\n  the list of avoids such that the resultant list of term variables are all\n  uniquely named.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Terms",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLTerm] -\u003e [HOLTerm] -\u003e [HOLTerm]",
        "fct-source": "src/HaskHOL-Core-Kernel-Terms.html#variants",
        "fct-type": "function",
        "title": "variants"
      },
      "index": {
        "description": "Renames list of term variables to avoid sharing name with any of given list of term variables As each term variable is processed it is added to the list of avoids such that the resultant list of term variables are all uniquely named",
        "hierarchy": "HaskHOL Core Kernel Terms",
        "module": "HaskHOL.Core.Kernel.Terms",
        "name": "variants",
        "normalized": "[HOLTerm]-\u003e[HOLTerm]-\u003e[HOLTerm]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "[HOLTerm]-\u003e[HOLTerm]-\u003e[HOLTerm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a safe view of HOL types for HaskHOL.  It also defines\n  the primitive functions related to types.  For clarity, these functions have\n  been seperated based on their influential system: HOL Light, Stateless HOL,\n  and HOL2P.\n\u003c/p\u003e\u003cp\u003eNote that, per the stateless approach, any stateful, but still primitive,\n  functions related to types have been relocated to the \u003ca\u003eHaskHOL.Core.State\u003c/a\u003e\n  module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "module",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "This module exports safe view of HOL types for HaskHOL It also defines the primitive functions related to types For clarity these functions have been seperated based on their influential system HOL Light Stateless HOL and HOL2P Note that per the stateless approach any stateful but still primitive functions related to types have been relocated to the HaskHOL.Core.State module",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "Types",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#t:HOLType",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003e data type defines the internal constructors for HOL types in\n  HaskHOL.  For more details, see the documentation for its view pattern data\n  type, \u003ccode\u003e\u003ca\u003eHOLTypeView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLType",
        "fct-type": "data",
        "title": "HOLType"
      },
      "index": {
        "description": "The HOLType data type defines the internal constructors for HOL types in HaskHOL For more details see the documentation for its view pattern data type HOLTypeView",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "HOLType",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOLType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#t:HOLTypeEnv",
      "description": {
        "fct-descr": "\u003cp\u003eType synonym for the commonly used, list-based, type environment.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "type",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTypeEnv",
        "fct-type": "type",
        "title": "HOLTypeEnv"
      },
      "index": {
        "description": "Type synonym for the commonly used list-based type environment",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "HOLTypeEnv",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOLType Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#t:HOLTypeView",
      "description": {
        "fct-descr": "\u003cp\u003eThe view pattern data type for HOL types.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTypeView",
        "fct-type": "data",
        "title": "HOLTypeView"
      },
      "index": {
        "description": "The view pattern data type for HOL types",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "HOLTypeView",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOLType View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#t:SubstTrip",
      "description": {
        "fct-descr": "\u003cp\u003eType synonym for the commonly used triplet of substitution environments.\n  See \u003ccode\u003eTypeSubst\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "type",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#SubstTrip",
        "fct-type": "type",
        "title": "SubstTrip"
      },
      "index": {
        "description": "Type synonym for the commonly used triplet of substitution environments See TypeSubst for more information",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "SubstTrip",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Subst Trip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#t:TypeOp",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type for type operators, \u003ccode\u003e\u003ca\u003eTypeOp\u003c/a\u003e\u003c/code\u003e, is a mashing together of the\n  representation of type operators from both both HOL2P and Stateless HOL.\n  For more information regarding construction of the different operators, see\n  the documentation of the following functions: \u003ccode\u003emkTypeOpVar\u003c/code\u003e, \u003ccode\u003enewPrimTypeOp\u003c/code\u003e,\n  \u003ccode\u003enewDefinedTypeOp\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#TypeOp",
        "fct-type": "data",
        "title": "TypeOp"
      },
      "index": {
        "description": "The data type for type operators TypeOp is mashing together of the representation of type operators from both both HOL2P and Stateless HOL For more information regarding construction of the different operators see the documentation of the following functions mkTypeOpVar newPrimTypeOp newDefinedTypeOp",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "TypeOp",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Type Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#t:TypeSubst",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eTypeSubst\u003c/code\u003e class provides the framework for type substitution in HaskHOL.\n  Note that, with the introduction of universal types and type operator\n  variables, we now have three kinds of substitution to handle:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Substitution of types for type variables, satisfying type variable \n    constraints.\n\u003c/li\u003e\u003cli\u003e Instantiation of type operators with universal types.\n\u003c/li\u003e\u003cli\u003e Substitution of type operators for type operator variables.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eRather than have three separate functions exposed to the user, we elected to\n  provide a polymorphic type substitution function that will accept any\n  well-formed, homogenous substitution environment.\n\u003c/p\u003e\u003cp\u003eNote that the internals of \u003ccode\u003eTypeSubst\u003c/code\u003e are hidden to prevent unsound\n  re-definition.  The relevant type substitution function is re-exported as\n  \u003ccode\u003e\u003ca\u003etypeSubst\u003c/a\u003e\u003c/code\u003e.  We also provide a function, \u003ccode\u003e\u003ca\u003etypeSubstFull\u003c/a\u003e\u003c/code\u003e, that\n  accepts a triplet of all possible substitution environments that can be\n  conveniently used in combination with \u003ccode\u003etypeMatch\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee the ITP2013 paper, \u003ca\u003eStateless Higher-Order Logic with Quantified Types,\u003c/a\u003e\n  for more details.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "class",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#TypeSubst",
        "fct-type": "class",
        "title": "TypeSubst"
      },
      "index": {
        "description": "The TypeSubst class provides the framework for type substitution in HaskHOL Note that with the introduction of universal types and type operator variables we now have three kinds of substitution to handle Substitution of types for type variables satisfying type variable constraints Instantiation of type operators with universal types Substitution of type operators for type operator variables Rather than have three separate functions exposed to the user we elected to provide polymorphic type substitution function that will accept any well-formed homogenous substitution environment Note that the internals of TypeSubst are hidden to prevent unsound re-definition The relevant type substitution function is re-exported as typeSubst We also provide function typeSubstFull that accepts triplet of all possible substitution environments that can be conveniently used in combination with typeMatch See the ITP2013 paper Stateless Higher-Order Logic with Quantified Types for more details",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "TypeSubst",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Type Subst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:TyApp",
      "description": {
        "fct-descr": "\u003cp\u003eA type application consisting of a type operator and a list of type\n      arguments.  See \u003ccode\u003e\u003ca\u003eTypeOp\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "TyApp TypeOp [HOLType]",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTypeView",
        "fct-type": "function",
        "title": "TyApp"
      },
      "index": {
        "description": "type application consisting of type operator and list of type arguments See TypeOp for more details",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "TyApp",
        "normalized": "TyApp TypeOp[HOLType]",
        "package": "haskhol-core",
        "partial": "Ty App",
        "signature": "TyApp TypeOp[HOLType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:TyVar",
      "description": {
        "fct-descr": "\u003cp\u003eA type variable consisting of a constraint flag and name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "TyVar Bool String",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTypeView",
        "fct-type": "function",
        "title": "TyVar"
      },
      "index": {
        "description": "type variable consisting of constraint flag and name",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "TyVar",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Ty Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:UType",
      "description": {
        "fct-descr": "\u003cp\u003eA universal type consisting of a bound type and a body type.  Note that \n      the bound type must be a small, type variable.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "UType HOLType HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTypeView",
        "fct-type": "function",
        "title": "UType"
      },
      "index": {
        "description": "universal type consisting of bound type and body type Note that the bound type must be small type variable",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "UType",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "UType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:catTyVars",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all type variables in a list of types, not including type\n  operator variables.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLType] -\u003e [HOLType]",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#catTyVars",
        "fct-type": "function",
        "title": "catTyVars"
      },
      "index": {
        "description": "Returns the list of all type variables in list of types not including type operator variables",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "catTyVars",
        "normalized": "[HOLType]-\u003e[HOLType]",
        "package": "haskhol-core",
        "partial": "Ty Vars",
        "signature": "[HOLType]-\u003e[HOLType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:catTypeOpVars",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all type operator variables in a list of types.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLType] -\u003e [TypeOp]",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#catTypeOpVars",
        "fct-type": "function",
        "title": "catTypeOpVars"
      },
      "index": {
        "description": "Returns the list of all type operator variables in list of types",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "catTypeOpVars",
        "normalized": "[HOLType]-\u003e[TypeOp]",
        "package": "haskhol-core",
        "partial": "Type Op Vars",
        "signature": "[HOLType]-\u003e[TypeOp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:containsUType",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate to test if a type contains a universal type at any level.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#containsUType",
        "fct-type": "function",
        "title": "containsUType"
      },
      "index": {
        "description": "Predicate to test if type contains universal type at any level",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "containsUType",
        "normalized": "HOLType-\u003eBool",
        "package": "haskhol-core",
        "partial": "UType",
        "signature": "HOLType-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:destFunTy",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialized version of \u003ccode\u003e\u003ca\u003edestType\u003c/a\u003e\u003c/code\u003e that returns the domain and range of a\n  function type.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the type to be destructed isn't a\n  primitive function type.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e Maybe (HOLType, HOLType)",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#destFunTy",
        "fct-type": "function",
        "title": "destFunTy"
      },
      "index": {
        "description": "Specialized version of destType that returns the domain and range of function type Fails with Nothing if the type to be destructed isn primitive function type",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "destFunTy",
        "normalized": "HOLType-\u003eMaybe(HOLType,HOLType)",
        "package": "haskhol-core",
        "partial": "Fun Ty",
        "signature": "HOLType-\u003eMaybe(HOLType,HOLType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:destType",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a type application, returning its operator name and its list of type\n  arguments.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if called on a type that is not an \n  application.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e Maybe (TypeOp, [HOLType])",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#destType",
        "fct-type": "function",
        "title": "destType"
      },
      "index": {
        "description": "Destructs type application returning its operator name and its list of type arguments Fails with Nothing if called on type that is not an application",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "destType",
        "normalized": "HOLType-\u003eMaybe(TypeOp,[HOLType])",
        "package": "haskhol-core",
        "partial": "Type",
        "signature": "HOLType-\u003eMaybe(TypeOp,[HOLType])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:destTypeOp",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a type operator, returning its name and arity.  Note that we use -1 \n  to indicate the arity of a type operator variable since that information is \n  not carried.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "TypeOp -\u003e (String, Int)",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#destTypeOp",
        "fct-type": "function",
        "title": "destTypeOp"
      },
      "index": {
        "description": "Destructs type operator returning its name and arity Note that we use to indicate the arity of type operator variable since that information is not carried",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "destTypeOp",
        "normalized": "TypeOp-\u003e(String,Int)",
        "package": "haskhol-core",
        "partial": "Type Op",
        "signature": "TypeOp-\u003e(String,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:destUType",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a universal type, returning its bound type and body type.  Fails\n  with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided type is not universally quantified.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e Maybe (HOLType, HOLType)",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#destUType",
        "fct-type": "function",
        "title": "destUType"
      },
      "index": {
        "description": "Destructs universal type returning its bound type and body type Fails with Nothing if the provided type is not universally quantified",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "destUType",
        "normalized": "HOLType-\u003eMaybe(HOLType,HOLType)",
        "package": "haskhol-core",
        "partial": "UType",
        "signature": "HOLType-\u003eMaybe(HOLType,HOLType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:destUTypes",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a compound universal type, returning the list of bound variables\n  and the final body type.  Fails if the provided type is not universally\n  quantified.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e Maybe ([HOLType], HOLType)",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#destUTypes",
        "fct-type": "function",
        "title": "destUTypes"
      },
      "index": {
        "description": "Destructs compound universal type returning the list of bound variables and the final body type Fails if the provided type is not universally quantified",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "destUTypes",
        "normalized": "HOLType-\u003eMaybe([HOLType],HOLType)",
        "package": "haskhol-core",
        "partial": "UTypes",
        "signature": "HOLType-\u003eMaybe([HOLType],HOLType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:destVarType",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a type variable, returning its name.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if called\n  on a non-variable type.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e Maybe String",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#destVarType",
        "fct-type": "function",
        "title": "destVarType"
      },
      "index": {
        "description": "Destructs type variable returning its name Fails with Nothing if called on non-variable type",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "destVarType",
        "normalized": "HOLType-\u003eMaybe String",
        "package": "haskhol-core",
        "partial": "Var Type",
        "signature": "HOLType-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:isSmall",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for small types.  Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if all type variables in the type\n  are constrained to be small and the type contains no universal types; returns \n  \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise. \n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#isSmall",
        "fct-type": "function",
        "title": "isSmall"
      },
      "index": {
        "description": "Predicate for small types Returns True if all type variables in the type are constrained to be small and the type contains no universal types returns False otherwise",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "isSmall",
        "normalized": "HOLType-\u003eBool",
        "package": "haskhol-core",
        "partial": "Small",
        "signature": "HOLType-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:isType",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for type applications\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#isType",
        "fct-type": "function",
        "title": "isType"
      },
      "index": {
        "description": "Predicate for type applications",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "isType",
        "normalized": "HOLType-\u003eBool",
        "package": "haskhol-core",
        "partial": "Type",
        "signature": "HOLType-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:isTypeOpVar",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for type operator variables.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "TypeOp -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#isTypeOpVar",
        "fct-type": "function",
        "title": "isTypeOpVar"
      },
      "index": {
        "description": "Predicate for type operator variables",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "isTypeOpVar",
        "normalized": "TypeOp-\u003eBool",
        "package": "haskhol-core",
        "partial": "Type Op Var",
        "signature": "TypeOp-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:isUType",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for universal types.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#isUType",
        "fct-type": "function",
        "title": "isUType"
      },
      "index": {
        "description": "Predicate for universal types",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "isUType",
        "normalized": "HOLType-\u003eBool",
        "package": "haskhol-core",
        "partial": "UType",
        "signature": "HOLType-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:isVarType",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for type variables.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#isVarType",
        "fct-type": "function",
        "title": "isVarType"
      },
      "index": {
        "description": "Predicate for type variables",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "isVarType",
        "normalized": "HOLType-\u003eBool",
        "package": "haskhol-core",
        "partial": "Var Type",
        "signature": "HOLType-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:mkSmall",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a small type from a given type by constraining all of the type\n  variables in the type to be small.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the type contains\n  any universal types.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e Either String HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#mkSmall",
        "fct-type": "function",
        "title": "mkSmall"
      },
      "index": {
        "description": "Constructs small type from given type by constraining all of the type variables in the type to be small Fails with Left if the type contains any universal types",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "mkSmall",
        "normalized": "HOLType-\u003eEither String HOLType",
        "package": "haskhol-core",
        "partial": "Small",
        "signature": "HOLType-\u003eEither String HOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:mkTypeOpVar",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a type operator variable of a given name.  Note that type\n  operator arities are not stored, only inferred from the context where the\n  operator is used.\n\u003c/p\u003e\u003cp\u003eThe parser makes an attempt to guarantee that all instances of a type operator\n  in a term have the same arity.  The same protection is not provided for terms\n  that are manually constructed.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e TypeOp",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#mkTypeOpVar",
        "fct-type": "function",
        "title": "mkTypeOpVar"
      },
      "index": {
        "description": "Constructs type operator variable of given name Note that type operator arities are not stored only inferred from the context where the operator is used The parser makes an attempt to guarantee that all instances of type operator in term have the same arity The same protection is not provided for terms that are manually constructed",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "mkTypeOpVar",
        "normalized": "String-\u003eTypeOp",
        "package": "haskhol-core",
        "partial": "Type Op Var",
        "signature": "String-\u003eTypeOp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:mkUType",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a universal type of a given bound type and body type.  Fails with\n  \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the bound type is not a small, type variable.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLType -\u003e Either String HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#mkUType",
        "fct-type": "function",
        "title": "mkUType"
      },
      "index": {
        "description": "Constructs universal type of given bound type and body type Fails with Left if the bound type is not small type variable",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "mkUType",
        "normalized": "HOLType-\u003eHOLType-\u003eEither String HOLType",
        "package": "haskhol-core",
        "partial": "UType",
        "signature": "HOLType-\u003eHOLType-\u003eEither String HOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:mkUTypes",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a compound universal type given a list of bound types and a body.    Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if any internal call to \u003ccode\u003e\u003ca\u003emkUType\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLType] -\u003e HOLType -\u003e Either String HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#mkUTypes",
        "fct-type": "function",
        "title": "mkUTypes"
      },
      "index": {
        "description": "Constructs compound universal type given list of bound types and body Fails with Left if any internal call to mkUType fails",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "mkUTypes",
        "normalized": "[HOLType]-\u003eHOLType-\u003eEither String HOLType",
        "package": "haskhol-core",
        "partial": "UTypes",
        "signature": "[HOLType]-\u003eHOLType-\u003eEither String HOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:mkVarType",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a type variable of a given name.  Note that the resultant type \n  variable is unconstrained.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#mkVarType",
        "fct-type": "function",
        "title": "mkVarType"
      },
      "index": {
        "description": "Constructs type variable of given name Note that the resultant type variable is unconstrained",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "mkVarType",
        "normalized": "String-\u003eHOLType",
        "package": "haskhol-core",
        "partial": "Var Type",
        "signature": "String-\u003eHOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:newPrimTypeOp",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a primitive type operator of a given name and arity.  Primitive\n  type operators are used to represent constant, but undefined, types.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e Int -\u003e TypeOp",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#newPrimTypeOp",
        "fct-type": "function",
        "title": "newPrimTypeOp"
      },
      "index": {
        "description": "Constructs primitive type operator of given name and arity Primitive type operators are used to represent constant but undefined types",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "newPrimTypeOp",
        "normalized": "String-\u003eInt-\u003eTypeOp",
        "package": "haskhol-core",
        "partial": "Prim Type Op",
        "signature": "String-\u003eInt-\u003eTypeOp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyA",
      "description": {
        "fct-descr": "\u003cp\u003eAlias to the unconstrained type variable \u003ccode\u003eA\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#tyA",
        "fct-type": "function",
        "title": "tyA"
      },
      "index": {
        "description": "Alias to the unconstrained type variable",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "tyA",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyAConv",
      "description": {
        "fct-descr": "\u003cp\u003eTests if two types are alpha-equivalent.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLType -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#tyAConv",
        "fct-type": "function",
        "title": "tyAConv"
      },
      "index": {
        "description": "Tests if two types are alpha-equivalent",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "tyAConv",
        "normalized": "HOLType-\u003eHOLType-\u003eBool",
        "package": "haskhol-core",
        "partial": "AConv",
        "signature": "HOLType-\u003eHOLType-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyAlphaOrder",
      "description": {
        "fct-descr": "\u003cp\u003eProvides an ordering for two types modulo alpha-equivalence.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLType -\u003e Ordering",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#tyAlphaOrder",
        "fct-type": "function",
        "title": "tyAlphaOrder"
      },
      "index": {
        "description": "Provides an ordering for two types modulo alpha-equivalence",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "tyAlphaOrder",
        "normalized": "HOLType-\u003eHOLType-\u003eOrdering",
        "package": "haskhol-core",
        "partial": "Alpha Order",
        "signature": "HOLType-\u003eHOLType-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyApp",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a type application from a provided type operator and list of type\n  arguments.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A type operator variable is applied to zero arguments.\n\u003c/li\u003e\u003cli\u003e A type operator's arity disagrees with the length of the argument list.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "TypeOp -\u003e [HOLType] -\u003e Either String HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#tyApp",
        "fct-type": "function",
        "title": "tyApp"
      },
      "index": {
        "description": "Constructs type application from provided type operator and list of type arguments Fails with Left in the following cases type operator variable is applied to zero arguments type operator arity disagrees with the length of the argument list",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "tyApp",
        "normalized": "TypeOp-\u003e[HOLType]-\u003eEither String HOLType",
        "package": "haskhol-core",
        "partial": "App",
        "signature": "TypeOp-\u003e[HOLType]-\u003eEither String HOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyB",
      "description": {
        "fct-descr": "\u003cp\u003eAlias to the unconstrained type variable \u003ccode\u003eB\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#tyB",
        "fct-type": "function",
        "title": "tyB"
      },
      "index": {
        "description": "Alias to the unconstrained type variable",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "tyB",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyBool",
      "description": {
        "fct-descr": "\u003cp\u003eAlias to the primitive boolean type.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#tyBool",
        "fct-type": "function",
        "title": "tyBool"
      },
      "index": {
        "description": "Alias to the primitive boolean type",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "tyBool",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyOpBool",
      "description": {
        "fct-descr": "\u003cp\u003eAlias to the primitive boolean type operator.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "TypeOp",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#tyOpBool",
        "fct-type": "function",
        "title": "tyOpBool"
      },
      "index": {
        "description": "Alias to the primitive boolean type operator",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "tyOpBool",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Op Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyOpFun",
      "description": {
        "fct-descr": "\u003cp\u003eAlias to the primitive function type operator.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "TypeOp",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#tyOpFun",
        "fct-type": "function",
        "title": "tyOpFun"
      },
      "index": {
        "description": "Alias to the primitive function type operator",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "tyOpFun",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Op Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyVars",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all free, type variables in a type, not including type\n  operator variables.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e [HOLType]",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#tyVars",
        "fct-type": "function",
        "title": "tyVars"
      },
      "index": {
        "description": "Returns the list of all free type variables in type not including type operator variables",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "tyVars",
        "normalized": "HOLType-\u003e[HOLType]",
        "package": "haskhol-core",
        "partial": "Vars",
        "signature": "HOLType-\u003e[HOLType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:typeOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the type of term.  Fails with a special type, \u003ccode\u003etyBottom\u003c/code\u003e, if the type\n  is poorly constructed; this keeps the function total without requiring the\n  use of an additional guard type like \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn practice, this type will never be seen provided the kernel is not modified\n  to expose the internal constructors for terms.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#typeOf",
        "fct-type": "function",
        "title": "typeOf"
      },
      "index": {
        "description": "Returns the type of term Fails with special type tyBottom if the type is poorly constructed this keeps the function total without requiring the use of an additional guard type like Maybe In practice this type will never be seen provided the kernel is not modified to expose the internal constructors for terms",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "typeOf",
        "normalized": "HOLTerm-\u003eHOLType",
        "package": "haskhol-core",
        "partial": "Of",
        "signature": "HOLTerm-\u003eHOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:typeOpVars",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all type operator variables in a type.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e [TypeOp]",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#typeOpVars",
        "fct-type": "function",
        "title": "typeOpVars"
      },
      "index": {
        "description": "Returns the list of all type operator variables in type",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "typeOpVars",
        "normalized": "HOLType-\u003e[TypeOp]",
        "package": "haskhol-core",
        "partial": "Op Vars",
        "signature": "HOLType-\u003e[TypeOp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:typeSubst",
      "description": {
        "fct-descr": "\u003cp\u003eRe-exports the internal type substitution function of the \u003ccode\u003e\u003ca\u003eTypeSubst\u003c/a\u003e\u003c/code\u003e class\n  to prevent unsound re-definition.  Invalid substitution pairs are pruned from\n  the environment such that substitution never fails.\n\u003c/p\u003e\u003cp\u003eNote that the order of elements in a substitution pair follows the convention\n  of most Haskell libraries, rather than the traditional HOL convention:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The second element is substituted for the first, i.e. the substitution pair\n    \u003ccode\u003e(tyA, tyBool)\u003c/code\u003e indicates that the boolean type should be substituted for\n    the type variable \u003ccode\u003eA\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "[(a, b)] -\u003e HOLType -\u003e HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#typeSubst",
        "fct-type": "function",
        "title": "typeSubst"
      },
      "index": {
        "description": "Re-exports the internal type substitution function of the TypeSubst class to prevent unsound re-definition Invalid substitution pairs are pruned from the environment such that substitution never fails Note that the order of elements in substitution pair follows the convention of most Haskell libraries rather than the traditional HOL convention The second element is substituted for the first i.e the substitution pair tyA tyBool indicates that the boolean type should be substituted for the type variable",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "typeSubst",
        "normalized": "[(a,b)]-\u003eHOLType-\u003eHOLType",
        "package": "haskhol-core",
        "partial": "Subst",
        "signature": "[(a,b)]-\u003eHOLType-\u003eHOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:typeSubstFull",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003etypeSubst\u003c/a\u003e\u003c/code\u003e that accepts a triplet of type substitution \n  environments.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "SubstTrip -\u003e HOLType -\u003e HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#typeSubstFull",
        "fct-type": "function",
        "title": "typeSubstFull"
      },
      "index": {
        "description": "version of typeSubst that accepts triplet of type substitution environments",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "typeSubstFull",
        "normalized": "SubstTrip-\u003eHOLType-\u003eHOLType",
        "package": "haskhol-core",
        "partial": "Subst Full",
        "signature": "SubstTrip-\u003eHOLType-\u003eHOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:uTypeFromTypeOpVar",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a compound universal type from a type operator variable and a given\n  number of bound variables, i.e. \n\u003c/p\u003e\u003cpre\u003e uTypeFromTypeOpVar _T n === % 'A1 ... 'An. ('A1, ..., 'An)_T  \n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003en\u003c=0\u003c/code\u003e which would result in the application of a type operator to an\n    empty list of type arguments.\n\u003c/li\u003e\u003cli\u003e The type operator argument is not a variable. \n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "TypeOp -\u003e Int -\u003e Either String HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#uTypeFromTypeOpVar",
        "fct-type": "function",
        "title": "uTypeFromTypeOpVar"
      },
      "index": {
        "description": "Constructs compound universal type from type operator variable and given number of bound variables i.e uTypeFromTypeOpVar A1 An A1 An Fails with Left in the following cases which would result in the application of type operator to an empty list of type arguments The type operator argument is not variable",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "uTypeFromTypeOpVar",
        "normalized": "TypeOp-\u003eInt-\u003eEither String HOLType",
        "package": "haskhol-core",
        "partial": "Type From Type Op Var",
        "signature": "TypeOp-\u003eInt-\u003eEither String HOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:variantTyVar",
      "description": {
        "fct-descr": "\u003cp\u003eRenames a type variable to avoid sharing a name with any of a given list of\n  type variables.  Note that this function is both smallness presserving and\n  respecting.  Returns the original type if it's not a type variable.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLType] -\u003e HOLType -\u003e HOLType",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#variantTyVar",
        "fct-type": "function",
        "title": "variantTyVar"
      },
      "index": {
        "description": "Renames type variable to avoid sharing name with any of given list of type variables Note that this function is both smallness presserving and respecting Returns the original type if it not type variable",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "variantTyVar",
        "normalized": "[HOLType]-\u003eHOLType-\u003eHOLType",
        "package": "haskhol-core",
        "partial": "Ty Var",
        "signature": "[HOLType]-\u003eHOLType-\u003eHOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:variantTyVars",
      "description": {
        "fct-descr": "\u003cp\u003eRenames a list of type variables to avoid sharing a name with any of a given\n  list of type variables.  As each type variable is processed it is added to the\n  list of avoids such that the resultant list of type variables are all uniquely\n  named.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel.Types",
        "fct-package": "haskhol-core",
        "fct-signature": "[HOLType] -\u003e [HOLType] -\u003e [HOLType]",
        "fct-source": "src/HaskHOL-Core-Kernel-Types.html#variantTyVars",
        "fct-type": "function",
        "title": "variantTyVars"
      },
      "index": {
        "description": "Renames list of type variables to avoid sharing name with any of given list of type variables As each type variable is processed it is added to the list of avoids such that the resultant list of type variables are all uniquely named",
        "hierarchy": "HaskHOL Core Kernel Types",
        "module": "HaskHOL.Core.Kernel.Types",
        "name": "variantTyVars",
        "normalized": "[HOLType]-\u003e[HOLType]-\u003e[HOLType]",
        "package": "haskhol-core",
        "partial": "Ty Vars",
        "signature": "[HOLType]-\u003e[HOLType]-\u003e[HOLType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the logical kernel of HaskHOL.  It consists of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The view pattern required to pattern match on terms outside of the kernel.\n\u003c/li\u003e\u003cli\u003e A safe view of HOL theorems for HaskHOL.\n\u003c/li\u003e\u003cli\u003e The primitive inference rules of the system.\n\u003c/li\u003e\u003cli\u003e The primitive, stateless theory extension functions.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor clarity, all of these items have been seperated based on their influential\n  system: HOL Light, Stateless HOL, and HOL2P.\n\u003c/p\u003e\u003cp\u003eNote that, per the stateless approach, any stateful, but still primitive,\n  functions related to theorems or theory extension have been relocated to the \n  \u003ca\u003eHaskHOL.Core.State\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "module",
        "fct-source": "src/HaskHOL-Core-Kernel.html",
        "fct-type": "module",
        "title": "Kernel"
      },
      "index": {
        "description": "This module exports the logical kernel of HaskHOL It consists of The view pattern required to pattern match on terms outside of the kernel safe view of HOL theorems for HaskHOL The primitive inference rules of the system The primitive stateless theory extension functions For clarity all of these items have been seperated based on their influential system HOL Light Stateless HOL and HOL2P Note that per the stateless approach any stateful but still primitive functions related to theorems or theory extension have been relocated to the HaskHOL.Core.State module",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "Kernel",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Kernel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#t:HOLThm",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHOLThm\u003c/a\u003e\u003c/code\u003e data type defines HOL Theorems in HaskHOL.  A theorem is defined\n  simply as a list of assumption terms and a conclusion term.\n\u003c/p\u003e\u003cp\u003eNote that this representation, in combination with a stateless \n  approach, means that the introduction of axioms is not tracked in the kernel.\n  Axioms can be tracked once the stateful layer of the prover is introduced,\n  though.  For more details see the documentation for \u003ccode\u003enewAxiom\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLThm",
        "fct-type": "data",
        "title": "HOLThm"
      },
      "index": {
        "description": "The HOLThm data type defines HOL Theorems in HaskHOL theorem is defined simply as list of assumption terms and conclusion term Note that this representation in combination with stateless approach means that the introduction of axioms is not tracked in the kernel Axioms can be tracked once the stateful layer of the prover is introduced though For more details see the documentation for newAxiom",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "HOLThm",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOLThm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#t:HOLThmView",
      "description": {
        "fct-descr": "\u003cp\u003eThe view pattern data type for HOL theorems.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLThmView",
        "fct-type": "data",
        "title": "HOLThmView"
      },
      "index": {
        "description": "The view pattern data type for HOL theorems",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "HOLThmView",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOLThm View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:Thm",
      "description": {
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "Thm [HOLTerm] HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#HOLThmView",
        "fct-type": "function",
        "title": "Thm"
      },
      "index": {
        "description": "",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "Thm",
        "normalized": "Thm[HOLTerm]HOLTerm",
        "package": "haskhol-core",
        "partial": "Thm",
        "signature": "Thm[HOLTerm]HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:axiomThm",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new axiom theorem.  \n\u003c/p\u003e\u003cp\u003eNote that, as discussed in the documentation for \u003ccode\u003e\u003ca\u003eHOLThm\u003c/a\u003e\u003c/code\u003e, the introduction of\n  axioms is not tracked until the stateful layer of the system is introduced so \n  be careful using this function.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#axiomThm",
        "fct-type": "function",
        "title": "axiomThm"
      },
      "index": {
        "description": "Creates new axiom theorem Note that as discussed in the documentation for HOLThm the introduction of axioms is not tracked until the stateful layer of the system is introduced so be careful using this function",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "axiomThm",
        "normalized": "HOLTerm-\u003eHOLThm",
        "package": "haskhol-core",
        "partial": "Thm",
        "signature": "HOLTerm-\u003eHOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:concl",
      "description": {
        "fct-descr": "\u003cp\u003eAccessor for the conclusion term of a theorem.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLThm -\u003e HOLTerm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#concl",
        "fct-type": "function",
        "title": "concl"
      },
      "index": {
        "description": "Accessor for the conclusion term of theorem",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "concl",
        "normalized": "HOLThm-\u003eHOLTerm",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLThm-\u003eHOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:destThm",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a theorem, returning its list of assumption terms and conclusion\n  term.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLThm -\u003e ([HOLTerm], HOLTerm)",
        "fct-source": "src/HaskHOL-Core-Kernel.html#destThm",
        "fct-type": "function",
        "title": "destThm"
      },
      "index": {
        "description": "Destructs theorem returning its list of assumption terms and conclusion term",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "destThm",
        "normalized": "HOLThm-\u003e([HOLTerm],HOLTerm)",
        "package": "haskhol-core",
        "partial": "Thm",
        "signature": "HOLThm-\u003e([HOLTerm],HOLTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:hyp",
      "description": {
        "fct-descr": "\u003cp\u003eAccessor for the hypotheses, or assumption terms, of a theorem.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLThm -\u003e [HOLTerm]",
        "fct-source": "src/HaskHOL-Core-Kernel.html#hyp",
        "fct-type": "function",
        "title": "hyp"
      },
      "index": {
        "description": "Accessor for the hypotheses or assumption terms of theorem",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "hyp",
        "normalized": "HOLThm-\u003e[HOLTerm]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLThm-\u003e[HOLTerm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:newDefinedConst",
      "description": {
        "fct-descr": "\u003cpre\u003e\n   c = t  \n-----------\n |- c = t\n\u003c/pre\u003e\u003cp\u003eCreates a new defined constant given a term that equates a variable of the\n  desired constant name and type to its desired definition.  The return value \n  is a pair of the new constant and its definitional theorem.  \n\u003c/p\u003e\u003cp\u003eNote that internally the constant is tagged with its definitional term via the\n  \u003ccode\u003eDefined\u003c/code\u003e \u003ccode\u003e\u003ca\u003eConstTag\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The provided term is not an equation.\n\u003c/li\u003e\u003cli\u003e The provided term is not closed.\n\u003c/li\u003e\u003cli\u003e There are free type variables present in the definition that are not also in\n    the desired type of the constant.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Either String (HOLTerm, HOLThm)",
        "fct-source": "src/HaskHOL-Core-Kernel.html#newDefinedConst",
        "fct-type": "function",
        "title": "newDefinedConst"
      },
      "index": {
        "description": "Creates new defined constant given term that equates variable of the desired constant name and type to its desired definition The return value is pair of the new constant and its definitional theorem Note that internally the constant is tagged with its definitional term via the Defined ConstTag Fails with Left in the following cases The provided term is not an equation The provided term is not closed There are free type variables present in the definition that are not also in the desired type of the constant",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "newDefinedConst",
        "normalized": "HOLTerm-\u003eEither String(HOLTerm,HOLThm)",
        "package": "haskhol-core",
        "partial": "Defined Const",
        "signature": "HOLTerm-\u003eEither String(HOLTerm,HOLThm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:newDefinedTypeOp",
      "description": {
        "fct-descr": "\u003cpre\u003e\n                           |- p x:rep\n-----------------------------------------------------------------\n (|- mk:rep-\u003ety (dest:ty-\u003erep a) = a, |- P r \u003c=\u003e dest(mk r) = r)\n\u003c/pre\u003e\u003cp\u003eCreates a new defined type constant that is defined as an inhabited subset\n  of an existing type constant.  The return value is a pentuple that \n  collectively provides a bijection between the new type and the old type.\n\u003c/p\u003e\u003cp\u003eThe following four items are taken as input:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The name of the new type constant - \u003ccode\u003ety\u003c/code\u003e in the above sequent.\n\u003c/li\u003e\u003cli\u003e The name of the new term constant that will be used to make an instance of \n    the new type - \u003ccode\u003emk\u003c/code\u003e in the above sequent.\n\u003c/li\u003e\u003cli\u003e The name of the new term constant that will be used to destruct an instance\n    of the new type - \u003ccode\u003edest\u003c/code\u003e in the above sequent.\n\u003c/li\u003e\u003cli\u003e A theorem proving that the desired subset is non-empty.  The conclusion of\n    this theorem must take the form \u003ccode\u003ep x\u003c/code\u003e where \u003ccode\u003ep\u003c/code\u003e is the predicate that\n    defines the subset and \u003ccode\u003ex\u003c/code\u003e is a witness to inhabitation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe following items are returned as part of the resultant pentuple:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The new defined type operator.  These type operators carry their name,\n    arity, and definitional theorem.  The arity, in this case, is inferred from\n    the number of free type variables found in the predicate of the definitional\n    theorem.\n\u003c/li\u003e\u003cli\u003e The new term constants, \u003ccode\u003emk\u003c/code\u003e and \u003ccode\u003edest\u003c/code\u003e, as described above.  Note that \n    constants constructed in this manner are tagged with special instances of \n    \u003ccode\u003e\u003ca\u003eConstTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eMkAbstract\u003c/code\u003e and \u003ccode\u003eDestAbstract\u003c/code\u003e accordingly, that carry the \n    name, arity, and definitional theorem of their related type constant.\n\u003c/li\u003e\u003cli\u003e The two theorems proving the bijection, as shown in the sequent above.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e String -\u003e String -\u003e HOLThm -\u003e Either String (TypeOp, HOLTerm, HOLTerm, HOLThm, HOLThm)",
        "fct-source": "src/HaskHOL-Core-Kernel.html#newDefinedTypeOp",
        "fct-type": "function",
        "title": "newDefinedTypeOp"
      },
      "index": {
        "description": "rep mk rep ty dest ty rep dest mk Creates new defined type constant that is defined as an inhabited subset of an existing type constant The return value is pentuple that collectively provides bijection between the new type and the old type The following four items are taken as input The name of the new type constant ty in the above sequent The name of the new term constant that will be used to make an instance of the new type mk in the above sequent The name of the new term constant that will be used to destruct an instance of the new type dest in the above sequent theorem proving that the desired subset is non-empty The conclusion of this theorem must take the form where is the predicate that defines the subset and is witness to inhabitation The following items are returned as part of the resultant pentuple The new defined type operator These type operators carry their name arity and definitional theorem The arity in this case is inferred from the number of free type variables found in the predicate of the definitional theorem The new term constants mk and dest as described above Note that constants constructed in this manner are tagged with special instances of ConstTag MkAbstract and DestAbstract accordingly that carry the name arity and definitional theorem of their related type constant The two theorems proving the bijection as shown in the sequent above",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "newDefinedTypeOp",
        "normalized": "String-\u003eString-\u003eString-\u003eHOLThm-\u003eEither String(TypeOp,HOLTerm,HOLTerm,HOLThm,HOLThm)",
        "package": "haskhol-core",
        "partial": "Defined Type Op",
        "signature": "String-\u003eString-\u003eString-\u003eHOLThm-\u003eEither String(TypeOp,HOLTerm,HOLTerm,HOLThm,HOLThm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primABS",
      "description": {
        "fct-descr": "\u003cpre\u003e\n          A |- t1 = t2\n-------------------------------\n A |- (\\ x . t1) = (\\ x . t2)\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The term to bind is free in the assumption list of the theorem.\n\u003c/li\u003e\u003cli\u003e The conclusion of the theorem is not an equation.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLThm -\u003e Either String HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primABS",
        "fct-type": "function",
        "title": "primABS"
      },
      "index": {
        "description": "t1 t2 t1 t2 Fails with Left in the following cases The term to bind is free in the assumption list of the theorem The conclusion of the theorem is not an equation",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primABS",
        "normalized": "HOLTerm-\u003eHOLThm-\u003eEither String HOLThm",
        "package": "haskhol-core",
        "partial": "ABS",
        "signature": "HOLTerm-\u003eHOLThm-\u003eEither String HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primASSUME",
      "description": {
        "fct-descr": "\u003cpre\u003e\n     t\n-----------\n   t |- t\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the term is not a proposition.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Maybe HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primASSUME",
        "fct-type": "function",
        "title": "primASSUME"
      },
      "index": {
        "description": "Fails with Nothing if the term is not proposition",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primASSUME",
        "normalized": "HOLTerm-\u003eMaybe HOLThm",
        "package": "haskhol-core",
        "partial": "ASSUME",
        "signature": "HOLTerm-\u003eMaybe HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primBETA",
      "description": {
        "fct-descr": "\u003cpre\u003e\n        (\\ x . t[x]) x\n-------------------------------\n     |- (\\ x . t) x = t[x]\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The term is not a valid application.\n\u003c/li\u003e\u003cli\u003e The reduction is not a trivial one, i.e. the argument term is not equivalent\n    to the bound variable.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Either String HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primBETA",
        "fct-type": "function",
        "title": "primBETA"
      },
      "index": {
        "description": "Fails with Left in the following cases The term is not valid application The reduction is not trivial one i.e the argument term is not equivalent to the bound variable",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primBETA",
        "normalized": "HOLTerm-\u003eEither String HOLThm",
        "package": "haskhol-core",
        "partial": "BETA",
        "signature": "HOLTerm-\u003eEither String HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primDEDUCT_ANTISYM_RULE",
      "description": {
        "fct-descr": "\u003cpre\u003e\n       A |- p       B |- q       \n----------------------------------\n (A - {q}) U (B - {p}) |- p \u003c=\u003e q\n\u003c/pre\u003e\u003cp\u003eNever fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLThm -\u003e HOLThm -\u003e HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primDEDUCT_ANTISYM_RULE",
        "fct-type": "function",
        "title": "primDEDUCT_ANTISYM_RULE"
      },
      "index": {
        "description": "Never fails",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primDEDUCT_ANTISYM_RULE",
        "normalized": "HOLThm-\u003eHOLThm-\u003eHOLThm",
        "package": "haskhol-core",
        "partial": "DEDUCT ANTISYM RULE",
        "signature": "HOLThm-\u003eHOLThm-\u003eHOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primEQ_MP",
      "description": {
        "fct-descr": "\u003cpre\u003e\n A1 |- t1 = t2   A2 |- t1\n----------------------------\n      A1 U A2 |- t2\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The conclusion of the first theorem is not an equation.\n\u003c/li\u003e\u003cli\u003e The conclusion term of the second theorem and the left hand side of the \n    equation are not alpha-equivalent.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLThm -\u003e HOLThm -\u003e Either String HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primEQ_MP",
        "fct-type": "function",
        "title": "primEQ_MP"
      },
      "index": {
        "description": "A1 t1 t2 A2 t1 A1 A2 t2 Fails with Left in the following cases The conclusion of the first theorem is not an equation The conclusion term of the second theorem and the left hand side of the equation are not alpha-equivalent",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primEQ_MP",
        "normalized": "HOLThm-\u003eHOLThm-\u003eEither String HOLThm",
        "package": "haskhol-core",
        "partial": "EQ MP",
        "signature": "HOLThm-\u003eHOLThm-\u003eEither String HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primINST",
      "description": {
        "fct-descr": "\u003cpre\u003e\n [(t1, x1), ..., (tn, xn)]   A |- t          \n------------------------------------\n   A[t1, ..., tn/x1, ..., xn]\n    |- t[t1, ..., tn/x1, ..., xn]   \n\u003c/pre\u003e\u003cp\u003eNever fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTermEnv -\u003e HOLThm -\u003e HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primINST",
        "fct-type": "function",
        "title": "primINST"
      },
      "index": {
        "description": "t1 x1 tn xn t1 tn x1 xn t1 tn x1 xn Never fails",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primINST",
        "normalized": "HOLTermEnv-\u003eHOLThm-\u003eHOLThm",
        "package": "haskhol-core",
        "partial": "INST",
        "signature": "HOLTermEnv-\u003eHOLThm-\u003eHOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primINST_TYPE",
      "description": {
        "fct-descr": "\u003cpre\u003e\n [(ty1, tv1), ..., (tyn, tvn)]   A |- t              \n----------------------------------------\n   A[ty1, ..., tyn/tv1, ..., tvn]\n    |- t[ty1, ..., tyn/tv1, ..., tvn]\n\u003c/pre\u003e\u003cp\u003eNever fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "[(a, b)] -\u003e HOLThm -\u003e HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primINST_TYPE",
        "fct-type": "function",
        "title": "primINST_TYPE"
      },
      "index": {
        "description": "ty1 tv1 tyn tvn ty1 tyn tv1 tvn ty1 tyn tv1 tvn Never fails",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primINST_TYPE",
        "normalized": "[(a,b)]-\u003eHOLThm-\u003eHOLThm",
        "package": "haskhol-core",
        "partial": "INST TYPE",
        "signature": "[(a,b)]-\u003eHOLThm-\u003eHOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primINST_TYPE_FULL",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eprimINST_TYPE\u003c/a\u003e\u003c/code\u003e that instantiates a theorem via \u003ccode\u003e\u003ca\u003einstFull\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "SubstTrip -\u003e HOLThm -\u003e HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primINST_TYPE_FULL",
        "fct-type": "function",
        "title": "primINST_TYPE_FULL"
      },
      "index": {
        "description": "version of primINST TYPE that instantiates theorem via instFull",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primINST_TYPE_FULL",
        "normalized": "SubstTrip-\u003eHOLThm-\u003eHOLThm",
        "package": "haskhol-core",
        "partial": "INST TYPE FULL",
        "signature": "SubstTrip-\u003eHOLThm-\u003eHOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primMK_COMB",
      "description": {
        "fct-descr": "\u003cpre\u003e\n A1 |- f = g   A2 |- x = y\n---------------------------\n    A1 U A2 |- f x = g y\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e One, or both, of the theorem conclusions is not an equation.\n\u003c/li\u003e\u003cli\u003e The first theorem conclusion is not an equation of function terms.\n\u003c/li\u003e\u003cli\u003e The types of the function terms and argument terms do not agree.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLThm -\u003e HOLThm -\u003e Either String HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primMK_COMB",
        "fct-type": "function",
        "title": "primMK_COMB"
      },
      "index": {
        "description": "A1 A2 A1 A2 Fails with Left in the following cases One or both of the theorem conclusions is not an equation The first theorem conclusion is not an equation of function terms The types of the function terms and argument terms do not agree",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primMK_COMB",
        "normalized": "HOLThm-\u003eHOLThm-\u003eEither String HOLThm",
        "package": "haskhol-core",
        "partial": "MK COMB",
        "signature": "HOLThm-\u003eHOLThm-\u003eEither String HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primREFL",
      "description": {
        "fct-descr": "\u003cpre\u003e\n     t    \n-----------\n |- t = t\n\u003c/pre\u003e\u003cp\u003eNever fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primREFL",
        "fct-type": "function",
        "title": "primREFL"
      },
      "index": {
        "description": "Never fails",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primREFL",
        "normalized": "HOLTerm-\u003eHOLThm",
        "package": "haskhol-core",
        "partial": "REFL",
        "signature": "HOLTerm-\u003eHOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primTRANS",
      "description": {
        "fct-descr": "\u003cpre\u003e\n A1 |- t1 = t2   A2 |- t2 = t3\n-------------------------------\n       A1 U A2 |- t1 = t3     \n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The middle terms are not alpha-equivalent.\n\u003c/li\u003e\u003cli\u003e One, or both, of the theorem conclusions is not an equation.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLThm -\u003e HOLThm -\u003e Either String HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primTRANS",
        "fct-type": "function",
        "title": "primTRANS"
      },
      "index": {
        "description": "A1 t1 t2 A2 t2 t3 A1 A2 t1 t3 Fails with Left in the following cases The middle terms are not alpha-equivalent One or both of the theorem conclusions is not an equation",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primTRANS",
        "normalized": "HOLThm-\u003eHOLThm-\u003eEither String HOLThm",
        "package": "haskhol-core",
        "partial": "TRANS",
        "signature": "HOLThm-\u003eHOLThm-\u003eEither String HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primTYABS",
      "description": {
        "fct-descr": "\u003cpre\u003e\n          A |- t1 = t2\n-------------------------------\n A |- (\\\\ x . t1) = (\\\\ x . t2)\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The type to bind is not a small type variable. \n\u003c/li\u003e\u003cli\u003e The conclusion of the theorem is not an equation.\n\u003c/li\u003e\u003cli\u003e The type to bind is free in the assumption list of the theorem. \n\u003c/li\u003e\u003cli\u003e The type variable to bind is free in the conclusion of the theorem.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLThm -\u003e Either String HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primTYABS",
        "fct-type": "function",
        "title": "primTYABS"
      },
      "index": {
        "description": "t1 t2 t1 t2 Fails with Left in the following cases The type to bind is not small type variable The conclusion of the theorem is not an equation The type to bind is free in the assumption list of the theorem The type variable to bind is free in the conclusion of the theorem",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primTYABS",
        "normalized": "HOLType-\u003eHOLThm-\u003eEither String HOLThm",
        "package": "haskhol-core",
        "partial": "TYABS",
        "signature": "HOLType-\u003eHOLThm-\u003eEither String HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primTYAPP",
      "description": {
        "fct-descr": "\u003cpre\u003e\n        A |- t1 = t2\n----------------------------\n A |- t1 [: ty] = t2 [: ty]\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the conclusion of the theorem is not an equation.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eprimTYAPP\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ca\u003eprimTYAPP2\u003c/a\u003e\u003c/code\u003e when the same type is\n  applied to both sides, i.e. \n\u003c/p\u003e\u003cpre\u003e primTYAPP ty === primTYAPP2 ty ty\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLThm -\u003e Maybe HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primTYAPP",
        "fct-type": "function",
        "title": "primTYAPP"
      },
      "index": {
        "description": "t1 t2 t1 ty t2 ty Fails with Nothing if the conclusion of the theorem is not an equation Note that primTYAPP is equivalent to primTYAPP2 when the same type is applied to both sides i.e primTYAPP ty primTYAPP2 ty ty",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primTYAPP",
        "normalized": "HOLType-\u003eHOLThm-\u003eMaybe HOLThm",
        "package": "haskhol-core",
        "partial": "TYAPP",
        "signature": "HOLType-\u003eHOLThm-\u003eMaybe HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primTYAPP2",
      "description": {
        "fct-descr": "\u003cpre\u003e\n          A |- t1 = t2\n-------------------------------\n A |- t1 [: ty1] = t2 [: ty2]\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The conclusion of the theorem is not an equation of terms of universal type.\n\u003c/li\u003e\u003cli\u003e The type arguments are not alpha-equivalent.\n\u003c/li\u003e\u003cli\u003e One, or both, of the type arguments is not small.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLType -\u003e HOLThm -\u003e Either String HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primTYAPP2",
        "fct-type": "function",
        "title": "primTYAPP2"
      },
      "index": {
        "description": "t1 t2 t1 ty1 t2 ty2 Fails with Left in the following cases The conclusion of the theorem is not an equation of terms of universal type The type arguments are not alpha-equivalent One or both of the type arguments is not small",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primTYAPP2",
        "normalized": "HOLType-\u003eHOLType-\u003eHOLThm-\u003eEither String HOLThm",
        "package": "haskhol-core",
        "partial": "TYAPP",
        "signature": "HOLType-\u003eHOLType-\u003eHOLThm-\u003eEither String HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primTYBETA",
      "description": {
        "fct-descr": "\u003cpre\u003e\n     (\\\\ ty . t[ty]) [: ty]    \n---------------------------------\n |- (\\\\ ty . t[ty]) [: ty] = t\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The term is not a valid type application.\n\u003c/li\u003e\u003cli\u003e The reduction is not a trivial one, i.e. the argument type is not equivalent\n    to the bound type variable.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e Either String HOLThm",
        "fct-source": "src/HaskHOL-Core-Kernel.html#primTYBETA",
        "fct-type": "function",
        "title": "primTYBETA"
      },
      "index": {
        "description": "ty ty ty ty ty ty Fails with Left in the following cases The term is not valid type application The reduction is not trivial one i.e the argument type is not equivalent to the bound type variable",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "primTYBETA",
        "normalized": "HOLTerm-\u003eEither String HOLThm",
        "package": "haskhol-core",
        "partial": "TYBETA",
        "signature": "HOLTerm-\u003eEither String HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:view",
      "description": {
        "fct-descr": "\u003cp\u003eThe view pattern function for HaskHOL's primitive data types:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For types - Converts from \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHOLTypeView\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e For terms - Converts from \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHOLTermView\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e For theorems - Converts from \u003ccode\u003e\u003ca\u003eHOLThm\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHOLThmView\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Kernel",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/HaskHOL-Core-Kernel-Prims.html#view",
        "fct-type": "function",
        "title": "view"
      },
      "index": {
        "description": "The view pattern function for HaskHOL primitive data types For types Converts from HOLType to HOLTypeView For terms Converts from HOLTerm to HOLTermView For theorems Converts from HOLThm to HOLThmView",
        "hierarchy": "HaskHOL Core Kernel",
        "module": "HaskHOL.Core.Kernel",
        "name": "view",
        "normalized": "a-\u003eb",
        "package": "haskhol-core",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib-Lift.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a re-export of the th-lift library originally written by Ian\n  Lynagh and maintained by Mathieu Boespflug.  A very minor change was made by\n  Evan Austin in order to facilitate derivation of lift instances for quantified\n  type constructors.\n\u003c/p\u003e\u003cp\u003eThe decision to include this source as part of the HaskHOL system, rather than\n  import the original library, was made to facilitate the above change and to\n  sever HaskHOL's only dependence on a non-Haskell Platform library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HaskHOL.Core.Lib.Lift",
        "fct-package": "haskhol-core",
        "fct-signature": "module",
        "fct-source": "src/HaskHOL-Core-Lib-Lift.html",
        "fct-type": "module",
        "title": "Lift"
      },
      "index": {
        "description": "This module is re-export of the th-lift library originally written by Ian Lynagh and maintained by Mathieu Boespflug very minor change was made by Evan Austin in order to facilitate derivation of lift instances for quantified type constructors The decision to include this source as part of the HaskHOL system rather than import the original library was made to facilitate the above change and to sever HaskHOL only dependence on non-Haskell Platform library",
        "hierarchy": "HaskHOL Core Lib Lift",
        "module": "HaskHOL.Core.Lib.Lift",
        "name": "Lift",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib-Lift.html#v:deriveLift",
      "description": {
        "fct-descr": "\u003cp\u003eDerive Lift instances for the given datatype.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib.Lift",
        "fct-package": "haskhol-core",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/HaskHOL-Core-Lib-Lift.html#deriveLift",
        "fct-type": "function",
        "title": "deriveLift"
      },
      "index": {
        "description": "Derive Lift instances for the given datatype",
        "hierarchy": "HaskHOL Core Lib Lift",
        "module": "HaskHOL.Core.Lib.Lift",
        "name": "deriveLift",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "haskhol-core",
        "partial": "Lift",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib-Lift.html#v:deriveLift-39-",
      "description": {
        "fct-descr": "\u003cp\u003eObtain Info values through a custom reification function. This is useful\n when generating instances for datatypes that have not yet been declared.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib.Lift",
        "fct-package": "haskhol-core",
        "fct-signature": "Info -\u003e Q [Dec]",
        "fct-source": "src/HaskHOL-Core-Lib-Lift.html#deriveLift%27",
        "fct-type": "function",
        "title": "deriveLift'"
      },
      "index": {
        "description": "Obtain Info values through custom reification function This is useful when generating instances for datatypes that have not yet been declared",
        "hierarchy": "HaskHOL Core Lib Lift",
        "module": "HaskHOL.Core.Lib.Lift",
        "name": "deriveLift'",
        "normalized": "Info-\u003eQ[Dec]",
        "package": "haskhol-core",
        "partial": "Lift'",
        "signature": "Info-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib-Lift.html#v:deriveLiftMany",
      "description": {
        "fct-descr": "\u003cp\u003eDerive Lift instances for many datatypes.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib.Lift",
        "fct-package": "haskhol-core",
        "fct-signature": "[Name] -\u003e Q [Dec]",
        "fct-source": "src/HaskHOL-Core-Lib-Lift.html#deriveLiftMany",
        "fct-type": "function",
        "title": "deriveLiftMany"
      },
      "index": {
        "description": "Derive Lift instances for many datatypes",
        "hierarchy": "HaskHOL Core Lib Lift",
        "module": "HaskHOL.Core.Lib.Lift",
        "name": "deriveLiftMany",
        "normalized": "[Name]-\u003eQ[Dec]",
        "package": "haskhol-core",
        "partial": "Lift Many",
        "signature": "[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines or re-exports common utility functions, type classes, \n  and auxilliary data types used in HaskHOL.  The following conventions hold \n  true:\n  * Where possible, we favor re-exporting common functions rather than\n    redefining them. \n  * We favor re-exporting individual functions rather entire modules to reduce\n    the number of items in our utility library.\n  * We default to the names of functions commonly used by Haskell libraries,\n    however, if there's a different name for a function in HOL systems we\n    include an alias for it.  For example, \u003ccode\u003e\u003ca\u003eiComb\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that none of the functions in this module depend on data types \n  introduced by HaskHOL.  Utility functions that do have such a dependence are \n  found in the \u003ca\u003eHaskHOL.Core.Basics\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "module",
        "fct-source": "src/HaskHOL-Core-Lib.html",
        "fct-type": "module",
        "title": "Lib"
      },
      "index": {
        "description": "This module defines or re-exports common utility functions type classes and auxilliary data types used in HaskHOL The following conventions hold true Where possible we favor re-exporting common functions rather than redefining them We favor re-exporting individual functions rather entire modules to reduce the number of items in our utility library We default to the names of functions commonly used by Haskell libraries however if there different name for function in HOL systems we include an alias for it For example iComb and id Note that none of the functions in this module depend on data types introduced by HaskHOL Utility functions that do have such dependence are found in the HaskHOL.Core.Basics module",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "Lib",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#t:Lang",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eLang\u003c/a\u003e\u003c/code\u003e class defines common language operations and combinators not based\n  on sequencing.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "class",
        "fct-source": "src/HaskHOL-Core-Lib.html#Lang",
        "fct-type": "class",
        "title": "Lang"
      },
      "index": {
        "description": "The Lang class defines common language operations and combinators not based on sequencing",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "Lang",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Lang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#t:LangSeq",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eLangSeq\u003c/a\u003e\u003c/code\u003e class defines common language operations and combinators based\n  on sequencing.  See the note at the top of this section for more details as\n  to why these are separated on their own.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "class",
        "fct-source": "src/HaskHOL-Core-Lib.html#LangSeq",
        "fct-type": "class",
        "title": "LangSeq"
      },
      "index": {
        "description": "The LangSeq class defines common language operations and combinators based on sequencing See the note at the top of this section for more details as to why these are separated on their own",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "LangSeq",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Lang Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#t:LiftOption",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eLiftOption\u003c/a\u003e\u003c/code\u003e class provides an infix operator to more cleanly apply the\n  \u003ccode\u003e\u003ca\u003efromJustM\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromRightM\u003c/a\u003e\u003c/code\u003e methods to a value that will be passed to a\n  monadic computation.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "class",
        "fct-source": "src/HaskHOL-Core-Lib.html#LiftOption",
        "fct-type": "class",
        "title": "LiftOption"
      },
      "index": {
        "description": "The LiftOption class provides an infix operator to more cleanly apply the fromJustM and fromRightM methods to value that will be passed to monadic computation",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "LiftOption",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Lift Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#t:Note",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e class provides an ad hoc way of tagging an error case with a\n  string.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "class",
        "fct-source": "src/HaskHOL-Core-Lib.html#Note",
        "fct-type": "class",
        "title": "Note"
      },
      "index": {
        "description": "The Note class provides an ad hoc way of tagging an error case with string",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "Note",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Note",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:-35--60--60-",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003e=\u003c\u003c\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eliftO\u003c/a\u003e\u003c/code\u003e for the right argument.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e m b) -\u003e l a -\u003e m b",
        "fct-source": "src/HaskHOL-Core-Lib.html#%23%3C%3C",
        "fct-type": "method",
        "title": "(#\u003c\u003c)"
      },
      "index": {
        "description": "version of composed with liftO for the right argument",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "(#\u003c\u003c) #\u003c\u003c",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb c",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003em b)-\u003el a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:-60--35--60-",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003e\u003c=\u003c\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eliftO\u003c/a\u003e\u003c/code\u003e for the right argument.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(b -\u003e m c) -\u003e (a -\u003e l b) -\u003e a -\u003e m c",
        "fct-source": "src/HaskHOL-Core-Lib.html#%3C%23%3C",
        "fct-type": "method",
        "title": "(\u003c#\u003c)"
      },
      "index": {
        "description": "version of composed with liftO for the right argument",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "(\u003c#\u003c) \u003c#\u003c",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003ee a)-\u003ed-\u003eb c",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(b-\u003em c)-\u003e(a-\u003el b)-\u003ea-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:-60--35--62-",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eliftM1\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eliftO\u003c/a\u003e\u003c/code\u003e for the right argument.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e m c) -\u003e l a -\u003e b -\u003e m c",
        "fct-source": "src/HaskHOL-Core-Lib.html#%3C%23%3E",
        "fct-type": "method",
        "title": "(\u003c#\u003e)"
      },
      "index": {
        "description": "version of liftM1 composed with liftO for the right argument",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "(\u003c#\u003e) \u003c#\u003e",
        "normalized": "(a-\u003eb-\u003ec d)-\u003ee a-\u003eb-\u003ec d",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eb-\u003em c)-\u003el a-\u003eb-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:-60--63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to annotate more precise error messages.  Replaces the \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e operator \n    in cases such as  \n\u003c/p\u003e\u003cpre\u003e ... \u003c|\u003e fail \"...\"\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "m a -\u003e String -\u003e m a",
        "fct-source": "src/HaskHOL-Core-Lib.html#%3C%3F%3E",
        "fct-type": "method",
        "title": "(\u003c?\u003e)"
      },
      "index": {
        "description": "Used to annotate more precise error messages Replaces the operator in cases such as fail",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "(\u003c?\u003e) \u003c?\u003e",
        "normalized": "a b-\u003eString-\u003ea b",
        "package": "haskhol-core",
        "partial": "",
        "signature": "m a-\u003eString-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:-92--92-",
      "description": {
        "fct-descr": "\u003cp\u003eSubtracts one list from the other.  A re-export of \u003ccode\u003e\u003ca\u003e\\\\\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#%5C%5C",
        "fct-type": "function",
        "title": "(\\\\)"
      },
      "index": {
        "description": "Subtracts one list from the other re-export of",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "(\\\\) \\\\",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_ALL",
      "description": {
        "fct-descr": "\u003cp\u003eA primitive language operation that always succeeds.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a",
        "fct-source": "src/HaskHOL-Core-Lib.html#_ALL",
        "fct-type": "method",
        "title": "_ALL"
      },
      "index": {
        "description": "primitive language operation that always succeeds",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "_ALL",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "ALL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_CHANGED",
      "description": {
        "fct-descr": "\u003cp\u003eA language combinator that fails if the wrapped operation doesn't invoke\n      some change, i.e. a tactic fails to change the goal state.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/HaskHOL-Core-Lib.html#_CHANGED",
        "fct-type": "method",
        "title": "_CHANGED"
      },
      "index": {
        "description": "language combinator that fails if the wrapped operation doesn invoke some change i.e tactic fails to change the goal state",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "_CHANGED",
        "normalized": "a-\u003ea",
        "package": "haskhol-core",
        "partial": "CHANGED",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_EVERY",
      "description": {
        "fct-descr": "\u003cp\u003eA language combinator that performs every operation in a list  \n      sequentially.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/HaskHOL-Core-Lib.html#_EVERY",
        "fct-type": "method",
        "title": "_EVERY"
      },
      "index": {
        "description": "language combinator that performs every operation in list sequentially",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "_EVERY",
        "normalized": "[a]-\u003ea",
        "package": "haskhol-core",
        "partial": "EVERY",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_FAIL",
      "description": {
        "fct-descr": "\u003cp\u003eA primitive language operation that always fails.  Typically this is\n      written using \u003ccode\u003ethrow\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/HaskHOL-Core-Lib.html#_FAIL",
        "fct-type": "method",
        "title": "_FAIL"
      },
      "index": {
        "description": "primitive language operation that always fails Typically this is written using throw",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "_FAIL",
        "normalized": "String-\u003ea",
        "package": "haskhol-core",
        "partial": "FAIL",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_FIRST",
      "description": {
        "fct-descr": "\u003cp\u003eA language combinator that performs the first operation in a list.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/HaskHOL-Core-Lib.html#_FIRST",
        "fct-type": "method",
        "title": "_FIRST"
      },
      "index": {
        "description": "language combinator that performs the first operation in list",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "_FIRST",
        "normalized": "[a]-\u003ea",
        "package": "haskhol-core",
        "partial": "FIRST",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_NO",
      "description": {
        "fct-descr": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003e_FAIL\u003c/a\u003e\u003c/code\u003e with a fixed failure string.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a",
        "fct-source": "src/HaskHOL-Core-Lib.html#_NO",
        "fct-type": "method",
        "title": "_NO"
      },
      "index": {
        "description": "An instance of FAIL with fixed failure string",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "_NO",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "NO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_ORELSE",
      "description": {
        "fct-descr": "\u003cp\u003eA language combinator for branching based on failure.  The language\n      equivalent of the \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/HaskHOL-Core-Lib.html#_ORELSE",
        "fct-type": "method",
        "title": "_ORELSE"
      },
      "index": {
        "description": "language combinator for branching based on failure The language equivalent of the operator",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "_ORELSE",
        "normalized": "a-\u003ea-\u003ea",
        "package": "haskhol-core",
        "partial": "ORELSE",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_REPEAT",
      "description": {
        "fct-descr": "\u003cp\u003eA language combinator that repeatedly applies a language operation until \n      failure.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/HaskHOL-Core-Lib.html#_REPEAT",
        "fct-type": "method",
        "title": "_REPEAT"
      },
      "index": {
        "description": "language combinator that repeatedly applies language operation until failure",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "_REPEAT",
        "normalized": "a-\u003ea",
        "package": "haskhol-core",
        "partial": "REPEAT",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_THEN",
      "description": {
        "fct-descr": "\u003cp\u003eA language combinator that sequences operations.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/HaskHOL-Core-Lib.html#_THEN",
        "fct-type": "method",
        "title": "_THEN"
      },
      "index": {
        "description": "language combinator that sequences operations",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "_THEN",
        "normalized": "a-\u003ea-\u003ea",
        "package": "haskhol-core",
        "partial": "THEN",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_TRY",
      "description": {
        "fct-descr": "\u003cp\u003eA language combinator that prevents the wrapped operation from having an\n      effect if it fails.  The language equivalent of the backtracking \u003ccode\u003etry\u003c/code\u003e \n      operator.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/HaskHOL-Core-Lib.html#_TRY",
        "fct-type": "method",
        "title": "_TRY"
      },
      "index": {
        "description": "language combinator that prevents the wrapped operation from having an effect if it fails The language equivalent of the backtracking try operator",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "_TRY",
        "normalized": "a-\u003ea",
        "package": "haskhol-core",
        "partial": "TRY",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:allpairs",
      "description": {
        "fct-descr": "\u003cp\u003eProduces a list containing the results of applying a function to all possible \n  combinations of arguments from two lists.  Rather than failing if the lists\n  are of different lengths, iteration is shortcutted to end when the left most\n  list is null.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
        "fct-source": "src/HaskHOL-Core-Lib.html#allpairs",
        "fct-type": "function",
        "title": "allpairs"
      },
      "index": {
        "description": "Produces list containing the results of applying function to all possible combinations of arguments from two lists Rather than failing if the lists are of different lengths iteration is shortcutted to end when the left most list is null",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "allpairs",
        "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:assoc",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e [(a, b)] -\u003e Maybe b",
        "fct-source": "src/HaskHOL-Core-Lib.html#assoc",
        "fct-type": "function",
        "title": "assoc"
      },
      "index": {
        "description": "An alias to lookup for HOL users more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "assoc",
        "normalized": "a-\u003e[(a,b)]-\u003eMaybe b",
        "package": "haskhol-core",
        "partial": "",
        "signature": "a-\u003e[(a,b)]-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:assocd",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003elookupd\u003c/a\u003e\u003c/code\u003e for HOL users who are more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e [(a, b)] -\u003e b -\u003e b",
        "fct-source": "src/HaskHOL-Core-Lib.html#assocd",
        "fct-type": "function",
        "title": "assocd"
      },
      "index": {
        "description": "An alias to lookupd for HOL users who are more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "assocd",
        "normalized": "a-\u003e[(a,b)]-\u003eb-\u003eb",
        "package": "haskhol-core",
        "partial": "",
        "signature": "a-\u003e[(a,b)]-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:butLast",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003etryInit\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e Maybe [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#butLast",
        "fct-type": "function",
        "title": "butLast"
      },
      "index": {
        "description": "An alias to tryInit for HOL users more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "butLast",
        "normalized": "[a]-\u003eMaybe[a]",
        "package": "haskhol-core",
        "partial": "Last",
        "signature": "[a]-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:cComb",
      "description": {
        "fct-descr": "\u003cp\u003eThe C combinator.  An alias for \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e b -\u003e a -\u003e c",
        "fct-source": "src/HaskHOL-Core-Lib.html#cComb",
        "fct-type": "function",
        "title": "cComb"
      },
      "index": {
        "description": "The combinator An alias for flip",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "cComb",
        "normalized": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
        "package": "haskhol-core",
        "partial": "Comb",
        "signature": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:can",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a boolean value indicating whether a monadic computation succeeds or\n  fails.  The \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e operator is used for branching.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e m b) -\u003e a -\u003e m Bool",
        "fct-source": "src/HaskHOL-Core-Lib.html#can",
        "fct-type": "function",
        "title": "can"
      },
      "index": {
        "description": "Returns boolean value indicating whether monadic computation succeeds or fails The operator is used for branching",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "can",
        "normalized": "(a-\u003eb c)-\u003ea-\u003eb Bool",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003em b)-\u003ea-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:canNot",
      "description": {
        "fct-descr": "\u003cp\u003eThe opposite of \u003ccode\u003e\u003ca\u003ecan\u003c/a\u003e\u003c/code\u003e.  Functionally equivalent to \n\u003c/p\u003e\u003cpre\u003e \\ f -\u003e liftM not . can f\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e m b) -\u003e a -\u003e m Bool",
        "fct-source": "src/HaskHOL-Core-Lib.html#canNot",
        "fct-type": "function",
        "title": "canNot"
      },
      "index": {
        "description": "The opposite of can Functionally equivalent to liftM not can",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "canNot",
        "normalized": "(a-\u003eb c)-\u003ea-\u003eb Bool",
        "package": "haskhol-core",
        "partial": "Not",
        "signature": "(a-\u003em b)-\u003ea-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:check",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a predicate succeeds for a provided value, returning that value\n  guarded by a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type if so.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e Bool) -\u003e a -\u003e Maybe a",
        "fct-source": "src/HaskHOL-Core-Lib.html#check",
        "fct-type": "function",
        "title": "check"
      },
      "index": {
        "description": "Checks if predicate succeeds for provided value returning that value guarded by Maybe type if so",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "check",
        "normalized": "(a-\u003eBool)-\u003ea-\u003eMaybe a",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003ea-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:chopList",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003etrySplitAt\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Int -\u003e [a] -\u003e Maybe ([a], [a])",
        "fct-source": "src/HaskHOL-Core-Lib.html#chopList",
        "fct-type": "function",
        "title": "chopList"
      },
      "index": {
        "description": "An alias to trySplitAt for HOL users more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "chopList",
        "normalized": "Int-\u003e[a]-\u003eMaybe([a],[a])",
        "package": "haskhol-core",
        "partial": "List",
        "signature": "Int-\u003e[a]-\u003eMaybe([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves an item from a list.  A re-export of \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Removes an item from list re-export of delete",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "delete",
        "normalized": "a-\u003e[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "a-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:denominator",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the denominator of a rational number.  A re-export of \u003ccode\u003e\u003ca\u003edenominator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Rational -\u003e Integer",
        "fct-source": "src/HaskHOL-Core-Lib.html#denominator",
        "fct-type": "function",
        "title": "denominator"
      },
      "index": {
        "description": "Returns the denominator of rational number re-export of denominator",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "denominator",
        "normalized": "Rational-\u003eInteger",
        "package": "haskhol-core",
        "partial": "",
        "signature": "Rational-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:doList",
      "description": {
        "fct-descr": "\u003cp\u003eMap a monadic function over a list, ignoring the results.  A re-export of \n  \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e m b) -\u003e [a] -\u003e m ()",
        "fct-source": "src/HaskHOL-Core-Lib.html#doList",
        "fct-type": "function",
        "title": "doList"
      },
      "index": {
        "description": "Map monadic function over list ignoring the results re-export of mapM",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "doList",
        "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb()",
        "package": "haskhol-core",
        "partial": "List",
        "signature": "(a-\u003em b)-\u003e[a]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:dropWhileEnd",
      "description": {
        "fct-descr": "\u003cp\u003eDrops elements from the end of a list while a predicate is true.  A re-export\n  of \u003ccode\u003e\u003ca\u003edropWhileEnd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#dropWhileEnd",
        "fct-type": "function",
        "title": "dropWhileEnd"
      },
      "index": {
        "description": "Drops elements from the end of list while predicate is true re-export of dropWhileEnd",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "dropWhileEnd",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "While End",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:el",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003etryIndex\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.  Note that\n  the order of the arguments is flipped.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Int -\u003e [a] -\u003e Maybe a",
        "fct-source": "src/HaskHOL-Core-Lib.html#el",
        "fct-type": "function",
        "title": "el"
      },
      "index": {
        "description": "An alias to tryIndex for HOL users more familiar with this name Note that the order of the arguments is flipped",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "el",
        "normalized": "Int-\u003e[a]-\u003eMaybe a",
        "package": "haskhol-core",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:elemIndex",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the first index where an element appears in list.  Fails with \n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no such element is found.  A re-export of \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e [a] -\u003e Maybe Int",
        "fct-source": "src/HaskHOL-Core-Lib.html#elemIndex",
        "fct-type": "function",
        "title": "elemIndex"
      },
      "index": {
        "description": "Returns the first index where an element appears in list Fails with Nothing if no such element is found re-export of elemIndex",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "elemIndex",
        "normalized": "a-\u003e[a]-\u003eMaybe Int",
        "package": "haskhol-core",
        "partial": "Index",
        "signature": "a-\u003e[a]-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:endItlist",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003etryFoldr1\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e Maybe a",
        "fct-source": "src/HaskHOL-Core-Lib.html#endItlist",
        "fct-type": "function",
        "title": "endItlist"
      },
      "index": {
        "description": "An alias to tryFoldr1 for HOL users more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "endItlist",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a",
        "package": "haskhol-core",
        "partial": "Itlist",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:exists",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e for HOL users who are more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Lib.html#exists",
        "fct-type": "function",
        "title": "exists"
      },
      "index": {
        "description": "An alias to any for HOL users who are more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "exists",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:failWhen",
      "description": {
        "fct-descr": "\u003cp\u003eReplaces the common pattern \n\u003c/p\u003e\u003cpre\u003e m \u003e\u003e= \\ cond -\u003e if cond then fail \"...\"\n\u003c/pre\u003e\u003cp\u003eThe default case is defined in terms of \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "m Bool -\u003e String -\u003e m ()",
        "fct-source": "src/HaskHOL-Core-Lib.html#failWhen",
        "fct-type": "method",
        "title": "failWhen"
      },
      "index": {
        "description": "Replaces the common pattern cond if cond then fail The default case is defined in terms of empty and",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "failWhen",
        "normalized": "a Bool-\u003eString-\u003ea()",
        "package": "haskhol-core",
        "partial": "When",
        "signature": "m Bool-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:ffComb",
      "description": {
        "fct-descr": "\u003cp\u003eThe FF combinator.  An alias for the arrow combinator \u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e (a, b) -\u003e (c, d)",
        "fct-source": "src/HaskHOL-Core-Lib.html#ffComb",
        "fct-type": "function",
        "title": "ffComb"
      },
      "index": {
        "description": "The FF combinator An alias for the arrow combinator",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "ffComb",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(a,c)-\u003e(b,d)",
        "package": "haskhol-core",
        "partial": "Comb",
        "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003e(a,b)-\u003e(c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:ffCombM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of the FF combinator.  An alias for the arrow combinator\n  \u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e lifted for \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e arrows.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e m c) -\u003e (b -\u003e m d) -\u003e (a, b) -\u003e m (c, d)",
        "fct-source": "src/HaskHOL-Core-Lib.html#ffCombM",
        "fct-type": "function",
        "title": "ffCombM"
      },
      "index": {
        "description": "The monadic version of the FF combinator An alias for the arrow combinator lifted for Kleisli arrows",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "ffCombM",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003e(a,d)-\u003eb(c,e)",
        "package": "haskhol-core",
        "partial": "Comb",
        "signature": "(a-\u003em c)-\u003e(b-\u003em d)-\u003e(a,b)-\u003em(c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eA re-export of \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe a",
        "fct-source": "src/HaskHOL-Core-Lib.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "re-export of find",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "find",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:findM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e.  Fails if the monadic predicate does.  Also \n  fails with \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if an empty list is provided.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m a",
        "fct-source": "src/HaskHOL-Core-Lib.html#findM",
        "fct-type": "function",
        "title": "findM"
      },
      "index": {
        "description": "The monadic version of find Fails if the monadic predicate does Also fails with mzero if an empty list is provided",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "findM",
        "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb a",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003em Bool)-\u003e[a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:first",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function only to the first element of a pair.  A re-export of \n  \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e c) -\u003e (a, b) -\u003e (c, b)",
        "fct-source": "src/HaskHOL-Core-Lib.html#first",
        "fct-type": "function",
        "title": "first"
      },
      "index": {
        "description": "Applies function only to the first element of pair re-export of first",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "first",
        "normalized": "(a-\u003eb)-\u003e(a,c)-\u003e(b,c)",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003ec)-\u003e(a,b)-\u003e(c,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:firstM",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic version of \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e lifted for \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e arrows.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e m c) -\u003e (a, b) -\u003e m (c, b)",
        "fct-source": "src/HaskHOL-Core-Lib.html#firstM",
        "fct-type": "function",
        "title": "firstM"
      },
      "index": {
        "description": "monadic version of first lifted for Kleisli arrows",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "firstM",
        "normalized": "(a-\u003eb c)-\u003e(a,d)-\u003eb(c,d)",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003em c)-\u003e(a,b)-\u003em(c,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:flat",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e for HOL users who are more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[[a]] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#flat",
        "fct-type": "function",
        "title": "flat"
      },
      "index": {
        "description": "An alias to concat for HOL users who are more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "flat",
        "normalized": "[[a]]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:foldl2",
      "description": {
        "fct-descr": "\u003cp\u003eA safe version of a left, list fold for functions of arity 2.  Fails with\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the two lists are of different lengths.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(c -\u003e a -\u003e b -\u003e c) -\u003e c -\u003e [a] -\u003e [b] -\u003e Maybe c",
        "fct-source": "src/HaskHOL-Core-Lib.html#foldl2",
        "fct-type": "function",
        "title": "foldl2"
      },
      "index": {
        "description": "safe version of left list fold for functions of arity Fails with Nothing if the two lists are of different lengths",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "foldl2",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003e[b]-\u003e[c]-\u003eMaybe a",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(c-\u003ea-\u003eb-\u003ec)-\u003ec-\u003e[a]-\u003e[b]-\u003eMaybe c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:foldl2M",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003efoldl2\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if the two lists are\n  of different lengths.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(c -\u003e a -\u003e b -\u003e m c) -\u003e c -\u003e [a] -\u003e [b] -\u003e m c",
        "fct-source": "src/HaskHOL-Core-Lib.html#foldl2M",
        "fct-type": "function",
        "title": "foldl2M"
      },
      "index": {
        "description": "The monadic version of foldl2 Fails with mzero if the two lists are of different lengths",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "foldl2M",
        "normalized": "(a-\u003eb-\u003ec-\u003ed a)-\u003ea-\u003e[b]-\u003e[c]-\u003ed a",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(c-\u003ea-\u003eb-\u003em c)-\u003ec-\u003e[a]-\u003e[b]-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:foldlM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.  A re-export of \u003ccode\u003e\u003ca\u003efoldlM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e t b -\u003e m a",
        "fct-source": "src/HaskHOL-Core-Lib.html#foldlM",
        "fct-type": "function",
        "title": "foldlM"
      },
      "index": {
        "description": "The monadic version of foldl re-export of foldlM",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "foldlM",
        "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003ed b-\u003ec a",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003et b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:foldr1M",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if an empty list is\n  provided as an argument.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e m a) -\u003e [a] -\u003e m a",
        "fct-source": "src/HaskHOL-Core-Lib.html#foldr1M",
        "fct-type": "function",
        "title": "foldr1M"
      },
      "index": {
        "description": "The monadic version of foldr1 Fails with mzero if an empty list is provided as an argument",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "foldr1M",
        "normalized": "(a-\u003ea-\u003eb a)-\u003e[a]-\u003eb a",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003ea-\u003em a)-\u003e[a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:foldr2",
      "description": {
        "fct-descr": "\u003cp\u003eA safe version of a right, list fold for functions of arity 2.  Fails with\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the two lists are of different lengths.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e c) -\u003e c -\u003e [a] -\u003e [b] -\u003e Maybe c",
        "fct-source": "src/HaskHOL-Core-Lib.html#foldr2",
        "fct-type": "function",
        "title": "foldr2"
      },
      "index": {
        "description": "safe version of right list fold for functions of arity Fails with Nothing if the two lists are of different lengths",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "foldr2",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003e[a]-\u003e[b]-\u003eMaybe c",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003e[a]-\u003e[b]-\u003eMaybe c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:foldr2M",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003efoldr2\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if the two lists are\n  of different lengths.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e m c) -\u003e c -\u003e [a] -\u003e [b] -\u003e m c",
        "fct-source": "src/HaskHOL-Core-Lib.html#foldr2M",
        "fct-type": "function",
        "title": "foldr2M"
      },
      "index": {
        "description": "The monadic version of foldr2 Fails with mzero if the two lists are of different lengths",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "foldr2M",
        "normalized": "(a-\u003eb-\u003ec-\u003ed c)-\u003ec-\u003e[a]-\u003e[b]-\u003ed c",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003em c)-\u003ec-\u003e[a]-\u003e[b]-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:foldrM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.  A re-export of \u003ccode\u003e\u003ca\u003efoldrM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e m b) -\u003e b -\u003e t a -\u003e m b",
        "fct-source": "src/HaskHOL-Core-Lib.html#foldrM",
        "fct-type": "function",
        "title": "foldrM"
      },
      "index": {
        "description": "The monadic version of foldr re-export of foldrM",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "foldrM",
        "normalized": "(a-\u003eb-\u003ec b)-\u003eb-\u003ed a-\u003ec b",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eb-\u003em b)-\u003eb-\u003et a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:forall",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e for HOL users who are more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Lib.html#forall",
        "fct-type": "function",
        "title": "forall"
      },
      "index": {
        "description": "An alias to all for HOL users who are more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "forall",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:forall2",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e for predicates of arity 2.  Iterates down two lists\n  simultaneously with \u003ccode\u003e\u003ca\u003emap2\u003c/a\u003e\u003c/code\u003e, using \u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e to combine the results.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e Bool) -\u003e [a] -\u003e [b] -\u003e Maybe Bool",
        "fct-source": "src/HaskHOL-Core-Lib.html#forall2",
        "fct-type": "function",
        "title": "forall2"
      },
      "index": {
        "description": "version of all for predicates of arity Iterates down two lists simultaneously with map2 using and to combine the results",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "forall2",
        "normalized": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003e[b]-\u003eMaybe Bool",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003e[b]-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:fromJustM",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efromJust\u003c/a\u003e\u003c/code\u003e that maps \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e values to \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e rather than\n  failing.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Maybe a -\u003e m a",
        "fct-source": "src/HaskHOL-Core-Lib.html#fromJustM",
        "fct-type": "function",
        "title": "fromJustM"
      },
      "index": {
        "description": "version of fromJust that maps Nothing values to mzero rather than failing",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "fromJustM",
        "normalized": "Maybe a-\u003eb a",
        "package": "haskhol-core",
        "partial": "Just",
        "signature": "Maybe a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:fromRight",
      "description": {
        "fct-descr": "\u003cp\u003eAn analogue of \u003ccode\u003e\u003ca\u003efromJust\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.  Fails with \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e when\n  provided a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e value, so take care only to use it in cases where you know \n  you are working with a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e value or are catching exceptions. \n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Either err a -\u003e a",
        "fct-source": "src/HaskHOL-Core-Lib.html#fromRight",
        "fct-type": "function",
        "title": "fromRight"
      },
      "index": {
        "description": "An analogue of fromJust for the Either type Fails with error when provided Left value so take care only to use it in cases where you know you are working with Right value or are catching exceptions",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "fromRight",
        "normalized": "Either a b-\u003eb",
        "package": "haskhol-core",
        "partial": "Right",
        "signature": "Either err a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:fromRightM",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efromRight\u003c/a\u003e\u003c/code\u003e that maps \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e values to \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e rather than\n  failing.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Either err a -\u003e m a",
        "fct-source": "src/HaskHOL-Core-Lib.html#fromRightM",
        "fct-type": "function",
        "title": "fromRightM"
      },
      "index": {
        "description": "version of fromRight that maps Left values to mzero rather than failing",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "fromRightM",
        "normalized": "Either a b-\u003ec b",
        "package": "haskhol-core",
        "partial": "Right",
        "signature": "Either err a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:funpow",
      "description": {
        "fct-descr": "\u003cp\u003eRepeatedly applies a function to an argument \u003ccode\u003en\u003c/code\u003e times.  Rather than fail,\n  the original argument is returned when \u003ccode\u003en\u003c=0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Int -\u003e (a -\u003e a) -\u003e a -\u003e a",
        "fct-source": "src/HaskHOL-Core-Lib.html#funpow",
        "fct-type": "function",
        "title": "funpow"
      },
      "index": {
        "description": "Repeatedly applies function to an argument times Rather than fail the original argument is returned when",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "funpow",
        "normalized": "Int-\u003e(a-\u003ea)-\u003ea-\u003ea",
        "package": "haskhol-core",
        "partial": "",
        "signature": "Int-\u003e(a-\u003ea)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:funpowM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003efunpow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Int -\u003e (a -\u003e m a) -\u003e a -\u003e m a",
        "fct-source": "src/HaskHOL-Core-Lib.html#funpowM",
        "fct-type": "function",
        "title": "funpowM"
      },
      "index": {
        "description": "The monadic version of funpow",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "funpowM",
        "normalized": "Int-\u003e(a-\u003eb a)-\u003ea-\u003eb a",
        "package": "haskhol-core",
        "partial": "",
        "signature": "Int-\u003e(a-\u003em a)-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:gcdNum",
      "description": {
        "fct-descr": "\u003cp\u003eFinds the least common denominator between two numbers.  An alias to \u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e for\n  HOL users more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Integer -\u003e Integer -\u003e Integer",
        "fct-source": "src/HaskHOL-Core-Lib.html#gcdNum",
        "fct-type": "function",
        "title": "gcdNum"
      },
      "index": {
        "description": "Finds the least common denominator between two numbers An alias to gcd for HOL users more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "gcdNum",
        "normalized": "Integer-\u003eInteger-\u003eInteger",
        "package": "haskhol-core",
        "partial": "Num",
        "signature": "Integer-\u003eInteger-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:group-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGroups neighbors in a list together based on a predicate.  A re-export of\n  \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/HaskHOL-Core-Lib.html#group%27",
        "fct-type": "function",
        "title": "group'"
      },
      "index": {
        "description": "Groups neighbors in list together based on predicate re-export of groupBy",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "group'",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:hush",
      "description": {
        "fct-descr": "\u003cp\u003eSuppresses the error value of an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type to convert it to a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \n  type.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Either a b -\u003e Maybe b",
        "fct-source": "src/HaskHOL-Core-Lib.html#hush",
        "fct-type": "function",
        "title": "hush"
      },
      "index": {
        "description": "Suppresses the error value of an Either type to convert it to Maybe type",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "hush",
        "normalized": "Either a b-\u003eMaybe b",
        "package": "haskhol-core",
        "partial": "",
        "signature": "Either a b-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:iComb",
      "description": {
        "fct-descr": "\u003cp\u003eThe I combinator.  An alias for \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/HaskHOL-Core-Lib.html#iComb",
        "fct-type": "function",
        "title": "iComb"
      },
      "index": {
        "description": "The combinator An alias for id",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "iComb",
        "normalized": "a-\u003ea",
        "package": "haskhol-core",
        "partial": "Comb",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e [a] -\u003e Maybe Int",
        "fct-source": "src/HaskHOL-Core-Lib.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "An alias to elemIndex for HOL users more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "index",
        "normalized": "a-\u003e[a]-\u003eMaybe Int",
        "package": "haskhol-core",
        "partial": "",
        "signature": "a-\u003e[a]-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInserts an item into a list if it would be a unique element.\n\u003c/p\u003e\u003cp\u003eImportant note:  This insert is unordered, unlike the \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e in the\n  \u003ca\u003eData.List\u003c/a\u003e module.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Inserts an item into list if it would be unique element Important note This insert is unordered unlike the insert in the Data.List module",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "insert",
        "normalized": "a-\u003e[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "a-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:insert-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e where the uniqueness test is an explicit predicate, \n  rather than a strict equality test.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e a -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#insert%27",
        "fct-type": "function",
        "title": "insert'"
      },
      "index": {
        "description": "version of insert where the uniqueness test is an explicit predicate rather than strict equality test",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "insert'",
        "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:insertMap",
      "description": {
        "fct-descr": "\u003cp\u003eInserts, or updates, a key value pair in an association list.\n\u003c/p\u003e\u003cp\u003eNote that this insert is unordered, but uniqueness preserving.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e b -\u003e [(a, b)] -\u003e [(a, b)]",
        "fct-source": "src/HaskHOL-Core-Lib.html#insertMap",
        "fct-type": "function",
        "title": "insertMap"
      },
      "index": {
        "description": "Inserts or updates key value pair in an association list Note that this insert is unordered but uniqueness preserving",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "insertMap",
        "normalized": "a-\u003eb-\u003e[(a,b)]-\u003e[(a,b)]",
        "package": "haskhol-core",
        "partial": "Map",
        "signature": "a-\u003eb-\u003e[(a,b)]-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:intersect",
      "description": {
        "fct-descr": "\u003cp\u003eFinds the intersection of two lists.  A re-export of \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#intersect",
        "fct-type": "function",
        "title": "intersect"
      },
      "index": {
        "description": "Finds the intersection of two lists re-export of intersect",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "intersect",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:itlist",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.  Note that the\n  order of the list and base case arguments is flipped.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e [a] -\u003e b -\u003e b",
        "fct-source": "src/HaskHOL-Core-Lib.html#itlist",
        "fct-type": "function",
        "title": "itlist"
      },
      "index": {
        "description": "An alias to foldr for HOL users more familiar with this name Note that the order of the list and base case arguments is flipped",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "itlist",
        "normalized": "(a-\u003eb-\u003eb)-\u003e[a]-\u003eb-\u003eb",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003e[a]-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:itlist2",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003efoldr2\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.  Note that\n  the order of the two list arguments and the base case argument is flipped.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e c) -\u003e [a] -\u003e [b] -\u003e c -\u003e Maybe c",
        "fct-source": "src/HaskHOL-Core-Lib.html#itlist2",
        "fct-type": "function",
        "title": "itlist2"
      },
      "index": {
        "description": "An alias to foldr2 for HOL users more familiar with this name Note that the order of the two list arguments and the base case argument is flipped",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "itlist2",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003e[a]-\u003e[b]-\u003ec-\u003eMaybe c",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ec)-\u003e[a]-\u003e[b]-\u003ec-\u003eMaybe c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:itlistM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003eitlist\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e m b) -\u003e t a -\u003e b -\u003e m b",
        "fct-source": "src/HaskHOL-Core-Lib.html#itlistM",
        "fct-type": "function",
        "title": "itlistM"
      },
      "index": {
        "description": "The monadic version of itlist",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "itlistM",
        "normalized": "(a-\u003eb-\u003ec b)-\u003ed a-\u003eb-\u003ec b",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eb-\u003em b)-\u003et a-\u003eb-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:kComb",
      "description": {
        "fct-descr": "\u003cp\u003eThe K combinator.  An alias for \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e b -\u003e a",
        "fct-source": "src/HaskHOL-Core-Lib.html#kComb",
        "fct-type": "function",
        "title": "kComb"
      },
      "index": {
        "description": "The combinator An alias for const",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "kComb",
        "normalized": "a-\u003eb-\u003ea",
        "package": "haskhol-core",
        "partial": "Comb",
        "signature": "a-\u003eb-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:lcmNum",
      "description": {
        "fct-descr": "\u003cp\u003eFinds the least common multiplier between two numbers.  An alias to \u003ccode\u003e\u003ca\u003elcm\u003c/a\u003e\u003c/code\u003e for\n  HOL users more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Integer -\u003e Integer -\u003e Integer",
        "fct-source": "src/HaskHOL-Core-Lib.html#lcmNum",
        "fct-type": "function",
        "title": "lcmNum"
      },
      "index": {
        "description": "Finds the least common multiplier between two numbers An alias to lcm for HOL users more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "lcmNum",
        "normalized": "Integer-\u003eInteger-\u003eInteger",
        "package": "haskhol-core",
        "partial": "Num",
        "signature": "Integer-\u003eInteger-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:liftM1",
      "description": {
        "fct-descr": "\u003cp\u003ePromotes a function to a monad, but only for its first argument, i.e.\n\u003c/p\u003e\u003cpre\u003e liftM1 f a b === flip f b =\u003c\u003c a\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e m c) -\u003e m a -\u003e b -\u003e m c",
        "fct-source": "src/HaskHOL-Core-Lib.html#liftM1",
        "fct-type": "function",
        "title": "liftM1"
      },
      "index": {
        "description": "Promotes function to monad but only for its first argument i.e liftM1 flip",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "liftM1",
        "normalized": "(a-\u003eb-\u003ec d)-\u003ec a-\u003eb-\u003ec d",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eb-\u003em c)-\u003em a-\u003eb-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:liftO",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to lift an option value, i.e. \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e, so that it can be\n      passed as an argument to a monadic computation.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "l a -\u003e m a",
        "fct-source": "src/HaskHOL-Core-Lib.html#liftO",
        "fct-type": "method",
        "title": "liftO"
      },
      "index": {
        "description": "Used to lift an option value i.e Maybe or Either so that it can be passed as an argument to monadic computation",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "liftO",
        "normalized": "a b-\u003ec b",
        "package": "haskhol-core",
        "partial": "",
        "signature": "l a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:lookupd",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e that defaults to a provided value rather than fail.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e [(a, b)] -\u003e b -\u003e b",
        "fct-source": "src/HaskHOL-Core-Lib.html#lookupd",
        "fct-type": "function",
        "title": "lookupd"
      },
      "index": {
        "description": "version of lookup that defaults to provided value rather than fail",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "lookupd",
        "normalized": "a-\u003e[(a,b)]-\u003eb-\u003eb",
        "package": "haskhol-core",
        "partial": "",
        "signature": "a-\u003e[(a,b)]-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:map2",
      "description": {
        "fct-descr": "\u003cp\u003eA safe version of a list map for functions of arity 2.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n  if the two lists are of different lengths.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e Maybe [c]",
        "fct-source": "src/HaskHOL-Core-Lib.html#map2",
        "fct-type": "function",
        "title": "map2"
      },
      "index": {
        "description": "safe version of list map for functions of arity Fails with Nothing if the two lists are of different lengths",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "map2",
        "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003eMaybe[c]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003eMaybe[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:map2M",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003emap2\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if the two lists are of\n  different lengths.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m [c]",
        "fct-source": "src/HaskHOL-Core-Lib.html#map2M",
        "fct-type": "function",
        "title": "map2M"
      },
      "index": {
        "description": "The monadic version of map2 Fails with mzero if the two lists are of different lengths",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "map2M",
        "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec[d]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:mapFilter",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e Maybe b) -\u003e [a] -\u003e [b]",
        "fct-source": "src/HaskHOL-Core-Lib.html#mapFilter",
        "fct-type": "function",
        "title": "mapFilter"
      },
      "index": {
        "description": "An alias to mapMaybe for HOL users more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "mapFilter",
        "normalized": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]",
        "package": "haskhol-core",
        "partial": "Filter",
        "signature": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:mapFilterM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003emapFilter\u003c/a\u003e\u003c/code\u003e.  The '(\u003ca\u003e|\u003c/a\u003e)' operator is used for \n  branching.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e m b) -\u003e [a] -\u003e m [b]",
        "fct-source": "src/HaskHOL-Core-Lib.html#mapFilterM",
        "fct-type": "function",
        "title": "mapFilterM"
      },
      "index": {
        "description": "The monadic version of mapFilter The operator is used for branching",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "mapFilterM",
        "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb[c]",
        "package": "haskhol-core",
        "partial": "Filter",
        "signature": "(a-\u003em b)-\u003e[a]-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:mem",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e for HOL users who are more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e [a] -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Lib.html#mem",
        "fct-type": "function",
        "title": "mem"
      },
      "index": {
        "description": "An alias to elem for HOL users who are more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "mem",
        "normalized": "a-\u003e[a]-\u003eBool",
        "package": "haskhol-core",
        "partial": "",
        "signature": "a-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:mem-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emem\u003c/a\u003e\u003c/code\u003e where the membership test is an explicit predicate, rather\n  than a strict equality test.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e a -\u003e [a] -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Lib.html#mem%27",
        "fct-type": "function",
        "title": "mem'"
      },
      "index": {
        "description": "version of mem where the membership test is an explicit predicate rather than strict equality test",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "mem'",
        "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003eBool",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eMerges two lists using a partitioning predicate to build an implied ordering.\n  See \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e for more information on how the predicate affects the order of the\n  resultant list.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "Merges two lists using partitioning predicate to build an implied ordering See sort for more information on how the predicate affects the order of the resultant list",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "merge",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:mergesort",
      "description": {
        "fct-descr": "\u003cp\u003eSorts a list using a partitioning predicate to build an implied ordering;\n  uses \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e internally.  See \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e for more information on how the predicate\n  affects the order of the resultant list.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "forall a.  (a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#mergesort",
        "fct-type": "function",
        "title": "mergesort"
      },
      "index": {
        "description": "Sorts list using partitioning predicate to build an implied ordering uses merge internally See sort for more information on how the predicate affects the order of the resultant list",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "mergesort",
        "normalized": "a b(c-\u003ec-\u003eBool)-\u003e[c]-\u003e[c]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "forall a.(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:note",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a default error value to convert a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type to an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e Maybe b -\u003e Either a b",
        "fct-source": "src/HaskHOL-Core-Lib.html#note",
        "fct-type": "function",
        "title": "note"
      },
      "index": {
        "description": "Takes default error value to convert Maybe type to an Either type",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "note",
        "normalized": "a-\u003eMaybe b-\u003eEither a b",
        "package": "haskhol-core",
        "partial": "",
        "signature": "a-\u003eMaybe b-\u003eEither a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:nsplit",
      "description": {
        "fct-descr": "\u003cp\u003eRepeatedly applies a binary destructor function to a term for every element\n  in a provided list.\n\u003c/p\u003e\u003cp\u003eApplication is reverse, or right-associative, such that for a term of the form\n  \u003ccode\u003ef x1 (f x2 ...(f xn b))\u003c/code\u003e calling this function with a destructor for \u003ccode\u003ef\u003c/code\u003e and\n  a list \u003ccode\u003el\u003c/code\u003e will produce the result \u003ccode\u003e([x1 .. xk], f x(k+1) ...(f xn b))\u003c/code\u003e where \n  \u003ccode\u003ek\u003c/code\u003e is the length of list \u003ccode\u003el\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e Maybe (a, a)) -\u003e [b] -\u003e a -\u003e Maybe ([a], a)",
        "fct-source": "src/HaskHOL-Core-Lib.html#nsplit",
        "fct-type": "function",
        "title": "nsplit"
      },
      "index": {
        "description": "Repeatedly applies binary destructor function to term for every element in provided list Application is reverse or right-associative such that for term of the form x1 x2 xn calling this function with destructor for and list will produce the result x1 xk xn where is the length of list",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "nsplit",
        "normalized": "(a-\u003eMaybe(a,a))-\u003e[b]-\u003ea-\u003eMaybe([a],a)",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eMaybe(a,a))-\u003e[b]-\u003ea-\u003eMaybe([a],a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:nsplitM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003ensplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(b -\u003e m (b, b)) -\u003e [c] -\u003e b -\u003e m ([b], b)",
        "fct-source": "src/HaskHOL-Core-Lib.html#nsplitM",
        "fct-type": "function",
        "title": "nsplitM"
      },
      "index": {
        "description": "The monadic version of nsplit",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "nsplitM",
        "normalized": "(a-\u003eb(a,a))-\u003e[c]-\u003ea-\u003eb([a],a)",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(b-\u003em(b,b))-\u003e[c]-\u003eb-\u003em([b],b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:nub",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a list to a set by removing duplicates.  A re-export of \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#nub",
        "fct-type": "function",
        "title": "nub"
      },
      "index": {
        "description": "Converts list to set by removing duplicates re-export of nub",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "nub",
        "normalized": "[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:num0",
      "description": {
        "fct-descr": "\u003cpre\u003e 0 :: Integer\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Integer",
        "fct-source": "src/HaskHOL-Core-Lib.html#num0",
        "fct-type": "function",
        "title": "num0"
      },
      "index": {
        "description": "Integer",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "num0",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:num1",
      "description": {
        "fct-descr": "\u003cpre\u003e 1 :: Integer\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Integer",
        "fct-source": "src/HaskHOL-Core-Lib.html#num1",
        "fct-type": "function",
        "title": "num1"
      },
      "index": {
        "description": "Integer",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "num1",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:num10",
      "description": {
        "fct-descr": "\u003cpre\u003e 10 :: Integer\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Integer",
        "fct-source": "src/HaskHOL-Core-Lib.html#num10",
        "fct-type": "function",
        "title": "num10"
      },
      "index": {
        "description": "Integer",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "num10",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:num2",
      "description": {
        "fct-descr": "\u003cpre\u003e 2 :: Integer\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Integer",
        "fct-source": "src/HaskHOL-Core-Lib.html#num2",
        "fct-type": "function",
        "title": "num2"
      },
      "index": {
        "description": "Integer",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "num2",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:numOfString",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a string representation of a number to an appropriate instance of\n  the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e class.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the conversion cannot be performed.\n\u003c/p\u003e\u003cp\u003eNote:  The following prefixes are valid:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e0x\u003c/code\u003e - number read as a hexidecimal value\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e0b\u003c/code\u003e - number read as a binary value\n\u003c/li\u003e\u003cli\u003e Any other prefix causes the number to be read as a decimal value\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e Maybe a",
        "fct-source": "src/HaskHOL-Core-Lib.html#numOfString",
        "fct-type": "function",
        "title": "numOfString"
      },
      "index": {
        "description": "Converts string representation of number to an appropriate instance of the Num class Fails with Nothing if the conversion cannot be performed Note The following prefixes are valid number read as hexidecimal value number read as binary value Any other prefix causes the number to be read as decimal value",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "numOfString",
        "normalized": "String-\u003eMaybe a",
        "package": "haskhol-core",
        "partial": "Of String",
        "signature": "String-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:numdom",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a real number to a rational representation.  \n  An alias to \u003ccode\u003e\u003ca\u003etoRational\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e Rational",
        "fct-source": "src/HaskHOL-Core-Lib.html#numdom",
        "fct-type": "function",
        "title": "numdom"
      },
      "index": {
        "description": "Converts real number to rational representation An alias to toRational for HOL users more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "numdom",
        "normalized": "a-\u003eRational",
        "package": "haskhol-core",
        "partial": "",
        "signature": "a-\u003eRational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:numerator",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the numerator of a rational number.  A re-export of \u003ccode\u003e\u003ca\u003enumerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Rational -\u003e Integer",
        "fct-source": "src/HaskHOL-Core-Lib.html#numerator",
        "fct-type": "function",
        "title": "numerator"
      },
      "index": {
        "description": "Returns the numerator of rational number re-export of numerator",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "numerator",
        "normalized": "Rational-\u003eInteger",
        "package": "haskhol-core",
        "partial": "",
        "signature": "Rational-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:pairMap",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function to both elements of a pair using the \u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b) -\u003e (a, a) -\u003e (b, b)",
        "fct-source": "src/HaskHOL-Core-Lib.html#pairMap",
        "fct-type": "function",
        "title": "pairMap"
      },
      "index": {
        "description": "Applies function to both elements of pair using the operator",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "pairMap",
        "normalized": "(a-\u003eb)-\u003e(a,a)-\u003e(b,b)",
        "package": "haskhol-core",
        "partial": "Map",
        "signature": "(a-\u003eb)-\u003e(a,a)-\u003e(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:pairMapM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003epairMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e m b) -\u003e (a, a) -\u003e m (b, b)",
        "fct-source": "src/HaskHOL-Core-Lib.html#pairMapM",
        "fct-type": "function",
        "title": "pairMapM"
      },
      "index": {
        "description": "The monadic version of pairMap",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "pairMapM",
        "normalized": "(a-\u003eb c)-\u003e(a,a)-\u003eb(c,c)",
        "package": "haskhol-core",
        "partial": "Map",
        "signature": "(a-\u003em b)-\u003e(a,a)-\u003em(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003eSeparates a list of elements using a predicate.  A re-export of \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
        "fct-source": "src/HaskHOL-Core-Lib.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "Separates list of elements using predicate re-export of partition",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:pow10",
      "description": {
        "fct-descr": "\u003cpre\u003e x ^ (10 :: Integer)\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Integer -\u003e Integer",
        "fct-source": "src/HaskHOL-Core-Lib.html#pow10",
        "fct-type": "function",
        "title": "pow10"
      },
      "index": {
        "description": "Integer",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "pow10",
        "normalized": "Integer-\u003eInteger",
        "package": "haskhol-core",
        "partial": "",
        "signature": "Integer-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:pow2",
      "description": {
        "fct-descr": "\u003cpre\u003e x ^ (2 :: Integer)\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Integer -\u003e Integer",
        "fct-source": "src/HaskHOL-Core-Lib.html#pow2",
        "fct-type": "function",
        "title": "pow2"
      },
      "index": {
        "description": "Integer",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "pow2",
        "normalized": "Integer-\u003eInteger",
        "package": "haskhol-core",
        "partial": "",
        "signature": "Integer-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:remove",
      "description": {
        "fct-descr": "\u003cp\u003eSeparates the first element of a list that satisfies a predicate.  Fails with\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no such element is found.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe (a, [a])",
        "fct-source": "src/HaskHOL-Core-Lib.html#remove",
        "fct-type": "function",
        "title": "remove"
      },
      "index": {
        "description": "Separates the first element of list that satisfies predicate Fails with Nothing if no such element is found",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "remove",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe(a,[a])",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe(a,[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:repeatM",
      "description": {
        "fct-descr": "\u003cp\u003eRepeatedly applies a monadic computation to an argument until there is a \n  failure.  The \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e operator is used for branching.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e m a) -\u003e a -\u003e m a",
        "fct-source": "src/HaskHOL-Core-Lib.html#repeatM",
        "fct-type": "function",
        "title": "repeatM"
      },
      "index": {
        "description": "Repeatedly applies monadic computation to an argument until there is failure The operator is used for branching",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "repeatM",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003em a)-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:rev",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#rev",
        "fct-type": "function",
        "title": "rev"
      },
      "index": {
        "description": "An alias to reverse for HOL users more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "rev",
        "normalized": "[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revAssoc",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003erevLookup\u003c/a\u003e\u003c/code\u003e for HOL users who are more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e [(b, a)] -\u003e Maybe b",
        "fct-source": "src/HaskHOL-Core-Lib.html#revAssoc",
        "fct-type": "function",
        "title": "revAssoc"
      },
      "index": {
        "description": "An alias to revLookup for HOL users who are more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "revAssoc",
        "normalized": "a-\u003e[(b,a)]-\u003eMaybe b",
        "package": "haskhol-core",
        "partial": "Assoc",
        "signature": "a-\u003e[(b,a)]-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revAssocd",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003erevLookupd\u003c/a\u003e\u003c/code\u003e for HOL users who are more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e [(b, a)] -\u003e b -\u003e b",
        "fct-source": "src/HaskHOL-Core-Lib.html#revAssocd",
        "fct-type": "function",
        "title": "revAssocd"
      },
      "index": {
        "description": "An alias to revLookupd for HOL users who are more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "revAssocd",
        "normalized": "a-\u003e[(b,a)]-\u003eb-\u003eb",
        "package": "haskhol-core",
        "partial": "Assocd",
        "signature": "a-\u003e[(b,a)]-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revItlist",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.  Note that the\n  order of the list and base case arguments is flipped, as is the order of the\n  arguments to the function.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e [a] -\u003e b -\u003e b",
        "fct-source": "src/HaskHOL-Core-Lib.html#revItlist",
        "fct-type": "function",
        "title": "revItlist"
      },
      "index": {
        "description": "An alias to foldl for HOL users more familiar with this name Note that the order of the list and base case arguments is flipped as is the order of the arguments to the function",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "revItlist",
        "normalized": "(a-\u003eb-\u003eb)-\u003e[a]-\u003eb-\u003eb",
        "package": "haskhol-core",
        "partial": "Itlist",
        "signature": "(a-\u003eb-\u003eb)-\u003e[a]-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revItlist2",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003efoldl2\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.  Note that\n  the order of the two list arguments and base case argument is flipped, as is\n  the order of the arguments to the provided function.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e c) -\u003e [a] -\u003e [b] -\u003e c -\u003e Maybe c",
        "fct-source": "src/HaskHOL-Core-Lib.html#revItlist2",
        "fct-type": "function",
        "title": "revItlist2"
      },
      "index": {
        "description": "An alias to foldl2 for HOL users more familiar with this name Note that the order of the two list arguments and base case argument is flipped as is the order of the arguments to the provided function",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "revItlist2",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003e[a]-\u003e[b]-\u003ec-\u003eMaybe c",
        "package": "haskhol-core",
        "partial": "Itlist",
        "signature": "(a-\u003eb-\u003ec-\u003ec)-\u003e[a]-\u003e[b]-\u003ec-\u003eMaybe c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revLookup",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e where the search is performed against the second element\n  of the pair instead of the first.  Still fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the desired\n  value is not found.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e [(b, a)] -\u003e Maybe b",
        "fct-source": "src/HaskHOL-Core-Lib.html#revLookup",
        "fct-type": "function",
        "title": "revLookup"
      },
      "index": {
        "description": "version of lookup where the search is performed against the second element of the pair instead of the first Still fails with Nothing if the desired value is not found",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "revLookup",
        "normalized": "a-\u003e[(b,a)]-\u003eMaybe b",
        "package": "haskhol-core",
        "partial": "Lookup",
        "signature": "a-\u003e[(b,a)]-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revLookupd",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003erevLookup\u003c/a\u003e\u003c/code\u003e that defaults to a provided value rather than fail.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e [(b, a)] -\u003e b -\u003e b",
        "fct-source": "src/HaskHOL-Core-Lib.html#revLookupd",
        "fct-type": "function",
        "title": "revLookupd"
      },
      "index": {
        "description": "version of revLookup that defaults to provided value rather than fail",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "revLookupd",
        "normalized": "a-\u003e[(b,a)]-\u003eb-\u003eb",
        "package": "haskhol-core",
        "partial": "Lookupd",
        "signature": "a-\u003e[(b,a)]-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revSplitList",
      "description": {
        "fct-descr": "\u003cp\u003eRepeatedly applies a binary destructor function to a term until failure.\n\u003c/p\u003e\u003cp\u003eApplication is reverse, or right-associative, such that for a term of the form\n  \u003ccode\u003ex1 `f` x2 `f` b\u003c/code\u003e calling this function with a destructor for \u003ccode\u003ef\u003c/code\u003e will\n  produce the result \u003ccode\u003e(f, [x1, x2 `f` b])\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "forall a.  (a -\u003e Maybe (a, a)) -\u003e a -\u003e (a, [a])",
        "fct-source": "src/HaskHOL-Core-Lib.html#revSplitList",
        "fct-type": "function",
        "title": "revSplitList"
      },
      "index": {
        "description": "Repeatedly applies binary destructor function to term until failure Application is reverse or right-associative such that for term of the form x1 x2 calling this function with destructor for will produce the result x1 x2",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "revSplitList",
        "normalized": "a b(c-\u003eMaybe(c,c))-\u003ec-\u003e(c,[c])",
        "package": "haskhol-core",
        "partial": "Split List",
        "signature": "forall a.(a-\u003eMaybe(a,a))-\u003ea-\u003e(a,[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revSplitListM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003erevSplitList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(b -\u003e m (b, b)) -\u003e b -\u003e m (b, [b])",
        "fct-source": "src/HaskHOL-Core-Lib.html#revSplitListM",
        "fct-type": "function",
        "title": "revSplitListM"
      },
      "index": {
        "description": "The monadic version of revSplitList",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "revSplitListM",
        "normalized": "(a-\u003eb(a,a))-\u003ea-\u003eb(a,[a])",
        "package": "haskhol-core",
        "partial": "Split List",
        "signature": "(b-\u003em(b,b))-\u003eb-\u003em(b,[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:second",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function only to the second element of a pair.  A re-export of \n  \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(b -\u003e c) -\u003e (a, b) -\u003e (a, c)",
        "fct-source": "src/HaskHOL-Core-Lib.html#second",
        "fct-type": "function",
        "title": "second"
      },
      "index": {
        "description": "Applies function only to the second element of pair re-export of second",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "second",
        "normalized": "(a-\u003eb)-\u003e(c,a)-\u003e(c,b)",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(b-\u003ec)-\u003e(a,b)-\u003e(a,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:secondM",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic version of \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e lifted for \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e arrows.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(b -\u003e m c) -\u003e (a, b) -\u003e m (a, c)",
        "fct-source": "src/HaskHOL-Core-Lib.html#secondM",
        "fct-type": "function",
        "title": "secondM"
      },
      "index": {
        "description": "monadic version of second lifted for Kleisli arrows",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "secondM",
        "normalized": "(a-\u003eb c)-\u003e(d,a)-\u003eb(d,c)",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(b-\u003em c)-\u003e(a,b)-\u003em(a,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:setEq",
      "description": {
        "fct-descr": "\u003cp\u003eA test for set equality using \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e [a] -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Lib.html#setEq",
        "fct-type": "function",
        "title": "setEq"
      },
      "index": {
        "description": "test for set equality using subset",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "setEq",
        "normalized": "[a]-\u003e[a]-\u003eBool",
        "package": "haskhol-core",
        "partial": "Eq",
        "signature": "[a]-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:setify",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#setify",
        "fct-type": "function",
        "title": "setify"
      },
      "index": {
        "description": "An alias to nub for HOL users more familiar with this name",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "setify",
        "normalized": "[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:setify-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003esetify\u003c/a\u003e\u003c/code\u003e that eliminates elements based on a provided predicate.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#setify%27",
        "fct-type": "function",
        "title": "setify'"
      },
      "index": {
        "description": "version of setify that eliminates elements based on provided predicate",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "setify'",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:shareOut",
      "description": {
        "fct-descr": "\u003cp\u003ePartitions a list into a list of lists matching the structure of the first \n  argument. For example:\n  \u003ccode\u003eshareOut [[1, 2], [3], [4, 5]] \"abcde\" === [\"ab\", \"c\", \"de\"]\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[[a]] -\u003e [b] -\u003e Maybe [[b]]",
        "fct-source": "src/HaskHOL-Core-Lib.html#shareOut",
        "fct-type": "function",
        "title": "shareOut"
      },
      "index": {
        "description": "Partitions list into list of lists matching the structure of the first argument For example shareOut abcde ab de",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "shareOut",
        "normalized": "[[a]]-\u003e[b]-\u003eMaybe[[b]]",
        "package": "haskhol-core",
        "partial": "Out",
        "signature": "[[a]]-\u003e[b]-\u003eMaybe[[b]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:sort",
      "description": {
        "fct-descr": "\u003cp\u003eSorts a list using a partitioning predicate to build an implied ordering.\n  If \u003ccode\u003ep\u003c/code\u003e is the predicate and \u003ccode\u003ex `p` y\u003c/code\u003e and \u003ccode\u003enot (y `p` x)\u003c/code\u003e are true then \n  \u003ccode\u003ex\u003c/code\u003e will be in front of \u003ccode\u003ey\u003c/code\u003e in the sorted list.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#sort",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "Sorts list using partitioning predicate to build an implied ordering If is the predicate and and not are true then will be in front of in the sorted list",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "sort",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:sortBy",
      "description": {
        "fct-descr": "\u003cp\u003eA more traditional sort using an \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e relationship between elements. A\n  re-export of \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#sortBy",
        "fct-type": "function",
        "title": "sortBy"
      },
      "index": {
        "description": "more traditional sort using an Ordering relationship between elements re-export of sortBy",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "sortBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:splitList",
      "description": {
        "fct-descr": "\u003cp\u003eRepeatedly applies a binary destructor function to a term until failure.\n\u003c/p\u003e\u003cp\u003eApplication is forward, or left-associative, such that for a term of the form\n  \u003ccode\u003ex1 `f` x2 `f` b\u003c/code\u003e calling this function with a destructor for \u003ccode\u003ef\u003c/code\u003e will\n  produce the result \u003ccode\u003e([x1, x2], b)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e ([a], b)",
        "fct-source": "src/HaskHOL-Core-Lib.html#splitList",
        "fct-type": "function",
        "title": "splitList"
      },
      "index": {
        "description": "Repeatedly applies binary destructor function to term until failure Application is forward or left-associative such that for term of the form x1 x2 calling this function with destructor for will produce the result x1 x2",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "splitList",
        "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003e([b],a)",
        "package": "haskhol-core",
        "partial": "List",
        "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003e([a],b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:splitListM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003esplitList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(b -\u003e m (a, b)) -\u003e b -\u003e m ([a], b)",
        "fct-source": "src/HaskHOL-Core-Lib.html#splitListM",
        "fct-type": "function",
        "title": "splitListM"
      },
      "index": {
        "description": "The monadic version of splitList",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "splitListM",
        "normalized": "(a-\u003eb(c,a))-\u003ea-\u003eb([c],a)",
        "package": "haskhol-core",
        "partial": "List",
        "signature": "(b-\u003em(a,b))-\u003eb-\u003em([a],b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:stripList",
      "description": {
        "fct-descr": "\u003cp\u003eRepeatedly applies a binary destructor function to a term until failure.\n\u003c/p\u003e\u003cp\u003eApplication is forward, or left-associative, such that for a term of the form\n  \u003ccode\u003ex1 `f` x2 `f` x3\u003c/code\u003e calling this function with a destructor for \u003ccode\u003ef\u003c/code\u003e will\n  produce the result \u003ccode\u003e[x1, x2, x3]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "forall a.  (a -\u003e Maybe (a, a)) -\u003e a -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#stripList",
        "fct-type": "function",
        "title": "stripList"
      },
      "index": {
        "description": "Repeatedly applies binary destructor function to term until failure Application is forward or left-associative such that for term of the form x1 x2 x3 calling this function with destructor for will produce the result x1 x2 x3",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "stripList",
        "normalized": "a b(c-\u003eMaybe(c,c))-\u003ec-\u003e[c]",
        "package": "haskhol-core",
        "partial": "List",
        "signature": "forall a.(a-\u003eMaybe(a,a))-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:stripListM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003estripList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e m (a, a)) -\u003e a -\u003e m [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#stripListM",
        "fct-type": "function",
        "title": "stripListM"
      },
      "index": {
        "description": "The monadic version of stripList",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "stripListM",
        "normalized": "(a-\u003eb(a,a))-\u003ea-\u003eb[a]",
        "package": "haskhol-core",
        "partial": "List",
        "signature": "(a-\u003em(a,a))-\u003ea-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:stripPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eDrops the given prefix from a list.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such\n  prefix.  A re-export of \u003ccode\u003e\u003ca\u003estripPrefix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e [a] -\u003e Maybe [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#stripPrefix",
        "fct-type": "function",
        "title": "stripPrefix"
      },
      "index": {
        "description": "Drops the given prefix from list Fails with Nothing if there is no such prefix re-export of stripPrefix",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "stripPrefix",
        "normalized": "[a]-\u003e[a]-\u003eMaybe[a]",
        "package": "haskhol-core",
        "partial": "Prefix",
        "signature": "[a]-\u003e[a]-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:subset",
      "description": {
        "fct-descr": "\u003cp\u003eTests if the first list is a subset of the second.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e [a] -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Lib.html#subset",
        "fct-type": "function",
        "title": "subset"
      },
      "index": {
        "description": "Tests if the first list is subset of the second",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "subset",
        "normalized": "[a]-\u003e[a]-\u003eBool",
        "package": "haskhol-core",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:subtract-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003esubtract\u003c/a\u003e\u003c/code\u003e where the uniqueness test is an explicit predicate, \n  rather than a strict equality test.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#subtract%27",
        "fct-type": "function",
        "title": "subtract'"
      },
      "index": {
        "description": "version of subtract where the uniqueness test is an explicit predicate rather than strict equality test",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "subtract'",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:swap",
      "description": {
        "fct-descr": "\u003cp\u003eSwaps the order of a pair.  A re-export of \u003ccode\u003e\u003ca\u003eswap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a, b) -\u003e (b, a)",
        "fct-source": "src/HaskHOL-Core-Lib.html#swap",
        "fct-type": "function",
        "title": "swap"
      },
      "index": {
        "description": "Swaps the order of pair re-export of swap",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "swap",
        "normalized": "(a,b)-\u003e(b,a)",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a,b)-\u003e(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:tryFind",
      "description": {
        "fct-descr": "\u003cp\u003eAn alternative monadic version of \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e where the predicate is a monadic\n  computation not necessarily of a boolean return type.  Returns the result of\n  the first successful application of the predicate to an element of the list.\n  Fails with \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if called on an empty list.  \n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e is used for branching instead of \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e to minimize the \n  constraint type; for the vast majority of monads these two functions should be\n  identical anyway.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e m b) -\u003e [a] -\u003e m b",
        "fct-source": "src/HaskHOL-Core-Lib.html#tryFind",
        "fct-type": "function",
        "title": "tryFind"
      },
      "index": {
        "description": "An alternative monadic version of find where the predicate is monadic computation not necessarily of boolean return type Returns the result of the first successful application of the predicate to an element of the list Fails with mzero if called on an empty list Note that mplus is used for branching instead of to minimize the constraint type for the vast majority of monads these two functions should be identical anyway",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "tryFind",
        "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb c",
        "package": "haskhol-core",
        "partial": "Find",
        "signature": "(a-\u003em b)-\u003e[a]-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:tryFoldr1",
      "description": {
        "fct-descr": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if an empty list is provided\n  as an argument.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e Maybe a",
        "fct-source": "src/HaskHOL-Core-Lib.html#tryFoldr1",
        "fct-type": "function",
        "title": "tryFoldr1"
      },
      "index": {
        "description": "safe version of foldr1 Fails with Nothing if an empty list is provided as an argument",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "tryFoldr1",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a",
        "package": "haskhol-core",
        "partial": "Foldr",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:tryHead",
      "description": {
        "fct-descr": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when trying to take the head\n  of an empty list.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e Maybe a",
        "fct-source": "src/HaskHOL-Core-Lib.html#tryHead",
        "fct-type": "function",
        "title": "tryHead"
      },
      "index": {
        "description": "safe version of head Fails with Nothing when trying to take the head of an empty list",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "tryHead",
        "normalized": "[a]-\u003eMaybe a",
        "package": "haskhol-core",
        "partial": "Head",
        "signature": "[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:tryIndex",
      "description": {
        "fct-descr": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the selected index does\n  not exist.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e Int -\u003e Maybe a",
        "fct-source": "src/HaskHOL-Core-Lib.html#tryIndex",
        "fct-type": "function",
        "title": "tryIndex"
      },
      "index": {
        "description": "safe version of index Fails with Nothing if the selected index does not exist",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "tryIndex",
        "normalized": "[a]-\u003eInt-\u003eMaybe a",
        "package": "haskhol-core",
        "partial": "Index",
        "signature": "[a]-\u003eInt-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:tryInit",
      "description": {
        "fct-descr": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when trying to drop the last\n  element of an empty list.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e Maybe [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#tryInit",
        "fct-type": "function",
        "title": "tryInit"
      },
      "index": {
        "description": "safe version of init Fails with Nothing when trying to drop the last element of an empty list",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "tryInit",
        "normalized": "[a]-\u003eMaybe[a]",
        "package": "haskhol-core",
        "partial": "Init",
        "signature": "[a]-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:tryLast",
      "description": {
        "fct-descr": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when trying to take the last\n  element of an empty list.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e Maybe a",
        "fct-source": "src/HaskHOL-Core-Lib.html#tryLast",
        "fct-type": "function",
        "title": "tryLast"
      },
      "index": {
        "description": "safe version of last Fails with Nothing when trying to take the last element of an empty list",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "tryLast",
        "normalized": "[a]-\u003eMaybe a",
        "package": "haskhol-core",
        "partial": "Last",
        "signature": "[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:trySplitAt",
      "description": {
        "fct-descr": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e.   Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if a split is attempted\n  at an index that doesn't exist.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "Int -\u003e [a] -\u003e Maybe ([a], [a])",
        "fct-source": "src/HaskHOL-Core-Lib.html#trySplitAt",
        "fct-type": "function",
        "title": "trySplitAt"
      },
      "index": {
        "description": "safe version of splitAt Fails with Nothing if split is attempted at an index that doesn exist",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "trySplitAt",
        "normalized": "Int-\u003e[a]-\u003eMaybe([a],[a])",
        "package": "haskhol-core",
        "partial": "Split At",
        "signature": "Int-\u003e[a]-\u003eMaybe([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:tryTail",
      "description": {
        "fct-descr": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when trying to take the tail\n  of an empty list.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e Maybe [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#tryTail",
        "fct-type": "function",
        "title": "tryTail"
      },
      "index": {
        "description": "safe version of tail Fails with Nothing when trying to take the tail of an empty list",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "tryTail",
        "normalized": "[a]-\u003eMaybe[a]",
        "package": "haskhol-core",
        "partial": "Tail",
        "signature": "[a]-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eUnions two list maintaining uniqueness of elements.\n\u003c/p\u003e\u003cp\u003eImportant note:  This union is unordered, unlike the \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e in the\n  \u003ca\u003eData.List\u003c/a\u003e module.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Unions two list maintaining uniqueness of elements Important note This union is unordered unlike the union in the Data.List module",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "union",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:union-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e where the uniqueness test is an explicit predicate, \n  rather than a strict equality test.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#union%27",
        "fct-type": "function",
        "title": "union'"
      },
      "index": {
        "description": "version of union where the uniqueness test is an explicit predicate rather than strict equality test",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "union'",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eUnions a list of lists using \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[[a]] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "Unions list of lists using union",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "unions",
        "normalized": "[[a]]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:unions-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e where the uniqueness test is an explicit predicate, \n  rather than a strict equality test.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e [[a]] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#unions%27",
        "fct-type": "function",
        "title": "unions'"
      },
      "index": {
        "description": "version of unions where the uniqueness test is an explicit predicate rather than strict equality test",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "unions'",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[[a]]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003ea-\u003eBool)-\u003e[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:uniq",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves adjacent, equal elements from a list.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#uniq",
        "fct-type": "function",
        "title": "uniq"
      },
      "index": {
        "description": "Removes adjacent equal elements from list",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "uniq",
        "normalized": "[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:uniq-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003euniq\u003c/a\u003e\u003c/code\u003e that eliminates elements based on a provided predicate.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/HaskHOL-Core-Lib.html#uniq%27",
        "fct-type": "function",
        "title": "uniq'"
      },
      "index": {
        "description": "version of uniq that eliminates elements based on provided predicate",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "uniq'",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:wComb",
      "description": {
        "fct-descr": "\u003cp\u003eThe W combinator.  Takes a function of arity 2 and applies a single argument\n  to it twice.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Lib",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/HaskHOL-Core-Lib.html#wComb",
        "fct-type": "function",
        "title": "wComb"
      },
      "index": {
        "description": "The combinator Takes function of arity and applies single argument to it twice",
        "hierarchy": "HaskHOL Core Lib",
        "module": "HaskHOL.Core.Lib",
        "name": "wComb",
        "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
        "package": "haskhol-core",
        "partial": "Comb",
        "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the parsers for \u003ccode\u003eHOLType\u003c/code\u003es and \u003ccode\u003eHOLTerm\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eIt also re-exports the related benign flags, theory extension mechanisms, \n  and type/term elaborators.\n\u003c/p\u003e\u003cp\u003eFor examples of the parsers and elaborators in use see the \n  \u003ca\u003eHaskHOL.Core.TermRep\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "module",
        "fct-source": "src/HaskHOL-Core-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "This module defines the parsers for HOLType and HOLTerm It also re-exports the related benign flags theory extension mechanisms and type term elaborators For examples of the parsers and elaborators in use see the HaskHOL.Core.TermRep module",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:FlagAddTyAppsAuto",
      "description": {
        "fct-descr": "\u003cp\u003eFlag to say whether implicit type applications are to be added during parsing.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#FlagAddTyAppsAuto",
        "fct-type": "data",
        "title": "FlagAddTyAppsAuto"
      },
      "index": {
        "description": "Flag to say whether implicit type applications are to be added during parsing",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "FlagAddTyAppsAuto",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Flag Add Ty Apps Auto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:FlagIgnoreConstVarstruct",
      "description": {
        "fct-descr": "\u003cp\u003eFlag to say whether to treat a constant varstruct, i.e.  \u003ccode\u003e\\ const . bod\u003c/code\u003e, as\n  variable.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#FlagIgnoreConstVarstruct",
        "fct-type": "data",
        "title": "FlagIgnoreConstVarstruct"
      },
      "index": {
        "description": "Flag to say whether to treat constant varstruct i.e const bod as variable",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "FlagIgnoreConstVarstruct",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Flag Ignore Const Varstruct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:FlagTyInvWarning",
      "description": {
        "fct-descr": "\u003cp\u003eFlag indicating that the user should be warned if a type variable was invented\n  during parsing.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#FlagTyInvWarning",
        "fct-type": "data",
        "title": "FlagTyInvWarning"
      },
      "index": {
        "description": "Flag indicating that the user should be warned if type variable was invented during parsing",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "FlagTyInvWarning",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Flag Ty Inv Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:FlagTyOpInvWarning",
      "description": {
        "fct-descr": "\u003cp\u003eFlag indicating that the user should be warned if a type operator variable was\n  invented during parsing.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#FlagTyOpInvWarning",
        "fct-type": "data",
        "title": "FlagTyOpInvWarning"
      },
      "index": {
        "description": "Flag indicating that the user should be warned if type operator variable was invented during parsing",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "FlagTyOpInvWarning",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Flag Ty Op Inv Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:HOLTermRep",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e class provides a conversion from an alternative \n  representation of terms to \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003e within the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThe first parameter is the type of the alternative representation.\n\u003c/p\u003e\u003cp\u003eThe second parameter is the tag for the last checkpoint of the \n  current working theory.  This enables us to have a conversion from \n  representations that are theory dependent, i.e. \u003ccode\u003ePTerm\u003c/code\u003e, without running into\n  type matchability issues.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "class",
        "fct-source": "src/HaskHOL-Core-Parser-Rep.html#HOLTermRep",
        "fct-type": "class",
        "title": "HOLTermRep"
      },
      "index": {
        "description": "The HOLTermRep class provides conversion from an alternative representation of terms to HOLTerm within the HOL monad The first parameter is the type of the alternative representation The second parameter is the tag for the last checkpoint of the current working theory This enables us to have conversion from representations that are theory dependent i.e PTerm without running into type matchability issues",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "HOLTermRep",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOLTerm Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:HOLTypeRep",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHOLTypeRep\u003c/a\u003e\u003c/code\u003e class provides a conversion from an alternative \n  representation of types to \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003e within the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThe first parameter is the type of the alternative representation.\n\u003c/p\u003e\u003cp\u003eThe second parameter is the tag for the last checkpoint of the \n  current working theory.  This enables us to have a conversion from \n  representations that are theory dependent without running into type \n  matchability issues.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "class",
        "fct-source": "src/HaskHOL-Core-Parser-Rep.html#HOLTypeRep",
        "fct-type": "class",
        "title": "HOLTypeRep"
      },
      "index": {
        "description": "The HOLTypeRep class provides conversion from an alternative representation of types to HOLType within the HOL monad The first parameter is the type of the alternative representation The second parameter is the tag for the last checkpoint of the current working theory This enables us to have conversion from representations that are theory dependent without running into type matchability issues",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "HOLTypeRep",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOLType Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:PreTerm",
      "description": {
        "fct-descr": "\u003cp\u003eParsed, but pre-elaborated HOL terms.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#PreTerm",
        "fct-type": "data",
        "title": "PreTerm"
      },
      "index": {
        "description": "Parsed but pre-elaborated HOL terms",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "PreTerm",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Pre Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:PreType",
      "description": {
        "fct-descr": "\u003cp\u003eParsed, but pre-elaborated HOL types.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#PreType",
        "fct-type": "data",
        "title": "PreType"
      },
      "index": {
        "description": "Parsed but pre-elaborated HOL types",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "PreType",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Pre Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:FlagAddTyAppsAuto",
      "description": {
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "FlagAddTyAppsAuto",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#FlagAddTyAppsAuto",
        "fct-type": "function",
        "title": "FlagAddTyAppsAuto"
      },
      "index": {
        "description": "",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "FlagAddTyAppsAuto",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Flag Add Ty Apps Auto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:FlagIgnoreConstVarstruct",
      "description": {
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "FlagIgnoreConstVarstruct",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#FlagIgnoreConstVarstruct",
        "fct-type": "function",
        "title": "FlagIgnoreConstVarstruct"
      },
      "index": {
        "description": "",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "FlagIgnoreConstVarstruct",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Flag Ignore Const Varstruct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:FlagTyInvWarning",
      "description": {
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "FlagTyInvWarning",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#FlagTyInvWarning",
        "fct-type": "function",
        "title": "FlagTyInvWarning"
      },
      "index": {
        "description": "",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "FlagTyInvWarning",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Flag Ty Inv Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:FlagTyOpInvWarning",
      "description": {
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "FlagTyOpInvWarning",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#FlagTyOpInvWarning",
        "fct-type": "function",
        "title": "FlagTyOpInvWarning"
      },
      "index": {
        "description": "",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "FlagTyOpInvWarning",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Flag Ty Op Inv Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:binders",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as term binders by the parser.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e [String]",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#binders",
        "fct-type": "function",
        "title": "binders"
      },
      "index": {
        "description": "Returns all String recognized as term binders by the parser",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "binders",
        "normalized": "HOLContext a-\u003e[String]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLContext thry-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:elab",
      "description": {
        "fct-descr": "\u003cp\u003eElaborator and type inference for \u003ccode\u003e\u003ca\u003ePreTerm\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "PreTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Parser-Elab.html#elab",
        "fct-type": "function",
        "title": "elab"
      },
      "index": {
        "description": "Elaborator and type inference for PreTerm",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "elab",
        "normalized": "PreTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "",
        "signature": "PreTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:getHidden",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es currently acting as constants hidden from the parser.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e [String]",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#getHidden",
        "fct-type": "function",
        "title": "getHidden"
      },
      "index": {
        "description": "Returns all String currently acting as constants hidden from the parser",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "getHidden",
        "normalized": "HOLContext a-\u003e[String]",
        "package": "haskhol-core",
        "partial": "Hidden",
        "signature": "HOLContext thry-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:getInfixStatus",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as infix operators by the parser.  Returns\n  a precidence and associativity pair guarded by \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLContext thry -\u003e Maybe (Int, Assoc)",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#getInfixStatus",
        "fct-type": "function",
        "title": "getInfixStatus"
      },
      "index": {
        "description": "Predicate for String recognized as infix operators by the parser Returns precidence and associativity pair guarded by Maybe",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "getInfixStatus",
        "normalized": "String-\u003eHOLContext a-\u003eMaybe(Int,Assoc)",
        "package": "haskhol-core",
        "partial": "Infix Status",
        "signature": "String-\u003eHOLContext thry-\u003eMaybe(Int,Assoc)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:getInterface",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all currently defined interface overloads.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e [(String, (String, HOLType))]",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#getInterface",
        "fct-type": "function",
        "title": "getInterface"
      },
      "index": {
        "description": "Returns the list of all currently defined interface overloads",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "getInterface",
        "normalized": "HOLContext a-\u003e[(String,(String,HOLType))]",
        "package": "haskhol-core",
        "partial": "Interface",
        "signature": "HOLContext thry-\u003e[(String,(String,HOLType))]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:getOverloads",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all overloadable symbols paired with their most generic \n  types.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e [(String, HOLType)]",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#getOverloads",
        "fct-type": "function",
        "title": "getOverloads"
      },
      "index": {
        "description": "Returns the list of all overloadable symbols paired with their most generic types",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "getOverloads",
        "normalized": "HOLContext a-\u003e[(String,HOLType)]",
        "package": "haskhol-core",
        "partial": "Overloads",
        "signature": "HOLContext thry-\u003e[(String,HOLType)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:hideConstant",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e for the parser to stop recognizing as a constant.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#hideConstant",
        "fct-type": "function",
        "title": "hideConstant"
      },
      "index": {
        "description": "Specifies String for the parser to stop recognizing as constant",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "hideConstant",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Constant",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:holTermParser",
      "description": {
        "fct-descr": "\u003cp\u003eParser for \u003ccode\u003eHOLTerm\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLContext thry -\u003e Either ParseError PreTerm",
        "fct-source": "src/HaskHOL-Core-Parser.html#holTermParser",
        "fct-type": "function",
        "title": "holTermParser"
      },
      "index": {
        "description": "Parser for HOLTerm",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "holTermParser",
        "normalized": "String-\u003eHOLContext a-\u003eEither ParseError PreTerm",
        "package": "haskhol-core",
        "partial": "Term Parser",
        "signature": "String-\u003eHOLContext thry-\u003eEither ParseError PreTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:holTypeParser",
      "description": {
        "fct-descr": "\u003cp\u003eParser for \u003ccode\u003eHOLType\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLContext thry -\u003e Either ParseError PreType",
        "fct-source": "src/HaskHOL-Core-Parser.html#holTypeParser",
        "fct-type": "function",
        "title": "holTypeParser"
      },
      "index": {
        "description": "Parser for HOLType",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "holTypeParser",
        "normalized": "String-\u003eHOLContext a-\u003eEither ParseError PreType",
        "package": "haskhol-core",
        "partial": "Type Parser",
        "signature": "String-\u003eHOLContext thry-\u003eEither ParseError PreType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:infixes",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as infix operators by the parser along with\n  their precedence and associativity pairs.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e [(String, (Int, Assoc))]",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#infixes",
        "fct-type": "function",
        "title": "infixes"
      },
      "index": {
        "description": "Returns all String recognized as infix operators by the parser along with their precedence and associativity pairs",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "infixes",
        "normalized": "HOLContext a-\u003e[(String,(Int,Assoc))]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLContext thry-\u003e[(String,(Int,Assoc))]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:isPrefix",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as prefix operators by the parser.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLContext thry -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#isPrefix",
        "fct-type": "function",
        "title": "isPrefix"
      },
      "index": {
        "description": "Predicate for String recognized as prefix operators by the parser",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "isPrefix",
        "normalized": "String-\u003eHOLContext a-\u003eBool",
        "package": "haskhol-core",
        "partial": "Prefix",
        "signature": "String-\u003eHOLContext thry-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:makeOverloadable",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e that can act as an overloadable identifier within the\n  parser.  The provided type is the most general type that instances of this\n  symbol may have.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the given symbol has already been\n  declared as overloadable with a different type.\n\u003c/p\u003e\u003cp\u003eNote that defining a symbol as overloadable will erase any interface overloads\n  that were previously introduced via \u003ccode\u003e\u003ca\u003eoverrideInterface\u003c/a\u003e\u003c/code\u003e in order to guarantee\n  that all overloads are matchable with their most general type.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLType -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#makeOverloadable",
        "fct-type": "function",
        "title": "makeOverloadable"
      },
      "index": {
        "description": "Specifies String that can act as an overloadable identifier within the parser The provided type is the most general type that instances of this symbol may have Throws HOLException if the given symbol has already been declared as overloadable with different type Note that defining symbol as overloadable will erase any interface overloads that were previously introduced via overrideInterface in order to guarantee that all overloads are matchable with their most general type",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "makeOverloadable",
        "normalized": "String-\u003eHOLType-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Overloadable",
        "signature": "String-\u003eHOLType-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:newTypeAbbrev",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to act as an abbreviation for a given type in the parser.\n  Upon recognizing the abbreviation the parser will replace it with the \n  \u003ccode\u003e\u003ca\u003ePreType\u003c/a\u003e\u003c/code\u003e value for it's associated \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003e such that the elaborator can\n  infer the correct type for polymorphic abbreviations.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLType -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#newTypeAbbrev",
        "fct-type": "function",
        "title": "newTypeAbbrev"
      },
      "index": {
        "description": "Specifies String to act as an abbreviation for given type in the parser Upon recognizing the abbreviation the parser will replace it with the PreType value for it associated HOLType such that the elaborator can infer the correct type for polymorphic abbreviations",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "newTypeAbbrev",
        "normalized": "String-\u003eHOLType-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Type Abbrev",
        "signature": "String-\u003eHOLType-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:overloadInterface",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduces a new overload for a given symbol.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the\n  following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The symbol has not previously been defined as overloadable via \n    \u003ccode\u003e\u003ca\u003emakeOverloadable\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The provided term is not a constant or variable term representing a \n    specific instance of the overloaded symbol.\n\u003c/li\u003e\u003cli\u003e The provided term does not have a type that is matchable with the\n    overloadable symbol's specified most general type.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that specifying an overload that already exists will move it to the front\n  of the interface list, effectively prioritizing it.  This behavior is utilized\n  by \u003ccode\u003e\u003ca\u003eprioritizeOverload\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLTerm -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#overloadInterface",
        "fct-type": "function",
        "title": "overloadInterface"
      },
      "index": {
        "description": "Introduces new overload for given symbol Throws HOLException in the following cases The symbol has not previously been defined as overloadable via makeOverloadable The provided term is not constant or variable term representing specific instance of the overloaded symbol The provided term does not have type that is matchable with the overloadable symbol specified most general type Note that specifying an overload that already exists will move it to the front of the interface list effectively prioritizing it This behavior is utilized by prioritizeOverload",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "overloadInterface",
        "normalized": "String-\u003eHOLTerm-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Interface",
        "signature": "String-\u003eHOLTerm-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:overrideInterface",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves all existing overloads for a given symbol and replaces them with a\n  single, specific instance.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the provided term is\n  not a constant or variable term representing an instance of the overloaded\n  symbol.\n\u003c/p\u003e\u003cp\u003eNote that because \u003ccode\u003e\u003ca\u003eoverrideInterface\u003c/a\u003e\u003c/code\u003e can introduce at most one overload for\n  a symbol it does not have to be previously defined as overloadable via \n  \u003ccode\u003e\u003ca\u003emakeOverloadable\u003c/a\u003e\u003c/code\u003e.  However, if the symbol is defined as overloadable then \n  the provided term must have a type that is matchable with the symbol's most\n  general type.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLTerm -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#overrideInterface",
        "fct-type": "function",
        "title": "overrideInterface"
      },
      "index": {
        "description": "Removes all existing overloads for given symbol and replaces them with single specific instance Throws HOLException if the provided term is not constant or variable term representing an instance of the overloaded symbol Note that because overrideInterface can introduce at most one overload for symbol it does not have to be previously defined as overloadable via makeOverloadable However if the symbol is defined as overloadable then the provided term must have type that is matchable with the symbol most general type",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "overrideInterface",
        "normalized": "String-\u003eHOLTerm-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Interface",
        "signature": "String-\u003eHOLTerm-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:parseAsBinder",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to be recognized as a term binder by the parser.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#parseAsBinder",
        "fct-type": "function",
        "title": "parseAsBinder"
      },
      "index": {
        "description": "Specifies String to be recognized as term binder by the parser",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "parseAsBinder",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "As Binder",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:parseAsInfix",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to be recognized as an infix operator by the parser with\n  a given precedence level and associativity.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "(String, (Int, Assoc)) -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#parseAsInfix",
        "fct-type": "function",
        "title": "parseAsInfix"
      },
      "index": {
        "description": "Specifies String to be recognized as an infix operator by the parser with given precedence level and associativity",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "parseAsInfix",
        "normalized": "(String,(Int,Assoc))-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "As Infix",
        "signature": "(String,(Int,Assoc))-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:parseAsPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to be recognized as a prefix operator by the parser.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#parseAsPrefix",
        "fct-type": "function",
        "title": "parseAsPrefix"
      },
      "index": {
        "description": "Specifies String to be recognized as prefix operator by the parser",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "parseAsPrefix",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "As Prefix",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:parseAsTyBinder",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to be recognized as a type binder by the parser.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#parseAsTyBinder",
        "fct-type": "function",
        "title": "parseAsTyBinder"
      },
      "index": {
        "description": "Specifies String to be recognized as type binder by the parser",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "parseAsTyBinder",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "As Ty Binder",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:parsesAsBinder",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as term binders by the parser.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLContext thry -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#parsesAsBinder",
        "fct-type": "function",
        "title": "parsesAsBinder"
      },
      "index": {
        "description": "Predicate for String recognized as term binders by the parser",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "parsesAsBinder",
        "normalized": "String-\u003eHOLContext a-\u003eBool",
        "package": "haskhol-core",
        "partial": "As Binder",
        "signature": "String-\u003eHOLContext thry-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:parsesAsTyBinder",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as term binders by the parser.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLContext thry -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#parsesAsTyBinder",
        "fct-type": "function",
        "title": "parsesAsTyBinder"
      },
      "index": {
        "description": "Predicate for String recognized as term binders by the parser",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "parsesAsTyBinder",
        "normalized": "String-\u003eHOLContext a-\u003eBool",
        "package": "haskhol-core",
        "partial": "As Ty Binder",
        "signature": "String-\u003eHOLContext thry-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:prefixes",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as prefix operators by the parser.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e [String]",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#prefixes",
        "fct-type": "function",
        "title": "prefixes"
      },
      "index": {
        "description": "Returns all String recognized as prefix operators by the parser",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "prefixes",
        "normalized": "HOLContext a-\u003e[String]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOLContext thry-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:prioritizeOverload",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a type to prioritize when the interface is used to overload a \n  symbol.  Note that this applies to all overloads in the system whose match\n  with the specified most general type involves the provided type.  \n  Prioritization is done by redefining overloads via \u003ccode\u003e\u003ca\u003eoverloadInterface\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#prioritizeOverload",
        "fct-type": "function",
        "title": "prioritizeOverload"
      },
      "index": {
        "description": "Specifies type to prioritize when the interface is used to overload symbol Note that this applies to all overloads in the system whose match with the specified most general type involves the provided type Prioritization is done by redefining overloads via overloadInterface",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "prioritizeOverload",
        "normalized": "HOLType-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Overload",
        "signature": "HOLType-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:reduceInterface",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves a specific instance of an overloaded symbol from the interface.  \n  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the provided term is not a constant or varible term\n  representing an instance of the overloaded symbol.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLTerm -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#reduceInterface",
        "fct-type": "function",
        "title": "reduceInterface"
      },
      "index": {
        "description": "Removes specific instance of an overloaded symbol from the interface Throws HOLException if the provided term is not constant or varible term representing an instance of the overloaded symbol",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "reduceInterface",
        "normalized": "String-\u003eHOLTerm-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Interface",
        "signature": "String-\u003eHOLTerm-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:removeInterface",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves all instances of an overloaded symbol from the interface.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#removeInterface",
        "fct-type": "function",
        "title": "removeInterface"
      },
      "index": {
        "description": "Removes all instances of an overloaded symbol from the interface",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "removeInterface",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Interface",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:removeTypeAbbrev",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e for the parser to stop recognizing as a type \n  abbreviation.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#removeTypeAbbrev",
        "fct-type": "function",
        "title": "removeTypeAbbrev"
      },
      "index": {
        "description": "Specifies String for the parser to stop recognizing as type abbreviation",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "removeTypeAbbrev",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Type Abbrev",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:toHTm",
      "description": {
        "fct-descr": "\u003cp\u003eConversion from alternative type \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-Parser-Rep.html#toHTm",
        "fct-type": "method",
        "title": "toHTm"
      },
      "index": {
        "description": "Conversion from alternative type to HOLTerm",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "toHTm",
        "normalized": "a-\u003eHOL b c HOLTerm",
        "package": "haskhol-core",
        "partial": "HTm",
        "signature": "a-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:toHTy",
      "description": {
        "fct-descr": "\u003cp\u003eConversion from alternative type \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e HOL cls thry HOLType",
        "fct-source": "src/HaskHOL-Core-Parser-Rep.html#toHTy",
        "fct-type": "method",
        "title": "toHTy"
      },
      "index": {
        "description": "Conversion from alternative type to HOLType",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "toHTy",
        "normalized": "a-\u003eHOL b c HOLType",
        "package": "haskhol-core",
        "partial": "HTy",
        "signature": "a-\u003eHOL cls thry HOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:tyBinders",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as type binders by the parser.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e [String]",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#tyBinders",
        "fct-type": "function",
        "title": "tyBinders"
      },
      "index": {
        "description": "Returns all String recognized as type binders by the parser",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "tyBinders",
        "normalized": "HOLContext a-\u003e[String]",
        "package": "haskhol-core",
        "partial": "Binders",
        "signature": "HOLContext thry-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:tyElab",
      "description": {
        "fct-descr": "\u003cp\u003eElaborator for \u003ccode\u003e\u003ca\u003ePreType\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "PreType -\u003e HOL cls thry HOLType",
        "fct-source": "src/HaskHOL-Core-Parser-Elab.html#tyElab",
        "fct-type": "function",
        "title": "tyElab"
      },
      "index": {
        "description": "Elaborator for PreType",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "tyElab",
        "normalized": "PreType-\u003eHOL a b HOLType",
        "package": "haskhol-core",
        "partial": "Elab",
        "signature": "PreType-\u003eHOL cls thry HOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:typeAbbrevs",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es currently acting as type abbreviations in the parser\n  paired with their associated types.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e [(String, HOLType)]",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#typeAbbrevs",
        "fct-type": "function",
        "title": "typeAbbrevs"
      },
      "index": {
        "description": "Returns all String currently acting as type abbreviations in the parser paired with their associated types",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "typeAbbrevs",
        "normalized": "HOLContext a-\u003e[(String,HOLType)]",
        "package": "haskhol-core",
        "partial": "Abbrevs",
        "signature": "HOLContext thry-\u003e[(String,HOLType)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:unhideConstant",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e for the parser to resume recognizing as a constant.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#unhideConstant",
        "fct-type": "function",
        "title": "unhideConstant"
      },
      "index": {
        "description": "Specifies String for the parser to resume recognizing as constant",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "unhideConstant",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Constant",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:unparseAsBinder",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e for the parser to stop recognizing as a term binder.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#unparseAsBinder",
        "fct-type": "function",
        "title": "unparseAsBinder"
      },
      "index": {
        "description": "Specifies String for the parser to stop recognizing as term binder",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "unparseAsBinder",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "As Binder",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:unparseAsInfix",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e for the parser to stop recognizing as an infix operator.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#unparseAsInfix",
        "fct-type": "function",
        "title": "unparseAsInfix"
      },
      "index": {
        "description": "Specifies String for the parser to stop recognizing as an infix operator",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "unparseAsInfix",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "As Infix",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:unparseAsPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e for the parser to stop recognizing as a prefix operator.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#unparseAsPrefix",
        "fct-type": "function",
        "title": "unparseAsPrefix"
      },
      "index": {
        "description": "Specifies String for the parser to stop recognizing as prefix operator",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "unparseAsPrefix",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "As Prefix",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:unparseAsTyBinder",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e for the parser to stop recognizing as a type binder.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Parser",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Parser-Lib.html#unparseAsTyBinder",
        "fct-type": "function",
        "title": "unparseAsTyBinder"
      },
      "index": {
        "description": "Specifies String for the parser to stop recognizing as type binder",
        "hierarchy": "HaskHOL Core Parser",
        "module": "HaskHOL.Core.Parser",
        "name": "unparseAsTyBinder",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "As Ty Binder",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines pretty printers for \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eHOLThm\u003c/a\u003e\u003c/code\u003es. \n  Note that the printers for terms and theorems are context dependent as they \n  rely on the same theory extensions that the parsers utilize. \n\u003c/p\u003e\u003cp\u003eTo make printing these objects easier within HOL computations, this module\n  also defines the \u003ccode\u003e\u003ca\u003eshowHOL\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eprintHOL\u003c/a\u003e\u003c/code\u003e methods which will automatically\n  retrieve the current working theory to use for pretty printing.  Because the \n  pretty printer for \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003es is not context dependent it has definitions for \n  both \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eshowHOL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, like the parser, there are a number of HOL term forms that the\n  printer does not currently support.  Again, these are mainly related to sets\n  and patterns and will be added in when the HaskHOL system has libraries for\n  them.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "module",
        "fct-source": "src/HaskHOL-Core-Printer.html",
        "fct-type": "module",
        "title": "Printer"
      },
      "index": {
        "description": "This module defines pretty printers for HOLType HOLTerm and HOLThm Note that the printers for terms and theorems are context dependent as they rely on the same theory extensions that the parsers utilize To make printing these objects easier within HOL computations this module also defines the showHOL and printHOL methods which will automatically retrieve the current working theory to use for pretty printing Because the pretty printer for HOLType is not context dependent it has definitions for both show and showHOL Note that like the parser there are number of HOL term forms that the printer does not currently support Again these are mainly related to sets and patterns and will be added in when the HaskHOL system has libraries for them",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "Printer",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Printer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#t:FlagPrintAllThm",
      "description": {
        "fct-descr": "\u003cp\u003eFlag to indicate if the entirety of a theorem should be printed, as opposed\n  to just the conclusion term.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Printer.html#FlagPrintAllThm",
        "fct-type": "data",
        "title": "FlagPrintAllThm"
      },
      "index": {
        "description": "Flag to indicate if the entirety of theorem should be printed as opposed to just the conclusion term",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "FlagPrintAllThm",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Flag Print All Thm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#t:FlagRevInterface",
      "description": {
        "fct-descr": "\u003cp\u003eFlag to indicate whether the interface should be reversed on printing.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-Printer.html#FlagRevInterface",
        "fct-type": "data",
        "title": "FlagRevInterface"
      },
      "index": {
        "description": "Flag to indicate whether the interface should be reversed on printing",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "FlagRevInterface",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Flag Rev Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#t:ShowHOL",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eShowHOL\u003c/code\u003e class is functionally equivalent to \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e\n  monad.  It is used to retrieve the current working theory to be used with the\n  context sensitive pretty printers for \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "class",
        "fct-source": "src/HaskHOL-Core-Printer.html#ShowHOL",
        "fct-type": "class",
        "title": "ShowHOL"
      },
      "index": {
        "description": "The ShowHOL class is functionally equivalent to show lifted to the HOL monad It is used to retrieve the current working theory to be used with the context sensitive pretty printers for HOLTerm and HOLType",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "ShowHOL",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Show HOL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:FlagPrintAllThm",
      "description": {
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "FlagPrintAllThm",
        "fct-source": "src/HaskHOL-Core-Printer.html#FlagPrintAllThm",
        "fct-type": "function",
        "title": "FlagPrintAllThm"
      },
      "index": {
        "description": "",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "FlagPrintAllThm",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Flag Print All Thm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:FlagRevInterface",
      "description": {
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "FlagRevInterface",
        "fct-source": "src/HaskHOL-Core-Printer.html#FlagRevInterface",
        "fct-type": "function",
        "title": "FlagRevInterface"
      },
      "index": {
        "description": "",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "FlagRevInterface",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Flag Rev Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:addPrebrokenBinop",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a symbol to be recognized as a prebroken, binary operator by the\n  printer.  Applications involving these operators will have their right-hand\n  side argument printed on the next line using the \u003ccode\u003e\u003ca\u003ehang\u003c/a\u003e\u003c/code\u003e combinator.\n\u003c/p\u003e\u003cp\u003eNote that technically this method should be considered benign, however, for\n  simplicity of implementation it is defined using \u003ccode\u003e\u003ca\u003emodifyExt\u003c/a\u003e\u003c/code\u003e and thus must be\n  tagged a \u003ccode\u003e\u003ca\u003eTheory\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Printer.html#addPrebrokenBinop",
        "fct-type": "function",
        "title": "addPrebrokenBinop"
      },
      "index": {
        "description": "Specifies symbol to be recognized as prebroken binary operator by the printer Applications involving these operators will have their right-hand side argument printed on the next line using the hang combinator Note that technically this method should be considered benign however for simplicity of implementation it is defined using modifyExt and thus must be tagged Theory computation",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "addPrebrokenBinop",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Prebroken Binop",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:addUnspacedBinop",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a symbol to be recognized as an unspaced, binary operator by the\n  printer.  Applications involving these operators will be built with the \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e\n  combinator as opposed to \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that technically this method should be considered benign, however, for\n  simplicity of implementation it is defined using \u003ccode\u003e\u003ca\u003emodifyExt\u003c/a\u003e\u003c/code\u003e and thus must be\n  tagged a \u003ccode\u003e\u003ca\u003eTheory\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Printer.html#addUnspacedBinop",
        "fct-type": "function",
        "title": "addUnspacedBinop"
      },
      "index": {
        "description": "Specifies symbol to be recognized as an unspaced binary operator by the printer Applications involving these operators will be built with the combinator as opposed to Note that technically this method should be considered benign however for simplicity of implementation it is defined using modifyExt and thus must be tagged Theory computation",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "addUnspacedBinop",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Unspaced Binop",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:getPrebrokenBinops",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all symbols current recognized as prebroken, binary\n  operators by the printer.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e [String]",
        "fct-source": "src/HaskHOL-Core-Printer.html#getPrebrokenBinops",
        "fct-type": "function",
        "title": "getPrebrokenBinops"
      },
      "index": {
        "description": "Returns the list of all symbols current recognized as prebroken binary operators by the printer",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "getPrebrokenBinops",
        "normalized": "HOLContext a-\u003e[String]",
        "package": "haskhol-core",
        "partial": "Prebroken Binops",
        "signature": "HOLContext thry-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:getUnspacedBinops",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all symbols current recognized as unspaced, binary\n  operators by the printer.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e [String]",
        "fct-source": "src/HaskHOL-Core-Printer.html#getUnspacedBinops",
        "fct-type": "function",
        "title": "getUnspacedBinops"
      },
      "index": {
        "description": "Returns the list of all symbols current recognized as unspaced binary operators by the printer",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "getUnspacedBinops",
        "normalized": "HOLContext a-\u003e[String]",
        "package": "haskhol-core",
        "partial": "Unspaced Binops",
        "signature": "HOLContext thry-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:ppTerm",
      "description": {
        "fct-descr": "\u003cp\u003ePretty printer for \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e HOLTerm -\u003e String",
        "fct-source": "src/HaskHOL-Core-Printer.html#ppTerm",
        "fct-type": "function",
        "title": "ppTerm"
      },
      "index": {
        "description": "Pretty printer for HOLTerm",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "ppTerm",
        "normalized": "HOLContext a-\u003eHOLTerm-\u003eString",
        "package": "haskhol-core",
        "partial": "Term",
        "signature": "HOLContext thry-\u003eHOLTerm-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:ppThm",
      "description": {
        "fct-descr": "\u003cp\u003ePretty printer for \u003ccode\u003eHOLTheorem\u003c/code\u003es.\t\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e HOLThm -\u003e String",
        "fct-source": "src/HaskHOL-Core-Printer.html#ppThm",
        "fct-type": "function",
        "title": "ppThm"
      },
      "index": {
        "description": "Pretty printer for HOLTheorem",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "ppThm",
        "normalized": "HOLContext a-\u003eHOLThm-\u003eString",
        "package": "haskhol-core",
        "partial": "Thm",
        "signature": "HOLContext thry-\u003eHOLThm-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:ppType",
      "description": {
        "fct-descr": "\u003cp\u003ePretty printer for \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e String",
        "fct-source": "src/HaskHOL-Core-Printer.html#ppType",
        "fct-type": "function",
        "title": "ppType"
      },
      "index": {
        "description": "Pretty printer for HOLType",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "ppType",
        "normalized": "HOLType-\u003eString",
        "package": "haskhol-core",
        "partial": "Type",
        "signature": "HOLType-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:printHOL",
      "description": {
        "fct-descr": "\u003cp\u003ePrints a HOL object with a new line.  A composition of \u003ccode\u003e\u003ca\u003eputStrLnHOL\u003c/a\u003e\u003c/code\u003e and\n  \u003ccode\u003e\u003ca\u003eshowHOL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e HOL cls thry ()",
        "fct-source": "src/HaskHOL-Core-Printer.html#printHOL",
        "fct-type": "function",
        "title": "printHOL"
      },
      "index": {
        "description": "Prints HOL object with new line composition of putStrLnHOL and showHOL",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "printHOL",
        "normalized": "a-\u003eHOL b c()",
        "package": "haskhol-core",
        "partial": "HOL",
        "signature": "a-\u003eHOL cls thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:removePrebrokenBinop",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a symbol to stop being recognized as an prebroken, binary operator \n  by the printer.\n\u003c/p\u003e\u003cp\u003eNote that technically this method should be considered benign, however, for\n  simplicity of implementation it is defined using \u003ccode\u003e\u003ca\u003emodifyExt\u003c/a\u003e\u003c/code\u003e and thus must be\n  tagged a \u003ccode\u003e\u003ca\u003eTheory\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Printer.html#removePrebrokenBinop",
        "fct-type": "function",
        "title": "removePrebrokenBinop"
      },
      "index": {
        "description": "Specifies symbol to stop being recognized as an prebroken binary operator by the printer Note that technically this method should be considered benign however for simplicity of implementation it is defined using modifyExt and thus must be tagged Theory computation",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "removePrebrokenBinop",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Prebroken Binop",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:removeUnspacedBinop",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a symbol to stop being recognized as an unspaced, binary operator \n  by the printer.\n\u003c/p\u003e\u003cp\u003eNote that technically this method should be considered benign, however, for\n  simplicity of implementation it is defined using \u003ccode\u003e\u003ca\u003emodifyExt\u003c/a\u003e\u003c/code\u003e and thus must be\n  tagged a \u003ccode\u003e\u003ca\u003eTheory\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-Printer.html#removeUnspacedBinop",
        "fct-type": "function",
        "title": "removeUnspacedBinop"
      },
      "index": {
        "description": "Specifies symbol to stop being recognized as an unspaced binary operator by the printer Note that technically this method should be considered benign however for simplicity of implementation it is defined using modifyExt and thus must be tagged Theory computation",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "removeUnspacedBinop",
        "normalized": "String-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Unspaced Binop",
        "signature": "String-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:showHOL",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad for context sensitive pretty\n      printers.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.Printer",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e HOL cls thry String",
        "fct-source": "src/HaskHOL-Core-Printer.html#showHOL",
        "fct-type": "method",
        "title": "showHOL"
      },
      "index": {
        "description": "version of show lifted to the HOL monad for context sensitive pretty printers",
        "hierarchy": "HaskHOL Core Printer",
        "module": "HaskHOL.Core.Printer",
        "name": "showHOL",
        "normalized": "a-\u003eHOL b c String",
        "package": "haskhol-core",
        "partial": "HOL",
        "signature": "a-\u003eHOL cls thry String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the primitive types and combinators for the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e \n  computational monad.  At a high level this monad is a flattened stack of a\n  \u003ccode\u003eState\u003c/code\u003e monad transformer and a limited \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eFor higher level monadic combinators see the \u003ca\u003eHaskHOL.Core.State\u003c/a\u003e and\n  \u003ca\u003eHaskHOL.Core.Basics\u003c/a\u003e modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "module",
        "fct-source": "src/HaskHOL-Core-State-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "This module exports the primitive types and combinators for the HOL computational monad At high level this monad is flattened stack of State monad transformer and limited IO monad For higher level monadic combinators see the HaskHOL.Core.State and HaskHOL.Core.Basics modules",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:BaseCtxt",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBaseCtxt\u003c/a\u003e\u003c/code\u003e class is the context name associated with the \u003ccode\u003e\u003ca\u003eBaseThry\u003c/a\u003e\u003c/code\u003e type,\n  i.e. the constraint to be used to guarantee that the stateful kernel has been\n  loaded.  This should always be true.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "class",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#BaseCtxt",
        "fct-type": "class",
        "title": "BaseCtxt"
      },
      "index": {
        "description": "The BaseCtxt class is the context name associated with the BaseThry type i.e the constraint to be used to guarantee that the stateful kernel has been loaded This should always be true",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "BaseCtxt",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Base Ctxt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:BaseThry",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBaseThry\u003c/a\u003e\u003c/code\u003e type is the type of the initial working theory.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#BaseThry",
        "fct-type": "data",
        "title": "BaseThry"
      },
      "index": {
        "description": "The BaseThry type is the type of the initial working theory",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "BaseThry",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Base Thry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:BenignFlag",
      "description": {
        "fct-descr": "\u003cp\u003eHOL systems typically use a large number of boolean flags in order to direct\n  system behavior, i.e. debug flags, warning flags, parser/printer flags, etc.\n  These flags don't affect the underlying proof computations, hence their\n  classification as benign, so we'd like to be able to toggle them on and off\n  at will.  Unfortunately, if we store them in the extensible state and use \n  \u003ccode\u003e\u003ca\u003eputExt\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emodifyExt\u003c/a\u003e\u003c/code\u003e we're limited to only being able to change them in\n  \u003ccode\u003e\u003ca\u003eTheory\u003c/a\u003e\u003c/code\u003e computations.  \n\u003c/p\u003e\u003cp\u003eInstead, we include them in a separate part of the theory context where we \n  can interact with them in any way we want without sacrificing the safety of \n  the extensible state portion of the context.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBenignFlag\u003c/a\u003e\u003c/code\u003e class works very similarly to the \u003ccode\u003e\u003ca\u003eExtClass\u003c/a\u003e\u003c/code\u003e class with the\n  obvious exception that initial values are restricted to boolean values.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eHOLContext\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetBenignFlagCtxt\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003esetBenignFlag\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "class",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#BenignFlag",
        "fct-type": "class",
        "title": "BenignFlag"
      },
      "index": {
        "description": "HOL systems typically use large number of boolean flags in order to direct system behavior i.e debug flags warning flags parser printer flags etc These flags don affect the underlying proof computations hence their classification as benign so we like to be able to toggle them on and off at will Unfortunately if we store them in the extensible state and use putExt or modifyExt we re limited to only being able to change them in Theory computations Instead we include them in separate part of the theory context where we can interact with them in any way we want without sacrificing the safety of the extensible state portion of the context The BenignFlag class works very similarly to the ExtClass class with the obvious exception that initial values are restricted to boolean values See HOLContext getBenignFlagCtxt and setBenignFlag for more details",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "BenignFlag",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Benign Flag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:Exception",
      "description": {
        "fct-descr": "\u003cp\u003eAny type that you wish to throw or catch as an exception must be an\ninstance of the \u003ccode\u003eException\u003c/code\u003e class. The simplest case is a new exception\ntype directly below the root:\n\u003c/p\u003e\u003cpre\u003e data MyException = ThisException | ThatException\n     deriving (Show, Typeable)\n\n instance Exception MyException\n\u003c/pre\u003e\u003cp\u003eThe default method definitions in the \u003ccode\u003eException\u003c/code\u003e class do what we need\nin this case. You can now throw and catch \u003ccode\u003eThisException\u003c/code\u003e and\n\u003ccode\u003eThatException\u003c/code\u003e as exceptions:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw ThisException `catch` \\e -\u003e putStrLn (\"Caught \" ++ show (e :: MyException))\nCaught ThisException\n\u003c/pre\u003e\u003cp\u003eIn more complicated examples, you may wish to define a whole hierarchy\nof exceptions:\n\u003c/p\u003e\u003cpre\u003e ---------------------------------------------------------------------\n -- Make the root exception type for all the exceptions in a compiler\n\n data SomeCompilerException = forall e . Exception e =\u003e SomeCompilerException e\n     deriving Typeable\n\n instance Show SomeCompilerException where\n     show (SomeCompilerException e) = show e\n\n instance Exception SomeCompilerException\n\n compilerExceptionToException :: Exception e =\u003e e -\u003e SomeException\n compilerExceptionToException = toException . SomeCompilerException\n\n compilerExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n compilerExceptionFromException x = do\n     SomeCompilerException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make a subhierarchy for exceptions in the frontend of the compiler\n\n data SomeFrontendException = forall e . Exception e =\u003e SomeFrontendException e\n     deriving Typeable\n\n instance Show SomeFrontendException where\n     show (SomeFrontendException e) = show e\n\n instance Exception SomeFrontendException where\n     toException = compilerExceptionToException\n     fromException = compilerExceptionFromException\n\n frontendExceptionToException :: Exception e =\u003e e -\u003e SomeException\n frontendExceptionToException = toException . SomeFrontendException\n\n frontendExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n frontendExceptionFromException x = do\n     SomeFrontendException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make an exception type for a particular frontend compiler exception\n\n data MismatchedParentheses = MismatchedParentheses\n     deriving (Typeable, Show)\n\n instance Exception MismatchedParentheses where\n     toException   = frontendExceptionToException\n     fromException = frontendExceptionFromException\n\u003c/pre\u003e\u003cp\u003eWe can now catch a \u003ccode\u003eMismatchedParentheses\u003c/code\u003e exception as\n\u003ccode\u003eMismatchedParentheses\u003c/code\u003e, \u003ccode\u003eSomeFrontendException\u003c/code\u003e or\n\u003ccode\u003eSomeCompilerException\u003c/code\u003e, but not other types, e.g. \u003ccode\u003eIOException\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: MismatchedParentheses))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeFrontendException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeCompilerException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: IOException))\n*** Exception: MismatchedParentheses\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Exception"
      },
      "index": {
        "description": "Any type that you wish to throw or catch as an exception must be an instance of the Exception class The simplest case is new exception type directly below the root data MyException ThisException ThatException deriving Show Typeable instance Exception MyException The default method definitions in the Exception class do what we need in this case You can now throw and catch ThisException and ThatException as exceptions Main throw ThisException catch putStrLn Caught show MyException Caught ThisException In more complicated examples you may wish to define whole hierarchy of exceptions Make the root exception type for all the exceptions in compiler data SomeCompilerException forall Exception SomeCompilerException deriving Typeable instance Show SomeCompilerException where show SomeCompilerException show instance Exception SomeCompilerException compilerExceptionToException Exception SomeException compilerExceptionToException toException SomeCompilerException compilerExceptionFromException Exception SomeException Maybe compilerExceptionFromException do SomeCompilerException fromException cast Make subhierarchy for exceptions in the frontend of the compiler data SomeFrontendException forall Exception SomeFrontendException deriving Typeable instance Show SomeFrontendException where show SomeFrontendException show instance Exception SomeFrontendException where toException compilerExceptionToException fromException compilerExceptionFromException frontendExceptionToException Exception SomeException frontendExceptionToException toException SomeFrontendException frontendExceptionFromException Exception SomeException Maybe frontendExceptionFromException do SomeFrontendException fromException cast Make an exception type for particular frontend compiler exception data MismatchedParentheses MismatchedParentheses deriving Typeable Show instance Exception MismatchedParentheses where toException frontendExceptionToException fromException frontendExceptionFromException We can now catch MismatchedParentheses exception as MismatchedParentheses SomeFrontendException or SomeCompilerException but not other types e.g IOException Main throw MismatchedParentheses catch putStrLn Caught show MismatchedParentheses Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeFrontendException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeCompilerException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show IOException Exception MismatchedParentheses",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "Exception",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:ExtClass",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eExtClass\u003c/a\u003e\u003c/code\u003e type class is the heart of HaskHOL's extensible state\n  mechanism.  It serves a number of purposes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It provides the polymorphic type for heterogenous structures of type \n    \u003ccode\u003e\u003ca\u003eExtState\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e It introduces the \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e constraint that enables the mechanism for\n    selecting specific state extensions based on their type.  See \u003ccode\u003e\u003ca\u003egetExt\u003c/a\u003e\u003c/code\u003e for\n    more details.\n\u003c/li\u003e\u003cli\u003e It defines an initial value for state extensions to use if they have not \n    been introduced to the context by a computation yet.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor more information see the documentation for \u003ccode\u003e\u003ca\u003eHOLContext\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetExtCtxt\u003c/a\u003e\u003c/code\u003e, and\n  \u003ccode\u003e\u003ca\u003eputExt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "class",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#ExtClass",
        "fct-type": "class",
        "title": "ExtClass"
      },
      "index": {
        "description": "The ExtClass type class is the heart of HaskHOL extensible state mechanism It serves number of purposes It provides the polymorphic type for heterogenous structures of type ExtState It introduces the Typeable constraint that enables the mechanism for selecting specific state extensions based on their type See getExt for more details It defines an initial value for state extensions to use if they have not been introduced to the context by computation yet For more information see the documentation for HOLContext getExtCtxt and putExt",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "ExtClass",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Ext Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:ExtState",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to build heterogenous structures that hold state extensions.  See\n  \u003ccode\u003e\u003ca\u003eExtClass\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#ExtState",
        "fct-type": "data",
        "title": "ExtState"
      },
      "index": {
        "description": "Used to build heterogenous structures that hold state extensions See ExtClass for more details",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "ExtState",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Ext State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:ExtThry",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eExtThry\u003c/a\u003e\u003c/code\u003e type is the type of a linear theory extension, i.e. a cons-like\n  operation for theory types.  See the module \u003ca\u003eHaskHOL.Lib.Equal.Context\u003c/a\u003e for\n  an example of how to correctly define theory types and contexts for a library.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#ExtThry",
        "fct-type": "data",
        "title": "ExtThry"
      },
      "index": {
        "description": "The ExtThry type is the type of linear theory extension i.e cons-like operation for theory types See the module HaskHOL.Lib.Equal.Context for an example of how to correctly define theory types and contexts for library",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "ExtThry",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Ext Thry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:HOL",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad structures computations in the HaskHOL system at the stateful\n  layer and above.  The type parameters are used as such:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ecls\u003c/code\u003e - \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computations are split into two classes, those that extend the\n            current working theory and those that are \"pure\"-ly used for\n            proof.  The \u003ccode\u003ecls\u003c/code\u003e parameter is used to indicate the classification\n            of a computation.  It is a phantom type variable that is inhabited\n            by one of two empty data types, \u003ccode\u003e\u003ca\u003eTheory\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ethry\u003c/code\u003e - Carries a tag indicating the most recent checkpoint of the current\n             working theory, i.e. the last library loaded.  Again, it is phantom\n             type variable that is inhabited by an empty data type.  A unique\n             tag is created for each library by linerearly extending the tag\n             starting from a base value. For example, the tag \n             \u003ccode\u003eExtThry EqualThry BaseThry\u003c/code\u003e would indicate a current working\n             theory consisting of the base and equality logic theories.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that typically this value is left polymorphic and is\n             constrained by a class related to a library.  For example, the\n             following type indicates a computation that can only be ran by\n             using a theory context value that has the equality logic library\n             loaded:  \u003ccode\u003eEqualCtxt thry =\u003e HOL cls thry a\u003c/code\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e - The return type of a \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad is effectively a flattened stack of a limited\n  \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad and a \u003ccode\u003eState\u003c/code\u003e monad.  We say limited as we restrict the possible\n  IO-like computations to the ones shown in this module, rather than allowing\n  arbitrary computations through a mechanism like \u003ccode\u003eMonadIO\u003c/code\u003e.  This prevents a\n  number of soundness issues.\n\u003c/p\u003e\u003cp\u003eFor more information regarding the contents of a theory context see the\n  documentation for \u003ccode\u003e\u003ca\u003eHOLContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#HOL",
        "fct-type": "data",
        "title": "HOL"
      },
      "index": {
        "description": "The HOL monad structures computations in the HaskHOL system at the stateful layer and above The type parameters are used as such cls HOL computations are split into two classes those that extend the current working theory and those that are pure ly used for proof The cls parameter is used to indicate the classification of computation It is phantom type variable that is inhabited by one of two empty data types Theory and Proof thry Carries tag indicating the most recent checkpoint of the current working theory i.e the last library loaded Again it is phantom type variable that is inhabited by an empty data type unique tag is created for each library by linerearly extending the tag starting from base value For example the tag ExtThry EqualThry BaseThry would indicate current working theory consisting of the base and equality logic theories Note that typically this value is left polymorphic and is constrained by class related to library For example the following type indicates computation that can only be ran by using theory context value that has the equality logic library loaded EqualCtxt thry HOL cls thry The return type of HOL computation Note that the HOL monad is effectively flattened stack of limited IO monad and State monad We say limited as we restrict the possible IO-like computations to the ones shown in this module rather than allowing arbitrary computations through mechanism like MonadIO This prevents number of soundness issues For more information regarding the contents of theory context see the documentation for HOLContext",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "HOL",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:HOLContext",
      "description": {
        "fct-descr": "\u003cp\u003eThe state type for the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.  A newtype wrapper to the following quad:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e An association \u003ccode\u003eList\u003c/code\u003e of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs that models HaskHOL's\n    extensible benign flag system.  The first field is a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation\n    of the type of a benign flag and the second field is that flag's current\n    value.\n\u003c/li\u003e\u003cli\u003e An \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e counter that is used for fresh name generation for type variables.\n\u003c/li\u003e\u003cli\u003e An \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e counter that is used for fresh name generation for term variables.\n\u003c/li\u003e\u003cli\u003e An association \u003ccode\u003eList\u003c/code\u003e of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eExtState\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs that models \n    HaskHOL's extensible state. The first field is a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of \n    the type of a state extension and the second field is a wrapping of that \n    type that has an instance of the \u003ccode\u003e\u003ca\u003eExtClass\u003c/a\u003e\u003c/code\u003e class.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eputExt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetExtCtxt\u003c/a\u003e\u003c/code\u003e for more details on how to interact with the\n  extensible state and see \u003ccode\u003e\u003ca\u003esetBenignFlag\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetBenignFlag\u003c/a\u003e\u003c/code\u003e for more details\n  on how to interact with benign flags.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#HOLContext",
        "fct-type": "data",
        "title": "HOLContext"
      },
      "index": {
        "description": "The state type for the HOL monad newtype wrapper to the following quad An association List of String Bool pairs that models HaskHOL extensible benign flag system The first field is String representation of the type of benign flag and the second field is that flag current value An Int counter that is used for fresh name generation for type variables An Int counter that is used for fresh name generation for term variables An association List of String ExtState pairs that models HaskHOL extensible state The first field is String representation of the type of state extension and the second field is wrapping of that type that has an instance of the ExtClass class See putExt and getExtCtxt for more details on how to interact with the extensible state and see setBenignFlag and getBenignFlag for more details on how to interact with benign flags",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "HOLContext",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOLContext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:HOLException",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type for generic errors in HaskHOL.  Carries a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e message.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "newtype",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#HOLException",
        "fct-type": "newtype",
        "title": "HOLException"
      },
      "index": {
        "description": "The data type for generic errors in HaskHOL Carries String message",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "HOLException",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOLException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:HOLRef",
      "description": {
        "fct-descr": "\u003cp\u003eA type synonym for \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "type",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#HOLRef",
        "fct-type": "type",
        "title": "HOLRef"
      },
      "index": {
        "description": "type synonym for IORef",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "HOLRef",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOLRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:Proof",
      "description": {
        "fct-descr": "\u003cp\u003eThe classification tag for proof computations.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#Proof",
        "fct-type": "data",
        "title": "Proof"
      },
      "index": {
        "description": "The classification tag for proof computations",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "Proof",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:Theory",
      "description": {
        "fct-descr": "\u003cp\u003eThe classification tag for theory extension computations.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#Theory",
        "fct-type": "data",
        "title": "Theory"
      },
      "index": {
        "description": "The classification tag for theory extension computations",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "Theory",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Theory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:BaseThry",
      "description": {
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "BaseThry",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#BaseThry",
        "fct-type": "function",
        "title": "BaseThry"
      },
      "index": {
        "description": "",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "BaseThry",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Base Thry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:ExtThry",
      "description": {
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "ExtThry a b",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#ExtThry",
        "fct-type": "function",
        "title": "ExtThry"
      },
      "index": {
        "description": "",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "ExtThry",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Ext Thry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:HOLException",
      "description": {
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLException String",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#HOLException",
        "fct-type": "function",
        "title": "HOLException"
      },
      "index": {
        "description": "",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "HOLException",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "HOLException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:catchHOL",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e are defined in terms of catching a \n  \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003ecatchHOL\u003c/a\u003e\u003c/code\u003e and then ignoring it to run an alternative\n  computation instead.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "HOL cls thry a -\u003e (e -\u003e HOL cls thry a) -\u003e HOL cls thry a",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#catchHOL",
        "fct-type": "function",
        "title": "catchHOL"
      },
      "index": {
        "description": "version of catch lifted to the HOL monad Note that mplus and are defined in terms of catching SomeException with catchHOL and then ignoring it to run an alternative computation instead",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "catchHOL",
        "normalized": "HOL a b c-\u003e(d-\u003eHOL a b c)-\u003eHOL a b c",
        "package": "haskhol-core",
        "partial": "HOL",
        "signature": "HOL cls thry a-\u003e(e-\u003eHOL cls thry a)-\u003eHOL cls thry a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:ctxtBase",
      "description": {
        "fct-descr": "\u003cp\u003eThe initial working theory value:  debugging is on, the counters are at zero \n  and the extensible state is empty.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext BaseThry",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#ctxtBase",
        "fct-type": "function",
        "title": "ctxtBase"
      },
      "index": {
        "description": "The initial working theory value debugging is on the counters are at zero and the extensible state is empty",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "ctxtBase",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:evalHOLCtxt",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003erunHOLCtxt\u003c/a\u003e\u003c/code\u003e that returns only the resultant value.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "HOL cls thry a -\u003e HOLContext thry -\u003e IO a",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#evalHOLCtxt",
        "fct-type": "function",
        "title": "evalHOLCtxt"
      },
      "index": {
        "description": "version of runHOLCtxt that returns only the resultant value",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "evalHOLCtxt",
        "normalized": "HOL a b c-\u003eHOLContext b-\u003eIO c",
        "package": "haskhol-core",
        "partial": "HOLCtxt",
        "signature": "HOL cls thry a-\u003eHOLContext thry-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:execHOLCtxt",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003erunHOLCtxt\u003c/a\u003e\u003c/code\u003e that returns only the theory context.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "HOL cls thry a -\u003e HOLContext thry -\u003e IO (HOLContext thry)",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#execHOLCtxt",
        "fct-type": "function",
        "title": "execHOLCtxt"
      },
      "index": {
        "description": "version of runHOLCtxt that returns only the theory context",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "execHOLCtxt",
        "normalized": "HOL a b c-\u003eHOLContext b-\u003eIO(HOLContext b)",
        "package": "haskhol-core",
        "partial": "HOLCtxt",
        "signature": "HOL cls thry a-\u003eHOLContext thry-\u003eIO(HOLContext thry)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.  Note that we\n  define our own version of this function, rather than define an instance of\n  \u003ccode\u003eMonadState\u003c/code\u003e so that we can control where the morphisms are exported.\n\u003c/p\u003e\u003cp\u003eThis is done in the name of soundness given that a user can inject an unsound\n  theory context into a proof using a \u003ccode\u003eput\u003c/code\u003e morphism.  This is analogous to the\n  issue behind defining an instance of \u003ccode\u003eMonadIO\u003c/code\u003e given \u003ccode\u003eliftIO\u003c/code\u003e can be used to\n  inject arbitrary computations into the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad, including ones containing\n  unsound contexts.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "HOL cls thry (HOLContext thry)",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Equivalent to get for the HOL monad Note that we define our own version of this function rather than define an instance of MonadState so that we can control where the morphisms are exported This is done in the name of soundness given that user can inject an unsound theory context into proof using put morphism This is analogous to the issue behind defining an instance of MonadIO given liftIO can be used to inject arbitrary computations into the HOL monad including ones containing unsound contexts",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "get",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:getBenignFlag",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003egetBenignFlagCtxt\u003c/a\u003e\u003c/code\u003e that can be used with theory contexts passed\n  implicitly as part of a \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e\u003cp\u003eNever fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e HOL cls thry Bool",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#getBenignFlag",
        "fct-type": "function",
        "title": "getBenignFlag"
      },
      "index": {
        "description": "version of getBenignFlagCtxt that can be used with theory contexts passed implicitly as part of HOL computation Never fails",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "getBenignFlag",
        "normalized": "a-\u003eHOL b c Bool",
        "package": "haskhol-core",
        "partial": "Benign Flag",
        "signature": "a-\u003eHOL cls thry Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:getBenignFlagCtxt",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the value of a benign flag from a theory context.  This function is\n  typically used external to \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computations, such as in the parser and \n  printer.\n\u003c/p\u003e\u003cp\u003eNote that retrieval of the value requires a witness to the desired flag's\n  type, i.e.\n\u003c/p\u003e\u003cpre\u003e getBenignFlag FlagDebug\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e getBenignFlag (undefined :: FlagDebug)\n\u003c/pre\u003e\u003cp\u003eIn the event that the flag is not found then the \u003ccode\u003e\u003ca\u003einitFlagValue\u003c/a\u003e\u003c/code\u003e for that type\n  is returned. Thus, this function never fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e HOLContext thry -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#getBenignFlagCtxt",
        "fct-type": "function",
        "title": "getBenignFlagCtxt"
      },
      "index": {
        "description": "Retrieves the value of benign flag from theory context This function is typically used external to HOL computations such as in the parser and printer Note that retrieval of the value requires witness to the desired flag type i.e getBenignFlag FlagDebug or getBenignFlag undefined FlagDebug In the event that the flag is not found then the initFlagValue for that type is returned Thus this function never fails",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "getBenignFlagCtxt",
        "normalized": "a-\u003eHOLContext b-\u003eBool",
        "package": "haskhol-core",
        "partial": "Benign Flag Ctxt",
        "signature": "a-\u003eHOLContext thry-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:getExt",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003egetExtCtxt\u003c/a\u003e\u003c/code\u003e that can be used with theory contexts passed\n  implicitly as part of a \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e\u003cp\u003eNever fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "HOL cls thry a",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#getExt",
        "fct-type": "function",
        "title": "getExt"
      },
      "index": {
        "description": "version of getExtCtxt that can be used with theory contexts passed implicitly as part of HOL computation Never fails",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "getExt",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Ext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:getExtCtxt",
      "description": {
        "fct-descr": "\u003cp\u003eRetrives a state extension from a theory context.  This function is typically \n  used external to \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computations, such as in the parser, where\n  a theory context is passed explicitly as a value.\n\u003c/p\u003e\u003cp\u003eNote that the selection of the extension is driven by the return type of this \n  function.  Thus when binding the result of this function, the type must be \n  fixed either via explicit type annotation or through the presence of a unique \n  constructor.\n\u003c/p\u003e\u003cp\u003eIn order to provide the correct result type, this function relies on the\n  type-safe \u003ccode\u003e\u003ca\u003ecast\u003c/a\u003e\u003c/code\u003e operation.  In the event that either this cast fails or the \n  state extension is not found then the \u003ccode\u003e\u003ca\u003einitValue\u003c/a\u003e\u003c/code\u003e for that type is returned.\n  Thus, this function never fails.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e a",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#getExtCtxt",
        "fct-type": "function",
        "title": "getExtCtxt"
      },
      "index": {
        "description": "Retrives state extension from theory context This function is typically used external to HOL computations such as in the parser where theory context is passed explicitly as value Note that the selection of the extension is driven by the return type of this function Thus when binding the result of this function the type must be fixed either via explicit type annotation or through the presence of unique constructor In order to provide the correct result type this function relies on the type-safe cast operation In the event that either this cast fails or the state extension is not found then the initValue for that type is returned Thus this function never fails",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "getExtCtxt",
        "normalized": "HOLContext a-\u003eb",
        "package": "haskhol-core",
        "partial": "Ext Ctxt",
        "signature": "HOLContext thry-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:gets",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e that applies a function to the state before returning the\n  result.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "(HOLContext thry -\u003e a) -\u003e HOL cls thry a",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#gets",
        "fct-type": "function",
        "title": "gets"
      },
      "index": {
        "description": "version of get that applies function to the state before returning the result",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "gets",
        "normalized": "(HOLContext a-\u003eb)-\u003eHOL c a b",
        "package": "haskhol-core",
        "partial": "",
        "signature": "(HOLContext thry-\u003ea)-\u003eHOL cls thry a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:initFlagValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe intial value for a benign flag.  The value returned when attempting to\n      retrieve a flag that is not yet defined in the context.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#initFlagValue",
        "fct-type": "method",
        "title": "initFlagValue"
      },
      "index": {
        "description": "The intial value for benign flag The value returned when attempting to retrieve flag that is not yet defined in the context",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "initFlagValue",
        "normalized": "a-\u003eBool",
        "package": "haskhol-core",
        "partial": "Flag Value",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:initValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe intial value for an extensible state type.  The value returned when\n      attempting to retrieve a type that is not yet defined in the context.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "a",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#initValue",
        "fct-type": "method",
        "title": "initValue"
      },
      "index": {
        "description": "The intial value for an extensible state type The value returned when attempting to retrieve type that is not yet defined in the context",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "initValue",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:liftEither",
      "description": {
        "fct-descr": "\u003cp\u003eLifts an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value into the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad mapping \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003es\n  and \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003es.  \n\u003c/p\u003e\u003cp\u003eNote that the value inside the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e must have an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e \n  class such that \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e can be used to construct a string to be used with\n  \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e Either err a -\u003e HOL cls thry a",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#liftEither",
        "fct-type": "function",
        "title": "liftEither"
      },
      "index": {
        "description": "Lifts an Either value into the HOL monad mapping Right to return and Left to fail Note that the value inside the Left must have an instance of the Show class such that show can be used to construct string to be used with fail",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "liftEither",
        "normalized": "String-\u003eEither a b-\u003eHOL c d b",
        "package": "haskhol-core",
        "partial": "Either",
        "signature": "String-\u003eEither err a-\u003eHOL cls thry a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:liftMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eLifts a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value into the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad mapping \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003es and\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003es with the provided \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e Maybe a -\u003e HOL cls thry a",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#liftMaybe",
        "fct-type": "function",
        "title": "liftMaybe"
      },
      "index": {
        "description": "Lifts Maybe value into the HOL monad mapping Just to return and Nothing to fail with the provided String",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "liftMaybe",
        "normalized": "String-\u003eMaybe a-\u003eHOL b c a",
        "package": "haskhol-core",
        "partial": "Maybe",
        "signature": "String-\u003eMaybe a-\u003eHOL cls thry a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:modifyExt",
      "description": {
        "fct-descr": "\u003cp\u003eModifies the value of a state extension.  Functionally equivalent to the\n  composition \n\u003c/p\u003e\u003cpre\u003e \\ f -\u003e putExt . f =\u003c\u003c getExt\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "(a -\u003e a) -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#modifyExt",
        "fct-type": "function",
        "title": "modifyExt"
      },
      "index": {
        "description": "Modifies the value of state extension Functionally equivalent to the composition putExt getExt",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "modifyExt",
        "normalized": "(a-\u003ea)-\u003eHOL Theory b()",
        "package": "haskhol-core",
        "partial": "Ext",
        "signature": "(a-\u003ea)-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:modifyHOLRef",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a given function to a \u003ccode\u003e\u003ca\u003eHOLRef\u003c/a\u003e\u003c/code\u003e, modifying the stored value.\n  Functionally equivalent to \u003ccode\u003e\u003ca\u003emodifyHOLRef\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "IORef a -\u003e (a -\u003e a) -\u003e HOL cls thry ()",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#modifyHOLRef",
        "fct-type": "function",
        "title": "modifyHOLRef"
      },
      "index": {
        "description": "Applies given function to HOLRef modifying the stored value Functionally equivalent to modifyHOLRef lifted to the HOL monad",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "modifyHOLRef",
        "normalized": "IORef a-\u003e(a-\u003ea)-\u003eHOL b c()",
        "package": "haskhol-core",
        "partial": "HOLRef",
        "signature": "IORef a-\u003e(a-\u003ea)-\u003eHOL cls thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:newExtension",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enewExtension\u003c/a\u003e\u003c/code\u003e splice can be used to automatically construct a new state\n  extension given a name and a quoted, type annotated, initial value.  The type\n  annotation is required as many initial values, such as an empty list, are too\n  polymorphic to infer the correct type on its own.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e newExtension \"TheCoreDefinitions\" [| [] :: [HOLThm] |]\n\u003c/pre\u003e\u003cp\u003ewill construct the following Haskell code:\n\u003c/p\u003e\u003cpre\u003e newtype TheCoreDefinitions = TheCoreDefinitions [HOLThm] deriving Typeable\n instance ExtClass TheCoreDefinitions where\n     initValue = TheCoreDefinitions []\n\u003c/pre\u003e\u003cp\u003eNote that, due to limitations with the current version of Template Haskell,\n  \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e instances should be derived external to this splice via \u003ccode\u003e\u003ca\u003ederiveLift\u003c/a\u003e\u003c/code\u003e or\n  \u003ccode\u003e\u003ca\u003ederiveLiftMany\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e ExpQ -\u003e Q [Dec]",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#newExtension",
        "fct-type": "function",
        "title": "newExtension"
      },
      "index": {
        "description": "The newExtension splice can be used to automatically construct new state extension given name and quoted type annotated initial value The type annotation is required as many initial values such as an empty list are too polymorphic to infer the correct type on its own Example newExtension TheCoreDefinitions HOLThm will construct the following Haskell code newtype TheCoreDefinitions TheCoreDefinitions HOLThm deriving Typeable instance ExtClass TheCoreDefinitions where initValue TheCoreDefinitions Note that due to limitations with the current version of Template Haskell Lift instances should be derived external to this splice via deriveLift or deriveLiftMany",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "newExtension",
        "normalized": "String-\u003eExpQ-\u003eQ[Dec]",
        "package": "haskhol-core",
        "partial": "Extension",
        "signature": "String-\u003eExpQ-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:newFlag",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enewFlag\u003c/a\u003e\u003c/code\u003e splice can be used to automatically construct a new benign flag\n  given a name and an initial flag value.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e newFlag \"FlagDebug\" True\n\u003c/pre\u003e\u003cp\u003ewill construct the following Haskell code:\n\u003c/p\u003e\u003cpre\u003e data FlagDebug = FlagDebug deriving Typeable\n instance BenignFlag FlagDebug where\n     initFlagValue _ = True\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e Bool -\u003e Q [Dec]",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#newFlag",
        "fct-type": "function",
        "title": "newFlag"
      },
      "index": {
        "description": "The newFlag splice can be used to automatically construct new benign flag given name and an initial flag value Example newFlag FlagDebug True will construct the following Haskell code data FlagDebug FlagDebug deriving Typeable instance BenignFlag FlagDebug where initFlagValue True",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "newFlag",
        "normalized": "String-\u003eBool-\u003eQ[Dec]",
        "package": "haskhol-core",
        "partial": "Flag",
        "signature": "String-\u003eBool-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:newHOLRef",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eHOLRef\u003c/a\u003e\u003c/code\u003e from a given starting value.  Functionally equivalent\n  to \u003ccode\u003e\u003ca\u003enewIORef\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e HOL cls thry (HOLRef a)",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#newHOLRef",
        "fct-type": "function",
        "title": "newHOLRef"
      },
      "index": {
        "description": "Creates new HOLRef from given starting value Functionally equivalent to newIORef lifted to the HOL monad",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "newHOLRef",
        "normalized": "a-\u003eHOL b c(HOLRef a)",
        "package": "haskhol-core",
        "partial": "HOLRef",
        "signature": "a-\u003eHOL cls thry(HOLRef a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:putExt",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a new, or modifies an existing, state extension.  State extensions in the\n  context are stored as a list of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eExtState\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs.  The first \n  field in this pair is a term-level reification of a state extension's type, \n  produced via a composition of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etypeOf\u003c/a\u003e\u003c/code\u003e.  The second field is simply\n  a wrapping of the extension's value with \u003ccode\u003e\u003ca\u003eExtState\u003c/a\u003e\u003c/code\u003e to facilitate \n  heterogeneous structures.\n\u003c/p\u003e\u003cp\u003eNumerous usage examples can be found in the \u003ca\u003eHaskHOL.Core.Parser.Lib\u003c/a\u003e module\n  where extensible state is used to store the list of operators, as well as\n  other information, required by the parser.\n\u003c/p\u003e\u003cp\u003eNote that since the retrieval and storage of state extensions are driven by \n  types, it is in the best interest of library implementors to guarantee that\n  the type of their extensions are unique.  The easiest way to do this is to\n  create a \u003ccode\u003enewtype\u003c/code\u003e wrapper for your extension and hide the internal\n  constructor to prevent unintended modification.  Again, see \n  \u003ca\u003eHaskHOL.Core.Parser.Lib\u003c/a\u003e for usage examples.\n\u003c/p\u003e\u003cp\u003eAlternatively, the \u003ccode\u003e\u003ca\u003enewExtension\u003c/a\u003e\u003c/code\u003e splice can be used to automatically\n  construct a new extension given a name and initial value.  See that function's\n  documentation for more information.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#putExt",
        "fct-type": "function",
        "title": "putExt"
      },
      "index": {
        "description": "Adds new or modifies an existing state extension State extensions in the context are stored as list of String ExtState pairs The first field in this pair is term-level reification of state extension type produced via composition of show and typeOf The second field is simply wrapping of the extension value with ExtState to facilitate heterogeneous structures Numerous usage examples can be found in the HaskHOL.Core.Parser.Lib module where extensible state is used to store the list of operators as well as other information required by the parser Note that since the retrieval and storage of state extensions are driven by types it is in the best interest of library implementors to guarantee that the type of their extensions are unique The easiest way to do this is to create newtype wrapper for your extension and hide the internal constructor to prevent unintended modification Again see HaskHOL.Core.Parser.Lib for usage examples Alternatively the newExtension splice can be used to automatically construct new extension given name and initial value See that function documentation for more information",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "putExt",
        "normalized": "a-\u003eHOL Theory b()",
        "package": "haskhol-core",
        "partial": "Ext",
        "signature": "a-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:putStrHOL",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL cls thry ()",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#putStrHOL",
        "fct-type": "function",
        "title": "putStrHOL"
      },
      "index": {
        "description": "version of putStr lifted to the HOL monad",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "putStrHOL",
        "normalized": "String-\u003eHOL a b()",
        "package": "haskhol-core",
        "partial": "Str HOL",
        "signature": "String-\u003eHOL cls thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:putStrLnHOL",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL cls thry ()",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#putStrLnHOL",
        "fct-type": "function",
        "title": "putStrLnHOL"
      },
      "index": {
        "description": "version of putStrLn lifted to the HOL monad",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "putStrLnHOL",
        "normalized": "String-\u003eHOL a b()",
        "package": "haskhol-core",
        "partial": "Str Ln HOL",
        "signature": "String-\u003eHOL cls thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:readHOLRef",
      "description": {
        "fct-descr": "\u003cp\u003eReads a \u003ccode\u003e\u003ca\u003eHOLRef\u003c/a\u003e\u003c/code\u003e returning the stored value.  Functionally equivalent to \n  \u003ccode\u003e\u003ca\u003ereadIORef\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "IORef a -\u003e HOL cls thry a",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#readHOLRef",
        "fct-type": "function",
        "title": "readHOLRef"
      },
      "index": {
        "description": "Reads HOLRef returning the stored value Functionally equivalent to readIORef lifted to the HOL monad",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "readHOLRef",
        "normalized": "IORef a-\u003eHOL b c a",
        "package": "haskhol-core",
        "partial": "HOLRef",
        "signature": "IORef a-\u003eHOL cls thry a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:runHOLCtxt",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates a \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computation with a provided theory context.\n            Returns the result paired with an updated theory context.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "HOL cls thry a -\u003e HOLContext thry -\u003e IO (a, HOLContext thry)",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#runHOLCtxt",
        "fct-type": "function",
        "title": "runHOLCtxt"
      },
      "index": {
        "description": "Evaluates HOL computation with provided theory context Returns the result paired with an updated theory context",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "runHOLCtxt",
        "normalized": "HOL a b c-\u003eHOLContext b-\u003eIO(c,HOLContext b)",
        "package": "haskhol-core",
        "partial": "HOLCtxt",
        "signature": "HOL cls thry a-\u003eHOLContext thry-\u003eIO(a,HOLContext thry)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:setBenignFlag",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a new, or modifies an existing, benign flag to be \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  Benign flags \n  in the context are stored as a list of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs.  The first \n  field in this pair is a term-level reificatino of a benign flag's type, \n  produced via a composition of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etypeOf\u003c/a\u003e\u003c/code\u003e.  The second field is simply\n  the current boolean value of the flag.\n\u003c/p\u003e\u003cp\u003eNumerous usage examples can be found in both the \u003ca\u003eHaskHOL.Core.Parser.Lib\u003c/a\u003e and\n  \u003ca\u003eHaskHOL.Core.Printer\u003c/a\u003e modules where flags are used to direct the behavior\n  of the parsers and printers accordingly.\n\u003c/p\u003e\u003cp\u003eNote that since the retrieval and storage of benign flags are driven by types,\n  it is in the best interest of library implementors to guarantee that the types\n  of their flags are unique.  The easiest way to do this is to create a unique\n  \u003ccode\u003edata\u003c/code\u003e type for each flag.  The type doesn't need to carry a payload, but it\n  does need to provide a witness to the flag type.  As such, it can either be\n  a nullary, punned data declaration, i.e. \u003ccode\u003edata X = X\u003c/code\u003e, or an empty data \n  declaration with a type annotated instance of \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e acting as the\n  ness, i.e. \u003ccode\u003eundefined :: X\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e setBenignFlag FlagDebug\n\u003c/pre\u003e\u003cp\u003ewould set the debugging flag equal to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlternatively, the \u003ccode\u003e\u003ca\u003enewFlag\u003c/a\u003e\u003c/code\u003e splice can be used to automatically construct a \n  new extension given a name and initial value.  See that function's \n  documentation for more information.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e HOL cls thry ()",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#setBenignFlag",
        "fct-type": "function",
        "title": "setBenignFlag"
      },
      "index": {
        "description": "Adds new or modifies an existing benign flag to be True Benign flags in the context are stored as list of String Bool pairs The first field in this pair is term-level reificatino of benign flag type produced via composition of show and typeOf The second field is simply the current boolean value of the flag Numerous usage examples can be found in both the HaskHOL.Core.Parser.Lib and HaskHOL.Core.Printer modules where flags are used to direct the behavior of the parsers and printers accordingly Note that since the retrieval and storage of benign flags are driven by types it is in the best interest of library implementors to guarantee that the types of their flags are unique The easiest way to do this is to create unique data type for each flag The type doesn need to carry payload but it does need to provide witness to the flag type As such it can either be nullary punned data declaration i.e data or an empty data declaration with type annotated instance of undefined acting as the ness i.e undefined Example setBenignFlag FlagDebug would set the debugging flag equal to True Alternatively the newFlag splice can be used to automatically construct new extension given name and initial value See that function documentation for more information",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "setBenignFlag",
        "normalized": "a-\u003eHOL b c()",
        "package": "haskhol-core",
        "partial": "Benign Flag",
        "signature": "a-\u003eHOL cls thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:throwHOL",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003ethrowIO\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.  \n\u003c/p\u003e\u003cp\u003eNote that the following functions for the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e type rely on \u003ccode\u003e\u003ca\u003ethrowHOL\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e - Equivalent to \n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e throwHOL . HOLException\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e - Equivalent to \n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e fail \"mzero - HOL\"\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e - Equivalent to \n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e fail \"empty - HOL\"\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "e -\u003e HOL cls thry a",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#throwHOL",
        "fct-type": "function",
        "title": "throwHOL"
      },
      "index": {
        "description": "version of throwIO lifted to the HOL monad Note that the following functions for the HOL type rely on throwHOL fail Equivalent to throwHOL HOLException mzero Equivalent to fail mzero HOL empty Equivalent to fail empty HOL",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "throwHOL",
        "normalized": "a-\u003eHOL b c d",
        "package": "haskhol-core",
        "partial": "HOL",
        "signature": "e-\u003eHOL cls thry a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:tickTermCounter",
      "description": {
        "fct-descr": "\u003cp\u003eIncrements the term counter stored in the context, returning the new value.\n  Can be used to guarantee the freshness of term names within a single \n  computation.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "HOL cls thry Int",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#tickTermCounter",
        "fct-type": "function",
        "title": "tickTermCounter"
      },
      "index": {
        "description": "Increments the term counter stored in the context returning the new value Can be used to guarantee the freshness of term names within single computation",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "tickTermCounter",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Term Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:tickTypeCounter",
      "description": {
        "fct-descr": "\u003cp\u003eIncrements the type counter stored in the context, returning the new value.\n  Can be used to gurantee the freshness of type names within a single\n  computation.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "HOL cls thry Int",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#tickTypeCounter",
        "fct-type": "function",
        "title": "tickTypeCounter"
      },
      "index": {
        "description": "Increments the type counter stored in the context returning the new value Can be used to gurantee the freshness of type names within single computation",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "tickTypeCounter",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Type Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:unsetBenignFlag",
      "description": {
        "fct-descr": "\u003cp\u003eUnsets a benign flag making it \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "a -\u003e HOL cls thry ()",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#unsetBenignFlag",
        "fct-type": "function",
        "title": "unsetBenignFlag"
      },
      "index": {
        "description": "Unsets benign flag making it False",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "unsetBenignFlag",
        "normalized": "a-\u003eHOL b c()",
        "package": "haskhol-core",
        "partial": "Benign Flag",
        "signature": "a-\u003eHOL cls thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:writeHOLRef",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a value to a \u003ccode\u003e\u003ca\u003eHOLRef\u003c/a\u003e\u003c/code\u003e.  Functionally equivalent to \u003ccode\u003e\u003ca\u003ewriteHOLRef\u003c/a\u003e\u003c/code\u003e lifted\n  to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State.Monad",
        "fct-package": "haskhol-core",
        "fct-signature": "IORef a -\u003e a -\u003e HOL cls thry ()",
        "fct-source": "src/HaskHOL-Core-State-Monad.html#writeHOLRef",
        "fct-type": "function",
        "title": "writeHOLRef"
      },
      "index": {
        "description": "Writes value to HOLRef Functionally equivalent to writeHOLRef lifted to the HOL monad",
        "hierarchy": "HaskHOL Core State Monad",
        "module": "HaskHOL.Core.State.Monad",
        "name": "writeHOLRef",
        "normalized": "IORef a-\u003ea-\u003eHOL b c()",
        "package": "haskhol-core",
        "partial": "HOLRef",
        "signature": "IORef a-\u003ea-\u003eHOL cls thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the stateful layer of HaskHOL.  It consists of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Stateful type primitives not found in \u003ca\u003eHaskHOL.Core.Types\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Stateful term primitives not found in \u003ca\u003eHaskHOL.Core.Terms\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Stateful theory extension primitives not found in \u003ca\u003eHaskHOL.Core.Kernel\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e A very primitive debugging system.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "module",
        "fct-source": "src/HaskHOL-Core-State.html",
        "fct-type": "module",
        "title": "State"
      },
      "index": {
        "description": "This module exports the stateful layer of HaskHOL It consists of Stateful type primitives not found in HaskHOL.Core.Types Stateful term primitives not found in HaskHOL.Core.Terms Stateful theory extension primitives not found in HaskHOL.Core.Kernel very primitive debugging system",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "State",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#t:FlagDebug",
      "description": {
        "fct-descr": "\u003cp\u003eFlag states whether or not to print debug statements.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "data",
        "fct-source": "src/HaskHOL-Core-State.html#FlagDebug",
        "fct-type": "data",
        "title": "FlagDebug"
      },
      "index": {
        "description": "Flag states whether or not to print debug statements",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "FlagDebug",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Flag Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:FlagDebug",
      "description": {
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "FlagDebug",
        "fct-source": "src/HaskHOL-Core-State.html#FlagDebug",
        "fct-type": "function",
        "title": "FlagDebug"
      },
      "index": {
        "description": "",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "FlagDebug",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Flag Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:axioms",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the list of axioms from the current working theory.  The list\n  contains pairs of string names and the axioms.  This names exists such that\n  compile time operations have a tag with which they can use to extract axioms \n  from saved theories.  See \u003ccode\u003eextractAxiom\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "HOL cls thry [(String, HOLThm)]",
        "fct-source": "src/HaskHOL-Core-State.html#axioms",
        "fct-type": "function",
        "title": "axioms"
      },
      "index": {
        "description": "Retrieves the list of axioms from the current working theory The list contains pairs of string names and the axioms This names exists such that compile time operations have tag with which they can use to extract axioms from saved theories See extractAxiom for more details",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "axioms",
        "normalized": "HOL a b[(String,HOLThm)]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOL cls thry[(String,HOLThm)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:constants",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the list of term constants from the current working theory.  The\n  list contains pairs of strings recognized by the parser and the associated\n  term constant value, i.e. \n\u003c/p\u003e\u003cpre\u003e (\"=\", tmEq tyA)\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "HOL cls thry [(String, HOLTerm)]",
        "fct-source": "src/HaskHOL-Core-State.html#constants",
        "fct-type": "function",
        "title": "constants"
      },
      "index": {
        "description": "Retrieves the list of term constants from the current working theory The list contains pairs of strings recognized by the parser and the associated term constant value i.e tmEq tyA",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "constants",
        "normalized": "HOL a b[(String,HOLTerm)]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOL cls thry[(String,HOLTerm)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:definitions",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the list of definitions from the current working theory.  See\n  \u003ccode\u003e\u003ca\u003enewBasicDefinition\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "HOL cls thry [HOLThm]",
        "fct-source": "src/HaskHOL-Core-State.html#definitions",
        "fct-type": "function",
        "title": "definitions"
      },
      "index": {
        "description": "Retrieves the list of definitions from the current working theory See newBasicDefinition for more details",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "definitions",
        "normalized": "HOL a b[HOLThm]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOL cls thry[HOLThm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:getAxiom",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves a specific axiom by name.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if there is no\n  axiom with the provided name in the current working theory.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL cls thry HOLThm",
        "fct-source": "src/HaskHOL-Core-State.html#getAxiom",
        "fct-type": "function",
        "title": "getAxiom"
      },
      "index": {
        "description": "Retrieves specific axiom by name Throws HOLException if there is no axiom with the provided name in the current working theory",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "getAxiom",
        "normalized": "String-\u003eHOL a b HOLThm",
        "package": "haskhol-core",
        "partial": "Axiom",
        "signature": "String-\u003eHOL cls thry HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:getConstType",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the type of a given term constant.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the\n  provided term constant name is not defined.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL cls thry HOLType",
        "fct-source": "src/HaskHOL-Core-State.html#getConstType",
        "fct-type": "function",
        "title": "getConstType"
      },
      "index": {
        "description": "Retrieves the type of given term constant Throws HOLException if the provided term constant name is not defined",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "getConstType",
        "normalized": "String-\u003eHOL a b HOLType",
        "package": "haskhol-core",
        "partial": "Const Type",
        "signature": "String-\u003eHOL cls thry HOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:getTypeArity",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003egetTypeArityCtxt\u003c/a\u003e\u003c/code\u003e that operates over the current working theory\n  of a \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computation.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the provided type constant\n  name is not defined.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL cls thry Int",
        "fct-source": "src/HaskHOL-Core-State.html#getTypeArity",
        "fct-type": "function",
        "title": "getTypeArity"
      },
      "index": {
        "description": "version of getTypeArityCtxt that operates over the current working theory of HOL computation Throws HOLException if the provided type constant name is not defined",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "getTypeArity",
        "normalized": "String-\u003eHOL a b Int",
        "package": "haskhol-core",
        "partial": "Type Arity",
        "signature": "String-\u003eHOL cls thry Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:getTypeArityCtxt",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the arity of a given type constant.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n  provided type constant name is not defined in the provided context.\n\u003c/p\u003e\u003cp\u003eNote that this function takes a \u003ccode\u003e\u003ca\u003eHOLContext\u003c/a\u003e\u003c/code\u003e argument such that it can be\n  used outside of \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computations; for example, in the parser.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLContext thry -\u003e String -\u003e Maybe Int",
        "fct-source": "src/HaskHOL-Core-State.html#getTypeArityCtxt",
        "fct-type": "function",
        "title": "getTypeArityCtxt"
      },
      "index": {
        "description": "Retrieves the arity of given type constant Fails with Nothing if the provided type constant name is not defined in the provided context Note that this function takes HOLContext argument such that it can be used outside of HOL computations for example in the parser",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "getTypeArityCtxt",
        "normalized": "HOLContext a-\u003eString-\u003eMaybe Int",
        "package": "haskhol-core",
        "partial": "Type Arity Ctxt",
        "signature": "HOLContext thry-\u003eString-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:mkConst",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a specific instance of a term constant when provided with its name\n  and a type substition environment.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the \n  following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The instantiation as performed by \u003ccode\u003e\u003ca\u003einstConst\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/li\u003e\u003cli\u003e The provided name is not a currently defined constant.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e [(l, r)] -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-State.html#mkConst",
        "fct-type": "function",
        "title": "mkConst"
      },
      "index": {
        "description": "Constructs specific instance of term constant when provided with its name and type substition environment Throws HOLException in the following cases The instantiation as performed by instConst fails The provided name is not currently defined constant",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "mkConst",
        "normalized": "String-\u003e[(a,b)]-\u003eHOL c d HOLTerm",
        "package": "haskhol-core",
        "partial": "Const",
        "signature": "String-\u003e[(l,r)]-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:mkConstFull",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emkConst\u003c/a\u003e\u003c/code\u003e that accepts a triplet of type substitition \n  environments.  Frequently used with the \u003ccode\u003etypeMatch\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e SubstTrip -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-State.html#mkConstFull",
        "fct-type": "function",
        "title": "mkConstFull"
      },
      "index": {
        "description": "version of mkConst that accepts triplet of type substitition environments Frequently used with the typeMatch function",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "mkConstFull",
        "normalized": "String-\u003eSubstTrip-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Const Full",
        "signature": "String-\u003eSubstTrip-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:mkEq",
      "description": {
        "fct-descr": "\u003cp\u003eSafely creates an equality between two terms using \u003ccode\u003e\u003ca\u003emkConst\u003c/a\u003e\u003c/code\u003e using the type of\n  the left hand side argument to perform the required instantiation.  Throws a\n  \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the case when the types of the two terms do not agree.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
        "fct-source": "src/HaskHOL-Core-State.html#mkEq",
        "fct-type": "function",
        "title": "mkEq"
      },
      "index": {
        "description": "Safely creates an equality between two terms using mkConst using the type of the left hand side argument to perform the required instantiation Throws HOLException in the case when the types of the two terms do not agree",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "mkEq",
        "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
        "package": "haskhol-core",
        "partial": "Eq",
        "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:mkFunTy",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a function type safely using \u003ccode\u003e\u003ca\u003emkType\u003c/a\u003e\u003c/code\u003e.  Should never fail provided\n  that the initial value for type constants has not been modified.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLType -\u003e HOLType -\u003e HOL cls thry HOLType",
        "fct-source": "src/HaskHOL-Core-State.html#mkFunTy",
        "fct-type": "function",
        "title": "mkFunTy"
      },
      "index": {
        "description": "Constructs function type safely using mkType Should never fail provided that the initial value for type constants has not been modified",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "mkFunTy",
        "normalized": "HOLType-\u003eHOLType-\u003eHOL a b HOLType",
        "package": "haskhol-core",
        "partial": "Fun Ty",
        "signature": "HOLType-\u003eHOLType-\u003eHOL cls thry HOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:mkType",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a type application given an operator name and a list of argument\n  types.  If the provided name is not a currently defined type constant then\n  this function defaults it to a type operator variable.  Throws a \n  \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A type operator's arity disagrees with the length of the argument list.\n\u003c/li\u003e\u003cli\u003e A type operator is applied to zero arguments.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e [HOLType] -\u003e HOL cls thry HOLType",
        "fct-source": "src/HaskHOL-Core-State.html#mkType",
        "fct-type": "function",
        "title": "mkType"
      },
      "index": {
        "description": "Constructs type application given an operator name and list of argument types If the provided name is not currently defined type constant then this function defaults it to type operator variable Throws HOLException in the following cases type operator arity disagrees with the length of the argument list type operator is applied to zero arguments",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "mkType",
        "normalized": "String-\u003e[HOLType]-\u003eHOL a b HOLType",
        "package": "haskhol-core",
        "partial": "Type",
        "signature": "String-\u003e[HOLType]-\u003eHOL cls thry HOLType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:newAxiom",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a new axiom of a given name and conclusion term.  Also adds this\n  new axiom to the current working theory.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the \n  following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The provided term is not a proposition.\n\u003c/li\u003e\u003cli\u003e An axiom with the provided name has already been declared.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLTerm -\u003e HOL Theory thry HOLThm",
        "fct-source": "src/HaskHOL-Core-State.html#newAxiom",
        "fct-type": "function",
        "title": "newAxiom"
      },
      "index": {
        "description": "Constructs new axiom of given name and conclusion term Also adds this new axiom to the current working theory Throws HOLException in the following cases The provided term is not proposition An axiom with the provided name has already been declared",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "newAxiom",
        "normalized": "String-\u003eHOLTerm-\u003eHOL Theory a HOLThm",
        "package": "haskhol-core",
        "partial": "Axiom",
        "signature": "String-\u003eHOLTerm-\u003eHOL Theory thry HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:newBasicDefinition",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduces a definition of the form \u003ccode\u003ec = t\u003c/code\u003e into the current working theory.\n  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e when the definitional term is ill-formed.  See\n  \u003ccode\u003e\u003ca\u003enewDefinedConst\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "HOLTerm -\u003e HOL Theory thry HOLThm",
        "fct-source": "src/HaskHOL-Core-State.html#newBasicDefinition",
        "fct-type": "function",
        "title": "newBasicDefinition"
      },
      "index": {
        "description": "Introduces definition of the form into the current working theory Throws HOLException when the definitional term is ill-formed See newDefinedConst for more details",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "newBasicDefinition",
        "normalized": "HOLTerm-\u003eHOL Theory a HOLThm",
        "package": "haskhol-core",
        "partial": "Basic Definition",
        "signature": "HOLTerm-\u003eHOL Theory thry HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:newBasicTypeDefinition",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduces a new type constant, and two associated term constants, into the \n  current working theory that is defined as an inhabited subset of an existing \n  type constant.  Takes the following arguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e  The name of the new type constant.\n\u003c/li\u003e\u003cli\u003e  The name of the new term constant that will be used to construct the type.\n\u003c/li\u003e\u003cli\u003e  The name of the new term constant that will be used to desctruct the type.\n\u003c/li\u003e\u003cli\u003e  A theorem that proves that the defining predicate has at least one\n     satisfying value.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e  A term constant of either of the provided names has already been defined.\n\u003c/li\u003e\u003cli\u003e  A type constant of the provided name has already been defined.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enewDefinedTypeOp\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e String -\u003e String -\u003e HOLThm -\u003e HOL Theory thry (HOLThm, HOLThm)",
        "fct-source": "src/HaskHOL-Core-State.html#newBasicTypeDefinition",
        "fct-type": "function",
        "title": "newBasicTypeDefinition"
      },
      "index": {
        "description": "Introduces new type constant and two associated term constants into the current working theory that is defined as an inhabited subset of an existing type constant Takes the following arguments The name of the new type constant The name of the new term constant that will be used to construct the type The name of the new term constant that will be used to desctruct the type theorem that proves that the defining predicate has at least one satisfying value Throws HOLException in the following cases term constant of either of the provided names has already been defined type constant of the provided name has already been defined See newDefinedTypeOp for more details",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "newBasicTypeDefinition",
        "normalized": "String-\u003eString-\u003eString-\u003eHOLThm-\u003eHOL Theory a(HOLThm,HOLThm)",
        "package": "haskhol-core",
        "partial": "Basic Type Definition",
        "signature": "String-\u003eString-\u003eString-\u003eHOLThm-\u003eHOL Theory thry(HOLThm,HOLThm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:newConstant",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a new primitive term constant of a given name and type.  Also adds\n  this new term to the current working theory.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e when a\n  term of the same name has already been declared.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOLType -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-State.html#newConstant",
        "fct-type": "function",
        "title": "newConstant"
      },
      "index": {
        "description": "Constructs new primitive term constant of given name and type Also adds this new term to the current working theory Throws HOLException when term of the same name has already been declared",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "newConstant",
        "normalized": "String-\u003eHOLType-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Constant",
        "signature": "String-\u003eHOLType-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:newType",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a new primitve type constant of a given name and arity.  Also adds\n  this new type to the current working theory.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e when a \n  type of the same name has already been declared.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e Int -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core-State.html#newType",
        "fct-type": "function",
        "title": "newType"
      },
      "index": {
        "description": "Constructs new primitve type constant of given name and arity Also adds this new type to the current working theory Throws HOLException when type of the same name has already been declared",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "newType",
        "normalized": "String-\u003eInt-\u003eHOL Theory a()",
        "package": "haskhol-core",
        "partial": "Type",
        "signature": "String-\u003eInt-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:printDebug",
      "description": {
        "fct-descr": "\u003cp\u003eA version of printDebug that does not print a new line.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL cls thry a -\u003e HOL cls thry a",
        "fct-source": "src/HaskHOL-Core-State.html#printDebug",
        "fct-type": "function",
        "title": "printDebug"
      },
      "index": {
        "description": "version of printDebug that does not print new line",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "printDebug",
        "normalized": "String-\u003eHOL a b c-\u003eHOL a b c",
        "package": "haskhol-core",
        "partial": "Debug",
        "signature": "String-\u003eHOL cls thry a-\u003eHOL cls thry a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:printDebugLn",
      "description": {
        "fct-descr": "\u003cp\u003ePrints the provided string, with a new line, when debugging is turned on, then\n  returns the given \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computation.  A version of \u003ccode\u003etrace\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad\n  that is referentially transparent.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e HOL cls thry a -\u003e HOL cls thry a",
        "fct-source": "src/HaskHOL-Core-State.html#printDebugLn",
        "fct-type": "function",
        "title": "printDebugLn"
      },
      "index": {
        "description": "Prints the provided string with new line when debugging is turned on then returns the given HOL computation version of trace for the HOL monad that is referentially transparent",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "printDebugLn",
        "normalized": "String-\u003eHOL a b c-\u003eHOL a b c",
        "package": "haskhol-core",
        "partial": "Debug Ln",
        "signature": "String-\u003eHOL cls thry a-\u003eHOL cls thry a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:types",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the list of type constants from the current working theory.  The\n  list contains pairs of strings recognized by the parser and the associated\n  type operator value, i.e. \n\u003c/p\u003e\u003cpre\u003e (\"bool\", tyOpBool)\n\u003c/pre\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "HOL cls thry [(String, TypeOp)]",
        "fct-source": "src/HaskHOL-Core-State.html#types",
        "fct-type": "function",
        "title": "types"
      },
      "index": {
        "description": "Retrieves the list of type constants from the current working theory The list contains pairs of strings recognized by the parser and the associated type operator value i.e bool tyOpBool",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "types",
        "normalized": "HOL a b[(String,TypeOp)]",
        "package": "haskhol-core",
        "partial": "",
        "signature": "HOL cls thry[(String,TypeOp)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:warn",
      "description": {
        "fct-descr": "\u003cp\u003ePrints the provided string, with a new line, when the given boolean value is\n  true.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core.State",
        "fct-package": "haskhol-core",
        "fct-signature": "Bool -\u003e String -\u003e HOL cls thry ()",
        "fct-source": "src/HaskHOL-Core-State.html#warn",
        "fct-type": "function",
        "title": "warn"
      },
      "index": {
        "description": "Prints the provided string with new line when the given boolean value is true",
        "hierarchy": "HaskHOL Core State",
        "module": "HaskHOL.Core.State",
        "name": "warn",
        "normalized": "Bool-\u003eString-\u003eHOL a b()",
        "package": "haskhol-core",
        "partial": "",
        "signature": "Bool-\u003eString-\u003eHOL cls thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is the one to import for users looking to include the entirety of\n  the core of the HaskHOL proof system.  It re-exports all of the core \n  sub-modules in addition to a number of overloaded functions that work with\n  \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHOLTypeRep\u003c/a\u003e\u003c/code\u003e representations for convenience reasons.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HaskHOL.Core",
        "fct-package": "haskhol-core",
        "fct-signature": "module",
        "fct-source": "src/HaskHOL-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "This module is the one to import for users looking to include the entirety of the core of the HaskHOL proof system It re-exports all of the core sub-modules in addition to number of overloaded functions that work with HOLTermRep and HOLTypeRep representations for convenience reasons",
        "hierarchy": "HaskHOL Core",
        "module": "HaskHOL.Core",
        "name": "Core",
        "normalized": "",
        "package": "haskhol-core",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:makeOverloadable",
      "description": {
        "fct-descr": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003emakeOverloadable\u003c/a\u003e\u003c/code\u003e to overload it for all valid type\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTypeRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e ty -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core.html#makeOverloadable",
        "fct-type": "function",
        "title": "makeOverloadable"
      },
      "index": {
        "description": "redefinition of makeOverloadable to overload it for all valid type representations as defined by HOLTypeRep",
        "hierarchy": "HaskHOL Core",
        "module": "HaskHOL.Core",
        "name": "makeOverloadable",
        "normalized": "String-\u003ea-\u003eHOL Theory b()",
        "package": "haskhol-core",
        "partial": "Overloadable",
        "signature": "String-\u003ety-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:newAxiom",
      "description": {
        "fct-descr": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003enewAxiom\u003c/a\u003e\u003c/code\u003e to overload it for all valid term\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e tm -\u003e HOL Theory thry HOLThm",
        "fct-source": "src/HaskHOL-Core.html#newAxiom",
        "fct-type": "function",
        "title": "newAxiom"
      },
      "index": {
        "description": "redefinition of newAxiom to overload it for all valid term representations as defined by HOLTermRep",
        "hierarchy": "HaskHOL Core",
        "module": "HaskHOL.Core",
        "name": "newAxiom",
        "normalized": "String-\u003ea-\u003eHOL Theory b HOLThm",
        "package": "haskhol-core",
        "partial": "Axiom",
        "signature": "String-\u003etm-\u003eHOL Theory thry HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:newBasicDefinition",
      "description": {
        "fct-descr": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003enewBasicDefinition\u003c/a\u003e\u003c/code\u003e to overload it for all valid term\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core",
        "fct-package": "haskhol-core",
        "fct-signature": "tm -\u003e HOL Theory thry HOLThm",
        "fct-source": "src/HaskHOL-Core.html#newBasicDefinition",
        "fct-type": "function",
        "title": "newBasicDefinition"
      },
      "index": {
        "description": "redefinition of newBasicDefinition to overload it for all valid term representations as defined by HOLTermRep",
        "hierarchy": "HaskHOL Core",
        "module": "HaskHOL.Core",
        "name": "newBasicDefinition",
        "normalized": "a-\u003eHOL Theory b HOLThm",
        "package": "haskhol-core",
        "partial": "Basic Definition",
        "signature": "tm-\u003eHOL Theory thry HOLThm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:newConstant",
      "description": {
        "fct-descr": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003enewConstant\u003c/a\u003e\u003c/code\u003e to overload it for all valid term\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e ty -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core.html#newConstant",
        "fct-type": "function",
        "title": "newConstant"
      },
      "index": {
        "description": "redefinition of newConstant to overload it for all valid term representations as defined by HOLTermRep",
        "hierarchy": "HaskHOL Core",
        "module": "HaskHOL.Core",
        "name": "newConstant",
        "normalized": "String-\u003ea-\u003eHOL Theory b()",
        "package": "haskhol-core",
        "partial": "Constant",
        "signature": "String-\u003ety-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:newTypeAbbrev",
      "description": {
        "fct-descr": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003enewTypeAbbrev\u003c/a\u003e\u003c/code\u003e to overload it for all valid type\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTypeRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e ty -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core.html#newTypeAbbrev",
        "fct-type": "function",
        "title": "newTypeAbbrev"
      },
      "index": {
        "description": "redefinition of newTypeAbbrev to overload it for all valid type representations as defined by HOLTypeRep",
        "hierarchy": "HaskHOL Core",
        "module": "HaskHOL.Core",
        "name": "newTypeAbbrev",
        "normalized": "String-\u003ea-\u003eHOL Theory b()",
        "package": "haskhol-core",
        "partial": "Type Abbrev",
        "signature": "String-\u003ety-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:overloadInterface",
      "description": {
        "fct-descr": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003eoverloadInterface\u003c/a\u003e\u003c/code\u003e to overload it for all valid term\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e tm -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core.html#overloadInterface",
        "fct-type": "function",
        "title": "overloadInterface"
      },
      "index": {
        "description": "redefinition of overloadInterface to overload it for all valid term representations as defined by HOLTermRep",
        "hierarchy": "HaskHOL Core",
        "module": "HaskHOL.Core",
        "name": "overloadInterface",
        "normalized": "String-\u003ea-\u003eHOL Theory b()",
        "package": "haskhol-core",
        "partial": "Interface",
        "signature": "String-\u003etm-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:overrideInterface",
      "description": {
        "fct-descr": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003eoverrideInterface\u003c/a\u003e\u003c/code\u003e to overload it for all valid term\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e tm -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core.html#overrideInterface",
        "fct-type": "function",
        "title": "overrideInterface"
      },
      "index": {
        "description": "redefinition of overrideInterface to overload it for all valid term representations as defined by HOLTermRep",
        "hierarchy": "HaskHOL Core",
        "module": "HaskHOL.Core",
        "name": "overrideInterface",
        "normalized": "String-\u003ea-\u003eHOL Theory b()",
        "package": "haskhol-core",
        "partial": "Interface",
        "signature": "String-\u003etm-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:prioritizeOverload",
      "description": {
        "fct-descr": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003eprioritizeOverload\u003c/a\u003e\u003c/code\u003e to overload it for all valid type\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTypeRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core",
        "fct-package": "haskhol-core",
        "fct-signature": "ty -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core.html#prioritizeOverload",
        "fct-type": "function",
        "title": "prioritizeOverload"
      },
      "index": {
        "description": "redefinition of prioritizeOverload to overload it for all valid type representations as defined by HOLTypeRep",
        "hierarchy": "HaskHOL Core",
        "module": "HaskHOL.Core",
        "name": "prioritizeOverload",
        "normalized": "a-\u003eHOL Theory b()",
        "package": "haskhol-core",
        "partial": "Overload",
        "signature": "ty-\u003eHOL Theory thry()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:reduceInterface",
      "description": {
        "fct-descr": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003ereduceInterface\u003c/a\u003e\u003c/code\u003e to overload it for all valid term\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HaskHOL.Core",
        "fct-package": "haskhol-core",
        "fct-signature": "String -\u003e tm -\u003e HOL Theory thry ()",
        "fct-source": "src/HaskHOL-Core.html#reduceInterface",
        "fct-type": "function",
        "title": "reduceInterface"
      },
      "index": {
        "description": "redefinition of reduceInterface to overload it for all valid term representations as defined by HOLTermRep",
        "hierarchy": "HaskHOL Core",
        "module": "HaskHOL.Core",
        "name": "reduceInterface",
        "normalized": "String-\u003ea-\u003eHOL Theory b()",
        "package": "haskhol-core",
        "partial": "Interface",
        "signature": "String-\u003etm-\u003eHOL Theory thry()"
      }
    }
  }
]