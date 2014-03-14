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
        "word": "hobbits"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module uses Template Haskell to distinguish closed terms, so that the\n library can trust such functions to not contain any \u003ccode\u003eName\u003c/code\u003e values in their\n closure.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "Closed",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Closed.html",
          "type": "module"
        },
        "index": {
          "description": "This module uses Template Haskell to distinguish closed terms so that the library can trust such functions to not contain any Name values in their closure",
          "hierarchy": "Data Binding Hobbits Closed",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "Closed",
          "package": "hobbits",
          "partial": "Closed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003eCl a\u003c/code\u003e represents a closed term of type \u003ccode\u003ea\u003c/code\u003e,\n  i.e., an expression of type \u003ccode\u003ea\u003c/code\u003e with no free (Haskell) variables.\n  Since this cannot be checked directly in the Haskell type system,\n  the \u003ccode\u003eCl\u003c/code\u003e data type is hidden, and the user can only create\n  closed terms using Template Haskell, through the \u003ccode\u003emkClosed\u003c/code\u003e\n  operator.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "Cl",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Internal.html#Cl",
          "type": "data"
        },
        "index": {
          "description": "The type Cl represents closed term of type i.e an expression of type with no free Haskell variables Since this cannot be checked directly in the Haskell type system the Cl data type is hidden and the user can only create closed terms using Template Haskell through the mkClosed operator",
          "hierarchy": "Data Binding Hobbits Closed",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "Cl",
          "package": "hobbits",
          "partial": "Cl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#t:Cl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eClosed = Cl\u003c/pre\u003e",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "Closed",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Closed.html#Closed",
          "type": "type"
        },
        "index": {
          "description": "Closed Cl",
          "hierarchy": "Data Binding Hobbits Closed",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "Closed",
          "package": "hobbits",
          "partial": "Closed",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#t:Closed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecl\u003c/code\u003e is used with Template Haskell quotations to create closed terms of\n type \u003ccode\u003e\u003ca\u003eCl\u003c/a\u003e\u003c/code\u003e. A quoted expression is closed if all of the names occuring in it\n are\n\u003c/p\u003e\u003cp\u003e1) bound globally or\n   2) bound within the quotation or\n   3) also of type \u003ccode\u003e\u003ca\u003eCl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "cl",
          "package": "hobbits",
          "signature": "Q Exp -\u003e Q Exp",
          "source": "src/Data-Binding-Hobbits-Closed.html#cl",
          "type": "function"
        },
        "index": {
          "description": "cl is used with Template Haskell quotations to create closed terms of type Cl quoted expression is closed if all of the names occuring in it are bound globally or bound within the quotation or also of type Cl",
          "hierarchy": "Data Binding Hobbits Closed",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "cl",
          "normalized": "Q Exp-\u003eQ Exp",
          "package": "hobbits",
          "signature": "Q Exp-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:cl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClosed terms are closed (sorry) under application.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "clApply",
          "package": "hobbits",
          "signature": "Cl (a -\u003e b) -\u003e Cl a -\u003e Cl b",
          "source": "src/Data-Binding-Hobbits-Closed.html#clApply",
          "type": "function"
        },
        "index": {
          "description": "Closed terms are closed sorry under application",
          "hierarchy": "Data Binding Hobbits Closed",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "clApply",
          "normalized": "Cl(a-\u003eb)-\u003eCl a-\u003eCl b",
          "package": "hobbits",
          "partial": "Apply",
          "signature": "Cl(a-\u003eb)-\u003eCl a-\u003eCl b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:clApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003embApplyCl\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e \u003ccode\u003eb\u003c/code\u003e applies a closed function \u003ccode\u003ef\u003c/code\u003e to the body of\n multi-binding \u003ccode\u003eb\u003c/code\u003e. For example:\n\u003c/p\u003e\u003cpre\u003e mbApplyCl $(cl [| f |]) (nu $ \\n -\u003e n)   =   nu f\n\u003c/pre\u003e",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "mbApplyCl",
          "package": "hobbits",
          "signature": "Cl (a -\u003e b) -\u003e Mb ctx a -\u003e Mb ctx b",
          "source": "src/Data-Binding-Hobbits-Closed.html#mbApplyCl",
          "type": "function"
        },
        "index": {
          "description": "mbApplyCl applies closed function to the body of multi-binding For example mbApplyCl cl nu nu",
          "hierarchy": "Data Binding Hobbits Closed",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "mbApplyCl",
          "normalized": "Cl(a-\u003eb)-\u003eMb c a-\u003eMb c b",
          "package": "hobbits",
          "partial": "Apply Cl",
          "signature": "Cl(a-\u003eb)-\u003eMb ctx a-\u003eMb ctx b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:mbApplyCl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003embLiftClosed\u003c/code\u003e is safe because closed terms don't contain names.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "mbLiftClosed",
          "package": "hobbits",
          "signature": "Mb ctx (Cl a) -\u003e Cl a",
          "source": "src/Data-Binding-Hobbits-Closed.html#mbLiftClosed",
          "type": "function"
        },
        "index": {
          "description": "mbLiftClosed is safe because closed terms don contain names",
          "hierarchy": "Data Binding Hobbits Closed",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "mbLiftClosed",
          "normalized": "Mb a(Cl b)-\u003eCl b",
          "package": "hobbits",
          "partial": "Lift Closed",
          "signature": "Mb ctx(Cl a)-\u003eCl a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:mbLiftClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003emkClosed = cl\u003c/pre\u003e",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "mkClosed",
          "package": "hobbits",
          "signature": "Q Exp -\u003e Q Exp",
          "source": "src/Data-Binding-Hobbits-Closed.html#mkClosed",
          "type": "function"
        },
        "index": {
          "description": "mkClosed cl",
          "hierarchy": "Data Binding Hobbits Closed",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "mkClosed",
          "normalized": "Q Exp-\u003eQ Exp",
          "package": "hobbits",
          "partial": "Closed",
          "signature": "Q Exp-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:mkClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enoClosedNames\u003c/code\u003e encodes the hobbits guarantee that no name can escape its\n multi-binding.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "noClosedNames",
          "package": "hobbits",
          "signature": "Cl (Name a) -\u003e b",
          "source": "src/Data-Binding-Hobbits-Closed.html#noClosedNames",
          "type": "function"
        },
        "index": {
          "description": "noClosedNames encodes the hobbits guarantee that no name can escape its multi-binding",
          "hierarchy": "Data Binding Hobbits Closed",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "noClosedNames",
          "normalized": "Cl(Name a)-\u003eb",
          "package": "hobbits",
          "partial": "Closed Names",
          "signature": "Cl(Name a)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:noClosedNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Closed",
          "name": "unCl",
          "package": "hobbits",
          "signature": "Cl a -\u003e a",
          "source": "src/Data-Binding-Hobbits-Internal.html#unCl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Closed",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "unCl",
          "normalized": "Cl a-\u003ea",
          "package": "hobbits",
          "partial": "Cl",
          "signature": "Cl a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:unCl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eunClosed = unCl\u003c/pre\u003e",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "unClosed",
          "package": "hobbits",
          "signature": "Cl a -\u003e a",
          "source": "src/Data-Binding-Hobbits-Closed.html#unClosed",
          "type": "function"
        },
        "index": {
          "description": "unClosed unCl",
          "hierarchy": "Data Binding Hobbits Closed",
          "module": "Data.Binding.Hobbits.Closed",
          "name": "unClosed",
          "normalized": "Cl a-\u003ea",
          "package": "hobbits",
          "partial": "Closed",
          "signature": "Cl a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Closed.html#v:unClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "Examples",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "Examples",
          "package": "hobbits",
          "partial": "Examples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "ex1",
          "package": "hobbits",
          "signature": "Term ((b1 -\u003e b) -\u003e b1 -\u003e b)",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#ex1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "ex1",
          "normalized": "Term((a-\u003ea)-\u003ea-\u003ea)",
          "package": "hobbits",
          "signature": "Term((b-\u003eb)-\u003eb-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:ex1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "ex2",
          "package": "hobbits",
          "signature": "Term ((((b2 -\u003e b1) -\u003e b2 -\u003e b1) -\u003e b) -\u003e b)",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#ex2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "ex2",
          "normalized": "Term((((a-\u003ea)-\u003ea-\u003ea)-\u003ea)-\u003ea)",
          "package": "hobbits",
          "signature": "Term((((b-\u003eb)-\u003eb-\u003eb)-\u003eb)-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:ex2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "ex3",
          "package": "hobbits",
          "signature": "Term (b3 -\u003e (((b3 -\u003e b2 -\u003e b1) -\u003e b2 -\u003e b1) -\u003e b) -\u003e b)",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#ex3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "ex3",
          "normalized": "Term(a-\u003e(((a-\u003ea-\u003ea)-\u003ea-\u003ea)-\u003ea)-\u003ea)",
          "package": "hobbits",
          "signature": "Term(b-\u003e(((b-\u003eb-\u003eb)-\u003eb-\u003eb)-\u003eb)-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:ex3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "ex4",
          "package": "hobbits",
          "signature": "Term (((b1 -\u003e b) -\u003e b2 -\u003e b) -\u003e (((b1 -\u003e b) -\u003e b2 -\u003e b) -\u003e b2 -\u003e b1) -\u003e b2 -\u003e b1)",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#ex4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "ex4",
          "normalized": "Term(((a-\u003ea)-\u003ea-\u003ea)-\u003e(((a-\u003ea)-\u003ea-\u003ea)-\u003ea-\u003ea)-\u003ea-\u003ea)",
          "package": "hobbits",
          "signature": "Term(((b-\u003eb)-\u003eb-\u003eb)-\u003e(((b-\u003eb)-\u003eb-\u003eb)-\u003eb-\u003eb)-\u003eb-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:ex4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "ex5",
          "package": "hobbits",
          "signature": "Term (((b2 -\u003e b1) -\u003e b) -\u003e (b2 -\u003e b1) -\u003e b)",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#ex5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "ex5",
          "normalized": "Term(((a-\u003ea)-\u003ea)-\u003e(a-\u003ea)-\u003ea)",
          "package": "hobbits",
          "signature": "Term(((b-\u003eb)-\u003eb)-\u003e(b-\u003eb)-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:ex5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "ex6",
          "package": "hobbits",
          "signature": "Binding (L ((b -\u003e b) -\u003e a)) (Term a)",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#ex6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "ex6",
          "normalized": "Binding(L((a-\u003ea)-\u003eb))(Term b)",
          "package": "hobbits",
          "signature": "Binding(L((b-\u003eb)-\u003ea))(Term a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:ex6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "ex7",
          "package": "hobbits",
          "signature": "Binding (L ((b2 -\u003e b2) -\u003e b1)) (Term ((b1 -\u003e b) -\u003e b))",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#ex7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "ex7",
          "normalized": "Binding(L((a-\u003ea)-\u003ea))(Term((a-\u003ea)-\u003ea))",
          "package": "hobbits",
          "signature": "Binding(L((b-\u003eb)-\u003eb))(Term((b-\u003eb)-\u003eb))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:ex7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "exP",
          "package": "hobbits",
          "signature": "Term (((b1 -\u003e b1) -\u003e b) -\u003e (b1 -\u003e b1) -\u003e b)",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#exP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Examples",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Examples",
          "name": "exP",
          "normalized": "Term(((a-\u003ea)-\u003ea)-\u003e(a-\u003ea)-\u003ea)",
          "package": "hobbits",
          "signature": "Term(((b-\u003eb)-\u003eb)-\u003e(b-\u003eb)-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Examples.html#v:exP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Terms",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Terms",
          "package": "hobbits",
          "partial": "Terms",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "D",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#D",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "D",
          "package": "hobbits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#t:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "DTerm",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#DTerm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "DTerm",
          "package": "hobbits",
          "partial": "DTerm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#t:DTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Decl",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Decl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Decl",
          "package": "hobbits",
          "partial": "Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#t:Decl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Decls",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Decls",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Decls",
          "package": "hobbits",
          "partial": "Decls",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#t:Decls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "L",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#L",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "L",
          "package": "hobbits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#t:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Term",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Term",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Term",
          "package": "hobbits",
          "partial": "Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "App",
          "package": "hobbits",
          "signature": "Term (b -\u003e a) -\u003e Term b -\u003e Term a",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "App",
          "normalized": "Term(a-\u003eb)-\u003eTerm a-\u003eTerm b",
          "package": "hobbits",
          "partial": "App",
          "signature": "Term(b-\u003ea)-\u003eTerm b-\u003eTerm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Decl_Cons",
          "package": "hobbits",
          "signature": "Binding (L a) (Decl b) -\u003e Decl (a -\u003e b)",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Decl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Decl_Cons",
          "normalized": "Binding(L a)(Decl b)-\u003eDecl(a-\u003eb)",
          "package": "hobbits",
          "partial": "Decl Cons",
          "signature": "Binding(L a)(Decl b)-\u003eDecl(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:Decl_Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Decl_One",
          "package": "hobbits",
          "signature": "Binding (L a) (DTerm b) -\u003e Decl (a -\u003e b)",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Decl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Decl_One",
          "normalized": "Binding(L a)(DTerm b)-\u003eDecl(a-\u003eb)",
          "package": "hobbits",
          "partial": "Decl One",
          "signature": "Binding(L a)(DTerm b)-\u003eDecl(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:Decl_One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Decls_Base",
          "package": "hobbits",
          "signature": "DTerm a -\u003e Decls a",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Decls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Decls_Base",
          "normalized": "DTerm a-\u003eDecls a",
          "package": "hobbits",
          "partial": "Decls Base",
          "signature": "DTerm a-\u003eDecls a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:Decls_Base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Decls_Cons",
          "package": "hobbits",
          "signature": "Decl b -\u003e Binding (D b) (Decls a) -\u003e Decls a",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Decls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Decls_Cons",
          "normalized": "Decl a-\u003eBinding(D a)(Decls b)-\u003eDecls b",
          "package": "hobbits",
          "partial": "Decls Cons",
          "signature": "Decl b-\u003eBinding(D b)(Decls a)-\u003eDecls a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:Decls_Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Lam",
          "package": "hobbits",
          "signature": "Binding (L b) (Term a) -\u003e Term (b -\u003e a)",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Lam",
          "normalized": "Binding(L a)(Term b)-\u003eTerm(a-\u003eb)",
          "package": "hobbits",
          "partial": "Lam",
          "signature": "Binding(L b)(Term a)-\u003eTerm(b-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:Lam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "TApp",
          "package": "hobbits",
          "signature": "DTerm (a -\u003e b) -\u003e DTerm a -\u003e DTerm b",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#DTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "TApp",
          "normalized": "DTerm(a-\u003eb)-\u003eDTerm a-\u003eDTerm b",
          "package": "hobbits",
          "partial": "TApp",
          "signature": "DTerm(a-\u003eb)-\u003eDTerm a-\u003eDTerm b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:TApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "TDVar",
          "package": "hobbits",
          "signature": "Name (D a) -\u003e DTerm a",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#DTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "TDVar",
          "normalized": "Name(D a)-\u003eDTerm a",
          "package": "hobbits",
          "partial": "TDVar",
          "signature": "Name(D a)-\u003eDTerm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:TDVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "TVar",
          "package": "hobbits",
          "signature": "Name (L a) -\u003e DTerm a",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#DTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "TVar",
          "normalized": "Name(L a)-\u003eDTerm a",
          "package": "hobbits",
          "partial": "TVar",
          "signature": "Name(L a)-\u003eDTerm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:TVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Var",
          "package": "hobbits",
          "signature": "Name (L a) -\u003e Term a",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "Var",
          "normalized": "Name(L a)-\u003eTerm a",
          "package": "hobbits",
          "partial": "Var",
          "signature": "Name(L a)-\u003eTerm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "lam",
          "package": "hobbits",
          "signature": "(Term a -\u003e Term b) -\u003e Term (a -\u003e b)",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#lam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting Terms",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting.Terms",
          "name": "lam",
          "normalized": "(Term a-\u003eTerm b)-\u003eTerm(a-\u003eb)",
          "package": "hobbits",
          "signature": "(Term a-\u003eTerm b)-\u003eTerm(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting-Terms.html#v:lam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe lambda lifting example from the paper E. Westbrook, N. Frisby,\n P. Brauner, \"Hobbits for Haskell: A Library for Higher-Order Encodings in\n Functional Programming Languages\".\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting",
          "name": "LambdaLifting",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting.html",
          "type": "module"
        },
        "index": {
          "description": "The lambda lifting example from the paper Westbrook Frisby Brauner Hobbits for Haskell Library for Higher-Order Encodings in Functional Programming Languages",
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting",
          "name": "LambdaLifting",
          "package": "hobbits",
          "partial": "Lambda Lifting",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting",
          "name": "lambdaLift",
          "package": "hobbits",
          "signature": "Term a -\u003e Decls a",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting.html#lambdaLift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting",
          "name": "lambdaLift",
          "normalized": "Term a-\u003eDecls a",
          "package": "hobbits",
          "partial": "Lift",
          "signature": "Term a-\u003eDecls a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting.html#v:lambdaLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting",
          "name": "mbLambdaLift",
          "package": "hobbits",
          "signature": "Mb c (Term a) -\u003e Mb c (Decls a)",
          "source": "src/Data-Binding-Hobbits-Examples-LambdaLifting.html#mbLambdaLift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Examples LambdaLifting",
          "module": "Data.Binding.Hobbits.Examples.LambdaLifting",
          "name": "mbLambdaLift",
          "normalized": "Mb a(Term b)-\u003eMb a(Decls b)",
          "package": "hobbits",
          "partial": "Lambda Lift",
          "signature": "Mb c(Term a)-\u003eMb c(Decls a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Examples-LambdaLifting.html#v:mbLambdaLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is internal to the Hobbits library, and should not be used\n directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "Internal",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This module is internal to the Hobbits library and should not be used directly",
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "Internal",
          "package": "hobbits",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003eCl a\u003c/code\u003e represents a closed term of type \u003ccode\u003ea\u003c/code\u003e,\n  i.e., an expression of type \u003ccode\u003ea\u003c/code\u003e with no free (Haskell) variables.\n  Since this cannot be checked directly in the Haskell type system,\n  the \u003ccode\u003eCl\u003c/code\u003e data type is hidden, and the user can only create\n  closed terms using Template Haskell, through the \u003ccode\u003emkClosed\u003c/code\u003e\n  operator.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "Cl",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Internal.html#Cl",
          "type": "newtype"
        },
        "index": {
          "description": "The type Cl represents closed term of type i.e an expression of type with no free Haskell variables Since this cannot be checked directly in the Haskell type system the Cl data type is hidden and the user can only create closed terms using Template Haskell through the mkClosed operator",
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "Cl",
          "package": "hobbits",
          "partial": "Cl",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#t:Cl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "ExMember",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Internal.html#ExMember",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "ExMember",
          "package": "hobbits",
          "partial": "Ex Member",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#t:ExMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "ExProxy",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Internal.html#ExProxy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "ExProxy",
          "package": "hobbits",
          "partial": "Ex Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#t:ExProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eMb ctx b\u003c/code\u003e is a multi-binding that binds exactly one name for each\n  type in \u003ccode\u003ectx\u003c/code\u003e, where \u003ccode\u003ectx\u003c/code\u003e has the form \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNil\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e:\u003e\u003c/a\u003e\u003c/code\u003e t1 \u003ccode\u003e\u003ca\u003e:\u003e\u003c/a\u003e\u003c/code\u003e ... \u003ccode\u003e\u003ca\u003e:\u003e\u003c/a\u003e\u003c/code\u003e tn\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "Mb",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Internal.html#Mb",
          "type": "data"
        },
        "index": {
          "description": "An Mb ctx is multi-binding that binds exactly one name for each type in ctx where ctx has the form Nil t1 tn",
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "Mb",
          "package": "hobbits",
          "partial": "Mb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#t:Mb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eName a\u003c/code\u003e is a bound name that is associated with type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "Name",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Internal.html#Name",
          "type": "newtype"
        },
        "index": {
          "description": "Name is bound name that is associated with type",
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "Name",
          "package": "hobbits",
          "partial": "Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "Cl",
          "package": "hobbits",
          "signature": "Cl",
          "source": "src/Data-Binding-Hobbits-Internal.html#Cl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "Cl",
          "package": "hobbits",
          "partial": "Cl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:Cl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "ExMember",
          "package": "hobbits",
          "signature": "Member c a -\u003e ExMember",
          "source": "src/Data-Binding-Hobbits-Internal.html#ExMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "ExMember",
          "normalized": "Member a b-\u003eExMember",
          "package": "hobbits",
          "partial": "Ex Member",
          "signature": "Member c a-\u003eExMember",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:ExMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "ExProxy",
          "package": "hobbits",
          "signature": "MapC Proxy ctx -\u003e ExProxy",
          "source": "src/Data-Binding-Hobbits-Internal.html#ExProxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "ExProxy",
          "normalized": "MapC Proxy a-\u003eExProxy",
          "package": "hobbits",
          "partial": "Ex Proxy",
          "signature": "MapC Proxy ctx-\u003eExProxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:ExProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "MkMb",
          "package": "hobbits",
          "signature": "MkMb (MapC Name ctx) b",
          "source": "src/Data-Binding-Hobbits-Internal.html#Mb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "MkMb",
          "package": "hobbits",
          "partial": "Mk Mb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:MkMb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "MkName",
          "package": "hobbits",
          "signature": "MkName Int",
          "source": "src/Data-Binding-Hobbits-Internal.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "MkName",
          "package": "hobbits",
          "partial": "Mk Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:MkName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "counter",
          "package": "hobbits",
          "signature": "IORef Int",
          "source": "src/Data-Binding-Hobbits-Internal.html#counter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "counter",
          "package": "hobbits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "fresh_name",
          "package": "hobbits",
          "signature": "a -\u003e Int",
          "source": "src/Data-Binding-Hobbits-Internal.html#fresh_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "fresh_name",
          "normalized": "a-\u003eInt",
          "package": "hobbits",
          "signature": "a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:fresh_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "fresh_names",
          "package": "hobbits",
          "signature": "MapC Name ctx -\u003e MapC Name ctx",
          "source": "src/Data-Binding-Hobbits-Internal.html#fresh_names",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "fresh_names",
          "normalized": "MapC Name a-\u003eMapC Name a",
          "package": "hobbits",
          "signature": "MapC Name ctx-\u003eMapC Name ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:fresh_names"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "memberFromLen",
          "package": "hobbits",
          "signature": "Int -\u003e ExMember",
          "source": "src/Data-Binding-Hobbits-Internal.html#memberFromLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "memberFromLen",
          "normalized": "Int-\u003eExMember",
          "package": "hobbits",
          "partial": "From Len",
          "signature": "Int-\u003eExMember",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:memberFromLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "proxyFromLen",
          "package": "hobbits",
          "signature": "Int -\u003e ExProxy",
          "source": "src/Data-Binding-Hobbits-Internal.html#proxyFromLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "proxyFromLen",
          "normalized": "Int-\u003eExProxy",
          "package": "hobbits",
          "partial": "From Len",
          "signature": "Int-\u003eExProxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:proxyFromLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "unCl",
          "package": "hobbits",
          "signature": "a",
          "source": "src/Data-Binding-Hobbits-Internal.html#Cl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "unCl",
          "package": "hobbits",
          "partial": "Cl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:unCl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "unsafeLookupC",
          "package": "hobbits",
          "signature": "Int -\u003e Member c a",
          "source": "src/Data-Binding-Hobbits-Internal.html#unsafeLookupC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "unsafeLookupC",
          "normalized": "Int-\u003eMember a b",
          "package": "hobbits",
          "partial": "Lookup",
          "signature": "Int-\u003eMember c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:unsafeLookupC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "unsafeNamesFromInts",
          "package": "hobbits",
          "signature": "[Int] -\u003e MapC Name ctx",
          "source": "src/Data-Binding-Hobbits-Internal.html#unsafeNamesFromInts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "unsafeNamesFromInts",
          "normalized": "[Int]-\u003eMapC Name a",
          "package": "hobbits",
          "partial": "Names From Ints",
          "signature": "[Int]-\u003eMapC Name ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:unsafeNamesFromInts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Internal",
          "name": "unsafeProxyFromLen",
          "package": "hobbits",
          "signature": "Int -\u003e MapC Proxy ctx",
          "source": "src/Data-Binding-Hobbits-Internal.html#unsafeProxyFromLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Internal",
          "module": "Data.Binding.Hobbits.Internal",
          "name": "unsafeProxyFromLen",
          "normalized": "Int-\u003eMapC Proxy a",
          "package": "hobbits",
          "partial": "Proxy From Len",
          "signature": "Int-\u003eMapC Proxy ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Internal.html#v:unsafeProxyFromLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the type-class Liftable for lifting\n non-binding-related data out of name-bindings. Note that this code\n is not \u003ca\u003etrusted\u003c/a\u003e, i.e., it is not part of the name-binding\n abstraction: instead, it is all written using the primitives\n exported by the Mb\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "Liftable",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Liftable.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the type-class Liftable for lifting non-binding-related data out of name-bindings Note that this code is not trusted i.e it is not part of the name-binding abstraction instead it is all written using the primitives exported by the Mb",
          "hierarchy": "Data Binding Hobbits Liftable",
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "Liftable",
          "package": "hobbits",
          "partial": "Liftable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003eLiftable a\u003c/code\u003e gives a \"lifting function\" for a, which can\n  take any data of type \u003ccode\u003ea\u003c/code\u003e out of a multi-binding of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMb\u003c/a\u003e\u003c/code\u003e ctx a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "Liftable",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Liftable.html#Liftable",
          "type": "class"
        },
        "index": {
          "description": "The class Liftable gives lifting function for which can take any data of type out of multi-binding of type Mb ctx",
          "hierarchy": "Data Binding Hobbits Liftable",
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "Liftable",
          "package": "hobbits",
          "partial": "Liftable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#t:Liftable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003eLiftable1 f\u003c/code\u003e gives a lifting function for each type \u003ccode\u003ef a\u003c/code\u003e\n  when \u003ccode\u003ea\u003c/code\u003e itself is \u003ccode\u003eLiftable\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "Liftable1",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Liftable.html#Liftable1",
          "type": "class"
        },
        "index": {
          "description": "The class Liftable1 gives lifting function for each type when itself is Liftable",
          "hierarchy": "Data Binding Hobbits Liftable",
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "Liftable1",
          "package": "hobbits",
          "partial": "Liftable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#t:Liftable1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003eLiftable2 f\u003c/code\u003e gives a lifting function for each type \u003ccode\u003ef a b\u003c/code\u003e\n  when \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e are \u003ccode\u003eLiftable\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "Liftable2",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Liftable.html#Liftable2",
          "type": "class"
        },
        "index": {
          "description": "The class Liftable2 gives lifting function for each type when and are Liftable",
          "hierarchy": "Data Binding Hobbits Liftable",
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "Liftable2",
          "package": "hobbits",
          "partial": "Liftable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#t:Liftable2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "mbLift",
          "package": "hobbits",
          "signature": "Mb ctx a -\u003e a",
          "source": "src/Data-Binding-Hobbits-Liftable.html#mbLift",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Liftable",
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "mbLift",
          "normalized": "Mb a b-\u003eb",
          "package": "hobbits",
          "partial": "Lift",
          "signature": "Mb ctx a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#v:mbLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "mbLift1",
          "package": "hobbits",
          "signature": "Mb ctx (f a) -\u003e f a",
          "source": "src/Data-Binding-Hobbits-Liftable.html#mbLift1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Liftable",
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "mbLift1",
          "normalized": "Mb a(b c)-\u003eb c",
          "package": "hobbits",
          "partial": "Lift",
          "signature": "Mb ctx(f a)-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#v:mbLift1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "mbLift2",
          "package": "hobbits",
          "signature": "Mb ctx (f a b) -\u003e f a b",
          "source": "src/Data-Binding-Hobbits-Liftable.html#mbLift2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits Liftable",
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "mbLift2",
          "normalized": "Mb a(b c d)-\u003eb c d",
          "package": "hobbits",
          "partial": "Lift",
          "signature": "Mb ctx(f a b)-\u003ef a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#v:mbLift2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a list (but not its elements) out of a multi-binding\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "mbList",
          "package": "hobbits",
          "signature": "Mb c [a] -\u003e [Mb c a]",
          "source": "src/Data-Binding-Hobbits-Liftable.html#mbList",
          "type": "function"
        },
        "index": {
          "description": "Lift list but not its elements out of multi-binding",
          "hierarchy": "Data Binding Hobbits Liftable",
          "module": "Data.Binding.Hobbits.Liftable",
          "name": "mbList",
          "normalized": "Mb a[b]-\u003e[Mb a b]",
          "package": "hobbits",
          "partial": "List",
          "signature": "Mb c[a]-\u003e[Mb c a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Liftable.html#v:mbList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines multi-bindings as the type \u003ccode\u003e\u003ca\u003eMb\u003c/a\u003e\u003c/code\u003e, as well as a number of\n operations on multi-bindings. See the paper E. Westbrook, N. Frisby,\n P. Brauner, \"Hobbits for Haskell: A Library for Higher-Order Encodings in\n Functional Programming Languages\" for more information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "Mb",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Mb.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines multi-bindings as the type Mb as well as number of operations on multi-bindings See the paper Westbrook Frisby Brauner Hobbits for Haskell Library for Higher-Order Encodings in Functional Programming Languages for more information",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "Mb",
          "package": "hobbits",
          "partial": "Mb",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eBinding\u003c/code\u003e is simply a multi-binding that binds one name\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "Binding",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Mb.html#Binding",
          "type": "type"
        },
        "index": {
          "description": "Binding is simply multi-binding that binds one name",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "Binding",
          "package": "hobbits",
          "partial": "Binding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#t:Binding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eMb ctx b\u003c/code\u003e is a multi-binding that binds exactly one name for each\n  type in \u003ccode\u003ectx\u003c/code\u003e, where \u003ccode\u003ectx\u003c/code\u003e has the form \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNil\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e:\u003e\u003c/a\u003e\u003c/code\u003e t1 \u003ccode\u003e\u003ca\u003e:\u003e\u003c/a\u003e\u003c/code\u003e ... \u003ccode\u003e\u003ca\u003e:\u003e\u003c/a\u003e\u003c/code\u003e tn\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "Mb",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Internal.html#Mb",
          "type": "data"
        },
        "index": {
          "description": "An Mb ctx is multi-binding that binds exactly one name for each type in ctx where ctx has the form Nil t1 tn",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "Mb",
          "package": "hobbits",
          "partial": "Mb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#t:Mb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eName a\u003c/code\u003e is a bound name that is associated with type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "Name",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-Internal.html#Name",
          "type": "data"
        },
        "index": {
          "description": "Name is bound name that is associated with type",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "Name",
          "package": "hobbits",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecmpName n m\u003c/code\u003e compares names \u003ccode\u003en\u003c/code\u003e and \u003ccode\u003em\u003c/code\u003e of types \u003ccode\u003eName a\u003c/code\u003e and \u003ccode\u003eName b\u003c/code\u003e,\n  respectively. When they are equal, \u003ccode\u003eSome e\u003c/code\u003e is returned for \u003ccode\u003ee\u003c/code\u003e a proof\n  of type \u003ccode\u003ea :=: b\u003c/code\u003e that their types are equal. Otherwise, \u003ccode\u003eNone\u003c/code\u003e is returned.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e nu $ \\n -\u003e nu $ \\m -\u003e cmpName n n   ==   nu $ \\n -\u003e nu $ \\m -\u003e Some Refl\n nu $ \\n -\u003e nu $ \\m -\u003e cmpName n m   ==   nu $ \\n -\u003e nu $ \\m -\u003e None\n\u003c/pre\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "cmpName",
          "package": "hobbits",
          "signature": "Name a -\u003e Name b -\u003e Maybe (a :=: b)",
          "source": "src/Data-Binding-Hobbits-Mb.html#cmpName",
          "type": "function"
        },
        "index": {
          "description": "cmpName compares names and of types Name and Name respectively When they are equal Some is returned for proof of type that their types are equal Otherwise None is returned For example nu nu cmpName nu nu Some Refl nu nu cmpName nu nu None",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "cmpName",
          "normalized": "Name a-\u003eName b-\u003eMaybe(a b)",
          "package": "hobbits",
          "partial": "Name",
          "signature": "Name a-\u003eName b-\u003eMaybe(a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:cmpName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEliminates an empty binding, returning its body. Note that\n  \u003ccode\u003eelimEmptyMb\u003c/code\u003e is the inverse of \u003ccode\u003eemptyMb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "elimEmptyMb",
          "package": "hobbits",
          "signature": "Mb Nil a -\u003e a",
          "source": "src/Data-Binding-Hobbits-Mb.html#elimEmptyMb",
          "type": "function"
        },
        "index": {
          "description": "Eliminates an empty binding returning its body Note that elimEmptyMb is the inverse of emptyMb",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "elimEmptyMb",
          "normalized": "Mb Nil a-\u003ea",
          "package": "hobbits",
          "partial": "Empty Mb",
          "signature": "Mb Nil a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:elimEmptyMb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an empty binding that binds 0 names.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "emptyMb",
          "package": "hobbits",
          "signature": "a -\u003e Mb Nil a",
          "source": "src/Data-Binding-Hobbits-Mb.html#emptyMb",
          "type": "function"
        },
        "index": {
          "description": "Creates an empty binding that binds names",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "emptyMb",
          "normalized": "a-\u003eMb Nil a",
          "package": "hobbits",
          "partial": "Mb",
          "signature": "a-\u003eMb Nil a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:emptyMb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompares two names inside bindings, taking alpha-equivalence into\n  account; i.e., if both are the \u003ccode\u003ei\u003c/code\u003eth name, or both are the same name\n  not bound in their respective multi-bindings, then they compare as\n  equal. The return values are the same as for \u003ccode\u003e\u003ca\u003ecmpName\u003c/a\u003e\u003c/code\u003e, so that\n  \u003ccode\u003eSome Refl\u003c/code\u003e is returned when the names are equal and \u003ccode\u003eNothing\u003c/code\u003e is\n  returned when they are not.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbCmpName",
          "package": "hobbits",
          "signature": "Mb c (Name a) -\u003e Mb c (Name b) -\u003e Maybe (a :=: b)",
          "source": "src/Data-Binding-Hobbits-Mb.html#mbCmpName",
          "type": "function"
        },
        "index": {
          "description": "Compares two names inside bindings taking alpha-equivalence into account i.e if both are the th name or both are the same name not bound in their respective multi-bindings then they compare as equal The return values are the same as for cmpName so that Some Refl is returned when the names are equal and Nothing is returned when they are not",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbCmpName",
          "normalized": "Mb a(Name b)-\u003eMb a(Name c)-\u003eMaybe(b c)",
          "package": "hobbits",
          "partial": "Cmp Name",
          "signature": "Mb c(Name a)-\u003eMb c(Name b)-\u003eMaybe(a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbCmpName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines a binding inside another binding into a single binding.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbCombine",
          "package": "hobbits",
          "signature": "Mb c1 (Mb c2 b) -\u003e Mb (c1 :++: c2) b",
          "source": "src/Data-Binding-Hobbits-Mb.html#mbCombine",
          "type": "function"
        },
        "index": {
          "description": "Combines binding inside another binding into single binding",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbCombine",
          "normalized": "Mb a(Mb a b)-\u003eMb(a a)b",
          "package": "hobbits",
          "partial": "Combine",
          "signature": "Mb c(Mb c b)-\u003eMb(c c)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbCombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts a \u003ccode\u003eChar\u003c/code\u003e out of a multi-binding\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbLiftChar",
          "package": "hobbits",
          "signature": "Mb c Char -\u003e Char",
          "source": "src/Data-Binding-Hobbits-Mb.html#mbLiftChar",
          "type": "function"
        },
        "index": {
          "description": "Lifts Char out of multi-binding",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbLiftChar",
          "normalized": "Mb a Char-\u003eChar",
          "package": "hobbits",
          "partial": "Lift Char",
          "signature": "Mb c Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbLiftChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts an \u003ccode\u003eInt\u003c/code\u003e out of a multi-binding\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbLiftInt",
          "package": "hobbits",
          "signature": "Mb c Int -\u003e Int",
          "source": "src/Data-Binding-Hobbits-Mb.html#mbLiftInt",
          "type": "function"
        },
        "index": {
          "description": "Lifts an Int out of multi-binding",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbLiftInt",
          "normalized": "Mb a Int-\u003eInt",
          "package": "hobbits",
          "partial": "Lift Int",
          "signature": "Mb c Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbLiftInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts an \u003ccode\u003eInteger\u003c/code\u003e out of a multi-binding\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbLiftInteger",
          "package": "hobbits",
          "signature": "Mb c Integer -\u003e Integer",
          "source": "src/Data-Binding-Hobbits-Mb.html#mbLiftInteger",
          "type": "function"
        },
        "index": {
          "description": "Lifts an Integer out of multi-binding",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbLiftInteger",
          "normalized": "Mb a Integer-\u003eInteger",
          "package": "hobbits",
          "partial": "Lift Integer",
          "signature": "Mb c Integer-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbLiftInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if a name is bound in a multi-binding, returning \u003ccode\u003eLeft mem\u003c/code\u003e\n  when the name is bound, where \u003ccode\u003emem\u003c/code\u003e is a proof that the type of the\n  name is in the type list for the multi-binding, and returning\n  \u003ccode\u003eRight n\u003c/code\u003e when the name is not bound, where \u003ccode\u003en\u003c/code\u003e is the name.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e nu $ \\n -\u003e mbNameBoundP (nu $ \\m -\u003e m)  ==  nu $ \\n -\u003e Left Member_Base\n nu $ \\n -\u003e mbNameBoundP (nu $ \\m -\u003e n)  ==  nu $ \\n -\u003e Right n\n\u003c/pre\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbNameBoundP",
          "package": "hobbits",
          "signature": "Mb ctx (Name a) -\u003e Either (Member ctx a) (Name a)",
          "source": "src/Data-Binding-Hobbits-Mb.html#mbNameBoundP",
          "type": "function"
        },
        "index": {
          "description": "Checks if name is bound in multi-binding returning Left mem when the name is bound where mem is proof that the type of the name is in the type list for the multi-binding and returning Right when the name is not bound where is the name For example nu mbNameBoundP nu nu Left Member Base nu mbNameBoundP nu nu Right",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbNameBoundP",
          "normalized": "Mb a(Name b)-\u003eEither(Member a b)(Name b)",
          "package": "hobbits",
          "partial": "Name Bound",
          "signature": "Mb ctx(Name a)-\u003eEither(Member ctx a)(Name a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbNameBoundP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparates a binding into two nested bindings. The first argument, of\n  type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAppend\u003c/a\u003e\u003c/code\u003e c1 c2 c\u003c/code\u003e, is a \"phantom\" argument to indicate how\n  the context \u003ccode\u003ec\u003c/code\u003e should be split.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbSeparate",
          "package": "hobbits",
          "signature": "Append c1 c2 c -\u003e Mb c a -\u003e Mb c1 (Mb c2 a)",
          "source": "src/Data-Binding-Hobbits-Mb.html#mbSeparate",
          "type": "function"
        },
        "index": {
          "description": "Separates binding into two nested bindings The first argument of type Append c1 c2 is phantom argument to indicate how the context should be split",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbSeparate",
          "normalized": "Append a a a-\u003eMb a b-\u003eMb a(Mb a b)",
          "package": "hobbits",
          "partial": "Separate",
          "signature": "Append c c c-\u003eMb c a-\u003eMb c(Mb c a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbSeparate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a proxy object that enumerates all the types in ctx.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbToProxy",
          "package": "hobbits",
          "signature": "Mb ctx a -\u003e MapC Proxy ctx",
          "source": "src/Data-Binding-Hobbits-Mb.html#mbToProxy",
          "type": "function"
        },
        "index": {
          "description": "Returns proxy object that enumerates all the types in ctx",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "mbToProxy",
          "normalized": "Mb a b-\u003eMapC Proxy a",
          "package": "hobbits",
          "partial": "To Proxy",
          "signature": "Mb ctx a-\u003eMapC Proxy ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:mbToProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enu f\u003c/code\u003e creates a binding which binds a fresh name \u003ccode\u003en\u003c/code\u003e and whose\n  body is the result of \u003ccode\u003ef n\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "nu",
          "package": "hobbits",
          "signature": "(Name a -\u003e b) -\u003e Binding a b",
          "source": "src/Data-Binding-Hobbits-Mb.html#nu",
          "type": "function"
        },
        "index": {
          "description": "nu creates binding which binds fresh name and whose body is the result of",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "nu",
          "normalized": "(Name a-\u003eb)-\u003eBinding a b",
          "package": "hobbits",
          "signature": "(Name a-\u003eb)-\u003eBinding a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:nu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003enuMulti p f\u003c/code\u003e creates a multi-binding of zero or more\n  names, one for each element of the vector \u003ccode\u003ep\u003c/code\u003e. The bound names are\n  passed the names to \u003ccode\u003ef\u003c/code\u003e, which returns the body of the\n  multi-binding.  The argument \u003ccode\u003ep\u003c/code\u003e, of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMb\u003c/a\u003e\u003c/code\u003e f ctx\u003c/code\u003e, acts as a\n  \"phantom\" argument, used to reify the list of types \u003ccode\u003ectx\u003c/code\u003e at the\n  term level; thus it is unimportant what the type function \u003ccode\u003ef\u003c/code\u003e is.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "nuMulti",
          "package": "hobbits",
          "signature": "MapC f ctx -\u003e (MapC Name ctx -\u003e b) -\u003e Mb ctx b",
          "source": "src/Data-Binding-Hobbits-Mb.html#nuMulti",
          "type": "function"
        },
        "index": {
          "description": "The expression nuMulti creates multi-binding of zero or more names one for each element of the vector The bound names are passed the names to which returns the body of the multi-binding The argument of type Mb ctx acts as phantom argument used to reify the list of types ctx at the term level thus it is unimportant what the type function is",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "nuMulti",
          "normalized": "MapC a b-\u003e(MapC Name b-\u003ec)-\u003eMb b c",
          "package": "hobbits",
          "partial": "Multi",
          "signature": "MapC f ctx-\u003e(MapC Name ctx-\u003eb)-\u003eMb ctx b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:nuMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003enus = nuMulti\u003c/pre\u003e",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "nus",
          "package": "hobbits",
          "signature": "MapC f ctx -\u003e (MapC Name ctx -\u003e b) -\u003e Mb ctx b",
          "source": "src/Data-Binding-Hobbits-Mb.html#nus",
          "type": "function"
        },
        "index": {
          "description": "nus nuMulti",
          "hierarchy": "Data Binding Hobbits Mb",
          "module": "Data.Binding.Hobbits.Mb",
          "name": "nus",
          "normalized": "MapC a b-\u003e(MapC Name b-\u003ec)-\u003eMb b c",
          "package": "hobbits",
          "signature": "MapC f ctx-\u003e(MapC Name ctx-\u003eb)-\u003eMb ctx b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-Mb.html#v:nus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the NuElim typeclass, which allows eliminations\n  of (multi-) bindings. The high-level idea is that, when a fresh name\n  is created with \u003ccode\u003e\u003ca\u003enu\u003c/a\u003e\u003c/code\u003e, the fresh name can also be substituted for the\n  bound name in a binding. See the documentation for \u003ccode\u003e\u003ca\u003enuWithElim1\u003c/a\u003e\u003c/code\u003e and\n  \u003ccode\u003enuWithElimMulti\u003c/code\u003e for details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "NuElim",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-NuElim.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the NuElim typeclass which allows eliminations of multi bindings The high-level idea is that when fresh name is created with nu the fresh name can also be substituted for the bound name in binding See the documentation for nuWithElim1 and nuWithElimMulti for details",
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "NuElim",
          "package": "hobbits",
          "partial": "Nu Elim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstances of the \u003ccode\u003eNuElim a\u003c/code\u003e class allow the type \u003ccode\u003ea\u003c/code\u003e to be used with\n  \u003ccode\u003enuWithElimMulti\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enuWithElim1\u003c/a\u003e\u003c/code\u003e. The structure of this class is\n  mostly hidden from the user; see \u003ccode\u003e\u003ca\u003emkNuElimData\u003c/a\u003e\u003c/code\u003e to see how to create\n  instances of the \u003ccode\u003eNuElim\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "NuElim",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-NuElim.html#NuElim",
          "type": "class"
        },
        "index": {
          "description": "Instances of the NuElim class allow the type to be used with nuWithElimMulti and nuWithElim1 The structure of this class is mostly hidden from the user see mkNuElimData to see how to create instances of the NuElim class",
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "NuElim",
          "package": "hobbits",
          "partial": "Nu Elim",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#t:NuElim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "NuElim1",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-NuElim.html#NuElim1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "NuElim1",
          "package": "hobbits",
          "partial": "Nu Elim",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#t:NuElim1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "NuElimList",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-NuElim.html#NuElimList",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "NuElimList",
          "package": "hobbits",
          "partial": "Nu Elim List",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#t:NuElimList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "NuElimProof",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-NuElim.html#NuElimProof",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "NuElimProof",
          "package": "hobbits",
          "partial": "Nu Elim Proof",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#t:NuElimProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function in a multi-binding to an argument in a\n  multi-binding that binds the same number and types of names.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "mbApply",
          "package": "hobbits",
          "signature": "Mb ctx (a -\u003e b) -\u003e Mb ctx a -\u003e Mb ctx b",
          "source": "src/Data-Binding-Hobbits-NuElim.html#mbApply",
          "type": "function"
        },
        "index": {
          "description": "Applies function in multi-binding to an argument in multi-binding that binds the same number and types of names",
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "mbApply",
          "normalized": "Mb a(b-\u003ec)-\u003eMb a b-\u003eMb a c",
          "package": "hobbits",
          "partial": "Apply",
          "signature": "Mb ctx(a-\u003eb)-\u003eMb ctx a-\u003eMb ctx b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:mbApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "mbMapAndSwap",
          "package": "hobbits",
          "signature": "(Mb ctx1 a -\u003e b) -\u003e Mb ctx1 (Mb ctx2 a) -\u003e Mb ctx2 b",
          "source": "src/Data-Binding-Hobbits-NuElim.html#mbMapAndSwap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "mbMapAndSwap",
          "normalized": "(Mb a b-\u003ec)-\u003eMb a(Mb a b)-\u003eMb a c",
          "package": "hobbits",
          "partial": "Map And Swap",
          "signature": "(Mb ctx a-\u003eb)-\u003eMb ctx(Mb ctx a)-\u003eMb ctx b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:mbMapAndSwap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a multi-binding inside another multi-binding and move the\n  outer binding inside the inner one.\n\u003c/p\u003e\u003cp\u003eNOTE: This is not yet implemented.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "mbRearrange",
          "package": "hobbits",
          "signature": "Mb ctx1 (Mb ctx2 a) -\u003e Mb ctx2 (Mb ctx1 a)",
          "source": "src/Data-Binding-Hobbits-NuElim.html#mbRearrange",
          "type": "function"
        },
        "index": {
          "description": "Take multi-binding inside another multi-binding and move the outer binding inside the inner one NOTE This is not yet implemented",
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "mbRearrange",
          "normalized": "Mb a(Mb a b)-\u003eMb a(Mb a b)",
          "package": "hobbits",
          "partial": "Rearrange",
          "signature": "Mb ctx(Mb ctx a)-\u003eMb ctx(Mb ctx a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:mbRearrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate Haskell function for creating NuElim instances for (G)ADTs.\n  Typical usage is to include the following line in the source file for\n  (G)ADT \u003ccode\u003eT\u003c/code\u003e (here assumed to have two type arguments):\n\u003c/p\u003e\u003cpre\u003e $(mkNuElimData [t| forall a b . T a b |])\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emkNuElimData\u003c/a\u003e\u003c/code\u003e call here will create an instance declaration for\n  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNuElim\u003c/a\u003e\u003c/code\u003e (T a b)\u003c/code\u003e. It is also possible to include a context in the\n  forall type; for example, if we define the \u003ccode\u003eID\u003c/code\u003e data type as follows:\n\u003c/p\u003e\u003cpre\u003e data ID a = ID a\n\u003c/pre\u003e\u003cp\u003ethen we can create a \u003ccode\u003e\u003ca\u003eNuElim\u003c/a\u003e\u003c/code\u003e instance for it like this:\n\u003c/p\u003e\u003cpre\u003e $( mkNuElimData [t| NuElim a =\u003e ID a |])\n\u003c/pre\u003e\u003cp\u003eNote that, when a context is included, the Haskell parser will add\n  the \u003ccode\u003eforall a\u003c/code\u003e for you.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "mkNuElimData",
          "package": "hobbits",
          "signature": "Q Type -\u003e Q [Dec]",
          "source": "src/Data-Binding-Hobbits-NuElim.html#mkNuElimData",
          "type": "function"
        },
        "index": {
          "description": "Template Haskell function for creating NuElim instances for ADTs Typical usage is to include the following line in the source file for ADT here assumed to have two type arguments mkNuElimData forall The mkNuElimData call here will create an instance declaration for NuElim It is also possible to include context in the forall type for example if we define the ID data type as follows data ID ID then we can create NuElim instance for it like this mkNuElimData NuElim ID Note that when context is included the Haskell parser will add the forall for you",
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "mkNuElimData",
          "normalized": "Q Type-\u003eQ[Dec]",
          "package": "hobbits",
          "partial": "Nu Elim Data",
          "signature": "Q Type-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:mkNuElimData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "nuElimListProof",
          "package": "hobbits",
          "signature": "MapC NuElimObj args",
          "source": "src/Data-Binding-Hobbits-NuElim.html#nuElimListProof",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "nuElimListProof",
          "package": "hobbits",
          "partial": "Elim List Proof",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:nuElimListProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "nuElimProof",
          "package": "hobbits",
          "signature": "NuElimProof a",
          "source": "src/Data-Binding-Hobbits-NuElim.html#nuElimProof",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "nuElimProof",
          "package": "hobbits",
          "partial": "Elim Proof",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:nuElimProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "nuElimProof1",
          "package": "hobbits",
          "signature": "NuElimObj (f a)",
          "source": "src/Data-Binding-Hobbits-NuElim.html#nuElimProof1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "nuElimProof1",
          "package": "hobbits",
          "partial": "Elim Proof",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:nuElimProof1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003enuWithElimMulti args f\u003c/code\u003e takes a sequence \u003ccode\u003eargs\u003c/code\u003e of\n  zero or more multi-bindings, each of type \u003ccode\u003eMb ctx ai\u003c/code\u003e for the same\n  type context \u003ccode\u003ectx\u003c/code\u003e of bound names, and a function \u003ccode\u003ef\u003c/code\u003e and does the\n  following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Creates a multi-binding that binds names \u003ccode\u003en1,...,nn\u003c/code\u003e, one name for\n    each type in \u003ccode\u003ectx\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e Substitutes the names \u003ccode\u003en1,...,nn\u003c/code\u003e for the names bound by each\n    argument in the \u003ccode\u003eargs\u003c/code\u003e sequence, yielding the bodies of the \u003ccode\u003eargs\u003c/code\u003e\n    (using the new name \u003ccode\u003en\u003c/code\u003e); and then\n\u003c/li\u003e\u003cli\u003e Passes the sequence \u003ccode\u003en1,...,nn\u003c/code\u003e along with the result of\n    substituting into \u003ccode\u003eargs\u003c/code\u003e to the function \u003ccode\u003ef\u003c/code\u003e, which then returns\n    the value for the newly created binding.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that the types in \u003ccode\u003eargs\u003c/code\u003e must each have a \u003ccode\u003eNuElim\u003c/code\u003e instance;\n  this is represented with the \u003ccode\u003eNuElimList\u003c/code\u003e type class.\n\u003c/p\u003e\u003cp\u003eHere are some examples:\n\u003c/p\u003e\u003cpre\u003e commuteFun :: (NuElim a, NuElim b) =\u003e Mb ctx (a -\u003e b) -\u003e Mb ctx a -\u003e Mb ctx b\n commuteFun f a =\n     nuWithElimMulti ('mbToProxy' f) ('Nil' :\u003e f :\u003e a)\n                     (\\_ ('Nil' :\u003e 'Identity' f' :\u003e 'Identity' a') -\u003e f' a')\n\u003c/pre\u003e",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "nuMultiWithElim",
          "package": "hobbits",
          "signature": "MapC f ctx -\u003e MapC (Mb ctx) args -\u003e (MapC Name ctx -\u003e MapC Identity args -\u003e b) -\u003e Mb ctx b",
          "source": "src/Data-Binding-Hobbits-NuElim.html#nuMultiWithElim",
          "type": "function"
        },
        "index": {
          "description": "The expression nuWithElimMulti args takes sequence args of zero or more multi-bindings each of type Mb ctx ai for the same type context ctx of bound names and function and does the following Creates multi-binding that binds names n1 nn one name for each type in ctx Substitutes the names n1 nn for the names bound by each argument in the args sequence yielding the bodies of the args using the new name and then Passes the sequence n1 nn along with the result of substituting into args to the function which then returns the value for the newly created binding Note that the types in args must each have NuElim instance this is represented with the NuElimList type class Here are some examples commuteFun NuElim NuElim Mb ctx Mb ctx Mb ctx commuteFun nuWithElimMulti mbToProxy Nil Nil Identity Identity",
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "nuMultiWithElim",
          "normalized": "MapC a b-\u003eMapC(Mb b)c-\u003e(MapC Name b-\u003eMapC Identity c-\u003ed)-\u003eMb b d",
          "package": "hobbits",
          "partial": "Multi With Elim",
          "signature": "MapC f ctx-\u003eMapC(Mb ctx)args-\u003e(MapC Name ctx-\u003eMapC Identity args-\u003eb)-\u003eMb ctx b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:nuMultiWithElim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003enuMultiWithElim\u003c/a\u003e\u003c/code\u003e but takes only one argument\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "nuMultiWithElim1",
          "package": "hobbits",
          "signature": "MapC f ctx -\u003e Mb ctx arg -\u003e (MapC Name ctx -\u003e arg -\u003e b) -\u003e Mb ctx b",
          "source": "src/Data-Binding-Hobbits-NuElim.html#nuMultiWithElim1",
          "type": "function"
        },
        "index": {
          "description": "Similar to nuMultiWithElim but takes only one argument",
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "nuMultiWithElim1",
          "normalized": "MapC a b-\u003eMb b c-\u003e(MapC Name b-\u003ec-\u003ed)-\u003eMb b d",
          "package": "hobbits",
          "partial": "Multi With Elim",
          "signature": "MapC f ctx-\u003eMb ctx arg-\u003e(MapC Name ctx-\u003earg-\u003eb)-\u003eMb ctx b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:nuMultiWithElim1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003enuMultiWithElim\u003c/a\u003e\u003c/code\u003e but binds only one name.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "nuWithElim",
          "package": "hobbits",
          "signature": "MapC (Mb (Nil :\u003e a)) args -\u003e (Name a -\u003e MapC Identity args -\u003e b) -\u003e Binding a b",
          "source": "src/Data-Binding-Hobbits-NuElim.html#nuWithElim",
          "type": "function"
        },
        "index": {
          "description": "Similar to nuMultiWithElim but binds only one name",
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "nuWithElim",
          "normalized": "MapC(Mb(Nil a))b-\u003e(Name a-\u003eMapC Identity b-\u003ec)-\u003eBinding a c",
          "package": "hobbits",
          "partial": "With Elim",
          "signature": "MapC(Mb(Nil a))args-\u003e(Name a-\u003eMapC Identity args-\u003eb)-\u003eBinding a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:nuWithElim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003enuMultiWithElim\u003c/a\u003e\u003c/code\u003e but takes only one argument that binds\n  a single name.\n\u003c/p\u003e",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "nuWithElim1",
          "package": "hobbits",
          "signature": "Binding a arg -\u003e (Name a -\u003e arg -\u003e b) -\u003e Binding a b",
          "source": "src/Data-Binding-Hobbits-NuElim.html#nuWithElim1",
          "type": "function"
        },
        "index": {
          "description": "Similar to nuMultiWithElim but takes only one argument that binds single name",
          "hierarchy": "Data Binding Hobbits NuElim",
          "module": "Data.Binding.Hobbits.NuElim",
          "name": "nuWithElim1",
          "normalized": "Binding a b-\u003e(Name a-\u003eb-\u003ec)-\u003eBinding a c",
          "package": "hobbits",
          "partial": "With Elim",
          "signature": "Binding a arg-\u003e(Name a-\u003earg-\u003eb)-\u003eBinding a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-NuElim.html#v:nuWithElim1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsing the haskell-src-meta package to parse Haskell patterns.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binding.Hobbits.PatternParser",
          "name": "PatternParser",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-PatternParser.html",
          "type": "module"
        },
        "index": {
          "description": "Using the haskell-src-meta package to parse Haskell patterns",
          "hierarchy": "Data Binding Hobbits PatternParser",
          "module": "Data.Binding.Hobbits.PatternParser",
          "name": "PatternParser",
          "package": "hobbits",
          "partial": "Pattern Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-PatternParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.PatternParser",
          "name": "parsePattern",
          "package": "hobbits",
          "signature": "String -\u003e String -\u003e Either String Pat",
          "source": "src/Data-Binding-Hobbits-PatternParser.html#parsePattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits PatternParser",
          "module": "Data.Binding.Hobbits.PatternParser",
          "name": "parsePattern",
          "normalized": "String-\u003eString-\u003eEither String Pat",
          "package": "hobbits",
          "partial": "Pattern",
          "signature": "String-\u003eString-\u003eEither String Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-PatternParser.html#v:parsePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines a quasi-quoter for writing patterns that match the bodies of \u003ccode\u003e\u003ca\u003eMb\u003c/a\u003e\u003c/code\u003e\n multi-bindings. Uses the haskell-src-exts parser. \u003ccode\u003e[nuP| P ]\u003c/code\u003e defines a\n pattern that will match a multi-binding whose body matches \u003ccode\u003eP\u003c/code\u003e. Any\n variables matched by \u003ccode\u003eP\u003c/code\u003e will remain inside the binding; thus, for example,\n in the pattern \u003ccode\u003e[nuP| x |]\u003c/code\u003e, \u003ccode\u003ex\u003c/code\u003e matches the entire multi-binding.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e case (nu Left) of [nuP| Left x |] -\u003e x  ==  nu id\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eclP| P |\u003c/dt\u003e\u003cdd\u003e does the same for the Cl type, and [clNuP| P |] works for\n both simultaneously: Cl (Mb ctx a).\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Data.Binding.Hobbits.QQ",
          "name": "QQ",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits-QQ.html",
          "type": "module"
        },
        "index": {
          "description": "Defines quasi-quoter for writing patterns that match the bodies of Mb multi-bindings Uses the haskell-src-exts parser nuP defines pattern that will match multi-binding whose body matches Any variables matched by will remain inside the binding thus for example in the pattern nuP matches the entire multi-binding Examples case nu Left of nuP Left nu id clP does the same for the Cl type and clNuP works for both simultaneously Cl Mb ctx",
          "hierarchy": "Data Binding Hobbits QQ",
          "module": "Data.Binding.Hobbits.QQ",
          "name": "QQ",
          "package": "hobbits",
          "partial": "QQ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-QQ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.QQ",
          "name": "clNuP",
          "package": "hobbits",
          "signature": "QuasiQuoter",
          "source": "src/Data-Binding-Hobbits-QQ.html#clNuP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits QQ",
          "module": "Data.Binding.Hobbits.QQ",
          "name": "clNuP",
          "package": "hobbits",
          "partial": "Nu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-QQ.html#v:clNuP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.QQ",
          "name": "clP",
          "package": "hobbits",
          "signature": "QuasiQuoter",
          "source": "src/Data-Binding-Hobbits-QQ.html#clP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits QQ",
          "module": "Data.Binding.Hobbits.QQ",
          "name": "clP",
          "package": "hobbits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-QQ.html#v:clP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Hobbits.QQ",
          "name": "nuP",
          "package": "hobbits",
          "signature": "QuasiQuoter",
          "source": "src/Data-Binding-Hobbits-QQ.html#nuP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binding Hobbits QQ",
          "module": "Data.Binding.Hobbits.QQ",
          "name": "nuP",
          "package": "hobbits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits-QQ.html#v:nuP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library implements multi-bindings as described in the paper\n E. Westbrook, N. Frisby, P. Brauner, \"Hobbits for Haskell: A Library for\n Higher-Order Encodings in Functional Programming Languages\".\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binding.Hobbits",
          "name": "Hobbits",
          "package": "hobbits",
          "source": "src/Data-Binding-Hobbits.html",
          "type": "module"
        },
        "index": {
          "description": "This library implements multi-bindings as described in the paper Westbrook Frisby Brauner Hobbits for Haskell Library for Higher-Order Encodings in Functional Programming Languages",
          "hierarchy": "Data Binding Hobbits",
          "module": "Data.Binding.Hobbits",
          "name": "Hobbits",
          "package": "hobbits",
          "partial": "Hobbits",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Binding-Hobbits.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe type-level constructors of type lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.List.List",
          "name": "List",
          "package": "hobbits",
          "source": "src/Data-Type-List-List.html",
          "type": "module"
        },
        "index": {
          "description": "The type-level constructors of type lists",
          "hierarchy": "Data Type List List",
          "module": "Data.Type.List.List",
          "name": "List",
          "package": "hobbits",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.List",
          "name": ":++:",
          "package": "hobbits",
          "signature": ":++:",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type List List",
          "module": "Data.Type.List.List",
          "name": ":++:",
          "package": "hobbits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-List.html#t::-43--43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.List",
          "name": ":\u003e",
          "package": "hobbits",
          "source": "src/Data-Type-List-List.html#%3A%3E",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Type List List",
          "module": "Data.Type.List.List",
          "name": ":\u003e",
          "package": "hobbits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-List.html#t::-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.List",
          "name": "Nil",
          "package": "hobbits",
          "source": "src/Data-Type-List-List.html#Nil",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Type List List",
          "module": "Data.Type.List.List",
          "name": "Nil",
          "package": "hobbits",
          "partial": "Nil",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-List.html#t:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.List",
          "name": "proxyCons",
          "package": "hobbits",
          "signature": "Proxy r -\u003e f a -\u003e Proxy (r :\u003e a)",
          "source": "src/Data-Type-List-List.html#proxyCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type List List",
          "module": "Data.Type.List.List",
          "name": "proxyCons",
          "normalized": "Proxy a-\u003eb c-\u003eProxy(a c)",
          "package": "hobbits",
          "partial": "Cons",
          "signature": "Proxy r-\u003ef a-\u003eProxy(r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-List.html#v:proxyCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVectors indexed by a type list\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.List.Map",
          "name": "Map",
          "package": "hobbits",
          "source": "src/Data-Type-List-Map.html",
          "type": "module"
        },
        "index": {
          "description": "Vectors indexed by type list",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "Map",
          "package": "hobbits",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eMapC f c\u003c/code\u003e is a vector with exactly one element of type \u003ccode\u003ef a\u003c/code\u003e for\n  each type \u003ccode\u003ea\u003c/code\u003e in the type list \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Type.List.Map",
          "name": "MapC",
          "package": "hobbits",
          "source": "src/Data-Type-List-Map.html#MapC",
          "type": "data"
        },
        "index": {
          "description": "MapC is vector with exactly one element of type for each type in the type list",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "MapC",
          "package": "hobbits",
          "partial": "Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#t:MapC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.Map",
          "name": ":\u003e",
          "package": "hobbits",
          "signature": "MapC f c -\u003e f a -\u003e MapC f (c :\u003e a)",
          "source": "src/Data-Type-List-Map.html#MapC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": ":\u003e",
          "normalized": "MapC a b-\u003ea c-\u003eMapC a(b c)",
          "package": "hobbits",
          "signature": "MapC f c-\u003ef a-\u003eMapC f(c a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v::-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.Map",
          "name": "Nil",
          "package": "hobbits",
          "signature": "MapC f Nil",
          "source": "src/Data-Type-List-Map.html#MapC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "Nil",
          "package": "hobbits",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vectors.\n\u003c/p\u003e",
          "module": "Data.Type.List.Map",
          "name": "append",
          "package": "hobbits",
          "signature": "MapC f c1 -\u003e MapC f c2 -\u003e MapC f (c1 :++: c2)",
          "source": "src/Data-Type-List-Map.html#append",
          "type": "function"
        },
        "index": {
          "description": "Append two MapC vectors",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "append",
          "normalized": "MapC a b-\u003eMapC a b-\u003eMapC a(b b)",
          "package": "hobbits",
          "signature": "MapC f c-\u003eMapC f c-\u003eMapC f(c c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e",
          "module": "Data.Type.List.Map",
          "name": "empty",
          "package": "hobbits",
          "signature": "MapC f Nil",
          "source": "src/Data-Type-List-Map.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Create an empty MapC vector",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "empty",
          "package": "hobbits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up an element of a \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector using a \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e proof.\n\u003c/p\u003e",
          "module": "Data.Type.List.Map",
          "name": "lookup",
          "package": "hobbits",
          "signature": "Member c a -\u003e MapC f c -\u003e f a",
          "source": "src/Data-Type-List-Map.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Look up an element of MapC vector using Member proof",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "lookup",
          "normalized": "Member a b-\u003eMapC c a-\u003ec b",
          "package": "hobbits",
          "signature": "Member c a-\u003eMapC f c-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function to all elements of a \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e",
          "module": "Data.Type.List.Map",
          "name": "mapC",
          "package": "hobbits",
          "signature": "(forall x.  f x -\u003e g x) -\u003e MapC f c -\u003e MapC g c",
          "source": "src/Data-Type-List-Map.html#mapC",
          "type": "function"
        },
        "index": {
          "description": "Map function to all elements of MapC vector",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "mapC",
          "normalized": "(a b c d-\u003ee d)-\u003eMapC c f-\u003eMapC e f",
          "package": "hobbits",
          "signature": "(forall x. f x-\u003eg x)-\u003eMapC f c-\u003eMapC g c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:mapC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a binary function to all pairs of elements of two \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vectors.\n\u003c/p\u003e",
          "module": "Data.Type.List.Map",
          "name": "mapC2",
          "package": "hobbits",
          "signature": "(forall x.  f x -\u003e g x -\u003e h x) -\u003e MapC f c -\u003e MapC g c -\u003e MapC h c",
          "source": "src/Data-Type-List-Map.html#mapC2",
          "type": "function"
        },
        "index": {
          "description": "Map binary function to all pairs of elements of two MapC vectors",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "mapC2",
          "normalized": "(a b c d-\u003ee d-\u003ef d)-\u003eMapC c g-\u003eMapC e g-\u003eMapC f g",
          "package": "hobbits",
          "signature": "(forall x. f x-\u003eg x-\u003eh x)-\u003eMapC f c-\u003eMapC g c-\u003eMapC h c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:mapC2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a MapC to a list\n\u003c/p\u003e",
          "module": "Data.Type.List.Map",
          "name": "mapCToList",
          "package": "hobbits",
          "signature": "MapC (Constant a) c -\u003e [a]",
          "source": "src/Data-Type-List-Map.html#mapCToList",
          "type": "function"
        },
        "index": {
          "description": "Convert MapC to list",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "mapCToList",
          "normalized": "MapC(Constant a)b-\u003e[a]",
          "package": "hobbits",
          "partial": "CTo List",
          "signature": "MapC(Constant a)c-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:mapCToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a vector of proofs that each type in \u003ccode\u003ec\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Type.List.Map",
          "name": "members",
          "package": "hobbits",
          "signature": "MapC f c -\u003e MapC (Member c) c",
          "source": "src/Data-Type-List-Map.html#members",
          "type": "function"
        },
        "index": {
          "description": "Create vector of proofs that each type in is Member of",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "members",
          "normalized": "MapC a b-\u003eMapC(Member b)b",
          "package": "hobbits",
          "signature": "MapC f c-\u003eMapC(Member c)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:members"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an \u003ccode\u003e\u003ca\u003eAppend\u003c/a\u003e\u003c/code\u003e proof from any \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector for the second\n argument of the append.\n\u003c/p\u003e",
          "module": "Data.Type.List.Map",
          "name": "mkAppend",
          "package": "hobbits",
          "signature": "MapC f c2 -\u003e Append c1 c2 (c1 :++: c2)",
          "source": "src/Data-Type-List-Map.html#mkAppend",
          "type": "function"
        },
        "index": {
          "description": "Make an Append proof from any MapC vector for the second argument of the append",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "mkAppend",
          "normalized": "MapC a b-\u003eAppend b b(b b)",
          "package": "hobbits",
          "partial": "Append",
          "signature": "MapC f c-\u003eAppend c c(c c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:mkAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emkAppend\u003c/a\u003e\u003c/code\u003e that takes in a \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Data.Type.List.Map",
          "name": "mkMonoAppend",
          "package": "hobbits",
          "signature": "Proxy c1 -\u003e MapC f c2 -\u003e Append c1 c2 (c1 :++: c2)",
          "source": "src/Data-Type-List-Map.html#mkMonoAppend",
          "type": "function"
        },
        "index": {
          "description": "version of mkAppend that takes in Proxy argument",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "mkMonoAppend",
          "normalized": "Proxy a-\u003eMapC b a-\u003eAppend a a(a a)",
          "package": "hobbits",
          "partial": "Mono Append",
          "signature": "Proxy c-\u003eMapC f c-\u003eAppend c c(c c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:mkMonoAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e object for the type list of a \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e",
          "module": "Data.Type.List.Map",
          "name": "proxy",
          "package": "hobbits",
          "signature": "MapC f c -\u003e Proxy c",
          "source": "src/Data-Type-List-Map.html#proxy",
          "type": "function"
        },
        "index": {
          "description": "Create Proxy object for the type list of MapC vector",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "proxy",
          "normalized": "MapC a b-\u003eProxy b",
          "package": "hobbits",
          "signature": "MapC f c-\u003eProxy c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a single element of a \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e",
          "module": "Data.Type.List.Map",
          "name": "replace",
          "package": "hobbits",
          "signature": "MapC f c -\u003e Member c a -\u003e f a -\u003e MapC f c",
          "source": "src/Data-Type-List-Map.html#replace",
          "type": "function"
        },
        "index": {
          "description": "Replace single element of MapC vector",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "replace",
          "normalized": "MapC a b-\u003eMember b c-\u003ea c-\u003eMapC a b",
          "package": "hobbits",
          "signature": "MapC f c-\u003eMember c a-\u003ef a-\u003eMapC f c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a singleton \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e",
          "module": "Data.Type.List.Map",
          "name": "singleton",
          "package": "hobbits",
          "signature": "f a -\u003e MapC f (Nil :\u003e a)",
          "source": "src/Data-Type-List-Map.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create singleton MapC vector",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "singleton",
          "normalized": "a b-\u003eMapC a(Nil b)",
          "package": "hobbits",
          "signature": "f a-\u003eMapC f(Nil a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a \u003ccode\u003e\u003ca\u003eMapC\u003c/a\u003e\u003c/code\u003e vector into two pieces.\n\u003c/p\u003e",
          "module": "Data.Type.List.Map",
          "name": "split",
          "package": "hobbits",
          "signature": "Append c1 c2 c -\u003e MapC f c -\u003e (MapC f c1, MapC f c2)",
          "source": "src/Data-Type-List-Map.html#split",
          "type": "function"
        },
        "index": {
          "description": "Split MapC vector into two pieces",
          "hierarchy": "Data Type List Map",
          "module": "Data.Type.List.Map",
          "name": "split",
          "normalized": "Append a a a-\u003eMapC b a-\u003e(MapC b a,MapC b a)",
          "package": "hobbits",
          "signature": "Append c c c-\u003eMapC f c-\u003e(MapC f c,MapC f c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Map.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProofs regarding a type list as an append of two others.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.List.Proof.Append",
          "name": "Append",
          "package": "hobbits",
          "source": "src/Data-Type-List-Proof-Append.html",
          "type": "module"
        },
        "index": {
          "description": "Proofs regarding type list as an append of two others",
          "hierarchy": "Data Type List Proof Append",
          "module": "Data.Type.List.Proof.Append",
          "name": "Append",
          "package": "hobbits",
          "partial": "Append",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Append.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eAppend ctx1 ctx2 ctx\u003c/code\u003e is a \"proof\" that \u003ccode\u003ectx = ctx1 \u003ccode\u003e\u003ca\u003e:++:\u003c/a\u003e\u003c/code\u003e ctx2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Type.List.Proof.Append",
          "name": "Append",
          "package": "hobbits",
          "source": "src/Data-Type-List-Proof-Append.html#Append",
          "type": "data"
        },
        "index": {
          "description": "An Append ctx1 ctx2 ctx is proof that ctx ctx1 ctx2",
          "hierarchy": "Data Type List Proof Append",
          "module": "Data.Type.List.Proof.Append",
          "name": "Append",
          "package": "hobbits",
          "partial": "Append",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Append.html#t:Append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.Proof.Append",
          "name": "Append_Base",
          "package": "hobbits",
          "signature": "Append ctx Nil ctx",
          "source": "src/Data-Type-List-Proof-Append.html#Append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type List Proof Append",
          "module": "Data.Type.List.Proof.Append",
          "name": "Append_Base",
          "package": "hobbits",
          "partial": "Append Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Append.html#v:Append_Base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.Proof.Append",
          "name": "Append_Step",
          "package": "hobbits",
          "signature": "Append ctx1 ctx2 ctx -\u003e Append ctx1 (ctx2 :\u003e a) (ctx :\u003e a)",
          "source": "src/Data-Type-List-Proof-Append.html#Append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type List Proof Append",
          "module": "Data.Type.List.Proof.Append",
          "name": "Append_Step",
          "normalized": "Append a a a-\u003eAppend a(a b)(a b)",
          "package": "hobbits",
          "partial": "Append Step",
          "signature": "Append ctx ctx ctx-\u003eAppend ctx(ctx a)(ctx a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Append.html#v:Append_Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a proof that ctx :=: ctx1 :++: ctx2\n\u003c/p\u003e",
          "module": "Data.Type.List.Proof.Append",
          "name": "appendPf",
          "package": "hobbits",
          "signature": "Append ctx1 ctx2 ctx -\u003e ctx :=: (ctx1 :++: ctx2)",
          "source": "src/Data-Type-List-Proof-Append.html#appendPf",
          "type": "function"
        },
        "index": {
          "description": "Returns proof that ctx ctx1 ctx2",
          "hierarchy": "Data Type List Proof Append",
          "module": "Data.Type.List.Proof.Append",
          "name": "appendPf",
          "normalized": "Append a a a-\u003ea(a a)",
          "package": "hobbits",
          "partial": "Pf",
          "signature": "Append ctx ctx ctx-\u003ectx(ctx ctx)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Append.html#v:appendPf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the length of an \u003ccode\u003e\u003ca\u003eAppend\u003c/a\u003e\u003c/code\u003e proof.\n\u003c/p\u003e",
          "module": "Data.Type.List.Proof.Append",
          "name": "length",
          "package": "hobbits",
          "signature": "Append ctx1 ctx2 ctx3 -\u003e Int",
          "source": "src/Data-Type-List-Proof-Append.html#length",
          "type": "function"
        },
        "index": {
          "description": "Returns the length of an Append proof",
          "hierarchy": "Data Type List Proof Append",
          "module": "Data.Type.List.Proof.Append",
          "name": "length",
          "normalized": "Append a a a-\u003eInt",
          "package": "hobbits",
          "signature": "Append ctx ctx ctx-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Append.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends two \u003ccode\u003e\u003ca\u003eAppend\u003c/a\u003e\u003c/code\u003e proofs.\n\u003c/p\u003e",
          "module": "Data.Type.List.Proof.Append",
          "name": "trans",
          "package": "hobbits",
          "signature": "Append ctx1 ctx2 ex_ctx -\u003e Append ex_ctx ctx3 ctx -\u003e Append ctx1 (ctx2 :++: ctx3) ctx",
          "source": "src/Data-Type-List-Proof-Append.html#trans",
          "type": "function"
        },
        "index": {
          "description": "Appends two Append proofs",
          "hierarchy": "Data Type List Proof Append",
          "module": "Data.Type.List.Proof.Append",
          "name": "trans",
          "normalized": "Append a a b-\u003eAppend b a a-\u003eAppend a(a a)a",
          "package": "hobbits",
          "signature": "Append ctx ctx ex_ctx-\u003eAppend ex_ctx ctx ctx-\u003eAppend ctx(ctx ctx)ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Append.html#v:trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProofs regarding membership of a type in a type list.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.List.Proof.Member",
          "name": "Member",
          "package": "hobbits",
          "source": "src/Data-Type-List-Proof-Member.html",
          "type": "module"
        },
        "index": {
          "description": "Proofs regarding membership of type in type list",
          "hierarchy": "Data Type List Proof Member",
          "module": "Data.Type.List.Proof.Member",
          "name": "Member",
          "package": "hobbits",
          "partial": "Member",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eMember ctx a\u003c/code\u003e is a \"proof\" that the type \u003ccode\u003ea\u003c/code\u003e is in the type\n  list \u003ccode\u003ectx\u003c/code\u003e, meaning that \u003ccode\u003ectx\u003c/code\u003e equals\n\u003c/p\u003e\u003cpre\u003e  t0 ':\u003e' a ':\u003e' t1 ':\u003e' ... ':\u003e' tn\n\u003c/pre\u003e\u003cp\u003efor some types \u003ccode\u003et0,t1,...,tn\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Type.List.Proof.Member",
          "name": "Member",
          "package": "hobbits",
          "source": "src/Data-Type-List-Proof-Member.html#Member",
          "type": "data"
        },
        "index": {
          "description": "Member ctx is proof that the type is in the type list ctx meaning that ctx equals t0 t1 tn for some types t0 t1 tn",
          "hierarchy": "Data Type List Proof Member",
          "module": "Data.Type.List.Proof.Member",
          "name": "Member",
          "package": "hobbits",
          "partial": "Member",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#t:Member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.Proof.Member",
          "name": "Member_Base",
          "package": "hobbits",
          "signature": "Member (ctx :\u003e a) a",
          "source": "src/Data-Type-List-Proof-Member.html#Member",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type List Proof Member",
          "module": "Data.Type.List.Proof.Member",
          "name": "Member_Base",
          "package": "hobbits",
          "partial": "Member Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#v:Member_Base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.Proof.Member",
          "name": "Member_Step",
          "package": "hobbits",
          "signature": "Member ctx a -\u003e Member (ctx :\u003e b) a",
          "source": "src/Data-Type-List-Proof-Member.html#Member",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type List Proof Member",
          "module": "Data.Type.List.Proof.Member",
          "name": "Member_Step",
          "normalized": "Member a b-\u003eMember(a c)b",
          "package": "hobbits",
          "partial": "Member Step",
          "signature": "Member ctx a-\u003eMember(ctx b)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#v:Member_Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.Proof.Member",
          "name": "same",
          "package": "hobbits",
          "signature": "Member r a -\u003e Member r b -\u003e Maybe (a :=: b)",
          "source": "src/Data-Type-List-Proof-Member.html#same",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type List Proof Member",
          "module": "Data.Type.List.Proof.Member",
          "name": "same",
          "normalized": "Member a b-\u003eMember a c-\u003eMaybe(b c)",
          "package": "hobbits",
          "signature": "Member r a-\u003eMember r b-\u003eMaybe(a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#v:same"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.Proof.Member",
          "name": "split",
          "package": "hobbits",
          "signature": "Append r1 r2 r -\u003e Member r a -\u003e Either (Member r1 a) (Member r2 a)",
          "source": "src/Data-Type-List-Proof-Member.html#split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type List Proof Member",
          "module": "Data.Type.List.Proof.Member",
          "name": "split",
          "normalized": "Append a a a-\u003eMember a b-\u003eEither(Member a b)(Member a b)",
          "package": "hobbits",
          "signature": "Append r r r-\u003eMember r a-\u003eEither(Member r a)(Member r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.Proof.Member",
          "name": "toEq",
          "package": "hobbits",
          "signature": "Member (Nil :\u003e a) b -\u003e b :=: a",
          "source": "src/Data-Type-List-Proof-Member.html#toEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type List Proof Member",
          "module": "Data.Type.List.Proof.Member",
          "name": "toEq",
          "normalized": "Member(Nil a)b-\u003eb a",
          "package": "hobbits",
          "partial": "Eq",
          "signature": "Member(Nil a)b-\u003eb a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#v:toEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.Proof.Member",
          "name": "weakenL",
          "package": "hobbits",
          "signature": "Proxy r1 -\u003e Member r2 a -\u003e Member (r1 :++: r2) a",
          "source": "src/Data-Type-List-Proof-Member.html#weakenL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type List Proof Member",
          "module": "Data.Type.List.Proof.Member",
          "name": "weakenL",
          "normalized": "Proxy a-\u003eMember a b-\u003eMember(a a)b",
          "package": "hobbits",
          "signature": "Proxy r-\u003eMember r a-\u003eMember(r r)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#v:weakenL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.List.Proof.Member",
          "name": "weakenR",
          "package": "hobbits",
          "signature": "Member r1 a -\u003e Append r1 r2 r -\u003e Member r a",
          "source": "src/Data-Type-List-Proof-Member.html#weakenR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type List Proof Member",
          "module": "Data.Type.List.Proof.Member",
          "name": "weakenR",
          "normalized": "Member a b-\u003eAppend a a a-\u003eMember a b",
          "package": "hobbits",
          "signature": "Member r a-\u003eAppend r r r-\u003eMember r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List-Proof-Member.html#v:weakenR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003cem\u003etype list\u003c/em\u003e contains types as elements. We use GADT proofs terms to\n establish membership and append relations. A \u003ccode\u003eData.Type.List.Map.MapC\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e\n is a vector indexed by a type list, where \u003ccode\u003ef :: * -\u003e *\u003c/code\u003e is applied to each\n type element.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.List",
          "name": "List",
          "package": "hobbits",
          "source": "src/Data-Type-List.html",
          "type": "module"
        },
        "index": {
          "description": "type list contains types as elements We use GADT proofs terms to establish membership and append relations Data.Type.List.Map.MapC is vector indexed by type list where is applied to each type element",
          "hierarchy": "Data Type List",
          "module": "Data.Type.List",
          "name": "List",
          "package": "hobbits",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hobbits/docs/Data-Type-List.html#"
      }
    }
  ]
]