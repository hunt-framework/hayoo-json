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
        "word": "language-python"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentation of the Python abstract syntax tree (AST). The representation is\n a superset of versions 2.x and 3.x of Python. In many cases they are \n identical. The documentation in this module indicates where they are\n different.\n\u003c/p\u003e\u003cp\u003eAll the data types have a (polymorphic) parameter which allows the AST to\n be annotated by an arbitrary type (for example source locations). Specialised\n instances of the types are provided for source spans. For example \u003ccode\u003eModule a\u003c/code\u003e is\n the type of modules, and \u003ccode\u003eModuleSpan\u003c/code\u003e is the type of modules annoted with source\n span information.\n\u003c/p\u003e\u003cp\u003eNote: there are cases where the AST is more liberal than the formal grammar\n of the language. Therefore some care must be taken when constructing\n Python programs using the raw AST. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Python.Common.AST",
          "name": "AST",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html",
          "type": "module"
        },
        "index": {
          "description": "Representation of the Python abstract syntax tree AST The representation is superset of versions and of Python In many cases they are identical The documentation in this module indicates where they are different All the data types have polymorphic parameter which allows the AST to be annotated by an arbitrary type for example source locations Specialised instances of the types are provided for source spans For example Module is the type of modules and ModuleSpan is the type of modules annoted with source span information Note there are cases where the AST is more liberal than the formal grammar of the language Therefore some care must be taken when constructing Python programs using the raw AST",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "AST",
          "package": "language-python",
          "partial": "AST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient access to annotations in annotated types. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Annotated",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#Annotated",
          "type": "class"
        },
        "index": {
          "description": "Convenient access to annotations in annotated types",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Annotated",
          "package": "language-python",
          "partial": "Annotated",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:Annotated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArguments to function calls, class declarations and decorators.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Argument",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#Argument",
          "type": "data"
        },
        "index": {
          "description": "Arguments to function calls class declarations and decorators",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Argument",
          "package": "language-python",
          "partial": "Argument",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:Argument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "ArgumentSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#ArgumentSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ArgumentSpan",
          "package": "language-python",
          "partial": "Argument Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:ArgumentSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAugmented assignment operators.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "AssignOp",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#AssignOp",
          "type": "data"
        },
        "index": {
          "description": "Augmented assignment operators",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "AssignOp",
          "package": "language-python",
          "partial": "Assign Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:AssignOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "AssignOpSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#AssignOpSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "AssignOpSpan",
          "package": "language-python",
          "partial": "Assign Op Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:AssignOpSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComprehension 'for' component. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "CompFor",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#CompFor",
          "type": "data"
        },
        "index": {
          "description": "Comprehension for component",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "CompFor",
          "package": "language-python",
          "partial": "Comp For",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:CompFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "CompForSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#CompForSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "CompForSpan",
          "package": "language-python",
          "partial": "Comp For Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:CompForSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComprehension guard. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "CompIf",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#CompIf",
          "type": "data"
        },
        "index": {
          "description": "Comprehension guard",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "CompIf",
          "package": "language-python",
          "partial": "Comp If",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:CompIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "CompIfSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#CompIfSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "CompIfSpan",
          "package": "language-python",
          "partial": "Comp If Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:CompIfSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComprehension iterator (either a 'for' or an 'if'). \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "CompIter",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#CompIter",
          "type": "data"
        },
        "index": {
          "description": "Comprehension iterator either for or an if",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "CompIter",
          "package": "language-python",
          "partial": "Comp Iter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:CompIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "CompIterSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#CompIterSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "CompIterSpan",
          "package": "language-python",
          "partial": "Comp Iter Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:CompIterSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComprehension. In version 3.x this can be used for lists, sets, dictionaries and generators. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Comprehension",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#Comprehension",
          "type": "data"
        },
        "index": {
          "description": "Comprehension In version this can be used for lists sets dictionaries and generators",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Comprehension",
          "package": "language-python",
          "partial": "Comprehension",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:Comprehension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "ComprehensionSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#ComprehensionSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ComprehensionSpan",
          "package": "language-python",
          "partial": "Comprehension Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:ComprehensionSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecorator.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Decorator",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#Decorator",
          "type": "data"
        },
        "index": {
          "description": "Decorator",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Decorator",
          "package": "language-python",
          "partial": "Decorator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:Decorator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "DecoratorSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#DecoratorSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "DecoratorSpan",
          "package": "language-python",
          "partial": "Decorator Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:DecoratorSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compound name constructed with the dot operator.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "DottedName",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#DottedName",
          "type": "type"
        },
        "index": {
          "description": "compound name constructed with the dot operator",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "DottedName",
          "package": "language-python",
          "partial": "Dotted Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:DottedName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "DottedNameSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#DottedNameSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "DottedNameSpan",
          "package": "language-python",
          "partial": "Dotted Name Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:DottedNameSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException clause. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ExceptClause",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#ExceptClause",
          "type": "data"
        },
        "index": {
          "description": "Exception clause",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ExceptClause",
          "package": "language-python",
          "partial": "Except Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:ExceptClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "ExceptClauseSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#ExceptClauseSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ExceptClauseSpan",
          "package": "language-python",
          "partial": "Except Clause Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:ExceptClauseSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpressions.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Version 2.6 \u003ca\u003ehttp://www.python.org/doc/2.6/reference/expressions.html\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Version 3.1 \u003ca\u003ehttp://www.python.org/doc/3.1/reference/expressions.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Expr",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "data"
        },
        "index": {
          "description": "Expressions Version http www.python.org doc reference expressions.html Version http www.python.org doc reference expressions.html",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Expr",
          "package": "language-python",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "ExprSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#ExprSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ExprSpan",
          "package": "language-python",
          "partial": "Expr Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:ExprSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn entity imported using the 'from ... import' construct.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Version 2.6 \u003ca\u003ehttp://www.python.org/doc/2.6/reference/simple_stmts.html#the-import-statement\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Version 3.1 \u003ca\u003ehttp://www.python.org/doc/3.1/reference/simple_stmts.html#the-import-statement\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Language.Python.Common.AST",
          "name": "FromItem",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#FromItem",
          "type": "data"
        },
        "index": {
          "description": "An entity imported using the from import construct Version http www.python.org doc reference simple stmts.html the-import-statement Version http www.python.org doc reference simple stmts.html the-import-statement",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "FromItem",
          "package": "language-python",
          "partial": "From Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:FromItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "FromItemSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#FromItemSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "FromItemSpan",
          "package": "language-python",
          "partial": "From Item Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:FromItemSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eItems imported using the 'from ... import' construct.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "FromItems",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#FromItems",
          "type": "data"
        },
        "index": {
          "description": "Items imported using the from import construct",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "FromItems",
          "package": "language-python",
          "partial": "From Items",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:FromItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "FromItemsSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#FromItemsSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "FromItemsSpan",
          "package": "language-python",
          "partial": "From Items Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:FromItemsSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException handler. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Handler",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#Handler",
          "type": "data"
        },
        "index": {
          "description": "Exception handler",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Handler",
          "package": "language-python",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "HandlerSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#HandlerSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "HandlerSpan",
          "package": "language-python",
          "partial": "Handler Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:HandlerSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifier.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Ident",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#Ident",
          "type": "data"
        },
        "index": {
          "description": "Identifier",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Ident",
          "package": "language-python",
          "partial": "Ident",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:Ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "IdentSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#IdentSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "IdentSpan",
          "package": "language-python",
          "partial": "Ident Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:IdentSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn entity imported using the 'import' keyword.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Version 2.6 \u003ca\u003ehttp://www.python.org/doc/2.6/reference/simple_stmts.html#the-import-statement\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Version 3.1 \u003ca\u003ehttp://www.python.org/doc/3.1/reference/simple_stmts.html#the-import-statement\u003c/a\u003e \n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ImportItem",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#ImportItem",
          "type": "data"
        },
        "index": {
          "description": "An entity imported using the import keyword Version http www.python.org doc reference simple stmts.html the-import-statement Version http www.python.org doc reference simple stmts.html the-import-statement",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ImportItem",
          "package": "language-python",
          "partial": "Import Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:ImportItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "ImportItemSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#ImportItemSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ImportItemSpan",
          "package": "language-python",
          "partial": "Import Item Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:ImportItemSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reference to the module to import from using the 'from ... import' construct.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ImportRelative",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#ImportRelative",
          "type": "data"
        },
        "index": {
          "description": "reference to the module to import from using the from import construct",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ImportRelative",
          "package": "language-python",
          "partial": "Import Relative",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:ImportRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "ImportRelativeSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#ImportRelativeSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ImportRelativeSpan",
          "package": "language-python",
          "partial": "Import Relative Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:ImportRelativeSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA module (Python source file). \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Version 2.6 \u003ca\u003ehttp://www.python.org/doc/2.6/reference/toplevel_components.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Version 3.1 \u003ca\u003ehttp://www.python.org/doc/3.1/reference/toplevel_components.html\u003c/a\u003e \n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Module",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#Module",
          "type": "newtype"
        },
        "index": {
          "description": "module Python source file Version http www.python.org doc reference toplevel components.html Version http www.python.org doc reference toplevel components.html",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Module",
          "package": "language-python",
          "partial": "Module",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "ModuleSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#ModuleSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ModuleSpan",
          "package": "language-python",
          "partial": "Module Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:ModuleSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperators.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Op",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "data"
        },
        "index": {
          "description": "Operators",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Op",
          "package": "language-python",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "OpSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#OpSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "OpSpan",
          "package": "language-python",
          "partial": "Op Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:OpSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTuple unpack parameter. \u003cem\u003eVersion 2 only\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ParamTuple",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#ParamTuple",
          "type": "data"
        },
        "index": {
          "description": "Tuple unpack parameter Version only",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ParamTuple",
          "package": "language-python",
          "partial": "Param Tuple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:ParamTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "ParamTupleSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#ParamTupleSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ParamTupleSpan",
          "package": "language-python",
          "partial": "Param Tuple Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:ParamTupleSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormal parameter of function definitions and lambda expressions.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Version 2.6: \n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/2.6/reference/compound_stmts.html#function-definitions\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/2.6/reference/expressions.html#calls\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Version 3.1: \n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/3.1/reference/compound_stmts.html#function-definitions\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/3.1/reference/expressions.html#calls\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Parameter",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#Parameter",
          "type": "data"
        },
        "index": {
          "description": "Formal parameter of function definitions and lambda expressions Version http www.python.org doc reference compound stmts.html function-definitions http www.python.org doc reference expressions.html calls Version http www.python.org doc reference compound stmts.html function-definitions http www.python.org doc reference expressions.html calls",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Parameter",
          "package": "language-python",
          "partial": "Parameter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:Parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "ParameterSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#ParameterSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ParameterSpan",
          "package": "language-python",
          "partial": "Parameter Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:ParameterSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe argument for a \u003ccode\u003eraise\u003c/code\u003e statement.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "RaiseExpr",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#RaiseExpr",
          "type": "data"
        },
        "index": {
          "description": "The argument for raise statement",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "RaiseExpr",
          "package": "language-python",
          "partial": "Raise Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:RaiseExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "RaiseExprSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#RaiseExprSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "RaiseExprSpan",
          "package": "language-python",
          "partial": "Raise Expr Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:RaiseExprSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSlice compenent.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Slice",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#Slice",
          "type": "data"
        },
        "index": {
          "description": "Slice compenent",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Slice",
          "package": "language-python",
          "partial": "Slice",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:Slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "SliceSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#SliceSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "SliceSpan",
          "package": "language-python",
          "partial": "Slice Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:SliceSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatements.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Simple statements:\n\u003c/li\u003e\u003cli\u003e Version 2.6 \u003ca\u003ehttp://www.python.org/doc/2.6/reference/simple_stmts.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Version 3.1 \u003ca\u003ehttp://www.python.org/doc/3.1/reference/simple_stmts.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Compound statements:\n\u003c/li\u003e\u003cli\u003e Version 2.6 \u003ca\u003ehttp://www.python.org/doc/2.6/reference/compound_stmts.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Version 3.1 \u003ca\u003ehttp://www.python.org/doc/3.1/reference/compound_stmts.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Statement",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "data"
        },
        "index": {
          "description": "Statements Simple statements Version http www.python.org doc reference simple stmts.html Version http www.python.org doc reference simple stmts.html Compound statements Version http www.python.org doc reference compound stmts.html Version http www.python.org doc reference compound stmts.html",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Statement",
          "package": "language-python",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "StatementSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#StatementSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "StatementSpan",
          "package": "language-python",
          "partial": "Statement Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:StatementSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA block of statements. A suite is a group of statements controlled by a clause, \n for example, the body of a loop. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Version 2.6 \u003ca\u003ehttp://www.python.org/doc/2.6/reference/compound_stmts.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Version 3.1 \u003ca\u003ehttp://www.python.org/doc/3.1/reference/compound_stmts.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Suite",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#Suite",
          "type": "type"
        },
        "index": {
          "description": "block of statements suite is group of statements controlled by clause for example the body of loop Version http www.python.org doc reference compound stmts.html Version http www.python.org doc reference compound stmts.html",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Suite",
          "package": "language-python",
          "partial": "Suite",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:Suite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "SuiteSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-AST.html#SuiteSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "SuiteSpan",
          "package": "language-python",
          "partial": "Suite Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#t:SuiteSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'and'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "And",
          "package": "language-python",
          "signature": "And",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "description": "and",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "And",
          "package": "language-python",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdinary argument expression.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ArgExpr",
          "package": "language-python",
          "signature": "ArgExpr",
          "source": "src/Language-Python-Common-AST.html#Argument",
          "type": "function"
        },
        "index": {
          "description": "Ordinary argument expression",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ArgExpr",
          "package": "language-python",
          "partial": "Arg Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ArgExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword argument.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ArgKeyword",
          "package": "language-python",
          "signature": "ArgKeyword",
          "source": "src/Language-Python-Common-AST.html#Argument",
          "type": "function"
        },
        "index": {
          "description": "Keyword argument",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ArgKeyword",
          "package": "language-python",
          "partial": "Arg Keyword",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ArgKeyword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExcess keyword argument.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ArgVarArgsKeyword",
          "package": "language-python",
          "signature": "ArgVarArgsKeyword",
          "source": "src/Language-Python-Common-AST.html#Argument",
          "type": "function"
        },
        "index": {
          "description": "Excess keyword argument",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ArgVarArgsKeyword",
          "package": "language-python",
          "partial": "Arg Var Args Keyword",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ArgVarArgsKeyword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExcess positional argument.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ArgVarArgsPos",
          "package": "language-python",
          "signature": "ArgVarArgsPos",
          "source": "src/Language-Python-Common-AST.html#Argument",
          "type": "function"
        },
        "index": {
          "description": "Excess positional argument",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ArgVarArgsPos",
          "package": "language-python",
          "partial": "Arg Var Args Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ArgVarArgsPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssertion. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Assert",
          "package": "language-python",
          "signature": "Assert",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Assertion",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Assert",
          "package": "language-python",
          "partial": "Assert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssignment statement. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Assign",
          "package": "language-python",
          "signature": "Assign",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Assignment statement",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Assign",
          "package": "language-python",
          "partial": "Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAugmented assignment statement. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "AugmentedAssign",
          "package": "language-python",
          "signature": "AugmentedAssign",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Augmented assignment statement",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "AugmentedAssign",
          "package": "language-python",
          "partial": "Augmented Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:AugmentedAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'&='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "BinAndAssign",
          "package": "language-python",
          "signature": "BinAndAssign",
          "source": "src/Language-Python-Common-AST.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "BinAndAssign",
          "package": "language-python",
          "partial": "Bin And Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:BinAndAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'|='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "BinOrAssign",
          "package": "language-python",
          "signature": "BinOrAssign",
          "source": "src/Language-Python-Common-AST.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "BinOrAssign",
          "package": "language-python",
          "partial": "Bin Or Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:BinOrAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'^=' \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "BinXorAssign",
          "package": "language-python",
          "signature": "BinXorAssign",
          "source": "src/Language-Python-Common-AST.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "BinXorAssign",
          "package": "language-python",
          "partial": "Bin Xor Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:BinXorAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'&'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "BinaryAnd",
          "package": "language-python",
          "signature": "BinaryAnd",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "BinaryAnd",
          "package": "language-python",
          "partial": "Binary And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:BinaryAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary operator application.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "BinaryOp",
          "package": "language-python",
          "signature": "BinaryOp",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Binary operator application",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "BinaryOp",
          "package": "language-python",
          "partial": "Binary Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:BinaryOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'|'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "BinaryOr",
          "package": "language-python",
          "signature": "BinaryOr",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "BinaryOr",
          "package": "language-python",
          "partial": "Binary Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:BinaryOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral boolean.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Bool",
          "package": "language-python",
          "signature": "Bool",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Literal boolean",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Bool",
          "package": "language-python",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak statement (may only occur syntactically nested in a for or while loop, but not nested in a function or class definition within that loop). \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Break",
          "package": "language-python",
          "signature": "Break",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Break statement may only occur syntactically nested in for or while loop but not nested in function or class definition within that loop",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Break",
          "package": "language-python",
          "partial": "Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral byte string.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ByteStrings",
          "package": "language-python",
          "signature": "ByteStrings",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Literal byte string",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ByteStrings",
          "package": "language-python",
          "partial": "Byte Strings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ByteStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction call. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Call",
          "package": "language-python",
          "signature": "Call",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Function call",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Call",
          "package": "language-python",
          "partial": "Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass definition. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Class",
          "package": "language-python",
          "signature": "Class",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Class definition",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Class",
          "package": "language-python",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "CompFor",
          "package": "language-python",
          "signature": "CompFor",
          "source": "src/Language-Python-Common-AST.html#CompFor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "CompFor",
          "package": "language-python",
          "partial": "Comp For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:CompFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "CompIf",
          "package": "language-python",
          "signature": "CompIf",
          "source": "src/Language-Python-Common-AST.html#CompIf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "CompIf",
          "package": "language-python",
          "partial": "Comp If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:CompIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "Comprehension",
          "package": "language-python",
          "signature": "Comprehension",
          "source": "src/Language-Python-Common-AST.html#Comprehension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Comprehension",
          "package": "language-python",
          "partial": "Comprehension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Comprehension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional expresison. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "CondExpr",
          "package": "language-python",
          "signature": "CondExpr",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Conditional expresison",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "CondExpr",
          "package": "language-python",
          "partial": "Cond Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:CondExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional statement (if-elif-else). \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Conditional",
          "package": "language-python",
          "signature": "Conditional",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Conditional statement if-elif-else",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Conditional",
          "package": "language-python",
          "partial": "Conditional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Conditional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinue statement (may only occur syntactically nested in a for or while loop, but not nested in a function or class definition or finally clause within that loop). \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Continue",
          "package": "language-python",
          "signature": "Continue",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Continue statement may only occur syntactically nested in for or while loop but not nested in function or class definition or finally clause within that loop",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Continue",
          "package": "language-python",
          "partial": "Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecorated definition of a function or class.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Decorated",
          "package": "language-python",
          "signature": "Decorated",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Decorated definition of function or class",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Decorated",
          "package": "language-python",
          "partial": "Decorated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Decorated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "Decorator",
          "package": "language-python",
          "signature": "Decorator",
          "source": "src/Language-Python-Common-AST.html#Decorator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Decorator",
          "package": "language-python",
          "partial": "Decorator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Decorator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDel statement (delete). \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Delete",
          "package": "language-python",
          "signature": "Delete",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Del statement delete",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Delete",
          "package": "language-python",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDictionary comprehension. \u003cem\u003eVersion 3 only\u003c/em\u003e. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "DictComp",
          "package": "language-python",
          "signature": "DictComp",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Dictionary comprehension Version only",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "DictComp",
          "package": "language-python",
          "partial": "Dict Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:DictComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDictionary. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Dictionary",
          "package": "language-python",
          "signature": "Dictionary",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Dictionary",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Dictionary",
          "package": "language-python",
          "partial": "Dictionary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Dictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'/='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "DivAssign",
          "package": "language-python",
          "signature": "DivAssign",
          "source": "src/Language-Python-Common-AST.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "DivAssign",
          "package": "language-python",
          "partial": "Div Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:DivAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'/'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Divide",
          "package": "language-python",
          "signature": "Divide",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Divide",
          "package": "language-python",
          "partial": "Divide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Divide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'.'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Dot",
          "package": "language-python",
          "signature": "Dot",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Dot",
          "package": "language-python",
          "partial": "Dot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEllipsis '...'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Ellipsis",
          "package": "language-python",
          "signature": "Ellipsis",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Ellipsis",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Ellipsis",
          "package": "language-python",
          "partial": "Ellipsis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Ellipsis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarker for the end of positional parameters (not a parameter itself).\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "EndPositional",
          "package": "language-python",
          "signature": "EndPositional",
          "source": "src/Language-Python-Common-AST.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "Marker for the end of positional parameters not parameter itself",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "EndPositional",
          "package": "language-python",
          "partial": "End Positional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:EndPositional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'=='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Equality",
          "package": "language-python",
          "signature": "Equality",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Equality",
          "package": "language-python",
          "partial": "Equality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Equality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "ExceptClause",
          "package": "language-python",
          "signature": "ExceptClause",
          "source": "src/Language-Python-Common-AST.html#ExceptClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ExceptClause",
          "package": "language-python",
          "partial": "Except Clause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ExceptClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExec statement. \u003cem\u003eVersion 2 only\u003c/em\u003e. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Exec",
          "package": "language-python",
          "signature": "Exec",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Exec statement Version only",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Exec",
          "package": "language-python",
          "partial": "Exec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'**'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Exponent",
          "package": "language-python",
          "signature": "Exponent",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Exponent",
          "package": "language-python",
          "partial": "Exponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Exponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral floating point number.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Float",
          "package": "language-python",
          "signature": "Float",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Literal floating point number",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Float",
          "package": "language-python",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'//='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "FloorDivAssign",
          "package": "language-python",
          "signature": "FloorDivAssign",
          "source": "src/Language-Python-Common-AST.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "FloorDivAssign",
          "package": "language-python",
          "partial": "Floor Div Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:FloorDivAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'//'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "FloorDivide",
          "package": "language-python",
          "signature": "FloorDivide",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "FloorDivide",
          "package": "language-python",
          "partial": "Floor Divide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:FloorDivide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor loop. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "For",
          "package": "language-python",
          "signature": "For",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "For loop",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "For",
          "package": "language-python",
          "partial": "For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:For"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom ... import statement.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "FromImport",
          "package": "language-python",
          "signature": "FromImport",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "From import statement",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "FromImport",
          "package": "language-python",
          "partial": "From Import",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:FromImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "FromItem",
          "package": "language-python",
          "signature": "FromItem",
          "source": "src/Language-Python-Common-AST.html#FromItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "FromItem",
          "package": "language-python",
          "partial": "From Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:FromItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport a specific list of items from the module.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "FromItems",
          "package": "language-python",
          "signature": "FromItems",
          "source": "src/Language-Python-Common-AST.html#FromItems",
          "type": "function"
        },
        "index": {
          "description": "Import specific list of items from the module",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "FromItems",
          "package": "language-python",
          "partial": "From Items",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:FromItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction definition. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Fun",
          "package": "language-python",
          "signature": "Fun",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Function definition",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Fun",
          "package": "language-python",
          "partial": "Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerator. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Generator",
          "package": "language-python",
          "signature": "Generator",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Generator",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Generator",
          "package": "language-python",
          "partial": "Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal declaration. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Global",
          "package": "language-python",
          "signature": "Global",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Global declaration",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Global",
          "package": "language-python",
          "partial": "Global",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Global"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'\u003e'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "GreaterThan",
          "package": "language-python",
          "signature": "GreaterThan",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "GreaterThan",
          "package": "language-python",
          "partial": "Greater Than",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:GreaterThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'\u003e='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "GreaterThanEquals",
          "package": "language-python",
          "signature": "GreaterThanEquals",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "GreaterThanEquals",
          "package": "language-python",
          "partial": "Greater Than Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:GreaterThanEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "Handler",
          "package": "language-python",
          "signature": "Handler",
          "source": "src/Language-Python-Common-AST.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Handler",
          "package": "language-python",
          "partial": "Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "Ident",
          "package": "language-python",
          "signature": "Ident",
          "source": "src/Language-Python-Common-AST.html#Ident",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Ident",
          "package": "language-python",
          "partial": "Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral imaginary number.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Imaginary",
          "package": "language-python",
          "signature": "Imaginary",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Literal imaginary number",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Imaginary",
          "package": "language-python",
          "partial": "Imaginary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Imaginary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport statement.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Import",
          "package": "language-python",
          "signature": "Import",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Import statement",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Import",
          "package": "language-python",
          "partial": "Import",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Import"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport everything exported from the module.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ImportEverything",
          "package": "language-python",
          "signature": "ImportEverything",
          "source": "src/Language-Python-Common-AST.html#FromItems",
          "type": "function"
        },
        "index": {
          "description": "Import everything exported from the module",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ImportEverything",
          "package": "language-python",
          "partial": "Import Everything",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ImportEverything"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "ImportItem",
          "package": "language-python",
          "signature": "ImportItem",
          "source": "src/Language-Python-Common-AST.html#ImportItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ImportItem",
          "package": "language-python",
          "partial": "Import Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ImportItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "ImportRelative",
          "package": "language-python",
          "signature": "ImportRelative",
          "source": "src/Language-Python-Common-AST.html#ImportRelative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ImportRelative",
          "package": "language-python",
          "partial": "Import Relative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ImportRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'in'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "In",
          "package": "language-python",
          "signature": "In",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "description": "in",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "In",
          "package": "language-python",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral integer.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Int",
          "package": "language-python",
          "signature": "Int",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Literal integer",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Int",
          "package": "language-python",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'~' (bitwise inversion of its integer argument)\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Invert",
          "package": "language-python",
          "signature": "Invert",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "description": "bitwise inversion of its integer argument",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Invert",
          "package": "language-python",
          "partial": "Invert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'is'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Is",
          "package": "language-python",
          "signature": "Is",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "description": "is",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Is",
          "package": "language-python",
          "partial": "Is",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Is"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'is not'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "IsNot",
          "package": "language-python",
          "signature": "IsNot",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "description": "is not",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "IsNot",
          "package": "language-python",
          "partial": "Is Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:IsNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "IterFor",
          "package": "language-python",
          "signature": "IterFor",
          "source": "src/Language-Python-Common-AST.html#CompIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "IterFor",
          "package": "language-python",
          "partial": "Iter For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:IterFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "IterIf",
          "package": "language-python",
          "signature": "IterIf",
          "source": "src/Language-Python-Common-AST.html#CompIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "IterIf",
          "package": "language-python",
          "partial": "Iter If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:IterIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnonymous function definition (lambda). \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Lambda",
          "package": "language-python",
          "signature": "Lambda",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Anonymous function definition lambda",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Lambda",
          "package": "language-python",
          "partial": "Lambda",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Lambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'\u003c\u003c='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "LeftShiftAssign",
          "package": "language-python",
          "signature": "LeftShiftAssign",
          "source": "src/Language-Python-Common-AST.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "LeftShiftAssign",
          "package": "language-python",
          "partial": "Left Shift Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:LeftShiftAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'\u003c'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "LessThan",
          "package": "language-python",
          "signature": "LessThan",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "LessThan",
          "package": "language-python",
          "partial": "Less Than",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:LessThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'\u003c='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "LessThanEquals",
          "package": "language-python",
          "signature": "LessThanEquals",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "LessThanEquals",
          "package": "language-python",
          "partial": "Less Than Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:LessThanEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "List",
          "package": "language-python",
          "signature": "List",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "List",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "List",
          "package": "language-python",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList comprehension. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ListComp",
          "package": "language-python",
          "signature": "ListComp",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "List comprehension",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ListComp",
          "package": "language-python",
          "partial": "List Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ListComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLong literal integer. \u003cem\u003eVersion 2 only\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "LongInt",
          "package": "language-python",
          "signature": "LongInt",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Long literal integer Version only",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "LongInt",
          "package": "language-python",
          "partial": "Long Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:LongInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'-'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Minus",
          "package": "language-python",
          "signature": "Minus",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Minus",
          "package": "language-python",
          "partial": "Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'-='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "MinusAssign",
          "package": "language-python",
          "signature": "MinusAssign",
          "source": "src/Language-Python-Common-AST.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "MinusAssign",
          "package": "language-python",
          "partial": "Minus Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:MinusAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'%='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ModAssign",
          "package": "language-python",
          "signature": "ModAssign",
          "source": "src/Language-Python-Common-AST.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ModAssign",
          "package": "language-python",
          "partial": "Mod Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ModAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA module is just a sequence of top-level statements.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Module",
          "package": "language-python",
          "signature": "Module [Statement annot]",
          "source": "src/Language-Python-Common-AST.html#Module",
          "type": "function"
        },
        "index": {
          "description": "module is just sequence of top-level statements",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Module",
          "normalized": "Module[Statement a]",
          "package": "language-python",
          "partial": "Module",
          "signature": "Module[Statement annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'%'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Modulo",
          "package": "language-python",
          "signature": "Modulo",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Modulo",
          "package": "language-python",
          "partial": "Modulo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Modulo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'*='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "MultAssign",
          "package": "language-python",
          "signature": "MultAssign",
          "source": "src/Language-Python-Common-AST.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "MultAssign",
          "package": "language-python",
          "partial": "Mult Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:MultAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'*'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Multiply",
          "package": "language-python",
          "signature": "Multiply",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Multiply",
          "package": "language-python",
          "partial": "Multiply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Multiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNonlocal declaration. \u003cem\u003eVersion 3.x only\u003c/em\u003e. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "NonLocal",
          "package": "language-python",
          "signature": "NonLocal",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Nonlocal declaration Version only",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "NonLocal",
          "package": "language-python",
          "partial": "Non Local",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:NonLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral 'None' value.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "None",
          "package": "language-python",
          "signature": "None",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Literal None value",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "None",
          "package": "language-python",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'not'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Not",
          "package": "language-python",
          "signature": "Not",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "description": "not",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Not",
          "package": "language-python",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'!='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "NotEquals",
          "package": "language-python",
          "signature": "NotEquals",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "NotEquals",
          "package": "language-python",
          "partial": "Not Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:NotEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'\u003ca/\u003e'. Version 2 only.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "NotEqualsV2",
          "package": "language-python",
          "signature": "NotEqualsV2",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "description": "Version only",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "NotEqualsV2",
          "package": "language-python",
          "partial": "Not Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:NotEqualsV2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'not in'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "NotIn",
          "package": "language-python",
          "signature": "NotIn",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "description": "not in",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "NotIn",
          "package": "language-python",
          "partial": "Not In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:NotIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'or'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Or",
          "package": "language-python",
          "signature": "Or",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "description": "or",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Or",
          "package": "language-python",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdinary named parameter.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Param",
          "package": "language-python",
          "signature": "Param",
          "source": "src/Language-Python-Common-AST.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "Ordinary named parameter",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Param",
          "package": "language-python",
          "partial": "Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA (possibly nested) tuple parameter.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ParamTuple",
          "package": "language-python",
          "signature": "ParamTuple",
          "source": "src/Language-Python-Common-AST.html#ParamTuple",
          "type": "function"
        },
        "index": {
          "description": "possibly nested tuple parameter",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ParamTuple",
          "package": "language-python",
          "partial": "Param Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ParamTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable name.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ParamTupleName",
          "package": "language-python",
          "signature": "ParamTupleName",
          "source": "src/Language-Python-Common-AST.html#ParamTuple",
          "type": "function"
        },
        "index": {
          "description": "variable name",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ParamTupleName",
          "package": "language-python",
          "partial": "Param Tuple Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ParamTupleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParenthesised expression.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Paren",
          "package": "language-python",
          "signature": "Paren",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Parenthesised expression",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Paren",
          "package": "language-python",
          "partial": "Paren",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Paren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass statement (null operation). \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Pass",
          "package": "language-python",
          "signature": "Pass",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Pass statement null operation",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Pass",
          "package": "language-python",
          "partial": "Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'+'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Plus",
          "package": "language-python",
          "signature": "Plus",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Plus",
          "package": "language-python",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'+='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "PlusAssign",
          "package": "language-python",
          "signature": "PlusAssign",
          "source": "src/Language-Python-Common-AST.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "PlusAssign",
          "package": "language-python",
          "partial": "Plus Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:PlusAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'*='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "PowAssign",
          "package": "language-python",
          "signature": "PowAssign",
          "source": "src/Language-Python-Common-AST.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "PowAssign",
          "package": "language-python",
          "partial": "Pow Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:PowAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint statement. \u003cem\u003eVersion 2 only\u003c/em\u003e. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Print",
          "package": "language-python",
          "signature": "Print",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Print statement Version only",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Print",
          "package": "language-python",
          "partial": "Print",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise statement (exception throwing). \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Raise",
          "package": "language-python",
          "signature": "Raise",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Raise statement exception throwing",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Raise",
          "package": "language-python",
          "partial": "Raise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Raise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eVersion 2 only\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "RaiseV2",
          "package": "language-python",
          "signature": "RaiseV2 (Maybe (Expr annot, Maybe (Expr annot, Maybe (Expr annot))))",
          "source": "src/Language-Python-Common-AST.html#RaiseExpr",
          "type": "function"
        },
        "index": {
          "description": "Version only",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "RaiseV2",
          "normalized": "RaiseV(Maybe(Expr a,Maybe(Expr a,Maybe(Expr a))))",
          "package": "language-python",
          "partial": "Raise",
          "signature": "RaiseV(Maybe(Expr annot,Maybe(Expr annot,Maybe(Expr annot))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:RaiseV2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional expression to evaluate, and optional 'from' clause. \u003cem\u003eVersion 3 only\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "RaiseV3",
          "package": "language-python",
          "signature": "RaiseV3 (Maybe (Expr annot, Maybe (Expr annot)))",
          "source": "src/Language-Python-Common-AST.html#RaiseExpr",
          "type": "function"
        },
        "index": {
          "description": "Optional expression to evaluate and optional from clause Version only",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "RaiseV3",
          "normalized": "RaiseV(Maybe(Expr a,Maybe(Expr a)))",
          "package": "language-python",
          "partial": "Raise",
          "signature": "RaiseV(Maybe(Expr annot,Maybe(Expr annot)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:RaiseV3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn statement (may only occur syntactically nested in a function definition). \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Return",
          "package": "language-python",
          "signature": "Return",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Return statement may only occur syntactically nested in function definition",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Return",
          "package": "language-python",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'\u003e\u003e='\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "RightShiftAssign",
          "package": "language-python",
          "signature": "RightShiftAssign",
          "source": "src/Language-Python-Common-AST.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "RightShiftAssign",
          "package": "language-python",
          "partial": "Right Shift Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:RightShiftAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Set",
          "package": "language-python",
          "signature": "Set",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Set",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Set",
          "package": "language-python",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet comprehension. \u003cem\u003eVersion 3 only\u003c/em\u003e. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "SetComp",
          "package": "language-python",
          "signature": "SetComp",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Set comprehension Version only",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "SetComp",
          "package": "language-python",
          "partial": "Set Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:SetComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'\u003c\u003c'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ShiftLeft",
          "package": "language-python",
          "signature": "ShiftLeft",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ShiftLeft",
          "package": "language-python",
          "partial": "Shift Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ShiftLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'\u003e\u003e'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ShiftRight",
          "package": "language-python",
          "signature": "ShiftRight",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ShiftRight",
          "package": "language-python",
          "partial": "Shift Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ShiftRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "SliceEllipsis",
          "package": "language-python",
          "signature": "SliceEllipsis",
          "source": "src/Language-Python-Common-AST.html#Slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "SliceEllipsis",
          "package": "language-python",
          "partial": "Slice Ellipsis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:SliceEllipsis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "SliceExpr",
          "package": "language-python",
          "signature": "SliceExpr",
          "source": "src/Language-Python-Common-AST.html#Slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "SliceExpr",
          "package": "language-python",
          "partial": "Slice Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:SliceExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "SliceProper",
          "package": "language-python",
          "signature": "SliceProper",
          "source": "src/Language-Python-Common-AST.html#Slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "SliceProper",
          "package": "language-python",
          "partial": "Slice Proper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:SliceProper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSlicing, for example 'w [x:y:z]'. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "SlicedExpr",
          "package": "language-python",
          "signature": "SlicedExpr",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Slicing for example",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "SlicedExpr",
          "package": "language-python",
          "partial": "Sliced Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:SlicedExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarred expression. \u003cem\u003eVersion 3 only\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Starred",
          "package": "language-python",
          "signature": "Starred",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Starred expression Version only",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Starred",
          "package": "language-python",
          "partial": "Starred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Starred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression statement. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "StmtExpr",
          "package": "language-python",
          "signature": "StmtExpr",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Expression statement",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "StmtExpr",
          "package": "language-python",
          "partial": "Stmt Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:StmtExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString conversion (backquoted expression). Version 2 only. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "StringConversion",
          "package": "language-python",
          "signature": "StringConversion",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "String conversion backquoted expression Version only",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "StringConversion",
          "package": "language-python",
          "partial": "String Conversion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:StringConversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral strings (to be concatentated together).\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Strings",
          "package": "language-python",
          "signature": "Strings",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Literal strings to be concatentated together",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Strings",
          "package": "language-python",
          "partial": "Strings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Strings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscription, for example 'x [y]'. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Subscript",
          "package": "language-python",
          "signature": "Subscript",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Subscription for example",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Subscript",
          "package": "language-python",
          "partial": "Subscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Subscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry statement (exception handling). \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Try",
          "package": "language-python",
          "signature": "Try",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Try statement exception handling",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Try",
          "package": "language-python",
          "partial": "Try",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTuple. Can be empty. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Tuple",
          "package": "language-python",
          "signature": "Tuple",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Tuple Can be empty",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Tuple",
          "package": "language-python",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTuple unpack. \u003cem\u003eVersion 2 only\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "UnPackTuple",
          "package": "language-python",
          "signature": "UnPackTuple",
          "source": "src/Language-Python-Common-AST.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "Tuple unpack Version only",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "UnPackTuple",
          "package": "language-python",
          "partial": "Un Pack Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:UnPackTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnary operator application.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "UnaryOp",
          "package": "language-python",
          "signature": "UnaryOp",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Unary operator application",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "UnaryOp",
          "package": "language-python",
          "partial": "Unary Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:UnaryOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnicode literal strings (to be concatentated together). Version 2 only.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "UnicodeStrings",
          "package": "language-python",
          "signature": "UnicodeStrings",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Unicode literal strings to be concatentated together Version only",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "UnicodeStrings",
          "package": "language-python",
          "partial": "Unicode Strings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:UnicodeStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Var",
          "package": "language-python",
          "signature": "Var",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Variable",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Var",
          "package": "language-python",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExcess keyword parameter (double asterisk before its name in the concrete syntax).\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "VarArgsKeyword",
          "package": "language-python",
          "signature": "VarArgsKeyword",
          "source": "src/Language-Python-Common-AST.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "Excess keyword parameter double asterisk before its name in the concrete syntax",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "VarArgsKeyword",
          "package": "language-python",
          "partial": "Var Args Keyword",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:VarArgsKeyword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExcess positional parameter (single asterisk before its name in the concrete syntax). \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "VarArgsPos",
          "package": "language-python",
          "signature": "VarArgsPos",
          "source": "src/Language-Python-Common-AST.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "Excess positional parameter single asterisk before its name in the concrete syntax",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "VarArgsPos",
          "package": "language-python",
          "partial": "Var Args Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:VarArgsPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhile loop. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "While",
          "package": "language-python",
          "signature": "While",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "While loop",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "While",
          "package": "language-python",
          "partial": "While",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:While"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWith statement (context management). \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "With",
          "package": "language-python",
          "signature": "With",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "With statement context management",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "With",
          "package": "language-python",
          "partial": "With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:With"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'^'\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Xor",
          "package": "language-python",
          "signature": "Xor",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Xor",
          "package": "language-python",
          "partial": "Xor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerator yield. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "Yield",
          "package": "language-python",
          "signature": "Yield",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Generator yield",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "Yield",
          "package": "language-python",
          "partial": "Yield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:Yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an annotated type, project out its annotation value.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "annot",
          "package": "language-python",
          "signature": "t annot -\u003e annot",
          "source": "src/Language-Python-Common-AST.html#annot",
          "type": "method"
        },
        "index": {
          "description": "Given an annotated type project out its annotation value",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "annot",
          "normalized": "a b-\u003eb",
          "package": "language-python",
          "signature": "t annot-\u003eannot",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "arg_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#Argument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "arg_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:arg_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArgument expression.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "arg_expr",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Argument",
          "type": "function"
        },
        "index": {
          "description": "Argument expression",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "arg_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:arg_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword name.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "arg_keyword",
          "package": "language-python",
          "signature": "Ident annot",
          "source": "src/Language-Python-Common-AST.html#Argument",
          "type": "function"
        },
        "index": {
          "description": "Keyword name",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "arg_keyword",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:arg_keyword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpressions being asserted.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "assert_exprs",
          "package": "language-python",
          "signature": "[Expr annot]",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Expressions being asserted",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "assert_exprs",
          "normalized": "[Expr a]",
          "package": "language-python",
          "signature": "[Expr annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:assert_exprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "assignOp_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "assignOp_annot",
          "package": "language-python",
          "partial": "Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:assignOp_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression to evaluate.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "assign_expr",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Expression to evaluate",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "assign_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:assign_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntity to assign to. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "assign_to",
          "package": "language-python",
          "signature": "[Expr annot]",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Entity to assign to",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "assign_to",
          "normalized": "[Expr a]",
          "package": "language-python",
          "signature": "[Expr annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:assign_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression to evaluate.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "aug_assign_expr",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Expression to evaluate",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "aug_assign_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:aug_assign_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssignment operator (for example '+=').\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "aug_assign_op",
          "package": "language-python",
          "signature": "AssignOp annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Assignment operator for example",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "aug_assign_op",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:aug_assign_op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntity to assign to.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "aug_assign_to",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Entity to assign to",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "aug_assign_to",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:aug_assign_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "backquoted_expr",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "backquoted_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:backquoted_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "bool_value",
          "package": "language-python",
          "signature": "Bool",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "bool_value",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:bool_value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "byte_string_strings",
          "package": "language-python",
          "signature": "[String]",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "byte_string_strings",
          "normalized": "[String]",
          "package": "language-python",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:byte_string_strings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall arguments.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "call_args",
          "package": "language-python",
          "signature": "[Argument annot]",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Call arguments",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "call_args",
          "normalized": "[Argument a]",
          "package": "language-python",
          "signature": "[Argument annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:call_args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression yielding a callable object (such as a function).\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "call_fun",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Expression yielding callable object such as function",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "call_fun",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:call_fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean condition.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ce_condition",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Boolean condition",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ce_condition",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ce_condition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression to evaluate if condition is False.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ce_false_branch",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Expression to evaluate if condition is False",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ce_false_branch",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ce_false_branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression to evaluate if condition is True.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "ce_true_branch",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Expression to evaluate if condition is True",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ce_true_branch",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ce_true_branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass argument list. In version 2.x this is only ArgExprs. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "class_args",
          "package": "language-python",
          "signature": "[Argument annot]",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Class argument list In version this is only ArgExprs",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "class_args",
          "normalized": "[Argument a]",
          "package": "language-python",
          "signature": "[Argument annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:class_args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass body.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "class_body",
          "package": "language-python",
          "signature": "Suite annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Class body",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "class_body",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:class_body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass name.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "class_name",
          "package": "language-python",
          "signature": "Ident annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Class name",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "class_name",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:class_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "comp_for_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#CompFor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "comp_for_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:comp_for_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "comp_for_exprs",
          "package": "language-python",
          "signature": "[Expr annot]",
          "source": "src/Language-Python-Common-AST.html#CompFor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "comp_for_exprs",
          "normalized": "[Expr a]",
          "package": "language-python",
          "signature": "[Expr annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:comp_for_exprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "comp_for_iter",
          "package": "language-python",
          "signature": "Maybe (CompIter annot)",
          "source": "src/Language-Python-Common-AST.html#CompFor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "comp_for_iter",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:comp_for_iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "comp_if",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#CompIf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "comp_if",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:comp_if"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "comp_if_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#CompIf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "comp_if_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:comp_if_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "comp_if_iter",
          "package": "language-python",
          "signature": "Maybe (CompIter annot)",
          "source": "src/Language-Python-Common-AST.html#CompIf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "comp_if_iter",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:comp_if_iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "comp_in_expr",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#CompFor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "comp_in_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:comp_in_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "comp_iter_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#CompIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "comp_iter_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:comp_iter_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "comp_iter_for",
          "package": "language-python",
          "signature": "CompFor annot",
          "source": "src/Language-Python-Common-AST.html#CompIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "comp_iter_for",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:comp_iter_for"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "comp_iter_if",
          "package": "language-python",
          "signature": "CompIf annot",
          "source": "src/Language-Python-Common-AST.html#CompIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "comp_iter_if",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:comp_iter_if"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "comprehension_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#Comprehension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "comprehension_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:comprehension_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "comprehension_expr",
          "package": "language-python",
          "signature": "e",
          "source": "src/Language-Python-Common-AST.html#Comprehension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "comprehension_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:comprehension_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "comprehension_for",
          "package": "language-python",
          "signature": "CompFor annot",
          "source": "src/Language-Python-Common-AST.html#Comprehension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "comprehension_for",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:comprehension_for"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly empty unconditional else clause.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "cond_else",
          "package": "language-python",
          "signature": "Suite annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Possibly empty unconditional else clause",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "cond_else",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:cond_else"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence of if-elif conditional clauses.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "cond_guards",
          "package": "language-python",
          "signature": "[(Expr annot, Suite annot)]",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Sequence of if-elif conditional clauses",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "cond_guards",
          "normalized": "[(Expr a,Suite a)]",
          "package": "language-python",
          "signature": "[(Expr annot,Suite annot)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:cond_guards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecorators.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "decorated_decorators",
          "package": "language-python",
          "signature": "[Decorator annot]",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Decorators",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "decorated_decorators",
          "normalized": "[Decorator a]",
          "package": "language-python",
          "signature": "[Decorator annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:decorated_decorators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction or class definition to be decorated.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "decorated_def",
          "package": "language-python",
          "signature": "Statement annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Function or class definition to be decorated",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "decorated_def",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:decorated_def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "decorator_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#Decorator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "decorator_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:decorator_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecorator arguments.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "decorator_args",
          "package": "language-python",
          "signature": "[Argument annot]",
          "source": "src/Language-Python-Common-AST.html#Decorator",
          "type": "function"
        },
        "index": {
          "description": "Decorator arguments",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "decorator_args",
          "normalized": "[Argument a]",
          "package": "language-python",
          "signature": "[Argument annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:decorator_args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecorator name.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "decorator_name",
          "package": "language-python",
          "signature": "DottedName annot",
          "source": "src/Language-Python-Common-AST.html#Decorator",
          "type": "function"
        },
        "index": {
          "description": "Decorator name",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "decorator_name",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:decorator_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eItems to delete.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "del_exprs",
          "package": "language-python",
          "signature": "[Expr annot]",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Items to delete",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "del_exprs",
          "normalized": "[Expr a]",
          "package": "language-python",
          "signature": "[Expr annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:del_exprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "dict_comprehension",
          "package": "language-python",
          "signature": "Comprehension (Expr annot, Expr annot) annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "dict_comprehension",
          "normalized": "Comprehension(Expr a,Expr a)a",
          "package": "language-python",
          "signature": "Comprehension(Expr annot,Expr annot)annot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:dict_comprehension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "dict_mappings",
          "package": "language-python",
          "signature": "[(Expr annot, Expr annot)]",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "dict_mappings",
          "normalized": "[(Expr a,Expr a)]",
          "package": "language-python",
          "signature": "[(Expr annot,Expr annot)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:dict_mappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "except_clause",
          "package": "language-python",
          "signature": "Maybe (Expr annot, Maybe (Expr annot))",
          "source": "src/Language-Python-Common-AST.html#ExceptClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "except_clause",
          "normalized": "Maybe(Expr a,Maybe(Expr a))",
          "package": "language-python",
          "signature": "Maybe(Expr annot,Maybe(Expr annot))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:except_clause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "except_clause_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#ExceptClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "except_clause_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:except_clause_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression to exec.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "exec_expr",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Expression to exec",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "exec_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:exec_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal and local environments to evaluate the expression within.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "exec_globals_locals",
          "package": "language-python",
          "signature": "Maybe (Expr annot, Maybe (Expr annot))",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Global and local environments to evaluate the expression within",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "exec_globals_locals",
          "normalized": "Maybe(Expr a,Maybe(Expr a))",
          "package": "language-python",
          "signature": "Maybe(Expr annot,Maybe(Expr annot))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:exec_globals_locals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "expr_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "expr_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:expr_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "expr_anot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "expr_anot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:expr_anot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "expr_literal",
          "package": "language-python",
          "signature": "String",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "expr_literal",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:expr_literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "float_value",
          "package": "language-python",
          "signature": "Double",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "float_value",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:float_value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop body\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "for_body",
          "package": "language-python",
          "signature": "Suite annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Loop body",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "for_body",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:for_body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElse clause.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "for_else",
          "package": "language-python",
          "signature": "Suite annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Else clause",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "for_else",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:for_else"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop generator. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "for_generator",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Loop generator",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "for_generator",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:for_generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop variables.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "for_targets",
          "package": "language-python",
          "signature": "[Expr annot]",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Loop variables",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "for_targets",
          "normalized": "[Expr a]",
          "package": "language-python",
          "signature": "[Expr annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:for_targets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn optional name to refer to the entity (the 'as' name).\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "from_as_name",
          "package": "language-python",
          "signature": "Maybe (Ident annot)",
          "source": "src/Language-Python-Common-AST.html#FromItem",
          "type": "function"
        },
        "index": {
          "description": "An optional name to refer to the entity the as name",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "from_as_name",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:from_as_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "from_item_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#FromItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "from_item_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:from_item_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the entity imported. \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "from_item_name",
          "package": "language-python",
          "signature": "Ident annot",
          "source": "src/Language-Python-Common-AST.html#FromItem",
          "type": "function"
        },
        "index": {
          "description": "The name of the entity imported",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "from_item_name",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:from_item_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eItems to import.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "from_items",
          "package": "language-python",
          "signature": "FromItems annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Items to import",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "from_items",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:from_items"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "from_items_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#FromItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "from_items_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:from_items_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "from_items_items",
          "package": "language-python",
          "signature": "[FromItem annot]",
          "source": "src/Language-Python-Common-AST.html#FromItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "from_items_items",
          "normalized": "[FromItem a]",
          "package": "language-python",
          "signature": "[FromItem annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:from_items_items"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModule to import from.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "from_module",
          "package": "language-python",
          "signature": "ImportRelative annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Module to import from",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "from_module",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:from_module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction parameter list.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "fun_args",
          "package": "language-python",
          "signature": "[Parameter annot]",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Function parameter list",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "fun_args",
          "normalized": "[Parameter a]",
          "package": "language-python",
          "signature": "[Parameter annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:fun_args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction body.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "fun_body",
          "package": "language-python",
          "signature": "Suite annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Function body",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "fun_body",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:fun_body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction name.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "fun_name",
          "package": "language-python",
          "signature": "Ident annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Function name",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "fun_name",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:fun_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional result annotation.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "fun_result_annotation",
          "package": "language-python",
          "signature": "Maybe (Expr annot)",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Optional result annotation",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "fun_result_annotation",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:fun_result_annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "gen_comprehension",
          "package": "language-python",
          "signature": "Comprehension (Expr annot) annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "gen_comprehension",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:gen_comprehension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariables declared global in the current block.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "global_vars",
          "package": "language-python",
          "signature": "[Ident annot]",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Variables declared global in the current block",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "global_vars",
          "normalized": "[Ident a]",
          "package": "language-python",
          "signature": "[Ident annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:global_vars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "handler_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "handler_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:handler_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "handler_clause",
          "package": "language-python",
          "signature": "ExceptClause annot",
          "source": "src/Language-Python-Common-AST.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "handler_clause",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:handler_clause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "handler_suite",
          "package": "language-python",
          "signature": "Suite annot",
          "source": "src/Language-Python-Common-AST.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "handler_suite",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:handler_suite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "ident_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#Ident",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ident_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ident_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "ident_string",
          "package": "language-python",
          "signature": "String",
          "source": "src/Language-Python-Common-AST.html#Ident",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "ident_string",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:ident_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "imaginary_value",
          "package": "language-python",
          "signature": "Double",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "imaginary_value",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:imaginary_value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn optional name to refer to the entity (the 'as' name). \n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "import_as_name",
          "package": "language-python",
          "signature": "Maybe (Ident annot)",
          "source": "src/Language-Python-Common-AST.html#ImportItem",
          "type": "function"
        },
        "index": {
          "description": "An optional name to refer to the entity the as name",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "import_as_name",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:import_as_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "import_item_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#ImportItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "import_item_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:import_item_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of module to import.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "import_item_name",
          "package": "language-python",
          "signature": "DottedName annot",
          "source": "src/Language-Python-Common-AST.html#ImportItem",
          "type": "function"
        },
        "index": {
          "description": "The name of module to import",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "import_item_name",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:import_item_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eItems to import.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "import_items",
          "package": "language-python",
          "signature": "[ImportItem annot]",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Items to import",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "import_items",
          "normalized": "[ImportItem a]",
          "package": "language-python",
          "signature": "[ImportItem annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:import_items"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "import_relative_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#ImportRelative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "import_relative_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:import_relative_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "import_relative_dots",
          "package": "language-python",
          "signature": "Int",
          "source": "src/Language-Python-Common-AST.html#ImportRelative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "import_relative_dots",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:import_relative_dots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "import_relative_module",
          "package": "language-python",
          "signature": "Maybe (DottedName annot)",
          "source": "src/Language-Python-Common-AST.html#ImportRelative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "import_relative_module",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:import_relative_module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "int_value",
          "package": "language-python",
          "signature": "Integer",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "int_value",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:int_value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "lambda_args",
          "package": "language-python",
          "signature": "[Parameter annot]",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "lambda_args",
          "normalized": "[Parameter a]",
          "package": "language-python",
          "signature": "[Parameter annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:lambda_args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "lambda_body",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "lambda_body",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:lambda_body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "left_op_arg",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "left_op_arg",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:left_op_arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "list_comprehension",
          "package": "language-python",
          "signature": "Comprehension (Expr annot) annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "list_comprehension",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:list_comprehension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "list_exprs",
          "package": "language-python",
          "signature": "[Expr annot]",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "list_exprs",
          "normalized": "[Expr a]",
          "package": "language-python",
          "signature": "[Expr annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:list_exprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariables declared nonlocal in the current block (their binding comes from bound the nearest enclosing scope).\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "nonLocal_vars",
          "package": "language-python",
          "signature": "[Ident annot]",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Variables declared nonlocal in the current block their binding comes from bound the nearest enclosing scope",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "nonLocal_vars",
          "normalized": "[Ident a]",
          "package": "language-python",
          "partial": "Local",
          "signature": "[Ident annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:nonLocal_vars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "op_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "op_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:op_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "op_arg",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "op_arg",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:op_arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "operator",
          "package": "language-python",
          "signature": "Op annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "operator",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "param_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "param_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:param_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional default value.\n\u003c/p\u003e\u003cp\u003eOptional default value.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "param_default",
          "package": "language-python",
          "signature": "Maybe (Expr annot)",
          "source": "src/Language-Python-Common-AST.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "Optional default value Optional default value",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "param_default",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:param_default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameter name.\n\u003c/p\u003e\u003cp\u003eParameter name.\n\u003c/p\u003e\u003cp\u003eParameter name.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "param_name",
          "package": "language-python",
          "signature": "Ident annot",
          "source": "src/Language-Python-Common-AST.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "Parameter name Parameter name Parameter name",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "param_name",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:param_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional annotation.\n\u003c/p\u003e\u003cp\u003eOptional annotation.\n\u003c/p\u003e\u003cp\u003eOptional annotation.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "param_py_annotation",
          "package": "language-python",
          "signature": "Maybe (Expr annot)",
          "source": "src/Language-Python-Common-AST.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "Optional annotation Optional annotation Optional annotation",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "param_py_annotation",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:param_py_annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "param_tuple",
          "package": "language-python",
          "signature": "[ParamTuple annot]",
          "source": "src/Language-Python-Common-AST.html#ParamTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "param_tuple",
          "normalized": "[ParamTuple a]",
          "package": "language-python",
          "signature": "[ParamTuple annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:param_tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "param_tuple_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#ParamTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "param_tuple_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:param_tuple_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "param_tuple_name",
          "package": "language-python",
          "signature": "Ident annot",
          "source": "src/Language-Python-Common-AST.html#ParamTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "param_tuple_name",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:param_tuple_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tuple to unpack.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "param_unpack_tuple",
          "package": "language-python",
          "signature": "ParamTuple annot",
          "source": "src/Language-Python-Common-AST.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "The tuple to unpack",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "param_unpack_tuple",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:param_unpack_tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "paren_expr",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "paren_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:paren_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional chevron (\u003e\u003e)\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "print_chevron",
          "package": "language-python",
          "signature": "Bool",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Optional chevron",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "print_chevron",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:print_chevron"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArguments to print\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "print_exprs",
          "package": "language-python",
          "signature": "[Expr annot]",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Arguments to print",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "print_exprs",
          "normalized": "[Expr a]",
          "package": "language-python",
          "signature": "[Expr annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:print_exprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes it end in a comma?\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "print_trailing_comma",
          "package": "language-python",
          "signature": "Bool",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Does it end in comma",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "print_trailing_comma",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:print_trailing_comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "raise_expr",
          "package": "language-python",
          "signature": "RaiseExpr annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "raise_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:raise_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional expression to evaluate and return to caller.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "return_expr",
          "package": "language-python",
          "signature": "Maybe (Expr annot)",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Optional expression to evaluate and return to caller",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "return_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:return_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "right_op_arg",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "right_op_arg",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:right_op_arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "set_comprehension",
          "package": "language-python",
          "signature": "Comprehension (Expr annot) annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "set_comprehension",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:set_comprehension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "set_exprs",
          "package": "language-python",
          "signature": "[Expr annot]",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "set_exprs",
          "normalized": "[Expr a]",
          "package": "language-python",
          "signature": "[Expr annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:set_exprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "slice_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#Slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "slice_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:slice_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "slice_expr",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "slice_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:slice_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "slice_lower",
          "package": "language-python",
          "signature": "Maybe (Expr annot)",
          "source": "src/Language-Python-Common-AST.html#Slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "slice_lower",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:slice_lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "slice_stride",
          "package": "language-python",
          "signature": "Maybe (Maybe (Expr annot))",
          "source": "src/Language-Python-Common-AST.html#Slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "slice_stride",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:slice_stride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "slice_upper",
          "package": "language-python",
          "signature": "Maybe (Expr annot)",
          "source": "src/Language-Python-Common-AST.html#Slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "slice_upper",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:slice_upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "slicee",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "slicee",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:slicee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "slices",
          "package": "language-python",
          "signature": "[Slice annot]",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "slices",
          "normalized": "[Slice a]",
          "package": "language-python",
          "signature": "[Slice annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:slices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "starred_expr",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "starred_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:starred_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "stmt_annot",
          "package": "language-python",
          "signature": "annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "stmt_annot",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:stmt_annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "stmt_expr",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "stmt_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:stmt_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "strings_strings",
          "package": "language-python",
          "signature": "[String]",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "strings_strings",
          "normalized": "[String]",
          "package": "language-python",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:strings_strings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "subscript_expr",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "subscript_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:subscript_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "subscriptee",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "subscriptee",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:subscriptee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry clause.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "try_body",
          "package": "language-python",
          "signature": "Suite annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Try clause",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "try_body",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:try_body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly empty else clause, executed if and when control flows off the end of the try clause.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "try_else",
          "package": "language-python",
          "signature": "Suite annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Possibly empty else clause executed if and when control flows off the end of the try clause",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "try_else",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:try_else"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException handlers.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "try_excepts",
          "package": "language-python",
          "signature": "[Handler annot]",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Exception handlers",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "try_excepts",
          "normalized": "[Handler a]",
          "package": "language-python",
          "signature": "[Handler annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:try_excepts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly empty finally clause.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "try_finally",
          "package": "language-python",
          "signature": "Suite annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Possibly empty finally clause",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "try_finally",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:try_finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "tuple_exprs",
          "package": "language-python",
          "signature": "[Expr annot]",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "tuple_exprs",
          "normalized": "[Expr a]",
          "package": "language-python",
          "signature": "[Expr annot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:tuple_exprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "unicodestrings_strings",
          "package": "language-python",
          "signature": "[String]",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "unicodestrings_strings",
          "normalized": "[String]",
          "package": "language-python",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:unicodestrings_strings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.AST",
          "name": "var_ident",
          "package": "language-python",
          "signature": "Ident annot",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "var_ident",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:var_ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop body.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "while_body",
          "package": "language-python",
          "signature": "Suite annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Loop body",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "while_body",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:while_body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop condition.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "while_cond",
          "package": "language-python",
          "signature": "Expr annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Loop condition",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "while_cond",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:while_cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElse clause.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "while_else",
          "package": "language-python",
          "signature": "Suite annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Else clause",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "while_else",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:while_else"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuite to be managed.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "with_body",
          "package": "language-python",
          "signature": "Suite annot",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Suite to be managed",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "with_body",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:with_body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext expression(s) (yields a context manager).\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "with_context",
          "package": "language-python",
          "signature": "[(Expr annot, Maybe (Expr annot))]",
          "source": "src/Language-Python-Common-AST.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "Context expression yields context manager",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "with_context",
          "normalized": "[(Expr a,Maybe(Expr a))]",
          "package": "language-python",
          "signature": "[(Expr annot,Maybe(Expr annot))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:with_context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional expression to yield.\n\u003c/p\u003e",
          "module": "Language.Python.Common.AST",
          "name": "yield_expr",
          "package": "language-python",
          "signature": "Maybe (Expr annot)",
          "source": "src/Language-Python-Common-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Optional expression to yield",
          "hierarchy": "Language Python Common AST",
          "module": "Language.Python.Common.AST",
          "name": "yield_expr",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-AST.html#v:yield_expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eError values for the lexer and parser. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Python.Common.ParseError",
          "name": "ParseError",
          "package": "language-python",
          "source": "src/Language-Python-Common-ParseError.html",
          "type": "module"
        },
        "index": {
          "description": "Error values for the lexer and parser",
          "hierarchy": "Language Python Common ParseError",
          "module": "Language.Python.Common.ParseError",
          "name": "ParseError",
          "package": "language-python",
          "partial": "Parse Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParseError.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParseError",
          "name": "ParseError",
          "package": "language-python",
          "source": "src/Language-Python-Common-ParseError.html#ParseError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Python Common ParseError",
          "module": "Language.Python.Common.ParseError",
          "name": "ParseError",
          "package": "language-python",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParseError.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic error containing a string message. No source location.\n\u003c/p\u003e",
          "module": "[\"Language.Python.Common.ParseError\",\"Language.Python.Common.ParserMonad\"]",
          "name": "StrError",
          "package": "language-python",
          "signature": "StrError String",
          "source": "src/Language-Python-Common-ParseError.html#ParseError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParseError.html#v:StrError\",\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:StrError\"]"
        },
        "index": {
          "description": "generic error containing string message No source location",
          "hierarchy": "Language Python Common ParseError",
          "module": "Language.Python.Common.ParseError",
          "name": "StrError",
          "package": "language-python",
          "partial": "Str Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParseError.html#v:StrError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error from the lexer. Character found where it should not be.\n\u003c/p\u003e",
          "module": "[\"Language.Python.Common.ParseError\",\"Language.Python.Common.ParserMonad\"]",
          "name": "UnexpectedChar",
          "package": "language-python",
          "signature": "UnexpectedChar Char SrcLocation",
          "source": "src/Language-Python-Common-ParseError.html#ParseError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParseError.html#v:UnexpectedChar\",\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:UnexpectedChar\"]"
        },
        "index": {
          "description": "An error from the lexer Character found where it should not be",
          "hierarchy": "Language Python Common ParseError",
          "module": "Language.Python.Common.ParseError",
          "name": "UnexpectedChar",
          "package": "language-python",
          "partial": "Unexpected Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParseError.html#v:UnexpectedChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error from the parser. Token found where it should not be. Note: tokens contain their own source span.\n\u003c/p\u003e",
          "module": "[\"Language.Python.Common.ParseError\",\"Language.Python.Common.ParserMonad\"]",
          "name": "UnexpectedToken",
          "package": "language-python",
          "signature": "UnexpectedToken Token",
          "source": "src/Language-Python-Common-ParseError.html#ParseError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParseError.html#v:UnexpectedToken\",\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:UnexpectedToken\"]"
        },
        "index": {
          "description": "An error from the parser Token found where it should not be Note tokens contain their own source span",
          "hierarchy": "Language Python Common ParseError",
          "module": "Language.Python.Common.ParseError",
          "name": "UnexpectedToken",
          "package": "language-python",
          "partial": "Unexpected Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParseError.html#v:UnexpectedToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonad support for Python parser and lexer. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Python.Common.ParserMonad",
          "name": "ParserMonad",
          "package": "language-python",
          "source": "src/Language-Python-Common-ParserMonad.html",
          "type": "module"
        },
        "index": {
          "description": "Monad support for Python parser and lexer",
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "ParserMonad",
          "package": "language-python",
          "partial": "Parser Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "P",
          "package": "language-python",
          "source": "src/Language-Python-Common-ParserMonad.html#P",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "P",
          "package": "language-python",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#t:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "ParseError",
          "package": "language-python",
          "source": "src/Language-Python-Common-ParseError.html#ParseError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "ParseError",
          "package": "language-python",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "ParseState",
          "package": "language-python",
          "source": "src/Language-Python-Common-ParserMonad.html#ParseState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "ParseState",
          "package": "language-python",
          "partial": "Parse State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#t:ParseState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "ParseState",
          "package": "language-python",
          "signature": "ParseState",
          "source": "src/Language-Python-Common-ParserMonad.html#ParseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "ParseState",
          "package": "language-python",
          "partial": "Parse State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:ParseState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "addComment",
          "package": "language-python",
          "signature": "Token -\u003e P ()",
          "source": "src/Language-Python-Common-ParserMonad.html#addComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "addComment",
          "normalized": "Token-\u003eP()",
          "package": "language-python",
          "partial": "Comment",
          "signature": "Token-\u003eP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:addComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "comments",
          "package": "language-python",
          "signature": "[Token]",
          "source": "src/Language-Python-Common-ParserMonad.html#ParseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "comments",
          "normalized": "[Token]",
          "package": "language-python",
          "signature": "[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "execParser",
          "package": "language-python",
          "signature": "P a -\u003e ParseState -\u003e Either ParseError a",
          "source": "src/Language-Python-Common-ParserMonad.html#execParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "execParser",
          "normalized": "P a-\u003eParseState-\u003eEither ParseError a",
          "package": "language-python",
          "partial": "Parser",
          "signature": "P a-\u003eParseState-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:execParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "execParserKeepComments",
          "package": "language-python",
          "signature": "P a -\u003e ParseState -\u003e Either ParseError (a, [Token])",
          "source": "src/Language-Python-Common-ParserMonad.html#execParserKeepComments",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "execParserKeepComments",
          "normalized": "P a-\u003eParseState-\u003eEither ParseError(a,[Token])",
          "package": "language-python",
          "partial": "Parser Keep Comments",
          "signature": "P a-\u003eParseState-\u003eEither ParseError(a,[Token])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:execParserKeepComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "getComments",
          "package": "language-python",
          "signature": "P [Token]",
          "source": "src/Language-Python-Common-ParserMonad.html#getComments",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "getComments",
          "normalized": "P[Token]",
          "package": "language-python",
          "partial": "Comments",
          "signature": "P[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:getComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "getIndent",
          "package": "language-python",
          "signature": "P Int",
          "source": "src/Language-Python-Common-ParserMonad.html#getIndent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "getIndent",
          "package": "language-python",
          "partial": "Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:getIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "getIndentStackDepth",
          "package": "language-python",
          "signature": "P Int",
          "source": "src/Language-Python-Common-ParserMonad.html#getIndentStackDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "getIndentStackDepth",
          "package": "language-python",
          "partial": "Indent Stack Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:getIndentStackDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "getInput",
          "package": "language-python",
          "signature": "P String",
          "source": "src/Language-Python-Common-ParserMonad.html#getInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "getInput",
          "package": "language-python",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:getInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "getLastEOL",
          "package": "language-python",
          "signature": "P SrcSpan",
          "source": "src/Language-Python-Common-ParserMonad.html#getLastEOL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "getLastEOL",
          "package": "language-python",
          "partial": "Last EOL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:getLastEOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "getLastToken",
          "package": "language-python",
          "signature": "P Token",
          "source": "src/Language-Python-Common-ParserMonad.html#getLastToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "getLastToken",
          "package": "language-python",
          "partial": "Last Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:getLastToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "getLocation",
          "package": "language-python",
          "signature": "P SrcLocation",
          "source": "src/Language-Python-Common-ParserMonad.html#getLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "getLocation",
          "package": "language-python",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:getLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "getParen",
          "package": "language-python",
          "signature": "P (Maybe Token)",
          "source": "src/Language-Python-Common-ParserMonad.html#getParen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "getParen",
          "package": "language-python",
          "partial": "Paren",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:getParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "getParenStackDepth",
          "package": "language-python",
          "signature": "P Int",
          "source": "src/Language-Python-Common-ParserMonad.html#getParenStackDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "getParenStackDepth",
          "package": "language-python",
          "partial": "Paren Stack Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:getParenStackDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "getStartCode",
          "package": "language-python",
          "signature": "P Int",
          "source": "src/Language-Python-Common-ParserMonad.html#getStartCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "getStartCode",
          "package": "language-python",
          "partial": "Start Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:getStartCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "indentStack",
          "package": "language-python",
          "signature": "[Int]",
          "source": "src/Language-Python-Common-ParserMonad.html#ParseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "indentStack",
          "normalized": "[Int]",
          "package": "language-python",
          "partial": "Stack",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:indentStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "initialState",
          "package": "language-python",
          "signature": "SrcLocation -\u003e String -\u003e [Int] -\u003e ParseState",
          "source": "src/Language-Python-Common-ParserMonad.html#initialState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "initialState",
          "normalized": "SrcLocation-\u003eString-\u003e[Int]-\u003eParseState",
          "package": "language-python",
          "partial": "State",
          "signature": "SrcLocation-\u003eString-\u003e[Int]-\u003eParseState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:initialState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "input",
          "package": "language-python",
          "signature": "String",
          "source": "src/Language-Python-Common-ParserMonad.html#ParseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "input",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "lastEOL",
          "package": "language-python",
          "signature": "SrcSpan",
          "source": "src/Language-Python-Common-ParserMonad.html#ParseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "lastEOL",
          "package": "language-python",
          "partial": "EOL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:lastEOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "location",
          "package": "language-python",
          "signature": "SrcLocation",
          "source": "src/Language-Python-Common-ParserMonad.html#ParseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "location",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "parenStack",
          "package": "language-python",
          "signature": "[Token]",
          "source": "src/Language-Python-Common-ParserMonad.html#ParseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "parenStack",
          "normalized": "[Token]",
          "package": "language-python",
          "partial": "Stack",
          "signature": "[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:parenStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "popIndent",
          "package": "language-python",
          "signature": "P ()",
          "source": "src/Language-Python-Common-ParserMonad.html#popIndent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "popIndent",
          "normalized": "P()",
          "package": "language-python",
          "partial": "Indent",
          "signature": "P()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:popIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "popParen",
          "package": "language-python",
          "signature": "P ()",
          "source": "src/Language-Python-Common-ParserMonad.html#popParen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "popParen",
          "normalized": "P()",
          "package": "language-python",
          "partial": "Paren",
          "signature": "P()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:popParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "popStartCode",
          "package": "language-python",
          "signature": "P ()",
          "source": "src/Language-Python-Common-ParserMonad.html#popStartCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "popStartCode",
          "normalized": "P()",
          "package": "language-python",
          "partial": "Start Code",
          "signature": "P()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:popStartCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "previousToken",
          "package": "language-python",
          "signature": "Token",
          "source": "src/Language-Python-Common-ParserMonad.html#ParseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "previousToken",
          "package": "language-python",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:previousToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "pushIndent",
          "package": "language-python",
          "signature": "Int -\u003e P ()",
          "source": "src/Language-Python-Common-ParserMonad.html#pushIndent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "pushIndent",
          "normalized": "Int-\u003eP()",
          "package": "language-python",
          "partial": "Indent",
          "signature": "Int-\u003eP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:pushIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "pushParen",
          "package": "language-python",
          "signature": "Token -\u003e P ()",
          "source": "src/Language-Python-Common-ParserMonad.html#pushParen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "pushParen",
          "normalized": "Token-\u003eP()",
          "package": "language-python",
          "partial": "Paren",
          "signature": "Token-\u003eP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:pushParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "pushStartCode",
          "package": "language-python",
          "signature": "Int -\u003e P ()",
          "source": "src/Language-Python-Common-ParserMonad.html#pushStartCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "pushStartCode",
          "normalized": "Int-\u003eP()",
          "package": "language-python",
          "partial": "Start Code",
          "signature": "Int-\u003eP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:pushStartCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "returnP",
          "package": "language-python",
          "signature": "a -\u003e P a",
          "source": "src/Language-Python-Common-ParserMonad.html#returnP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "returnP",
          "normalized": "a-\u003eP a",
          "package": "language-python",
          "signature": "a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:returnP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "runParser",
          "package": "language-python",
          "signature": "P a -\u003e ParseState -\u003e Either ParseError (a, ParseState)",
          "source": "src/Language-Python-Common-ParserMonad.html#runParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "runParser",
          "normalized": "P a-\u003eParseState-\u003eEither ParseError(a,ParseState)",
          "package": "language-python",
          "partial": "Parser",
          "signature": "P a-\u003eParseState-\u003eEither ParseError(a,ParseState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:runParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "setInput",
          "package": "language-python",
          "signature": "String -\u003e P ()",
          "source": "src/Language-Python-Common-ParserMonad.html#setInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "setInput",
          "normalized": "String-\u003eP()",
          "package": "language-python",
          "partial": "Input",
          "signature": "String-\u003eP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:setInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "setLastEOL",
          "package": "language-python",
          "signature": "SrcSpan -\u003e P ()",
          "source": "src/Language-Python-Common-ParserMonad.html#setLastEOL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "setLastEOL",
          "normalized": "SrcSpan-\u003eP()",
          "package": "language-python",
          "partial": "Last EOL",
          "signature": "SrcSpan-\u003eP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:setLastEOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "setLastToken",
          "package": "language-python",
          "signature": "Token -\u003e P ()",
          "source": "src/Language-Python-Common-ParserMonad.html#setLastToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "setLastToken",
          "normalized": "Token-\u003eP()",
          "package": "language-python",
          "partial": "Last Token",
          "signature": "Token-\u003eP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:setLastToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "setLocation",
          "package": "language-python",
          "signature": "SrcLocation -\u003e P ()",
          "source": "src/Language-Python-Common-ParserMonad.html#setLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "setLocation",
          "normalized": "SrcLocation-\u003eP()",
          "package": "language-python",
          "partial": "Location",
          "signature": "SrcLocation-\u003eP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:setLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "spanError",
          "package": "language-python",
          "signature": "a -\u003e String -\u003e P b",
          "source": "src/Language-Python-Common-ParserMonad.html#spanError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "spanError",
          "normalized": "a-\u003eString-\u003eP b",
          "package": "language-python",
          "partial": "Error",
          "signature": "a-\u003eString-\u003eP b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:spanError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "startCodeStack",
          "package": "language-python",
          "signature": "[Int]",
          "source": "src/Language-Python-Common-ParserMonad.html#ParseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "startCodeStack",
          "normalized": "[Int]",
          "package": "language-python",
          "partial": "Code Stack",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:startCodeStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.ParserMonad",
          "name": "thenP",
          "package": "language-python",
          "signature": "P a -\u003e (a -\u003e P b) -\u003e P b",
          "source": "src/Language-Python-Common-ParserMonad.html#thenP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common ParserMonad",
          "module": "Language.Python.Common.ParserMonad",
          "name": "thenP",
          "normalized": "P a-\u003e(a-\u003eP b)-\u003eP b",
          "package": "language-python",
          "signature": "P a-\u003e(a-\u003eP b)-\u003eP b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-ParserMonad.html#v:thenP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience class for pretty printing combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Python.Common.Pretty",
          "name": "Pretty",
          "package": "language-python",
          "source": "src/Language-Python-Common-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Convenience class for pretty printing combinators",
          "hierarchy": "Language Python Common Pretty",
          "module": "Language.Python.Common.Pretty",
          "name": "Pretty",
          "package": "language-python",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll types which can be transformed into a \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Pretty",
          "name": "Pretty",
          "package": "language-python",
          "source": "src/Language-Python-Common-Pretty.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "All types which can be transformed into Doc",
          "hierarchy": "Language Python Common Pretty",
          "module": "Language.Python.Common.Pretty",
          "name": "Pretty",
          "package": "language-python",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Pretty.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of things separated by commas.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Pretty",
          "name": "commaList",
          "package": "language-python",
          "signature": "[a] -\u003e Doc",
          "source": "src/Language-Python-Common-Pretty.html#commaList",
          "type": "function"
        },
        "index": {
          "description": "list of things separated by commas",
          "hierarchy": "Language Python Common Pretty",
          "module": "Language.Python.Common.Pretty",
          "name": "commaList",
          "normalized": "[a]-\u003eDoc",
          "package": "language-python",
          "partial": "List",
          "signature": "[a]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Pretty.html#v:commaList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally wrap parentheses around an item.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Pretty",
          "name": "parensIf",
          "package": "language-python",
          "signature": "(a -\u003e Bool) -\u003e a -\u003e Doc",
          "source": "src/Language-Python-Common-Pretty.html#parensIf",
          "type": "function"
        },
        "index": {
          "description": "Conditionally wrap parentheses around an item",
          "hierarchy": "Language Python Common Pretty",
          "module": "Language.Python.Common.Pretty",
          "name": "parensIf",
          "normalized": "(a-\u003eBool)-\u003ea-\u003eDoc",
          "package": "language-python",
          "partial": "If",
          "signature": "(a-\u003eBool)-\u003ea-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Pretty.html#v:parensIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Pretty",
          "name": "perhaps",
          "package": "language-python",
          "signature": "Maybe a -\u003e Doc -\u003e Doc",
          "source": "src/Language-Python-Common-Pretty.html#perhaps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Pretty",
          "module": "Language.Python.Common.Pretty",
          "name": "perhaps",
          "normalized": "Maybe a-\u003eDoc-\u003eDoc",
          "package": "language-python",
          "signature": "Maybe a-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Pretty.html#v:perhaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Pretty",
          "name": "pretty",
          "package": "language-python",
          "signature": "a -\u003e Doc",
          "source": "src/Language-Python-Common-Pretty.html#pretty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Python Common Pretty",
          "module": "Language.Python.Common.Pretty",
          "name": "pretty",
          "normalized": "a-\u003eDoc",
          "package": "language-python",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Pretty.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint just the prefix of something\n\u003c/p\u003e",
          "module": "Language.Python.Common.Pretty",
          "name": "prettyPrefix",
          "package": "language-python",
          "signature": "Int -\u003e a -\u003e Doc",
          "source": "src/Language-Python-Common-Pretty.html#prettyPrefix",
          "type": "function"
        },
        "index": {
          "description": "Print just the prefix of something",
          "hierarchy": "Language Python Common Pretty",
          "module": "Language.Python.Common.Pretty",
          "name": "prettyPrefix",
          "normalized": "Int-\u003ea-\u003eDoc",
          "package": "language-python",
          "partial": "Prefix",
          "signature": "Int-\u003ea-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Pretty.html#v:prettyPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform values into strings.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Pretty",
          "name": "prettyText",
          "package": "language-python",
          "signature": "a -\u003e String",
          "source": "src/Language-Python-Common-Pretty.html#prettyText",
          "type": "function"
        },
        "index": {
          "description": "Transform values into strings",
          "hierarchy": "Language Python Common Pretty",
          "module": "Language.Python.Common.Pretty",
          "name": "prettyText",
          "normalized": "a-\u003eString",
          "package": "language-python",
          "partial": "Text",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Pretty.html#v:prettyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty printing of the Python abstract syntax (version 2.x and 3.x). \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Python.Common.PrettyAST",
          "name": "PrettyAST",
          "package": "language-python",
          "source": "src/Language-Python-Common-PrettyAST.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty printing of the Python abstract syntax version and",
          "hierarchy": "Language Python Common PrettyAST",
          "module": "Language.Python.Common.PrettyAST",
          "name": "PrettyAST",
          "package": "language-python",
          "partial": "Pretty AST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-PrettyAST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty printing of parse errors. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Python.Common.PrettyParseError",
          "name": "PrettyParseError",
          "package": "language-python",
          "source": "src/Language-Python-Common-PrettyParseError.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty printing of parse errors",
          "hierarchy": "Language Python Common PrettyParseError",
          "module": "Language.Python.Common.PrettyParseError",
          "name": "PrettyParseError",
          "package": "language-python",
          "partial": "Pretty Parse Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-PrettyParseError.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty printing of tokens. Note the output is intended for displaying in\n messages to the user, and may not be valid Python syntax. For instance\n the pretty printing is useful for displaying parser error messages, but\n not useful for producing concrete Python source.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Python.Common.PrettyToken",
          "name": "PrettyToken",
          "package": "language-python",
          "source": "src/Language-Python-Common-PrettyToken.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty printing of tokens Note the output is intended for displaying in messages to the user and may not be valid Python syntax For instance the pretty printing is useful for displaying parser error messages but not useful for producing concrete Python source",
          "hierarchy": "Language Python Common PrettyToken",
          "module": "Language.Python.Common.PrettyToken",
          "name": "PrettyToken",
          "package": "language-python",
          "partial": "Pretty Token",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-PrettyToken.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSource location information for the Python lexer and parser. This module\n provides single-point locations and spans, and conversions between them.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "SrcLocation",
          "package": "language-python",
          "source": "src/Language-Python-Common-SrcLocation.html",
          "type": "module"
        },
        "index": {
          "description": "Source location information for the Python lexer and parser This module provides single-point locations and spans and conversions between them",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "SrcLocation",
          "package": "language-python",
          "partial": "Src Location",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes which have a span.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "Span",
          "package": "language-python",
          "source": "src/Language-Python-Common-SrcLocation.html#Span",
          "type": "class"
        },
        "index": {
          "description": "Types which have span",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "Span",
          "package": "language-python",
          "partial": "Span",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#t:Span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location for a syntactic entity from the source code.\n The location is specified by its filename, and starting row\n and column. \n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "SrcLocation",
          "package": "language-python",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcLocation",
          "type": "data"
        },
        "index": {
          "description": "location for syntactic entity from the source code The location is specified by its filename and starting row and column",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "SrcLocation",
          "package": "language-python",
          "partial": "Src Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#t:SrcLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource location spanning a contiguous section of a file.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "SrcSpan",
          "package": "language-python",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcSpan",
          "type": "data"
        },
        "index": {
          "description": "Source location spanning contiguous section of file",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "SrcSpan",
          "package": "language-python",
          "partial": "Src Span",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#t:SrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.SrcLocation",
          "name": "NoLocation",
          "package": "language-python",
          "signature": "NoLocation",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "NoLocation",
          "package": "language-python",
          "partial": "No Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:NoLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.SrcLocation",
          "name": "Sloc",
          "package": "language-python",
          "signature": "Sloc",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "Sloc",
          "package": "language-python",
          "partial": "Sloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:Sloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA span which starts and ends on the same line.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "SpanCoLinear",
          "package": "language-python",
          "signature": "SpanCoLinear",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcSpan",
          "type": "function"
        },
        "index": {
          "description": "span which starts and ends on the same line",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "SpanCoLinear",
          "package": "language-python",
          "partial": "Span Co Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:SpanCoLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo span information.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "SpanEmpty",
          "package": "language-python",
          "signature": "SpanEmpty",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcSpan",
          "type": "function"
        },
        "index": {
          "description": "No span information",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "SpanEmpty",
          "package": "language-python",
          "partial": "Span Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:SpanEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA span which starts and ends on different lines.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "SpanMultiLine",
          "package": "language-python",
          "signature": "SpanMultiLine",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcSpan",
          "type": "function"
        },
        "index": {
          "description": "span which starts and ends on different lines",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "SpanMultiLine",
          "package": "language-python",
          "partial": "Span Multi Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:SpanMultiLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA span which is actually just one point in the file.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "SpanPoint",
          "package": "language-python",
          "signature": "SpanPoint",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcSpan",
          "type": "function"
        },
        "index": {
          "description": "span which is actually just one point in the file",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "SpanPoint",
          "package": "language-python",
          "partial": "Span Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:SpanPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines two \u003ccode\u003e\u003ca\u003eSrcSpan\u003c/a\u003e\u003c/code\u003e into one that spans at least all the characters\n within both spans. Assumes the \u003ca\u003efile\u003c/a\u003e part is the same in both inputs\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "combineSrcSpans",
          "package": "language-python",
          "signature": "SrcSpan -\u003e SrcSpan -\u003e SrcSpan",
          "source": "src/Language-Python-Common-SrcLocation.html#combineSrcSpans",
          "type": "function"
        },
        "index": {
          "description": "Combines two SrcSpan into one that spans at least all the characters within both spans Assumes the file part is the same in both inputs",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "combineSrcSpans",
          "normalized": "SrcSpan-\u003eSrcSpan-\u003eSrcSpan",
          "package": "language-python",
          "partial": "Src Spans",
          "signature": "SrcSpan-\u003eSrcSpan-\u003eSrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:combineSrcSpans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrement the column of a location, only if they are on the same row.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "decColumn",
          "package": "language-python",
          "signature": "Int -\u003e SrcLocation -\u003e SrcLocation",
          "source": "src/Language-Python-Common-SrcLocation.html#decColumn",
          "type": "function"
        },
        "index": {
          "description": "Decrement the column of location only if they are on the same row",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "decColumn",
          "normalized": "Int-\u003eSrcLocation-\u003eSrcLocation",
          "package": "language-python",
          "partial": "Column",
          "signature": "Int-\u003eSrcLocation-\u003eSrcLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:decColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the column of the end of a span.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "endCol",
          "package": "language-python",
          "signature": "SrcSpan -\u003e Int",
          "source": "src/Language-Python-Common-SrcLocation.html#endCol",
          "type": "function"
        },
        "index": {
          "description": "Get the column of the end of span",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "endCol",
          "normalized": "SrcSpan-\u003eInt",
          "package": "language-python",
          "partial": "Col",
          "signature": "SrcSpan-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:endCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the row of the end of a span.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "endRow",
          "package": "language-python",
          "signature": "SrcSpan -\u003e Int",
          "source": "src/Language-Python-Common-SrcLocation.html#endRow",
          "type": "function"
        },
        "index": {
          "description": "Get the row of the end of span",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "endRow",
          "normalized": "SrcSpan-\u003eInt",
          "package": "language-python",
          "partial": "Row",
          "signature": "SrcSpan-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:endRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.SrcLocation",
          "name": "getSpan",
          "package": "language-python",
          "signature": "a -\u003e SrcSpan",
          "source": "src/Language-Python-Common-SrcLocation.html#getSpan",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "getSpan",
          "normalized": "a-\u003eSrcSpan",
          "package": "language-python",
          "partial": "Span",
          "signature": "a-\u003eSrcSpan",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:getSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the column of a location. \n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "incColumn",
          "package": "language-python",
          "signature": "Int -\u003e SrcLocation -\u003e SrcLocation",
          "source": "src/Language-Python-Common-SrcLocation.html#incColumn",
          "type": "function"
        },
        "index": {
          "description": "Increment the column of location",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "incColumn",
          "normalized": "Int-\u003eSrcLocation-\u003eSrcLocation",
          "package": "language-python",
          "partial": "Column",
          "signature": "Int-\u003eSrcLocation-\u003eSrcLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:incColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the line number (row) of a location by one.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "incLine",
          "package": "language-python",
          "signature": "Int -\u003e SrcLocation -\u003e SrcLocation",
          "source": "src/Language-Python-Common-SrcLocation.html#incLine",
          "type": "function"
        },
        "index": {
          "description": "Increment the line number row of location by one",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "incLine",
          "normalized": "Int-\u003eSrcLocation-\u003eSrcLocation",
          "package": "language-python",
          "partial": "Line",
          "signature": "Int-\u003eSrcLocation-\u003eSrcLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:incLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the column of a location by one tab stop.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "incTab",
          "package": "language-python",
          "signature": "SrcLocation -\u003e SrcLocation",
          "source": "src/Language-Python-Common-SrcLocation.html#incTab",
          "type": "function"
        },
        "index": {
          "description": "Increment the column of location by one tab stop",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "incTab",
          "normalized": "SrcLocation-\u003eSrcLocation",
          "package": "language-python",
          "partial": "Tab",
          "signature": "SrcLocation-\u003eSrcLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:incTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the initial source location for a file.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "initialSrcLocation",
          "package": "language-python",
          "signature": "String -\u003e SrcLocation",
          "source": "src/Language-Python-Common-SrcLocation.html#initialSrcLocation",
          "type": "function"
        },
        "index": {
          "description": "Construct the initial source location for file",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "initialSrcLocation",
          "normalized": "String-\u003eSrcLocation",
          "package": "language-python",
          "partial": "Src Location",
          "signature": "String-\u003eSrcLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:initialSrcLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a span from two locations. Assumption: either the\n arguments are the same, or the left one preceeds the right one.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "mkSrcSpan",
          "package": "language-python",
          "signature": "SrcLocation -\u003e SrcLocation -\u003e SrcSpan",
          "source": "src/Language-Python-Common-SrcLocation.html#mkSrcSpan",
          "type": "function"
        },
        "index": {
          "description": "Make span from two locations Assumption either the arguments are the same or the left one preceeds the right one",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "mkSrcSpan",
          "normalized": "SrcLocation-\u003eSrcLocation-\u003eSrcSpan",
          "package": "language-python",
          "partial": "Src Span",
          "signature": "SrcLocation-\u003eSrcLocation-\u003eSrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:mkSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.SrcLocation",
          "name": "sloc_column",
          "package": "language-python",
          "signature": "Int",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "sloc_column",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:sloc_column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.SrcLocation",
          "name": "sloc_filename",
          "package": "language-python",
          "signature": "String",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "sloc_filename",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:sloc_filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.SrcLocation",
          "name": "sloc_row",
          "package": "language-python",
          "signature": "Int",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "sloc_row",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:sloc_row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a point span from the start of a span\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "spanStartPoint",
          "package": "language-python",
          "signature": "SrcSpan -\u003e SrcSpan",
          "source": "src/Language-Python-Common-SrcLocation.html#spanStartPoint",
          "type": "function"
        },
        "index": {
          "description": "Make point span from the start of span",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "spanStartPoint",
          "normalized": "SrcSpan-\u003eSrcSpan",
          "package": "language-python",
          "partial": "Start Point",
          "signature": "SrcSpan-\u003eSrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:spanStartPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.SrcLocation",
          "name": "span_column",
          "package": "language-python",
          "signature": "Int",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "span_column",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:span_column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.SrcLocation",
          "name": "span_end_column",
          "package": "language-python",
          "signature": "Int",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "span_end_column",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:span_end_column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.SrcLocation",
          "name": "span_end_row",
          "package": "language-python",
          "signature": "Int",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "span_end_row",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:span_end_row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.SrcLocation",
          "name": "span_filename",
          "package": "language-python",
          "signature": "String",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "span_filename",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:span_filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.SrcLocation",
          "name": "span_row",
          "package": "language-python",
          "signature": "Int",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "span_row",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:span_row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.SrcLocation",
          "name": "span_start_column",
          "package": "language-python",
          "signature": "Int",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "span_start_column",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:span_start_column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.SrcLocation",
          "name": "span_start_row",
          "package": "language-python",
          "signature": "Int",
          "source": "src/Language-Python-Common-SrcLocation.html#SrcSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "span_start_row",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:span_start_row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new span which encloses two spanned things.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "spanning",
          "package": "language-python",
          "signature": "a -\u003e b -\u003e SrcSpan",
          "source": "src/Language-Python-Common-SrcLocation.html#spanning",
          "type": "function"
        },
        "index": {
          "description": "Create new span which encloses two spanned things",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "spanning",
          "normalized": "a-\u003eb-\u003eSrcSpan",
          "package": "language-python",
          "signature": "a-\u003eb-\u003eSrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:spanning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the column of the start of a span.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "startCol",
          "package": "language-python",
          "signature": "SrcSpan -\u003e Int",
          "source": "src/Language-Python-Common-SrcLocation.html#startCol",
          "type": "function"
        },
        "index": {
          "description": "Get the column of the start of span",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "startCol",
          "normalized": "SrcSpan-\u003eInt",
          "package": "language-python",
          "partial": "Col",
          "signature": "SrcSpan-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:startCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the row of the start of a span.\n\u003c/p\u003e",
          "module": "Language.Python.Common.SrcLocation",
          "name": "startRow",
          "package": "language-python",
          "signature": "SrcSpan -\u003e Int",
          "source": "src/Language-Python-Common-SrcLocation.html#startRow",
          "type": "function"
        },
        "index": {
          "description": "Get the row of the start of span",
          "hierarchy": "Language Python Common SrcLocation",
          "module": "Language.Python.Common.SrcLocation",
          "name": "startRow",
          "normalized": "SrcSpan-\u003eInt",
          "package": "language-python",
          "partial": "Row",
          "signature": "SrcSpan-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-SrcLocation.html#v:startRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion to/from escaped characters in strings. Note: currently does not\n support escaped Unicode character names.\n\u003c/p\u003e\u003cp\u003eSee:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Version 2.6 \u003ca\u003ehttp://www.python.org/doc/2.6/reference/lexical_analysis.html#string-literals\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Version 3.1 \u003ca\u003ehttp://www.python.org/doc/3.1/reference/lexical_analysis.html#string-and-bytes-literals\u003c/a\u003e \n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Language.Python.Common.StringEscape",
          "name": "StringEscape",
          "package": "language-python",
          "source": "src/Language-Python-Common-StringEscape.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion to from escaped characters in strings Note currently does not support escaped Unicode character names See Version http www.python.org doc reference lexical analysis.html string-literals Version http www.python.org doc reference lexical analysis.html string-and-bytes-literals",
          "hierarchy": "Language Python Common StringEscape",
          "module": "Language.Python.Common.StringEscape",
          "name": "StringEscape",
          "package": "language-python",
          "partial": "String Escape",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-StringEscape.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of valid hex digits in Python.\n\u003c/p\u003e",
          "module": "Language.Python.Common.StringEscape",
          "name": "hexDigits",
          "package": "language-python",
          "signature": "String",
          "source": "src/Language-Python-Common-StringEscape.html#hexDigits",
          "type": "function"
        },
        "index": {
          "description": "The set of valid hex digits in Python",
          "hierarchy": "Language Python Common StringEscape",
          "module": "Language.Python.Common.StringEscape",
          "name": "hexDigits",
          "package": "language-python",
          "partial": "Digits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-StringEscape.html#v:hexDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of valid octal digits in Python.\n\u003c/p\u003e",
          "module": "Language.Python.Common.StringEscape",
          "name": "octalDigits",
          "package": "language-python",
          "signature": "String",
          "source": "src/Language-Python-Common-StringEscape.html#octalDigits",
          "type": "function"
        },
        "index": {
          "description": "The set of valid octal digits in Python",
          "hierarchy": "Language Python Common StringEscape",
          "module": "Language.Python.Common.StringEscape",
          "name": "octalDigits",
          "package": "language-python",
          "partial": "Digits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-StringEscape.html#v:octalDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert escaped sequences of characters into \u003cem\u003ereal\u003c/em\u003e characters in a raw Python string.\n Note: despite their name, Python raw strings do allow a small set of character escapings,\n namely the single and double quote characters and the line continuation marker.\n\u003c/p\u003e",
          "module": "Language.Python.Common.StringEscape",
          "name": "unescapeRawString",
          "package": "language-python",
          "signature": "String -\u003e String",
          "source": "src/Language-Python-Common-StringEscape.html#unescapeRawString",
          "type": "function"
        },
        "index": {
          "description": "Convert escaped sequences of characters into real characters in raw Python string Note despite their name Python raw strings do allow small set of character escapings namely the single and double quote characters and the line continuation marker",
          "hierarchy": "Language Python Common StringEscape",
          "module": "Language.Python.Common.StringEscape",
          "name": "unescapeRawString",
          "normalized": "String-\u003eString",
          "package": "language-python",
          "partial": "Raw String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-StringEscape.html#v:unescapeRawString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert escaped sequences of characters into \u003cem\u003ereal\u003c/em\u003e characters in a normal Python string.\n\u003c/p\u003e",
          "module": "Language.Python.Common.StringEscape",
          "name": "unescapeString",
          "package": "language-python",
          "signature": "String -\u003e String",
          "source": "src/Language-Python-Common-StringEscape.html#unescapeString",
          "type": "function"
        },
        "index": {
          "description": "Convert escaped sequences of characters into real characters in normal Python string",
          "hierarchy": "Language Python Common StringEscape",
          "module": "Language.Python.Common.StringEscape",
          "name": "unescapeString",
          "normalized": "String-\u003eString",
          "package": "language-python",
          "partial": "String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-StringEscape.html#v:unescapeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLexical tokens for the Python lexer. Contains the superset of tokens from\n version 2 and version 3 of Python (they are mostly the same).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Python.Common.Token",
          "name": "Token",
          "package": "language-python",
          "source": "src/Language-Python-Common-Token.html",
          "type": "module"
        },
        "index": {
          "description": "Lexical tokens for the Python lexer Contains the superset of tokens from version and version of Python they are mostly the same",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "Token",
          "package": "language-python",
          "partial": "Token",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexical tokens.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "Token",
          "package": "language-python",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "data"
        },
        "index": {
          "description": "Lexical tokens",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "Token",
          "package": "language-python",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassification of tokens\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "TokenClass",
          "package": "language-python",
          "source": "src/Language-Python-Common-Token.html#TokenClass",
          "type": "data"
        },
        "index": {
          "description": "Classification of tokens",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "TokenClass",
          "package": "language-python",
          "partial": "Token Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#t:TokenClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: boolean conjunction 'and'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "AndToken",
          "package": "language-python",
          "signature": "AndToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword boolean conjunction and",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "AndToken",
          "package": "language-python",
          "partial": "And Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:AndToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'as'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "AsToken",
          "package": "language-python",
          "signature": "AsToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword as",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "AsToken",
          "package": "language-python",
          "partial": "As Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:AsToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'assert'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "AssertToken",
          "package": "language-python",
          "signature": "AssertToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword assert",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "AssertToken",
          "package": "language-python",
          "partial": "Assert Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:AssertToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: assignment '='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "AssignToken",
          "package": "language-python",
          "signature": "AssignToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter assignment",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "AssignToken",
          "package": "language-python",
          "partial": "Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:AssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "Assignment",
          "package": "language-python",
          "signature": "Assignment",
          "source": "src/Language-Python-Common-Token.html#TokenClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "Assignment",
          "package": "language-python",
          "partial": "Assignment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:Assignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: at sign '@'. \n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "AtToken",
          "package": "language-python",
          "signature": "AtToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter at sign",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "AtToken",
          "package": "language-python",
          "partial": "At Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:AtToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: back quote character '`\\'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "BackQuoteToken",
          "package": "language-python",
          "signature": "BackQuoteToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter back quote character",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "BackQuoteToken",
          "package": "language-python",
          "partial": "Back Quote Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:BackQuoteToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: binary-and assignment '&='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "BinAndAssignToken",
          "package": "language-python",
          "signature": "BinAndAssignToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter binary-and assignment",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "BinAndAssignToken",
          "package": "language-python",
          "partial": "Bin And Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:BinAndAssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: binary-or assignment '|='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "BinOrAssignToken",
          "package": "language-python",
          "signature": "BinOrAssignToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter binary-or assignment",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "BinOrAssignToken",
          "package": "language-python",
          "partial": "Bin Or Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:BinOrAssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: binary-xor assignment '^='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "BinXorAssignToken",
          "package": "language-python",
          "signature": "BinXorAssignToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter binary-xor assignment",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "BinXorAssignToken",
          "package": "language-python",
          "partial": "Bin Xor Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:BinXorAssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: binary-and '&'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "BinaryAndToken",
          "package": "language-python",
          "signature": "BinaryAndToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator binary-and",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "BinaryAndToken",
          "package": "language-python",
          "partial": "Binary And Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:BinaryAndToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: binary-or '|'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "BinaryOrToken",
          "package": "language-python",
          "signature": "BinaryOrToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator binary-or",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "BinaryOrToken",
          "package": "language-python",
          "partial": "Binary Or Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:BinaryOrToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "Bracket",
          "package": "language-python",
          "signature": "Bracket",
          "source": "src/Language-Python-Common-Token.html#TokenClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "Bracket",
          "package": "language-python",
          "partial": "Bracket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:Bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'break'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "BreakToken",
          "package": "language-python",
          "signature": "BreakToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword break",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "BreakToken",
          "package": "language-python",
          "partial": "Break Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:BreakToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral: byte string.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ByteStringToken",
          "package": "language-python",
          "signature": "ByteStringToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Literal byte string",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ByteStringToken",
          "package": "language-python",
          "partial": "Byte String Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ByteStringToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'class'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ClassToken",
          "package": "language-python",
          "signature": "ClassToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword class",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ClassToken",
          "package": "language-python",
          "partial": "Class Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ClassToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: colon ':'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ColonToken",
          "package": "language-python",
          "signature": "ColonToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter colon",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ColonToken",
          "package": "language-python",
          "partial": "Colon Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ColonToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: comma ','.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "CommaToken",
          "package": "language-python",
          "signature": "CommaToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter comma",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "CommaToken",
          "package": "language-python",
          "partial": "Comma Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:CommaToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "Comment",
          "package": "language-python",
          "signature": "Comment",
          "source": "src/Language-Python-Common-Token.html#TokenClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "Comment",
          "package": "language-python",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle line comment.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "CommentToken",
          "package": "language-python",
          "signature": "CommentToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Single line comment",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "CommentToken",
          "package": "language-python",
          "partial": "Comment Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:CommentToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'continue'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ContinueToken",
          "package": "language-python",
          "signature": "ContinueToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword continue",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ContinueToken",
          "package": "language-python",
          "partial": "Continue Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ContinueToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation: decrease.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "DedentToken",
          "package": "language-python",
          "signature": "DedentToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Indentation decrease",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "DedentToken",
          "package": "language-python",
          "partial": "Dedent Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:DedentToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'def'. \n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "DefToken",
          "package": "language-python",
          "signature": "DefToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword def",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "DefToken",
          "package": "language-python",
          "partial": "Def Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:DefToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'del'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "DeleteToken",
          "package": "language-python",
          "signature": "DeleteToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword del",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "DeleteToken",
          "package": "language-python",
          "partial": "Delete Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:DeleteToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: divide assignment '/='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "DivAssignToken",
          "package": "language-python",
          "signature": "DivAssignToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter divide assignment",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "DivAssignToken",
          "package": "language-python",
          "partial": "Div Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:DivAssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: divide '/'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "DivToken",
          "package": "language-python",
          "signature": "DivToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator divide",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "DivToken",
          "package": "language-python",
          "partial": "Div Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:DivToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: dot (full stop) '.'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "DotToken",
          "package": "language-python",
          "signature": "DotToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter dot full stop",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "DotToken",
          "package": "language-python",
          "partial": "Dot Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:DotToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd of file \n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "EOFToken",
          "package": "language-python",
          "signature": "EOFToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "End of file",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "EOFToken",
          "package": "language-python",
          "partial": "EOFToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:EOFToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'elif'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ElifToken",
          "package": "language-python",
          "signature": "ElifToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword elif",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ElifToken",
          "package": "language-python",
          "partial": "Elif Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ElifToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: ellipses (three dots) '...'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "EllipsisToken",
          "package": "language-python",
          "signature": "EllipsisToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter ellipses three dots",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "EllipsisToken",
          "package": "language-python",
          "partial": "Ellipsis Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:EllipsisToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'else'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ElseToken",
          "package": "language-python",
          "signature": "ElseToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword else",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ElseToken",
          "package": "language-python",
          "partial": "Else Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ElseToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: equals '=='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "EqualityToken",
          "package": "language-python",
          "signature": "EqualityToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator equals",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "EqualityToken",
          "package": "language-python",
          "partial": "Equality Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:EqualityToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'except'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ExceptToken",
          "package": "language-python",
          "signature": "ExceptToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword except",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ExceptToken",
          "package": "language-python",
          "partial": "Except Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ExceptToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'exec'. (Python 2.x only)\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ExecToken",
          "package": "language-python",
          "signature": "ExecToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword exec Python only",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ExecToken",
          "package": "language-python",
          "partial": "Exec Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ExecToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: exponential '**'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ExponentToken",
          "package": "language-python",
          "signature": "ExponentToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator exponential",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ExponentToken",
          "package": "language-python",
          "partial": "Exponent Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ExponentToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'False'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "FalseToken",
          "package": "language-python",
          "signature": "FalseToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword False",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "FalseToken",
          "package": "language-python",
          "partial": "False Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:FalseToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'finally'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "FinallyToken",
          "package": "language-python",
          "signature": "FinallyToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword finally",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "FinallyToken",
          "package": "language-python",
          "partial": "Finally Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:FinallyToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral: floating point.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "FloatToken",
          "package": "language-python",
          "signature": "FloatToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Literal floating point",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "FloatToken",
          "package": "language-python",
          "partial": "Float Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:FloatToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: floor-divide assignment '\u003cem/\u003e='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "FloorDivAssignToken",
          "package": "language-python",
          "signature": "FloorDivAssignToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter floor-divide assignment",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "FloorDivAssignToken",
          "package": "language-python",
          "partial": "Floor Div Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:FloorDivAssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: floor-divide '\u003cem/\u003e'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "FloorDivToken",
          "package": "language-python",
          "signature": "FloorDivToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator floor-divide",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "FloorDivToken",
          "package": "language-python",
          "partial": "Floor Div Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:FloorDivToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'for'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ForToken",
          "package": "language-python",
          "signature": "ForToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword for",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ForToken",
          "package": "language-python",
          "partial": "For Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ForToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'from'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "FromToken",
          "package": "language-python",
          "signature": "FromToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword from",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "FromToken",
          "package": "language-python",
          "partial": "From Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:FromToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'global'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "GlobalToken",
          "package": "language-python",
          "signature": "GlobalToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword global",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "GlobalToken",
          "package": "language-python",
          "partial": "Global Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:GlobalToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: greater-than-or-equals '\u003e='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "GreaterThanEqualsToken",
          "package": "language-python",
          "signature": "GreaterThanEqualsToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator greater-than-or-equals",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "GreaterThanEqualsToken",
          "package": "language-python",
          "partial": "Greater Than Equals Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:GreaterThanEqualsToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: greater-than '\u003e'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "GreaterThanToken",
          "package": "language-python",
          "signature": "GreaterThanToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator greater-than",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "GreaterThanToken",
          "package": "language-python",
          "partial": "Greater Than Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:GreaterThanToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "Identifier",
          "package": "language-python",
          "signature": "Identifier",
          "source": "src/Language-Python-Common-Token.html#TokenClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "Identifier",
          "package": "language-python",
          "partial": "Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifier.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "IdentifierToken",
          "package": "language-python",
          "signature": "IdentifierToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Identifier",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "IdentifierToken",
          "package": "language-python",
          "partial": "Identifier Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:IdentifierToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'if'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "IfToken",
          "package": "language-python",
          "signature": "IfToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword if",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "IfToken",
          "package": "language-python",
          "partial": "If Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:IfToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral: imaginary number.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ImaginaryToken",
          "package": "language-python",
          "signature": "ImaginaryToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Literal imaginary number",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ImaginaryToken",
          "package": "language-python",
          "partial": "Imaginary Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ImaginaryToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'import'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ImportToken",
          "package": "language-python",
          "signature": "ImportToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword import",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ImportToken",
          "package": "language-python",
          "partial": "Import Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ImportToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'in'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "InToken",
          "package": "language-python",
          "signature": "InToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword in",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "InToken",
          "package": "language-python",
          "partial": "In Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:InToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation: increase.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "IndentToken",
          "package": "language-python",
          "signature": "IndentToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Indentation increase",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "IndentToken",
          "package": "language-python",
          "partial": "Indent Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:IndentToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral: integer.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "IntegerToken",
          "package": "language-python",
          "signature": "IntegerToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Literal integer",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "IntegerToken",
          "package": "language-python",
          "partial": "Integer Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:IntegerToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'is'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "IsToken",
          "package": "language-python",
          "signature": "IsToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword is",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "IsToken",
          "package": "language-python",
          "partial": "Is Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:IsToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "Keyword",
          "package": "language-python",
          "signature": "Keyword",
          "source": "src/Language-Python-Common-Token.html#TokenClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "Keyword",
          "package": "language-python",
          "partial": "Keyword",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:Keyword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'lambda'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "LambdaToken",
          "package": "language-python",
          "signature": "LambdaToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword lambda",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "LambdaToken",
          "package": "language-python",
          "partial": "Lambda Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:LambdaToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "Layout",
          "package": "language-python",
          "signature": "Layout",
          "source": "src/Language-Python-Common-Token.html#TokenClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "Layout",
          "package": "language-python",
          "partial": "Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:Layout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: left curly bracket '{'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "LeftBraceToken",
          "package": "language-python",
          "signature": "LeftBraceToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter left curly bracket",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "LeftBraceToken",
          "package": "language-python",
          "partial": "Left Brace Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:LeftBraceToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: left round bracket '('.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "LeftRoundBracketToken",
          "package": "language-python",
          "signature": "LeftRoundBracketToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter left round bracket",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "LeftRoundBracketToken",
          "package": "language-python",
          "partial": "Left Round Bracket Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:LeftRoundBracketToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: binary-left-shift assignment '\u003c\u003c='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "LeftShiftAssignToken",
          "package": "language-python",
          "signature": "LeftShiftAssignToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter binary-left-shift assignment",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "LeftShiftAssignToken",
          "package": "language-python",
          "partial": "Left Shift Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:LeftShiftAssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: left square bracket '['.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "LeftSquareBracketToken",
          "package": "language-python",
          "signature": "LeftSquareBracketToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter left square bracket",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "LeftSquareBracketToken",
          "package": "language-python",
          "partial": "Left Square Bracket Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:LeftSquareBracketToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: less-than-or-equals '\u003c='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "LessThanEqualsToken",
          "package": "language-python",
          "signature": "LessThanEqualsToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator less-than-or-equals",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "LessThanEqualsToken",
          "package": "language-python",
          "partial": "Less Than Equals Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:LessThanEqualsToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: less-than '\u003c'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "LessThanToken",
          "package": "language-python",
          "signature": "LessThanToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator less-than",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "LessThanToken",
          "package": "language-python",
          "partial": "Less Than Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:LessThanToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine join (backslash at end of line).\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "LineJoinToken",
          "package": "language-python",
          "signature": "LineJoinToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Line join backslash at end of line",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "LineJoinToken",
          "package": "language-python",
          "partial": "Line Join Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:LineJoinToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral: long integer. \u003cem\u003eVersion 2 only\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "LongIntegerToken",
          "package": "language-python",
          "signature": "LongIntegerToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Literal long integer Version only",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "LongIntegerToken",
          "package": "language-python",
          "partial": "Long Integer Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:LongIntegerToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: minus assignment '-='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "MinusAssignToken",
          "package": "language-python",
          "signature": "MinusAssignToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter minus assignment",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "MinusAssignToken",
          "package": "language-python",
          "partial": "Minus Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:MinusAssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: minus: '-'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "MinusToken",
          "package": "language-python",
          "signature": "MinusToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator minus",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "MinusToken",
          "package": "language-python",
          "partial": "Minus Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:MinusToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: modulus assignment '%='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ModAssignToken",
          "package": "language-python",
          "signature": "ModAssignToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter modulus assignment",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ModAssignToken",
          "package": "language-python",
          "partial": "Mod Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ModAssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: modulus '%'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ModuloToken",
          "package": "language-python",
          "signature": "ModuloToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator modulus",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ModuloToken",
          "package": "language-python",
          "partial": "Modulo Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ModuloToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: multiply assignment '*='\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "MultAssignToken",
          "package": "language-python",
          "signature": "MultAssignToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter multiply assignment",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "MultAssignToken",
          "package": "language-python",
          "partial": "Mult Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:MultAssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: multiply '*'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "MultToken",
          "package": "language-python",
          "signature": "MultToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator multiply",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "MultToken",
          "package": "language-python",
          "partial": "Mult Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:MultToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewline.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "NewlineToken",
          "package": "language-python",
          "signature": "NewlineToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Newline",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "NewlineToken",
          "package": "language-python",
          "partial": "Newline Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:NewlineToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'nonlocal' (Python 3.x only)\n Version 2.x only:\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "NonLocalToken",
          "package": "language-python",
          "signature": "NonLocalToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword nonlocal Python only Version only",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "NonLocalToken",
          "package": "language-python",
          "partial": "Non Local Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:NonLocalToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'None'. \n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "NoneToken",
          "package": "language-python",
          "signature": "NoneToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword None",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "NoneToken",
          "package": "language-python",
          "partial": "None Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:NoneToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: not-equals '!='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "NotEqualsToken",
          "package": "language-python",
          "signature": "NotEqualsToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator not-equals",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "NotEqualsToken",
          "package": "language-python",
          "partial": "Not Equals Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:NotEqualsToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: not-equals '\u003ca/\u003e'. Version 2 only.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "NotEqualsV2Token",
          "package": "language-python",
          "signature": "NotEqualsV2Token",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator not-equals Version only",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "NotEqualsV2Token",
          "package": "language-python",
          "partial": "Not Equals Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:NotEqualsV2Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'not'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "NotToken",
          "package": "language-python",
          "signature": "NotToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword not",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "NotToken",
          "package": "language-python",
          "partial": "Not Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:NotToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "Number",
          "package": "language-python",
          "signature": "Number",
          "source": "src/Language-Python-Common-Token.html#TokenClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "Number",
          "package": "language-python",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "Operator",
          "package": "language-python",
          "signature": "Operator",
          "source": "src/Language-Python-Common-Token.html#TokenClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "Operator",
          "package": "language-python",
          "partial": "Operator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:Operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: boolean disjunction 'or'.\n Version 3.x only:\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "OrToken",
          "package": "language-python",
          "signature": "OrToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword boolean disjunction or Version only",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "OrToken",
          "package": "language-python",
          "partial": "Or Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:OrToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'pass'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "PassToken",
          "package": "language-python",
          "signature": "PassToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword pass",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "PassToken",
          "package": "language-python",
          "partial": "Pass Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:PassToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: plus assignment '+='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "PlusAssignToken",
          "package": "language-python",
          "signature": "PlusAssignToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter plus assignment",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "PlusAssignToken",
          "package": "language-python",
          "partial": "Plus Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:PlusAssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: plus '+'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "PlusToken",
          "package": "language-python",
          "signature": "PlusToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator plus",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "PlusToken",
          "package": "language-python",
          "partial": "Plus Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:PlusToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: power assignment '**='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "PowAssignToken",
          "package": "language-python",
          "signature": "PowAssignToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter power assignment",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "PowAssignToken",
          "package": "language-python",
          "partial": "Pow Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:PowAssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'print'. (Python 2.x only)\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "PrintToken",
          "package": "language-python",
          "signature": "PrintToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword print Python only",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "PrintToken",
          "package": "language-python",
          "partial": "Print Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:PrintToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "Punctuation",
          "package": "language-python",
          "signature": "Punctuation",
          "source": "src/Language-Python-Common-Token.html#TokenClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "Punctuation",
          "package": "language-python",
          "partial": "Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:Punctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'raise'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "RaiseToken",
          "package": "language-python",
          "signature": "RaiseToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword raise",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "RaiseToken",
          "package": "language-python",
          "partial": "Raise Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:RaiseToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'Return'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ReturnToken",
          "package": "language-python",
          "signature": "ReturnToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword Return",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ReturnToken",
          "package": "language-python",
          "partial": "Return Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ReturnToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: right facing arrow '-\u003e'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "RightArrowToken",
          "package": "language-python",
          "signature": "RightArrowToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter right facing arrow",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "RightArrowToken",
          "package": "language-python",
          "partial": "Right Arrow Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:RightArrowToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: right curly bracket '}'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "RightBraceToken",
          "package": "language-python",
          "signature": "RightBraceToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter right curly bracket",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "RightBraceToken",
          "package": "language-python",
          "partial": "Right Brace Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:RightBraceToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: right round bracket ')'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "RightRoundBracketToken",
          "package": "language-python",
          "signature": "RightRoundBracketToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter right round bracket",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "RightRoundBracketToken",
          "package": "language-python",
          "partial": "Right Round Bracket Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:RightRoundBracketToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: binary-right-shift assignment '\u003e\u003e='.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "RightShiftAssignToken",
          "package": "language-python",
          "signature": "RightShiftAssignToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter binary-right-shift assignment",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "RightShiftAssignToken",
          "package": "language-python",
          "partial": "Right Shift Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:RightShiftAssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: right square bracket ']'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "RightSquareBracketToken",
          "package": "language-python",
          "signature": "RightSquareBracketToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter right square bracket",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "RightSquareBracketToken",
          "package": "language-python",
          "partial": "Right Square Bracket Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:RightSquareBracketToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter: semicolon ';'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "SemiColonToken",
          "package": "language-python",
          "signature": "SemiColonToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Delimiter semicolon",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "SemiColonToken",
          "package": "language-python",
          "partial": "Semi Colon Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:SemiColonToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: binary-shift-left '\u003c\u003c'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ShiftLeftToken",
          "package": "language-python",
          "signature": "ShiftLeftToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator binary-shift-left",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ShiftLeftToken",
          "package": "language-python",
          "partial": "Shift Left Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ShiftLeftToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: binary-shift-right '\u003e\u003e'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "ShiftRightToken",
          "package": "language-python",
          "signature": "ShiftRightToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator binary-shift-right",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "ShiftRightToken",
          "package": "language-python",
          "partial": "Shift Right Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:ShiftRightToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "String",
          "package": "language-python",
          "signature": "String",
          "source": "src/Language-Python-Common-Token.html#TokenClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "String",
          "package": "language-python",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral: string.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "StringToken",
          "package": "language-python",
          "signature": "StringToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Literal string",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "StringToken",
          "package": "language-python",
          "partial": "String Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:StringToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: tilde '~'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "TildeToken",
          "package": "language-python",
          "signature": "TildeToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator tilde",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "TildeToken",
          "package": "language-python",
          "partial": "Tilde Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:TildeToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'True'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "TrueToken",
          "package": "language-python",
          "signature": "TrueToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword True",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "TrueToken",
          "package": "language-python",
          "partial": "True Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:TrueToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'try'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "TryToken",
          "package": "language-python",
          "signature": "TryToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword try",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "TryToken",
          "package": "language-python",
          "partial": "Try Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:TryToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral: unicode string, version 2 only.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "UnicodeStringToken",
          "package": "language-python",
          "signature": "UnicodeStringToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Literal unicode string version only",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "UnicodeStringToken",
          "package": "language-python",
          "partial": "Unicode String Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:UnicodeStringToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'while'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "WhileToken",
          "package": "language-python",
          "signature": "WhileToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword while",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "WhileToken",
          "package": "language-python",
          "partial": "While Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:WhileToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'with'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "WithToken",
          "package": "language-python",
          "signature": "WithToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword with",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "WithToken",
          "package": "language-python",
          "partial": "With Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:WithToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator: binary-xor '^'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "XorToken",
          "package": "language-python",
          "signature": "XorToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Operator binary-xor",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "XorToken",
          "package": "language-python",
          "partial": "Xor Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:XorToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyword: 'yield'.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "YieldToken",
          "package": "language-python",
          "signature": "YieldToken",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Keyword yield",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "YieldToken",
          "package": "language-python",
          "partial": "Yield Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:YieldToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "classifyToken",
          "package": "language-python",
          "signature": "Token -\u003e TokenClass",
          "source": "src/Language-Python-Common-Token.html#classifyToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "classifyToken",
          "normalized": "Token-\u003eTokenClass",
          "package": "language-python",
          "partial": "Token",
          "signature": "Token-\u003eTokenClass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:classifyToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a string from a token containing detailed information. Mainly intended for debugging. \n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "debugTokenString",
          "package": "language-python",
          "signature": "Token -\u003e String",
          "source": "src/Language-Python-Common-Token.html#debugTokenString",
          "type": "function"
        },
        "index": {
          "description": "Produce string from token containing detailed information Mainly intended for debugging",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "debugTokenString",
          "normalized": "Token-\u003eString",
          "package": "language-python",
          "partial": "Token String",
          "signature": "Token-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:debugTokenString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a token contains its literal source text.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "hasLiteral",
          "package": "language-python",
          "signature": "Token -\u003e Bool",
          "source": "src/Language-Python-Common-Token.html#hasLiteral",
          "type": "function"
        },
        "index": {
          "description": "Test if token contains its literal source text",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "hasLiteral",
          "normalized": "Token-\u003eBool",
          "package": "language-python",
          "partial": "Literal",
          "signature": "Token-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:hasLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a string from a token which is suitable for printing as Python concrete syntax.\n \u003cem\u003eInvisible\u003c/em\u003e tokens yield an empty string.\n\u003c/p\u003e",
          "module": "Language.Python.Common.Token",
          "name": "tokenString",
          "package": "language-python",
          "signature": "Token -\u003e String",
          "source": "src/Language-Python-Common-Token.html#tokenString",
          "type": "function"
        },
        "index": {
          "description": "Produce string from token which is suitable for printing as Python concrete syntax Invisible tokens yield an empty string",
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "tokenString",
          "normalized": "Token-\u003eString",
          "package": "language-python",
          "partial": "String",
          "signature": "Token-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:tokenString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "token_double",
          "package": "language-python",
          "signature": "Double",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "token_double",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:token_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "token_integer",
          "package": "language-python",
          "signature": "Integer",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "token_integer",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:token_integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "token_literal",
          "package": "language-python",
          "signature": "String",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "token_literal",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:token_literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Common.Token",
          "name": "token_span",
          "package": "language-python",
          "signature": "SrcSpan",
          "source": "src/Language-Python-Common-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Common Token",
          "module": "Language.Python.Common.Token",
          "name": "token_span",
          "package": "language-python",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common-Token.html#v:token_span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenient re-export of common code, which \n works with both version 2.x and 3.x of Python.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Python.Common",
          "name": "Common",
          "package": "language-python",
          "source": "src/Language-Python-Common.html",
          "type": "module"
        },
        "index": {
          "description": "Convenient re-export of common code which works with both version and of Python",
          "hierarchy": "Language Python Common",
          "module": "Language.Python.Common",
          "name": "Common",
          "package": "language-python",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLexical analysis for Python version 2.x programs. \n See: \u003ca\u003ehttp://www.python.org/doc/2.6/reference/lexical_analysis.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Python.Version2.Lexer",
          "name": "Lexer",
          "package": "language-python",
          "source": "src/Language-Python-Version2-Lexer.html",
          "type": "module"
        },
        "index": {
          "description": "Lexical analysis for Python version programs See http www.python.org doc reference lexical analysis.html",
          "hierarchy": "Language Python Version2 Lexer",
          "module": "Language.Python.Version2.Lexer",
          "name": "Lexer",
          "package": "language-python",
          "partial": "Lexer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Version2-Lexer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string into a list of Python Tokens, or return an error. \n\u003c/p\u003e",
          "module": "[\"Language.Python.Version2.Lexer\",\"Language.Python.Version3.Lexer\"]",
          "name": "lex",
          "package": "language-python",
          "signature": "String-\u003e String-\u003e Either ParseError [Token]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Version2-Lexer.html#v:lex\",\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Version3-Lexer.html#v:lex\"]"
        },
        "index": {
          "description": "Parse string into list of Python Tokens or return an error",
          "hierarchy": "Language Python Version2 Lexer",
          "module": "Language.Python.Version2.Lexer",
          "name": "lex",
          "normalized": "String-\u003eString-\u003eEither ParseError[Token]",
          "package": "language-python",
          "signature": "String-\u003eString-\u003eEither ParseError[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Version2-Lexer.html#v:lex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to lex the first token in an input string. Return either a parse error\n or a pair containing the next token and the rest of the input after the token.\n\u003c/p\u003e",
          "module": "[\"Language.Python.Version2.Lexer\",\"Language.Python.Version3.Lexer\"]",
          "name": "lexOneToken",
          "package": "language-python",
          "signature": "String-\u003e String-\u003e Either ParseError (Token, String)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Version2-Lexer.html#v:lexOneToken\",\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Version3-Lexer.html#v:lexOneToken\"]"
        },
        "index": {
          "description": "Try to lex the first token in an input string Return either parse error or pair containing the next token and the rest of the input after the token",
          "hierarchy": "Language Python Version2 Lexer",
          "module": "Language.Python.Version2.Lexer",
          "name": "lexOneToken",
          "normalized": "String-\u003eString-\u003eEither ParseError(Token,String)",
          "package": "language-python",
          "partial": "One Token",
          "signature": "String-\u003eString-\u003eEither ParseError(Token,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Version2-Lexer.html#v:lexOneToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA parser for Python version 2.x programs. Parsers are provided for \n modules, statements, and expressions. The parsers produce comment tokens\n in addition to the abstract syntax tree.\n\u003c/p\u003e\u003cp\u003eSee: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/2.6/reference/index.html\u003c/a\u003e for an overview of the language. \n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/2.6/reference/grammar.html\u003c/a\u003e for the full grammar.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/2.6/reference/toplevel_components.html\u003c/a\u003e for a description of \n the various Python top-levels, which correspond to the parsers provided here.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Language.Python.Version2.Parser",
          "name": "Parser",
          "package": "language-python",
          "source": "src/Language-Python-Version2-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "parser for Python version programs Parsers are provided for modules statements and expressions The parsers produce comment tokens in addition to the abstract syntax tree See http www.python.org doc reference index.html for an overview of the language http www.python.org doc reference grammar.html for the full grammar http www.python.org doc reference toplevel components.html for description of the various Python top-levels which correspond to the parsers provided here",
          "hierarchy": "Language Python Version2 Parser",
          "module": "Language.Python.Version2.Parser",
          "name": "Parser",
          "package": "language-python",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Version2-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an expression. Generally used as input for the 'eval' primitive. Return comments in addition to the parsed expression.\n\u003c/p\u003e",
          "module": "[\"Language.Python.Version2.Parser\",\"Language.Python.Version3.Parser\"]",
          "name": "parseExpr",
          "package": "language-python",
          "signature": "String-\u003e String-\u003e Either ParseError (ExprSpan, [Token])",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Version2-Parser.html#v:parseExpr\",\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Version3-Parser.html#v:parseExpr\"]"
        },
        "index": {
          "description": "Parse an expression Generally used as input for the eval primitive Return comments in addition to the parsed expression",
          "hierarchy": "Language Python Version2 Parser",
          "module": "Language.Python.Version2.Parser",
          "name": "parseExpr",
          "normalized": "String-\u003eString-\u003eEither ParseError(ExprSpan,[Token])",
          "package": "language-python",
          "partial": "Expr",
          "signature": "String-\u003eString-\u003eEither ParseError(ExprSpan,[Token])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Version2-Parser.html#v:parseExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a whole Python source file. Return comments in addition to the parsed module.\n\u003c/p\u003e",
          "module": "[\"Language.Python.Version2.Parser\",\"Language.Python.Version3.Parser\"]",
          "name": "parseModule",
          "package": "language-python",
          "signature": "String-\u003e String-\u003e Either ParseError (ModuleSpan, [Token])",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Version2-Parser.html#v:parseModule\",\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Version3-Parser.html#v:parseModule\"]"
        },
        "index": {
          "description": "Parse whole Python source file Return comments in addition to the parsed module",
          "hierarchy": "Language Python Version2 Parser",
          "module": "Language.Python.Version2.Parser",
          "name": "parseModule",
          "normalized": "String-\u003eString-\u003eEither ParseError(ModuleSpan,[Token])",
          "package": "language-python",
          "partial": "Module",
          "signature": "String-\u003eString-\u003eEither ParseError(ModuleSpan,[Token])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Version2-Parser.html#v:parseModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one compound statement, or a sequence of simple statements. Generally used for interactive input, such as from the command line of an interpreter. Return comments in addition to the parsed statements.\n\u003c/p\u003e",
          "module": "[\"Language.Python.Version2.Parser\",\"Language.Python.Version3.Parser\"]",
          "name": "parseStmt",
          "package": "language-python",
          "signature": "String-\u003e String-\u003e Either ParseError ([StatementSpan], [Token])",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Version2-Parser.html#v:parseStmt\",\"http://hackage.haskell.org/package/language-python/docs/Language-Python-Version3-Parser.html#v:parseStmt\"]"
        },
        "index": {
          "description": "Parse one compound statement or sequence of simple statements Generally used for interactive input such as from the command line of an interpreter Return comments in addition to the parsed statements",
          "hierarchy": "Language Python Version2 Parser",
          "module": "Language.Python.Version2.Parser",
          "name": "parseStmt",
          "normalized": "String-\u003eString-\u003eEither ParseError([StatementSpan],[Token])",
          "package": "language-python",
          "partial": "Stmt",
          "signature": "String-\u003eString-\u003eEither ParseError([StatementSpan],[Token])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Version2-Parser.html#v:parseStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA convenient re-export of the parser and lexer for version 2.x of Python. \n\u003c/p\u003e\u003cp\u003eSee: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/2.6/reference/index.html\u003c/a\u003e for an overview of the language. \n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/2.6/reference/grammar.html\u003c/a\u003e for the full grammar.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/2.6/reference/toplevel_components.html\u003c/a\u003e for a description of \n the various Python top-levels, which correspond to the parsers provided here.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Language.Python.Version2",
          "name": "Version2",
          "package": "language-python",
          "source": "src/Language-Python-Version2.html",
          "type": "module"
        },
        "index": {
          "description": "convenient re-export of the parser and lexer for version of Python See http www.python.org doc reference index.html for an overview of the language http www.python.org doc reference grammar.html for the full grammar http www.python.org doc reference toplevel components.html for description of the various Python top-levels which correspond to the parsers provided here",
          "hierarchy": "Language Python Version2",
          "module": "Language.Python.Version2",
          "name": "Version2",
          "package": "language-python",
          "partial": "Version",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Version2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLexical analysis for Python version 3.x programs. \n See: \u003ca\u003ehttp://www.python.org/doc/3.1/reference/lexical_analysis.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Python.Version3.Lexer",
          "name": "Lexer",
          "package": "language-python",
          "source": "src/Language-Python-Version3-Lexer.html",
          "type": "module"
        },
        "index": {
          "description": "Lexical analysis for Python version programs See http www.python.org doc reference lexical analysis.html",
          "hierarchy": "Language Python Version3 Lexer",
          "module": "Language.Python.Version3.Lexer",
          "name": "Lexer",
          "package": "language-python",
          "partial": "Lexer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Version3-Lexer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Python.Version3.Lexer",
          "name": "initLexState",
          "package": "language-python",
          "signature": "String -\u003e String -\u003e ParseState",
          "source": "src/Language-Python-Version3-Lexer.html#initLexState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Python Version3 Lexer",
          "module": "Language.Python.Version3.Lexer",
          "name": "initLexState",
          "normalized": "String-\u003eString-\u003eParseState",
          "package": "language-python",
          "partial": "Lex State",
          "signature": "String-\u003eString-\u003eParseState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Version3-Lexer.html#v:initLexState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLex a sequence of tokens.\n\u003c/p\u003e",
          "module": "Language.Python.Version3.Lexer",
          "name": "lexer",
          "package": "language-python",
          "signature": "P [Token]",
          "source": "src/Language-Python-Version3-Lexer.html#lexer",
          "type": "function"
        },
        "index": {
          "description": "Lex sequence of tokens",
          "hierarchy": "Language Python Version3 Lexer",
          "module": "Language.Python.Version3.Lexer",
          "name": "lexer",
          "normalized": "P[Token]",
          "package": "language-python",
          "signature": "P[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Version3-Lexer.html#v:lexer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA parser for Python version 3.x programs. Parsers are provided for \n modules, statements, and expressions. The parsers produce comment tokens\n in addition to the abstract syntax tree.\n\u003c/p\u003e\u003cp\u003eSee: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/3.1/reference/index.html\u003c/a\u003e for an overview of the language. \n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/3.1/reference/grammar.html\u003c/a\u003e for the full grammar.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/3.1/reference/toplevel_components.html\u003c/a\u003e for a description of \n the various Python top-levels, which correspond to the parsers provided here.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Language.Python.Version3.Parser",
          "name": "Parser",
          "package": "language-python",
          "source": "src/Language-Python-Version3-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "parser for Python version programs Parsers are provided for modules statements and expressions The parsers produce comment tokens in addition to the abstract syntax tree See http www.python.org doc reference index.html for an overview of the language http www.python.org doc reference grammar.html for the full grammar http www.python.org doc reference toplevel components.html for description of the various Python top-levels which correspond to the parsers provided here",
          "hierarchy": "Language Python Version3 Parser",
          "module": "Language.Python.Version3.Parser",
          "name": "Parser",
          "package": "language-python",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Version3-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA convenient re-export of the parser and lexer for version 3.x of Python. \n\u003c/p\u003e\u003cp\u003eSee: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/3.1/reference/index.html\u003c/a\u003e for an overview of the language. \n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/3.1/reference/grammar.html\u003c/a\u003e for the full grammar.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.python.org/doc/3.1/reference/toplevel_components.html\u003c/a\u003e for a description of \n the various Python top-levels, which correspond to the parsers provided here.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Language.Python.Version3",
          "name": "Version3",
          "package": "language-python",
          "source": "src/Language-Python-Version3.html",
          "type": "module"
        },
        "index": {
          "description": "convenient re-export of the parser and lexer for version of Python See http www.python.org doc reference index.html for an overview of the language http www.python.org doc reference grammar.html for the full grammar http www.python.org doc reference toplevel components.html for description of the various Python top-levels which correspond to the parsers provided here",
          "hierarchy": "Language Python Version3",
          "module": "Language.Python.Version3",
          "name": "Version3",
          "package": "language-python",
          "partial": "Version",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-python/docs/Language-Python-Version3.html#"
      }
    }
  ]
]