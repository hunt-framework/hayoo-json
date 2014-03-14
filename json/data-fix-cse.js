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
        "word": "data-fix-cse"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements common subexpression elimination (CSE) with hashconsig algorithm as described in\n the paper 'Implementing Explicit and Finding Implicit Sharing in EDSLs' by Oleg Kiselyov. \n You can define your datatype as a fixpoint type. Then the only thing you need to perform CSE\n is to define an instance of the class \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e for your datatype.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Fix.Cse",
          "name": "Cse",
          "package": "data-fix-cse",
          "source": "src/Data-Fix-Cse.html",
          "type": "module"
        },
        "index": {
          "description": "Implements common subexpression elimination CSE with hashconsig algorithm as described in the paper Implementing Explicit and Finding Implicit Sharing in EDSLs by Oleg Kiselyov You can define your datatype as fixpoint type Then the only thing you need to perform CSE is to define an instance of the class Traversable for your datatype",
          "hierarchy": "Data Fix Cse",
          "module": "Data.Fix.Cse",
          "name": "Cse",
          "package": "data-fix-cse",
          "partial": "Cse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-fix-cse/docs/Data-Fix-Cse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirected acyclic graphs.\n\u003c/p\u003e",
          "module": "Data.Fix.Cse",
          "name": "Dag",
          "package": "data-fix-cse",
          "source": "src/Data-Fix-Cse.html#Dag",
          "type": "type"
        },
        "index": {
          "description": "Directed acyclic graphs",
          "hierarchy": "Data Fix Cse",
          "module": "Data.Fix.Cse",
          "name": "Dag",
          "package": "data-fix-cse",
          "partial": "Dag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-fix-cse/docs/Data-Fix-Cse.html#t:Dag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWith explicit sharing you provide user with the special function that\n encodes let-bindings for your EDSL (\u003ccode\u003e\u003ca\u003eLetBind\u003c/a\u003e\u003c/code\u003e). You should not use \u003ccode\u003e\u003ca\u003eLetLift\u003c/a\u003e\u003c/code\u003e case.\n It's reserverd for the CSE algorithm. \n\u003c/p\u003e",
          "module": "Data.Fix.Cse",
          "name": "Let",
          "package": "data-fix-cse",
          "source": "src/Data-Fix-Cse.html#Let",
          "type": "data"
        },
        "index": {
          "description": "With explicit sharing you provide user with the special function that encodes let-bindings for your EDSL LetBind You should not use LetLift case It reserverd for the CSE algorithm",
          "hierarchy": "Data Fix Cse",
          "module": "Data.Fix.Cse",
          "name": "Let",
          "package": "data-fix-cse",
          "partial": "Let",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fix-cse/docs/Data-Fix-Cse.html#t:Let"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fix.Cse",
          "name": "VarName",
          "package": "data-fix-cse",
          "source": "src/Data-Fix-Cse.html#VarName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Fix Cse",
          "module": "Data.Fix.Cse",
          "name": "VarName",
          "package": "data-fix-cse",
          "partial": "Var Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-fix-cse/docs/Data-Fix-Cse.html#t:VarName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fix.Cse",
          "name": "LetBind",
          "package": "data-fix-cse",
          "signature": "LetBind a (a -\u003e a)",
          "source": "src/Data-Fix-Cse.html#Let",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fix Cse",
          "module": "Data.Fix.Cse",
          "name": "LetBind",
          "normalized": "LetBind a(a-\u003ea)",
          "package": "data-fix-cse",
          "partial": "Let Bind",
          "signature": "LetBind a(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fix-cse/docs/Data-Fix-Cse.html#v:LetBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fix.Cse",
          "name": "LetExp",
          "package": "data-fix-cse",
          "signature": "LetExp (f a)",
          "source": "src/Data-Fix-Cse.html#Let",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fix Cse",
          "module": "Data.Fix.Cse",
          "name": "LetExp",
          "package": "data-fix-cse",
          "partial": "Let Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fix-cse/docs/Data-Fix-Cse.html#v:LetExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fix.Cse",
          "name": "LetLift",
          "package": "data-fix-cse",
          "signature": "LetLift VarName",
          "source": "src/Data-Fix-Cse.html#Let",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fix Cse",
          "module": "Data.Fix.Cse",
          "name": "LetLift",
          "package": "data-fix-cse",
          "partial": "Let Lift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fix-cse/docs/Data-Fix-Cse.html#v:LetLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms common subexpression elimination with implicit sharing.  \n\u003c/p\u003e",
          "module": "Data.Fix.Cse",
          "name": "cse",
          "package": "data-fix-cse",
          "signature": "Fix f -\u003e Dag f",
          "source": "src/Data-Fix-Cse.html#cse",
          "type": "function"
        },
        "index": {
          "description": "Performs common subexpression elimination with implicit sharing",
          "hierarchy": "Data Fix Cse",
          "module": "Data.Fix.Cse",
          "name": "cse",
          "normalized": "Fix a-\u003eDag a",
          "package": "data-fix-cse",
          "signature": "Fix f-\u003eDag f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fix-cse/docs/Data-Fix-Cse.html#v:cse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf plain lists are enough for your case. \n\u003c/p\u003e",
          "module": "Data.Fix.Cse",
          "name": "fromDag",
          "package": "data-fix-cse",
          "signature": "Dag f -\u003e [(VarName, f VarName)]",
          "source": "src/Data-Fix-Cse.html#fromDag",
          "type": "function"
        },
        "index": {
          "description": "If plain lists are enough for your case",
          "hierarchy": "Data Fix Cse",
          "module": "Data.Fix.Cse",
          "name": "fromDag",
          "normalized": "Dag a-\u003e[(VarName,a VarName)]",
          "package": "data-fix-cse",
          "partial": "Dag",
          "signature": "Dag f-\u003e[(VarName,f VarName)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fix-cse/docs/Data-Fix-Cse.html#v:fromDag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatamorphism for fixpoint types wrapped in the type \u003ccode\u003e\u003ca\u003eLet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Fix.Cse",
          "name": "letCata",
          "package": "data-fix-cse",
          "signature": "(f a -\u003e a) -\u003e Fix (Let f) -\u003e a",
          "source": "src/Data-Fix-Cse.html#letCata",
          "type": "function"
        },
        "index": {
          "description": "Catamorphism for fixpoint types wrapped in the type Let",
          "hierarchy": "Data Fix Cse",
          "module": "Data.Fix.Cse",
          "name": "letCata",
          "normalized": "(a b-\u003eb)-\u003eFix(Let a)-\u003eb",
          "package": "data-fix-cse",
          "partial": "Cata",
          "signature": "(f a-\u003ea)-\u003eFix(Let f)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fix-cse/docs/Data-Fix-Cse.html#v:letCata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic catamorphism for fixpoint types wrapped in the type \u003ccode\u003e\u003ca\u003eLet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Fix.Cse",
          "name": "letCataM",
          "package": "data-fix-cse",
          "signature": "(f a -\u003e m a) -\u003e Fix (Let f) -\u003e m a",
          "source": "src/Data-Fix-Cse.html#letCataM",
          "type": "function"
        },
        "index": {
          "description": "Monadic catamorphism for fixpoint types wrapped in the type Let",
          "hierarchy": "Data Fix Cse",
          "module": "Data.Fix.Cse",
          "name": "letCataM",
          "normalized": "(a b-\u003ec b)-\u003eFix(Let a)-\u003ec b",
          "package": "data-fix-cse",
          "partial": "Cata",
          "signature": "(f a-\u003em a)-\u003eFix(Let f)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fix-cse/docs/Data-Fix-Cse.html#v:letCataM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms common subexpression elimination with explicit sharing.  \n To make sharing explicit you can use the datatype \u003ccode\u003e\u003ca\u003eLet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Fix.Cse",
          "name": "letCse",
          "package": "data-fix-cse",
          "signature": "Fix (Let f) -\u003e Dag f",
          "source": "src/Data-Fix-Cse.html#letCse",
          "type": "function"
        },
        "index": {
          "description": "Performs common subexpression elimination with explicit sharing To make sharing explicit you can use the datatype Let",
          "hierarchy": "Data Fix Cse",
          "module": "Data.Fix.Cse",
          "name": "letCse",
          "normalized": "Fix(Let a)-\u003eDag a",
          "package": "data-fix-cse",
          "partial": "Cse",
          "signature": "Fix(Let f)-\u003eDag f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fix-cse/docs/Data-Fix-Cse.html#v:letCse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to make explicit let-bindings.\n For exampe:\n\u003c/p\u003e\u003cpre\u003e newtype T = T { unT :: Fix (Let f) }\n \n let_ :: T -\u003e (T -\u003e T) -\u003e T\n let_ = letWrapper T unT\n\u003c/pre\u003e",
          "module": "Data.Fix.Cse",
          "name": "letWrapper",
          "package": "data-fix-cse",
          "signature": "(Fix (Let f) -\u003e a) -\u003e (a -\u003e Fix (Let f)) -\u003e a -\u003e (a -\u003e a) -\u003e a",
          "source": "src/Data-Fix-Cse.html#letWrapper",
          "type": "function"
        },
        "index": {
          "description": "Helper function to make explicit let-bindings For exampe newtype unT Fix Let let let letWrapper unT",
          "hierarchy": "Data Fix Cse",
          "module": "Data.Fix.Cse",
          "name": "letWrapper",
          "normalized": "(Fix(Let a)-\u003eb)-\u003e(b-\u003eFix(Let a))-\u003eb-\u003e(b-\u003eb)-\u003eb",
          "package": "data-fix-cse",
          "partial": "Wrapper",
          "signature": "(Fix(Let f)-\u003ea)-\u003e(a-\u003eFix(Let f))-\u003ea-\u003e(a-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fix-cse/docs/Data-Fix-Cse.html#v:letWrapper"
      }
    }
  ]
]