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
        "word": "HaTeX"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinition of the \u003ccode\u003e\u003ca\u003eLaTeXC\u003c/a\u003e\u003c/code\u003e class, used to combine the classic applicative and\n   the latter monadic interfaces of \u003cem\u003eHaTeX 3\u003c/em\u003e. The user can define new instances\n   as well, adding flexibility to the way \u003cem\u003eHaTeX\u003c/em\u003e is used.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "Class",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Definition of the LaTeXC class used to combine the classic applicative and the latter monadic interfaces of HaTeX The user can define new instances as well adding flexibility to the way HaTeX is used",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "Class",
          "package": "HaTeX",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the class of \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e code generators. It has \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e as\n   superclasses.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "LaTeXC",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Class.html#LaTeXC",
          "type": "class"
        },
        "index": {
          "description": "This is the class of LaTeX code generators It has Monoid and IsString as superclasses",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "LaTeXC",
          "package": "HaTeX",
          "partial": "La Te XC",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#t:LaTeXC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "Monoid",
          "package": "HaTeX",
          "type": "class"
        },
        "index": {
          "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "Monoid",
          "package": "HaTeX",
          "partial": "Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#t:Monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lifted version of the \u003ccode\u003e\u003ca\u003eTeXBraces\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e\u003cpre\u003e braces = liftL TeXBraces\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "braces",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Class.html#braces",
          "type": "function"
        },
        "index": {
          "description": "lifted version of the TeXBraces constructor braces liftL TeXBraces",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "braces",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple (without arguments) and handy command generator\n   using the name of the command.\n\u003c/p\u003e\u003cpre\u003e comm0 str = fromLaTeX $ TeXComm str []\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "comm0",
          "package": "HaTeX",
          "signature": "String -\u003e l",
          "source": "src/Text-LaTeX-Base-Class.html#comm0",
          "type": "function"
        },
        "index": {
          "description": "simple without arguments and handy command generator using the name of the command comm0 str fromLaTeX TeXComm str",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "comm0",
          "normalized": "String-\u003ea",
          "package": "HaTeX",
          "signature": "String-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:comm0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA one parameter command generator using the name of the command.\n   The parameter will be rendered as a fixed argument.\n\u003c/p\u003e\u003cpre\u003e comm1 str = liftL $ \\l -\u003e TeXComm str [FixArg l]\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "comm1",
          "package": "HaTeX",
          "signature": "String -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Base-Class.html#comm1",
          "type": "function"
        },
        "index": {
          "description": "one parameter command generator using the name of the command The parameter will be rendered as fixed argument comm1 str liftL TeXComm str FixArg",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "comm1",
          "normalized": "String-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "String-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:comm1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecomm0\u003c/a\u003e\u003c/code\u003e but using \u003ccode\u003e\u003ca\u003eTeXCommS\u003c/a\u003e\u003c/code\u003e, i.e. no \"{}\" will be inserted to protect\n the command's end.\n\u003c/p\u003e\u003cpre\u003e commS = fromLaTeX . TeXCommS\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "commS",
          "package": "HaTeX",
          "signature": "String -\u003e l",
          "source": "src/Text-LaTeX-Base-Class.html#commS",
          "type": "function"
        },
        "index": {
          "description": "Like comm0 but using TeXCommS i.e no will be inserted to protect the command end commS fromLaTeX TeXCommS",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "commS",
          "normalized": "String-\u003ea",
          "package": "HaTeX",
          "signature": "String-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:commS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value to its equivalent in any \u003ccode\u003e\u003ca\u003eLaTeXC\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "fromLaTeX",
          "package": "HaTeX",
          "signature": "LaTeX -\u003e l",
          "source": "src/Text-LaTeX-Base-Class.html#fromLaTeX",
          "type": "function"
        },
        "index": {
          "description": "Map LaTeX value to its equivalent in any LaTeXC instance",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "fromLaTeX",
          "normalized": "LaTeX-\u003ea",
          "package": "HaTeX",
          "partial": "La Te",
          "signature": "LaTeX-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:fromLaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a inner function of \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values into any \u003ccode\u003e\u003ca\u003eLaTeXC\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "liftL",
          "package": "HaTeX",
          "signature": "(LaTeX -\u003e LaTeX) -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Base-Class.html#liftL",
          "type": "function"
        },
        "index": {
          "description": "Lift inner function of LaTeX values into any LaTeXC instance",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "liftL",
          "normalized": "(LaTeX-\u003eLaTeX)-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "(LaTeX-\u003eLaTeX)-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:liftL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eliftL\u003c/a\u003e\u003c/code\u003e with a two arguments function.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "liftL2",
          "package": "HaTeX",
          "signature": "(LaTeX -\u003e LaTeX -\u003e LaTeX) -\u003e l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Base-Class.html#liftL2",
          "type": "function"
        },
        "index": {
          "description": "Variant of liftL with two arguments function",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "liftL2",
          "normalized": "(LaTeX-\u003eLaTeX-\u003eLaTeX)-\u003ea-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "(LaTeX-\u003eLaTeX-\u003eLaTeX)-\u003el-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:liftL2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eliftL\u003c/a\u003e\u003c/code\u003e with a three arguments function.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "liftL3",
          "package": "HaTeX",
          "signature": "(LaTeX -\u003e LaTeX -\u003e LaTeX -\u003e LaTeX) -\u003e l -\u003e l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Base-Class.html#liftL3",
          "type": "function"
        },
        "index": {
          "description": "Variant of liftL with three arguments function",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "liftL3",
          "normalized": "(LaTeX-\u003eLaTeX-\u003eLaTeX-\u003eLaTeX)-\u003ea-\u003ea-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "(LaTeX-\u003eLaTeX-\u003eLaTeX-\u003eLaTeX)-\u003el-\u003el-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:liftL3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method must take a function that combines a list of \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values into a new one,\n   and creates a function that combines \u003ccode\u003el\u003c/code\u003e-typed values. The combining function can be\n   seen as a function with 0 or more \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e arguments with a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value as output.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "liftListL",
          "package": "HaTeX",
          "signature": "([LaTeX] -\u003e LaTeX) -\u003e [l] -\u003e l",
          "source": "src/Text-LaTeX-Base-Class.html#liftListL",
          "type": "method"
        },
        "index": {
          "description": "This method must take function that combines list of LaTeX values into new one and creates function that combines typed values The combining function can be seen as function with or more LaTeX arguments with LaTeX value as output",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "liftListL",
          "normalized": "([LaTeX]-\u003eLaTeX)-\u003e[a]-\u003ea",
          "package": "HaTeX",
          "partial": "List",
          "signature": "([LaTeX]-\u003eLaTeX)-\u003e[l]-\u003el",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:liftListL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "mappend",
          "package": "HaTeX",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "An associative operation",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "mappend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:mappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a list using the monoid.\n For most types, the default definition for \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e will be\n used, but the function is included in the class definition so\n that an optimized version can be provided for specific types.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "mconcat",
          "package": "HaTeX",
          "signature": "[a] -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Fold list using the monoid For most types the default definition for mconcat will be used but the function is included in the class definition so that an optimized version can be provided for specific types",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "mconcat",
          "normalized": "[a]-\u003ea",
          "package": "HaTeX",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:mconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Class",
          "name": "mempty",
          "package": "HaTeX",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "description": "Identity of mappend",
          "hierarchy": "Text LaTeX Base Class",
          "module": "Text.LaTeX.Base.Class",
          "name": "mempty",
          "package": "HaTeX",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Class.html#v:mempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLaTeX standard commands and environments.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "Commands",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Commands.html",
          "type": "module"
        },
        "index": {
          "description": "LaTeX standard commands and environments",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "Commands",
          "package": "HaTeX",
          "partial": "Commands",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class option to be passed to the \u003ccode\u003e\u003ca\u003edocumentclass\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "ClassOption",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "data"
        },
        "index": {
          "description": "class option to be passed to the documentclass function",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "ClassOption",
          "package": "HaTeX",
          "partial": "Class Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#t:ClassOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaTeX available paper types.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "PaperType",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "data"
        },
        "index": {
          "description": "LaTeX available paper types",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "PaperType",
          "package": "HaTeX",
          "partial": "Paper Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#t:PaperType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis operator appends a comment after a expression.\n   For example:\n\u003c/p\u003e\u003cpre\u003e textbf \"I'm just an example.\" %: \"Insert a few words here.\"\n\u003c/pre\u003e\u003cp\u003eThe implementation is\n\u003c/p\u003e\u003cpre\u003e (%:) l = (l \u003c\u003e) . comment\n\u003c/pre\u003e\u003cp\u003eSince you are writing in Haskell, you may not need to output comments\n as you can add them in the Haskell source. I added this feature\n for completeness. It may be useful for debugging the output as well.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "(%:)",
          "package": "HaTeX",
          "signature": "l -\u003e Text -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#%25%3A",
          "type": "function"
        },
        "index": {
          "description": "This operator appends comment after expression For example textbf just an example Insert few words here The implementation is comment Since you are writing in Haskell you may not need to output comments as you can add them in the Haskell source added this feature for completeness It may be useful for debugging the output as well",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "(%:) %:",
          "normalized": "a-\u003eText-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003eText-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:-37-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColumn separator.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "(&)",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#%26",
          "type": "function"
        },
        "index": {
          "description": "Column separator",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "(&) &",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "A0",
          "package": "HaTeX",
          "signature": "A0",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "A0",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:A0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "A1",
          "package": "HaTeX",
          "signature": "A1",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "A1",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:A1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "A2",
          "package": "HaTeX",
          "signature": "A2",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "A2",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:A2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "A3",
          "package": "HaTeX",
          "signature": "A3",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "A3",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:A3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "A4",
          "package": "HaTeX",
          "signature": "A4",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "A4",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:A4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "A5",
          "package": "HaTeX",
          "signature": "A5",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "A5",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:A5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "A6",
          "package": "HaTeX",
          "signature": "A6",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "A6",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:A6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "B0",
          "package": "HaTeX",
          "signature": "B0",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "B0",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:B0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "B1",
          "package": "HaTeX",
          "signature": "B1",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "B1",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:B1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "B2",
          "package": "HaTeX",
          "signature": "B2",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "B2",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:B2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "B3",
          "package": "HaTeX",
          "signature": "B3",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "B3",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:B3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "B4",
          "package": "HaTeX",
          "signature": "B4",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "B4",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:B4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "B5",
          "package": "HaTeX",
          "signature": "B5",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "B5",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:B5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "B6",
          "package": "HaTeX",
          "signature": "B6",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "B6",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:B6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "CustomOption",
          "package": "HaTeX",
          "signature": "CustomOption String",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "CustomOption",
          "package": "HaTeX",
          "partial": "Custom Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:CustomOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "Draft",
          "package": "HaTeX",
          "signature": "Draft",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "Draft",
          "package": "HaTeX",
          "partial": "Draft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Draft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "Executive",
          "package": "HaTeX",
          "signature": "Executive",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "Executive",
          "package": "HaTeX",
          "partial": "Executive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Executive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "Fleqn",
          "package": "HaTeX",
          "signature": "Fleqn",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "Fleqn",
          "package": "HaTeX",
          "partial": "Fleqn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Fleqn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "FontSize",
          "package": "HaTeX",
          "signature": "FontSize Measure",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "FontSize",
          "package": "HaTeX",
          "partial": "Font Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:FontSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "Landscape",
          "package": "HaTeX",
          "signature": "Landscape",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "Landscape",
          "package": "HaTeX",
          "partial": "Landscape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Landscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "Legal",
          "package": "HaTeX",
          "signature": "Legal",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "Legal",
          "package": "HaTeX",
          "partial": "Legal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Legal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "Leqno",
          "package": "HaTeX",
          "signature": "Leqno",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "Leqno",
          "package": "HaTeX",
          "partial": "Leqno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Leqno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "Letter",
          "package": "HaTeX",
          "signature": "Letter",
          "source": "src/Text-LaTeX-Base-Commands.html#PaperType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "Letter",
          "package": "HaTeX",
          "partial": "Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "NoTitlePage",
          "package": "HaTeX",
          "signature": "NoTitlePage",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "NoTitlePage",
          "package": "HaTeX",
          "partial": "No Title Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:NoTitlePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "OneColumn",
          "package": "HaTeX",
          "signature": "OneColumn",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "OneColumn",
          "package": "HaTeX",
          "partial": "One Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:OneColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "OneSide",
          "package": "HaTeX",
          "signature": "OneSide",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "OneSide",
          "package": "HaTeX",
          "partial": "One Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:OneSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "OpenAny",
          "package": "HaTeX",
          "signature": "OpenAny",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "OpenAny",
          "package": "HaTeX",
          "partial": "Open Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:OpenAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "OpenRight",
          "package": "HaTeX",
          "signature": "OpenRight",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "OpenRight",
          "package": "HaTeX",
          "partial": "Open Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:OpenRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "Paper",
          "package": "HaTeX",
          "signature": "Paper PaperType",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "Paper",
          "package": "HaTeX",
          "partial": "Paper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:Paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "TitlePage",
          "package": "HaTeX",
          "signature": "TitlePage",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "TitlePage",
          "package": "HaTeX",
          "partial": "Title Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:TitlePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "TwoColumn",
          "package": "HaTeX",
          "signature": "TwoColumn",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "TwoColumn",
          "package": "HaTeX",
          "partial": "Two Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:TwoColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "TwoSide",
          "package": "HaTeX",
          "signature": "TwoSide",
          "source": "src/Text-LaTeX-Base-Commands.html#ClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "TwoSide",
          "package": "HaTeX",
          "partial": "Two Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:TwoSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "a0paper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#a0paper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "a0paper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:a0paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "a1paper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#a1paper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "a1paper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:a1paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "a2paper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#a2paper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "a2paper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:a2paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "a3paper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#a3paper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "a3paper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:a3paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "a4paper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#a4paper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "a4paper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:a4paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "a5paper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#a5paper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "a5paper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:a5paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "a6paper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#a6paper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "a6paper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:a6paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract section.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "abstract",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#abstract",
          "type": "function"
        },
        "index": {
          "description": "Abstract section",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "abstract",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:abstract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowercase letters.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "alph",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#alph",
          "type": "function"
        },
        "index": {
          "description": "Lowercase letters",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "alph",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:alph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUppercase letters.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "alph_",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#alph_",
          "type": "function"
        },
        "index": {
          "description": "Uppercase letters",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "alph_",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:alph_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "appendix",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#appendix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "appendix",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:appendix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArabic numerals.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "arabic",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#arabic",
          "type": "function"
        },
        "index": {
          "description": "Arabic numerals",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "arabic",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:arabic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "article",
          "package": "HaTeX",
          "signature": "ClassName",
          "source": "src/Text-LaTeX-Base-Commands.html#article",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "article",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:article"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the author(s) of the document.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "author",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#author",
          "type": "function"
        },
        "index": {
          "description": "Set the author of the document",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "author",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "b0paper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#b0paper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "b0paper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:b0paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "b1paper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#b1paper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "b1paper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:b1paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "b2paper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#b2paper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "b2paper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:b2paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "b3paper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#b3paper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "b3paper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:b3paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "b4paper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#b4paper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "b4paper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:b4paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "b5paper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#b5paper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "b5paper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:b5paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "b6paper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#b6paper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "b6paper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:b6paper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalling \u003ccode\u003e\u003ca\u003ebetween\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec l1 l2\u003c/code\u003e puts \u003ccode\u003ec\u003c/code\u003e between \u003ccode\u003el1\u003c/code\u003e and \u003ccode\u003el2\u003c/code\u003e and\n   appends them.\n\u003c/p\u003e\u003cpre\u003e between c l1 l2 = l1 \u003c\u003e c \u003c\u003e l2\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "between",
          "package": "HaTeX",
          "signature": "m -\u003e m -\u003e m -\u003e m",
          "source": "src/Text-LaTeX-Base-Commands.html#between",
          "type": "function"
        },
        "index": {
          "description": "Calling between l1 l2 puts between l1 and l2 and appends them between l1 l2 l1 l2",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "between",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "m-\u003em-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "bigskip",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#bigskip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "bigskip",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:bigskip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "book",
          "package": "HaTeX",
          "signature": "ClassName",
          "source": "src/Text-LaTeX-Base-Commands.html#book",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "book",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:book"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "caption",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#caption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "caption",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:caption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCenter-justify the argument.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "center",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#center",
          "type": "function"
        },
        "index": {
          "description": "Center-justify the argument",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "center",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "chapter",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#chapter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "chapter",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:chapter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "cite",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#cite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "cite",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:cite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "cleardoublepage",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#cleardoublepage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "cleardoublepage",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:cleardoublepage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "clearpage",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#clearpage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "clearpage",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:clearpage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecline i j\u003c/code\u003e writes a partial horizontal line beginning in column \u003ccode\u003ei\u003c/code\u003e and ending in column \u003ccode\u003ej\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "cline",
          "package": "HaTeX",
          "signature": "Int -\u003e Int -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#cline",
          "type": "function"
        },
        "index": {
          "description": "cline writes partial horizontal line beginning in column and ending in column",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "cline",
          "normalized": "Int-\u003eInt-\u003ea",
          "package": "HaTeX",
          "signature": "Int-\u003eInt-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:cline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a comment.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "comment",
          "package": "HaTeX",
          "signature": "Text -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#comment",
          "type": "function"
        },
        "index": {
          "description": "Create comment",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "comment",
          "normalized": "Text-\u003ea",
          "package": "HaTeX",
          "signature": "Text-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "customopt",
          "package": "HaTeX",
          "signature": "String -\u003e ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#customopt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "customopt",
          "normalized": "String-\u003eClassOption",
          "package": "HaTeX",
          "signature": "String-\u003eClassOption",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:customopt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a date for your document.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "date",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#date",
          "type": "function"
        },
        "index": {
          "description": "Set date for your document",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "date",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiagonal dots.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "ddots",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#ddots",
          "type": "function"
        },
        "index": {
          "description": "Diagonal dots",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "ddots",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:ddots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "description",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#description",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "description",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e environment contains the body of the document.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "document",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#document",
          "type": "function"
        },
        "index": {
          "description": "The document environment contains the body of the document",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "document",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the document class. Needed in all documents.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "documentclass",
          "package": "HaTeX",
          "signature": "[ClassOption]-\u003e ClassName-\u003e l",
          "type": "function"
        },
        "index": {
          "description": "Set the document class Needed in all documents",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "documentclass",
          "normalized": "[ClassOption]-\u003eClassName-\u003ea",
          "package": "HaTeX",
          "signature": "[ClassOption]-\u003eClassName-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:documentclass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "draft",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#draft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "draft",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:draft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "emph",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#emph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "emph",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:emph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "empty",
          "package": "HaTeX",
          "signature": "PageStyle",
          "source": "src/Text-LaTeX-Base-Commands.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "empty",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnvironment of ordered lists. Use \u003ccode\u003e\u003ca\u003eitem\u003c/a\u003e\u003c/code\u003e to start each list\n   item.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "enumerate",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#enumerate",
          "type": "function"
        },
        "index": {
          "description": "Environment of ordered lists Use item to start each list item",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "enumerate",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:enumerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "executivepaper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#executivepaper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "executivepaper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:executivepaper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "fbox",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#fbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "fbox",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:fbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFigure environment.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "figure",
          "package": "HaTeX",
          "signature": "Maybe Pos-\u003e l-\u003e l",
          "type": "function"
        },
        "index": {
          "description": "Figure environment",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "figure",
          "normalized": "Maybe Pos-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Maybe Pos-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:figure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypesets displayed formulae left-aligned instead of centred.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "fleqn",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#fleqn",
          "type": "function"
        },
        "index": {
          "description": "Typesets displayed formulae left-aligned instead of centred",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "fleqn",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:fleqn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-justify the argument.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "flushleft",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#flushleft",
          "type": "function"
        },
        "index": {
          "description": "Left-justify the argument",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "flushleft",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:flushleft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-justify the argument.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "flushright",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#flushright",
          "type": "function"
        },
        "index": {
          "description": "Right-justify the argument",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "flushright",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:flushright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "footnote",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#footnote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "footnote",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:footnote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "footnotesize",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#footnotesize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "footnotesize",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:footnotesize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "framebox",
          "package": "HaTeX",
          "signature": "Maybe Measure -\u003e Maybe Pos -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#framebox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "framebox",
          "normalized": "Maybe Measure-\u003eMaybe Pos-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Maybe Measure-\u003eMaybe Pos-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:framebox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the HaTeX logo.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "hatex",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#hatex",
          "type": "function"
        },
        "index": {
          "description": "Print the HaTeX logo",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "hatex",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hatex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the HaTeX 3 logo.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "hatex3",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#hatex3",
          "type": "function"
        },
        "index": {
          "description": "Print the HaTeX logo",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "hatex3",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hatex3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the HaTeX logo, beside the complete version number.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "hatex_version",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#hatex_version",
          "type": "function"
        },
        "index": {
          "description": "Print the HaTeX logo beside the complete version number",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "hatex_version",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hatex_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "headings",
          "package": "HaTeX",
          "signature": "PageStyle",
          "source": "src/Text-LaTeX-Base-Commands.html#headings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "headings",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:headings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill out all available horizontal space.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "hfill",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#hfill",
          "type": "function"
        },
        "index": {
          "description": "Fill out all available horizontal space",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "hfill",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hfill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal line.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "hline",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#hline",
          "type": "function"
        },
        "index": {
          "description": "Horizontal line",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "hline",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "hspace",
          "package": "HaTeX",
          "signature": "Measure -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#hspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "hspace",
          "normalized": "Measure-\u003ea",
          "package": "HaTeX",
          "signature": "Measure-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "hspace_",
          "package": "HaTeX",
          "signature": "Measure -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#hspace_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "hspace_",
          "normalized": "Measure-\u003ea",
          "package": "HaTeX",
          "signature": "Measure-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hspace_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "huge",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#huge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "huge",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:huge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "huge2",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#huge2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "huge2",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:huge2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "hyp",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#hyp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "hyp",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hyp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "hyphenation",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#hyphenation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "hyphenation",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:hyphenation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003einput\u003c/a\u003e\u003c/code\u003e, but forces a page break.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote: the file you are including cannot include other files.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "include",
          "package": "HaTeX",
          "signature": "FilePath -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#include",
          "type": "function"
        },
        "index": {
          "description": "Similar to input but forces page break Note the file you are including cannot include other files",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "include",
          "normalized": "FilePath-\u003ea",
          "package": "HaTeX",
          "signature": "FilePath-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:include"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "indent",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#indent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "indent",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:indent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport an external file and insert its content \u003cem\u003eas it is\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "input",
          "package": "HaTeX",
          "signature": "FilePath -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#input",
          "type": "function"
        },
        "index": {
          "description": "Import an external file and insert its content as it is",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "input",
          "normalized": "FilePath-\u003ea",
          "package": "HaTeX",
          "signature": "FilePath-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet either an institute or an organization\n for the document. It does \u003cem\u003enot\u003c/em\u003e work for\n a document of the \u003ccode\u003e\u003ca\u003earticle\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "institute",
          "package": "HaTeX",
          "signature": "Maybe l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#institute",
          "type": "function"
        },
        "index": {
          "description": "Set either an institute or an organization for the document It does not work for document of the article class",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "institute",
          "normalized": "Maybe a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Maybe l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:institute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn item of a list (see \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eitemize\u003c/a\u003e\u003c/code\u003e).\n   The optional argument sets the design of the item.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "item",
          "package": "HaTeX",
          "signature": "Maybe l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#item",
          "type": "function"
        },
        "index": {
          "description": "An item of list see enumerate or itemize The optional argument sets the design of the item",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "item",
          "normalized": "Maybe a-\u003ea",
          "package": "HaTeX",
          "signature": "Maybe l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnvironment of unordered lists. Use \u003ccode\u003e\u003ca\u003eitem\u003c/a\u003e\u003c/code\u003e to start each list\n   item.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "itemize",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#itemize",
          "type": "function"
        },
        "index": {
          "description": "Environment of unordered lists Use item to start each list item",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "itemize",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:itemize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaTeX logo.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "laTeX2",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#laTeX2",
          "type": "function"
        },
        "index": {
          "description": "LaTeX logo",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "laTeX2",
          "package": "HaTeX",
          "partial": "Te",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:laTeX2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "laTeXe",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#laTeXe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "laTeXe",
          "package": "HaTeX",
          "partial": "Te Xe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:laTeXe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "label",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "label",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges the layout of the document to print in landscape mode\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "landscape",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#landscape",
          "type": "function"
        },
        "index": {
          "description": "Changes the layout of the document to print in landscape mode",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "landscape",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:landscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "large",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#large",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "large",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:large"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "large2",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#large2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "large2",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:large2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "large3",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#large3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "large3",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:large3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eLaTeX\u003c/code\u003e logo.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "latex",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#latex",
          "type": "function"
        },
        "index": {
          "description": "The LaTeX logo",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "latex",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:latex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal dots.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "ldots",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#ldots",
          "type": "function"
        },
        "index": {
          "description": "Horizontal dots",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "ldots",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:ldots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "legalpaper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#legalpaper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "legalpaper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:legalpaper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlaces the numbering of formulae on the left hand side instead of the right.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "leqno",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#leqno",
          "type": "function"
        },
        "index": {
          "description": "Places the numbering of formulae on the left hand side instead of the right",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "leqno",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:leqno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "letterpaper",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#letterpaper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "letterpaper",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:letterpaper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "linebreak",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#linebreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "linebreak",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:linebreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "linespread",
          "package": "HaTeX",
          "signature": "Float -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#linespread",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "linespread",
          "normalized": "Float-\u003ea",
          "package": "HaTeX",
          "signature": "Float-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:linespread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "linewidth",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#linewidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "linewidth",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:linewidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a new line. In a \u003ccode\u003e\u003ca\u003etabular\u003c/a\u003e\u003c/code\u003e, it starts a new row, so use \u003ccode\u003e\u003ca\u003enewline\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "lnbk",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#lnbk",
          "type": "function"
        },
        "index": {
          "description": "Start new line In tabular it starts new row so use newline instead",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "lnbk",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:lnbk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "lnbk_",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#lnbk_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "lnbk_",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:lnbk_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "makebox",
          "package": "HaTeX",
          "signature": "Maybe Measure -\u003e Maybe Pos -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#makebox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "makebox",
          "normalized": "Maybe Measure-\u003eMaybe Pos-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Maybe Measure-\u003eMaybe Pos-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:makebox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the title. It normally contains the \u003ccode\u003e\u003ca\u003etitle\u003c/a\u003e\u003c/code\u003e name\n of your document, the \u003ccode\u003e\u003ca\u003eauthor\u003c/a\u003e\u003c/code\u003e(s) and \u003ccode\u003e\u003ca\u003edate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "maketitle",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#maketitle",
          "type": "function"
        },
        "index": {
          "description": "Generate the title It normally contains the title name of your document the author and date",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "maketitle",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:maketitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in conjunction with \u003ccode\u003e\u003ca\u003emyheadings\u003c/a\u003e\u003c/code\u003e for setting both the left and the right heading.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "markboth",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#markboth",
          "type": "function"
        },
        "index": {
          "description": "Used in conjunction with myheadings for setting both the left and the right heading",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "markboth",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:markboth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in conjunction with \u003ccode\u003e\u003ca\u003emyheadings\u003c/a\u003e\u003c/code\u003e for setting the right heading.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "markright",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#markright",
          "type": "function"
        },
        "index": {
          "description": "Used in conjunction with myheadings for setting the right heading",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "markright",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:markright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "mbox",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#mbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "mbox",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:mbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "minimal",
          "package": "HaTeX",
          "signature": "ClassName",
          "source": "src/Text-LaTeX-Base-Commands.html#minimal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "minimal",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:minimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinipage environment.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "minipage",
          "package": "HaTeX",
          "signature": "Maybe Pos-\u003e l-\u003e l-\u003e l",
          "type": "function"
        },
        "index": {
          "description": "Minipage environment",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "minipage",
          "normalized": "Maybe Pos-\u003ea-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Maybe Pos-\u003el-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:minipage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCell taking multiple columns.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "multicolumn",
          "package": "HaTeX",
          "signature": "Int -\u003e [TableSpec] -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#multicolumn",
          "type": "function"
        },
        "index": {
          "description": "Cell taking multiple columns",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "multicolumn",
          "normalized": "Int-\u003e[TableSpec]-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Int-\u003e[TableSpec]-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:multicolumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "myheadings",
          "package": "HaTeX",
          "signature": "PageStyle",
          "source": "src/Text-LaTeX-Base-Commands.html#myheadings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "myheadings",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:myheadings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a new line.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "newline",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#newline",
          "type": "function"
        },
        "index": {
          "description": "Start new line",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "newline",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "newpage",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#newpage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "newpage",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:newpage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "noindent",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#noindent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "noindent",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:noindent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "nolinebreak",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#nolinebreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "nolinebreak",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:nolinebreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "nopagebreak",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#nopagebreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "nopagebreak",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:nopagebreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "normalsize",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#normalsize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "normalsize",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:normalsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "notitlepage",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#notitlepage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "notitlepage",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:notitlepage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "onecolumn",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#onecolumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "onecolumn",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:onecolumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "oneside",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#oneside",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "oneside",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:oneside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes chapters begin on the next page available.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "openany",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#openany",
          "type": "function"
        },
        "index": {
          "description": "Makes chapters begin on the next page available",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "openany",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:openany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes chapters begin either only on right hand pages\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "openright",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#openright",
          "type": "function"
        },
        "index": {
          "description": "Makes chapters begin either only on right hand pages",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "openright",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:openright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "pagebreak",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#pagebreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "pagebreak",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:pagebreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "pagenumbering",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#pagenumbering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "pagenumbering",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:pagenumbering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "pageref",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#pageref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "pageref",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:pageref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "pagestyle",
          "package": "HaTeX",
          "signature": "PageStyle -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#pagestyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "pagestyle",
          "normalized": "PageStyle-\u003ea",
          "package": "HaTeX",
          "signature": "PageStyle-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:pagestyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a new paragraph\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "par",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#par",
          "type": "function"
        },
        "index": {
          "description": "Start new paragraph",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "par",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a paragraph.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "paragraph",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#paragraph",
          "type": "function"
        },
        "index": {
          "description": "Start paragraph",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "paragraph",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:paragraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "parbox",
          "package": "HaTeX",
          "signature": "Maybe Pos -\u003e Measure -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#parbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "parbox",
          "normalized": "Maybe Pos-\u003eMeasure-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Maybe Pos-\u003eMeasure-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:parbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "part",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#part",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "part",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "plain",
          "package": "HaTeX",
          "signature": "PageStyle",
          "source": "src/Text-LaTeX-Base-Commands.html#plain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "plain",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "proc",
          "package": "HaTeX",
          "signature": "ClassName",
          "source": "src/Text-LaTeX-Base-Commands.html#proc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "proc",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:proc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "protect",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#protect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "protect",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:protect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuotation marks.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "qts",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#qts",
          "type": "function"
        },
        "index": {
          "description": "Quotation marks",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "qts",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:qts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "quote",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#quote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "quote",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:quote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "raisebox",
          "package": "HaTeX",
          "signature": "Measure -\u003e Maybe Measure -\u003e Maybe Measure -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#raisebox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "raisebox",
          "normalized": "Measure-\u003eMaybe Measure-\u003eMaybe Measure-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Measure-\u003eMaybe Measure-\u003eMaybe Measure-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:raisebox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a raw piece of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n This functions doesn't care about \u003ccode\u003eLaTeX\u003c/code\u003e reserved characters,\n it insert the text just as it is received.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWarning:\u003c/em\u003e This function is \u003cem\u003eunsafe\u003c/em\u003e, in the sense that it does\n not check that the input text is a valid LaTeX \u003cem\u003eblock\u003c/em\u003e.\n Make sure any braces, commands or environments are properly closed.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "raw",
          "package": "HaTeX",
          "signature": "Text -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#raw",
          "type": "function"
        },
        "index": {
          "description": "Insert raw piece of Text This functions doesn care about LaTeX reserved characters it insert the text just as it is received Warning This function is unsafe in the sense that it does not check that the input text is valid LaTeX block Make sure any braces commands or environments are properly closed",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "raw",
          "normalized": "Text-\u003ea",
          "package": "HaTeX",
          "signature": "Text-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:raw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "ref",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "ref",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "report",
          "package": "HaTeX",
          "signature": "ClassName",
          "source": "src/Text-LaTeX-Base-Commands.html#report",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "report",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:report"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowercase roman numerals.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "roman",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#roman",
          "type": "function"
        },
        "index": {
          "description": "Lowercase roman numerals",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "roman",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:roman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUppercase roman numerals.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "roman_",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#roman_",
          "type": "function"
        },
        "index": {
          "description": "Uppercase roman numerals",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "roman_",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:roman_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a simple black box.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "rule",
          "package": "HaTeX",
          "signature": "Maybe Measure-\u003e Measure-\u003e Measure-\u003e l",
          "type": "function"
        },
        "index": {
          "description": "Produce simple black box",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "rule",
          "normalized": "Maybe Measure-\u003eMeasure-\u003eMeasure-\u003ea",
          "package": "HaTeX",
          "signature": "Maybe Measure-\u003eMeasure-\u003eMeasure-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "scriptsize",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#scriptsize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "scriptsize",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:scriptsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a new section with a given title.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "section",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#section",
          "type": "function"
        },
        "index": {
          "description": "Start new section with given title",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "section",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "slides",
          "package": "HaTeX",
          "signature": "ClassName",
          "source": "src/Text-LaTeX-Base-Commands.html#slides",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "slides",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:slides"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "small",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#small",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "small",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "smallskip",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#smallskip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "smallskip",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:smallskip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "stretch",
          "package": "HaTeX",
          "signature": "Int -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#stretch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "stretch",
          "normalized": "Int-\u003ea",
          "package": "HaTeX",
          "signature": "Int-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:stretch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a subparagraph (minimal level of sectioning).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "subparagraph",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#subparagraph",
          "type": "function"
        },
        "index": {
          "description": "Start subparagraph minimal level of sectioning",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "subparagraph",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:subparagraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a new subsection.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "subsection",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#subsection",
          "type": "function"
        },
        "index": {
          "description": "Start new subsection",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "subsection",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:subsection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a new sub\u003cem\u003esub\u003c/em\u003esection.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "subsubsection",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#subsubsection",
          "type": "function"
        },
        "index": {
          "description": "Start new sub sub section",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "subsubsection",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:subsubsection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the table of contents, automatically generated\n from your \u003ccode\u003e\u003ca\u003esection\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003esubsection\u003c/a\u003e\u003c/code\u003es, and other related stuff.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "tableofcontents",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#tableofcontents",
          "type": "function"
        },
        "index": {
          "description": "Create the table of contents automatically generated from your section subsection and other related stuff",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "tableofcontents",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:tableofcontents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etabular\u003c/a\u003e\u003c/code\u003e environment can be used to typeset tables with optional horizontal and vertical lines.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "tabular",
          "package": "HaTeX",
          "signature": "Maybe Pos-\u003e [TableSpec]-\u003e l-\u003e l",
          "type": "function"
        },
        "index": {
          "description": "The tabular environment can be used to typeset tables with optional horizontal and vertical lines",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "tabular",
          "normalized": "Maybe Pos-\u003e[TableSpec]-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Maybe Pos-\u003e[TableSpec]-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:tabular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTeX logo.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "tex",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#tex",
          "type": "function"
        },
        "index": {
          "description": "TeX logo",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "tex",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:tex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the given argument to bold font face.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "textbf",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#textbf",
          "type": "function"
        },
        "index": {
          "description": "Set the given argument to bold font face",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "textbf",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textbf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "textit",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#textit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "textit",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "textmd",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#textmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "textmd",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "textnormal",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#textnormal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "textnormal",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textnormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "textrm",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#textrm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "textrm",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textrm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the given argument to small caps format.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "textsc",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#textsc",
          "type": "function"
        },
        "index": {
          "description": "Set the given argument to small caps format",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "textsc",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "textsf",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#textsf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "textsf",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textsf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "textsl",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#textsl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "textsl",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textsl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the given argument to monospaced font.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "texttt",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#texttt",
          "type": "function"
        },
        "index": {
          "description": "Set the given argument to monospaced font",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "texttt",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:texttt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "textup",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#textup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "textup",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "textwidth",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#textwidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "textwidth",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:textwidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "thanks",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#thanks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "thanks",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:thanks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the current page.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "thePage",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#thePage",
          "type": "function"
        },
        "index": {
          "description": "Render the current page",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "thePage",
          "package": "HaTeX",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:thePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "thispagestyle",
          "package": "HaTeX",
          "signature": "PageStyle -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#thispagestyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "thispagestyle",
          "normalized": "PageStyle-\u003ea",
          "package": "HaTeX",
          "signature": "PageStyle-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:thispagestyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "tiny",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#tiny",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "tiny",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:tiny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the title of your document.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "title",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#title",
          "type": "function"
        },
        "index": {
          "description": "Set the title of your document",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "title",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "titlepage",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#titlepage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "titlepage",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:titlepage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the date at compilation time.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "today",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#today",
          "type": "function"
        },
        "index": {
          "description": "Render the date at compilation time",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "today",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:today"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "twocolumn",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#twocolumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "twocolumn",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:twocolumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "twoside",
          "package": "HaTeX",
          "signature": "ClassOption",
          "source": "src/Text-LaTeX-Base-Commands.html#twoside",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "twoside",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:twoside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "underline",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#underline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "underline",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:underline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport a package. First argument is a list of options for\n the package named in the second argument.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "usepackage",
          "package": "HaTeX",
          "signature": "[l] -\u003e PackageName -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#usepackage",
          "type": "function"
        },
        "index": {
          "description": "Import package First argument is list of options for the package named in the second argument",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "usepackage",
          "normalized": "[a]-\u003ePackageName-\u003ea",
          "package": "HaTeX",
          "signature": "[l]-\u003ePackageName-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:usepackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical dots.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "vdots",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#vdots",
          "type": "function"
        },
        "index": {
          "description": "Vertical dots",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "vdots",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:vdots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInclude text, as given and in typewriter, but in-line.\n Note that, for LaTeX-specific technical reasons, verbatim\n text can generally only be used \"at the top level\", not\n in e.g. section titles or other command-arguments.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003everbatim\u003c/a\u003e\u003c/code\u003e, which LaTeX implements as an ordinary environment,\n its command \u003ccode\u003e\u003ca\u003everb\u003c/a\u003e\u003c/code\u003e uses a syntax trick to avoid braking its parsing\n when the literal text contains a closing brace: rather than using braces\n at all, the first character after \u003ccode\u003e\\verb\u003c/code\u003e will be the right delimiter as well.\n Translating this method to HaTeX wouldn't really make sense since Haskell\n has string literals with their own escaping possibilities; instead, we make\n it secure by automatically choosing a delimiter that does not turn up \n in the given string.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "verb",
          "package": "HaTeX",
          "signature": "Text -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#verb",
          "type": "function"
        },
        "index": {
          "description": "Include text as given and in typewriter but in-line Note that for LaTeX-specific technical reasons verbatim text can generally only be used at the top level not in e.g section titles or other command-arguments Unlike verbatim which LaTeX implements as an ordinary environment its command verb uses syntax trick to avoid braking its parsing when the literal text contains closing brace rather than using braces at all the first character after verb will be the right delimiter as well Translating this method to HaTeX wouldn really make sense since Haskell has string literals with their own escaping possibilities instead we make it secure by automatically choosing delimiter that does not turn up in the given string",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "verb",
          "normalized": "Text-\u003ea",
          "package": "HaTeX",
          "signature": "Text-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:verb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe point of \u003ccode\u003e\u003ca\u003everbatim\u003c/a\u003e\u003c/code\u003e is to include text that will\n \u003cem\u003enot\u003c/em\u003e be parsed as LaTeX in any way at all, but should simply\n appear as given in the document, in a separate display\n in typewriter font.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "verbatim",
          "package": "HaTeX",
          "signature": "Text -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#verbatim",
          "type": "function"
        },
        "index": {
          "description": "The point of verbatim is to include text that will not be parsed as LaTeX in any way at all but should simply appear as given in the document in separate display in typewriter font",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "verbatim",
          "normalized": "Text-\u003ea",
          "package": "HaTeX",
          "signature": "Text-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:verbatim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "verse",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#verse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "verse",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:verse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "version",
          "package": "HaTeX",
          "signature": "Version",
          "source": "src/Paths_HaTeX.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "version",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill out all available vertical space.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Commands",
          "name": "vfill",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Base-Commands.html#vfill",
          "type": "function"
        },
        "index": {
          "description": "Fill out all available vertical space",
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "vfill",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:vfill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Commands",
          "name": "vspace",
          "package": "HaTeX",
          "signature": "Measure -\u003e l",
          "source": "src/Text-LaTeX-Base-Commands.html#vspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Commands",
          "module": "Text.LaTeX.Base.Commands",
          "name": "vspace",
          "normalized": "Measure-\u003ea",
          "package": "HaTeX",
          "signature": "Measure-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Commands.html#v:vspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLaTeX Parser based on Attoparsec\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Base.Parser",
          "name": "Parser",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "LaTeX Parser based on Attoparsec",
          "hierarchy": "Text LaTeX Base Parser",
          "module": "Text.LaTeX.Base.Parser",
          "name": "Parser",
          "package": "HaTeX",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use parseLaTeX instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eparseLaTeX\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Parser",
          "name": "latexAtOnce",
          "package": "HaTeX",
          "signature": "Text -\u003e Either String LaTeX",
          "source": "src/Text-LaTeX-Base-Parser.html#latexAtOnce",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use parseLaTeX instead Same as parseLaTeX",
          "hierarchy": "Text LaTeX Base Parser",
          "module": "Text.LaTeX.Base.Parser",
          "name": "latexAtOnce",
          "normalized": "Text-\u003eEither String LaTeX",
          "package": "HaTeX",
          "partial": "At Once",
          "signature": "Text-\u003eEither String LaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Parser.html#v:latexAtOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser of a single \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e constructor, no appending blocks.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Parser",
          "name": "latexBlockParser",
          "package": "HaTeX",
          "signature": "Parser LaTeX",
          "source": "src/Text-LaTeX-Base-Parser.html#latexBlockParser",
          "type": "function"
        },
        "index": {
          "description": "Parser of single LaTeX constructor no appending blocks",
          "hierarchy": "Text LaTeX Base Parser",
          "module": "Text.LaTeX.Base.Parser",
          "name": "latexBlockParser",
          "package": "HaTeX",
          "partial": "Block Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Parser.html#v:latexBlockParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncremental \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e parser.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Parser",
          "name": "latexParser",
          "package": "HaTeX",
          "signature": "Parser LaTeX",
          "source": "src/Text-LaTeX-Base-Parser.html#latexParser",
          "type": "function"
        },
        "index": {
          "description": "Incremental LaTeX parser",
          "hierarchy": "Text LaTeX Base Parser",
          "module": "Text.LaTeX.Base.Parser",
          "name": "latexParser",
          "package": "HaTeX",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Parser.html#v:latexParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e sequence as a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e block. If it fails, it returns\n   an error string.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Parser",
          "name": "parseLaTeX",
          "package": "HaTeX",
          "signature": "Text -\u003e Either String LaTeX",
          "source": "src/Text-LaTeX-Base-Parser.html#parseLaTeX",
          "type": "function"
        },
        "index": {
          "description": "Parse Text sequence as LaTeX block If it fails it returns an error string",
          "hierarchy": "Text LaTeX Base Parser",
          "module": "Text.LaTeX.Base.Parser",
          "name": "parseLaTeX",
          "normalized": "Text-\u003eEither String LaTeX",
          "package": "HaTeX",
          "partial": "La Te",
          "signature": "Text-\u003eEither String LaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Parser.html#v:parseLaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe final purpose of this module is to render a Text value\n   from a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value. The interface is abstracted via a typeclass\n   so you can cast to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e other types as well. Also, some other\n   handy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e-related functions are defined.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Base.Render",
          "name": "Render",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Render.html",
          "type": "module"
        },
        "index": {
          "description": "The final purpose of this module is to render Text value from LaTeX value The interface is abstracted via typeclass so you can cast to Text other types as well Also some other handy Text related functions are defined",
          "hierarchy": "Text LaTeX Base Render",
          "module": "Text.LaTeX.Base.Render",
          "name": "Render",
          "package": "HaTeX",
          "partial": "Render",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of values that can be transformed to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n You mainly will use this to obtain the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e output\n of a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value. If you are going to write the result\n in a file, consider to use \u003ccode\u003e\u003ca\u003erenderFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConsider also to use \u003ccode\u003e\u003ca\u003erendertex\u003c/a\u003e\u003c/code\u003e to get \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003eable values\n into \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e blocks.\n\u003c/p\u003e\u003cp\u003eIf you want to make a type instance of \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e and you already\n have a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance, you can use the default instance.\n\u003c/p\u003e\u003cpre\u003e render = fromString . show\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Base.Render",
          "name": "Render",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Render.html#Render",
          "type": "class"
        },
        "index": {
          "description": "Class of values that can be transformed to Text You mainly will use this to obtain the Text output of LaTeX value If you are going to write the result in file consider to use renderFile Consider also to use rendertex to get Render able values into LaTeX blocks If you want to make type instance of Render and you already have Show instance you can use the default instance render fromString show",
          "hierarchy": "Text LaTeX Base Render",
          "module": "Text.LaTeX.Base.Render",
          "name": "Render",
          "package": "HaTeX",
          "partial": "Render",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#t:Render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space efficient, packed, unboxed Unicode text type.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Render",
          "name": "Text",
          "package": "HaTeX",
          "type": "data"
        },
        "index": {
          "description": "space efficient packed unboxed Unicode text type",
          "hierarchy": "Text LaTeX Base Render",
          "module": "Text.LaTeX.Base.Render",
          "name": "Text",
          "package": "HaTeX",
          "partial": "Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#t:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you are going to insert the content of a file\n in your \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e data, use this function to ensure\n your encoding is correct.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Render",
          "name": "readFileTex",
          "package": "HaTeX",
          "signature": "FilePath -\u003e IO Text",
          "source": "src/Text-LaTeX-Base-Render.html#readFileTex",
          "type": "function"
        },
        "index": {
          "description": "If you are going to insert the content of file in your LaTeX data use this function to ensure your encoding is correct",
          "hierarchy": "Text LaTeX Base Render",
          "module": "Text.LaTeX.Base.Render",
          "name": "readFileTex",
          "normalized": "FilePath-\u003eIO Text",
          "package": "HaTeX",
          "partial": "File Tex",
          "signature": "FilePath-\u003eIO Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:readFileTex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Render",
          "name": "render",
          "package": "HaTeX",
          "signature": "a -\u003e Text",
          "source": "src/Text-LaTeX-Base-Render.html#render",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Render",
          "module": "Text.LaTeX.Base.Render",
          "name": "render",
          "normalized": "a-\u003eText",
          "package": "HaTeX",
          "signature": "a-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender every element of a list and append results.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Render",
          "name": "renderAppend",
          "package": "HaTeX",
          "signature": "[a] -\u003e Text",
          "source": "src/Text-LaTeX-Base-Render.html#renderAppend",
          "type": "function"
        },
        "index": {
          "description": "Render every element of list and append results",
          "hierarchy": "Text LaTeX Base Render",
          "module": "Text.LaTeX.Base.Render",
          "name": "renderAppend",
          "normalized": "[a]-\u003eText",
          "package": "HaTeX",
          "partial": "Append",
          "signature": "[a]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:renderAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender every element of a list and append results,\n   separated by the given \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Render",
          "name": "renderChars",
          "package": "HaTeX",
          "signature": "Char -\u003e [a] -\u003e Text",
          "source": "src/Text-LaTeX-Base-Render.html#renderChars",
          "type": "function"
        },
        "index": {
          "description": "Render every element of list and append results separated by the given Char",
          "hierarchy": "Text LaTeX Base Render",
          "module": "Text.LaTeX.Base.Render",
          "name": "renderChars",
          "normalized": "Char-\u003e[a]-\u003eText",
          "package": "HaTeX",
          "partial": "Chars",
          "signature": "Char-\u003e[a]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:renderChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender every element of a list and append results,\n   separated by commas.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Render",
          "name": "renderCommas",
          "package": "HaTeX",
          "signature": "[a] -\u003e Text",
          "source": "src/Text-LaTeX-Base-Render.html#renderCommas",
          "type": "function"
        },
        "index": {
          "description": "Render every element of list and append results separated by commas",
          "hierarchy": "Text LaTeX Base Render",
          "module": "Text.LaTeX.Base.Render",
          "name": "renderCommas",
          "normalized": "[a]-\u003eText",
          "package": "HaTeX",
          "partial": "Commas",
          "signature": "[a]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:renderCommas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this function to render a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e (or another\n   one in the \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e class) value directly\n   in a file.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Render",
          "name": "renderFile",
          "package": "HaTeX",
          "signature": "FilePath -\u003e a -\u003e IO ()",
          "source": "src/Text-LaTeX-Base-Render.html#renderFile",
          "type": "function"
        },
        "index": {
          "description": "Use this function to render LaTeX or another one in the Render class value directly in file",
          "hierarchy": "Text LaTeX Base Render",
          "module": "Text.LaTeX.Base.Render",
          "name": "renderFile",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "HaTeX",
          "partial": "File",
          "signature": "FilePath-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:renderFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you can transform a value to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, you can\n   insert that \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e in your \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e code.\n   That is what this function does.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWarning: \u003c/em\u003e\u003ccode\u003e\u003ca\u003erendertex\u003c/a\u003e\u003c/code\u003e\u003cem\u003e does not escape LaTeX reserved characters.\u003c/em\u003e\n \u003cem\u003eUse \u003c/em\u003e\u003ccode\u003e\u003ca\u003eprotectText\u003c/a\u003e\u003c/code\u003e\u003cem\u003e to escape them.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Render",
          "name": "rendertex",
          "package": "HaTeX",
          "signature": "a -\u003e l",
          "source": "src/Text-LaTeX-Base-Render.html#rendertex",
          "type": "function"
        },
        "index": {
          "description": "If you can transform value to Text you can insert that Text in your LaTeX code That is what this function does Warning rendertex does not escape LaTeX reserved characters Use protectText to escape them",
          "hierarchy": "Text LaTeX Base Render",
          "module": "Text.LaTeX.Base.Render",
          "name": "rendertex",
          "normalized": "a-\u003eb",
          "package": "HaTeX",
          "signature": "a-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:rendertex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a signed floating number using standard decimal notation using 5 decimals.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Render",
          "name": "showFloat",
          "package": "HaTeX",
          "signature": "a -\u003e String",
          "source": "src/Text-LaTeX-Base-Render.html#showFloat",
          "type": "function"
        },
        "index": {
          "description": "Show signed floating number using standard decimal notation using decimals",
          "hierarchy": "Text LaTeX Base Render",
          "module": "Text.LaTeX.Base.Render",
          "name": "showFloat",
          "normalized": "a-\u003eString",
          "package": "HaTeX",
          "partial": "Float",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Render.html#v:showFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLaTeX syntax description in the definition of the \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e datatype.\n   If you want to add new commands or environments not defined in\n   the library, import this module and use \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e data constructors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Syntax",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "LaTeX syntax description in the definition of the LaTeX datatype If you want to add new commands or environments not defined in the library import this module and use LaTeX data constructors",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Syntax",
          "package": "HaTeX",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of \u003ccode\u003eLaTeX\u003c/code\u003e blocks.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "LaTeX",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
          "type": "data"
        },
        "index": {
          "description": "Type of LaTeX blocks",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "LaTeX",
          "package": "HaTeX",
          "partial": "La Te",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#t:LaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent types of syntax for mathematical expressions.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "MathType",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#MathType",
          "type": "data"
        },
        "index": {
          "description": "Different types of syntax for mathematical expressions",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "MathType",
          "package": "HaTeX",
          "partial": "Math Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#t:MathType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeasure units defined in LaTeX. Use \u003ccode\u003e\u003ca\u003eCustomMeasure\u003c/a\u003e\u003c/code\u003e to use commands like \u003ccode\u003etextwidth\u003c/code\u003e.\n   For instance:\n\u003c/p\u003e\u003cpre\u003e rule Nothing (CustomMeasure linewidth) (Pt 2)\n\u003c/pre\u003e\u003cp\u003eThis will create a black box (see \u003ccode\u003erule\u003c/code\u003e) as wide as the text and two points tall.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Measure",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#Measure",
          "type": "data"
        },
        "index": {
          "description": "Measure units defined in LaTeX Use CustomMeasure to use commands like textwidth For instance rule Nothing CustomMeasure linewidth Pt This will create black box see rule as wide as the text and two points tall",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Measure",
          "package": "HaTeX",
          "partial": "Measure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#t:Measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn argument for a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e command or environment.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXArg",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#TeXArg",
          "type": "data"
        },
        "index": {
          "description": "An argument for LaTeX command or environment",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXArg",
          "package": "HaTeX",
          "partial": "Te XArg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#t:TeXArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.LaTeX.Base.Syntax\",\"Text.LaTeX.Base\"]",
          "name": "(\u003c\u003e)",
          "package": "HaTeX",
          "signature": "m -\u003e m -\u003e m",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:-60--62-\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#v:-60--62-\"]"
        },
        "index": {
          "description": "An infix synonym for mappend",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCentimeter.\n\u003c/p\u003e",
          "module": "[\"Text.LaTeX.Base.Syntax\",\"Text.LaTeX.Base.Types\"]",
          "name": "Cm",
          "package": "HaTeX",
          "signature": "Cm Double",
          "source": "src/Text-LaTeX-Base-Syntax.html#Measure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Cm\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Cm\"]"
        },
        "index": {
          "description": "Centimeter",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Cm",
          "package": "HaTeX",
          "partial": "Cm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Cm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou can introduce a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e expression as a measure.\n\u003c/p\u003e",
          "module": "[\"Text.LaTeX.Base.Syntax\",\"Text.LaTeX.Base.Types\"]",
          "name": "CustomMeasure",
          "package": "HaTeX",
          "signature": "CustomMeasure LaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#Measure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:CustomMeasure\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:CustomMeasure\"]"
        },
        "index": {
          "description": "You can introduce LaTeX expression as measure",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "CustomMeasure",
          "package": "HaTeX",
          "partial": "Custom Measure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:CustomMeasure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Dollar",
          "package": "HaTeX",
          "signature": "Dollar",
          "source": "src/Text-LaTeX-Base-Syntax.html#MathType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Dollar",
          "package": "HaTeX",
          "partial": "Dollar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Dollar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe width of an \"M\" in the current font.\n\u003c/p\u003e",
          "module": "[\"Text.LaTeX.Base.Syntax\",\"Text.LaTeX.Base.Types\"]",
          "name": "Em",
          "package": "HaTeX",
          "signature": "Em Double",
          "source": "src/Text-LaTeX-Base-Syntax.html#Measure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Em\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Em\"]"
        },
        "index": {
          "description": "The width of an in the current font",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Em",
          "package": "HaTeX",
          "partial": "Em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Em"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe height of an \"x\" in the current font.\n\u003c/p\u003e",
          "module": "[\"Text.LaTeX.Base.Syntax\",\"Text.LaTeX.Base.Types\"]",
          "name": "Ex",
          "package": "HaTeX",
          "signature": "Ex Double",
          "source": "src/Text-LaTeX-Base-Syntax.html#Measure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Ex\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Ex\"]"
        },
        "index": {
          "description": "The height of an in the current font",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Ex",
          "package": "HaTeX",
          "partial": "Ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Ex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFixed argument.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "FixArg",
          "package": "HaTeX",
          "signature": "FixArg LaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#TeXArg",
          "type": "function"
        },
        "index": {
          "description": "Fixed argument",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "FixArg",
          "package": "HaTeX",
          "partial": "Fix Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:FixArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInch.\n\u003c/p\u003e",
          "module": "[\"Text.LaTeX.Base.Syntax\",\"Text.LaTeX.Base.Types\"]",
          "name": "In",
          "package": "HaTeX",
          "signature": "In Double",
          "source": "src/Text-LaTeX-Base-Syntax.html#Measure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:In\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:In\"]"
        },
        "index": {
          "description": "Inch",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "In",
          "package": "HaTeX",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiple optional argument.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "MOptArg",
          "package": "HaTeX",
          "signature": "MOptArg [LaTeX]",
          "source": "src/Text-LaTeX-Base-Syntax.html#TeXArg",
          "type": "function"
        },
        "index": {
          "description": "Multiple optional argument",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "MOptArg",
          "normalized": "MOptArg[LaTeX]",
          "package": "HaTeX",
          "partial": "MOpt Arg",
          "signature": "MOptArg[LaTeX]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:MOptArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003eSymArg\u003c/a\u003e\u003c/code\u003e with multiple options.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "MSymArg",
          "package": "HaTeX",
          "signature": "MSymArg [LaTeX]",
          "source": "src/Text-LaTeX-Base-Syntax.html#TeXArg",
          "type": "function"
        },
        "index": {
          "description": "Version of SymArg with multiple options",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "MSymArg",
          "normalized": "MSymArg[LaTeX]",
          "package": "HaTeX",
          "partial": "MSym Arg",
          "signature": "MSymArg[LaTeX]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:MSymArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMillimeter.\n\u003c/p\u003e",
          "module": "[\"Text.LaTeX.Base.Syntax\",\"Text.LaTeX.Base.Types\"]",
          "name": "Mm",
          "package": "HaTeX",
          "signature": "Mm Double",
          "source": "src/Text-LaTeX-Base-Syntax.html#Measure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Mm\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Mm\"]"
        },
        "index": {
          "description": "Millimeter",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Mm",
          "package": "HaTeX",
          "partial": "Mm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Mm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional argument.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "OptArg",
          "package": "HaTeX",
          "signature": "OptArg LaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#TeXArg",
          "type": "function"
        },
        "index": {
          "description": "Optional argument",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "OptArg",
          "package": "HaTeX",
          "partial": "Opt Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:OptArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Parentheses",
          "package": "HaTeX",
          "signature": "Parentheses",
          "source": "src/Text-LaTeX-Base-Syntax.html#MathType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Parentheses",
          "package": "HaTeX",
          "partial": "Parentheses",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Parentheses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point is 1/72.27 inch, that means about 0.0138 inch or 0.3515 mm.\n\u003c/p\u003e",
          "module": "[\"Text.LaTeX.Base.Syntax\",\"Text.LaTeX.Base.Types\"]",
          "name": "Pt",
          "package": "HaTeX",
          "signature": "Pt Double",
          "source": "src/Text-LaTeX-Base-Syntax.html#Measure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Pt\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Pt\"]"
        },
        "index": {
          "description": "point is inch that means about inch or mm",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Pt",
          "package": "HaTeX",
          "partial": "Pt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Pt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Square",
          "package": "HaTeX",
          "signature": "Square",
          "source": "src/Text-LaTeX-Base-Syntax.html#MathType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "Square",
          "package": "HaTeX",
          "partial": "Square",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:Square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn argument enclosed between \u003ccode\u003e\u003c\u003c/code\u003e and \u003ccode\u003e\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "SymArg",
          "package": "HaTeX",
          "signature": "SymArg LaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#TeXArg",
          "type": "function"
        },
        "index": {
          "description": "An argument enclosed between and",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "SymArg",
          "package": "HaTeX",
          "partial": "Sym Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:SymArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA expression between braces.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXBraces",
          "package": "HaTeX",
          "signature": "TeXBraces LaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
          "type": "function"
        },
        "index": {
          "description": "expression between braces",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXBraces",
          "package": "HaTeX",
          "partial": "Te XBraces",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXBraces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for commands.\n First argument is the name of the command.\n Second, its arguments.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXComm",
          "package": "HaTeX",
          "signature": "TeXComm String [TeXArg]",
          "source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
          "type": "function"
        },
        "index": {
          "description": "Constructor for commands First argument is the name of the command Second its arguments",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXComm",
          "normalized": "TeXComm String[TeXArg]",
          "package": "HaTeX",
          "partial": "Te XComm",
          "signature": "TeXComm String[TeXArg]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXComm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for commands with no arguments.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXCommS",
          "package": "HaTeX",
          "signature": "TeXCommS String",
          "source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
          "type": "function"
        },
        "index": {
          "description": "Constructor for commands with no arguments",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXCommS",
          "package": "HaTeX",
          "partial": "Te XComm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXCommS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComments.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXComment",
          "package": "HaTeX",
          "signature": "TeXComment Text",
          "source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
          "type": "function"
        },
        "index": {
          "description": "Comments",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXComment",
          "package": "HaTeX",
          "partial": "Te XComment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty block.\n \u003cem\u003eNeutral element\u003c/em\u003e of \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXEmpty",
          "package": "HaTeX",
          "signature": "TeXEmpty",
          "source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
          "type": "function"
        },
        "index": {
          "description": "An empty block Neutral element of",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXEmpty",
          "package": "HaTeX",
          "partial": "Te XEmpty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for environments.\n First argument is the name of the environment.\n Second, its arguments.\n Third, its content.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXEnv",
          "package": "HaTeX",
          "signature": "TeXEnv String [TeXArg] LaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
          "type": "function"
        },
        "index": {
          "description": "Constructor for environments First argument is the name of the environment Second its arguments Third its content",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXEnv",
          "normalized": "TeXEnv String[TeXArg]LaTeX",
          "package": "HaTeX",
          "partial": "Te XEnv",
          "signature": "TeXEnv String[TeXArg]LaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine break command.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXLineBreak",
          "package": "HaTeX",
          "signature": "TeXLineBreak (Maybe Measure) Bool",
          "source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
          "type": "function"
        },
        "index": {
          "description": "Line break command",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXLineBreak",
          "package": "HaTeX",
          "partial": "Te XLine Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXLineBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMathematical expressions.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXMath",
          "package": "HaTeX",
          "signature": "TeXMath MathType LaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
          "type": "function"
        },
        "index": {
          "description": "Mathematical expressions",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXMath",
          "package": "HaTeX",
          "partial": "Te XMath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXMath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperators.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXOp",
          "package": "HaTeX",
          "signature": "TeXOp String LaTeX LaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
          "type": "function"
        },
        "index": {
          "description": "Operators",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXOp",
          "package": "HaTeX",
          "partial": "Te XOp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw text.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXRaw",
          "package": "HaTeX",
          "signature": "TeXRaw Text",
          "source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
          "type": "function"
        },
        "index": {
          "description": "Raw text",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXRaw",
          "package": "HaTeX",
          "partial": "Te XRaw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequencing of \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e expressions.\n Use \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e preferably.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXSeq",
          "package": "HaTeX",
          "signature": "TeXSeq LaTeX LaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
          "type": "function"
        },
        "index": {
          "description": "Sequencing of LaTeX expressions Use preferably",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "TeXSeq",
          "package": "HaTeX",
          "partial": "Te XSeq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:TeXSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the content of the \u003ccode\u003edocument\u003c/code\u003e environment, if present.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "getBody",
          "package": "HaTeX",
          "signature": "LaTeX -\u003e Maybe LaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#getBody",
          "type": "function"
        },
        "index": {
          "description": "Extract the content of the document environment if present",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "getBody",
          "normalized": "LaTeX-\u003eMaybe LaTeX",
          "package": "HaTeX",
          "partial": "Body",
          "signature": "LaTeX-\u003eMaybe LaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:getBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the preamble of a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e document (everything before the \u003ccode\u003edocument\u003c/code\u003e\n   environment). It could be empty.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "getPreamble",
          "package": "HaTeX",
          "signature": "LaTeX -\u003e LaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#getPreamble",
          "type": "function"
        },
        "index": {
          "description": "Extract the preamble of LaTeX document everything before the document environment It could be empty",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "getPreamble",
          "normalized": "LaTeX-\u003eLaTeX",
          "package": "HaTeX",
          "partial": "Preamble",
          "signature": "LaTeX-\u003eLaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:getPreamble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook into a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e syntax tree to find any call to the command with\n   the given name. It returns a list of arguments with which this command\n   is called.\n\u003c/p\u003e\u003cpre\u003e lookForCommand = (fmap snd .) . matchCommand . (==)\n\u003c/pre\u003e\u003cp\u003eIf the returned list is empty, the command was not found. However,\n   if the list contains empty lists, those are callings to the command\n   with no arguments.\n\u003c/p\u003e\u003cp\u003eFor example\n\u003c/p\u003e\u003cpre\u003e lookForCommand \"author\" l\n\u003c/pre\u003e\u003cp\u003ewould look for the argument passed to the \u003ccode\u003e\\author\u003c/code\u003e command in \u003ccode\u003el\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "lookForCommand",
          "package": "HaTeX",
          "signature": "String-\u003e LaTeX-\u003e [[TeXArg]]",
          "type": "function"
        },
        "index": {
          "description": "Look into LaTeX syntax tree to find any call to the command with the given name It returns list of arguments with which this command is called lookForCommand fmap snd matchCommand If the returned list is empty the command was not found However if the list contains empty lists those are callings to the command with no arguments For example lookForCommand author would look for the argument passed to the author command in",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "lookForCommand",
          "normalized": "String-\u003eLaTeX-\u003e[[TeXArg]]",
          "package": "HaTeX",
          "partial": "For Command",
          "signature": "String-\u003eLaTeX-\u003e[[TeXArg]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:lookForCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003elookForCommand\u003c/a\u003e\u003c/code\u003e, but applied to environments.\n   It returns a list with arguments passed and content of the\n   environment in each call.\n\u003c/p\u003e\u003cpre\u003e lookForEnv = (fmap (\\(_,as,l) -\u003e (as,l)) .) . matchEnv . (==)\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "lookForEnv",
          "package": "HaTeX",
          "signature": "String -\u003e LaTeX -\u003e [([TeXArg], LaTeX)]",
          "source": "src/Text-LaTeX-Base-Syntax.html#lookForEnv",
          "type": "function"
        },
        "index": {
          "description": "Similar to lookForCommand but applied to environments It returns list with arguments passed and content of the environment in each call lookForEnv fmap as as matchEnv",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "lookForEnv",
          "normalized": "String-\u003eLaTeX-\u003e[([TeXArg],LaTeX)]",
          "package": "HaTeX",
          "partial": "For Env",
          "signature": "String-\u003eLaTeX-\u003e[([TeXArg],LaTeX)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:lookForEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e syntax tree and returns the commands (see \u003ccode\u003e\u003ca\u003eTeXComm\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003eTeXCommS\u003c/a\u003e\u003c/code\u003e) that matches the condition and their arguments in each call.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "matchCommand",
          "package": "HaTeX",
          "signature": "(String -\u003e Bool) -\u003e LaTeX -\u003e [(String, [TeXArg])]",
          "source": "src/Text-LaTeX-Base-Syntax.html#matchCommand",
          "type": "function"
        },
        "index": {
          "description": "Traverse LaTeX syntax tree and returns the commands see TeXComm and TeXCommS that matches the condition and their arguments in each call",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "matchCommand",
          "normalized": "(String-\u003eBool)-\u003eLaTeX-\u003e[(String,[TeXArg])]",
          "package": "HaTeX",
          "partial": "Command",
          "signature": "(String-\u003eBool)-\u003eLaTeX-\u003e[(String,[TeXArg])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:matchCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e syntax tree and returns the environments (see\n   \u003ccode\u003e\u003ca\u003eTeXEnv\u003c/a\u003e\u003c/code\u003e) that matches the condition, their arguments and their content\n   in each call.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "matchEnv",
          "package": "HaTeX",
          "signature": "(String -\u003e Bool) -\u003e LaTeX -\u003e [(String, [TeXArg], LaTeX)]",
          "source": "src/Text-LaTeX-Base-Syntax.html#matchEnv",
          "type": "function"
        },
        "index": {
          "description": "Traverse LaTeX syntax tree and returns the environments see TeXEnv that matches the condition their arguments and their content in each call",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "matchEnv",
          "normalized": "(String-\u003eBool)-\u003eLaTeX-\u003e[(String,[TeXArg],LaTeX)]",
          "package": "HaTeX",
          "partial": "Env",
          "signature": "(String-\u003eBool)-\u003eLaTeX-\u003e[(String,[TeXArg],LaTeX)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:matchEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape LaTeX reserved characters in a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.LaTeX.Base.Syntax\",\"Text.LaTeX.Base\"]",
          "name": "protectString",
          "package": "HaTeX",
          "signature": "String -\u003e String",
          "source": "src/Text-LaTeX-Base-Syntax.html#protectString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:protectString\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#v:protectString\"]"
        },
        "index": {
          "description": "Escape LaTeX reserved characters in String",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "protectString",
          "normalized": "String-\u003eString",
          "package": "HaTeX",
          "partial": "String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:protectString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape LaTeX reserved characters in a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.LaTeX.Base.Syntax\",\"Text.LaTeX.Base\"]",
          "name": "protectText",
          "package": "HaTeX",
          "signature": "Text -\u003e Text",
          "source": "src/Text-LaTeX-Base-Syntax.html#protectText",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:protectText\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#v:protectText\"]"
        },
        "index": {
          "description": "Escape LaTeX reserved characters in Text",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "protectText",
          "normalized": "Text-\u003eText",
          "package": "HaTeX",
          "partial": "Text",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:protectText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003etexmap\u003c/a\u003e\u003c/code\u003e looks for subexpressions that match a given\n   condition and applies a function to them.\n\u003c/p\u003e\u003cpre\u003e texmap c f = runIdentity . texmapM c (pure . f)\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "texmap",
          "package": "HaTeX",
          "signature": "(LaTeX -\u003e Bool)-\u003e (LaTeX -\u003e LaTeX)-\u003e LaTeX-\u003e LaTeX",
          "type": "function"
        },
        "index": {
          "description": "The function texmap looks for subexpressions that match given condition and applies function to them texmap runIdentity texmapM pure",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "texmap",
          "normalized": "(LaTeX-\u003eBool)-\u003e(LaTeX-\u003eLaTeX)-\u003eLaTeX-\u003eLaTeX",
          "package": "HaTeX",
          "signature": "(LaTeX-\u003eBool)-\u003e(LaTeX-\u003eLaTeX)-\u003eLaTeX-\u003eLaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:texmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003etexmap\u003c/a\u003e\u003c/code\u003e where the function returns values in a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "texmapM",
          "package": "HaTeX",
          "signature": "(LaTeX -\u003e Bool)-\u003e (LaTeX -\u003e m LaTeX)-\u003e LaTeX-\u003e m LaTeX",
          "type": "function"
        },
        "index": {
          "description": "Version of texmap where the function returns values in Monad",
          "hierarchy": "Text LaTeX Base Syntax",
          "module": "Text.LaTeX.Base.Syntax",
          "name": "texmapM",
          "normalized": "(LaTeX-\u003eBool)-\u003e(LaTeX-\u003ea LaTeX)-\u003eLaTeX-\u003ea LaTeX",
          "package": "HaTeX",
          "signature": "(LaTeX-\u003eBool)-\u003e(LaTeX-\u003em LaTeX)-\u003eLaTeX-\u003em LaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Syntax.html#v:texmapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTexy\u003c/a\u003e\u003c/code\u003e class, as proposed in \u003ca\u003ehttp://deltadiaz.blogspot.com.es/2013/04/hatex-36-proposal-texy-class.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Base.Texy",
          "name": "Texy",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Texy.html",
          "type": "module"
        },
        "index": {
          "description": "Texy class as proposed in http deltadiaz.blogspot.com.es hatex-36-proposal-texy-class.html",
          "hierarchy": "Text LaTeX Base Texy",
          "module": "Text.LaTeX.Base.Texy",
          "name": "Texy",
          "package": "HaTeX",
          "partial": "Texy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Texy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of types that can be pretty-printed as \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Texy",
          "name": "Texy",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Texy.html#Texy",
          "type": "class"
        },
        "index": {
          "description": "Class of types that can be pretty-printed as LaTeX values",
          "hierarchy": "Text LaTeX Base Texy",
          "module": "Text.LaTeX.Base.Texy",
          "name": "Texy",
          "package": "HaTeX",
          "partial": "Texy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Texy.html#t:Texy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Texy",
          "name": "texy",
          "package": "HaTeX",
          "signature": "t -\u003e l",
          "source": "src/Text-LaTeX-Base-Texy.html#texy",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Texy",
          "module": "Text.LaTeX.Base.Texy",
          "name": "texy",
          "normalized": "a-\u003eb",
          "package": "HaTeX",
          "signature": "t-\u003el",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Texy.html#v:texy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome types shared along the library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "Types",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Some types shared along the library",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "Types",
          "package": "HaTeX",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass names are represented by a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "ClassName",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Types.html#ClassName",
          "type": "type"
        },
        "index": {
          "description": "Class names are represented by String",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "ClassName",
          "package": "HaTeX",
          "partial": "Class Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:ClassName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal position.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "HPos",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Types.html#HPos",
          "type": "data"
        },
        "index": {
          "description": "Horizontal position",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "HPos",
          "package": "HaTeX",
          "partial": "HPos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:HPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of labels.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "Label",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Types.html#Label",
          "type": "data"
        },
        "index": {
          "description": "Type of labels",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "Label",
          "package": "HaTeX",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeasure units defined in LaTeX. Use \u003ccode\u003e\u003ca\u003eCustomMeasure\u003c/a\u003e\u003c/code\u003e to use commands like \u003ccode\u003etextwidth\u003c/code\u003e.\n   For instance:\n\u003c/p\u003e\u003cpre\u003e rule Nothing (CustomMeasure linewidth) (Pt 2)\n\u003c/pre\u003e\u003cp\u003eThis will create a black box (see \u003ccode\u003erule\u003c/code\u003e) as wide as the text and two points tall.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "Measure",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#Measure",
          "type": "data"
        },
        "index": {
          "description": "Measure units defined in LaTeX Use CustomMeasure to use commands like textwidth For instance rule Nothing CustomMeasure linewidth Pt This will create black box see rule as wide as the text and two points tall",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "Measure",
          "package": "HaTeX",
          "partial": "Measure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:Measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePackage names are represented by a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "PackageName",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Types.html#PackageName",
          "type": "type"
        },
        "index": {
          "description": "Package names are represented by String",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "PackageName",
          "package": "HaTeX",
          "partial": "Package Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:PackageName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage styles are represented by a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "PageStyle",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Types.html#PageStyle",
          "type": "type"
        },
        "index": {
          "description": "Page styles are represented by String",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "PageStyle",
          "package": "HaTeX",
          "partial": "Page Style",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:PageStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical position.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "Pos",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Types.html#Pos",
          "type": "data"
        },
        "index": {
          "description": "Vertical position",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "Pos",
          "package": "HaTeX",
          "partial": "Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of table specifications.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "TableSpec",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Types.html#TableSpec",
          "type": "data"
        },
        "index": {
          "description": "Type of table specifications",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "TableSpec",
          "package": "HaTeX",
          "partial": "Table Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#t:TableSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Types",
          "name": "Bottom",
          "package": "HaTeX",
          "signature": "Bottom",
          "source": "src/Text-LaTeX-Base-Types.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "Bottom",
          "package": "HaTeX",
          "partial": "Bottom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Bottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Types",
          "name": "Center",
          "package": "HaTeX",
          "signature": "Center",
          "source": "src/Text-LaTeX-Base-Types.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "Center",
          "package": "HaTeX",
          "partial": "Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCentered column.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "CenterColumn",
          "package": "HaTeX",
          "signature": "CenterColumn",
          "source": "src/Text-LaTeX-Base-Types.html#TableSpec",
          "type": "function"
        },
        "index": {
          "description": "Centered column",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "CenterColumn",
          "package": "HaTeX",
          "partial": "Center Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:CenterColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble vertical line between two columns.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "DVerticalLine",
          "package": "HaTeX",
          "signature": "DVerticalLine",
          "source": "src/Text-LaTeX-Base-Types.html#TableSpec",
          "type": "function"
        },
        "index": {
          "description": "Double vertical line between two columns",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "DVerticalLine",
          "package": "HaTeX",
          "partial": "DVertical Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:DVerticalLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Types",
          "name": "HCenter",
          "package": "HaTeX",
          "signature": "HCenter",
          "source": "src/Text-LaTeX-Base-Types.html#HPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "HCenter",
          "package": "HaTeX",
          "partial": "HCenter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:HCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Types",
          "name": "HLeft",
          "package": "HaTeX",
          "signature": "HLeft",
          "source": "src/Text-LaTeX-Base-Types.html#HPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "HLeft",
          "package": "HaTeX",
          "partial": "HLeft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:HLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Types",
          "name": "HRight",
          "package": "HaTeX",
          "signature": "HRight",
          "source": "src/Text-LaTeX-Base-Types.html#HPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "HRight",
          "package": "HaTeX",
          "partial": "HRight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:HRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-justified column.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "LeftColumn",
          "package": "HaTeX",
          "signature": "LeftColumn",
          "source": "src/Text-LaTeX-Base-Types.html#TableSpec",
          "type": "function"
        },
        "index": {
          "description": "Left-justified column",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "LeftColumn",
          "package": "HaTeX",
          "partial": "Left Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:LeftColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParagraph column with text vertically aligned at the bottom. Requires \u003ccode\u003earray\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "ParColumnBot",
          "package": "HaTeX",
          "signature": "ParColumnBot LaTeX",
          "source": "src/Text-LaTeX-Base-Types.html#TableSpec",
          "type": "function"
        },
        "index": {
          "description": "Paragraph column with text vertically aligned at the bottom Requires array package",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "ParColumnBot",
          "package": "HaTeX",
          "partial": "Par Column Bot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:ParColumnBot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParagraph column with text vertically aligned at the middle. Requires \u003ccode\u003earray\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "ParColumnMid",
          "package": "HaTeX",
          "signature": "ParColumnMid LaTeX",
          "source": "src/Text-LaTeX-Base-Types.html#TableSpec",
          "type": "function"
        },
        "index": {
          "description": "Paragraph column with text vertically aligned at the middle Requires array package",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "ParColumnMid",
          "package": "HaTeX",
          "partial": "Par Column Mid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:ParColumnMid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParagraph column with text vertically aligned at the top.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "ParColumnTop",
          "package": "HaTeX",
          "signature": "ParColumnTop LaTeX",
          "source": "src/Text-LaTeX-Base-Types.html#TableSpec",
          "type": "function"
        },
        "index": {
          "description": "Paragraph column with text vertically aligned at the top",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "ParColumnTop",
          "package": "HaTeX",
          "partial": "Par Column Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:ParColumnTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-justified column.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "RightColumn",
          "package": "HaTeX",
          "signature": "RightColumn",
          "source": "src/Text-LaTeX-Base-Types.html#TableSpec",
          "type": "function"
        },
        "index": {
          "description": "Right-justified column",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "RightColumn",
          "package": "HaTeX",
          "partial": "Right Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:RightColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Base.Types",
          "name": "Top",
          "package": "HaTeX",
          "signature": "Top",
          "source": "src/Text-LaTeX-Base-Types.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "Top",
          "package": "HaTeX",
          "partial": "Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:Top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical line between two columns.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "VerticalLine",
          "package": "HaTeX",
          "signature": "VerticalLine",
          "source": "src/Text-LaTeX-Base-Types.html#TableSpec",
          "type": "function"
        },
        "index": {
          "description": "Vertical line between two columns",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "VerticalLine",
          "package": "HaTeX",
          "partial": "Vertical Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:VerticalLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a label from its name.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "createLabel",
          "package": "HaTeX",
          "signature": "String -\u003e Label",
          "source": "src/Text-LaTeX-Base-Types.html#createLabel",
          "type": "function"
        },
        "index": {
          "description": "Create label from its name",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "createLabel",
          "normalized": "String-\u003eLabel",
          "package": "HaTeX",
          "partial": "Label",
          "signature": "String-\u003eLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:createLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the name of a label.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Types",
          "name": "labelName",
          "package": "HaTeX",
          "signature": "Label -\u003e String",
          "source": "src/Text-LaTeX-Base-Types.html#labelName",
          "type": "function"
        },
        "index": {
          "description": "Get the name of label",
          "hierarchy": "Text LaTeX Base Types",
          "module": "Text.LaTeX.Base.Types",
          "name": "labelName",
          "normalized": "Label-\u003eString",
          "package": "HaTeX",
          "partial": "Name",
          "signature": "Label-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Types.html#v:labelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functionality for check a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value for\n   possibly undesired things (like the call to an undefined label),\n   returning \u003ccode\u003e\u003ca\u003eWarning\u003c/a\u003e\u003c/code\u003es. These are called \u003ccode\u003e\u003ca\u003eWarning\u003c/a\u003e\u003c/code\u003es because they\n   never terminate the program execution.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "Warnings",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Warnings.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functionality for check LaTeX value for possibly undesired things like the call to an undefined label returning Warning These are called Warning because they never terminate the program execution",
          "hierarchy": "Text LaTeX Base Warnings",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "Warnings",
          "package": "HaTeX",
          "partial": "Warnings",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTeXCheck\u003c/a\u003e\u003c/code\u003e is a function that checks possible warnings from a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value.\n   Use the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance to combine check functions.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "TeXCheck",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Warnings.html#TeXCheck",
          "type": "data"
        },
        "index": {
          "description": "TeXCheck is function that checks possible warnings from LaTeX value Use the Monoid instance to combine check functions",
          "hierarchy": "Text LaTeX Base Warnings",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "TeXCheck",
          "package": "HaTeX",
          "partial": "Te XCheck",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#t:TeXCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of possible warnings.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "Warning",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Warnings.html#Warning",
          "type": "data"
        },
        "index": {
          "description": "List of possible warnings",
          "hierarchy": "Text LaTeX Base Warnings",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "Warning",
          "package": "HaTeX",
          "partial": "Warning",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#t:Warning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom warning for custom checkings. Use it as you want.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "CustomWarning",
          "package": "HaTeX",
          "signature": "CustomWarning Text",
          "source": "src/Text-LaTeX-Base-Warnings.html#Warning",
          "type": "function"
        },
        "index": {
          "description": "Custom warning for custom checkings Use it as you want",
          "hierarchy": "Text LaTeX Base Warnings",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "CustomWarning",
          "package": "HaTeX",
          "partial": "Custom Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:CustomWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo class selected with \u003ccode\u003edocumentclass\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "NoClassSelected",
          "package": "HaTeX",
          "signature": "NoClassSelected",
          "source": "src/Text-LaTeX-Base-Warnings.html#Warning",
          "type": "function"
        },
        "index": {
          "description": "No class selected with documentclass",
          "hierarchy": "Text LaTeX Base Warnings",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "NoClassSelected",
          "package": "HaTeX",
          "partial": "No Class Selected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:NoClassSelected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo \u003ccode\u003edocument\u003c/code\u003e inserted.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "NoDocumentInserted",
          "package": "HaTeX",
          "signature": "NoDocumentInserted",
          "source": "src/Text-LaTeX-Base-Warnings.html#Warning",
          "type": "function"
        },
        "index": {
          "description": "No document inserted",
          "hierarchy": "Text LaTeX Base Warnings",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "NoDocumentInserted",
          "package": "HaTeX",
          "partial": "No Document Inserted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:NoDocumentInserted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is a reference to an undefined label. Arguments is the name.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "UndefinedLabel",
          "package": "HaTeX",
          "signature": "UndefinedLabel Text",
          "source": "src/Text-LaTeX-Base-Warnings.html#Warning",
          "type": "function"
        },
        "index": {
          "description": "There is reference to an undefined label Arguments is the name",
          "hierarchy": "Text LaTeX Base Warnings",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "UndefinedLabel",
          "package": "HaTeX",
          "partial": "Undefined Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:UndefinedLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is an unused label. Argument is its name.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "UnusedLabel",
          "package": "HaTeX",
          "signature": "UnusedLabel Text",
          "source": "src/Text-LaTeX-Base-Warnings.html#Warning",
          "type": "function"
        },
        "index": {
          "description": "There is an unused label Argument is its name",
          "hierarchy": "Text LaTeX Base Warnings",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "UnusedLabel",
          "package": "HaTeX",
          "partial": "Unused Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:UnusedLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a checking.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "check",
          "package": "HaTeX",
          "signature": "TeXCheck -\u003e LaTeX -\u003e [Warning]",
          "source": "src/Text-LaTeX-Base-Warnings.html#check",
          "type": "function"
        },
        "index": {
          "description": "Apply checking",
          "hierarchy": "Text LaTeX Base Warnings",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "check",
          "normalized": "TeXCheck-\u003eLaTeX-\u003e[Warning]",
          "package": "HaTeX",
          "signature": "TeXCheck-\u003eLaTeX-\u003e[Warning]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck with \u003ccode\u003e\u003ca\u003echeckLabels\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echeckClass\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003echeckDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "checkAll",
          "package": "HaTeX",
          "signature": "TeXCheck",
          "source": "src/Text-LaTeX-Base-Warnings.html#checkAll",
          "type": "function"
        },
        "index": {
          "description": "Check with checkLabels checkClass and checkDoc",
          "hierarchy": "Text LaTeX Base Warnings",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "checkAll",
          "package": "HaTeX",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:checkAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a document class is specified for the document (using \u003ccode\u003edocumentclass\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "checkClass",
          "package": "HaTeX",
          "signature": "TeXCheck",
          "source": "src/Text-LaTeX-Base-Warnings.html#checkClass",
          "type": "function"
        },
        "index": {
          "description": "Check if document class is specified for the document using documentclass",
          "hierarchy": "Text LaTeX Base Warnings",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "checkClass",
          "package": "HaTeX",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:checkClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the \u003ccode\u003edocument\u003c/code\u003e environment is called in a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "checkDoc",
          "package": "HaTeX",
          "signature": "TeXCheck",
          "source": "src/Text-LaTeX-Base-Warnings.html#checkDoc",
          "type": "function"
        },
        "index": {
          "description": "Check if the document environment is called in LaTeX",
          "hierarchy": "Text LaTeX Base Warnings",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "checkDoc",
          "package": "HaTeX",
          "partial": "Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:checkDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003eTeXCheck\u003c/a\u003e\u003c/code\u003e from a function.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "checkFromFunction",
          "package": "HaTeX",
          "signature": "(LaTeX -\u003e [Warning]) -\u003e TeXCheck",
          "source": "src/Text-LaTeX-Base-Warnings.html#checkFromFunction",
          "type": "function"
        },
        "index": {
          "description": "Build TeXCheck from function",
          "hierarchy": "Text LaTeX Base Warnings",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "checkFromFunction",
          "normalized": "(LaTeX-\u003e[Warning])-\u003eTeXCheck",
          "package": "HaTeX",
          "partial": "From Function",
          "signature": "(LaTeX-\u003e[Warning])-\u003eTeXCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:checkFromFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking for unused labels or references tu undefined labels.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "checkLabels",
          "package": "HaTeX",
          "signature": "TeXCheck",
          "source": "src/Text-LaTeX-Base-Warnings.html#checkLabels",
          "type": "function"
        },
        "index": {
          "description": "Checking for unused labels or references tu undefined labels",
          "hierarchy": "Text LaTeX Base Warnings",
          "module": "Text.LaTeX.Base.Warnings",
          "name": "checkLabels",
          "package": "HaTeX",
          "partial": "Labels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Warnings.html#v:checkLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe writer monad applied to \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values. Useful to compose \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values\n   using the \u003ccode\u003edo\u003c/code\u003e notation:\n\u003c/p\u003e\u003cpre\u003e anExample :: Monad m =\u003e LaTeXT m ()\n anExample = do\n   documentclass [] article\n   author \"Daniel Monad\"\n   title \"LaTeX and do notation\"\n   document $ do\n     maketitle\n     section \"Some words\"\n     \"Using \" ; texttt \"do\" ; \" notation \"\n     \"you avoid many ocurrences of the \"\n     texttt \"(\u003c\u003e)\" ; \" operator and a lot of \"\n     \"parentheses. With the cost of a monad.\"\n\u003c/pre\u003e\u003cp\u003eSince \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e is a monad transformer, you can do also:\n\u003c/p\u003e\u003cpre\u003e anotherExample :: LaTeXT IO ()\n anotherExample = lift (readFileTex \"foo\") \u003e\u003e= verbatim\n\u003c/pre\u003e\u003cp\u003eThis way, it is easy (without carrying arguments) to include IO outputs\n in the LaTeX document, like files, times or random objects.\n\u003c/p\u003e\u003cp\u003eAnother approach could be to have custom counters, label management\n or any other user-defined feature.\n\u003c/p\u003e\u003cp\u003eOf course, you can always use the simpler interface provided by the plain \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eAnother thing you should know about the LaTeX Writer Monad. Don't try to get values\n from computations with no results (like \u003ccode\u003eraw \u003ca\u003efoo\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "Writer",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Writer.html",
          "type": "module"
        },
        "index": {
          "description": "The writer monad applied to LaTeX values Useful to compose LaTeX values using the do notation anExample Monad LaTeXT anExample do documentclass article author Daniel Monad title LaTeX and do notation document do maketitle section Some words Using texttt do notation you avoid many ocurrences of the texttt operator and lot of parentheses With the cost of monad Since LaTeXT is monad transformer you can do also anotherExample LaTeXT IO anotherExample lift readFileTex foo verbatim This way it is easy without carrying arguments to include IO outputs in the LaTeX document like files times or random objects Another approach could be to have custom counters label management or any other user-defined feature Of course you can always use the simpler interface provided by the plain LaTeX type Another thing you should know about the LaTeX Writer Monad Don try to get values from computations with no results like raw foo",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "Writer",
          "package": "HaTeX",
          "partial": "Writer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e monad transformer applied to \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "LaTeXT",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Writer.html#LaTeXT",
          "type": "data"
        },
        "index": {
          "description": "WriterT monad transformer applied to LaTeX values",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "LaTeXT",
          "package": "HaTeX",
          "partial": "La Te XT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#t:LaTeXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for empty \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "LaTeXT_",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Writer.html#LaTeXT_",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for empty LaTeXT computations",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "LaTeXT_",
          "package": "HaTeX",
          "partial": "La Te XT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#t:LaTeXT_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the usual way to run the \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e monad\n   and obtain a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cpre\u003e execLaTeXT = liftM snd . runLaTeXT\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003eanExample\u003c/code\u003e is defined as above (at the top of this module\n documentation), use the following to get the LaTeX value\n generated out.\n\u003c/p\u003e\u003cpre\u003e myLaTeX :: Monad m =\u003e m LaTeX\n myLaTeX = execLaTeXT anExample\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "execLaTeXT",
          "package": "HaTeX",
          "signature": "LaTeXT m a -\u003e m LaTeX",
          "source": "src/Text-LaTeX-Base-Writer.html#execLaTeXT",
          "type": "function"
        },
        "index": {
          "description": "This is the usual way to run the LaTeXT monad and obtain LaTeX value execLaTeXT liftM snd runLaTeXT If anExample is defined as above at the top of this module documentation use the following to get the LaTeX value generated out myLaTeX Monad LaTeX myLaTeX execLaTeXT anExample",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "execLaTeXT",
          "normalized": "LaTeXT a b-\u003ea LaTeX",
          "package": "HaTeX",
          "partial": "La Te XT",
          "signature": "LaTeXT m a-\u003em LaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:execLaTeXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003eexecLaTeXT\u003c/a\u003e\u003c/code\u003e with possible warning messages.\n   This function applies \u003ccode\u003e\u003ca\u003echeckAll\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e output.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "execLaTeXTWarn",
          "package": "HaTeX",
          "signature": "LaTeXT m a -\u003e m (LaTeX, [Warning])",
          "source": "src/Text-LaTeX-Base-Writer.html#execLaTeXTWarn",
          "type": "function"
        },
        "index": {
          "description": "Version of execLaTeXT with possible warning messages This function applies checkAll to the LaTeX output",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "execLaTeXTWarn",
          "normalized": "LaTeXT a b-\u003ea(LaTeX,[Warning])",
          "package": "HaTeX",
          "partial": "La Te XTWarn",
          "signature": "LaTeXT m a-\u003em(LaTeX,[Warning])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:execLaTeXTWarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function run a \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e computation,\n   lifting the result again in the monad.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "extractLaTeX",
          "package": "HaTeX",
          "signature": "LaTeXT m a -\u003e LaTeXT m (a, LaTeX)",
          "source": "src/Text-LaTeX-Base-Writer.html#extractLaTeX",
          "type": "function"
        },
        "index": {
          "description": "This function run LaTeXT computation lifting the result again in the monad",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "extractLaTeX",
          "normalized": "LaTeXT a b-\u003eLaTeXT a(b,LaTeX)",
          "package": "HaTeX",
          "partial": "La Te",
          "signature": "LaTeXT m a-\u003eLaTeXT m(a,LaTeX)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:extractLaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e computation, embedding it again in\n   the \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cpre\u003e extractLaTeX_ = liftM snd . extractLaTeX\n\u003c/pre\u003e\u003cp\u003eThis function was heavily used in the past by HaTeX-meta\n to generate those \u003ccode\u003e.Monad\u003c/code\u003e modules. The current purpose\n is to implement the \u003ccode\u003e\u003ca\u003eLaTeXC\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e, which\n is closely related.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "extractLaTeX_",
          "package": "HaTeX",
          "signature": "LaTeXT m a -\u003e LaTeXT m LaTeX",
          "source": "src/Text-LaTeX-Base-Writer.html#extractLaTeX_",
          "type": "function"
        },
        "index": {
          "description": "Executes LaTeXT computation embedding it again in the LaTeXT monad extractLaTeX liftM snd extractLaTeX This function was heavily used in the past by HaTeX-meta to generate those Monad modules The current purpose is to implement the LaTeXC instance of LaTeXT which is closely related",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "extractLaTeX_",
          "normalized": "LaTeXT a b-\u003eLaTeXT a LaTeX",
          "package": "HaTeX",
          "partial": "La Te",
          "signature": "LaTeXT m a-\u003eLaTeXT m LaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:extractLaTeX_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the argument monad to the constructed monad.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "lift",
          "package": "HaTeX",
          "signature": "m a -\u003e t m a",
          "type": "function"
        },
        "index": {
          "description": "Lift computation from the argument monad to the constructed monad",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "lift",
          "normalized": "a b-\u003ec a b",
          "package": "HaTeX",
          "signature": "m a-\u003et m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a function over \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values to a function\n   acting over the state of a \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "liftFun",
          "package": "HaTeX",
          "signature": "(LaTeX -\u003e LaTeX) -\u003e LaTeXT m a -\u003e LaTeXT m a",
          "source": "src/Text-LaTeX-Base-Writer.html#liftFun",
          "type": "function"
        },
        "index": {
          "description": "Lift function over LaTeX values to function acting over the state of LaTeXT computation",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "liftFun",
          "normalized": "(LaTeX-\u003eLaTeX)-\u003eLaTeXT a b-\u003eLaTeXT a b",
          "package": "HaTeX",
          "partial": "Fun",
          "signature": "(LaTeX-\u003eLaTeX)-\u003eLaTeXT m a-\u003eLaTeXT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:liftFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "liftIO",
          "package": "HaTeX",
          "signature": "forall a.  IO a -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "liftIO",
          "normalized": "a b IO c-\u003ed c",
          "package": "HaTeX",
          "partial": "IO",
          "signature": "forall a. IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an operator over \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values to an operator\n   acting over the state of two \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote: The returned value is the one returned by the\u003c/em\u003e\n \u003cem\u003esecond argument of the lifted operator.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "liftOp",
          "package": "HaTeX",
          "signature": "(LaTeX -\u003e LaTeX -\u003e LaTeX) -\u003e LaTeXT m a -\u003e LaTeXT m b -\u003e LaTeXT m b",
          "source": "src/Text-LaTeX-Base-Writer.html#liftOp",
          "type": "function"
        },
        "index": {
          "description": "Lift an operator over LaTeX values to an operator acting over the state of two LaTeXT computations Note The returned value is the one returned by the second argument of the lifted operator",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "liftOp",
          "normalized": "(LaTeX-\u003eLaTeX-\u003eLaTeX)-\u003eLaTeXT a b-\u003eLaTeXT a c-\u003eLaTeXT a c",
          "package": "HaTeX",
          "partial": "Op",
          "signature": "(LaTeX-\u003eLaTeX-\u003eLaTeX)-\u003eLaTeXT m a-\u003eLaTeXT m b-\u003eLaTeXT m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:liftOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction \u003ccode\u003e\u003ca\u003emerror\u003c/a\u003e\u003c/code\u003e casts a value contained in a monad \u003ccode\u003em\u003c/code\u003e to the\n   bottom value of another type. If you try to evaluate this value, you will\n   get an error message with the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e passed as argument to \u003ccode\u003e\u003ca\u003emerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "merror",
          "package": "HaTeX",
          "signature": "String -\u003e LaTeXT m a -\u003e LaTeXT m b",
          "source": "src/Text-LaTeX-Base-Writer.html#merror",
          "type": "function"
        },
        "index": {
          "description": "Function merror casts value contained in monad to the bottom value of another type If you try to evaluate this value you will get an error message with the String passed as argument to merror",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "merror",
          "normalized": "String-\u003eLaTeXT a b-\u003eLaTeXT a c",
          "package": "HaTeX",
          "signature": "String-\u003eLaTeXT m a-\u003eLaTeXT m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:merror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like \u003ccode\u003e\u003ca\u003erendertex\u003c/a\u003e\u003c/code\u003e, but with \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e output.\n\u003c/p\u003e\u003cpre\u003e rendertexM = textell . rendertex\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "rendertexM",
          "package": "HaTeX",
          "signature": "a -\u003e LaTeXT m ()",
          "source": "src/Text-LaTeX-Base-Writer.html#rendertexM",
          "type": "function"
        },
        "index": {
          "description": "Just like rendertex but with LaTeXT output rendertexM textell rendertex",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "rendertexM",
          "normalized": "a-\u003eLaTeXT b()",
          "package": "HaTeX",
          "signature": "a-\u003eLaTeXT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:rendertexM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRunning a \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e computation returns the final \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value\n   and either a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e if the computation didn't contain any value\n   or the value itself otherwise.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "runLaTeXT",
          "package": "HaTeX",
          "signature": "LaTeXT m a -\u003e m (Either String a, LaTeX)",
          "source": "src/Text-LaTeX-Base-Writer.html#runLaTeXT",
          "type": "function"
        },
        "index": {
          "description": "Running LaTeXT computation returns the final LaTeX value and either String if the computation didn contain any value or the value itself otherwise",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "runLaTeXT",
          "normalized": "LaTeXT a b-\u003ea(Either String b,LaTeX)",
          "package": "HaTeX",
          "partial": "La Te XT",
          "signature": "LaTeXT m a-\u003em(Either String a,LaTeX)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:runLaTeXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWith \u003ccode\u003e\u003ca\u003etextell\u003c/a\u003e\u003c/code\u003e you can append \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values to the\n   state of the \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "textell",
          "package": "HaTeX",
          "signature": "LaTeX -\u003e LaTeXT m ()",
          "source": "src/Text-LaTeX-Base-Writer.html#textell",
          "type": "function"
        },
        "index": {
          "description": "With textell you can append LaTeX values to the state of the LaTeXT monad",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "textell",
          "normalized": "LaTeX-\u003eLaTeXT a()",
          "package": "HaTeX",
          "signature": "LaTeX-\u003eLaTeXT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:textell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base.Writer",
          "name": "throwError",
          "package": "HaTeX",
          "signature": "String -\u003e LaTeXT m a",
          "source": "src/Text-LaTeX-Base-Writer.html#throwError",
          "type": "function"
        },
        "index": {
          "description": "The fail method of the LaTeXT monad",
          "hierarchy": "Text LaTeX Base Writer",
          "module": "Text.LaTeX.Base.Writer",
          "name": "throwError",
          "normalized": "String-\u003eLaTeXT a b",
          "package": "HaTeX",
          "partial": "Error",
          "signature": "String-\u003eLaTeXT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base-Writer.html#v:throwError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports those minimal things you need\nto work with HaTeX. Those things are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e datatype.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e operator, to append \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e values.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eText.LaTeX.Base.Render\u003c/a\u003e module, to render a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e value into \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eText.LaTeX.Base.Types\u003c/a\u003e module, which contains several types used by\n  other modules.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eText.LaTeX.Base.Commands\u003c/a\u003e module, which exports the LaTeX standard commands\n  and environments.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eText.LaTeX.Base.Writer\u003c/a\u003e module, to work with the monad interface of the library.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eText.LaTeX.Base.Texy\u003c/a\u003e module, which exports the \u003ccode\u003e\u003ca\u003eTexy\u003c/a\u003e\u003c/code\u003e class. Useful to pretty-print\n  values in LaTeX form.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Base",
          "name": "Base",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports those minimal things you need to work with HaTeX Those things are The LaTeX datatype The operator to append LaTeX values The Text.LaTeX.Base.Render module to render LaTeX value into Text The Text.LaTeX.Base.Types module which contains several types used by other modules The Text.LaTeX.Base.Commands module which exports the LaTeX standard commands and environments The Text.LaTeX.Base.Writer module to work with the monad interface of the library The Text.LaTeX.Base.Texy module which exports the Texy class Useful to pretty-print values in LaTeX form",
          "hierarchy": "Text LaTeX Base",
          "module": "Text.LaTeX.Base",
          "name": "Base",
          "package": "HaTeX",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of \u003ccode\u003eLaTeX\u003c/code\u003e blocks.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base",
          "name": "LaTeX",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Base-Syntax.html#LaTeX",
          "type": "data"
        },
        "index": {
          "description": "Type of LaTeX blocks",
          "hierarchy": "Text LaTeX Base",
          "module": "Text.LaTeX.Base",
          "name": "LaTeX",
          "package": "HaTeX",
          "partial": "La Te",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#t:LaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base",
          "name": "Monoid",
          "package": "HaTeX",
          "type": "class"
        },
        "index": {
          "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
          "hierarchy": "Text LaTeX Base",
          "module": "Text.LaTeX.Base",
          "name": "Monoid",
          "package": "HaTeX",
          "partial": "Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#t:Monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base",
          "name": "mappend",
          "package": "HaTeX",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "An associative operation",
          "hierarchy": "Text LaTeX Base",
          "module": "Text.LaTeX.Base",
          "name": "mappend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#v:mappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a list using the monoid.\n For most types, the default definition for \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e will be\n used, but the function is included in the class definition so\n that an optimized version can be provided for specific types.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base",
          "name": "mconcat",
          "package": "HaTeX",
          "signature": "[a] -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Fold list using the monoid For most types the default definition for mconcat will be used but the function is included in the class definition so that an optimized version can be provided for specific types",
          "hierarchy": "Text LaTeX Base",
          "module": "Text.LaTeX.Base",
          "name": "mconcat",
          "normalized": "[a]-\u003ea",
          "package": "HaTeX",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#v:mconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Base",
          "name": "mempty",
          "package": "HaTeX",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "description": "Identity of mappend",
          "hierarchy": "Text LaTeX Base",
          "module": "Text.LaTeX.Base",
          "name": "mempty",
          "package": "HaTeX",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Base.html#v:mempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for the package \u003ccode\u003eamsfonts\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.AMSFonts",
          "name": "AMSFonts",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-AMSFonts.html",
          "type": "module"
        },
        "index": {
          "description": "Module for the package amsfonts",
          "hierarchy": "Text LaTeX Packages AMSFonts",
          "module": "Text.LaTeX.Packages.AMSFonts",
          "name": "AMSFonts",
          "package": "HaTeX",
          "partial": "AMSFonts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSFonts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAMSFonts package.\n Example:\n\u003c/p\u003e\u003cpre\u003e usepackage [] amsfonts\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.AMSFonts",
          "name": "amsfonts",
          "package": "HaTeX",
          "signature": "ClassName",
          "source": "src/Text-LaTeX-Packages-AMSFonts.html#amsfonts",
          "type": "function"
        },
        "index": {
          "description": "AMSFonts package Example usepackage amsfonts",
          "hierarchy": "Text LaTeX Packages AMSFonts",
          "module": "Text.LaTeX.Packages.AMSFonts",
          "name": "amsfonts",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSFonts.html#v:amsfonts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis font is useful for representing sets like\n   R (real numbers) or Z (integers). For instance:\n\u003c/p\u003e\u003cpre\u003e \"The set of real numbers are represented by \" \u003c\u003e mathbb \"R\" \u003c\u003e \".\"\n\u003c/pre\u003e\u003cp\u003eOr in monadic form:\n\u003c/p\u003e\u003cpre\u003e \"The set of real numbers are represented by \" \u003e\u003e mathbb \"R\" \u003e\u003e \".\"\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNote the use of overloaded strings.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSFonts",
          "name": "mathbb",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSFonts.html#mathbb",
          "type": "function"
        },
        "index": {
          "description": "This font is useful for representing sets like real numbers or integers For instance The set of real numbers are represented by mathbb Or in monadic form The set of real numbers are represented by mathbb Note the use of overloaded strings",
          "hierarchy": "Text LaTeX Packages AMSFonts",
          "module": "Text.LaTeX.Packages.AMSFonts",
          "name": "mathbb",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSFonts.html#v:mathbb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAMSMath support. Also numeric instances (\u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e) for \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eLaTeXT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "AMSMath",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-AMSMath.html",
          "type": "module"
        },
        "index": {
          "description": "AMSMath support Also numeric instances Num Fractional and Floating for LaTeX and LaTeXT",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "AMSMath",
          "package": "HaTeX",
          "partial": "AMSMath",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscript.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(!:)",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#%21%3A",
          "type": "function"
        },
        "index": {
          "description": "Subscript",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(!:) !:",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsterisk operator (*).\n\u003c/p\u003e\u003cpre\u003e infixl 7 *:\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(*:)",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#%2A%3A",
          "type": "function"
        },
        "index": {
          "description": "Asterisk operator infixl",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(*:) *:",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot equal (&#8800;).\n\u003c/p\u003e\u003cpre\u003e infixr 4 /=:\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(/=:)",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#%2F%3D%3A",
          "type": "function"
        },
        "index": {
          "description": "Not equal infixr",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(/=:) /=:",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-47--61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLesser or equal (&#8804;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(\u003c=:)",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#%3C%3D%3A",
          "type": "function"
        },
        "index": {
          "description": "Lesser or equal",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(\u003c=:) \u003c=:",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-60--61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLesser.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(\u003c:)",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#%3C%3A",
          "type": "function"
        },
        "index": {
          "description": "Lesser",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(\u003c:) \u003c:",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEqual.\n\u003c/p\u003e\u003cpre\u003e infixr 4 =:\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(=:)",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#%3D%3A",
          "type": "function"
        },
        "index": {
          "description": "Equal infixr",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(=:) =:",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreater or equal (&#8805;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(\u003e=:)",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#%3E%3D%3A",
          "type": "function"
        },
        "index": {
          "description": "Greater or equal",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(\u003e=:) \u003e=:",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-62--61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreater.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(\u003e:)",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#%3E%3A",
          "type": "function"
        },
        "index": {
          "description": "Greater",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(\u003e:) \u003e:",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuperscript.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(^:)",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#%5E%3A",
          "type": "function"
        },
        "index": {
          "description": "Superscript",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "(^:) ^:",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:-94-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array of aligned equations. Use \u003ccode\u003e\u003ca\u003e&\u003c/a\u003e\u003c/code\u003e to specify the points that should\n horizontally match. Each equation is numbered, unless prevented by \u003ccode\u003e\u003ca\u003enonumber\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "align",
          "package": "HaTeX",
          "signature": "[l] -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#align",
          "type": "function"
        },
        "index": {
          "description": "An array of aligned equations Use to specify the points that should horizontally match Each equation is numbered unless prevented by nonumber",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "align",
          "normalized": "[a]-\u003ea",
          "package": "HaTeX",
          "signature": "[l]-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unnumbered variant of \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "align_",
          "package": "HaTeX",
          "signature": "[l] -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#align_",
          "type": "function"
        },
        "index": {
          "description": "The unnumbered variant of align",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "align_",
          "normalized": "[a]-\u003ea",
          "package": "HaTeX",
          "signature": "[l]-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:align_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "alpha",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#alpha",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "alpha",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAMSMath package.\n Example:\n\u003c/p\u003e\u003cpre\u003e usepackage [] amsmath\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "amsmath",
          "package": "HaTeX",
          "signature": "PackageName",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#amsmath",
          "type": "function"
        },
        "index": {
          "description": "AMSMath package Example usepackage amsmath",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "amsmath",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:amsmath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArccosine function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "arccos",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#arccos",
          "type": "function"
        },
        "index": {
          "description": "Arccosine function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "arccos",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:arccos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArccotangent function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "arccot",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#arccot",
          "type": "function"
        },
        "index": {
          "description": "Arccotangent function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "arccot",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:arccot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArcsine function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "arcsin",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#arcsin",
          "type": "function"
        },
        "index": {
          "description": "Arcsine function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "arcsin",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:arcsin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArctangent function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "arctan",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#arctan",
          "type": "function"
        },
        "index": {
          "description": "Arctangent function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "arctan",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:arctan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eautoParens\u003c/a\u003e\u003c/code\u003e, but with angle brackets &#9001; ... &#9002;. Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eautoBrackets\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elangle\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003erangle\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "autoAngleBrackets",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#autoAngleBrackets",
          "type": "function"
        },
        "index": {
          "description": "Like autoParens but with angle brackets Equivalent to autoBrackets langle rangle",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "autoAngleBrackets",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "partial": "Angle Brackets",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:autoAngleBrackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eautoParens\u003c/a\u003e\u003c/code\u003e, but with curly brackets.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "autoBraces",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#autoBraces",
          "type": "function"
        },
        "index": {
          "description": "Like autoParens but with curly brackets",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "autoBraces",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "partial": "Braces",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:autoBraces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse custom LaTeX expressions as auto-scaled delimiters to surround math.\n Suitable delimiters include |...| (absolute value), &#8214;...&#8214; (norm,\n \u003ccode\u003e\u003ca\u003edblPipe\u003c/a\u003e\u003c/code\u003e), &#8970;...&#8971; (round-off Gauss brackets, \u003ccode\u003e\u003ca\u003elfloor\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003erfloor\u003c/a\u003e\u003c/code\u003e) etc..\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "autoBrackets",
          "package": "HaTeX",
          "signature": "LaTeX -\u003e LaTeX -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#autoBrackets",
          "type": "function"
        },
        "index": {
          "description": "Use custom LaTeX expressions as auto-scaled delimiters to surround math Suitable delimiters include absolute value norm dblPipe round-off Gauss brackets lfloor rfloor etc",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "autoBrackets",
          "normalized": "LaTeX-\u003eLaTeX-\u003ea-\u003ea",
          "package": "HaTeX",
          "partial": "Brackets",
          "signature": "LaTeX-\u003eLaTeX-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:autoBrackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSurround a LaTeX math expression by parentheses whose height\n automatically matches the expression's. Translates to \u003ccode\u003e\\left(...\\right)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "autoParens",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#autoParens",
          "type": "function"
        },
        "index": {
          "description": "Surround LaTeX math expression by parentheses whose height automatically matches the expression Translates to left right",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "autoParens",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "partial": "Parens",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:autoParens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eautoParens\u003c/a\u003e\u003c/code\u003e, but with square brackets. Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eautoBrackets\u003c/a\u003e\u003c/code\u003e\"[\"\"]\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "autoSquareBrackets",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#autoSquareBrackets",
          "type": "function"
        },
        "index": {
          "description": "Like autoParens but with square brackets Equivalent to autoBrackets",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "autoSquareBrackets",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "partial": "Square Brackets",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:autoSquareBrackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaTeX rendering of a matrix using \u003ccode\u003eBmatrix\u003c/code\u003e and a custom function to render cells.\n   Optional argument sets the alignment of the cells. Default (providing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) \n   is centered.\n\u003c/p\u003e\u003cpre\u003e { M }\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "b2matrix",
          "package": "HaTeX",
          "signature": "Maybe HPos -\u003e Matrix a -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#b2matrix",
          "type": "function"
        },
        "index": {
          "description": "LaTeX rendering of matrix using Bmatrix and custom function to render cells Optional argument sets the alignment of the cells Default providing Nothing is centered",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "b2matrix",
          "normalized": "Maybe HPos-\u003eMatrix a-\u003eb",
          "package": "HaTeX",
          "signature": "Maybe HPos-\u003eMatrix a-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:b2matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "beta",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#beta",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "beta",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:beta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaTeX rendering of a matrix using \u003ccode\u003ebmatrix\u003c/code\u003e and a custom function to render cells.\n   Optional argument sets the alignment of the cells. Default (providing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) \n   is centered.\n\u003c/p\u003e\u003cpre\u003e [ M ]\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "bmatrix",
          "package": "HaTeX",
          "signature": "Maybe HPos -\u003e Matrix a -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#bmatrix",
          "type": "function"
        },
        "index": {
          "description": "LaTeX rendering of matrix using bmatrix and custom function to render cells Optional argument sets the alignment of the cells Default providing Nothing is centered",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "bmatrix",
          "normalized": "Maybe HPos-\u003eMatrix a-\u003eb",
          "package": "HaTeX",
          "signature": "Maybe HPos-\u003eMatrix a-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:bmatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBullet operator (&#8729;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "bullet",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#bullet",
          "type": "function"
        },
        "index": {
          "description": "Bullet operator",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "bullet",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:bullet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet intersection (&#8745;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "cap",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#cap",
          "type": "function"
        },
        "index": {
          "description": "Set intersection",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "cap",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:cap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCentered-dot operator (&#8901;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "cdot",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#cdot",
          "type": "function"
        },
        "index": {
          "description": "Centered-dot operator",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "cdot",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:cdot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#967;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "chi",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#chi",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "chi",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:chi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRing operator (&#8728;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "circ",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#circ",
          "type": "function"
        },
        "index": {
          "description": "Ring operator",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "circ",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:circ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCotangent function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "cot",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#cot",
          "type": "function"
        },
        "index": {
          "description": "Cotangent function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "cot",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:cot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyperbolic cotangent function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "coth",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#coth",
          "type": "function"
        },
        "index": {
          "description": "Hyperbolic cotangent function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "coth",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:coth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCosecant function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "csc",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#csc",
          "type": "function"
        },
        "index": {
          "description": "Cosecant function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "csc",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:csc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet union (&#8746;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "cup",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#cup",
          "type": "function"
        },
        "index": {
          "description": "Set union",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "cup",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:cup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDagger symbol, &#8224;.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "dagger",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#dagger",
          "type": "function"
        },
        "index": {
          "description": "Dagger symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "dagger",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:dagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble vertical line, used as delimiter for norms (&#8214; ... &#8214;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "dblPipe",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#dblPipe",
          "type": "function"
        },
        "index": {
          "description": "Double vertical line used as delimiter for norms",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "dblPipe",
          "package": "HaTeX",
          "partial": "Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:dblPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble dagger symbol, &#8225;.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "ddagger",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#ddagger",
          "type": "function"
        },
        "index": {
          "description": "Double dagger symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "ddagger",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:ddagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "delta",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#delta",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "delta",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#916; symbol.\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "deltau",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#deltau",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "deltau",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:deltau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision operator.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "div_",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#div_",
          "type": "function"
        },
        "index": {
          "description": "Division operator",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "div_",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:div_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#1013;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "epsilon",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#epsilon",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "epsilon",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:epsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reference to a numbered equation. Use with a \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e defined in the\n scope of the equation refered to.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "eqref",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#eqref",
          "type": "function"
        },
        "index": {
          "description": "reference to numbered equation Use with label defined in the scope of the equation refered to",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "eqref",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:eqref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA numbered mathematical equation (or otherwise math expression).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "equation",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#equation",
          "type": "function"
        },
        "index": {
          "description": "numbered mathematical equation or otherwise math expression",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "equation",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:equation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unnumbered variant of \u003ccode\u003e\u003ca\u003eequation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "equation_",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#equation_",
          "type": "function"
        },
        "index": {
          "description": "The unnumbered variant of equation",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "equation_",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:equation_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentical / defined-as / equivalent (&#8801;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "equiv",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#equiv",
          "type": "function"
        },
        "index": {
          "description": "Identical defined-as equivalent",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "equiv",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:equiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "eta",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#eta",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "eta",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:eta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eExists\u003c/em\u003e symbol, &#8707;.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "exists",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#exists",
          "type": "function"
        },
        "index": {
          "description": "Exists symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "exists",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eFor all\u003c/em\u003e symbol, &#8704;.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "forall",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#forall",
          "type": "function"
        },
        "index": {
          "description": "For all symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "forall",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:forall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFraction operator.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "frac",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#frac",
          "type": "function"
        },
        "index": {
          "description": "Fraction operator",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "frac",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:frac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "gamma",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#gamma",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "gamma",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:gamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#915; symbol.\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "gammau",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#gammau",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "gammau",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:gammau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuch greater (&#8811;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "gg",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#gg",
          "type": "function"
        },
        "index": {
          "description": "Much greater",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "gg",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:gg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement-of (&#8712;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "in_",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#in_",
          "type": "function"
        },
        "index": {
          "description": "Element-of",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "in_",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:in_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfinity symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "infty",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#infty",
          "type": "function"
        },
        "index": {
          "description": "Infinity symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "infty",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:infty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegral symbol. Use \u003ccode\u003e\u003ca\u003eintegralFromTo\u003c/a\u003e\u003c/code\u003e if you want to specify\n   the limits of the integral.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "integral",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#integral",
          "type": "function"
        },
        "index": {
          "description": "Integral symbol Use integralFromTo if you want to specify the limits of the integral",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "integral",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegral symbol with limits of integration.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "integralFromTo",
          "package": "HaTeX",
          "signature": "l-\u003e l-\u003e l",
          "type": "function"
        },
        "index": {
          "description": "Integral symbol with limits of integration",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "integralFromTo",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "partial": "From To",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:integralFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "iota",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#iota",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "iota",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:iota"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "kappa",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#kappa",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "kappa",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:kappa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "lambda",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#lambda",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "lambda",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:lambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#923; symbol.\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "lambdau",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#lambdau",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "lambdau",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:lambdau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft angle bracket, &#9001;.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "langle",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#langle",
          "type": "function"
        },
        "index": {
          "description": "Left angle bracket",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "langle",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:langle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft ceiling, &#8968;.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "lceil",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#lceil",
          "type": "function"
        },
        "index": {
          "description": "Left ceiling",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "lceil",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:lceil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft floor, &#8970;.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "lfloor",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#lfloor",
          "type": "function"
        },
        "index": {
          "description": "Left floor",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "lfloor",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:lfloor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuch less (&#8810;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "ll",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#ll",
          "type": "function"
        },
        "index": {
          "description": "Much less",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "ll",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:ll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural logarithm symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "ln",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#ln",
          "type": "function"
        },
        "index": {
          "description": "Natural logarithm symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "ln",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:ln"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA right-arrow for function definitions, &#8614;.\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mapsto",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#mapsto",
          "type": "function"
        },
        "index": {
          "description": "right-arrow for function definitions",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mapsto",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mapsto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline mathematical expressions.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "math",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#math",
          "type": "function"
        },
        "index": {
          "description": "Inline mathematical expressions",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "math",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:math"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplayed mathematical expressions, i.e. in a seperate line / block.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathDisplay",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#mathDisplay",
          "type": "function"
        },
        "index": {
          "description": "Displayed mathematical expressions i.e in seperate line block",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathDisplay",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "partial": "Display",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBold face.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathbf",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#mathbf",
          "type": "function"
        },
        "index": {
          "description": "Bold face",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathbf",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathbf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalligraphic math symbols.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathcal",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#mathcal",
          "type": "function"
        },
        "index": {
          "description": "Calligraphic math symbols",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathcal",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathcal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault math symbol font.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathdefault",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#mathdefault",
          "type": "function"
        },
        "index": {
          "description": "Default math symbol font",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathdefault",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathdefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eItalic math. Uses the same glyphs as \u003ccode\u003e\u003ca\u003emathdefault\u003c/a\u003e\u003c/code\u003e, but with spacings\n   intended for multi-character symbols rather than juxtaposition of single-character symbols.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathit",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#mathit",
          "type": "function"
        },
        "index": {
          "description": "Italic math Uses the same glyphs as mathdefault but with spacings intended for multi-character symbols rather than juxtaposition of single-character symbols",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathit",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoman, i.e. not-italic math.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathrm",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#mathrm",
          "type": "function"
        },
        "index": {
          "description": "Roman i.e not-italic math",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathrm",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathrm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSans-serif math.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathsf",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#mathsf",
          "type": "function"
        },
        "index": {
          "description": "Sans-serif math",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathsf",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathsf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypewriter font.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathtt",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#mathtt",
          "type": "function"
        },
        "index": {
          "description": "Typewriter font",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mathtt",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mathtt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinus-or-plus operator (&#8723;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mp",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#mp",
          "type": "function"
        },
        "index": {
          "description": "Minus-or-plus operator",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mp",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mu",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#mu",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "mu",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:mu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMirrored element-of (&#8715;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "ni",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#ni",
          "type": "function"
        },
        "index": {
          "description": "Mirrored element-of",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "ni",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:ni"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrevent an equation from being numbered, where the environment would by default do that.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "nonumber",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#nonumber",
          "type": "function"
        },
        "index": {
          "description": "Prevent an equation from being numbered where the environment would by default do that",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "nonumber",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:nonumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot element of (&#8713;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "notin",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#notin",
          "type": "function"
        },
        "index": {
          "description": "Not element of",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "notin",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:notin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "nu",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#nu",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "nu",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:nu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCircled dot operator (&#8857;).\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "odot",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#odot",
          "type": "function"
        },
        "index": {
          "description": "Circled dot operator",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "odot",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:odot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#969;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "omega",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#omega",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "omega",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:omega"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#937; symbol.\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "omegau",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#omegau",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "omegau",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:omegau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCircled minus operator (&#8854;).\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "ominus",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#ominus",
          "type": "function"
        },
        "index": {
          "description": "Circled minus operator",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "ominus",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:ominus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCircled plus operator (&#8853;).\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "oplus",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#oplus",
          "type": "function"
        },
        "index": {
          "description": "Circled plus operator",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "oplus",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:oplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCircled slash (&#8856;).\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "oslash",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#oslash",
          "type": "function"
        },
        "index": {
          "description": "Circled slash",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "oslash",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:oslash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCircled multiplication cross (&#8855;).\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "otimes",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#otimes",
          "type": "function"
        },
        "index": {
          "description": "Circled multiplication cross",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "otimes",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:otimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#981;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "phi",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#phi",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "phi",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:phi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#934; symbol.\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "phiu",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#phiu",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "phiu",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:phiu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#960;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "pi_",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#pi_",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "pi_",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:pi_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#928; symbol.\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "piu",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#piu",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "piu",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:piu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlus-or-minus operator (&#177;).\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "pm",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#pm",
          "type": "function"
        },
        "index": {
          "description": "Plus-or-minus operator",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "pm",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:pm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaTeX rendering of a matrix using \u003ccode\u003epmatrix\u003c/code\u003e and a custom function to render cells.\n   Optional argument sets the alignment of the cells. Default (providing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) \n   is centered.\n\u003c/p\u003e\u003cpre\u003e ( M )\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "pmatrix",
          "package": "HaTeX",
          "signature": "Maybe HPos -\u003e Matrix a -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#pmatrix",
          "type": "function"
        },
        "index": {
          "description": "LaTeX rendering of matrix using pmatrix and custom function to render cells Optional argument sets the alignment of the cells Default providing Nothing is centered",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "pmatrix",
          "normalized": "Maybe HPos-\u003eMatrix a-\u003eb",
          "package": "HaTeX",
          "signature": "Maybe HPos-\u003eMatrix a-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:pmatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePi product symbol. Use \u003ccode\u003e\u003ca\u003eprodFromTo\u003c/a\u003e\u003c/code\u003e if you want to specify the\n   limits of the product.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "prod",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#prod",
          "type": "function"
        },
        "index": {
          "description": "Pi product symbol Use prodFromTo if you want to specify the limits of the product",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "prod",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:prod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePi product symbol with limits.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "prodFromTo",
          "package": "HaTeX",
          "signature": "l-\u003e l-\u003e l",
          "type": "function"
        },
        "index": {
          "description": "Pi product symbol with limits",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "prodFromTo",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "partial": "From To",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:prodFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProportional-to (&#8733;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "propto",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#propto",
          "type": "function"
        },
        "index": {
          "description": "Proportional-to",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "propto",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:propto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#968;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "psi",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#psi",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "psi",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:psi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#936; symbol.\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "psiu",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#psiu",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "psiu",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:psiu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight angle bracket, &#9002;.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "rangle",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#rangle",
          "type": "function"
        },
        "index": {
          "description": "Right angle bracket",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "rangle",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:rangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight ceiling, &#8969;.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "rceil",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#rceil",
          "type": "function"
        },
        "index": {
          "description": "Right ceiling",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "rceil",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:rceil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight floor, &#8971;.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "rfloor",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#rfloor",
          "type": "function"
        },
        "index": {
          "description": "Right floor",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "rfloor",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:rfloor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#961;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "rho",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#rho",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "rho",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:rho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecant function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "sec",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#sec",
          "type": "function"
        },
        "index": {
          "description": "Secant function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "sec",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:sec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet minus (&#8726;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "setminus",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#setminus",
          "type": "function"
        },
        "index": {
          "description": "Set minus",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "setminus",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:setminus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#963;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "sigma",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#sigma",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "sigma",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:sigma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#931; symbol.\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "sigmau",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#sigmau",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "sigmau",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:sigmau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStar operator (&#9733;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "star",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#star",
          "type": "function"
        },
        "index": {
          "description": "Star operator",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "star",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:star"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubset-of (&#8834;).\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "subset",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#subset",
          "type": "function"
        },
        "index": {
          "description": "Subset-of",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "subset",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:subset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigma sumation symbol with limits.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "sumFromTo",
          "package": "HaTeX",
          "signature": "l-\u003e l-\u003e l",
          "type": "function"
        },
        "index": {
          "description": "Sigma sumation symbol with limits",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "sumFromTo",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "partial": "From To",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:sumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuperset-of (&#8835;).\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "supset",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#supset",
          "type": "function"
        },
        "index": {
          "description": "Superset-of",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "supset",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:supset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#964;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tau",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#tau",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tau",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCosine function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tcos",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#tcos",
          "type": "function"
        },
        "index": {
          "description": "Cosine function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tcos",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tcos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyperbolic cosine function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tcosh",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#tcosh",
          "type": "function"
        },
        "index": {
          "description": "Hyperbolic cosine function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tcosh",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tcosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExponential function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "texp",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#texp",
          "type": "function"
        },
        "index": {
          "description": "Exponential function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "texp",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:texp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "theta",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#theta",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "theta",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:theta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#920; symbol.\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "thetau",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#thetau",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "thetau",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:thetau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"x-cross\" multiplication operator (&#215;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "times",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#times",
          "type": "function"
        },
        "index": {
          "description": "x-cross multiplication operator",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "times",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogarithm function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tlog",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#tlog",
          "type": "function"
        },
        "index": {
          "description": "Logarithm function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tlog",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tlog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA right-arrow, &#8594;.\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "to",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#to",
          "type": "function"
        },
        "index": {
          "description": "right-arrow",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "to",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSine function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tsin",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#tsin",
          "type": "function"
        },
        "index": {
          "description": "Sine function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tsin",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tsin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyperbolic sine function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tsinh",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#tsinh",
          "type": "function"
        },
        "index": {
          "description": "Hyperbolic sine function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tsinh",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tsinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot notation. Use \u003ccode\u003etsqrt (Just n) x\u003c/code\u003e for the \u003ccode\u003en\u003c/code\u003eth root of \u003ccode\u003ex\u003c/code\u003e.\n   When \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is supplied, the function will output a square root.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tsqrt",
          "package": "HaTeX",
          "signature": "Maybe l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#tsqrt",
          "type": "function"
        },
        "index": {
          "description": "Root notation Use tsqrt Just for the th root of When Nothing is supplied the function will output square root",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tsqrt",
          "normalized": "Maybe a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Maybe l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tsqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigma sumation symbol. Use \u003ccode\u003e\u003ca\u003esumFromTo\u003c/a\u003e\u003c/code\u003e instead if you want to\n   specify the limits of the sum.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tsum",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#tsum",
          "type": "function"
        },
        "index": {
          "description": "Sigma sumation symbol Use sumFromTo instead if you want to specify the limits of the sum",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "tsum",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:tsum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTangent function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "ttan",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#ttan",
          "type": "function"
        },
        "index": {
          "description": "Tangent function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "ttan",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:ttan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyperbolic tangent function symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "ttanh",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#ttanh",
          "type": "function"
        },
        "index": {
          "description": "Hyperbolic tangent function symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "ttanh",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:ttanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#965;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "upsilon",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#upsilon",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "upsilon",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:upsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#933; symbol.\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "upsilonu",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#upsilonu",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "upsilonu",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:upsilonu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaTeX rendering of a matrix using \u003ccode\u003eVmatrix\u003c/code\u003e and a custom function to render cells.\n   Optional argument sets the alignment of the cells. Default (providing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) \n   is centered.\n\u003c/p\u003e\u003cpre\u003e || M ||\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "v2matrix",
          "package": "HaTeX",
          "signature": "Maybe HPos -\u003e Matrix a -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#v2matrix",
          "type": "function"
        },
        "index": {
          "description": "LaTeX rendering of matrix using Vmatrix and custom function to render cells Optional argument sets the alignment of the cells Default providing Nothing is centered",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "v2matrix",
          "normalized": "Maybe HPos-\u003eMatrix a-\u003eb",
          "package": "HaTeX",
          "signature": "Maybe HPos-\u003eMatrix a-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:v2matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "varepsilon",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#varepsilon",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "varepsilon",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:varepsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#966;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "varphi",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#varphi",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "varphi",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:varphi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#982;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "varpi",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#varpi",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "varpi",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:varpi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#1009;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "varrho",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#varrho",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "varrho",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:varrho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#962;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "varsigma",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#varsigma",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "varsigma",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:varsigma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e&#977;\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "vartheta",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#vartheta",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "vartheta",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:vartheta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAngle pointing downwards (&#8744;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "vee",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#vee",
          "type": "function"
        },
        "index": {
          "description": "Angle pointing downwards",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "vee",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:vee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaTeX rendering of a matrix using \u003ccode\u003evmatrix\u003c/code\u003e and a custom function to render cells.\n   Optional argument sets the alignment of the cells. Default (providing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) \n   is centered.\n\u003c/p\u003e\u003cpre\u003e | M |\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "vmatrix",
          "package": "HaTeX",
          "signature": "Maybe HPos -\u003e Matrix a -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#vmatrix",
          "type": "function"
        },
        "index": {
          "description": "LaTeX rendering of matrix using vmatrix and custom function to render cells Optional argument sets the alignment of the cells Default providing Nothing is centered",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "vmatrix",
          "normalized": "Maybe HPos-\u003eMatrix a-\u003eb",
          "package": "HaTeX",
          "signature": "Maybe HPos-\u003eMatrix a-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:vmatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAngle pointing upwards (&#8743;).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "wedge",
          "package": "HaTeX",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#wedge",
          "type": "function"
        },
        "index": {
          "description": "Angle pointing upwards",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "wedge",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:wedge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "xi",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#xi",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "xi",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:xi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#926; symbol.\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "xiu",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#xiu",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "xiu",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:xiu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem/\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "zeta",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSMath.html#zeta",
          "type": "function"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Text LaTeX Packages AMSMath",
          "module": "Text.LaTeX.Packages.AMSMath",
          "name": "zeta",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSMath.html#v:zeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePackage for theorem environments.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "AMSThm",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-AMSThm.html",
          "type": "module"
        },
        "index": {
          "description": "Package for theorem environments",
          "hierarchy": "Text LaTeX Packages AMSThm",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "AMSThm",
          "package": "HaTeX",
          "partial": "AMSThm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent styles for \u003ccode\u003e\u003ca\u003etheorem\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "TheoremStyle",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-AMSThm.html#TheoremStyle",
          "type": "data"
        },
        "index": {
          "description": "Different styles for theorem",
          "hierarchy": "Text LaTeX Packages AMSThm",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "TheoremStyle",
          "package": "HaTeX",
          "partial": "Theorem Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#t:TheoremStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "CustomThmStyle",
          "package": "HaTeX",
          "signature": "CustomThmStyle String",
          "source": "src/Text-LaTeX-Packages-AMSThm.html#TheoremStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages AMSThm",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "CustomThmStyle",
          "package": "HaTeX",
          "partial": "Custom Thm Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:CustomThmStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "Definition",
          "package": "HaTeX",
          "signature": "Definition",
          "source": "src/Text-LaTeX-Packages-AMSThm.html#TheoremStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages AMSThm",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "Definition",
          "package": "HaTeX",
          "partial": "Definition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:Definition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "Plain",
          "package": "HaTeX",
          "signature": "Plain",
          "source": "src/Text-LaTeX-Packages-AMSThm.html#TheoremStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages AMSThm",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "Plain",
          "package": "HaTeX",
          "partial": "Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:Plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "Remark",
          "package": "HaTeX",
          "signature": "Remark",
          "source": "src/Text-LaTeX-Packages-AMSThm.html#TheoremStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages AMSThm",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "Remark",
          "package": "HaTeX",
          "partial": "Remark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:Remark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAMSThm package.\n Example:\n\u003c/p\u003e\u003cpre\u003e usepackage [] amsthm\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "amsthm",
          "package": "HaTeX",
          "signature": "PackageName",
          "source": "src/Text-LaTeX-Packages-AMSThm.html#amsthm",
          "type": "function"
        },
        "index": {
          "description": "AMSThm package Example usepackage amsthm",
          "hierarchy": "Text LaTeX Packages AMSThm",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "amsthm",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:amsthm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003etheorem\u003c/a\u003e\u003c/code\u003e environment type.\n   Arguments are environment name (this will be the argument\n   when using the \u003ccode\u003e\u003ca\u003etheorem\u003c/a\u003e\u003c/code\u003e function) and the displayed title.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e newtheorem \"prop\" \"Proposition\"\n\u003c/pre\u003e\u003cpre\u003e theorem \"prop\" \"This is it.\"\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "newtheorem",
          "package": "HaTeX",
          "signature": "String -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSThm.html#newtheorem",
          "type": "function"
        },
        "index": {
          "description": "Create new theorem environment type Arguments are environment name this will be the argument when using the theorem function and the displayed title For example newtheorem prop Proposition theorem prop This is it",
          "hierarchy": "Text LaTeX Packages AMSThm",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "newtheorem",
          "normalized": "String-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "String-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:newtheorem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eproof\u003c/a\u003e\u003c/code\u003e environment. The first optional argument\n   is used to put a custom title to the proof.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "proof",
          "package": "HaTeX",
          "signature": "Maybe l -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSThm.html#proof",
          "type": "function"
        },
        "index": {
          "description": "The proof environment The first optional argument is used to put custom title to the proof",
          "hierarchy": "Text LaTeX Packages AMSThm",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "proof",
          "normalized": "Maybe a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Maybe l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:proof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert the \u003cem\u003eQED\u003c/em\u003e symbol.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "qedhere",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-AMSThm.html#qedhere",
          "type": "function"
        },
        "index": {
          "description": "Insert the QED symbol",
          "hierarchy": "Text LaTeX Packages AMSThm",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "qedhere",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:qedhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a environment created by \u003ccode\u003e\u003ca\u003enewtheorem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "theorem",
          "package": "HaTeX",
          "signature": "String -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSThm.html#theorem",
          "type": "function"
        },
        "index": {
          "description": "Use environment created by newtheorem",
          "hierarchy": "Text LaTeX Packages AMSThm",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "theorem",
          "normalized": "String-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "String-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:theorem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the theorem style. Call this function in the preamble.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "theoremstyle",
          "package": "HaTeX",
          "signature": "TheoremStyle -\u003e l",
          "source": "src/Text-LaTeX-Packages-AMSThm.html#theoremstyle",
          "type": "function"
        },
        "index": {
          "description": "Set the theorem style Call this function in the preamble",
          "hierarchy": "Text LaTeX Packages AMSThm",
          "module": "Text.LaTeX.Packages.AMSThm",
          "name": "theoremstyle",
          "normalized": "TheoremStyle-\u003ea",
          "package": "HaTeX",
          "signature": "TheoremStyle-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-AMSThm.html#v:theoremstyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003ebabel\u003c/code\u003e package is used to write documents in languages\n   other than US English.\n\u003c/p\u003e\u003cp\u003eCTAN page for babel: \u003ca\u003ehttp://ctan.org/pkg/babel\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Babel",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Babel.html",
          "type": "module"
        },
        "index": {
          "description": "The babel package is used to write documents in languages other than US English CTAN page for babel http ctan.org pkg babel",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Babel",
          "package": "HaTeX",
          "partial": "Babel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage configuration. You may use one with \u003ccode\u003e\u003ca\u003euselanguageconf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "LangConf",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Babel.html#LangConf",
          "type": "data"
        },
        "index": {
          "description": "Language configuration You may use one with uselanguageconf",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "LangConf",
          "package": "HaTeX",
          "partial": "Lang Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#t:LangConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguages.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Language",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "data"
        },
        "index": {
          "description": "Languages",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Language",
          "package": "HaTeX",
          "partial": "Language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#t:Language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrazilian Portuguese.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Brazilian",
          "package": "HaTeX",
          "signature": "Brazilian",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Brazilian Portuguese",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Brazilian",
          "package": "HaTeX",
          "partial": "Brazilian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Brazilian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBulgarian.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Bulgarian",
          "package": "HaTeX",
          "signature": "Bulgarian",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Bulgarian",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Bulgarian",
          "package": "HaTeX",
          "partial": "Bulgarian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Bulgarian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanadian French.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Canadien",
          "package": "HaTeX",
          "signature": "Canadien",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Canadian French",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Canadien",
          "package": "HaTeX",
          "partial": "Canadien",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Canadien"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCzech.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Czech",
          "package": "HaTeX",
          "signature": "Czech",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Czech",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Czech",
          "package": "HaTeX",
          "partial": "Czech",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Czech"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDutch.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Dutch",
          "package": "HaTeX",
          "signature": "Dutch",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Dutch",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Dutch",
          "package": "HaTeX",
          "partial": "Dutch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Dutch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnglish.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "English",
          "package": "HaTeX",
          "signature": "English",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "English",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "English",
          "package": "HaTeX",
          "partial": "English",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:English"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinnish.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Finnish",
          "package": "HaTeX",
          "signature": "Finnish",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Finnish",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Finnish",
          "package": "HaTeX",
          "partial": "Finnish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Finnish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParisian French.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Francais",
          "package": "HaTeX",
          "signature": "Francais",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Parisian French",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Francais",
          "package": "HaTeX",
          "partial": "Francais",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Francais"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrench.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "French",
          "package": "HaTeX",
          "signature": "French",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "French",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "French",
          "package": "HaTeX",
          "partial": "French",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:French"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrench.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "FrenchB",
          "package": "HaTeX",
          "signature": "FrenchB",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "French",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "FrenchB",
          "package": "HaTeX",
          "partial": "French",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:FrenchB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOld German.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "German",
          "package": "HaTeX",
          "signature": "German",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Old German",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "German",
          "package": "HaTeX",
          "partial": "German",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:German"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIcelandic.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Icelandic",
          "package": "HaTeX",
          "signature": "Icelandic",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Icelandic",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Icelandic",
          "package": "HaTeX",
          "partial": "Icelandic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Icelandic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eItalian.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Italian",
          "package": "HaTeX",
          "signature": "Italian",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Italian",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Italian",
          "package": "HaTeX",
          "partial": "Italian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Italian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Babel",
          "name": "LangConf",
          "package": "HaTeX",
          "signature": "LangConf",
          "source": "src/Text-LaTeX-Packages-Babel.html#LangConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "LangConf",
          "package": "HaTeX",
          "partial": "Lang Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:LangConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHungarian.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Magyar",
          "package": "HaTeX",
          "signature": "Magyar",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Hungarian",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Magyar",
          "package": "HaTeX",
          "partial": "Magyar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Magyar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNew German.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "NGerman",
          "package": "HaTeX",
          "signature": "NGerman",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "New German",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "NGerman",
          "package": "HaTeX",
          "partial": "NGerman",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:NGerman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePortuguese.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Portuguese",
          "package": "HaTeX",
          "signature": "Portuguese",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Portuguese",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Portuguese",
          "package": "HaTeX",
          "partial": "Portuguese",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Portuguese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRussian.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Russian",
          "package": "HaTeX",
          "signature": "Russian",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Russian",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Russian",
          "package": "HaTeX",
          "partial": "Russian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Russian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpanish.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Spanish",
          "package": "HaTeX",
          "signature": "Spanish",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Spanish",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Spanish",
          "package": "HaTeX",
          "partial": "Spanish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Spanish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUkranian.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Ukranian",
          "package": "HaTeX",
          "signature": "Ukranian",
          "source": "src/Text-LaTeX-Packages-Babel.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Ukranian",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "Ukranian",
          "package": "HaTeX",
          "partial": "Ukranian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:Ukranian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBabel package. When writing in a single language, the simplest\n   way of using it is with \u003ccode\u003e\u003ca\u003euselanguage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn the preamble, use the following (if your language of choice is Spanish):\n\u003c/p\u003e\u003cpre\u003e uselanguage Spanish\n\u003c/pre\u003e\u003cp\u003eTo see a list of available languages, check the \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "babel",
          "package": "HaTeX",
          "signature": "PackageName",
          "source": "src/Text-LaTeX-Packages-Babel.html#babel",
          "type": "function"
        },
        "index": {
          "description": "Babel package When writing in single language the simplest way of using it is with uselanguage In the preamble use the following if your language of choice is Spanish uselanguage Spanish To see list of available languages check the Language type",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "babel",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:babel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eforeignlanguage\u003c/a\u003e\u003c/code\u003e takes two arguments; the second argument is a\n   phrase to be typeset according to the rules of the language named in its first\n   argument.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "foreignlanguage",
          "package": "HaTeX",
          "signature": "Language -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Babel.html#foreignlanguage",
          "type": "function"
        },
        "index": {
          "description": "The function foreignlanguage takes two arguments the second argument is phrase to be typeset according to the rules of the language named in its first argument",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "foreignlanguage",
          "normalized": "Language-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Language-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:foreignlanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Babel",
          "name": "mainLang",
          "package": "HaTeX",
          "signature": "Language",
          "source": "src/Text-LaTeX-Packages-Babel.html#LangConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "mainLang",
          "package": "HaTeX",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:mainLang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Babel",
          "name": "otherLangs",
          "package": "HaTeX",
          "signature": "[Language]",
          "source": "src/Text-LaTeX-Packages-Babel.html#LangConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "otherLangs",
          "normalized": "[Language]",
          "package": "HaTeX",
          "partial": "Langs",
          "signature": "[Language]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:otherLangs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e locally.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "otherlanguage",
          "package": "HaTeX",
          "signature": "Language -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Babel.html#otherlanguage",
          "type": "function"
        },
        "index": {
          "description": "Use Language locally",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "otherlanguage",
          "normalized": "Language-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Language-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:otherlanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitch to a given \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "selectlanguage",
          "package": "HaTeX",
          "signature": "Language -\u003e l",
          "source": "src/Text-LaTeX-Packages-Babel.html#selectlanguage",
          "type": "function"
        },
        "index": {
          "description": "Switch to given Language",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "selectlanguage",
          "normalized": "Language-\u003ea",
          "package": "HaTeX",
          "signature": "Language-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:selectlanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport the \u003ccode\u003e\u003ca\u003ebabel\u003c/a\u003e\u003c/code\u003e package using a given \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e uselanguage l = usepackage [texy l] babel\n\u003c/pre\u003e\u003cp\u003eIf you are using more than one language, consider to use\n  \u003ccode\u003e\u003ca\u003euselanguageconf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "uselanguage",
          "package": "HaTeX",
          "signature": "Language -\u003e l",
          "source": "src/Text-LaTeX-Packages-Babel.html#uselanguage",
          "type": "function"
        },
        "index": {
          "description": "Import the babel package using given Language uselanguage usepackage texy babel If you are using more than one language consider to use uselanguageconf",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "uselanguage",
          "normalized": "Language-\u003ea",
          "package": "HaTeX",
          "signature": "Language-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:uselanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport the \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e package using a given language\n   configuration, featuring a main language and some\n   others. For example:\n\u003c/p\u003e\u003cpre\u003e uselanguageconf $ LangConf English [German]\n\u003c/pre\u003e\u003cp\u003eThis will use English as main language, and German\n   as secondary.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "uselanguageconf",
          "package": "HaTeX",
          "signature": "LangConf -\u003e l",
          "source": "src/Text-LaTeX-Packages-Babel.html#uselanguageconf",
          "type": "function"
        },
        "index": {
          "description": "Import the label package using given language configuration featuring main language and some others For example uselanguageconf LangConf English German This will use English as main language and German as secondary",
          "hierarchy": "Text LaTeX Packages Babel",
          "module": "Text.LaTeX.Packages.Babel",
          "name": "uselanguageconf",
          "normalized": "LangConf-\u003ea",
          "package": "HaTeX",
          "signature": "LangConf-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Babel.html#v:uselanguageconf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBeamer is a LaTeX package for the creation of slides.\n\u003c/p\u003e\u003cp\u003eEach frame is contained within the \u003ccode\u003e\u003ca\u003eframe\u003c/a\u003e\u003c/code\u003e function. Here is an example:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Text.LaTeX\n import Text.LaTeX.Packages.Beamer\n\n mySlides :: Monad m =\u003e LaTeXT m ()\n mySlides = do\n   frame $ do\n     frametitle \"First frame\"\n     \"Content of the first frame.\"\n   frame $ do\n     frametitle \"Second frame\"\n     \"Content of the second frame.\" \n     pause\n     \" And actually a little more.\"\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epause\u003c/a\u003e\u003c/code\u003e command in the second frame makes the second part of the text\n   to appear one screen later.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Beamer",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Beamer.html",
          "type": "module"
        },
        "index": {
          "description": "Beamer is LaTeX package for the creation of slides Each frame is contained within the frame function Here is an example LANGUAGE OverloadedStrings import Text.LaTeX import Text.LaTeX.Packages.Beamer mySlides Monad LaTeXT mySlides do frame do frametitle First frame Content of the first frame frame do frametitle Second frame Content of the second frame pause And actually little more The pause command in the second frame makes the second part of the text to appear one screen later",
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Beamer",
          "package": "HaTeX",
          "partial": "Beamer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifications for beamer functions.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "OverlaySpec",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Beamer.html#OverlaySpec",
          "type": "data"
        },
        "index": {
          "description": "Specifications for beamer functions",
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "OverlaySpec",
          "package": "HaTeX",
          "partial": "Overlay Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#t:OverlaySpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTheme\u003c/a\u003e\u003c/code\u003e of a presentation. See \u003ccode\u003e\u003ca\u003eusetheme\u003c/a\u003e\u003c/code\u003e.\n   A preview of each one is given below.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Theme",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "data"
        },
        "index": {
          "description": "Theme of presentation See usetheme preview of each one is given below",
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Theme",
          "package": "HaTeX",
          "partial": "Theme",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#t:Theme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewAnnArbor.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "AnnArbor",
          "package": "HaTeX",
          "signature": "AnnArbor",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "AnnArbor",
          "package": "HaTeX",
          "partial": "Ann Arbor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:AnnArbor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewAntibes.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Antibes",
          "package": "HaTeX",
          "signature": "Antibes",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Antibes",
          "package": "HaTeX",
          "partial": "Antibes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Antibes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewBergen.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Bergen",
          "package": "HaTeX",
          "signature": "Bergen",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Bergen",
          "package": "HaTeX",
          "partial": "Bergen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Bergen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewBerkeley.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Berkeley",
          "package": "HaTeX",
          "signature": "Berkeley",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Berkeley",
          "package": "HaTeX",
          "partial": "Berkeley",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Berkeley"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewBerlin.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Berlin",
          "package": "HaTeX",
          "signature": "Berlin",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Berlin",
          "package": "HaTeX",
          "partial": "Berlin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Berlin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewBoadilla.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Boadilla",
          "package": "HaTeX",
          "signature": "Boadilla",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Boadilla",
          "package": "HaTeX",
          "partial": "Boadilla",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Boadilla"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Boxes",
          "package": "HaTeX",
          "signature": "Boxes",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Boxes",
          "package": "HaTeX",
          "partial": "Boxes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Boxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewCambridgeUS.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "CambridgeUS",
          "package": "HaTeX",
          "signature": "CambridgeUS",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "CambridgeUS",
          "package": "HaTeX",
          "partial": "Cambridge US",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:CambridgeUS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewCopenhagen.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Copenhagen",
          "package": "HaTeX",
          "signature": "Copenhagen",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Copenhagen",
          "package": "HaTeX",
          "partial": "Copenhagen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Copenhagen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "CustomTheme",
          "package": "HaTeX",
          "signature": "CustomTheme String",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "CustomTheme",
          "package": "HaTeX",
          "partial": "Custom Theme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:CustomTheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewDarmstadt.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Darmstadt",
          "package": "HaTeX",
          "signature": "Darmstadt",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Darmstadt",
          "package": "HaTeX",
          "partial": "Darmstadt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Darmstadt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Default",
          "package": "HaTeX",
          "signature": "Default",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Default",
          "package": "HaTeX",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewDresden.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Dresden",
          "package": "HaTeX",
          "signature": "Dresden",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Dresden",
          "package": "HaTeX",
          "partial": "Dresden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Dresden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewFrankfurt.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Frankfurt",
          "package": "HaTeX",
          "signature": "Frankfurt",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Frankfurt",
          "package": "HaTeX",
          "partial": "Frankfurt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Frankfurt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "FromSlide",
          "package": "HaTeX",
          "signature": "FromSlide Int",
          "source": "src/Text-LaTeX-Packages-Beamer.html#OverlaySpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "FromSlide",
          "package": "HaTeX",
          "partial": "From Slide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:FromSlide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "FromToSlide",
          "package": "HaTeX",
          "signature": "FromToSlide Int Int",
          "source": "src/Text-LaTeX-Packages-Beamer.html#OverlaySpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "FromToSlide",
          "package": "HaTeX",
          "partial": "From To Slide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:FromToSlide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewGoettingen.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Goettingen",
          "package": "HaTeX",
          "signature": "Goettingen",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Goettingen",
          "package": "HaTeX",
          "partial": "Goettingen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Goettingen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewHannover.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Hannover",
          "package": "HaTeX",
          "signature": "Hannover",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Hannover",
          "package": "HaTeX",
          "partial": "Hannover",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Hannover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewIlmenau.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Ilmenau",
          "package": "HaTeX",
          "signature": "Ilmenau",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Ilmenau",
          "package": "HaTeX",
          "partial": "Ilmenau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Ilmenau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewJuanLesPins.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "JuanLesPins",
          "package": "HaTeX",
          "signature": "JuanLesPins",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "JuanLesPins",
          "package": "HaTeX",
          "partial": "Juan Les Pins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:JuanLesPins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewLuebeck.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Luebeck",
          "package": "HaTeX",
          "signature": "Luebeck",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Luebeck",
          "package": "HaTeX",
          "partial": "Luebeck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Luebeck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewMadrid.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Madrid",
          "package": "HaTeX",
          "signature": "Madrid",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Madrid",
          "package": "HaTeX",
          "partial": "Madrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Madrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewMalmoe.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Malmoe",
          "package": "HaTeX",
          "signature": "Malmoe",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Malmoe",
          "package": "HaTeX",
          "partial": "Malmoe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Malmoe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewMarburg.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Marburg",
          "package": "HaTeX",
          "signature": "Marburg",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Marburg",
          "package": "HaTeX",
          "partial": "Marburg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Marburg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewMontpellier.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Montpellier",
          "package": "HaTeX",
          "signature": "Montpellier",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Montpellier",
          "package": "HaTeX",
          "partial": "Montpellier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Montpellier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "OneSlide",
          "package": "HaTeX",
          "signature": "OneSlide Int",
          "source": "src/Text-LaTeX-Packages-Beamer.html#OverlaySpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "OneSlide",
          "package": "HaTeX",
          "partial": "One Slide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:OneSlide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewPaloAlto.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "PaloAlto",
          "package": "HaTeX",
          "signature": "PaloAlto",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "PaloAlto",
          "package": "HaTeX",
          "partial": "Palo Alto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:PaloAlto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewPittsburgh.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Pittsburgh",
          "package": "HaTeX",
          "signature": "Pittsburgh",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Pittsburgh",
          "package": "HaTeX",
          "partial": "Pittsburgh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Pittsburgh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewRochester.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Rochester",
          "package": "HaTeX",
          "signature": "Rochester",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Rochester",
          "package": "HaTeX",
          "partial": "Rochester",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Rochester"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewSingapore.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Singapore",
          "package": "HaTeX",
          "signature": "Singapore",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Singapore",
          "package": "HaTeX",
          "partial": "Singapore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Singapore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewSzeged.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Szeged",
          "package": "HaTeX",
          "signature": "Szeged",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Szeged",
          "package": "HaTeX",
          "partial": "Szeged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Szeged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "ToSlide",
          "package": "HaTeX",
          "signature": "ToSlide Int",
          "source": "src/Text-LaTeX-Packages-Beamer.html#OverlaySpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "ToSlide",
          "package": "HaTeX",
          "partial": "To Slide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:ToSlide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"docfiles/beamers/previewWarsaw.png\"/\u003e\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Warsaw",
          "package": "HaTeX",
          "signature": "Warsaw",
          "source": "src/Text-LaTeX-Packages-Beamer.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "Warsaw",
          "package": "HaTeX",
          "partial": "Warsaw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:Warsaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHighlight in red a piece of text. With the \u003ccode\u003e\u003ca\u003eOverlaySpec\u003c/a\u003e\u003c/code\u003es, you can specify the slides where\n the text will be highlighted.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "alert",
          "package": "HaTeX",
          "signature": "[OverlaySpec] -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Beamer.html#alert",
          "type": "function"
        },
        "index": {
          "description": "Highlight in red piece of text With the OverlaySpec you can specify the slides where the text will be highlighted",
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "alert",
          "normalized": "[OverlaySpec]-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "[OverlaySpec]-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:alert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ebeamer\u003c/a\u003e\u003c/code\u003e document class. Importing a package is not required. Example:\n\u003c/p\u003e\u003cpre\u003e documentclass [] beamer\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "beamer",
          "package": "HaTeX",
          "signature": "ClassName",
          "source": "src/Text-LaTeX-Packages-Beamer.html#beamer",
          "type": "function"
        },
        "index": {
          "description": "The beamer document class Importing package is not required Example documentclass beamer",
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "beamer",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:beamer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebeameritem\u003c/a\u003e\u003c/code\u003e works like \u003ccode\u003eitem\u003c/code\u003e, but allows you to specify the slides where\n the item will be displayed.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "beameritem",
          "package": "HaTeX",
          "signature": "[OverlaySpec] -\u003e l",
          "source": "src/Text-LaTeX-Packages-Beamer.html#beameritem",
          "type": "function"
        },
        "index": {
          "description": "beameritem works like item but allows you to specify the slides where the item will be displayed",
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "beameritem",
          "normalized": "[OverlaySpec]-\u003ea",
          "package": "HaTeX",
          "signature": "[OverlaySpec]-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:beameritem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eblock\u003c/a\u003e\u003c/code\u003e will be displayed surrounding a text.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "block",
          "package": "HaTeX",
          "signature": "l-\u003e l-\u003e l",
          "type": "function"
        },
        "index": {
          "description": "block will be displayed surrounding text",
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "block",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA presentation is composed of a sequence of frames. Each frame is created with this function.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "frame",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Beamer.html#frame",
          "type": "function"
        },
        "index": {
          "description": "presentation is composed of sequence of frames Each frame is created with this function",
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "frame",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the subtitle of the current frame. Use it within a \u003ccode\u003e\u003ca\u003eframe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "framesubtitle",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Beamer.html#framesubtitle",
          "type": "function"
        },
        "index": {
          "description": "Set the subtitle of the current frame Use it within frame",
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "framesubtitle",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:framesubtitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the title of the current frame. Use it within a \u003ccode\u003e\u003ca\u003eframe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "frametitle",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Beamer.html#frametitle",
          "type": "function"
        },
        "index": {
          "description": "Set the title of the current frame Use it within frame",
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "frametitle",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:frametitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003euncover\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "only",
          "package": "HaTeX",
          "signature": "[OverlaySpec] -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Beamer.html#only",
          "type": "function"
        },
        "index": {
          "description": "Similar to uncover",
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "only",
          "normalized": "[OverlaySpec]-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "[OverlaySpec]-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduces a pause in a slide.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "pause",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-Beamer.html#pause",
          "type": "function"
        },
        "index": {
          "description": "Introduces pause in slide",
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "pause",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWith \u003ccode\u003e\u003ca\u003euncover\u003c/a\u003e\u003c/code\u003e, show a piece of text only in the slides you want.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "uncover",
          "package": "HaTeX",
          "signature": "[OverlaySpec] -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Beamer.html#uncover",
          "type": "function"
        },
        "index": {
          "description": "With uncover show piece of text only in the slides you want",
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "uncover",
          "normalized": "[OverlaySpec]-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "[OverlaySpec]-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:uncover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003e\u003ca\u003eTheme\u003c/a\u003e\u003c/code\u003e employed in your presentation (in the preamble).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "usetheme",
          "package": "HaTeX",
          "signature": "Theme -\u003e l",
          "source": "src/Text-LaTeX-Packages-Beamer.html#usetheme",
          "type": "function"
        },
        "index": {
          "description": "Set the Theme employed in your presentation in the preamble",
          "hierarchy": "Text LaTeX Packages Beamer",
          "module": "Text.LaTeX.Packages.Beamer",
          "name": "usetheme",
          "normalized": "Theme-\u003ea",
          "package": "HaTeX",
          "signature": "Theme-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Beamer.html#v:usetheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake your documents colorful using this module.\n\u003c/p\u003e\u003cp\u003eDifferent functionalities are provided, like changing the color of\n   the text and the paper, or creating colorful boxes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Color",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Color.html",
          "type": "module"
        },
        "index": {
          "description": "Make your documents colorful using this module Different functionalities are provided like changing the color of the text and the paper or creating colorful boxes",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Color",
          "package": "HaTeX",
          "partial": "Color",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor specification.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "ColSpec",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Color.html#ColSpec",
          "type": "data"
        },
        "index": {
          "description": "Color specification",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "ColSpec",
          "package": "HaTeX",
          "partial": "Col Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#t:ColSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic colors.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Color",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Color.html#Color",
          "type": "data"
        },
        "index": {
          "description": "Basic colors",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Color",
          "package": "HaTeX",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify your own color using one of the different color models.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "ColorModel",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorModel",
          "type": "data"
        },
        "index": {
          "description": "Specify your own color using one of the different color models",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "ColorModel",
          "package": "HaTeX",
          "partial": "Color Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#t:ColorModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther predefined colors.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "ColorName",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "data"
        },
        "index": {
          "description": "Other predefined colors",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "ColorName",
          "package": "HaTeX",
          "partial": "Color Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#t:ColorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Word8",
          "package": "HaTeX",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Word8",
          "package": "HaTeX",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#t:Word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Apricot",
          "package": "HaTeX",
          "signature": "Apricot",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Apricot",
          "package": "HaTeX",
          "partial": "Apricot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Apricot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Aquamarine",
          "package": "HaTeX",
          "signature": "Aquamarine",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Aquamarine",
          "package": "HaTeX",
          "partial": "Aquamarine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Aquamarine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Bittersweet",
          "package": "HaTeX",
          "signature": "Bittersweet",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Bittersweet",
          "package": "HaTeX",
          "partial": "Bittersweet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Bittersweet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.LaTeX.Packages.Color\",\"Text.LaTeX.Packages.TikZ.Simple\",\"Text.LaTeX.Packages.TikZ.Syntax\"]",
          "name": "Black",
          "package": "HaTeX",
          "signature": "Black",
          "source": "src/Text-LaTeX-Packages-Color.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Black\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Black\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Black\"]"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Black",
          "package": "HaTeX",
          "partial": "Black",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.LaTeX.Packages.Color\",\"Text.LaTeX.Packages.TikZ.Simple\",\"Text.LaTeX.Packages.TikZ.Syntax\"]",
          "name": "Blue",
          "package": "HaTeX",
          "signature": "Blue",
          "source": "src/Text-LaTeX-Packages-Color.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Blue\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Blue\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Blue\"]"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Blue",
          "package": "HaTeX",
          "partial": "Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "BlueGreen",
          "package": "HaTeX",
          "signature": "BlueGreen",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "BlueGreen",
          "package": "HaTeX",
          "partial": "Blue Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:BlueGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "BlueViolet",
          "package": "HaTeX",
          "signature": "BlueViolet",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "BlueViolet",
          "package": "HaTeX",
          "partial": "Blue Violet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:BlueViolet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "BrickRed",
          "package": "HaTeX",
          "signature": "BrickRed",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "BrickRed",
          "package": "HaTeX",
          "partial": "Brick Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:BrickRed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Brown",
          "package": "HaTeX",
          "signature": "Brown",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Brown",
          "package": "HaTeX",
          "partial": "Brown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Brown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "BurntOrange",
          "package": "HaTeX",
          "signature": "BurntOrange",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "BurntOrange",
          "package": "HaTeX",
          "partial": "Burnt Orange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:BurntOrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "CMYK",
          "package": "HaTeX",
          "signature": "CMYK Float Float Float Float",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorModel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "CMYK",
          "package": "HaTeX",
          "partial": "CMYK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:CMYK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "CadetBlue",
          "package": "HaTeX",
          "signature": "CadetBlue",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "CadetBlue",
          "package": "HaTeX",
          "partial": "Cadet Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:CadetBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "CarnationPink",
          "package": "HaTeX",
          "signature": "CarnationPink",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "CarnationPink",
          "package": "HaTeX",
          "partial": "Carnation Pink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:CarnationPink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Cerulean",
          "package": "HaTeX",
          "signature": "Cerulean",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Cerulean",
          "package": "HaTeX",
          "partial": "Cerulean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Cerulean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "CornflowerBlue",
          "package": "HaTeX",
          "signature": "CornflowerBlue",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "CornflowerBlue",
          "package": "HaTeX",
          "partial": "Cornflower Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:CornflowerBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.LaTeX.Packages.Color\",\"Text.LaTeX.Packages.TikZ.Simple\",\"Text.LaTeX.Packages.TikZ.Syntax\"]",
          "name": "Cyan",
          "package": "HaTeX",
          "signature": "Cyan",
          "source": "src/Text-LaTeX-Packages-Color.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Cyan\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Cyan\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Cyan\"]"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Cyan",
          "package": "HaTeX",
          "partial": "Cyan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Dandelion",
          "package": "HaTeX",
          "signature": "Dandelion",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Dandelion",
          "package": "HaTeX",
          "partial": "Dandelion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Dandelion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "DarkOrchid",
          "package": "HaTeX",
          "signature": "DarkOrchid",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "DarkOrchid",
          "package": "HaTeX",
          "partial": "Dark Orchid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:DarkOrchid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "DefColor",
          "package": "HaTeX",
          "signature": "DefColor Color",
          "source": "src/Text-LaTeX-Packages-Color.html#ColSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "DefColor",
          "package": "HaTeX",
          "partial": "Def Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:DefColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "DvipsColor",
          "package": "HaTeX",
          "signature": "DvipsColor ColorName",
          "source": "src/Text-LaTeX-Packages-Color.html#ColSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "DvipsColor",
          "package": "HaTeX",
          "partial": "Dvips Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:DvipsColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Emerald",
          "package": "HaTeX",
          "signature": "Emerald",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Emerald",
          "package": "HaTeX",
          "partial": "Emerald",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Emerald"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "ForestGreen",
          "package": "HaTeX",
          "signature": "ForestGreen",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "ForestGreen",
          "package": "HaTeX",
          "partial": "Forest Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:ForestGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Fuchsia",
          "package": "HaTeX",
          "signature": "Fuchsia",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Fuchsia",
          "package": "HaTeX",
          "partial": "Fuchsia",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Fuchsia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Goldenrod",
          "package": "HaTeX",
          "signature": "Goldenrod",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Goldenrod",
          "package": "HaTeX",
          "partial": "Goldenrod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Goldenrod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Gray",
          "package": "HaTeX",
          "signature": "Gray",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Gray",
          "package": "HaTeX",
          "partial": "Gray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrayscale, from 0 (black) to 1 (white).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "GrayM",
          "package": "HaTeX",
          "signature": "GrayM Float",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorModel",
          "type": "function"
        },
        "index": {
          "description": "Grayscale from black to white",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "GrayM",
          "package": "HaTeX",
          "partial": "Gray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:GrayM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.LaTeX.Packages.Color\",\"Text.LaTeX.Packages.TikZ.Simple\",\"Text.LaTeX.Packages.TikZ.Syntax\"]",
          "name": "Green",
          "package": "HaTeX",
          "signature": "Green",
          "source": "src/Text-LaTeX-Packages-Color.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Green\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Green\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Green\"]"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Green",
          "package": "HaTeX",
          "partial": "Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "GreenYellow",
          "package": "HaTeX",
          "signature": "GreenYellow",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "GreenYellow",
          "package": "HaTeX",
          "partial": "Green Yellow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:GreenYellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "HTML",
          "package": "HaTeX",
          "signature": "HTML String",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorModel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "HTML",
          "package": "HaTeX",
          "partial": "HTML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:HTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "JungleGreen",
          "package": "HaTeX",
          "signature": "JungleGreen",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "JungleGreen",
          "package": "HaTeX",
          "partial": "Jungle Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:JungleGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Lavender",
          "package": "HaTeX",
          "signature": "Lavender",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Lavender",
          "package": "HaTeX",
          "partial": "Lavender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Lavender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "LimeGreen",
          "package": "HaTeX",
          "signature": "LimeGreen",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "LimeGreen",
          "package": "HaTeX",
          "partial": "Lime Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:LimeGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.LaTeX.Packages.Color\",\"Text.LaTeX.Packages.TikZ.Simple\",\"Text.LaTeX.Packages.TikZ.Syntax\"]",
          "name": "Magenta",
          "package": "HaTeX",
          "signature": "Magenta",
          "source": "src/Text-LaTeX-Packages-Color.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Magenta\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Magenta\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Magenta\"]"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Magenta",
          "package": "HaTeX",
          "partial": "Magenta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Mahogany",
          "package": "HaTeX",
          "signature": "Mahogany",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Mahogany",
          "package": "HaTeX",
          "partial": "Mahogany",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Mahogany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Maroon",
          "package": "HaTeX",
          "signature": "Maroon",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Maroon",
          "package": "HaTeX",
          "partial": "Maroon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Maroon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Melon",
          "package": "HaTeX",
          "signature": "Melon",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Melon",
          "package": "HaTeX",
          "partial": "Melon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Melon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "MidnightBlue",
          "package": "HaTeX",
          "signature": "MidnightBlue",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "MidnightBlue",
          "package": "HaTeX",
          "partial": "Midnight Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:MidnightBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "ModColor",
          "package": "HaTeX",
          "signature": "ModColor ColorModel",
          "source": "src/Text-LaTeX-Packages-Color.html#ColSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "ModColor",
          "package": "HaTeX",
          "partial": "Mod Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:ModColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Mulberry",
          "package": "HaTeX",
          "signature": "Mulberry",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Mulberry",
          "package": "HaTeX",
          "partial": "Mulberry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Mulberry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "NavyBlue",
          "package": "HaTeX",
          "signature": "NavyBlue",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "NavyBlue",
          "package": "HaTeX",
          "partial": "Navy Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:NavyBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "OliveGreen",
          "package": "HaTeX",
          "signature": "OliveGreen",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "OliveGreen",
          "package": "HaTeX",
          "partial": "Olive Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:OliveGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Orange",
          "package": "HaTeX",
          "signature": "Orange",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Orange",
          "package": "HaTeX",
          "partial": "Orange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Orange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "OrangeRed",
          "package": "HaTeX",
          "signature": "OrangeRed",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "OrangeRed",
          "package": "HaTeX",
          "partial": "Orange Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:OrangeRed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Orchid",
          "package": "HaTeX",
          "signature": "Orchid",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Orchid",
          "package": "HaTeX",
          "partial": "Orchid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Orchid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Peach",
          "package": "HaTeX",
          "signature": "Peach",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Peach",
          "package": "HaTeX",
          "partial": "Peach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Peach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Periwinkle",
          "package": "HaTeX",
          "signature": "Periwinkle",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Periwinkle",
          "package": "HaTeX",
          "partial": "Periwinkle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Periwinkle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "PineGreen",
          "package": "HaTeX",
          "signature": "PineGreen",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "PineGreen",
          "package": "HaTeX",
          "partial": "Pine Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:PineGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Plum",
          "package": "HaTeX",
          "signature": "Plum",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Plum",
          "package": "HaTeX",
          "partial": "Plum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Plum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "ProcessBlue",
          "package": "HaTeX",
          "signature": "ProcessBlue",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "ProcessBlue",
          "package": "HaTeX",
          "partial": "Process Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:ProcessBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Purple",
          "package": "HaTeX",
          "signature": "Purple",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Purple",
          "package": "HaTeX",
          "partial": "Purple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Purple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach parameter determines the proportion of red, green and\n   blue, with a value within the [0,1] interval.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "RGB",
          "package": "HaTeX",
          "signature": "RGB Float Float Float",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorModel",
          "type": "function"
        },
        "index": {
          "description": "Each parameter determines the proportion of red green and blue with value within the interval",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "RGB",
          "package": "HaTeX",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "RGB255",
          "package": "HaTeX",
          "signature": "RGB255 Word8 Word8 Word8",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorModel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "RGB255",
          "package": "HaTeX",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:RGB255"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "RawSienna",
          "package": "HaTeX",
          "signature": "RawSienna",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "RawSienna",
          "package": "HaTeX",
          "partial": "Raw Sienna",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:RawSienna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.LaTeX.Packages.Color\",\"Text.LaTeX.Packages.TikZ.Simple\",\"Text.LaTeX.Packages.TikZ.Syntax\"]",
          "name": "Red",
          "package": "HaTeX",
          "signature": "Red",
          "source": "src/Text-LaTeX-Packages-Color.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Red\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Red\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Red\"]"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Red",
          "package": "HaTeX",
          "partial": "Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "RedOrange",
          "package": "HaTeX",
          "signature": "RedOrange",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "RedOrange",
          "package": "HaTeX",
          "partial": "Red Orange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:RedOrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "RedViolet",
          "package": "HaTeX",
          "signature": "RedViolet",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "RedViolet",
          "package": "HaTeX",
          "partial": "Red Violet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:RedViolet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Rhodamine",
          "package": "HaTeX",
          "signature": "Rhodamine",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Rhodamine",
          "package": "HaTeX",
          "partial": "Rhodamine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Rhodamine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "RoyalBlue",
          "package": "HaTeX",
          "signature": "RoyalBlue",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "RoyalBlue",
          "package": "HaTeX",
          "partial": "Royal Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:RoyalBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "RubineRed",
          "package": "HaTeX",
          "signature": "RubineRed",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "RubineRed",
          "package": "HaTeX",
          "partial": "Rubine Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:RubineRed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Salmon",
          "package": "HaTeX",
          "signature": "Salmon",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Salmon",
          "package": "HaTeX",
          "partial": "Salmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Salmon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "SeaGreen",
          "package": "HaTeX",
          "signature": "SeaGreen",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "SeaGreen",
          "package": "HaTeX",
          "partial": "Sea Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:SeaGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Sepia",
          "package": "HaTeX",
          "signature": "Sepia",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Sepia",
          "package": "HaTeX",
          "partial": "Sepia",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Sepia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "SkyBlue",
          "package": "HaTeX",
          "signature": "SkyBlue",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "SkyBlue",
          "package": "HaTeX",
          "partial": "Sky Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:SkyBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "SpringGreen",
          "package": "HaTeX",
          "signature": "SpringGreen",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "SpringGreen",
          "package": "HaTeX",
          "partial": "Spring Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:SpringGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Tan",
          "package": "HaTeX",
          "signature": "Tan",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Tan",
          "package": "HaTeX",
          "partial": "Tan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "TealBlue",
          "package": "HaTeX",
          "signature": "TealBlue",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "TealBlue",
          "package": "HaTeX",
          "partial": "Teal Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:TealBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Thistle",
          "package": "HaTeX",
          "signature": "Thistle",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Thistle",
          "package": "HaTeX",
          "partial": "Thistle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Thistle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Turquoise",
          "package": "HaTeX",
          "signature": "Turquoise",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Turquoise",
          "package": "HaTeX",
          "partial": "Turquoise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Turquoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "Violet",
          "package": "HaTeX",
          "signature": "Violet",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Violet",
          "package": "HaTeX",
          "partial": "Violet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Violet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "VioletRed",
          "package": "HaTeX",
          "signature": "VioletRed",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "VioletRed",
          "package": "HaTeX",
          "partial": "Violet Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:VioletRed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.LaTeX.Packages.Color\",\"Text.LaTeX.Packages.TikZ.Simple\",\"Text.LaTeX.Packages.TikZ.Syntax\"]",
          "name": "White",
          "package": "HaTeX",
          "signature": "White",
          "source": "src/Text-LaTeX-Packages-Color.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:White\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:White\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:White\"]"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "White",
          "package": "HaTeX",
          "partial": "White",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:White"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "WildStrawberry",
          "package": "HaTeX",
          "signature": "WildStrawberry",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "WildStrawberry",
          "package": "HaTeX",
          "partial": "Wild Strawberry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:WildStrawberry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.LaTeX.Packages.Color\",\"Text.LaTeX.Packages.TikZ.Simple\",\"Text.LaTeX.Packages.TikZ.Syntax\"]",
          "name": "Yellow",
          "package": "HaTeX",
          "signature": "Yellow",
          "source": "src/Text-LaTeX-Packages-Color.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Yellow\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Yellow\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Yellow\"]"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "Yellow",
          "package": "HaTeX",
          "partial": "Yellow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:Yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "YellowGreen",
          "package": "HaTeX",
          "signature": "YellowGreen",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "YellowGreen",
          "package": "HaTeX",
          "partial": "Yellow Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:YellowGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "YellowOrange",
          "package": "HaTeX",
          "signature": "YellowOrange",
          "source": "src/Text-LaTeX-Packages-Color.html#ColorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "YellowOrange",
          "package": "HaTeX",
          "partial": "Yellow Orange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:YellowOrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitch to a new text color.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "color",
          "package": "HaTeX",
          "signature": "ColSpec -\u003e l",
          "source": "src/Text-LaTeX-Packages-Color.html#color",
          "type": "function"
        },
        "index": {
          "description": "Switch to new text color",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "color",
          "normalized": "ColSpec-\u003ea",
          "package": "HaTeX",
          "signature": "ColSpec-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut its argument in a box with the given colour as background.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "colorbox",
          "package": "HaTeX",
          "signature": "ColSpec -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Color.html#colorbox",
          "type": "function"
        },
        "index": {
          "description": "Put its argument in box with the given colour as background",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "colorbox",
          "normalized": "ColSpec-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "ColSpec-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:colorbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "dvipsnames",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-Color.html#dvipsnames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "dvipsnames",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:dvipsnames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication of \u003ccode\u003efcolorbox cs1 cs2 l\u003c/code\u003e put \u003ccode\u003el\u003c/code\u003e in a framed box with\n   \u003ccode\u003ecs1\u003c/code\u003e as frame color and \u003ccode\u003ecs2\u003c/code\u003e as background color.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "fcolorbox",
          "package": "HaTeX",
          "signature": "ColSpec -\u003e ColSpec -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Color.html#fcolorbox",
          "type": "function"
        },
        "index": {
          "description": "Application of fcolorbox cs1 cs2 put in framed box with cs1 as frame color and cs2 as background color",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "fcolorbox",
          "normalized": "ColSpec-\u003eColSpec-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "ColSpec-\u003eColSpec-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:fcolorbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo convert all colour commands to black and white,\n   for previewers that cannot handle colour.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "monochrome",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-Color.html#monochrome",
          "type": "function"
        },
        "index": {
          "description": "To convert all colour commands to black and white for previewers that cannot handle colour",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "monochrome",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:monochrome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "nodvipsnames",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-Color.html#nodvipsnames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "nodvipsnames",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:nodvipsnames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitch to the colour that was active at the end of the preamble.\n   Thus, placing a \u003ccode\u003e\u003ca\u003ecolor\u003c/a\u003e\u003c/code\u003e command in the preamble can change the\n   standard colour of the whole document.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "normalcolor",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-Color.html#normalcolor",
          "type": "function"
        },
        "index": {
          "description": "Switch to the colour that was active at the end of the preamble Thus placing color command in the preamble can change the standard colour of the whole document",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "normalcolor",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:normalcolor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the background color for the current and following pages.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "pagecolor",
          "package": "HaTeX",
          "signature": "ColSpec -\u003e l",
          "source": "src/Text-LaTeX-Packages-Color.html#pagecolor",
          "type": "function"
        },
        "index": {
          "description": "Set the background color for the current and following pages",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "pagecolor",
          "normalized": "ColSpec-\u003ea",
          "package": "HaTeX",
          "signature": "ColSpec-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:pagecolor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epcolor\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e\u003cpre\u003e usepackage [] pcolor\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "pcolor",
          "package": "HaTeX",
          "signature": "PackageName",
          "source": "src/Text-LaTeX-Packages-Color.html#pcolor",
          "type": "function"
        },
        "index": {
          "description": "The pcolor package usepackage pcolor",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "pcolor",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:pcolor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the text of its argument in the given colour.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Color",
          "name": "textcolor",
          "package": "HaTeX",
          "signature": "ColSpec -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Color.html#textcolor",
          "type": "function"
        },
        "index": {
          "description": "Set the text of its argument in the given colour",
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "textcolor",
          "normalized": "ColSpec-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "ColSpec-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:textcolor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Color",
          "name": "usenames",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-Color.html#usenames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Color",
          "module": "Text.LaTeX.Packages.Color",
          "name": "usenames",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Color.html#v:usenames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides extensive control of page headers and footers.\n\u003c/p\u003e\u003cp\u003eCTAN page for fancyhdr: \u003ca\u003ehttp://www.ctan.org/pkg/fancyhdr\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "Fancyhdr",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides extensive control of page headers and footers CTAN page for fancyhdr http www.ctan.org pkg fancyhdr",
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "Fancyhdr",
          "package": "HaTeX",
          "partial": "Fancyhdr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader and footer settings of a LaTeX document.\n   Use \u003ccode\u003e\u003ca\u003eapplyHdrSettings\u003c/a\u003e\u003c/code\u003e to apply these settings\n   in your document. A default value is provided\n   by \u003ccode\u003e\u003ca\u003edefaultHdrSettings\u003c/a\u003e\u003c/code\u003e, which you can modify\n   using record syntax.\n\u003c/p\u003e\u003cpre\u003e mySettings :: HdrSettings\n mySettings = defaultHdrSettings\n     { centerHeader = \"Amazing header\"\n     , headRuleWidth = Pt 2\n       }\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "HdrSettings",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
          "type": "data"
        },
        "index": {
          "description": "Header and footer settings of LaTeX document Use applyHdrSettings to apply these settings in your document default value is provided by defaultHdrSettings which you can modify using record syntax mySettings HdrSettings mySettings defaultHdrSettings centerHeader Amazing header headRuleWidth Pt",
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "HdrSettings",
          "package": "HaTeX",
          "partial": "Hdr Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#t:HdrSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "HdrSettings",
          "package": "HaTeX",
          "signature": "HdrSettings",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "HdrSettings",
          "package": "HaTeX",
          "partial": "Hdr Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:HdrSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply custom header and footer settings to a\n   LaTeX document. It takes care of package importing\n   and page style settings, so using this function\n   is enough to get the settings applied.\n   Do \u003cem\u003enot\u003c/em\u003e import the \u003ccode\u003e\u003ca\u003efancyhdr\u003c/a\u003e\u003c/code\u003e package again.\n   To be used in the \u003cem\u003epreamble\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "applyHdrSettings",
          "package": "HaTeX",
          "signature": "HdrSettings -\u003e l",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#applyHdrSettings",
          "type": "function"
        },
        "index": {
          "description": "Apply custom header and footer settings to LaTeX document It takes care of package importing and page style settings so using this function is enough to get the settings applied Do not import the fancyhdr package again To be used in the preamble",
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "applyHdrSettings",
          "normalized": "HdrSettings-\u003ea",
          "package": "HaTeX",
          "partial": "Hdr Settings",
          "signature": "HdrSettings-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:applyHdrSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "centerFooter",
          "package": "HaTeX",
          "signature": "LaTeX",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "centerFooter",
          "package": "HaTeX",
          "partial": "Footer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:centerFooter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "centerHeader",
          "package": "HaTeX",
          "signature": "LaTeX",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "centerHeader",
          "package": "HaTeX",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:centerHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the center footer.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "cfoot",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#cfoot",
          "type": "function"
        },
        "index": {
          "description": "Set the center footer",
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "cfoot",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:cfoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the center header.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "chead",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#chead",
          "type": "function"
        },
        "index": {
          "description": "Set the center header",
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "chead",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:chead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault header and footer settings.\n\u003c/p\u003e\u003cp\u003eIt leaves everything empty but the\n   \u003ccode\u003e\u003ca\u003ecenterFooter\u003c/a\u003e\u003c/code\u003e field, which is filled\n   with \u003ccode\u003e\u003ca\u003ethePage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlso, it sets to 0.4 points\n   the \u003ccode\u003e\u003ca\u003eheadRuleWidth\u003c/a\u003e\u003c/code\u003e field.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "defaultHdrSettings",
          "package": "HaTeX",
          "signature": "HdrSettings",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#defaultHdrSettings",
          "type": "function"
        },
        "index": {
          "description": "Default header and footer settings It leaves everything empty but the centerFooter field which is filled with thePage Also it sets to points the headRuleWidth field",
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "defaultHdrSettings",
          "package": "HaTeX",
          "partial": "Hdr Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:defaultHdrSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage style of the \u003ccode\u003e\u003ca\u003efancyhdr\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "fancy",
          "package": "HaTeX",
          "signature": "PageStyle",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#fancy",
          "type": "function"
        },
        "index": {
          "description": "Page style of the fancyhdr package",
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "fancy",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:fancy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fancyhdr package.\n   Please, consider to use \u003ccode\u003e\u003ca\u003eapplyHdrSettings\u003c/a\u003e\u003c/code\u003e\n   instead of importing the package manually.\n   If you really want to do it manually, use\n   the functions from the \u003cem\u003eraw interface\u003c/em\u003e\n   exposed below.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "fancyhdr",
          "package": "HaTeX",
          "signature": "PackageName",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#fancyhdr",
          "type": "function"
        },
        "index": {
          "description": "The fancyhdr package Please consider to use applyHdrSettings instead of importing the package manually If you really want to do it manually use the functions from the raw interface exposed below",
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "fancyhdr",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:fancyhdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "footRuleWidth",
          "package": "HaTeX",
          "signature": "Measure",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "footRuleWidth",
          "package": "HaTeX",
          "partial": "Rule Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:footRuleWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "headRuleWidth",
          "package": "HaTeX",
          "signature": "Measure",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "headRuleWidth",
          "package": "HaTeX",
          "partial": "Rule Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:headRuleWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "leftFooter",
          "package": "HaTeX",
          "signature": "LaTeX",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "leftFooter",
          "package": "HaTeX",
          "partial": "Footer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:leftFooter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "leftHeader",
          "package": "HaTeX",
          "signature": "LaTeX",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "leftHeader",
          "package": "HaTeX",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:leftHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the left footer.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "lfoot",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#lfoot",
          "type": "function"
        },
        "index": {
          "description": "Set the left footer",
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "lfoot",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:lfoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the left header.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "lhead",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#lhead",
          "type": "function"
        },
        "index": {
          "description": "Set the left header",
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "lhead",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:lhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003efootrulewidth\u003c/code\u003e attribute.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "renewfootrulewidth",
          "package": "HaTeX",
          "signature": "Measure -\u003e l",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#renewfootrulewidth",
          "type": "function"
        },
        "index": {
          "description": "Set the footrulewidth attribute",
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "renewfootrulewidth",
          "normalized": "Measure-\u003ea",
          "package": "HaTeX",
          "signature": "Measure-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:renewfootrulewidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003eheadrulewidth\u003c/code\u003e attribute.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "renewheadrulewidth",
          "package": "HaTeX",
          "signature": "Measure -\u003e l",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#renewheadrulewidth",
          "type": "function"
        },
        "index": {
          "description": "Set the headrulewidth attribute",
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "renewheadrulewidth",
          "normalized": "Measure-\u003ea",
          "package": "HaTeX",
          "signature": "Measure-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:renewheadrulewidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the right footer.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "rfoot",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#rfoot",
          "type": "function"
        },
        "index": {
          "description": "Set the right footer",
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "rfoot",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:rfoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the right header.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "rhead",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#rhead",
          "type": "function"
        },
        "index": {
          "description": "Set the right header",
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "rhead",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:rhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "rightFooter",
          "package": "HaTeX",
          "signature": "LaTeX",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "rightFooter",
          "package": "HaTeX",
          "partial": "Footer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:rightFooter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "rightHeader",
          "package": "HaTeX",
          "signature": "LaTeX",
          "source": "src/Text-LaTeX-Packages-Fancyhdr.html#HdrSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Fancyhdr",
          "module": "Text.LaTeX.Packages.Fancyhdr",
          "name": "rightHeader",
          "package": "HaTeX",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fancyhdr.html#v:rightHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSelect new font encodings using the \u003ccode\u003efontenc\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.Fontenc",
          "name": "Fontenc",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Fontenc.html",
          "type": "module"
        },
        "index": {
          "description": "Select new font encodings using the fontenc package",
          "hierarchy": "Text LaTeX Packages Fontenc",
          "module": "Text.LaTeX.Packages.Fontenc",
          "name": "Fontenc",
          "package": "HaTeX",
          "partial": "Fontenc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fontenc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFont encodings.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Fontenc",
          "name": "FontEnc",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Fontenc.html#FontEnc",
          "type": "data"
        },
        "index": {
          "description": "Font encodings",
          "hierarchy": "Text LaTeX Packages Fontenc",
          "module": "Text.LaTeX.Packages.Fontenc",
          "name": "FontEnc",
          "package": "HaTeX",
          "partial": "Font Enc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fontenc.html#t:FontEnc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Fontenc",
          "name": "OT1",
          "package": "HaTeX",
          "signature": "OT1",
          "source": "src/Text-LaTeX-Packages-Fontenc.html#FontEnc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Fontenc",
          "module": "Text.LaTeX.Packages.Fontenc",
          "name": "OT1",
          "package": "HaTeX",
          "partial": "OT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fontenc.html#v:OT1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Fontenc",
          "name": "T1",
          "package": "HaTeX",
          "signature": "T1",
          "source": "src/Text-LaTeX-Packages-Fontenc.html#FontEnc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Fontenc",
          "module": "Text.LaTeX.Packages.Fontenc",
          "name": "T1",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fontenc.html#v:T1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003efontenc\u003c/code\u003e package.\n   It is recommended to use the \u003ccode\u003e\u003ca\u003euseencoding\u003c/a\u003e\u003c/code\u003e function\n   to import it.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Fontenc",
          "name": "fontenc",
          "package": "HaTeX",
          "signature": "PackageName",
          "source": "src/Text-LaTeX-Packages-Fontenc.html#fontenc",
          "type": "function"
        },
        "index": {
          "description": "The fontenc package It is recommended to use the useencoding function to import it",
          "hierarchy": "Text LaTeX Packages Fontenc",
          "module": "Text.LaTeX.Packages.Fontenc",
          "name": "fontenc",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fontenc.html#v:fontenc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn the preamble, select encodings to use in your document.\n   The last one will be the default encoding. Example:\n\u003c/p\u003e\u003cpre\u003e useencoding [T1]\n\u003c/pre\u003e\u003cp\u003eIt imports the \u003ccode\u003efontenc\u003c/code\u003e package. In fact:\n\u003c/p\u003e\u003cpre\u003e useencoding xs = usepackage (fmap texy xs) fontenc\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.Fontenc",
          "name": "useencoding",
          "package": "HaTeX",
          "signature": "[FontEnc] -\u003e l",
          "source": "src/Text-LaTeX-Packages-Fontenc.html#useencoding",
          "type": "function"
        },
        "index": {
          "description": "In the preamble select encodings to use in your document The last one will be the default encoding Example useencoding T1 It imports the fontenc package In fact useencoding xs usepackage fmap texy xs fontenc",
          "hierarchy": "Text LaTeX Packages Fontenc",
          "module": "Text.LaTeX.Packages.Fontenc",
          "name": "useencoding",
          "normalized": "[FontEnc]-\u003ea",
          "package": "HaTeX",
          "signature": "[FontEnc]-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Fontenc.html#v:useencoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe geometry package provides an easy interface to page dimensions.\n\u003c/p\u003e\u003cp\u003eCTAN page for geometry: \u003ca\u003ehttp://www.ctan.org/pkg/geometry\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "Geometry",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Geometry.html",
          "type": "module"
        },
        "index": {
          "description": "The geometry package provides an easy interface to page dimensions CTAN page for geometry http www.ctan.org pkg geometry",
          "hierarchy": "Text LaTeX Packages Geometry",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "Geometry",
          "package": "HaTeX",
          "partial": "Geometry",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Geometry.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions of the geometry package.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GeometryOption",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Geometry.html#GeometryOption",
          "type": "data"
        },
        "index": {
          "description": "Options of the geometry package",
          "hierarchy": "Text LaTeX Packages Geometry",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GeometryOption",
          "package": "HaTeX",
          "partial": "Geometry Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Geometry.html#t:GeometryOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GCentered",
          "package": "HaTeX",
          "signature": "GCentered",
          "source": "src/Text-LaTeX-Packages-Geometry.html#GeometryOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Geometry",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GCentered",
          "package": "HaTeX",
          "partial": "GCentered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Geometry.html#v:GCentered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GHeight",
          "package": "HaTeX",
          "signature": "GHeight Measure",
          "source": "src/Text-LaTeX-Packages-Geometry.html#GeometryOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Geometry",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GHeight",
          "package": "HaTeX",
          "partial": "GHeight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Geometry.html#v:GHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GLandscape",
          "package": "HaTeX",
          "signature": "GLandscape Bool",
          "source": "src/Text-LaTeX-Packages-Geometry.html#GeometryOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Geometry",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GLandscape",
          "package": "HaTeX",
          "partial": "GLandscape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Geometry.html#v:GLandscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GPaper",
          "package": "HaTeX",
          "signature": "GPaper PaperType",
          "source": "src/Text-LaTeX-Packages-Geometry.html#GeometryOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Geometry",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GPaper",
          "package": "HaTeX",
          "partial": "GPaper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Geometry.html#v:GPaper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GPaperHeight",
          "package": "HaTeX",
          "signature": "GPaperHeight Measure",
          "source": "src/Text-LaTeX-Packages-Geometry.html#GeometryOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Geometry",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GPaperHeight",
          "package": "HaTeX",
          "partial": "GPaper Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Geometry.html#v:GPaperHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GPaperWidth",
          "package": "HaTeX",
          "signature": "GPaperWidth Measure",
          "source": "src/Text-LaTeX-Packages-Geometry.html#GeometryOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Geometry",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GPaperWidth",
          "package": "HaTeX",
          "partial": "GPaper Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Geometry.html#v:GPaperWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GWidth",
          "package": "HaTeX",
          "signature": "GWidth Measure",
          "source": "src/Text-LaTeX-Packages-Geometry.html#GeometryOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Geometry",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "GWidth",
          "package": "HaTeX",
          "partial": "GWidth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Geometry.html#v:GWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the given geometry options to the document.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "applyGeometry",
          "package": "HaTeX",
          "signature": "[GeometryOption] -\u003e l",
          "source": "src/Text-LaTeX-Packages-Geometry.html#applyGeometry",
          "type": "function"
        },
        "index": {
          "description": "Apply the given geometry options to the document",
          "hierarchy": "Text LaTeX Packages Geometry",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "applyGeometry",
          "normalized": "[GeometryOption]-\u003ea",
          "package": "HaTeX",
          "partial": "Geometry",
          "signature": "[GeometryOption]-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Geometry.html#v:applyGeometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeometry package. Use it to import it like this:\n\u003c/p\u003e\u003cpre\u003e usepackage [] geometry\n\u003c/pre\u003e\u003cp\u003eIn most cases, it is recommended to use \u003ccode\u003e\u003ca\u003eimportGeometry\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "geometry",
          "package": "HaTeX",
          "signature": "PackageName",
          "source": "src/Text-LaTeX-Packages-Geometry.html#geometry",
          "type": "function"
        },
        "index": {
          "description": "Geometry package Use it to import it like this usepackage geometry In most cases it is recommended to use importGeometry instead",
          "hierarchy": "Text LaTeX Packages Geometry",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "geometry",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Geometry.html#v:geometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport the geometry package with additional options.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "importGeometry",
          "package": "HaTeX",
          "signature": "[GeometryOption] -\u003e l",
          "source": "src/Text-LaTeX-Packages-Geometry.html#importGeometry",
          "type": "function"
        },
        "index": {
          "description": "Import the geometry package with additional options",
          "hierarchy": "Text LaTeX Packages Geometry",
          "module": "Text.LaTeX.Packages.Geometry",
          "name": "importGeometry",
          "normalized": "[GeometryOption]-\u003ea",
          "package": "HaTeX",
          "partial": "Geometry",
          "signature": "[GeometryOption]-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Geometry.html#v:importGeometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows you to use the LaTeX \u003cem\u003egraphicx\u003c/em\u003e library in order to\n   insert graphics in a document and perform some transformations.\n\u003c/p\u003e\u003cp\u003eCTAN page for graphicx: \u003ca\u003ehttp://ctan.org/pkg/graphicx\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "Graphicx",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Graphicx.html",
          "type": "module"
        },
        "index": {
          "description": "This module allows you to use the LaTeX graphicx library in order to insert graphics in document and perform some transformations CTAN page for graphicx http ctan.org pkg graphicx",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "Graphicx",
          "package": "HaTeX",
          "partial": "Graphicx",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInclude Graphics Option. These options can be passed as arguments to the \u003ccode\u003e\u003ca\u003eincludegraphics\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGOption",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
          "type": "data"
        },
        "index": {
          "description": "Include Graphics Option These options can be passed as arguments to the includegraphics function",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGOption",
          "package": "HaTeX",
          "partial": "IGOption",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#t:IGOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate the image by given degrees.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGAngle",
          "package": "HaTeX",
          "signature": "IGAngle Int",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
          "type": "function"
        },
        "index": {
          "description": "Rotate the image by given degrees",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGAngle",
          "package": "HaTeX",
          "partial": "IGAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:IGAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor the \u003ccode\u003e\u003ca\u003eIGTrim\u003c/a\u003e\u003c/code\u003e option to work, you must set \u003ccode\u003e\u003ca\u003eIGClip\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGClip",
          "package": "HaTeX",
          "signature": "IGClip Bool",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
          "type": "function"
        },
        "index": {
          "description": "For the IGTrim option to work you must set IGClip to True",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGClip",
          "package": "HaTeX",
          "partial": "IGClip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:IGClip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the preferred height of the imported image.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGHeight",
          "package": "HaTeX",
          "signature": "IGHeight Measure",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
          "type": "function"
        },
        "index": {
          "description": "Specify the preferred height of the imported image",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGHeight",
          "package": "HaTeX",
          "partial": "IGHeight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:IGHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the image file is a pdf file with multiple pages,\n   this parameter allows you to use a different page than the first.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGPage",
          "package": "HaTeX",
          "signature": "IGPage Int",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
          "type": "function"
        },
        "index": {
          "description": "If the image file is pdf file with multiple pages this parameter allows you to use different page than the first",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGPage",
          "package": "HaTeX",
          "partial": "IGPage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:IGPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScales the image by the desired scale factor.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGScale",
          "package": "HaTeX",
          "signature": "IGScale Float",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
          "type": "function"
        },
        "index": {
          "description": "Scales the image by the desired scale factor",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGScale",
          "package": "HaTeX",
          "partial": "IGScale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:IGScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis option will crop the imported image. Arguments are from-left\n , from-bottom, from-right and from-top respectively.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGTrim",
          "package": "HaTeX",
          "signature": "IGTrim Measure Measure Measure Measure",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
          "type": "function"
        },
        "index": {
          "description": "This option will crop the imported image Arguments are from-left from-bottom from-right and from-top respectively",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGTrim",
          "package": "HaTeX",
          "partial": "IGTrim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:IGTrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the preferred width of the imported image.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGWidth",
          "package": "HaTeX",
          "signature": "IGWidth Measure",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
          "type": "function"
        },
        "index": {
          "description": "Specify the preferred width of the imported image",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "IGWidth",
          "package": "HaTeX",
          "partial": "IGWidth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:IGWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, it will scale the image according to both \u003ccode\u003e\u003ca\u003eIGWidth\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIGHeight\u003c/a\u003e\u003c/code\u003e\n , but will not distort the image, so that neither \u003ccode\u003e\u003ca\u003eIGWidth\u003c/a\u003e\u003c/code\u003e nor \u003ccode\u003e\u003ca\u003eIGHeight\u003c/a\u003e\u003c/code\u003e are exceeded.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "KeepAspectRatio",
          "package": "HaTeX",
          "signature": "KeepAspectRatio Bool",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#IGOption",
          "type": "function"
        },
        "index": {
          "description": "When True it will scale the image according to both IGWidth and IGHeight but will not distort the image so that neither IGWidth nor IGHeight are exceeded",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "KeepAspectRatio",
          "package": "HaTeX",
          "partial": "Keep Aspect Ratio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:KeepAspectRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePackage option of the \u003ccode\u003e\u003ca\u003egraphicx\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "dvipdfm",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#dvipdfm",
          "type": "function"
        },
        "index": {
          "description": "Package option of the graphicx package",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "dvipdfm",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:dvipdfm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePackage option of the \u003ccode\u003e\u003ca\u003egraphicx\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "dvips",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#dvips",
          "type": "function"
        },
        "index": {
          "description": "Package option of the graphicx package",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "dvips",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:dvips"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egraphicx\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e\u003cpre\u003e usepackage [] graphicx\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "graphicx",
          "package": "HaTeX",
          "signature": "PackageName",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#graphicx",
          "type": "function"
        },
        "index": {
          "description": "The graphicx package usepackage graphicx",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "graphicx",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:graphicx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInclude an image in the document.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "includegraphics",
          "package": "HaTeX",
          "signature": "[IGOption]-\u003e FilePath-\u003e l",
          "type": "function"
        },
        "index": {
          "description": "Include an image in the document",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "includegraphics",
          "normalized": "[IGOption]-\u003eFilePath-\u003ea",
          "package": "HaTeX",
          "signature": "[IGOption]-\u003eFilePath-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:includegraphics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePackage option of the \u003ccode\u003e\u003ca\u003egraphicx\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "pdftex",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#pdftex",
          "type": "function"
        },
        "index": {
          "description": "Package option of the graphicx package",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "pdftex",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:pdftex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflect horizontally the content.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "reflectbox",
          "package": "HaTeX",
          "signature": "l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#reflectbox",
          "type": "function"
        },
        "index": {
          "description": "Reflect horizontally the content",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "reflectbox",
          "normalized": "a-\u003ea",
          "package": "HaTeX",
          "signature": "l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:reflectbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResize the content to match the given dimensions.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "resizebox",
          "package": "HaTeX",
          "signature": "Measure-\u003e Measure-\u003e l-\u003e l",
          "type": "function"
        },
        "index": {
          "description": "Resize the content to match the given dimensions",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "resizebox",
          "normalized": "Measure-\u003eMeasure-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Measure-\u003eMeasure-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:resizebox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate the content by the given angle in degrees.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "rotatebox",
          "package": "HaTeX",
          "signature": "Float -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Graphicx.html#rotatebox",
          "type": "function"
        },
        "index": {
          "description": "Rotate the content by the given angle in degrees",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "rotatebox",
          "normalized": "Float-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Float-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:rotatebox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale the content by the given factor. If only the horizontal scale is supplied,\n   the vertical scaling will be the same.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "scalebox",
          "package": "HaTeX",
          "signature": "Float-\u003e Maybe Float-\u003e l-\u003e l",
          "type": "function"
        },
        "index": {
          "description": "Scale the content by the given factor If only the horizontal scale is supplied the vertical scaling will be the same",
          "hierarchy": "Text LaTeX Packages Graphicx",
          "module": "Text.LaTeX.Packages.Graphicx",
          "name": "scalebox",
          "normalized": "Float-\u003eMaybe Float-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "Float-\u003eMaybe Float-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Graphicx.html#v:scalebox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "Hyperref",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Hyperref.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Hyperref",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "Hyperref",
          "package": "HaTeX",
          "partial": "Hyperref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "HRefOption",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Hyperref.html#HRefOption",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Hyperref",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "HRefOption",
          "package": "HaTeX",
          "partial": "HRef Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#t:HRefOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "URL",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Hyperref.html#URL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Hyperref",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "URL",
          "package": "HaTeX",
          "partial": "URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#t:URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "HRefPage",
          "package": "HaTeX",
          "signature": "HRefPage Int",
          "source": "src/Text-LaTeX-Packages-Hyperref.html#HRefOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Hyperref",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "HRefPage",
          "package": "HaTeX",
          "partial": "HRef Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:HRefPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "PDFNewWindow",
          "package": "HaTeX",
          "signature": "PDFNewWindow",
          "source": "src/Text-LaTeX-Packages-Hyperref.html#HRefOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Hyperref",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "PDFNewWindow",
          "package": "HaTeX",
          "partial": "PDFNew Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:PDFNewWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "PDFRemoteStartView",
          "package": "HaTeX",
          "signature": "PDFRemoteStartView",
          "source": "src/Text-LaTeX-Packages-Hyperref.html#HRefOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Hyperref",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "PDFRemoteStartView",
          "package": "HaTeX",
          "partial": "PDFRemote Start View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:PDFRemoteStartView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a replacement for the usual \u003ccode\u003eref\u003c/code\u003e command that places a contextual label in front of the reference.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "autoref",
          "package": "HaTeX",
          "signature": "Label -\u003e l",
          "source": "src/Text-LaTeX-Packages-Hyperref.html#autoref",
          "type": "function"
        },
        "index": {
          "description": "This is replacement for the usual ref command that places contextual label in front of the reference",
          "hierarchy": "Text LaTeX Packages Hyperref",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "autoref",
          "normalized": "Label-\u003ea",
          "package": "HaTeX",
          "signature": "Label-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:autoref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "createURL",
          "package": "HaTeX",
          "signature": "String -\u003e URL",
          "source": "src/Text-LaTeX-Packages-Hyperref.html#createURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages Hyperref",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "createURL",
          "normalized": "String-\u003eURL",
          "package": "HaTeX",
          "partial": "URL",
          "signature": "String-\u003eURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:createURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference to an \u003ccode\u003e\u003ca\u003eURL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "href",
          "package": "HaTeX",
          "signature": "[HRefOption] -\u003e URL -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Hyperref.html#href",
          "type": "function"
        },
        "index": {
          "description": "Reference to an URL",
          "hierarchy": "Text LaTeX Packages Hyperref",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "href",
          "normalized": "[HRefOption]-\u003eURL-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "[HRefOption]-\u003eURL-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:href"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablish a base \u003ccode\u003e\u003ca\u003eURL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "hyperbaseurl",
          "package": "HaTeX",
          "signature": "URL -\u003e l",
          "source": "src/Text-LaTeX-Packages-Hyperref.html#hyperbaseurl",
          "type": "function"
        },
        "index": {
          "description": "Establish base URL",
          "hierarchy": "Text LaTeX Packages Hyperref",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "hyperbaseurl",
          "normalized": "URL-\u003ea",
          "package": "HaTeX",
          "signature": "URL-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:hyperbaseurl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ehyperimage imgURL t\u003c/code\u003e:\n  The link to the image referenced by the \u003ccode\u003eimgURL\u003c/code\u003e is inserted, using \u003ccode\u003et\u003c/code\u003e as the anchor.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "hyperimage",
          "package": "HaTeX",
          "signature": "URL -\u003e l -\u003e l",
          "source": "src/Text-LaTeX-Packages-Hyperref.html#hyperimage",
          "type": "function"
        },
        "index": {
          "description": "hyperimage imgURL The link to the image referenced by the imgURL is inserted using as the anchor",
          "hierarchy": "Text LaTeX Packages Hyperref",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "hyperimage",
          "normalized": "URL-\u003ea-\u003ea",
          "package": "HaTeX",
          "signature": "URL-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:hyperimage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehyperref\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e\u003cpre\u003e usepackage [] hyperref\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "hyperref",
          "package": "HaTeX",
          "signature": "PackageName",
          "source": "src/Text-LaTeX-Packages-Hyperref.html#hyperref",
          "type": "function"
        },
        "index": {
          "description": "The hyperref package usepackage hyperref",
          "hierarchy": "Text LaTeX Packages Hyperref",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "hyperref",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:hyperref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eURL\u003c/a\u003e\u003c/code\u003e without creating a hyperlink.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "nolinkurl",
          "package": "HaTeX",
          "signature": "URL -\u003e l",
          "source": "src/Text-LaTeX-Packages-Hyperref.html#nolinkurl",
          "type": "function"
        },
        "index": {
          "description": "Write an URL without creating hyperlink",
          "hierarchy": "Text LaTeX Packages Hyperref",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "nolinkurl",
          "normalized": "URL-\u003ea",
          "package": "HaTeX",
          "signature": "URL-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:nolinkurl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eURL\u003c/a\u003e\u003c/code\u003e hyperlinked.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "url",
          "package": "HaTeX",
          "signature": "URL -\u003e l",
          "source": "src/Text-LaTeX-Packages-Hyperref.html#url",
          "type": "function"
        },
        "index": {
          "description": "Write an URL hyperlinked",
          "hierarchy": "Text LaTeX Packages Hyperref",
          "module": "Text.LaTeX.Packages.Hyperref",
          "name": "url",
          "normalized": "URL-\u003ea",
          "package": "HaTeX",
          "signature": "URL-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Hyperref.html#v:url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package is of vital importance if you use non-ASCII characters in your document.\n   For example, if you type the word \u003cem\u003e&#193;ngela\u003c/em\u003e, the \u003cem\u003e&#193;\u003c/em\u003e character will not appear correctly in the\n   output. To solve this problem, use:\n\u003c/p\u003e\u003cpre\u003e usepackage [utf8] inputenc\n\u003c/pre\u003e\u003cp\u003eAnd make sure that your Haskell source is encoded in UTF-8.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.Inputenc",
          "name": "Inputenc",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Inputenc.html",
          "type": "module"
        },
        "index": {
          "description": "This package is of vital importance if you use non-ASCII characters in your document For example if you type the word ngela the character will not appear correctly in the output To solve this problem use usepackage utf8 inputenc And make sure that your Haskell source is encoded in UTF-8",
          "hierarchy": "Text LaTeX Packages Inputenc",
          "module": "Text.LaTeX.Packages.Inputenc",
          "name": "Inputenc",
          "package": "HaTeX",
          "partial": "Inputenc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Inputenc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInputenc package.\n Example:\n\u003c/p\u003e\u003cpre\u003e usepackage [utf8] inputenc\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.Inputenc",
          "name": "inputenc",
          "package": "HaTeX",
          "signature": "PackageName",
          "source": "src/Text-LaTeX-Packages-Inputenc.html#inputenc",
          "type": "function"
        },
        "index": {
          "description": "Inputenc package Example usepackage utf8 inputenc",
          "hierarchy": "Text LaTeX Packages Inputenc",
          "module": "Text.LaTeX.Packages.Inputenc",
          "name": "inputenc",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Inputenc.html#v:inputenc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLatin-1 encoding.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Inputenc",
          "name": "latin1",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-Inputenc.html#latin1",
          "type": "function"
        },
        "index": {
          "description": "Latin-1 encoding",
          "hierarchy": "Text LaTeX Packages Inputenc",
          "module": "Text.LaTeX.Packages.Inputenc",
          "name": "latin1",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Inputenc.html#v:latin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUTF-8 encoding.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Inputenc",
          "name": "utf8",
          "package": "HaTeX",
          "signature": "l",
          "source": "src/Text-LaTeX-Packages-Inputenc.html#utf8",
          "type": "function"
        },
        "index": {
          "description": "UTF-8 encoding",
          "hierarchy": "Text LaTeX Packages Inputenc",
          "module": "Text.LaTeX.Packages.Inputenc",
          "name": "utf8",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Inputenc.html#v:utf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a monadic interface to build \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e values.\n   It does so using \u003ccode\u003e\u003ca\u003ePathBuilder\u003c/a\u003e\u003c/code\u003es. The construction of a \u003ccode\u003e\u003ca\u003ePathBuilder\u003c/a\u003e\u003c/code\u003e\n   is equivalent to the construction of a \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e by hand, but with\n   a sometimes more convenient syntax.\n\u003c/p\u003e\u003cp\u003eFor example, this path corresponds to a triangle:\n\u003c/p\u003e\u003cpre\u003e trianglePath :: TPath\n trianglePath = bpath (pointAtXY (-1) 0) $ do\n    line $ pointAtXY 1 0\n    line $ pointAtXY 0 1\n    pcycle\n\u003c/pre\u003e\u003cp\u003eThe equivalent syntax created by hand would be:\n\u003c/p\u003e\u003cpre\u003e trianglePath :: TPath\n trianglePath = Cycle $ Start (pointAtXY (-1) 0) -\u003e- pointAtXY 1 0 -\u003e- pointAtXY 0 1\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCycle\u003c/a\u003e\u003c/code\u003e constructor at the beginning may seem unintuitive, since we are building\n   the path from left to right. In the \u003ccode\u003e\u003ca\u003ePathBuilder\u003c/a\u003e\u003c/code\u003e monad, the instructions are always\n   written in order.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "PathBuilder",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides monadic interface to build TPath values It does so using PathBuilder The construction of PathBuilder is equivalent to the construction of TPath by hand but with sometimes more convenient syntax For example this path corresponds to triangle trianglePath TPath trianglePath bpath pointAtXY do line pointAtXY line pointAtXY pcycle The equivalent syntax created by hand would be trianglePath TPath trianglePath Cycle Start pointAtXY pointAtXY pointAtXY The Cycle constructor at the beginning may seem unintuitive since we are building the path from left to right In the PathBuilder monad the instructions are always written in order",
          "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "PathBuilder",
          "package": "HaTeX",
          "partial": "Path Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a \u003cem\u003epath builder\u003c/em\u003e to construct a value of type \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e.\n   Use \u003ccode\u003e\u003ca\u003ebpath\u003c/a\u003e\u003c/code\u003e for this purpose.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "PathBuilder",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#PathBuilder",
          "type": "data"
        },
        "index": {
          "description": "Use path builder to construct value of type TPath Use bpath for this purpose",
          "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "PathBuilder",
          "package": "HaTeX",
          "partial": "Path Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#t:PathBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a path using a \u003cem\u003estarting point\u003c/em\u003e and a \u003ccode\u003e\u003ca\u003ePathBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "bpath",
          "package": "HaTeX",
          "signature": "TPoint -\u003e PathBuilder a -\u003e TPath",
          "source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#bpath",
          "type": "function"
        },
        "index": {
          "description": "Build path using starting point and PathBuilder",
          "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "bpath",
          "normalized": "TPoint-\u003ePathBuilder a-\u003eTPath",
          "package": "HaTeX",
          "signature": "TPoint-\u003ePathBuilder a-\u003eTPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:bpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCircle with the given radius centered at the current point.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "circle",
          "package": "HaTeX",
          "signature": "Double -\u003e PathBuilder ()",
          "source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#circle",
          "type": "function"
        },
        "index": {
          "description": "Circle with the given radius centered at the current point",
          "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "circle",
          "normalized": "Double-\u003ePathBuilder()",
          "package": "HaTeX",
          "signature": "Double-\u003ePathBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEllipse with width and height described by the arguments and centered\n   at the current point.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "ellipse",
          "package": "HaTeX",
          "signature": "Double-\u003e Double-\u003e PathBuilder ()",
          "type": "function"
        },
        "index": {
          "description": "Ellipse with width and height described by the arguments and centered at the current point",
          "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "ellipse",
          "normalized": "Double-\u003eDouble-\u003ePathBuilder()",
          "package": "HaTeX",
          "signature": "Double-\u003eDouble-\u003ePathBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:ellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "grid",
          "package": "HaTeX",
          "signature": "[GridOption] -\u003e TPoint -\u003e PathBuilder ()",
          "source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#grid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "grid",
          "normalized": "[GridOption]-\u003eTPoint-\u003ePathBuilder()",
          "package": "HaTeX",
          "signature": "[GridOption]-\u003eTPoint-\u003ePathBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine from the current point to the given one.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "line",
          "package": "HaTeX",
          "signature": "TPoint -\u003e PathBuilder ()",
          "source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#line",
          "type": "function"
        },
        "index": {
          "description": "Line from the current point to the given one",
          "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "line",
          "normalized": "TPoint-\u003ePathBuilder()",
          "package": "HaTeX",
          "signature": "TPoint-\u003ePathBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText centered at the current point.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "node",
          "package": "HaTeX",
          "signature": "LaTeX -\u003e PathBuilder ()",
          "source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#node",
          "type": "function"
        },
        "index": {
          "description": "Text centered at the current point",
          "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "node",
          "normalized": "LaTeX-\u003ePathBuilder()",
          "package": "HaTeX",
          "signature": "LaTeX-\u003ePathBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "pcycle",
          "package": "HaTeX",
          "signature": "PathBuilder ()",
          "source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#pcycle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "pcycle",
          "normalized": "PathBuilder()",
          "package": "HaTeX",
          "signature": "PathBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:pcycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRectangle with the current point as one cornder and the given point\n   as the opposite corner.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "rectangle",
          "package": "HaTeX",
          "signature": "TPoint -\u003e PathBuilder ()",
          "source": "src/Text-LaTeX-Packages-TikZ-PathBuilder.html#rectangle",
          "type": "function"
        },
        "index": {
          "description": "Rectangle with the current point as one cornder and the given point as the opposite corner",
          "hierarchy": "Text LaTeX Packages TikZ PathBuilder",
          "module": "Text.LaTeX.Packages.TikZ.PathBuilder",
          "name": "rectangle",
          "normalized": "TPoint-\u003ePathBuilder()",
          "package": "HaTeX",
          "signature": "TPoint-\u003ePathBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-PathBuilder.html#v:rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple interface to create Ti\u003cem\u003ek\u003c/em\u003eZ graphics. Just build pictures using\n   the \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e data constructors, and get the Ti\u003cem\u003ek\u003c/em\u003eZ script using the function\n   \u003ccode\u003e\u003ca\u003efiguretikz\u003c/a\u003e\u003c/code\u003e. Use the function \u003ccode\u003e\u003ca\u003etikzpicture\u003c/a\u003e\u003c/code\u003e to insert the Ti\u003cem\u003ek\u003c/em\u003eZ script in\n   the LaTeX document. And do not forget to import the \u003ccode\u003e\u003ca\u003etikz\u003c/a\u003e\u003c/code\u003e package in the\n   preamble.\n\u003c/p\u003e\u003cp\u003ePlease, note that this module is not intended to be imported in the same module\n   than Text.LaTeX.Packages.TikZ. This module is itself a self-contained \u003cem\u003ealternative\u003c/em\u003e\n   of that module. If you still want to use both modules, please, use qualified imports\n   to avoid name clashes.\n\u003c/p\u003e\u003cp\u003eIn the \u003cem\u003eExamples\u003c/em\u003e directory of the source distribution, the file \u003ccode\u003etikzsimple.hs\u003c/code\u003e\n   contains a complete example of usage of this module with several pictures.\n   Below you can see a picture along with the code it came from.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"docfiles/tikz/tikzsimple.png\"/\u003e\n\u003c/p\u003e\u003cpre\u003e myFigure :: Figure\n myFigure = Scale 2 $ Figures\n   [ RectangleFilled (0,0) 1 1\n   , Colored (BasicColor Green) $ RectangleFilled (-1,1) 1 1\n   , Colored (BasicColor Red)   $ RectangleFilled ( 0,2) 1 1\n   , Colored (BasicColor Blue)  $ RectangleFilled ( 1,1) 1 1\n     ]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Simple",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "simple interface to create Ti graphics Just build pictures using the Figure data constructors and get the Ti script using the function figuretikz Use the function tikzpicture to insert the Ti script in the LaTeX document And do not forget to import the tikz package in the preamble Please note that this module is not intended to be imported in the same module than Text.LaTeX.Packages.TikZ This module is itself self-contained alternative of that module If you still want to use both modules please use qualified imports to avoid name clashes In the Examples directory of the source distribution the file tikzsimple.hs contains complete example of usage of this module with several pictures Below you can see picture along with the code it came from myFigure Figure myFigure Scale Figures RectangleFilled Colored BasicColor Green RectangleFilled Colored BasicColor Red RectangleFilled Colored BasicColor Blue RectangleFilled",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Simple",
          "package": "HaTeX",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic colors.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Color",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Color.html#Color",
          "type": "data"
        },
        "index": {
          "description": "Basic colors",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Color",
          "package": "HaTeX",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA figure in the plane.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Figure",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "data"
        },
        "index": {
          "description": "figure in the plane",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Figure",
          "package": "HaTeX",
          "partial": "Figure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#t:Figure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point in the plane.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Point",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Point",
          "type": "type"
        },
        "index": {
          "description": "point in the plane",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Point",
          "package": "HaTeX",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor models accepted by Ti\u003cem\u003ek\u003c/em\u003eZ.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "TikZColor",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TikZColor",
          "type": "data"
        },
        "index": {
          "description": "Color models accepted by Ti",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "TikZColor",
          "package": "HaTeX",
          "partial": "Tik ZColor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#t:TikZColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Word8",
          "package": "HaTeX",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Word8",
          "package": "HaTeX",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#t:Word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence two Ti\u003cem\u003ek\u003c/em\u003eZ scripts.\n\u003c/p\u003e",
          "module": "[\"Text.LaTeX.Packages.TikZ.Simple\",\"Text.LaTeX.Packages.TikZ.Syntax\"]",
          "name": "(-\u003e\u003e)",
          "package": "HaTeX",
          "signature": "TikZ -\u003e TikZ -\u003e TikZ",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#-%3E%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:-45--62--62-\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:-45--62--62-\"]"
        },
        "index": {
          "description": "Sequence two Ti scripts",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "(-\u003e\u003e) -\u003e\u003e",
          "normalized": "TikZ-\u003eTikZ-\u003eTikZ",
          "package": "HaTeX",
          "signature": "TikZ-\u003eTikZ-\u003eTikZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:-45--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.LaTeX.Packages.TikZ.Simple\",\"Text.LaTeX.Packages.TikZ.Syntax\"]",
          "name": "BasicColor",
          "package": "HaTeX",
          "signature": "BasicColor Color",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TikZColor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:BasicColor\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:BasicColor\"]"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "BasicColor",
          "package": "HaTeX",
          "partial": "Basic Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:BasicColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCircle centered at the given point with the given radius.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Circle",
          "package": "HaTeX",
          "signature": "Circle Point Double",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Circle centered at the given point with the given radius",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Circle",
          "package": "HaTeX",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs in \u003ccode\u003e\u003ca\u003eCircle\u003c/a\u003e\u003c/code\u003e, but it will be filled with some color.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "CircleFilled",
          "package": "HaTeX",
          "signature": "CircleFilled Point Double",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "As in Circle but it will be filled with some color",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "CircleFilled",
          "package": "HaTeX",
          "partial": "Circle Filled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:CircleFilled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor for the given \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Colored",
          "package": "HaTeX",
          "signature": "Colored TikZColor Figure",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Color for the given Figure",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Colored",
          "package": "HaTeX",
          "partial": "Colored",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Colored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEllipse centered at the given point with width and\n   height given by the other parameters.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Ellipse",
          "package": "HaTeX",
          "signature": "Ellipse Point Double Double",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Ellipse centered at the given point with width and height given by the other parameters",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Ellipse",
          "package": "HaTeX",
          "partial": "Ellipse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Ellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eEllipse\u003c/a\u003e\u003c/code\u003e, but filled with some color.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "EllipseFilled",
          "package": "HaTeX",
          "signature": "EllipseFilled Point Double Double",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Same as Ellipse but filled with some color",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "EllipseFilled",
          "package": "HaTeX",
          "partial": "Ellipse Filled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:EllipseFilled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA figure composed by a list of figures.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Figures",
          "package": "HaTeX",
          "signature": "Figures [Figure]",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "figure composed by list of figures",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Figures",
          "normalized": "Figures[Figure]",
          "package": "HaTeX",
          "partial": "Figures",
          "signature": "Figures[Figure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Figures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine along a list of points.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Line",
          "package": "HaTeX",
          "signature": "Line [Point]",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Line along list of points",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Line",
          "normalized": "Line[Point]",
          "package": "HaTeX",
          "partial": "Line",
          "signature": "Line[Point]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine width for the given \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "LineWidth",
          "package": "HaTeX",
          "signature": "LineWidth Measure Figure",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Line width for the given Figure",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "LineWidth",
          "package": "HaTeX",
          "partial": "Line Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:LineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine along a list of points, but the last point will be joined\n   with the first one.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Polygon",
          "package": "HaTeX",
          "signature": "Polygon [Point]",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Line along list of points but the last point will be joined with the first one",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Polygon",
          "normalized": "Polygon[Point]",
          "package": "HaTeX",
          "partial": "Polygon",
          "signature": "Polygon[Point]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ePolygon\u003c/a\u003e\u003c/code\u003e, but the inner side will be filled with color.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "PolygonFilled",
          "package": "HaTeX",
          "signature": "PolygonFilled [Point]",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Same as Polygon but the inner side will be filled with color",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "PolygonFilled",
          "normalized": "PolygonFilled[Point]",
          "package": "HaTeX",
          "partial": "Polygon Filled",
          "signature": "PolygonFilled[Point]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:PolygonFilled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.LaTeX.Packages.TikZ.Simple\",\"Text.LaTeX.Packages.TikZ.Syntax\"]",
          "name": "RGBColor",
          "package": "HaTeX",
          "signature": "RGBColor Word8 Word8 Word8",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TikZColor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:RGBColor\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:RGBColor\"]"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "RGBColor",
          "package": "HaTeX",
          "partial": "RGBColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:RGBColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRectangle with top-right corner at the given point and\n   width and height given by the other parameters.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Rectangle",
          "package": "HaTeX",
          "signature": "Rectangle Point Double Double",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Rectangle with top-right corner at the given point and width and height given by the other parameters",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Rectangle",
          "package": "HaTeX",
          "partial": "Rectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eRectangle\u003c/a\u003e\u003c/code\u003e, but filled with color.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "RectangleFilled",
          "package": "HaTeX",
          "signature": "RectangleFilled Point Double Double",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Same as Rectangle but filled with color",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "RectangleFilled",
          "package": "HaTeX",
          "partial": "Rectangle Filled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:RectangleFilled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e by a given angle (in radians).\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Rotate",
          "package": "HaTeX",
          "signature": "Rotate Double Figure",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Rotate Figure by given angle in radians",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Rotate",
          "package": "HaTeX",
          "partial": "Rotate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScaling of the given \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e by a factor.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Scale",
          "package": "HaTeX",
          "signature": "Scale Double Figure",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Scaling of the given Figure by factor",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Scale",
          "package": "HaTeX",
          "partial": "Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert some \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e code, centered at the given \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e.\n   The text should not be very complex to fit nicely in the picture.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Text",
          "package": "HaTeX",
          "signature": "Text Point LaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Insert some LaTeX code centered at the given Point The text should not be very complex to fit nicely in the picture",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "Text",
          "package": "HaTeX",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eTikZ\u003c/a\u003e\u003c/code\u003e script.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "figuretikz",
          "package": "HaTeX",
          "signature": "Figure -\u003e TikZ",
          "source": "src/Text-LaTeX-Packages-TikZ-Simple.html#figuretikz",
          "type": "function"
        },
        "index": {
          "description": "Translate Figure to TikZ script",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "figuretikz",
          "normalized": "Figure-\u003eTikZ",
          "package": "HaTeX",
          "signature": "Figure-\u003eTikZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:figuretikz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe figure of a \u003cem\u003epath\u003c/em\u003e. A \u003cem\u003epath\u003c/em\u003e (in this context) means a function from an interval to\n   the plane. The image of such a function is what this function returns as a \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e.\n   An additional argument is needed to set the precision of the curve.\n\u003c/p\u003e\u003cp\u003eThe actual implementation builds a spline of degree one joining different points of the\n   image. Given that the interval is \u003cem\u003e(a,b)\u003c/em\u003e and the precision argument is &#949;, the points\n   in the spline will be \u003cem\u003ef(a)\u003c/em\u003e, \u003cem\u003ef(a+\u003c/em\u003e&#949;\u003cem\u003e)\u003c/em\u003e, \u003cem\u003ef(a+2\u003c/em\u003e&#949;\u003cem\u003e)\u003c/em\u003e, and so on, until reaching \u003cem\u003ef(b)\u003c/em\u003e.\n   The smaller is &#949;, the closer is the figure to the original image.\n\u003c/p\u003e\u003cp\u003eHere is an example with a logarithmic spiral.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"docfiles/tikz/spiral.png\"/\u003e\n\u003c/p\u003e\u003cpre\u003e spiral :: Figure\n spiral = LineWidth (Pt 2) $\n     pathImage 0.01 (0,4) $\n       \\t -\u003e ( a * exp t * cos (b*t)\n             , a * exp t * sin (b*t)\n               )\n   where\n     a = 0.1 ; b = 4\n\u003c/pre\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "pathImage",
          "package": "HaTeX",
          "signature": "Double-\u003e (Double, Double)-\u003e (Double -\u003e Point)-\u003e Figure",
          "type": "function"
        },
        "index": {
          "description": "The figure of path path in this context means function from an interval to the plane The image of such function is what this function returns as Figure An additional argument is needed to set the precision of the curve The actual implementation builds spline of degree one joining different points of the image Given that the interval is and the precision argument is the points in the spline will be and so on until reaching The smaller is the closer is the figure to the original image Here is an example with logarithmic spiral spiral Figure spiral LineWidth Pt pathImage exp cos exp sin where",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "pathImage",
          "normalized": "Double-\u003e(Double,Double)-\u003e(Double-\u003ePoint)-\u003eFigure",
          "package": "HaTeX",
          "partial": "Image",
          "signature": "Double-\u003e(Double,Double)-\u003e(Double-\u003ePoint)-\u003eFigure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:pathImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport the \u003ccode\u003e\u003ca\u003etikz\u003c/a\u003e\u003c/code\u003e package to use the functions exported\n   by this module. For example, adding this line to your\n   document preamble:\n\u003c/p\u003e\u003cpre\u003e usepackage [] tikz\n\u003c/pre\u003e",
          "module": "[\"Text.LaTeX.Packages.TikZ.Simple\",\"Text.LaTeX.Packages.TikZ\"]",
          "name": "tikz",
          "package": "HaTeX",
          "signature": "PackageName",
          "source": "src/Text-LaTeX-Packages-TikZ.html#tikz",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:tikz\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ.html#v:tikz\"]"
        },
        "index": {
          "description": "Import the tikz package to use the functions exported by this module For example adding this line to your document preamble usepackage tikz",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "tikz",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:tikz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a Ti\u003cem\u003ek\u003c/em\u003eZ script to a \u003ccode\u003e\u003ca\u003eLaTeX\u003c/a\u003e\u003c/code\u003e block.\n\u003c/p\u003e",
          "module": "[\"Text.LaTeX.Packages.TikZ.Simple\",\"Text.LaTeX.Packages.TikZ\"]",
          "name": "tikzpicture",
          "package": "HaTeX",
          "signature": "TikZ -\u003e l",
          "source": "src/Text-LaTeX-Packages-TikZ.html#tikzpicture",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:tikzpicture\",\"http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ.html#v:tikzpicture\"]"
        },
        "index": {
          "description": "Transform Ti script to LaTeX block",
          "hierarchy": "Text LaTeX Packages TikZ Simple",
          "module": "Text.LaTeX.Packages.TikZ.Simple",
          "name": "tikzpicture",
          "normalized": "TikZ-\u003ea",
          "package": "HaTeX",
          "signature": "TikZ-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Simple.html#v:tikzpicture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the syntax of a Ti\u003cem\u003ek\u003c/em\u003eZ script.\n\u003c/p\u003e\u003cp\u003eTo generate a Ti\u003cem\u003ek\u003c/em\u003eZ script, first create a \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e using\n data constructors, or alternatively, use a \u003ccode\u003ePathBuilder\u003c/code\u003e\n from the \u003ca\u003eText.LaTeX.Packages.TikZ.PathBuilder\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eOnce a \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e is created, use \u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e to render a picture\n from it. Use \u003ccode\u003e\u003ca\u003escope\u003c/a\u003e\u003c/code\u003e to apply some parameters to your picture,\n such line width or color.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Syntax",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the syntax of Ti script To generate Ti script first create TPath using data constructors or alternatively use PathBuilder from the Text.LaTeX.Packages.TikZ.PathBuilder module Once TPath is created use path to render picture from it Use scope to apply some parameters to your picture such line width or color",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Syntax",
          "package": "HaTeX",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent types of actions that can be performed\n   with a \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "ActionType",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#ActionType",
          "type": "data"
        },
        "index": {
          "description": "Different types of actions that can be performed with TPath See path for more information",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "ActionType",
          "package": "HaTeX",
          "partial": "Action Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:ActionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic colors.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Color",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Color.html#Color",
          "type": "data"
        },
        "index": {
          "description": "Basic colors",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Color",
          "package": "HaTeX",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "GridOption",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#GridOption",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "GridOption",
          "package": "HaTeX",
          "partial": "Grid Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:GridOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters to use in a \u003ccode\u003e\u003ca\u003escope\u003c/a\u003e\u003c/code\u003e to change how things\n   are rendered within that scope.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Parameter",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Parameter",
          "type": "data"
        },
        "index": {
          "description": "Parameters to use in scope to change how things are rendered within that scope",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Parameter",
          "package": "HaTeX",
          "partial": "Parameter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:Parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Step",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Step",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Step",
          "package": "HaTeX",
          "partial": "Step",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for TikZ paths. Every \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e has two fundamental points: the \u003cem\u003estarting point\u003c/em\u003e\n   and the \u003cem\u003elast point\u003c/em\u003e.\n   The starting point is set using the \u003ccode\u003e\u003ca\u003eStart\u003c/a\u003e\u003c/code\u003e constructor.\n   The last point then is modified by the other constructors.\n   Below a explanation of each one of them.\n   Note that both starting point and last point may coincide.\n   You can use the functions \u003ccode\u003e\u003ca\u003estartingPoint\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elastPoint\u003c/a\u003e\u003c/code\u003e to calculate them.\n   After creating a \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e, use \u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e to do something useful with it.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TPath",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
          "type": "data"
        },
        "index": {
          "description": "Type for TikZ paths Every TPath has two fundamental points the starting point and the last point The starting point is set using the Start constructor The last point then is modified by the other constructors Below explanation of each one of them Note that both starting point and last point may coincide You can use the functions startingPoint and lastPoint to calculate them After creating TPath use path to do something useful with it",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TPath",
          "package": "HaTeX",
          "partial": "TPath",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:TPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point in Ti\u003cem\u003ek\u003c/em\u003eZ.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TPoint",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPoint",
          "type": "data"
        },
        "index": {
          "description": "point in Ti",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TPoint",
          "package": "HaTeX",
          "partial": "TPoint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:TPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Ti\u003cem\u003ek\u003c/em\u003eZ script.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TikZ",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TikZ",
          "type": "data"
        },
        "index": {
          "description": "Ti script",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TikZ",
          "package": "HaTeX",
          "partial": "Tik",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:TikZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor models accepted by Ti\u003cem\u003ek\u003c/em\u003eZ.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TikZColor",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TikZColor",
          "type": "data"
        },
        "index": {
          "description": "Color models accepted by Ti",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TikZColor",
          "package": "HaTeX",
          "partial": "Tik ZColor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:TikZColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Word8",
          "package": "HaTeX",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Word8",
          "package": "HaTeX",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#t:Word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias of \u003ccode\u003e\u003ca\u003eLine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "(-\u003e-)",
          "package": "HaTeX",
          "signature": "TPath -\u003e TPoint -\u003e TPath",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#-%3E-",
          "type": "function"
        },
        "index": {
          "description": "Alias of Line",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "(-\u003e-) -\u003e-",
          "normalized": "TPath-\u003eTPoint-\u003eTPath",
          "package": "HaTeX",
          "signature": "TPath-\u003eTPoint-\u003eTPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:-45--62--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLet \u003ccode\u003ey = Circle x r\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eOperation:\u003c/em\u003e Define a circle with center at the last point\n of x and radius \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLast point:\u003c/em\u003e The last point of \u003ccode\u003ey\u003c/code\u003e is the same as the last\n point of \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Circle",
          "package": "HaTeX",
          "signature": "Circle TPath Double",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
          "type": "function"
        },
        "index": {
          "description": "Let Circle Operation Define circle with center at the last point of and radius Last point The last point of is the same as the last point of",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Circle",
          "package": "HaTeX",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Clip",
          "package": "HaTeX",
          "signature": "Clip",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#ActionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Clip",
          "package": "HaTeX",
          "partial": "Clip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Clip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLet \u003ccode\u003ey = Cycle x\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eOperation:\u003c/em\u003e Close a path with a line from the last point of \u003ccode\u003ex\u003c/code\u003e to\n the starting point of \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLast point:\u003c/em\u003e The last point of \u003ccode\u003ey\u003c/code\u003e is the starting point of \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Cycle",
          "package": "HaTeX",
          "signature": "Cycle TPath",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
          "type": "function"
        },
        "index": {
          "description": "Let Cycle Operation Close path with line from the last point of to the starting point of Last point The last point of is the starting point of",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Cycle",
          "package": "HaTeX",
          "partial": "Cycle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "DimStep",
          "package": "HaTeX",
          "signature": "DimStep Measure",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "DimStep",
          "package": "HaTeX",
          "partial": "Dim Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:DimStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Draw",
          "package": "HaTeX",
          "signature": "Draw",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#ActionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Draw",
          "package": "HaTeX",
          "partial": "Draw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLet \u003ccode\u003ey = Ellipse x r1 r2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eOperation:\u003c/em\u003e Define a ellipse with center at the last\n point of \u003ccode\u003ex\u003c/code\u003e, width the double of \u003ccode\u003er1\u003c/code\u003e and height\n the double of \u003ccode\u003er2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLast point:\u003c/em\u003e The last point of \u003ccode\u003ey\u003c/code\u003e is the same as the\n last point of \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Ellipse",
          "package": "HaTeX",
          "signature": "Ellipse TPath Double Double",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
          "type": "function"
        },
        "index": {
          "description": "Let Ellipse r1 r2 Operation Define ellipse with center at the last point of width the double of r1 and height the double of r2 Last point The last point of is the same as the last point of",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Ellipse",
          "package": "HaTeX",
          "partial": "Ellipse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Ellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Fill",
          "package": "HaTeX",
          "signature": "Fill",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#ActionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Fill",
          "package": "HaTeX",
          "partial": "Fill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Grid",
          "package": "HaTeX",
          "signature": "Grid TPath [GridOption] TPoint",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Grid",
          "normalized": "Grid TPath[GridOption]TPoint",
          "package": "HaTeX",
          "partial": "Grid",
          "signature": "Grid TPath[GridOption]TPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "GridStep",
          "package": "HaTeX",
          "signature": "GridStep Step",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#GridOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "GridStep",
          "package": "HaTeX",
          "partial": "Grid Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:GridStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLet \u003ccode\u003ey = Line x p\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eOperation:\u003c/em\u003e Extend the current path from the last point of \u003ccode\u003ex\u003c/code\u003e\n in a straight line to \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLast point:\u003c/em\u003e The last point of \u003ccode\u003ey\u003c/code\u003e is \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Line",
          "package": "HaTeX",
          "signature": "Line TPath TPoint",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
          "type": "function"
        },
        "index": {
          "description": "Let Line Operation Extend the current path from the last point of in straight line to Last point The last point of is",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Line",
          "package": "HaTeX",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLet \u003ccode\u003ey = Node x l\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eOperation:\u003c/em\u003e Set a text centered at the last point of \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLast point:\u003c/em\u003e The last point of \u003ccode\u003ey\u003c/code\u003e is the same as the last\n point of \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Node",
          "package": "HaTeX",
          "signature": "Node TPath LaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
          "type": "function"
        },
        "index": {
          "description": "Let Node Operation Set text centered at the last point of Last point The last point of is the same as the last point of",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Node",
          "package": "HaTeX",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "PointStep",
          "package": "HaTeX",
          "signature": "PointStep TPoint",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "PointStep",
          "package": "HaTeX",
          "partial": "Point Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:PointStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLet \u003ccode\u003ey = Rectangle x p\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eOperation:\u003c/em\u003e Define a rectangle using the last point of\n \u003ccode\u003ex\u003c/code\u003e as one corner and \u003ccode\u003ep\u003c/code\u003e as the another corner.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLast point:\u003c/em\u003e The last point of \u003ccode\u003ey\u003c/code\u003e is \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Rectangle",
          "package": "HaTeX",
          "signature": "Rectangle TPath TPoint",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
          "type": "function"
        },
        "index": {
          "description": "Let Rectangle Operation Define rectangle using the last point of as one corner and as the another corner Last point The last point of is",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Rectangle",
          "package": "HaTeX",
          "partial": "Rectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Shade",
          "package": "HaTeX",
          "signature": "Shade",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#ActionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Shade",
          "package": "HaTeX",
          "partial": "Shade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Shade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLet \u003ccode\u003ey = Start p\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eOperation:\u003c/em\u003e Set the starting point of a path.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLast point:\u003c/em\u003e The last point of \u003ccode\u003ey\u003c/code\u003e is \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Start",
          "package": "HaTeX",
          "signature": "Start TPoint",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#TPath",
          "type": "function"
        },
        "index": {
          "description": "Let Start Operation Set the starting point of path Last point The last point of is",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "Start",
          "package": "HaTeX",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:Start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TColor",
          "package": "HaTeX",
          "signature": "TColor TikZColor",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TColor",
          "package": "HaTeX",
          "partial": "TColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:TColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAngle is in degrees.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TRotate",
          "package": "HaTeX",
          "signature": "TRotate Double",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "Angle is in degrees",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TRotate",
          "package": "HaTeX",
          "partial": "TRotate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:TRotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TScale",
          "package": "HaTeX",
          "signature": "TScale Double",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TScale",
          "package": "HaTeX",
          "partial": "TScale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:TScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TWidth",
          "package": "HaTeX",
          "signature": "TWidth Measure",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "TWidth",
          "package": "HaTeX",
          "partial": "TWidth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:TWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "XYStep",
          "package": "HaTeX",
          "signature": "XYStep Double",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "XYStep",
          "package": "HaTeX",
          "partial": "XYStep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:XYStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003epath [Clip]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "clip",
          "package": "HaTeX",
          "signature": "TPath -\u003e TikZ",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#clip",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to path Clip",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "clip",
          "normalized": "TPath-\u003eTikZ",
          "package": "HaTeX",
          "signature": "TPath-\u003eTikZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:clip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003epath [Draw]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "draw",
          "package": "HaTeX",
          "signature": "TPath -\u003e TikZ",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#draw",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to path Draw",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "draw",
          "normalized": "TPath-\u003eTikZ",
          "package": "HaTeX",
          "signature": "TPath-\u003eTikZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust an empty script.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "emptytikz",
          "package": "HaTeX",
          "signature": "TikZ",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#emptytikz",
          "type": "function"
        },
        "index": {
          "description": "Just an empty script",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "emptytikz",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:emptytikz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003epath [Fill]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "fill",
          "package": "HaTeX",
          "signature": "TPath -\u003e TikZ",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#fill",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to path Fill",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "fill",
          "normalized": "TPath-\u003eTikZ",
          "package": "HaTeX",
          "signature": "TPath-\u003eTikZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003epath [Fill,Draw]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "filldraw",
          "package": "HaTeX",
          "signature": "TPath -\u003e TikZ",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#filldraw",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to path Fill Draw",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "filldraw",
          "normalized": "TPath-\u003eTikZ",
          "package": "HaTeX",
          "signature": "TPath-\u003eTikZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:filldraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the last point of a \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "lastPoint",
          "package": "HaTeX",
          "signature": "TPath -\u003e TPoint",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#lastPoint",
          "type": "function"
        },
        "index": {
          "description": "Calculate the last point of TPath",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "lastPoint",
          "normalized": "TPath-\u003eTPoint",
          "package": "HaTeX",
          "partial": "Point",
          "signature": "TPath-\u003eTPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:lastPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path can be used in different ways.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e: Just draw the path.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFill\u003c/a\u003e\u003c/code\u003e: Fill the area inside the path.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eClip\u003c/a\u003e\u003c/code\u003e: Clean everything outside the path.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eShade\u003c/a\u003e\u003c/code\u003e: Shade the area inside the path.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt is possible to stack different effects in the list.\n\u003c/p\u003e\u003cp\u003eExample of usage:\n\u003c/p\u003e\u003cpre\u003e path [Draw] $ Start (pointAtXY 0 0) -\u003e- pointAtXY 1 1\n\u003c/pre\u003e\u003cp\u003eMost common usages are exported as functions. See\n   \u003ccode\u003e\u003ca\u003edraw\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclip\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eshade\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efilldraw\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003eshadedraw\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "path",
          "package": "HaTeX",
          "signature": "[ActionType] -\u003e TPath -\u003e TikZ",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#path",
          "type": "function"
        },
        "index": {
          "description": "path can be used in different ways Draw Just draw the path Fill Fill the area inside the path Clip Clean everything outside the path Shade Shade the area inside the path It is possible to stack different effects in the list Example of usage path Draw Start pointAtXY pointAtXY Most common usages are exported as functions See draw fill clip shade filldraw and shadedraw",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "path",
          "normalized": "[ActionType]-\u003eTPath-\u003eTikZ",
          "package": "HaTeX",
          "signature": "[ActionType]-\u003eTPath-\u003eTikZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoint using \u003ccode\u003e\u003ca\u003eMeasure\u003c/a\u003e\u003c/code\u003es for coordinantes.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "pointAt",
          "package": "HaTeX",
          "signature": "Measure -\u003e Measure -\u003e TPoint",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#pointAt",
          "type": "function"
        },
        "index": {
          "description": "Point using Measure for coordinantes",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "pointAt",
          "normalized": "Measure-\u003eMeasure-\u003eTPoint",
          "package": "HaTeX",
          "partial": "At",
          "signature": "Measure-\u003eMeasure-\u003eTPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:pointAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoint using numbers as coordinates.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "pointAtXY",
          "package": "HaTeX",
          "signature": "Double -\u003e Double -\u003e TPoint",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#pointAtXY",
          "type": "function"
        },
        "index": {
          "description": "Point using numbers as coordinates",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "pointAtXY",
          "normalized": "Double-\u003eDouble-\u003eTPoint",
          "package": "HaTeX",
          "partial": "At XY",
          "signature": "Double-\u003eDouble-\u003eTPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:pointAtXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThree-dimensional point.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "pointAtXYZ",
          "package": "HaTeX",
          "signature": "Double -\u003e Double -\u003e Double -\u003e TPoint",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#pointAtXYZ",
          "type": "function"
        },
        "index": {
          "description": "Three-dimensional point",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "pointAtXYZ",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eTPoint",
          "package": "HaTeX",
          "partial": "At XYZ",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eTPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:pointAtXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a point relative to the previous.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "relPoint",
          "package": "HaTeX",
          "signature": "TPoint -\u003e TPoint",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#relPoint",
          "type": "function"
        },
        "index": {
          "description": "Makes point relative to the previous",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "relPoint",
          "normalized": "TPoint-\u003eTPoint",
          "package": "HaTeX",
          "partial": "Point",
          "signature": "TPoint-\u003eTPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:relPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "relPoint_",
          "package": "HaTeX",
          "signature": "TPoint -\u003e TPoint",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#relPoint_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "relPoint_",
          "normalized": "TPoint-\u003eTPoint",
          "package": "HaTeX",
          "partial": "Point",
          "signature": "TPoint-\u003eTPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:relPoint_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a scope to a Ti\u003cem\u003ek\u003c/em\u003eZ script.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "scope",
          "package": "HaTeX",
          "signature": "[Parameter] -\u003e TikZ -\u003e TikZ",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#scope",
          "type": "function"
        },
        "index": {
          "description": "Applies scope to Ti script",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "scope",
          "normalized": "[Parameter]-\u003eTikZ-\u003eTikZ",
          "package": "HaTeX",
          "signature": "[Parameter]-\u003eTikZ-\u003eTikZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:scope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003epath [Shade]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "shade",
          "package": "HaTeX",
          "signature": "TPath -\u003e TikZ",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#shade",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to path Shade",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "shade",
          "normalized": "TPath-\u003eTikZ",
          "package": "HaTeX",
          "signature": "TPath-\u003eTikZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:shade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003epath [Shade,Draw]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "shadedraw",
          "package": "HaTeX",
          "signature": "TPath -\u003e TikZ",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#shadedraw",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to path Shade Draw",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "shadedraw",
          "normalized": "TPath-\u003eTikZ",
          "package": "HaTeX",
          "signature": "TPath-\u003eTikZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:shadedraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the starting point of a \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "startingPoint",
          "package": "HaTeX",
          "signature": "TPath -\u003e TPoint",
          "source": "src/Text-LaTeX-Packages-TikZ-Syntax.html#startingPoint",
          "type": "function"
        },
        "index": {
          "description": "Calculate the starting point of TPath",
          "hierarchy": "Text LaTeX Packages TikZ Syntax",
          "module": "Text.LaTeX.Packages.TikZ.Syntax",
          "name": "startingPoint",
          "normalized": "TPath-\u003eTPoint",
          "package": "HaTeX",
          "partial": "Point",
          "signature": "TPath-\u003eTPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ-Syntax.html#v:startingPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTi\u003cem\u003ek\u003c/em\u003eZ ist \u003cem\u003ekein\u003c/em\u003e Zeichenprogramm.\n\u003c/p\u003e\u003cp\u003eTi\u003cem\u003ek\u003c/em\u003eZ is a frontend for PGF (Portable Graphics Format), a package for creating graphics\n using scripts embedded in a LaTeX document.\n\u003c/p\u003e\u003cp\u003eUsing this library you will be able to generate Ti\u003cem\u003ek\u003c/em\u003eZ scripts using Haskell functions.\n\u003c/p\u003e\u003cp\u003eThe interface given here is pretty close to the original Ti\u003cem\u003ek\u003c/em\u003eZ interface. Another\n layer of abstraction is given in \u003ca\u003eText.LaTeX.Packages.TikZ.Simple\u003c/a\u003e, module built\n from the entities exported here. Usually, one chooses one of the interfaces and\n work with it. However, if you want to use both of them, you will have to use\n qualified imports or you will get name clashes.\n\u003c/p\u003e\u003cp\u003eAlso, the module exported here, \u003ca\u003eText.LaTeX.Packages.TikZ.PathBuilder\u003c/a\u003e, provides\n an interface to create paths (see \u003ccode\u003e\u003ca\u003eTPath\u003c/a\u003e\u003c/code\u003e) using monads.\n\u003c/p\u003e\u003cp\u003eOnce you have generated a Ti\u003cem\u003ek\u003c/em\u003eZ script, use \u003ccode\u003e\u003ca\u003etikzpicture\u003c/a\u003e\u003c/code\u003e to include it in a LaTeX\n document.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.TikZ",
          "name": "TikZ",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-TikZ.html",
          "type": "module"
        },
        "index": {
          "description": "Ti ist kein Zeichenprogramm Ti is frontend for PGF Portable Graphics Format package for creating graphics using scripts embedded in LaTeX document Using this library you will be able to generate Ti scripts using Haskell functions The interface given here is pretty close to the original Ti interface Another layer of abstraction is given in Text.LaTeX.Packages.TikZ.Simple module built from the entities exported here Usually one chooses one of the interfaces and work with it However if you want to use both of them you will have to use qualified imports or you will get name clashes Also the module exported here Text.LaTeX.Packages.TikZ.PathBuilder provides an interface to create paths see TPath using monads Once you have generated Ti script use tikzpicture to include it in LaTeX document",
          "hierarchy": "Text LaTeX Packages TikZ",
          "module": "Text.LaTeX.Packages.TikZ",
          "name": "TikZ",
          "package": "HaTeX",
          "partial": "Tik",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-TikZ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTree interface using the \u003ccode\u003eqtree\u003c/code\u003e package.\n   An example of usage is provided in the \u003cem\u003eexamples\u003c/em\u003e directory of\n   the source distribution.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.Trees.Qtree",
          "name": "Qtree",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Trees-Qtree.html",
          "type": "module"
        },
        "index": {
          "description": "Tree interface using the qtree package An example of usage is provided in the examples directory of the source distribution",
          "hierarchy": "Text LaTeX Packages Trees Qtree",
          "module": "Text.LaTeX.Packages.Trees.Qtree",
          "name": "Qtree",
          "package": "HaTeX",
          "partial": "Qtree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees-Qtree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eqtree\u003c/a\u003e\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Trees.Qtree",
          "name": "qtree",
          "package": "HaTeX",
          "signature": "PackageName",
          "source": "src/Text-LaTeX-Packages-Trees-Qtree.html#qtree",
          "type": "function"
        },
        "index": {
          "description": "The qtree package",
          "hierarchy": "Text LaTeX Packages Trees Qtree",
          "module": "Text.LaTeX.Packages.Trees.Qtree",
          "name": "qtree",
          "package": "HaTeX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees-Qtree.html#v:qtree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function works as \u003ccode\u003e\u003ca\u003etree\u003c/a\u003e\u003c/code\u003e, but use \u003ccode\u003e\u003ca\u003erender\u003c/a\u003e\u003c/code\u003e as rendering function.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Trees.Qtree",
          "name": "rendertree",
          "package": "HaTeX",
          "signature": "Tree a -\u003e l",
          "source": "src/Text-LaTeX-Packages-Trees-Qtree.html#rendertree",
          "type": "function"
        },
        "index": {
          "description": "This function works as tree but use render as rendering function",
          "hierarchy": "Text LaTeX Packages Trees Qtree",
          "module": "Text.LaTeX.Packages.Trees.Qtree",
          "name": "rendertree",
          "normalized": "Tree a-\u003eb",
          "package": "HaTeX",
          "signature": "Tree a-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees-Qtree.html#v:rendertree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a function to \u003ccode\u003eLaTeX\u003c/code\u003e values, you can create a \u003ccode\u003eLaTeX\u003c/code\u003e tree from a\n   Haskell tree. The function specifies how to render the node values.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Trees.Qtree",
          "name": "tree",
          "package": "HaTeX",
          "signature": "(a -\u003e l) -\u003e Tree a -\u003e l",
          "source": "src/Text-LaTeX-Packages-Trees-Qtree.html#tree",
          "type": "function"
        },
        "index": {
          "description": "Given function to LaTeX values you can create LaTeX tree from Haskell tree The function specifies how to render the node values",
          "hierarchy": "Text LaTeX Packages Trees Qtree",
          "module": "Text.LaTeX.Packages.Trees.Qtree",
          "name": "tree",
          "normalized": "(a-\u003eb)-\u003eTree a-\u003eb",
          "package": "HaTeX",
          "signature": "(a-\u003el)-\u003eTree a-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees-Qtree.html#v:tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTree definition with some class instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX.Packages.Trees",
          "name": "Trees",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Trees.html",
          "type": "module"
        },
        "index": {
          "description": "Tree definition with some class instances",
          "hierarchy": "Text LaTeX Packages Trees",
          "module": "Text.LaTeX.Packages.Trees",
          "name": "Trees",
          "package": "HaTeX",
          "partial": "Trees",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTree datatype.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Trees",
          "name": "Tree",
          "package": "HaTeX",
          "source": "src/Text-LaTeX-Packages-Trees.html#Tree",
          "type": "data"
        },
        "index": {
          "description": "Tree datatype",
          "hierarchy": "Text LaTeX Packages Trees",
          "module": "Text.LaTeX.Packages.Trees",
          "name": "Tree",
          "package": "HaTeX",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeafs are non-empty.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Trees",
          "name": "Leaf",
          "package": "HaTeX",
          "signature": "Leaf a",
          "source": "src/Text-LaTeX-Packages-Trees.html#Tree",
          "type": "function"
        },
        "index": {
          "description": "Leafs are non-empty",
          "hierarchy": "Text LaTeX Packages Trees",
          "module": "Text.LaTeX.Packages.Trees",
          "name": "Leaf",
          "package": "HaTeX",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode values are optional.\n\u003c/p\u003e",
          "module": "Text.LaTeX.Packages.Trees",
          "name": "Node",
          "package": "HaTeX",
          "signature": "Node (Maybe a) [Tree a]",
          "source": "src/Text-LaTeX-Packages-Trees.html#Tree",
          "type": "function"
        },
        "index": {
          "description": "Node values are optional",
          "hierarchy": "Text LaTeX Packages Trees",
          "module": "Text.LaTeX.Packages.Trees",
          "name": "Node",
          "normalized": "Node(Maybe a)[Tree a]",
          "package": "HaTeX",
          "partial": "Node",
          "signature": "Node(Maybe a)[Tree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX-Packages-Trees.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a re-export of the Base module.\n   You may find it shorter to import. Below you can\n   also find a short overview of HaTeX.\n\u003c/p\u003e\u003cp\u003eHistorically, this module also exported the Packages\n   module. But, since it's more common to import the Base\n   module and, then, only the packages you need (instead\n   of all of them), this module has been upgraded supporting\n   it.\n\u003c/p\u003e\u003cp\u003eFor this reason, the module \u003ccode\u003eText.LaTeX.Packages\u003c/code\u003e no longer\n   exists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LaTeX",
          "name": "LaTeX",
          "package": "HaTeX",
          "source": "src/Text-LaTeX.html",
          "type": "module"
        },
        "index": {
          "description": "This module is re-export of the Base module You may find it shorter to import Below you can also find short overview of HaTeX Historically this module also exported the Packages module But since it more common to import the Base module and then only the packages you need instead of all of them this module has been upgraded supporting it For this reason the module Text.LaTeX.Packages no longer exists",
          "hierarchy": "Text LaTeX",
          "module": "Text.LaTeX",
          "name": "LaTeX",
          "package": "HaTeX",
          "partial": "La Te",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaTeX/docs/Text-LaTeX.html#"
      }
    }
  ]
]