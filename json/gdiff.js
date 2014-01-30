[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUse this library to get an efficient, optimal, type-safe \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003epatch\u003c/a\u003e\u003c/code\u003e function for your datatypes of choice by defining a simple GADT and\nsome class instances.  The process is explained in the documentation of the\n\u003ccode\u003e\u003ca\u003eFamily\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e\u003cp\u003eThe result of \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e is an optimal \u003ccode\u003e\u003ca\u003eEditScript\u003c/a\u003e\u003c/code\u003e that contains the operations\nthat need to be performed to get from the \u003cem\u003esource\u003c/em\u003e value to the \u003cem\u003edestination\u003c/em\u003e\nvalue. The edit script can be used by \u003ccode\u003e\u003ca\u003epatch\u003c/a\u003e\u003c/code\u003e, inspected with \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e and used\nfor all kinds of interesting stuff \u003cem\u003eyou\u003c/em\u003e come up with.\n\u003c/p\u003e\u003cp\u003eThe library has been extracted from Eelco Lempsink's Master's Thesis \n\u003cem\u003eGeneric type-safe diff and patch for families of datatypes\u003c/em\u003e (available online:\n\u003ca\u003ehttp://eelco.lempsink.nl/thesis.pdf\u003c/a\u003e).  See Appendix C for a large example.\nNote that some types and functions have been renamed for the benefit of the API\n(e.g., \u003ccode\u003ediff\u003c/code\u003e to \u003ccode\u003ediffL\u003c/code\u003e, \u003ccode\u003ediff1\u003c/code\u003e to \u003ccode\u003ediff\u003c/code\u003e, \u003ccode\u003eDiff\u003c/code\u003e to \u003ccode\u003eEditScriptL\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "module",
        "fct-source": "src/Data-Generic-Diff.html",
        "fct-type": "module",
        "title": "Diff"
      },
      "index": {
        "description": "Use this library to get an efficient optimal type-safe diff and patch function for your datatypes of choice by defining simple GADT and some class instances The process is explained in the documentation of the Family type class The result of diff is an optimal EditScript that contains the operations that need to be performed to get from the source value to the destination value The edit script can be used by patch inspected with show and used for all kinds of interesting stuff you come up with The library has been extracted from Eelco Lempsink Master Thesis Generic type-safe diff and patch for families of datatypes available online http eelco.lempsink.nl thesis.pdf See Appendix for large example Note that some types and functions have been renamed for the benefit of the API e.g diff to diffL diff1 to diff Diff to EditScriptL",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "Diff",
        "normalized": "",
        "package": "gdiff",
        "partial": "Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#t::-61-:",
      "description": {
        "fct-descr": "\u003cp\u003eEquality GADT, see the documentation for \u003ccode\u003e\u003ca\u003eFamily\u003c/a\u003e\u003c/code\u003e for an example of its use.\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "data",
        "fct-source": "src/Data-Generic-Diff.html#%3A%3D%3A",
        "fct-type": "data",
        "title": ":=:"
      },
      "index": {
        "description": "Equality GADT see the documentation for Family for an example of its use",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": ":=:",
        "normalized": "",
        "package": "gdiff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#t:Con",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCon\u003c/a\u003e\u003c/code\u003e wraps both concrete and abstract constructors to a simple type so\n constructors for a single type can be put together in a list, see \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e for\n more information and an example. \n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eConcr\u003c/a\u003e\u003c/code\u003e for concrete constructors (e.g., for simple abstract datatypes).\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eAbstr\u003c/a\u003e\u003c/code\u003e for abstract constructors (e.g., for build-in types or types with many\n (or infinite) constructors)\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "data",
        "fct-source": "src/Data-Generic-Diff.html#Con",
        "fct-type": "data",
        "title": "Con"
      },
      "index": {
        "description": "Con wraps both concrete and abstract constructors to simple type so constructors for single type can be put together in list see Type for more information and an example Use Concr for concrete constructors e.g for simple abstract datatypes Use Abstr for abstract constructors e.g for build-in types or types with many or infinite constructors",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "Con",
        "normalized": "",
        "package": "gdiff",
        "partial": "Con",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#t:Cons",
      "description": {
        "fct-descr": "\u003cp\u003eDatatype for type level lists, corresponding to '(:)'.  Use when creating\n your \u003ccode\u003e\u003ca\u003eFamily\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "data",
        "fct-source": "src/Data-Generic-Diff.html#Cons",
        "fct-type": "data",
        "title": "Cons"
      },
      "index": {
        "description": "Datatype for type level lists corresponding to Use when creating your Family instance",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "Cons",
        "normalized": "",
        "package": "gdiff",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#t:EditScript",
      "description": {
        "fct-descr": "\u003cp\u003eEdit script type for two single values.\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "type",
        "fct-source": "src/Data-Generic-Diff.html#EditScript",
        "fct-type": "type",
        "title": "EditScript"
      },
      "index": {
        "description": "Edit script type for two single values",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "EditScript",
        "normalized": "",
        "package": "gdiff",
        "partial": "Edit Script",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#t:EditScriptL",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEditScriptL\u003c/a\u003e\u003c/code\u003e datatype captures the result of \u003ccode\u003e\u003ca\u003ediffL\u003c/a\u003e\u003c/code\u003e and can be used as the input\nto \u003ccode\u003e\u003ca\u003epatchL\u003c/a\u003e\u003c/code\u003e (and \u003ccode\u003e\u003ca\u003ecompress\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffL\u003c/a\u003e\u003c/code\u003e function use a depth-first preorder traversal to traverse the\nexpression trees.  The edit script it outputs contains the operation that must\nbe applied to the constructor at that point: either keeping it (\u003ccode\u003e\u003ca\u003eCpy\u003c/a\u003e\u003c/code\u003e),\nremoving it (\u003ccode\u003e\u003ca\u003eDel\u003c/a\u003e\u003c/code\u003e, which does not remove the complete subtree, but \u003cem\u003econtracts\u003c/em\u003e\nthe edge of the removed node) or inserting a new constructor (\u003ccode\u003e\u003ca\u003eIns\u003c/a\u003e\u003c/code\u003e, which can\nonly be done if the available subtrees at that point correspond to the types\nthe constructor expects). (The \u003ccode\u003e\u003ca\u003eCpyTree\u003c/a\u003e\u003c/code\u003e is only used when running \u003ccode\u003e\u003ca\u003ecompress\u003c/a\u003e\u003c/code\u003e\nover an existing edit script.)\n\u003c/p\u003e\u003cp\u003eFor more information about this datatype, you're advised to look at Eelco\nLempsink's thesis at \u003ca\u003ehttp://eelco.lempsink.nl/thesis.pdf\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "data",
        "fct-source": "src/Data-Generic-Diff.html#EditScriptL",
        "fct-type": "data",
        "title": "EditScriptL"
      },
      "index": {
        "description": "The EditScriptL datatype captures the result of diffL and can be used as the input to patchL and compress The diffL function use depth-first preorder traversal to traverse the expression trees The edit script it outputs contains the operation that must be applied to the constructor at that point either keeping it Cpy removing it Del which does not remove the complete subtree but contracts the edge of the removed node or inserting new constructor Ins which can only be done if the available subtrees at that point correspond to the types the constructor expects The CpyTree is only used when running compress over an existing edit script For more information about this datatype you re advised to look at Eelco Lempsink thesis at http eelco.lempsink.nl thesis.pdf",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "EditScriptL",
        "normalized": "",
        "package": "gdiff",
        "partial": "Edit Script",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#t:Family",
      "description": {
        "fct-descr": "\u003cp\u003eTo use \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epatch\u003c/a\u003e\u003c/code\u003e on your datatypes, you must create an instance of\n\u003ccode\u003e\u003ca\u003eFamily\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003eThere are four steps to set up everything for \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Define your datatypes.  (Presumable, you already have done this.)\n\u003c/li\u003e\u003cli\u003e Create a family datatype, grouping your datatypes together.\n\u003c/li\u003e\u003cli\u003e Make the family datatype an instance of \u003ccode\u003e\u003ca\u003eFamily\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Create \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e instances for each member of the family.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eSteps 1-3 are explained below, step 4 is explained in the documentation for\n\u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs a running example, we create a simple family of datatypes (step 1):\n\u003c/p\u003e\u003cpre\u003e data Expr  =  Min Expr Term\n data Term  =  Parens Expr\n            |  Number Int\n\u003c/pre\u003e\u003cp\u003eThe second step is creating the family datatype.  Each constructor in the\ndatatypes above gets a constructor in a family GADT:\n\u003c/p\u003e\u003cpre\u003e data ExprTermFamily :: * -\u003e * -\u003e * where\n     Min'     ::          ExprTermFamily Expr (Cons Expr (Cons Term Nil)) \n     Parens'  ::          ExprTermFamily Term (Cons Expr Nil)\n     Number'  ::          ExprTermFamily Term (Cons Int Nil)\n     Int'     ::  Int -\u003e  ExprTermFamily Int  Nil\n\u003c/pre\u003e\u003cp\u003eThe first type argument of the datatype must be the resulting type of the\nconstructor.  The second argument captures the types of the arguments the\nconstructor expects.  Note how to use \u003ccode\u003e\u003ca\u003eCons\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNil\u003c/a\u003e\u003c/code\u003e to create type level\nlists.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eInt'\u003c/code\u003e constructor is special, in the sense that it captures the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e type\nabstractly (listing all \u003ccode\u003eInt'\u003c/code\u003es constructors would be quite impossible).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eCaveat emptor\u003c/em\u003e: polymorphic datatypes (like lists) are ill-supported and\nrequire family constructors for each instance.  It might require another master\nthesis project to solve this.\n\u003c/p\u003e\u003cp\u003eStep 3 is to create the instance for the \u003ccode\u003e\u003ca\u003eFamily\u003c/a\u003e\u003c/code\u003e class.  For each function you\nwill have to implement four functions.  It's straightforward albeit a bit\nboring.\n\u003c/p\u003e\u003cpre\u003e instance Family ExprTermFamily where\n     decEq Min'      Min'      =              Just (Refl, Refl)\n     decEq Parens'   Parens'   =              Just (Refl, Refl)\n     decEq Number'   Number'   =              Just (Refl, Refl)\n     decEq (Int' x)  (Int' y)  | x == y     = Just (Refl, Refl)\n                               | otherwise  = Nothing\n     decEq _        _          = Nothing\n \n     fields Min'      (Min e t)   = Just (CCons e (CCons t CNil))\n     fields Parens'   (Parens e)  = Just (CCons e CNil)\n     fields Number'   (Number i)  = Just (CCons i CNil)\n     fields (Int' _)  _           = Just CNil\n     fields _         _           = Nothing\n \n     apply Min'      (CCons e (CCons t CNil))  = Min e t\n     apply Parens'   (CCons e CNil)            = Parens e\n     apply Number'   (CCons i CNil)            = Number i\n     apply (Int' i)  CNil                      = i\n \n     string Min'      = \"Min\"\n     string Parens'   = \"Parens\"\n     string Number'   = \"Number\"\n     string (Int' i)  = show i\n\u003c/pre\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "class",
        "fct-source": "src/Data-Generic-Diff.html#Family",
        "fct-type": "class",
        "title": "Family"
      },
      "index": {
        "description": "To use diff and patch on your datatypes you must create an instance of Family There are four steps to set up everything for diff and patch Define your datatypes Presumable you already have done this Create family datatype grouping your datatypes together Make the family datatype an instance of Family Create Type instances for each member of the family Steps are explained below step is explained in the documentation for Type As running example we create simple family of datatypes step data Expr Min Expr Term data Term Parens Expr Number Int The second step is creating the family datatype Each constructor in the datatypes above gets constructor in family GADT data ExprTermFamily where Min ExprTermFamily Expr Cons Expr Cons Term Nil Parens ExprTermFamily Term Cons Expr Nil Number ExprTermFamily Term Cons Int Nil Int Int ExprTermFamily Int Nil The first type argument of the datatype must be the resulting type of the constructor The second argument captures the types of the arguments the constructor expects Note how to use Cons and Nil to create type level lists The Int constructor is special in the sense that it captures the Int type abstractly listing all Int constructors would be quite impossible Caveat emptor polymorphic datatypes like lists are ill-supported and require family constructors for each instance It might require another master thesis project to solve this Step is to create the instance for the Family class For each function you will have to implement four functions It straightforward albeit bit boring instance Family ExprTermFamily where decEq Min Min Just Refl Refl decEq Parens Parens Just Refl Refl decEq Number Number Just Refl Refl decEq Int Int Just Refl Refl otherwise Nothing decEq Nothing fields Min Min Just CCons CCons CNil fields Parens Parens Just CCons CNil fields Number Number Just CCons CNil fields Int Just CNil fields Nothing apply Min CCons CCons CNil Min apply Parens CCons CNil Parens apply Number CCons CNil Number apply Int CNil string Min Min string Parens Parens string Number Number string Int show",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "Family",
        "normalized": "",
        "package": "gdiff",
        "partial": "Family",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#t:Nil",
      "description": {
        "fct-descr": "\u003cp\u003eDatatype for type level lists, corresponding to '[]'.  Use when creating\n your \u003ccode\u003e\u003ca\u003eFamily\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "data",
        "fct-source": "src/Data-Generic-Diff.html#Nil",
        "fct-type": "data",
        "title": "Nil"
      },
      "index": {
        "description": "Datatype for type level lists corresponding to Use when creating your Family instance",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "Nil",
        "normalized": "",
        "package": "gdiff",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#t:Type",
      "description": {
        "fct-descr": "\u003cp\u003eFor each type in the family, you need to create an instance of \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e, listing\nall the members of the family GADT which belong to one type.\n\u003c/p\u003e\u003cp\u003eThis is step 4 of the four steps needed to be able to use \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epatch\u003c/a\u003e\u003c/code\u003e.\nSteps 1-3 are explained in the documentation for \u003ccode\u003e\u003ca\u003eFamily\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eContinuing the example from the \u003ccode\u003e\u003ca\u003eFamily\u003c/a\u003e\u003c/code\u003e documentation, the instances for\n\u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e are:\n\u003c/p\u003e\u003cpre\u003e instance Type ExprTermFamily Term where\n     constructors = [Concr Number', Concr Parens']\n \n instance Type ExprTermFamily Expr where\n     constructors = [Concr Min']\n \n instance Type ExprTermFamily Int where\n     constructors = [Abstr Int']\n\u003c/pre\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "class",
        "fct-source": "src/Data-Generic-Diff.html#Type",
        "fct-type": "class",
        "title": "Type"
      },
      "index": {
        "description": "For each type in the family you need to create an instance of Type listing all the members of the family GADT which belong to one type This is step of the four steps needed to be able to use diff and patch Steps are explained in the documentation for Family Continuing the example from the Family documentation the instances for Type are instance Type ExprTermFamily Term where constructors Concr Number Concr Parens instance Type ExprTermFamily Expr where constructors Concr Min instance Type ExprTermFamily Int where constructors Abstr Int",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "Type",
        "normalized": "",
        "package": "gdiff",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:Abstr",
      "description": {
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "(t -\u003e f t ts) -\u003e Con f t",
        "fct-source": "src/Data-Generic-Diff.html#Con",
        "fct-type": "function",
        "title": "Abstr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "Abstr",
        "normalized": "(a-\u003eb a c)-\u003eCon b a",
        "package": "gdiff",
        "partial": "Abstr",
        "signature": "(t-\u003ef t ts)-\u003eCon f t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:CCons",
      "description": {
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "CCons x xs",
        "fct-source": "src/Data-Generic-Diff.html#Cons",
        "fct-type": "function",
        "title": "CCons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "CCons",
        "normalized": "",
        "package": "gdiff",
        "partial": "CCons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:CNil",
      "description": {
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "CNil",
        "fct-source": "src/Data-Generic-Diff.html#Nil",
        "fct-type": "function",
        "title": "CNil"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "CNil",
        "normalized": "",
        "package": "gdiff",
        "partial": "CNil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:Concr",
      "description": {
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "f t ts -\u003e Con f t",
        "fct-source": "src/Data-Generic-Diff.html#Con",
        "fct-type": "function",
        "title": "Concr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "Concr",
        "normalized": "a b c-\u003eCon a b",
        "package": "gdiff",
        "partial": "Concr",
        "signature": "f t ts-\u003eCon f t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:Cpy",
      "description": {
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "f t ts -\u003e EditScriptL f (Append ts txs) (Append ts tys) -\u003e EditScriptL f (Cons t txs) (Cons t tys)",
        "fct-source": "src/Data-Generic-Diff.html#EditScriptL",
        "fct-type": "function",
        "title": "Cpy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "Cpy",
        "normalized": "a b c-\u003eEditScriptL a(Append c d)(Append c e)-\u003eEditScriptL a(Cons b d)(Cons b e)",
        "package": "gdiff",
        "partial": "Cpy",
        "signature": "f t ts-\u003eEditScriptL f(Append ts txs)(Append ts tys)-\u003eEditScriptL f(Cons t txs)(Cons t tys)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:CpyTree",
      "description": {
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "EditScriptL f txs tys -\u003e EditScriptL f (Cons t txs) (Cons t tys)",
        "fct-source": "src/Data-Generic-Diff.html#EditScriptL",
        "fct-type": "function",
        "title": "CpyTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "CpyTree",
        "normalized": "EditScriptL a b c-\u003eEditScriptL a(Cons d b)(Cons d c)",
        "package": "gdiff",
        "partial": "Cpy Tree",
        "signature": "EditScriptL f txs tys-\u003eEditScriptL f(Cons t txs)(Cons t tys)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:Del",
      "description": {
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "f t ts -\u003e EditScriptL f (Append ts txs) tys -\u003e EditScriptL f (Cons t txs) tys",
        "fct-source": "src/Data-Generic-Diff.html#EditScriptL",
        "fct-type": "function",
        "title": "Del"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "Del",
        "normalized": "a b c-\u003eEditScriptL a(Append c d)e-\u003eEditScriptL a(Cons b d)e",
        "package": "gdiff",
        "partial": "Del",
        "signature": "f t ts-\u003eEditScriptL f(Append ts txs)tys-\u003eEditScriptL f(Cons t txs)tys"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:End",
      "description": {
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "EditScriptL f Nil Nil",
        "fct-source": "src/Data-Generic-Diff.html#EditScriptL",
        "fct-type": "function",
        "title": "End"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "End",
        "normalized": "",
        "package": "gdiff",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:Ins",
      "description": {
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "f t ts -\u003e EditScriptL f txs (Append ts tys) -\u003e EditScriptL f txs (Cons t tys)",
        "fct-source": "src/Data-Generic-Diff.html#EditScriptL",
        "fct-type": "function",
        "title": "Ins"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "Ins",
        "normalized": "a b c-\u003eEditScriptL a d(Append c e)-\u003eEditScriptL a d(Cons b e)",
        "package": "gdiff",
        "partial": "Ins",
        "signature": "f t ts-\u003eEditScriptL f txs(Append ts tys)-\u003eEditScriptL f txs(Cons t tys)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:Refl",
      "description": {
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "a :=: a",
        "fct-source": "src/Data-Generic-Diff.html#%3A%3D%3A",
        "fct-type": "function",
        "title": "Refl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "Refl",
        "normalized": "",
        "package": "gdiff",
        "partial": "Refl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:apply",
      "description": {
        "fct-descr": "\u003cp\u003eWhen the constructor from the family and the heterogeneous list of\n arguments match, apply the \u003ccode\u003ereal\u003c/code\u003e constructor.  For abstract\n constructors, the list of arguments should be \u003ccode\u003e\u003ca\u003eCNil\u003c/a\u003e\u003c/code\u003e, but you project\n out the value saved with the family constructor.\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "f t ts -\u003e ts -\u003e t",
        "fct-source": "src/Data-Generic-Diff.html#apply",
        "fct-type": "method",
        "title": "apply"
      },
      "index": {
        "description": "When the constructor from the family and the heterogeneous list of arguments match apply the real constructor For abstract constructors the list of arguments should be CNil but you project out the value saved with the family constructor",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "apply",
        "normalized": "a b c-\u003ec-\u003eb",
        "package": "gdiff",
        "partial": "",
        "signature": "f t ts-\u003ets-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:compress",
      "description": {
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "EditScriptL f txs tys -\u003e EditScriptL f txs tys",
        "fct-source": "src/Data-Generic-Diff.html#compress",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "compress",
        "normalized": "EditScriptL a b c-\u003eEditScriptL a b c",
        "package": "gdiff",
        "partial": "",
        "signature": "EditScriptL f txs tys-\u003eEditScriptL f txs tys"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:constructors",
      "description": {
        "fct-descr": "\u003cp\u003eList of constructors from the family GADT for one type in your family\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "[Con f t]",
        "fct-source": "src/Data-Generic-Diff.html#constructors",
        "fct-type": "method",
        "title": "constructors"
      },
      "index": {
        "description": "List of constructors from the family GADT for one type in your family",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "constructors",
        "normalized": "[Con a b]",
        "package": "gdiff",
        "partial": "",
        "signature": "[Con f t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:decEq",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an instance of the equality GADT (\u003ccode\u003e\u003ca\u003eRefl\u003c/a\u003e\u003c/code\u003e) of the type and\n constructor arguments are equal, else return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "f tx txs -\u003e f ty tys -\u003e Maybe (tx :=: ty, txs :=: tys)",
        "fct-source": "src/Data-Generic-Diff.html#decEq",
        "fct-type": "method",
        "title": "decEq"
      },
      "index": {
        "description": "Return an instance of the equality GADT Refl of the type and constructor arguments are equal else return Nothing",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "decEq",
        "normalized": "a b c-\u003ea d e-\u003eMaybe(b d,c e)",
        "package": "gdiff",
        "partial": "Eq",
        "signature": "f tx txs-\u003ef ty tys-\u003eMaybe(tx ty,txs tys)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:diff",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the difference between two values in the form of an edit script.\n\u003c/p\u003e\u003cp\u003eSee the documentation for \u003ccode\u003e\u003ca\u003eFamily\u003c/a\u003e\u003c/code\u003e for how to make your own data types work\n with this function.\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "x -\u003e y -\u003e EditScript f x y",
        "fct-source": "src/Data-Generic-Diff.html#diff",
        "fct-type": "function",
        "title": "diff"
      },
      "index": {
        "description": "Calculate the difference between two values in the form of an edit script See the documentation for Family for how to make your own data types work with this function",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "diff",
        "normalized": "a-\u003eb-\u003eEditScript c a b",
        "package": "gdiff",
        "partial": "",
        "signature": "x-\u003ey-\u003eEditScript f x y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:diffL",
      "description": {
        "fct-descr": "\u003cp\u003eUnderlying implementation of \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e, works with (heterogeneous) lists of\n values.\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "txs -\u003e tys -\u003e EditScriptL f txs tys",
        "fct-source": "src/Data-Generic-Diff.html#diffL",
        "fct-type": "function",
        "title": "diffL"
      },
      "index": {
        "description": "Underlying implementation of diff works with heterogeneous lists of values",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "diffL",
        "normalized": "a-\u003eb-\u003eEditScriptL c a b",
        "package": "gdiff",
        "partial": "",
        "signature": "txs-\u003etys-\u003eEditScriptL f txs tys"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:fields",
      "description": {
        "fct-descr": "\u003cp\u003eWhen the constructor from the family matches the \u003ccode\u003ereal\u003c/code\u003e constructor,\n return the arguments in a heterogeneous list, else return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "f t ts -\u003e t -\u003e Maybe ts",
        "fct-source": "src/Data-Generic-Diff.html#fields",
        "fct-type": "method",
        "title": "fields"
      },
      "index": {
        "description": "When the constructor from the family matches the real constructor return the arguments in heterogeneous list else return Nothing",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "fields",
        "normalized": "a b c-\u003eb-\u003eMaybe c",
        "package": "gdiff",
        "partial": "",
        "signature": "f t ts-\u003et-\u003eMaybe ts"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:patch",
      "description": {
        "fct-descr": "\u003cp\u003eApply the edit script to value.\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "EditScript f x y -\u003e x -\u003e y",
        "fct-source": "src/Data-Generic-Diff.html#patch",
        "fct-type": "function",
        "title": "patch"
      },
      "index": {
        "description": "Apply the edit script to value",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "patch",
        "normalized": "EditScript a b c-\u003eb-\u003ec",
        "package": "gdiff",
        "partial": "",
        "signature": "EditScript f x y-\u003ex-\u003ey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:patchL",
      "description": {
        "fct-descr": "\u003cp\u003eUnderlying implementation of \u003ccode\u003e\u003ca\u003epatch\u003c/a\u003e\u003c/code\u003e, works with (heterogeneous) lists of\n values.\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "forall f txs tys.  EditScriptL f txs tys -\u003e txs -\u003e tys",
        "fct-source": "src/Data-Generic-Diff.html#patchL",
        "fct-type": "function",
        "title": "patchL"
      },
      "index": {
        "description": "Underlying implementation of patch works with heterogeneous lists of values",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "patchL",
        "normalized": "a b c d EditScriptL b c e-\u003ec-\u003ee",
        "package": "gdiff",
        "partial": "",
        "signature": "forall f txs tys. EditScriptL f txs tys-\u003etxs-\u003etys"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff/docs/Data-Generic-Diff.html#v:string",
      "description": {
        "fct-descr": "\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003eing the constructors from the family.\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff",
        "fct-package": "gdiff",
        "fct-signature": "f t ts -\u003e String",
        "fct-source": "src/Data-Generic-Diff.html#string",
        "fct-type": "method",
        "title": "string"
      },
      "index": {
        "description": "For show ing the constructors from the family",
        "hierarchy": "Data Generic Diff",
        "module": "Data.Generic.Diff",
        "name": "string",
        "normalized": "a b c-\u003eString",
        "package": "gdiff",
        "partial": "",
        "signature": "f t ts-\u003eString"
      }
    }
  }
]