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
        "word": "HsPerl5"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Perl5",
          "name": "Perl5",
          "package": "HsPerl5",
          "source": "src/Language-Perl5.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "Perl5",
          "package": "HsPerl5",
          "partial": "Perl",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerl 5's calling context.\n\u003c/p\u003e",
          "module": "Language.Perl5",
          "name": "Context",
          "package": "HsPerl5",
          "source": "src/Language-Perl5.html#Context",
          "type": "data"
        },
        "index": {
          "description": "Perl calling context",
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "Context",
          "package": "HsPerl5",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData types that can be casted from a Perl 5 value (SV).\n\u003c/p\u003e",
          "module": "Language.Perl5",
          "name": "FromSV",
          "package": "HsPerl5",
          "source": "src/Language-Perl5.html#FromSV",
          "type": "class"
        },
        "index": {
          "description": "Data types that can be casted from Perl value SV",
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "FromSV",
          "package": "HsPerl5",
          "partial": "From SV",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#t:FromSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Perl5",
          "name": "SV",
          "package": "HsPerl5",
          "source": "src/Language-Perl5.html#SV",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "SV",
          "package": "HsPerl5",
          "partial": "SV",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#t:SV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData types that can be casted into a Perl 5 value (SV).\n\u003c/p\u003e",
          "module": "Language.Perl5",
          "name": "ToSV",
          "package": "HsPerl5",
          "source": "src/Language-Perl5.html#ToSV",
          "type": "class"
        },
        "index": {
          "description": "Data types that can be casted into Perl value SV",
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "ToSV",
          "package": "HsPerl5",
          "partial": "To SV",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#t:ToSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Perl5",
          "name": "(.!)",
          "package": "HsPerl5",
          "signature": "sub -\u003e args -\u003e IO ()",
          "source": "src/Language-Perl5.html#.%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "(.!) .!",
          "normalized": "a-\u003eb-\u003eIO()",
          "package": "HsPerl5",
          "signature": "sub-\u003eargs-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:.-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Perl5",
          "name": "(.$)",
          "package": "HsPerl5",
          "signature": "SV -\u003e meth -\u003e args -\u003e IO ret",
          "source": "src/Language-Perl5.html#.%24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "(.$) .$",
          "normalized": "SV-\u003ea-\u003eb-\u003eIO c",
          "package": "HsPerl5",
          "signature": "SV-\u003emeth-\u003eargs-\u003eIO ret",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:.-36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Perl5",
          "name": "(.$!)",
          "package": "HsPerl5",
          "signature": "SV -\u003e meth -\u003e args -\u003e IO ()",
          "source": "src/Language-Perl5.html#.%24%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "(.$!) .$!",
          "normalized": "SV-\u003ea-\u003eb-\u003eIO()",
          "package": "HsPerl5",
          "signature": "SV-\u003emeth-\u003eargs-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:.-36--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Perl5",
          "name": "(.:)",
          "package": "HsPerl5",
          "signature": "sub -\u003e args -\u003e IO ret",
          "source": "src/Language-Perl5.html#.%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "(.:) .:",
          "normalized": "a-\u003eb-\u003eIO c",
          "package": "HsPerl5",
          "signature": "sub-\u003eargs-\u003eIO ret",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Perl5",
          "name": "Item",
          "package": "HsPerl5",
          "signature": "Item",
          "source": "src/Language-Perl5.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "Item",
          "package": "HsPerl5",
          "partial": "Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Perl5",
          "name": "List",
          "package": "HsPerl5",
          "signature": "List",
          "source": "src/Language-Perl5.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "List",
          "package": "HsPerl5",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Perl5",
          "name": "Void",
          "package": "HsPerl5",
          "signature": "Void",
          "source": "src/Language-Perl5.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "Void",
          "package": "HsPerl5",
          "partial": "Void",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a Perl 5 method.\n\u003c/p\u003e",
          "module": "Language.Perl5",
          "name": "callMethod",
          "package": "HsPerl5",
          "signature": "i -\u003e m -\u003e a -\u003e IO r",
          "source": "src/Language-Perl5.html#callMethod",
          "type": "function"
        },
        "index": {
          "description": "Call Perl method",
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "callMethod",
          "normalized": "a-\u003eb-\u003ec-\u003eIO d",
          "package": "HsPerl5",
          "partial": "Method",
          "signature": "i-\u003em-\u003ea-\u003eIO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:callMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a Perl 5 subroutine.\n\u003c/p\u003e",
          "module": "Language.Perl5",
          "name": "callSub",
          "package": "HsPerl5",
          "signature": "s -\u003e a -\u003e IO r",
          "source": "src/Language-Perl5.html#callSub",
          "type": "function"
        },
        "index": {
          "description": "Call Perl subroutine",
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "callSub",
          "normalized": "a-\u003eb-\u003eIO c",
          "package": "HsPerl5",
          "partial": "Sub",
          "signature": "s-\u003ea-\u003eIO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:callSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a snippet of Perl 5 code.\n\u003c/p\u003e",
          "module": "Language.Perl5",
          "name": "eval",
          "package": "HsPerl5",
          "signature": "String -\u003e IO a",
          "source": "src/Language-Perl5.html#eval",
          "type": "function"
        },
        "index": {
          "description": "Evaluate snippet of Perl code",
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "eval",
          "normalized": "String-\u003eIO a",
          "package": "HsPerl5",
          "signature": "String-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eeval\u003c/a\u003e\u003c/code\u003e but always in void context.\n\u003c/p\u003e",
          "module": "Language.Perl5",
          "name": "eval_",
          "package": "HsPerl5",
          "signature": "String -\u003e IO ()",
          "source": "src/Language-Perl5.html#eval_",
          "type": "function"
        },
        "index": {
          "description": "Same as eval but always in void context",
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "eval_",
          "normalized": "String-\u003eIO()",
          "package": "HsPerl5",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:eval_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Perl5",
          "name": "fromSV",
          "package": "HsPerl5",
          "signature": "SV -\u003e IO a",
          "source": "src/Language-Perl5.html#fromSV",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "fromSV",
          "normalized": "SV-\u003eIO a",
          "package": "HsPerl5",
          "partial": "SV",
          "signature": "SV-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:fromSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Perl5",
          "name": "toSV",
          "package": "HsPerl5",
          "signature": "a -\u003e IO SV",
          "source": "src/Language-Perl5.html#toSV",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "toSV",
          "normalized": "a-\u003eIO SV",
          "package": "HsPerl5",
          "partial": "SV",
          "signature": "a-\u003eIO SV",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:toSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a module.  Returns a prototype object representing the module.\n\u003c/p\u003e",
          "module": "Language.Perl5",
          "name": "use",
          "package": "HsPerl5",
          "signature": "String -\u003e IO SV",
          "source": "src/Language-Perl5.html#use",
          "type": "function"
        },
        "index": {
          "description": "Use module Returns prototype object representing the module",
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "use",
          "normalized": "String-\u003eIO SV",
          "package": "HsPerl5",
          "signature": "String-\u003eIO SV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:use"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation within the context of a Perl 5 interpreter. \n\u003c/p\u003e",
          "module": "Language.Perl5",
          "name": "withPerl5",
          "package": "HsPerl5",
          "signature": "IO a -\u003e IO a",
          "source": "src/Language-Perl5.html#withPerl5",
          "type": "function"
        },
        "index": {
          "description": "Run computation within the context of Perl interpreter",
          "hierarchy": "Language Perl5",
          "module": "Language.Perl5",
          "name": "withPerl5",
          "normalized": "IO a-\u003eIO a",
          "package": "HsPerl5",
          "partial": "Perl",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsPerl5/docs/Language-Perl5.html#v:withPerl5"
      }
    }
  ]
]