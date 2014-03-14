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
        "word": "haskhol-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines common utility functions that depend on data types\n  introduced by HaskHOL. See the \u003ca\u003eHaskHOL.Core.Lib\u003c/a\u003e module for utility functions\n  that do not have this dependence.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "Basics",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Basics.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines common utility functions that depend on data types introduced by HaskHOL See the HaskHOL.Core.Lib module for utility functions that do not have this dependence",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "Basics",
          "package": "haskhol-core",
          "partial": "Basics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternally, \u003ccode\u003e\u003ca\u003eNet\u003c/a\u003e\u003c/code\u003es are represented with a tree structure; each node has a list\n  of labeled branches and a list of values.  The node labels are generated via\n  the following guidelines:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Flattening of combinations favors the left hand side such that the head of \n    an application is looked at first.\n\u003c/li\u003e\u003cli\u003e If the head of an application is variable, the whole term is considered \n    variable.\n\u003c/li\u003e\u003cli\u003e Type abstractions and type combinations are effectively treated as local \n    constants, though they do have their own node lable representations to avoid\n    any potential issues with user provided variable lists for \u003ccode\u003eenter\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Matching is conservative, such that all matching values will be returned, \n    but some non-matching values may be returned.  For example, a pattern term \n    of the form \u003ccode\u003ex `op` x\u003c/code\u003e will match any term of the form \u003ccode\u003ea `op` b\u003c/code\u003e \n    regardless of the values of \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "Net",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Basics-Nets.html#Net",
          "type": "data"
        },
        "index": {
          "description": "Internally Net are represented with tree structure each node has list of labeled branches and list of values The node labels are generated via the following guidelines Flattening of combinations favors the left hand side such that the head of an application is looked at first If the head of an application is variable the whole term is considered variable Type abstractions and type combinations are effectively treated as local constants though they do have their own node lable representations to avoid any potential issues with user provided variable lists for enter Matching is conservative such that all matching values will be returned but some non-matching values may be returned For example pattern term of the form op will match any term of the form op regardless of the values of and",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "Net",
          "package": "haskhol-core",
          "partial": "Net",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#t:Net"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlpha conversion for term abstractions.  Renames a bound variable to match\n  the name of a provided variable.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e First term is not a variable.\n\u003c/li\u003e\u003cli\u003e Second term is not an abstraction.\n\u003c/li\u003e\u003cli\u003e The types of the variable and bound variable do no agree.\n\u003c/li\u003e\u003cli\u003e The variable is free in the body of the abstraction.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "alpha",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e Either String HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#alpha",
          "type": "function"
        },
        "index": {
          "description": "Alpha conversion for term abstractions Renames bound variable to match the name of provided variable Fails with Left in the following cases First term is not variable Second term is not an abstraction The types of the variable and bound variable do no agree The variable is free in the body of the abstraction",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "alpha",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
          "package": "haskhol-core",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlpha conversion for type abstractions.  Renames a bound type variable to\n  match the name of a provided type variable.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the \n  following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The provided type is not a small type variable.\n\u003c/li\u003e\u003cli\u003e The provided term is not a type abstraction.\n\u003c/li\u003e\u003cli\u003e The type is free in the body of the type abstraction.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "alphaTyabs",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLTerm -\u003e Either String HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#alphaTyabs",
          "type": "function"
        },
        "index": {
          "description": "Alpha conversion for type abstractions Renames bound type variable to match the name of provided type variable Fails with Left in the following cases The provided type is not small type variable The provided term is not type abstraction The type is free in the body of the type abstraction",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "alphaTyabs",
          "normalized": "HOLType-\u003eHOLTerm-\u003eEither String HOLTerm",
          "package": "haskhol-core",
          "partial": "Tyabs",
          "signature": "HOLType-\u003eHOLTerm-\u003eEither String HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:alphaTyabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlpha conversion for universal types.  Renames a bound type variable to match\n  the name of a provided type variable.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following\n  cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e First type is not a small type variable.\n\u003c/li\u003e\u003cli\u003e Second type is not a universal type.\n\u003c/li\u003e\u003cli\u003e The type variable is free in the body of the universal type.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "alphaUtype",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLType -\u003e Either String HOLType",
          "source": "src/HaskHOL-Core-Basics.html#alphaUtype",
          "type": "function"
        },
        "index": {
          "description": "Alpha conversion for universal types Renames bound type variable to match the name of provided type variable Fails with Left in the following cases First type is not small type variable Second type is not universal type The type variable is free in the body of the universal type",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "alphaUtype",
          "normalized": "HOLType-\u003eHOLType-\u003eEither String HOLType",
          "package": "haskhol-core",
          "partial": "Utype",
          "signature": "HOLType-\u003eHOLType-\u003eEither String HOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:alphaUtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003elistMkBinop\u003c/a\u003e\u003c/code\u003e.  Destructs a complex combination built with\n  a binary operator into its list of arguments.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "binops",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e [HOLTerm]",
          "source": "src/HaskHOL-Core-Basics.html#binops",
          "type": "function"
        },
        "index": {
          "description": "The inverse of listMkBinop Destructs complex combination built with binary operator into its list of arguments",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "binops",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003e[HOLTerm]",
          "package": "haskhol-core",
          "signature": "HOLTerm-\u003eHOLTerm-\u003e[HOLTerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:binops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the bound term of an abstraction.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n  provided term is not an abstraction.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "bndvar",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#bndvar",
          "type": "function"
        },
        "index": {
          "description": "Returns the bound term of an abstraction Fails with Nothing if the provided term is not an abstraction",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "bndvar",
          "normalized": "HOLTerm-\u003eMaybe HOLTerm",
          "package": "haskhol-core",
          "signature": "HOLTerm-\u003eMaybe HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:bndvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the bound type of a type abstraction.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n  provided term is not a type abstraction.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "bndvarTyabs",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe HOLType",
          "source": "src/HaskHOL-Core-Basics.html#bndvarTyabs",
          "type": "function"
        },
        "index": {
          "description": "Returns the bound type of type abstraction Fails with Nothing if the provided term is not type abstraction",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "bndvarTyabs",
          "normalized": "HOLTerm-\u003eMaybe HOLType",
          "package": "haskhol-core",
          "partial": "Tyabs",
          "signature": "HOLTerm-\u003eMaybe HOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:bndvarTyabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the body term of an abstraction.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n  provided term is not an abstraction.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "body",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#body",
          "type": "function"
        },
        "index": {
          "description": "Returns the body term of an abstraction Fails with Nothing if the provided term is not an abstraction",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "body",
          "normalized": "HOLTerm-\u003eMaybe HOLTerm",
          "package": "haskhol-core",
          "signature": "HOLTerm-\u003eMaybe HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the body term of a type abstraction.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n  provided term is not a type abstraction.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "bodyTyabs",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#bodyTyabs",
          "type": "function"
        },
        "index": {
          "description": "Returns the body term of type abstraction Fails with Nothing if the provided term is not type abstraction",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "bodyTyabs",
          "normalized": "HOLTerm-\u003eMaybe HOLTerm",
          "package": "haskhol-core",
          "partial": "Tyabs",
          "signature": "HOLTerm-\u003eMaybe HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:bodyTyabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of propositions in a complex conjunction.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "conjuncts",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e [HOLTerm]",
          "source": "src/HaskHOL-Core-Basics.html#conjuncts",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of propositions in complex conjunction",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "conjuncts",
          "normalized": "HOLTerm-\u003e[HOLTerm]",
          "package": "haskhol-core",
          "signature": "HOLTerm-\u003e[HOLTerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:conjuncts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a binary application returning its left and right arguments.  Fails \n  with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not a binary application with the \n  specified operator name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destBinary",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destBinary",
          "type": "function"
        },
        "index": {
          "description": "Destructs binary application returning its left and right arguments Fails with Nothing if the provided term is not binary application with the specified operator name",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destBinary",
          "normalized": "String-\u003eHOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Binary",
          "signature": "String-\u003eHOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs an abstraction of specified binder name into its bound variable and\n  its body term.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not an\n  abstraction with the specified binder name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destBinder",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destBinder",
          "type": "function"
        },
        "index": {
          "description": "Destructs an abstraction of specified binder name into its bound variable and its body term Fails with Nothing if the provided term is not an abstraction with the specified binder name",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destBinder",
          "normalized": "String-\u003eHOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Binder",
          "signature": "String-\u003eHOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003edestBinary\u003c/a\u003e\u003c/code\u003e that tests for operator terms, not strings.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destBinop",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destBinop",
          "type": "function"
        },
        "index": {
          "description": "version of destBinary that tests for operator terms not strings",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destBinop",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Binop",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor for boolean conjunctions.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destConj",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destConj",
          "type": "function"
        },
        "index": {
          "description": "Destructor for boolean conjunctions",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destConj",
          "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Conj",
          "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destConj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor for list \u003ccode\u003eCONS\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destCons",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destCons",
          "type": "function"
        },
        "index": {
          "description": "Destructor for list CONS",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destCons",
          "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Cons",
          "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor for boolean disjunctions.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destDisj",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destDisj",
          "type": "function"
        },
        "index": {
          "description": "Destructor for boolean disjunctions",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destDisj",
          "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Disj",
          "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destDisj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor for existential term quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destExists",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destExists",
          "type": "function"
        },
        "index": {
          "description": "Destructor for existential term quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destExists",
          "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Exists",
          "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor for universal term quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destForall",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destForall",
          "type": "function"
        },
        "index": {
          "description": "Destructor for universal term quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destForall",
          "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Forall",
          "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destForall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor for generalized abstractions.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided\n  term is not an abstraction or generalized abstraction.  See \u003ccode\u003e\u003ca\u003emkGAbs\u003c/a\u003e\u003c/code\u003e for more \n  details.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destGAbs",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destGAbs",
          "type": "function"
        },
        "index": {
          "description": "Destructor for generalized abstractions Fails with Nothing if the provided term is not an abstraction or generalized abstraction See mkGAbs for more details",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destGAbs",
          "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "package": "haskhol-core",
          "partial": "GAbs",
          "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destGAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor for boolean implications.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destImp",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destImp",
          "type": "function"
        },
        "index": {
          "description": "Destructor for boolean implications",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destImp",
          "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Imp",
          "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destImp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a let binding term into a list of its name and value pairs and its\n  body term.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if internally the term is not of the form\n\u003c/p\u003e\u003cpre\u003e LET (x1, v1) ... (xn, vn) LET_END\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destLet",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe ([(HOLTerm, HOLTerm)], HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destLet",
          "type": "function"
        },
        "index": {
          "description": "Destructs let binding term into list of its name and value pairs and its body term Fails with Nothing if internally the term is not of the form LET x1 v1 xn vn LET END",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destLet",
          "normalized": "HOLTerm-\u003eMaybe([(HOLTerm,HOLTerm)],HOLTerm)",
          "package": "haskhol-core",
          "partial": "Let",
          "signature": "HOLTerm-\u003eMaybe([(HOLTerm,HOLTerm)],HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor for list terms.  Returns a list of the elements in the term.  Fails\n  with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if internall the term is not of the form\n\u003c/p\u003e\u003cpre\u003e x1 `CONS` .... xn `CONS` NIL\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destList",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe [HOLTerm]",
          "source": "src/HaskHOL-Core-Basics.html#destList",
          "type": "function"
        },
        "index": {
          "description": "Destructor for list terms Returns list of the elements in the term Fails with Nothing if internall the term is not of the form x1 CONS xn CONS NIL",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destList",
          "normalized": "HOLTerm-\u003eMaybe[HOLTerm]",
          "package": "haskhol-core",
          "partial": "List",
          "signature": "HOLTerm-\u003eMaybe[HOLTerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor for boolean negations.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destNeg",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#destNeg",
          "type": "function"
        },
        "index": {
          "description": "Destructor for boolean negations",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destNeg",
          "normalized": "HOLTerm-\u003eMaybe HOLTerm",
          "package": "haskhol-core",
          "partial": "Neg",
          "signature": "HOLTerm-\u003eMaybe HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a numeral term to an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if internally\n  the term is not of the form\n\u003c/p\u003e\u003cpre\u003e NUMERAL bits _0, where bits is a series of BIT0 and BIT1 terms  \n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destNumeral",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe Integer",
          "source": "src/HaskHOL-Core-Basics.html#destNumeral",
          "type": "function"
        },
        "index": {
          "description": "Converts numeral term to an Integer Fails with Nothing if internally the term is not of the form NUMERAL bits where bits is series of BIT0 and BIT1 terms",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destNumeral",
          "normalized": "HOLTerm-\u003eMaybe Integer",
          "package": "haskhol-core",
          "partial": "Numeral",
          "signature": "HOLTerm-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destNumeral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor for term-level universal type quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destTyAll",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLType, HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destTyAll",
          "type": "function"
        },
        "index": {
          "description": "Destructor for term-level universal type quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destTyAll",
          "normalized": "HOLTerm-\u003eMaybe(HOLType,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Ty All",
          "signature": "HOLTerm-\u003eMaybe(HOLType,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destTyAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a type abstraction of specified binder name into its bound type\n  variable and its body term.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not\n  a type abstraction with the specified type binder name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destTyBinder",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLTerm -\u003e Maybe (HOLType, HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destTyBinder",
          "type": "function"
        },
        "index": {
          "description": "Destructs type abstraction of specified binder name into its bound type variable and its body term Fails with Nothing if the provided term is not type abstraction with the specified type binder name",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destTyBinder",
          "normalized": "String-\u003eHOLTerm-\u003eMaybe(HOLType,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Ty Binder",
          "signature": "String-\u003eHOLTerm-\u003eMaybe(HOLType,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destTyBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor for term-level existential type quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destTyEx",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLType, HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destTyEx",
          "type": "function"
        },
        "index": {
          "description": "Destructor for term-level existential type quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destTyEx",
          "normalized": "HOLTerm-\u003eMaybe(HOLType,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Ty Ex",
          "signature": "HOLTerm-\u003eMaybe(HOLType,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destTyEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor for unique, existential quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "destUExists",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#destUExists",
          "type": "function"
        },
        "index": {
          "description": "Destructor for unique existential quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "destUExists",
          "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "package": "haskhol-core",
          "partial": "UExists",
          "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:destUExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of propositions in a complex disjunction.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "disjuncts",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e [HOLTerm]",
          "source": "src/HaskHOL-Core-Basics.html#disjuncts",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of propositions in complex disjunction",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "disjuncts",
          "normalized": "HOLTerm-\u003e[HOLTerm]",
          "package": "haskhol-core",
          "signature": "HOLTerm-\u003e[HOLTerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:disjuncts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches a term for a subterm that satisfies a given predicate, returning\n  a string that indicates the path to that subterm:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e'b'\u003c/code\u003e - Take the body of an abstraction.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e't'\u003c/code\u003e - Take the body of a type abstraction.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e'l'\u003c/code\u003e - Take the left path in a term combination.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e'r'\u003c/code\u003e - Take the right path in a term combination.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e'c'\u003c/code\u003e - Take the body in a type combination.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no satisfying subterm.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "findPath",
          "package": "haskhol-core",
          "signature": "(HOLTerm -\u003e Bool) -\u003e HOLTerm -\u003e Maybe String",
          "source": "src/HaskHOL-Core-Basics.html#findPath",
          "type": "function"
        },
        "index": {
          "description": "Searches term for subterm that satisfies given predicate returning string that indicates the path to that subterm Take the body of an abstraction Take the body of type abstraction Take the left path in term combination Take the right path in term combination Take the body in type combination Fails with Nothing if there is no satisfying subterm",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "findPath",
          "normalized": "(HOLTerm-\u003eBool)-\u003eHOLTerm-\u003eMaybe String",
          "package": "haskhol-core",
          "partial": "Path",
          "signature": "(HOLTerm-\u003eBool)-\u003eHOLTerm-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:findPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches a term for a subterm that satisfies a given predicate.  Fails with\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no such term is found.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "findTerm",
          "package": "haskhol-core",
          "signature": "(HOLTerm -\u003e Bool) -\u003e HOLTerm -\u003e Maybe HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#findTerm",
          "type": "function"
        },
        "index": {
          "description": "Searches term for subterm that satisfies given predicate Fails with Nothing if no such term is found",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "findTerm",
          "normalized": "(HOLTerm-\u003eBool)-\u003eHOLTerm-\u003eMaybe HOLTerm",
          "package": "haskhol-core",
          "partial": "Term",
          "signature": "(HOLTerm-\u003eBool)-\u003eHOLTerm-\u003eMaybe HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:findTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches a term for all unique subterms that satisfy a given predicate.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "findTerms",
          "package": "haskhol-core",
          "signature": "(HOLTerm -\u003e Bool) -\u003e HOLTerm -\u003e [HOLTerm]",
          "source": "src/HaskHOL-Core-Basics.html#findTerms",
          "type": "function"
        },
        "index": {
          "description": "Searches term for all unique subterms that satisfy given predicate",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "findTerms",
          "normalized": "(HOLTerm-\u003eBool)-\u003eHOLTerm-\u003e[HOLTerm]",
          "package": "haskhol-core",
          "partial": "Terms",
          "signature": "(HOLTerm-\u003eBool)-\u003eHOLTerm-\u003e[HOLTerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:findTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the subterm found by following a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e path as produced by \n  \u003ccode\u003e\u003ca\u003efindPath\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term does not a suitable \n  subterm for the given path.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "followPath",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLTerm -\u003e Maybe HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#followPath",
          "type": "function"
        },
        "index": {
          "description": "Returns the subterm found by following String path as produced by findPath Fails with Nothing if the provided term does not suitable subterm for the given path",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "followPath",
          "normalized": "String-\u003eHOLTerm-\u003eMaybe HOLTerm",
          "package": "haskhol-core",
          "partial": "Path",
          "signature": "String-\u003eHOLTerm-\u003eMaybe HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:followPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to check if the first term is free in the second modulo\n  alpha-equivalence.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "freeIn",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#freeIn",
          "type": "function"
        },
        "index": {
          "description": "Predicate to check if the first term is free in the second modulo alpha-equivalence",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "freeIn",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "In",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:freeIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003egenVarWithName\u003c/a\u003e\u003c/code\u003e that defaults to the prefix \"_\".\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "genVar",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#genVar",
          "type": "function"
        },
        "index": {
          "description": "version of genVarWithName that defaults to the prefix",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "genVar",
          "normalized": "HOLType-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Var",
          "signature": "HOLType-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:genVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a new term variable consisting of a given prefix and the next value\n  in the fresh term counter.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "genVarWithName",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLType -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#genVarWithName",
          "type": "function"
        },
        "index": {
          "description": "Generates new term variable consisting of given prefix and the next value in the fresh term counter",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "genVarWithName",
          "normalized": "String-\u003eHOLType-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Var With Name",
          "signature": "String-\u003eHOLType-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:genVarWithName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate that tests if a term is a binary application whose operator has the\n  given name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isBinary",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isBinary",
          "type": "function"
        },
        "index": {
          "description": "Predicate that tests if term is binary application whose operator has the given name",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isBinary",
          "normalized": "String-\u003eHOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Binary",
          "signature": "String-\u003eHOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate that tests if a term is an abstraction of specified binder name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isBinder",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isBinder",
          "type": "function"
        },
        "index": {
          "description": "Predicate that tests if term is an abstraction of specified binder name",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isBinder",
          "normalized": "String-\u003eHOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Binder",
          "signature": "String-\u003eHOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eisBinary\u003c/a\u003e\u003c/code\u003e that tests for operator terms, not strings.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isBinop",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isBinop",
          "type": "function"
        },
        "index": {
          "description": "version of isBinary that tests for operator terms not strings",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isBinop",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Binop",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for boolean conjunctions.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isConj",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isConj",
          "type": "function"
        },
        "index": {
          "description": "Predicate for boolean conjunctions",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isConj",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Conj",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isConj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for list \u003ccode\u003eCONS\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isCons",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isCons",
          "type": "function"
        },
        "index": {
          "description": "Predicate for list CONS",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isCons",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Cons",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for boolean disjunctions.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isDisj",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isDisj",
          "type": "function"
        },
        "index": {
          "description": "Predicate for boolean disjunctions",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isDisj",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Disj",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isDisj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for existential term quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isExists",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isExists",
          "type": "function"
        },
        "index": {
          "description": "Predicate for existential term quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isExists",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Exists",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for universal term quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isForall",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isForall",
          "type": "function"
        },
        "index": {
          "description": "Predicate for universal term quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isForall",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Forall",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isForall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for generalized abstractions.  See \u003ccode\u003e\u003ca\u003emkGAbs\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isGAbs",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isGAbs",
          "type": "function"
        },
        "index": {
          "description": "Predicate for generalized abstractions See mkGAbs for more details",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isGAbs",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "GAbs",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isGAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for boolean implications.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isImp",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isImp",
          "type": "function"
        },
        "index": {
          "description": "Predicate for boolean implications",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isImp",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Imp",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isImp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for let binding terms.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isLet",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isLet",
          "type": "function"
        },
        "index": {
          "description": "Predicate for let binding terms",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isLet",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Let",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for list terms.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isList",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isList",
          "type": "function"
        },
        "index": {
          "description": "Predicate for list terms",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isList",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "List",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for boolean negations.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isNeg",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isNeg",
          "type": "function"
        },
        "index": {
          "description": "Predicate for boolean negations",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isNeg",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Neg",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for term-level universal type quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isTyAll",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isTyAll",
          "type": "function"
        },
        "index": {
          "description": "Predicate for term-level universal type quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isTyAll",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Ty All",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isTyAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate that tests if a term is an abtraction of a specified type binder\n  name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isTyBinder",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isTyBinder",
          "type": "function"
        },
        "index": {
          "description": "Predicate that tests if term is an abtraction of specified type binder name",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isTyBinder",
          "normalized": "String-\u003eHOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Ty Binder",
          "signature": "String-\u003eHOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isTyBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for term-level existential type quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isTyEx",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isTyEx",
          "type": "function"
        },
        "index": {
          "description": "Predicate for term-level existential type quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isTyEx",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Ty Ex",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isTyEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for unique, existential quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "isUExists",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#isUExists",
          "type": "function"
        },
        "index": {
          "description": "Predicate for unique existential quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "isUExists",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "UExists",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:isUExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a complex abstraction that represents a term with multiple\n  bound variables.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if any internal call to \u003ccode\u003e\u003ca\u003emkAbs\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkAbs",
          "package": "haskhol-core",
          "signature": "[HOLTerm] -\u003e HOLTerm -\u003e Either String HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#listMkAbs",
          "type": "function"
        },
        "index": {
          "description": "Constructs complex abstraction that represents term with multiple bound variables Fails with Left if any internal call to mkAbs fails",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkAbs",
          "normalized": "[HOLTerm]-\u003eHOLTerm-\u003eEither String HOLTerm",
          "package": "haskhol-core",
          "partial": "Mk Abs",
          "signature": "[HOLTerm]-\u003eHOLTerm-\u003eEither String HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIteratively builds a complex combination using \u003ccode\u003e\u003ca\u003emkBinop\u003c/a\u003e\u003c/code\u003e, i.e.\n\u003c/p\u003e\u003cpre\u003e listMkBinop (/\\) [T, F, T] === T /\\ F /\\ T\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkBinop",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e [HOLTerm] -\u003e Either String HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#listMkBinop",
          "type": "function"
        },
        "index": {
          "description": "Iteratively builds complex combination using mkBinop i.e listMkBinop",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkBinop",
          "normalized": "HOLTerm-\u003e[HOLTerm]-\u003eEither String HOLTerm",
          "package": "haskhol-core",
          "partial": "Mk Binop",
          "signature": "HOLTerm-\u003e[HOLTerm]-\u003eEither String HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a complex combination that represents the application of a \n  function to a list of arguments.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if any internal call to \n  \u003ccode\u003e\u003ca\u003emkComb\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkComb",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e [HOLTerm] -\u003e Either String HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#listMkComb",
          "type": "function"
        },
        "index": {
          "description": "Constructs complex combination that represents the application of function to list of arguments Fails with Left if any internal call to mkComb fails",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkComb",
          "normalized": "HOLTerm-\u003e[HOLTerm]-\u003eEither String HOLTerm",
          "package": "haskhol-core",
          "partial": "Mk Comb",
          "signature": "HOLTerm-\u003e[HOLTerm]-\u003eEither String HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a complex conjunction from a given list of propositions.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkConj",
          "package": "haskhol-core",
          "signature": "[HOLTerm] -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#listMkConj",
          "type": "function"
        },
        "index": {
          "description": "Constructs complex conjunction from given list of propositions",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkConj",
          "normalized": "[HOLTerm]-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Mk Conj",
          "signature": "[HOLTerm]-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkConj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a complex disjunction from a given list of propositions.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkDisj",
          "package": "haskhol-core",
          "signature": "[HOLTerm] -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#listMkDisj",
          "type": "function"
        },
        "index": {
          "description": "Constructs complex disjunction from given list of propositions",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkDisj",
          "normalized": "[HOLTerm]-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Mk Disj",
          "signature": "[HOLTerm]-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkDisj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003elistMkAbs\u003c/a\u003e\u003c/code\u003e for existential term quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkExists",
          "package": "haskhol-core",
          "signature": "[HOLTerm] -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#listMkExists",
          "type": "function"
        },
        "index": {
          "description": "specific version of listMkAbs for existential term quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkExists",
          "normalized": "[HOLTerm]-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Mk Exists",
          "signature": "[HOLTerm]-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003elistMkAbs\u003c/a\u003e\u003c/code\u003e for universal term quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkForall",
          "package": "haskhol-core",
          "signature": "[HOLTerm] -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#listMkForall",
          "type": "function"
        },
        "index": {
          "description": "specific version of listMkAbs for universal term quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkForall",
          "normalized": "[HOLTerm]-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Mk Forall",
          "signature": "[HOLTerm]-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkForall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003elistMkAbs\u003c/a\u003e\u003c/code\u003e for general abstractions.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkGAbs",
          "package": "haskhol-core",
          "signature": "[HOLTerm] -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#listMkGAbs",
          "type": "function"
        },
        "index": {
          "description": "specific version of listMkAbs for general abstractions",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkGAbs",
          "normalized": "[HOLTerm]-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Mk GAbs",
          "signature": "[HOLTerm]-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkGAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn iterative version of \u003ccode\u003e\u003ca\u003emkIComb\u003c/a\u003e\u003c/code\u003e that builds a complex combination given a\n  constant name and a list of arguments, attempting to find a correct\n  instantiation at every step.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The provided name is not a currently defiend constant.\n\u003c/li\u003e\u003cli\u003e Any internal call to mkIComb fails.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkIComb",
          "package": "haskhol-core",
          "signature": "String -\u003e [HOLTerm] -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#listMkIComb",
          "type": "function"
        },
        "index": {
          "description": "An iterative version of mkIComb that builds complex combination given constant name and list of arguments attempting to find correct instantiation at every step Throws HOLException in the following cases The provided name is not currently defiend constant Any internal call to mkIComb fails",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "listMkIComb",
          "normalized": "String-\u003e[HOLTerm]-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Mk IComb",
          "signature": "String-\u003e[HOLTerm]-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:listMkIComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a list of term variables of a given prefix.  Names are adjusted\n  as necessary with \u003ccode\u003e\u003ca\u003evariant\u003c/a\u003e\u003c/code\u003e to avoid clashing with the provided list of term\n  variables.  The number and types of the resultant variables is directed by \n  the provided list of types, i.e.\n\u003c/p\u003e\u003cpre\u003e mkArgs \"x\" avoids [ty1, ... tyn] === [x1:ty1, ..., xn:tyn] where {x1, ..., xn} are not elements of avoids\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkArgs",
          "package": "haskhol-core",
          "signature": "String -\u003e [HOLTerm] -\u003e [HOLType] -\u003e [HOLTerm]",
          "source": "src/HaskHOL-Core-Basics.html#mkArgs",
          "type": "function"
        },
        "index": {
          "description": "Constructs list of term variables of given prefix Names are adjusted as necessary with variant to avoid clashing with the provided list of term variables The number and types of the resultant variables is directed by the provided list of types i.e mkArgs avoids ty1 tyn x1 ty1 xn tyn where x1 xn are not elements of avoids",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkArgs",
          "normalized": "String-\u003e[HOLTerm]-\u003e[HOLType]-\u003e[HOLTerm]",
          "package": "haskhol-core",
          "partial": "Args",
          "signature": "String-\u003e[HOLTerm]-\u003e[HOLType]-\u003e[HOLTerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a binary application given a constant name and two argument terms.\n  Note that no instantiation is performed, thus the constant must be monomorphic\n  or the provided arguments must match the constant's general type.  Throws a\n  \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if any of the internal calls to \u003ccode\u003e\u003ca\u003emkConst\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emkComb\u003c/a\u003e\u003c/code\u003e fail.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkBinary",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkBinary",
          "type": "function"
        },
        "index": {
          "description": "Constructs binary application given constant name and two argument terms Note that no instantiation is performed thus the constant must be monomorphic or the provided arguments must match the constant general type Throws HOLException if any of the internal calls to mkConst or mkComb fail",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkBinary",
          "normalized": "String-\u003eHOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Binary",
          "signature": "String-\u003eHOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an abstraction given a binder name and two argument terms.  Throws\n  a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if any of the internal calls to \u003ccode\u003e\u003ca\u003emkConst\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emkAbs\u003c/a\u003e\u003c/code\u003e, or \n  \u003ccode\u003e\u003ca\u003emkComb\u003c/a\u003e\u003c/code\u003e fail.\n\u003c/p\u003e\u003cp\u003eNote that the given string can actually be any constant name of type \n  \u003ccode\u003e(A -\u003e *) -\u003e *\u003c/code\u003e, such that a well-typed term of the form \u003ccode\u003ec (\\x . t)\u003c/code\u003e can be\n  produced.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkBinder",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkBinder",
          "type": "function"
        },
        "index": {
          "description": "Constructs an abstraction given binder name and two argument terms Throws HOLException if any of the internal calls to mkConst mkAbs or mkComb fail Note that the given string can actually be any constant name of type such that well-typed term of the form can be produced",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkBinder",
          "normalized": "String-\u003eHOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Binder",
          "signature": "String-\u003eHOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emkBinary\u003c/a\u003e\u003c/code\u003e that accepts the operator as a pre-constructed term.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkBinop",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e HOLTerm -\u003e Either String HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkBinop",
          "type": "function"
        },
        "index": {
          "description": "version of mkBinary that accepts the operator as pre-constructed term",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkBinop",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
          "package": "haskhol-core",
          "partial": "Binop",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for boolean conjunctions.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the internal\n  call to \u003ccode\u003e\u003ca\u003emkBinary\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkConj",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkConj",
          "type": "function"
        },
        "index": {
          "description": "Constructor for boolean conjunctions Throws HOLException if the internal call to mkBinary fails",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkConj",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Conj",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkConj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for boolean disjunctions.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the internal\n  call to \u003ccode\u003e\u003ca\u003emkBinary\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkDisj",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkDisj",
          "type": "function"
        },
        "index": {
          "description": "Constructor for boolean disjunctions Throws HOLException if the internal call to mkBinary fails",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkDisj",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Disj",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkDisj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for existential term quantification.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if \n  the internal call to \u003ccode\u003e\u003ca\u003emkBinder\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkExists",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkExists",
          "type": "function"
        },
        "index": {
          "description": "Constructor for existential term quantification Throws HOLException if the internal call to mkBinder fails",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkExists",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Exists",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for universal term quantification.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the\n  internal call to \u003ccode\u003e\u003ca\u003emkBinder\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkForall",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkForall",
          "type": "function"
        },
        "index": {
          "description": "Constructor for universal term quantification Throws HOLException if the internal call to mkBinder fails",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkForall",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Forall",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkForall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for generalized abstractions.  Generalized abstractions extend\n  term abstractions to the more general of notion of a function mapping some\n  structure to some term.  This allows us to bind patterns more complicated\n  than a variable, i.e. binding pairs\n\u003c/p\u003e\u003cpre\u003e \\ (x:num, y:num) -\u003e x + y\n\u003c/pre\u003e\u003cp\u003eor lists\n\u003c/p\u003e\u003cpre\u003e \\ CONS x xs -\u003e x\n\u003c/pre\u003e\u003cp\u003eNote that in the case where the pattern to bind is simply a variable \u003ccode\u003e\u003ca\u003emkGAbs\u003c/a\u003e\u003c/code\u003e\n  just calls \u003ccode\u003e\u003ca\u003emkAbs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkGAbs",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkGAbs",
          "type": "function"
        },
        "index": {
          "description": "Constructor for generalized abstractions Generalized abstractions extend term abstractions to the more general of notion of function mapping some structure to some term This allows us to bind patterns more complicated than variable i.e binding pairs num num or lists CONS xs Note that in the case where the pattern to bind is simply variable mkGAbs just calls mkAbs",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkGAbs",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "GAbs",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkGAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emkComb\u003c/a\u003e\u003c/code\u003e that instantiates the type variables in the left hand\n  argument.  Relies internally on \u003ccode\u003e\u003ca\u003etypeMatch\u003c/a\u003e\u003c/code\u003e in order to provide a match\n  between the domain type of the function and the type of the argument.  Fails\n  with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if instantiation is impossible.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkIComb",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e Maybe HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkIComb",
          "type": "function"
        },
        "index": {
          "description": "version of mkComb that instantiates the type variables in the left hand argument Relies internally on typeMatch in order to provide match between the domain type of the function and the type of the argument Fails with Nothing if instantiation is impossible",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkIComb",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eMaybe HOLTerm",
          "package": "haskhol-core",
          "partial": "IComb",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eMaybe HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkIComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for boolean implications.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the internal\n  call to \u003ccode\u003e\u003ca\u003emkBinary\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkImp",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkImp",
          "type": "function"
        },
        "index": {
          "description": "Constructor for boolean implications Throws HOLException if the internal call to mkBinary fails",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkImp",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Imp",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkImp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an instance of a constant of the provided name and type.  Relies\n  internally on \u003ccode\u003e\u003ca\u003etypeMatch\u003c/a\u003e\u003c/code\u003e in order to provide a match between the most general\n  type of the constant and the provided type.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the\n  following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The provided string is not the name of a defined constant.\n\u003c/li\u003e\u003cli\u003e Type matching fails.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkMConst",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLType -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkMConst",
          "type": "function"
        },
        "index": {
          "description": "Constructs an instance of constant of the provided name and type Relies internally on typeMatch in order to provide match between the most general type of the constant and the provided type Throws HOLException in the following cases The provided string is not the name of defined constant Type matching fails",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkMConst",
          "normalized": "String-\u003eHOLType-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "MConst",
          "signature": "String-\u003eHOLType-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkMConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for boolean negations.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if any of the \n  internal calls to \u003ccode\u003e\u003ca\u003emkConst\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emkComb\u003c/a\u003e\u003c/code\u003e fail.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkNeg",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkNeg",
          "type": "function"
        },
        "index": {
          "description": "Constructor for boolean negations Throws HOLException if any of the internal calls to mkConst or mkComb fail",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkNeg",
          "normalized": "HOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Neg",
          "signature": "HOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for term-level universal type quantification.  Throws a \n  \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the internal call to \u003ccode\u003e\u003ca\u003emkTyBinder\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkTyAll",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkTyAll",
          "type": "function"
        },
        "index": {
          "description": "Constructor for term-level universal type quantification Throws HOLException if the internal call to mkTyBinder fails",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkTyAll",
          "normalized": "HOLType-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Ty All",
          "signature": "HOLType-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkTyAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a type abstraction given a type binder name, a type variable to\n  find, and a body term.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if any of the internal calls\n  to \u003ccode\u003e\u003ca\u003emkConst\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emkTyAbs\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003emkComb\u003c/a\u003e\u003c/code\u003e fail.\n\u003c/p\u003e\u003cp\u003eNote that the given string can actually be any constant name of type\n  \u003ccode\u003e(% 'a . *) -\u003e *\u003c/code\u003e, such that a well-typed term of the form \u003ccode\u003ec (\\\\x . t)\u003c/code\u003e can\n  be produced.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkTyBinder",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLType -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkTyBinder",
          "type": "function"
        },
        "index": {
          "description": "Constructs type abstraction given type binder name type variable to find and body term Throws HOLException if any of the internal calls to mkConst mkTyAbs or mkComb fail Note that the given string can actually be any constant name of type such that well-typed term of the form can be produced",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkTyBinder",
          "normalized": "String-\u003eHOLType-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Ty Binder",
          "signature": "String-\u003eHOLType-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkTyBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for term-level existential type quantification.  Throws a \n  \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the internal call to \u003ccode\u003e\u003ca\u003emkTyBinder\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkTyEx",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkTyEx",
          "type": "function"
        },
        "index": {
          "description": "Constructor for term-level existential type quantification Throws HOLException if the internal call to mkTyBinder fails",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkTyEx",
          "normalized": "HOLType-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Ty Ex",
          "signature": "HOLType-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkTyEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for unique, existential term quantification.  Throws a \n  \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the internal call to \u003ccode\u003e\u003ca\u003emkBinder\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "mkUExists",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#mkUExists",
          "type": "function"
        },
        "index": {
          "description": "Constructor for unique existential term quantification Throws HOLException if the internal call to mkBinder fails",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "mkUExists",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "UExists",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:mkUExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty \u003ccode\u003e\u003ca\u003eNet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "netEmpty",
          "package": "haskhol-core",
          "signature": "Net a",
          "source": "src/HaskHOL-Core-Basics-Nets.html#netEmpty",
          "type": "function"
        },
        "index": {
          "description": "The empty Net",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "netEmpty",
          "package": "haskhol-core",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:netEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a new element, paired with a pattern term, into a provided net.  The \n  first argument is a list of variables that should be treated as local \n  constants, such that only patterns with those variables at the exact same \n  position will match.  See the documentation for \u003ccode\u003e\u003ca\u003eNet\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e\u003cp\u003eNever fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "netEnter",
          "package": "haskhol-core",
          "signature": "[HOLTerm] -\u003e (HOLTerm, a) -\u003e Net a -\u003e HOL cls thry (Net a)",
          "source": "src/HaskHOL-Core-Basics-Nets.html#netEnter",
          "type": "function"
        },
        "index": {
          "description": "Inserts new element paired with pattern term into provided net The first argument is list of variables that should be treated as local constants such that only patterns with those variables at the exact same position will match See the documentation for Net for more details Never fails",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "netEnter",
          "normalized": "[HOLTerm]-\u003e(HOLTerm,a)-\u003eNet a-\u003eHOL b c(Net a)",
          "package": "haskhol-core",
          "partial": "Enter",
          "signature": "[HOLTerm]-\u003e(HOLTerm,a)-\u003eNet a-\u003eHOL cls thry(Net a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:netEnter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of all values stored in a term net that satisfy a provided\n  pattern term.  See the documentation for \u003ccode\u003e\u003ca\u003eNet\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "netLookup",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Net a -\u003e [a]",
          "source": "src/HaskHOL-Core-Basics-Nets.html#netLookup",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of all values stored in term net that satisfy provided pattern term See the documentation for Net for more details",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "netLookup",
          "normalized": "HOLTerm-\u003eNet a-\u003e[a]",
          "package": "haskhol-core",
          "partial": "Lookup",
          "signature": "HOLTerm-\u003eNet a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:netLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two term nets together.  The values for the two nets are merged,\n  maintaining order and uniqueness, with the term labels adjusted appropriately.\n  The algorithm to do so is courtesy of Don Syme via John Harrison's\n  implementation in HOL Light.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "netMerge",
          "package": "haskhol-core",
          "signature": "Net a -\u003e Net a -\u003e Net a",
          "source": "src/HaskHOL-Core-Basics-Nets.html#netMerge",
          "type": "function"
        },
        "index": {
          "description": "Merges two term nets together The values for the two nets are merged maintaining order and uniqueness with the term labels adjusted appropriately The algorithm to do so is courtesy of Don Syme via John Harrison implementation in HOL Light",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "netMerge",
          "normalized": "Net a-\u003eNet a-\u003eNet a",
          "package": "haskhol-core",
          "partial": "Merge",
          "signature": "Net a-\u003eNet a-\u003eNet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:netMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks to see if the first type occurs in the second type.  Note that the\n  predicate is also satisfied if the two types are equal.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "occursIn",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLType -\u003e Bool",
          "source": "src/HaskHOL-Core-Basics.html#occursIn",
          "type": "function"
        },
        "index": {
          "description": "Checks to see if the first type occurs in the second type Note that the predicate is also satisfied if the two types are equal",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "occursIn",
          "normalized": "HOLType-\u003eHOLType-\u003eBool",
          "package": "haskhol-core",
          "partial": "In",
          "signature": "HOLType-\u003eHOLType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:occursIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the right term of a combination.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided\n  term is not a combination.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "rand",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#rand",
          "type": "function"
        },
        "index": {
          "description": "Returns the right term of combination Fails with Nothing if the provided term is not combination",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "rand",
          "normalized": "HOLTerm-\u003eMaybe HOLTerm",
          "package": "haskhol-core",
          "signature": "HOLTerm-\u003eMaybe HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the left term of a combination.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided\n  term is not a combination.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "rator",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#rator",
          "type": "function"
        },
        "index": {
          "description": "Returns the left term of combination Fails with Nothing if the provided term is not combination",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "rator",
          "normalized": "HOLTerm-\u003eMaybe HOLTerm",
          "package": "haskhol-core",
          "signature": "HOLTerm-\u003eMaybe HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:rator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a complex abstraction returning its list of bound variables and its\n  body term.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "stripAbs",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e ([HOLTerm], HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#stripAbs",
          "type": "function"
        },
        "index": {
          "description": "Destructs complex abstraction returning its list of bound variables and its body term",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "stripAbs",
          "normalized": "HOLTerm-\u003e([HOLTerm],HOLTerm)",
          "package": "haskhol-core",
          "partial": "Abs",
          "signature": "HOLTerm-\u003e([HOLTerm],HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:stripAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a complex combination returning its function term and its list of\n  argument terms.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "stripComb",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e (HOLTerm, [HOLTerm])",
          "source": "src/HaskHOL-Core-Basics.html#stripComb",
          "type": "function"
        },
        "index": {
          "description": "Destructs complex combination returning its function term and its list of argument terms",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "stripComb",
          "normalized": "HOLTerm-\u003e(HOLTerm,[HOLTerm])",
          "package": "haskhol-core",
          "partial": "Comb",
          "signature": "HOLTerm-\u003e(HOLTerm,[HOLTerm])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:stripComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003estripAbs\u003c/a\u003e\u003c/code\u003e for existential term quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "stripExists",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e ([HOLTerm], HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#stripExists",
          "type": "function"
        },
        "index": {
          "description": "specific version of stripAbs for existential term quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "stripExists",
          "normalized": "HOLTerm-\u003e([HOLTerm],HOLTerm)",
          "package": "haskhol-core",
          "partial": "Exists",
          "signature": "HOLTerm-\u003e([HOLTerm],HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:stripExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003estripAbs\u003c/a\u003e\u003c/code\u003e for universal term quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "stripForall",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e ([HOLTerm], HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#stripForall",
          "type": "function"
        },
        "index": {
          "description": "specific version of stripAbs for universal term quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "stripForall",
          "normalized": "HOLTerm-\u003e([HOLTerm],HOLTerm)",
          "package": "haskhol-core",
          "partial": "Forall",
          "signature": "HOLTerm-\u003e([HOLTerm],HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:stripForall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003estripAbs\u003c/a\u003e\u003c/code\u003e for general abstractions.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "stripGAbs",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e ([HOLTerm], HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#stripGAbs",
          "type": "function"
        },
        "index": {
          "description": "specific version of stripAbs for general abstractions",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "stripGAbs",
          "normalized": "HOLTerm-\u003e([HOLTerm],HOLTerm)",
          "package": "haskhol-core",
          "partial": "GAbs",
          "signature": "HOLTerm-\u003e([HOLTerm],HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:stripGAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003estripAbs\u003c/a\u003e\u003c/code\u003e for term-level universal type quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "stripTyAll",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e ([HOLType], HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#stripTyAll",
          "type": "function"
        },
        "index": {
          "description": "specific version of stripAbs for term-level universal type quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "stripTyAll",
          "normalized": "HOLTerm-\u003e([HOLType],HOLTerm)",
          "package": "haskhol-core",
          "partial": "Ty All",
          "signature": "HOLTerm-\u003e([HOLType],HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:stripTyAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific version of \u003ccode\u003e\u003ca\u003estripAbs\u003c/a\u003e\u003c/code\u003e for term-level existential type \n  quantification.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "stripTyEx",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e ([HOLType], HOLTerm)",
          "source": "src/HaskHOL-Core-Basics.html#stripTyEx",
          "type": "function"
        },
        "index": {
          "description": "specific version of stripAbs for term-level existential type quantification",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "stripTyEx",
          "normalized": "HOLTerm-\u003e([HOLType],HOLTerm)",
          "package": "haskhol-core",
          "partial": "Ty Ex",
          "signature": "HOLTerm-\u003e([HOLType],HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:stripTyEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic term substitution.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e when the substitution would \n  result in an invalid term construction.\n\u003c/p\u003e\u003cp\u003eNote that the order of the elements of the substitution pairs matches other \n  environments in the systems, such that for the pair \u003ccode\u003e(A, B)\u003c/code\u003e \u003ccode\u003eB\u003c/code\u003e will be \n  substituted for all instances of \u003ccode\u003eA\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "subst",
          "package": "haskhol-core",
          "signature": "HOLTermEnv -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Basics.html#subst",
          "type": "function"
        },
        "index": {
          "description": "Basic term substitution Throws HOLException when the substitution would result in an invalid term construction Note that the order of the elements of the substitution pairs matches other environments in the systems such that for the pair will be substituted for all instances of",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "subst",
          "normalized": "HOLTermEnv-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "signature": "HOLTermEnv-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of all free term variables in a theorem.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "thmFrees",
          "package": "haskhol-core",
          "signature": "HOLThm -\u003e [HOLTerm]",
          "source": "src/HaskHOL-Core-Basics.html#thmFrees",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of all free term variables in theorem",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "thmFrees",
          "normalized": "HOLThm-\u003e[HOLTerm]",
          "package": "haskhol-core",
          "partial": "Frees",
          "signature": "HOLThm-\u003e[HOLTerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:thmFrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a tiplet of substitution environments that can be used to make two\n  types match.  The triplet argument can be used to constrain the match, or\n  its three environments can be left empty to find the most general match.\n  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e in the event that a match cannot be found that satisfies\n  the provided constraint.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "typeMatch",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLType -\u003e SubstTrip -\u003e Maybe SubstTrip",
          "source": "src/HaskHOL-Core-Basics.html#typeMatch",
          "type": "function"
        },
        "index": {
          "description": "Computes tiplet of substitution environments that can be used to make two types match The triplet argument can be used to constrain the match or its three environments can be left empty to find the most general match Fails with Nothing in the event that match cannot be found that satisfies the provided constraint",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "typeMatch",
          "normalized": "HOLType-\u003eHOLType-\u003eSubstTrip-\u003eMaybe SubstTrip",
          "package": "haskhol-core",
          "partial": "Match",
          "signature": "HOLType-\u003eHOLType-\u003eSubstTrip-\u003eMaybe SubstTrip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:typeMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of all free type variables in a theorem.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "typeVarsInThm",
          "package": "haskhol-core",
          "signature": "HOLThm -\u003e [HOLType]",
          "source": "src/HaskHOL-Core-Basics.html#typeVarsInThm",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of all free type variables in theorem",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "typeVarsInThm",
          "normalized": "HOLThm-\u003e[HOLType]",
          "package": "haskhol-core",
          "partial": "Vars In Thm",
          "signature": "HOLThm-\u003e[HOLType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:typeVarsInThm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic type substitution that ignores type operators and prunes the \n  substitution environment of bound variables rather than handle renaming.\n  Works for all types, variable and non-variable alike.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e when \n  the substitution would result in an invalid type construction.\n\u003c/p\u003e\u003cp\u003eNote that the order of the elements of the substitution pairs matches other \n  environments in the systems, such that for the pair \u003ccode\u003e(A, B)\u003c/code\u003e \u003ccode\u003eB\u003c/code\u003e will be \n  substituted for all instances of \u003ccode\u003eA\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Basics",
          "name": "tysubst",
          "package": "haskhol-core",
          "signature": "HOLTypeEnv -\u003e HOLType -\u003e Either String HOLType",
          "source": "src/HaskHOL-Core-Basics.html#tysubst",
          "type": "function"
        },
        "index": {
          "description": "Basic type substitution that ignores type operators and prunes the substitution environment of bound variables rather than handle renaming Works for all types variable and non-variable alike Fails with Left when the substitution would result in an invalid type construction Note that the order of the elements of the substitution pairs matches other environments in the systems such that for the pair will be substituted for all instances of",
          "hierarchy": "HaskHOL Core Basics",
          "module": "HaskHOL.Core.Basics",
          "name": "tysubst",
          "normalized": "HOLTypeEnv-\u003eHOLType-\u003eEither String HOLType",
          "package": "haskhol-core",
          "signature": "HOLTypeEnv-\u003eHOLType-\u003eEither String HOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Basics.html#v:tysubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports HaskHOL's non-trivial extensions to the underlying HOL\n  system, i.e. the compile time operations.  These operations are split into\n  three categories:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Methods related to the Protect and Serve Mechanism for sealing and unsealing\n    data against a provided theory context.\n\u003c/li\u003e\u003cli\u003e Methods related to quasi-quoting of \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003es.  \n\u003c/li\u003e\u003cli\u003e Methods related to compile time extension and caching of theory contexts.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "Ext",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Ext.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports HaskHOL non-trivial extensions to the underlying HOL system i.e the compile time operations These operations are split into three categories Methods related to the Protect and Serve Mechanism for sealing and unsealing data against provided theory context Methods related to quasi-quoting of HOLTerm Methods related to compile time extension and caching of theory contexts",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "Ext",
          "package": "haskhol-core",
          "partial": "Ext",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for protected \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "PTerm",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Ext-Protected.html#PTerm",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for protected HOLTerm",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "PTerm",
          "package": "haskhol-core",
          "partial": "PTerm",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#t:PTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for protected \u003ccode\u003e\u003ca\u003eHOLThm\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "PThm",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Ext-Protected.html#PThm",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for protected HOLThm",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "PThm",
          "package": "haskhol-core",
          "partial": "PThm",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#t:PThm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for protected \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "PType",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Ext-Protected.html#PType",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for protected HOLType",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "PType",
          "package": "haskhol-core",
          "partial": "PType",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#t:PType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Protected class is the associated type class that facilitates our\n  protect/serve protection mechanism.\n\u003c/p\u003e\u003cp\u003eIt defines:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A data wrapper for our protected type.\n\u003c/li\u003e\u003cli\u003e Conversions to/from this new type, protect and serve.\n\u003c/li\u003e\u003cli\u003e Some boilerplate code to enable template haskell lifting.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "Protected",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Ext-Protected.html#Protected",
          "type": "class"
        },
        "index": {
          "description": "The Protected class is the associated type class that facilitates our protect serve protection mechanism It defines data wrapper for our protected type Conversions to from this new type protect and serve Some boilerplate code to enable template haskell lifting",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "Protected",
          "package": "haskhol-core",
          "partial": "Protected",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#t:Protected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003ebaseQuoter\u003c/a\u003e\u003c/code\u003e for the core theory context, \u003ccode\u003e\u003ca\u003ectxtBase\u003c/a\u003e\u003c/code\u003e.\n  Example:\n\u003c/p\u003e\u003cpre\u003e [base| x = y |]\n\u003c/pre\u003e\u003cp\u003ewill parse the provided string and construct the \u003ccode\u003eHOLTerm\u003c/code\u003e \u003ccode\u003ex = y\u003c/code\u003e at compile\n  time.  Note that this term is protected, such that it has to be accessed via\n  \u003ccode\u003e\u003ca\u003eserve\u003c/a\u003e\u003c/code\u003e.  This is advantageous in computations that may be run many times, \n  for example:\n\u003c/p\u003e\u003cpre\u003e do tm \u003c- serve [base| x = y |]\n    ...\n\u003c/pre\u003e\u003cp\u003ewill parse the term exactly once, only checking the \u003ccode\u003ethry\u003c/code\u003e tag of the\n  computation for each evaluation.  Conversely,\n\u003c/p\u003e\u003cpre\u003e do tm \u003c- toHTm \"x = y\"\n    ...\n\u003c/pre\u003e\u003cp\u003ewill parse the term for every evaluation of that computation.  Generally, the\n  use of \u003ccode\u003e\u003ca\u003etoHTm\u003c/a\u003e\u003c/code\u003e is reserved for run time parsing and in larger computations\n  that themselves are evaluated at copmile time to minimize the amount of work\n  Template Haskell has to do.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "base",
          "package": "haskhol-core",
          "signature": "QuasiQuoter",
          "source": "src/HaskHOL-Core-Ext-QQ.html#base",
          "type": "function"
        },
        "index": {
          "description": "An instance of baseQuoter for the core theory context ctxtBase Example base will parse the provided string and construct the HOLTerm at compile time Note that this term is protected such that it has to be accessed via serve This is advantageous in computations that may be run many times for example do tm serve base will parse the term exactly once only checking the thry tag of the computation for each evaluation Conversely do tm toHTm will parse the term for every evaluation of that computation Generally the use of toHTm is reserved for run time parsing and in larger computations that themselves are evaluated at copmile time to minimize the amount of work Template Haskell has to do",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "base",
          "package": "haskhol-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the base quasi-quoter for the HaskHOL system.  When provided with a\n  theory context value, it constucts a theory specific quasi-quoter that parses\n  a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e as a term, protecting and lifting the result.\n\u003c/p\u003e\u003cp\u003eNote that, at this point in time, we only allowing quoting at the expression\n  level.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "baseQuoter",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e QuasiQuoter",
          "source": "src/HaskHOL-Core-Ext-QQ.html#baseQuoter",
          "type": "function"
        },
        "index": {
          "description": "This is the base quasi-quoter for the HaskHOL system When provided with theory context value it constucts theory specific quasi-quoter that parses String as term protecting and lifting the result Note that at this point in time we only allowing quoting at the expression level",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "baseQuoter",
          "normalized": "HOLContext a-\u003eQuasiQuoter",
          "package": "haskhol-core",
          "partial": "Quoter",
          "signature": "HOLContext thry-\u003eQuasiQuoter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:baseQuoter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtends a theory by evaluating a provided computation, returning a list of\n  declarations containing:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A new empty data declaration associated with the new theory.\n\u003c/li\u003e\u003cli\u003e A new type class associated with the new theory to be used with\n    \u003ccode\u003eDerivedCtxt\u003c/code\u003e along with the appropriate instances.\n\u003c/li\u003e\u003cli\u003e The context value for the new theory.\n\u003c/li\u003e\u003cli\u003e A class constraint alias that can be safely exported for use in type\n    signatures external to the library where it was defined.\n\u003c/li\u003e\u003cli\u003e A quasiquoter for the new theory.\n\u003c/li\u003e\u003cli\u003e A compile-time proof function for the new theory.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e extendCtxt ctxtBase loadBoolLib \"bool\"\n\u003c/pre\u003e\u003cp\u003ewill produce the following code\n\u003c/p\u003e\u003cpre\u003e data BoolThry deriving Typeable\n type BoolType = ExtThry BoolThry BaseThry\n\n class BaseCtxt a =\u003e BoolContext a\n instance BaseCtxt b =\u003e BoolContext (ExtThry BoolThry b)\n instance BoolContext b =\u003e BoolContext (ExtThry a b)\n \n class BoolContext a =\u003e BoolCtxt a\n instance BoolContext a =\u003e BoolCtxt a\n\n ctxtBool :: HOLContext BoolType\n ctxtBool = ...\n\n bool :: QuasiQuoter\n bool = baseQuoter ctxtBool\n\n proveBool :: String -\u003e HOL Proof BoolType HOLThm -\u003e Q [Dec]\n proveBool = proveCompileTime ctxtBool\n\n proveBoolMany :: [String] -\u003e HOL Proof BoolType [HOLThm] -\u003e Q [Dec]\n proveBoolMany = proveCompileTimeMany ctxtBool\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "extendCtxt",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e HOL cls thry () -\u003e String -\u003e Q [Dec]",
          "source": "src/HaskHOL-Core-Ext.html#extendCtxt",
          "type": "function"
        },
        "index": {
          "description": "Extends theory by evaluating provided computation returning list of declarations containing new empty data declaration associated with the new theory new type class associated with the new theory to be used with DerivedCtxt along with the appropriate instances The context value for the new theory class constraint alias that can be safely exported for use in type signatures external to the library where it was defined quasiquoter for the new theory compile-time proof function for the new theory For example extendCtxt ctxtBase loadBoolLib bool will produce the following code data BoolThry deriving Typeable type BoolType ExtThry BoolThry BaseThry class BaseCtxt BoolContext instance BaseCtxt BoolContext ExtThry BoolThry instance BoolContext BoolContext ExtThry class BoolContext BoolCtxt instance BoolContext BoolCtxt ctxtBool HOLContext BoolType ctxtBool bool QuasiQuoter bool baseQuoter ctxtBool proveBool String HOL Proof BoolType HOLThm Dec proveBool proveCompileTime ctxtBool proveBoolMany String HOL Proof BoolType HOLThm Dec proveBoolMany proveCompileTimeMany ctxtBool",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "extendCtxt",
          "normalized": "HOLContext a-\u003eHOL b a()-\u003eString-\u003eQ[Dec]",
          "package": "haskhol-core",
          "partial": "Ctxt",
          "signature": "HOLContext thry-\u003eHOL cls thry()-\u003eString-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:extendCtxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts an axiom from a provided context, protecting and lifting it with\n  \u003ccode\u003e\u003ca\u003eliftProtected\u003c/a\u003e\u003c/code\u003e.  The extraction is performed by looking for an axioms of\n  a given name, as specified when the axiom was created with \u003ccode\u003e\u003ca\u003enewAxiom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "extractAxiom",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e String -\u003e Q [Dec]",
          "source": "src/HaskHOL-Core-Ext-Protected.html#extractAxiom",
          "type": "function"
        },
        "index": {
          "description": "Extracts an axiom from provided context protecting and lifting it with liftProtected The extraction is performed by looking for an axioms of given name as specified when the axiom was created with newAxiom",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "extractAxiom",
          "normalized": "HOLContext a-\u003eString-\u003eQ[Dec]",
          "package": "haskhol-core",
          "partial": "Axiom",
          "signature": "HOLContext thry-\u003eString-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:extractAxiom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts a basic term definition from a provided context, protecting and \n  lifting it with \u003ccode\u003e\u003ca\u003eliftProtected\u003c/a\u003e\u003c/code\u003e.  The extraction is performed by looking for \n  a definition whose left hand side matches a provided constant name.\n  For example:\n\u003c/p\u003e\u003cpre\u003e extractBasicDefinition ctxtBool \"defT\" \"T\"\n\u003c/pre\u003e\u003cp\u003ewill return the spliceable list of declarations for the following theorem\n\u003c/p\u003e\u003cpre\u003e |- T = ( p:bool . p) = ( p:bool . p)\u003c/pre\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "extractBasicDefinition",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e String -\u003e String -\u003e Q [Dec]",
          "source": "src/HaskHOL-Core-Ext-Protected.html#extractBasicDefinition",
          "type": "function"
        },
        "index": {
          "description": "Extracts basic term definition from provided context protecting and lifting it with liftProtected The extraction is performed by looking for definition whose left hand side matches provided constant name For example extractBasicDefinition ctxtBool defT will return the spliceable list of declarations for the following theorem bool bool",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "extractBasicDefinition",
          "normalized": "HOLContext a-\u003eString-\u003eString-\u003eQ[Dec]",
          "package": "haskhol-core",
          "partial": "Basic Definition",
          "signature": "HOLContext thry-\u003eString-\u003eString-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:extractBasicDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts a protected data value as a declaration of a given name with an ascribed\n  type signature.\n  For example:\n\u003c/p\u003e\u003cpre\u003e liftProtected \"protX\" (x::PData a Bool)\n\u003c/pre\u003e\u003cp\u003eproduces the following list of spliceable declarations\n\u003c/p\u003e\u003cpre\u003e [ [d| protX :: forall thry. BoolCtxt thry =\u003e PData a Bool |]\n , [d| protX = x |] ]\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eextractAxiom\u003c/a\u003e\u003c/code\u003e for a basic example of how this function may be used.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "liftProtected",
          "package": "haskhol-core",
          "signature": "String -\u003e PData a thry -\u003e Q [Dec]",
          "source": "src/HaskHOL-Core-Ext-Protected.html#liftProtected",
          "type": "function"
        },
        "index": {
          "description": "Lifts protected data value as declaration of given name with an ascribed type signature For example liftProtected protX PData Bool produces the following list of spliceable declarations protX forall thry BoolCtxt thry PData Bool protX See extractAxiom for basic example of how this function may be used",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "liftProtected",
          "normalized": "String-\u003ePData a b-\u003eQ[Dec]",
          "package": "haskhol-core",
          "partial": "Protected",
          "signature": "String-\u003ePData a thry-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:liftProtected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts a protected data value as an expression using an ascribed type.\n  For example:\n\u003c/p\u003e\u003cpre\u003e liftProtectedExp (x::PData a Bool)\n\u003c/pre\u003e\u003cp\u003eproduces the following spliceable expression\n\u003c/p\u003e\u003cpre\u003e [| x :: forall thry. BoolCtxt thry =\u003e PData a Bool |]\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "liftProtectedExp",
          "package": "haskhol-core",
          "signature": "PData a thry -\u003e Q Exp",
          "source": "src/HaskHOL-Core-Ext-Protected.html#liftProtectedExp",
          "type": "function"
        },
        "index": {
          "description": "Lifts protected data value as an expression using an ascribed type For example liftProtectedExp PData Bool produces the following spliceable expression forall thry BoolCtxt thry PData Bool",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "liftProtectedExp",
          "normalized": "PData a b-\u003eQ Exp",
          "package": "haskhol-core",
          "partial": "Protected Exp",
          "signature": "PData a thry-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:liftProtectedExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProtects a value by sealing it against a provided context.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "protect",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e a -\u003e PData a thry",
          "source": "src/HaskHOL-Core-Ext-Protected.html#protect",
          "type": "method"
        },
        "index": {
          "description": "Protects value by sealing it against provided context",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "protect",
          "normalized": "HOLContext a-\u003eb-\u003ePData b a",
          "package": "haskhol-core",
          "signature": "HOLContext thry-\u003ea-\u003ePData a thry",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:protect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates a proof compilation, protects it with the theory used to evaluate\n  it, and then lifts it as a declaration of a given name with an ascribed type\n  signature.\n\u003c/p\u003e\u003cp\u003eRelies internally on \u003ccode\u003e\u003ca\u003eprotect\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftProtected\u003c/a\u003e\u003c/code\u003e to guarantee that the\n  resultant theorem is sealed with the right type.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "proveCompileTime",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e String -\u003e HOL Proof thry HOLThm -\u003e Q [Dec]",
          "source": "src/HaskHOL-Core-Ext-Protected.html#proveCompileTime",
          "type": "function"
        },
        "index": {
          "description": "Evaluates proof compilation protects it with the theory used to evaluate it and then lifts it as declaration of given name with an ascribed type signature Relies internally on protect and liftProtected to guarantee that the resultant theorem is sealed with the right type",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "proveCompileTime",
          "normalized": "HOLContext a-\u003eString-\u003eHOL Proof a HOLThm-\u003eQ[Dec]",
          "package": "haskhol-core",
          "partial": "Compile Time",
          "signature": "HOLContext thry-\u003eString-\u003eHOL Proof thry HOLThm-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:proveCompileTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eproveCompileTime\u003c/a\u003e\u003c/code\u003e that works for a proof computation returning\n  multiple theorems.\n\u003c/p\u003e\u003cp\u003eNote that each resultant theorem must have a unique, provided name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "proveCompileTimeMany",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e [String] -\u003e HOL Proof thry [HOLThm] -\u003e Q [Dec]",
          "source": "src/HaskHOL-Core-Ext-Protected.html#proveCompileTimeMany",
          "type": "function"
        },
        "index": {
          "description": "version of proveCompileTime that works for proof computation returning multiple theorems Note that each resultant theorem must have unique provided name",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "proveCompileTimeMany",
          "normalized": "HOLContext a-\u003e[String]-\u003eHOL Proof a[HOLThm]-\u003eQ[Dec]",
          "package": "haskhol-core",
          "partial": "Compile Time Many",
          "signature": "HOLContext thry-\u003e[String]-\u003eHOL Proof thry[HOLThm]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:proveCompileTimeMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnseals a protected value, returning it in a monadic computation whose\n      current working theory satisfies the context that the value was originally\n      sealed with.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "serve",
          "package": "haskhol-core",
          "signature": "PData a thry -\u003e HOL cls thry a",
          "source": "src/HaskHOL-Core-Ext-Protected.html#serve",
          "type": "method"
        },
        "index": {
          "description": "Unseals protected value returning it in monadic computation whose current working theory satisfies the context that the value was originally sealed with",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "serve",
          "normalized": "PData a b-\u003eHOL c b a",
          "package": "haskhol-core",
          "signature": "PData a thry-\u003eHOL cls thry a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:serve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a specialized quasi-quoter for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.  It can be used to strip\n  white space and automatically escape special characters.  It is typically used\n  in conjunction with \u003ccode\u003e\u003ca\u003etoHTm\u003c/a\u003e\u003c/code\u003e directly or indirectly.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Ext",
          "name": "str",
          "package": "haskhol-core",
          "signature": "QuasiQuoter",
          "source": "src/HaskHOL-Core-Ext-QQ.html#str",
          "type": "function"
        },
        "index": {
          "description": "This is specialized quasi-quoter for String It can be used to strip white space and automatically escape special characters It is typically used in conjunction with toHTm directly or indirectly",
          "hierarchy": "HaskHOL Core Ext",
          "module": "HaskHOL.Core.Ext",
          "name": "str",
          "package": "haskhol-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Ext.html#v:str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a safe view of HOL terms for HaskHOL.  It also defines\n  the primitive functions related to terms.  For clarity, these functions have\n  been seperated based on their influential system: HOL Light, Stateless HOL,\n  and HOL2P.\n\u003c/p\u003e\u003cp\u003eNote that, per the stateless approach, any stateful, but still primitive,\n  functions related to terms have been relocated to the \u003ca\u003eHaskHOL.Core.State\u003c/a\u003e\n  module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "Terms",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Terms.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports safe view of HOL terms for HaskHOL It also defines the primitive functions related to terms For clarity these functions have been seperated based on their influential system HOL Light Stateless HOL and HOL2P Note that per the stateless approach any stateful but still primitive functions related to terms have been relocated to the HaskHOL.Core.State module",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "Terms",
          "package": "haskhol-core",
          "partial": "Terms",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type for constant tags, \u003ccode\u003e\u003ca\u003eConstTag\u003c/a\u003e\u003c/code\u003e, follows identically from the\n  implementation in Stateless HOL.  For more information regarding construction\n  of the different tags, see the documentation of the following functions:\n  \u003ccode\u003enewPrimConst\u003c/code\u003e, \u003ccode\u003enewDefinedConst\u003c/code\u003e, and \u003ccode\u003enewDefinedTypeOp\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "ConstTag",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#ConstTag",
          "type": "data"
        },
        "index": {
          "description": "The data type for constant tags ConstTag follows identically from the implementation in Stateless HOL For more information regarding construction of the different tags see the documentation of the following functions newPrimConst newDefinedConst and newDefinedTypeOp",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "ConstTag",
          "package": "haskhol-core",
          "partial": "Const Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#t:ConstTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003e data type defines the internal constructors for HOL terms in\n  HaskHOL.  For more details, see the documentation for its view pattern data\n  type, \u003ccode\u003e\u003ca\u003eHOLTermView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "HOLTerm",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTerm",
          "type": "data"
        },
        "index": {
          "description": "The HOLTerm data type defines the internal constructors for HOL terms in HaskHOL For more details see the documentation for its view pattern data type HOLTermView",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "HOLTerm",
          "package": "haskhol-core",
          "partial": "HOLTerm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#t:HOLTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for the commonly used, list-based, term environment.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "HOLTermEnv",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermEnv",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for the commonly used list-based term environment",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "HOLTermEnv",
          "package": "haskhol-core",
          "partial": "HOLTerm Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#t:HOLTermEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe view pattern data type for HOL terms.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "HOLTermView",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermView",
          "type": "data"
        },
        "index": {
          "description": "The view pattern data type for HOL terms",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "HOLTermView",
          "package": "haskhol-core",
          "partial": "HOLTerm View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#t:HOLTermView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eInst\u003c/code\u003e class provides the framework for type instantiation in HaskHOL.\n  Note that in the simplest cases, instantiation is simply a type substitution\n  for the types of term variables and constants.  Therefore, instantiation is \n  constrained by the \u003ccode\u003e\u003ca\u003eTypeSubst\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003eThe move to a polymorphic type system further complicates things as types can\n  now be bound at the term level, requiring renaming for type instantiation.\n  Since we have three different possible substitution environment types, we have\n  three different possible instantiation environment types and, therefore, three\n  different ways to handle renaming:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For \u003ccode\u003e(x::\u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003e, r::\u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e substitution pairs we rename in the case \n    where a type abstraction binds a type variable present in \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ex\u003c/code\u003e is\n    present in the body of the type abstraction.\n\u003c/li\u003e\u003cli\u003e For \u003ccode\u003e(_::\u003ccode\u003e\u003ca\u003eTypeOp\u003c/a\u003e\u003c/code\u003e, _::\u003ccode\u003e\u003ca\u003eTypeOp\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e substitution pairs we can safely ignore \n    renaming as our logic does not permit the binding of type operator \n    variables.\n\u003c/li\u003e\u003cli\u003e For \u003ccode\u003e(x::\u003ccode\u003e\u003ca\u003eTypeOp\u003c/a\u003e\u003c/code\u003e, r::\u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e substitution pairs we rename in the case \n    where a type abstraction binds a type variable present in \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ex\u003c/code\u003e is \n    present in the body of the type abstraction.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eJust as we did for the \u003ccode\u003e\u003ca\u003eTypeSubst\u003c/a\u003e\u003c/code\u003e class, we hide the internals of \u003ccode\u003eInst\u003c/code\u003e to\n  prevent unsound re-definition.  The correct functions to call for\n  type instantiation are \u003ccode\u003e\u003ca\u003einst\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003einstFull\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "Inst",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#Inst",
          "type": "class"
        },
        "index": {
          "description": "The Inst class provides the framework for type instantiation in HaskHOL Note that in the simplest cases instantiation is simply type substitution for the types of term variables and constants Therefore instantiation is constrained by the TypeSubst class The move to polymorphic type system further complicates things as types can now be bound at the term level requiring renaming for type instantiation Since we have three different possible substitution environment types we have three different possible instantiation environment types and therefore three different ways to handle renaming For HOLTerm HOLTerm substitution pairs we rename in the case where type abstraction binds type variable present in and is present in the body of the type abstraction For TypeOp TypeOp substitution pairs we can safely ignore renaming as our logic does not permit the binding of type operator variables For TypeOp HOLTerm substitution pairs we rename in the case where type abstraction binds type variable present in and is present in the body of the type abstraction Just as we did for the TypeSubst class we hide the internals of Inst to prevent unsound re-definition The correct functions to call for type instantiation are inst and instFull",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "Inst",
          "package": "haskhol-core",
          "partial": "Inst",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#t:Inst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA term abstraction consisting of a bound term and a body term.  Note that\n      the bound term must be a type variable.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "Abs",
          "package": "haskhol-core",
          "signature": "Abs HOLTerm HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermView",
          "type": "function"
        },
        "index": {
          "description": "term abstraction consisting of bound term and body term Note that the bound term must be type variable",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "Abs",
          "package": "haskhol-core",
          "partial": "Abs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:Abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA term application consisting of a function term and argument term.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "Comb",
          "package": "haskhol-core",
          "signature": "Comb HOLTerm HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermView",
          "type": "function"
        },
        "index": {
          "description": "term application consisting of function term and argument term",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "Comb",
          "package": "haskhol-core",
          "partial": "Comb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:Comb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA term constant consisting of a name, type, and tag.  See \u003ccode\u003e\u003ca\u003eConstTag\u003c/a\u003e\u003c/code\u003e for \n      more information.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "Const",
          "package": "haskhol-core",
          "signature": "Const String HOLType ConstTag",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermView",
          "type": "function"
        },
        "index": {
          "description": "term constant consisting of name type and tag See ConstTag for more information",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "Const",
          "package": "haskhol-core",
          "partial": "Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA term-level, type abstraction consisting of a bound type and a body term.\n      Note that the bound type must be a small, type variable.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "TyAbs",
          "package": "haskhol-core",
          "signature": "TyAbs HOLType HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermView",
          "type": "function"
        },
        "index": {
          "description": "term-level type abstraction consisting of bound type and body term Note that the bound type must be small type variable",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "TyAbs",
          "package": "haskhol-core",
          "partial": "Ty Abs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:TyAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA term-level, type application consisting of a body term and an argument \n      type. Note that the body term must have a universal type.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "TyComb",
          "package": "haskhol-core",
          "signature": "TyComb HOLTerm HOLType",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermView",
          "type": "function"
        },
        "index": {
          "description": "term-level type application consisting of body term and an argument type Note that the body term must have universal type",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "TyComb",
          "package": "haskhol-core",
          "partial": "Ty Comb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:TyComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA term variable consisting of a name and type.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "Var",
          "package": "haskhol-core",
          "signature": "Var String HOLType",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTermView",
          "type": "function"
        },
        "index": {
          "description": "term variable consisting of name and type",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "Var",
          "package": "haskhol-core",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests if two terms are alpha-equivalent\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "aConv",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#aConv",
          "type": "function"
        },
        "index": {
          "description": "Tests if two terms are alpha-equivalent",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "aConv",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Conv",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:aConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides an ordering for two terms modulo alpha-equivalence\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "alphaOrder",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e Ordering",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#alphaOrder",
          "type": "function"
        },
        "index": {
          "description": "Provides an ordering for two terms modulo alpha-equivalence",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "alphaOrder",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eOrdering",
          "package": "haskhol-core",
          "partial": "Order",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:alphaOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all free, term variables in a list of terms.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "catFrees",
          "package": "haskhol-core",
          "signature": "[HOLTerm] -\u003e [HOLTerm]",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#catFrees",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all free term variables in list of terms",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "catFrees",
          "normalized": "[HOLTerm]-\u003e[HOLTerm]",
          "package": "haskhol-core",
          "partial": "Frees",
          "signature": "[HOLTerm]-\u003e[HOLTerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:catFrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a term abstraction, returning its bound term and body term. Fails\n  with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not an abstraction.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "destAbs",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#destAbs",
          "type": "function"
        },
        "index": {
          "description": "Destructs term abstraction returning its bound term and body term Fails with Nothing if the provided term is not an abstraction",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "destAbs",
          "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Abs",
          "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:destAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a term combination, returning its function and argument terms.  \n  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not a combination.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "destComb",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#destComb",
          "type": "function"
        },
        "index": {
          "description": "Destructs term combination returning its function and argument terms Fails with Nothing if the provided term is not combination",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "destComb",
          "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Comb",
          "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:destComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a term constant, returning its name and type.  Note that no constant\n  tag information is returned.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is\n  not a constant.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "destConst",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (String, HOLType)",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#destConst",
          "type": "function"
        },
        "index": {
          "description": "Destructs term constant returning its name and type Note that no constant tag information is returned Fails with Nothing if the provided term is not constant",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "destConst",
          "normalized": "HOLTerm-\u003eMaybe(String,HOLType)",
          "package": "haskhol-core",
          "partial": "Const",
          "signature": "HOLTerm-\u003eMaybe(String,HOLType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:destConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs an equation term, returning the left and right hand side arguments.\n  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the term is not an equation, i.e. of the form \u003ccode\u003el = r\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "destEq",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLTerm)",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#destEq",
          "type": "function"
        },
        "index": {
          "description": "Destructs an equation term returning the left and right hand side arguments Fails with Nothing if the term is not an equation i.e of the form",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "destEq",
          "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Eq",
          "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:destEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a type abstraction, returning its bound type and body term.  Fails\n  with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not a type abstraction.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "destTyAbs",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLType, HOLTerm)",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#destTyAbs",
          "type": "function"
        },
        "index": {
          "description": "Destructs type abstraction returning its bound type and body term Fails with Nothing if the provided term is not type abstraction",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "destTyAbs",
          "normalized": "HOLTerm-\u003eMaybe(HOLType,HOLTerm)",
          "package": "haskhol-core",
          "partial": "Ty Abs",
          "signature": "HOLTerm-\u003eMaybe(HOLType,HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:destTyAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a type combination, returning its body term and type argument.\n  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not a type combination.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "destTyComb",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (HOLTerm, HOLType)",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#destTyComb",
          "type": "function"
        },
        "index": {
          "description": "Destructs type combination returning its body term and type argument Fails with Nothing if the provided term is not type combination",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "destTyComb",
          "normalized": "HOLTerm-\u003eMaybe(HOLTerm,HOLType)",
          "package": "haskhol-core",
          "partial": "Ty Comb",
          "signature": "HOLTerm-\u003eMaybe(HOLTerm,HOLType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:destTyComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a term variable, returning its name and type.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n  if the provided term is not a variable.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "destVar",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe (String, HOLType)",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#destVar",
          "type": "function"
        },
        "index": {
          "description": "Destructs term variable returning its name and type Fails with Nothing if the provided term is not variable",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "destVar",
          "normalized": "HOLTerm-\u003eMaybe(String,HOLType)",
          "package": "haskhol-core",
          "partial": "Var",
          "signature": "HOLTerm-\u003eMaybe(String,HOLType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:destVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all free, term variables in a term.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "frees",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e [HOLTerm]",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#frees",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all free term variables in term",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "frees",
          "normalized": "HOLTerm-\u003e[HOLTerm]",
          "package": "haskhol-core",
          "signature": "HOLTerm-\u003e[HOLTerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:frees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks a list of term variables to see if they are all free in a give term.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "freesIn",
          "package": "haskhol-core",
          "signature": "[HOLTerm] -\u003e HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#freesIn",
          "type": "function"
        },
        "index": {
          "description": "Checks list of term variables to see if they are all free in give term",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "freesIn",
          "normalized": "[HOLTerm]-\u003eHOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "In",
          "signature": "[HOLTerm]-\u003eHOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:freesIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType instantiation for terms.  Accepts the same types of substitution\n  environments as discussed in the documentation for the \u003ccode\u003e\u003ca\u003eTypeSubst\u003c/a\u003e\u003c/code\u003e class, \n  with invalid substitution pairs being pruned internally by \u003ccode\u003e\u003ca\u003etypeSubst\u003c/a\u003e\u003c/code\u003e as \n  necessary.  \n\u003c/p\u003e\u003cp\u003eFor more information on why the \u003ccode\u003e\u003ca\u003eInst\u003c/a\u003e\u003c/code\u003e class constraint is necessary and how \n  renaming of bound types is performed, see that classes documentation.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "inst",
          "package": "haskhol-core",
          "signature": "[(a, b)] -\u003e HOLTerm -\u003e HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#inst",
          "type": "function"
        },
        "index": {
          "description": "Type instantiation for terms Accepts the same types of substitution environments as discussed in the documentation for the TypeSubst class with invalid substitution pairs being pruned internally by typeSubst as necessary For more information on why the Inst class constraint is necessary and how renaming of bound types is performed see that classes documentation",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "inst",
          "normalized": "[(a,b)]-\u003eHOLTerm-\u003eHOLTerm",
          "package": "haskhol-core",
          "signature": "[(a,b)]-\u003eHOLTerm-\u003eHOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:inst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simplified version of \u003ccode\u003e\u003ca\u003einst\u003c/a\u003e\u003c/code\u003e that works only for term constants.  Fails with\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided term is not a constant.  Used internally by \n  \u003ccode\u003emkConst\u003c/code\u003e to guarantee that only constants are constructed.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "instConst",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e [(a, b)] -\u003e Maybe HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#instConst",
          "type": "function"
        },
        "index": {
          "description": "simplified version of inst that works only for term constants Fails with Nothing if the provided term is not constant Used internally by mkConst to guarantee that only constants are constructed",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "instConst",
          "normalized": "HOLTerm-\u003e[(a,b)]-\u003eMaybe HOLTerm",
          "package": "haskhol-core",
          "partial": "Const",
          "signature": "HOLTerm-\u003e[(a,b)]-\u003eMaybe HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:instConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003einstConst\u003c/a\u003e\u003c/code\u003e that accepts a triplet of type substitition \n  environments.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "instConstFull",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e SubstTrip -\u003e Maybe HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#instConstFull",
          "type": "function"
        },
        "index": {
          "description": "version of instConst that accepts triplet of type substitition environments",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "instConstFull",
          "normalized": "HOLTerm-\u003eSubstTrip-\u003eMaybe HOLTerm",
          "package": "haskhol-core",
          "partial": "Const Full",
          "signature": "HOLTerm-\u003eSubstTrip-\u003eMaybe HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:instConstFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003einst\u003c/a\u003e\u003c/code\u003e that accepts a triplet of type substitution environments.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "instFull",
          "package": "haskhol-core",
          "signature": "SubstTrip -\u003e HOLTerm -\u003e HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#instFull",
          "type": "function"
        },
        "index": {
          "description": "version of inst that accepts triplet of type substitution environments",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "instFull",
          "normalized": "SubstTrip-\u003eHOLTerm-\u003eHOLTerm",
          "package": "haskhol-core",
          "partial": "Full",
          "signature": "SubstTrip-\u003eHOLTerm-\u003eHOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:instFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for term abstractions.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "isAbs",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#isAbs",
          "type": "function"
        },
        "index": {
          "description": "Predicate for term abstractions",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "isAbs",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Abs",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:isAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for term combinations.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "isComb",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#isComb",
          "type": "function"
        },
        "index": {
          "description": "Predicate for term combinations",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "isComb",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Comb",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:isComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for term constants.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "isConst",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#isConst",
          "type": "function"
        },
        "index": {
          "description": "Predicate for term constants",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "isConst",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Const",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:isConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for equations, i.e. terms of the form \u003ccode\u003el = r\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "isEq",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#isEq",
          "type": "function"
        },
        "index": {
          "description": "Predicate for equations i.e terms of the form",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "isEq",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Eq",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:isEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for type abstraction terms.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "isTyAbs",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#isTyAbs",
          "type": "function"
        },
        "index": {
          "description": "Predicate for type abstraction terms",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "isTyAbs",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Ty Abs",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:isTyAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for type combination terms.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "isTyComb",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#isTyComb",
          "type": "function"
        },
        "index": {
          "description": "Predicate for type combination terms",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "isTyComb",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Ty Comb",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:isTyComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for term variables.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "isVar",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#isVar",
          "type": "function"
        },
        "index": {
          "description": "Predicate for term variables",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "isVar",
          "normalized": "HOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Var",
          "signature": "HOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:isVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a term abstraction of a given bound term and body term.  Fails with\n  \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the bound term is not a variable.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "mkAbs",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e Either String HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#mkAbs",
          "type": "function"
        },
        "index": {
          "description": "Constructs term abstraction of given bound term and body term Fails with Left if the bound term is not variable",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "mkAbs",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
          "package": "haskhol-core",
          "partial": "Abs",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:mkAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a combination of two given terms.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the\n  following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The first term does not have a function type.\n\u003c/li\u003e\u003cli\u003e The types of the two terms does not agree.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "mkComb",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e Either String HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#mkComb",
          "type": "function"
        },
        "index": {
          "description": "Constructs combination of two given terms Fails with Left in the following cases The first term does not have function type The types of the two terms does not agree",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "mkComb",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
          "package": "haskhol-core",
          "partial": "Comb",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:mkComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a type abstraction term given a bound type and a body term.  Fails\n  with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The bound type is not a small type variable.\n\u003c/li\u003e\u003cli\u003e The bound type variable occurs in the type of a free variable in the body \n    term.  \n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "mkTyAbs",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLTerm -\u003e Either String HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#mkTyAbs",
          "type": "function"
        },
        "index": {
          "description": "Constructs type abstraction term given bound type and body term Fails with Left in the following cases The bound type is not small type variable The bound type variable occurs in the type of free variable in the body term",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "mkTyAbs",
          "normalized": "HOLType-\u003eHOLTerm-\u003eEither String HOLTerm",
          "package": "haskhol-core",
          "partial": "Ty Abs",
          "signature": "HOLType-\u003eHOLTerm-\u003eEither String HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:mkTyAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a type combination term given a body term and a type argument to \n  apply.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The type argument is not a small type.\n\u003c/li\u003e\u003cli\u003e The type of the body term is not a universal type.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "mkTyComb",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLType -\u003e Either String HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#mkTyComb",
          "type": "function"
        },
        "index": {
          "description": "Constructs type combination term given body term and type argument to apply Fails with Left in the following cases The type argument is not small type The type of the body term is not universal type",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "mkTyComb",
          "normalized": "HOLTerm-\u003eHOLType-\u003eEither String HOLTerm",
          "package": "haskhol-core",
          "partial": "Ty Comb",
          "signature": "HOLTerm-\u003eHOLType-\u003eEither String HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:mkTyComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a term variable of a given name and type.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "mkVar",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLType -\u003e HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#mkVar",
          "type": "function"
        },
        "index": {
          "description": "Constructs term variable of given name and type",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "mkVar",
          "normalized": "String-\u003eHOLType-\u003eHOLTerm",
          "package": "haskhol-core",
          "partial": "Var",
          "signature": "String-\u003eHOLType-\u003eHOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:mkVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a primitive constant given a name and type.  Note that primitive\n  constants are tagged with a \u003ccode\u003ePrim\u003c/code\u003e \u003ccode\u003e\u003ca\u003eConstTag\u003c/a\u003e\u003c/code\u003e indicating that they have no\n  definition.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "newPrimConst",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLType -\u003e HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#newPrimConst",
          "type": "function"
        },
        "index": {
          "description": "Constructs primitive constant given name and type Note that primitive constants are tagged with Prim ConstTag indicating that they have no definition",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "newPrimConst",
          "normalized": "String-\u003eHOLType-\u003eHOLTerm",
          "package": "haskhol-core",
          "partial": "Prim Const",
          "signature": "String-\u003eHOLType-\u003eHOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:newPrimConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an equation term given the left and right hand side arguments.  \n  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the types of the terms are not alpha-equivalent.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "primMkEq",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e Either String HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#primMkEq",
          "type": "function"
        },
        "index": {
          "description": "Constructs an equation term given the left and right hand side arguments Fails with Left if the types of the terms are not alpha-equivalent",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "primMkEq",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
          "package": "haskhol-core",
          "partial": "Mk Eq",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eEither String HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:primMkEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an instance of the HOL equality constant, \u003ccode\u003e=\u003c/code\u003e, for a given type.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "tmEq",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#tmEq",
          "type": "function"
        },
        "index": {
          "description": "Constructs an instance of the HOL equality constant for given type",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "tmEq",
          "normalized": "HOLType-\u003eHOLTerm",
          "package": "haskhol-core",
          "partial": "Eq",
          "signature": "HOLType-\u003eHOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:tmEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of all type operator variables in a term.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "typeOpVarsInTerm",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e [TypeOp]",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#typeOpVarsInTerm",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of all type operator variables in term",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "typeOpVarsInTerm",
          "normalized": "HOLTerm-\u003e[TypeOp]",
          "package": "haskhol-core",
          "partial": "Op Vars In Term",
          "signature": "HOLTerm-\u003e[TypeOp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:typeOpVarsInTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of all type operator variables in a list of terms.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "typeOpVarsInTerms",
          "package": "haskhol-core",
          "signature": "[HOLTerm] -\u003e [TypeOp]",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#typeOpVarsInTerms",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of all type operator variables in list of terms",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "typeOpVarsInTerms",
          "normalized": "[HOLTerm]-\u003e[TypeOp]",
          "package": "haskhol-core",
          "partial": "Op Vars In Terms",
          "signature": "[HOLTerm]-\u003e[TypeOp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:typeOpVarsInTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all free, type variables in a term, not including \n  type operator variables.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "typeVarsInTerm",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e [HOLType]",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#typeVarsInTerm",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all free type variables in term not including type operator variables",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "typeVarsInTerm",
          "normalized": "HOLTerm-\u003e[HOLType]",
          "package": "haskhol-core",
          "partial": "Vars In Term",
          "signature": "HOLTerm-\u003e[HOLType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:typeVarsInTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all free, type variables in a list of terms, not including\n  type operator variables.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "typeVarsInTerms",
          "package": "haskhol-core",
          "signature": "[HOLTerm] -\u003e [HOLType]",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#typeVarsInTerms",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all free type variables in list of terms not including type operator variables",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "typeVarsInTerms",
          "normalized": "[HOLTerm]-\u003e[HOLType]",
          "package": "haskhol-core",
          "partial": "Vars In Terms",
          "signature": "[HOLTerm]-\u003e[HOLType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:typeVarsInTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if a variable or constant term is free in a given term.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "varFreeIn",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#varFreeIn",
          "type": "function"
        },
        "index": {
          "description": "Checks if variable or constant term is free in given term",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "varFreeIn",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eBool",
          "package": "haskhol-core",
          "partial": "Free In",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:varFreeIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a basic term substitution using a substitution environment containing\n  pairs consisting of a term variable and a term to be substituted for that \n  variable.  Note that the order of elements in a substitution pair follows the\n  convention of most Haskell libraries, rather than the traditional HOL \n  convention:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The second element is substituted for the first, i.e. the substitution pair\n    \u003ccode\u003e(A, \\ x.x)\u003c/code\u003e indicates that the lambda term \u003ccode\u003e\\x.x\u003c/code\u003e should be substituted \n    for the term variable \u003ccode\u003eA\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "varSubst",
          "package": "haskhol-core",
          "signature": "HOLTermEnv -\u003e HOLTerm -\u003e HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#varSubst",
          "type": "function"
        },
        "index": {
          "description": "Performs basic term substitution using substitution environment containing pairs consisting of term variable and term to be substituted for that variable Note that the order of elements in substitution pair follows the convention of most Haskell libraries rather than the traditional HOL convention The second element is substituted for the first i.e the substitution pair x.x indicates that the lambda term x.x should be substituted for the term variable",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "varSubst",
          "normalized": "HOLTermEnv-\u003eHOLTerm-\u003eHOLTerm",
          "package": "haskhol-core",
          "partial": "Subst",
          "signature": "HOLTermEnv-\u003eHOLTerm-\u003eHOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:varSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenames a term variable to avoid sharing a name with any of a given list of\n  term variables.  Rreturns the original term if it's not a term variable.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "variant",
          "package": "haskhol-core",
          "signature": "[HOLTerm] -\u003e HOLTerm -\u003e HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#variant",
          "type": "function"
        },
        "index": {
          "description": "Renames term variable to avoid sharing name with any of given list of term variables Rreturns the original term if it not term variable",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "variant",
          "normalized": "[HOLTerm]-\u003eHOLTerm-\u003eHOLTerm",
          "package": "haskhol-core",
          "signature": "[HOLTerm]-\u003eHOLTerm-\u003eHOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:variant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenames a list of term variables to avoid sharing a name with any of a given\n  list of term variables.  As each term variable is processed it is added to\n  the list of avoids such that the resultant list of term variables are all\n  uniquely named.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "variants",
          "package": "haskhol-core",
          "signature": "[HOLTerm] -\u003e [HOLTerm] -\u003e [HOLTerm]",
          "source": "src/HaskHOL-Core-Kernel-Terms.html#variants",
          "type": "function"
        },
        "index": {
          "description": "Renames list of term variables to avoid sharing name with any of given list of term variables As each term variable is processed it is added to the list of avoids such that the resultant list of term variables are all uniquely named",
          "hierarchy": "HaskHOL Core Kernel Terms",
          "module": "HaskHOL.Core.Kernel.Terms",
          "name": "variants",
          "normalized": "[HOLTerm]-\u003e[HOLTerm]-\u003e[HOLTerm]",
          "package": "haskhol-core",
          "signature": "[HOLTerm]-\u003e[HOLTerm]-\u003e[HOLTerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Terms.html#v:variants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a safe view of HOL types for HaskHOL.  It also defines\n  the primitive functions related to types.  For clarity, these functions have\n  been seperated based on their influential system: HOL Light, Stateless HOL,\n  and HOL2P.\n\u003c/p\u003e\u003cp\u003eNote that, per the stateless approach, any stateful, but still primitive,\n  functions related to types have been relocated to the \u003ca\u003eHaskHOL.Core.State\u003c/a\u003e\n  module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "Types",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports safe view of HOL types for HaskHOL It also defines the primitive functions related to types For clarity these functions have been seperated based on their influential system HOL Light Stateless HOL and HOL2P Note that per the stateless approach any stateful but still primitive functions related to types have been relocated to the HaskHOL.Core.State module",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "Types",
          "package": "haskhol-core",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003e data type defines the internal constructors for HOL types in\n  HaskHOL.  For more details, see the documentation for its view pattern data\n  type, \u003ccode\u003e\u003ca\u003eHOLTypeView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "HOLType",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLType",
          "type": "data"
        },
        "index": {
          "description": "The HOLType data type defines the internal constructors for HOL types in HaskHOL For more details see the documentation for its view pattern data type HOLTypeView",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "HOLType",
          "package": "haskhol-core",
          "partial": "HOLType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#t:HOLType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for the commonly used, list-based, type environment.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "HOLTypeEnv",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTypeEnv",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for the commonly used list-based type environment",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "HOLTypeEnv",
          "package": "haskhol-core",
          "partial": "HOLType Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#t:HOLTypeEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe view pattern data type for HOL types.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "HOLTypeView",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTypeView",
          "type": "data"
        },
        "index": {
          "description": "The view pattern data type for HOL types",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "HOLTypeView",
          "package": "haskhol-core",
          "partial": "HOLType View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#t:HOLTypeView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for the commonly used triplet of substitution environments.\n  See \u003ccode\u003eTypeSubst\u003c/code\u003e for more information.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "SubstTrip",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#SubstTrip",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for the commonly used triplet of substitution environments See TypeSubst for more information",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "SubstTrip",
          "package": "haskhol-core",
          "partial": "Subst Trip",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#t:SubstTrip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type for type operators, \u003ccode\u003e\u003ca\u003eTypeOp\u003c/a\u003e\u003c/code\u003e, is a mashing together of the\n  representation of type operators from both both HOL2P and Stateless HOL.\n  For more information regarding construction of the different operators, see\n  the documentation of the following functions: \u003ccode\u003emkTypeOpVar\u003c/code\u003e, \u003ccode\u003enewPrimTypeOp\u003c/code\u003e,\n  \u003ccode\u003enewDefinedTypeOp\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "TypeOp",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#TypeOp",
          "type": "data"
        },
        "index": {
          "description": "The data type for type operators TypeOp is mashing together of the representation of type operators from both both HOL2P and Stateless HOL For more information regarding construction of the different operators see the documentation of the following functions mkTypeOpVar newPrimTypeOp newDefinedTypeOp",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "TypeOp",
          "package": "haskhol-core",
          "partial": "Type Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#t:TypeOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eTypeSubst\u003c/code\u003e class provides the framework for type substitution in HaskHOL.\n  Note that, with the introduction of universal types and type operator\n  variables, we now have three kinds of substitution to handle:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Substitution of types for type variables, satisfying type variable \n    constraints.\n\u003c/li\u003e\u003cli\u003e Instantiation of type operators with universal types.\n\u003c/li\u003e\u003cli\u003e Substitution of type operators for type operator variables.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eRather than have three separate functions exposed to the user, we elected to\n  provide a polymorphic type substitution function that will accept any\n  well-formed, homogenous substitution environment.\n\u003c/p\u003e\u003cp\u003eNote that the internals of \u003ccode\u003eTypeSubst\u003c/code\u003e are hidden to prevent unsound\n  re-definition.  The relevant type substitution function is re-exported as\n  \u003ccode\u003e\u003ca\u003etypeSubst\u003c/a\u003e\u003c/code\u003e.  We also provide a function, \u003ccode\u003e\u003ca\u003etypeSubstFull\u003c/a\u003e\u003c/code\u003e, that\n  accepts a triplet of all possible substitution environments that can be\n  conveniently used in combination with \u003ccode\u003etypeMatch\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee the ITP2013 paper, \u003ca\u003eStateless Higher-Order Logic with Quantified Types,\u003c/a\u003e\n  for more details.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "TypeSubst",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Types.html#TypeSubst",
          "type": "class"
        },
        "index": {
          "description": "The TypeSubst class provides the framework for type substitution in HaskHOL Note that with the introduction of universal types and type operator variables we now have three kinds of substitution to handle Substitution of types for type variables satisfying type variable constraints Instantiation of type operators with universal types Substitution of type operators for type operator variables Rather than have three separate functions exposed to the user we elected to provide polymorphic type substitution function that will accept any well-formed homogenous substitution environment Note that the internals of TypeSubst are hidden to prevent unsound re-definition The relevant type substitution function is re-exported as typeSubst We also provide function typeSubstFull that accepts triplet of all possible substitution environments that can be conveniently used in combination with typeMatch See the ITP2013 paper Stateless Higher-Order Logic with Quantified Types for more details",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "TypeSubst",
          "package": "haskhol-core",
          "partial": "Type Subst",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#t:TypeSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type application consisting of a type operator and a list of type\n      arguments.  See \u003ccode\u003e\u003ca\u003eTypeOp\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "TyApp",
          "package": "haskhol-core",
          "signature": "TyApp TypeOp [HOLType]",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTypeView",
          "type": "function"
        },
        "index": {
          "description": "type application consisting of type operator and list of type arguments See TypeOp for more details",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "TyApp",
          "normalized": "TyApp TypeOp[HOLType]",
          "package": "haskhol-core",
          "partial": "Ty App",
          "signature": "TyApp TypeOp[HOLType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:TyApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type variable consisting of a constraint flag and name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "TyVar",
          "package": "haskhol-core",
          "signature": "TyVar Bool String",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTypeView",
          "type": "function"
        },
        "index": {
          "description": "type variable consisting of constraint flag and name",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "TyVar",
          "package": "haskhol-core",
          "partial": "Ty Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:TyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA universal type consisting of a bound type and a body type.  Note that \n      the bound type must be a small, type variable.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "UType",
          "package": "haskhol-core",
          "signature": "UType HOLType HOLType",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLTypeView",
          "type": "function"
        },
        "index": {
          "description": "universal type consisting of bound type and body type Note that the bound type must be small type variable",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "UType",
          "package": "haskhol-core",
          "partial": "UType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:UType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of all type variables in a list of types, not including type\n  operator variables.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "catTyVars",
          "package": "haskhol-core",
          "signature": "[HOLType] -\u003e [HOLType]",
          "source": "src/HaskHOL-Core-Kernel-Types.html#catTyVars",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of all type variables in list of types not including type operator variables",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "catTyVars",
          "normalized": "[HOLType]-\u003e[HOLType]",
          "package": "haskhol-core",
          "partial": "Ty Vars",
          "signature": "[HOLType]-\u003e[HOLType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:catTyVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of all type operator variables in a list of types.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "catTypeOpVars",
          "package": "haskhol-core",
          "signature": "[HOLType] -\u003e [TypeOp]",
          "source": "src/HaskHOL-Core-Kernel-Types.html#catTypeOpVars",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of all type operator variables in list of types",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "catTypeOpVars",
          "normalized": "[HOLType]-\u003e[TypeOp]",
          "package": "haskhol-core",
          "partial": "Type Op Vars",
          "signature": "[HOLType]-\u003e[TypeOp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:catTypeOpVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to test if a type contains a universal type at any level.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "containsUType",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Types.html#containsUType",
          "type": "function"
        },
        "index": {
          "description": "Predicate to test if type contains universal type at any level",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "containsUType",
          "normalized": "HOLType-\u003eBool",
          "package": "haskhol-core",
          "partial": "UType",
          "signature": "HOLType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:containsUType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialized version of \u003ccode\u003e\u003ca\u003edestType\u003c/a\u003e\u003c/code\u003e that returns the domain and range of a\n  function type.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the type to be destructed isn't a\n  primitive function type.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "destFunTy",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e Maybe (HOLType, HOLType)",
          "source": "src/HaskHOL-Core-Kernel-Types.html#destFunTy",
          "type": "function"
        },
        "index": {
          "description": "Specialized version of destType that returns the domain and range of function type Fails with Nothing if the type to be destructed isn primitive function type",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "destFunTy",
          "normalized": "HOLType-\u003eMaybe(HOLType,HOLType)",
          "package": "haskhol-core",
          "partial": "Fun Ty",
          "signature": "HOLType-\u003eMaybe(HOLType,HOLType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:destFunTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a type application, returning its operator name and its list of type\n  arguments.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if called on a type that is not an \n  application.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "destType",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e Maybe (TypeOp, [HOLType])",
          "source": "src/HaskHOL-Core-Kernel-Types.html#destType",
          "type": "function"
        },
        "index": {
          "description": "Destructs type application returning its operator name and its list of type arguments Fails with Nothing if called on type that is not an application",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "destType",
          "normalized": "HOLType-\u003eMaybe(TypeOp,[HOLType])",
          "package": "haskhol-core",
          "partial": "Type",
          "signature": "HOLType-\u003eMaybe(TypeOp,[HOLType])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:destType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a type operator, returning its name and arity.  Note that we use -1 \n  to indicate the arity of a type operator variable since that information is \n  not carried.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "destTypeOp",
          "package": "haskhol-core",
          "signature": "TypeOp -\u003e (String, Int)",
          "source": "src/HaskHOL-Core-Kernel-Types.html#destTypeOp",
          "type": "function"
        },
        "index": {
          "description": "Destructs type operator returning its name and arity Note that we use to indicate the arity of type operator variable since that information is not carried",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "destTypeOp",
          "normalized": "TypeOp-\u003e(String,Int)",
          "package": "haskhol-core",
          "partial": "Type Op",
          "signature": "TypeOp-\u003e(String,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:destTypeOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a universal type, returning its bound type and body type.  Fails\n  with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided type is not universally quantified.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "destUType",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e Maybe (HOLType, HOLType)",
          "source": "src/HaskHOL-Core-Kernel-Types.html#destUType",
          "type": "function"
        },
        "index": {
          "description": "Destructs universal type returning its bound type and body type Fails with Nothing if the provided type is not universally quantified",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "destUType",
          "normalized": "HOLType-\u003eMaybe(HOLType,HOLType)",
          "package": "haskhol-core",
          "partial": "UType",
          "signature": "HOLType-\u003eMaybe(HOLType,HOLType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:destUType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a compound universal type, returning the list of bound variables\n  and the final body type.  Fails if the provided type is not universally\n  quantified.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "destUTypes",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e Maybe ([HOLType], HOLType)",
          "source": "src/HaskHOL-Core-Kernel-Types.html#destUTypes",
          "type": "function"
        },
        "index": {
          "description": "Destructs compound universal type returning the list of bound variables and the final body type Fails if the provided type is not universally quantified",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "destUTypes",
          "normalized": "HOLType-\u003eMaybe([HOLType],HOLType)",
          "package": "haskhol-core",
          "partial": "UTypes",
          "signature": "HOLType-\u003eMaybe([HOLType],HOLType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:destUTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a type variable, returning its name.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if called\n  on a non-variable type.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "destVarType",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e Maybe String",
          "source": "src/HaskHOL-Core-Kernel-Types.html#destVarType",
          "type": "function"
        },
        "index": {
          "description": "Destructs type variable returning its name Fails with Nothing if called on non-variable type",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "destVarType",
          "normalized": "HOLType-\u003eMaybe String",
          "package": "haskhol-core",
          "partial": "Var Type",
          "signature": "HOLType-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:destVarType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for small types.  Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if all type variables in the type\n  are constrained to be small and the type contains no universal types; returns \n  \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise. \n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "isSmall",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Types.html#isSmall",
          "type": "function"
        },
        "index": {
          "description": "Predicate for small types Returns True if all type variables in the type are constrained to be small and the type contains no universal types returns False otherwise",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "isSmall",
          "normalized": "HOLType-\u003eBool",
          "package": "haskhol-core",
          "partial": "Small",
          "signature": "HOLType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:isSmall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for type applications\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "isType",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Types.html#isType",
          "type": "function"
        },
        "index": {
          "description": "Predicate for type applications",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "isType",
          "normalized": "HOLType-\u003eBool",
          "package": "haskhol-core",
          "partial": "Type",
          "signature": "HOLType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:isType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for type operator variables.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "isTypeOpVar",
          "package": "haskhol-core",
          "signature": "TypeOp -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Types.html#isTypeOpVar",
          "type": "function"
        },
        "index": {
          "description": "Predicate for type operator variables",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "isTypeOpVar",
          "normalized": "TypeOp-\u003eBool",
          "package": "haskhol-core",
          "partial": "Type Op Var",
          "signature": "TypeOp-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:isTypeOpVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for universal types.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "isUType",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Types.html#isUType",
          "type": "function"
        },
        "index": {
          "description": "Predicate for universal types",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "isUType",
          "normalized": "HOLType-\u003eBool",
          "package": "haskhol-core",
          "partial": "UType",
          "signature": "HOLType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:isUType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for type variables.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "isVarType",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Types.html#isVarType",
          "type": "function"
        },
        "index": {
          "description": "Predicate for type variables",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "isVarType",
          "normalized": "HOLType-\u003eBool",
          "package": "haskhol-core",
          "partial": "Var Type",
          "signature": "HOLType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:isVarType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a small type from a given type by constraining all of the type\n  variables in the type to be small.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the type contains\n  any universal types.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "mkSmall",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e Either String HOLType",
          "source": "src/HaskHOL-Core-Kernel-Types.html#mkSmall",
          "type": "function"
        },
        "index": {
          "description": "Constructs small type from given type by constraining all of the type variables in the type to be small Fails with Left if the type contains any universal types",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "mkSmall",
          "normalized": "HOLType-\u003eEither String HOLType",
          "package": "haskhol-core",
          "partial": "Small",
          "signature": "HOLType-\u003eEither String HOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:mkSmall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a type operator variable of a given name.  Note that type\n  operator arities are not stored, only inferred from the context where the\n  operator is used.\n\u003c/p\u003e\u003cp\u003eThe parser makes an attempt to guarantee that all instances of a type operator\n  in a term have the same arity.  The same protection is not provided for terms\n  that are manually constructed.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "mkTypeOpVar",
          "package": "haskhol-core",
          "signature": "String -\u003e TypeOp",
          "source": "src/HaskHOL-Core-Kernel-Types.html#mkTypeOpVar",
          "type": "function"
        },
        "index": {
          "description": "Constructs type operator variable of given name Note that type operator arities are not stored only inferred from the context where the operator is used The parser makes an attempt to guarantee that all instances of type operator in term have the same arity The same protection is not provided for terms that are manually constructed",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "mkTypeOpVar",
          "normalized": "String-\u003eTypeOp",
          "package": "haskhol-core",
          "partial": "Type Op Var",
          "signature": "String-\u003eTypeOp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:mkTypeOpVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a universal type of a given bound type and body type.  Fails with\n  \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the bound type is not a small, type variable.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "mkUType",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLType -\u003e Either String HOLType",
          "source": "src/HaskHOL-Core-Kernel-Types.html#mkUType",
          "type": "function"
        },
        "index": {
          "description": "Constructs universal type of given bound type and body type Fails with Left if the bound type is not small type variable",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "mkUType",
          "normalized": "HOLType-\u003eHOLType-\u003eEither String HOLType",
          "package": "haskhol-core",
          "partial": "UType",
          "signature": "HOLType-\u003eHOLType-\u003eEither String HOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:mkUType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a compound universal type given a list of bound types and a body.    Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if any internal call to \u003ccode\u003e\u003ca\u003emkUType\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "mkUTypes",
          "package": "haskhol-core",
          "signature": "[HOLType] -\u003e HOLType -\u003e Either String HOLType",
          "source": "src/HaskHOL-Core-Kernel-Types.html#mkUTypes",
          "type": "function"
        },
        "index": {
          "description": "Constructs compound universal type given list of bound types and body Fails with Left if any internal call to mkUType fails",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "mkUTypes",
          "normalized": "[HOLType]-\u003eHOLType-\u003eEither String HOLType",
          "package": "haskhol-core",
          "partial": "UTypes",
          "signature": "[HOLType]-\u003eHOLType-\u003eEither String HOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:mkUTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a type variable of a given name.  Note that the resultant type \n  variable is unconstrained.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "mkVarType",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLType",
          "source": "src/HaskHOL-Core-Kernel-Types.html#mkVarType",
          "type": "function"
        },
        "index": {
          "description": "Constructs type variable of given name Note that the resultant type variable is unconstrained",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "mkVarType",
          "normalized": "String-\u003eHOLType",
          "package": "haskhol-core",
          "partial": "Var Type",
          "signature": "String-\u003eHOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:mkVarType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a primitive type operator of a given name and arity.  Primitive\n  type operators are used to represent constant, but undefined, types.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "newPrimTypeOp",
          "package": "haskhol-core",
          "signature": "String -\u003e Int -\u003e TypeOp",
          "source": "src/HaskHOL-Core-Kernel-Types.html#newPrimTypeOp",
          "type": "function"
        },
        "index": {
          "description": "Constructs primitive type operator of given name and arity Primitive type operators are used to represent constant but undefined types",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "newPrimTypeOp",
          "normalized": "String-\u003eInt-\u003eTypeOp",
          "package": "haskhol-core",
          "partial": "Prim Type Op",
          "signature": "String-\u003eInt-\u003eTypeOp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:newPrimTypeOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to the unconstrained type variable \u003ccode\u003eA\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyA",
          "package": "haskhol-core",
          "signature": "HOLType",
          "source": "src/HaskHOL-Core-Kernel-Types.html#tyA",
          "type": "function"
        },
        "index": {
          "description": "Alias to the unconstrained type variable",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyA",
          "package": "haskhol-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests if two types are alpha-equivalent.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyAConv",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLType -\u003e Bool",
          "source": "src/HaskHOL-Core-Kernel-Types.html#tyAConv",
          "type": "function"
        },
        "index": {
          "description": "Tests if two types are alpha-equivalent",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyAConv",
          "normalized": "HOLType-\u003eHOLType-\u003eBool",
          "package": "haskhol-core",
          "partial": "AConv",
          "signature": "HOLType-\u003eHOLType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyAConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides an ordering for two types modulo alpha-equivalence.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyAlphaOrder",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLType -\u003e Ordering",
          "source": "src/HaskHOL-Core-Kernel-Types.html#tyAlphaOrder",
          "type": "function"
        },
        "index": {
          "description": "Provides an ordering for two types modulo alpha-equivalence",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyAlphaOrder",
          "normalized": "HOLType-\u003eHOLType-\u003eOrdering",
          "package": "haskhol-core",
          "partial": "Alpha Order",
          "signature": "HOLType-\u003eHOLType-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyAlphaOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a type application from a provided type operator and list of type\n  arguments.  Fails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A type operator variable is applied to zero arguments.\n\u003c/li\u003e\u003cli\u003e A type operator's arity disagrees with the length of the argument list.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyApp",
          "package": "haskhol-core",
          "signature": "TypeOp -\u003e [HOLType] -\u003e Either String HOLType",
          "source": "src/HaskHOL-Core-Kernel-Types.html#tyApp",
          "type": "function"
        },
        "index": {
          "description": "Constructs type application from provided type operator and list of type arguments Fails with Left in the following cases type operator variable is applied to zero arguments type operator arity disagrees with the length of the argument list",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyApp",
          "normalized": "TypeOp-\u003e[HOLType]-\u003eEither String HOLType",
          "package": "haskhol-core",
          "partial": "App",
          "signature": "TypeOp-\u003e[HOLType]-\u003eEither String HOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to the unconstrained type variable \u003ccode\u003eB\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyB",
          "package": "haskhol-core",
          "signature": "HOLType",
          "source": "src/HaskHOL-Core-Kernel-Types.html#tyB",
          "type": "function"
        },
        "index": {
          "description": "Alias to the unconstrained type variable",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyB",
          "package": "haskhol-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to the primitive boolean type.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyBool",
          "package": "haskhol-core",
          "signature": "HOLType",
          "source": "src/HaskHOL-Core-Kernel-Types.html#tyBool",
          "type": "function"
        },
        "index": {
          "description": "Alias to the primitive boolean type",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyBool",
          "package": "haskhol-core",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to the primitive boolean type operator.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyOpBool",
          "package": "haskhol-core",
          "signature": "TypeOp",
          "source": "src/HaskHOL-Core-Kernel-Types.html#tyOpBool",
          "type": "function"
        },
        "index": {
          "description": "Alias to the primitive boolean type operator",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyOpBool",
          "package": "haskhol-core",
          "partial": "Op Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyOpBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to the primitive function type operator.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyOpFun",
          "package": "haskhol-core",
          "signature": "TypeOp",
          "source": "src/HaskHOL-Core-Kernel-Types.html#tyOpFun",
          "type": "function"
        },
        "index": {
          "description": "Alias to the primitive function type operator",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyOpFun",
          "package": "haskhol-core",
          "partial": "Op Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyOpFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of all free, type variables in a type, not including type\n  operator variables.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyVars",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e [HOLType]",
          "source": "src/HaskHOL-Core-Kernel-Types.html#tyVars",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of all free type variables in type not including type operator variables",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "tyVars",
          "normalized": "HOLType-\u003e[HOLType]",
          "package": "haskhol-core",
          "partial": "Vars",
          "signature": "HOLType-\u003e[HOLType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:tyVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the type of term.  Fails with a special type, \u003ccode\u003etyBottom\u003c/code\u003e, if the type\n  is poorly constructed; this keeps the function total without requiring the\n  use of an additional guard type like \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn practice, this type will never be seen provided the kernel is not modified\n  to expose the internal constructors for terms.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "typeOf",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLType",
          "source": "src/HaskHOL-Core-Kernel-Types.html#typeOf",
          "type": "function"
        },
        "index": {
          "description": "Returns the type of term Fails with special type tyBottom if the type is poorly constructed this keeps the function total without requiring the use of an additional guard type like Maybe In practice this type will never be seen provided the kernel is not modified to expose the internal constructors for terms",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "typeOf",
          "normalized": "HOLTerm-\u003eHOLType",
          "package": "haskhol-core",
          "partial": "Of",
          "signature": "HOLTerm-\u003eHOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of all type operator variables in a type.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "typeOpVars",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e [TypeOp]",
          "source": "src/HaskHOL-Core-Kernel-Types.html#typeOpVars",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of all type operator variables in type",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "typeOpVars",
          "normalized": "HOLType-\u003e[TypeOp]",
          "package": "haskhol-core",
          "partial": "Op Vars",
          "signature": "HOLType-\u003e[TypeOp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:typeOpVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRe-exports the internal type substitution function of the \u003ccode\u003e\u003ca\u003eTypeSubst\u003c/a\u003e\u003c/code\u003e class\n  to prevent unsound re-definition.  Invalid substitution pairs are pruned from\n  the environment such that substitution never fails.\n\u003c/p\u003e\u003cp\u003eNote that the order of elements in a substitution pair follows the convention\n  of most Haskell libraries, rather than the traditional HOL convention:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The second element is substituted for the first, i.e. the substitution pair\n    \u003ccode\u003e(tyA, tyBool)\u003c/code\u003e indicates that the boolean type should be substituted for\n    the type variable \u003ccode\u003eA\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "typeSubst",
          "package": "haskhol-core",
          "signature": "[(a, b)] -\u003e HOLType -\u003e HOLType",
          "source": "src/HaskHOL-Core-Kernel-Types.html#typeSubst",
          "type": "function"
        },
        "index": {
          "description": "Re-exports the internal type substitution function of the TypeSubst class to prevent unsound re-definition Invalid substitution pairs are pruned from the environment such that substitution never fails Note that the order of elements in substitution pair follows the convention of most Haskell libraries rather than the traditional HOL convention The second element is substituted for the first i.e the substitution pair tyA tyBool indicates that the boolean type should be substituted for the type variable",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "typeSubst",
          "normalized": "[(a,b)]-\u003eHOLType-\u003eHOLType",
          "package": "haskhol-core",
          "partial": "Subst",
          "signature": "[(a,b)]-\u003eHOLType-\u003eHOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:typeSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003etypeSubst\u003c/a\u003e\u003c/code\u003e that accepts a triplet of type substitution \n  environments.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "typeSubstFull",
          "package": "haskhol-core",
          "signature": "SubstTrip -\u003e HOLType -\u003e HOLType",
          "source": "src/HaskHOL-Core-Kernel-Types.html#typeSubstFull",
          "type": "function"
        },
        "index": {
          "description": "version of typeSubst that accepts triplet of type substitution environments",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "typeSubstFull",
          "normalized": "SubstTrip-\u003eHOLType-\u003eHOLType",
          "package": "haskhol-core",
          "partial": "Subst Full",
          "signature": "SubstTrip-\u003eHOLType-\u003eHOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:typeSubstFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a compound universal type from a type operator variable and a given\n  number of bound variables, i.e. \n\u003c/p\u003e\u003cpre\u003e uTypeFromTypeOpVar _T n === % 'A1 ... 'An. ('A1, ..., 'An)_T  \n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003en\u003c=0\u003c/code\u003e which would result in the application of a type operator to an\n    empty list of type arguments.\n\u003c/li\u003e\u003cli\u003e The type operator argument is not a variable. \n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "uTypeFromTypeOpVar",
          "package": "haskhol-core",
          "signature": "TypeOp -\u003e Int -\u003e Either String HOLType",
          "source": "src/HaskHOL-Core-Kernel-Types.html#uTypeFromTypeOpVar",
          "type": "function"
        },
        "index": {
          "description": "Constructs compound universal type from type operator variable and given number of bound variables i.e uTypeFromTypeOpVar A1 An A1 An Fails with Left in the following cases which would result in the application of type operator to an empty list of type arguments The type operator argument is not variable",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "uTypeFromTypeOpVar",
          "normalized": "TypeOp-\u003eInt-\u003eEither String HOLType",
          "package": "haskhol-core",
          "partial": "Type From Type Op Var",
          "signature": "TypeOp-\u003eInt-\u003eEither String HOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:uTypeFromTypeOpVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenames a type variable to avoid sharing a name with any of a given list of\n  type variables.  Note that this function is both smallness presserving and\n  respecting.  Returns the original type if it's not a type variable.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "variantTyVar",
          "package": "haskhol-core",
          "signature": "[HOLType] -\u003e HOLType -\u003e HOLType",
          "source": "src/HaskHOL-Core-Kernel-Types.html#variantTyVar",
          "type": "function"
        },
        "index": {
          "description": "Renames type variable to avoid sharing name with any of given list of type variables Note that this function is both smallness presserving and respecting Returns the original type if it not type variable",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "variantTyVar",
          "normalized": "[HOLType]-\u003eHOLType-\u003eHOLType",
          "package": "haskhol-core",
          "partial": "Ty Var",
          "signature": "[HOLType]-\u003eHOLType-\u003eHOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:variantTyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenames a list of type variables to avoid sharing a name with any of a given\n  list of type variables.  As each type variable is processed it is added to the\n  list of avoids such that the resultant list of type variables are all uniquely\n  named.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "variantTyVars",
          "package": "haskhol-core",
          "signature": "[HOLType] -\u003e [HOLType] -\u003e [HOLType]",
          "source": "src/HaskHOL-Core-Kernel-Types.html#variantTyVars",
          "type": "function"
        },
        "index": {
          "description": "Renames list of type variables to avoid sharing name with any of given list of type variables As each type variable is processed it is added to the list of avoids such that the resultant list of type variables are all uniquely named",
          "hierarchy": "HaskHOL Core Kernel Types",
          "module": "HaskHOL.Core.Kernel.Types",
          "name": "variantTyVars",
          "normalized": "[HOLType]-\u003e[HOLType]-\u003e[HOLType]",
          "package": "haskhol-core",
          "partial": "Ty Vars",
          "signature": "[HOLType]-\u003e[HOLType]-\u003e[HOLType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel-Types.html#v:variantTyVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the logical kernel of HaskHOL.  It consists of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The view pattern required to pattern match on terms outside of the kernel.\n\u003c/li\u003e\u003cli\u003e A safe view of HOL theorems for HaskHOL.\n\u003c/li\u003e\u003cli\u003e The primitive inference rules of the system.\n\u003c/li\u003e\u003cli\u003e The primitive, stateless theory extension functions.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor clarity, all of these items have been seperated based on their influential\n  system: HOL Light, Stateless HOL, and HOL2P.\n\u003c/p\u003e\u003cp\u003eNote that, per the stateless approach, any stateful, but still primitive,\n  functions related to theorems or theory extension have been relocated to the \n  \u003ca\u003eHaskHOL.Core.State\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "Kernel",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the logical kernel of HaskHOL It consists of The view pattern required to pattern match on terms outside of the kernel safe view of HOL theorems for HaskHOL The primitive inference rules of the system The primitive stateless theory extension functions For clarity all of these items have been seperated based on their influential system HOL Light Stateless HOL and HOL2P Note that per the stateless approach any stateful but still primitive functions related to theorems or theory extension have been relocated to the HaskHOL.Core.State module",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "Kernel",
          "package": "haskhol-core",
          "partial": "Kernel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHOLThm\u003c/a\u003e\u003c/code\u003e data type defines HOL Theorems in HaskHOL.  A theorem is defined\n  simply as a list of assumption terms and a conclusion term.\n\u003c/p\u003e\u003cp\u003eNote that this representation, in combination with a stateless \n  approach, means that the introduction of axioms is not tracked in the kernel.\n  Axioms can be tracked once the stateful layer of the prover is introduced,\n  though.  For more details see the documentation for \u003ccode\u003enewAxiom\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "HOLThm",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLThm",
          "type": "data"
        },
        "index": {
          "description": "The HOLThm data type defines HOL Theorems in HaskHOL theorem is defined simply as list of assumption terms and conclusion term Note that this representation in combination with stateless approach means that the introduction of axioms is not tracked in the kernel Axioms can be tracked once the stateful layer of the prover is introduced though For more details see the documentation for newAxiom",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "HOLThm",
          "package": "haskhol-core",
          "partial": "HOLThm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#t:HOLThm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe view pattern data type for HOL theorems.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "HOLThmView",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLThmView",
          "type": "data"
        },
        "index": {
          "description": "The view pattern data type for HOL theorems",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "HOLThmView",
          "package": "haskhol-core",
          "partial": "HOLThm View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#t:HOLThmView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HaskHOL.Core.Kernel",
          "name": "Thm",
          "package": "haskhol-core",
          "signature": "Thm [HOLTerm] HOLTerm",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#HOLThmView",
          "type": "function"
        },
        "index": {
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "Thm",
          "normalized": "Thm[HOLTerm]HOLTerm",
          "package": "haskhol-core",
          "partial": "Thm",
          "signature": "Thm[HOLTerm]HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:Thm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new axiom theorem.  \n\u003c/p\u003e\u003cp\u003eNote that, as discussed in the documentation for \u003ccode\u003e\u003ca\u003eHOLThm\u003c/a\u003e\u003c/code\u003e, the introduction of\n  axioms is not tracked until the stateful layer of the system is introduced so \n  be careful using this function.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "axiomThm",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#axiomThm",
          "type": "function"
        },
        "index": {
          "description": "Creates new axiom theorem Note that as discussed in the documentation for HOLThm the introduction of axioms is not tracked until the stateful layer of the system is introduced so be careful using this function",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "axiomThm",
          "normalized": "HOLTerm-\u003eHOLThm",
          "package": "haskhol-core",
          "partial": "Thm",
          "signature": "HOLTerm-\u003eHOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:axiomThm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor for the conclusion term of a theorem.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "concl",
          "package": "haskhol-core",
          "signature": "HOLThm -\u003e HOLTerm",
          "source": "src/HaskHOL-Core-Kernel.html#concl",
          "type": "function"
        },
        "index": {
          "description": "Accessor for the conclusion term of theorem",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "concl",
          "normalized": "HOLThm-\u003eHOLTerm",
          "package": "haskhol-core",
          "signature": "HOLThm-\u003eHOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:concl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructs a theorem, returning its list of assumption terms and conclusion\n  term.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "destThm",
          "package": "haskhol-core",
          "signature": "HOLThm -\u003e ([HOLTerm], HOLTerm)",
          "source": "src/HaskHOL-Core-Kernel.html#destThm",
          "type": "function"
        },
        "index": {
          "description": "Destructs theorem returning its list of assumption terms and conclusion term",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "destThm",
          "normalized": "HOLThm-\u003e([HOLTerm],HOLTerm)",
          "package": "haskhol-core",
          "partial": "Thm",
          "signature": "HOLThm-\u003e([HOLTerm],HOLTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:destThm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor for the hypotheses, or assumption terms, of a theorem.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "hyp",
          "package": "haskhol-core",
          "signature": "HOLThm -\u003e [HOLTerm]",
          "source": "src/HaskHOL-Core-Kernel.html#hyp",
          "type": "function"
        },
        "index": {
          "description": "Accessor for the hypotheses or assumption terms of theorem",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "hyp",
          "normalized": "HOLThm-\u003e[HOLTerm]",
          "package": "haskhol-core",
          "signature": "HOLThm-\u003e[HOLTerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:hyp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n   c = t  \n-----------\n |- c = t\n\u003c/pre\u003e\u003cp\u003eCreates a new defined constant given a term that equates a variable of the\n  desired constant name and type to its desired definition.  The return value \n  is a pair of the new constant and its definitional theorem.  \n\u003c/p\u003e\u003cp\u003eNote that internally the constant is tagged with its definitional term via the\n  \u003ccode\u003eDefined\u003c/code\u003e \u003ccode\u003e\u003ca\u003eConstTag\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The provided term is not an equation.\n\u003c/li\u003e\u003cli\u003e The provided term is not closed.\n\u003c/li\u003e\u003cli\u003e There are free type variables present in the definition that are not also in\n    the desired type of the constant.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "newDefinedConst",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Either String (HOLTerm, HOLThm)",
          "source": "src/HaskHOL-Core-Kernel.html#newDefinedConst",
          "type": "function"
        },
        "index": {
          "description": "Creates new defined constant given term that equates variable of the desired constant name and type to its desired definition The return value is pair of the new constant and its definitional theorem Note that internally the constant is tagged with its definitional term via the Defined ConstTag Fails with Left in the following cases The provided term is not an equation The provided term is not closed There are free type variables present in the definition that are not also in the desired type of the constant",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "newDefinedConst",
          "normalized": "HOLTerm-\u003eEither String(HOLTerm,HOLThm)",
          "package": "haskhol-core",
          "partial": "Defined Const",
          "signature": "HOLTerm-\u003eEither String(HOLTerm,HOLThm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:newDefinedConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n                           |- p x:rep\n-----------------------------------------------------------------\n (|- mk:rep-\u003ety (dest:ty-\u003erep a) = a, |- P r \u003c=\u003e dest(mk r) = r)\n\u003c/pre\u003e\u003cp\u003eCreates a new defined type constant that is defined as an inhabited subset\n  of an existing type constant.  The return value is a pentuple that \n  collectively provides a bijection between the new type and the old type.\n\u003c/p\u003e\u003cp\u003eThe following four items are taken as input:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The name of the new type constant - \u003ccode\u003ety\u003c/code\u003e in the above sequent.\n\u003c/li\u003e\u003cli\u003e The name of the new term constant that will be used to make an instance of \n    the new type - \u003ccode\u003emk\u003c/code\u003e in the above sequent.\n\u003c/li\u003e\u003cli\u003e The name of the new term constant that will be used to destruct an instance\n    of the new type - \u003ccode\u003edest\u003c/code\u003e in the above sequent.\n\u003c/li\u003e\u003cli\u003e A theorem proving that the desired subset is non-empty.  The conclusion of\n    this theorem must take the form \u003ccode\u003ep x\u003c/code\u003e where \u003ccode\u003ep\u003c/code\u003e is the predicate that\n    defines the subset and \u003ccode\u003ex\u003c/code\u003e is a witness to inhabitation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe following items are returned as part of the resultant pentuple:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The new defined type operator.  These type operators carry their name,\n    arity, and definitional theorem.  The arity, in this case, is inferred from\n    the number of free type variables found in the predicate of the definitional\n    theorem.\n\u003c/li\u003e\u003cli\u003e The new term constants, \u003ccode\u003emk\u003c/code\u003e and \u003ccode\u003edest\u003c/code\u003e, as described above.  Note that \n    constants constructed in this manner are tagged with special instances of \n    \u003ccode\u003e\u003ca\u003eConstTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eMkAbstract\u003c/code\u003e and \u003ccode\u003eDestAbstract\u003c/code\u003e accordingly, that carry the \n    name, arity, and definitional theorem of their related type constant.\n\u003c/li\u003e\u003cli\u003e The two theorems proving the bijection, as shown in the sequent above.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "newDefinedTypeOp",
          "package": "haskhol-core",
          "signature": "String -\u003e String -\u003e String -\u003e HOLThm -\u003e Either String (TypeOp, HOLTerm, HOLTerm, HOLThm, HOLThm)",
          "source": "src/HaskHOL-Core-Kernel.html#newDefinedTypeOp",
          "type": "function"
        },
        "index": {
          "description": "rep mk rep ty dest ty rep dest mk Creates new defined type constant that is defined as an inhabited subset of an existing type constant The return value is pentuple that collectively provides bijection between the new type and the old type The following four items are taken as input The name of the new type constant ty in the above sequent The name of the new term constant that will be used to make an instance of the new type mk in the above sequent The name of the new term constant that will be used to destruct an instance of the new type dest in the above sequent theorem proving that the desired subset is non-empty The conclusion of this theorem must take the form where is the predicate that defines the subset and is witness to inhabitation The following items are returned as part of the resultant pentuple The new defined type operator These type operators carry their name arity and definitional theorem The arity in this case is inferred from the number of free type variables found in the predicate of the definitional theorem The new term constants mk and dest as described above Note that constants constructed in this manner are tagged with special instances of ConstTag MkAbstract and DestAbstract accordingly that carry the name arity and definitional theorem of their related type constant The two theorems proving the bijection as shown in the sequent above",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "newDefinedTypeOp",
          "normalized": "String-\u003eString-\u003eString-\u003eHOLThm-\u003eEither String(TypeOp,HOLTerm,HOLTerm,HOLThm,HOLThm)",
          "package": "haskhol-core",
          "partial": "Defined Type Op",
          "signature": "String-\u003eString-\u003eString-\u003eHOLThm-\u003eEither String(TypeOp,HOLTerm,HOLTerm,HOLThm,HOLThm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:newDefinedTypeOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n          A |- t1 = t2\n-------------------------------\n A |- (\\ x . t1) = (\\ x . t2)\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The term to bind is free in the assumption list of the theorem.\n\u003c/li\u003e\u003cli\u003e The conclusion of the theorem is not an equation.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primABS",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLThm -\u003e Either String HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primABS",
          "type": "function"
        },
        "index": {
          "description": "t1 t2 t1 t2 Fails with Left in the following cases The term to bind is free in the assumption list of the theorem The conclusion of the theorem is not an equation",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primABS",
          "normalized": "HOLTerm-\u003eHOLThm-\u003eEither String HOLThm",
          "package": "haskhol-core",
          "partial": "ABS",
          "signature": "HOLTerm-\u003eHOLThm-\u003eEither String HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primABS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n     t\n-----------\n   t |- t\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the term is not a proposition.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primASSUME",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Maybe HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primASSUME",
          "type": "function"
        },
        "index": {
          "description": "Fails with Nothing if the term is not proposition",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primASSUME",
          "normalized": "HOLTerm-\u003eMaybe HOLThm",
          "package": "haskhol-core",
          "partial": "ASSUME",
          "signature": "HOLTerm-\u003eMaybe HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primASSUME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n        (\\ x . t[x]) x\n-------------------------------\n     |- (\\ x . t) x = t[x]\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The term is not a valid application.\n\u003c/li\u003e\u003cli\u003e The reduction is not a trivial one, i.e. the argument term is not equivalent\n    to the bound variable.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primBETA",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Either String HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primBETA",
          "type": "function"
        },
        "index": {
          "description": "Fails with Left in the following cases The term is not valid application The reduction is not trivial one i.e the argument term is not equivalent to the bound variable",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primBETA",
          "normalized": "HOLTerm-\u003eEither String HOLThm",
          "package": "haskhol-core",
          "partial": "BETA",
          "signature": "HOLTerm-\u003eEither String HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primBETA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n       A |- p       B |- q       \n----------------------------------\n (A - {q}) U (B - {p}) |- p \u003c=\u003e q\n\u003c/pre\u003e\u003cp\u003eNever fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primDEDUCT_ANTISYM_RULE",
          "package": "haskhol-core",
          "signature": "HOLThm -\u003e HOLThm -\u003e HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primDEDUCT_ANTISYM_RULE",
          "type": "function"
        },
        "index": {
          "description": "Never fails",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primDEDUCT_ANTISYM_RULE",
          "normalized": "HOLThm-\u003eHOLThm-\u003eHOLThm",
          "package": "haskhol-core",
          "partial": "DEDUCT ANTISYM RULE",
          "signature": "HOLThm-\u003eHOLThm-\u003eHOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primDEDUCT_ANTISYM_RULE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n A1 |- t1 = t2   A2 |- t1\n----------------------------\n      A1 U A2 |- t2\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The conclusion of the first theorem is not an equation.\n\u003c/li\u003e\u003cli\u003e The conclusion term of the second theorem and the left hand side of the \n    equation are not alpha-equivalent.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primEQ_MP",
          "package": "haskhol-core",
          "signature": "HOLThm -\u003e HOLThm -\u003e Either String HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primEQ_MP",
          "type": "function"
        },
        "index": {
          "description": "A1 t1 t2 A2 t1 A1 A2 t2 Fails with Left in the following cases The conclusion of the first theorem is not an equation The conclusion term of the second theorem and the left hand side of the equation are not alpha-equivalent",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primEQ_MP",
          "normalized": "HOLThm-\u003eHOLThm-\u003eEither String HOLThm",
          "package": "haskhol-core",
          "partial": "EQ MP",
          "signature": "HOLThm-\u003eHOLThm-\u003eEither String HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primEQ_MP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n [(t1, x1), ..., (tn, xn)]   A |- t          \n------------------------------------\n   A[t1, ..., tn/x1, ..., xn]\n    |- t[t1, ..., tn/x1, ..., xn]   \n\u003c/pre\u003e\u003cp\u003eNever fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primINST",
          "package": "haskhol-core",
          "signature": "HOLTermEnv -\u003e HOLThm -\u003e HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primINST",
          "type": "function"
        },
        "index": {
          "description": "t1 x1 tn xn t1 tn x1 xn t1 tn x1 xn Never fails",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primINST",
          "normalized": "HOLTermEnv-\u003eHOLThm-\u003eHOLThm",
          "package": "haskhol-core",
          "partial": "INST",
          "signature": "HOLTermEnv-\u003eHOLThm-\u003eHOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primINST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n [(ty1, tv1), ..., (tyn, tvn)]   A |- t              \n----------------------------------------\n   A[ty1, ..., tyn/tv1, ..., tvn]\n    |- t[ty1, ..., tyn/tv1, ..., tvn]\n\u003c/pre\u003e\u003cp\u003eNever fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primINST_TYPE",
          "package": "haskhol-core",
          "signature": "[(a, b)] -\u003e HOLThm -\u003e HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primINST_TYPE",
          "type": "function"
        },
        "index": {
          "description": "ty1 tv1 tyn tvn ty1 tyn tv1 tvn ty1 tyn tv1 tvn Never fails",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primINST_TYPE",
          "normalized": "[(a,b)]-\u003eHOLThm-\u003eHOLThm",
          "package": "haskhol-core",
          "partial": "INST TYPE",
          "signature": "[(a,b)]-\u003eHOLThm-\u003eHOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primINST_TYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eprimINST_TYPE\u003c/a\u003e\u003c/code\u003e that instantiates a theorem via \u003ccode\u003e\u003ca\u003einstFull\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primINST_TYPE_FULL",
          "package": "haskhol-core",
          "signature": "SubstTrip -\u003e HOLThm -\u003e HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primINST_TYPE_FULL",
          "type": "function"
        },
        "index": {
          "description": "version of primINST TYPE that instantiates theorem via instFull",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primINST_TYPE_FULL",
          "normalized": "SubstTrip-\u003eHOLThm-\u003eHOLThm",
          "package": "haskhol-core",
          "partial": "INST TYPE FULL",
          "signature": "SubstTrip-\u003eHOLThm-\u003eHOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primINST_TYPE_FULL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n A1 |- f = g   A2 |- x = y\n---------------------------\n    A1 U A2 |- f x = g y\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e One, or both, of the theorem conclusions is not an equation.\n\u003c/li\u003e\u003cli\u003e The first theorem conclusion is not an equation of function terms.\n\u003c/li\u003e\u003cli\u003e The types of the function terms and argument terms do not agree.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primMK_COMB",
          "package": "haskhol-core",
          "signature": "HOLThm -\u003e HOLThm -\u003e Either String HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primMK_COMB",
          "type": "function"
        },
        "index": {
          "description": "A1 A2 A1 A2 Fails with Left in the following cases One or both of the theorem conclusions is not an equation The first theorem conclusion is not an equation of function terms The types of the function terms and argument terms do not agree",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primMK_COMB",
          "normalized": "HOLThm-\u003eHOLThm-\u003eEither String HOLThm",
          "package": "haskhol-core",
          "partial": "MK COMB",
          "signature": "HOLThm-\u003eHOLThm-\u003eEither String HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primMK_COMB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n     t    \n-----------\n |- t = t\n\u003c/pre\u003e\u003cp\u003eNever fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primREFL",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primREFL",
          "type": "function"
        },
        "index": {
          "description": "Never fails",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primREFL",
          "normalized": "HOLTerm-\u003eHOLThm",
          "package": "haskhol-core",
          "partial": "REFL",
          "signature": "HOLTerm-\u003eHOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primREFL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n A1 |- t1 = t2   A2 |- t2 = t3\n-------------------------------\n       A1 U A2 |- t1 = t3     \n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The middle terms are not alpha-equivalent.\n\u003c/li\u003e\u003cli\u003e One, or both, of the theorem conclusions is not an equation.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primTRANS",
          "package": "haskhol-core",
          "signature": "HOLThm -\u003e HOLThm -\u003e Either String HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primTRANS",
          "type": "function"
        },
        "index": {
          "description": "A1 t1 t2 A2 t2 t3 A1 A2 t1 t3 Fails with Left in the following cases The middle terms are not alpha-equivalent One or both of the theorem conclusions is not an equation",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primTRANS",
          "normalized": "HOLThm-\u003eHOLThm-\u003eEither String HOLThm",
          "package": "haskhol-core",
          "partial": "TRANS",
          "signature": "HOLThm-\u003eHOLThm-\u003eEither String HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primTRANS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n          A |- t1 = t2\n-------------------------------\n A |- (\\\\ x . t1) = (\\\\ x . t2)\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The type to bind is not a small type variable. \n\u003c/li\u003e\u003cli\u003e The conclusion of the theorem is not an equation.\n\u003c/li\u003e\u003cli\u003e The type to bind is free in the assumption list of the theorem. \n\u003c/li\u003e\u003cli\u003e The type variable to bind is free in the conclusion of the theorem.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primTYABS",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLThm -\u003e Either String HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primTYABS",
          "type": "function"
        },
        "index": {
          "description": "t1 t2 t1 t2 Fails with Left in the following cases The type to bind is not small type variable The conclusion of the theorem is not an equation The type to bind is free in the assumption list of the theorem The type variable to bind is free in the conclusion of the theorem",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primTYABS",
          "normalized": "HOLType-\u003eHOLThm-\u003eEither String HOLThm",
          "package": "haskhol-core",
          "partial": "TYABS",
          "signature": "HOLType-\u003eHOLThm-\u003eEither String HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primTYABS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n        A |- t1 = t2\n----------------------------\n A |- t1 [: ty] = t2 [: ty]\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the conclusion of the theorem is not an equation.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eprimTYAPP\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ca\u003eprimTYAPP2\u003c/a\u003e\u003c/code\u003e when the same type is\n  applied to both sides, i.e. \n\u003c/p\u003e\u003cpre\u003e primTYAPP ty === primTYAPP2 ty ty\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primTYAPP",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLThm -\u003e Maybe HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primTYAPP",
          "type": "function"
        },
        "index": {
          "description": "t1 t2 t1 ty t2 ty Fails with Nothing if the conclusion of the theorem is not an equation Note that primTYAPP is equivalent to primTYAPP2 when the same type is applied to both sides i.e primTYAPP ty primTYAPP2 ty ty",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primTYAPP",
          "normalized": "HOLType-\u003eHOLThm-\u003eMaybe HOLThm",
          "package": "haskhol-core",
          "partial": "TYAPP",
          "signature": "HOLType-\u003eHOLThm-\u003eMaybe HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primTYAPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n          A |- t1 = t2\n-------------------------------\n A |- t1 [: ty1] = t2 [: ty2]\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The conclusion of the theorem is not an equation of terms of universal type.\n\u003c/li\u003e\u003cli\u003e The type arguments are not alpha-equivalent.\n\u003c/li\u003e\u003cli\u003e One, or both, of the type arguments is not small.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primTYAPP2",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLType -\u003e HOLThm -\u003e Either String HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primTYAPP2",
          "type": "function"
        },
        "index": {
          "description": "t1 t2 t1 ty1 t2 ty2 Fails with Left in the following cases The conclusion of the theorem is not an equation of terms of universal type The type arguments are not alpha-equivalent One or both of the type arguments is not small",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primTYAPP2",
          "normalized": "HOLType-\u003eHOLType-\u003eHOLThm-\u003eEither String HOLThm",
          "package": "haskhol-core",
          "partial": "TYAPP",
          "signature": "HOLType-\u003eHOLType-\u003eHOLThm-\u003eEither String HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primTYAPP2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n     (\\\\ ty . t[ty]) [: ty]    \n---------------------------------\n |- (\\\\ ty . t[ty]) [: ty] = t\n\u003c/pre\u003e\u003cp\u003eFails with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The term is not a valid type application.\n\u003c/li\u003e\u003cli\u003e The reduction is not a trivial one, i.e. the argument type is not equivalent\n    to the bound type variable.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "primTYBETA",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e Either String HOLThm",
          "source": "src/HaskHOL-Core-Kernel.html#primTYBETA",
          "type": "function"
        },
        "index": {
          "description": "ty ty ty ty ty ty Fails with Left in the following cases The term is not valid type application The reduction is not trivial one i.e the argument type is not equivalent to the bound type variable",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "primTYBETA",
          "normalized": "HOLTerm-\u003eEither String HOLThm",
          "package": "haskhol-core",
          "partial": "TYBETA",
          "signature": "HOLTerm-\u003eEither String HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:primTYBETA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe view pattern function for HaskHOL's primitive data types:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For types - Converts from \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHOLTypeView\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e For terms - Converts from \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHOLTermView\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e For theorems - Converts from \u003ccode\u003e\u003ca\u003eHOLThm\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHOLThmView\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Kernel",
          "name": "view",
          "package": "haskhol-core",
          "signature": "a -\u003e b",
          "source": "src/HaskHOL-Core-Kernel-Prims.html#view",
          "type": "function"
        },
        "index": {
          "description": "The view pattern function for HaskHOL primitive data types For types Converts from HOLType to HOLTypeView For terms Converts from HOLTerm to HOLTermView For theorems Converts from HOLThm to HOLThmView",
          "hierarchy": "HaskHOL Core Kernel",
          "module": "HaskHOL.Core.Kernel",
          "name": "view",
          "normalized": "a-\u003eb",
          "package": "haskhol-core",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Kernel.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a re-export of the th-lift library originally written by Ian\n  Lynagh and maintained by Mathieu Boespflug.  A very minor change was made by\n  Evan Austin in order to facilitate derivation of lift instances for quantified\n  type constructors.\n\u003c/p\u003e\u003cp\u003eThe decision to include this source as part of the HaskHOL system, rather than\n  import the original library, was made to facilitate the above change and to\n  sever HaskHOL's only dependence on a non-Haskell Platform library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HaskHOL.Core.Lib.Lift",
          "name": "Lift",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Lib-Lift.html",
          "type": "module"
        },
        "index": {
          "description": "This module is re-export of the th-lift library originally written by Ian Lynagh and maintained by Mathieu Boespflug very minor change was made by Evan Austin in order to facilitate derivation of lift instances for quantified type constructors The decision to include this source as part of the HaskHOL system rather than import the original library was made to facilitate the above change and to sever HaskHOL only dependence on non-Haskell Platform library",
          "hierarchy": "HaskHOL Core Lib Lift",
          "module": "HaskHOL.Core.Lib.Lift",
          "name": "Lift",
          "package": "haskhol-core",
          "partial": "Lift",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib-Lift.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive Lift instances for the given datatype.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib.Lift",
          "name": "deriveLift",
          "package": "haskhol-core",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/HaskHOL-Core-Lib-Lift.html#deriveLift",
          "type": "function"
        },
        "index": {
          "description": "Derive Lift instances for the given datatype",
          "hierarchy": "HaskHOL Core Lib Lift",
          "module": "HaskHOL.Core.Lib.Lift",
          "name": "deriveLift",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "haskhol-core",
          "partial": "Lift",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib-Lift.html#v:deriveLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain Info values through a custom reification function. This is useful\n when generating instances for datatypes that have not yet been declared.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib.Lift",
          "name": "deriveLift'",
          "package": "haskhol-core",
          "signature": "Info -\u003e Q [Dec]",
          "source": "src/HaskHOL-Core-Lib-Lift.html#deriveLift%27",
          "type": "function"
        },
        "index": {
          "description": "Obtain Info values through custom reification function This is useful when generating instances for datatypes that have not yet been declared",
          "hierarchy": "HaskHOL Core Lib Lift",
          "module": "HaskHOL.Core.Lib.Lift",
          "name": "deriveLift'",
          "normalized": "Info-\u003eQ[Dec]",
          "package": "haskhol-core",
          "partial": "Lift'",
          "signature": "Info-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib-Lift.html#v:deriveLift-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive Lift instances for many datatypes.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib.Lift",
          "name": "deriveLiftMany",
          "package": "haskhol-core",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/HaskHOL-Core-Lib-Lift.html#deriveLiftMany",
          "type": "function"
        },
        "index": {
          "description": "Derive Lift instances for many datatypes",
          "hierarchy": "HaskHOL Core Lib Lift",
          "module": "HaskHOL.Core.Lib.Lift",
          "name": "deriveLiftMany",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "haskhol-core",
          "partial": "Lift Many",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib-Lift.html#v:deriveLiftMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines or re-exports common utility functions, type classes, \n  and auxilliary data types used in HaskHOL.  The following conventions hold \n  true:\n  * Where possible, we favor re-exporting common functions rather than\n    redefining them. \n  * We favor re-exporting individual functions rather entire modules to reduce\n    the number of items in our utility library.\n  * We default to the names of functions commonly used by Haskell libraries,\n    however, if there's a different name for a function in HOL systems we\n    include an alias for it.  For example, \u003ccode\u003e\u003ca\u003eiComb\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that none of the functions in this module depend on data types \n  introduced by HaskHOL.  Utility functions that do have such a dependence are \n  found in the \u003ca\u003eHaskHOL.Core.Basics\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "Lib",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Lib.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines or re-exports common utility functions type classes and auxilliary data types used in HaskHOL The following conventions hold true Where possible we favor re-exporting common functions rather than redefining them We favor re-exporting individual functions rather entire modules to reduce the number of items in our utility library We default to the names of functions commonly used by Haskell libraries however if there different name for function in HOL systems we include an alias for it For example iComb and id Note that none of the functions in this module depend on data types introduced by HaskHOL Utility functions that do have such dependence are found in the HaskHOL.Core.Basics module",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "Lib",
          "package": "haskhol-core",
          "partial": "Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eLang\u003c/a\u003e\u003c/code\u003e class defines common language operations and combinators not based\n  on sequencing.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "Lang",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Lib.html#Lang",
          "type": "class"
        },
        "index": {
          "description": "The Lang class defines common language operations and combinators not based on sequencing",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "Lang",
          "package": "haskhol-core",
          "partial": "Lang",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#t:Lang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eLangSeq\u003c/a\u003e\u003c/code\u003e class defines common language operations and combinators based\n  on sequencing.  See the note at the top of this section for more details as\n  to why these are separated on their own.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "LangSeq",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Lib.html#LangSeq",
          "type": "class"
        },
        "index": {
          "description": "The LangSeq class defines common language operations and combinators based on sequencing See the note at the top of this section for more details as to why these are separated on their own",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "LangSeq",
          "package": "haskhol-core",
          "partial": "Lang Seq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#t:LangSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eLiftOption\u003c/a\u003e\u003c/code\u003e class provides an infix operator to more cleanly apply the\n  \u003ccode\u003e\u003ca\u003efromJustM\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromRightM\u003c/a\u003e\u003c/code\u003e methods to a value that will be passed to a\n  monadic computation.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "LiftOption",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Lib.html#LiftOption",
          "type": "class"
        },
        "index": {
          "description": "The LiftOption class provides an infix operator to more cleanly apply the fromJustM and fromRightM methods to value that will be passed to monadic computation",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "LiftOption",
          "package": "haskhol-core",
          "partial": "Lift Option",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#t:LiftOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e class provides an ad hoc way of tagging an error case with a\n  string.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "Note",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Lib.html#Note",
          "type": "class"
        },
        "index": {
          "description": "The Note class provides an ad hoc way of tagging an error case with string",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "Note",
          "package": "haskhol-core",
          "partial": "Note",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#t:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003e=\u003c\u003c\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eliftO\u003c/a\u003e\u003c/code\u003e for the right argument.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "(#\u003c\u003c)",
          "package": "haskhol-core",
          "signature": "(a -\u003e m b) -\u003e l a -\u003e m b",
          "source": "src/HaskHOL-Core-Lib.html#%23%3C%3C",
          "type": "method"
        },
        "index": {
          "description": "version of composed with liftO for the right argument",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "(#\u003c\u003c) #\u003c\u003c",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb c",
          "package": "haskhol-core",
          "signature": "(a-\u003em b)-\u003el a-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:-35--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003e\u003c=\u003c\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eliftO\u003c/a\u003e\u003c/code\u003e for the right argument.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "(\u003c#\u003c)",
          "package": "haskhol-core",
          "signature": "(b -\u003e m c) -\u003e (a -\u003e l b) -\u003e a -\u003e m c",
          "source": "src/HaskHOL-Core-Lib.html#%3C%23%3C",
          "type": "method"
        },
        "index": {
          "description": "version of composed with liftO for the right argument",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "(\u003c#\u003c) \u003c#\u003c",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003ee a)-\u003ed-\u003eb c",
          "package": "haskhol-core",
          "signature": "(b-\u003em c)-\u003e(a-\u003el b)-\u003ea-\u003em c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:-60--35--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eliftM1\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eliftO\u003c/a\u003e\u003c/code\u003e for the right argument.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "(\u003c#\u003e)",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e m c) -\u003e l a -\u003e b -\u003e m c",
          "source": "src/HaskHOL-Core-Lib.html#%3C%23%3E",
          "type": "method"
        },
        "index": {
          "description": "version of liftM1 composed with liftO for the right argument",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "(\u003c#\u003e) \u003c#\u003e",
          "normalized": "(a-\u003eb-\u003ec d)-\u003ee a-\u003eb-\u003ec d",
          "package": "haskhol-core",
          "signature": "(a-\u003eb-\u003em c)-\u003el a-\u003eb-\u003em c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:-60--35--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to annotate more precise error messages.  Replaces the \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e operator \n    in cases such as  \n\u003c/p\u003e\u003cpre\u003e ... \u003c|\u003e fail \"...\"\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "(\u003c?\u003e)",
          "package": "haskhol-core",
          "signature": "m a -\u003e String -\u003e m a",
          "source": "src/HaskHOL-Core-Lib.html#%3C%3F%3E",
          "type": "method"
        },
        "index": {
          "description": "Used to annotate more precise error messages Replaces the operator in cases such as fail",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "a b-\u003eString-\u003ea b",
          "package": "haskhol-core",
          "signature": "m a-\u003eString-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtracts one list from the other.  A re-export of \u003ccode\u003e\u003ca\u003e\\\\\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "(\\\\)",
          "package": "haskhol-core",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "Subtracts one list from the other re-export of",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "(\\\\) \\\\",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA primitive language operation that always succeeds.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "_ALL",
          "package": "haskhol-core",
          "signature": "a",
          "source": "src/HaskHOL-Core-Lib.html#_ALL",
          "type": "method"
        },
        "index": {
          "description": "primitive language operation that always succeeds",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "_ALL",
          "package": "haskhol-core",
          "partial": "ALL",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_ALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA language combinator that fails if the wrapped operation doesn't invoke\n      some change, i.e. a tactic fails to change the goal state.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "_CHANGED",
          "package": "haskhol-core",
          "signature": "a -\u003e a",
          "source": "src/HaskHOL-Core-Lib.html#_CHANGED",
          "type": "method"
        },
        "index": {
          "description": "language combinator that fails if the wrapped operation doesn invoke some change i.e tactic fails to change the goal state",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "_CHANGED",
          "normalized": "a-\u003ea",
          "package": "haskhol-core",
          "partial": "CHANGED",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_CHANGED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA language combinator that performs every operation in a list  \n      sequentially.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "_EVERY",
          "package": "haskhol-core",
          "signature": "[a] -\u003e a",
          "source": "src/HaskHOL-Core-Lib.html#_EVERY",
          "type": "method"
        },
        "index": {
          "description": "language combinator that performs every operation in list sequentially",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "_EVERY",
          "normalized": "[a]-\u003ea",
          "package": "haskhol-core",
          "partial": "EVERY",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_EVERY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA primitive language operation that always fails.  Typically this is\n      written using \u003ccode\u003ethrow\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "_FAIL",
          "package": "haskhol-core",
          "signature": "String -\u003e a",
          "source": "src/HaskHOL-Core-Lib.html#_FAIL",
          "type": "method"
        },
        "index": {
          "description": "primitive language operation that always fails Typically this is written using throw",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "_FAIL",
          "normalized": "String-\u003ea",
          "package": "haskhol-core",
          "partial": "FAIL",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_FAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA language combinator that performs the first operation in a list.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "_FIRST",
          "package": "haskhol-core",
          "signature": "[a] -\u003e a",
          "source": "src/HaskHOL-Core-Lib.html#_FIRST",
          "type": "method"
        },
        "index": {
          "description": "language combinator that performs the first operation in list",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "_FIRST",
          "normalized": "[a]-\u003ea",
          "package": "haskhol-core",
          "partial": "FIRST",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_FIRST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003e_FAIL\u003c/a\u003e\u003c/code\u003e with a fixed failure string.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "_NO",
          "package": "haskhol-core",
          "signature": "a",
          "source": "src/HaskHOL-Core-Lib.html#_NO",
          "type": "method"
        },
        "index": {
          "description": "An instance of FAIL with fixed failure string",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "_NO",
          "package": "haskhol-core",
          "partial": "NO",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_NO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA language combinator for branching based on failure.  The language\n      equivalent of the \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "_ORELSE",
          "package": "haskhol-core",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/HaskHOL-Core-Lib.html#_ORELSE",
          "type": "method"
        },
        "index": {
          "description": "language combinator for branching based on failure The language equivalent of the operator",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "_ORELSE",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskhol-core",
          "partial": "ORELSE",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_ORELSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA language combinator that repeatedly applies a language operation until \n      failure.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "_REPEAT",
          "package": "haskhol-core",
          "signature": "a -\u003e a",
          "source": "src/HaskHOL-Core-Lib.html#_REPEAT",
          "type": "method"
        },
        "index": {
          "description": "language combinator that repeatedly applies language operation until failure",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "_REPEAT",
          "normalized": "a-\u003ea",
          "package": "haskhol-core",
          "partial": "REPEAT",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_REPEAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA language combinator that sequences operations.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "_THEN",
          "package": "haskhol-core",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/HaskHOL-Core-Lib.html#_THEN",
          "type": "method"
        },
        "index": {
          "description": "language combinator that sequences operations",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "_THEN",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskhol-core",
          "partial": "THEN",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_THEN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA language combinator that prevents the wrapped operation from having an\n      effect if it fails.  The language equivalent of the backtracking \u003ccode\u003etry\u003c/code\u003e \n      operator.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "_TRY",
          "package": "haskhol-core",
          "signature": "a -\u003e a",
          "source": "src/HaskHOL-Core-Lib.html#_TRY",
          "type": "method"
        },
        "index": {
          "description": "language combinator that prevents the wrapped operation from having an effect if it fails The language equivalent of the backtracking try operator",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "_TRY",
          "normalized": "a-\u003ea",
          "package": "haskhol-core",
          "partial": "TRY",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:_TRY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces a list containing the results of applying a function to all possible \n  combinations of arguments from two lists.  Rather than failing if the lists\n  are of different lengths, iteration is shortcutted to end when the left most\n  list is null.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "allpairs",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
          "source": "src/HaskHOL-Core-Lib.html#allpairs",
          "type": "function"
        },
        "index": {
          "description": "Produces list containing the results of applying function to all possible combinations of arguments from two lists Rather than failing if the lists are of different lengths iteration is shortcutted to end when the left most list is null",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "allpairs",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "haskhol-core",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:allpairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "assoc",
          "package": "haskhol-core",
          "signature": "a -\u003e [(a, b)] -\u003e Maybe b",
          "source": "src/HaskHOL-Core-Lib.html#assoc",
          "type": "function"
        },
        "index": {
          "description": "An alias to lookup for HOL users more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "assoc",
          "normalized": "a-\u003e[(a,b)]-\u003eMaybe b",
          "package": "haskhol-core",
          "signature": "a-\u003e[(a,b)]-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003elookupd\u003c/a\u003e\u003c/code\u003e for HOL users who are more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "assocd",
          "package": "haskhol-core",
          "signature": "a -\u003e [(a, b)] -\u003e b -\u003e b",
          "source": "src/HaskHOL-Core-Lib.html#assocd",
          "type": "function"
        },
        "index": {
          "description": "An alias to lookupd for HOL users who are more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "assocd",
          "normalized": "a-\u003e[(a,b)]-\u003eb-\u003eb",
          "package": "haskhol-core",
          "signature": "a-\u003e[(a,b)]-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:assocd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003etryInit\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "butLast",
          "package": "haskhol-core",
          "signature": "[a] -\u003e Maybe [a]",
          "source": "src/HaskHOL-Core-Lib.html#butLast",
          "type": "function"
        },
        "index": {
          "description": "An alias to tryInit for HOL users more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "butLast",
          "normalized": "[a]-\u003eMaybe[a]",
          "package": "haskhol-core",
          "partial": "Last",
          "signature": "[a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:butLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe C combinator.  An alias for \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "cComb",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e c) -\u003e b -\u003e a -\u003e c",
          "source": "src/HaskHOL-Core-Lib.html#cComb",
          "type": "function"
        },
        "index": {
          "description": "The combinator An alias for flip",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "cComb",
          "normalized": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "package": "haskhol-core",
          "partial": "Comb",
          "signature": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:cComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a boolean value indicating whether a monadic computation succeeds or\n  fails.  The \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e operator is used for branching.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "can",
          "package": "haskhol-core",
          "signature": "(a -\u003e m b) -\u003e a -\u003e m Bool",
          "source": "src/HaskHOL-Core-Lib.html#can",
          "type": "function"
        },
        "index": {
          "description": "Returns boolean value indicating whether monadic computation succeeds or fails The operator is used for branching",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "can",
          "normalized": "(a-\u003eb c)-\u003ea-\u003eb Bool",
          "package": "haskhol-core",
          "signature": "(a-\u003em b)-\u003ea-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:can"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe opposite of \u003ccode\u003e\u003ca\u003ecan\u003c/a\u003e\u003c/code\u003e.  Functionally equivalent to \n\u003c/p\u003e\u003cpre\u003e \\ f -\u003e liftM not . can f\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "canNot",
          "package": "haskhol-core",
          "signature": "(a -\u003e m b) -\u003e a -\u003e m Bool",
          "source": "src/HaskHOL-Core-Lib.html#canNot",
          "type": "function"
        },
        "index": {
          "description": "The opposite of can Functionally equivalent to liftM not can",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "canNot",
          "normalized": "(a-\u003eb c)-\u003ea-\u003eb Bool",
          "package": "haskhol-core",
          "partial": "Not",
          "signature": "(a-\u003em b)-\u003ea-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:canNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if a predicate succeeds for a provided value, returning that value\n  guarded by a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type if so.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "check",
          "package": "haskhol-core",
          "signature": "(a -\u003e Bool) -\u003e a -\u003e Maybe a",
          "source": "src/HaskHOL-Core-Lib.html#check",
          "type": "function"
        },
        "index": {
          "description": "Checks if predicate succeeds for provided value returning that value guarded by Maybe type if so",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "check",
          "normalized": "(a-\u003eBool)-\u003ea-\u003eMaybe a",
          "package": "haskhol-core",
          "signature": "(a-\u003eBool)-\u003ea-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003etrySplitAt\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "chopList",
          "package": "haskhol-core",
          "signature": "Int -\u003e [a] -\u003e Maybe ([a], [a])",
          "source": "src/HaskHOL-Core-Lib.html#chopList",
          "type": "function"
        },
        "index": {
          "description": "An alias to trySplitAt for HOL users more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "chopList",
          "normalized": "Int-\u003e[a]-\u003eMaybe([a],[a])",
          "package": "haskhol-core",
          "partial": "List",
          "signature": "Int-\u003e[a]-\u003eMaybe([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:chopList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves an item from a list.  A re-export of \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "delete",
          "package": "haskhol-core",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Removes an item from list re-export of delete",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "delete",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the denominator of a rational number.  A re-export of \u003ccode\u003e\u003ca\u003edenominator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "denominator",
          "package": "haskhol-core",
          "signature": "Rational -\u003e Integer",
          "source": "src/HaskHOL-Core-Lib.html#denominator",
          "type": "function"
        },
        "index": {
          "description": "Returns the denominator of rational number re-export of denominator",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "denominator",
          "normalized": "Rational-\u003eInteger",
          "package": "haskhol-core",
          "signature": "Rational-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:denominator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a monadic function over a list, ignoring the results.  A re-export of \n  \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "doList",
          "package": "haskhol-core",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m ()",
          "source": "src/HaskHOL-Core-Lib.html#doList",
          "type": "function"
        },
        "index": {
          "description": "Map monadic function over list ignoring the results re-export of mapM",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "doList",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb()",
          "package": "haskhol-core",
          "partial": "List",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:doList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrops elements from the end of a list while a predicate is true.  A re-export\n  of \u003ccode\u003e\u003ca\u003edropWhileEnd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "dropWhileEnd",
          "package": "haskhol-core",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#dropWhileEnd",
          "type": "function"
        },
        "index": {
          "description": "Drops elements from the end of list while predicate is true re-export of dropWhileEnd",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "dropWhileEnd",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "haskhol-core",
          "partial": "While End",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:dropWhileEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003etryIndex\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.  Note that\n  the order of the arguments is flipped.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "el",
          "package": "haskhol-core",
          "signature": "Int -\u003e [a] -\u003e Maybe a",
          "source": "src/HaskHOL-Core-Lib.html#el",
          "type": "function"
        },
        "index": {
          "description": "An alias to tryIndex for HOL users more familiar with this name Note that the order of the arguments is flipped",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "el",
          "normalized": "Int-\u003e[a]-\u003eMaybe a",
          "package": "haskhol-core",
          "signature": "Int-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:el"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the first index where an element appears in list.  Fails with \n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no such element is found.  A re-export of \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "elemIndex",
          "package": "haskhol-core",
          "signature": "a -\u003e [a] -\u003e Maybe Int",
          "source": "src/HaskHOL-Core-Lib.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "Returns the first index where an element appears in list Fails with Nothing if no such element is found re-export of elemIndex",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "elemIndex",
          "normalized": "a-\u003e[a]-\u003eMaybe Int",
          "package": "haskhol-core",
          "partial": "Index",
          "signature": "a-\u003e[a]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003etryFoldr1\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "endItlist",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e Maybe a",
          "source": "src/HaskHOL-Core-Lib.html#endItlist",
          "type": "function"
        },
        "index": {
          "description": "An alias to tryFoldr1 for HOL users more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "endItlist",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a",
          "package": "haskhol-core",
          "partial": "Itlist",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:endItlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e for HOL users who are more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "exists",
          "package": "haskhol-core",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "source": "src/HaskHOL-Core-Lib.html#exists",
          "type": "function"
        },
        "index": {
          "description": "An alias to any for HOL users who are more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "exists",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "haskhol-core",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces the common pattern \n\u003c/p\u003e\u003cpre\u003e m \u003e\u003e= \\ cond -\u003e if cond then fail \"...\"\n\u003c/pre\u003e\u003cp\u003eThe default case is defined in terms of \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "failWhen",
          "package": "haskhol-core",
          "signature": "m Bool -\u003e String -\u003e m ()",
          "source": "src/HaskHOL-Core-Lib.html#failWhen",
          "type": "method"
        },
        "index": {
          "description": "Replaces the common pattern cond if cond then fail The default case is defined in terms of empty and",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "failWhen",
          "normalized": "a Bool-\u003eString-\u003ea()",
          "package": "haskhol-core",
          "partial": "When",
          "signature": "m Bool-\u003eString-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:failWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe FF combinator.  An alias for the arrow combinator \u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "ffComb",
          "package": "haskhol-core",
          "signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e (a, b) -\u003e (c, d)",
          "source": "src/HaskHOL-Core-Lib.html#ffComb",
          "type": "function"
        },
        "index": {
          "description": "The FF combinator An alias for the arrow combinator",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "ffComb",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(a,c)-\u003e(b,d)",
          "package": "haskhol-core",
          "partial": "Comb",
          "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003e(a,b)-\u003e(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:ffComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of the FF combinator.  An alias for the arrow combinator\n  \u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e lifted for \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e arrows.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "ffCombM",
          "package": "haskhol-core",
          "signature": "(a -\u003e m c) -\u003e (b -\u003e m d) -\u003e (a, b) -\u003e m (c, d)",
          "source": "src/HaskHOL-Core-Lib.html#ffCombM",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of the FF combinator An alias for the arrow combinator lifted for Kleisli arrows",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "ffCombM",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003e(a,d)-\u003eb(c,e)",
          "package": "haskhol-core",
          "partial": "Comb",
          "signature": "(a-\u003em c)-\u003e(b-\u003em d)-\u003e(a,b)-\u003em(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:ffCombM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA re-export of \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "find",
          "package": "haskhol-core",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe a",
          "source": "src/HaskHOL-Core-Lib.html#find",
          "type": "function"
        },
        "index": {
          "description": "re-export of find",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a",
          "package": "haskhol-core",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e.  Fails if the monadic predicate does.  Also \n  fails with \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if an empty list is provided.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "findM",
          "package": "haskhol-core",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m a",
          "source": "src/HaskHOL-Core-Lib.html#findM",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of find Fails if the monadic predicate does Also fails with mzero if an empty list is provided",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "findM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb a",
          "package": "haskhol-core",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:findM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function only to the first element of a pair.  A re-export of \n  \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "first",
          "package": "haskhol-core",
          "signature": "(a -\u003e c) -\u003e (a, b) -\u003e (c, b)",
          "source": "src/HaskHOL-Core-Lib.html#first",
          "type": "function"
        },
        "index": {
          "description": "Applies function only to the first element of pair re-export of first",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "first",
          "normalized": "(a-\u003eb)-\u003e(a,c)-\u003e(b,c)",
          "package": "haskhol-core",
          "signature": "(a-\u003ec)-\u003e(a,b)-\u003e(c,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic version of \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e lifted for \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e arrows.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "firstM",
          "package": "haskhol-core",
          "signature": "(a -\u003e m c) -\u003e (a, b) -\u003e m (c, b)",
          "source": "src/HaskHOL-Core-Lib.html#firstM",
          "type": "function"
        },
        "index": {
          "description": "monadic version of first lifted for Kleisli arrows",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "firstM",
          "normalized": "(a-\u003eb c)-\u003e(a,d)-\u003eb(c,d)",
          "package": "haskhol-core",
          "signature": "(a-\u003em c)-\u003e(a,b)-\u003em(c,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:firstM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e for HOL users who are more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "flat",
          "package": "haskhol-core",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#flat",
          "type": "function"
        },
        "index": {
          "description": "An alias to concat for HOL users who are more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "flat",
          "normalized": "[[a]]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:flat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe version of a left, list fold for functions of arity 2.  Fails with\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the two lists are of different lengths.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "foldl2",
          "package": "haskhol-core",
          "signature": "(c -\u003e a -\u003e b -\u003e c) -\u003e c -\u003e [a] -\u003e [b] -\u003e Maybe c",
          "source": "src/HaskHOL-Core-Lib.html#foldl2",
          "type": "function"
        },
        "index": {
          "description": "safe version of left list fold for functions of arity Fails with Nothing if the two lists are of different lengths",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "foldl2",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003e[b]-\u003e[c]-\u003eMaybe a",
          "package": "haskhol-core",
          "signature": "(c-\u003ea-\u003eb-\u003ec)-\u003ec-\u003e[a]-\u003e[b]-\u003eMaybe c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:foldl2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003efoldl2\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if the two lists are\n  of different lengths.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "foldl2M",
          "package": "haskhol-core",
          "signature": "(c -\u003e a -\u003e b -\u003e m c) -\u003e c -\u003e [a] -\u003e [b] -\u003e m c",
          "source": "src/HaskHOL-Core-Lib.html#foldl2M",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of foldl2 Fails with mzero if the two lists are of different lengths",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "foldl2M",
          "normalized": "(a-\u003eb-\u003ec-\u003ed a)-\u003ea-\u003e[b]-\u003e[c]-\u003ed a",
          "package": "haskhol-core",
          "signature": "(c-\u003ea-\u003eb-\u003em c)-\u003ec-\u003e[a]-\u003e[b]-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:foldl2M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.  A re-export of \u003ccode\u003e\u003ca\u003efoldlM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "foldlM",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e t b -\u003e m a",
          "source": "src/HaskHOL-Core-Lib.html#foldlM",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of foldl re-export of foldlM",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "foldlM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003ed b-\u003ec a",
          "package": "haskhol-core",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003et b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:foldlM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if an empty list is\n  provided as an argument.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "foldr1M",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e m a) -\u003e [a] -\u003e m a",
          "source": "src/HaskHOL-Core-Lib.html#foldr1M",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of foldr1 Fails with mzero if an empty list is provided as an argument",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "foldr1M",
          "normalized": "(a-\u003ea-\u003eb a)-\u003e[a]-\u003eb a",
          "package": "haskhol-core",
          "signature": "(a-\u003ea-\u003em a)-\u003e[a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:foldr1M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe version of a right, list fold for functions of arity 2.  Fails with\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the two lists are of different lengths.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "foldr2",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e c -\u003e c) -\u003e c -\u003e [a] -\u003e [b] -\u003e Maybe c",
          "source": "src/HaskHOL-Core-Lib.html#foldr2",
          "type": "function"
        },
        "index": {
          "description": "safe version of right list fold for functions of arity Fails with Nothing if the two lists are of different lengths",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "foldr2",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003e[a]-\u003e[b]-\u003eMaybe c",
          "package": "haskhol-core",
          "signature": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003e[a]-\u003e[b]-\u003eMaybe c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:foldr2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003efoldr2\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if the two lists are\n  of different lengths.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "foldr2M",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e c -\u003e m c) -\u003e c -\u003e [a] -\u003e [b] -\u003e m c",
          "source": "src/HaskHOL-Core-Lib.html#foldr2M",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of foldr2 Fails with mzero if the two lists are of different lengths",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "foldr2M",
          "normalized": "(a-\u003eb-\u003ec-\u003ed c)-\u003ec-\u003e[a]-\u003e[b]-\u003ed c",
          "package": "haskhol-core",
          "signature": "(a-\u003eb-\u003ec-\u003em c)-\u003ec-\u003e[a]-\u003e[b]-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:foldr2M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.  A re-export of \u003ccode\u003e\u003ca\u003efoldrM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "foldrM",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e m b) -\u003e b -\u003e t a -\u003e m b",
          "source": "src/HaskHOL-Core-Lib.html#foldrM",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of foldr re-export of foldrM",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "foldrM",
          "normalized": "(a-\u003eb-\u003ec b)-\u003eb-\u003ed a-\u003ec b",
          "package": "haskhol-core",
          "signature": "(a-\u003eb-\u003em b)-\u003eb-\u003et a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:foldrM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e for HOL users who are more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "forall",
          "package": "haskhol-core",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "source": "src/HaskHOL-Core-Lib.html#forall",
          "type": "function"
        },
        "index": {
          "description": "An alias to all for HOL users who are more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "forall",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "haskhol-core",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:forall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e for predicates of arity 2.  Iterates down two lists\n  simultaneously with \u003ccode\u003e\u003ca\u003emap2\u003c/a\u003e\u003c/code\u003e, using \u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e to combine the results.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "forall2",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e [a] -\u003e [b] -\u003e Maybe Bool",
          "source": "src/HaskHOL-Core-Lib.html#forall2",
          "type": "function"
        },
        "index": {
          "description": "version of all for predicates of arity Iterates down two lists simultaneously with map2 using and to combine the results",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "forall2",
          "normalized": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003e[b]-\u003eMaybe Bool",
          "package": "haskhol-core",
          "signature": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003e[b]-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:forall2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efromJust\u003c/a\u003e\u003c/code\u003e that maps \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e values to \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e rather than\n  failing.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "fromJustM",
          "package": "haskhol-core",
          "signature": "Maybe a -\u003e m a",
          "source": "src/HaskHOL-Core-Lib.html#fromJustM",
          "type": "function"
        },
        "index": {
          "description": "version of fromJust that maps Nothing values to mzero rather than failing",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "fromJustM",
          "normalized": "Maybe a-\u003eb a",
          "package": "haskhol-core",
          "partial": "Just",
          "signature": "Maybe a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:fromJustM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn analogue of \u003ccode\u003e\u003ca\u003efromJust\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.  Fails with \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e when\n  provided a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e value, so take care only to use it in cases where you know \n  you are working with a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e value or are catching exceptions. \n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "fromRight",
          "package": "haskhol-core",
          "signature": "Either err a -\u003e a",
          "source": "src/HaskHOL-Core-Lib.html#fromRight",
          "type": "function"
        },
        "index": {
          "description": "An analogue of fromJust for the Either type Fails with error when provided Left value so take care only to use it in cases where you know you are working with Right value or are catching exceptions",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "fromRight",
          "normalized": "Either a b-\u003eb",
          "package": "haskhol-core",
          "partial": "Right",
          "signature": "Either err a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:fromRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efromRight\u003c/a\u003e\u003c/code\u003e that maps \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e values to \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e rather than\n  failing.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "fromRightM",
          "package": "haskhol-core",
          "signature": "Either err a -\u003e m a",
          "source": "src/HaskHOL-Core-Lib.html#fromRightM",
          "type": "function"
        },
        "index": {
          "description": "version of fromRight that maps Left values to mzero rather than failing",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "fromRightM",
          "normalized": "Either a b-\u003ec b",
          "package": "haskhol-core",
          "partial": "Right",
          "signature": "Either err a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:fromRightM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly applies a function to an argument \u003ccode\u003en\u003c/code\u003e times.  Rather than fail,\n  the original argument is returned when \u003ccode\u003en\u003c=0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "funpow",
          "package": "haskhol-core",
          "signature": "Int -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "source": "src/HaskHOL-Core-Lib.html#funpow",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly applies function to an argument times Rather than fail the original argument is returned when",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "funpow",
          "normalized": "Int-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "haskhol-core",
          "signature": "Int-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:funpow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003efunpow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "funpowM",
          "package": "haskhol-core",
          "signature": "Int -\u003e (a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/HaskHOL-Core-Lib.html#funpowM",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of funpow",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "funpowM",
          "normalized": "Int-\u003e(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "haskhol-core",
          "signature": "Int-\u003e(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:funpowM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the least common denominator between two numbers.  An alias to \u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e for\n  HOL users more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "gcdNum",
          "package": "haskhol-core",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/HaskHOL-Core-Lib.html#gcdNum",
          "type": "function"
        },
        "index": {
          "description": "Finds the least common denominator between two numbers An alias to gcd for HOL users more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "gcdNum",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "haskhol-core",
          "partial": "Num",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:gcdNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroups neighbors in a list together based on a predicate.  A re-export of\n  \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "group'",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/HaskHOL-Core-Lib.html#group%27",
          "type": "function"
        },
        "index": {
          "description": "Groups neighbors in list together based on predicate re-export of groupBy",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "group'",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "haskhol-core",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:group-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuppresses the error value of an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type to convert it to a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \n  type.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "hush",
          "package": "haskhol-core",
          "signature": "Either a b -\u003e Maybe b",
          "source": "src/HaskHOL-Core-Lib.html#hush",
          "type": "function"
        },
        "index": {
          "description": "Suppresses the error value of an Either type to convert it to Maybe type",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "hush",
          "normalized": "Either a b-\u003eMaybe b",
          "package": "haskhol-core",
          "signature": "Either a b-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:hush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe I combinator.  An alias for \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "iComb",
          "package": "haskhol-core",
          "signature": "a -\u003e a",
          "source": "src/HaskHOL-Core-Lib.html#iComb",
          "type": "function"
        },
        "index": {
          "description": "The combinator An alias for id",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "iComb",
          "normalized": "a-\u003ea",
          "package": "haskhol-core",
          "partial": "Comb",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:iComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "index",
          "package": "haskhol-core",
          "signature": "a -\u003e [a] -\u003e Maybe Int",
          "source": "src/HaskHOL-Core-Lib.html#index",
          "type": "function"
        },
        "index": {
          "description": "An alias to elemIndex for HOL users more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "index",
          "normalized": "a-\u003e[a]-\u003eMaybe Int",
          "package": "haskhol-core",
          "signature": "a-\u003e[a]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts an item into a list if it would be a unique element.\n\u003c/p\u003e\u003cp\u003eImportant note:  This insert is unordered, unlike the \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e in the\n  \u003ca\u003eData.List\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "insert",
          "package": "haskhol-core",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserts an item into list if it would be unique element Important note This insert is unordered unlike the insert in the Data.List module",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "insert",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e where the uniqueness test is an explicit predicate, \n  rather than a strict equality test.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "insert'",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#insert%27",
          "type": "function"
        },
        "index": {
          "description": "version of insert where the uniqueness test is an explicit predicate rather than strict equality test",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "insert'",
          "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:insert-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts, or updates, a key value pair in an association list.\n\u003c/p\u003e\u003cp\u003eNote that this insert is unordered, but uniqueness preserving.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "insertMap",
          "package": "haskhol-core",
          "signature": "a -\u003e b -\u003e [(a, b)] -\u003e [(a, b)]",
          "source": "src/HaskHOL-Core-Lib.html#insertMap",
          "type": "function"
        },
        "index": {
          "description": "Inserts or updates key value pair in an association list Note that this insert is unordered but uniqueness preserving",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "insertMap",
          "normalized": "a-\u003eb-\u003e[(a,b)]-\u003e[(a,b)]",
          "package": "haskhol-core",
          "partial": "Map",
          "signature": "a-\u003eb-\u003e[(a,b)]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:insertMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the intersection of two lists.  A re-export of \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "intersect",
          "package": "haskhol-core",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#intersect",
          "type": "function"
        },
        "index": {
          "description": "Finds the intersection of two lists re-export of intersect",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "intersect",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.  Note that the\n  order of the list and base case arguments is flipped.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "itlist",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e b) -\u003e [a] -\u003e b -\u003e b",
          "source": "src/HaskHOL-Core-Lib.html#itlist",
          "type": "function"
        },
        "index": {
          "description": "An alias to foldr for HOL users more familiar with this name Note that the order of the list and base case arguments is flipped",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "itlist",
          "normalized": "(a-\u003eb-\u003eb)-\u003e[a]-\u003eb-\u003eb",
          "package": "haskhol-core",
          "signature": "(a-\u003eb-\u003eb)-\u003e[a]-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:itlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003efoldr2\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.  Note that\n  the order of the two list arguments and the base case argument is flipped.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "itlist2",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e c -\u003e c) -\u003e [a] -\u003e [b] -\u003e c -\u003e Maybe c",
          "source": "src/HaskHOL-Core-Lib.html#itlist2",
          "type": "function"
        },
        "index": {
          "description": "An alias to foldr2 for HOL users more familiar with this name Note that the order of the two list arguments and the base case argument is flipped",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "itlist2",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003e[a]-\u003e[b]-\u003ec-\u003eMaybe c",
          "package": "haskhol-core",
          "signature": "(a-\u003eb-\u003ec-\u003ec)-\u003e[a]-\u003e[b]-\u003ec-\u003eMaybe c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:itlist2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003eitlist\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "itlistM",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e m b) -\u003e t a -\u003e b -\u003e m b",
          "source": "src/HaskHOL-Core-Lib.html#itlistM",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of itlist",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "itlistM",
          "normalized": "(a-\u003eb-\u003ec b)-\u003ed a-\u003eb-\u003ec b",
          "package": "haskhol-core",
          "signature": "(a-\u003eb-\u003em b)-\u003et a-\u003eb-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:itlistM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe K combinator.  An alias for \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "kComb",
          "package": "haskhol-core",
          "signature": "a -\u003e b -\u003e a",
          "source": "src/HaskHOL-Core-Lib.html#kComb",
          "type": "function"
        },
        "index": {
          "description": "The combinator An alias for const",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "kComb",
          "normalized": "a-\u003eb-\u003ea",
          "package": "haskhol-core",
          "partial": "Comb",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:kComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the least common multiplier between two numbers.  An alias to \u003ccode\u003e\u003ca\u003elcm\u003c/a\u003e\u003c/code\u003e for\n  HOL users more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "lcmNum",
          "package": "haskhol-core",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/HaskHOL-Core-Lib.html#lcmNum",
          "type": "function"
        },
        "index": {
          "description": "Finds the least common multiplier between two numbers An alias to lcm for HOL users more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "lcmNum",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "haskhol-core",
          "partial": "Num",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:lcmNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromotes a function to a monad, but only for its first argument, i.e.\n\u003c/p\u003e\u003cpre\u003e liftM1 f a b === flip f b =\u003c\u003c a\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "liftM1",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e m c) -\u003e m a -\u003e b -\u003e m c",
          "source": "src/HaskHOL-Core-Lib.html#liftM1",
          "type": "function"
        },
        "index": {
          "description": "Promotes function to monad but only for its first argument i.e liftM1 flip",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "liftM1",
          "normalized": "(a-\u003eb-\u003ec d)-\u003ec a-\u003eb-\u003ec d",
          "package": "haskhol-core",
          "signature": "(a-\u003eb-\u003em c)-\u003em a-\u003eb-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:liftM1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to lift an option value, i.e. \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e, so that it can be\n      passed as an argument to a monadic computation.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "liftO",
          "package": "haskhol-core",
          "signature": "l a -\u003e m a",
          "source": "src/HaskHOL-Core-Lib.html#liftO",
          "type": "method"
        },
        "index": {
          "description": "Used to lift an option value i.e Maybe or Either so that it can be passed as an argument to monadic computation",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "liftO",
          "normalized": "a b-\u003ec b",
          "package": "haskhol-core",
          "signature": "l a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:liftO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e that defaults to a provided value rather than fail.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "lookupd",
          "package": "haskhol-core",
          "signature": "a -\u003e [(a, b)] -\u003e b -\u003e b",
          "source": "src/HaskHOL-Core-Lib.html#lookupd",
          "type": "function"
        },
        "index": {
          "description": "version of lookup that defaults to provided value rather than fail",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "lookupd",
          "normalized": "a-\u003e[(a,b)]-\u003eb-\u003eb",
          "package": "haskhol-core",
          "signature": "a-\u003e[(a,b)]-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:lookupd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe version of a list map for functions of arity 2.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n  if the two lists are of different lengths.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "map2",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e Maybe [c]",
          "source": "src/HaskHOL-Core-Lib.html#map2",
          "type": "function"
        },
        "index": {
          "description": "safe version of list map for functions of arity Fails with Nothing if the two lists are of different lengths",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "map2",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003eMaybe[c]",
          "package": "haskhol-core",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003eMaybe[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:map2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003emap2\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if the two lists are of\n  different lengths.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "map2M",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m [c]",
          "source": "src/HaskHOL-Core-Lib.html#map2M",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of map2 Fails with mzero if the two lists are of different lengths",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "map2M",
          "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec[d]",
          "package": "haskhol-core",
          "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:map2M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "mapFilter",
          "package": "haskhol-core",
          "signature": "(a -\u003e Maybe b) -\u003e [a] -\u003e [b]",
          "source": "src/HaskHOL-Core-Lib.html#mapFilter",
          "type": "function"
        },
        "index": {
          "description": "An alias to mapMaybe for HOL users more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "mapFilter",
          "normalized": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]",
          "package": "haskhol-core",
          "partial": "Filter",
          "signature": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:mapFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003emapFilter\u003c/a\u003e\u003c/code\u003e.  The '(\u003ca\u003e|\u003c/a\u003e)' operator is used for \n  branching.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "mapFilterM",
          "package": "haskhol-core",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m [b]",
          "source": "src/HaskHOL-Core-Lib.html#mapFilterM",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of mapFilter The operator is used for branching",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "mapFilterM",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb[c]",
          "package": "haskhol-core",
          "partial": "Filter",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:mapFilterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e for HOL users who are more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "mem",
          "package": "haskhol-core",
          "signature": "a -\u003e [a] -\u003e Bool",
          "source": "src/HaskHOL-Core-Lib.html#mem",
          "type": "function"
        },
        "index": {
          "description": "An alias to elem for HOL users who are more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "mem",
          "normalized": "a-\u003e[a]-\u003eBool",
          "package": "haskhol-core",
          "signature": "a-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emem\u003c/a\u003e\u003c/code\u003e where the membership test is an explicit predicate, rather\n  than a strict equality test.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "mem'",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e a -\u003e [a] -\u003e Bool",
          "source": "src/HaskHOL-Core-Lib.html#mem%27",
          "type": "function"
        },
        "index": {
          "description": "version of mem where the membership test is an explicit predicate rather than strict equality test",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "mem'",
          "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003eBool",
          "package": "haskhol-core",
          "signature": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:mem-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two lists using a partitioning predicate to build an implied ordering.\n  See \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e for more information on how the predicate affects the order of the\n  resultant list.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "merge",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merges two lists using partitioning predicate to build an implied ordering See sort for more information on how the predicate affects the order of the resultant list",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "merge",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts a list using a partitioning predicate to build an implied ordering;\n  uses \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e internally.  See \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e for more information on how the predicate\n  affects the order of the resultant list.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "mergesort",
          "package": "haskhol-core",
          "signature": "forall a.  (a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#mergesort",
          "type": "function"
        },
        "index": {
          "description": "Sorts list using partitioning predicate to build an implied ordering uses merge internally See sort for more information on how the predicate affects the order of the resultant list",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "mergesort",
          "normalized": "a b(c-\u003ec-\u003eBool)-\u003e[c]-\u003e[c]",
          "package": "haskhol-core",
          "signature": "forall a.(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:mergesort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a default error value to convert a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type to an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "note",
          "package": "haskhol-core",
          "signature": "a -\u003e Maybe b -\u003e Either a b",
          "source": "src/HaskHOL-Core-Lib.html#note",
          "type": "function"
        },
        "index": {
          "description": "Takes default error value to convert Maybe type to an Either type",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "note",
          "normalized": "a-\u003eMaybe b-\u003eEither a b",
          "package": "haskhol-core",
          "signature": "a-\u003eMaybe b-\u003eEither a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly applies a binary destructor function to a term for every element\n  in a provided list.\n\u003c/p\u003e\u003cp\u003eApplication is reverse, or right-associative, such that for a term of the form\n  \u003ccode\u003ef x1 (f x2 ...(f xn b))\u003c/code\u003e calling this function with a destructor for \u003ccode\u003ef\u003c/code\u003e and\n  a list \u003ccode\u003el\u003c/code\u003e will produce the result \u003ccode\u003e([x1 .. xk], f x(k+1) ...(f xn b))\u003c/code\u003e where \n  \u003ccode\u003ek\u003c/code\u003e is the length of list \u003ccode\u003el\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "nsplit",
          "package": "haskhol-core",
          "signature": "(a -\u003e Maybe (a, a)) -\u003e [b] -\u003e a -\u003e Maybe ([a], a)",
          "source": "src/HaskHOL-Core-Lib.html#nsplit",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly applies binary destructor function to term for every element in provided list Application is reverse or right-associative such that for term of the form x1 x2 xn calling this function with destructor for and list will produce the result x1 xk xn where is the length of list",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "nsplit",
          "normalized": "(a-\u003eMaybe(a,a))-\u003e[b]-\u003ea-\u003eMaybe([a],a)",
          "package": "haskhol-core",
          "signature": "(a-\u003eMaybe(a,a))-\u003e[b]-\u003ea-\u003eMaybe([a],a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:nsplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003ensplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "nsplitM",
          "package": "haskhol-core",
          "signature": "(b -\u003e m (b, b)) -\u003e [c] -\u003e b -\u003e m ([b], b)",
          "source": "src/HaskHOL-Core-Lib.html#nsplitM",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of nsplit",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "nsplitM",
          "normalized": "(a-\u003eb(a,a))-\u003e[c]-\u003ea-\u003eb([a],a)",
          "package": "haskhol-core",
          "signature": "(b-\u003em(b,b))-\u003e[c]-\u003eb-\u003em([b],b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:nsplitM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list to a set by removing duplicates.  A re-export of \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "nub",
          "package": "haskhol-core",
          "signature": "[a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#nub",
          "type": "function"
        },
        "index": {
          "description": "Converts list to set by removing duplicates re-export of nub",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "nub",
          "normalized": "[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:nub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e 0 :: Integer\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "num0",
          "package": "haskhol-core",
          "signature": "Integer",
          "source": "src/HaskHOL-Core-Lib.html#num0",
          "type": "function"
        },
        "index": {
          "description": "Integer",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "num0",
          "package": "haskhol-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:num0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e 1 :: Integer\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "num1",
          "package": "haskhol-core",
          "signature": "Integer",
          "source": "src/HaskHOL-Core-Lib.html#num1",
          "type": "function"
        },
        "index": {
          "description": "Integer",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "num1",
          "package": "haskhol-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:num1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e 10 :: Integer\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "num10",
          "package": "haskhol-core",
          "signature": "Integer",
          "source": "src/HaskHOL-Core-Lib.html#num10",
          "type": "function"
        },
        "index": {
          "description": "Integer",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "num10",
          "package": "haskhol-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:num10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e 2 :: Integer\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "num2",
          "package": "haskhol-core",
          "signature": "Integer",
          "source": "src/HaskHOL-Core-Lib.html#num2",
          "type": "function"
        },
        "index": {
          "description": "Integer",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "num2",
          "package": "haskhol-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:num2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a string representation of a number to an appropriate instance of\n  the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e class.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the conversion cannot be performed.\n\u003c/p\u003e\u003cp\u003eNote:  The following prefixes are valid:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e0x\u003c/code\u003e - number read as a hexidecimal value\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e0b\u003c/code\u003e - number read as a binary value\n\u003c/li\u003e\u003cli\u003e Any other prefix causes the number to be read as a decimal value\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "numOfString",
          "package": "haskhol-core",
          "signature": "String -\u003e Maybe a",
          "source": "src/HaskHOL-Core-Lib.html#numOfString",
          "type": "function"
        },
        "index": {
          "description": "Converts string representation of number to an appropriate instance of the Num class Fails with Nothing if the conversion cannot be performed Note The following prefixes are valid number read as hexidecimal value number read as binary value Any other prefix causes the number to be read as decimal value",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "numOfString",
          "normalized": "String-\u003eMaybe a",
          "package": "haskhol-core",
          "partial": "Of String",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:numOfString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a real number to a rational representation.  \n  An alias to \u003ccode\u003e\u003ca\u003etoRational\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "numdom",
          "package": "haskhol-core",
          "signature": "a -\u003e Rational",
          "source": "src/HaskHOL-Core-Lib.html#numdom",
          "type": "function"
        },
        "index": {
          "description": "Converts real number to rational representation An alias to toRational for HOL users more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "numdom",
          "normalized": "a-\u003eRational",
          "package": "haskhol-core",
          "signature": "a-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:numdom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the numerator of a rational number.  A re-export of \u003ccode\u003e\u003ca\u003enumerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "numerator",
          "package": "haskhol-core",
          "signature": "Rational -\u003e Integer",
          "source": "src/HaskHOL-Core-Lib.html#numerator",
          "type": "function"
        },
        "index": {
          "description": "Returns the numerator of rational number re-export of numerator",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "numerator",
          "normalized": "Rational-\u003eInteger",
          "package": "haskhol-core",
          "signature": "Rational-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:numerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to both elements of a pair using the \u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "pairMap",
          "package": "haskhol-core",
          "signature": "(a -\u003e b) -\u003e (a, a) -\u003e (b, b)",
          "source": "src/HaskHOL-Core-Lib.html#pairMap",
          "type": "function"
        },
        "index": {
          "description": "Applies function to both elements of pair using the operator",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "pairMap",
          "normalized": "(a-\u003eb)-\u003e(a,a)-\u003e(b,b)",
          "package": "haskhol-core",
          "partial": "Map",
          "signature": "(a-\u003eb)-\u003e(a,a)-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:pairMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003epairMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "pairMapM",
          "package": "haskhol-core",
          "signature": "(a -\u003e m b) -\u003e (a, a) -\u003e m (b, b)",
          "source": "src/HaskHOL-Core-Lib.html#pairMapM",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of pairMap",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "pairMapM",
          "normalized": "(a-\u003eb c)-\u003e(a,a)-\u003eb(c,c)",
          "package": "haskhol-core",
          "partial": "Map",
          "signature": "(a-\u003em b)-\u003e(a,a)-\u003em(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:pairMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparates a list of elements using a predicate.  A re-export of \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "partition",
          "package": "haskhol-core",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/HaskHOL-Core-Lib.html#partition",
          "type": "function"
        },
        "index": {
          "description": "Separates list of elements using predicate re-export of partition",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "haskhol-core",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e x ^ (10 :: Integer)\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "pow10",
          "package": "haskhol-core",
          "signature": "Integer -\u003e Integer",
          "source": "src/HaskHOL-Core-Lib.html#pow10",
          "type": "function"
        },
        "index": {
          "description": "Integer",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "pow10",
          "normalized": "Integer-\u003eInteger",
          "package": "haskhol-core",
          "signature": "Integer-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:pow10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e x ^ (2 :: Integer)\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "pow2",
          "package": "haskhol-core",
          "signature": "Integer -\u003e Integer",
          "source": "src/HaskHOL-Core-Lib.html#pow2",
          "type": "function"
        },
        "index": {
          "description": "Integer",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "pow2",
          "normalized": "Integer-\u003eInteger",
          "package": "haskhol-core",
          "signature": "Integer-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:pow2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparates the first element of a list that satisfies a predicate.  Fails with\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no such element is found.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "remove",
          "package": "haskhol-core",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe (a, [a])",
          "source": "src/HaskHOL-Core-Lib.html#remove",
          "type": "function"
        },
        "index": {
          "description": "Separates the first element of list that satisfies predicate Fails with Nothing if no such element is found",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "remove",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe(a,[a])",
          "package": "haskhol-core",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe(a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly applies a monadic computation to an argument until there is a \n  failure.  The \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e operator is used for branching.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "repeatM",
          "package": "haskhol-core",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/HaskHOL-Core-Lib.html#repeatM",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly applies monadic computation to an argument until there is failure The operator is used for branching",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "repeatM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "haskhol-core",
          "signature": "(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:repeatM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "rev",
          "package": "haskhol-core",
          "signature": "[a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#rev",
          "type": "function"
        },
        "index": {
          "description": "An alias to reverse for HOL users more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "rev",
          "normalized": "[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:rev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003erevLookup\u003c/a\u003e\u003c/code\u003e for HOL users who are more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "revAssoc",
          "package": "haskhol-core",
          "signature": "a -\u003e [(b, a)] -\u003e Maybe b",
          "source": "src/HaskHOL-Core-Lib.html#revAssoc",
          "type": "function"
        },
        "index": {
          "description": "An alias to revLookup for HOL users who are more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "revAssoc",
          "normalized": "a-\u003e[(b,a)]-\u003eMaybe b",
          "package": "haskhol-core",
          "partial": "Assoc",
          "signature": "a-\u003e[(b,a)]-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003erevLookupd\u003c/a\u003e\u003c/code\u003e for HOL users who are more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "revAssocd",
          "package": "haskhol-core",
          "signature": "a -\u003e [(b, a)] -\u003e b -\u003e b",
          "source": "src/HaskHOL-Core-Lib.html#revAssocd",
          "type": "function"
        },
        "index": {
          "description": "An alias to revLookupd for HOL users who are more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "revAssocd",
          "normalized": "a-\u003e[(b,a)]-\u003eb-\u003eb",
          "package": "haskhol-core",
          "partial": "Assocd",
          "signature": "a-\u003e[(b,a)]-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revAssocd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.  Note that the\n  order of the list and base case arguments is flipped, as is the order of the\n  arguments to the function.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "revItlist",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e b) -\u003e [a] -\u003e b -\u003e b",
          "source": "src/HaskHOL-Core-Lib.html#revItlist",
          "type": "function"
        },
        "index": {
          "description": "An alias to foldl for HOL users more familiar with this name Note that the order of the list and base case arguments is flipped as is the order of the arguments to the function",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "revItlist",
          "normalized": "(a-\u003eb-\u003eb)-\u003e[a]-\u003eb-\u003eb",
          "package": "haskhol-core",
          "partial": "Itlist",
          "signature": "(a-\u003eb-\u003eb)-\u003e[a]-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revItlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003efoldl2\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.  Note that\n  the order of the two list arguments and base case argument is flipped, as is\n  the order of the arguments to the provided function.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "revItlist2",
          "package": "haskhol-core",
          "signature": "(a -\u003e b -\u003e c -\u003e c) -\u003e [a] -\u003e [b] -\u003e c -\u003e Maybe c",
          "source": "src/HaskHOL-Core-Lib.html#revItlist2",
          "type": "function"
        },
        "index": {
          "description": "An alias to foldl2 for HOL users more familiar with this name Note that the order of the two list arguments and base case argument is flipped as is the order of the arguments to the provided function",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "revItlist2",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003e[a]-\u003e[b]-\u003ec-\u003eMaybe c",
          "package": "haskhol-core",
          "partial": "Itlist",
          "signature": "(a-\u003eb-\u003ec-\u003ec)-\u003e[a]-\u003e[b]-\u003ec-\u003eMaybe c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revItlist2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e where the search is performed against the second element\n  of the pair instead of the first.  Still fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the desired\n  value is not found.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "revLookup",
          "package": "haskhol-core",
          "signature": "a -\u003e [(b, a)] -\u003e Maybe b",
          "source": "src/HaskHOL-Core-Lib.html#revLookup",
          "type": "function"
        },
        "index": {
          "description": "version of lookup where the search is performed against the second element of the pair instead of the first Still fails with Nothing if the desired value is not found",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "revLookup",
          "normalized": "a-\u003e[(b,a)]-\u003eMaybe b",
          "package": "haskhol-core",
          "partial": "Lookup",
          "signature": "a-\u003e[(b,a)]-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003erevLookup\u003c/a\u003e\u003c/code\u003e that defaults to a provided value rather than fail.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "revLookupd",
          "package": "haskhol-core",
          "signature": "a -\u003e [(b, a)] -\u003e b -\u003e b",
          "source": "src/HaskHOL-Core-Lib.html#revLookupd",
          "type": "function"
        },
        "index": {
          "description": "version of revLookup that defaults to provided value rather than fail",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "revLookupd",
          "normalized": "a-\u003e[(b,a)]-\u003eb-\u003eb",
          "package": "haskhol-core",
          "partial": "Lookupd",
          "signature": "a-\u003e[(b,a)]-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revLookupd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly applies a binary destructor function to a term until failure.\n\u003c/p\u003e\u003cp\u003eApplication is reverse, or right-associative, such that for a term of the form\n  \u003ccode\u003ex1 `f` x2 `f` b\u003c/code\u003e calling this function with a destructor for \u003ccode\u003ef\u003c/code\u003e will\n  produce the result \u003ccode\u003e(f, [x1, x2 `f` b])\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "revSplitList",
          "package": "haskhol-core",
          "signature": "forall a.  (a -\u003e Maybe (a, a)) -\u003e a -\u003e (a, [a])",
          "source": "src/HaskHOL-Core-Lib.html#revSplitList",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly applies binary destructor function to term until failure Application is reverse or right-associative such that for term of the form x1 x2 calling this function with destructor for will produce the result x1 x2",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "revSplitList",
          "normalized": "a b(c-\u003eMaybe(c,c))-\u003ec-\u003e(c,[c])",
          "package": "haskhol-core",
          "partial": "Split List",
          "signature": "forall a.(a-\u003eMaybe(a,a))-\u003ea-\u003e(a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revSplitList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003erevSplitList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "revSplitListM",
          "package": "haskhol-core",
          "signature": "(b -\u003e m (b, b)) -\u003e b -\u003e m (b, [b])",
          "source": "src/HaskHOL-Core-Lib.html#revSplitListM",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of revSplitList",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "revSplitListM",
          "normalized": "(a-\u003eb(a,a))-\u003ea-\u003eb(a,[a])",
          "package": "haskhol-core",
          "partial": "Split List",
          "signature": "(b-\u003em(b,b))-\u003eb-\u003em(b,[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:revSplitListM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function only to the second element of a pair.  A re-export of \n  \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "second",
          "package": "haskhol-core",
          "signature": "(b -\u003e c) -\u003e (a, b) -\u003e (a, c)",
          "source": "src/HaskHOL-Core-Lib.html#second",
          "type": "function"
        },
        "index": {
          "description": "Applies function only to the second element of pair re-export of second",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "second",
          "normalized": "(a-\u003eb)-\u003e(c,a)-\u003e(c,b)",
          "package": "haskhol-core",
          "signature": "(b-\u003ec)-\u003e(a,b)-\u003e(a,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic version of \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e lifted for \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e arrows.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "secondM",
          "package": "haskhol-core",
          "signature": "(b -\u003e m c) -\u003e (a, b) -\u003e m (a, c)",
          "source": "src/HaskHOL-Core-Lib.html#secondM",
          "type": "function"
        },
        "index": {
          "description": "monadic version of second lifted for Kleisli arrows",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "secondM",
          "normalized": "(a-\u003eb c)-\u003e(d,a)-\u003eb(d,c)",
          "package": "haskhol-core",
          "signature": "(b-\u003em c)-\u003e(a,b)-\u003em(a,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:secondM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA test for set equality using \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "setEq",
          "package": "haskhol-core",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/HaskHOL-Core-Lib.html#setEq",
          "type": "function"
        },
        "index": {
          "description": "test for set equality using subset",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "setEq",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "haskhol-core",
          "partial": "Eq",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:setEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias to \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e for HOL users more familiar with this name.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "setify",
          "package": "haskhol-core",
          "signature": "[a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#setify",
          "type": "function"
        },
        "index": {
          "description": "An alias to nub for HOL users more familiar with this name",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "setify",
          "normalized": "[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:setify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003esetify\u003c/a\u003e\u003c/code\u003e that eliminates elements based on a provided predicate.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "setify'",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#setify%27",
          "type": "function"
        },
        "index": {
          "description": "version of setify that eliminates elements based on provided predicate",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "setify'",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:setify-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartitions a list into a list of lists matching the structure of the first \n  argument. For example:\n  \u003ccode\u003eshareOut [[1, 2], [3], [4, 5]] \"abcde\" === [\"ab\", \"c\", \"de\"]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "shareOut",
          "package": "haskhol-core",
          "signature": "[[a]] -\u003e [b] -\u003e Maybe [[b]]",
          "source": "src/HaskHOL-Core-Lib.html#shareOut",
          "type": "function"
        },
        "index": {
          "description": "Partitions list into list of lists matching the structure of the first argument For example shareOut abcde ab de",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "shareOut",
          "normalized": "[[a]]-\u003e[b]-\u003eMaybe[[b]]",
          "package": "haskhol-core",
          "partial": "Out",
          "signature": "[[a]]-\u003e[b]-\u003eMaybe[[b]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:shareOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts a list using a partitioning predicate to build an implied ordering.\n  If \u003ccode\u003ep\u003c/code\u003e is the predicate and \u003ccode\u003ex `p` y\u003c/code\u003e and \u003ccode\u003enot (y `p` x)\u003c/code\u003e are true then \n  \u003ccode\u003ex\u003c/code\u003e will be in front of \u003ccode\u003ey\u003c/code\u003e in the sorted list.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "sort",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#sort",
          "type": "function"
        },
        "index": {
          "description": "Sorts list using partitioning predicate to build an implied ordering If is the predicate and and not are true then will be in front of in the sorted list",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "sort",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more traditional sort using an \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e relationship between elements. A\n  re-export of \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "sortBy",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#sortBy",
          "type": "function"
        },
        "index": {
          "description": "more traditional sort using an Ordering relationship between elements re-export of sortBy",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "sortBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "package": "haskhol-core",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly applies a binary destructor function to a term until failure.\n\u003c/p\u003e\u003cp\u003eApplication is forward, or left-associative, such that for a term of the form\n  \u003ccode\u003ex1 `f` x2 `f` b\u003c/code\u003e calling this function with a destructor for \u003ccode\u003ef\u003c/code\u003e will\n  produce the result \u003ccode\u003e([x1, x2], b)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "splitList",
          "package": "haskhol-core",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e ([a], b)",
          "source": "src/HaskHOL-Core-Lib.html#splitList",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly applies binary destructor function to term until failure Application is forward or left-associative such that for term of the form x1 x2 calling this function with destructor for will produce the result x1 x2",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "splitList",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003e([b],a)",
          "package": "haskhol-core",
          "partial": "List",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003e([a],b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:splitList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003esplitList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "splitListM",
          "package": "haskhol-core",
          "signature": "(b -\u003e m (a, b)) -\u003e b -\u003e m ([a], b)",
          "source": "src/HaskHOL-Core-Lib.html#splitListM",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of splitList",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "splitListM",
          "normalized": "(a-\u003eb(c,a))-\u003ea-\u003eb([c],a)",
          "package": "haskhol-core",
          "partial": "List",
          "signature": "(b-\u003em(a,b))-\u003eb-\u003em([a],b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:splitListM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly applies a binary destructor function to a term until failure.\n\u003c/p\u003e\u003cp\u003eApplication is forward, or left-associative, such that for a term of the form\n  \u003ccode\u003ex1 `f` x2 `f` x3\u003c/code\u003e calling this function with a destructor for \u003ccode\u003ef\u003c/code\u003e will\n  produce the result \u003ccode\u003e[x1, x2, x3]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "stripList",
          "package": "haskhol-core",
          "signature": "forall a.  (a -\u003e Maybe (a, a)) -\u003e a -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#stripList",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly applies binary destructor function to term until failure Application is forward or left-associative such that for term of the form x1 x2 x3 calling this function with destructor for will produce the result x1 x2 x3",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "stripList",
          "normalized": "a b(c-\u003eMaybe(c,c))-\u003ec-\u003e[c]",
          "package": "haskhol-core",
          "partial": "List",
          "signature": "forall a.(a-\u003eMaybe(a,a))-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:stripList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic version of \u003ccode\u003e\u003ca\u003estripList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "stripListM",
          "package": "haskhol-core",
          "signature": "(a -\u003e m (a, a)) -\u003e a -\u003e m [a]",
          "source": "src/HaskHOL-Core-Lib.html#stripListM",
          "type": "function"
        },
        "index": {
          "description": "The monadic version of stripList",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "stripListM",
          "normalized": "(a-\u003eb(a,a))-\u003ea-\u003eb[a]",
          "package": "haskhol-core",
          "partial": "List",
          "signature": "(a-\u003em(a,a))-\u003ea-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:stripListM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrops the given prefix from a list.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such\n  prefix.  A re-export of \u003ccode\u003e\u003ca\u003estripPrefix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "stripPrefix",
          "package": "haskhol-core",
          "signature": "[a] -\u003e [a] -\u003e Maybe [a]",
          "source": "src/HaskHOL-Core-Lib.html#stripPrefix",
          "type": "function"
        },
        "index": {
          "description": "Drops the given prefix from list Fails with Nothing if there is no such prefix re-export of stripPrefix",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "stripPrefix",
          "normalized": "[a]-\u003e[a]-\u003eMaybe[a]",
          "package": "haskhol-core",
          "partial": "Prefix",
          "signature": "[a]-\u003e[a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:stripPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests if the first list is a subset of the second.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "subset",
          "package": "haskhol-core",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/HaskHOL-Core-Lib.html#subset",
          "type": "function"
        },
        "index": {
          "description": "Tests if the first list is subset of the second",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "subset",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "haskhol-core",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:subset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003esubtract\u003c/a\u003e\u003c/code\u003e where the uniqueness test is an explicit predicate, \n  rather than a strict equality test.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "subtract'",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#subtract%27",
          "type": "function"
        },
        "index": {
          "description": "version of subtract where the uniqueness test is an explicit predicate rather than strict equality test",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "subtract'",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:subtract-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwaps the order of a pair.  A re-export of \u003ccode\u003e\u003ca\u003eswap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "swap",
          "package": "haskhol-core",
          "signature": "(a, b) -\u003e (b, a)",
          "source": "src/HaskHOL-Core-Lib.html#swap",
          "type": "function"
        },
        "index": {
          "description": "Swaps the order of pair re-export of swap",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "swap",
          "normalized": "(a,b)-\u003e(b,a)",
          "package": "haskhol-core",
          "signature": "(a,b)-\u003e(b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alternative monadic version of \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e where the predicate is a monadic\n  computation not necessarily of a boolean return type.  Returns the result of\n  the first successful application of the predicate to an element of the list.\n  Fails with \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if called on an empty list.  \n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e is used for branching instead of \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e to minimize the \n  constraint type; for the vast majority of monads these two functions should be\n  identical anyway.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "tryFind",
          "package": "haskhol-core",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m b",
          "source": "src/HaskHOL-Core-Lib.html#tryFind",
          "type": "function"
        },
        "index": {
          "description": "An alternative monadic version of find where the predicate is monadic computation not necessarily of boolean return type Returns the result of the first successful application of the predicate to an element of the list Fails with mzero if called on an empty list Note that mplus is used for branching instead of to minimize the constraint type for the vast majority of monads these two functions should be identical anyway",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "tryFind",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb c",
          "package": "haskhol-core",
          "partial": "Find",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:tryFind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if an empty list is provided\n  as an argument.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "tryFoldr1",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e Maybe a",
          "source": "src/HaskHOL-Core-Lib.html#tryFoldr1",
          "type": "function"
        },
        "index": {
          "description": "safe version of foldr1 Fails with Nothing if an empty list is provided as an argument",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "tryFoldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a",
          "package": "haskhol-core",
          "partial": "Foldr",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:tryFoldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when trying to take the head\n  of an empty list.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "tryHead",
          "package": "haskhol-core",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/HaskHOL-Core-Lib.html#tryHead",
          "type": "function"
        },
        "index": {
          "description": "safe version of head Fails with Nothing when trying to take the head of an empty list",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "tryHead",
          "normalized": "[a]-\u003eMaybe a",
          "package": "haskhol-core",
          "partial": "Head",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:tryHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the selected index does\n  not exist.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "tryIndex",
          "package": "haskhol-core",
          "signature": "[a] -\u003e Int -\u003e Maybe a",
          "source": "src/HaskHOL-Core-Lib.html#tryIndex",
          "type": "function"
        },
        "index": {
          "description": "safe version of index Fails with Nothing if the selected index does not exist",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "tryIndex",
          "normalized": "[a]-\u003eInt-\u003eMaybe a",
          "package": "haskhol-core",
          "partial": "Index",
          "signature": "[a]-\u003eInt-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:tryIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when trying to drop the last\n  element of an empty list.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "tryInit",
          "package": "haskhol-core",
          "signature": "[a] -\u003e Maybe [a]",
          "source": "src/HaskHOL-Core-Lib.html#tryInit",
          "type": "function"
        },
        "index": {
          "description": "safe version of init Fails with Nothing when trying to drop the last element of an empty list",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "tryInit",
          "normalized": "[a]-\u003eMaybe[a]",
          "package": "haskhol-core",
          "partial": "Init",
          "signature": "[a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:tryInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when trying to take the last\n  element of an empty list.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "tryLast",
          "package": "haskhol-core",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/HaskHOL-Core-Lib.html#tryLast",
          "type": "function"
        },
        "index": {
          "description": "safe version of last Fails with Nothing when trying to take the last element of an empty list",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "tryLast",
          "normalized": "[a]-\u003eMaybe a",
          "package": "haskhol-core",
          "partial": "Last",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:tryLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e.   Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if a split is attempted\n  at an index that doesn't exist.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "trySplitAt",
          "package": "haskhol-core",
          "signature": "Int -\u003e [a] -\u003e Maybe ([a], [a])",
          "source": "src/HaskHOL-Core-Lib.html#trySplitAt",
          "type": "function"
        },
        "index": {
          "description": "safe version of splitAt Fails with Nothing if split is attempted at an index that doesn exist",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "trySplitAt",
          "normalized": "Int-\u003e[a]-\u003eMaybe([a],[a])",
          "package": "haskhol-core",
          "partial": "Split At",
          "signature": "Int-\u003e[a]-\u003eMaybe([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:trySplitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when trying to take the tail\n  of an empty list.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "tryTail",
          "package": "haskhol-core",
          "signature": "[a] -\u003e Maybe [a]",
          "source": "src/HaskHOL-Core-Lib.html#tryTail",
          "type": "function"
        },
        "index": {
          "description": "safe version of tail Fails with Nothing when trying to take the tail of an empty list",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "tryTail",
          "normalized": "[a]-\u003eMaybe[a]",
          "package": "haskhol-core",
          "partial": "Tail",
          "signature": "[a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:tryTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnions two list maintaining uniqueness of elements.\n\u003c/p\u003e\u003cp\u003eImportant note:  This union is unordered, unlike the \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e in the\n  \u003ca\u003eData.List\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "union",
          "package": "haskhol-core",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#union",
          "type": "function"
        },
        "index": {
          "description": "Unions two list maintaining uniqueness of elements Important note This union is unordered unlike the union in the Data.List module",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "union",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e where the uniqueness test is an explicit predicate, \n  rather than a strict equality test.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "union'",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#union%27",
          "type": "function"
        },
        "index": {
          "description": "version of union where the uniqueness test is an explicit predicate rather than strict equality test",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "union'",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:union-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnions a list of lists using \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "unions",
          "package": "haskhol-core",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#unions",
          "type": "function"
        },
        "index": {
          "description": "Unions list of lists using union",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "unions",
          "normalized": "[[a]]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e where the uniqueness test is an explicit predicate, \n  rather than a strict equality test.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "unions'",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [[a]] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#unions%27",
          "type": "function"
        },
        "index": {
          "description": "version of unions where the uniqueness test is an explicit predicate rather than strict equality test",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "unions'",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[[a]]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:unions-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves adjacent, equal elements from a list.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "uniq",
          "package": "haskhol-core",
          "signature": "[a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#uniq",
          "type": "function"
        },
        "index": {
          "description": "Removes adjacent equal elements from list",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "uniq",
          "normalized": "[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:uniq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003euniq\u003c/a\u003e\u003c/code\u003e that eliminates elements based on a provided predicate.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "uniq'",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/HaskHOL-Core-Lib.html#uniq%27",
          "type": "function"
        },
        "index": {
          "description": "version of uniq that eliminates elements based on provided predicate",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "uniq'",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "haskhol-core",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:uniq-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe W combinator.  Takes a function of arity 2 and applies a single argument\n  to it twice.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Lib",
          "name": "wComb",
          "package": "haskhol-core",
          "signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e b",
          "source": "src/HaskHOL-Core-Lib.html#wComb",
          "type": "function"
        },
        "index": {
          "description": "The combinator Takes function of arity and applies single argument to it twice",
          "hierarchy": "HaskHOL Core Lib",
          "module": "HaskHOL.Core.Lib",
          "name": "wComb",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
          "package": "haskhol-core",
          "partial": "Comb",
          "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Lib.html#v:wComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the parsers for \u003ccode\u003eHOLType\u003c/code\u003es and \u003ccode\u003eHOLTerm\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eIt also re-exports the related benign flags, theory extension mechanisms, \n  and type/term elaborators.\n\u003c/p\u003e\u003cp\u003eFor examples of the parsers and elaborators in use see the \n  \u003ca\u003eHaskHOL.Core.TermRep\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "Parser",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the parsers for HOLType and HOLTerm It also re-exports the related benign flags theory extension mechanisms and type term elaborators For examples of the parsers and elaborators in use see the HaskHOL.Core.TermRep module",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "Parser",
          "package": "haskhol-core",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlag to say whether implicit type applications are to be added during parsing.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "FlagAddTyAppsAuto",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Parser-Lib.html#FlagAddTyAppsAuto",
          "type": "data"
        },
        "index": {
          "description": "Flag to say whether implicit type applications are to be added during parsing",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "FlagAddTyAppsAuto",
          "package": "haskhol-core",
          "partial": "Flag Add Ty Apps Auto",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:FlagAddTyAppsAuto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlag to say whether to treat a constant varstruct, i.e.  \u003ccode\u003e\\ const . bod\u003c/code\u003e, as\n  variable.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "FlagIgnoreConstVarstruct",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Parser-Lib.html#FlagIgnoreConstVarstruct",
          "type": "data"
        },
        "index": {
          "description": "Flag to say whether to treat constant varstruct i.e const bod as variable",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "FlagIgnoreConstVarstruct",
          "package": "haskhol-core",
          "partial": "Flag Ignore Const Varstruct",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:FlagIgnoreConstVarstruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlag indicating that the user should be warned if a type variable was invented\n  during parsing.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "FlagTyInvWarning",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Parser-Lib.html#FlagTyInvWarning",
          "type": "data"
        },
        "index": {
          "description": "Flag indicating that the user should be warned if type variable was invented during parsing",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "FlagTyInvWarning",
          "package": "haskhol-core",
          "partial": "Flag Ty Inv Warning",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:FlagTyInvWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlag indicating that the user should be warned if a type operator variable was\n  invented during parsing.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "FlagTyOpInvWarning",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Parser-Lib.html#FlagTyOpInvWarning",
          "type": "data"
        },
        "index": {
          "description": "Flag indicating that the user should be warned if type operator variable was invented during parsing",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "FlagTyOpInvWarning",
          "package": "haskhol-core",
          "partial": "Flag Ty Op Inv Warning",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:FlagTyOpInvWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e class provides a conversion from an alternative \n  representation of terms to \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003e within the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThe first parameter is the type of the alternative representation.\n\u003c/p\u003e\u003cp\u003eThe second parameter is the tag for the last checkpoint of the \n  current working theory.  This enables us to have a conversion from \n  representations that are theory dependent, i.e. \u003ccode\u003ePTerm\u003c/code\u003e, without running into\n  type matchability issues.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "HOLTermRep",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Parser-Rep.html#HOLTermRep",
          "type": "class"
        },
        "index": {
          "description": "The HOLTermRep class provides conversion from an alternative representation of terms to HOLTerm within the HOL monad The first parameter is the type of the alternative representation The second parameter is the tag for the last checkpoint of the current working theory This enables us to have conversion from representations that are theory dependent i.e PTerm without running into type matchability issues",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "HOLTermRep",
          "package": "haskhol-core",
          "partial": "HOLTerm Rep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:HOLTermRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHOLTypeRep\u003c/a\u003e\u003c/code\u003e class provides a conversion from an alternative \n  representation of types to \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003e within the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThe first parameter is the type of the alternative representation.\n\u003c/p\u003e\u003cp\u003eThe second parameter is the tag for the last checkpoint of the \n  current working theory.  This enables us to have a conversion from \n  representations that are theory dependent without running into type \n  matchability issues.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "HOLTypeRep",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Parser-Rep.html#HOLTypeRep",
          "type": "class"
        },
        "index": {
          "description": "The HOLTypeRep class provides conversion from an alternative representation of types to HOLType within the HOL monad The first parameter is the type of the alternative representation The second parameter is the tag for the last checkpoint of the current working theory This enables us to have conversion from representations that are theory dependent without running into type matchability issues",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "HOLTypeRep",
          "package": "haskhol-core",
          "partial": "HOLType Rep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:HOLTypeRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsed, but pre-elaborated HOL terms.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "PreTerm",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Parser-Lib.html#PreTerm",
          "type": "data"
        },
        "index": {
          "description": "Parsed but pre-elaborated HOL terms",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "PreTerm",
          "package": "haskhol-core",
          "partial": "Pre Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:PreTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsed, but pre-elaborated HOL types.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "PreType",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Parser-Lib.html#PreType",
          "type": "data"
        },
        "index": {
          "description": "Parsed but pre-elaborated HOL types",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "PreType",
          "package": "haskhol-core",
          "partial": "Pre Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#t:PreType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HaskHOL.Core.Parser",
          "name": "FlagAddTyAppsAuto",
          "package": "haskhol-core",
          "signature": "FlagAddTyAppsAuto",
          "source": "src/HaskHOL-Core-Parser-Lib.html#FlagAddTyAppsAuto",
          "type": "function"
        },
        "index": {
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "FlagAddTyAppsAuto",
          "package": "haskhol-core",
          "partial": "Flag Add Ty Apps Auto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:FlagAddTyAppsAuto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HaskHOL.Core.Parser",
          "name": "FlagIgnoreConstVarstruct",
          "package": "haskhol-core",
          "signature": "FlagIgnoreConstVarstruct",
          "source": "src/HaskHOL-Core-Parser-Lib.html#FlagIgnoreConstVarstruct",
          "type": "function"
        },
        "index": {
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "FlagIgnoreConstVarstruct",
          "package": "haskhol-core",
          "partial": "Flag Ignore Const Varstruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:FlagIgnoreConstVarstruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HaskHOL.Core.Parser",
          "name": "FlagTyInvWarning",
          "package": "haskhol-core",
          "signature": "FlagTyInvWarning",
          "source": "src/HaskHOL-Core-Parser-Lib.html#FlagTyInvWarning",
          "type": "function"
        },
        "index": {
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "FlagTyInvWarning",
          "package": "haskhol-core",
          "partial": "Flag Ty Inv Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:FlagTyInvWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HaskHOL.Core.Parser",
          "name": "FlagTyOpInvWarning",
          "package": "haskhol-core",
          "signature": "FlagTyOpInvWarning",
          "source": "src/HaskHOL-Core-Parser-Lib.html#FlagTyOpInvWarning",
          "type": "function"
        },
        "index": {
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "FlagTyOpInvWarning",
          "package": "haskhol-core",
          "partial": "Flag Ty Op Inv Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:FlagTyOpInvWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as term binders by the parser.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "binders",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e [String]",
          "source": "src/HaskHOL-Core-Parser-Lib.html#binders",
          "type": "function"
        },
        "index": {
          "description": "Returns all String recognized as term binders by the parser",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "binders",
          "normalized": "HOLContext a-\u003e[String]",
          "package": "haskhol-core",
          "signature": "HOLContext thry-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:binders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElaborator and type inference for \u003ccode\u003e\u003ca\u003ePreTerm\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "elab",
          "package": "haskhol-core",
          "signature": "PreTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Parser-Elab.html#elab",
          "type": "function"
        },
        "index": {
          "description": "Elaborator and type inference for PreTerm",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "elab",
          "normalized": "PreTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "signature": "PreTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:elab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es currently acting as constants hidden from the parser.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "getHidden",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e [String]",
          "source": "src/HaskHOL-Core-Parser-Lib.html#getHidden",
          "type": "function"
        },
        "index": {
          "description": "Returns all String currently acting as constants hidden from the parser",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "getHidden",
          "normalized": "HOLContext a-\u003e[String]",
          "package": "haskhol-core",
          "partial": "Hidden",
          "signature": "HOLContext thry-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:getHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as infix operators by the parser.  Returns\n  a precidence and associativity pair guarded by \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "getInfixStatus",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLContext thry -\u003e Maybe (Int, Assoc)",
          "source": "src/HaskHOL-Core-Parser-Lib.html#getInfixStatus",
          "type": "function"
        },
        "index": {
          "description": "Predicate for String recognized as infix operators by the parser Returns precidence and associativity pair guarded by Maybe",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "getInfixStatus",
          "normalized": "String-\u003eHOLContext a-\u003eMaybe(Int,Assoc)",
          "package": "haskhol-core",
          "partial": "Infix Status",
          "signature": "String-\u003eHOLContext thry-\u003eMaybe(Int,Assoc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:getInfixStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of all currently defined interface overloads.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "getInterface",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e [(String, (String, HOLType))]",
          "source": "src/HaskHOL-Core-Parser-Lib.html#getInterface",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of all currently defined interface overloads",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "getInterface",
          "normalized": "HOLContext a-\u003e[(String,(String,HOLType))]",
          "package": "haskhol-core",
          "partial": "Interface",
          "signature": "HOLContext thry-\u003e[(String,(String,HOLType))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:getInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of all overloadable symbols paired with their most generic \n  types.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "getOverloads",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e [(String, HOLType)]",
          "source": "src/HaskHOL-Core-Parser-Lib.html#getOverloads",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of all overloadable symbols paired with their most generic types",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "getOverloads",
          "normalized": "HOLContext a-\u003e[(String,HOLType)]",
          "package": "haskhol-core",
          "partial": "Overloads",
          "signature": "HOLContext thry-\u003e[(String,HOLType)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:getOverloads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e for the parser to stop recognizing as a constant.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "hideConstant",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#hideConstant",
          "type": "function"
        },
        "index": {
          "description": "Specifies String for the parser to stop recognizing as constant",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "hideConstant",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Constant",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:hideConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for \u003ccode\u003eHOLTerm\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "holTermParser",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLContext thry -\u003e Either ParseError PreTerm",
          "source": "src/HaskHOL-Core-Parser.html#holTermParser",
          "type": "function"
        },
        "index": {
          "description": "Parser for HOLTerm",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "holTermParser",
          "normalized": "String-\u003eHOLContext a-\u003eEither ParseError PreTerm",
          "package": "haskhol-core",
          "partial": "Term Parser",
          "signature": "String-\u003eHOLContext thry-\u003eEither ParseError PreTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:holTermParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for \u003ccode\u003eHOLType\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "holTypeParser",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLContext thry -\u003e Either ParseError PreType",
          "source": "src/HaskHOL-Core-Parser.html#holTypeParser",
          "type": "function"
        },
        "index": {
          "description": "Parser for HOLType",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "holTypeParser",
          "normalized": "String-\u003eHOLContext a-\u003eEither ParseError PreType",
          "package": "haskhol-core",
          "partial": "Type Parser",
          "signature": "String-\u003eHOLContext thry-\u003eEither ParseError PreType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:holTypeParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as infix operators by the parser along with\n  their precedence and associativity pairs.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "infixes",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e [(String, (Int, Assoc))]",
          "source": "src/HaskHOL-Core-Parser-Lib.html#infixes",
          "type": "function"
        },
        "index": {
          "description": "Returns all String recognized as infix operators by the parser along with their precedence and associativity pairs",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "infixes",
          "normalized": "HOLContext a-\u003e[(String,(Int,Assoc))]",
          "package": "haskhol-core",
          "signature": "HOLContext thry-\u003e[(String,(Int,Assoc))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:infixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as prefix operators by the parser.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "isPrefix",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLContext thry -\u003e Bool",
          "source": "src/HaskHOL-Core-Parser-Lib.html#isPrefix",
          "type": "function"
        },
        "index": {
          "description": "Predicate for String recognized as prefix operators by the parser",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "isPrefix",
          "normalized": "String-\u003eHOLContext a-\u003eBool",
          "package": "haskhol-core",
          "partial": "Prefix",
          "signature": "String-\u003eHOLContext thry-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:isPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e that can act as an overloadable identifier within the\n  parser.  The provided type is the most general type that instances of this\n  symbol may have.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the given symbol has already been\n  declared as overloadable with a different type.\n\u003c/p\u003e\u003cp\u003eNote that defining a symbol as overloadable will erase any interface overloads\n  that were previously introduced via \u003ccode\u003e\u003ca\u003eoverrideInterface\u003c/a\u003e\u003c/code\u003e in order to guarantee\n  that all overloads are matchable with their most general type.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "makeOverloadable",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLType -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#makeOverloadable",
          "type": "function"
        },
        "index": {
          "description": "Specifies String that can act as an overloadable identifier within the parser The provided type is the most general type that instances of this symbol may have Throws HOLException if the given symbol has already been declared as overloadable with different type Note that defining symbol as overloadable will erase any interface overloads that were previously introduced via overrideInterface in order to guarantee that all overloads are matchable with their most general type",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "makeOverloadable",
          "normalized": "String-\u003eHOLType-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Overloadable",
          "signature": "String-\u003eHOLType-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:makeOverloadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to act as an abbreviation for a given type in the parser.\n  Upon recognizing the abbreviation the parser will replace it with the \n  \u003ccode\u003e\u003ca\u003ePreType\u003c/a\u003e\u003c/code\u003e value for it's associated \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003e such that the elaborator can\n  infer the correct type for polymorphic abbreviations.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "newTypeAbbrev",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLType -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#newTypeAbbrev",
          "type": "function"
        },
        "index": {
          "description": "Specifies String to act as an abbreviation for given type in the parser Upon recognizing the abbreviation the parser will replace it with the PreType value for it associated HOLType such that the elaborator can infer the correct type for polymorphic abbreviations",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "newTypeAbbrev",
          "normalized": "String-\u003eHOLType-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Type Abbrev",
          "signature": "String-\u003eHOLType-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:newTypeAbbrev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduces a new overload for a given symbol.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the\n  following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The symbol has not previously been defined as overloadable via \n    \u003ccode\u003e\u003ca\u003emakeOverloadable\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The provided term is not a constant or variable term representing a \n    specific instance of the overloaded symbol.\n\u003c/li\u003e\u003cli\u003e The provided term does not have a type that is matchable with the\n    overloadable symbol's specified most general type.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that specifying an overload that already exists will move it to the front\n  of the interface list, effectively prioritizing it.  This behavior is utilized\n  by \u003ccode\u003e\u003ca\u003eprioritizeOverload\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "overloadInterface",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLTerm -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#overloadInterface",
          "type": "function"
        },
        "index": {
          "description": "Introduces new overload for given symbol Throws HOLException in the following cases The symbol has not previously been defined as overloadable via makeOverloadable The provided term is not constant or variable term representing specific instance of the overloaded symbol The provided term does not have type that is matchable with the overloadable symbol specified most general type Note that specifying an overload that already exists will move it to the front of the interface list effectively prioritizing it This behavior is utilized by prioritizeOverload",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "overloadInterface",
          "normalized": "String-\u003eHOLTerm-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Interface",
          "signature": "String-\u003eHOLTerm-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:overloadInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves all existing overloads for a given symbol and replaces them with a\n  single, specific instance.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the provided term is\n  not a constant or variable term representing an instance of the overloaded\n  symbol.\n\u003c/p\u003e\u003cp\u003eNote that because \u003ccode\u003e\u003ca\u003eoverrideInterface\u003c/a\u003e\u003c/code\u003e can introduce at most one overload for\n  a symbol it does not have to be previously defined as overloadable via \n  \u003ccode\u003e\u003ca\u003emakeOverloadable\u003c/a\u003e\u003c/code\u003e.  However, if the symbol is defined as overloadable then \n  the provided term must have a type that is matchable with the symbol's most\n  general type.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "overrideInterface",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLTerm -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#overrideInterface",
          "type": "function"
        },
        "index": {
          "description": "Removes all existing overloads for given symbol and replaces them with single specific instance Throws HOLException if the provided term is not constant or variable term representing an instance of the overloaded symbol Note that because overrideInterface can introduce at most one overload for symbol it does not have to be previously defined as overloadable via makeOverloadable However if the symbol is defined as overloadable then the provided term must have type that is matchable with the symbol most general type",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "overrideInterface",
          "normalized": "String-\u003eHOLTerm-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Interface",
          "signature": "String-\u003eHOLTerm-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:overrideInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to be recognized as a term binder by the parser.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "parseAsBinder",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#parseAsBinder",
          "type": "function"
        },
        "index": {
          "description": "Specifies String to be recognized as term binder by the parser",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "parseAsBinder",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "As Binder",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:parseAsBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to be recognized as an infix operator by the parser with\n  a given precedence level and associativity.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "parseAsInfix",
          "package": "haskhol-core",
          "signature": "(String, (Int, Assoc)) -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#parseAsInfix",
          "type": "function"
        },
        "index": {
          "description": "Specifies String to be recognized as an infix operator by the parser with given precedence level and associativity",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "parseAsInfix",
          "normalized": "(String,(Int,Assoc))-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "As Infix",
          "signature": "(String,(Int,Assoc))-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:parseAsInfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to be recognized as a prefix operator by the parser.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "parseAsPrefix",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#parseAsPrefix",
          "type": "function"
        },
        "index": {
          "description": "Specifies String to be recognized as prefix operator by the parser",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "parseAsPrefix",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "As Prefix",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:parseAsPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to be recognized as a type binder by the parser.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "parseAsTyBinder",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#parseAsTyBinder",
          "type": "function"
        },
        "index": {
          "description": "Specifies String to be recognized as type binder by the parser",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "parseAsTyBinder",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "As Ty Binder",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:parseAsTyBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as term binders by the parser.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "parsesAsBinder",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLContext thry -\u003e Bool",
          "source": "src/HaskHOL-Core-Parser-Lib.html#parsesAsBinder",
          "type": "function"
        },
        "index": {
          "description": "Predicate for String recognized as term binders by the parser",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "parsesAsBinder",
          "normalized": "String-\u003eHOLContext a-\u003eBool",
          "package": "haskhol-core",
          "partial": "As Binder",
          "signature": "String-\u003eHOLContext thry-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:parsesAsBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as term binders by the parser.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "parsesAsTyBinder",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLContext thry -\u003e Bool",
          "source": "src/HaskHOL-Core-Parser-Lib.html#parsesAsTyBinder",
          "type": "function"
        },
        "index": {
          "description": "Predicate for String recognized as term binders by the parser",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "parsesAsTyBinder",
          "normalized": "String-\u003eHOLContext a-\u003eBool",
          "package": "haskhol-core",
          "partial": "As Ty Binder",
          "signature": "String-\u003eHOLContext thry-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:parsesAsTyBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as prefix operators by the parser.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "prefixes",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e [String]",
          "source": "src/HaskHOL-Core-Parser-Lib.html#prefixes",
          "type": "function"
        },
        "index": {
          "description": "Returns all String recognized as prefix operators by the parser",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "prefixes",
          "normalized": "HOLContext a-\u003e[String]",
          "package": "haskhol-core",
          "signature": "HOLContext thry-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:prefixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a type to prioritize when the interface is used to overload a \n  symbol.  Note that this applies to all overloads in the system whose match\n  with the specified most general type involves the provided type.  \n  Prioritization is done by redefining overloads via \u003ccode\u003e\u003ca\u003eoverloadInterface\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "prioritizeOverload",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#prioritizeOverload",
          "type": "function"
        },
        "index": {
          "description": "Specifies type to prioritize when the interface is used to overload symbol Note that this applies to all overloads in the system whose match with the specified most general type involves the provided type Prioritization is done by redefining overloads via overloadInterface",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "prioritizeOverload",
          "normalized": "HOLType-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Overload",
          "signature": "HOLType-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:prioritizeOverload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves a specific instance of an overloaded symbol from the interface.  \n  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the provided term is not a constant or varible term\n  representing an instance of the overloaded symbol.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "reduceInterface",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLTerm -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#reduceInterface",
          "type": "function"
        },
        "index": {
          "description": "Removes specific instance of an overloaded symbol from the interface Throws HOLException if the provided term is not constant or varible term representing an instance of the overloaded symbol",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "reduceInterface",
          "normalized": "String-\u003eHOLTerm-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Interface",
          "signature": "String-\u003eHOLTerm-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:reduceInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves all instances of an overloaded symbol from the interface.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "removeInterface",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#removeInterface",
          "type": "function"
        },
        "index": {
          "description": "Removes all instances of an overloaded symbol from the interface",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "removeInterface",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Interface",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:removeInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e for the parser to stop recognizing as a type \n  abbreviation.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "removeTypeAbbrev",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#removeTypeAbbrev",
          "type": "function"
        },
        "index": {
          "description": "Specifies String for the parser to stop recognizing as type abbreviation",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "removeTypeAbbrev",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Type Abbrev",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:removeTypeAbbrev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from alternative type \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "toHTm",
          "package": "haskhol-core",
          "signature": "a -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-Parser-Rep.html#toHTm",
          "type": "method"
        },
        "index": {
          "description": "Conversion from alternative type to HOLTerm",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "toHTm",
          "normalized": "a-\u003eHOL b c HOLTerm",
          "package": "haskhol-core",
          "partial": "HTm",
          "signature": "a-\u003eHOL cls thry HOLTerm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:toHTm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from alternative type \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "toHTy",
          "package": "haskhol-core",
          "signature": "a -\u003e HOL cls thry HOLType",
          "source": "src/HaskHOL-Core-Parser-Rep.html#toHTy",
          "type": "method"
        },
        "index": {
          "description": "Conversion from alternative type to HOLType",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "toHTy",
          "normalized": "a-\u003eHOL b c HOLType",
          "package": "haskhol-core",
          "partial": "HTy",
          "signature": "a-\u003eHOL cls thry HOLType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:toHTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es recognized as type binders by the parser.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "tyBinders",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e [String]",
          "source": "src/HaskHOL-Core-Parser-Lib.html#tyBinders",
          "type": "function"
        },
        "index": {
          "description": "Returns all String recognized as type binders by the parser",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "tyBinders",
          "normalized": "HOLContext a-\u003e[String]",
          "package": "haskhol-core",
          "partial": "Binders",
          "signature": "HOLContext thry-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:tyBinders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElaborator for \u003ccode\u003e\u003ca\u003ePreType\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "tyElab",
          "package": "haskhol-core",
          "signature": "PreType -\u003e HOL cls thry HOLType",
          "source": "src/HaskHOL-Core-Parser-Elab.html#tyElab",
          "type": "function"
        },
        "index": {
          "description": "Elaborator for PreType",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "tyElab",
          "normalized": "PreType-\u003eHOL a b HOLType",
          "package": "haskhol-core",
          "partial": "Elab",
          "signature": "PreType-\u003eHOL cls thry HOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:tyElab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es currently acting as type abbreviations in the parser\n  paired with their associated types.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "typeAbbrevs",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e [(String, HOLType)]",
          "source": "src/HaskHOL-Core-Parser-Lib.html#typeAbbrevs",
          "type": "function"
        },
        "index": {
          "description": "Returns all String currently acting as type abbreviations in the parser paired with their associated types",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "typeAbbrevs",
          "normalized": "HOLContext a-\u003e[(String,HOLType)]",
          "package": "haskhol-core",
          "partial": "Abbrevs",
          "signature": "HOLContext thry-\u003e[(String,HOLType)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:typeAbbrevs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e for the parser to resume recognizing as a constant.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "unhideConstant",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#unhideConstant",
          "type": "function"
        },
        "index": {
          "description": "Specifies String for the parser to resume recognizing as constant",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "unhideConstant",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Constant",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:unhideConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e for the parser to stop recognizing as a term binder.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "unparseAsBinder",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#unparseAsBinder",
          "type": "function"
        },
        "index": {
          "description": "Specifies String for the parser to stop recognizing as term binder",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "unparseAsBinder",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "As Binder",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:unparseAsBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e for the parser to stop recognizing as an infix operator.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "unparseAsInfix",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#unparseAsInfix",
          "type": "function"
        },
        "index": {
          "description": "Specifies String for the parser to stop recognizing as an infix operator",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "unparseAsInfix",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "As Infix",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:unparseAsInfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e for the parser to stop recognizing as a prefix operator.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "unparseAsPrefix",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#unparseAsPrefix",
          "type": "function"
        },
        "index": {
          "description": "Specifies String for the parser to stop recognizing as prefix operator",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "unparseAsPrefix",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "As Prefix",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:unparseAsPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e for the parser to stop recognizing as a type binder.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Parser",
          "name": "unparseAsTyBinder",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Parser-Lib.html#unparseAsTyBinder",
          "type": "function"
        },
        "index": {
          "description": "Specifies String for the parser to stop recognizing as type binder",
          "hierarchy": "HaskHOL Core Parser",
          "module": "HaskHOL.Core.Parser",
          "name": "unparseAsTyBinder",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "As Ty Binder",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Parser.html#v:unparseAsTyBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines pretty printers for \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eHOLThm\u003c/a\u003e\u003c/code\u003es. \n  Note that the printers for terms and theorems are context dependent as they \n  rely on the same theory extensions that the parsers utilize. \n\u003c/p\u003e\u003cp\u003eTo make printing these objects easier within HOL computations, this module\n  also defines the \u003ccode\u003e\u003ca\u003eshowHOL\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eprintHOL\u003c/a\u003e\u003c/code\u003e methods which will automatically\n  retrieve the current working theory to use for pretty printing.  Because the \n  pretty printer for \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003es is not context dependent it has definitions for \n  both \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eshowHOL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, like the parser, there are a number of HOL term forms that the\n  printer does not currently support.  Again, these are mainly related to sets\n  and patterns and will be added in when the HaskHOL system has libraries for\n  them.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "Printer",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Printer.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines pretty printers for HOLType HOLTerm and HOLThm Note that the printers for terms and theorems are context dependent as they rely on the same theory extensions that the parsers utilize To make printing these objects easier within HOL computations this module also defines the showHOL and printHOL methods which will automatically retrieve the current working theory to use for pretty printing Because the pretty printer for HOLType is not context dependent it has definitions for both show and showHOL Note that like the parser there are number of HOL term forms that the printer does not currently support Again these are mainly related to sets and patterns and will be added in when the HaskHOL system has libraries for them",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "Printer",
          "package": "haskhol-core",
          "partial": "Printer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlag to indicate if the entirety of a theorem should be printed, as opposed\n  to just the conclusion term.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "FlagPrintAllThm",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Printer.html#FlagPrintAllThm",
          "type": "data"
        },
        "index": {
          "description": "Flag to indicate if the entirety of theorem should be printed as opposed to just the conclusion term",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "FlagPrintAllThm",
          "package": "haskhol-core",
          "partial": "Flag Print All Thm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#t:FlagPrintAllThm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlag to indicate whether the interface should be reversed on printing.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "FlagRevInterface",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Printer.html#FlagRevInterface",
          "type": "data"
        },
        "index": {
          "description": "Flag to indicate whether the interface should be reversed on printing",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "FlagRevInterface",
          "package": "haskhol-core",
          "partial": "Flag Rev Interface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#t:FlagRevInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eShowHOL\u003c/code\u003e class is functionally equivalent to \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e\n  monad.  It is used to retrieve the current working theory to be used with the\n  context sensitive pretty printers for \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "ShowHOL",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-Printer.html#ShowHOL",
          "type": "class"
        },
        "index": {
          "description": "The ShowHOL class is functionally equivalent to show lifted to the HOL monad It is used to retrieve the current working theory to be used with the context sensitive pretty printers for HOLTerm and HOLType",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "ShowHOL",
          "package": "haskhol-core",
          "partial": "Show HOL",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#t:ShowHOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HaskHOL.Core.Printer",
          "name": "FlagPrintAllThm",
          "package": "haskhol-core",
          "signature": "FlagPrintAllThm",
          "source": "src/HaskHOL-Core-Printer.html#FlagPrintAllThm",
          "type": "function"
        },
        "index": {
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "FlagPrintAllThm",
          "package": "haskhol-core",
          "partial": "Flag Print All Thm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:FlagPrintAllThm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HaskHOL.Core.Printer",
          "name": "FlagRevInterface",
          "package": "haskhol-core",
          "signature": "FlagRevInterface",
          "source": "src/HaskHOL-Core-Printer.html#FlagRevInterface",
          "type": "function"
        },
        "index": {
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "FlagRevInterface",
          "package": "haskhol-core",
          "partial": "Flag Rev Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:FlagRevInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a symbol to be recognized as a prebroken, binary operator by the\n  printer.  Applications involving these operators will have their right-hand\n  side argument printed on the next line using the \u003ccode\u003e\u003ca\u003ehang\u003c/a\u003e\u003c/code\u003e combinator.\n\u003c/p\u003e\u003cp\u003eNote that technically this method should be considered benign, however, for\n  simplicity of implementation it is defined using \u003ccode\u003e\u003ca\u003emodifyExt\u003c/a\u003e\u003c/code\u003e and thus must be\n  tagged a \u003ccode\u003e\u003ca\u003eTheory\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "addPrebrokenBinop",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Printer.html#addPrebrokenBinop",
          "type": "function"
        },
        "index": {
          "description": "Specifies symbol to be recognized as prebroken binary operator by the printer Applications involving these operators will have their right-hand side argument printed on the next line using the hang combinator Note that technically this method should be considered benign however for simplicity of implementation it is defined using modifyExt and thus must be tagged Theory computation",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "addPrebrokenBinop",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Prebroken Binop",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:addPrebrokenBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a symbol to be recognized as an unspaced, binary operator by the\n  printer.  Applications involving these operators will be built with the \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e\n  combinator as opposed to \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that technically this method should be considered benign, however, for\n  simplicity of implementation it is defined using \u003ccode\u003e\u003ca\u003emodifyExt\u003c/a\u003e\u003c/code\u003e and thus must be\n  tagged a \u003ccode\u003e\u003ca\u003eTheory\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "addUnspacedBinop",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Printer.html#addUnspacedBinop",
          "type": "function"
        },
        "index": {
          "description": "Specifies symbol to be recognized as an unspaced binary operator by the printer Applications involving these operators will be built with the combinator as opposed to Note that technically this method should be considered benign however for simplicity of implementation it is defined using modifyExt and thus must be tagged Theory computation",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "addUnspacedBinop",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Unspaced Binop",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:addUnspacedBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of all symbols current recognized as prebroken, binary\n  operators by the printer.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "getPrebrokenBinops",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e [String]",
          "source": "src/HaskHOL-Core-Printer.html#getPrebrokenBinops",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of all symbols current recognized as prebroken binary operators by the printer",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "getPrebrokenBinops",
          "normalized": "HOLContext a-\u003e[String]",
          "package": "haskhol-core",
          "partial": "Prebroken Binops",
          "signature": "HOLContext thry-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:getPrebrokenBinops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of all symbols current recognized as unspaced, binary\n  operators by the printer.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "getUnspacedBinops",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e [String]",
          "source": "src/HaskHOL-Core-Printer.html#getUnspacedBinops",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of all symbols current recognized as unspaced binary operators by the printer",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "getUnspacedBinops",
          "normalized": "HOLContext a-\u003e[String]",
          "package": "haskhol-core",
          "partial": "Unspaced Binops",
          "signature": "HOLContext thry-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:getUnspacedBinops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printer for \u003ccode\u003e\u003ca\u003eHOLTerm\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "ppTerm",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e HOLTerm -\u003e String",
          "source": "src/HaskHOL-Core-Printer.html#ppTerm",
          "type": "function"
        },
        "index": {
          "description": "Pretty printer for HOLTerm",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "ppTerm",
          "normalized": "HOLContext a-\u003eHOLTerm-\u003eString",
          "package": "haskhol-core",
          "partial": "Term",
          "signature": "HOLContext thry-\u003eHOLTerm-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:ppTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printer for \u003ccode\u003eHOLTheorem\u003c/code\u003es.\t\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "ppThm",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e HOLThm -\u003e String",
          "source": "src/HaskHOL-Core-Printer.html#ppThm",
          "type": "function"
        },
        "index": {
          "description": "Pretty printer for HOLTheorem",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "ppThm",
          "normalized": "HOLContext a-\u003eHOLThm-\u003eString",
          "package": "haskhol-core",
          "partial": "Thm",
          "signature": "HOLContext thry-\u003eHOLThm-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:ppThm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printer for \u003ccode\u003e\u003ca\u003eHOLType\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "ppType",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e String",
          "source": "src/HaskHOL-Core-Printer.html#ppType",
          "type": "function"
        },
        "index": {
          "description": "Pretty printer for HOLType",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "ppType",
          "normalized": "HOLType-\u003eString",
          "package": "haskhol-core",
          "partial": "Type",
          "signature": "HOLType-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:ppType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints a HOL object with a new line.  A composition of \u003ccode\u003e\u003ca\u003eputStrLnHOL\u003c/a\u003e\u003c/code\u003e and\n  \u003ccode\u003e\u003ca\u003eshowHOL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "printHOL",
          "package": "haskhol-core",
          "signature": "a -\u003e HOL cls thry ()",
          "source": "src/HaskHOL-Core-Printer.html#printHOL",
          "type": "function"
        },
        "index": {
          "description": "Prints HOL object with new line composition of putStrLnHOL and showHOL",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "printHOL",
          "normalized": "a-\u003eHOL b c()",
          "package": "haskhol-core",
          "partial": "HOL",
          "signature": "a-\u003eHOL cls thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:printHOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a symbol to stop being recognized as an prebroken, binary operator \n  by the printer.\n\u003c/p\u003e\u003cp\u003eNote that technically this method should be considered benign, however, for\n  simplicity of implementation it is defined using \u003ccode\u003e\u003ca\u003emodifyExt\u003c/a\u003e\u003c/code\u003e and thus must be\n  tagged a \u003ccode\u003e\u003ca\u003eTheory\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "removePrebrokenBinop",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Printer.html#removePrebrokenBinop",
          "type": "function"
        },
        "index": {
          "description": "Specifies symbol to stop being recognized as an prebroken binary operator by the printer Note that technically this method should be considered benign however for simplicity of implementation it is defined using modifyExt and thus must be tagged Theory computation",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "removePrebrokenBinop",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Prebroken Binop",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:removePrebrokenBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a symbol to stop being recognized as an unspaced, binary operator \n  by the printer.\n\u003c/p\u003e\u003cp\u003eNote that technically this method should be considered benign, however, for\n  simplicity of implementation it is defined using \u003ccode\u003e\u003ca\u003emodifyExt\u003c/a\u003e\u003c/code\u003e and thus must be\n  tagged a \u003ccode\u003e\u003ca\u003eTheory\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "removeUnspacedBinop",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-Printer.html#removeUnspacedBinop",
          "type": "function"
        },
        "index": {
          "description": "Specifies symbol to stop being recognized as an unspaced binary operator by the printer Note that technically this method should be considered benign however for simplicity of implementation it is defined using modifyExt and thus must be tagged Theory computation",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "removeUnspacedBinop",
          "normalized": "String-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Unspaced Binop",
          "signature": "String-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:removeUnspacedBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad for context sensitive pretty\n      printers.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.Printer",
          "name": "showHOL",
          "package": "haskhol-core",
          "signature": "a -\u003e HOL cls thry String",
          "source": "src/HaskHOL-Core-Printer.html#showHOL",
          "type": "method"
        },
        "index": {
          "description": "version of show lifted to the HOL monad for context sensitive pretty printers",
          "hierarchy": "HaskHOL Core Printer",
          "module": "HaskHOL.Core.Printer",
          "name": "showHOL",
          "normalized": "a-\u003eHOL b c String",
          "package": "haskhol-core",
          "partial": "HOL",
          "signature": "a-\u003eHOL cls thry String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-Printer.html#v:showHOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the primitive types and combinators for the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e \n  computational monad.  At a high level this monad is a flattened stack of a\n  \u003ccode\u003eState\u003c/code\u003e monad transformer and a limited \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eFor higher level monadic combinators see the \u003ca\u003eHaskHOL.Core.State\u003c/a\u003e and\n  \u003ca\u003eHaskHOL.Core.Basics\u003c/a\u003e modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "Monad",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the primitive types and combinators for the HOL computational monad At high level this monad is flattened stack of State monad transformer and limited IO monad For higher level monadic combinators see the HaskHOL.Core.State and HaskHOL.Core.Basics modules",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "Monad",
          "package": "haskhol-core",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBaseCtxt\u003c/a\u003e\u003c/code\u003e class is the context name associated with the \u003ccode\u003e\u003ca\u003eBaseThry\u003c/a\u003e\u003c/code\u003e type,\n  i.e. the constraint to be used to guarantee that the stateful kernel has been\n  loaded.  This should always be true.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "BaseCtxt",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State-Monad.html#BaseCtxt",
          "type": "class"
        },
        "index": {
          "description": "The BaseCtxt class is the context name associated with the BaseThry type i.e the constraint to be used to guarantee that the stateful kernel has been loaded This should always be true",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "BaseCtxt",
          "package": "haskhol-core",
          "partial": "Base Ctxt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:BaseCtxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBaseThry\u003c/a\u003e\u003c/code\u003e type is the type of the initial working theory.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "BaseThry",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State-Monad.html#BaseThry",
          "type": "data"
        },
        "index": {
          "description": "The BaseThry type is the type of the initial working theory",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "BaseThry",
          "package": "haskhol-core",
          "partial": "Base Thry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:BaseThry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHOL systems typically use a large number of boolean flags in order to direct\n  system behavior, i.e. debug flags, warning flags, parser/printer flags, etc.\n  These flags don't affect the underlying proof computations, hence their\n  classification as benign, so we'd like to be able to toggle them on and off\n  at will.  Unfortunately, if we store them in the extensible state and use \n  \u003ccode\u003e\u003ca\u003eputExt\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emodifyExt\u003c/a\u003e\u003c/code\u003e we're limited to only being able to change them in\n  \u003ccode\u003e\u003ca\u003eTheory\u003c/a\u003e\u003c/code\u003e computations.  \n\u003c/p\u003e\u003cp\u003eInstead, we include them in a separate part of the theory context where we \n  can interact with them in any way we want without sacrificing the safety of \n  the extensible state portion of the context.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBenignFlag\u003c/a\u003e\u003c/code\u003e class works very similarly to the \u003ccode\u003e\u003ca\u003eExtClass\u003c/a\u003e\u003c/code\u003e class with the\n  obvious exception that initial values are restricted to boolean values.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eHOLContext\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetBenignFlagCtxt\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003esetBenignFlag\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "BenignFlag",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State-Monad.html#BenignFlag",
          "type": "class"
        },
        "index": {
          "description": "HOL systems typically use large number of boolean flags in order to direct system behavior i.e debug flags warning flags parser printer flags etc These flags don affect the underlying proof computations hence their classification as benign so we like to be able to toggle them on and off at will Unfortunately if we store them in the extensible state and use putExt or modifyExt we re limited to only being able to change them in Theory computations Instead we include them in separate part of the theory context where we can interact with them in any way we want without sacrificing the safety of the extensible state portion of the context The BenignFlag class works very similarly to the ExtClass class with the obvious exception that initial values are restricted to boolean values See HOLContext getBenignFlagCtxt and setBenignFlag for more details",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "BenignFlag",
          "package": "haskhol-core",
          "partial": "Benign Flag",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:BenignFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny type that you wish to throw or catch as an exception must be an\ninstance of the \u003ccode\u003eException\u003c/code\u003e class. The simplest case is a new exception\ntype directly below the root:\n\u003c/p\u003e\u003cpre\u003e data MyException = ThisException | ThatException\n     deriving (Show, Typeable)\n\n instance Exception MyException\n\u003c/pre\u003e\u003cp\u003eThe default method definitions in the \u003ccode\u003eException\u003c/code\u003e class do what we need\nin this case. You can now throw and catch \u003ccode\u003eThisException\u003c/code\u003e and\n\u003ccode\u003eThatException\u003c/code\u003e as exceptions:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw ThisException `catch` \\e -\u003e putStrLn (\"Caught \" ++ show (e :: MyException))\nCaught ThisException\n\u003c/pre\u003e\u003cp\u003eIn more complicated examples, you may wish to define a whole hierarchy\nof exceptions:\n\u003c/p\u003e\u003cpre\u003e ---------------------------------------------------------------------\n -- Make the root exception type for all the exceptions in a compiler\n\n data SomeCompilerException = forall e . Exception e =\u003e SomeCompilerException e\n     deriving Typeable\n\n instance Show SomeCompilerException where\n     show (SomeCompilerException e) = show e\n\n instance Exception SomeCompilerException\n\n compilerExceptionToException :: Exception e =\u003e e -\u003e SomeException\n compilerExceptionToException = toException . SomeCompilerException\n\n compilerExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n compilerExceptionFromException x = do\n     SomeCompilerException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make a subhierarchy for exceptions in the frontend of the compiler\n\n data SomeFrontendException = forall e . Exception e =\u003e SomeFrontendException e\n     deriving Typeable\n\n instance Show SomeFrontendException where\n     show (SomeFrontendException e) = show e\n\n instance Exception SomeFrontendException where\n     toException = compilerExceptionToException\n     fromException = compilerExceptionFromException\n\n frontendExceptionToException :: Exception e =\u003e e -\u003e SomeException\n frontendExceptionToException = toException . SomeFrontendException\n\n frontendExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n frontendExceptionFromException x = do\n     SomeFrontendException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make an exception type for a particular frontend compiler exception\n\n data MismatchedParentheses = MismatchedParentheses\n     deriving (Typeable, Show)\n\n instance Exception MismatchedParentheses where\n     toException   = frontendExceptionToException\n     fromException = frontendExceptionFromException\n\u003c/pre\u003e\u003cp\u003eWe can now catch a \u003ccode\u003eMismatchedParentheses\u003c/code\u003e exception as\n\u003ccode\u003eMismatchedParentheses\u003c/code\u003e, \u003ccode\u003eSomeFrontendException\u003c/code\u003e or\n\u003ccode\u003eSomeCompilerException\u003c/code\u003e, but not other types, e.g. \u003ccode\u003eIOException\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: MismatchedParentheses))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeFrontendException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeCompilerException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: IOException))\n*** Exception: MismatchedParentheses\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "Exception",
          "package": "haskhol-core",
          "type": "class"
        },
        "index": {
          "description": "Any type that you wish to throw or catch as an exception must be an instance of the Exception class The simplest case is new exception type directly below the root data MyException ThisException ThatException deriving Show Typeable instance Exception MyException The default method definitions in the Exception class do what we need in this case You can now throw and catch ThisException and ThatException as exceptions Main throw ThisException catch putStrLn Caught show MyException Caught ThisException In more complicated examples you may wish to define whole hierarchy of exceptions Make the root exception type for all the exceptions in compiler data SomeCompilerException forall Exception SomeCompilerException deriving Typeable instance Show SomeCompilerException where show SomeCompilerException show instance Exception SomeCompilerException compilerExceptionToException Exception SomeException compilerExceptionToException toException SomeCompilerException compilerExceptionFromException Exception SomeException Maybe compilerExceptionFromException do SomeCompilerException fromException cast Make subhierarchy for exceptions in the frontend of the compiler data SomeFrontendException forall Exception SomeFrontendException deriving Typeable instance Show SomeFrontendException where show SomeFrontendException show instance Exception SomeFrontendException where toException compilerExceptionToException fromException compilerExceptionFromException frontendExceptionToException Exception SomeException frontendExceptionToException toException SomeFrontendException frontendExceptionFromException Exception SomeException Maybe frontendExceptionFromException do SomeFrontendException fromException cast Make an exception type for particular frontend compiler exception data MismatchedParentheses MismatchedParentheses deriving Typeable Show instance Exception MismatchedParentheses where toException frontendExceptionToException fromException frontendExceptionFromException We can now catch MismatchedParentheses exception as MismatchedParentheses SomeFrontendException or SomeCompilerException but not other types e.g IOException Main throw MismatchedParentheses catch putStrLn Caught show MismatchedParentheses Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeFrontendException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeCompilerException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show IOException Exception MismatchedParentheses",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "Exception",
          "package": "haskhol-core",
          "partial": "Exception",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eExtClass\u003c/a\u003e\u003c/code\u003e type class is the heart of HaskHOL's extensible state\n  mechanism.  It serves a number of purposes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It provides the polymorphic type for heterogenous structures of type \n    \u003ccode\u003e\u003ca\u003eExtState\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e It introduces the \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e constraint that enables the mechanism for\n    selecting specific state extensions based on their type.  See \u003ccode\u003e\u003ca\u003egetExt\u003c/a\u003e\u003c/code\u003e for\n    more details.\n\u003c/li\u003e\u003cli\u003e It defines an initial value for state extensions to use if they have not \n    been introduced to the context by a computation yet.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor more information see the documentation for \u003ccode\u003e\u003ca\u003eHOLContext\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetExtCtxt\u003c/a\u003e\u003c/code\u003e, and\n  \u003ccode\u003e\u003ca\u003eputExt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "ExtClass",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State-Monad.html#ExtClass",
          "type": "class"
        },
        "index": {
          "description": "The ExtClass type class is the heart of HaskHOL extensible state mechanism It serves number of purposes It provides the polymorphic type for heterogenous structures of type ExtState It introduces the Typeable constraint that enables the mechanism for selecting specific state extensions based on their type See getExt for more details It defines an initial value for state extensions to use if they have not been introduced to the context by computation yet For more information see the documentation for HOLContext getExtCtxt and putExt",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "ExtClass",
          "package": "haskhol-core",
          "partial": "Ext Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:ExtClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to build heterogenous structures that hold state extensions.  See\n  \u003ccode\u003e\u003ca\u003eExtClass\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "ExtState",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State-Monad.html#ExtState",
          "type": "data"
        },
        "index": {
          "description": "Used to build heterogenous structures that hold state extensions See ExtClass for more details",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "ExtState",
          "package": "haskhol-core",
          "partial": "Ext State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:ExtState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eExtThry\u003c/a\u003e\u003c/code\u003e type is the type of a linear theory extension, i.e. a cons-like\n  operation for theory types.  See the module \u003ca\u003eHaskHOL.Lib.Equal.Context\u003c/a\u003e for\n  an example of how to correctly define theory types and contexts for a library.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "ExtThry",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State-Monad.html#ExtThry",
          "type": "data"
        },
        "index": {
          "description": "The ExtThry type is the type of linear theory extension i.e cons-like operation for theory types See the module HaskHOL.Lib.Equal.Context for an example of how to correctly define theory types and contexts for library",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "ExtThry",
          "package": "haskhol-core",
          "partial": "Ext Thry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:ExtThry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad structures computations in the HaskHOL system at the stateful\n  layer and above.  The type parameters are used as such:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ecls\u003c/code\u003e - \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computations are split into two classes, those that extend the\n            current working theory and those that are \"pure\"-ly used for\n            proof.  The \u003ccode\u003ecls\u003c/code\u003e parameter is used to indicate the classification\n            of a computation.  It is a phantom type variable that is inhabited\n            by one of two empty data types, \u003ccode\u003e\u003ca\u003eTheory\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ethry\u003c/code\u003e - Carries a tag indicating the most recent checkpoint of the current\n             working theory, i.e. the last library loaded.  Again, it is phantom\n             type variable that is inhabited by an empty data type.  A unique\n             tag is created for each library by linerearly extending the tag\n             starting from a base value. For example, the tag \n             \u003ccode\u003eExtThry EqualThry BaseThry\u003c/code\u003e would indicate a current working\n             theory consisting of the base and equality logic theories.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that typically this value is left polymorphic and is\n             constrained by a class related to a library.  For example, the\n             following type indicates a computation that can only be ran by\n             using a theory context value that has the equality logic library\n             loaded:  \u003ccode\u003eEqualCtxt thry =\u003e HOL cls thry a\u003c/code\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e - The return type of a \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad is effectively a flattened stack of a limited\n  \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad and a \u003ccode\u003eState\u003c/code\u003e monad.  We say limited as we restrict the possible\n  IO-like computations to the ones shown in this module, rather than allowing\n  arbitrary computations through a mechanism like \u003ccode\u003eMonadIO\u003c/code\u003e.  This prevents a\n  number of soundness issues.\n\u003c/p\u003e\u003cp\u003eFor more information regarding the contents of a theory context see the\n  documentation for \u003ccode\u003e\u003ca\u003eHOLContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "HOL",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State-Monad.html#HOL",
          "type": "data"
        },
        "index": {
          "description": "The HOL monad structures computations in the HaskHOL system at the stateful layer and above The type parameters are used as such cls HOL computations are split into two classes those that extend the current working theory and those that are pure ly used for proof The cls parameter is used to indicate the classification of computation It is phantom type variable that is inhabited by one of two empty data types Theory and Proof thry Carries tag indicating the most recent checkpoint of the current working theory i.e the last library loaded Again it is phantom type variable that is inhabited by an empty data type unique tag is created for each library by linerearly extending the tag starting from base value For example the tag ExtThry EqualThry BaseThry would indicate current working theory consisting of the base and equality logic theories Note that typically this value is left polymorphic and is constrained by class related to library For example the following type indicates computation that can only be ran by using theory context value that has the equality logic library loaded EqualCtxt thry HOL cls thry The return type of HOL computation Note that the HOL monad is effectively flattened stack of limited IO monad and State monad We say limited as we restrict the possible IO-like computations to the ones shown in this module rather than allowing arbitrary computations through mechanism like MonadIO This prevents number of soundness issues For more information regarding the contents of theory context see the documentation for HOLContext",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "HOL",
          "package": "haskhol-core",
          "partial": "HOL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:HOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state type for the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.  A newtype wrapper to the following quad:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e An association \u003ccode\u003eList\u003c/code\u003e of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs that models HaskHOL's\n    extensible benign flag system.  The first field is a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation\n    of the type of a benign flag and the second field is that flag's current\n    value.\n\u003c/li\u003e\u003cli\u003e An \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e counter that is used for fresh name generation for type variables.\n\u003c/li\u003e\u003cli\u003e An \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e counter that is used for fresh name generation for term variables.\n\u003c/li\u003e\u003cli\u003e An association \u003ccode\u003eList\u003c/code\u003e of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eExtState\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs that models \n    HaskHOL's extensible state. The first field is a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of \n    the type of a state extension and the second field is a wrapping of that \n    type that has an instance of the \u003ccode\u003e\u003ca\u003eExtClass\u003c/a\u003e\u003c/code\u003e class.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eputExt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetExtCtxt\u003c/a\u003e\u003c/code\u003e for more details on how to interact with the\n  extensible state and see \u003ccode\u003e\u003ca\u003esetBenignFlag\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetBenignFlag\u003c/a\u003e\u003c/code\u003e for more details\n  on how to interact with benign flags.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "HOLContext",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State-Monad.html#HOLContext",
          "type": "data"
        },
        "index": {
          "description": "The state type for the HOL monad newtype wrapper to the following quad An association List of String Bool pairs that models HaskHOL extensible benign flag system The first field is String representation of the type of benign flag and the second field is that flag current value An Int counter that is used for fresh name generation for type variables An Int counter that is used for fresh name generation for term variables An association List of String ExtState pairs that models HaskHOL extensible state The first field is String representation of the type of state extension and the second field is wrapping of that type that has an instance of the ExtClass class See putExt and getExtCtxt for more details on how to interact with the extensible state and see setBenignFlag and getBenignFlag for more details on how to interact with benign flags",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "HOLContext",
          "package": "haskhol-core",
          "partial": "HOLContext",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:HOLContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type for generic errors in HaskHOL.  Carries a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e message.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "HOLException",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State-Monad.html#HOLException",
          "type": "newtype"
        },
        "index": {
          "description": "The data type for generic errors in HaskHOL Carries String message",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "HOLException",
          "package": "haskhol-core",
          "partial": "HOLException",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:HOLException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym for \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "HOLRef",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State-Monad.html#HOLRef",
          "type": "type"
        },
        "index": {
          "description": "type synonym for IORef",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "HOLRef",
          "package": "haskhol-core",
          "partial": "HOLRef",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:HOLRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe classification tag for proof computations.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "Proof",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State-Monad.html#Proof",
          "type": "data"
        },
        "index": {
          "description": "The classification tag for proof computations",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "Proof",
          "package": "haskhol-core",
          "partial": "Proof",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:Proof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe classification tag for theory extension computations.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "Theory",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State-Monad.html#Theory",
          "type": "data"
        },
        "index": {
          "description": "The classification tag for theory extension computations",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "Theory",
          "package": "haskhol-core",
          "partial": "Theory",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#t:Theory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HaskHOL.Core.State.Monad",
          "name": "BaseThry",
          "package": "haskhol-core",
          "signature": "BaseThry",
          "source": "src/HaskHOL-Core-State-Monad.html#BaseThry",
          "type": "function"
        },
        "index": {
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "BaseThry",
          "package": "haskhol-core",
          "partial": "Base Thry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:BaseThry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HaskHOL.Core.State.Monad",
          "name": "ExtThry",
          "package": "haskhol-core",
          "signature": "ExtThry a b",
          "source": "src/HaskHOL-Core-State-Monad.html#ExtThry",
          "type": "function"
        },
        "index": {
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "ExtThry",
          "package": "haskhol-core",
          "partial": "Ext Thry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:ExtThry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HaskHOL.Core.State.Monad",
          "name": "HOLException",
          "package": "haskhol-core",
          "signature": "HOLException String",
          "source": "src/HaskHOL-Core-State-Monad.html#HOLException",
          "type": "function"
        },
        "index": {
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "HOLException",
          "package": "haskhol-core",
          "partial": "HOLException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:HOLException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e are defined in terms of catching a \n  \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003ecatchHOL\u003c/a\u003e\u003c/code\u003e and then ignoring it to run an alternative\n  computation instead.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "catchHOL",
          "package": "haskhol-core",
          "signature": "HOL cls thry a -\u003e (e -\u003e HOL cls thry a) -\u003e HOL cls thry a",
          "source": "src/HaskHOL-Core-State-Monad.html#catchHOL",
          "type": "function"
        },
        "index": {
          "description": "version of catch lifted to the HOL monad Note that mplus and are defined in terms of catching SomeException with catchHOL and then ignoring it to run an alternative computation instead",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "catchHOL",
          "normalized": "HOL a b c-\u003e(d-\u003eHOL a b c)-\u003eHOL a b c",
          "package": "haskhol-core",
          "partial": "HOL",
          "signature": "HOL cls thry a-\u003e(e-\u003eHOL cls thry a)-\u003eHOL cls thry a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:catchHOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial working theory value:  debugging is on, the counters are at zero \n  and the extensible state is empty.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "ctxtBase",
          "package": "haskhol-core",
          "signature": "HOLContext BaseThry",
          "source": "src/HaskHOL-Core-State-Monad.html#ctxtBase",
          "type": "function"
        },
        "index": {
          "description": "The initial working theory value debugging is on the counters are at zero and the extensible state is empty",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "ctxtBase",
          "package": "haskhol-core",
          "partial": "Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:ctxtBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003erunHOLCtxt\u003c/a\u003e\u003c/code\u003e that returns only the resultant value.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "evalHOLCtxt",
          "package": "haskhol-core",
          "signature": "HOL cls thry a -\u003e HOLContext thry -\u003e IO a",
          "source": "src/HaskHOL-Core-State-Monad.html#evalHOLCtxt",
          "type": "function"
        },
        "index": {
          "description": "version of runHOLCtxt that returns only the resultant value",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "evalHOLCtxt",
          "normalized": "HOL a b c-\u003eHOLContext b-\u003eIO c",
          "package": "haskhol-core",
          "partial": "HOLCtxt",
          "signature": "HOL cls thry a-\u003eHOLContext thry-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:evalHOLCtxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003erunHOLCtxt\u003c/a\u003e\u003c/code\u003e that returns only the theory context.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "execHOLCtxt",
          "package": "haskhol-core",
          "signature": "HOL cls thry a -\u003e HOLContext thry -\u003e IO (HOLContext thry)",
          "source": "src/HaskHOL-Core-State-Monad.html#execHOLCtxt",
          "type": "function"
        },
        "index": {
          "description": "version of runHOLCtxt that returns only the theory context",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "execHOLCtxt",
          "normalized": "HOL a b c-\u003eHOLContext b-\u003eIO(HOLContext b)",
          "package": "haskhol-core",
          "partial": "HOLCtxt",
          "signature": "HOL cls thry a-\u003eHOLContext thry-\u003eIO(HOLContext thry)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:execHOLCtxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.  Note that we\n  define our own version of this function, rather than define an instance of\n  \u003ccode\u003eMonadState\u003c/code\u003e so that we can control where the morphisms are exported.\n\u003c/p\u003e\u003cp\u003eThis is done in the name of soundness given that a user can inject an unsound\n  theory context into a proof using a \u003ccode\u003eput\u003c/code\u003e morphism.  This is analogous to the\n  issue behind defining an instance of \u003ccode\u003eMonadIO\u003c/code\u003e given \u003ccode\u003eliftIO\u003c/code\u003e can be used to\n  inject arbitrary computations into the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad, including ones containing\n  unsound contexts.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "get",
          "package": "haskhol-core",
          "signature": "HOL cls thry (HOLContext thry)",
          "source": "src/HaskHOL-Core-State-Monad.html#get",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to get for the HOL monad Note that we define our own version of this function rather than define an instance of MonadState so that we can control where the morphisms are exported This is done in the name of soundness given that user can inject an unsound theory context into proof using put morphism This is analogous to the issue behind defining an instance of MonadIO given liftIO can be used to inject arbitrary computations into the HOL monad including ones containing unsound contexts",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "get",
          "package": "haskhol-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003egetBenignFlagCtxt\u003c/a\u003e\u003c/code\u003e that can be used with theory contexts passed\n  implicitly as part of a \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e\u003cp\u003eNever fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "getBenignFlag",
          "package": "haskhol-core",
          "signature": "a -\u003e HOL cls thry Bool",
          "source": "src/HaskHOL-Core-State-Monad.html#getBenignFlag",
          "type": "function"
        },
        "index": {
          "description": "version of getBenignFlagCtxt that can be used with theory contexts passed implicitly as part of HOL computation Never fails",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "getBenignFlag",
          "normalized": "a-\u003eHOL b c Bool",
          "package": "haskhol-core",
          "partial": "Benign Flag",
          "signature": "a-\u003eHOL cls thry Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:getBenignFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the value of a benign flag from a theory context.  This function is\n  typically used external to \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computations, such as in the parser and \n  printer.\n\u003c/p\u003e\u003cp\u003eNote that retrieval of the value requires a witness to the desired flag's\n  type, i.e.\n\u003c/p\u003e\u003cpre\u003e getBenignFlag FlagDebug\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e getBenignFlag (undefined :: FlagDebug)\n\u003c/pre\u003e\u003cp\u003eIn the event that the flag is not found then the \u003ccode\u003e\u003ca\u003einitFlagValue\u003c/a\u003e\u003c/code\u003e for that type\n  is returned. Thus, this function never fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "getBenignFlagCtxt",
          "package": "haskhol-core",
          "signature": "a -\u003e HOLContext thry -\u003e Bool",
          "source": "src/HaskHOL-Core-State-Monad.html#getBenignFlagCtxt",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the value of benign flag from theory context This function is typically used external to HOL computations such as in the parser and printer Note that retrieval of the value requires witness to the desired flag type i.e getBenignFlag FlagDebug or getBenignFlag undefined FlagDebug In the event that the flag is not found then the initFlagValue for that type is returned Thus this function never fails",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "getBenignFlagCtxt",
          "normalized": "a-\u003eHOLContext b-\u003eBool",
          "package": "haskhol-core",
          "partial": "Benign Flag Ctxt",
          "signature": "a-\u003eHOLContext thry-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:getBenignFlagCtxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003egetExtCtxt\u003c/a\u003e\u003c/code\u003e that can be used with theory contexts passed\n  implicitly as part of a \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e\u003cp\u003eNever fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "getExt",
          "package": "haskhol-core",
          "signature": "HOL cls thry a",
          "source": "src/HaskHOL-Core-State-Monad.html#getExt",
          "type": "function"
        },
        "index": {
          "description": "version of getExtCtxt that can be used with theory contexts passed implicitly as part of HOL computation Never fails",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "getExt",
          "package": "haskhol-core",
          "partial": "Ext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:getExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrives a state extension from a theory context.  This function is typically \n  used external to \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computations, such as in the parser, where\n  a theory context is passed explicitly as a value.\n\u003c/p\u003e\u003cp\u003eNote that the selection of the extension is driven by the return type of this \n  function.  Thus when binding the result of this function, the type must be \n  fixed either via explicit type annotation or through the presence of a unique \n  constructor.\n\u003c/p\u003e\u003cp\u003eIn order to provide the correct result type, this function relies on the\n  type-safe \u003ccode\u003e\u003ca\u003ecast\u003c/a\u003e\u003c/code\u003e operation.  In the event that either this cast fails or the \n  state extension is not found then the \u003ccode\u003e\u003ca\u003einitValue\u003c/a\u003e\u003c/code\u003e for that type is returned.\n  Thus, this function never fails.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "getExtCtxt",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e a",
          "source": "src/HaskHOL-Core-State-Monad.html#getExtCtxt",
          "type": "function"
        },
        "index": {
          "description": "Retrives state extension from theory context This function is typically used external to HOL computations such as in the parser where theory context is passed explicitly as value Note that the selection of the extension is driven by the return type of this function Thus when binding the result of this function the type must be fixed either via explicit type annotation or through the presence of unique constructor In order to provide the correct result type this function relies on the type-safe cast operation In the event that either this cast fails or the state extension is not found then the initValue for that type is returned Thus this function never fails",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "getExtCtxt",
          "normalized": "HOLContext a-\u003eb",
          "package": "haskhol-core",
          "partial": "Ext Ctxt",
          "signature": "HOLContext thry-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:getExtCtxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e that applies a function to the state before returning the\n  result.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "gets",
          "package": "haskhol-core",
          "signature": "(HOLContext thry -\u003e a) -\u003e HOL cls thry a",
          "source": "src/HaskHOL-Core-State-Monad.html#gets",
          "type": "function"
        },
        "index": {
          "description": "version of get that applies function to the state before returning the result",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "gets",
          "normalized": "(HOLContext a-\u003eb)-\u003eHOL c a b",
          "package": "haskhol-core",
          "signature": "(HOLContext thry-\u003ea)-\u003eHOL cls thry a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:gets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe intial value for a benign flag.  The value returned when attempting to\n      retrieve a flag that is not yet defined in the context.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "initFlagValue",
          "package": "haskhol-core",
          "signature": "a -\u003e Bool",
          "source": "src/HaskHOL-Core-State-Monad.html#initFlagValue",
          "type": "method"
        },
        "index": {
          "description": "The intial value for benign flag The value returned when attempting to retrieve flag that is not yet defined in the context",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "initFlagValue",
          "normalized": "a-\u003eBool",
          "package": "haskhol-core",
          "partial": "Flag Value",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:initFlagValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe intial value for an extensible state type.  The value returned when\n      attempting to retrieve a type that is not yet defined in the context.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "initValue",
          "package": "haskhol-core",
          "signature": "a",
          "source": "src/HaskHOL-Core-State-Monad.html#initValue",
          "type": "method"
        },
        "index": {
          "description": "The intial value for an extensible state type The value returned when attempting to retrieve type that is not yet defined in the context",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "initValue",
          "package": "haskhol-core",
          "partial": "Value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:initValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value into the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad mapping \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003es\n  and \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003es.  \n\u003c/p\u003e\u003cp\u003eNote that the value inside the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e must have an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e \n  class such that \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e can be used to construct a string to be used with\n  \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "liftEither",
          "package": "haskhol-core",
          "signature": "String -\u003e Either err a -\u003e HOL cls thry a",
          "source": "src/HaskHOL-Core-State-Monad.html#liftEither",
          "type": "function"
        },
        "index": {
          "description": "Lifts an Either value into the HOL monad mapping Right to return and Left to fail Note that the value inside the Left must have an instance of the Show class such that show can be used to construct string to be used with fail",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "liftEither",
          "normalized": "String-\u003eEither a b-\u003eHOL c d b",
          "package": "haskhol-core",
          "partial": "Either",
          "signature": "String-\u003eEither err a-\u003eHOL cls thry a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:liftEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value into the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad mapping \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003es and\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003es with the provided \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "liftMaybe",
          "package": "haskhol-core",
          "signature": "String -\u003e Maybe a -\u003e HOL cls thry a",
          "source": "src/HaskHOL-Core-State-Monad.html#liftMaybe",
          "type": "function"
        },
        "index": {
          "description": "Lifts Maybe value into the HOL monad mapping Just to return and Nothing to fail with the provided String",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "liftMaybe",
          "normalized": "String-\u003eMaybe a-\u003eHOL b c a",
          "package": "haskhol-core",
          "partial": "Maybe",
          "signature": "String-\u003eMaybe a-\u003eHOL cls thry a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:liftMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the value of a state extension.  Functionally equivalent to the\n  composition \n\u003c/p\u003e\u003cpre\u003e \\ f -\u003e putExt . f =\u003c\u003c getExt\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "modifyExt",
          "package": "haskhol-core",
          "signature": "(a -\u003e a) -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-State-Monad.html#modifyExt",
          "type": "function"
        },
        "index": {
          "description": "Modifies the value of state extension Functionally equivalent to the composition putExt getExt",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "modifyExt",
          "normalized": "(a-\u003ea)-\u003eHOL Theory b()",
          "package": "haskhol-core",
          "partial": "Ext",
          "signature": "(a-\u003ea)-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:modifyExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a given function to a \u003ccode\u003e\u003ca\u003eHOLRef\u003c/a\u003e\u003c/code\u003e, modifying the stored value.\n  Functionally equivalent to \u003ccode\u003e\u003ca\u003emodifyHOLRef\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "modifyHOLRef",
          "package": "haskhol-core",
          "signature": "IORef a -\u003e (a -\u003e a) -\u003e HOL cls thry ()",
          "source": "src/HaskHOL-Core-State-Monad.html#modifyHOLRef",
          "type": "function"
        },
        "index": {
          "description": "Applies given function to HOLRef modifying the stored value Functionally equivalent to modifyHOLRef lifted to the HOL monad",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "modifyHOLRef",
          "normalized": "IORef a-\u003e(a-\u003ea)-\u003eHOL b c()",
          "package": "haskhol-core",
          "partial": "HOLRef",
          "signature": "IORef a-\u003e(a-\u003ea)-\u003eHOL cls thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:modifyHOLRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enewExtension\u003c/a\u003e\u003c/code\u003e splice can be used to automatically construct a new state\n  extension given a name and a quoted, type annotated, initial value.  The type\n  annotation is required as many initial values, such as an empty list, are too\n  polymorphic to infer the correct type on its own.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e newExtension \"TheCoreDefinitions\" [| [] :: [HOLThm] |]\n\u003c/pre\u003e\u003cp\u003ewill construct the following Haskell code:\n\u003c/p\u003e\u003cpre\u003e newtype TheCoreDefinitions = TheCoreDefinitions [HOLThm] deriving Typeable\n instance ExtClass TheCoreDefinitions where\n     initValue = TheCoreDefinitions []\n\u003c/pre\u003e\u003cp\u003eNote that, due to limitations with the current version of Template Haskell,\n  \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e instances should be derived external to this splice via \u003ccode\u003e\u003ca\u003ederiveLift\u003c/a\u003e\u003c/code\u003e or\n  \u003ccode\u003e\u003ca\u003ederiveLiftMany\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "newExtension",
          "package": "haskhol-core",
          "signature": "String -\u003e ExpQ -\u003e Q [Dec]",
          "source": "src/HaskHOL-Core-State-Monad.html#newExtension",
          "type": "function"
        },
        "index": {
          "description": "The newExtension splice can be used to automatically construct new state extension given name and quoted type annotated initial value The type annotation is required as many initial values such as an empty list are too polymorphic to infer the correct type on its own Example newExtension TheCoreDefinitions HOLThm will construct the following Haskell code newtype TheCoreDefinitions TheCoreDefinitions HOLThm deriving Typeable instance ExtClass TheCoreDefinitions where initValue TheCoreDefinitions Note that due to limitations with the current version of Template Haskell Lift instances should be derived external to this splice via deriveLift or deriveLiftMany",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "newExtension",
          "normalized": "String-\u003eExpQ-\u003eQ[Dec]",
          "package": "haskhol-core",
          "partial": "Extension",
          "signature": "String-\u003eExpQ-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:newExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enewFlag\u003c/a\u003e\u003c/code\u003e splice can be used to automatically construct a new benign flag\n  given a name and an initial flag value.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e newFlag \"FlagDebug\" True\n\u003c/pre\u003e\u003cp\u003ewill construct the following Haskell code:\n\u003c/p\u003e\u003cpre\u003e data FlagDebug = FlagDebug deriving Typeable\n instance BenignFlag FlagDebug where\n     initFlagValue _ = True\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "newFlag",
          "package": "haskhol-core",
          "signature": "String -\u003e Bool -\u003e Q [Dec]",
          "source": "src/HaskHOL-Core-State-Monad.html#newFlag",
          "type": "function"
        },
        "index": {
          "description": "The newFlag splice can be used to automatically construct new benign flag given name and an initial flag value Example newFlag FlagDebug True will construct the following Haskell code data FlagDebug FlagDebug deriving Typeable instance BenignFlag FlagDebug where initFlagValue True",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "newFlag",
          "normalized": "String-\u003eBool-\u003eQ[Dec]",
          "package": "haskhol-core",
          "partial": "Flag",
          "signature": "String-\u003eBool-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:newFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eHOLRef\u003c/a\u003e\u003c/code\u003e from a given starting value.  Functionally equivalent\n  to \u003ccode\u003e\u003ca\u003enewIORef\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "newHOLRef",
          "package": "haskhol-core",
          "signature": "a -\u003e HOL cls thry (HOLRef a)",
          "source": "src/HaskHOL-Core-State-Monad.html#newHOLRef",
          "type": "function"
        },
        "index": {
          "description": "Creates new HOLRef from given starting value Functionally equivalent to newIORef lifted to the HOL monad",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "newHOLRef",
          "normalized": "a-\u003eHOL b c(HOLRef a)",
          "package": "haskhol-core",
          "partial": "HOLRef",
          "signature": "a-\u003eHOL cls thry(HOLRef a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:newHOLRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a new, or modifies an existing, state extension.  State extensions in the\n  context are stored as a list of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eExtState\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs.  The first \n  field in this pair is a term-level reification of a state extension's type, \n  produced via a composition of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etypeOf\u003c/a\u003e\u003c/code\u003e.  The second field is simply\n  a wrapping of the extension's value with \u003ccode\u003e\u003ca\u003eExtState\u003c/a\u003e\u003c/code\u003e to facilitate \n  heterogeneous structures.\n\u003c/p\u003e\u003cp\u003eNumerous usage examples can be found in the \u003ca\u003eHaskHOL.Core.Parser.Lib\u003c/a\u003e module\n  where extensible state is used to store the list of operators, as well as\n  other information, required by the parser.\n\u003c/p\u003e\u003cp\u003eNote that since the retrieval and storage of state extensions are driven by \n  types, it is in the best interest of library implementors to guarantee that\n  the type of their extensions are unique.  The easiest way to do this is to\n  create a \u003ccode\u003enewtype\u003c/code\u003e wrapper for your extension and hide the internal\n  constructor to prevent unintended modification.  Again, see \n  \u003ca\u003eHaskHOL.Core.Parser.Lib\u003c/a\u003e for usage examples.\n\u003c/p\u003e\u003cp\u003eAlternatively, the \u003ccode\u003e\u003ca\u003enewExtension\u003c/a\u003e\u003c/code\u003e splice can be used to automatically\n  construct a new extension given a name and initial value.  See that function's\n  documentation for more information.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "putExt",
          "package": "haskhol-core",
          "signature": "a -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-State-Monad.html#putExt",
          "type": "function"
        },
        "index": {
          "description": "Adds new or modifies an existing state extension State extensions in the context are stored as list of String ExtState pairs The first field in this pair is term-level reification of state extension type produced via composition of show and typeOf The second field is simply wrapping of the extension value with ExtState to facilitate heterogeneous structures Numerous usage examples can be found in the HaskHOL.Core.Parser.Lib module where extensible state is used to store the list of operators as well as other information required by the parser Note that since the retrieval and storage of state extensions are driven by types it is in the best interest of library implementors to guarantee that the type of their extensions are unique The easiest way to do this is to create newtype wrapper for your extension and hide the internal constructor to prevent unintended modification Again see HaskHOL.Core.Parser.Lib for usage examples Alternatively the newExtension splice can be used to automatically construct new extension given name and initial value See that function documentation for more information",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "putExt",
          "normalized": "a-\u003eHOL Theory b()",
          "package": "haskhol-core",
          "partial": "Ext",
          "signature": "a-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:putExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "putStrHOL",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL cls thry ()",
          "source": "src/HaskHOL-Core-State-Monad.html#putStrHOL",
          "type": "function"
        },
        "index": {
          "description": "version of putStr lifted to the HOL monad",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "putStrHOL",
          "normalized": "String-\u003eHOL a b()",
          "package": "haskhol-core",
          "partial": "Str HOL",
          "signature": "String-\u003eHOL cls thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:putStrHOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "putStrLnHOL",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL cls thry ()",
          "source": "src/HaskHOL-Core-State-Monad.html#putStrLnHOL",
          "type": "function"
        },
        "index": {
          "description": "version of putStrLn lifted to the HOL monad",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "putStrLnHOL",
          "normalized": "String-\u003eHOL a b()",
          "package": "haskhol-core",
          "partial": "Str Ln HOL",
          "signature": "String-\u003eHOL cls thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:putStrLnHOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a \u003ccode\u003e\u003ca\u003eHOLRef\u003c/a\u003e\u003c/code\u003e returning the stored value.  Functionally equivalent to \n  \u003ccode\u003e\u003ca\u003ereadIORef\u003c/a\u003e\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "readHOLRef",
          "package": "haskhol-core",
          "signature": "IORef a -\u003e HOL cls thry a",
          "source": "src/HaskHOL-Core-State-Monad.html#readHOLRef",
          "type": "function"
        },
        "index": {
          "description": "Reads HOLRef returning the stored value Functionally equivalent to readIORef lifted to the HOL monad",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "readHOLRef",
          "normalized": "IORef a-\u003eHOL b c a",
          "package": "haskhol-core",
          "partial": "HOLRef",
          "signature": "IORef a-\u003eHOL cls thry a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:readHOLRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates a \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computation with a provided theory context.\n            Returns the result paired with an updated theory context.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "runHOLCtxt",
          "package": "haskhol-core",
          "signature": "HOL cls thry a -\u003e HOLContext thry -\u003e IO (a, HOLContext thry)",
          "source": "src/HaskHOL-Core-State-Monad.html#runHOLCtxt",
          "type": "function"
        },
        "index": {
          "description": "Evaluates HOL computation with provided theory context Returns the result paired with an updated theory context",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "runHOLCtxt",
          "normalized": "HOL a b c-\u003eHOLContext b-\u003eIO(c,HOLContext b)",
          "package": "haskhol-core",
          "partial": "HOLCtxt",
          "signature": "HOL cls thry a-\u003eHOLContext thry-\u003eIO(a,HOLContext thry)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:runHOLCtxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a new, or modifies an existing, benign flag to be \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  Benign flags \n  in the context are stored as a list of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs.  The first \n  field in this pair is a term-level reificatino of a benign flag's type, \n  produced via a composition of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etypeOf\u003c/a\u003e\u003c/code\u003e.  The second field is simply\n  the current boolean value of the flag.\n\u003c/p\u003e\u003cp\u003eNumerous usage examples can be found in both the \u003ca\u003eHaskHOL.Core.Parser.Lib\u003c/a\u003e and\n  \u003ca\u003eHaskHOL.Core.Printer\u003c/a\u003e modules where flags are used to direct the behavior\n  of the parsers and printers accordingly.\n\u003c/p\u003e\u003cp\u003eNote that since the retrieval and storage of benign flags are driven by types,\n  it is in the best interest of library implementors to guarantee that the types\n  of their flags are unique.  The easiest way to do this is to create a unique\n  \u003ccode\u003edata\u003c/code\u003e type for each flag.  The type doesn't need to carry a payload, but it\n  does need to provide a witness to the flag type.  As such, it can either be\n  a nullary, punned data declaration, i.e. \u003ccode\u003edata X = X\u003c/code\u003e, or an empty data \n  declaration with a type annotated instance of \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e acting as the\n  ness, i.e. \u003ccode\u003eundefined :: X\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e setBenignFlag FlagDebug\n\u003c/pre\u003e\u003cp\u003ewould set the debugging flag equal to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlternatively, the \u003ccode\u003e\u003ca\u003enewFlag\u003c/a\u003e\u003c/code\u003e splice can be used to automatically construct a \n  new extension given a name and initial value.  See that function's \n  documentation for more information.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "setBenignFlag",
          "package": "haskhol-core",
          "signature": "a -\u003e HOL cls thry ()",
          "source": "src/HaskHOL-Core-State-Monad.html#setBenignFlag",
          "type": "function"
        },
        "index": {
          "description": "Adds new or modifies an existing benign flag to be True Benign flags in the context are stored as list of String Bool pairs The first field in this pair is term-level reificatino of benign flag type produced via composition of show and typeOf The second field is simply the current boolean value of the flag Numerous usage examples can be found in both the HaskHOL.Core.Parser.Lib and HaskHOL.Core.Printer modules where flags are used to direct the behavior of the parsers and printers accordingly Note that since the retrieval and storage of benign flags are driven by types it is in the best interest of library implementors to guarantee that the types of their flags are unique The easiest way to do this is to create unique data type for each flag The type doesn need to carry payload but it does need to provide witness to the flag type As such it can either be nullary punned data declaration i.e data or an empty data declaration with type annotated instance of undefined acting as the ness i.e undefined Example setBenignFlag FlagDebug would set the debugging flag equal to True Alternatively the newFlag splice can be used to automatically construct new extension given name and initial value See that function documentation for more information",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "setBenignFlag",
          "normalized": "a-\u003eHOL b c()",
          "package": "haskhol-core",
          "partial": "Benign Flag",
          "signature": "a-\u003eHOL cls thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:setBenignFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003ethrowIO\u003c/code\u003e lifted to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.  \n\u003c/p\u003e\u003cp\u003eNote that the following functions for the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e type rely on \u003ccode\u003e\u003ca\u003ethrowHOL\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e - Equivalent to \n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e throwHOL . HOLException\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e - Equivalent to \n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e fail \"mzero - HOL\"\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e - Equivalent to \n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e fail \"empty - HOL\"\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "throwHOL",
          "package": "haskhol-core",
          "signature": "e -\u003e HOL cls thry a",
          "source": "src/HaskHOL-Core-State-Monad.html#throwHOL",
          "type": "function"
        },
        "index": {
          "description": "version of throwIO lifted to the HOL monad Note that the following functions for the HOL type rely on throwHOL fail Equivalent to throwHOL HOLException mzero Equivalent to fail mzero HOL empty Equivalent to fail empty HOL",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "throwHOL",
          "normalized": "a-\u003eHOL b c d",
          "package": "haskhol-core",
          "partial": "HOL",
          "signature": "e-\u003eHOL cls thry a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:throwHOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrements the term counter stored in the context, returning the new value.\n  Can be used to guarantee the freshness of term names within a single \n  computation.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "tickTermCounter",
          "package": "haskhol-core",
          "signature": "HOL cls thry Int",
          "source": "src/HaskHOL-Core-State-Monad.html#tickTermCounter",
          "type": "function"
        },
        "index": {
          "description": "Increments the term counter stored in the context returning the new value Can be used to guarantee the freshness of term names within single computation",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "tickTermCounter",
          "package": "haskhol-core",
          "partial": "Term Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:tickTermCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrements the type counter stored in the context, returning the new value.\n  Can be used to gurantee the freshness of type names within a single\n  computation.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "tickTypeCounter",
          "package": "haskhol-core",
          "signature": "HOL cls thry Int",
          "source": "src/HaskHOL-Core-State-Monad.html#tickTypeCounter",
          "type": "function"
        },
        "index": {
          "description": "Increments the type counter stored in the context returning the new value Can be used to gurantee the freshness of type names within single computation",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "tickTypeCounter",
          "package": "haskhol-core",
          "partial": "Type Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:tickTypeCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsets a benign flag making it \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "unsetBenignFlag",
          "package": "haskhol-core",
          "signature": "a -\u003e HOL cls thry ()",
          "source": "src/HaskHOL-Core-State-Monad.html#unsetBenignFlag",
          "type": "function"
        },
        "index": {
          "description": "Unsets benign flag making it False",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "unsetBenignFlag",
          "normalized": "a-\u003eHOL b c()",
          "package": "haskhol-core",
          "partial": "Benign Flag",
          "signature": "a-\u003eHOL cls thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:unsetBenignFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a value to a \u003ccode\u003e\u003ca\u003eHOLRef\u003c/a\u003e\u003c/code\u003e.  Functionally equivalent to \u003ccode\u003e\u003ca\u003ewriteHOLRef\u003c/a\u003e\u003c/code\u003e lifted\n  to the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State.Monad",
          "name": "writeHOLRef",
          "package": "haskhol-core",
          "signature": "IORef a -\u003e a -\u003e HOL cls thry ()",
          "source": "src/HaskHOL-Core-State-Monad.html#writeHOLRef",
          "type": "function"
        },
        "index": {
          "description": "Writes value to HOLRef Functionally equivalent to writeHOLRef lifted to the HOL monad",
          "hierarchy": "HaskHOL Core State Monad",
          "module": "HaskHOL.Core.State.Monad",
          "name": "writeHOLRef",
          "normalized": "IORef a-\u003ea-\u003eHOL b c()",
          "package": "haskhol-core",
          "partial": "HOLRef",
          "signature": "IORef a-\u003ea-\u003eHOL cls thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State-Monad.html#v:writeHOLRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the stateful layer of HaskHOL.  It consists of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Stateful type primitives not found in \u003ca\u003eHaskHOL.Core.Types\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Stateful term primitives not found in \u003ca\u003eHaskHOL.Core.Terms\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Stateful theory extension primitives not found in \u003ca\u003eHaskHOL.Core.Kernel\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e A very primitive debugging system.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "HaskHOL.Core.State",
          "name": "State",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the stateful layer of HaskHOL It consists of Stateful type primitives not found in HaskHOL.Core.Types Stateful term primitives not found in HaskHOL.Core.Terms Stateful theory extension primitives not found in HaskHOL.Core.Kernel very primitive debugging system",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "State",
          "package": "haskhol-core",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlag states whether or not to print debug statements.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "FlagDebug",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core-State.html#FlagDebug",
          "type": "data"
        },
        "index": {
          "description": "Flag states whether or not to print debug statements",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "FlagDebug",
          "package": "haskhol-core",
          "partial": "Flag Debug",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#t:FlagDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HaskHOL.Core.State",
          "name": "FlagDebug",
          "package": "haskhol-core",
          "signature": "FlagDebug",
          "source": "src/HaskHOL-Core-State.html#FlagDebug",
          "type": "function"
        },
        "index": {
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "FlagDebug",
          "package": "haskhol-core",
          "partial": "Flag Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:FlagDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the list of axioms from the current working theory.  The list\n  contains pairs of string names and the axioms.  This names exists such that\n  compile time operations have a tag with which they can use to extract axioms \n  from saved theories.  See \u003ccode\u003eextractAxiom\u003c/code\u003e for more details.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "axioms",
          "package": "haskhol-core",
          "signature": "HOL cls thry [(String, HOLThm)]",
          "source": "src/HaskHOL-Core-State.html#axioms",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the list of axioms from the current working theory The list contains pairs of string names and the axioms This names exists such that compile time operations have tag with which they can use to extract axioms from saved theories See extractAxiom for more details",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "axioms",
          "normalized": "HOL a b[(String,HOLThm)]",
          "package": "haskhol-core",
          "signature": "HOL cls thry[(String,HOLThm)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:axioms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the list of term constants from the current working theory.  The\n  list contains pairs of strings recognized by the parser and the associated\n  term constant value, i.e. \n\u003c/p\u003e\u003cpre\u003e (\"=\", tmEq tyA)\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.State",
          "name": "constants",
          "package": "haskhol-core",
          "signature": "HOL cls thry [(String, HOLTerm)]",
          "source": "src/HaskHOL-Core-State.html#constants",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the list of term constants from the current working theory The list contains pairs of strings recognized by the parser and the associated term constant value i.e tmEq tyA",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "constants",
          "normalized": "HOL a b[(String,HOLTerm)]",
          "package": "haskhol-core",
          "signature": "HOL cls thry[(String,HOLTerm)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:constants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the list of definitions from the current working theory.  See\n  \u003ccode\u003e\u003ca\u003enewBasicDefinition\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "definitions",
          "package": "haskhol-core",
          "signature": "HOL cls thry [HOLThm]",
          "source": "src/HaskHOL-Core-State.html#definitions",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the list of definitions from the current working theory See newBasicDefinition for more details",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "definitions",
          "normalized": "HOL a b[HOLThm]",
          "package": "haskhol-core",
          "signature": "HOL cls thry[HOLThm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:definitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a specific axiom by name.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if there is no\n  axiom with the provided name in the current working theory.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "getAxiom",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL cls thry HOLThm",
          "source": "src/HaskHOL-Core-State.html#getAxiom",
          "type": "function"
        },
        "index": {
          "description": "Retrieves specific axiom by name Throws HOLException if there is no axiom with the provided name in the current working theory",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "getAxiom",
          "normalized": "String-\u003eHOL a b HOLThm",
          "package": "haskhol-core",
          "partial": "Axiom",
          "signature": "String-\u003eHOL cls thry HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:getAxiom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the type of a given term constant.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the\n  provided term constant name is not defined.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "getConstType",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL cls thry HOLType",
          "source": "src/HaskHOL-Core-State.html#getConstType",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the type of given term constant Throws HOLException if the provided term constant name is not defined",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "getConstType",
          "normalized": "String-\u003eHOL a b HOLType",
          "package": "haskhol-core",
          "partial": "Const Type",
          "signature": "String-\u003eHOL cls thry HOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:getConstType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003egetTypeArityCtxt\u003c/a\u003e\u003c/code\u003e that operates over the current working theory\n  of a \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computation.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e if the provided type constant\n  name is not defined.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "getTypeArity",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL cls thry Int",
          "source": "src/HaskHOL-Core-State.html#getTypeArity",
          "type": "function"
        },
        "index": {
          "description": "version of getTypeArityCtxt that operates over the current working theory of HOL computation Throws HOLException if the provided type constant name is not defined",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "getTypeArity",
          "normalized": "String-\u003eHOL a b Int",
          "package": "haskhol-core",
          "partial": "Type Arity",
          "signature": "String-\u003eHOL cls thry Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:getTypeArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the arity of a given type constant.  Fails with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n  provided type constant name is not defined in the provided context.\n\u003c/p\u003e\u003cp\u003eNote that this function takes a \u003ccode\u003e\u003ca\u003eHOLContext\u003c/a\u003e\u003c/code\u003e argument such that it can be\n  used outside of \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computations; for example, in the parser.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "getTypeArityCtxt",
          "package": "haskhol-core",
          "signature": "HOLContext thry -\u003e String -\u003e Maybe Int",
          "source": "src/HaskHOL-Core-State.html#getTypeArityCtxt",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the arity of given type constant Fails with Nothing if the provided type constant name is not defined in the provided context Note that this function takes HOLContext argument such that it can be used outside of HOL computations for example in the parser",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "getTypeArityCtxt",
          "normalized": "HOLContext a-\u003eString-\u003eMaybe Int",
          "package": "haskhol-core",
          "partial": "Type Arity Ctxt",
          "signature": "HOLContext thry-\u003eString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:getTypeArityCtxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a specific instance of a term constant when provided with its name\n  and a type substition environment.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the \n  following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The instantiation as performed by \u003ccode\u003e\u003ca\u003einstConst\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/li\u003e\u003cli\u003e The provided name is not a currently defined constant.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.State",
          "name": "mkConst",
          "package": "haskhol-core",
          "signature": "String -\u003e [(l, r)] -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-State.html#mkConst",
          "type": "function"
        },
        "index": {
          "description": "Constructs specific instance of term constant when provided with its name and type substition environment Throws HOLException in the following cases The instantiation as performed by instConst fails The provided name is not currently defined constant",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "mkConst",
          "normalized": "String-\u003e[(a,b)]-\u003eHOL c d HOLTerm",
          "package": "haskhol-core",
          "partial": "Const",
          "signature": "String-\u003e[(l,r)]-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:mkConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emkConst\u003c/a\u003e\u003c/code\u003e that accepts a triplet of type substitition \n  environments.  Frequently used with the \u003ccode\u003etypeMatch\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "mkConstFull",
          "package": "haskhol-core",
          "signature": "String -\u003e SubstTrip -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-State.html#mkConstFull",
          "type": "function"
        },
        "index": {
          "description": "version of mkConst that accepts triplet of type substitition environments Frequently used with the typeMatch function",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "mkConstFull",
          "normalized": "String-\u003eSubstTrip-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Const Full",
          "signature": "String-\u003eSubstTrip-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:mkConstFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely creates an equality between two terms using \u003ccode\u003e\u003ca\u003emkConst\u003c/a\u003e\u003c/code\u003e using the type of\n  the left hand side argument to perform the required instantiation.  Throws a\n  \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the case when the types of the two terms do not agree.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "mkEq",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOLTerm -\u003e HOL cls thry HOLTerm",
          "source": "src/HaskHOL-Core-State.html#mkEq",
          "type": "function"
        },
        "index": {
          "description": "Safely creates an equality between two terms using mkConst using the type of the left hand side argument to perform the required instantiation Throws HOLException in the case when the types of the two terms do not agree",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "mkEq",
          "normalized": "HOLTerm-\u003eHOLTerm-\u003eHOL a b HOLTerm",
          "package": "haskhol-core",
          "partial": "Eq",
          "signature": "HOLTerm-\u003eHOLTerm-\u003eHOL cls thry HOLTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:mkEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a function type safely using \u003ccode\u003e\u003ca\u003emkType\u003c/a\u003e\u003c/code\u003e.  Should never fail provided\n  that the initial value for type constants has not been modified.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "mkFunTy",
          "package": "haskhol-core",
          "signature": "HOLType -\u003e HOLType -\u003e HOL cls thry HOLType",
          "source": "src/HaskHOL-Core-State.html#mkFunTy",
          "type": "function"
        },
        "index": {
          "description": "Constructs function type safely using mkType Should never fail provided that the initial value for type constants has not been modified",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "mkFunTy",
          "normalized": "HOLType-\u003eHOLType-\u003eHOL a b HOLType",
          "package": "haskhol-core",
          "partial": "Fun Ty",
          "signature": "HOLType-\u003eHOLType-\u003eHOL cls thry HOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:mkFunTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a type application given an operator name and a list of argument\n  types.  If the provided name is not a currently defined type constant then\n  this function defaults it to a type operator variable.  Throws a \n  \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A type operator's arity disagrees with the length of the argument list.\n\u003c/li\u003e\u003cli\u003e A type operator is applied to zero arguments.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.State",
          "name": "mkType",
          "package": "haskhol-core",
          "signature": "String -\u003e [HOLType] -\u003e HOL cls thry HOLType",
          "source": "src/HaskHOL-Core-State.html#mkType",
          "type": "function"
        },
        "index": {
          "description": "Constructs type application given an operator name and list of argument types If the provided name is not currently defined type constant then this function defaults it to type operator variable Throws HOLException in the following cases type operator arity disagrees with the length of the argument list type operator is applied to zero arguments",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "mkType",
          "normalized": "String-\u003e[HOLType]-\u003eHOL a b HOLType",
          "package": "haskhol-core",
          "partial": "Type",
          "signature": "String-\u003e[HOLType]-\u003eHOL cls thry HOLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:mkType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a new axiom of a given name and conclusion term.  Also adds this\n  new axiom to the current working theory.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the \n  following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The provided term is not a proposition.\n\u003c/li\u003e\u003cli\u003e An axiom with the provided name has already been declared.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HaskHOL.Core.State",
          "name": "newAxiom",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLTerm -\u003e HOL Theory thry HOLThm",
          "source": "src/HaskHOL-Core-State.html#newAxiom",
          "type": "function"
        },
        "index": {
          "description": "Constructs new axiom of given name and conclusion term Also adds this new axiom to the current working theory Throws HOLException in the following cases The provided term is not proposition An axiom with the provided name has already been declared",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "newAxiom",
          "normalized": "String-\u003eHOLTerm-\u003eHOL Theory a HOLThm",
          "package": "haskhol-core",
          "partial": "Axiom",
          "signature": "String-\u003eHOLTerm-\u003eHOL Theory thry HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:newAxiom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduces a definition of the form \u003ccode\u003ec = t\u003c/code\u003e into the current working theory.\n  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e when the definitional term is ill-formed.  See\n  \u003ccode\u003e\u003ca\u003enewDefinedConst\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "newBasicDefinition",
          "package": "haskhol-core",
          "signature": "HOLTerm -\u003e HOL Theory thry HOLThm",
          "source": "src/HaskHOL-Core-State.html#newBasicDefinition",
          "type": "function"
        },
        "index": {
          "description": "Introduces definition of the form into the current working theory Throws HOLException when the definitional term is ill-formed See newDefinedConst for more details",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "newBasicDefinition",
          "normalized": "HOLTerm-\u003eHOL Theory a HOLThm",
          "package": "haskhol-core",
          "partial": "Basic Definition",
          "signature": "HOLTerm-\u003eHOL Theory thry HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:newBasicDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduces a new type constant, and two associated term constants, into the \n  current working theory that is defined as an inhabited subset of an existing \n  type constant.  Takes the following arguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e  The name of the new type constant.\n\u003c/li\u003e\u003cli\u003e  The name of the new term constant that will be used to construct the type.\n\u003c/li\u003e\u003cli\u003e  The name of the new term constant that will be used to desctruct the type.\n\u003c/li\u003e\u003cli\u003e  A theorem that proves that the defining predicate has at least one\n     satisfying value.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e in the following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e  A term constant of either of the provided names has already been defined.\n\u003c/li\u003e\u003cli\u003e  A type constant of the provided name has already been defined.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enewDefinedTypeOp\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "newBasicTypeDefinition",
          "package": "haskhol-core",
          "signature": "String -\u003e String -\u003e String -\u003e HOLThm -\u003e HOL Theory thry (HOLThm, HOLThm)",
          "source": "src/HaskHOL-Core-State.html#newBasicTypeDefinition",
          "type": "function"
        },
        "index": {
          "description": "Introduces new type constant and two associated term constants into the current working theory that is defined as an inhabited subset of an existing type constant Takes the following arguments The name of the new type constant The name of the new term constant that will be used to construct the type The name of the new term constant that will be used to desctruct the type theorem that proves that the defining predicate has at least one satisfying value Throws HOLException in the following cases term constant of either of the provided names has already been defined type constant of the provided name has already been defined See newDefinedTypeOp for more details",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "newBasicTypeDefinition",
          "normalized": "String-\u003eString-\u003eString-\u003eHOLThm-\u003eHOL Theory a(HOLThm,HOLThm)",
          "package": "haskhol-core",
          "partial": "Basic Type Definition",
          "signature": "String-\u003eString-\u003eString-\u003eHOLThm-\u003eHOL Theory thry(HOLThm,HOLThm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:newBasicTypeDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a new primitive term constant of a given name and type.  Also adds\n  this new term to the current working theory.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e when a\n  term of the same name has already been declared.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "newConstant",
          "package": "haskhol-core",
          "signature": "String -\u003e HOLType -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-State.html#newConstant",
          "type": "function"
        },
        "index": {
          "description": "Constructs new primitive term constant of given name and type Also adds this new term to the current working theory Throws HOLException when term of the same name has already been declared",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "newConstant",
          "normalized": "String-\u003eHOLType-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Constant",
          "signature": "String-\u003eHOLType-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:newConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a new primitve type constant of a given name and arity.  Also adds\n  this new type to the current working theory.  Throws a \u003ccode\u003e\u003ca\u003eHOLException\u003c/a\u003e\u003c/code\u003e when a \n  type of the same name has already been declared.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "newType",
          "package": "haskhol-core",
          "signature": "String -\u003e Int -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core-State.html#newType",
          "type": "function"
        },
        "index": {
          "description": "Constructs new primitve type constant of given name and arity Also adds this new type to the current working theory Throws HOLException when type of the same name has already been declared",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "newType",
          "normalized": "String-\u003eInt-\u003eHOL Theory a()",
          "package": "haskhol-core",
          "partial": "Type",
          "signature": "String-\u003eInt-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:newType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of printDebug that does not print a new line.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "printDebug",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL cls thry a -\u003e HOL cls thry a",
          "source": "src/HaskHOL-Core-State.html#printDebug",
          "type": "function"
        },
        "index": {
          "description": "version of printDebug that does not print new line",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "printDebug",
          "normalized": "String-\u003eHOL a b c-\u003eHOL a b c",
          "package": "haskhol-core",
          "partial": "Debug",
          "signature": "String-\u003eHOL cls thry a-\u003eHOL cls thry a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:printDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints the provided string, with a new line, when debugging is turned on, then\n  returns the given \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e computation.  A version of \u003ccode\u003etrace\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eHOL\u003c/a\u003e\u003c/code\u003e monad\n  that is referentially transparent.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "printDebugLn",
          "package": "haskhol-core",
          "signature": "String -\u003e HOL cls thry a -\u003e HOL cls thry a",
          "source": "src/HaskHOL-Core-State.html#printDebugLn",
          "type": "function"
        },
        "index": {
          "description": "Prints the provided string with new line when debugging is turned on then returns the given HOL computation version of trace for the HOL monad that is referentially transparent",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "printDebugLn",
          "normalized": "String-\u003eHOL a b c-\u003eHOL a b c",
          "package": "haskhol-core",
          "partial": "Debug Ln",
          "signature": "String-\u003eHOL cls thry a-\u003eHOL cls thry a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:printDebugLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the list of type constants from the current working theory.  The\n  list contains pairs of strings recognized by the parser and the associated\n  type operator value, i.e. \n\u003c/p\u003e\u003cpre\u003e (\"bool\", tyOpBool)\n\u003c/pre\u003e",
          "module": "HaskHOL.Core.State",
          "name": "types",
          "package": "haskhol-core",
          "signature": "HOL cls thry [(String, TypeOp)]",
          "source": "src/HaskHOL-Core-State.html#types",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the list of type constants from the current working theory The list contains pairs of strings recognized by the parser and the associated type operator value i.e bool tyOpBool",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "types",
          "normalized": "HOL a b[(String,TypeOp)]",
          "package": "haskhol-core",
          "signature": "HOL cls thry[(String,TypeOp)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:types"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints the provided string, with a new line, when the given boolean value is\n  true.\n\u003c/p\u003e",
          "module": "HaskHOL.Core.State",
          "name": "warn",
          "package": "haskhol-core",
          "signature": "Bool -\u003e String -\u003e HOL cls thry ()",
          "source": "src/HaskHOL-Core-State.html#warn",
          "type": "function"
        },
        "index": {
          "description": "Prints the provided string with new line when the given boolean value is true",
          "hierarchy": "HaskHOL Core State",
          "module": "HaskHOL.Core.State",
          "name": "warn",
          "normalized": "Bool-\u003eString-\u003eHOL a b()",
          "package": "haskhol-core",
          "signature": "Bool-\u003eString-\u003eHOL cls thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core-State.html#v:warn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is the one to import for users looking to include the entirety of\n  the core of the HaskHOL proof system.  It re-exports all of the core \n  sub-modules in addition to a number of overloaded functions that work with\n  \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHOLTypeRep\u003c/a\u003e\u003c/code\u003e representations for convenience reasons.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HaskHOL.Core",
          "name": "Core",
          "package": "haskhol-core",
          "source": "src/HaskHOL-Core.html",
          "type": "module"
        },
        "index": {
          "description": "This module is the one to import for users looking to include the entirety of the core of the HaskHOL proof system It re-exports all of the core sub-modules in addition to number of overloaded functions that work with HOLTermRep and HOLTypeRep representations for convenience reasons",
          "hierarchy": "HaskHOL Core",
          "module": "HaskHOL.Core",
          "name": "Core",
          "package": "haskhol-core",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003emakeOverloadable\u003c/a\u003e\u003c/code\u003e to overload it for all valid type\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTypeRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core",
          "name": "makeOverloadable",
          "package": "haskhol-core",
          "signature": "String -\u003e ty -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core.html#makeOverloadable",
          "type": "function"
        },
        "index": {
          "description": "redefinition of makeOverloadable to overload it for all valid type representations as defined by HOLTypeRep",
          "hierarchy": "HaskHOL Core",
          "module": "HaskHOL.Core",
          "name": "makeOverloadable",
          "normalized": "String-\u003ea-\u003eHOL Theory b()",
          "package": "haskhol-core",
          "partial": "Overloadable",
          "signature": "String-\u003ety-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:makeOverloadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003enewAxiom\u003c/a\u003e\u003c/code\u003e to overload it for all valid term\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core",
          "name": "newAxiom",
          "package": "haskhol-core",
          "signature": "String -\u003e tm -\u003e HOL Theory thry HOLThm",
          "source": "src/HaskHOL-Core.html#newAxiom",
          "type": "function"
        },
        "index": {
          "description": "redefinition of newAxiom to overload it for all valid term representations as defined by HOLTermRep",
          "hierarchy": "HaskHOL Core",
          "module": "HaskHOL.Core",
          "name": "newAxiom",
          "normalized": "String-\u003ea-\u003eHOL Theory b HOLThm",
          "package": "haskhol-core",
          "partial": "Axiom",
          "signature": "String-\u003etm-\u003eHOL Theory thry HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:newAxiom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003enewBasicDefinition\u003c/a\u003e\u003c/code\u003e to overload it for all valid term\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core",
          "name": "newBasicDefinition",
          "package": "haskhol-core",
          "signature": "tm -\u003e HOL Theory thry HOLThm",
          "source": "src/HaskHOL-Core.html#newBasicDefinition",
          "type": "function"
        },
        "index": {
          "description": "redefinition of newBasicDefinition to overload it for all valid term representations as defined by HOLTermRep",
          "hierarchy": "HaskHOL Core",
          "module": "HaskHOL.Core",
          "name": "newBasicDefinition",
          "normalized": "a-\u003eHOL Theory b HOLThm",
          "package": "haskhol-core",
          "partial": "Basic Definition",
          "signature": "tm-\u003eHOL Theory thry HOLThm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:newBasicDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003enewConstant\u003c/a\u003e\u003c/code\u003e to overload it for all valid term\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core",
          "name": "newConstant",
          "package": "haskhol-core",
          "signature": "String -\u003e ty -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core.html#newConstant",
          "type": "function"
        },
        "index": {
          "description": "redefinition of newConstant to overload it for all valid term representations as defined by HOLTermRep",
          "hierarchy": "HaskHOL Core",
          "module": "HaskHOL.Core",
          "name": "newConstant",
          "normalized": "String-\u003ea-\u003eHOL Theory b()",
          "package": "haskhol-core",
          "partial": "Constant",
          "signature": "String-\u003ety-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:newConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003enewTypeAbbrev\u003c/a\u003e\u003c/code\u003e to overload it for all valid type\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTypeRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core",
          "name": "newTypeAbbrev",
          "package": "haskhol-core",
          "signature": "String -\u003e ty -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core.html#newTypeAbbrev",
          "type": "function"
        },
        "index": {
          "description": "redefinition of newTypeAbbrev to overload it for all valid type representations as defined by HOLTypeRep",
          "hierarchy": "HaskHOL Core",
          "module": "HaskHOL.Core",
          "name": "newTypeAbbrev",
          "normalized": "String-\u003ea-\u003eHOL Theory b()",
          "package": "haskhol-core",
          "partial": "Type Abbrev",
          "signature": "String-\u003ety-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:newTypeAbbrev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003eoverloadInterface\u003c/a\u003e\u003c/code\u003e to overload it for all valid term\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core",
          "name": "overloadInterface",
          "package": "haskhol-core",
          "signature": "String -\u003e tm -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core.html#overloadInterface",
          "type": "function"
        },
        "index": {
          "description": "redefinition of overloadInterface to overload it for all valid term representations as defined by HOLTermRep",
          "hierarchy": "HaskHOL Core",
          "module": "HaskHOL.Core",
          "name": "overloadInterface",
          "normalized": "String-\u003ea-\u003eHOL Theory b()",
          "package": "haskhol-core",
          "partial": "Interface",
          "signature": "String-\u003etm-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:overloadInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003eoverrideInterface\u003c/a\u003e\u003c/code\u003e to overload it for all valid term\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core",
          "name": "overrideInterface",
          "package": "haskhol-core",
          "signature": "String -\u003e tm -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core.html#overrideInterface",
          "type": "function"
        },
        "index": {
          "description": "redefinition of overrideInterface to overload it for all valid term representations as defined by HOLTermRep",
          "hierarchy": "HaskHOL Core",
          "module": "HaskHOL.Core",
          "name": "overrideInterface",
          "normalized": "String-\u003ea-\u003eHOL Theory b()",
          "package": "haskhol-core",
          "partial": "Interface",
          "signature": "String-\u003etm-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:overrideInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003eprioritizeOverload\u003c/a\u003e\u003c/code\u003e to overload it for all valid type\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTypeRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core",
          "name": "prioritizeOverload",
          "package": "haskhol-core",
          "signature": "ty -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core.html#prioritizeOverload",
          "type": "function"
        },
        "index": {
          "description": "redefinition of prioritizeOverload to overload it for all valid type representations as defined by HOLTypeRep",
          "hierarchy": "HaskHOL Core",
          "module": "HaskHOL.Core",
          "name": "prioritizeOverload",
          "normalized": "a-\u003eHOL Theory b()",
          "package": "haskhol-core",
          "partial": "Overload",
          "signature": "ty-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:prioritizeOverload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA redefinition of \u003ccode\u003e\u003ca\u003ereduceInterface\u003c/a\u003e\u003c/code\u003e to overload it for all valid term\n  representations as defined by \u003ccode\u003e\u003ca\u003eHOLTermRep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HaskHOL.Core",
          "name": "reduceInterface",
          "package": "haskhol-core",
          "signature": "String -\u003e tm -\u003e HOL Theory thry ()",
          "source": "src/HaskHOL-Core.html#reduceInterface",
          "type": "function"
        },
        "index": {
          "description": "redefinition of reduceInterface to overload it for all valid term representations as defined by HOLTermRep",
          "hierarchy": "HaskHOL Core",
          "module": "HaskHOL.Core",
          "name": "reduceInterface",
          "normalized": "String-\u003ea-\u003eHOL Theory b()",
          "package": "haskhol-core",
          "partial": "Interface",
          "signature": "String-\u003etm-\u003eHOL Theory thry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskhol-core/docs/HaskHOL-Core.html#v:reduceInterface"
      }
    }
  ]
]