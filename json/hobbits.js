[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module uses Template Haskell to distinguish closed terms, so that the\n library can trust such functions to not contain any \u003ccode\u003eName\u003c/code\u003e values in their\n closure.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binding.Hobbits.Closed",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Binding-Hobbits-Closed.html",
        "fct-type": "module",
        "title": "Closed"
      },
      "index": {
        "description": "This module uses Template Haskell to distinguish closed terms so that the library can trust such functions to not contain any Name values in their closure",
        "hierarchy": "Data Binding Hobbits Closed",
        "module": "Data.Binding.Hobbits.Closed",
        "name": "Closed",
        "normalized": "",
        "package": "hobbits",
        "partial": "Closed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#t:Cl",
      "description": {
        "fct-descr": "\u003cp\u003eThe type \u003ccode\u003eCl a\u003c/code\u003e represents a closed term of type \u003ccode\u003ea\u003c/code\u003e,\n  i.e., an expression of type \u003ccode\u003ea\u003c/code\u003e with no free (Haskell) variables.\n  Since this cannot be checked directly in the Haskell type system,\n  the \u003ccode\u003eCl\u003c/code\u003e data type is hidden, and the user can only create\n  closed terms using Template Haskell, through the \u003ccode\u003emkClosed\u003c/code\u003e\n  operator.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Closed",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#Cl",
        "fct-type": "data",
        "title": "Cl"
      },
      "index": {
        "description": "The type Cl represents closed term of type i.e an expression of type with no free Haskell variables Since this cannot be checked directly in the Haskell type system the Cl data type is hidden and the user can only create closed terms using Template Haskell through the mkClosed operator",
        "hierarchy": "Data Binding Hobbits Closed",
        "module": "Data.Binding.Hobbits.Closed",
        "name": "Cl",
        "normalized": "",
        "package": "hobbits",
        "partial": "Cl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#t:Closed",
      "description": {
        "fct-descr": "\u003cpre\u003eClosed = Cl\u003c/pre\u003e",
        "fct-module": "Data.Binding.Hobbits.Closed",
        "fct-package": "hobbits",
        "fct-signature": "type",
        "fct-source": "src/Data-Binding-Hobbits-Closed.html#Closed",
        "fct-type": "type",
        "title": "Closed"
      },
      "index": {
        "description": "Closed Cl",
        "hierarchy": "Data Binding Hobbits Closed",
        "module": "Data.Binding.Hobbits.Closed",
        "name": "Closed",
        "normalized": "",
        "package": "hobbits",
        "partial": "Closed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:cl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecl\u003c/code\u003e is used with Template Haskell quotations to create closed terms of\n type \u003ccode\u003e\u003ca\u003eCl\u003c/a\u003e\u003c/code\u003e. A quoted expression is closed if all of the names occuring in it\n are\n\u003c/p\u003e\u003cp\u003e1) bound globally or\n   2) bound within the quotation or\n   3) also of type \u003ccode\u003e\u003ca\u003eCl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Closed",
        "fct-package": "hobbits",
        "fct-signature": "Q Exp -\u003e Q Exp",
        "fct-source": "src/Data-Binding-Hobbits-Closed.html#cl",
        "fct-type": "function",
        "title": "cl"
      },
      "index": {
        "description": "cl is used with Template Haskell quotations to create closed terms of type Cl quoted expression is closed if all of the names occuring in it are bound globally or bound within the quotation or also of type Cl",
        "hierarchy": "Data Binding Hobbits Closed",
        "module": "Data.Binding.Hobbits.Closed",
        "name": "cl",
        "normalized": "Q Exp-\u003eQ Exp",
        "package": "hobbits",
        "partial": "",
        "signature": "Q Exp-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:clApply",
      "description": {
        "fct-descr": "\u003cp\u003eClosed terms are closed (sorry) under application.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Closed",
        "fct-package": "hobbits",
        "fct-signature": "Cl (a -\u003e b) -\u003e Cl a -\u003e Cl b",
        "fct-source": "src/Data-Binding-Hobbits-Closed.html#clApply",
        "fct-type": "function",
        "title": "clApply"
      },
      "index": {
        "description": "Closed terms are closed sorry under application",
        "hierarchy": "Data Binding Hobbits Closed",
        "module": "Data.Binding.Hobbits.Closed",
        "name": "clApply",
        "normalized": "Cl(a-\u003eb)-\u003eCl a-\u003eCl b",
        "package": "hobbits",
        "partial": "Apply",
        "signature": "Cl(a-\u003eb)-\u003eCl a-\u003eCl b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:mbApplyCl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003embApplyCl\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e \u003ccode\u003eb\u003c/code\u003e applies a closed function \u003ccode\u003ef\u003c/code\u003e to the body of\n multi-binding \u003ccode\u003eb\u003c/code\u003e. For example:\n\u003c/p\u003e\u003cpre\u003e mbApplyCl $(cl [| f |]) (nu $ \\n -\u003e n)   =   nu f\n\u003c/pre\u003e",
        "fct-module": "Data.Binding.Hobbits.Closed",
        "fct-package": "hobbits",
        "fct-signature": "Cl (a -\u003e b) -\u003e Mb ctx a -\u003e Mb ctx b",
        "fct-source": "src/Data-Binding-Hobbits-Closed.html#mbApplyCl",
        "fct-type": "function",
        "title": "mbApplyCl"
      },
      "index": {
        "description": "mbApplyCl applies closed function to the body of multi-binding For example mbApplyCl cl nu nu",
        "hierarchy": "Data Binding Hobbits Closed",
        "module": "Data.Binding.Hobbits.Closed",
        "name": "mbApplyCl",
        "normalized": "Cl(a-\u003eb)-\u003eMb c a-\u003eMb c b",
        "package": "hobbits",
        "partial": "Apply Cl",
        "signature": "Cl(a-\u003eb)-\u003eMb ctx a-\u003eMb ctx b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:mbLiftClosed",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003embLiftClosed\u003c/code\u003e is safe because closed terms don't contain names.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Closed",
        "fct-package": "hobbits",
        "fct-signature": "Mb ctx (Cl a) -\u003e Cl a",
        "fct-source": "src/Data-Binding-Hobbits-Closed.html#mbLiftClosed",
        "fct-type": "function",
        "title": "mbLiftClosed"
      },
      "index": {
        "description": "mbLiftClosed is safe because closed terms don contain names",
        "hierarchy": "Data Binding Hobbits Closed",
        "module": "Data.Binding.Hobbits.Closed",
        "name": "mbLiftClosed",
        "normalized": "Mb a(Cl b)-\u003eCl b",
        "package": "hobbits",
        "partial": "Lift Closed",
        "signature": "Mb ctx(Cl a)-\u003eCl a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:mkClosed",
      "description": {
        "fct-descr": "\u003cpre\u003emkClosed = cl\u003c/pre\u003e",
        "fct-module": "Data.Binding.Hobbits.Closed",
        "fct-package": "hobbits",
        "fct-signature": "Q Exp -\u003e Q Exp",
        "fct-source": "src/Data-Binding-Hobbits-Closed.html#mkClosed",
        "fct-type": "function",
        "title": "mkClosed"
      },
      "index": {
        "description": "mkClosed cl",
        "hierarchy": "Data Binding Hobbits Closed",
        "module": "Data.Binding.Hobbits.Closed",
        "name": "mkClosed",
        "normalized": "Q Exp-\u003eQ Exp",
        "package": "hobbits",
        "partial": "Closed",
        "signature": "Q Exp-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:noClosedNames",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enoClosedNames\u003c/code\u003e encodes the hobbits guarantee that no name can escape its\n multi-binding.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Closed",
        "fct-package": "hobbits",
        "fct-signature": "Cl (Name a) -\u003e b",
        "fct-source": "src/Data-Binding-Hobbits-Closed.html#noClosedNames",
        "fct-type": "function",
        "title": "noClosedNames"
      },
      "index": {
        "description": "noClosedNames encodes the hobbits guarantee that no name can escape its multi-binding",
        "hierarchy": "Data Binding Hobbits Closed",
        "module": "Data.Binding.Hobbits.Closed",
        "name": "noClosedNames",
        "normalized": "Cl(Name a)-\u003eb",
        "package": "hobbits",
        "partial": "Closed Names",
        "signature": "Cl(Name a)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:unCl",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Closed",
        "fct-package": "hobbits",
        "fct-signature": "Cl a -\u003e a",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#unCl",
        "fct-type": "function",
        "title": "unCl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Closed",
        "module": "Data.Binding.Hobbits.Closed",
        "name": "unCl",
        "normalized": "Cl a-\u003ea",
        "package": "hobbits",
        "partial": "Cl",
        "signature": "Cl a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:unClosed",
      "description": {
        "fct-descr": "\u003cpre\u003eunClosed = unCl\u003c/pre\u003e",
        "fct-module": "Data.Binding.Hobbits.Closed",
        "fct-package": "hobbits",
        "fct-signature": "Cl a -\u003e a",
        "fct-source": "src/Data-Binding-Hobbits-Closed.html#unClosed",
        "fct-type": "function",
        "title": "unClosed"
      },
      "index": {
        "description": "unClosed unCl",
        "hierarchy": "Data Binding Hobbits Closed",
        "module": "Data.Binding.Hobbits.Closed",
        "name": "unClosed",
        "normalized": "Cl a-\u003ea",
        "package": "hobbits",
        "partial": "Closed",
        "signature": "Cl a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html",
        "fct-type": "module",
        "title": "Examples"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "name": "Examples",
        "normalized": "",
        "package": "hobbits",
        "partial": "Examples",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:ex1",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "fct-package": "hobbits",
        "fct-signature": "Term ((b1 -\u003e b) -\u003e b1 -\u003e b)",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#ex1",
        "fct-type": "function",
        "title": "ex1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "name": "ex1",
        "normalized": "Term((a-\u003ea)-\u003ea-\u003ea)",
        "package": "hobbits",
        "partial": "",
        "signature": "Term((b-\u003eb)-\u003eb-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:ex2",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "fct-package": "hobbits",
        "fct-signature": "Term ((((b2 -\u003e b1) -\u003e b2 -\u003e b1) -\u003e b) -\u003e b)",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#ex2",
        "fct-type": "function",
        "title": "ex2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "name": "ex2",
        "normalized": "Term((((a-\u003ea)-\u003ea-\u003ea)-\u003ea)-\u003ea)",
        "package": "hobbits",
        "partial": "",
        "signature": "Term((((b-\u003eb)-\u003eb-\u003eb)-\u003eb)-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:ex3",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "fct-package": "hobbits",
        "fct-signature": "Term (b3 -\u003e (((b3 -\u003e b2 -\u003e b1) -\u003e b2 -\u003e b1) -\u003e b) -\u003e b)",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#ex3",
        "fct-type": "function",
        "title": "ex3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "name": "ex3",
        "normalized": "Term(a-\u003e(((a-\u003ea-\u003ea)-\u003ea-\u003ea)-\u003ea)-\u003ea)",
        "package": "hobbits",
        "partial": "",
        "signature": "Term(b-\u003e(((b-\u003eb-\u003eb)-\u003eb-\u003eb)-\u003eb)-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:ex4",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "fct-package": "hobbits",
        "fct-signature": "Term (((b1 -\u003e b) -\u003e b2 -\u003e b) -\u003e (((b1 -\u003e b) -\u003e b2 -\u003e b) -\u003e b2 -\u003e b1) -\u003e b2 -\u003e b1)",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#ex4",
        "fct-type": "function",
        "title": "ex4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "name": "ex4",
        "normalized": "Term(((a-\u003ea)-\u003ea-\u003ea)-\u003e(((a-\u003ea)-\u003ea-\u003ea)-\u003ea-\u003ea)-\u003ea-\u003ea)",
        "package": "hobbits",
        "partial": "",
        "signature": "Term(((b-\u003eb)-\u003eb-\u003eb)-\u003e(((b-\u003eb)-\u003eb-\u003eb)-\u003eb-\u003eb)-\u003eb-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:ex5",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "fct-package": "hobbits",
        "fct-signature": "Term (((b2 -\u003e b1) -\u003e b) -\u003e (b2 -\u003e b1) -\u003e b)",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#ex5",
        "fct-type": "function",
        "title": "ex5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "name": "ex5",
        "normalized": "Term(((a-\u003ea)-\u003ea)-\u003e(a-\u003ea)-\u003ea)",
        "package": "hobbits",
        "partial": "",
        "signature": "Term(((b-\u003eb)-\u003eb)-\u003e(b-\u003eb)-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:ex6",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "fct-package": "hobbits",
        "fct-signature": "Binding (L ((b -\u003e b) -\u003e a)) (Term a)",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#ex6",
        "fct-type": "function",
        "title": "ex6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "name": "ex6",
        "normalized": "Binding(L((a-\u003ea)-\u003eb))(Term b)",
        "package": "hobbits",
        "partial": "",
        "signature": "Binding(L((b-\u003eb)-\u003ea))(Term a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:ex7",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "fct-package": "hobbits",
        "fct-signature": "Binding (L ((b2 -\u003e b2) -\u003e b1)) (Term ((b1 -\u003e b) -\u003e b))",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#ex7",
        "fct-type": "function",
        "title": "ex7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "name": "ex7",
        "normalized": "Binding(L((a-\u003ea)-\u003ea))(Term((a-\u003ea)-\u003ea))",
        "package": "hobbits",
        "partial": "",
        "signature": "Binding(L((b-\u003eb)-\u003eb))(Term((b-\u003eb)-\u003eb))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:exP",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "fct-package": "hobbits",
        "fct-signature": "Term (((b1 -\u003e b1) -\u003e b) -\u003e (b1 -\u003e b1) -\u003e b)",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#exP",
        "fct-type": "function",
        "title": "exP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
        "name": "exP",
        "normalized": "Term(((a-\u003ea)-\u003ea)-\u003e(a-\u003ea)-\u003ea)",
        "package": "hobbits",
        "partial": "",
        "signature": "Term(((b-\u003eb)-\u003eb)-\u003e(b-\u003eb)-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html",
        "fct-type": "module",
        "title": "Terms"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "Terms",
        "normalized": "",
        "package": "hobbits",
        "partial": "Terms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#t:D",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#D",
        "fct-type": "data",
        "title": "D"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "D",
        "normalized": "",
        "package": "hobbits",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#t:DTerm",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#DTerm",
        "fct-type": "data",
        "title": "DTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "DTerm",
        "normalized": "",
        "package": "hobbits",
        "partial": "DTerm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#t:Decl",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Decl",
        "fct-type": "data",
        "title": "Decl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "Decl",
        "normalized": "",
        "package": "hobbits",
        "partial": "Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#t:Decls",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Decls",
        "fct-type": "data",
        "title": "Decls"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "Decls",
        "normalized": "",
        "package": "hobbits",
        "partial": "Decls",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#t:L",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#L",
        "fct-type": "data",
        "title": "L"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "L",
        "normalized": "",
        "package": "hobbits",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#t:Term",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Term",
        "fct-type": "data",
        "title": "Term"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "Term",
        "normalized": "",
        "package": "hobbits",
        "partial": "Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:App",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "Term (b -\u003e a) -\u003e Term b -\u003e Term a",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Term",
        "fct-type": "function",
        "title": "App"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "App",
        "normalized": "Term(a-\u003eb)-\u003eTerm a-\u003eTerm b",
        "package": "hobbits",
        "partial": "App",
        "signature": "Term(b-\u003ea)-\u003eTerm b-\u003eTerm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:Decl_Cons",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "Binding (L a) (Decl b) -\u003e Decl (a -\u003e b)",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Decl",
        "fct-type": "function",
        "title": "Decl_Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "Decl_Cons",
        "normalized": "Binding(L a)(Decl b)-\u003eDecl(a-\u003eb)",
        "package": "hobbits",
        "partial": "Decl Cons",
        "signature": "Binding(L a)(Decl b)-\u003eDecl(a-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:Decl_One",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "Binding (L a) (DTerm b) -\u003e Decl (a -\u003e b)",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Decl",
        "fct-type": "function",
        "title": "Decl_One"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "Decl_One",
        "normalized": "Binding(L a)(DTerm b)-\u003eDecl(a-\u003eb)",
        "package": "hobbits",
        "partial": "Decl One",
        "signature": "Binding(L a)(DTerm b)-\u003eDecl(a-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:Decls_Base",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "DTerm a -\u003e Decls a",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Decls",
        "fct-type": "function",
        "title": "Decls_Base"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "Decls_Base",
        "normalized": "DTerm a-\u003eDecls a",
        "package": "hobbits",
        "partial": "Decls Base",
        "signature": "DTerm a-\u003eDecls a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:Decls_Cons",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "Decl b -\u003e Binding (D b) (Decls a) -\u003e Decls a",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Decls",
        "fct-type": "function",
        "title": "Decls_Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "Decls_Cons",
        "normalized": "Decl a-\u003eBinding(D a)(Decls b)-\u003eDecls b",
        "package": "hobbits",
        "partial": "Decls Cons",
        "signature": "Decl b-\u003eBinding(D b)(Decls a)-\u003eDecls a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:Lam",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "Binding (L b) (Term a) -\u003e Term (b -\u003e a)",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Term",
        "fct-type": "function",
        "title": "Lam"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "Lam",
        "normalized": "Binding(L a)(Term b)-\u003eTerm(a-\u003eb)",
        "package": "hobbits",
        "partial": "Lam",
        "signature": "Binding(L b)(Term a)-\u003eTerm(b-\u003ea)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:TApp",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "DTerm (a -\u003e b) -\u003e DTerm a -\u003e DTerm b",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#DTerm",
        "fct-type": "function",
        "title": "TApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "TApp",
        "normalized": "DTerm(a-\u003eb)-\u003eDTerm a-\u003eDTerm b",
        "package": "hobbits",
        "partial": "TApp",
        "signature": "DTerm(a-\u003eb)-\u003eDTerm a-\u003eDTerm b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:TDVar",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "Name (D a) -\u003e DTerm a",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#DTerm",
        "fct-type": "function",
        "title": "TDVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "TDVar",
        "normalized": "Name(D a)-\u003eDTerm a",
        "package": "hobbits",
        "partial": "TDVar",
        "signature": "Name(D a)-\u003eDTerm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:TVar",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "Name (L a) -\u003e DTerm a",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#DTerm",
        "fct-type": "function",
        "title": "TVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "TVar",
        "normalized": "Name(L a)-\u003eDTerm a",
        "package": "hobbits",
        "partial": "TVar",
        "signature": "Name(L a)-\u003eDTerm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:Var",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "Name (L a) -\u003e Term a",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Term",
        "fct-type": "function",
        "title": "Var"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "Var",
        "normalized": "Name(L a)-\u003eTerm a",
        "package": "hobbits",
        "partial": "Var",
        "signature": "Name(L a)-\u003eTerm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:lam",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "fct-package": "hobbits",
        "fct-signature": "(Term a -\u003e Term b) -\u003e Term (a -\u003e b)",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#lam",
        "fct-type": "function",
        "title": "lam"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
        "name": "lam",
        "normalized": "(Term a-\u003eTerm b)-\u003eTerm(a-\u003eb)",
        "package": "hobbits",
        "partial": "",
        "signature": "(Term a-\u003eTerm b)-\u003eTerm(a-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe lambda lifting example from the paper E. Westbrook, N. Frisby,\n P. Brauner, \"Hobbits for Haskell: A Library for Higher-Order Encodings in\n Functional Programming Languages\".\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting.html",
        "fct-type": "module",
        "title": "LambdaLifting"
      },
      "index": {
        "description": "The lambda lifting example from the paper Westbrook Frisby Brauner Hobbits for Haskell Library for Higher-Order Encodings in Functional Programming Languages",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting",
        "name": "LambdaLifting",
        "normalized": "",
        "package": "hobbits",
        "partial": "Lambda Lifting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting.html#v:lambdaLift",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting",
        "fct-package": "hobbits",
        "fct-signature": "Term a -\u003e Decls a",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting.html#lambdaLift",
        "fct-type": "function",
        "title": "lambdaLift"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting",
        "name": "lambdaLift",
        "normalized": "Term a-\u003eDecls a",
        "package": "hobbits",
        "partial": "Lift",
        "signature": "Term a-\u003eDecls a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting.html#v:mbLambdaLift",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Examples.LambdaLifting",
        "fct-package": "hobbits",
        "fct-signature": "Mb c (Term a) -\u003e Mb c (Decls a)",
        "fct-source": "src/Data-Binding-Hobbits-Examples-LambdaLifting.html#mbLambdaLift",
        "fct-type": "function",
        "title": "mbLambdaLift"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Examples LambdaLifting",
        "module": "Data.Binding.Hobbits.Examples.LambdaLifting",
        "name": "mbLambdaLift",
        "normalized": "Mb a(Term b)-\u003eMb a(Decls b)",
        "package": "hobbits",
        "partial": "Lambda Lift",
        "signature": "Mb c(Term a)-\u003eMb c(Decls a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is internal to the Hobbits library, and should not be used\n directly.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "This module is internal to the Hobbits library and should not be used directly",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "hobbits",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#t:Cl",
      "description": {
        "fct-descr": "\u003cp\u003eThe type \u003ccode\u003eCl a\u003c/code\u003e represents a closed term of type \u003ccode\u003ea\u003c/code\u003e,\n  i.e., an expression of type \u003ccode\u003ea\u003c/code\u003e with no free (Haskell) variables.\n  Since this cannot be checked directly in the Haskell type system,\n  the \u003ccode\u003eCl\u003c/code\u003e data type is hidden, and the user can only create\n  closed terms using Template Haskell, through the \u003ccode\u003emkClosed\u003c/code\u003e\n  operator.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#Cl",
        "fct-type": "newtype",
        "title": "Cl"
      },
      "index": {
        "description": "The type Cl represents closed term of type i.e an expression of type with no free Haskell variables Since this cannot be checked directly in the Haskell type system the Cl data type is hidden and the user can only create closed terms using Template Haskell through the mkClosed operator",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "Cl",
        "normalized": "",
        "package": "hobbits",
        "partial": "Cl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#t:ExMember",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#ExMember",
        "fct-type": "data",
        "title": "ExMember"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "ExMember",
        "normalized": "",
        "package": "hobbits",
        "partial": "Ex Member",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#t:ExProxy",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#ExProxy",
        "fct-type": "data",
        "title": "ExProxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "ExProxy",
        "normalized": "",
        "package": "hobbits",
        "partial": "Ex Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#t:Mb",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003eMb ctx b\u003c/code\u003e is a multi-binding that binds exactly one name for each\n  type in \u003ccode\u003ectx\u003c/code\u003e, where \u003ccode\u003ectx\u003c/code\u003e has the form \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNil\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e:\u003e\u003c/a\u003e\u003c/code\u003e t1 \u003ccode\u003e\u003ca\u003e:\u003e\u003c/a\u003e\u003c/code\u003e ... \u003ccode\u003e\u003ca\u003e:\u003e\u003c/a\u003e\u003c/code\u003e tn\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#Mb",
        "fct-type": "data",
        "title": "Mb"
      },
      "index": {
        "description": "An Mb ctx is multi-binding that binds exactly one name for each type in ctx where ctx has the form Nil t1 tn",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "Mb",
        "normalized": "",
        "package": "hobbits",
        "partial": "Mb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eName a\u003c/code\u003e is a bound name that is associated with type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#Name",
        "fct-type": "newtype",
        "title": "Name"
      },
      "index": {
        "description": "Name is bound name that is associated with type",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "Name",
        "normalized": "",
        "package": "hobbits",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:Cl",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "Cl",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#Cl",
        "fct-type": "function",
        "title": "Cl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "Cl",
        "normalized": "",
        "package": "hobbits",
        "partial": "Cl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:ExMember",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "Member c a -\u003e ExMember",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#ExMember",
        "fct-type": "function",
        "title": "ExMember"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "ExMember",
        "normalized": "Member a b-\u003eExMember",
        "package": "hobbits",
        "partial": "Ex Member",
        "signature": "Member c a-\u003eExMember"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:ExProxy",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "MapC Proxy ctx -\u003e ExProxy",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#ExProxy",
        "fct-type": "function",
        "title": "ExProxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "ExProxy",
        "normalized": "MapC Proxy a-\u003eExProxy",
        "package": "hobbits",
        "partial": "Ex Proxy",
        "signature": "MapC Proxy ctx-\u003eExProxy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:MkMb",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "MkMb (MapC Name ctx) b",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#Mb",
        "fct-type": "function",
        "title": "MkMb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "MkMb",
        "normalized": "",
        "package": "hobbits",
        "partial": "Mk Mb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:MkName",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "MkName Int",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#Name",
        "fct-type": "function",
        "title": "MkName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "MkName",
        "normalized": "",
        "package": "hobbits",
        "partial": "Mk Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:counter",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "IORef Int",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#counter",
        "fct-type": "function",
        "title": "counter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "counter",
        "normalized": "",
        "package": "hobbits",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:fresh_name",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#fresh_name",
        "fct-type": "function",
        "title": "fresh_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "fresh_name",
        "normalized": "a-\u003eInt",
        "package": "hobbits",
        "partial": "",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:fresh_names",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "MapC Name ctx -\u003e MapC Name ctx",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#fresh_names",
        "fct-type": "function",
        "title": "fresh_names"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "fresh_names",
        "normalized": "MapC Name a-\u003eMapC Name a",
        "package": "hobbits",
        "partial": "",
        "signature": "MapC Name ctx-\u003eMapC Name ctx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:memberFromLen",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "Int -\u003e ExMember",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#memberFromLen",
        "fct-type": "function",
        "title": "memberFromLen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "memberFromLen",
        "normalized": "Int-\u003eExMember",
        "package": "hobbits",
        "partial": "From Len",
        "signature": "Int-\u003eExMember"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:proxyFromLen",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "Int -\u003e ExProxy",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#proxyFromLen",
        "fct-type": "function",
        "title": "proxyFromLen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "proxyFromLen",
        "normalized": "Int-\u003eExProxy",
        "package": "hobbits",
        "partial": "From Len",
        "signature": "Int-\u003eExProxy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:unCl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "a",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#Cl",
        "fct-type": "function",
        "title": "unCl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "unCl",
        "normalized": "",
        "package": "hobbits",
        "partial": "Cl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:unsafeLookupC",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "Int -\u003e Member c a",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#unsafeLookupC",
        "fct-type": "function",
        "title": "unsafeLookupC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "unsafeLookupC",
        "normalized": "Int-\u003eMember a b",
        "package": "hobbits",
        "partial": "Lookup",
        "signature": "Int-\u003eMember c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:unsafeNamesFromInts",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "[Int] -\u003e MapC Name ctx",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#unsafeNamesFromInts",
        "fct-type": "function",
        "title": "unsafeNamesFromInts"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "unsafeNamesFromInts",
        "normalized": "[Int]-\u003eMapC Name a",
        "package": "hobbits",
        "partial": "Names From Ints",
        "signature": "[Int]-\u003eMapC Name ctx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:unsafeProxyFromLen",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Internal",
        "fct-package": "hobbits",
        "fct-signature": "Int -\u003e MapC Proxy ctx",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#unsafeProxyFromLen",
        "fct-type": "function",
        "title": "unsafeProxyFromLen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Internal",
        "module": "Data.Binding.Hobbits.Internal",
        "name": "unsafeProxyFromLen",
        "normalized": "Int-\u003eMapC Proxy a",
        "package": "hobbits",
        "partial": "Proxy From Len",
        "signature": "Int-\u003eMapC Proxy ctx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the type-class Liftable for lifting\n non-binding-related data out of name-bindings. Note that this code\n is not \u003ca\u003etrusted\u003c/a\u003e, i.e., it is not part of the name-binding\n abstraction: instead, it is all written using the primitives\n exported by the Mb\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binding.Hobbits.Liftable",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Binding-Hobbits-Liftable.html",
        "fct-type": "module",
        "title": "Liftable"
      },
      "index": {
        "description": "This module defines the type-class Liftable for lifting non-binding-related data out of name-bindings Note that this code is not trusted i.e it is not part of the name-binding abstraction instead it is all written using the primitives exported by the Mb",
        "hierarchy": "Data Binding Hobbits Liftable",
        "module": "Data.Binding.Hobbits.Liftable",
        "name": "Liftable",
        "normalized": "",
        "package": "hobbits",
        "partial": "Liftable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#t:Liftable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003eLiftable a\u003c/code\u003e gives a \"lifting function\" for a, which can\n  take any data of type \u003ccode\u003ea\u003c/code\u003e out of a multi-binding of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMb\u003c/a\u003e\u003c/code\u003e ctx a\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Liftable",
        "fct-package": "hobbits",
        "fct-signature": "class",
        "fct-source": "src/Data-Binding-Hobbits-Liftable.html#Liftable",
        "fct-type": "class",
        "title": "Liftable"
      },
      "index": {
        "description": "The class Liftable gives lifting function for which can take any data of type out of multi-binding of type Mb ctx",
        "hierarchy": "Data Binding Hobbits Liftable",
        "module": "Data.Binding.Hobbits.Liftable",
        "name": "Liftable",
        "normalized": "",
        "package": "hobbits",
        "partial": "Liftable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#t:Liftable1",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003eLiftable1 f\u003c/code\u003e gives a lifting function for each type \u003ccode\u003ef a\u003c/code\u003e\n  when \u003ccode\u003ea\u003c/code\u003e itself is \u003ccode\u003eLiftable\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Liftable",
        "fct-package": "hobbits",
        "fct-signature": "class",
        "fct-source": "src/Data-Binding-Hobbits-Liftable.html#Liftable1",
        "fct-type": "class",
        "title": "Liftable1"
      },
      "index": {
        "description": "The class Liftable1 gives lifting function for each type when itself is Liftable",
        "hierarchy": "Data Binding Hobbits Liftable",
        "module": "Data.Binding.Hobbits.Liftable",
        "name": "Liftable1",
        "normalized": "",
        "package": "hobbits",
        "partial": "Liftable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#t:Liftable2",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003eLiftable2 f\u003c/code\u003e gives a lifting function for each type \u003ccode\u003ef a b\u003c/code\u003e\n  when \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e are \u003ccode\u003eLiftable\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Liftable",
        "fct-package": "hobbits",
        "fct-signature": "class",
        "fct-source": "src/Data-Binding-Hobbits-Liftable.html#Liftable2",
        "fct-type": "class",
        "title": "Liftable2"
      },
      "index": {
        "description": "The class Liftable2 gives lifting function for each type when and are Liftable",
        "hierarchy": "Data Binding Hobbits Liftable",
        "module": "Data.Binding.Hobbits.Liftable",
        "name": "Liftable2",
        "normalized": "",
        "package": "hobbits",
        "partial": "Liftable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#v:mbLift",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Liftable",
        "fct-package": "hobbits",
        "fct-signature": "Mb ctx a -\u003e a",
        "fct-source": "src/Data-Binding-Hobbits-Liftable.html#mbLift",
        "fct-type": "method",
        "title": "mbLift"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Liftable",
        "module": "Data.Binding.Hobbits.Liftable",
        "name": "mbLift",
        "normalized": "Mb a b-\u003eb",
        "package": "hobbits",
        "partial": "Lift",
        "signature": "Mb ctx a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#v:mbLift1",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Liftable",
        "fct-package": "hobbits",
        "fct-signature": "Mb ctx (f a) -\u003e f a",
        "fct-source": "src/Data-Binding-Hobbits-Liftable.html#mbLift1",
        "fct-type": "method",
        "title": "mbLift1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Liftable",
        "module": "Data.Binding.Hobbits.Liftable",
        "name": "mbLift1",
        "normalized": "Mb a(b c)-\u003eb c",
        "package": "hobbits",
        "partial": "Lift",
        "signature": "Mb ctx(f a)-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#v:mbLift2",
      "description": {
        "fct-module": "Data.Binding.Hobbits.Liftable",
        "fct-package": "hobbits",
        "fct-signature": "Mb ctx (f a b) -\u003e f a b",
        "fct-source": "src/Data-Binding-Hobbits-Liftable.html#mbLift2",
        "fct-type": "method",
        "title": "mbLift2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits Liftable",
        "module": "Data.Binding.Hobbits.Liftable",
        "name": "mbLift2",
        "normalized": "Mb a(b c d)-\u003eb c d",
        "package": "hobbits",
        "partial": "Lift",
        "signature": "Mb ctx(f a b)-\u003ef a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#v:mbList",
      "description": {
        "fct-descr": "\u003cp\u003eLift a list (but not its elements) out of a multi-binding\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Liftable",
        "fct-package": "hobbits",
        "fct-signature": "Mb c [a] -\u003e [Mb c a]",
        "fct-source": "src/Data-Binding-Hobbits-Liftable.html#mbList",
        "fct-type": "function",
        "title": "mbList"
      },
      "index": {
        "description": "Lift list but not its elements out of multi-binding",
        "hierarchy": "Data Binding Hobbits Liftable",
        "module": "Data.Binding.Hobbits.Liftable",
        "name": "mbList",
        "normalized": "Mb a[b]-\u003e[Mb a b]",
        "package": "hobbits",
        "partial": "List",
        "signature": "Mb c[a]-\u003e[Mb c a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines multi-bindings as the type \u003ccode\u003e\u003ca\u003eMb\u003c/a\u003e\u003c/code\u003e, as well as a number of\n operations on multi-bindings. See the paper E. Westbrook, N. Frisby,\n P. Brauner, \"Hobbits for Haskell: A Library for Higher-Order Encodings in\n Functional Programming Languages\" for more information.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html",
        "fct-type": "module",
        "title": "Mb"
      },
      "index": {
        "description": "This module defines multi-bindings as the type Mb as well as number of operations on multi-bindings See the paper Westbrook Frisby Brauner Hobbits for Haskell Library for Higher-Order Encodings in Functional Programming Languages for more information",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "Mb",
        "normalized": "",
        "package": "hobbits",
        "partial": "Mb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#t:Binding",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eBinding\u003c/code\u003e is simply a multi-binding that binds one name\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "type",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#Binding",
        "fct-type": "type",
        "title": "Binding"
      },
      "index": {
        "description": "Binding is simply multi-binding that binds one name",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "Binding",
        "normalized": "",
        "package": "hobbits",
        "partial": "Binding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#t:Mb",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003eMb ctx b\u003c/code\u003e is a multi-binding that binds exactly one name for each\n  type in \u003ccode\u003ectx\u003c/code\u003e, where \u003ccode\u003ectx\u003c/code\u003e has the form \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNil\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e:\u003e\u003c/a\u003e\u003c/code\u003e t1 \u003ccode\u003e\u003ca\u003e:\u003e\u003c/a\u003e\u003c/code\u003e ... \u003ccode\u003e\u003ca\u003e:\u003e\u003c/a\u003e\u003c/code\u003e tn\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#Mb",
        "fct-type": "data",
        "title": "Mb"
      },
      "index": {
        "description": "An Mb ctx is multi-binding that binds exactly one name for each type in ctx where ctx has the form Nil t1 tn",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "Mb",
        "normalized": "",
        "package": "hobbits",
        "partial": "Mb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eName a\u003c/code\u003e is a bound name that is associated with type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binding-Hobbits-Internal.html#Name",
        "fct-type": "data",
        "title": "Name"
      },
      "index": {
        "description": "Name is bound name that is associated with type",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "Name",
        "normalized": "",
        "package": "hobbits",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:cmpName",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecmpName n m\u003c/code\u003e compares names \u003ccode\u003en\u003c/code\u003e and \u003ccode\u003em\u003c/code\u003e of types \u003ccode\u003eName a\u003c/code\u003e and \u003ccode\u003eName b\u003c/code\u003e,\n  respectively. When they are equal, \u003ccode\u003eSome e\u003c/code\u003e is returned for \u003ccode\u003ee\u003c/code\u003e a proof\n  of type \u003ccode\u003ea :=: b\u003c/code\u003e that their types are equal. Otherwise, \u003ccode\u003eNone\u003c/code\u003e is returned.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e nu $ \\n -\u003e nu $ \\m -\u003e cmpName n n   ==   nu $ \\n -\u003e nu $ \\m -\u003e Some Refl\n nu $ \\n -\u003e nu $ \\m -\u003e cmpName n m   ==   nu $ \\n -\u003e nu $ \\m -\u003e None\n\u003c/pre\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "Name a -\u003e Name b -\u003e Maybe (a :=: b)",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#cmpName",
        "fct-type": "function",
        "title": "cmpName"
      },
      "index": {
        "description": "cmpName compares names and of types Name and Name respectively When they are equal Some is returned for proof of type that their types are equal Otherwise None is returned For example nu nu cmpName nu nu Some Refl nu nu cmpName nu nu None",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "cmpName",
        "normalized": "Name a-\u003eName b-\u003eMaybe(a b)",
        "package": "hobbits",
        "partial": "Name",
        "signature": "Name a-\u003eName b-\u003eMaybe(a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:elimEmptyMb",
      "description": {
        "fct-descr": "\u003cp\u003eEliminates an empty binding, returning its body. Note that\n  \u003ccode\u003eelimEmptyMb\u003c/code\u003e is the inverse of \u003ccode\u003eemptyMb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "Mb Nil a -\u003e a",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#elimEmptyMb",
        "fct-type": "function",
        "title": "elimEmptyMb"
      },
      "index": {
        "description": "Eliminates an empty binding returning its body Note that elimEmptyMb is the inverse of emptyMb",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "elimEmptyMb",
        "normalized": "Mb Nil a-\u003ea",
        "package": "hobbits",
        "partial": "Empty Mb",
        "signature": "Mb Nil a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:emptyMb",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an empty binding that binds 0 names.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "a -\u003e Mb Nil a",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#emptyMb",
        "fct-type": "function",
        "title": "emptyMb"
      },
      "index": {
        "description": "Creates an empty binding that binds names",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "emptyMb",
        "normalized": "a-\u003eMb Nil a",
        "package": "hobbits",
        "partial": "Mb",
        "signature": "a-\u003eMb Nil a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbCmpName",
      "description": {
        "fct-descr": "\u003cp\u003eCompares two names inside bindings, taking alpha-equivalence into\n  account; i.e., if both are the \u003ccode\u003ei\u003c/code\u003eth name, or both are the same name\n  not bound in their respective multi-bindings, then they compare as\n  equal. The return values are the same as for \u003ccode\u003e\u003ca\u003ecmpName\u003c/a\u003e\u003c/code\u003e, so that\n  \u003ccode\u003eSome Refl\u003c/code\u003e is returned when the names are equal and \u003ccode\u003eNothing\u003c/code\u003e is\n  returned when they are not.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "Mb c (Name a) -\u003e Mb c (Name b) -\u003e Maybe (a :=: b)",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#mbCmpName",
        "fct-type": "function",
        "title": "mbCmpName"
      },
      "index": {
        "description": "Compares two names inside bindings taking alpha-equivalence into account i.e if both are the th name or both are the same name not bound in their respective multi-bindings then they compare as equal The return values are the same as for cmpName so that Some Refl is returned when the names are equal and Nothing is returned when they are not",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "mbCmpName",
        "normalized": "Mb a(Name b)-\u003eMb a(Name c)-\u003eMaybe(b c)",
        "package": "hobbits",
        "partial": "Cmp Name",
        "signature": "Mb c(Name a)-\u003eMb c(Name b)-\u003eMaybe(a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbCombine",
      "description": {
        "fct-descr": "\u003cp\u003eCombines a binding inside another binding into a single binding.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "Mb c1 (Mb c2 b) -\u003e Mb (c1 :++: c2) b",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#mbCombine",
        "fct-type": "function",
        "title": "mbCombine"
      },
      "index": {
        "description": "Combines binding inside another binding into single binding",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "mbCombine",
        "normalized": "Mb a(Mb a b)-\u003eMb(a a)b",
        "package": "hobbits",
        "partial": "Combine",
        "signature": "Mb c(Mb c b)-\u003eMb(c c)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbLiftChar",
      "description": {
        "fct-descr": "\u003cp\u003eLifts a \u003ccode\u003eChar\u003c/code\u003e out of a multi-binding\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "Mb c Char -\u003e Char",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#mbLiftChar",
        "fct-type": "function",
        "title": "mbLiftChar"
      },
      "index": {
        "description": "Lifts Char out of multi-binding",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "mbLiftChar",
        "normalized": "Mb a Char-\u003eChar",
        "package": "hobbits",
        "partial": "Lift Char",
        "signature": "Mb c Char-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbLiftInt",
      "description": {
        "fct-descr": "\u003cp\u003eLifts an \u003ccode\u003eInt\u003c/code\u003e out of a multi-binding\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "Mb c Int -\u003e Int",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#mbLiftInt",
        "fct-type": "function",
        "title": "mbLiftInt"
      },
      "index": {
        "description": "Lifts an Int out of multi-binding",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "mbLiftInt",
        "normalized": "Mb a Int-\u003eInt",
        "package": "hobbits",
        "partial": "Lift Int",
        "signature": "Mb c Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbLiftInteger",
      "description": {
        "fct-descr": "\u003cp\u003eLifts an \u003ccode\u003eInteger\u003c/code\u003e out of a multi-binding\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "Mb c Integer -\u003e Integer",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#mbLiftInteger",
        "fct-type": "function",
        "title": "mbLiftInteger"
      },
      "index": {
        "description": "Lifts an Integer out of multi-binding",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "mbLiftInteger",
        "normalized": "Mb a Integer-\u003eInteger",
        "package": "hobbits",
        "partial": "Lift Integer",
        "signature": "Mb c Integer-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbNameBoundP",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a name is bound in a multi-binding, returning \u003ccode\u003eLeft mem\u003c/code\u003e\n  when the name is bound, where \u003ccode\u003emem\u003c/code\u003e is a proof that the type of the\n  name is in the type list for the multi-binding, and returning\n  \u003ccode\u003eRight n\u003c/code\u003e when the name is not bound, where \u003ccode\u003en\u003c/code\u003e is the name.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e nu $ \\n -\u003e mbNameBoundP (nu $ \\m -\u003e m)  ==  nu $ \\n -\u003e Left Member_Base\n nu $ \\n -\u003e mbNameBoundP (nu $ \\m -\u003e n)  ==  nu $ \\n -\u003e Right n\n\u003c/pre\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "Mb ctx (Name a) -\u003e Either (Member ctx a) (Name a)",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#mbNameBoundP",
        "fct-type": "function",
        "title": "mbNameBoundP"
      },
      "index": {
        "description": "Checks if name is bound in multi-binding returning Left mem when the name is bound where mem is proof that the type of the name is in the type list for the multi-binding and returning Right when the name is not bound where is the name For example nu mbNameBoundP nu nu Left Member Base nu mbNameBoundP nu nu Right",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "mbNameBoundP",
        "normalized": "Mb a(Name b)-\u003eEither(Member a b)(Name b)",
        "package": "hobbits",
        "partial": "Name Bound",
        "signature": "Mb ctx(Name a)-\u003eEither(Member ctx a)(Name a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbSeparate",
      "description": {
        "fct-descr": "\u003cp\u003eSeparates a binding into two nested bindings. The first argument, of\n  type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAppend\u003c/a\u003e\u003c/code\u003e c1 c2 c\u003c/code\u003e, is a \"phantom\" argument to indicate how\n  the context \u003ccode\u003ec\u003c/code\u003e should be split.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "Append c1 c2 c -\u003e Mb c a -\u003e Mb c1 (Mb c2 a)",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#mbSeparate",
        "fct-type": "function",
        "title": "mbSeparate"
      },
      "index": {
        "description": "Separates binding into two nested bindings The first argument of type Append c1 c2 is phantom argument to indicate how the context should be split",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "mbSeparate",
        "normalized": "Append a a a-\u003eMb a b-\u003eMb a(Mb a b)",
        "package": "hobbits",
        "partial": "Separate",
        "signature": "Append c c c-\u003eMb c a-\u003eMb c(Mb c a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbToProxy",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a proxy object that enumerates all the types in ctx.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "Mb ctx a -\u003e MapC Proxy ctx",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#mbToProxy",
        "fct-type": "function",
        "title": "mbToProxy"
      },
      "index": {
        "description": "Returns proxy object that enumerates all the types in ctx",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "mbToProxy",
        "normalized": "Mb a b-\u003eMapC Proxy a",
        "package": "hobbits",
        "partial": "To Proxy",
        "signature": "Mb ctx a-\u003eMapC Proxy ctx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:nu",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enu f\u003c/code\u003e creates a binding which binds a fresh name \u003ccode\u003en\u003c/code\u003e and whose\n  body is the result of \u003ccode\u003ef n\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "(Name a -\u003e b) -\u003e Binding a b",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#nu",
        "fct-type": "function",
        "title": "nu"
      },
      "index": {
        "description": "nu creates binding which binds fresh name and whose body is the result of",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "nu",
        "normalized": "(Name a-\u003eb)-\u003eBinding a b",
        "package": "hobbits",
        "partial": "",
        "signature": "(Name a-\u003eb)-\u003eBinding a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:nuMulti",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003enuMulti p f\u003c/code\u003e creates a multi-binding of zero or more\n  names, one for each element of the vector \u003ccode\u003ep\u003c/code\u003e. The bound names are\n  passed the names to \u003ccode\u003ef\u003c/code\u003e, which returns the body of the\n  multi-binding.  The argument \u003ccode\u003ep\u003c/code\u003e, of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMb\u003c/a\u003e\u003c/code\u003e f ctx\u003c/code\u003e, acts as a\n  \"phantom\" argument, used to reify the list of types \u003ccode\u003ectx\u003c/code\u003e at the\n  term level; thus it is unimportant what the type function \u003ccode\u003ef\u003c/code\u003e is.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "MapC f ctx -\u003e (MapC Name ctx -\u003e b) -\u003e Mb ctx b",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#nuMulti",
        "fct-type": "function",
        "title": "nuMulti"
      },
      "index": {
        "description": "The expression nuMulti creates multi-binding of zero or more names one for each element of the vector The bound names are passed the names to which returns the body of the multi-binding The argument of type Mb ctx acts as phantom argument used to reify the list of types ctx at the term level thus it is unimportant what the type function is",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "nuMulti",
        "normalized": "MapC a b-\u003e(MapC Name b-\u003ec)-\u003eMb b c",
        "package": "hobbits",
        "partial": "Multi",
        "signature": "MapC f ctx-\u003e(MapC Name ctx-\u003eb)-\u003eMb ctx b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:nus",
      "description": {
        "fct-descr": "\u003cpre\u003enus = nuMulti\u003c/pre\u003e",
        "fct-module": "Data.Binding.Hobbits.Mb",
        "fct-package": "hobbits",
        "fct-signature": "MapC f ctx -\u003e (MapC Name ctx -\u003e b) -\u003e Mb ctx b",
        "fct-source": "src/Data-Binding-Hobbits-Mb.html#nus",
        "fct-type": "function",
        "title": "nus"
      },
      "index": {
        "description": "nus nuMulti",
        "hierarchy": "Data Binding Hobbits Mb",
        "module": "Data.Binding.Hobbits.Mb",
        "name": "nus",
        "normalized": "MapC a b-\u003e(MapC Name b-\u003ec)-\u003eMb b c",
        "package": "hobbits",
        "partial": "",
        "signature": "MapC f ctx-\u003e(MapC Name ctx-\u003eb)-\u003eMb ctx b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the NuElim typeclass, which allows eliminations\n  of (multi-) bindings. The high-level idea is that, when a fresh name\n  is created with \u003ccode\u003e\u003ca\u003enu\u003c/a\u003e\u003c/code\u003e, the fresh name can also be substituted for the\n  bound name in a binding. See the documentation for \u003ccode\u003e\u003ca\u003enuWithElim1\u003c/a\u003e\u003c/code\u003e and\n  \u003ccode\u003enuWithElimMulti\u003c/code\u003e for details.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html",
        "fct-type": "module",
        "title": "NuElim"
      },
      "index": {
        "description": "This module defines the NuElim typeclass which allows eliminations of multi bindings The high-level idea is that when fresh name is created with nu the fresh name can also be substituted for the bound name in binding See the documentation for nuWithElim1 and nuWithElimMulti for details",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "NuElim",
        "normalized": "",
        "package": "hobbits",
        "partial": "Nu Elim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#t:NuElim",
      "description": {
        "fct-descr": "\u003cp\u003eInstances of the \u003ccode\u003eNuElim a\u003c/code\u003e class allow the type \u003ccode\u003ea\u003c/code\u003e to be used with\n  \u003ccode\u003enuWithElimMulti\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enuWithElim1\u003c/a\u003e\u003c/code\u003e. The structure of this class is\n  mostly hidden from the user; see \u003ccode\u003e\u003ca\u003emkNuElimData\u003c/a\u003e\u003c/code\u003e to see how to create\n  instances of the \u003ccode\u003eNuElim\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "class",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#NuElim",
        "fct-type": "class",
        "title": "NuElim"
      },
      "index": {
        "description": "Instances of the NuElim class allow the type to be used with nuWithElimMulti and nuWithElim1 The structure of this class is mostly hidden from the user see mkNuElimData to see how to create instances of the NuElim class",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "NuElim",
        "normalized": "",
        "package": "hobbits",
        "partial": "Nu Elim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#t:NuElim1",
      "description": {
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "class",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#NuElim1",
        "fct-type": "class",
        "title": "NuElim1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "NuElim1",
        "normalized": "",
        "package": "hobbits",
        "partial": "Nu Elim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#t:NuElimList",
      "description": {
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "class",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#NuElimList",
        "fct-type": "class",
        "title": "NuElimList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "NuElimList",
        "normalized": "",
        "package": "hobbits",
        "partial": "Nu Elim List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#t:NuElimProof",
      "description": {
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#NuElimProof",
        "fct-type": "data",
        "title": "NuElimProof"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "NuElimProof",
        "normalized": "",
        "package": "hobbits",
        "partial": "Nu Elim Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:mbApply",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function in a multi-binding to an argument in a\n  multi-binding that binds the same number and types of names.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "Mb ctx (a -\u003e b) -\u003e Mb ctx a -\u003e Mb ctx b",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#mbApply",
        "fct-type": "function",
        "title": "mbApply"
      },
      "index": {
        "description": "Applies function in multi-binding to an argument in multi-binding that binds the same number and types of names",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "mbApply",
        "normalized": "Mb a(b-\u003ec)-\u003eMb a b-\u003eMb a c",
        "package": "hobbits",
        "partial": "Apply",
        "signature": "Mb ctx(a-\u003eb)-\u003eMb ctx a-\u003eMb ctx b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:mbMapAndSwap",
      "description": {
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "(Mb ctx1 a -\u003e b) -\u003e Mb ctx1 (Mb ctx2 a) -\u003e Mb ctx2 b",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#mbMapAndSwap",
        "fct-type": "function",
        "title": "mbMapAndSwap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "mbMapAndSwap",
        "normalized": "(Mb a b-\u003ec)-\u003eMb a(Mb a b)-\u003eMb a c",
        "package": "hobbits",
        "partial": "Map And Swap",
        "signature": "(Mb ctx a-\u003eb)-\u003eMb ctx(Mb ctx a)-\u003eMb ctx b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:mbRearrange",
      "description": {
        "fct-descr": "\u003cp\u003eTake a multi-binding inside another multi-binding and move the\n  outer binding inside the inner one.\n\u003c/p\u003e\u003cp\u003eNOTE: This is not yet implemented.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "Mb ctx1 (Mb ctx2 a) -\u003e Mb ctx2 (Mb ctx1 a)",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#mbRearrange",
        "fct-type": "function",
        "title": "mbRearrange"
      },
      "index": {
        "description": "Take multi-binding inside another multi-binding and move the outer binding inside the inner one NOTE This is not yet implemented",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "mbRearrange",
        "normalized": "Mb a(Mb a b)-\u003eMb a(Mb a b)",
        "package": "hobbits",
        "partial": "Rearrange",
        "signature": "Mb ctx(Mb ctx a)-\u003eMb ctx(Mb ctx a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:mkNuElimData",
      "description": {
        "fct-descr": "\u003cp\u003eTemplate Haskell function for creating NuElim instances for (G)ADTs.\n  Typical usage is to include the following line in the source file for\n  (G)ADT \u003ccode\u003eT\u003c/code\u003e (here assumed to have two type arguments):\n\u003c/p\u003e\u003cpre\u003e $(mkNuElimData [t| forall a b . T a b |])\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emkNuElimData\u003c/a\u003e\u003c/code\u003e call here will create an instance declaration for\n  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNuElim\u003c/a\u003e\u003c/code\u003e (T a b)\u003c/code\u003e. It is also possible to include a context in the\n  forall type; for example, if we define the \u003ccode\u003eID\u003c/code\u003e data type as follows:\n\u003c/p\u003e\u003cpre\u003e data ID a = ID a\n\u003c/pre\u003e\u003cp\u003ethen we can create a \u003ccode\u003e\u003ca\u003eNuElim\u003c/a\u003e\u003c/code\u003e instance for it like this:\n\u003c/p\u003e\u003cpre\u003e $( mkNuElimData [t| NuElim a =\u003e ID a |])\n\u003c/pre\u003e\u003cp\u003eNote that, when a context is included, the Haskell parser will add\n  the \u003ccode\u003eforall a\u003c/code\u003e for you.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "Q Type -\u003e Q [Dec]",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#mkNuElimData",
        "fct-type": "function",
        "title": "mkNuElimData"
      },
      "index": {
        "description": "Template Haskell function for creating NuElim instances for ADTs Typical usage is to include the following line in the source file for ADT here assumed to have two type arguments mkNuElimData forall The mkNuElimData call here will create an instance declaration for NuElim It is also possible to include context in the forall type for example if we define the ID data type as follows data ID ID then we can create NuElim instance for it like this mkNuElimData NuElim ID Note that when context is included the Haskell parser will add the forall for you",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "mkNuElimData",
        "normalized": "Q Type-\u003eQ[Dec]",
        "package": "hobbits",
        "partial": "Nu Elim Data",
        "signature": "Q Type-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:nuElimListProof",
      "description": {
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "MapC NuElimObj args",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#nuElimListProof",
        "fct-type": "method",
        "title": "nuElimListProof"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "nuElimListProof",
        "normalized": "",
        "package": "hobbits",
        "partial": "Elim List Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:nuElimProof",
      "description": {
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "NuElimProof a",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#nuElimProof",
        "fct-type": "method",
        "title": "nuElimProof"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "nuElimProof",
        "normalized": "",
        "package": "hobbits",
        "partial": "Elim Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:nuElimProof1",
      "description": {
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "NuElimObj (f a)",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#nuElimProof1",
        "fct-type": "method",
        "title": "nuElimProof1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "nuElimProof1",
        "normalized": "",
        "package": "hobbits",
        "partial": "Elim Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:nuMultiWithElim",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003enuWithElimMulti args f\u003c/code\u003e takes a sequence \u003ccode\u003eargs\u003c/code\u003e of\n  zero or more multi-bindings, each of type \u003ccode\u003eMb ctx ai\u003c/code\u003e for the same\n  type context \u003ccode\u003ectx\u003c/code\u003e of bound names, and a function \u003ccode\u003ef\u003c/code\u003e and does the\n  following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Creates a multi-binding that binds names \u003ccode\u003en1,...,nn\u003c/code\u003e, one name for\n    each type in \u003ccode\u003ectx\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e Substitutes the names \u003ccode\u003en1,...,nn\u003c/code\u003e for the names bound by each\n    argument in the \u003ccode\u003eargs\u003c/code\u003e sequence, yielding the bodies of the \u003ccode\u003eargs\u003c/code\u003e\n    (using the new name \u003ccode\u003en\u003c/code\u003e); and then\n\u003c/li\u003e\u003cli\u003e Passes the sequence \u003ccode\u003en1,...,nn\u003c/code\u003e along with the result of\n    substituting into \u003ccode\u003eargs\u003c/code\u003e to the function \u003ccode\u003ef\u003c/code\u003e, which then returns\n    the value for the newly created binding.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that the types in \u003ccode\u003eargs\u003c/code\u003e must each have a \u003ccode\u003eNuElim\u003c/code\u003e instance;\n  this is represented with the \u003ccode\u003eNuElimList\u003c/code\u003e type class.\n\u003c/p\u003e\u003cp\u003eHere are some examples:\n\u003c/p\u003e\u003cpre\u003e commuteFun :: (NuElim a, NuElim b) =\u003e Mb ctx (a -\u003e b) -\u003e Mb ctx a -\u003e Mb ctx b\n commuteFun f a =\n     nuWithElimMulti ('mbToProxy' f) ('Nil' :\u003e f :\u003e a)\n                     (\\_ ('Nil' :\u003e 'Identity' f' :\u003e 'Identity' a') -\u003e f' a')\n\u003c/pre\u003e",
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "MapC f ctx -\u003e MapC (Mb ctx) args -\u003e (MapC Name ctx -\u003e MapC Identity args -\u003e b) -\u003e Mb ctx b",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#nuMultiWithElim",
        "fct-type": "function",
        "title": "nuMultiWithElim"
      },
      "index": {
        "description": "The expression nuWithElimMulti args takes sequence args of zero or more multi-bindings each of type Mb ctx ai for the same type context ctx of bound names and function and does the following Creates multi-binding that binds names n1 nn one name for each type in ctx Substitutes the names n1 nn for the names bound by each argument in the args sequence yielding the bodies of the args using the new name and then Passes the sequence n1 nn along with the result of substituting into args to the function which then returns the value for the newly created binding Note that the types in args must each have NuElim instance this is represented with the NuElimList type class Here are some examples commuteFun NuElim NuElim Mb ctx Mb ctx Mb ctx commuteFun nuWithElimMulti mbToProxy Nil Nil Identity Identity",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "nuMultiWithElim",
        "normalized": "MapC a b-\u003eMapC(Mb b)c-\u003e(MapC Name b-\u003eMapC Identity c-\u003ed)-\u003eMb b d",
        "package": "hobbits",
        "partial": "Multi With Elim",
        "signature": "MapC f ctx-\u003eMapC(Mb ctx)args-\u003e(MapC Name ctx-\u003eMapC Identity args-\u003eb)-\u003eMb ctx b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:nuMultiWithElim1",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003enuMultiWithElim\u003c/a\u003e\u003c/code\u003e but takes only one argument\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "MapC f ctx -\u003e Mb ctx arg -\u003e (MapC Name ctx -\u003e arg -\u003e b) -\u003e Mb ctx b",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#nuMultiWithElim1",
        "fct-type": "function",
        "title": "nuMultiWithElim1"
      },
      "index": {
        "description": "Similar to nuMultiWithElim but takes only one argument",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "nuMultiWithElim1",
        "normalized": "MapC a b-\u003eMb b c-\u003e(MapC Name b-\u003ec-\u003ed)-\u003eMb b d",
        "package": "hobbits",
        "partial": "Multi With Elim",
        "signature": "MapC f ctx-\u003eMb ctx arg-\u003e(MapC Name ctx-\u003earg-\u003eb)-\u003eMb ctx b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:nuWithElim",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003enuMultiWithElim\u003c/a\u003e\u003c/code\u003e but binds only one name.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "MapC (Mb (Nil :\u003e a)) args -\u003e (Name a -\u003e MapC Identity args -\u003e b) -\u003e Binding a b",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#nuWithElim",
        "fct-type": "function",
        "title": "nuWithElim"
      },
      "index": {
        "description": "Similar to nuMultiWithElim but binds only one name",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "nuWithElim",
        "normalized": "MapC(Mb(Nil a))b-\u003e(Name a-\u003eMapC Identity b-\u003ec)-\u003eBinding a c",
        "package": "hobbits",
        "partial": "With Elim",
        "signature": "MapC(Mb(Nil a))args-\u003e(Name a-\u003eMapC Identity args-\u003eb)-\u003eBinding a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:nuWithElim1",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003enuMultiWithElim\u003c/a\u003e\u003c/code\u003e but takes only one argument that binds\n  a single name.\n\u003c/p\u003e",
        "fct-module": "Data.Binding.Hobbits.NuElim",
        "fct-package": "hobbits",
        "fct-signature": "Binding a arg -\u003e (Name a -\u003e arg -\u003e b) -\u003e Binding a b",
        "fct-source": "src/Data-Binding-Hobbits-NuElim.html#nuWithElim1",
        "fct-type": "function",
        "title": "nuWithElim1"
      },
      "index": {
        "description": "Similar to nuMultiWithElim but takes only one argument that binds single name",
        "hierarchy": "Data Binding Hobbits NuElim",
        "module": "Data.Binding.Hobbits.NuElim",
        "name": "nuWithElim1",
        "normalized": "Binding a b-\u003e(Name a-\u003eb-\u003ec)-\u003eBinding a c",
        "package": "hobbits",
        "partial": "With Elim",
        "signature": "Binding a arg-\u003e(Name a-\u003earg-\u003eb)-\u003eBinding a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-PatternParser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsing the haskell-src-meta package to parse Haskell patterns.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binding.Hobbits.PatternParser",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Binding-Hobbits-PatternParser.html",
        "fct-type": "module",
        "title": "PatternParser"
      },
      "index": {
        "description": "Using the haskell-src-meta package to parse Haskell patterns",
        "hierarchy": "Data Binding Hobbits PatternParser",
        "module": "Data.Binding.Hobbits.PatternParser",
        "name": "PatternParser",
        "normalized": "",
        "package": "hobbits",
        "partial": "Pattern Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-PatternParser.html#v:parsePattern",
      "description": {
        "fct-module": "Data.Binding.Hobbits.PatternParser",
        "fct-package": "hobbits",
        "fct-signature": "String -\u003e String -\u003e Either String Pat",
        "fct-source": "src/Data-Binding-Hobbits-PatternParser.html#parsePattern",
        "fct-type": "function",
        "title": "parsePattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits PatternParser",
        "module": "Data.Binding.Hobbits.PatternParser",
        "name": "parsePattern",
        "normalized": "String-\u003eString-\u003eEither String Pat",
        "package": "hobbits",
        "partial": "Pattern",
        "signature": "String-\u003eString-\u003eEither String Pat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-QQ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines a quasi-quoter for writing patterns that match the bodies of \u003ccode\u003e\u003ca\u003eMb\u003c/a\u003e\u003c/code\u003e\n multi-bindings. Uses the haskell-src-exts parser. \u003ccode\u003e[nuP| P ]\u003c/code\u003e defines a\n pattern that will match a multi-binding whose body matches \u003ccode\u003eP\u003c/code\u003e. Any\n variables matched by \u003ccode\u003eP\u003c/code\u003e will remain inside the binding; thus, for example,\n in the pattern \u003ccode\u003e[nuP| x |]\u003c/code\u003e, \u003ccode\u003ex\u003c/code\u003e matches the entire multi-binding.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e case (nu Left) of [nuP| Left x |] -\u003e x  ==  nu id\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eclP| P |\u003c/dt\u003e\u003cdd\u003e does the same for the Cl type, and [clNuP| P |] works for\n both simultaneously: Cl (Mb ctx a).\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
        "fct-module": "Data.Binding.Hobbits.QQ",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Binding-Hobbits-QQ.html",
        "fct-type": "module",
        "title": "QQ"
      },
      "index": {
        "description": "Defines quasi-quoter for writing patterns that match the bodies of Mb multi-bindings Uses the haskell-src-exts parser nuP defines pattern that will match multi-binding whose body matches Any variables matched by will remain inside the binding thus for example in the pattern nuP matches the entire multi-binding Examples case nu Left of nuP Left nu id clP does the same for the Cl type and clNuP works for both simultaneously Cl Mb ctx",
        "hierarchy": "Data Binding Hobbits QQ",
        "module": "Data.Binding.Hobbits.QQ",
        "name": "QQ",
        "normalized": "",
        "package": "hobbits",
        "partial": "QQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-QQ.html#v:clNuP",
      "description": {
        "fct-module": "Data.Binding.Hobbits.QQ",
        "fct-package": "hobbits",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Data-Binding-Hobbits-QQ.html#clNuP",
        "fct-type": "function",
        "title": "clNuP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits QQ",
        "module": "Data.Binding.Hobbits.QQ",
        "name": "clNuP",
        "normalized": "",
        "package": "hobbits",
        "partial": "Nu",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-QQ.html#v:clP",
      "description": {
        "fct-module": "Data.Binding.Hobbits.QQ",
        "fct-package": "hobbits",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Data-Binding-Hobbits-QQ.html#clP",
        "fct-type": "function",
        "title": "clP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits QQ",
        "module": "Data.Binding.Hobbits.QQ",
        "name": "clP",
        "normalized": "",
        "package": "hobbits",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-QQ.html#v:nuP",
      "description": {
        "fct-module": "Data.Binding.Hobbits.QQ",
        "fct-package": "hobbits",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Data-Binding-Hobbits-QQ.html#nuP",
        "fct-type": "function",
        "title": "nuP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binding Hobbits QQ",
        "module": "Data.Binding.Hobbits.QQ",
        "name": "nuP",
        "normalized": "",
        "package": "hobbits",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library implements multi-bindings as described in the paper\n E. Westbrook, N. Frisby, P. Brauner, \"Hobbits for Haskell: A Library for\n Higher-Order Encodings in Functional Programming Languages\".\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binding.Hobbits",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Binding-Hobbits.html",
        "fct-type": "module",
        "title": "Hobbits"
      },
      "index": {
        "description": "This library implements multi-bindings as described in the paper Westbrook Frisby Brauner Hobbits for Haskell Library for Higher-Order Encodings in Functional Programming Languages",
        "hierarchy": "Data Binding Hobbits",
        "module": "Data.Binding.Hobbits",
        "name": "Hobbits",
        "normalized": "",
        "package": "hobbits",
        "partial": "Hobbits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-List.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe type-level constructors of type lists.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.List.List",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-List-List.html",
        "fct-type": "module",
        "title": "List"
      },
      "index": {
        "description": "The type-level constructors of type lists",
        "hierarchy": "Data Type List List",
        "module": "Data.Type.List.List",
        "name": "List",
        "normalized": "",
        "package": "hobbits",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-List.html#t::-43--43-:",
      "description": {
        "fct-module": "Data.Type.List.List",
        "fct-package": "hobbits",
        "fct-signature": ":++:",
        "fct-type": "function",
        "title": ":++:"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List List",
        "module": "Data.Type.List.List",
        "name": ":++:",
        "normalized": "",
        "package": "hobbits",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-List.html#t::-62-",
      "description": {
        "fct-module": "Data.Type.List.List",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-List-List.html#%3A%3E",
        "fct-type": "data",
        "title": ":\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List List",
        "module": "Data.Type.List.List",
        "name": ":\u003e",
        "normalized": "",
        "package": "hobbits",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-List.html#t:Nil",
      "description": {
        "fct-module": "Data.Type.List.List",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-List-List.html#Nil",
        "fct-type": "data",
        "title": "Nil"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List List",
        "module": "Data.Type.List.List",
        "name": "Nil",
        "normalized": "",
        "package": "hobbits",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-List.html#v:proxyCons",
      "description": {
        "fct-module": "Data.Type.List.List",
        "fct-package": "hobbits",
        "fct-signature": "Proxy r -\u003e f a -\u003e Proxy (r :\u003e a)",
        "fct-source": "src/Data-Type-List-List.html#proxyCons",
        "fct-type": "function",
        "title": "proxyCons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List List",
        "module": "Data.Type.List.List",
        "name": "proxyCons",
        "normalized": "Proxy a-\u003eb c-\u003eProxy(a c)",
        "package": "hobbits",
        "partial": "Cons",
        "signature": "Proxy r-\u003ef a-\u003eProxy(r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVectors indexed by a type list\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-List-Map.html",
        "fct-type": "module",
        "title": "Map"
      },
      "index": {
        "description": "Vectors indexed by type list",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "Map",
        "normalized": "",
        "package": "hobbits",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#t:MapC",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMapC f c\u003c/code\u003e is a vector with exactly one element of type \u003ccode\u003ef a\u003c/code\u003e for\n  each type \u003ccode\u003ea\u003c/code\u003e in the type list \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-List-Map.html#MapC",
        "fct-type": "data",
        "title": "MapC"
      },
      "index": {
        "description": "MapC is vector with exactly one element of type for each type in the type list",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "MapC",
        "normalized": "",
        "package": "hobbits",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v::-62-",
      "description": {
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "MapC f c -\u003e f a -\u003e MapC f (c :\u003e a)",
        "fct-source": "src/Data-Type-List-Map.html#MapC",
        "fct-type": "function",
        "title": ":\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": ":\u003e",
        "normalized": "MapC a b-\u003ea c-\u003eMapC a(b c)",
        "package": "hobbits",
        "partial": "",
        "signature": "MapC f c-\u003ef a-\u003eMapC f(c a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:Nil",
      "description": {
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "MapC f Nil",
        "fct-source": "src/Data-Type-List-Map.html#MapC",
        "fct-type": "function",
        "title": "Nil"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "Nil",
        "normalized": "",
        "package": "hobbits",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003eAppend two \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vectors.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "MapC f c1 -\u003e MapC f c2 -\u003e MapC f (c1 :++: c2)",
        "fct-source": "src/Data-Type-List-Map.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Append two MapC vectors",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "append",
        "normalized": "MapC a b-\u003eMapC a b-\u003eMapC a(b b)",
        "package": "hobbits",
        "partial": "",
        "signature": "MapC f c-\u003eMapC f c-\u003eMapC f(c c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an empty \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "MapC f Nil",
        "fct-source": "src/Data-Type-List-Map.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Create an empty MapC vector",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "empty",
        "normalized": "",
        "package": "hobbits",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLook up an element of a \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector using a \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e proof.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "Member c a -\u003e MapC f c -\u003e f a",
        "fct-source": "src/Data-Type-List-Map.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Look up an element of MapC vector using Member proof",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "lookup",
        "normalized": "Member a b-\u003eMapC c a-\u003ec b",
        "package": "hobbits",
        "partial": "",
        "signature": "Member c a-\u003eMapC f c-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:mapC",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function to all elements of a \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "(forall x.  f x -\u003e g x) -\u003e MapC f c -\u003e MapC g c",
        "fct-source": "src/Data-Type-List-Map.html#mapC",
        "fct-type": "function",
        "title": "mapC"
      },
      "index": {
        "description": "Map function to all elements of MapC vector",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "mapC",
        "normalized": "(a b c d-\u003ee d)-\u003eMapC c f-\u003eMapC e f",
        "package": "hobbits",
        "partial": "",
        "signature": "(forall x. f x-\u003eg x)-\u003eMapC f c-\u003eMapC g c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:mapC2",
      "description": {
        "fct-descr": "\u003cp\u003eMap a binary function to all pairs of elements of two \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vectors.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "(forall x.  f x -\u003e g x -\u003e h x) -\u003e MapC f c -\u003e MapC g c -\u003e MapC h c",
        "fct-source": "src/Data-Type-List-Map.html#mapC2",
        "fct-type": "function",
        "title": "mapC2"
      },
      "index": {
        "description": "Map binary function to all pairs of elements of two MapC vectors",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "mapC2",
        "normalized": "(a b c d-\u003ee d-\u003ef d)-\u003eMapC c g-\u003eMapC e g-\u003eMapC f g",
        "package": "hobbits",
        "partial": "",
        "signature": "(forall x. f x-\u003eg x-\u003eh x)-\u003eMapC f c-\u003eMapC g c-\u003eMapC h c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:mapCToList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a MapC to a list\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "MapC (Constant a) c -\u003e [a]",
        "fct-source": "src/Data-Type-List-Map.html#mapCToList",
        "fct-type": "function",
        "title": "mapCToList"
      },
      "index": {
        "description": "Convert MapC to list",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "mapCToList",
        "normalized": "MapC(Constant a)b-\u003e[a]",
        "package": "hobbits",
        "partial": "CTo List",
        "signature": "MapC(Constant a)c-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:members",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a vector of proofs that each type in \u003ccode\u003ec\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "MapC f c -\u003e MapC (Member c) c",
        "fct-source": "src/Data-Type-List-Map.html#members",
        "fct-type": "function",
        "title": "members"
      },
      "index": {
        "description": "Create vector of proofs that each type in is Member of",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "members",
        "normalized": "MapC a b-\u003eMapC(Member b)b",
        "package": "hobbits",
        "partial": "",
        "signature": "MapC f c-\u003eMapC(Member c)c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:mkAppend",
      "description": {
        "fct-descr": "\u003cp\u003eMake an \u003ccode\u003e\u003ca\u003eAppend\u003c/a\u003e\u003c/code\u003e proof from any \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector for the second\n argument of the append.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "MapC f c2 -\u003e Append c1 c2 (c1 :++: c2)",
        "fct-source": "src/Data-Type-List-Map.html#mkAppend",
        "fct-type": "function",
        "title": "mkAppend"
      },
      "index": {
        "description": "Make an Append proof from any MapC vector for the second argument of the append",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "mkAppend",
        "normalized": "MapC a b-\u003eAppend b b(b b)",
        "package": "hobbits",
        "partial": "Append",
        "signature": "MapC f c-\u003eAppend c c(c c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:mkMonoAppend",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emkAppend\u003c/a\u003e\u003c/code\u003e that takes in a \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "Proxy c1 -\u003e MapC f c2 -\u003e Append c1 c2 (c1 :++: c2)",
        "fct-source": "src/Data-Type-List-Map.html#mkMonoAppend",
        "fct-type": "function",
        "title": "mkMonoAppend"
      },
      "index": {
        "description": "version of mkAppend that takes in Proxy argument",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "mkMonoAppend",
        "normalized": "Proxy a-\u003eMapC b a-\u003eAppend a a(a a)",
        "package": "hobbits",
        "partial": "Mono Append",
        "signature": "Proxy c-\u003eMapC f c-\u003eAppend c c(c c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:proxy",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e object for the type list of a \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "MapC f c -\u003e Proxy c",
        "fct-source": "src/Data-Type-List-Map.html#proxy",
        "fct-type": "function",
        "title": "proxy"
      },
      "index": {
        "description": "Create Proxy object for the type list of MapC vector",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "proxy",
        "normalized": "MapC a b-\u003eProxy b",
        "package": "hobbits",
        "partial": "",
        "signature": "MapC f c-\u003eProxy c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eReplace a single element of a \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "MapC f c -\u003e Member c a -\u003e f a -\u003e MapC f c",
        "fct-source": "src/Data-Type-List-Map.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "Replace single element of MapC vector",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "replace",
        "normalized": "MapC a b-\u003eMember b c-\u003ea c-\u003eMapC a b",
        "package": "hobbits",
        "partial": "",
        "signature": "MapC f c-\u003eMember c a-\u003ef a-\u003eMapC f c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a singleton \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "f a -\u003e MapC f (Nil :\u003e a)",
        "fct-source": "src/Data-Type-List-Map.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Create singleton MapC vector",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "singleton",
        "normalized": "a b-\u003eMapC a(Nil b)",
        "package": "hobbits",
        "partial": "",
        "signature": "f a-\u003eMapC f(Nil a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector into two pieces.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Map",
        "fct-package": "hobbits",
        "fct-signature": "Append c1 c2 c -\u003e MapC f c -\u003e (MapC f c1, MapC f c2)",
        "fct-source": "src/Data-Type-List-Map.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Split MapC vector into two pieces",
        "hierarchy": "Data Type List Map",
        "module": "Data.Type.List.Map",
        "name": "split",
        "normalized": "Append a a a-\u003eMapC b a-\u003e(MapC b a,MapC b a)",
        "package": "hobbits",
        "partial": "",
        "signature": "Append c c c-\u003eMapC f c-\u003e(MapC f c,MapC f c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Append.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProofs regarding a type list as an append of two others.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.List.Proof.Append",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-List-Proof-Append.html",
        "fct-type": "module",
        "title": "Append"
      },
      "index": {
        "description": "Proofs regarding type list as an append of two others",
        "hierarchy": "Data Type List Proof Append",
        "module": "Data.Type.List.Proof.Append",
        "name": "Append",
        "normalized": "",
        "package": "hobbits",
        "partial": "Append",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Append.html#t:Append",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003eAppend ctx1 ctx2 ctx\u003c/code\u003e is a \"proof\" that \u003ccode\u003ectx = ctx1 \u003ccode\u003e\u003ca\u003e:++:\u003c/a\u003e\u003c/code\u003e ctx2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Proof.Append",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-List-Proof-Append.html#Append",
        "fct-type": "data",
        "title": "Append"
      },
      "index": {
        "description": "An Append ctx1 ctx2 ctx is proof that ctx ctx1 ctx2",
        "hierarchy": "Data Type List Proof Append",
        "module": "Data.Type.List.Proof.Append",
        "name": "Append",
        "normalized": "",
        "package": "hobbits",
        "partial": "Append",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Append.html#v:Append_Base",
      "description": {
        "fct-module": "Data.Type.List.Proof.Append",
        "fct-package": "hobbits",
        "fct-signature": "Append ctx Nil ctx",
        "fct-source": "src/Data-Type-List-Proof-Append.html#Append",
        "fct-type": "function",
        "title": "Append_Base"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List Proof Append",
        "module": "Data.Type.List.Proof.Append",
        "name": "Append_Base",
        "normalized": "",
        "package": "hobbits",
        "partial": "Append Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Append.html#v:Append_Step",
      "description": {
        "fct-module": "Data.Type.List.Proof.Append",
        "fct-package": "hobbits",
        "fct-signature": "Append ctx1 ctx2 ctx -\u003e Append ctx1 (ctx2 :\u003e a) (ctx :\u003e a)",
        "fct-source": "src/Data-Type-List-Proof-Append.html#Append",
        "fct-type": "function",
        "title": "Append_Step"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List Proof Append",
        "module": "Data.Type.List.Proof.Append",
        "name": "Append_Step",
        "normalized": "Append a a a-\u003eAppend a(a b)(a b)",
        "package": "hobbits",
        "partial": "Append Step",
        "signature": "Append ctx ctx ctx-\u003eAppend ctx(ctx a)(ctx a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Append.html#v:appendPf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a proof that ctx :=: ctx1 :++: ctx2\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Proof.Append",
        "fct-package": "hobbits",
        "fct-signature": "Append ctx1 ctx2 ctx -\u003e ctx :=: (ctx1 :++: ctx2)",
        "fct-source": "src/Data-Type-List-Proof-Append.html#appendPf",
        "fct-type": "function",
        "title": "appendPf"
      },
      "index": {
        "description": "Returns proof that ctx ctx1 ctx2",
        "hierarchy": "Data Type List Proof Append",
        "module": "Data.Type.List.Proof.Append",
        "name": "appendPf",
        "normalized": "Append a a a-\u003ea(a a)",
        "package": "hobbits",
        "partial": "Pf",
        "signature": "Append ctx ctx ctx-\u003ectx(ctx ctx)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Append.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the length of an \u003ccode\u003e\u003ca\u003eAppend\u003c/a\u003e\u003c/code\u003e proof.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Proof.Append",
        "fct-package": "hobbits",
        "fct-signature": "Append ctx1 ctx2 ctx3 -\u003e Int",
        "fct-source": "src/Data-Type-List-Proof-Append.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Returns the length of an Append proof",
        "hierarchy": "Data Type List Proof Append",
        "module": "Data.Type.List.Proof.Append",
        "name": "length",
        "normalized": "Append a a a-\u003eInt",
        "package": "hobbits",
        "partial": "",
        "signature": "Append ctx ctx ctx-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Append.html#v:trans",
      "description": {
        "fct-descr": "\u003cp\u003eAppends two \u003ccode\u003e\u003ca\u003eAppend\u003c/a\u003e\u003c/code\u003e proofs.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Proof.Append",
        "fct-package": "hobbits",
        "fct-signature": "Append ctx1 ctx2 ex_ctx -\u003e Append ex_ctx ctx3 ctx -\u003e Append ctx1 (ctx2 :++: ctx3) ctx",
        "fct-source": "src/Data-Type-List-Proof-Append.html#trans",
        "fct-type": "function",
        "title": "trans"
      },
      "index": {
        "description": "Appends two Append proofs",
        "hierarchy": "Data Type List Proof Append",
        "module": "Data.Type.List.Proof.Append",
        "name": "trans",
        "normalized": "Append a a b-\u003eAppend b a a-\u003eAppend a(a a)a",
        "package": "hobbits",
        "partial": "",
        "signature": "Append ctx ctx ex_ctx-\u003eAppend ex_ctx ctx ctx-\u003eAppend ctx(ctx ctx)ctx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProofs regarding membership of a type in a type list.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.List.Proof.Member",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-List-Proof-Member.html",
        "fct-type": "module",
        "title": "Member"
      },
      "index": {
        "description": "Proofs regarding membership of type in type list",
        "hierarchy": "Data Type List Proof Member",
        "module": "Data.Type.List.Proof.Member",
        "name": "Member",
        "normalized": "",
        "package": "hobbits",
        "partial": "Member",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#t:Member",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMember ctx a\u003c/code\u003e is a \"proof\" that the type \u003ccode\u003ea\u003c/code\u003e is in the type\n  list \u003ccode\u003ectx\u003c/code\u003e, meaning that \u003ccode\u003ectx\u003c/code\u003e equals\n\u003c/p\u003e\u003cpre\u003e  t0 ':\u003e' a ':\u003e' t1 ':\u003e' ... ':\u003e' tn\n\u003c/pre\u003e\u003cp\u003efor some types \u003ccode\u003et0,t1,...,tn\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Type.List.Proof.Member",
        "fct-package": "hobbits",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-List-Proof-Member.html#Member",
        "fct-type": "data",
        "title": "Member"
      },
      "index": {
        "description": "Member ctx is proof that the type is in the type list ctx meaning that ctx equals t0 t1 tn for some types t0 t1 tn",
        "hierarchy": "Data Type List Proof Member",
        "module": "Data.Type.List.Proof.Member",
        "name": "Member",
        "normalized": "",
        "package": "hobbits",
        "partial": "Member",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#v:Member_Base",
      "description": {
        "fct-module": "Data.Type.List.Proof.Member",
        "fct-package": "hobbits",
        "fct-signature": "Member (ctx :\u003e a) a",
        "fct-source": "src/Data-Type-List-Proof-Member.html#Member",
        "fct-type": "function",
        "title": "Member_Base"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List Proof Member",
        "module": "Data.Type.List.Proof.Member",
        "name": "Member_Base",
        "normalized": "",
        "package": "hobbits",
        "partial": "Member Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#v:Member_Step",
      "description": {
        "fct-module": "Data.Type.List.Proof.Member",
        "fct-package": "hobbits",
        "fct-signature": "Member ctx a -\u003e Member (ctx :\u003e b) a",
        "fct-source": "src/Data-Type-List-Proof-Member.html#Member",
        "fct-type": "function",
        "title": "Member_Step"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List Proof Member",
        "module": "Data.Type.List.Proof.Member",
        "name": "Member_Step",
        "normalized": "Member a b-\u003eMember(a c)b",
        "package": "hobbits",
        "partial": "Member Step",
        "signature": "Member ctx a-\u003eMember(ctx b)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#v:same",
      "description": {
        "fct-module": "Data.Type.List.Proof.Member",
        "fct-package": "hobbits",
        "fct-signature": "Member r a -\u003e Member r b -\u003e Maybe (a :=: b)",
        "fct-source": "src/Data-Type-List-Proof-Member.html#same",
        "fct-type": "function",
        "title": "same"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List Proof Member",
        "module": "Data.Type.List.Proof.Member",
        "name": "same",
        "normalized": "Member a b-\u003eMember a c-\u003eMaybe(b c)",
        "package": "hobbits",
        "partial": "",
        "signature": "Member r a-\u003eMember r b-\u003eMaybe(a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#v:split",
      "description": {
        "fct-module": "Data.Type.List.Proof.Member",
        "fct-package": "hobbits",
        "fct-signature": "Append r1 r2 r -\u003e Member r a -\u003e Either (Member r1 a) (Member r2 a)",
        "fct-source": "src/Data-Type-List-Proof-Member.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List Proof Member",
        "module": "Data.Type.List.Proof.Member",
        "name": "split",
        "normalized": "Append a a a-\u003eMember a b-\u003eEither(Member a b)(Member a b)",
        "package": "hobbits",
        "partial": "",
        "signature": "Append r r r-\u003eMember r a-\u003eEither(Member r a)(Member r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#v:toEq",
      "description": {
        "fct-module": "Data.Type.List.Proof.Member",
        "fct-package": "hobbits",
        "fct-signature": "Member (Nil :\u003e a) b -\u003e b :=: a",
        "fct-source": "src/Data-Type-List-Proof-Member.html#toEq",
        "fct-type": "function",
        "title": "toEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List Proof Member",
        "module": "Data.Type.List.Proof.Member",
        "name": "toEq",
        "normalized": "Member(Nil a)b-\u003eb a",
        "package": "hobbits",
        "partial": "Eq",
        "signature": "Member(Nil a)b-\u003eb a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#v:weakenL",
      "description": {
        "fct-module": "Data.Type.List.Proof.Member",
        "fct-package": "hobbits",
        "fct-signature": "Proxy r1 -\u003e Member r2 a -\u003e Member (r1 :++: r2) a",
        "fct-source": "src/Data-Type-List-Proof-Member.html#weakenL",
        "fct-type": "function",
        "title": "weakenL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List Proof Member",
        "module": "Data.Type.List.Proof.Member",
        "name": "weakenL",
        "normalized": "Proxy a-\u003eMember a b-\u003eMember(a a)b",
        "package": "hobbits",
        "partial": "",
        "signature": "Proxy r-\u003eMember r a-\u003eMember(r r)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#v:weakenR",
      "description": {
        "fct-module": "Data.Type.List.Proof.Member",
        "fct-package": "hobbits",
        "fct-signature": "Member r1 a -\u003e Append r1 r2 r -\u003e Member r a",
        "fct-source": "src/Data-Type-List-Proof-Member.html#weakenR",
        "fct-type": "function",
        "title": "weakenR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type List Proof Member",
        "module": "Data.Type.List.Proof.Member",
        "name": "weakenR",
        "normalized": "Member a b-\u003eAppend a a a-\u003eMember a b",
        "package": "hobbits",
        "partial": "",
        "signature": "Member r a-\u003eAppend r r r-\u003eMember r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003cem\u003etype list\u003c/em\u003e contains types as elements. We use GADT proofs terms to\n establish membership and append relations. A \u003ccode\u003eData.Type.List.Map.MapC\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e\n is a vector indexed by a type list, where \u003ccode\u003ef :: * -\u003e *\u003c/code\u003e is applied to each\n type element.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.List",
        "fct-package": "hobbits",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-List.html",
        "fct-type": "module",
        "title": "List"
      },
      "index": {
        "description": "type list contains types as elements We use GADT proofs terms to establish membership and append relations Data.Type.List.Map.MapC is vector indexed by type list where is applied to each type element",
        "hierarchy": "Data Type List",
        "module": "Data.Type.List",
        "name": "List",
        "normalized": "",
        "package": "hobbits",
        "partial": "List",
        "signature": ""
      }
    }
  }
]