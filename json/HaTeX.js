[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinition of the \u003ccode\u003e\u003ca\u003eLaTeXC\u003c/a\u003e\u003c/code\u003e class, used to combine the classic applicative and\n   the latter monadic interfaces of \u003cem\u003eHaTeX 3\u003c/em\u003e. The user can define new instances\n   as well, adding flexibility to the way \u003cem\u003eHaTeX\u003c/em\u003e is used.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Base-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Definition of the LaTeXC class used to combine the classic applicative and the latter monadic interfaces of HaTeX The user can define new instances as well adding flexibility to the way HaTeX is used",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "Class",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#t:LaTeXC",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the class of \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e code generators. It has \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e as\n   superclasses.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "class",
        "fct-source": "src/Text-LaTeX-Base-Class.html#LaTeXC",
        "fct-type": "class",
        "title": "LaTeXC"
      },
      "index": {
        "description": "This is the class of LaTeX code generators It has Monoid and IsString as superclasses",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "LaTeXC",
        "normalized": "",
        "package": "HaTeX",
        "partial": "La Te XC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#t:Monoid",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Monoid"
      },
      "index": {
        "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "Monoid",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:braces",
      "description": {
        "fct-descr": "\u003cp\u003eA lifted version of the \u003ccode\u003e\u003ca\u003eTeXBraces\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e\u003cpre\u003e braces = liftL TeXBraces\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Class.html#braces",
        "fct-type": "function",
        "title": "braces"
      },
      "index": {
        "description": "lifted version of the TeXBraces constructor braces liftL TeXBraces",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "braces",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:comm0",
      "description": {
        "fct-descr": "\u003cp\u003eA simple (without arguments) and handy command generator\n   using the name of the command.\n\u003c/p\u003e\u003cpre\u003e comm0 str = fromLaTeX $ TeXComm str []\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "String -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Class.html#comm0",
        "fct-type": "function",
        "title": "comm0"
      },
      "index": {
        "description": "simple without arguments and handy command generator using the name of the command comm0 str fromLaTeX TeXComm str",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "comm0",
        "normalized": "String-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "String-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:comm1",
      "description": {
        "fct-descr": "\u003cp\u003eA one parameter command generator using the name of the command.\n   The parameter will be rendered as a fixed argument.\n\u003c/p\u003e\u003cpre\u003e comm1 str = liftL $ \\l -\u003e TeXComm str [FixArg l]\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "String -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Class.html#comm1",
        "fct-type": "function",
        "title": "comm1"
      },
      "index": {
        "description": "one parameter command generator using the name of the command The parameter will be rendered as fixed argument comm1 str liftL TeXComm str FixArg",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "comm1",
        "normalized": "String-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "String-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:commS",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecomm0\u003c/a\u003e\u003c/code\u003e but using \u003ccode\u003e\u003ca\u003eTeXCommS\u003c/a\u003e\u003c/code\u003e, i.e. no \"{}\" will be inserted to protect\n the command's end.\n\u003c/p\u003e\u003cpre\u003e commS = fromLaTeX . TeXCommS\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "String -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Class.html#commS",
        "fct-type": "function",
        "title": "commS"
      },
      "index": {
        "description": "Like comm0 but using TeXCommS i.e no will be inserted to protect the command end commS fromLaTeX TeXCommS",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "commS",
        "normalized": "String-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "String-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:fromLaTeX",
      "description": {
        "fct-descr": "\u003cp\u003eMap a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value to its equivalent in any \u003ccode\u003e\u003ca\u003eLaTeXC\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeX -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Class.html#fromLaTeX",
        "fct-type": "function",
        "title": "fromLaTeX"
      },
      "index": {
        "description": "Map LaTeX value to its equivalent in any LaTeXC instance",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "fromLaTeX",
        "normalized": "LaTeX-\u003ea",
        "package": "HaTeX",
        "partial": "La Te",
        "signature": "LaTeX-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:liftL",
      "description": {
        "fct-descr": "\u003cp\u003eLift a inner function of \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values into any \u003ccode\u003e\u003ca\u003eLaTeXC\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "(LaTeX -\u003e LaTeX) -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Class.html#liftL",
        "fct-type": "function",
        "title": "liftL"
      },
      "index": {
        "description": "Lift inner function of LaTeX values into any LaTeXC instance",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "liftL",
        "normalized": "(LaTeX-\u003eLaTeX)-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "(LaTeX-\u003eLaTeX)-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:liftL2",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eliftL\u003c/a\u003e\u003c/code\u003e with a two arguments function.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "(LaTeX -\u003e LaTeX -\u003e LaTeX) -\u003e l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Class.html#liftL2",
        "fct-type": "function",
        "title": "liftL2"
      },
      "index": {
        "description": "Variant of liftL with two arguments function",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "liftL2",
        "normalized": "(LaTeX-\u003eLaTeX-\u003eLaTeX)-\u003ea-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "(LaTeX-\u003eLaTeX-\u003eLaTeX)-\u003el-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:liftL3",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eliftL\u003c/a\u003e\u003c/code\u003e with a three arguments function.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "(LaTeX -\u003e LaTeX -\u003e LaTeX -\u003e LaTeX) -\u003e l -\u003e l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Class.html#liftL3",
        "fct-type": "function",
        "title": "liftL3"
      },
      "index": {
        "description": "Variant of liftL with three arguments function",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "liftL3",
        "normalized": "(LaTeX-\u003eLaTeX-\u003eLaTeX-\u003eLaTeX)-\u003ea-\u003ea-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "(LaTeX-\u003eLaTeX-\u003eLaTeX-\u003eLaTeX)-\u003el-\u003el-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:liftListL",
      "description": {
        "fct-descr": "\u003cp\u003eThis method must take a function that combines a list of \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values into a new one,\n   and creates a function that combines \u003ccode\u003el\u003c/code\u003e-typed values. The combining function can be\n   seen as a function with 0 or more \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e arguments with a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value as output.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "([LaTeX] -\u003e LaTeX) -\u003e [l] -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Class.html#liftListL",
        "fct-type": "method",
        "title": "liftListL"
      },
      "index": {
        "description": "This method must take function that combines list of LaTeX values into new one and creates function that combines typed values The combining function can be seen as function with or more LaTeX arguments with LaTeX value as output",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "liftListL",
        "normalized": "([LaTeX]-\u003eLaTeX)-\u003e[a]-\u003ea",
        "package": "HaTeX",
        "partial": "List",
        "signature": "([LaTeX]-\u003eLaTeX)-\u003e[l]-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:mappend",
      "description": {
        "fct-descr": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "mappend"
      },
      "index": {
        "description": "An associative operation",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "mappend",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:mconcat",
      "description": {
        "fct-descr": "\u003cp\u003eFold a list using the monoid.\n For most types, the default definition for \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e will be\n used, but the function is included in the class definition so\n that an optimized version can be provided for specific types.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "[a] -\u003e a",
        "fct-type": "method",
        "title": "mconcat"
      },
      "index": {
        "description": "Fold list using the monoid For most types the default definition for mconcat will be used but the function is included in the class definition so that an optimized version can be provided for specific types",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "mconcat",
        "normalized": "[a]-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:mempty",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Class",
        "fct-package": "HaTeX",
        "fct-signature": "a",
        "fct-type": "method",
        "title": "mempty"
      },
      "index": {
        "description": "Identity of mappend",
        "hierarchy": "Text LaTeX Base Class",
        "module": "Text.LaTeX.Base.Class",
        "name": "mempty",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLaTeX standard commands and environments.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Base-Commands.html",
        "fct-type": "module",
        "title": "Commands"
      },
      "index": {
        "description": "LaTeX standard commands and environments",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "Commands",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Commands",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#t:ClassOption",
      "description": {
        "fct-descr": "\u003cp\u003eA class option to be passed to the \u003ccode\u003e\u003ca\u003edocumentclass\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "data",
        "title": "ClassOption"
      },
      "index": {
        "description": "class option to be passed to the documentclass function",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "ClassOption",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Class Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#t:PaperType",
      "description": {
        "fct-descr": "\u003cp\u003eLaTeX available paper types.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "data",
        "title": "PaperType"
      },
      "index": {
        "description": "LaTeX available paper types",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "PaperType",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Paper Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:-37-:",
      "description": {
        "fct-descr": "\u003cp\u003eThis operator appends a comment after a expression.\n   For example:\n\u003c/p\u003e\u003cpre\u003e textbf \"I'm just an example.\" %: \"Insert a few words here.\"\n\u003c/pre\u003e\u003cp\u003eSince you are writing in Haskell, you may not need to output comments\n as you can add them in the Haskell source. I added this feature\n for completeness. It may be useful for debugging the output as well.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e Text -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#%25%3A",
        "fct-type": "function",
        "title": "(%:)"
      },
      "index": {
        "description": "This operator appends comment after expression For example textbf just an example Insert few words here Since you are writing in Haskell you may not need to output comments as you can add them in the Haskell source added this feature for completeness It may be useful for debugging the output as well",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "(%:) %:",
        "normalized": "a-\u003eText-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003eText-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:-38-",
      "description": {
        "fct-descr": "\u003cp\u003eColumn separator.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#%26",
        "fct-type": "function",
        "title": "(&)"
      },
      "index": {
        "description": "Column separator",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "(&) &",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:A0",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "A0",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "A0"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "A0",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:A1",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "A1",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "A1"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "A1",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:A2",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "A2",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "A2"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "A2",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:A3",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "A3",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "A3"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "A3",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:A4",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "A4",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "A4"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "A4",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:A5",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "A5",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "A5"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "A5",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:A6",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "A6",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "A6"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "A6",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:B0",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "B0",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "B0"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "B0",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:B1",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "B1",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "B1"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "B1",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:B2",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "B2",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "B2"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "B2",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:B3",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "B3",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "B3"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "B3",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:B4",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "B4",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "B4"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "B4",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:B5",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "B5",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "B5"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "B5",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:B6",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "B6",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "B6"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "B6",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:CustomOption",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "CustomOption String",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "CustomOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "CustomOption",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Custom Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Draft",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Draft",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "Draft"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "Draft",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Draft",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Executive",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Executive",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "Executive"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "Executive",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Executive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Fleqn",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Fleqn",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "Fleqn"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "Fleqn",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Fleqn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:FontSize",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "FontSize Measure",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "FontSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "FontSize",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Font Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Landscape",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Landscape",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "Landscape"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "Landscape",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Landscape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Legal",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Legal",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "Legal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "Legal",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Legal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Leqno",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Leqno",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "Leqno"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "Leqno",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Leqno",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Letter",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Letter",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#PaperType",
        "fct-type": "function",
        "title": "Letter"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "Letter",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Letter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:NoTitlePage",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "NoTitlePage",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "NoTitlePage"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "NoTitlePage",
        "normalized": "",
        "package": "HaTeX",
        "partial": "No Title Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:OneColumn",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "OneColumn",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "OneColumn"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "OneColumn",
        "normalized": "",
        "package": "HaTeX",
        "partial": "One Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:OneSide",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "OneSide",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "OneSide"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "OneSide",
        "normalized": "",
        "package": "HaTeX",
        "partial": "One Side",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:OpenAny",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "OpenAny",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "OpenAny"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "OpenAny",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Open Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:OpenRight",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "OpenRight",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "OpenRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "OpenRight",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Open Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Paper PaperType",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "Paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "Paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Paper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:TitlePage",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "TitlePage",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "TitlePage"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "TitlePage",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Title Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:TwoColumn",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "TwoColumn",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "TwoColumn"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "TwoColumn",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Two Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:TwoSide",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "TwoSide",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
        "fct-type": "function",
        "title": "TwoSide"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "TwoSide",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Two Side",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:a0paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#a0paper",
        "fct-type": "function",
        "title": "a0paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "a0paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:a1paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#a1paper",
        "fct-type": "function",
        "title": "a1paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "a1paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:a2paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#a2paper",
        "fct-type": "function",
        "title": "a2paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "a2paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:a3paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#a3paper",
        "fct-type": "function",
        "title": "a3paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "a3paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:a4paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#a4paper",
        "fct-type": "function",
        "title": "a4paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "a4paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:a5paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#a5paper",
        "fct-type": "function",
        "title": "a5paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "a5paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:a6paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#a6paper",
        "fct-type": "function",
        "title": "a6paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "a6paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:abstract",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract section.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#abstract",
        "fct-type": "function",
        "title": "abstract"
      },
      "index": {
        "description": "Abstract section",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "abstract",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:alph",
      "description": {
        "fct-descr": "\u003cp\u003eLowercase letters.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#alph",
        "fct-type": "function",
        "title": "alph"
      },
      "index": {
        "description": "Lowercase letters",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "alph",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:alph_",
      "description": {
        "fct-descr": "\u003cp\u003eUppercase letters.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#alph_",
        "fct-type": "function",
        "title": "alph_"
      },
      "index": {
        "description": "Uppercase letters",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "alph_",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:appendix",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#appendix",
        "fct-type": "function",
        "title": "appendix"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "appendix",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:arabic",
      "description": {
        "fct-descr": "\u003cp\u003eArabic numerals.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#arabic",
        "fct-type": "function",
        "title": "arabic"
      },
      "index": {
        "description": "Arabic numerals",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "arabic",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:article",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassName",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#article",
        "fct-type": "function",
        "title": "article"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "article",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:author",
      "description": {
        "fct-descr": "\u003cp\u003eSet the author(s) of the document.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#author",
        "fct-type": "function",
        "title": "author"
      },
      "index": {
        "description": "Set the author of the document",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "author",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:b0paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#b0paper",
        "fct-type": "function",
        "title": "b0paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "b0paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:b1paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#b1paper",
        "fct-type": "function",
        "title": "b1paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "b1paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:b2paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#b2paper",
        "fct-type": "function",
        "title": "b2paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "b2paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:b3paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#b3paper",
        "fct-type": "function",
        "title": "b3paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "b3paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:b4paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#b4paper",
        "fct-type": "function",
        "title": "b4paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "b4paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:b5paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#b5paper",
        "fct-type": "function",
        "title": "b5paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "b5paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:b6paper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#b6paper",
        "fct-type": "function",
        "title": "b6paper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "b6paper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:between",
      "description": {
        "fct-descr": "\u003cp\u003eCalling \u003ccode\u003e\u003ca\u003ebetween\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec l1 l2\u003c/code\u003e puts \u003ccode\u003ec\u003c/code\u003e between \u003ccode\u003el1\u003c/code\u003e and \u003ccode\u003el2\u003c/code\u003e and\n   appends them.\n\u003c/p\u003e\u003cpre\u003e between c l1 l2 = l1 \u003c\u003e c \u003c\u003e l2\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "m -\u003e m -\u003e m -\u003e m",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#between",
        "fct-type": "function",
        "title": "between"
      },
      "index": {
        "description": "Calling between l1 l2 puts between l1 and l2 and appends them between l1 l2 l1 l2",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "between",
        "normalized": "a-\u003ea-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "m-\u003em-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:bigskip",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#bigskip",
        "fct-type": "function",
        "title": "bigskip"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "bigskip",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:book",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassName",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#book",
        "fct-type": "function",
        "title": "book"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "book",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:caption",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#caption",
        "fct-type": "function",
        "title": "caption"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "caption",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:center",
      "description": {
        "fct-descr": "\u003cp\u003eCenter-justify the argument.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#center",
        "fct-type": "function",
        "title": "center"
      },
      "index": {
        "description": "Center-justify the argument",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "center",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:chapter",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#chapter",
        "fct-type": "function",
        "title": "chapter"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "chapter",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:cite",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#cite",
        "fct-type": "function",
        "title": "cite"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "cite",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:cleardoublepage",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#cleardoublepage",
        "fct-type": "function",
        "title": "cleardoublepage"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "cleardoublepage",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:clearpage",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#clearpage",
        "fct-type": "function",
        "title": "clearpage"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "clearpage",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:cline",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecline i j\u003c/code\u003e writes a partial horizontal line beginning in column \u003ccode\u003ei\u003c/code\u003e and ending in column \u003ccode\u003ej\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Int -\u003e Int -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#cline",
        "fct-type": "function",
        "title": "cline"
      },
      "index": {
        "description": "cline writes partial horizontal line beginning in column and ending in column",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "cline",
        "normalized": "Int-\u003eInt-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Int-\u003eInt-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:comment",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a comment.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Text -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#comment",
        "fct-type": "function",
        "title": "comment"
      },
      "index": {
        "description": "Create comment",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "comment",
        "normalized": "Text-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Text-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:customopt",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "String -\u003e ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#customopt",
        "fct-type": "function",
        "title": "customopt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "customopt",
        "normalized": "String-\u003eClassOption",
        "package": "HaTeX",
        "partial": "",
        "signature": "String-\u003eClassOption"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:date",
      "description": {
        "fct-descr": "\u003cp\u003eSet a date for your document.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#date",
        "fct-type": "function",
        "title": "date"
      },
      "index": {
        "description": "Set date for your document",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "date",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:ddots",
      "description": {
        "fct-descr": "\u003cp\u003eDiagonal dots.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ddots",
        "fct-type": "function",
        "title": "ddots"
      },
      "index": {
        "description": "Diagonal dots",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "ddots",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:description",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#description",
        "fct-type": "function",
        "title": "description"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "description",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:document",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e environment contains the body of the document.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#document",
        "fct-type": "function",
        "title": "document"
      },
      "index": {
        "description": "The document environment contains the body of the document",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "document",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:documentclass",
      "description": {
        "fct-descr": "\u003cp\u003eSet the document class. Needed in all documents.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "[ClassOption]-\u003e ClassName-\u003e l",
        "fct-type": "function",
        "title": "documentclass"
      },
      "index": {
        "description": "Set the document class Needed in all documents",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "documentclass",
        "normalized": "[ClassOption]-\u003eClassName-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "[ClassOption]-\u003eClassName-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:draft",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#draft",
        "fct-type": "function",
        "title": "draft"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "draft",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:emph",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#emph",
        "fct-type": "function",
        "title": "emph"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "emph",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:empty",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "PageStyle",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "empty",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:enumerate",
      "description": {
        "fct-descr": "\u003cp\u003eEnvironment of ordered lists. Use \u003ccode\u003e\u003ca\u003eitem\u003c/a\u003e\u003c/code\u003e to start each list\n   item.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#enumerate",
        "fct-type": "function",
        "title": "enumerate"
      },
      "index": {
        "description": "Environment of ordered lists Use item to start each list item",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "enumerate",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:executivepaper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#executivepaper",
        "fct-type": "function",
        "title": "executivepaper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "executivepaper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:fbox",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#fbox",
        "fct-type": "function",
        "title": "fbox"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "fbox",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:figure",
      "description": {
        "fct-descr": "\u003cp\u003eFigure environment.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe Pos-\u003e l-\u003e l",
        "fct-type": "function",
        "title": "figure"
      },
      "index": {
        "description": "Figure environment",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "figure",
        "normalized": "Maybe Pos-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe Pos-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:fleqn",
      "description": {
        "fct-descr": "\u003cp\u003eTypesets displayed formulae left-aligned instead of centred.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#fleqn",
        "fct-type": "function",
        "title": "fleqn"
      },
      "index": {
        "description": "Typesets displayed formulae left-aligned instead of centred",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "fleqn",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:flushleft",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-justify the argument.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#flushleft",
        "fct-type": "function",
        "title": "flushleft"
      },
      "index": {
        "description": "Left-justify the argument",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "flushleft",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:flushright",
      "description": {
        "fct-descr": "\u003cp\u003eRight-justify the argument.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#flushright",
        "fct-type": "function",
        "title": "flushright"
      },
      "index": {
        "description": "Right-justify the argument",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "flushright",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:footnote",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#footnote",
        "fct-type": "function",
        "title": "footnote"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "footnote",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:footnotesize",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#footnotesize",
        "fct-type": "function",
        "title": "footnotesize"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "footnotesize",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:framebox",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe Measure -\u003e Maybe Pos -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#framebox",
        "fct-type": "function",
        "title": "framebox"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "framebox",
        "normalized": "Maybe Measure-\u003eMaybe Pos-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe Measure-\u003eMaybe Pos-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hatex",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the HaTeX logo.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#hatex",
        "fct-type": "function",
        "title": "hatex"
      },
      "index": {
        "description": "Print the HaTeX logo",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "hatex",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hatex3",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the HaTeX 3 logo.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#hatex3",
        "fct-type": "function",
        "title": "hatex3"
      },
      "index": {
        "description": "Print the HaTeX logo",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "hatex3",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hatex_version",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the HaTeX logo, beside the complete version number.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#hatex_version",
        "fct-type": "function",
        "title": "hatex_version"
      },
      "index": {
        "description": "Print the HaTeX logo beside the complete version number",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "hatex_version",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:headings",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "PageStyle",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#headings",
        "fct-type": "function",
        "title": "headings"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "headings",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hfill",
      "description": {
        "fct-descr": "\u003cp\u003eFill out all available horizontal space.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#hfill",
        "fct-type": "function",
        "title": "hfill"
      },
      "index": {
        "description": "Fill out all available horizontal space",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "hfill",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hline",
      "description": {
        "fct-descr": "\u003cp\u003eHorizontal line.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#hline",
        "fct-type": "function",
        "title": "hline"
      },
      "index": {
        "description": "Horizontal line",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "hline",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hspace",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Measure -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#hspace",
        "fct-type": "function",
        "title": "hspace"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "hspace",
        "normalized": "Measure-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Measure-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hspace_",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Measure -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#hspace_",
        "fct-type": "function",
        "title": "hspace_"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "hspace_",
        "normalized": "Measure-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Measure-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:huge",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#huge",
        "fct-type": "function",
        "title": "huge"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "huge",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:huge2",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#huge2",
        "fct-type": "function",
        "title": "huge2"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "huge2",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hyp",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#hyp",
        "fct-type": "function",
        "title": "hyp"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "hyp",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hyphenation",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#hyphenation",
        "fct-type": "function",
        "title": "hyphenation"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "hyphenation",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:include",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003einput\u003c/a\u003e\u003c/code\u003e, but forces a page break.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote: the file you are including cannot include other files.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "FilePath -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#include",
        "fct-type": "function",
        "title": "include"
      },
      "index": {
        "description": "Similar to input but forces page break Note the file you are including cannot include other files",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "include",
        "normalized": "FilePath-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "FilePath-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:indent",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#indent",
        "fct-type": "function",
        "title": "indent"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "indent",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:input",
      "description": {
        "fct-descr": "\u003cp\u003eImport an external file and insert its content \u003cem\u003eas it is\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "FilePath -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#input",
        "fct-type": "function",
        "title": "input"
      },
      "index": {
        "description": "Import an external file and insert its content as it is",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "input",
        "normalized": "FilePath-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "FilePath-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:institute",
      "description": {
        "fct-descr": "\u003cp\u003eSet either an institute or an organization\n for the document. It does \u003cem\u003enot\u003c/em\u003e work for\n a document of the \u003ccode\u003e\u003ca\u003earticle\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#institute",
        "fct-type": "function",
        "title": "institute"
      },
      "index": {
        "description": "Set either an institute or an organization for the document It does not work for document of the article class",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "institute",
        "normalized": "Maybe a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:item",
      "description": {
        "fct-descr": "\u003cp\u003eAn item of a list (see \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eitemize\u003c/a\u003e\u003c/code\u003e).\n   The optional argument sets the design of the item.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#item",
        "fct-type": "function",
        "title": "item"
      },
      "index": {
        "description": "An item of list see enumerate or itemize The optional argument sets the design of the item",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "item",
        "normalized": "Maybe a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:itemize",
      "description": {
        "fct-descr": "\u003cp\u003eEnvironment of unordered lists. Use \u003ccode\u003e\u003ca\u003eitem\u003c/a\u003e\u003c/code\u003e to start each list\n   item.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#itemize",
        "fct-type": "function",
        "title": "itemize"
      },
      "index": {
        "description": "Environment of unordered lists Use item to start each list item",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "itemize",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:laTeX2",
      "description": {
        "fct-descr": "\u003cp\u003eLaTeX logo.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#laTeX2",
        "fct-type": "function",
        "title": "laTeX2"
      },
      "index": {
        "description": "LaTeX logo",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "laTeX2",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Te",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:laTeXe",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#laTeXe",
        "fct-type": "function",
        "title": "laTeXe"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "laTeXe",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Te Xe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:label",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "label",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:landscape",
      "description": {
        "fct-descr": "\u003cp\u003eChanges the layout of the document to print in landscape mode\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#landscape",
        "fct-type": "function",
        "title": "landscape"
      },
      "index": {
        "description": "Changes the layout of the document to print in landscape mode",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "landscape",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:large",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#large",
        "fct-type": "function",
        "title": "large"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "large",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:large2",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#large2",
        "fct-type": "function",
        "title": "large2"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "large2",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:large3",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#large3",
        "fct-type": "function",
        "title": "large3"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "large3",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:latex",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eLaTeX\u003c/code\u003e logo.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#latex",
        "fct-type": "function",
        "title": "latex"
      },
      "index": {
        "description": "The LaTeX logo",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "latex",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:ldots",
      "description": {
        "fct-descr": "\u003cp\u003eHorizontal dots.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ldots",
        "fct-type": "function",
        "title": "ldots"
      },
      "index": {
        "description": "Horizontal dots",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "ldots",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:legalpaper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#legalpaper",
        "fct-type": "function",
        "title": "legalpaper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "legalpaper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:leqno",
      "description": {
        "fct-descr": "\u003cp\u003ePlaces the numbering of formulae on the left hand side instead of the right.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#leqno",
        "fct-type": "function",
        "title": "leqno"
      },
      "index": {
        "description": "Places the numbering of formulae on the left hand side instead of the right",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "leqno",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:letterpaper",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#letterpaper",
        "fct-type": "function",
        "title": "letterpaper"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "letterpaper",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:linebreak",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#linebreak",
        "fct-type": "function",
        "title": "linebreak"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "linebreak",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:linespread",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Float -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#linespread",
        "fct-type": "function",
        "title": "linespread"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "linespread",
        "normalized": "Float-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Float-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:linewidth",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#linewidth",
        "fct-type": "function",
        "title": "linewidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "linewidth",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:lnbk",
      "description": {
        "fct-descr": "\u003cp\u003eStart a new line. In a \u003ccode\u003e\u003ca\u003etabular\u003c/a\u003e\u003c/code\u003e, it starts a new row, so use \u003ccode\u003e\u003ca\u003enewline\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#lnbk",
        "fct-type": "function",
        "title": "lnbk"
      },
      "index": {
        "description": "Start new line In tabular it starts new row so use newline instead",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "lnbk",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:lnbk_",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#lnbk_",
        "fct-type": "function",
        "title": "lnbk_"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "lnbk_",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:makebox",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe Measure -\u003e Maybe Pos -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#makebox",
        "fct-type": "function",
        "title": "makebox"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "makebox",
        "normalized": "Maybe Measure-\u003eMaybe Pos-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe Measure-\u003eMaybe Pos-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:maketitle",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate the title. It normally contains the \u003ccode\u003e\u003ca\u003etitle\u003c/a\u003e\u003c/code\u003e name\n of your document, the \u003ccode\u003e\u003ca\u003eauthor\u003c/a\u003e\u003c/code\u003e(s) and \u003ccode\u003e\u003ca\u003edate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#maketitle",
        "fct-type": "function",
        "title": "maketitle"
      },
      "index": {
        "description": "Generate the title It normally contains the title name of your document the author and date",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "maketitle",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:markboth",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in conjunction with \u003ccode\u003e\u003ca\u003emyheadings\u003c/a\u003e\u003c/code\u003e for setting both the left and the right heading.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#markboth",
        "fct-type": "function",
        "title": "markboth"
      },
      "index": {
        "description": "Used in conjunction with myheadings for setting both the left and the right heading",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "markboth",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:markright",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in conjunction with \u003ccode\u003e\u003ca\u003emyheadings\u003c/a\u003e\u003c/code\u003e for setting the right heading.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#markright",
        "fct-type": "function",
        "title": "markright"
      },
      "index": {
        "description": "Used in conjunction with myheadings for setting the right heading",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "markright",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:mbox",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#mbox",
        "fct-type": "function",
        "title": "mbox"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "mbox",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:minimal",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassName",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#minimal",
        "fct-type": "function",
        "title": "minimal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "minimal",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:minipage",
      "description": {
        "fct-descr": "\u003cp\u003eMinipage environment.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe Pos-\u003e l-\u003e l-\u003e l",
        "fct-type": "function",
        "title": "minipage"
      },
      "index": {
        "description": "Minipage environment",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "minipage",
        "normalized": "Maybe Pos-\u003ea-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe Pos-\u003el-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:multicolumn",
      "description": {
        "fct-descr": "\u003cp\u003eCell taking multiple columns.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Int -\u003e [TableSpec] -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#multicolumn",
        "fct-type": "function",
        "title": "multicolumn"
      },
      "index": {
        "description": "Cell taking multiple columns",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "multicolumn",
        "normalized": "Int-\u003e[TableSpec]-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Int-\u003e[TableSpec]-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:myheadings",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "PageStyle",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#myheadings",
        "fct-type": "function",
        "title": "myheadings"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "myheadings",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:newline",
      "description": {
        "fct-descr": "\u003cp\u003eStart a new line.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#newline",
        "fct-type": "function",
        "title": "newline"
      },
      "index": {
        "description": "Start new line",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "newline",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:newpage",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#newpage",
        "fct-type": "function",
        "title": "newpage"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "newpage",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:noindent",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#noindent",
        "fct-type": "function",
        "title": "noindent"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "noindent",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:nolinebreak",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#nolinebreak",
        "fct-type": "function",
        "title": "nolinebreak"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "nolinebreak",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:nopagebreak",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#nopagebreak",
        "fct-type": "function",
        "title": "nopagebreak"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "nopagebreak",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:normalsize",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#normalsize",
        "fct-type": "function",
        "title": "normalsize"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "normalsize",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:notitlepage",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#notitlepage",
        "fct-type": "function",
        "title": "notitlepage"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "notitlepage",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:onecolumn",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#onecolumn",
        "fct-type": "function",
        "title": "onecolumn"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "onecolumn",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:oneside",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#oneside",
        "fct-type": "function",
        "title": "oneside"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "oneside",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:openany",
      "description": {
        "fct-descr": "\u003cp\u003eMakes chapters begin on the next page available.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#openany",
        "fct-type": "function",
        "title": "openany"
      },
      "index": {
        "description": "Makes chapters begin on the next page available",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "openany",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:openright",
      "description": {
        "fct-descr": "\u003cp\u003eMakes chapters begin either only on right hand pages\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#openright",
        "fct-type": "function",
        "title": "openright"
      },
      "index": {
        "description": "Makes chapters begin either only on right hand pages",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "openright",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:pagebreak",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#pagebreak",
        "fct-type": "function",
        "title": "pagebreak"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "pagebreak",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:pagenumbering",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#pagenumbering",
        "fct-type": "function",
        "title": "pagenumbering"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "pagenumbering",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:pageref",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#pageref",
        "fct-type": "function",
        "title": "pageref"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "pageref",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:pagestyle",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "PageStyle -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#pagestyle",
        "fct-type": "function",
        "title": "pagestyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "pagestyle",
        "normalized": "PageStyle-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "PageStyle-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:par",
      "description": {
        "fct-descr": "\u003cp\u003eStart a new paragraph\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#par",
        "fct-type": "function",
        "title": "par"
      },
      "index": {
        "description": "Start new paragraph",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "par",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:paragraph",
      "description": {
        "fct-descr": "\u003cp\u003eStart a paragraph.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#paragraph",
        "fct-type": "function",
        "title": "paragraph"
      },
      "index": {
        "description": "Start paragraph",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "paragraph",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:parbox",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe Pos -\u003e Measure -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#parbox",
        "fct-type": "function",
        "title": "parbox"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "parbox",
        "normalized": "Maybe Pos-\u003eMeasure-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe Pos-\u003eMeasure-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:part",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#part",
        "fct-type": "function",
        "title": "part"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "part",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:plain",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "PageStyle",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#plain",
        "fct-type": "function",
        "title": "plain"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "plain",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:proc",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassName",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#proc",
        "fct-type": "function",
        "title": "proc"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "proc",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:protect",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#protect",
        "fct-type": "function",
        "title": "protect"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "protect",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:qts",
      "description": {
        "fct-descr": "\u003cp\u003eQuotation marks.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#qts",
        "fct-type": "function",
        "title": "qts"
      },
      "index": {
        "description": "Quotation marks",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "qts",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:quote",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#quote",
        "fct-type": "function",
        "title": "quote"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "quote",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:raisebox",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Measure -\u003e Maybe Measure -\u003e Maybe Measure -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#raisebox",
        "fct-type": "function",
        "title": "raisebox"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "raisebox",
        "normalized": "Measure-\u003eMaybe Measure-\u003eMaybe Measure-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Measure-\u003eMaybe Measure-\u003eMaybe Measure-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:raw",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a raw piece of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n This functions doesn't care about \u003ccode\u003eLaTeX\u003c/code\u003e reserved characters,\n it insert the text just as it is received.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Text -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#raw",
        "fct-type": "function",
        "title": "raw"
      },
      "index": {
        "description": "Insert raw piece of Text This functions doesn care about LaTeX reserved characters it insert the text just as it is received",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "raw",
        "normalized": "Text-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Text-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:ref",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#ref",
        "fct-type": "function",
        "title": "ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "ref",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:report",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassName",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#report",
        "fct-type": "function",
        "title": "report"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "report",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:roman",
      "description": {
        "fct-descr": "\u003cp\u003eLowercase roman numerals.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#roman",
        "fct-type": "function",
        "title": "roman"
      },
      "index": {
        "description": "Lowercase roman numerals",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "roman",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:roman_",
      "description": {
        "fct-descr": "\u003cp\u003eUppercase roman numerals.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#roman_",
        "fct-type": "function",
        "title": "roman_"
      },
      "index": {
        "description": "Uppercase roman numerals",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "roman_",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:rule",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a simple black box.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe Measure-\u003e Measure-\u003e Measure-\u003e l",
        "fct-type": "function",
        "title": "rule"
      },
      "index": {
        "description": "Produce simple black box",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "rule",
        "normalized": "Maybe Measure-\u003eMeasure-\u003eMeasure-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe Measure-\u003eMeasure-\u003eMeasure-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:scriptsize",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#scriptsize",
        "fct-type": "function",
        "title": "scriptsize"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "scriptsize",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:section",
      "description": {
        "fct-descr": "\u003cp\u003eStart a new section with a given title.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#section",
        "fct-type": "function",
        "title": "section"
      },
      "index": {
        "description": "Start new section with given title",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "section",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:slides",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassName",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#slides",
        "fct-type": "function",
        "title": "slides"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "slides",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:small",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#small",
        "fct-type": "function",
        "title": "small"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "small",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:smallskip",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#smallskip",
        "fct-type": "function",
        "title": "smallskip"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "smallskip",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:stretch",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Int -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#stretch",
        "fct-type": "function",
        "title": "stretch"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "stretch",
        "normalized": "Int-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Int-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:subparagraph",
      "description": {
        "fct-descr": "\u003cp\u003eStart a subparagraph (minimal level of sectioning).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#subparagraph",
        "fct-type": "function",
        "title": "subparagraph"
      },
      "index": {
        "description": "Start subparagraph minimal level of sectioning",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "subparagraph",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:subsection",
      "description": {
        "fct-descr": "\u003cp\u003eStart a new subsection.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#subsection",
        "fct-type": "function",
        "title": "subsection"
      },
      "index": {
        "description": "Start new subsection",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "subsection",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:subsubsection",
      "description": {
        "fct-descr": "\u003cp\u003eStart a new sub\u003cem\u003esub\u003c/em\u003esection.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#subsubsection",
        "fct-type": "function",
        "title": "subsubsection"
      },
      "index": {
        "description": "Start new sub sub section",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "subsubsection",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:tableofcontents",
      "description": {
        "fct-descr": "\u003cp\u003eCreate the table of contents, automatically generated\n from your \u003ccode\u003e\u003ca\u003esection\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003esubsection\u003c/a\u003e\u003c/code\u003es, and other related stuff.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#tableofcontents",
        "fct-type": "function",
        "title": "tableofcontents"
      },
      "index": {
        "description": "Create the table of contents automatically generated from your section subsection and other related stuff",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "tableofcontents",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:tabular",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etabular\u003c/a\u003e\u003c/code\u003e environment can be used to typeset tables with optional horizontal and vertical lines.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe Pos-\u003e [TableSpec]-\u003e l-\u003e l",
        "fct-type": "function",
        "title": "tabular"
      },
      "index": {
        "description": "The tabular environment can be used to typeset tables with optional horizontal and vertical lines",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "tabular",
        "normalized": "Maybe Pos-\u003e[TableSpec]-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe Pos-\u003e[TableSpec]-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:tex",
      "description": {
        "fct-descr": "\u003cp\u003eTeX logo.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#tex",
        "fct-type": "function",
        "title": "tex"
      },
      "index": {
        "description": "TeX logo",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "tex",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textbf",
      "description": {
        "fct-descr": "\u003cp\u003eSet the given argument to bold font face.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#textbf",
        "fct-type": "function",
        "title": "textbf"
      },
      "index": {
        "description": "Set the given argument to bold font face",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "textbf",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textit",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#textit",
        "fct-type": "function",
        "title": "textit"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "textit",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textmd",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#textmd",
        "fct-type": "function",
        "title": "textmd"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "textmd",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textnormal",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#textnormal",
        "fct-type": "function",
        "title": "textnormal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "textnormal",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textrm",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#textrm",
        "fct-type": "function",
        "title": "textrm"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "textrm",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textsc",
      "description": {
        "fct-descr": "\u003cp\u003eSet the given argument to small caps format.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#textsc",
        "fct-type": "function",
        "title": "textsc"
      },
      "index": {
        "description": "Set the given argument to small caps format",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "textsc",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textsf",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#textsf",
        "fct-type": "function",
        "title": "textsf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "textsf",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textsl",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#textsl",
        "fct-type": "function",
        "title": "textsl"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "textsl",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:texttt",
      "description": {
        "fct-descr": "\u003cp\u003eSet the given argument to monospaced font.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#texttt",
        "fct-type": "function",
        "title": "texttt"
      },
      "index": {
        "description": "Set the given argument to monospaced font",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "texttt",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textup",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#textup",
        "fct-type": "function",
        "title": "textup"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "textup",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textwidth",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#textwidth",
        "fct-type": "function",
        "title": "textwidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "textwidth",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:thanks",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#thanks",
        "fct-type": "function",
        "title": "thanks"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "thanks",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:thePage",
      "description": {
        "fct-descr": "\u003cp\u003eRender the current page.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#thePage",
        "fct-type": "function",
        "title": "thePage"
      },
      "index": {
        "description": "Render the current page",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "thePage",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:thispagestyle",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "PageStyle -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#thispagestyle",
        "fct-type": "function",
        "title": "thispagestyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "thispagestyle",
        "normalized": "PageStyle-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "PageStyle-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:tiny",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#tiny",
        "fct-type": "function",
        "title": "tiny"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "tiny",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:title",
      "description": {
        "fct-descr": "\u003cp\u003eSet the title of your document.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#title",
        "fct-type": "function",
        "title": "title"
      },
      "index": {
        "description": "Set the title of your document",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "title",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:titlepage",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#titlepage",
        "fct-type": "function",
        "title": "titlepage"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "titlepage",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:today",
      "description": {
        "fct-descr": "\u003cp\u003eRender the date at compilation time.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#today",
        "fct-type": "function",
        "title": "today"
      },
      "index": {
        "description": "Render the date at compilation time",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "today",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:twocolumn",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#twocolumn",
        "fct-type": "function",
        "title": "twocolumn"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "twocolumn",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:twoside",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "ClassOption",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#twoside",
        "fct-type": "function",
        "title": "twoside"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "twoside",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:underline",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#underline",
        "fct-type": "function",
        "title": "underline"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "underline",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:usepackage",
      "description": {
        "fct-descr": "\u003cp\u003eImport a package. First argument is a list of options for\n the package named in the second argument.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "[l] -\u003e PackageName -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#usepackage",
        "fct-type": "function",
        "title": "usepackage"
      },
      "index": {
        "description": "Import package First argument is list of options for the package named in the second argument",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "usepackage",
        "normalized": "[a]-\u003ePackageName-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "[l]-\u003ePackageName-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:vdots",
      "description": {
        "fct-descr": "\u003cp\u003eVertical dots.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#vdots",
        "fct-type": "function",
        "title": "vdots"
      },
      "index": {
        "description": "Vertical dots",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "vdots",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:verb",
      "description": {
        "fct-descr": "\u003cp\u003eInclude text, as given and in typewriter, but in-line.\n Note that, for LaTeX-specific technical reasons, verbatim\n text can generally only be used \"at the top level\", not\n in e.g. section titles or other command-arguments.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003everbatim\u003c/a\u003e\u003c/code\u003e, which LaTeX implements as an ordinary environment,\n its command \u003ccode\u003e\u003ca\u003everb\u003c/a\u003e\u003c/code\u003e uses a syntax trick to avoid braking its parsing\n when the literal text contains a closing brace: rather than using braces\n at all, the first character after \u003ccode\u003e\\verb\u003c/code\u003e will be the right delimiter as well.\n Translating this method to HaTeX wouldn't really make sense since Haskell\n has string literals with their own escaping possibilities; instead, we make\n it secure by automatically choosing a delimiter that does not turn up \n in the given string.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Text -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#verb",
        "fct-type": "function",
        "title": "verb"
      },
      "index": {
        "description": "Include text as given and in typewriter but in-line Note that for LaTeX-specific technical reasons verbatim text can generally only be used at the top level not in e.g section titles or other command-arguments Unlike verbatim which LaTeX implements as an ordinary environment its command verb uses syntax trick to avoid braking its parsing when the literal text contains closing brace rather than using braces at all the first character after verb will be the right delimiter as well Translating this method to HaTeX wouldn really make sense since Haskell has string literals with their own escaping possibilities instead we make it secure by automatically choosing delimiter that does not turn up in the given string",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "verb",
        "normalized": "Text-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Text-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:verbatim",
      "description": {
        "fct-descr": "\u003cp\u003eThe point of \u003ccode\u003e\u003ca\u003everbatim\u003c/a\u003e\u003c/code\u003e is to include text that will\n \u003cem\u003enot\u003c/em\u003e be parsed as LaTeX in any way at all, but should simply\n appear as given in the document, in a separate display\n in typewriter font.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Text -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#verbatim",
        "fct-type": "function",
        "title": "verbatim"
      },
      "index": {
        "description": "The point of verbatim is to include text that will not be parsed as LaTeX in any way at all but should simply appear as given in the document in separate display in typewriter font",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "verbatim",
        "normalized": "Text-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Text-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:verse",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#verse",
        "fct-type": "function",
        "title": "verse"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "verse",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:version",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Version",
        "fct-source": "src/Paths_HaTeX.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "version",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:vfill",
      "description": {
        "fct-descr": "\u003cp\u003eFill out all available vertical space.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#vfill",
        "fct-type": "function",
        "title": "vfill"
      },
      "index": {
        "description": "Fill out all available vertical space",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "vfill",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:vspace",
      "description": {
        "fct-module": "Text.LaTeX.Base.Commands",
        "fct-package": "HaTeX",
        "fct-signature": "Measure -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Commands.html#vspace",
        "fct-type": "function",
        "title": "vspace"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Commands",
        "module": "Text.LaTeX.Base.Commands",
        "name": "vspace",
        "normalized": "Measure-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Measure-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLaTeX Parser based on Attoparsec\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Base.Parser",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Base-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "LaTeX Parser based on Attoparsec",
        "hierarchy": "Text LaTeX Base Parser",
        "module": "Text.LaTeX.Base.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Parser.html#v:latexAtOnce",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use parseLaTeX instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Base.Parser",
        "fct-package": "HaTeX",
        "fct-signature": "Text -\u003e Either String LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Parser.html#latexAtOnce",
        "fct-type": "function",
        "title": "latexAtOnce"
      },
      "index": {
        "description": "Deprecated Use parseLaTeX instead",
        "hierarchy": "Text LaTeX Base Parser",
        "module": "Text.LaTeX.Base.Parser",
        "name": "latexAtOnce",
        "normalized": "Text-\u003eEither String LaTeX",
        "package": "HaTeX",
        "partial": "At Once",
        "signature": "Text-\u003eEither String LaTeX"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Parser.html#v:latexBlockParser",
      "description": {
        "fct-descr": "\u003cp\u003eParser of a single \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e constructor, no appending blocks.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Parser",
        "fct-package": "HaTeX",
        "fct-signature": "Parser LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Parser.html#latexBlockParser",
        "fct-type": "function",
        "title": "latexBlockParser"
      },
      "index": {
        "description": "Parser of single LaTeX constructor no appending blocks",
        "hierarchy": "Text LaTeX Base Parser",
        "module": "Text.LaTeX.Base.Parser",
        "name": "latexBlockParser",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Block Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Parser.html#v:latexDocParser",
      "description": {
        "fct-descr": "\u003cp\u003eIncremental Parser that terminates after the \u003cem\u003edocument\u003c/em\u003e envionment\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Parser",
        "fct-package": "HaTeX",
        "fct-signature": "Parser LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Parser.html#latexDocParser",
        "fct-type": "function",
        "title": "latexDocParser"
      },
      "index": {
        "description": "Incremental Parser that terminates after the document envionment",
        "hierarchy": "Text LaTeX Base Parser",
        "module": "Text.LaTeX.Base.Parser",
        "name": "latexDocParser",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Doc Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Parser.html#v:latexParser",
      "description": {
        "fct-descr": "\u003cp\u003eIncremental \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e parser.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Parser",
        "fct-package": "HaTeX",
        "fct-signature": "Parser LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Parser.html#latexParser",
        "fct-type": "function",
        "title": "latexParser"
      },
      "index": {
        "description": "Incremental LaTeX parser",
        "hierarchy": "Text LaTeX Base Parser",
        "module": "Text.LaTeX.Base.Parser",
        "name": "latexParser",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Parser.html#v:parseLaTeX",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e sequence as a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e block. If it fails, it returns\n   an error string.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Parser",
        "fct-package": "HaTeX",
        "fct-signature": "Text -\u003e Either String LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Parser.html#parseLaTeX",
        "fct-type": "function",
        "title": "parseLaTeX"
      },
      "index": {
        "description": "Parse Text sequence as LaTeX block If it fails it returns an error string",
        "hierarchy": "Text LaTeX Base Parser",
        "module": "Text.LaTeX.Base.Parser",
        "name": "parseLaTeX",
        "normalized": "Text-\u003eEither String LaTeX",
        "package": "HaTeX",
        "partial": "La Te",
        "signature": "Text-\u003eEither String LaTeX"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe final purpose of this module is to render a Text value\n   from a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value. The interface is abstracted via a typeclass\n   so you can cast to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e other types as well. Also, some other\n   handy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e-related functions are defined.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Base.Render",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Base-Render.html",
        "fct-type": "module",
        "title": "Render"
      },
      "index": {
        "description": "The final purpose of this module is to render Text value from LaTeX value The interface is abstracted via typeclass so you can cast to Text other types as well Also some other handy Text related functions are defined",
        "hierarchy": "Text LaTeX Base Render",
        "module": "Text.LaTeX.Base.Render",
        "name": "Render",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Render",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#t:Render",
      "description": {
        "fct-descr": "\u003cp\u003eClass of values that can be transformed to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n You mainly will use this to obtain the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e output\n of a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value. If you are going to write the result\n in a file, consider to use \u003ccode\u003e\u003ca\u003erenderFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConsider also to use \u003ccode\u003e\u003ca\u003erendertex\u003c/a\u003e\u003c/code\u003e to get \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003eable values\n into \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e blocks.\n\u003c/p\u003e\u003cp\u003eIf you want to make a type instance of \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e and you already\n have a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance, you can use the default instance.\n\u003c/p\u003e\u003cpre\u003e render = fromString . show\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Base.Render",
        "fct-package": "HaTeX",
        "fct-signature": "class",
        "fct-source": "src/Text-LaTeX-Base-Render.html#Render",
        "fct-type": "class",
        "title": "Render"
      },
      "index": {
        "description": "Class of values that can be transformed to Text You mainly will use this to obtain the Text output of LaTeX value If you are going to write the result in file consider to use renderFile Consider also to use rendertex to get Render able values into LaTeX blocks If you want to make type instance of Render and you already have Show instance you can use the default instance render fromString show",
        "hierarchy": "Text LaTeX Base Render",
        "module": "Text.LaTeX.Base.Render",
        "name": "Render",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Render",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#t:Text",
      "description": {
        "fct-descr": "\u003cp\u003eA space efficient, packed, unboxed Unicode text type.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Render",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Text"
      },
      "index": {
        "description": "space efficient packed unboxed Unicode text type",
        "hierarchy": "Text LaTeX Base Render",
        "module": "Text.LaTeX.Base.Render",
        "name": "Text",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:readFileTex",
      "description": {
        "fct-descr": "\u003cp\u003eIf you are going to insert the content of a file\n in your \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e data, use this function to ensure\n your encoding is correct.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Render",
        "fct-package": "HaTeX",
        "fct-signature": "FilePath -\u003e IO Text",
        "fct-source": "src/Text-LaTeX-Base-Render.html#readFileTex",
        "fct-type": "function",
        "title": "readFileTex"
      },
      "index": {
        "description": "If you are going to insert the content of file in your LaTeX data use this function to ensure your encoding is correct",
        "hierarchy": "Text LaTeX Base Render",
        "module": "Text.LaTeX.Base.Render",
        "name": "readFileTex",
        "normalized": "FilePath-\u003eIO Text",
        "package": "HaTeX",
        "partial": "File Tex",
        "signature": "FilePath-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:render",
      "description": {
        "fct-module": "Text.LaTeX.Base.Render",
        "fct-package": "HaTeX",
        "fct-signature": "a -\u003e Text",
        "fct-source": "src/Text-LaTeX-Base-Render.html#render",
        "fct-type": "method",
        "title": "render"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Render",
        "module": "Text.LaTeX.Base.Render",
        "name": "render",
        "normalized": "a-\u003eText",
        "package": "HaTeX",
        "partial": "",
        "signature": "a-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:renderAppend",
      "description": {
        "fct-descr": "\u003cp\u003eRender every element of a list and append results.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Render",
        "fct-package": "HaTeX",
        "fct-signature": "[a] -\u003e Text",
        "fct-source": "src/Text-LaTeX-Base-Render.html#renderAppend",
        "fct-type": "function",
        "title": "renderAppend"
      },
      "index": {
        "description": "Render every element of list and append results",
        "hierarchy": "Text LaTeX Base Render",
        "module": "Text.LaTeX.Base.Render",
        "name": "renderAppend",
        "normalized": "[a]-\u003eText",
        "package": "HaTeX",
        "partial": "Append",
        "signature": "[a]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:renderChars",
      "description": {
        "fct-descr": "\u003cp\u003eRender every element of a list and append results,\n   separated by the given \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Render",
        "fct-package": "HaTeX",
        "fct-signature": "Char -\u003e [a] -\u003e Text",
        "fct-source": "src/Text-LaTeX-Base-Render.html#renderChars",
        "fct-type": "function",
        "title": "renderChars"
      },
      "index": {
        "description": "Render every element of list and append results separated by the given Char",
        "hierarchy": "Text LaTeX Base Render",
        "module": "Text.LaTeX.Base.Render",
        "name": "renderChars",
        "normalized": "Char-\u003e[a]-\u003eText",
        "package": "HaTeX",
        "partial": "Chars",
        "signature": "Char-\u003e[a]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:renderCommas",
      "description": {
        "fct-descr": "\u003cp\u003eRender every element of a list and append results,\n   separated by commas.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Render",
        "fct-package": "HaTeX",
        "fct-signature": "[a] -\u003e Text",
        "fct-source": "src/Text-LaTeX-Base-Render.html#renderCommas",
        "fct-type": "function",
        "title": "renderCommas"
      },
      "index": {
        "description": "Render every element of list and append results separated by commas",
        "hierarchy": "Text LaTeX Base Render",
        "module": "Text.LaTeX.Base.Render",
        "name": "renderCommas",
        "normalized": "[a]-\u003eText",
        "package": "HaTeX",
        "partial": "Commas",
        "signature": "[a]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:renderFile",
      "description": {
        "fct-descr": "\u003cp\u003eUse this function to render a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e (or another\n   one in the \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e class) value directly\n   in a file.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Render",
        "fct-package": "HaTeX",
        "fct-signature": "FilePath -\u003e a -\u003e IO ()",
        "fct-source": "src/Text-LaTeX-Base-Render.html#renderFile",
        "fct-type": "function",
        "title": "renderFile"
      },
      "index": {
        "description": "Use this function to render LaTeX or another one in the Render class value directly in file",
        "hierarchy": "Text LaTeX Base Render",
        "module": "Text.LaTeX.Base.Render",
        "name": "renderFile",
        "normalized": "FilePath-\u003ea-\u003eIO()",
        "package": "HaTeX",
        "partial": "File",
        "signature": "FilePath-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:rendertex",
      "description": {
        "fct-descr": "\u003cp\u003eIf you can transform a value to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, you can\n   insert that \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e in your \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e code.\n   That is what this function does.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWarning: \u003c/em\u003e\u003ccode\u003e\u003ca\u003erendertex\u003c/a\u003e\u003c/code\u003e\u003cem\u003e does not escape LaTeX reserved characters.\u003c/em\u003e\n \u003cem\u003eUse \u003c/em\u003e\u003ccode\u003e\u003ca\u003eprotectText\u003c/a\u003e\u003c/code\u003e\u003cem\u003e to escape them.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Render",
        "fct-package": "HaTeX",
        "fct-signature": "a -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Render.html#rendertex",
        "fct-type": "function",
        "title": "rendertex"
      },
      "index": {
        "description": "If you can transform value to Text you can insert that Text in your LaTeX code That is what this function does Warning rendertex does not escape LaTeX reserved characters Use protectText to escape them",
        "hierarchy": "Text LaTeX Base Render",
        "module": "Text.LaTeX.Base.Render",
        "name": "rendertex",
        "normalized": "a-\u003eb",
        "package": "HaTeX",
        "partial": "",
        "signature": "a-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:showFloat",
      "description": {
        "fct-descr": "\u003cp\u003eShow a signed floating number using standard decimal notation using 5 decimals.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Render",
        "fct-package": "HaTeX",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Text-LaTeX-Base-Render.html#showFloat",
        "fct-type": "function",
        "title": "showFloat"
      },
      "index": {
        "description": "Show signed floating number using standard decimal notation using decimals",
        "hierarchy": "Text LaTeX Base Render",
        "module": "Text.LaTeX.Base.Render",
        "name": "showFloat",
        "normalized": "a-\u003eString",
        "package": "HaTeX",
        "partial": "Float",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLaTeX syntax description in the definition of the \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e datatype.\n   If you want to add new commands or environments not defined in\n   the library, import this module and use \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e data constructors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html",
        "fct-type": "module",
        "title": "Syntax"
      },
      "index": {
        "description": "LaTeX syntax description in the definition of the LaTeX datatype If you want to add new commands or environments not defined in the library import this module and use LaTeX data constructors",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "Syntax",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Syntax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#t:LaTeX",
      "description": {
        "fct-descr": "\u003cp\u003eType of \u003ccode\u003eLaTeX\u003c/code\u003e blocks.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
        "fct-type": "data",
        "title": "LaTeX"
      },
      "index": {
        "description": "Type of LaTeX blocks",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "LaTeX",
        "normalized": "",
        "package": "HaTeX",
        "partial": "La Te",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#t:MathType",
      "description": {
        "fct-descr": "\u003cp\u003eDifferent types of syntax for mathematical expressions.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#MathType",
        "fct-type": "data",
        "title": "MathType"
      },
      "index": {
        "description": "Different types of syntax for mathematical expressions",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "MathType",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Math Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#t:Measure",
      "description": {
        "fct-descr": "\u003cp\u003eMeasure units defined in LaTeX. Use \u003ccode\u003e\u003ca\u003eCustomMeasure\u003c/a\u003e\u003c/code\u003e to use commands like \u003ccode\u003etextwidth\u003c/code\u003e.\n   For instance:\n\u003c/p\u003e\u003cpre\u003e rule Nothing (CustomMeasure linewidth) (Pt 2)\n\u003c/pre\u003e\u003cp\u003eThis will create a black box (see \u003ccode\u003erule\u003c/code\u003e) as wide as the text and two points tall.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "data",
        "title": "Measure"
      },
      "index": {
        "description": "Measure units defined in LaTeX Use CustomMeasure to use commands like textwidth For instance rule Nothing CustomMeasure linewidth Pt This will create black box see rule as wide as the text and two points tall",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "Measure",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Measure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#t:TeXArg",
      "description": {
        "fct-descr": "\u003cp\u003eAn argument for a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e command or environment.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#TeXArg",
        "fct-type": "data",
        "title": "TeXArg"
      },
      "index": {
        "description": "An argument for LaTeX command or environment",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "TeXArg",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Te XArg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "An infix synonym for mappend",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Cm",
      "description": {
        "fct-descr": "\u003cp\u003eCentimeter.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Cm Double",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "function",
        "title": "Cm"
      },
      "index": {
        "description": "Centimeter",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "Cm",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Cm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:CustomMeasure",
      "description": {
        "fct-descr": "\u003cp\u003eYou can introduce a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e expression as a measure.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "CustomMeasure LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "function",
        "title": "CustomMeasure"
      },
      "index": {
        "description": "You can introduce LaTeX expression as measure",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "CustomMeasure",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Custom Measure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Dollar",
      "description": {
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Dollar",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#MathType",
        "fct-type": "function",
        "title": "Dollar"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "Dollar",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Dollar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Em",
      "description": {
        "fct-descr": "\u003cp\u003eThe width of an \"M\" in the current font.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Em Double",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "function",
        "title": "Em"
      },
      "index": {
        "description": "The width of an in the current font",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "Em",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Em",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Ex",
      "description": {
        "fct-descr": "\u003cp\u003eThe height of an \"x\" in the current font.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Ex Double",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "function",
        "title": "Ex"
      },
      "index": {
        "description": "The height of an in the current font",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "Ex",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Ex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:FixArg",
      "description": {
        "fct-descr": "\u003cp\u003eFixed argument.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "FixArg LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#TeXArg",
        "fct-type": "function",
        "title": "FixArg"
      },
      "index": {
        "description": "Fixed argument",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "FixArg",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Fix Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:In",
      "description": {
        "fct-descr": "\u003cp\u003eInch.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "In Double",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "function",
        "title": "In"
      },
      "index": {
        "description": "Inch",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "In",
        "normalized": "",
        "package": "HaTeX",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:MOptArg",
      "description": {
        "fct-descr": "\u003cp\u003eMultiple optional argument.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "MOptArg [LaTeX]",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#TeXArg",
        "fct-type": "function",
        "title": "MOptArg"
      },
      "index": {
        "description": "Multiple optional argument",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "MOptArg",
        "normalized": "MOptArg[LaTeX]",
        "package": "HaTeX",
        "partial": "MOpt Arg",
        "signature": "MOptArg[LaTeX]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:MSymArg",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003eSymArg\u003c/a\u003e\u003c/code\u003e with multiple options.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "MSymArg [LaTeX]",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#TeXArg",
        "fct-type": "function",
        "title": "MSymArg"
      },
      "index": {
        "description": "Version of SymArg with multiple options",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "MSymArg",
        "normalized": "MSymArg[LaTeX]",
        "package": "HaTeX",
        "partial": "MSym Arg",
        "signature": "MSymArg[LaTeX]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Mm",
      "description": {
        "fct-descr": "\u003cp\u003eMillimeter.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Mm Double",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "function",
        "title": "Mm"
      },
      "index": {
        "description": "Millimeter",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "Mm",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Mm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:OptArg",
      "description": {
        "fct-descr": "\u003cp\u003eOptional argument.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "OptArg LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#TeXArg",
        "fct-type": "function",
        "title": "OptArg"
      },
      "index": {
        "description": "Optional argument",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "OptArg",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Opt Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Parentheses",
      "description": {
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Parentheses",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#MathType",
        "fct-type": "function",
        "title": "Parentheses"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "Parentheses",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Parentheses",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Pt",
      "description": {
        "fct-descr": "\u003cp\u003eA point is 1/72.27 inch, that means about 0.0138 inch or 0.3515 mm.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Pt Double",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "function",
        "title": "Pt"
      },
      "index": {
        "description": "point is inch that means about inch or mm",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "Pt",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Pt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Square",
      "description": {
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Square",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#MathType",
        "fct-type": "function",
        "title": "Square"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "Square",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Square",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:SymArg",
      "description": {
        "fct-descr": "\u003cp\u003eAn argument enclosed between \u003ccode\u003e\u003c\u003c/code\u003e and \u003ccode\u003e\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "SymArg LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#TeXArg",
        "fct-type": "function",
        "title": "SymArg"
      },
      "index": {
        "description": "An argument enclosed between and",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "SymArg",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Sym Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXBraces",
      "description": {
        "fct-descr": "\u003cp\u003eA expression between braces.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TeXBraces LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
        "fct-type": "function",
        "title": "TeXBraces"
      },
      "index": {
        "description": "expression between braces",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "TeXBraces",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Te XBraces",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXComm",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for commands.\n First argument is the name of the command.\n Second, its arguments.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TeXComm String [TeXArg]",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
        "fct-type": "function",
        "title": "TeXComm"
      },
      "index": {
        "description": "Constructor for commands First argument is the name of the command Second its arguments",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "TeXComm",
        "normalized": "TeXComm String[TeXArg]",
        "package": "HaTeX",
        "partial": "Te XComm",
        "signature": "TeXComm String[TeXArg]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXCommS",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for commands with no arguments.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TeXCommS String",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
        "fct-type": "function",
        "title": "TeXCommS"
      },
      "index": {
        "description": "Constructor for commands with no arguments",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "TeXCommS",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Te XComm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXComment",
      "description": {
        "fct-descr": "\u003cp\u003eComments.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TeXComment Text",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
        "fct-type": "function",
        "title": "TeXComment"
      },
      "index": {
        "description": "Comments",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "TeXComment",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Te XComment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty block.\n \u003cem\u003eNeutral element\u003c/em\u003e of \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TeXEmpty",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
        "fct-type": "function",
        "title": "TeXEmpty"
      },
      "index": {
        "description": "An empty block Neutral element of",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "TeXEmpty",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Te XEmpty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXEnv",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for environments.\n First argument is the name of the environment.\n Second, its arguments.\n Third, its content.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TeXEnv String [TeXArg] LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
        "fct-type": "function",
        "title": "TeXEnv"
      },
      "index": {
        "description": "Constructor for environments First argument is the name of the environment Second its arguments Third its content",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "TeXEnv",
        "normalized": "TeXEnv String[TeXArg]LaTeX",
        "package": "HaTeX",
        "partial": "Te XEnv",
        "signature": "TeXEnv String[TeXArg]LaTeX"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXLineBreak",
      "description": {
        "fct-descr": "\u003cp\u003eLine break command.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TeXLineBreak (Maybe Measure) Bool",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
        "fct-type": "function",
        "title": "TeXLineBreak"
      },
      "index": {
        "description": "Line break command",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "TeXLineBreak",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Te XLine Break",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXMath",
      "description": {
        "fct-descr": "\u003cp\u003eMathematical expressions.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TeXMath MathType LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
        "fct-type": "function",
        "title": "TeXMath"
      },
      "index": {
        "description": "Mathematical expressions",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "TeXMath",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Te XMath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXOp",
      "description": {
        "fct-descr": "\u003cp\u003eOperators.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TeXOp String LaTeX LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
        "fct-type": "function",
        "title": "TeXOp"
      },
      "index": {
        "description": "Operators",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "TeXOp",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Te XOp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXRaw",
      "description": {
        "fct-descr": "\u003cp\u003eRaw text.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TeXRaw Text",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
        "fct-type": "function",
        "title": "TeXRaw"
      },
      "index": {
        "description": "Raw text",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "TeXRaw",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Te XRaw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXSeq",
      "description": {
        "fct-descr": "\u003cp\u003eSequencing of \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e expressions.\n Use \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e preferably.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TeXSeq LaTeX LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
        "fct-type": "function",
        "title": "TeXSeq"
      },
      "index": {
        "description": "Sequencing of LaTeX expressions Use preferably",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "TeXSeq",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Te XSeq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:getBody",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the content of the \u003ccode\u003edocument\u003c/code\u003e environment, if present.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeX -\u003e Maybe LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#getBody",
        "fct-type": "function",
        "title": "getBody"
      },
      "index": {
        "description": "Extract the content of the document environment if present",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "getBody",
        "normalized": "LaTeX-\u003eMaybe LaTeX",
        "package": "HaTeX",
        "partial": "Body",
        "signature": "LaTeX-\u003eMaybe LaTeX"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:getPreamble",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the preamble of a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e document (everything before the \u003ccode\u003edocument\u003c/code\u003e\n   environment). It could be empty.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeX -\u003e LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#getPreamble",
        "fct-type": "function",
        "title": "getPreamble"
      },
      "index": {
        "description": "Extract the preamble of LaTeX document everything before the document environment It could be empty",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "getPreamble",
        "normalized": "LaTeX-\u003eLaTeX",
        "package": "HaTeX",
        "partial": "Preamble",
        "signature": "LaTeX-\u003eLaTeX"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:lookForCommand",
      "description": {
        "fct-descr": "\u003cp\u003eLook into a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e syntax tree to find any call to the command with\n   the given name. It returns a list of arguments with which this command\n   is called.\n\u003c/p\u003e\u003cpre\u003e lookForCommand = (fmap snd .) . matchCommand . (==)\n\u003c/pre\u003e\u003cp\u003eIf the returned list is empty, the command was not found. However,\n   if the list contains empty lists, those are callings to the command\n   with no arguments.\n\u003c/p\u003e\u003cp\u003eFor example\n\u003c/p\u003e\u003cpre\u003e lookForCommand \"author\" l\n\u003c/pre\u003e\u003cp\u003ewould look for the argument passed to the \u003ccode\u003e\\author\u003c/code\u003e command in \u003ccode\u003el\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "String-\u003e LaTeX-\u003e [[TeXArg]]",
        "fct-type": "function",
        "title": "lookForCommand"
      },
      "index": {
        "description": "Look into LaTeX syntax tree to find any call to the command with the given name It returns list of arguments with which this command is called lookForCommand fmap snd matchCommand If the returned list is empty the command was not found However if the list contains empty lists those are callings to the command with no arguments For example lookForCommand author would look for the argument passed to the author command in",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "lookForCommand",
        "normalized": "String-\u003eLaTeX-\u003e[[TeXArg]]",
        "package": "HaTeX",
        "partial": "For Command",
        "signature": "String-\u003eLaTeX-\u003e[[TeXArg]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:lookForEnv",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003elookForCommand\u003c/a\u003e\u003c/code\u003e, but applied to environments.\n   It returns a list with arguments passed and content of the\n   environment in each call.\n\u003c/p\u003e\u003cpre\u003e lookForEnv = (fmap (\\(_,as,l) -\u003e (as,l)) .) . matchEnv . (==)\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "String -\u003e LaTeX -\u003e [([TeXArg], LaTeX)]",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#lookForEnv",
        "fct-type": "function",
        "title": "lookForEnv"
      },
      "index": {
        "description": "Similar to lookForCommand but applied to environments It returns list with arguments passed and content of the environment in each call lookForEnv fmap as as matchEnv",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "lookForEnv",
        "normalized": "String-\u003eLaTeX-\u003e[([TeXArg],LaTeX)]",
        "package": "HaTeX",
        "partial": "For Env",
        "signature": "String-\u003eLaTeX-\u003e[([TeXArg],LaTeX)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:matchCommand",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e syntax tree and returns the commands (see \u003ccode\u003e\u003ca\u003eTeXComm\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003eTeXCommS\u003c/a\u003e\u003c/code\u003e) that matches the condition and their arguments in each call.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "(String -\u003e Bool) -\u003e LaTeX -\u003e [(String, [TeXArg])]",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#matchCommand",
        "fct-type": "function",
        "title": "matchCommand"
      },
      "index": {
        "description": "Traverse LaTeX syntax tree and returns the commands see TeXComm and TeXCommS that matches the condition and their arguments in each call",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "matchCommand",
        "normalized": "(String-\u003eBool)-\u003eLaTeX-\u003e[(String,[TeXArg])]",
        "package": "HaTeX",
        "partial": "Command",
        "signature": "(String-\u003eBool)-\u003eLaTeX-\u003e[(String,[TeXArg])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:matchEnv",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e syntax tree and returns the environments (see\n   \u003ccode\u003e\u003ca\u003eTeXEnv\u003c/a\u003e\u003c/code\u003e) that matches the condition, their arguments and their content\n   in each call.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "(String -\u003e Bool) -\u003e LaTeX -\u003e [(String, [TeXArg], LaTeX)]",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#matchEnv",
        "fct-type": "function",
        "title": "matchEnv"
      },
      "index": {
        "description": "Traverse LaTeX syntax tree and returns the environments see TeXEnv that matches the condition their arguments and their content in each call",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "matchEnv",
        "normalized": "(String-\u003eBool)-\u003eLaTeX-\u003e[(String,[TeXArg],LaTeX)]",
        "package": "HaTeX",
        "partial": "Env",
        "signature": "(String-\u003eBool)-\u003eLaTeX-\u003e[(String,[TeXArg],LaTeX)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:protectString",
      "description": {
        "fct-descr": "\u003cp\u003eEscape LaTeX reserved characters in a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#protectString",
        "fct-type": "function",
        "title": "protectString"
      },
      "index": {
        "description": "Escape LaTeX reserved characters in String",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "protectString",
        "normalized": "String-\u003eString",
        "package": "HaTeX",
        "partial": "String",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:protectText",
      "description": {
        "fct-descr": "\u003cp\u003eEscape LaTeX reserved characters in a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#protectText",
        "fct-type": "function",
        "title": "protectText"
      },
      "index": {
        "description": "Escape LaTeX reserved characters in Text",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "protectText",
        "normalized": "Text-\u003eText",
        "package": "HaTeX",
        "partial": "Text",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:texmap",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003etexmap\u003c/a\u003e\u003c/code\u003e looks for subexpressions that match a given\n   condition and applies a function to them.\n\u003c/p\u003e\u003cpre\u003e texmap c f = runIdentity . texmapM c (pure . f)\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "(LaTeX -\u003e Bool)-\u003e (LaTeX -\u003e LaTeX)-\u003e LaTeX-\u003e LaTeX",
        "fct-type": "function",
        "title": "texmap"
      },
      "index": {
        "description": "The function texmap looks for subexpressions that match given condition and applies function to them texmap runIdentity texmapM pure",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "texmap",
        "normalized": "(LaTeX-\u003eBool)-\u003e(LaTeX-\u003eLaTeX)-\u003eLaTeX-\u003eLaTeX",
        "package": "HaTeX",
        "partial": "",
        "signature": "(LaTeX-\u003eBool)-\u003e(LaTeX-\u003eLaTeX)-\u003eLaTeX-\u003eLaTeX"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:texmapM",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003etexmap\u003c/a\u003e\u003c/code\u003e where the function returns values in a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "(LaTeX -\u003e Bool)-\u003e (LaTeX -\u003e m LaTeX)-\u003e LaTeX-\u003e m LaTeX",
        "fct-type": "function",
        "title": "texmapM"
      },
      "index": {
        "description": "Version of texmap where the function returns values in Monad",
        "hierarchy": "Text LaTeX Base Syntax",
        "module": "Text.LaTeX.Base.Syntax",
        "name": "texmapM",
        "normalized": "(LaTeX-\u003eBool)-\u003e(LaTeX-\u003ea LaTeX)-\u003eLaTeX-\u003ea LaTeX",
        "package": "HaTeX",
        "partial": "",
        "signature": "(LaTeX-\u003eBool)-\u003e(LaTeX-\u003em LaTeX)-\u003eLaTeX-\u003em LaTeX"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Texy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTexy\u003c/a\u003e\u003c/code\u003e class, as proposed in \u003ca\u003ehttp://deltadiaz.blogspot.com.es/2013/04/hatex-36-proposal-texy-class.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Base.Texy",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Base-Texy.html",
        "fct-type": "module",
        "title": "Texy"
      },
      "index": {
        "description": "Texy class as proposed in http deltadiaz.blogspot.com.es hatex-36-proposal-texy-class.html",
        "hierarchy": "Text LaTeX Base Texy",
        "module": "Text.LaTeX.Base.Texy",
        "name": "Texy",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Texy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Texy.html#t:Texy",
      "description": {
        "fct-descr": "\u003cp\u003eClass of types that can be pretty-printed as \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Texy",
        "fct-package": "HaTeX",
        "fct-signature": "class",
        "fct-source": "src/Text-LaTeX-Base-Texy.html#Texy",
        "fct-type": "class",
        "title": "Texy"
      },
      "index": {
        "description": "Class of types that can be pretty-printed as LaTeX values",
        "hierarchy": "Text LaTeX Base Texy",
        "module": "Text.LaTeX.Base.Texy",
        "name": "Texy",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Texy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Texy.html#v:texy",
      "description": {
        "fct-module": "Text.LaTeX.Base.Texy",
        "fct-package": "HaTeX",
        "fct-signature": "t -\u003e l",
        "fct-source": "src/Text-LaTeX-Base-Texy.html#texy",
        "fct-type": "method",
        "title": "texy"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Texy",
        "module": "Text.LaTeX.Base.Texy",
        "name": "texy",
        "normalized": "a-\u003eb",
        "package": "HaTeX",
        "partial": "",
        "signature": "t-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome types shared along the library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Base-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Some types shared along the library",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "Types",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:ClassName",
      "description": {
        "fct-descr": "\u003cp\u003eClass names are represented by a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "type",
        "fct-source": "src/Text-LaTeX-Base-Types.html#ClassName",
        "fct-type": "type",
        "title": "ClassName"
      },
      "index": {
        "description": "Class names are represented by String",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "ClassName",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Class Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:HPos",
      "description": {
        "fct-descr": "\u003cp\u003eHorizontal position.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Types.html#HPos",
        "fct-type": "data",
        "title": "HPos"
      },
      "index": {
        "description": "Horizontal position",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "HPos",
        "normalized": "",
        "package": "HaTeX",
        "partial": "HPos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eType of labels.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Types.html#Label",
        "fct-type": "data",
        "title": "Label"
      },
      "index": {
        "description": "Type of labels",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "Label",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:Measure",
      "description": {
        "fct-descr": "\u003cp\u003eMeasure units defined in LaTeX. Use \u003ccode\u003e\u003ca\u003eCustomMeasure\u003c/a\u003e\u003c/code\u003e to use commands like \u003ccode\u003etextwidth\u003c/code\u003e.\n   For instance:\n\u003c/p\u003e\u003cpre\u003e rule Nothing (CustomMeasure linewidth) (Pt 2)\n\u003c/pre\u003e\u003cp\u003eThis will create a black box (see \u003ccode\u003erule\u003c/code\u003e) as wide as the text and two points tall.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "data",
        "title": "Measure"
      },
      "index": {
        "description": "Measure units defined in LaTeX Use CustomMeasure to use commands like textwidth For instance rule Nothing CustomMeasure linewidth Pt This will create black box see rule as wide as the text and two points tall",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "Measure",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Measure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:PackageName",
      "description": {
        "fct-descr": "\u003cp\u003ePackage names are represented by a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "type",
        "fct-source": "src/Text-LaTeX-Base-Types.html#PackageName",
        "fct-type": "type",
        "title": "PackageName"
      },
      "index": {
        "description": "Package names are represented by String",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "PackageName",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Package Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:PageStyle",
      "description": {
        "fct-descr": "\u003cp\u003ePage styles are represented by a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "type",
        "fct-source": "src/Text-LaTeX-Base-Types.html#PageStyle",
        "fct-type": "type",
        "title": "PageStyle"
      },
      "index": {
        "description": "Page styles are represented by String",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "PageStyle",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Page Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:Pos",
      "description": {
        "fct-descr": "\u003cp\u003eVertical position.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Types.html#Pos",
        "fct-type": "data",
        "title": "Pos"
      },
      "index": {
        "description": "Vertical position",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "Pos",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:TableSpec",
      "description": {
        "fct-descr": "\u003cp\u003eType of table specifications.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Types.html#TableSpec",
        "fct-type": "data",
        "title": "TableSpec"
      },
      "index": {
        "description": "Type of table specifications",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "TableSpec",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Table Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Bottom",
      "description": {
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "Bottom",
        "fct-source": "src/Text-LaTeX-Base-Types.html#Pos",
        "fct-type": "function",
        "title": "Bottom"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "Bottom",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Bottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Center",
      "description": {
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "Center",
        "fct-source": "src/Text-LaTeX-Base-Types.html#Pos",
        "fct-type": "function",
        "title": "Center"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "Center",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Center",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:CenterColumn",
      "description": {
        "fct-descr": "\u003cp\u003eCentered column.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "CenterColumn",
        "fct-source": "src/Text-LaTeX-Base-Types.html#TableSpec",
        "fct-type": "function",
        "title": "CenterColumn"
      },
      "index": {
        "description": "Centered column",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "CenterColumn",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Center Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Cm",
      "description": {
        "fct-descr": "\u003cp\u003eCentimeter.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "Cm Double",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "function",
        "title": "Cm"
      },
      "index": {
        "description": "Centimeter",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "Cm",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Cm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:CustomMeasure",
      "description": {
        "fct-descr": "\u003cp\u003eYou can introduce a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e expression as a measure.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "CustomMeasure LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "function",
        "title": "CustomMeasure"
      },
      "index": {
        "description": "You can introduce LaTeX expression as measure",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "CustomMeasure",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Custom Measure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:DVerticalLine",
      "description": {
        "fct-descr": "\u003cp\u003eDouble vertical line between two columns.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "DVerticalLine",
        "fct-source": "src/Text-LaTeX-Base-Types.html#TableSpec",
        "fct-type": "function",
        "title": "DVerticalLine"
      },
      "index": {
        "description": "Double vertical line between two columns",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "DVerticalLine",
        "normalized": "",
        "package": "HaTeX",
        "partial": "DVertical Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Em",
      "description": {
        "fct-descr": "\u003cp\u003eThe width of an \"M\" in the current font.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "Em Double",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "function",
        "title": "Em"
      },
      "index": {
        "description": "The width of an in the current font",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "Em",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Em",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Ex",
      "description": {
        "fct-descr": "\u003cp\u003eThe height of an \"x\" in the current font.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "Ex Double",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "function",
        "title": "Ex"
      },
      "index": {
        "description": "The height of an in the current font",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "Ex",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Ex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:HCenter",
      "description": {
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "HCenter",
        "fct-source": "src/Text-LaTeX-Base-Types.html#HPos",
        "fct-type": "function",
        "title": "HCenter"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "HCenter",
        "normalized": "",
        "package": "HaTeX",
        "partial": "HCenter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:HLeft",
      "description": {
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "HLeft",
        "fct-source": "src/Text-LaTeX-Base-Types.html#HPos",
        "fct-type": "function",
        "title": "HLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "HLeft",
        "normalized": "",
        "package": "HaTeX",
        "partial": "HLeft",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:HRight",
      "description": {
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "HRight",
        "fct-source": "src/Text-LaTeX-Base-Types.html#HPos",
        "fct-type": "function",
        "title": "HRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "HRight",
        "normalized": "",
        "package": "HaTeX",
        "partial": "HRight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:In",
      "description": {
        "fct-descr": "\u003cp\u003eInch.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "In Double",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "function",
        "title": "In"
      },
      "index": {
        "description": "Inch",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "In",
        "normalized": "",
        "package": "HaTeX",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:LeftColumn",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-justified column.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "LeftColumn",
        "fct-source": "src/Text-LaTeX-Base-Types.html#TableSpec",
        "fct-type": "function",
        "title": "LeftColumn"
      },
      "index": {
        "description": "Left-justified column",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "LeftColumn",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Left Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Mm",
      "description": {
        "fct-descr": "\u003cp\u003eMillimeter.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "Mm Double",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "function",
        "title": "Mm"
      },
      "index": {
        "description": "Millimeter",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "Mm",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Mm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:ParColumnBot",
      "description": {
        "fct-descr": "\u003cp\u003eParagraph column with text vertically aligned at the bottom. Requires \u003ccode\u003earray\u003c/code\u003e package.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "ParColumnBot LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Types.html#TableSpec",
        "fct-type": "function",
        "title": "ParColumnBot"
      },
      "index": {
        "description": "Paragraph column with text vertically aligned at the bottom Requires array package",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "ParColumnBot",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Par Column Bot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:ParColumnMid",
      "description": {
        "fct-descr": "\u003cp\u003eParagraph column with text vertically aligned at the middle. Requires \u003ccode\u003earray\u003c/code\u003e package.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "ParColumnMid LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Types.html#TableSpec",
        "fct-type": "function",
        "title": "ParColumnMid"
      },
      "index": {
        "description": "Paragraph column with text vertically aligned at the middle Requires array package",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "ParColumnMid",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Par Column Mid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:ParColumnTop",
      "description": {
        "fct-descr": "\u003cp\u003eParagraph column with text vertically aligned at the top.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "ParColumnTop LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Types.html#TableSpec",
        "fct-type": "function",
        "title": "ParColumnTop"
      },
      "index": {
        "description": "Paragraph column with text vertically aligned at the top",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "ParColumnTop",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Par Column Top",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Pt",
      "description": {
        "fct-descr": "\u003cp\u003eA point is 1/72.27 inch, that means about 0.0138 inch or 0.3515 mm.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "Pt Double",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#Measure",
        "fct-type": "function",
        "title": "Pt"
      },
      "index": {
        "description": "point is inch that means about inch or mm",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "Pt",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Pt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:RightColumn",
      "description": {
        "fct-descr": "\u003cp\u003eRight-justified column.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "RightColumn",
        "fct-source": "src/Text-LaTeX-Base-Types.html#TableSpec",
        "fct-type": "function",
        "title": "RightColumn"
      },
      "index": {
        "description": "Right-justified column",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "RightColumn",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Right Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Top",
      "description": {
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "Top",
        "fct-source": "src/Text-LaTeX-Base-Types.html#Pos",
        "fct-type": "function",
        "title": "Top"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "Top",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Top",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:VerticalLine",
      "description": {
        "fct-descr": "\u003cp\u003eVertical line between two columns.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "VerticalLine",
        "fct-source": "src/Text-LaTeX-Base-Types.html#TableSpec",
        "fct-type": "function",
        "title": "VerticalLine"
      },
      "index": {
        "description": "Vertical line between two columns",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "VerticalLine",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Vertical Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:createLabel",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a label from its name.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "String -\u003e Label",
        "fct-source": "src/Text-LaTeX-Base-Types.html#createLabel",
        "fct-type": "function",
        "title": "createLabel"
      },
      "index": {
        "description": "Create label from its name",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "createLabel",
        "normalized": "String-\u003eLabel",
        "package": "HaTeX",
        "partial": "Label",
        "signature": "String-\u003eLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:labelName",
      "description": {
        "fct-descr": "\u003cp\u003eGet the name of a label.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Types",
        "fct-package": "HaTeX",
        "fct-signature": "Label -\u003e String",
        "fct-source": "src/Text-LaTeX-Base-Types.html#labelName",
        "fct-type": "function",
        "title": "labelName"
      },
      "index": {
        "description": "Get the name of label",
        "hierarchy": "Text LaTeX Base Types",
        "module": "Text.LaTeX.Base.Types",
        "name": "labelName",
        "normalized": "Label-\u003eString",
        "package": "HaTeX",
        "partial": "Name",
        "signature": "Label-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functionality for check a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value for\n   possibly undesired things (like the call to an undefined label),\n   returning \u003ccode\u003e\u003ca\u003eWarning\u003c/a\u003e\u003c/code\u003es. These are called \u003ccode\u003e\u003ca\u003eWarning\u003c/a\u003e\u003c/code\u003es because they\n   never terminate the program execution.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Base.Warnings",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Base-Warnings.html",
        "fct-type": "module",
        "title": "Warnings"
      },
      "index": {
        "description": "This module provides functionality for check LaTeX value for possibly undesired things like the call to an undefined label returning Warning These are called Warning because they never terminate the program execution",
        "hierarchy": "Text LaTeX Base Warnings",
        "module": "Text.LaTeX.Base.Warnings",
        "name": "Warnings",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Warnings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#t:TeXCheck",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTeXCheck\u003c/a\u003e\u003c/code\u003e is a function that checks possible warnings from a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value.\n   Use the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance to combine check functions.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Warnings",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Warnings.html#TeXCheck",
        "fct-type": "data",
        "title": "TeXCheck"
      },
      "index": {
        "description": "TeXCheck is function that checks possible warnings from LaTeX value Use the Monoid instance to combine check functions",
        "hierarchy": "Text LaTeX Base Warnings",
        "module": "Text.LaTeX.Base.Warnings",
        "name": "TeXCheck",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Te XCheck",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#t:Warning",
      "description": {
        "fct-descr": "\u003cp\u003eList of possible warnings.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Warnings",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Warnings.html#Warning",
        "fct-type": "data",
        "title": "Warning"
      },
      "index": {
        "description": "List of possible warnings",
        "hierarchy": "Text LaTeX Base Warnings",
        "module": "Text.LaTeX.Base.Warnings",
        "name": "Warning",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:CustomWarning",
      "description": {
        "fct-descr": "\u003cp\u003eCustom warning for custom checkings. Use it as you want.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Warnings",
        "fct-package": "HaTeX",
        "fct-signature": "CustomWarning Text",
        "fct-source": "src/Text-LaTeX-Base-Warnings.html#Warning",
        "fct-type": "function",
        "title": "CustomWarning"
      },
      "index": {
        "description": "Custom warning for custom checkings Use it as you want",
        "hierarchy": "Text LaTeX Base Warnings",
        "module": "Text.LaTeX.Base.Warnings",
        "name": "CustomWarning",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Custom Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:NoClassSelected",
      "description": {
        "fct-descr": "\u003cp\u003eNo class selected with \u003ccode\u003edocumentclass\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Warnings",
        "fct-package": "HaTeX",
        "fct-signature": "NoClassSelected",
        "fct-source": "src/Text-LaTeX-Base-Warnings.html#Warning",
        "fct-type": "function",
        "title": "NoClassSelected"
      },
      "index": {
        "description": "No class selected with documentclass",
        "hierarchy": "Text LaTeX Base Warnings",
        "module": "Text.LaTeX.Base.Warnings",
        "name": "NoClassSelected",
        "normalized": "",
        "package": "HaTeX",
        "partial": "No Class Selected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:NoDocumentInserted",
      "description": {
        "fct-descr": "\u003cp\u003eNo \u003ccode\u003edocument\u003c/code\u003e inserted.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Warnings",
        "fct-package": "HaTeX",
        "fct-signature": "NoDocumentInserted",
        "fct-source": "src/Text-LaTeX-Base-Warnings.html#Warning",
        "fct-type": "function",
        "title": "NoDocumentInserted"
      },
      "index": {
        "description": "No document inserted",
        "hierarchy": "Text LaTeX Base Warnings",
        "module": "Text.LaTeX.Base.Warnings",
        "name": "NoDocumentInserted",
        "normalized": "",
        "package": "HaTeX",
        "partial": "No Document Inserted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:UndefinedLabel",
      "description": {
        "fct-descr": "\u003cp\u003eThere is a reference to an undefined label. Arguments is the name.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Warnings",
        "fct-package": "HaTeX",
        "fct-signature": "UndefinedLabel Text",
        "fct-source": "src/Text-LaTeX-Base-Warnings.html#Warning",
        "fct-type": "function",
        "title": "UndefinedLabel"
      },
      "index": {
        "description": "There is reference to an undefined label Arguments is the name",
        "hierarchy": "Text LaTeX Base Warnings",
        "module": "Text.LaTeX.Base.Warnings",
        "name": "UndefinedLabel",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Undefined Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:UnusedLabel",
      "description": {
        "fct-descr": "\u003cp\u003eThere is an unused label. Argument is its name.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Warnings",
        "fct-package": "HaTeX",
        "fct-signature": "UnusedLabel Text",
        "fct-source": "src/Text-LaTeX-Base-Warnings.html#Warning",
        "fct-type": "function",
        "title": "UnusedLabel"
      },
      "index": {
        "description": "There is an unused label Argument is its name",
        "hierarchy": "Text LaTeX Base Warnings",
        "module": "Text.LaTeX.Base.Warnings",
        "name": "UnusedLabel",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Unused Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:check",
      "description": {
        "fct-descr": "\u003cp\u003eApply a checking.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Warnings",
        "fct-package": "HaTeX",
        "fct-signature": "TeXCheck -\u003e LaTeX -\u003e [Warning]",
        "fct-source": "src/Text-LaTeX-Base-Warnings.html#check",
        "fct-type": "function",
        "title": "check"
      },
      "index": {
        "description": "Apply checking",
        "hierarchy": "Text LaTeX Base Warnings",
        "module": "Text.LaTeX.Base.Warnings",
        "name": "check",
        "normalized": "TeXCheck-\u003eLaTeX-\u003e[Warning]",
        "package": "HaTeX",
        "partial": "",
        "signature": "TeXCheck-\u003eLaTeX-\u003e[Warning]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:checkAll",
      "description": {
        "fct-descr": "\u003cp\u003eCheck with \u003ccode\u003e\u003ca\u003echeckLabels\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echeckClass\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003echeckDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Warnings",
        "fct-package": "HaTeX",
        "fct-signature": "TeXCheck",
        "fct-source": "src/Text-LaTeX-Base-Warnings.html#checkAll",
        "fct-type": "function",
        "title": "checkAll"
      },
      "index": {
        "description": "Check with checkLabels checkClass and checkDoc",
        "hierarchy": "Text LaTeX Base Warnings",
        "module": "Text.LaTeX.Base.Warnings",
        "name": "checkAll",
        "normalized": "",
        "package": "HaTeX",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:checkClass",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a document class is specified for the document (using \u003ccode\u003edocumentclass\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Warnings",
        "fct-package": "HaTeX",
        "fct-signature": "TeXCheck",
        "fct-source": "src/Text-LaTeX-Base-Warnings.html#checkClass",
        "fct-type": "function",
        "title": "checkClass"
      },
      "index": {
        "description": "Check if document class is specified for the document using documentclass",
        "hierarchy": "Text LaTeX Base Warnings",
        "module": "Text.LaTeX.Base.Warnings",
        "name": "checkClass",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:checkDoc",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the \u003ccode\u003edocument\u003c/code\u003e environment is called in a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Warnings",
        "fct-package": "HaTeX",
        "fct-signature": "TeXCheck",
        "fct-source": "src/Text-LaTeX-Base-Warnings.html#checkDoc",
        "fct-type": "function",
        "title": "checkDoc"
      },
      "index": {
        "description": "Check if the document environment is called in LaTeX",
        "hierarchy": "Text LaTeX Base Warnings",
        "module": "Text.LaTeX.Base.Warnings",
        "name": "checkDoc",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:checkFromFunction",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003eTeXCheck\u003c/a\u003e\u003c/code\u003e from a function.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Warnings",
        "fct-package": "HaTeX",
        "fct-signature": "(LaTeX -\u003e [Warning]) -\u003e TeXCheck",
        "fct-source": "src/Text-LaTeX-Base-Warnings.html#checkFromFunction",
        "fct-type": "function",
        "title": "checkFromFunction"
      },
      "index": {
        "description": "Build TeXCheck from function",
        "hierarchy": "Text LaTeX Base Warnings",
        "module": "Text.LaTeX.Base.Warnings",
        "name": "checkFromFunction",
        "normalized": "(LaTeX-\u003e[Warning])-\u003eTeXCheck",
        "package": "HaTeX",
        "partial": "From Function",
        "signature": "(LaTeX-\u003e[Warning])-\u003eTeXCheck"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:checkLabels",
      "description": {
        "fct-descr": "\u003cp\u003eChecking for unused labels or references tu undefined labels.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Warnings",
        "fct-package": "HaTeX",
        "fct-signature": "TeXCheck",
        "fct-source": "src/Text-LaTeX-Base-Warnings.html#checkLabels",
        "fct-type": "function",
        "title": "checkLabels"
      },
      "index": {
        "description": "Checking for unused labels or references tu undefined labels",
        "hierarchy": "Text LaTeX Base Warnings",
        "module": "Text.LaTeX.Base.Warnings",
        "name": "checkLabels",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Labels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe writer monad applied to \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values. Useful to compose \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values\n   using the \u003ccode\u003edo\u003c/code\u003e notation:\n\u003c/p\u003e\u003cpre\u003e anExample :: Monad m =\u003e LaTeXT m ()\n anExample = do\n   documentclass [] article\n   author \"Daniel Monad\"\n   title \"LaTeX and do notation\"\n   document $ do\n     maketitle\n     section \"Some words\"\n     \"Using \" ; texttt \"do\" ; \" notation \"\n     \"you avoid many ocurrences of the \"\n     texttt \"(\u003c\u003e)\" ; \" operator and a lot of \"\n     \"parentheses. With the cost of a monad.\"\n\u003c/pre\u003e\u003cp\u003eSince \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e is a monad transformer, you can do also:\n\u003c/p\u003e\u003cpre\u003e anotherExample :: LaTeXT IO ()\n anotherExample = lift (readFileTex \"foo\") \u003e\u003e= verbatim\n\u003c/pre\u003e\u003cp\u003eThis way, it is easy (without carrying arguments) to include IO outputs\n in the LaTeX document, like files, times or random objects.\n\u003c/p\u003e\u003cp\u003eAnother approach could be to have custom counters, label management\n or any other user-defined feature.\n\u003c/p\u003e\u003cp\u003eOf course, you can always use the simpler interface provided by the plain \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eAnother thing you should know about the LaTeX Writer Monad. Don't try to get values\n from computations with no results (like \u003ccode\u003eraw \u003ca\u003efoo\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Base-Writer.html",
        "fct-type": "module",
        "title": "Writer"
      },
      "index": {
        "description": "The writer monad applied to LaTeX values Useful to compose LaTeX values using the do notation anExample Monad LaTeXT anExample do documentclass article author Daniel Monad title LaTeX and do notation document do maketitle section Some words Using texttt do notation you avoid many ocurrences of the texttt operator and lot of parentheses With the cost of monad Since LaTeXT is monad transformer you can do also anotherExample LaTeXT IO anotherExample lift readFileTex foo verbatim This way it is easy without carrying arguments to include IO outputs in the LaTeX document like files times or random objects Another approach could be to have custom counters label management or any other user-defined feature Of course you can always use the simpler interface provided by the plain LaTeX type Another thing you should know about the LaTeX Writer Monad Don try to get values from computations with no results like raw foo",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "Writer",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#t:LaTeXT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e monad transformer applied to \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Writer.html#LaTeXT",
        "fct-type": "data",
        "title": "LaTeXT"
      },
      "index": {
        "description": "WriterT monad transformer applied to LaTeX values",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "LaTeXT",
        "normalized": "",
        "package": "HaTeX",
        "partial": "La Te XT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#t:LaTeXT_",
      "description": {
        "fct-descr": "\u003cp\u003eType synonym for empty \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "type",
        "fct-source": "src/Text-LaTeX-Base-Writer.html#LaTeXT_",
        "fct-type": "type",
        "title": "LaTeXT_"
      },
      "index": {
        "description": "Type synonym for empty LaTeXT computations",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "LaTeXT_",
        "normalized": "",
        "package": "HaTeX",
        "partial": "La Te XT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:execLaTeXT",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the usual way to run the \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e monad\n   and obtain a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cpre\u003e execLaTeXT = liftM snd . runLaTeXT\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003eanExample\u003c/code\u003e is defined as above (at the top of this module\n documentation), use the following to get the LaTeX value\n generated out.\n\u003c/p\u003e\u003cpre\u003e myLaTeX :: Monad m =\u003e m LaTeX\n myLaTeX = execLaTeXT anExample\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeXT m a -\u003e m LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Writer.html#execLaTeXT",
        "fct-type": "function",
        "title": "execLaTeXT"
      },
      "index": {
        "description": "This is the usual way to run the LaTeXT monad and obtain LaTeX value execLaTeXT liftM snd runLaTeXT If anExample is defined as above at the top of this module documentation use the following to get the LaTeX value generated out myLaTeX Monad LaTeX myLaTeX execLaTeXT anExample",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "execLaTeXT",
        "normalized": "LaTeXT a b-\u003ea LaTeX",
        "package": "HaTeX",
        "partial": "La Te XT",
        "signature": "LaTeXT m a-\u003em LaTeX"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:execLaTeXTWarn",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003eexecLaTeXT\u003c/a\u003e\u003c/code\u003e with possible warning messages.\n   This function applies \u003ccode\u003e\u003ca\u003echeckAll\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e output.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeXT m a -\u003e m (LaTeX, [Warning])",
        "fct-source": "src/Text-LaTeX-Base-Writer.html#execLaTeXTWarn",
        "fct-type": "function",
        "title": "execLaTeXTWarn"
      },
      "index": {
        "description": "Version of execLaTeXT with possible warning messages This function applies checkAll to the LaTeX output",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "execLaTeXTWarn",
        "normalized": "LaTeXT a b-\u003ea(LaTeX,[Warning])",
        "package": "HaTeX",
        "partial": "La Te XTWarn",
        "signature": "LaTeXT m a-\u003em(LaTeX,[Warning])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:extractLaTeX",
      "description": {
        "fct-descr": "\u003cp\u003eThis function run a \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e computation,\n   lifting the result again in the monad.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeXT m a -\u003e LaTeXT m (a, LaTeX)",
        "fct-source": "src/Text-LaTeX-Base-Writer.html#extractLaTeX",
        "fct-type": "function",
        "title": "extractLaTeX"
      },
      "index": {
        "description": "This function run LaTeXT computation lifting the result again in the monad",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "extractLaTeX",
        "normalized": "LaTeXT a b-\u003eLaTeXT a(b,LaTeX)",
        "package": "HaTeX",
        "partial": "La Te",
        "signature": "LaTeXT m a-\u003eLaTeXT m(a,LaTeX)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:extractLaTeX_",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e computation, embedding it again in\n   the \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cpre\u003e extractLaTeX_ = liftM snd . extractLaTeX\n\u003c/pre\u003e\u003cp\u003eThis function was heavily used in the past by HaTeX-meta\n to generate those \u003ccode\u003e.Monad\u003c/code\u003e modules. The current purpose\n is to implement the \u003ccode\u003e\u003ca\u003eLaTeXC\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e, which\n is closely related.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeXT m a -\u003e LaTeXT m LaTeX",
        "fct-source": "src/Text-LaTeX-Base-Writer.html#extractLaTeX_",
        "fct-type": "function",
        "title": "extractLaTeX_"
      },
      "index": {
        "description": "Executes LaTeXT computation embedding it again in the LaTeXT monad extractLaTeX liftM snd extractLaTeX This function was heavily used in the past by HaTeX-meta to generate those Monad modules The current purpose is to implement the LaTeXC instance of LaTeXT which is closely related",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "extractLaTeX_",
        "normalized": "LaTeXT a b-\u003eLaTeXT a LaTeX",
        "package": "HaTeX",
        "partial": "La Te",
        "signature": "LaTeXT m a-\u003eLaTeXT m LaTeX"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the argument monad to the constructed monad.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "m a -\u003e t m a",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "Lift computation from the argument monad to the constructed monad",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "lift",
        "normalized": "a b-\u003ec a b",
        "package": "HaTeX",
        "partial": "",
        "signature": "m a-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:liftFun",
      "description": {
        "fct-descr": "\u003cp\u003eLift a function over \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values to a function\n   acting over the state of a \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "(LaTeX -\u003e LaTeX) -\u003e LaTeXT m a -\u003e LaTeXT m a",
        "fct-source": "src/Text-LaTeX-Base-Writer.html#liftFun",
        "fct-type": "function",
        "title": "liftFun"
      },
      "index": {
        "description": "Lift function over LaTeX values to function acting over the state of LaTeXT computation",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "liftFun",
        "normalized": "(LaTeX-\u003eLaTeX)-\u003eLaTeXT a b-\u003eLaTeXT a b",
        "package": "HaTeX",
        "partial": "Fun",
        "signature": "(LaTeX-\u003eLaTeX)-\u003eLaTeXT m a-\u003eLaTeXT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:liftIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "forall a.  IO a -\u003e m a",
        "fct-type": "function",
        "title": "liftIO"
      },
      "index": {
        "description": "Lift computation from the IO monad",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "liftIO",
        "normalized": "a b IO c-\u003ed c",
        "package": "HaTeX",
        "partial": "IO",
        "signature": "forall a. IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:liftOp",
      "description": {
        "fct-descr": "\u003cp\u003eLift an operator over \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values to an operator\n   acting over the state of two \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote: The returned value is the one returned by the\u003c/em\u003e\n \u003cem\u003esecond argument of the lifted operator.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "(LaTeX -\u003e LaTeX -\u003e LaTeX) -\u003e LaTeXT m a -\u003e LaTeXT m b -\u003e LaTeXT m b",
        "fct-source": "src/Text-LaTeX-Base-Writer.html#liftOp",
        "fct-type": "function",
        "title": "liftOp"
      },
      "index": {
        "description": "Lift an operator over LaTeX values to an operator acting over the state of two LaTeXT computations Note The returned value is the one returned by the second argument of the lifted operator",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "liftOp",
        "normalized": "(LaTeX-\u003eLaTeX-\u003eLaTeX)-\u003eLaTeXT a b-\u003eLaTeXT a c-\u003eLaTeXT a c",
        "package": "HaTeX",
        "partial": "Op",
        "signature": "(LaTeX-\u003eLaTeX-\u003eLaTeX)-\u003eLaTeXT m a-\u003eLaTeXT m b-\u003eLaTeXT m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:merror",
      "description": {
        "fct-descr": "\u003cp\u003eFunction \u003ccode\u003e\u003ca\u003emerror\u003c/a\u003e\u003c/code\u003e casts a value contained in a monad \u003ccode\u003em\u003c/code\u003e to the\n   bottom value of another type. If you try to evaluate this value, you will\n   get an error message with the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e passed as argument to \u003ccode\u003e\u003ca\u003emerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "String -\u003e LaTeXT m a -\u003e LaTeXT m b",
        "fct-source": "src/Text-LaTeX-Base-Writer.html#merror",
        "fct-type": "function",
        "title": "merror"
      },
      "index": {
        "description": "Function merror casts value contained in monad to the bottom value of another type If you try to evaluate this value you will get an error message with the String passed as argument to merror",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "merror",
        "normalized": "String-\u003eLaTeXT a b-\u003eLaTeXT a c",
        "package": "HaTeX",
        "partial": "",
        "signature": "String-\u003eLaTeXT m a-\u003eLaTeXT m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:rendertexM",
      "description": {
        "fct-descr": "\u003cp\u003eJust like \u003ccode\u003e\u003ca\u003erendertex\u003c/a\u003e\u003c/code\u003e, but with \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e output.\n\u003c/p\u003e\u003cpre\u003e rendertexM = textell . rendertex\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "a -\u003e LaTeXT m ()",
        "fct-source": "src/Text-LaTeX-Base-Writer.html#rendertexM",
        "fct-type": "function",
        "title": "rendertexM"
      },
      "index": {
        "description": "Just like rendertex but with LaTeXT output rendertexM textell rendertex",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "rendertexM",
        "normalized": "a-\u003eLaTeXT b()",
        "package": "HaTeX",
        "partial": "",
        "signature": "a-\u003eLaTeXT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:runLaTeXT",
      "description": {
        "fct-descr": "\u003cp\u003eRunning a \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e computation returns the final \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value\n   and either a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e if the computation didn't contain any value\n   or the value itself otherwise.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeXT m a -\u003e m (Either String a, LaTeX)",
        "fct-source": "src/Text-LaTeX-Base-Writer.html#runLaTeXT",
        "fct-type": "function",
        "title": "runLaTeXT"
      },
      "index": {
        "description": "Running LaTeXT computation returns the final LaTeX value and either String if the computation didn contain any value or the value itself otherwise",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "runLaTeXT",
        "normalized": "LaTeXT a b-\u003ea(Either String b,LaTeX)",
        "package": "HaTeX",
        "partial": "La Te XT",
        "signature": "LaTeXT m a-\u003em(Either String a,LaTeX)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:textell",
      "description": {
        "fct-descr": "\u003cp\u003eWith \u003ccode\u003e\u003ca\u003etextell\u003c/a\u003e\u003c/code\u003e you can append \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values to the\n   state of the \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeX -\u003e LaTeXT m ()",
        "fct-source": "src/Text-LaTeX-Base-Writer.html#textell",
        "fct-type": "function",
        "title": "textell"
      },
      "index": {
        "description": "With textell you can append LaTeX values to the state of the LaTeXT monad",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "textell",
        "normalized": "LaTeX-\u003eLaTeXT a()",
        "package": "HaTeX",
        "partial": "",
        "signature": "LaTeX-\u003eLaTeXT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:throwError",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base.Writer",
        "fct-package": "HaTeX",
        "fct-signature": "String -\u003e LaTeXT m a",
        "fct-source": "src/Text-LaTeX-Base-Writer.html#throwError",
        "fct-type": "function",
        "title": "throwError"
      },
      "index": {
        "description": "The fail method of the LaTeXT monad",
        "hierarchy": "Text LaTeX Base Writer",
        "module": "Text.LaTeX.Base.Writer",
        "name": "throwError",
        "normalized": "String-\u003eLaTeXT a b",
        "package": "HaTeX",
        "partial": "Error",
        "signature": "String-\u003eLaTeXT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports those minimal things you need\nto work with HaTeX. Those things are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e datatype.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e operator, to append \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eText.LaTeX.Base.Render\u003c/a\u003e module, to render a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value into \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eText.LaTeX.Base.Types\u003c/a\u003e module, which contains several types used by\n  other modules.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eText.LaTeX.Base.Commands\u003c/a\u003e module, which exports the LaTeX standard commands\n  and environments.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eText.LaTeX.Base.Writer\u003c/a\u003e module, to work with the monad interface of the library.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eText.LaTeX.Base.Texy\u003c/a\u003e module, which exports the \u003ccode\u003e\u003ca\u003eTexy\u003c/a\u003e\u003c/code\u003e class. Useful to pretty-print\n  values in LaTeX form.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Base",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "This module exports those minimal things you need to work with HaTeX Those things are The LaTeX datatype The operator to append LaTeX values The Text.LaTeX.Base.Render module to render LaTeX value into Text The Text.LaTeX.Base.Types module which contains several types used by other modules The Text.LaTeX.Base.Commands module which exports the LaTeX standard commands and environments The Text.LaTeX.Base.Writer module to work with the monad interface of the library The Text.LaTeX.Base.Texy module which exports the Texy class Useful to pretty-print values in LaTeX form",
        "hierarchy": "Text LaTeX Base",
        "module": "Text.LaTeX.Base",
        "name": "Base",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#t:LaTeX",
      "description": {
        "fct-descr": "\u003cp\u003eType of \u003ccode\u003eLaTeX\u003c/code\u003e blocks.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
        "fct-type": "data",
        "title": "LaTeX"
      },
      "index": {
        "description": "Type of LaTeX blocks",
        "hierarchy": "Text LaTeX Base",
        "module": "Text.LaTeX.Base",
        "name": "LaTeX",
        "normalized": "",
        "package": "HaTeX",
        "partial": "La Te",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#t:Monoid",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base",
        "fct-package": "HaTeX",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Monoid"
      },
      "index": {
        "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
        "hierarchy": "Text LaTeX Base",
        "module": "Text.LaTeX.Base",
        "name": "Monoid",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base",
        "fct-package": "HaTeX",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "An infix synonym for mappend",
        "hierarchy": "Text LaTeX Base",
        "module": "Text.LaTeX.Base",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#v:mappend",
      "description": {
        "fct-descr": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base",
        "fct-package": "HaTeX",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "mappend"
      },
      "index": {
        "description": "An associative operation",
        "hierarchy": "Text LaTeX Base",
        "module": "Text.LaTeX.Base",
        "name": "mappend",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#v:mconcat",
      "description": {
        "fct-descr": "\u003cp\u003eFold a list using the monoid.\n For most types, the default definition for \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e will be\n used, but the function is included in the class definition so\n that an optimized version can be provided for specific types.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base",
        "fct-package": "HaTeX",
        "fct-signature": "[a] -\u003e a",
        "fct-type": "method",
        "title": "mconcat"
      },
      "index": {
        "description": "Fold list using the monoid For most types the default definition for mconcat will be used but the function is included in the class definition so that an optimized version can be provided for specific types",
        "hierarchy": "Text LaTeX Base",
        "module": "Text.LaTeX.Base",
        "name": "mconcat",
        "normalized": "[a]-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#v:mempty",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base",
        "fct-package": "HaTeX",
        "fct-signature": "a",
        "fct-type": "method",
        "title": "mempty"
      },
      "index": {
        "description": "Identity of mappend",
        "hierarchy": "Text LaTeX Base",
        "module": "Text.LaTeX.Base",
        "name": "mempty",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#v:protectString",
      "description": {
        "fct-descr": "\u003cp\u003eEscape LaTeX reserved characters in a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base",
        "fct-package": "HaTeX",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#protectString",
        "fct-type": "function",
        "title": "protectString"
      },
      "index": {
        "description": "Escape LaTeX reserved characters in String",
        "hierarchy": "Text LaTeX Base",
        "module": "Text.LaTeX.Base",
        "name": "protectString",
        "normalized": "String-\u003eString",
        "package": "HaTeX",
        "partial": "String",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#v:protectText",
      "description": {
        "fct-descr": "\u003cp\u003eEscape LaTeX reserved characters in a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Base",
        "fct-package": "HaTeX",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Text-LaTeX-Base-Syntax.html#protectText",
        "fct-type": "function",
        "title": "protectText"
      },
      "index": {
        "description": "Escape LaTeX reserved characters in Text",
        "hierarchy": "Text LaTeX Base",
        "module": "Text.LaTeX.Base",
        "name": "protectText",
        "normalized": "Text-\u003eText",
        "package": "HaTeX",
        "partial": "Text",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSFonts.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for the package \u003ccode\u003eamsfonts\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSFonts",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-AMSFonts.html",
        "fct-type": "module",
        "title": "AMSFonts"
      },
      "index": {
        "description": "Module for the package amsfonts",
        "hierarchy": "Text LaTeX Packages AMSFonts",
        "module": "Text.LaTeX.Packages.AMSFonts",
        "name": "AMSFonts",
        "normalized": "",
        "package": "HaTeX",
        "partial": "AMSFonts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSFonts.html#v:amsfonts",
      "description": {
        "fct-descr": "\u003cp\u003eAMSFonts package.\n Example:\n\u003c/p\u003e\u003cpre\u003e usepackage [] amsfonts\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSFonts",
        "fct-package": "HaTeX",
        "fct-signature": "ClassName",
        "fct-source": "src/Text-LaTeX-Packages-AMSFonts.html#amsfonts",
        "fct-type": "function",
        "title": "amsfonts"
      },
      "index": {
        "description": "AMSFonts package Example usepackage amsfonts",
        "hierarchy": "Text LaTeX Packages AMSFonts",
        "module": "Text.LaTeX.Packages.AMSFonts",
        "name": "amsfonts",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSFonts.html#v:mathbb",
      "description": {
        "fct-descr": "\u003cp\u003eThis font is useful for representing sets like\n   R (real numbers) or Z (integers). For instance:\n\u003c/p\u003e\u003cpre\u003e \"The set of real numbers are represented by \" \u003c\u003e mathbb \"R\" \u003c\u003e \".\"\n\u003c/pre\u003e\u003cp\u003eOr in monadic form:\n\u003c/p\u003e\u003cpre\u003e \"The set of real numbers are represented by \" \u003e\u003e mathbb \"R\" \u003e\u003e \".\"\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNote the use of overloaded strings.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSFonts",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSFonts.html#mathbb",
        "fct-type": "function",
        "title": "mathbb"
      },
      "index": {
        "description": "This font is useful for representing sets like real numbers or integers For instance The set of real numbers are represented by mathbb Or in monadic form The set of real numbers are represented by mathbb Note the use of overloaded strings",
        "hierarchy": "Text LaTeX Packages AMSFonts",
        "module": "Text.LaTeX.Packages.AMSFonts",
        "name": "mathbb",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAMSMath support. Also numeric instances (\u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e) for \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html",
        "fct-type": "module",
        "title": "AMSMath"
      },
      "index": {
        "description": "AMSMath support Also numeric instances Num Fractional and Floating for LaTeX and LaTeXT",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "AMSMath",
        "normalized": "",
        "package": "HaTeX",
        "partial": "AMSMath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-33-:",
      "description": {
        "fct-descr": "\u003cp\u003eSubscript.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#%21%3A",
        "fct-type": "function",
        "title": "(!:)"
      },
      "index": {
        "description": "Subscript",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "(!:) !:",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-42-:",
      "description": {
        "fct-descr": "\u003cp\u003eAsterisk operator (*).\n\u003c/p\u003e\u003cpre\u003e infixl 7 *:\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#%2A%3A",
        "fct-type": "function",
        "title": "(*:)"
      },
      "index": {
        "description": "Asterisk operator infixl",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "(*:) *:",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-47--61-:",
      "description": {
        "fct-descr": "\u003cp\u003eNot equal (&#8800;).\n\u003c/p\u003e\u003cpre\u003e infixr 4 /=:\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#%2F%3D%3A",
        "fct-type": "function",
        "title": "(/=:)"
      },
      "index": {
        "description": "Not equal infixr",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "(/=:) /=:",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-60--61-:",
      "description": {
        "fct-descr": "\u003cp\u003eLesser or equal (&#8804;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#%3C%3D%3A",
        "fct-type": "function",
        "title": "(\u003c=:)"
      },
      "index": {
        "description": "Lesser or equal",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "(\u003c=:) \u003c=:",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-60-:",
      "description": {
        "fct-descr": "\u003cp\u003eLesser.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#%3C%3A",
        "fct-type": "function",
        "title": "(\u003c:)"
      },
      "index": {
        "description": "Lesser",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "(\u003c:) \u003c:",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-61-:",
      "description": {
        "fct-descr": "\u003cp\u003eEqual.\n\u003c/p\u003e\u003cpre\u003e infixr 4 =:\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#%3D%3A",
        "fct-type": "function",
        "title": "(=:)"
      },
      "index": {
        "description": "Equal infixr",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "(=:) =:",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-62--61-:",
      "description": {
        "fct-descr": "\u003cp\u003eGreater or equal (&#8805;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#%3E%3D%3A",
        "fct-type": "function",
        "title": "(\u003e=:)"
      },
      "index": {
        "description": "Greater or equal",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "(\u003e=:) \u003e=:",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-62-:",
      "description": {
        "fct-descr": "\u003cp\u003eGreater.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#%3E%3A",
        "fct-type": "function",
        "title": "(\u003e:)"
      },
      "index": {
        "description": "Greater",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "(\u003e:) \u003e:",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-94-:",
      "description": {
        "fct-descr": "\u003cp\u003eSuperscript.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#%5E%3A",
        "fct-type": "function",
        "title": "(^:)"
      },
      "index": {
        "description": "Superscript",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "(^:) ^:",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:align",
      "description": {
        "fct-descr": "\u003cp\u003eAn array of aligned equations. Use \u003ccode\u003e\u003ca\u003e&\u003c/a\u003e\u003c/code\u003e to specify the points that should\n horizontally match. Each equation is numbered, unless prevented by \u003ccode\u003e\u003ca\u003enonumber\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "[l] -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#align",
        "fct-type": "function",
        "title": "align"
      },
      "index": {
        "description": "An array of aligned equations Use to specify the points that should horizontally match Each equation is numbered unless prevented by nonumber",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "align",
        "normalized": "[a]-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "[l]-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:align_",
      "description": {
        "fct-descr": "\u003cp\u003eThe unnumbered variant of \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "[l] -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#align_",
        "fct-type": "function",
        "title": "align_"
      },
      "index": {
        "description": "The unnumbered variant of align",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "align_",
        "normalized": "[a]-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "[l]-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:alpha",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#alpha",
        "fct-type": "function",
        "title": "alpha"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "alpha",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:amsmath",
      "description": {
        "fct-descr": "\u003cp\u003eAMSMath package.\n Example:\n\u003c/p\u003e\u003cpre\u003e usepackage [] amsmath\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "PackageName",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#amsmath",
        "fct-type": "function",
        "title": "amsmath"
      },
      "index": {
        "description": "AMSMath package Example usepackage amsmath",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "amsmath",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:arccos",
      "description": {
        "fct-descr": "\u003cp\u003eArccosine function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#arccos",
        "fct-type": "function",
        "title": "arccos"
      },
      "index": {
        "description": "Arccosine function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "arccos",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:arccot",
      "description": {
        "fct-descr": "\u003cp\u003eArccotangent function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#arccot",
        "fct-type": "function",
        "title": "arccot"
      },
      "index": {
        "description": "Arccotangent function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "arccot",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:arcsin",
      "description": {
        "fct-descr": "\u003cp\u003eArcsine function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#arcsin",
        "fct-type": "function",
        "title": "arcsin"
      },
      "index": {
        "description": "Arcsine function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "arcsin",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:arctan",
      "description": {
        "fct-descr": "\u003cp\u003eArctangent function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#arctan",
        "fct-type": "function",
        "title": "arctan"
      },
      "index": {
        "description": "Arctangent function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "arctan",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:autoAngleBrackets",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eautoParens\u003c/a\u003e\u003c/code\u003e, but with angle brackets &#9001; ... &#9002;. Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eautoBrackets\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elangle\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003erangle\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#autoAngleBrackets",
        "fct-type": "function",
        "title": "autoAngleBrackets"
      },
      "index": {
        "description": "Like autoParens but with angle brackets Equivalent to autoBrackets langle rangle",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "autoAngleBrackets",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "Angle Brackets",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:autoBraces",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eautoParens\u003c/a\u003e\u003c/code\u003e, but with curly brackets.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#autoBraces",
        "fct-type": "function",
        "title": "autoBraces"
      },
      "index": {
        "description": "Like autoParens but with curly brackets",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "autoBraces",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "Braces",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:autoBrackets",
      "description": {
        "fct-descr": "\u003cp\u003eUse custom LaTeX expressions as auto-scaled delimiters to surround math.\n Suitable delimiters include |...| (absolute value), &#8214;...&#8214; (norm,\n \u003ccode\u003e\u003ca\u003edblPipe\u003c/a\u003e\u003c/code\u003e), &#8970;...&#8971; (round-off Gauss brackets, \u003ccode\u003e\u003ca\u003elfloor\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003erfloor\u003c/a\u003e\u003c/code\u003e) etc..\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeX -\u003e LaTeX -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#autoBrackets",
        "fct-type": "function",
        "title": "autoBrackets"
      },
      "index": {
        "description": "Use custom LaTeX expressions as auto-scaled delimiters to surround math Suitable delimiters include absolute value norm dblPipe round-off Gauss brackets lfloor rfloor etc",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "autoBrackets",
        "normalized": "LaTeX-\u003eLaTeX-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "Brackets",
        "signature": "LaTeX-\u003eLaTeX-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:autoParens",
      "description": {
        "fct-descr": "\u003cp\u003eSurround a LaTeX math expression by parentheses whose height\n automatically matches the expression's. Translates to \u003ccode\u003e\\left(...\\right)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#autoParens",
        "fct-type": "function",
        "title": "autoParens"
      },
      "index": {
        "description": "Surround LaTeX math expression by parentheses whose height automatically matches the expression Translates to left right",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "autoParens",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "Parens",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:autoSquareBrackets",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eautoParens\u003c/a\u003e\u003c/code\u003e, but with square brackets. Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eautoBrackets\u003c/a\u003e\u003c/code\u003e\"[\"\"]\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#autoSquareBrackets",
        "fct-type": "function",
        "title": "autoSquareBrackets"
      },
      "index": {
        "description": "Like autoParens but with square brackets Equivalent to autoBrackets",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "autoSquareBrackets",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "Square Brackets",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:b2matrix",
      "description": {
        "fct-descr": "\u003cp\u003eLaTeX rendering of a matrix using \u003ccode\u003eBmatrix\u003c/code\u003e and a custom function to render cells.\n   Optional argument sets the alignment of the cells. Default (providing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) \n   is centered.\n\u003c/p\u003e\u003cpre\u003e { M }\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe HPos -\u003e Matrix a -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#b2matrix",
        "fct-type": "function",
        "title": "b2matrix"
      },
      "index": {
        "description": "LaTeX rendering of matrix using Bmatrix and custom function to render cells Optional argument sets the alignment of the cells Default providing Nothing is centered",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "b2matrix",
        "normalized": "Maybe HPos-\u003eMatrix a-\u003eb",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe HPos-\u003eMatrix a-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:beta",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#beta",
        "fct-type": "function",
        "title": "beta"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "beta",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:bmatrix",
      "description": {
        "fct-descr": "\u003cp\u003eLaTeX rendering of a matrix using \u003ccode\u003ebmatrix\u003c/code\u003e and a custom function to render cells.\n   Optional argument sets the alignment of the cells. Default (providing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) \n   is centered.\n\u003c/p\u003e\u003cpre\u003e [ M ]\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe HPos -\u003e Matrix a -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#bmatrix",
        "fct-type": "function",
        "title": "bmatrix"
      },
      "index": {
        "description": "LaTeX rendering of matrix using bmatrix and custom function to render cells Optional argument sets the alignment of the cells Default providing Nothing is centered",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "bmatrix",
        "normalized": "Maybe HPos-\u003eMatrix a-\u003eb",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe HPos-\u003eMatrix a-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:bullet",
      "description": {
        "fct-descr": "\u003cp\u003eBullet operator (&#8729;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#bullet",
        "fct-type": "function",
        "title": "bullet"
      },
      "index": {
        "description": "Bullet operator",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "bullet",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:cap",
      "description": {
        "fct-descr": "\u003cp\u003eSet intersection (&#8745;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#cap",
        "fct-type": "function",
        "title": "cap"
      },
      "index": {
        "description": "Set intersection",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "cap",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:cdot",
      "description": {
        "fct-descr": "\u003cp\u003eCentered-dot operator (&#8901;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#cdot",
        "fct-type": "function",
        "title": "cdot"
      },
      "index": {
        "description": "Centered-dot operator",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "cdot",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:chi",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#967;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#chi",
        "fct-type": "function",
        "title": "chi"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "chi",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:circ",
      "description": {
        "fct-descr": "\u003cp\u003eRing operator (&#8728;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#circ",
        "fct-type": "function",
        "title": "circ"
      },
      "index": {
        "description": "Ring operator",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "circ",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:cot",
      "description": {
        "fct-descr": "\u003cp\u003eCotangent function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#cot",
        "fct-type": "function",
        "title": "cot"
      },
      "index": {
        "description": "Cotangent function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "cot",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:coth",
      "description": {
        "fct-descr": "\u003cp\u003eHyperbolic cotangent function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#coth",
        "fct-type": "function",
        "title": "coth"
      },
      "index": {
        "description": "Hyperbolic cotangent function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "coth",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:csc",
      "description": {
        "fct-descr": "\u003cp\u003eCosecant function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#csc",
        "fct-type": "function",
        "title": "csc"
      },
      "index": {
        "description": "Cosecant function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "csc",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:cup",
      "description": {
        "fct-descr": "\u003cp\u003eSet union (&#8746;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#cup",
        "fct-type": "function",
        "title": "cup"
      },
      "index": {
        "description": "Set union",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "cup",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:dagger",
      "description": {
        "fct-descr": "\u003cp\u003eDagger symbol, &#8224;.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#dagger",
        "fct-type": "function",
        "title": "dagger"
      },
      "index": {
        "description": "Dagger symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "dagger",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:dblPipe",
      "description": {
        "fct-descr": "\u003cp\u003eDouble vertical line, used as delimiter for norms (&#8214; ... &#8214;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#dblPipe",
        "fct-type": "function",
        "title": "dblPipe"
      },
      "index": {
        "description": "Double vertical line used as delimiter for norms",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "dblPipe",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:ddagger",
      "description": {
        "fct-descr": "\u003cp\u003eDouble dagger symbol, &#8225;.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#ddagger",
        "fct-type": "function",
        "title": "ddagger"
      },
      "index": {
        "description": "Double dagger symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "ddagger",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:delta",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#delta",
        "fct-type": "function",
        "title": "delta"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "delta",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:deltau",
      "description": {
        "fct-descr": "\u003cp\u003e&#916; symbol.\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#deltau",
        "fct-type": "function",
        "title": "deltau"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "deltau",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:div_",
      "description": {
        "fct-descr": "\u003cp\u003eDivision operator.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#div_",
        "fct-type": "function",
        "title": "div_"
      },
      "index": {
        "description": "Division operator",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "div_",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:epsilon",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#1013;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#epsilon",
        "fct-type": "function",
        "title": "epsilon"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "epsilon",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:eqref",
      "description": {
        "fct-descr": "\u003cp\u003eA reference to a numbered equation. Use with a \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e defined in the\n scope of the equation refered to.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#eqref",
        "fct-type": "function",
        "title": "eqref"
      },
      "index": {
        "description": "reference to numbered equation Use with label defined in the scope of the equation refered to",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "eqref",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:equation",
      "description": {
        "fct-descr": "\u003cp\u003eA numbered mathematical equation (or otherwise math expression).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#equation",
        "fct-type": "function",
        "title": "equation"
      },
      "index": {
        "description": "numbered mathematical equation or otherwise math expression",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "equation",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:equation_",
      "description": {
        "fct-descr": "\u003cp\u003eThe unnumbered variant of \u003ccode\u003e\u003ca\u003eequation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#equation_",
        "fct-type": "function",
        "title": "equation_"
      },
      "index": {
        "description": "The unnumbered variant of equation",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "equation_",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:equiv",
      "description": {
        "fct-descr": "\u003cp\u003eIdentical / defined-as / equivalent (&#8801;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#equiv",
        "fct-type": "function",
        "title": "equiv"
      },
      "index": {
        "description": "Identical defined-as equivalent",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "equiv",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:eta",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#eta",
        "fct-type": "function",
        "title": "eta"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "eta",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:exists",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eExists\u003c/em\u003e symbol, &#8707;.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#exists",
        "fct-type": "function",
        "title": "exists"
      },
      "index": {
        "description": "Exists symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "exists",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:forall",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eFor all\u003c/em\u003e symbol, &#8704;.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#forall",
        "fct-type": "function",
        "title": "forall"
      },
      "index": {
        "description": "For all symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "forall",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:frac",
      "description": {
        "fct-descr": "\u003cp\u003eFraction operator.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#frac",
        "fct-type": "function",
        "title": "frac"
      },
      "index": {
        "description": "Fraction operator",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "frac",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:gamma",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#gamma",
        "fct-type": "function",
        "title": "gamma"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "gamma",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:gammau",
      "description": {
        "fct-descr": "\u003cp\u003e&#915; symbol.\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#gammau",
        "fct-type": "function",
        "title": "gammau"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "gammau",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:gg",
      "description": {
        "fct-descr": "\u003cp\u003eMuch greater (&#8811;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#gg",
        "fct-type": "function",
        "title": "gg"
      },
      "index": {
        "description": "Much greater",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "gg",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:in_",
      "description": {
        "fct-descr": "\u003cp\u003eElement-of (&#8712;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#in_",
        "fct-type": "function",
        "title": "in_"
      },
      "index": {
        "description": "Element-of",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "in_",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:infty",
      "description": {
        "fct-descr": "\u003cp\u003eInfinity symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#infty",
        "fct-type": "function",
        "title": "infty"
      },
      "index": {
        "description": "Infinity symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "infty",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:integral",
      "description": {
        "fct-descr": "\u003cp\u003eIntegral symbol. Use \u003ccode\u003e\u003ca\u003eintegralFromTo\u003c/a\u003e\u003c/code\u003e if you want to specify\n   the limits of the integral.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#integral",
        "fct-type": "function",
        "title": "integral"
      },
      "index": {
        "description": "Integral symbol Use integralFromTo if you want to specify the limits of the integral",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "integral",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:integralFromTo",
      "description": {
        "fct-descr": "\u003cp\u003eIntegral symbol with limits of integration.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l-\u003e l-\u003e l",
        "fct-type": "function",
        "title": "integralFromTo"
      },
      "index": {
        "description": "Integral symbol with limits of integration",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "integralFromTo",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "From To",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:iota",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#iota",
        "fct-type": "function",
        "title": "iota"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "iota",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:kappa",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#kappa",
        "fct-type": "function",
        "title": "kappa"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "kappa",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:lambda",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#lambda",
        "fct-type": "function",
        "title": "lambda"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "lambda",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:lambdau",
      "description": {
        "fct-descr": "\u003cp\u003e&#923; symbol.\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#lambdau",
        "fct-type": "function",
        "title": "lambdau"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "lambdau",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:langle",
      "description": {
        "fct-descr": "\u003cp\u003eLeft angle bracket, &#9001;.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#langle",
        "fct-type": "function",
        "title": "langle"
      },
      "index": {
        "description": "Left angle bracket",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "langle",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:lceil",
      "description": {
        "fct-descr": "\u003cp\u003eLeft ceiling, &#8968;.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#lceil",
        "fct-type": "function",
        "title": "lceil"
      },
      "index": {
        "description": "Left ceiling",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "lceil",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:lfloor",
      "description": {
        "fct-descr": "\u003cp\u003eLeft floor, &#8970;.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#lfloor",
        "fct-type": "function",
        "title": "lfloor"
      },
      "index": {
        "description": "Left floor",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "lfloor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:ll",
      "description": {
        "fct-descr": "\u003cp\u003eMuch less (&#8810;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#ll",
        "fct-type": "function",
        "title": "ll"
      },
      "index": {
        "description": "Much less",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "ll",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:ln",
      "description": {
        "fct-descr": "\u003cp\u003eNatural logarithm symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#ln",
        "fct-type": "function",
        "title": "ln"
      },
      "index": {
        "description": "Natural logarithm symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "ln",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mapsto",
      "description": {
        "fct-descr": "\u003cp\u003eA right-arrow for function definitions, &#8614;.\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#mapsto",
        "fct-type": "function",
        "title": "mapsto"
      },
      "index": {
        "description": "right-arrow for function definitions",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "mapsto",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:math",
      "description": {
        "fct-descr": "\u003cp\u003eInline mathematical expressions.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#math",
        "fct-type": "function",
        "title": "math"
      },
      "index": {
        "description": "Inline mathematical expressions",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "math",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathDisplay",
      "description": {
        "fct-descr": "\u003cp\u003eDisplayed mathematical expressions, i.e. in a seperate line / block.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#mathDisplay",
        "fct-type": "function",
        "title": "mathDisplay"
      },
      "index": {
        "description": "Displayed mathematical expressions i.e in seperate line block",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "mathDisplay",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "Display",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathbf",
      "description": {
        "fct-descr": "\u003cp\u003eBold face.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#mathbf",
        "fct-type": "function",
        "title": "mathbf"
      },
      "index": {
        "description": "Bold face",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "mathbf",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathcal",
      "description": {
        "fct-descr": "\u003cp\u003eCalligraphic math symbols.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#mathcal",
        "fct-type": "function",
        "title": "mathcal"
      },
      "index": {
        "description": "Calligraphic math symbols",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "mathcal",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathdefault",
      "description": {
        "fct-descr": "\u003cp\u003eDefault math symbol font.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#mathdefault",
        "fct-type": "function",
        "title": "mathdefault"
      },
      "index": {
        "description": "Default math symbol font",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "mathdefault",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathit",
      "description": {
        "fct-descr": "\u003cp\u003eItalic math. Uses the same glyphs as \u003ccode\u003e\u003ca\u003emathdefault\u003c/a\u003e\u003c/code\u003e, but with spacings\n   intended for multi-character symbols rather than juxtaposition of single-character symbols.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#mathit",
        "fct-type": "function",
        "title": "mathit"
      },
      "index": {
        "description": "Italic math Uses the same glyphs as mathdefault but with spacings intended for multi-character symbols rather than juxtaposition of single-character symbols",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "mathit",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathrm",
      "description": {
        "fct-descr": "\u003cp\u003eRoman, i.e. not-italic math.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#mathrm",
        "fct-type": "function",
        "title": "mathrm"
      },
      "index": {
        "description": "Roman i.e not-italic math",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "mathrm",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathsf",
      "description": {
        "fct-descr": "\u003cp\u003eSans-serif math.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#mathsf",
        "fct-type": "function",
        "title": "mathsf"
      },
      "index": {
        "description": "Sans-serif math",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "mathsf",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathtt",
      "description": {
        "fct-descr": "\u003cp\u003eTypewriter font.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#mathtt",
        "fct-type": "function",
        "title": "mathtt"
      },
      "index": {
        "description": "Typewriter font",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "mathtt",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mp",
      "description": {
        "fct-descr": "\u003cp\u003eMinus-or-plus operator (&#8723;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#mp",
        "fct-type": "function",
        "title": "mp"
      },
      "index": {
        "description": "Minus-or-plus operator",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "mp",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mu",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#mu",
        "fct-type": "function",
        "title": "mu"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "mu",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:ni",
      "description": {
        "fct-descr": "\u003cp\u003eMirrored element-of (&#8715;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#ni",
        "fct-type": "function",
        "title": "ni"
      },
      "index": {
        "description": "Mirrored element-of",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "ni",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:nonumber",
      "description": {
        "fct-descr": "\u003cp\u003ePrevent an equation from being numbered, where the environment would by default do that.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#nonumber",
        "fct-type": "function",
        "title": "nonumber"
      },
      "index": {
        "description": "Prevent an equation from being numbered where the environment would by default do that",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "nonumber",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:notin",
      "description": {
        "fct-descr": "\u003cp\u003eNot element of (&#8713;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#notin",
        "fct-type": "function",
        "title": "notin"
      },
      "index": {
        "description": "Not element of",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "notin",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:nu",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#nu",
        "fct-type": "function",
        "title": "nu"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "nu",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:odot",
      "description": {
        "fct-descr": "\u003cp\u003eCircled dot operator (&#8857;).\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#odot",
        "fct-type": "function",
        "title": "odot"
      },
      "index": {
        "description": "Circled dot operator",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "odot",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:omega",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#969;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#omega",
        "fct-type": "function",
        "title": "omega"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "omega",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:omegau",
      "description": {
        "fct-descr": "\u003cp\u003e&#937; symbol.\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#omegau",
        "fct-type": "function",
        "title": "omegau"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "omegau",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:ominus",
      "description": {
        "fct-descr": "\u003cp\u003eCircled minus operator (&#8854;).\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#ominus",
        "fct-type": "function",
        "title": "ominus"
      },
      "index": {
        "description": "Circled minus operator",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "ominus",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:oplus",
      "description": {
        "fct-descr": "\u003cp\u003eCircled plus operator (&#8853;).\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#oplus",
        "fct-type": "function",
        "title": "oplus"
      },
      "index": {
        "description": "Circled plus operator",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "oplus",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:oslash",
      "description": {
        "fct-descr": "\u003cp\u003eCircled slash (&#8856;).\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#oslash",
        "fct-type": "function",
        "title": "oslash"
      },
      "index": {
        "description": "Circled slash",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "oslash",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:otimes",
      "description": {
        "fct-descr": "\u003cp\u003eCircled multiplication cross (&#8855;).\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#otimes",
        "fct-type": "function",
        "title": "otimes"
      },
      "index": {
        "description": "Circled multiplication cross",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "otimes",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:phi",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#981;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#phi",
        "fct-type": "function",
        "title": "phi"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "phi",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:phiu",
      "description": {
        "fct-descr": "\u003cp\u003e&#934; symbol.\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#phiu",
        "fct-type": "function",
        "title": "phiu"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "phiu",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:pi_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#960;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#pi_",
        "fct-type": "function",
        "title": "pi_"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "pi_",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:piu",
      "description": {
        "fct-descr": "\u003cp\u003e&#928; symbol.\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#piu",
        "fct-type": "function",
        "title": "piu"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "piu",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:pm",
      "description": {
        "fct-descr": "\u003cp\u003ePlus-or-minus operator (&#177;).\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#pm",
        "fct-type": "function",
        "title": "pm"
      },
      "index": {
        "description": "Plus-or-minus operator",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "pm",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:pmatrix",
      "description": {
        "fct-descr": "\u003cp\u003eLaTeX rendering of a matrix using \u003ccode\u003epmatrix\u003c/code\u003e and a custom function to render cells.\n   Optional argument sets the alignment of the cells. Default (providing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) \n   is centered.\n\u003c/p\u003e\u003cpre\u003e ( M )\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe HPos -\u003e Matrix a -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#pmatrix",
        "fct-type": "function",
        "title": "pmatrix"
      },
      "index": {
        "description": "LaTeX rendering of matrix using pmatrix and custom function to render cells Optional argument sets the alignment of the cells Default providing Nothing is centered",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "pmatrix",
        "normalized": "Maybe HPos-\u003eMatrix a-\u003eb",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe HPos-\u003eMatrix a-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:prod",
      "description": {
        "fct-descr": "\u003cp\u003ePi product symbol. Use \u003ccode\u003e\u003ca\u003eprodFromTo\u003c/a\u003e\u003c/code\u003e if you want to specify the\n   limits of the product.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#prod",
        "fct-type": "function",
        "title": "prod"
      },
      "index": {
        "description": "Pi product symbol Use prodFromTo if you want to specify the limits of the product",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "prod",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:prodFromTo",
      "description": {
        "fct-descr": "\u003cp\u003ePi product symbol with limits.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l-\u003e l-\u003e l",
        "fct-type": "function",
        "title": "prodFromTo"
      },
      "index": {
        "description": "Pi product symbol with limits",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "prodFromTo",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "From To",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:propto",
      "description": {
        "fct-descr": "\u003cp\u003eProportional-to (&#8733;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#propto",
        "fct-type": "function",
        "title": "propto"
      },
      "index": {
        "description": "Proportional-to",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "propto",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:psi",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#968;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#psi",
        "fct-type": "function",
        "title": "psi"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "psi",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:psiu",
      "description": {
        "fct-descr": "\u003cp\u003e&#936; symbol.\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#psiu",
        "fct-type": "function",
        "title": "psiu"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "psiu",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:rangle",
      "description": {
        "fct-descr": "\u003cp\u003eRight angle bracket, &#9002;.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#rangle",
        "fct-type": "function",
        "title": "rangle"
      },
      "index": {
        "description": "Right angle bracket",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "rangle",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:rceil",
      "description": {
        "fct-descr": "\u003cp\u003eRight ceiling, &#8969;.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#rceil",
        "fct-type": "function",
        "title": "rceil"
      },
      "index": {
        "description": "Right ceiling",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "rceil",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:rfloor",
      "description": {
        "fct-descr": "\u003cp\u003eRight floor, &#8971;.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#rfloor",
        "fct-type": "function",
        "title": "rfloor"
      },
      "index": {
        "description": "Right floor",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "rfloor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:rho",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#961;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#rho",
        "fct-type": "function",
        "title": "rho"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "rho",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:sec",
      "description": {
        "fct-descr": "\u003cp\u003eSecant function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#sec",
        "fct-type": "function",
        "title": "sec"
      },
      "index": {
        "description": "Secant function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "sec",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:setminus",
      "description": {
        "fct-descr": "\u003cp\u003eSet minus (&#8726;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#setminus",
        "fct-type": "function",
        "title": "setminus"
      },
      "index": {
        "description": "Set minus",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "setminus",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:sigma",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#963;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#sigma",
        "fct-type": "function",
        "title": "sigma"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "sigma",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:sigmau",
      "description": {
        "fct-descr": "\u003cp\u003e&#931; symbol.\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#sigmau",
        "fct-type": "function",
        "title": "sigmau"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "sigmau",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:star",
      "description": {
        "fct-descr": "\u003cp\u003eStar operator (&#9733;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#star",
        "fct-type": "function",
        "title": "star"
      },
      "index": {
        "description": "Star operator",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "star",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:subset",
      "description": {
        "fct-descr": "\u003cp\u003eSubset-of (&#8834;).\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#subset",
        "fct-type": "function",
        "title": "subset"
      },
      "index": {
        "description": "Subset-of",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "subset",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:sumFromTo",
      "description": {
        "fct-descr": "\u003cp\u003eSigma sumation symbol with limits.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l-\u003e l-\u003e l",
        "fct-type": "function",
        "title": "sumFromTo"
      },
      "index": {
        "description": "Sigma sumation symbol with limits",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "sumFromTo",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "From To",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:supset",
      "description": {
        "fct-descr": "\u003cp\u003eSuperset-of (&#8835;).\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#supset",
        "fct-type": "function",
        "title": "supset"
      },
      "index": {
        "description": "Superset-of",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "supset",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tau",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#964;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#tau",
        "fct-type": "function",
        "title": "tau"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "tau",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tcos",
      "description": {
        "fct-descr": "\u003cp\u003eCosine function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#tcos",
        "fct-type": "function",
        "title": "tcos"
      },
      "index": {
        "description": "Cosine function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "tcos",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tcosh",
      "description": {
        "fct-descr": "\u003cp\u003eHyperbolic cosine function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#tcosh",
        "fct-type": "function",
        "title": "tcosh"
      },
      "index": {
        "description": "Hyperbolic cosine function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "tcosh",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:texp",
      "description": {
        "fct-descr": "\u003cp\u003eExponential function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#texp",
        "fct-type": "function",
        "title": "texp"
      },
      "index": {
        "description": "Exponential function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "texp",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:theta",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#theta",
        "fct-type": "function",
        "title": "theta"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "theta",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:thetau",
      "description": {
        "fct-descr": "\u003cp\u003e&#920; symbol.\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#thetau",
        "fct-type": "function",
        "title": "thetau"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "thetau",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:times",
      "description": {
        "fct-descr": "\u003cp\u003e\"x-cross\" multiplication operator (&#215;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#times",
        "fct-type": "function",
        "title": "times"
      },
      "index": {
        "description": "x-cross multiplication operator",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "times",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tlog",
      "description": {
        "fct-descr": "\u003cp\u003eLogarithm function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#tlog",
        "fct-type": "function",
        "title": "tlog"
      },
      "index": {
        "description": "Logarithm function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "tlog",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:to",
      "description": {
        "fct-descr": "\u003cp\u003eA right-arrow, &#8594;.\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#to",
        "fct-type": "function",
        "title": "to"
      },
      "index": {
        "description": "right-arrow",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "to",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tsin",
      "description": {
        "fct-descr": "\u003cp\u003eSine function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#tsin",
        "fct-type": "function",
        "title": "tsin"
      },
      "index": {
        "description": "Sine function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "tsin",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tsinh",
      "description": {
        "fct-descr": "\u003cp\u003eHyperbolic sine function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#tsinh",
        "fct-type": "function",
        "title": "tsinh"
      },
      "index": {
        "description": "Hyperbolic sine function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "tsinh",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tsqrt",
      "description": {
        "fct-descr": "\u003cp\u003eRoot notation. Use \u003ccode\u003etsqrt (Just n) x\u003c/code\u003e for the \u003ccode\u003en\u003c/code\u003eth root of \u003ccode\u003ex\u003c/code\u003e.\n   When \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is supplied, the function will output a square root.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#tsqrt",
        "fct-type": "function",
        "title": "tsqrt"
      },
      "index": {
        "description": "Root notation Use tsqrt Just for the th root of When Nothing is supplied the function will output square root",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "tsqrt",
        "normalized": "Maybe a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tsum",
      "description": {
        "fct-descr": "\u003cp\u003eSigma sumation symbol. Use \u003ccode\u003e\u003ca\u003esumFromTo\u003c/a\u003e\u003c/code\u003e instead if you want to\n   specify the limits of the sum.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#tsum",
        "fct-type": "function",
        "title": "tsum"
      },
      "index": {
        "description": "Sigma sumation symbol Use sumFromTo instead if you want to specify the limits of the sum",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "tsum",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:ttan",
      "description": {
        "fct-descr": "\u003cp\u003eTangent function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#ttan",
        "fct-type": "function",
        "title": "ttan"
      },
      "index": {
        "description": "Tangent function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "ttan",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:ttanh",
      "description": {
        "fct-descr": "\u003cp\u003eHyperbolic tangent function symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#ttanh",
        "fct-type": "function",
        "title": "ttanh"
      },
      "index": {
        "description": "Hyperbolic tangent function symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "ttanh",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:upsilon",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#965;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#upsilon",
        "fct-type": "function",
        "title": "upsilon"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "upsilon",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:upsilonu",
      "description": {
        "fct-descr": "\u003cp\u003e&#933; symbol.\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#upsilonu",
        "fct-type": "function",
        "title": "upsilonu"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "upsilonu",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:v2matrix",
      "description": {
        "fct-descr": "\u003cp\u003eLaTeX rendering of a matrix using \u003ccode\u003eVmatrix\u003c/code\u003e and a custom function to render cells.\n   Optional argument sets the alignment of the cells. Default (providing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) \n   is centered.\n\u003c/p\u003e\u003cpre\u003e || M ||\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe HPos -\u003e Matrix a -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#v2matrix",
        "fct-type": "function",
        "title": "v2matrix"
      },
      "index": {
        "description": "LaTeX rendering of matrix using Vmatrix and custom function to render cells Optional argument sets the alignment of the cells Default providing Nothing is centered",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "v2matrix",
        "normalized": "Maybe HPos-\u003eMatrix a-\u003eb",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe HPos-\u003eMatrix a-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:varepsilon",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#varepsilon",
        "fct-type": "function",
        "title": "varepsilon"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "varepsilon",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:varphi",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#966;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#varphi",
        "fct-type": "function",
        "title": "varphi"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "varphi",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:varpi",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#982;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#varpi",
        "fct-type": "function",
        "title": "varpi"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "varpi",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:varrho",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#1009;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#varrho",
        "fct-type": "function",
        "title": "varrho"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "varrho",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:varsigma",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#962;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#varsigma",
        "fct-type": "function",
        "title": "varsigma"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "varsigma",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:vartheta",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e&#977;\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#vartheta",
        "fct-type": "function",
        "title": "vartheta"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "vartheta",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:vee",
      "description": {
        "fct-descr": "\u003cp\u003eAngle pointing downwards (&#8744;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#vee",
        "fct-type": "function",
        "title": "vee"
      },
      "index": {
        "description": "Angle pointing downwards",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "vee",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:vmatrix",
      "description": {
        "fct-descr": "\u003cp\u003eLaTeX rendering of a matrix using \u003ccode\u003evmatrix\u003c/code\u003e and a custom function to render cells.\n   Optional argument sets the alignment of the cells. Default (providing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) \n   is centered.\n\u003c/p\u003e\u003cpre\u003e | M |\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe HPos -\u003e Matrix a -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#vmatrix",
        "fct-type": "function",
        "title": "vmatrix"
      },
      "index": {
        "description": "LaTeX rendering of matrix using vmatrix and custom function to render cells Optional argument sets the alignment of the cells Default providing Nothing is centered",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "vmatrix",
        "normalized": "Maybe HPos-\u003eMatrix a-\u003eb",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe HPos-\u003eMatrix a-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:wedge",
      "description": {
        "fct-descr": "\u003cp\u003eAngle pointing upwards (&#8743;).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#wedge",
        "fct-type": "function",
        "title": "wedge"
      },
      "index": {
        "description": "Angle pointing upwards",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "wedge",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:xi",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#xi",
        "fct-type": "function",
        "title": "xi"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "xi",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:xiu",
      "description": {
        "fct-descr": "\u003cp\u003e&#926; symbol.\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#xiu",
        "fct-type": "function",
        "title": "xiu"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "xiu",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:zeta",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSMath",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSMath.html#zeta",
        "fct-type": "function",
        "title": "zeta"
      },
      "index": {
        "description": "symbol",
        "hierarchy": "Text LaTeX Packages AMSMath",
        "module": "Text.LaTeX.Packages.AMSMath",
        "name": "zeta",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePackage for theorem environments.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSThm",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-AMSThm.html",
        "fct-type": "module",
        "title": "AMSThm"
      },
      "index": {
        "description": "Package for theorem environments",
        "hierarchy": "Text LaTeX Packages AMSThm",
        "module": "Text.LaTeX.Packages.AMSThm",
        "name": "AMSThm",
        "normalized": "",
        "package": "HaTeX",
        "partial": "AMSThm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#t:TheoremStyle",
      "description": {
        "fct-descr": "\u003cp\u003eDifferent styles for \u003ccode\u003e\u003ca\u003etheorem\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSThm",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-AMSThm.html#TheoremStyle",
        "fct-type": "data",
        "title": "TheoremStyle"
      },
      "index": {
        "description": "Different styles for theorem",
        "hierarchy": "Text LaTeX Packages AMSThm",
        "module": "Text.LaTeX.Packages.AMSThm",
        "name": "TheoremStyle",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Theorem Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:CustomThmStyle",
      "description": {
        "fct-module": "Text.LaTeX.Packages.AMSThm",
        "fct-package": "HaTeX",
        "fct-signature": "CustomThmStyle String",
        "fct-source": "src/Text-LaTeX-Packages-AMSThm.html#TheoremStyle",
        "fct-type": "function",
        "title": "CustomThmStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages AMSThm",
        "module": "Text.LaTeX.Packages.AMSThm",
        "name": "CustomThmStyle",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Custom Thm Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:Definition",
      "description": {
        "fct-module": "Text.LaTeX.Packages.AMSThm",
        "fct-package": "HaTeX",
        "fct-signature": "Definition",
        "fct-source": "src/Text-LaTeX-Packages-AMSThm.html#TheoremStyle",
        "fct-type": "function",
        "title": "Definition"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages AMSThm",
        "module": "Text.LaTeX.Packages.AMSThm",
        "name": "Definition",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Definition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:Plain",
      "description": {
        "fct-module": "Text.LaTeX.Packages.AMSThm",
        "fct-package": "HaTeX",
        "fct-signature": "Plain",
        "fct-source": "src/Text-LaTeX-Packages-AMSThm.html#TheoremStyle",
        "fct-type": "function",
        "title": "Plain"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages AMSThm",
        "module": "Text.LaTeX.Packages.AMSThm",
        "name": "Plain",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:Remark",
      "description": {
        "fct-module": "Text.LaTeX.Packages.AMSThm",
        "fct-package": "HaTeX",
        "fct-signature": "Remark",
        "fct-source": "src/Text-LaTeX-Packages-AMSThm.html#TheoremStyle",
        "fct-type": "function",
        "title": "Remark"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages AMSThm",
        "module": "Text.LaTeX.Packages.AMSThm",
        "name": "Remark",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Remark",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:amsthm",
      "description": {
        "fct-descr": "\u003cp\u003eAMSThm package.\n Example:\n\u003c/p\u003e\u003cpre\u003e usepackage [] amsthm\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSThm",
        "fct-package": "HaTeX",
        "fct-signature": "PackageName",
        "fct-source": "src/Text-LaTeX-Packages-AMSThm.html#amsthm",
        "fct-type": "function",
        "title": "amsthm"
      },
      "index": {
        "description": "AMSThm package Example usepackage amsthm",
        "hierarchy": "Text LaTeX Packages AMSThm",
        "module": "Text.LaTeX.Packages.AMSThm",
        "name": "amsthm",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:newtheorem",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003etheorem\u003c/a\u003e\u003c/code\u003e environment type.\n   Arguments are environment name (this will be the argument\n   when using the \u003ccode\u003e\u003ca\u003etheorem\u003c/a\u003e\u003c/code\u003e function) and the displayed title.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e newtheorem \"prop\" \"Proposition\"\n\u003c/pre\u003e\u003cpre\u003e theorem \"prop\" \"This is it.\"\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSThm",
        "fct-package": "HaTeX",
        "fct-signature": "String -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSThm.html#newtheorem",
        "fct-type": "function",
        "title": "newtheorem"
      },
      "index": {
        "description": "Create new theorem environment type Arguments are environment name this will be the argument when using the theorem function and the displayed title For example newtheorem prop Proposition theorem prop This is it",
        "hierarchy": "Text LaTeX Packages AMSThm",
        "module": "Text.LaTeX.Packages.AMSThm",
        "name": "newtheorem",
        "normalized": "String-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "String-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:proof",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eproof\u003c/a\u003e\u003c/code\u003e environment. The first optional argument\n   is used to put a custom title to the proof.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSThm",
        "fct-package": "HaTeX",
        "fct-signature": "Maybe l -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSThm.html#proof",
        "fct-type": "function",
        "title": "proof"
      },
      "index": {
        "description": "The proof environment The first optional argument is used to put custom title to the proof",
        "hierarchy": "Text LaTeX Packages AMSThm",
        "module": "Text.LaTeX.Packages.AMSThm",
        "name": "proof",
        "normalized": "Maybe a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Maybe l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:qedhere",
      "description": {
        "fct-descr": "\u003cp\u003eInsert the \u003cem\u003eQED\u003c/em\u003e symbol.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSThm",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-AMSThm.html#qedhere",
        "fct-type": "function",
        "title": "qedhere"
      },
      "index": {
        "description": "Insert the QED symbol",
        "hierarchy": "Text LaTeX Packages AMSThm",
        "module": "Text.LaTeX.Packages.AMSThm",
        "name": "qedhere",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:theorem",
      "description": {
        "fct-descr": "\u003cp\u003eUse a environment created by \u003ccode\u003e\u003ca\u003enewtheorem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSThm",
        "fct-package": "HaTeX",
        "fct-signature": "String -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSThm.html#theorem",
        "fct-type": "function",
        "title": "theorem"
      },
      "index": {
        "description": "Use environment created by newtheorem",
        "hierarchy": "Text LaTeX Packages AMSThm",
        "module": "Text.LaTeX.Packages.AMSThm",
        "name": "theorem",
        "normalized": "String-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "String-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:theoremstyle",
      "description": {
        "fct-descr": "\u003cp\u003eSet the theorem style. Call this function in the preamble.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.AMSThm",
        "fct-package": "HaTeX",
        "fct-signature": "TheoremStyle -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-AMSThm.html#theoremstyle",
        "fct-type": "function",
        "title": "theoremstyle"
      },
      "index": {
        "description": "Set the theorem style Call this function in the preamble",
        "hierarchy": "Text LaTeX Packages AMSThm",
        "module": "Text.LaTeX.Packages.AMSThm",
        "name": "theoremstyle",
        "normalized": "TheoremStyle-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "TheoremStyle-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003ebabel\u003c/code\u003e package is used to write documents in languages\n   other than US English.\n\u003c/p\u003e\u003cp\u003eCTAN page for babel: \u003ca\u003ehttp://ctan.org/pkg/babel\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html",
        "fct-type": "module",
        "title": "Babel"
      },
      "index": {
        "description": "The babel package is used to write documents in languages other than US English CTAN page for babel http ctan.org pkg babel",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Babel",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Babel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#t:LangConf",
      "description": {
        "fct-descr": "\u003cp\u003eLanguage configuration. You may use one with \u003ccode\u003e\u003ca\u003euselanguageconf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#LangConf",
        "fct-type": "data",
        "title": "LangConf"
      },
      "index": {
        "description": "Language configuration You may use one with uselanguageconf",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "LangConf",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Lang Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#t:Language",
      "description": {
        "fct-descr": "\u003cp\u003eLanguages.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "data",
        "title": "Language"
      },
      "index": {
        "description": "Languages",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Language",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Brazilian",
      "description": {
        "fct-descr": "\u003cp\u003eBrazilian Portuguese.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Brazilian",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "Brazilian"
      },
      "index": {
        "description": "Brazilian Portuguese",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Brazilian",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Brazilian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Bulgarian",
      "description": {
        "fct-descr": "\u003cp\u003eBulgarian.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Bulgarian",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "Bulgarian"
      },
      "index": {
        "description": "Bulgarian",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Bulgarian",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Bulgarian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Canadien",
      "description": {
        "fct-descr": "\u003cp\u003eCanadian French.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Canadien",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "Canadien"
      },
      "index": {
        "description": "Canadian French",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Canadien",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Canadien",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Czech",
      "description": {
        "fct-descr": "\u003cp\u003eCzech.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Czech",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "Czech"
      },
      "index": {
        "description": "Czech",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Czech",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Czech",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Dutch",
      "description": {
        "fct-descr": "\u003cp\u003eDutch.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Dutch",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "Dutch"
      },
      "index": {
        "description": "Dutch",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Dutch",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Dutch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:English",
      "description": {
        "fct-descr": "\u003cp\u003eEnglish.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "English",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "English"
      },
      "index": {
        "description": "English",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "English",
        "normalized": "",
        "package": "HaTeX",
        "partial": "English",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Finnish",
      "description": {
        "fct-descr": "\u003cp\u003eFinnish.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Finnish",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "Finnish"
      },
      "index": {
        "description": "Finnish",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Finnish",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Finnish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Francais",
      "description": {
        "fct-descr": "\u003cp\u003eParisian French.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Francais",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "Francais"
      },
      "index": {
        "description": "Parisian French",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Francais",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Francais",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:French",
      "description": {
        "fct-descr": "\u003cp\u003eFrench.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "French",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "French"
      },
      "index": {
        "description": "French",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "French",
        "normalized": "",
        "package": "HaTeX",
        "partial": "French",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:FrenchB",
      "description": {
        "fct-descr": "\u003cp\u003eFrench.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "FrenchB",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "FrenchB"
      },
      "index": {
        "description": "French",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "FrenchB",
        "normalized": "",
        "package": "HaTeX",
        "partial": "French",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:German",
      "description": {
        "fct-descr": "\u003cp\u003eOld German.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "German",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "German"
      },
      "index": {
        "description": "Old German",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "German",
        "normalized": "",
        "package": "HaTeX",
        "partial": "German",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Icelandic",
      "description": {
        "fct-descr": "\u003cp\u003eIcelandic.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Icelandic",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "Icelandic"
      },
      "index": {
        "description": "Icelandic",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Icelandic",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Icelandic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Italian",
      "description": {
        "fct-descr": "\u003cp\u003eItalian.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Italian",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "Italian"
      },
      "index": {
        "description": "Italian",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Italian",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Italian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:LangConf",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "LangConf",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#LangConf",
        "fct-type": "function",
        "title": "LangConf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "LangConf",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Lang Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Magyar",
      "description": {
        "fct-descr": "\u003cp\u003eHungarian.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Magyar",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "Magyar"
      },
      "index": {
        "description": "Hungarian",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Magyar",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Magyar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:NGerman",
      "description": {
        "fct-descr": "\u003cp\u003eNew German.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "NGerman",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "NGerman"
      },
      "index": {
        "description": "New German",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "NGerman",
        "normalized": "",
        "package": "HaTeX",
        "partial": "NGerman",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Portuguese",
      "description": {
        "fct-descr": "\u003cp\u003ePortuguese.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Portuguese",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "Portuguese"
      },
      "index": {
        "description": "Portuguese",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Portuguese",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Portuguese",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Russian",
      "description": {
        "fct-descr": "\u003cp\u003eRussian.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Russian",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "Russian"
      },
      "index": {
        "description": "Russian",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Russian",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Russian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Spanish",
      "description": {
        "fct-descr": "\u003cp\u003eSpanish.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Spanish",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "Spanish"
      },
      "index": {
        "description": "Spanish",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Spanish",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Spanish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Ukranian",
      "description": {
        "fct-descr": "\u003cp\u003eUkranian.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Ukranian",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#Language",
        "fct-type": "function",
        "title": "Ukranian"
      },
      "index": {
        "description": "Ukranian",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "Ukranian",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Ukranian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:babel",
      "description": {
        "fct-descr": "\u003cp\u003eBabel package. When writing in a single language, the simplest\n   way of using it is with \u003ccode\u003e\u003ca\u003euselanguage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn the preamble, use the following (if your language of choice is Spanish):\n\u003c/p\u003e\u003cpre\u003e uselanguage Spanish\n\u003c/pre\u003e\u003cp\u003eTo see a list of available languages, check the \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "PackageName",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#babel",
        "fct-type": "function",
        "title": "babel"
      },
      "index": {
        "description": "Babel package When writing in single language the simplest way of using it is with uselanguage In the preamble use the following if your language of choice is Spanish uselanguage Spanish To see list of available languages check the Language type",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "babel",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:foreignlanguage",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eforeignlanguage\u003c/a\u003e\u003c/code\u003e takes two arguments; the second argument is a\n   phrase to be typeset according to the rules of the language named in its first\n   argument.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Language -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#foreignlanguage",
        "fct-type": "function",
        "title": "foreignlanguage"
      },
      "index": {
        "description": "The function foreignlanguage takes two arguments the second argument is phrase to be typeset according to the rules of the language named in its first argument",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "foreignlanguage",
        "normalized": "Language-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Language-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:mainLang",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Language",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#LangConf",
        "fct-type": "function",
        "title": "mainLang"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "mainLang",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Lang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:otherLangs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "[Language]",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#LangConf",
        "fct-type": "function",
        "title": "otherLangs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "otherLangs",
        "normalized": "[Language]",
        "package": "HaTeX",
        "partial": "Langs",
        "signature": "[Language]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:otherlanguage",
      "description": {
        "fct-descr": "\u003cp\u003eUse a \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e locally.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Language -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#otherlanguage",
        "fct-type": "function",
        "title": "otherlanguage"
      },
      "index": {
        "description": "Use Language locally",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "otherlanguage",
        "normalized": "Language-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Language-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:selectlanguage",
      "description": {
        "fct-descr": "\u003cp\u003eSwitch to a given \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Language -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#selectlanguage",
        "fct-type": "function",
        "title": "selectlanguage"
      },
      "index": {
        "description": "Switch to given Language",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "selectlanguage",
        "normalized": "Language-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Language-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:uselanguage",
      "description": {
        "fct-descr": "\u003cp\u003eImport the \u003ccode\u003e\u003ca\u003ebabel\u003c/a\u003e\u003c/code\u003e package using a given \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e uselanguage l = usepackage [texy l] babel\n\u003c/pre\u003e\u003cp\u003eIf you are using more than one language, consider to use\n  \u003ccode\u003e\u003ca\u003euselanguageconf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "Language -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#uselanguage",
        "fct-type": "function",
        "title": "uselanguage"
      },
      "index": {
        "description": "Import the babel package using given Language uselanguage usepackage texy babel If you are using more than one language consider to use uselanguageconf",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "uselanguage",
        "normalized": "Language-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Language-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:uselanguageconf",
      "description": {
        "fct-descr": "\u003cp\u003eImport the \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e package using a given language\n   configuration, featuring a main language and some\n   others. For example:\n\u003c/p\u003e\u003cpre\u003e uselanguageconf $ LangConf English [German]\n\u003c/pre\u003e\u003cp\u003eThis will use English as main language, and German\n   as secondary.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Babel",
        "fct-package": "HaTeX",
        "fct-signature": "LangConf -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Babel.html#uselanguageconf",
        "fct-type": "function",
        "title": "uselanguageconf"
      },
      "index": {
        "description": "Import the label package using given language configuration featuring main language and some others For example uselanguageconf LangConf English German This will use English as main language and German as secondary",
        "hierarchy": "Text LaTeX Packages Babel",
        "module": "Text.LaTeX.Packages.Babel",
        "name": "uselanguageconf",
        "normalized": "LangConf-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "LangConf-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBeamer is a LaTeX package for the creation of slides.\n\u003c/p\u003e\u003cp\u003eEach frame is contained within the \u003ccode\u003e\u003ca\u003eframe\u003c/a\u003e\u003c/code\u003e function. Here is an example:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Text.LaTeX\n import Text.LaTeX.Packages.Beamer\n\n mySlides :: Monad m =\u003e LaTeXT m ()\n mySlides = do\n   frame $ do\n     frametitle \"First frame\"\n     \"Content of the first frame.\"\n   frame $ do\n     frametitle \"Second frame\"\n     \"Content of the second frame.\" \n     pause\n     \" And actually a little more.\"\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epause\u003c/a\u003e\u003c/code\u003e command in the second frame makes the second part of the text\n   to appear one screen later.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html",
        "fct-type": "module",
        "title": "Beamer"
      },
      "index": {
        "description": "Beamer is LaTeX package for the creation of slides Each frame is contained within the frame function Here is an example LANGUAGE OverloadedStrings import Text.LaTeX import Text.LaTeX.Packages.Beamer mySlides Monad LaTeXT mySlides do frame do frametitle First frame Content of the first frame frame do frametitle Second frame Content of the second frame pause And actually little more The pause command in the second frame makes the second part of the text to appear one screen later",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Beamer",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Beamer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#t:OverlaySpec",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifications for beamer functions.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#OverlaySpec",
        "fct-type": "data",
        "title": "OverlaySpec"
      },
      "index": {
        "description": "Specifications for beamer functions",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "OverlaySpec",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Overlay Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#t:Theme",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTheme\u003c/a\u003e\u003c/code\u003e of a presentation. See \u003ccode\u003e\u003ca\u003eusetheme\u003c/a\u003e\u003c/code\u003e.\n   A preview of each one is given below.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "data",
        "title": "Theme"
      },
      "index": {
        "description": "Theme of presentation See usetheme preview of each one is given below",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Theme",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Theme",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:AnnArbor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewAnnArbor.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "AnnArbor",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "AnnArbor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "AnnArbor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Ann Arbor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Antibes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewAntibes.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Antibes",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Antibes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Antibes",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Antibes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Bergen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewBergen.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Bergen",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Bergen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Bergen",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Bergen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Berkeley",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewBerkeley.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Berkeley",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Berkeley"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Berkeley",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Berkeley",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Berlin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewBerlin.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Berlin",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Berlin"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Berlin",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Berlin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Boadilla",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewBoadilla.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Boadilla",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Boadilla"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Boadilla",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Boadilla",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Boxes",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Boxes",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Boxes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Boxes",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Boxes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:CambridgeUS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewCambridgeUS.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "CambridgeUS",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "CambridgeUS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "CambridgeUS",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Cambridge US",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Copenhagen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewCopenhagen.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Copenhagen",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Copenhagen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Copenhagen",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Copenhagen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:CustomTheme",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "CustomTheme String",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "CustomTheme"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "CustomTheme",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Custom Theme",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Darmstadt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewDarmstadt.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Darmstadt",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Darmstadt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Darmstadt",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Darmstadt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Default",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Default",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Default"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Default",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Dresden",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewDresden.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Dresden",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Dresden"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Dresden",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Dresden",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Frankfurt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewFrankfurt.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Frankfurt",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Frankfurt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Frankfurt",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Frankfurt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:FromSlide",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "FromSlide Int",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#OverlaySpec",
        "fct-type": "function",
        "title": "FromSlide"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "FromSlide",
        "normalized": "",
        "package": "HaTeX",
        "partial": "From Slide",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:FromToSlide",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "FromToSlide Int Int",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#OverlaySpec",
        "fct-type": "function",
        "title": "FromToSlide"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "FromToSlide",
        "normalized": "",
        "package": "HaTeX",
        "partial": "From To Slide",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Goettingen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewGoettingen.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Goettingen",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Goettingen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Goettingen",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Goettingen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Hannover",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewHannover.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Hannover",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Hannover"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Hannover",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Hannover",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Ilmenau",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewIlmenau.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Ilmenau",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Ilmenau"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Ilmenau",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Ilmenau",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:JuanLesPins",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewJuanLesPins.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "JuanLesPins",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "JuanLesPins"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "JuanLesPins",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Juan Les Pins",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Luebeck",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewLuebeck.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Luebeck",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Luebeck"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Luebeck",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Luebeck",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Madrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewMadrid.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Madrid",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Madrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Madrid",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Madrid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Malmoe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewMalmoe.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Malmoe",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Malmoe"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Malmoe",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Malmoe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Marburg",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewMarburg.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Marburg",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Marburg"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Marburg",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Marburg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Montpellier",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewMontpellier.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Montpellier",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Montpellier"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Montpellier",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Montpellier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:OneSlide",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "OneSlide Int",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#OverlaySpec",
        "fct-type": "function",
        "title": "OneSlide"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "OneSlide",
        "normalized": "",
        "package": "HaTeX",
        "partial": "One Slide",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:PaloAlto",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewPaloAlto.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "PaloAlto",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "PaloAlto"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "PaloAlto",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Palo Alto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Pittsburgh",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewPittsburgh.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Pittsburgh",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Pittsburgh"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Pittsburgh",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Pittsburgh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Rochester",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewRochester.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Rochester",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Rochester"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Rochester",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Rochester",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Singapore",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewSingapore.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Singapore",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Singapore"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Singapore",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Singapore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Szeged",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewSzeged.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Szeged",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Szeged"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Szeged",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Szeged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:ToSlide",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "ToSlide Int",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#OverlaySpec",
        "fct-type": "function",
        "title": "ToSlide"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "ToSlide",
        "normalized": "",
        "package": "HaTeX",
        "partial": "To Slide",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Warsaw",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewWarsaw.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Warsaw",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
        "fct-type": "function",
        "title": "Warsaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "Warsaw",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Warsaw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:alert",
      "description": {
        "fct-descr": "\u003cp\u003eHighlight in red a piece of text. With the \u003ccode\u003e\u003ca\u003eOverlaySpec\u003c/a\u003e\u003c/code\u003es, you can specify the slides where\n the text will be highlighted.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "[OverlaySpec] -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#alert",
        "fct-type": "function",
        "title": "alert"
      },
      "index": {
        "description": "Highlight in red piece of text With the OverlaySpec you can specify the slides where the text will be highlighted",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "alert",
        "normalized": "[OverlaySpec]-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "[OverlaySpec]-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:beamer",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ebeamer\u003c/a\u003e\u003c/code\u003e document class. Importing a package is not required. Example:\n\u003c/p\u003e\u003cpre\u003e documentclass [] beamer\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "ClassName",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#beamer",
        "fct-type": "function",
        "title": "beamer"
      },
      "index": {
        "description": "The beamer document class Importing package is not required Example documentclass beamer",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "beamer",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:beameritem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebeameritem\u003c/a\u003e\u003c/code\u003e works like \u003ccode\u003eitem\u003c/code\u003e, but allows you to specify the slides where\n the item will be displayed.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "[OverlaySpec] -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#beameritem",
        "fct-type": "function",
        "title": "beameritem"
      },
      "index": {
        "description": "beameritem works like item but allows you to specify the slides where the item will be displayed",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "beameritem",
        "normalized": "[OverlaySpec]-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "[OverlaySpec]-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:block",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eblock\u003c/a\u003e\u003c/code\u003e will be displayed surrounding a text.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "l-\u003e l-\u003e l",
        "fct-type": "function",
        "title": "block"
      },
      "index": {
        "description": "block will be displayed surrounding text",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "block",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:frame",
      "description": {
        "fct-descr": "\u003cp\u003eA presentation is composed of a sequence of frames. Each frame is created with this function.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#frame",
        "fct-type": "function",
        "title": "frame"
      },
      "index": {
        "description": "presentation is composed of sequence of frames Each frame is created with this function",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "frame",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:framesubtitle",
      "description": {
        "fct-descr": "\u003cp\u003eSet the subtitle of the current frame. Use it within a \u003ccode\u003e\u003ca\u003eframe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#framesubtitle",
        "fct-type": "function",
        "title": "framesubtitle"
      },
      "index": {
        "description": "Set the subtitle of the current frame Use it within frame",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "framesubtitle",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:frametitle",
      "description": {
        "fct-descr": "\u003cp\u003eSet the title of the current frame. Use it within a \u003ccode\u003e\u003ca\u003eframe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#frametitle",
        "fct-type": "function",
        "title": "frametitle"
      },
      "index": {
        "description": "Set the title of the current frame Use it within frame",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "frametitle",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:only",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003euncover\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "[OverlaySpec] -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#only",
        "fct-type": "function",
        "title": "only"
      },
      "index": {
        "description": "Similar to uncover",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "only",
        "normalized": "[OverlaySpec]-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "[OverlaySpec]-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:pause",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduces a pause in a slide.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#pause",
        "fct-type": "function",
        "title": "pause"
      },
      "index": {
        "description": "Introduces pause in slide",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "pause",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:uncover",
      "description": {
        "fct-descr": "\u003cp\u003eWith \u003ccode\u003e\u003ca\u003euncover\u003c/a\u003e\u003c/code\u003e, show a piece of text only in the slides you want.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "[OverlaySpec] -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#uncover",
        "fct-type": "function",
        "title": "uncover"
      },
      "index": {
        "description": "With uncover show piece of text only in the slides you want",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "uncover",
        "normalized": "[OverlaySpec]-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "[OverlaySpec]-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:usetheme",
      "description": {
        "fct-descr": "\u003cp\u003eSet the \u003ccode\u003e\u003ca\u003eTheme\u003c/a\u003e\u003c/code\u003e employed in your presentation (in the preamble).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Beamer",
        "fct-package": "HaTeX",
        "fct-signature": "Theme -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Beamer.html#usetheme",
        "fct-type": "function",
        "title": "usetheme"
      },
      "index": {
        "description": "Set the Theme employed in your presentation in the preamble",
        "hierarchy": "Text LaTeX Packages Beamer",
        "module": "Text.LaTeX.Packages.Beamer",
        "name": "usetheme",
        "normalized": "Theme-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Theme-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake your documents colorful using this module.\n\u003c/p\u003e\u003cp\u003eDifferent functionalities are provided, like changing the color of\n   the text and the paper, or creating colorful boxes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-Color.html",
        "fct-type": "module",
        "title": "Color"
      },
      "index": {
        "description": "Make your documents colorful using this module Different functionalities are provided like changing the color of the text and the paper or creating colorful boxes",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Color",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#t:ColSpec",
      "description": {
        "fct-descr": "\u003cp\u003eColor specification.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColSpec",
        "fct-type": "data",
        "title": "ColSpec"
      },
      "index": {
        "description": "Color specification",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "ColSpec",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Col Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eBasic colors.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "Basic colors",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Color",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#t:ColorModel",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify your own color using one of the different color models.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorModel",
        "fct-type": "data",
        "title": "ColorModel"
      },
      "index": {
        "description": "Specify your own color using one of the different color models",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "ColorModel",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Color Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#t:ColorName",
      "description": {
        "fct-descr": "\u003cp\u003eOther predefined colors.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "data",
        "title": "ColorName"
      },
      "index": {
        "description": "Other predefined colors",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "ColorName",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Color Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#t:Word8",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word8"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Word8",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Apricot",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Apricot",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Apricot"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Apricot",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Apricot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Aquamarine",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Aquamarine",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Aquamarine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Aquamarine",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Aquamarine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Bittersweet",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Bittersweet",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Bittersweet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Bittersweet",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Bittersweet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Black",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Black",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Black"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Black",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Black",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Blue",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Blue",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Blue",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:BlueGreen",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "BlueGreen",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "BlueGreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "BlueGreen",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Blue Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:BlueViolet",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "BlueViolet",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "BlueViolet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "BlueViolet",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Blue Violet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:BrickRed",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "BrickRed",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "BrickRed"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "BrickRed",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Brick Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Brown",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Brown",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Brown"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Brown",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Brown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:BurntOrange",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "BurntOrange",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "BurntOrange"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "BurntOrange",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Burnt Orange",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:CMYK",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "CMYK Float Float Float Float",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorModel",
        "fct-type": "function",
        "title": "CMYK"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "CMYK",
        "normalized": "",
        "package": "HaTeX",
        "partial": "CMYK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:CadetBlue",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "CadetBlue",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "CadetBlue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "CadetBlue",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Cadet Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:CarnationPink",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "CarnationPink",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "CarnationPink"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "CarnationPink",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Carnation Pink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Cerulean",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Cerulean",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Cerulean"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Cerulean",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Cerulean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:CornflowerBlue",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "CornflowerBlue",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "CornflowerBlue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "CornflowerBlue",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Cornflower Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Cyan",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Cyan",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Cyan",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Cyan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Dandelion",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Dandelion",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Dandelion"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Dandelion",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Dandelion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:DarkOrchid",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "DarkOrchid",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "DarkOrchid"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "DarkOrchid",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Dark Orchid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:DefColor",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "DefColor Color",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColSpec",
        "fct-type": "function",
        "title": "DefColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "DefColor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Def Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:DvipsColor",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "DvipsColor ColorName",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColSpec",
        "fct-type": "function",
        "title": "DvipsColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "DvipsColor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Dvips Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Emerald",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Emerald",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Emerald"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Emerald",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Emerald",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:ForestGreen",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "ForestGreen",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "ForestGreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "ForestGreen",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Forest Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Fuchsia",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Fuchsia",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Fuchsia"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Fuchsia",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Fuchsia",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Goldenrod",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Goldenrod",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Goldenrod"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Goldenrod",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Goldenrod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Gray",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Gray",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Gray"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Gray",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Gray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:GrayM",
      "description": {
        "fct-descr": "\u003cp\u003eGrayscale, from 0 (black) to 1 (white).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "GrayM Float",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorModel",
        "fct-type": "function",
        "title": "GrayM"
      },
      "index": {
        "description": "Grayscale from black to white",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "GrayM",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Gray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Green",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Green",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Green"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Green",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:GreenYellow",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "GreenYellow",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "GreenYellow"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "GreenYellow",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Green Yellow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:HTML",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "HTML String",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorModel",
        "fct-type": "function",
        "title": "HTML"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "HTML",
        "normalized": "",
        "package": "HaTeX",
        "partial": "HTML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:JungleGreen",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "JungleGreen",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "JungleGreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "JungleGreen",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Jungle Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Lavender",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Lavender",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Lavender"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Lavender",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Lavender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:LimeGreen",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "LimeGreen",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "LimeGreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "LimeGreen",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Lime Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Magenta",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Magenta",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Magenta",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Magenta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Mahogany",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Mahogany",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Mahogany"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Mahogany",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Mahogany",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Maroon",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Maroon",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Maroon"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Maroon",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Maroon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Melon",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Melon",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Melon"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Melon",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Melon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:MidnightBlue",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "MidnightBlue",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "MidnightBlue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "MidnightBlue",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Midnight Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:ModColor",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "ModColor ColorModel",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColSpec",
        "fct-type": "function",
        "title": "ModColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "ModColor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Mod Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Mulberry",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Mulberry",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Mulberry"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Mulberry",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Mulberry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:NavyBlue",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "NavyBlue",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "NavyBlue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "NavyBlue",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Navy Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:OliveGreen",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "OliveGreen",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "OliveGreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "OliveGreen",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Olive Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Orange",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Orange",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Orange"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Orange",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Orange",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:OrangeRed",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "OrangeRed",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "OrangeRed"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "OrangeRed",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Orange Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Orchid",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Orchid",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Orchid"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Orchid",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Orchid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Peach",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Peach",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Peach"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Peach",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Peach",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Periwinkle",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Periwinkle",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Periwinkle"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Periwinkle",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Periwinkle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:PineGreen",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "PineGreen",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "PineGreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "PineGreen",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Pine Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Plum",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Plum",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Plum"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Plum",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Plum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:ProcessBlue",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "ProcessBlue",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "ProcessBlue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "ProcessBlue",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Process Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Purple",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Purple",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Purple"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Purple",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Purple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:RGB",
      "description": {
        "fct-descr": "\u003cp\u003eEach parameter determines the proportion of red, green and\n   blue, with a value within the [0,1] interval.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "RGB Float Float Float",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorModel",
        "fct-type": "function",
        "title": "RGB"
      },
      "index": {
        "description": "Each parameter determines the proportion of red green and blue with value within the interval",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "RGB",
        "normalized": "",
        "package": "HaTeX",
        "partial": "RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:RGB255",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "RGB255 Word8 Word8 Word8",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorModel",
        "fct-type": "function",
        "title": "RGB255"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "RGB255",
        "normalized": "",
        "package": "HaTeX",
        "partial": "RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:RawSienna",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "RawSienna",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "RawSienna"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "RawSienna",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Raw Sienna",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Red",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Red",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Red"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Red",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:RedOrange",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "RedOrange",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "RedOrange"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "RedOrange",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Red Orange",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:RedViolet",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "RedViolet",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "RedViolet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "RedViolet",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Red Violet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Rhodamine",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Rhodamine",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Rhodamine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Rhodamine",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Rhodamine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:RoyalBlue",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "RoyalBlue",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "RoyalBlue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "RoyalBlue",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Royal Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:RubineRed",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "RubineRed",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "RubineRed"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "RubineRed",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Rubine Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Salmon",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Salmon",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Salmon"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Salmon",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Salmon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:SeaGreen",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "SeaGreen",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "SeaGreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "SeaGreen",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Sea Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Sepia",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Sepia",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Sepia"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Sepia",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Sepia",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:SkyBlue",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "SkyBlue",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "SkyBlue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "SkyBlue",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Sky Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:SpringGreen",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "SpringGreen",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "SpringGreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "SpringGreen",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Spring Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Tan",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Tan",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Tan"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Tan",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Tan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:TealBlue",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "TealBlue",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "TealBlue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "TealBlue",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Teal Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Thistle",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Thistle",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Thistle"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Thistle",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Thistle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Turquoise",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Turquoise",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Turquoise"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Turquoise",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Turquoise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Violet",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Violet",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "Violet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Violet",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Violet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:VioletRed",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "VioletRed",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "VioletRed"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "VioletRed",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Violet Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:White",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "White",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "White"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "White",
        "normalized": "",
        "package": "HaTeX",
        "partial": "White",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:WildStrawberry",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "WildStrawberry",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "WildStrawberry"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "WildStrawberry",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Wild Strawberry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Yellow",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "Yellow",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "Yellow",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Yellow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:YellowGreen",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "YellowGreen",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "YellowGreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "YellowGreen",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Yellow Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:YellowOrange",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "YellowOrange",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#ColorName",
        "fct-type": "function",
        "title": "YellowOrange"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "YellowOrange",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Yellow Orange",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:color",
      "description": {
        "fct-descr": "\u003cp\u003eSwitch to a new text color.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "ColSpec -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#color",
        "fct-type": "function",
        "title": "color"
      },
      "index": {
        "description": "Switch to new text color",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "color",
        "normalized": "ColSpec-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "ColSpec-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:colorbox",
      "description": {
        "fct-descr": "\u003cp\u003ePut its argument in a box with the given colour as background.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "ColSpec -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#colorbox",
        "fct-type": "function",
        "title": "colorbox"
      },
      "index": {
        "description": "Put its argument in box with the given colour as background",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "colorbox",
        "normalized": "ColSpec-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "ColSpec-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:dvipsnames",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#dvipsnames",
        "fct-type": "function",
        "title": "dvipsnames"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "dvipsnames",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:fcolorbox",
      "description": {
        "fct-descr": "\u003cp\u003eApplication of \u003ccode\u003efcolorbox cs1 cs2 l\u003c/code\u003e put \u003ccode\u003el\u003c/code\u003e in a framed box with\n   \u003ccode\u003ecs1\u003c/code\u003e as frame color and \u003ccode\u003ecs2\u003c/code\u003e as background color.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "ColSpec -\u003e ColSpec -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#fcolorbox",
        "fct-type": "function",
        "title": "fcolorbox"
      },
      "index": {
        "description": "Application of fcolorbox cs1 cs2 put in framed box with cs1 as frame color and cs2 as background color",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "fcolorbox",
        "normalized": "ColSpec-\u003eColSpec-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "ColSpec-\u003eColSpec-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:monochrome",
      "description": {
        "fct-descr": "\u003cp\u003eTo convert all colour commands to black and white,\n   for previewers that cannot handle colour.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#monochrome",
        "fct-type": "function",
        "title": "monochrome"
      },
      "index": {
        "description": "To convert all colour commands to black and white for previewers that cannot handle colour",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "monochrome",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:nodvipsnames",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#nodvipsnames",
        "fct-type": "function",
        "title": "nodvipsnames"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "nodvipsnames",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:normalcolor",
      "description": {
        "fct-descr": "\u003cp\u003eSwitch to the colour that was active at the end of the preamble.\n   Thus, placing a \u003ccode\u003e\u003ca\u003ecolor\u003c/a\u003e\u003c/code\u003e command in the preamble can change the\n   standard colour of the whole document.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#normalcolor",
        "fct-type": "function",
        "title": "normalcolor"
      },
      "index": {
        "description": "Switch to the colour that was active at the end of the preamble Thus placing color command in the preamble can change the standard colour of the whole document",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "normalcolor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:pagecolor",
      "description": {
        "fct-descr": "\u003cp\u003eSet the background color for the current and following pages.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "ColSpec -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#pagecolor",
        "fct-type": "function",
        "title": "pagecolor"
      },
      "index": {
        "description": "Set the background color for the current and following pages",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "pagecolor",
        "normalized": "ColSpec-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "ColSpec-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:pcolor",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epcolor\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e\u003cpre\u003e usepackage [] pcolor\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "PackageName",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#pcolor",
        "fct-type": "function",
        "title": "pcolor"
      },
      "index": {
        "description": "The pcolor package usepackage pcolor",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "pcolor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:textcolor",
      "description": {
        "fct-descr": "\u003cp\u003eSet the text of its argument in the given colour.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "ColSpec -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#textcolor",
        "fct-type": "function",
        "title": "textcolor"
      },
      "index": {
        "description": "Set the text of its argument in the given colour",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "textcolor",
        "normalized": "ColSpec-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "ColSpec-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:usenames",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Color",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#usenames",
        "fct-type": "function",
        "title": "usenames"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Color",
        "module": "Text.LaTeX.Packages.Color",
        "name": "usenames",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides extensive control of page headers and footers.\n\u003c/p\u003e\u003cp\u003eCTAN page for fancyhdr: \u003ca\u003ehttp://www.ctan.org/pkg/fancyhdr\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html",
        "fct-type": "module",
        "title": "Fancyhdr"
      },
      "index": {
        "description": "This package provides extensive control of page headers and footers CTAN page for fancyhdr http www.ctan.org pkg fancyhdr",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "Fancyhdr",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Fancyhdr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#t:HdrSettings",
      "description": {
        "fct-descr": "\u003cp\u003eHeader and footer settings of a LaTeX document.\n   Use \u003ccode\u003e\u003ca\u003eapplyHdrSettings\u003c/a\u003e\u003c/code\u003e to apply these settings\n   in your document. A default value is provided\n   by \u003ccode\u003e\u003ca\u003edefaultHdrSettings\u003c/a\u003e\u003c/code\u003e, which you can modify\n   using record syntax.\n\u003c/p\u003e\u003cpre\u003e mySettings :: HdrSettings\n mySettings = defaultHdrSettings\n     { centerHeader = \"Amazing header\"\n     , headRuleWidth = Pt 2\n       }\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
        "fct-type": "data",
        "title": "HdrSettings"
      },
      "index": {
        "description": "Header and footer settings of LaTeX document Use applyHdrSettings to apply these settings in your document default value is provided by defaultHdrSettings which you can modify using record syntax mySettings HdrSettings mySettings defaultHdrSettings centerHeader Amazing header headRuleWidth Pt",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "HdrSettings",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Hdr Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:HdrSettings",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "HdrSettings",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
        "fct-type": "function",
        "title": "HdrSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "HdrSettings",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Hdr Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:applyHdrSettings",
      "description": {
        "fct-descr": "\u003cp\u003eApply custom header and footer settings to a\n   LaTeX document. It takes care of package importing\n   and page style settings, so using this function\n   is enough to get the settings applied.\n   Do \u003cem\u003enot\u003c/em\u003e import the \u003ccode\u003e\u003ca\u003efancyhdr\u003c/a\u003e\u003c/code\u003e package again.\n   To be used in the \u003cem\u003epreamble\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "HdrSettings -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#applyHdrSettings",
        "fct-type": "function",
        "title": "applyHdrSettings"
      },
      "index": {
        "description": "Apply custom header and footer settings to LaTeX document It takes care of package importing and page style settings so using this function is enough to get the settings applied Do not import the fancyhdr package again To be used in the preamble",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "applyHdrSettings",
        "normalized": "HdrSettings-\u003ea",
        "package": "HaTeX",
        "partial": "Hdr Settings",
        "signature": "HdrSettings-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:centerFooter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeX",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
        "fct-type": "function",
        "title": "centerFooter"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "centerFooter",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Footer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:centerHeader",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeX",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
        "fct-type": "function",
        "title": "centerHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "centerHeader",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:cfoot",
      "description": {
        "fct-descr": "\u003cp\u003eSet the center footer.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#cfoot",
        "fct-type": "function",
        "title": "cfoot"
      },
      "index": {
        "description": "Set the center footer",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "cfoot",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:chead",
      "description": {
        "fct-descr": "\u003cp\u003eSet the center header.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#chead",
        "fct-type": "function",
        "title": "chead"
      },
      "index": {
        "description": "Set the center header",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "chead",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:defaultHdrSettings",
      "description": {
        "fct-descr": "\u003cp\u003eDefault header and footer settings.\n\u003c/p\u003e\u003cp\u003eIt leaves everything empty but the\n   \u003ccode\u003e\u003ca\u003ecenterFooter\u003c/a\u003e\u003c/code\u003e field, which is filled\n   with \u003ccode\u003e\u003ca\u003ethePage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlso, it sets to 0.4 points\n   the \u003ccode\u003e\u003ca\u003eheadRuleWidth\u003c/a\u003e\u003c/code\u003e field.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "HdrSettings",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#defaultHdrSettings",
        "fct-type": "function",
        "title": "defaultHdrSettings"
      },
      "index": {
        "description": "Default header and footer settings It leaves everything empty but the centerFooter field which is filled with thePage Also it sets to points the headRuleWidth field",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "defaultHdrSettings",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Hdr Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:fancy",
      "description": {
        "fct-descr": "\u003cp\u003ePage style of the \u003ccode\u003e\u003ca\u003efancyhdr\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "PageStyle",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#fancy",
        "fct-type": "function",
        "title": "fancy"
      },
      "index": {
        "description": "Page style of the fancyhdr package",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "fancy",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:fancyhdr",
      "description": {
        "fct-descr": "\u003cp\u003eThe fancyhdr package.\n   Please, consider to use \u003ccode\u003e\u003ca\u003eapplyHdrSettings\u003c/a\u003e\u003c/code\u003e\n   instead of importing the package manually.\n   If you really want to do it manually, use\n   the functions from the \u003cem\u003eraw interface\u003c/em\u003e\n   exposed below.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "PackageName",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#fancyhdr",
        "fct-type": "function",
        "title": "fancyhdr"
      },
      "index": {
        "description": "The fancyhdr package Please consider to use applyHdrSettings instead of importing the package manually If you really want to do it manually use the functions from the raw interface exposed below",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "fancyhdr",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:footRuleWidth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "Measure",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
        "fct-type": "function",
        "title": "footRuleWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "footRuleWidth",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Rule Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:headRuleWidth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "Measure",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
        "fct-type": "function",
        "title": "headRuleWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "headRuleWidth",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Rule Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:leftFooter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeX",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
        "fct-type": "function",
        "title": "leftFooter"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "leftFooter",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Footer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:leftHeader",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeX",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
        "fct-type": "function",
        "title": "leftHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "leftHeader",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:lfoot",
      "description": {
        "fct-descr": "\u003cp\u003eSet the left footer.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#lfoot",
        "fct-type": "function",
        "title": "lfoot"
      },
      "index": {
        "description": "Set the left footer",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "lfoot",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:lhead",
      "description": {
        "fct-descr": "\u003cp\u003eSet the left header.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#lhead",
        "fct-type": "function",
        "title": "lhead"
      },
      "index": {
        "description": "Set the left header",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "lhead",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:renewfootrulewidth",
      "description": {
        "fct-descr": "\u003cp\u003eSet the \u003ccode\u003efootrulewidth\u003c/code\u003e attribute.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "Measure -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#renewfootrulewidth",
        "fct-type": "function",
        "title": "renewfootrulewidth"
      },
      "index": {
        "description": "Set the footrulewidth attribute",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "renewfootrulewidth",
        "normalized": "Measure-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Measure-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:renewheadrulewidth",
      "description": {
        "fct-descr": "\u003cp\u003eSet the \u003ccode\u003eheadrulewidth\u003c/code\u003e attribute.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "Measure -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#renewheadrulewidth",
        "fct-type": "function",
        "title": "renewheadrulewidth"
      },
      "index": {
        "description": "Set the headrulewidth attribute",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "renewheadrulewidth",
        "normalized": "Measure-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Measure-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:rfoot",
      "description": {
        "fct-descr": "\u003cp\u003eSet the right footer.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#rfoot",
        "fct-type": "function",
        "title": "rfoot"
      },
      "index": {
        "description": "Set the right footer",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "rfoot",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:rhead",
      "description": {
        "fct-descr": "\u003cp\u003eSet the right header.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#rhead",
        "fct-type": "function",
        "title": "rhead"
      },
      "index": {
        "description": "Set the right header",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "rhead",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:rightFooter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeX",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
        "fct-type": "function",
        "title": "rightFooter"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "rightFooter",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Footer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:rightHeader",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.LaTeX.Packages.Fancyhdr",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeX",
        "fct-source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
        "fct-type": "function",
        "title": "rightHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Fancyhdr",
        "module": "Text.LaTeX.Packages.Fancyhdr",
        "name": "rightHeader",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fontenc.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSelect new font encodings using the \u003ccode\u003efontenc\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.Fontenc",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-Fontenc.html",
        "fct-type": "module",
        "title": "Fontenc"
      },
      "index": {
        "description": "Select new font encodings using the fontenc package",
        "hierarchy": "Text LaTeX Packages Fontenc",
        "module": "Text.LaTeX.Packages.Fontenc",
        "name": "Fontenc",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Fontenc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fontenc.html#t:FontEnc",
      "description": {
        "fct-descr": "\u003cp\u003eFont encodings.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Fontenc",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Fontenc.html#FontEnc",
        "fct-type": "data",
        "title": "FontEnc"
      },
      "index": {
        "description": "Font encodings",
        "hierarchy": "Text LaTeX Packages Fontenc",
        "module": "Text.LaTeX.Packages.Fontenc",
        "name": "FontEnc",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Font Enc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fontenc.html#v:OT1",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Fontenc",
        "fct-package": "HaTeX",
        "fct-signature": "OT1",
        "fct-source": "src/Text-LaTeX-Packages-Fontenc.html#FontEnc",
        "fct-type": "function",
        "title": "OT1"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Fontenc",
        "module": "Text.LaTeX.Packages.Fontenc",
        "name": "OT1",
        "normalized": "",
        "package": "HaTeX",
        "partial": "OT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fontenc.html#v:T1",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Fontenc",
        "fct-package": "HaTeX",
        "fct-signature": "T1",
        "fct-source": "src/Text-LaTeX-Packages-Fontenc.html#FontEnc",
        "fct-type": "function",
        "title": "T1"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Fontenc",
        "module": "Text.LaTeX.Packages.Fontenc",
        "name": "T1",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fontenc.html#v:fontenc",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003efontenc\u003c/code\u003e package.\n   It is recommended to use the \u003ccode\u003e\u003ca\u003euseencoding\u003c/a\u003e\u003c/code\u003e function\n   to import it.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Fontenc",
        "fct-package": "HaTeX",
        "fct-signature": "PackageName",
        "fct-source": "src/Text-LaTeX-Packages-Fontenc.html#fontenc",
        "fct-type": "function",
        "title": "fontenc"
      },
      "index": {
        "description": "The fontenc package It is recommended to use the useencoding function to import it",
        "hierarchy": "Text LaTeX Packages Fontenc",
        "module": "Text.LaTeX.Packages.Fontenc",
        "name": "fontenc",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fontenc.html#v:useencoding",
      "description": {
        "fct-descr": "\u003cp\u003eIn the preamble, select encodings to use in your document.\n   The last one will be the default encoding. Example:\n\u003c/p\u003e\u003cpre\u003e useencoding [T1]\n\u003c/pre\u003e\u003cp\u003eIt imports the \u003ccode\u003efontenc\u003c/code\u003e package. In fact:\n\u003c/p\u003e\u003cpre\u003e useencoding xs = usepackage (fmap texy xs) fontenc\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.Fontenc",
        "fct-package": "HaTeX",
        "fct-signature": "[FontEnc] -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Fontenc.html#useencoding",
        "fct-type": "function",
        "title": "useencoding"
      },
      "index": {
        "description": "In the preamble select encodings to use in your document The last one will be the default encoding Example useencoding T1 It imports the fontenc package In fact useencoding xs usepackage fmap texy xs fontenc",
        "hierarchy": "Text LaTeX Packages Fontenc",
        "module": "Text.LaTeX.Packages.Fontenc",
        "name": "useencoding",
        "normalized": "[FontEnc]-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "[FontEnc]-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows you to use the LaTeX \u003cem\u003egraphicx\u003c/em\u003e library in order to\n   insert graphics in a document and perform some transformations.\n\u003c/p\u003e\u003cp\u003eCTAN page for graphicx: \u003ca\u003ehttp://ctan.org/pkg/graphicx\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html",
        "fct-type": "module",
        "title": "Graphicx"
      },
      "index": {
        "description": "This module allows you to use the LaTeX graphicx library in order to insert graphics in document and perform some transformations CTAN page for graphicx http ctan.org pkg graphicx",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "Graphicx",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Graphicx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#t:IGOption",
      "description": {
        "fct-descr": "\u003cp\u003eInclude Graphics Option. These options can be passed as arguments to the \u003ccode\u003e\u003ca\u003eincludegraphics\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
        "fct-type": "data",
        "title": "IGOption"
      },
      "index": {
        "description": "Include Graphics Option These options can be passed as arguments to the includegraphics function",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "IGOption",
        "normalized": "",
        "package": "HaTeX",
        "partial": "IGOption",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:IGAngle",
      "description": {
        "fct-descr": "\u003cp\u003eRotate the image by given degrees.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "IGAngle Int",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
        "fct-type": "function",
        "title": "IGAngle"
      },
      "index": {
        "description": "Rotate the image by given degrees",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "IGAngle",
        "normalized": "",
        "package": "HaTeX",
        "partial": "IGAngle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:IGClip",
      "description": {
        "fct-descr": "\u003cp\u003eFor the \u003ccode\u003e\u003ca\u003eIGTrim\u003c/a\u003e\u003c/code\u003e option to work, you must set \u003ccode\u003e\u003ca\u003eIGClip\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "IGClip Bool",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
        "fct-type": "function",
        "title": "IGClip"
      },
      "index": {
        "description": "For the IGTrim option to work you must set IGClip to True",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "IGClip",
        "normalized": "",
        "package": "HaTeX",
        "partial": "IGClip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:IGHeight",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the preferred height of the imported image.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "IGHeight Measure",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
        "fct-type": "function",
        "title": "IGHeight"
      },
      "index": {
        "description": "Specify the preferred height of the imported image",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "IGHeight",
        "normalized": "",
        "package": "HaTeX",
        "partial": "IGHeight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:IGPage",
      "description": {
        "fct-descr": "\u003cp\u003eIf the image file is a pdf file with multiple pages,\n   this parameter allows you to use a different page than the first.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "IGPage Int",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
        "fct-type": "function",
        "title": "IGPage"
      },
      "index": {
        "description": "If the image file is pdf file with multiple pages this parameter allows you to use different page than the first",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "IGPage",
        "normalized": "",
        "package": "HaTeX",
        "partial": "IGPage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:IGScale",
      "description": {
        "fct-descr": "\u003cp\u003eScales the image by the desired scale factor.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "IGScale Float",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
        "fct-type": "function",
        "title": "IGScale"
      },
      "index": {
        "description": "Scales the image by the desired scale factor",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "IGScale",
        "normalized": "",
        "package": "HaTeX",
        "partial": "IGScale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:IGTrim",
      "description": {
        "fct-descr": "\u003cp\u003eThis option will crop the imported image. Arguments are from-left\n , from-bottom, from-right and from-top respectively.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "IGTrim Measure Measure Measure Measure",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
        "fct-type": "function",
        "title": "IGTrim"
      },
      "index": {
        "description": "This option will crop the imported image Arguments are from-left from-bottom from-right and from-top respectively",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "IGTrim",
        "normalized": "",
        "package": "HaTeX",
        "partial": "IGTrim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:IGWidth",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the preferred width of the imported image.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "IGWidth Measure",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
        "fct-type": "function",
        "title": "IGWidth"
      },
      "index": {
        "description": "Specify the preferred width of the imported image",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "IGWidth",
        "normalized": "",
        "package": "HaTeX",
        "partial": "IGWidth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:KeepAspectRatio",
      "description": {
        "fct-descr": "\u003cp\u003eWhen \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, it will scale the image according to both \u003ccode\u003e\u003ca\u003eIGWidth\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIGHeight\u003c/a\u003e\u003c/code\u003e\n , but will not distort the image, so that neither \u003ccode\u003e\u003ca\u003eIGWidth\u003c/a\u003e\u003c/code\u003e nor \u003ccode\u003e\u003ca\u003eIGHeight\u003c/a\u003e\u003c/code\u003e are exceeded.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "KeepAspectRatio Bool",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
        "fct-type": "function",
        "title": "KeepAspectRatio"
      },
      "index": {
        "description": "When True it will scale the image according to both IGWidth and IGHeight but will not distort the image so that neither IGWidth nor IGHeight are exceeded",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "KeepAspectRatio",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Keep Aspect Ratio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:dvipdfm",
      "description": {
        "fct-descr": "\u003cp\u003ePackage option of the \u003ccode\u003e\u003ca\u003egraphicx\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#dvipdfm",
        "fct-type": "function",
        "title": "dvipdfm"
      },
      "index": {
        "description": "Package option of the graphicx package",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "dvipdfm",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:dvips",
      "description": {
        "fct-descr": "\u003cp\u003ePackage option of the \u003ccode\u003e\u003ca\u003egraphicx\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#dvips",
        "fct-type": "function",
        "title": "dvips"
      },
      "index": {
        "description": "Package option of the graphicx package",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "dvips",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:graphicx",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egraphicx\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e\u003cpre\u003e usepackage [] graphicx\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "PackageName",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#graphicx",
        "fct-type": "function",
        "title": "graphicx"
      },
      "index": {
        "description": "The graphicx package usepackage graphicx",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "graphicx",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:includegraphics",
      "description": {
        "fct-descr": "\u003cp\u003eInclude an image in the document.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "[IGOption]-\u003e FilePath-\u003e l",
        "fct-type": "function",
        "title": "includegraphics"
      },
      "index": {
        "description": "Include an image in the document",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "includegraphics",
        "normalized": "[IGOption]-\u003eFilePath-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "[IGOption]-\u003eFilePath-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:pdftex",
      "description": {
        "fct-descr": "\u003cp\u003ePackage option of the \u003ccode\u003e\u003ca\u003egraphicx\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#pdftex",
        "fct-type": "function",
        "title": "pdftex"
      },
      "index": {
        "description": "Package option of the graphicx package",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "pdftex",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:reflectbox",
      "description": {
        "fct-descr": "\u003cp\u003eReflect horizontally the content.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#reflectbox",
        "fct-type": "function",
        "title": "reflectbox"
      },
      "index": {
        "description": "Reflect horizontally the content",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "reflectbox",
        "normalized": "a-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "l-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:resizebox",
      "description": {
        "fct-descr": "\u003cp\u003eResize the content to match the given dimensions.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "Measure-\u003e Measure-\u003e l-\u003e l",
        "fct-type": "function",
        "title": "resizebox"
      },
      "index": {
        "description": "Resize the content to match the given dimensions",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "resizebox",
        "normalized": "Measure-\u003eMeasure-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Measure-\u003eMeasure-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:rotatebox",
      "description": {
        "fct-descr": "\u003cp\u003eRotate the content by the given angle in degrees.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "Float -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Graphicx.html#rotatebox",
        "fct-type": "function",
        "title": "rotatebox"
      },
      "index": {
        "description": "Rotate the content by the given angle in degrees",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "rotatebox",
        "normalized": "Float-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Float-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:scalebox",
      "description": {
        "fct-descr": "\u003cp\u003eScale the content by the given factor. If only the horizontal scale is supplied,\n   the vertical scaling will be the same.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Graphicx",
        "fct-package": "HaTeX",
        "fct-signature": "Float-\u003e Maybe Float-\u003e l-\u003e l",
        "fct-type": "function",
        "title": "scalebox"
      },
      "index": {
        "description": "Scale the content by the given factor If only the horizontal scale is supplied the vertical scaling will be the same",
        "hierarchy": "Text LaTeX Packages Graphicx",
        "module": "Text.LaTeX.Packages.Graphicx",
        "name": "scalebox",
        "normalized": "Float-\u003eMaybe Float-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Float-\u003eMaybe Float-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Hyperref",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-Hyperref.html",
        "fct-type": "module",
        "title": "Hyperref"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Hyperref",
        "module": "Text.LaTeX.Packages.Hyperref",
        "name": "Hyperref",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Hyperref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#t:HRefOption",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Hyperref",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Hyperref.html#HRefOption",
        "fct-type": "data",
        "title": "HRefOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Hyperref",
        "module": "Text.LaTeX.Packages.Hyperref",
        "name": "HRefOption",
        "normalized": "",
        "package": "HaTeX",
        "partial": "HRef Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#t:URL",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Hyperref",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Hyperref.html#URL",
        "fct-type": "data",
        "title": "URL"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Hyperref",
        "module": "Text.LaTeX.Packages.Hyperref",
        "name": "URL",
        "normalized": "",
        "package": "HaTeX",
        "partial": "URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:HRefPage",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Hyperref",
        "fct-package": "HaTeX",
        "fct-signature": "HRefPage Int",
        "fct-source": "src/Text-LaTeX-Packages-Hyperref.html#HRefOption",
        "fct-type": "function",
        "title": "HRefPage"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Hyperref",
        "module": "Text.LaTeX.Packages.Hyperref",
        "name": "HRefPage",
        "normalized": "",
        "package": "HaTeX",
        "partial": "HRef Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:PDFNewWindow",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Hyperref",
        "fct-package": "HaTeX",
        "fct-signature": "PDFNewWindow",
        "fct-source": "src/Text-LaTeX-Packages-Hyperref.html#HRefOption",
        "fct-type": "function",
        "title": "PDFNewWindow"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Hyperref",
        "module": "Text.LaTeX.Packages.Hyperref",
        "name": "PDFNewWindow",
        "normalized": "",
        "package": "HaTeX",
        "partial": "PDFNew Window",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:PDFRemoteStartView",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Hyperref",
        "fct-package": "HaTeX",
        "fct-signature": "PDFRemoteStartView",
        "fct-source": "src/Text-LaTeX-Packages-Hyperref.html#HRefOption",
        "fct-type": "function",
        "title": "PDFRemoteStartView"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Hyperref",
        "module": "Text.LaTeX.Packages.Hyperref",
        "name": "PDFRemoteStartView",
        "normalized": "",
        "package": "HaTeX",
        "partial": "PDFRemote Start View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:autoref",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a replacement for the usual \u003ccode\u003eref\u003c/code\u003e command that places a contextual label in front of the reference.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Hyperref",
        "fct-package": "HaTeX",
        "fct-signature": "Label -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Hyperref.html#autoref",
        "fct-type": "function",
        "title": "autoref"
      },
      "index": {
        "description": "This is replacement for the usual ref command that places contextual label in front of the reference",
        "hierarchy": "Text LaTeX Packages Hyperref",
        "module": "Text.LaTeX.Packages.Hyperref",
        "name": "autoref",
        "normalized": "Label-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "Label-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:createURL",
      "description": {
        "fct-module": "Text.LaTeX.Packages.Hyperref",
        "fct-package": "HaTeX",
        "fct-signature": "String -\u003e URL",
        "fct-source": "src/Text-LaTeX-Packages-Hyperref.html#createURL",
        "fct-type": "function",
        "title": "createURL"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages Hyperref",
        "module": "Text.LaTeX.Packages.Hyperref",
        "name": "createURL",
        "normalized": "String-\u003eURL",
        "package": "HaTeX",
        "partial": "URL",
        "signature": "String-\u003eURL"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:href",
      "description": {
        "fct-descr": "\u003cp\u003eReference to an \u003ccode\u003e\u003ca\u003eURL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Hyperref",
        "fct-package": "HaTeX",
        "fct-signature": "[HRefOption] -\u003e URL -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Hyperref.html#href",
        "fct-type": "function",
        "title": "href"
      },
      "index": {
        "description": "Reference to an URL",
        "hierarchy": "Text LaTeX Packages Hyperref",
        "module": "Text.LaTeX.Packages.Hyperref",
        "name": "href",
        "normalized": "[HRefOption]-\u003eURL-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "[HRefOption]-\u003eURL-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:hyperbaseurl",
      "description": {
        "fct-descr": "\u003cp\u003eEstablish a base \u003ccode\u003e\u003ca\u003eURL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Hyperref",
        "fct-package": "HaTeX",
        "fct-signature": "URL -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Hyperref.html#hyperbaseurl",
        "fct-type": "function",
        "title": "hyperbaseurl"
      },
      "index": {
        "description": "Establish base URL",
        "hierarchy": "Text LaTeX Packages Hyperref",
        "module": "Text.LaTeX.Packages.Hyperref",
        "name": "hyperbaseurl",
        "normalized": "URL-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "URL-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:hyperimage",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ehyperimage imgURL t\u003c/code\u003e:\n  The link to the image referenced by the \u003ccode\u003eimgURL\u003c/code\u003e is inserted, using \u003ccode\u003et\u003c/code\u003e as the anchor.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Hyperref",
        "fct-package": "HaTeX",
        "fct-signature": "URL -\u003e l -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Hyperref.html#hyperimage",
        "fct-type": "function",
        "title": "hyperimage"
      },
      "index": {
        "description": "hyperimage imgURL The link to the image referenced by the imgURL is inserted using as the anchor",
        "hierarchy": "Text LaTeX Packages Hyperref",
        "module": "Text.LaTeX.Packages.Hyperref",
        "name": "hyperimage",
        "normalized": "URL-\u003ea-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "URL-\u003el-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:hyperref",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehyperref\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e\u003cpre\u003e usepackage [] hyperref\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.Hyperref",
        "fct-package": "HaTeX",
        "fct-signature": "PackageName",
        "fct-source": "src/Text-LaTeX-Packages-Hyperref.html#hyperref",
        "fct-type": "function",
        "title": "hyperref"
      },
      "index": {
        "description": "The hyperref package usepackage hyperref",
        "hierarchy": "Text LaTeX Packages Hyperref",
        "module": "Text.LaTeX.Packages.Hyperref",
        "name": "hyperref",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:nolinkurl",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eURL\u003c/a\u003e\u003c/code\u003e without creating a hyperlink.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Hyperref",
        "fct-package": "HaTeX",
        "fct-signature": "URL -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Hyperref.html#nolinkurl",
        "fct-type": "function",
        "title": "nolinkurl"
      },
      "index": {
        "description": "Write an URL without creating hyperlink",
        "hierarchy": "Text LaTeX Packages Hyperref",
        "module": "Text.LaTeX.Packages.Hyperref",
        "name": "nolinkurl",
        "normalized": "URL-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "URL-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:url",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eURL\u003c/a\u003e\u003c/code\u003e hyperlinked.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Hyperref",
        "fct-package": "HaTeX",
        "fct-signature": "URL -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Hyperref.html#url",
        "fct-type": "function",
        "title": "url"
      },
      "index": {
        "description": "Write an URL hyperlinked",
        "hierarchy": "Text LaTeX Packages Hyperref",
        "module": "Text.LaTeX.Packages.Hyperref",
        "name": "url",
        "normalized": "URL-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "URL-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Inputenc.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package is of vital importance if you use non-ASCII characters in your document.\n   For example, if you type the word \u003cem\u003e&#193;ngela\u003c/em\u003e, the \u003cem\u003e&#193;\u003c/em\u003e character will not appear correctly in the\n   output. To solve this problem, use:\n\u003c/p\u003e\u003cpre\u003e usepackage [utf8] inputenc\n\u003c/pre\u003e\u003cp\u003eAnd make sure that your Haskell source is encoded in UTF-8.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.Inputenc",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-Inputenc.html",
        "fct-type": "module",
        "title": "Inputenc"
      },
      "index": {
        "description": "This package is of vital importance if you use non-ASCII characters in your document For example if you type the word ngela the character will not appear correctly in the output To solve this problem use usepackage utf8 inputenc And make sure that your Haskell source is encoded in UTF-8",
        "hierarchy": "Text LaTeX Packages Inputenc",
        "module": "Text.LaTeX.Packages.Inputenc",
        "name": "Inputenc",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Inputenc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Inputenc.html#v:inputenc",
      "description": {
        "fct-descr": "\u003cp\u003eInputenc package.\n Example:\n\u003c/p\u003e\u003cpre\u003e usepackage [utf8] inputenc\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.Inputenc",
        "fct-package": "HaTeX",
        "fct-signature": "PackageName",
        "fct-source": "src/Text-LaTeX-Packages-Inputenc.html#inputenc",
        "fct-type": "function",
        "title": "inputenc"
      },
      "index": {
        "description": "Inputenc package Example usepackage utf8 inputenc",
        "hierarchy": "Text LaTeX Packages Inputenc",
        "module": "Text.LaTeX.Packages.Inputenc",
        "name": "inputenc",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Inputenc.html#v:latin1",
      "description": {
        "fct-descr": "\u003cp\u003eLatin-1 encoding.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Inputenc",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-Inputenc.html#latin1",
        "fct-type": "function",
        "title": "latin1"
      },
      "index": {
        "description": "Latin-1 encoding",
        "hierarchy": "Text LaTeX Packages Inputenc",
        "module": "Text.LaTeX.Packages.Inputenc",
        "name": "latin1",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Inputenc.html#v:utf8",
      "description": {
        "fct-descr": "\u003cp\u003eUTF-8 encoding.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Inputenc",
        "fct-package": "HaTeX",
        "fct-signature": "l",
        "fct-source": "src/Text-LaTeX-Packages-Inputenc.html#utf8",
        "fct-type": "function",
        "title": "utf8"
      },
      "index": {
        "description": "UTF-8 encoding",
        "hierarchy": "Text LaTeX Packages Inputenc",
        "module": "Text.LaTeX.Packages.Inputenc",
        "name": "utf8",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a monadic interface to build \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e values.\n   It does so using \u003ccode\u003e\u003ca\u003ePathBuilder\u003c/a\u003e\u003c/code\u003es. The construction of a \u003ccode\u003e\u003ca\u003ePathBuilder\u003c/a\u003e\u003c/code\u003e\n   is equivalent to the construction of a \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e by hand, but with\n   a sometimes more convenient syntax.\n\u003c/p\u003e\u003cp\u003eFor example, this path corresponds to a triangle:\n\u003c/p\u003e\u003cpre\u003e trianglePath :: TPath\n trianglePath = bpath (pointAtXY (-1) 0) $ do\n    line $ pointAtXY 1 0\n    line $ pointAtXY 0 1\n    pcycle\n\u003c/pre\u003e\u003cp\u003eThe equivalent syntax created by hand would be:\n\u003c/p\u003e\u003cpre\u003e trianglePath :: TPath\n trianglePath = Cycle $ Start (pointAtXY (-1) 0) -\u003e- pointAtXY 1 0 -\u003e- pointAtXY 0 1\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCycle\u003c/a\u003e\u003c/code\u003e constructor at the beginning may seem unintuitive, since we are building\n   the path from left to right. In the \u003ccode\u003e\u003ca\u003ePathBuilder\u003c/a\u003e\u003c/code\u003e monad, the instructions are always\n   written in order.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html",
        "fct-type": "module",
        "title": "PathBuilder"
      },
      "index": {
        "description": "This module provides monadic interface to build TPath values It does so using PathBuilder The construction of PathBuilder is equivalent to the construction of TPath by hand but with sometimes more convenient syntax For example this path corresponds to triangle trianglePath TPath trianglePath bpath pointAtXY do line pointAtXY line pointAtXY pcycle The equivalent syntax created by hand would be trianglePath TPath trianglePath Cycle Start pointAtXY pointAtXY pointAtXY The Cycle constructor at the beginning may seem unintuitive since we are building the path from left to right In the PathBuilder monad the instructions are always written in order",
        "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
        "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "name": "PathBuilder",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Path Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#t:PathBuilder",
      "description": {
        "fct-descr": "\u003cp\u003eUse a \u003cem\u003epath builder\u003c/em\u003e to construct a value of type \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e.\n   Use \u003ccode\u003e\u003ca\u003ebpath\u003c/a\u003e\u003c/code\u003e for this purpose.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#PathBuilder",
        "fct-type": "data",
        "title": "PathBuilder"
      },
      "index": {
        "description": "Use path builder to construct value of type TPath Use bpath for this purpose",
        "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
        "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "name": "PathBuilder",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Path Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:bpath",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a path using a \u003cem\u003estarting point\u003c/em\u003e and a \u003ccode\u003e\u003ca\u003ePathBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "fct-package": "HaTeX",
        "fct-signature": "TPoint -\u003e PathBuilder a -\u003e TPath",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#bpath",
        "fct-type": "function",
        "title": "bpath"
      },
      "index": {
        "description": "Build path using starting point and PathBuilder",
        "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
        "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "name": "bpath",
        "normalized": "TPoint-\u003ePathBuilder a-\u003eTPath",
        "package": "HaTeX",
        "partial": "",
        "signature": "TPoint-\u003ePathBuilder a-\u003eTPath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:circle",
      "description": {
        "fct-descr": "\u003cp\u003eCircle with the given radius centered at the current point.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "fct-package": "HaTeX",
        "fct-signature": "Double -\u003e PathBuilder ()",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#circle",
        "fct-type": "function",
        "title": "circle"
      },
      "index": {
        "description": "Circle with the given radius centered at the current point",
        "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
        "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "name": "circle",
        "normalized": "Double-\u003ePathBuilder()",
        "package": "HaTeX",
        "partial": "",
        "signature": "Double-\u003ePathBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:ellipse",
      "description": {
        "fct-descr": "\u003cp\u003eEllipse with width and height described by the arguments and centered\n   at the current point.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "fct-package": "HaTeX",
        "fct-signature": "Double-\u003e Double-\u003e PathBuilder ()",
        "fct-type": "function",
        "title": "ellipse"
      },
      "index": {
        "description": "Ellipse with width and height described by the arguments and centered at the current point",
        "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
        "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "name": "ellipse",
        "normalized": "Double-\u003eDouble-\u003ePathBuilder()",
        "package": "HaTeX",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003ePathBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:grid",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "fct-package": "HaTeX",
        "fct-signature": "[GridOption] -\u003e TPoint -\u003e PathBuilder ()",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#grid",
        "fct-type": "function",
        "title": "grid"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
        "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "name": "grid",
        "normalized": "[GridOption]-\u003eTPoint-\u003ePathBuilder()",
        "package": "HaTeX",
        "partial": "",
        "signature": "[GridOption]-\u003eTPoint-\u003ePathBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:line",
      "description": {
        "fct-descr": "\u003cp\u003eLine from the current point to the given one.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "fct-package": "HaTeX",
        "fct-signature": "TPoint -\u003e PathBuilder ()",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#line",
        "fct-type": "function",
        "title": "line"
      },
      "index": {
        "description": "Line from the current point to the given one",
        "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
        "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "name": "line",
        "normalized": "TPoint-\u003ePathBuilder()",
        "package": "HaTeX",
        "partial": "",
        "signature": "TPoint-\u003ePathBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:node",
      "description": {
        "fct-descr": "\u003cp\u003eText centered at the current point.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "fct-package": "HaTeX",
        "fct-signature": "LaTeX -\u003e PathBuilder ()",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#node",
        "fct-type": "function",
        "title": "node"
      },
      "index": {
        "description": "Text centered at the current point",
        "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
        "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "name": "node",
        "normalized": "LaTeX-\u003ePathBuilder()",
        "package": "HaTeX",
        "partial": "",
        "signature": "LaTeX-\u003ePathBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:pcycle",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "fct-package": "HaTeX",
        "fct-signature": "PathBuilder ()",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#pcycle",
        "fct-type": "function",
        "title": "pcycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
        "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "name": "pcycle",
        "normalized": "PathBuilder()",
        "package": "HaTeX",
        "partial": "",
        "signature": "PathBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:rectangle",
      "description": {
        "fct-descr": "\u003cp\u003eRectangle with the current point as one cornder and the given point\n   as the opposite corner.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "fct-package": "HaTeX",
        "fct-signature": "TPoint -\u003e PathBuilder ()",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#rectangle",
        "fct-type": "function",
        "title": "rectangle"
      },
      "index": {
        "description": "Rectangle with the current point as one cornder and the given point as the opposite corner",
        "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
        "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
        "name": "rectangle",
        "normalized": "TPoint-\u003ePathBuilder()",
        "package": "HaTeX",
        "partial": "",
        "signature": "TPoint-\u003ePathBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple interface to create Ti\u003cem\u003ek\u003c/em\u003eZ graphics. Just build pictures using\n   the \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e data constructors, and get the Ti\u003cem\u003ek\u003c/em\u003eZ script using the function\n   \u003ccode\u003e\u003ca\u003efiguretikz\u003c/a\u003e\u003c/code\u003e. Use the function \u003ccode\u003e\u003ca\u003etikzpicture\u003c/a\u003e\u003c/code\u003e to insert the Ti\u003cem\u003ek\u003c/em\u003eZ script in\n   the LaTeX document. And do not forget to import the \u003ccode\u003e\u003ca\u003etikz\u003c/a\u003e\u003c/code\u003e package in the\n   preamble.\n\u003c/p\u003e\u003cp\u003ePlease, note that this module is not intended to be imported in the same module\n   than Text.LaTeX.Packages.TikZ. This module is itself a self-contained \u003cem\u003ealternative\u003c/em\u003e\n   of that module. If you still want to use both modules, please, use qualified imports\n   to avoid name clashes.\n\u003c/p\u003e\u003cp\u003eIn the \u003cem\u003eExamples\u003c/em\u003e directory of the source distribution, the file \u003ccode\u003etikzsimple.hs\u003c/code\u003e\n   contains a complete example of usage of this module with several pictures.\n   Below you can see a picture along with the code it came from.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"docfiles/tikz/tikzsimple.png\"/\u003e\n\u003c/p\u003e\u003cpre\u003e myFigure :: Figure\n myFigure = Scale 2 $ Figures\n   [ RectangleFilled (0,0) 1 1\n   , Colored (BasicColor Green) $ RectangleFilled (-1,1) 1 1\n   , Colored (BasicColor Red)   $ RectangleFilled ( 0,2) 1 1\n   , Colored (BasicColor Blue)  $ RectangleFilled ( 1,1) 1 1\n     ]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "simple interface to create Ti graphics Just build pictures using the Figure data constructors and get the Ti script using the function figuretikz Use the function tikzpicture to insert the Ti script in the LaTeX document And do not forget to import the tikz package in the preamble Please note that this module is not intended to be imported in the same module than Text.LaTeX.Packages.TikZ This module is itself self-contained alternative of that module If you still want to use both modules please use qualified imports to avoid name clashes In the Examples directory of the source distribution the file tikzsimple.hs contains complete example of usage of this module with several pictures Below you can see picture along with the code it came from myFigure Figure myFigure Scale Figures RectangleFilled Colored BasicColor Green RectangleFilled Colored BasicColor Red RectangleFilled Colored BasicColor Blue RectangleFilled",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eBasic colors.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "Basic colors",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Color",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#t:Figure",
      "description": {
        "fct-descr": "\u003cp\u003eA figure in the plane.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "data",
        "title": "Figure"
      },
      "index": {
        "description": "figure in the plane",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Figure",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Figure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#t:Point",
      "description": {
        "fct-descr": "\u003cp\u003eA point in the plane.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "type",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Point",
        "fct-type": "type",
        "title": "Point"
      },
      "index": {
        "description": "point in the plane",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Point",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#t:TikZColor",
      "description": {
        "fct-descr": "\u003cp\u003eColor models accepted by Ti\u003cem\u003ek\u003c/em\u003eZ.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TikZColor",
        "fct-type": "data",
        "title": "TikZColor"
      },
      "index": {
        "description": "Color models accepted by Ti",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "TikZColor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Tik ZColor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#t:Word8",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word8"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Word8",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:-45--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSequence two Ti\u003cem\u003ek\u003c/em\u003eZ scripts.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "TikZ -\u003e TikZ -\u003e TikZ",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#-%3E%3E",
        "fct-type": "function",
        "title": "(-\u003e\u003e)"
      },
      "index": {
        "description": "Sequence two Ti scripts",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "(-\u003e\u003e) -\u003e\u003e",
        "normalized": "TikZ-\u003eTikZ-\u003eTikZ",
        "package": "HaTeX",
        "partial": "",
        "signature": "TikZ-\u003eTikZ-\u003eTikZ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:BasicColor",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "BasicColor Color",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TikZColor",
        "fct-type": "function",
        "title": "BasicColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "BasicColor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Basic Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Black",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Black",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Black"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Black",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Black",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Blue",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Blue",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Blue",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Circle",
      "description": {
        "fct-descr": "\u003cp\u003eCircle centered at the given point with the given radius.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Circle Point Double",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "Circle"
      },
      "index": {
        "description": "Circle centered at the given point with the given radius",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Circle",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:CircleFilled",
      "description": {
        "fct-descr": "\u003cp\u003eAs in \u003ccode\u003e\u003ca\u003eCircle\u003c/a\u003e\u003c/code\u003e, but it will be filled with some color.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "CircleFilled Point Double",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "CircleFilled"
      },
      "index": {
        "description": "As in Circle but it will be filled with some color",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "CircleFilled",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Circle Filled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Colored",
      "description": {
        "fct-descr": "\u003cp\u003eColor for the given \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Colored TikZColor Figure",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "Colored"
      },
      "index": {
        "description": "Color for the given Figure",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Colored",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Colored",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Cyan",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Cyan",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Cyan",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Cyan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Ellipse",
      "description": {
        "fct-descr": "\u003cp\u003eEllipse centered at the given point with width and\n   height given by the other parameters.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Ellipse Point Double Double",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "Ellipse"
      },
      "index": {
        "description": "Ellipse centered at the given point with width and height given by the other parameters",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Ellipse",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Ellipse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:EllipseFilled",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eEllipse\u003c/a\u003e\u003c/code\u003e, but filled with some color.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "EllipseFilled Point Double Double",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "EllipseFilled"
      },
      "index": {
        "description": "Same as Ellipse but filled with some color",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "EllipseFilled",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Ellipse Filled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Figures",
      "description": {
        "fct-descr": "\u003cp\u003eA figure composed by a list of figures.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Figures [Figure]",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "Figures"
      },
      "index": {
        "description": "figure composed by list of figures",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Figures",
        "normalized": "Figures[Figure]",
        "package": "HaTeX",
        "partial": "Figures",
        "signature": "Figures[Figure]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Green",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Green",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Green"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Green",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Line",
      "description": {
        "fct-descr": "\u003cp\u003eLine along a list of points.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Line [Point]",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "Line"
      },
      "index": {
        "description": "Line along list of points",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Line",
        "normalized": "Line[Point]",
        "package": "HaTeX",
        "partial": "Line",
        "signature": "Line[Point]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:LineWidth",
      "description": {
        "fct-descr": "\u003cp\u003eLine width for the given \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "LineWidth Measure Figure",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "LineWidth"
      },
      "index": {
        "description": "Line width for the given Figure",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "LineWidth",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Line Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Magenta",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Magenta",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Magenta",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Magenta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Polygon",
      "description": {
        "fct-descr": "\u003cp\u003eLine along a list of points, but the last point will be joined\n   with the first one.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Polygon [Point]",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "Polygon"
      },
      "index": {
        "description": "Line along list of points but the last point will be joined with the first one",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Polygon",
        "normalized": "Polygon[Point]",
        "package": "HaTeX",
        "partial": "Polygon",
        "signature": "Polygon[Point]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:PolygonFilled",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ePolygon\u003c/a\u003e\u003c/code\u003e, but the inner side will be filled with color.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "PolygonFilled [Point]",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "PolygonFilled"
      },
      "index": {
        "description": "Same as Polygon but the inner side will be filled with color",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "PolygonFilled",
        "normalized": "PolygonFilled[Point]",
        "package": "HaTeX",
        "partial": "Polygon Filled",
        "signature": "PolygonFilled[Point]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:RGBColor",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "RGBColor Word8 Word8 Word8",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TikZColor",
        "fct-type": "function",
        "title": "RGBColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "RGBColor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "RGBColor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Rectangle",
      "description": {
        "fct-descr": "\u003cp\u003eRectangle with top-right corner at the given point and\n   width and height given by the other parameters.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Rectangle Point Double Double",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "Rectangle"
      },
      "index": {
        "description": "Rectangle with top-right corner at the given point and width and height given by the other parameters",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Rectangle",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:RectangleFilled",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eRectangle\u003c/a\u003e\u003c/code\u003e, but filled with color.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "RectangleFilled Point Double Double",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "RectangleFilled"
      },
      "index": {
        "description": "Same as Rectangle but filled with color",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "RectangleFilled",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Rectangle Filled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Red",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Red",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Red"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Red",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Rotate",
      "description": {
        "fct-descr": "\u003cp\u003eRotate a \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e by a given angle (in radians).\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Rotate Double Figure",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "Rotate"
      },
      "index": {
        "description": "Rotate Figure by given angle in radians",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Rotate",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Rotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Scale",
      "description": {
        "fct-descr": "\u003cp\u003eScaling of the given \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e by a factor.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Scale Double Figure",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "Scale"
      },
      "index": {
        "description": "Scaling of the given Figure by factor",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Scale",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Text",
      "description": {
        "fct-descr": "\u003cp\u003eInsert some \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e code, centered at the given \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e.\n   The text should not be very complex to fit nicely in the picture.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Text Point LaTeX",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "Insert some LaTeX code centered at the given Point The text should not be very complex to fit nicely in the picture",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Text",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:White",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "White",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "White"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "White",
        "normalized": "",
        "package": "HaTeX",
        "partial": "White",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Yellow",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Yellow",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "Yellow",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Yellow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:figuretikz",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate a \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eTikZ\u003c/a\u003e\u003c/code\u003e script.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Figure -\u003e TikZ",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Simple.html#figuretikz",
        "fct-type": "function",
        "title": "figuretikz"
      },
      "index": {
        "description": "Translate Figure to TikZ script",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "figuretikz",
        "normalized": "Figure-\u003eTikZ",
        "package": "HaTeX",
        "partial": "",
        "signature": "Figure-\u003eTikZ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:pathImage",
      "description": {
        "fct-descr": "\u003cp\u003eThe figure of a \u003cem\u003epath\u003c/em\u003e. A \u003cem\u003epath\u003c/em\u003e (in this context) means a function from an interval to\n   the plane. The image of such a function is what this function returns as a \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e.\n   An additional argument is needed to set the precision of the curve.\n\u003c/p\u003e\u003cp\u003eThe actual implementation builds a spline of degree one joining different points of the\n   image. Given that the interval is \u003cem\u003e(a,b)\u003c/em\u003e and the precision argument is &#949;, the points\n   in the spline will be \u003cem\u003ef(a)\u003c/em\u003e, \u003cem\u003ef(a+\u003c/em\u003e&#949;\u003cem\u003e)\u003c/em\u003e, \u003cem\u003ef(a+2\u003c/em\u003e&#949;\u003cem\u003e)\u003c/em\u003e, and so on, until reaching \u003cem\u003ef(b)\u003c/em\u003e.\n   The smaller is &#949;, the closer is the figure to the original image.\n\u003c/p\u003e\u003cp\u003eHere is an example with a logarithmic spiral.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"docfiles/tikz/spiral.png\"/\u003e\n\u003c/p\u003e\u003cpre\u003e spiral :: Figure\n spiral = LineWidth (Pt 2) $\n     pathImage 0.01 (0,4) $\n       \\t -\u003e ( a * exp t * cos (b*t)\n             , a * exp t * sin (b*t)\n               )\n   where\n     a = 0.1 ; b = 4\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "Double-\u003e (Double, Double)-\u003e (Double -\u003e Point)-\u003e Figure",
        "fct-type": "function",
        "title": "pathImage"
      },
      "index": {
        "description": "The figure of path path in this context means function from an interval to the plane The image of such function is what this function returns as Figure An additional argument is needed to set the precision of the curve The actual implementation builds spline of degree one joining different points of the image Given that the interval is and the precision argument is the points in the spline will be and so on until reaching The smaller is the closer is the figure to the original image Here is an example with logarithmic spiral spiral Figure spiral LineWidth Pt pathImage exp cos exp sin where",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "pathImage",
        "normalized": "Double-\u003e(Double,Double)-\u003e(Double-\u003ePoint)-\u003eFigure",
        "package": "HaTeX",
        "partial": "Image",
        "signature": "Double-\u003e(Double,Double)-\u003e(Double-\u003ePoint)-\u003eFigure"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:tikz",
      "description": {
        "fct-descr": "\u003cp\u003eImport the \u003ccode\u003e\u003ca\u003etikz\u003c/a\u003e\u003c/code\u003e package to use the functions exported\n   by this module. For example, adding this line to your\n   document preamble:\n\u003c/p\u003e\u003cpre\u003e usepackage [] tikz\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "PackageName",
        "fct-source": "src/Text-LaTeX-Packages-TikZ.html#tikz",
        "fct-type": "function",
        "title": "tikz"
      },
      "index": {
        "description": "Import the tikz package to use the functions exported by this module For example adding this line to your document preamble usepackage tikz",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "tikz",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:tikzpicture",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a Ti\u003cem\u003ek\u003c/em\u003eZ script to a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e block.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Simple",
        "fct-package": "HaTeX",
        "fct-signature": "TikZ -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-TikZ.html#tikzpicture",
        "fct-type": "function",
        "title": "tikzpicture"
      },
      "index": {
        "description": "Transform Ti script to LaTeX block",
        "hierarchy": "Text LaTeX Packages TikZ Simple",
        "module": "Text.LaTeX.Packages.TikZ.Simple",
        "name": "tikzpicture",
        "normalized": "TikZ-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "TikZ-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the syntax of a Ti\u003cem\u003ek\u003c/em\u003eZ script.\n\u003c/p\u003e\u003cp\u003eTo generate a Ti\u003cem\u003ek\u003c/em\u003eZ script, first create a \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e using\n data constructors, or alternatively, use a \u003ccode\u003ePathBuilder\u003c/code\u003e\n from the \u003ca\u003eText.LaTeX.Packages.TikZ.PathBuilder\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eOnce a \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e is created, use \u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e to render a picture\n from it. Use \u003ccode\u003e\u003ca\u003escope\u003c/a\u003e\u003c/code\u003e to apply some parameters to your picture,\n such line width or color.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html",
        "fct-type": "module",
        "title": "Syntax"
      },
      "index": {
        "description": "This module defines the syntax of Ti script To generate Ti script first create TPath using data constructors or alternatively use PathBuilder from the Text.LaTeX.Packages.TikZ.PathBuilder module Once TPath is created use path to render picture from it Use scope to apply some parameters to your picture such line width or color",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Syntax",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Syntax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:ActionType",
      "description": {
        "fct-descr": "\u003cp\u003eDifferent types of actions that can be performed\n   with a \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#ActionType",
        "fct-type": "data",
        "title": "ActionType"
      },
      "index": {
        "description": "Different types of actions that can be performed with TPath See path for more information",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "ActionType",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Action Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eBasic colors.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "Basic colors",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Color",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:GridOption",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#GridOption",
        "fct-type": "data",
        "title": "GridOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "GridOption",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Grid Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:Parameter",
      "description": {
        "fct-descr": "\u003cp\u003eParameters to use in a \u003ccode\u003e\u003ca\u003escope\u003c/a\u003e\u003c/code\u003e to change how things\n   are rendered within that scope.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Parameter",
        "fct-type": "data",
        "title": "Parameter"
      },
      "index": {
        "description": "Parameters to use in scope to change how things are rendered within that scope",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Parameter",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Parameter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:Step",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Step",
        "fct-type": "data",
        "title": "Step"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Step",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:TPath",
      "description": {
        "fct-descr": "\u003cp\u003eType for TikZ paths. Every \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e has two fundamental points: the \u003cem\u003estarting point\u003c/em\u003e\n   and the \u003cem\u003elast point\u003c/em\u003e.\n   The starting point is set using the \u003ccode\u003e\u003ca\u003eStart\u003c/a\u003e\u003c/code\u003e constructor.\n   The last point then is modified by the other constructors.\n   Below a explanation of each one of them.\n   Note that both starting point and last point may coincide.\n   You can use the functions \u003ccode\u003e\u003ca\u003estartingPoint\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elastPoint\u003c/a\u003e\u003c/code\u003e to calculate them.\n   After creating a \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e, use \u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e to do something useful with it.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
        "fct-type": "data",
        "title": "TPath"
      },
      "index": {
        "description": "Type for TikZ paths Every TPath has two fundamental points the starting point and the last point The starting point is set using the Start constructor The last point then is modified by the other constructors Below explanation of each one of them Note that both starting point and last point may coincide You can use the functions startingPoint and lastPoint to calculate them After creating TPath use path to do something useful with it",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "TPath",
        "normalized": "",
        "package": "HaTeX",
        "partial": "TPath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:TPoint",
      "description": {
        "fct-descr": "\u003cp\u003eA point in Ti\u003cem\u003ek\u003c/em\u003eZ.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPoint",
        "fct-type": "data",
        "title": "TPoint"
      },
      "index": {
        "description": "point in Ti",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "TPoint",
        "normalized": "",
        "package": "HaTeX",
        "partial": "TPoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:TikZ",
      "description": {
        "fct-descr": "\u003cp\u003eA Ti\u003cem\u003ek\u003c/em\u003eZ script.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TikZ",
        "fct-type": "data",
        "title": "TikZ"
      },
      "index": {
        "description": "Ti script",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "TikZ",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Tik",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:TikZColor",
      "description": {
        "fct-descr": "\u003cp\u003eColor models accepted by Ti\u003cem\u003ek\u003c/em\u003eZ.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TikZColor",
        "fct-type": "data",
        "title": "TikZColor"
      },
      "index": {
        "description": "Color models accepted by Ti",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "TikZColor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Tik ZColor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:Word8",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word8"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Word8",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:-45--62--45-",
      "description": {
        "fct-descr": "\u003cp\u003eAlias of \u003ccode\u003e\u003ca\u003eLine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TPath -\u003e TPoint -\u003e TPath",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#-%3E-",
        "fct-type": "function",
        "title": "(-\u003e-)"
      },
      "index": {
        "description": "Alias of Line",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "(-\u003e-) -\u003e-",
        "normalized": "TPath-\u003eTPoint-\u003eTPath",
        "package": "HaTeX",
        "partial": "",
        "signature": "TPath-\u003eTPoint-\u003eTPath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:-45--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSequence two Ti\u003cem\u003ek\u003c/em\u003eZ scripts.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TikZ -\u003e TikZ -\u003e TikZ",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#-%3E%3E",
        "fct-type": "function",
        "title": "(-\u003e\u003e)"
      },
      "index": {
        "description": "Sequence two Ti scripts",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "(-\u003e\u003e) -\u003e\u003e",
        "normalized": "TikZ-\u003eTikZ-\u003eTikZ",
        "package": "HaTeX",
        "partial": "",
        "signature": "TikZ-\u003eTikZ-\u003eTikZ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:BasicColor",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "BasicColor Color",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TikZColor",
        "fct-type": "function",
        "title": "BasicColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "BasicColor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Basic Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Black",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Black",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Black"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Black",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Black",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Blue",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Blue",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Blue",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Circle",
      "description": {
        "fct-descr": "\u003cp\u003eLet \u003ccode\u003ey = Circle x r\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eOperation:\u003c/em\u003e Define a circle with center at the last point\n of x and radius \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLast point:\u003c/em\u003e The last point of \u003ccode\u003ey\u003c/code\u003e is the same as the last\n point of \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Circle TPath Double",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
        "fct-type": "function",
        "title": "Circle"
      },
      "index": {
        "description": "Let Circle Operation Define circle with center at the last point of and radius Last point The last point of is the same as the last point of",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Circle",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Clip",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Clip",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#ActionType",
        "fct-type": "function",
        "title": "Clip"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Clip",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Clip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Cyan",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Cyan",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Cyan",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Cyan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Cycle",
      "description": {
        "fct-descr": "\u003cp\u003eLet \u003ccode\u003ey = Cycle x\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eOperation:\u003c/em\u003e Close a path with a line from the last point of \u003ccode\u003ex\u003c/code\u003e to\n the starting point of \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLast point:\u003c/em\u003e The last point of \u003ccode\u003ey\u003c/code\u003e is the starting point of \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Cycle TPath",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
        "fct-type": "function",
        "title": "Cycle"
      },
      "index": {
        "description": "Let Cycle Operation Close path with line from the last point of to the starting point of Last point The last point of is the starting point of",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Cycle",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Cycle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:DimStep",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "DimStep Measure",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Step",
        "fct-type": "function",
        "title": "DimStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "DimStep",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Dim Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Draw",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Draw",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#ActionType",
        "fct-type": "function",
        "title": "Draw"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Draw",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Draw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Ellipse",
      "description": {
        "fct-descr": "\u003cp\u003eLet \u003ccode\u003ey = Ellipse x r1 r2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eOperation:\u003c/em\u003e Define a ellipse with center at the last\n point of \u003ccode\u003ex\u003c/code\u003e, width the double of \u003ccode\u003er1\u003c/code\u003e and height\n the double of \u003ccode\u003er2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLast point:\u003c/em\u003e The last point of \u003ccode\u003ey\u003c/code\u003e is the same as the\n last point of \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Ellipse TPath Double Double",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
        "fct-type": "function",
        "title": "Ellipse"
      },
      "index": {
        "description": "Let Ellipse r1 r2 Operation Define ellipse with center at the last point of width the double of r1 and height the double of r2 Last point The last point of is the same as the last point of",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Ellipse",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Ellipse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Fill",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Fill",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#ActionType",
        "fct-type": "function",
        "title": "Fill"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Fill",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Fill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Green",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Green",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Green"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Green",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Grid",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Grid TPath [GridOption] TPoint",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
        "fct-type": "function",
        "title": "Grid"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Grid",
        "normalized": "Grid TPath[GridOption]TPoint",
        "package": "HaTeX",
        "partial": "Grid",
        "signature": "Grid TPath[GridOption]TPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:GridStep",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "GridStep Step",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#GridOption",
        "fct-type": "function",
        "title": "GridStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "GridStep",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Grid Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Line",
      "description": {
        "fct-descr": "\u003cp\u003eLet \u003ccode\u003ey = Line x p\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eOperation:\u003c/em\u003e Extend the current path from the last point of \u003ccode\u003ex\u003c/code\u003e\n in a straight line to \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLast point:\u003c/em\u003e The last point of \u003ccode\u003ey\u003c/code\u003e is \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Line TPath TPoint",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
        "fct-type": "function",
        "title": "Line"
      },
      "index": {
        "description": "Let Line Operation Extend the current path from the last point of in straight line to Last point The last point of is",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Line",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Magenta",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Magenta",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Magenta",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Magenta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Node",
      "description": {
        "fct-descr": "\u003cp\u003eLet \u003ccode\u003ey = Node x l\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eOperation:\u003c/em\u003e Set a text centered at the last point of \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLast point:\u003c/em\u003e The last point of \u003ccode\u003ey\u003c/code\u003e is the same as the last\n point of \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Node TPath LaTeX",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "Let Node Operation Set text centered at the last point of Last point The last point of is the same as the last point of",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Node",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:PointStep",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "PointStep TPoint",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Step",
        "fct-type": "function",
        "title": "PointStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "PointStep",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Point Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:RGBColor",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "RGBColor Word8 Word8 Word8",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TikZColor",
        "fct-type": "function",
        "title": "RGBColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "RGBColor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "RGBColor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Rectangle",
      "description": {
        "fct-descr": "\u003cp\u003eLet \u003ccode\u003ey = Rectangle x p\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eOperation:\u003c/em\u003e Define a rectangle using the last point of\n \u003ccode\u003ex\u003c/code\u003e as one corner and \u003ccode\u003ep\u003c/code\u003e as the another corner.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLast point:\u003c/em\u003e The last point of \u003ccode\u003ey\u003c/code\u003e is \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Rectangle TPath TPoint",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
        "fct-type": "function",
        "title": "Rectangle"
      },
      "index": {
        "description": "Let Rectangle Operation Define rectangle using the last point of as one corner and as the another corner Last point The last point of is",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Rectangle",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Red",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Red",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Red"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Red",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Shade",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Shade",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#ActionType",
        "fct-type": "function",
        "title": "Shade"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Shade",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Shade",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Start",
      "description": {
        "fct-descr": "\u003cp\u003eLet \u003ccode\u003ey = Start p\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eOperation:\u003c/em\u003e Set the starting point of a path.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLast point:\u003c/em\u003e The last point of \u003ccode\u003ey\u003c/code\u003e is \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Start TPoint",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
        "fct-type": "function",
        "title": "Start"
      },
      "index": {
        "description": "Let Start Operation Set the starting point of path Last point The last point of is",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Start",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:TColor",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TColor TikZColor",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Parameter",
        "fct-type": "function",
        "title": "TColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "TColor",
        "normalized": "",
        "package": "HaTeX",
        "partial": "TColor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:TRotate",
      "description": {
        "fct-descr": "\u003cp\u003eAngle is in degrees.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TRotate Double",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Parameter",
        "fct-type": "function",
        "title": "TRotate"
      },
      "index": {
        "description": "Angle is in degrees",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "TRotate",
        "normalized": "",
        "package": "HaTeX",
        "partial": "TRotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:TScale",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TScale Double",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Parameter",
        "fct-type": "function",
        "title": "TScale"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "TScale",
        "normalized": "",
        "package": "HaTeX",
        "partial": "TScale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:TWidth",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TWidth Measure",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Parameter",
        "fct-type": "function",
        "title": "TWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "TWidth",
        "normalized": "",
        "package": "HaTeX",
        "partial": "TWidth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:White",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "White",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "White"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "White",
        "normalized": "",
        "package": "HaTeX",
        "partial": "White",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:XYStep",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "XYStep Double",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Step",
        "fct-type": "function",
        "title": "XYStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "XYStep",
        "normalized": "",
        "package": "HaTeX",
        "partial": "XYStep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Yellow",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Yellow",
        "fct-source": "src/Text-LaTeX-Packages-Color.html#Color",
        "fct-type": "function",
        "title": "Yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "Yellow",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Yellow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:clip",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003epath [Clip]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TPath -\u003e TikZ",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#clip",
        "fct-type": "function",
        "title": "clip"
      },
      "index": {
        "description": "Equivalent to path Clip",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "clip",
        "normalized": "TPath-\u003eTikZ",
        "package": "HaTeX",
        "partial": "",
        "signature": "TPath-\u003eTikZ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:draw",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003epath [Draw]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TPath -\u003e TikZ",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#draw",
        "fct-type": "function",
        "title": "draw"
      },
      "index": {
        "description": "Equivalent to path Draw",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "draw",
        "normalized": "TPath-\u003eTikZ",
        "package": "HaTeX",
        "partial": "",
        "signature": "TPath-\u003eTikZ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:emptytikz",
      "description": {
        "fct-descr": "\u003cp\u003eJust an empty script.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TikZ",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#emptytikz",
        "fct-type": "function",
        "title": "emptytikz"
      },
      "index": {
        "description": "Just an empty script",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "emptytikz",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:fill",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003epath [Fill]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TPath -\u003e TikZ",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#fill",
        "fct-type": "function",
        "title": "fill"
      },
      "index": {
        "description": "Equivalent to path Fill",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "fill",
        "normalized": "TPath-\u003eTikZ",
        "package": "HaTeX",
        "partial": "",
        "signature": "TPath-\u003eTikZ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:filldraw",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003epath [Fill,Draw]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TPath -\u003e TikZ",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#filldraw",
        "fct-type": "function",
        "title": "filldraw"
      },
      "index": {
        "description": "Equivalent to path Fill Draw",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "filldraw",
        "normalized": "TPath-\u003eTikZ",
        "package": "HaTeX",
        "partial": "",
        "signature": "TPath-\u003eTikZ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:lastPoint",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the last point of a \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TPath -\u003e TPoint",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#lastPoint",
        "fct-type": "function",
        "title": "lastPoint"
      },
      "index": {
        "description": "Calculate the last point of TPath",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "lastPoint",
        "normalized": "TPath-\u003eTPoint",
        "package": "HaTeX",
        "partial": "Point",
        "signature": "TPath-\u003eTPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:path",
      "description": {
        "fct-descr": "\u003cp\u003eA path can be used in different ways.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e: Just draw the path.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFill\u003c/a\u003e\u003c/code\u003e: Fill the area inside the path.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eClip\u003c/a\u003e\u003c/code\u003e: Clean everything outside the path.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eShade\u003c/a\u003e\u003c/code\u003e: Shade the area inside the path.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt is possible to stack different effects in the list.\n\u003c/p\u003e\u003cp\u003eExample of usage:\n\u003c/p\u003e\u003cpre\u003e path [Draw] $ Start (pointAtXY 0 0) -\u003e- pointAtXY 1 1\n\u003c/pre\u003e\u003cp\u003eMost common usages are exported as functions. See\n   \u003ccode\u003e\u003ca\u003edraw\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclip\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eshade\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efilldraw\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003eshadedraw\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "[ActionType] -\u003e TPath -\u003e TikZ",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#path",
        "fct-type": "function",
        "title": "path"
      },
      "index": {
        "description": "path can be used in different ways Draw Just draw the path Fill Fill the area inside the path Clip Clean everything outside the path Shade Shade the area inside the path It is possible to stack different effects in the list Example of usage path Draw Start pointAtXY pointAtXY Most common usages are exported as functions See draw fill clip shade filldraw and shadedraw",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "path",
        "normalized": "[ActionType]-\u003eTPath-\u003eTikZ",
        "package": "HaTeX",
        "partial": "",
        "signature": "[ActionType]-\u003eTPath-\u003eTikZ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:pointAt",
      "description": {
        "fct-descr": "\u003cp\u003ePoint using \u003ccode\u003e\u003ca\u003eMeasure\u003c/a\u003e\u003c/code\u003es for coordinantes.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Measure -\u003e Measure -\u003e TPoint",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#pointAt",
        "fct-type": "function",
        "title": "pointAt"
      },
      "index": {
        "description": "Point using Measure for coordinantes",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "pointAt",
        "normalized": "Measure-\u003eMeasure-\u003eTPoint",
        "package": "HaTeX",
        "partial": "At",
        "signature": "Measure-\u003eMeasure-\u003eTPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:pointAtXY",
      "description": {
        "fct-descr": "\u003cp\u003ePoint using numbers as coordinates.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Double -\u003e Double -\u003e TPoint",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#pointAtXY",
        "fct-type": "function",
        "title": "pointAtXY"
      },
      "index": {
        "description": "Point using numbers as coordinates",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "pointAtXY",
        "normalized": "Double-\u003eDouble-\u003eTPoint",
        "package": "HaTeX",
        "partial": "At XY",
        "signature": "Double-\u003eDouble-\u003eTPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:pointAtXYZ",
      "description": {
        "fct-descr": "\u003cp\u003eThree-dimensional point.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "Double -\u003e Double -\u003e Double -\u003e TPoint",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#pointAtXYZ",
        "fct-type": "function",
        "title": "pointAtXYZ"
      },
      "index": {
        "description": "Three-dimensional point",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "pointAtXYZ",
        "normalized": "Double-\u003eDouble-\u003eDouble-\u003eTPoint",
        "package": "HaTeX",
        "partial": "At XYZ",
        "signature": "Double-\u003eDouble-\u003eDouble-\u003eTPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:relPoint",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a point relative to the previous.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TPoint -\u003e TPoint",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#relPoint",
        "fct-type": "function",
        "title": "relPoint"
      },
      "index": {
        "description": "Makes point relative to the previous",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "relPoint",
        "normalized": "TPoint-\u003eTPoint",
        "package": "HaTeX",
        "partial": "Point",
        "signature": "TPoint-\u003eTPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:relPoint_",
      "description": {
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TPoint -\u003e TPoint",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#relPoint_",
        "fct-type": "function",
        "title": "relPoint_"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "relPoint_",
        "normalized": "TPoint-\u003eTPoint",
        "package": "HaTeX",
        "partial": "Point",
        "signature": "TPoint-\u003eTPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:scope",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a scope to a Ti\u003cem\u003ek\u003c/em\u003eZ script.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "[Parameter] -\u003e TikZ -\u003e TikZ",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#scope",
        "fct-type": "function",
        "title": "scope"
      },
      "index": {
        "description": "Applies scope to Ti script",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "scope",
        "normalized": "[Parameter]-\u003eTikZ-\u003eTikZ",
        "package": "HaTeX",
        "partial": "",
        "signature": "[Parameter]-\u003eTikZ-\u003eTikZ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:shade",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003epath [Shade]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TPath -\u003e TikZ",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#shade",
        "fct-type": "function",
        "title": "shade"
      },
      "index": {
        "description": "Equivalent to path Shade",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "shade",
        "normalized": "TPath-\u003eTikZ",
        "package": "HaTeX",
        "partial": "",
        "signature": "TPath-\u003eTikZ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:shadedraw",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003epath [Shade,Draw]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TPath -\u003e TikZ",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#shadedraw",
        "fct-type": "function",
        "title": "shadedraw"
      },
      "index": {
        "description": "Equivalent to path Shade Draw",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "shadedraw",
        "normalized": "TPath-\u003eTikZ",
        "package": "HaTeX",
        "partial": "",
        "signature": "TPath-\u003eTikZ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:startingPoint",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the starting point of a \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ.Syntax",
        "fct-package": "HaTeX",
        "fct-signature": "TPath -\u003e TPoint",
        "fct-source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#startingPoint",
        "fct-type": "function",
        "title": "startingPoint"
      },
      "index": {
        "description": "Calculate the starting point of TPath",
        "hierarchy": "Text LaTeX Packages TikZ Syntax",
        "module": "Text.LaTeX.Packages.TikZ.Syntax",
        "name": "startingPoint",
        "normalized": "TPath-\u003eTPoint",
        "package": "HaTeX",
        "partial": "Point",
        "signature": "TPath-\u003eTPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTi\u003cem\u003ek\u003c/em\u003eZ ist \u003cem\u003ekein\u003c/em\u003e Zeichenprogramm.\n\u003c/p\u003e\u003cp\u003eTi\u003cem\u003ek\u003c/em\u003eZ is a frontend for PGF (Portable Graphics Format), a package for creating graphics\n using scripts embedded in a LaTeX document.\n\u003c/p\u003e\u003cp\u003eUsing this library you will be able to generate Ti\u003cem\u003ek\u003c/em\u003eZ scripts using Haskell functions.\n\u003c/p\u003e\u003cp\u003eThe interface given here is pretty close to the original Ti\u003cem\u003ek\u003c/em\u003eZ interface. Another\n layer of abstraction is given in \u003ca\u003eText.LaTeX.Packages.TikZ.Simple\u003c/a\u003e, module built\n from the entities exported here. Usually, one chooses one of the interfaces and\n work with it. However, if you want to use both of them, you will have to use\n qualified imports or you will get name clashes.\n\u003c/p\u003e\u003cp\u003eAlso, the module exported here, \u003ca\u003eText.LaTeX.Packages.TikZ.PathBuilder\u003c/a\u003e, provides\n an interface to create paths (see \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e) using monads.\n\u003c/p\u003e\u003cp\u003eOnce you have generated a Ti\u003cem\u003ek\u003c/em\u003eZ script, use \u003ccode\u003e\u003ca\u003etikzpicture\u003c/a\u003e\u003c/code\u003e to include it in a LaTeX\n document.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-TikZ.html",
        "fct-type": "module",
        "title": "TikZ"
      },
      "index": {
        "description": "Ti ist kein Zeichenprogramm Ti is frontend for PGF Portable Graphics Format package for creating graphics using scripts embedded in LaTeX document Using this library you will be able to generate Ti scripts using Haskell functions The interface given here is pretty close to the original Ti interface Another layer of abstraction is given in Text.LaTeX.Packages.TikZ.Simple module built from the entities exported here Usually one chooses one of the interfaces and work with it However if you want to use both of them you will have to use qualified imports or you will get name clashes Also the module exported here Text.LaTeX.Packages.TikZ.PathBuilder provides an interface to create paths see TPath using monads Once you have generated Ti script use tikzpicture to include it in LaTeX document",
        "hierarchy": "Text LaTeX Packages TikZ",
        "module": "Text.LaTeX.Packages.TikZ",
        "name": "TikZ",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Tik",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ.html#v:tikz",
      "description": {
        "fct-descr": "\u003cp\u003eImport the \u003ccode\u003e\u003ca\u003etikz\u003c/a\u003e\u003c/code\u003e package to use the functions exported\n   by this module. For example, adding this line to your\n   document preamble:\n\u003c/p\u003e\u003cpre\u003e usepackage [] tikz\n\u003c/pre\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ",
        "fct-package": "HaTeX",
        "fct-signature": "PackageName",
        "fct-source": "src/Text-LaTeX-Packages-TikZ.html#tikz",
        "fct-type": "function",
        "title": "tikz"
      },
      "index": {
        "description": "Import the tikz package to use the functions exported by this module For example adding this line to your document preamble usepackage tikz",
        "hierarchy": "Text LaTeX Packages TikZ",
        "module": "Text.LaTeX.Packages.TikZ",
        "name": "tikz",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ.html#v:tikzpicture",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a Ti\u003cem\u003ek\u003c/em\u003eZ script to a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e block.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.TikZ",
        "fct-package": "HaTeX",
        "fct-signature": "TikZ -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-TikZ.html#tikzpicture",
        "fct-type": "function",
        "title": "tikzpicture"
      },
      "index": {
        "description": "Transform Ti script to LaTeX block",
        "hierarchy": "Text LaTeX Packages TikZ",
        "module": "Text.LaTeX.Packages.TikZ",
        "name": "tikzpicture",
        "normalized": "TikZ-\u003ea",
        "package": "HaTeX",
        "partial": "",
        "signature": "TikZ-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees-Qtree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTree interface using the \u003ccode\u003eqtree\u003c/code\u003e package.\n   An example of usage is provided in the \u003cem\u003eexamples\u003c/em\u003e directory of\n   the source distribution.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.Trees.Qtree",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-Trees-Qtree.html",
        "fct-type": "module",
        "title": "Qtree"
      },
      "index": {
        "description": "Tree interface using the qtree package An example of usage is provided in the examples directory of the source distribution",
        "hierarchy": "Text LaTeX Packages Trees Qtree",
        "module": "Text.LaTeX.Packages.Trees.Qtree",
        "name": "Qtree",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Qtree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees-Qtree.html#v:qtree",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eqtree\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Trees.Qtree",
        "fct-package": "HaTeX",
        "fct-signature": "PackageName",
        "fct-source": "src/Text-LaTeX-Packages-Trees-Qtree.html#qtree",
        "fct-type": "function",
        "title": "qtree"
      },
      "index": {
        "description": "The qtree package",
        "hierarchy": "Text LaTeX Packages Trees Qtree",
        "module": "Text.LaTeX.Packages.Trees.Qtree",
        "name": "qtree",
        "normalized": "",
        "package": "HaTeX",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees-Qtree.html#v:rendertree",
      "description": {
        "fct-descr": "\u003cp\u003eThis function works as \u003ccode\u003e\u003ca\u003etree\u003c/a\u003e\u003c/code\u003e, but use \u003ccode\u003e\u003ca\u003erender\u003c/a\u003e\u003c/code\u003e as rendering function.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Trees.Qtree",
        "fct-package": "HaTeX",
        "fct-signature": "Tree a -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Trees-Qtree.html#rendertree",
        "fct-type": "function",
        "title": "rendertree"
      },
      "index": {
        "description": "This function works as tree but use render as rendering function",
        "hierarchy": "Text LaTeX Packages Trees Qtree",
        "module": "Text.LaTeX.Packages.Trees.Qtree",
        "name": "rendertree",
        "normalized": "Tree a-\u003eb",
        "package": "HaTeX",
        "partial": "",
        "signature": "Tree a-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees-Qtree.html#v:tree",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a function to \u003ccode\u003eLaTeX\u003c/code\u003e values, you can create a \u003ccode\u003eLaTeX\u003c/code\u003e tree from a\n   Haskell tree. The function specifies how to render the node values.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Trees.Qtree",
        "fct-package": "HaTeX",
        "fct-signature": "(a -\u003e l) -\u003e Tree a -\u003e l",
        "fct-source": "src/Text-LaTeX-Packages-Trees-Qtree.html#tree",
        "fct-type": "function",
        "title": "tree"
      },
      "index": {
        "description": "Given function to LaTeX values you can create LaTeX tree from Haskell tree The function specifies how to render the node values",
        "hierarchy": "Text LaTeX Packages Trees Qtree",
        "module": "Text.LaTeX.Packages.Trees.Qtree",
        "name": "tree",
        "normalized": "(a-\u003eb)-\u003eTree a-\u003eb",
        "package": "HaTeX",
        "partial": "",
        "signature": "(a-\u003el)-\u003eTree a-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTree definition with some class instances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX.Packages.Trees",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX-Packages-Trees.html",
        "fct-type": "module",
        "title": "Trees"
      },
      "index": {
        "description": "Tree definition with some class instances",
        "hierarchy": "Text LaTeX Packages Trees",
        "module": "Text.LaTeX.Packages.Trees",
        "name": "Trees",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Trees",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees.html#t:Tree",
      "description": {
        "fct-descr": "\u003cp\u003eTree datatype.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Trees",
        "fct-package": "HaTeX",
        "fct-signature": "data",
        "fct-source": "src/Text-LaTeX-Packages-Trees.html#Tree",
        "fct-type": "data",
        "title": "Tree"
      },
      "index": {
        "description": "Tree datatype",
        "hierarchy": "Text LaTeX Packages Trees",
        "module": "Text.LaTeX.Packages.Trees",
        "name": "Tree",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees.html#v:Leaf",
      "description": {
        "fct-descr": "\u003cp\u003eLeafs are non-empty.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Trees",
        "fct-package": "HaTeX",
        "fct-signature": "Leaf a",
        "fct-source": "src/Text-LaTeX-Packages-Trees.html#Tree",
        "fct-type": "function",
        "title": "Leaf"
      },
      "index": {
        "description": "Leafs are non-empty",
        "hierarchy": "Text LaTeX Packages Trees",
        "module": "Text.LaTeX.Packages.Trees",
        "name": "Leaf",
        "normalized": "",
        "package": "HaTeX",
        "partial": "Leaf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees.html#v:Node",
      "description": {
        "fct-descr": "\u003cp\u003eNode values are optional.\n\u003c/p\u003e",
        "fct-module": "Text.LaTeX.Packages.Trees",
        "fct-package": "HaTeX",
        "fct-signature": "Node (Maybe a) [Tree a]",
        "fct-source": "src/Text-LaTeX-Packages-Trees.html#Tree",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "Node values are optional",
        "hierarchy": "Text LaTeX Packages Trees",
        "module": "Text.LaTeX.Packages.Trees",
        "name": "Node",
        "normalized": "Node(Maybe a)[Tree a]",
        "package": "HaTeX",
        "partial": "Node",
        "signature": "Node(Maybe a)[Tree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a re-export of the Base module.\n   You may find it shorter to import. Below you can\n   also find a short overview of HaTeX.\n\u003c/p\u003e\u003cp\u003eHistorically, this module also exported the Packages\n   module. But, since it's more common to import the Base\n   module and, then, only the packages you need (instead\n   of all of them), this module has been upgraded supporting\n   it.\n\u003c/p\u003e\u003cp\u003eFor this reason, the module \u003ccode\u003eText.LaTeX.Packages\u003c/code\u003e no longer\n   exists.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LaTeX",
        "fct-package": "HaTeX",
        "fct-signature": "module",
        "fct-source": "src/Text-LaTeX.html",
        "fct-type": "module",
        "title": "LaTeX"
      },
      "index": {
        "description": "This module is re-export of the Base module You may find it shorter to import Below you can also find short overview of HaTeX Historically this module also exported the Packages module But since it more common to import the Base module and then only the packages you need instead of all of them this module has been upgraded supporting it For this reason the module Text.LaTeX.Packages no longer exists",
        "hierarchy": "Text LaTeX",
        "module": "Text.LaTeX",
        "name": "LaTeX",
        "normalized": "",
        "package": "HaTeX",
        "partial": "La Te",
        "signature": ""
      }
    }
  }
]