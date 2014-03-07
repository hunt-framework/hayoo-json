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
        "word": "free-theorems"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclares the basic syntax of a Haskell98 subset enriched with \n   higher-ranked functions. Additionally, it defines small convenience\n   functions. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "BasicSyntax",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html",
          "type": "module"
        },
        "index": {
          "description": "Declares the basic syntax of Haskell98 subset enriched with higher-ranked functions Additionally it defines small convenience functions",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "BasicSyntax",
          "package": "free-theorems",
          "partial": "Basic Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates whether in an algebraic data type declaration a strictness\n   annotation is used.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "BangTypeExpression",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#BangTypeExpression",
          "type": "data"
        },
        "index": {
          "description": "Indicates whether in an algebraic data type declaration strictness annotation is used",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "BangTypeExpression",
          "package": "free-theorems",
          "partial": "Bang Type Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#t:BangTypeExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eclass\u003c/code\u003e declaration for a type class.\n\u003c/p\u003e\u003cp\u003eNote that, except of type signatures of class methods, all other\n   declarations inside the class are ignored.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "ClassDeclaration",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#ClassDeclaration",
          "type": "data"
        },
        "index": {
          "description": "class declaration for type class Note that except of type signatures of class methods all other declarations inside the class are ignored",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "ClassDeclaration",
          "package": "free-theorems",
          "partial": "Class Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#t:ClassDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data constructor declaration.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "DataConstructorDeclaration",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#DataConstructorDeclaration",
          "type": "data"
        },
        "index": {
          "description": "data constructor declaration",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "DataConstructorDeclaration",
          "package": "free-theorems",
          "partial": "Data Constructor Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#t:DataConstructorDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003edata\u003c/code\u003e declaration for an algebraic data type.\n\u003c/p\u003e\u003cp\u003eNote that the context and the deriving parts of a \u003ccode\u003edata\u003c/code\u003e declaration are\n   ignored.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "DataDeclaration",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#DataDeclaration",
          "type": "data"
        },
        "index": {
          "description": "data declaration for an algebraic data type Note that the context and the deriving parts of data declaration are ignored",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "DataDeclaration",
          "package": "free-theorems",
          "partial": "Data Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#t:DataDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Haskell declaration which corresponds to a \u003ccode\u003etype\u003c/code\u003e, \u003ccode\u003edata\u003c/code\u003e, \u003ccode\u003enewtype\u003c/code\u003e,\n   \u003ccode\u003eclass\u003c/code\u003e or type signature declaration.\n\u003c/p\u003e\u003cp\u003eIn type expressions, type variables must not be applied to type\n   expressions. Thus, for example, the functions of the \u003ccode\u003eMonad\u003c/code\u003e class are not\n   expressible.\n   However, in extension to Haskell98, higher-rank types can be expressed.\n\u003c/p\u003e\u003cp\u003eThis data type does not reflect all information of a declaration. Only the\n   aspects needed by the FreeTheorems library are covered.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Declaration",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Declaration",
          "type": "data"
        },
        "index": {
          "description": "Haskell declaration which corresponds to type data newtype class or type signature declaration In type expressions type variables must not be applied to type expressions Thus for example the functions of the Monad class are not expressible However in extension to Haskell98 higher-rank types can be expressed This data type does not reflect all information of declaration Only the aspects needed by the FreeTheorems library are covered",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Declaration",
          "package": "free-theorems",
          "partial": "Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#t:Declaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an abbreviation for some fixed type expression.\n   It does not occur in Haskell98 source code, but it can occur in generated\n   theorems.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "FixedTypeExpression",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#FixedTypeExpression",
          "type": "newtype"
        },
        "index": {
          "description": "Represents an abbreviation for some fixed type expression It does not occur in Haskell98 source code but it can occur in generated theorems",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "FixedTypeExpression",
          "package": "free-theorems",
          "partial": "Fixed Type Expression",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#t:FixedTypeExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identifier.\n   This data type tags every \u003ccode\u003eString\u003c/code\u003e occurring in a declaration or a type\n   expression.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Identifier",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Identifier",
          "type": "newtype"
        },
        "index": {
          "description": "An identifier This data type tags every String occurring in declaration or type expression",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Identifier",
          "package": "free-theorems",
          "partial": "Identifier",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003enewtype\u003c/code\u003e declaration for a type renaming.\n\u003c/p\u003e\u003cp\u003eNote that the context and the deriving parts of a \u003ccode\u003enewtype\u003c/code\u003e declaration are\n   ignored.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "NewtypeDeclaration",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#NewtypeDeclaration",
          "type": "data"
        },
        "index": {
          "description": "newtype declaration for type renaming Note that the context and the deriving parts of newtype declaration are ignored",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "NewtypeDeclaration",
          "package": "free-theorems",
          "partial": "Newtype Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#t:NewtypeDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type signature.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Signature",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Signature",
          "type": "data"
        },
        "index": {
          "description": "type signature",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Signature",
          "package": "free-theorems",
          "partial": "Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies a Haskell type class.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeClass",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeClass",
          "type": "newtype"
        },
        "index": {
          "description": "Identifies Haskell type class",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeClass",
          "package": "free-theorems",
          "partial": "Type Class",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#t:TypeClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type for type constructors.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeConstructor",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeConstructor",
          "type": "data"
        },
        "index": {
          "description": "The data type for type constructors",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeConstructor",
          "package": "free-theorems",
          "partial": "Type Constructor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#t:TypeConstructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003etype\u003c/code\u003e declaration for a type synonym.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeDeclaration",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeDeclaration",
          "type": "data"
        },
        "index": {
          "description": "type declaration for type synonym",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeDeclaration",
          "package": "free-theorems",
          "partial": "Type Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#t:TypeDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Haskell type expression. This data type supports also higher-rank\n   functions. Unlike in Haskell98, a type variable must not be applied to\n   type expressions.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeExpression",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeExpression",
          "type": "data"
        },
        "index": {
          "description": "Haskell type expression This data type supports also higher-rank functions Unlike in Haskell98 type variable must not be applied to type expressions",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeExpression",
          "package": "free-theorems",
          "partial": "Type Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#t:TypeExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies a Haskell type variable\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeVariable",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeVariable",
          "type": "newtype"
        },
        "index": {
          "description": "Identifies Haskell type variable",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeVariable",
          "package": "free-theorems",
          "partial": "Type Variable",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#t:TypeVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type expression with a strictness flag \"\u003ccode\u003e!\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "Banged",
          "package": "free-theorems",
          "signature": "Banged",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#BangTypeExpression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Banged\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:Banged\"]"
        },
        "index": {
          "description": "type expression with strictness flag",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Banged",
          "package": "free-theorems",
          "partial": "Banged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Banged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "Class",
          "package": "free-theorems",
          "signature": "Class",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#ClassDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Class\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:Class\"]"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Class",
          "package": "free-theorems",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eclass\u003c/code\u003e declaration.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "ClassDecl",
          "package": "free-theorems",
          "signature": "ClassDecl ClassDeclaration",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Declaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ClassDecl\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:ClassDecl\"]"
        },
        "index": {
          "description": "class declaration",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "ClassDecl",
          "package": "free-theorems",
          "partial": "Class Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ClassDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny other type constructor with a given name.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "Con",
          "package": "free-theorems",
          "signature": "Con Identifier",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeConstructor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Con\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:Con\"]"
        },
        "index": {
          "description": "Any other type constructor with given name",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Con",
          "package": "free-theorems",
          "partial": "Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Con"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Haskell type \u003ccode\u003eChar\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "ConChar",
          "package": "free-theorems",
          "signature": "ConChar",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeConstructor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConChar\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:ConChar\"]"
        },
        "index": {
          "description": "The Haskell type Char",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "ConChar",
          "package": "free-theorems",
          "partial": "Con Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Haskell type \u003ccode\u003eDouble\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "ConDouble",
          "package": "free-theorems",
          "signature": "ConDouble",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeConstructor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConDouble\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:ConDouble\"]"
        },
        "index": {
          "description": "The Haskell type Double",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "ConDouble",
          "package": "free-theorems",
          "partial": "Con Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Haskell type \u003ccode\u003eFloat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "ConFloat",
          "package": "free-theorems",
          "signature": "ConFloat",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeConstructor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConFloat\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:ConFloat\"]"
        },
        "index": {
          "description": "The Haskell type Float",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "ConFloat",
          "package": "free-theorems",
          "partial": "Con Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Haskell type \u003ccode\u003eInt\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "ConInt",
          "package": "free-theorems",
          "signature": "ConInt",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeConstructor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConInt\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:ConInt\"]"
        },
        "index": {
          "description": "The Haskell type Int",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "ConInt",
          "package": "free-theorems",
          "partial": "Con Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Haskell type \u003ccode\u003eInteger\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "ConInteger",
          "package": "free-theorems",
          "signature": "ConInteger",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeConstructor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConInteger\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:ConInteger\"]"
        },
        "index": {
          "description": "The Haskell type Integer",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "ConInteger",
          "package": "free-theorems",
          "partial": "Con Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list type constructor \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "ConList",
          "package": "free-theorems",
          "signature": "ConList",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeConstructor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConList\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:ConList\"]"
        },
        "index": {
          "description": "The list type constructor",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "ConList",
          "package": "free-theorems",
          "partial": "Con List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tuple type constructors with given arity.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "ConTuple",
          "package": "free-theorems",
          "signature": "ConTuple Int",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeConstructor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConTuple\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:ConTuple\"]"
        },
        "index": {
          "description": "The tuple type constructors with given arity",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "ConTuple",
          "package": "free-theorems",
          "partial": "Con Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unit type constructor \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "ConUnit",
          "package": "free-theorems",
          "signature": "ConUnit",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeConstructor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConUnit\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:ConUnit\"]"
        },
        "index": {
          "description": "The unit type constructor",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "ConUnit",
          "package": "free-theorems",
          "partial": "Con Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:ConUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "Data",
          "package": "free-theorems",
          "signature": "Data",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#DataDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Data\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:Data\"]"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Data",
          "package": "free-theorems",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "DataCon",
          "package": "free-theorems",
          "signature": "DataCon",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#DataConstructorDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:DataCon\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:DataCon\"]"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "DataCon",
          "package": "free-theorems",
          "partial": "Data Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:DataCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003edata\u003c/code\u003e declaration.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "DataDecl",
          "package": "free-theorems",
          "signature": "DataDecl DataDeclaration",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Declaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:DataDecl\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:DataDecl\"]"
        },
        "index": {
          "description": "data declaration",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "DataDecl",
          "package": "free-theorems",
          "partial": "Data Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:DataDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "Ident",
          "package": "free-theorems",
          "signature": "Ident",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Identifier",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Ident\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:Ident\"]"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Ident",
          "package": "free-theorems",
          "partial": "Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "Newtype",
          "package": "free-theorems",
          "signature": "Newtype",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#NewtypeDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Newtype\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:Newtype\"]"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Newtype",
          "package": "free-theorems",
          "partial": "Newtype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Newtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003enewtype\u003c/code\u003e declaration.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "NewtypeDecl",
          "package": "free-theorems",
          "signature": "NewtypeDecl NewtypeDeclaration",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Declaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:NewtypeDecl\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:NewtypeDecl\"]"
        },
        "index": {
          "description": "newtype declaration",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "NewtypeDecl",
          "package": "free-theorems",
          "partial": "Newtype Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:NewtypeDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "Signature",
          "package": "free-theorems",
          "signature": "Signature",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Signature",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Signature\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:Signature\"]"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Signature",
          "package": "free-theorems",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "TC",
          "package": "free-theorems",
          "signature": "TC Identifier",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeClass",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TC\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:TC\"]"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TC",
          "package": "free-theorems",
          "partial": "TC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "TF",
          "package": "free-theorems",
          "signature": "TF Identifier",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#FixedTypeExpression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TF\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:TF\"]"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TF",
          "package": "free-theorems",
          "partial": "TF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "TV",
          "package": "free-theorems",
          "signature": "TV Identifier",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeVariable",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TV\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:TV\"]"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TV",
          "package": "free-theorems",
          "partial": "TV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "Type",
          "package": "free-theorems",
          "signature": "Type",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Type\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:Type\"]"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Type",
          "package": "free-theorems",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type abstraction constructor \u003ccode\u003eforall\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "TypeAbs",
          "package": "free-theorems",
          "signature": "TypeAbs TypeVariable [TypeClass] TypeExpression",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeExpression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeAbs\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:TypeAbs\"]"
        },
        "index": {
          "description": "The type abstraction constructor forall",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeAbs",
          "normalized": "TypeAbs TypeVariable[TypeClass]TypeExpression",
          "package": "free-theorems",
          "partial": "Type Abs",
          "signature": "TypeAbs TypeVariable[TypeClass]TypeExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type abstraction constructor \u003ccode\u003eforall^o\u003c/code\u003e, allowing\n   non-bottom-reflecting logical relations for types the type variable\n   is instantiated with in the calculus with seq.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "TypeAbsLab",
          "package": "free-theorems",
          "signature": "TypeAbsLab TypeVariable [TypeClass] TypeExpression",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeExpression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeAbsLab\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:TypeAbsLab\"]"
        },
        "index": {
          "description": "The type abstraction constructor forall allowing non-bottom-reflecting logical relations for types the type variable is instantiated with in the calculus with seq",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeAbsLab",
          "normalized": "TypeAbsLab TypeVariable[TypeClass]TypeExpression",
          "package": "free-theorems",
          "partial": "Type Abs Lab",
          "signature": "TypeAbsLab TypeVariable[TypeClass]TypeExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeAbsLab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type constructor. This covers algebraic data types, type synonyms,\n   and type renamings as well as predefined standard data types like\n   lists and tuples.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "TypeCon",
          "package": "free-theorems",
          "signature": "TypeCon TypeConstructor [TypeExpression]",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeExpression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeCon\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:TypeCon\"]"
        },
        "index": {
          "description": "type constructor This covers algebraic data types type synonyms and type renamings as well as predefined standard data types like lists and tuples",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeCon",
          "normalized": "TypeCon TypeConstructor[TypeExpression]",
          "package": "free-theorems",
          "partial": "Type Con",
          "signature": "TypeCon TypeConstructor[TypeExpression]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003etype\u003c/code\u003e declaration.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "TypeDecl",
          "package": "free-theorems",
          "signature": "TypeDecl TypeDeclaration",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Declaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeDecl\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:TypeDecl\"]"
        },
        "index": {
          "description": "type declaration",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeDecl",
          "package": "free-theorems",
          "partial": "Type Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable representing a fixed type expression.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "TypeExp",
          "package": "free-theorems",
          "signature": "TypeExp FixedTypeExpression",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeExpression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeExp\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:TypeExp\"]"
        },
        "index": {
          "description": "variable representing fixed type expression",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeExp",
          "package": "free-theorems",
          "partial": "Type Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function type constructor \u003ccode\u003e-\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "TypeFun",
          "package": "free-theorems",
          "signature": "TypeFun TypeExpression TypeExpression",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeExpression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeFun\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:TypeFun\"]"
        },
        "index": {
          "description": "The function type constructor",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeFun",
          "package": "free-theorems",
          "partial": "Type Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function type constructor \u003ccode\u003e-\u003e^o\u003c/code\u003e for the non-bottom-reflecting\n   logical relation for functions in the languagesubset with seq\n   for equational theorems.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "TypeFunLab",
          "package": "free-theorems",
          "signature": "TypeFunLab TypeExpression TypeExpression",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeExpression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeFunLab\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:TypeFunLab\"]"
        },
        "index": {
          "description": "The function type constructor for the non-bottom-reflecting logical relation for functions in the languagesubset with seq for equational theorems",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeFunLab",
          "package": "free-theorems",
          "partial": "Type Fun Lab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeFunLab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type signature.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "TypeSig",
          "package": "free-theorems",
          "signature": "TypeSig Signature",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Declaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeSig\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:TypeSig\"]"
        },
        "index": {
          "description": "type signature",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeSig",
          "package": "free-theorems",
          "partial": "Type Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type variable.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "TypeVar",
          "package": "free-theorems",
          "signature": "TypeVar TypeVariable",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeExpression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeVar\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:TypeVar\"]"
        },
        "index": {
          "description": "type variable",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "TypeVar",
          "package": "free-theorems",
          "partial": "Type Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:TypeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type expression without a strictness flag.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "Unbanged",
          "package": "free-theorems",
          "signature": "Unbanged",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#BangTypeExpression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Unbanged\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:Unbanged\"]"
        },
        "index": {
          "description": "type expression without strictness flag",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "Unbanged",
          "package": "free-theorems",
          "partial": "Unbanged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:Unbanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type signatures of the class methods.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "classFuns",
          "package": "free-theorems",
          "signature": "[Signature]",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#ClassDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:classFuns\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:classFuns\"]"
        },
        "index": {
          "description": "The type signatures of the class methods",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "classFuns",
          "normalized": "[Signature]",
          "package": "free-theorems",
          "partial": "Funs",
          "signature": "[Signature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:classFuns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of this type class.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "className",
          "package": "free-theorems",
          "signature": "Identifier",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#ClassDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:className\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:className\"]"
        },
        "index": {
          "description": "The name of this type class",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "className",
          "package": "free-theorems",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:className"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type variable constrained by this type class.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "classVar",
          "package": "free-theorems",
          "signature": "TypeVariable",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#ClassDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:classVar\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:classVar\"]"
        },
        "index": {
          "description": "The type variable constrained by this type class",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "classVar",
          "package": "free-theorems",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:classVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the data constructor.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "dataConName",
          "package": "free-theorems",
          "signature": "Identifier",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#DataConstructorDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:dataConName\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:dataConName\"]"
        },
        "index": {
          "description": "The name of the data constructor",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "dataConName",
          "package": "free-theorems",
          "partial": "Con Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:dataConName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type arguments of the data constructor.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "dataConTypes",
          "package": "free-theorems",
          "signature": "[BangTypeExpression]",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#DataConstructorDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:dataConTypes\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:dataConTypes\"]"
        },
        "index": {
          "description": "The type arguments of the data constructor",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "dataConTypes",
          "normalized": "[BangTypeExpression]",
          "package": "free-theorems",
          "partial": "Con Types",
          "signature": "[BangTypeExpression]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:dataConTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe declarations of the data constructors on the right-hand side.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "dataCons",
          "package": "free-theorems",
          "signature": "[DataConstructorDeclaration]",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#DataDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:dataCons\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:dataCons\"]"
        },
        "index": {
          "description": "The declarations of the data constructors on the right-hand side",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "dataCons",
          "normalized": "[DataConstructorDeclaration]",
          "package": "free-theorems",
          "partial": "Cons",
          "signature": "[DataConstructorDeclaration]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:dataCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the type constructor.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "dataName",
          "package": "free-theorems",
          "signature": "Identifier",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#DataDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:dataName\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:dataName\"]"
        },
        "index": {
          "description": "The name of the type constructor",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "dataName",
          "package": "free-theorems",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:dataName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type variables on the left-hand side.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "dataVars",
          "package": "free-theorems",
          "signature": "[TypeVariable]",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#DataDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:dataVars\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:dataVars\"]"
        },
        "index": {
          "description": "The type variables on the left-hand side",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "dataVars",
          "normalized": "[TypeVariable]",
          "package": "free-theorems",
          "partial": "Vars",
          "signature": "[TypeVariable]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:dataVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the arity of a type constructor or \u003ccode\u003eNothing\u003c/code\u003e if this is not a\n   \u003ccode\u003edata\u003c/code\u003e, \u003ccode\u003enewtype\u003c/code\u003e or \u003ccode\u003etype\u003c/code\u003e declaration.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "getDeclarationArity",
          "package": "free-theorems",
          "signature": "Declaration -\u003e Maybe Int",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#getDeclarationArity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:getDeclarationArity\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:getDeclarationArity\"]"
        },
        "index": {
          "description": "Gets the arity of type constructor or Nothing if this is not data newtype or type declaration",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "getDeclarationArity",
          "normalized": "Declaration-\u003eMaybe Int",
          "package": "free-theorems",
          "partial": "Declaration Arity",
          "signature": "Declaration-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:getDeclarationArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the name of the item declared by a declaration.\n   This is the type constructor for \u003ccode\u003edata\u003c/code\u003e, \u003ccode\u003enewtype\u003c/code\u003e and \u003ccode\u003etype\u003c/code\u003e declarations,\n   the name of a class for a \u003ccode\u003eclass\u003c/code\u003e declaration or the name of a type\n   signature.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "getDeclarationName",
          "package": "free-theorems",
          "signature": "Declaration -\u003e Identifier",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#getDeclarationName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:getDeclarationName\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:getDeclarationName\"]"
        },
        "index": {
          "description": "Gets the name of the item declared by declaration This is the type constructor for data newtype and type declarations the name of class for class declaration or the name of type signature",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "getDeclarationName",
          "normalized": "Declaration-\u003eIdentifier",
          "package": "free-theorems",
          "partial": "Declaration Name",
          "signature": "Declaration-\u003eIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:getDeclarationName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the data constructor on the right-hand side.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "newtypeCon",
          "package": "free-theorems",
          "signature": "Identifier",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#NewtypeDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:newtypeCon\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:newtypeCon\"]"
        },
        "index": {
          "description": "The name of the data constructor on the right-hand side",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "newtypeCon",
          "package": "free-theorems",
          "partial": "Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:newtypeCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the type constructor.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "newtypeName",
          "package": "free-theorems",
          "signature": "Identifier",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#NewtypeDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:newtypeName\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:newtypeName\"]"
        },
        "index": {
          "description": "The name of the type constructor",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "newtypeName",
          "package": "free-theorems",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:newtypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type expression on the right-hand side.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "newtypeRhs",
          "package": "free-theorems",
          "signature": "TypeExpression",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#NewtypeDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:newtypeRhs\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:newtypeRhs\"]"
        },
        "index": {
          "description": "The type expression on the right-hand side",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "newtypeRhs",
          "package": "free-theorems",
          "partial": "Rhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:newtypeRhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type variables of the left-hand side.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "newtypeVars",
          "package": "free-theorems",
          "signature": "[TypeVariable]",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#NewtypeDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:newtypeVars\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:newtypeVars\"]"
        },
        "index": {
          "description": "The type variables of the left-hand side",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "newtypeVars",
          "normalized": "[TypeVariable]",
          "package": "free-theorems",
          "partial": "Vars",
          "signature": "[TypeVariable]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:newtypeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the signature, i.e. the name of a variable or function.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "signatureName",
          "package": "free-theorems",
          "signature": "Identifier",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Signature",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:signatureName\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:signatureName\"]"
        },
        "index": {
          "description": "The name of the signature i.e the name of variable or function",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "signatureName",
          "package": "free-theorems",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:signatureName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type expression of the type signature.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "signatureType",
          "package": "free-theorems",
          "signature": "TypeExpression",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Signature",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:signatureType\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:signatureType\"]"
        },
        "index": {
          "description": "The type expression of the type signature",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "signatureType",
          "package": "free-theorems",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:signatureType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe superclasses of this class.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "superClasses",
          "package": "free-theorems",
          "signature": "[TypeClass]",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#ClassDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:superClasses\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:superClasses\"]"
        },
        "index": {
          "description": "The superclasses of this class",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "superClasses",
          "normalized": "[TypeClass]",
          "package": "free-theorems",
          "partial": "Classes",
          "signature": "[TypeClass]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:superClasses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type constructor name.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "typeName",
          "package": "free-theorems",
          "signature": "Identifier",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:typeName\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:typeName\"]"
        },
        "index": {
          "description": "The type constructor name",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "typeName",
          "package": "free-theorems",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:typeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type expression on the right-hand side.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "typeRhs",
          "package": "free-theorems",
          "signature": "TypeExpression",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:typeRhs\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:typeRhs\"]"
        },
        "index": {
          "description": "The type expression on the right-hand side",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "typeRhs",
          "package": "free-theorems",
          "partial": "Rhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:typeRhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type variables on the left-hand side.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "typeVars",
          "package": "free-theorems",
          "signature": "[TypeVariable]",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeDeclaration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:typeVars\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:typeVars\"]"
        },
        "index": {
          "description": "The type variables on the left-hand side",
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "typeVars",
          "normalized": "[TypeVariable]",
          "package": "free-theorems",
          "partial": "Vars",
          "signature": "[TypeVariable]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:typeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "unpackIdent",
          "package": "free-theorems",
          "signature": "String",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Identifier",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:unpackIdent\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:unpackIdent\"]"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "unpackIdent",
          "package": "free-theorems",
          "partial": "Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:unpackIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.FreeTheorems.BasicSyntax\",\"Language.Haskell.FreeTheorems.Syntax\"]",
          "name": "withoutBang",
          "package": "free-theorems",
          "signature": "TypeExpression",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#BangTypeExpression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:withoutBang\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#v:withoutBang\"]"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems BasicSyntax",
          "module": "Language.Haskell.FreeTheorems.BasicSyntax",
          "name": "withoutBang",
          "package": "free-theorems",
          "partial": "Bang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-BasicSyntax.html#v:withoutBang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides functions to generate new variable names of different kinds.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.FreeTheorems.NameStores",
          "name": "NameStores",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-NameStores.html",
          "type": "module"
        },
        "index": {
          "description": "Provides functions to generate new variable names of different kinds",
          "hierarchy": "Language Haskell FreeTheorems NameStores",
          "module": "Language.Haskell.FreeTheorems.NameStores",
          "name": "NameStores",
          "package": "free-theorems",
          "partial": "Name Stores",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-NameStores.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite list of names for function variables.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.NameStores",
          "name": "functionNameStore1",
          "package": "free-theorems",
          "signature": "[String]",
          "source": "src/Language-Haskell-FreeTheorems-NameStores.html#functionNameStore1",
          "type": "function"
        },
        "index": {
          "description": "An infinite list of names for function variables",
          "hierarchy": "Language Haskell FreeTheorems NameStores",
          "module": "Language.Haskell.FreeTheorems.NameStores",
          "name": "functionNameStore1",
          "normalized": "[String]",
          "package": "free-theorems",
          "partial": "Name Store",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-NameStores.html#v:functionNameStore1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnother infinite list of names for function variables.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.NameStores",
          "name": "functionNameStore2",
          "package": "free-theorems",
          "signature": "[String]",
          "source": "src/Language-Haskell-FreeTheorems-NameStores.html#functionNameStore2",
          "type": "function"
        },
        "index": {
          "description": "Another infinite list of names for function variables",
          "hierarchy": "Language Haskell FreeTheorems NameStores",
          "module": "Language.Haskell.FreeTheorems.NameStores",
          "name": "functionNameStore2",
          "normalized": "[String]",
          "package": "free-theorems",
          "partial": "Name Store",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-NameStores.html#v:functionNameStore2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite list of names for relation variables.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.NameStores",
          "name": "relationNameStore",
          "package": "free-theorems",
          "signature": "[String]",
          "source": "src/Language-Haskell-FreeTheorems-NameStores.html#relationNameStore",
          "type": "function"
        },
        "index": {
          "description": "An infinite list of names for relation variables",
          "hierarchy": "Language Haskell FreeTheorems NameStores",
          "module": "Language.Haskell.FreeTheorems.NameStores",
          "name": "relationNameStore",
          "normalized": "[String]",
          "package": "free-theorems",
          "partial": "Name Store",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-NameStores.html#v:relationNameStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite list of names for type expressions.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.NameStores",
          "name": "typeExpressionNameStore",
          "package": "free-theorems",
          "signature": "[String]",
          "source": "src/Language-Haskell-FreeTheorems-NameStores.html#typeExpressionNameStore",
          "type": "function"
        },
        "index": {
          "description": "An infinite list of names for type expressions",
          "hierarchy": "Language Haskell FreeTheorems NameStores",
          "module": "Language.Haskell.FreeTheorems.NameStores",
          "name": "typeExpressionNameStore",
          "normalized": "[String]",
          "package": "free-theorems",
          "partial": "Expression Name Store",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-NameStores.html#v:typeExpressionNameStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite list of names for type variables.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.NameStores",
          "name": "typeNameStore",
          "package": "free-theorems",
          "signature": "[String]",
          "source": "src/Language-Haskell-FreeTheorems-NameStores.html#typeNameStore",
          "type": "function"
        },
        "index": {
          "description": "An infinite list of names for type variables",
          "hierarchy": "Language Haskell FreeTheorems NameStores",
          "module": "Language.Haskell.FreeTheorems.NameStores",
          "name": "typeNameStore",
          "normalized": "[String]",
          "package": "free-theorems",
          "partial": "Name Store",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-NameStores.html#v:typeNameStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite list of names for term variables.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.NameStores",
          "name": "variableNameStore",
          "package": "free-theorems",
          "signature": "[String]",
          "source": "src/Language-Haskell-FreeTheorems-NameStores.html#variableNameStore",
          "type": "function"
        },
        "index": {
          "description": "An infinite list of names for term variables",
          "hierarchy": "Language Haskell FreeTheorems NameStores",
          "module": "Language.Haskell.FreeTheorems.NameStores",
          "name": "variableNameStore",
          "normalized": "[String]",
          "package": "free-theorems",
          "partial": "Name Store",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-NameStores.html#v:variableNameStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines a function to parse a string into a list of declarations.\n   This module is based on the 'haskell-src' package most probably included\n   with every Haskell compiler.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.FreeTheorems.Parser.Haskell98",
          "name": "Haskell98",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Parser-Haskell98.html",
          "type": "module"
        },
        "index": {
          "description": "Defines function to parse string into list of declarations This module is based on the haskell-src package most probably included with every Haskell compiler",
          "hierarchy": "Language Haskell FreeTheorems Parser Haskell98",
          "module": "Language.Haskell.FreeTheorems.Parser.Haskell98",
          "name": "Haskell98",
          "package": "free-theorems",
          "partial": "Haskell",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Parser-Haskell98.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a string to a list of declarations.\n   The string should contain a Haskell module.\n\u003c/p\u003e\u003cp\u003eThis function is based on the Haskell98 parser of the 'haskell-src'\n   package, i.e. the module 'Language.Haskell.Parser'.\n   That parser supports only Haskell98 and a few extensions. Especially, it\n   does not support explicit quantification of type variables and thus no \n   higher-rank functions.\n\u003c/p\u003e\u003cp\u003eThe declarations returned by \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e include only \u003ccode\u003etype\u003c/code\u003e, \u003ccode\u003edata\u003c/code\u003e, \n   \u003ccode\u003enewtype\u003c/code\u003e, \u003ccode\u003eclass\u003c/code\u003e and type signature declarations.\n   All other declarations and syntactical elements in the input are ignored.\n\u003c/p\u003e\u003cp\u003eFurthermore, the following restrictions apply:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Multi-parameter type classes are not allowed and therefore ignored. When\n     declaring a type class, the argument to the type class name must be a\n     single type variable.\n\u003c/li\u003e\u003cli\u003e A type variable must not be applied to any type. That means, for\n     example, that the type \u003ccode\u003em a\u003c/code\u003e is not accepted.\n\u003c/li\u003e\u003cli\u003e Contexts and \u003ccode\u003ederiving\u003c/code\u003e parts in \u003ccode\u003edata\u003c/code\u003e and \u003ccode\u003enewtype\u003c/code\u003e declarations\n     are ignored.\n\u003c/li\u003e\u003cli\u003e The module names are ignored. If any identifier was given qualified, the\n     module part of a qualified name is ignored.\n\u003c/li\u003e\u003cli\u003e Special Haskell constructors (unit, list function) are not allowed as\n     identifiers.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf a parser error occurs, as suitable error message is returned in the\n   second component of the returned tuple and the first component will be the\n   empty list.\n   However, if parsing was successful, but the parsed structures could not\n   be completely transformed into \u003ccode\u003eDeclaration\u003c/code\u003es, suitable transformation\n   error messages are returned in the second component while the first\n   components contains all declarations which could be transformed\n   successfully.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Parser.Haskell98",
          "name": "parse",
          "package": "free-theorems",
          "signature": "String -\u003e Parsed [Declaration]",
          "source": "src/Language-Haskell-FreeTheorems-Parser-Haskell98.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Parses string to list of declarations The string should contain Haskell module This function is based on the Haskell98 parser of the haskell-src package i.e the module Language.Haskell.Parser That parser supports only Haskell98 and few extensions Especially it does not support explicit quantification of type variables and thus no higher-rank functions The declarations returned by parse include only type data newtype class and type signature declarations All other declarations and syntactical elements in the input are ignored Furthermore the following restrictions apply Multi-parameter type classes are not allowed and therefore ignored When declaring type class the argument to the type class name must be single type variable type variable must not be applied to any type That means for example that the type is not accepted Contexts and deriving parts in data and newtype declarations are ignored The module names are ignored If any identifier was given qualified the module part of qualified name is ignored Special Haskell constructors unit list function are not allowed as identifiers If parser error occurs as suitable error message is returned in the second component of the returned tuple and the first component will be the empty list However if parsing was successful but the parsed structures could not be completely transformed into Declaration suitable transformation error messages are returned in the second component while the first components contains all declarations which could be transformed successfully",
          "hierarchy": "Language Haskell FreeTheorems Parser Haskell98",
          "module": "Language.Haskell.FreeTheorems.Parser.Haskell98",
          "name": "parse",
          "normalized": "String-\u003eParsed[Declaration]",
          "package": "free-theorems",
          "signature": "String-\u003eParsed[Declaration]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Parser-Haskell98.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Parser.Hsx",
          "name": "Hsx",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Parser-Hsx.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Parser Hsx",
          "module": "Language.Haskell.FreeTheorems.Parser.Hsx",
          "name": "Hsx",
          "package": "free-theorems",
          "partial": "Hsx",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Parser-Hsx.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a string to a list of declarations.\n   The string should contain a Haskell module.\n\u003c/p\u003e\u003cp\u003eThis function is based on the extended Haskell parser of the \n   'haskell-src-exts' package.\n\u003c/p\u003e\u003cp\u003eThe declarations returned by \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e include only \u003ccode\u003etype\u003c/code\u003e, \u003ccode\u003edata\u003c/code\u003e, \n   \u003ccode\u003enewtype\u003c/code\u003e, \u003ccode\u003eclass\u003c/code\u003e and type signature declarations.\n   All other declarations and syntactical elements in the input are ignored.\n\u003c/p\u003e\u003cp\u003eFurthermore, the following restrictions apply:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Multi-parameter type classes are not allowed and therefore ignored. When\n     declaring a type class, the argument to the type class name must be a\n     single type variable.\n\u003c/li\u003e\u003cli\u003e Only type variables can be constrained by type classes. That means, for\n     example, the type \u003ccode\u003eEq [a] =\u003e [a]\u003c/code\u003e is not accepted.\n\u003c/li\u003e\u003cli\u003e A type variable must not be applied to any type. That means, for\n     example, that the type \u003ccode\u003em a\u003c/code\u003e is not accepted.\n\u003c/li\u003e\u003cli\u003e Contexts and \u003ccode\u003ederiving\u003c/code\u003e parts in \u003ccode\u003edata\u003c/code\u003e and \u003ccode\u003enewtype\u003c/code\u003e declarations\n     are ignored.\n\u003c/li\u003e\u003cli\u003e The module names are ignored. If any identifier was given qualified, the\n     module part of a qualified name is ignored.\n\u003c/li\u003e\u003cli\u003e Special Haskell constructors (unit, list function) are not allowed as\n     identifiers.\n\u003c/li\u003e\u003cli\u003e Further extensions over Haskell98 allowed by the underlying parser are\n     also forbidden, namely generalised algebraic data types and unboxed \n     tuples.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf a parser error occurs, as suitable error message is returned in the\n   second component of the returned tuple and the first component will be the\n   empty list.\n   However, if parsing was successful, but the parsed structures could not\n   be completely transformed into \u003ccode\u003eDeclaration\u003c/code\u003es, suitable transformation\n   error messages are returned in the second component while the first\n   components contains all declarations which could be transformed\n   successfully.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Parser.Hsx",
          "name": "parse",
          "package": "free-theorems",
          "signature": "String -\u003e Parsed [Declaration]",
          "source": "src/Language-Haskell-FreeTheorems-Parser-Hsx.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Parses string to list of declarations The string should contain Haskell module This function is based on the extended Haskell parser of the haskell-src-exts package The declarations returned by parse include only type data newtype class and type signature declarations All other declarations and syntactical elements in the input are ignored Furthermore the following restrictions apply Multi-parameter type classes are not allowed and therefore ignored When declaring type class the argument to the type class name must be single type variable Only type variables can be constrained by type classes That means for example the type Eq is not accepted type variable must not be applied to any type That means for example that the type is not accepted Contexts and deriving parts in data and newtype declarations are ignored The module names are ignored If any identifier was given qualified the module part of qualified name is ignored Special Haskell constructors unit list function are not allowed as identifiers Further extensions over Haskell98 allowed by the underlying parser are also forbidden namely generalised algebraic data types and unboxed tuples If parser error occurs as suitable error message is returned in the second component of the returned tuple and the first component will be the empty list However if parsing was successful but the parsed structures could not be completely transformed into Declaration suitable transformation error messages are returned in the second component while the first components contains all declarations which could be transformed successfully",
          "hierarchy": "Language Haskell FreeTheorems Parser Hsx",
          "module": "Language.Haskell.FreeTheorems.Parser.Hsx",
          "name": "parse",
          "normalized": "String-\u003eParsed[Declaration]",
          "package": "free-theorems",
          "signature": "String-\u003eParsed[Declaration]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Parser-Hsx.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclars data types describing the abstract syntax of a subset of Haskell\n   in the FreeTheorems library. Only declarations and type expressions are\n   covered by these data types.\n\u003c/p\u003e\u003cp\u003eNote that the data types of this module do not reflect Haskell98.\n   This is because they are able to express higher-rank functions which are\n   not part of Haskell98.\n   Also, in type expressions, a type variable must not be applied to any type\n   expression. Thus, for example, the type \u003ccode\u003em a\u003c/code\u003e, as occuring in the functions\n   of the \u003ccode\u003eMonad\u003c/code\u003e type class, is not expressable.\n   The reason for this restriction is that the FreeTheorems library cannot\n   handle such types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "Syntax",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "Declars data types describing the abstract syntax of subset of Haskell in the FreeTheorems library Only declarations and type expressions are covered by these data types Note that the data types of this module do not reflect Haskell98 This is because they are able to express higher-rank functions which are not part of Haskell98 Also in type expressions type variable must not be applied to any type expression Thus for example the type as occuring in the functions of the Monad type class is not expressable The reason for this restriction is that the FreeTheorems library cannot handle such types",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "Syntax",
          "package": "free-theorems",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates whether in an algebraic data type declaration a strictness\n   annotation is used.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "BangTypeExpression",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#BangTypeExpression",
          "type": "data"
        },
        "index": {
          "description": "Indicates whether in an algebraic data type declaration strictness annotation is used",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "BangTypeExpression",
          "package": "free-theorems",
          "partial": "Bang Type Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#t:BangTypeExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eclass\u003c/code\u003e declaration for a type class.\n\u003c/p\u003e\u003cp\u003eNote that, except of type signatures of class methods, all other\n   declarations inside the class are ignored.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "ClassDeclaration",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#ClassDeclaration",
          "type": "data"
        },
        "index": {
          "description": "class declaration for type class Note that except of type signatures of class methods all other declarations inside the class are ignored",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "ClassDeclaration",
          "package": "free-theorems",
          "partial": "Class Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#t:ClassDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data constructor declaration.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "DataConstructorDeclaration",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#DataConstructorDeclaration",
          "type": "data"
        },
        "index": {
          "description": "data constructor declaration",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "DataConstructorDeclaration",
          "package": "free-theorems",
          "partial": "Data Constructor Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#t:DataConstructorDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003edata\u003c/code\u003e declaration for an algebraic data type.\n\u003c/p\u003e\u003cp\u003eNote that the context and the deriving parts of a \u003ccode\u003edata\u003c/code\u003e declaration are\n   ignored.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "DataDeclaration",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#DataDeclaration",
          "type": "data"
        },
        "index": {
          "description": "data declaration for an algebraic data type Note that the context and the deriving parts of data declaration are ignored",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "DataDeclaration",
          "package": "free-theorems",
          "partial": "Data Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#t:DataDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Haskell declaration which corresponds to a \u003ccode\u003etype\u003c/code\u003e, \u003ccode\u003edata\u003c/code\u003e, \u003ccode\u003enewtype\u003c/code\u003e,\n   \u003ccode\u003eclass\u003c/code\u003e or type signature declaration.\n\u003c/p\u003e\u003cp\u003eIn type expressions, type variables must not be applied to type\n   expressions. Thus, for example, the functions of the \u003ccode\u003eMonad\u003c/code\u003e class are not\n   expressible.\n   However, in extension to Haskell98, higher-rank types can be expressed.\n\u003c/p\u003e\u003cp\u003eThis data type does not reflect all information of a declaration. Only the\n   aspects needed by the FreeTheorems library are covered.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "Declaration",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Declaration",
          "type": "data"
        },
        "index": {
          "description": "Haskell declaration which corresponds to type data newtype class or type signature declaration In type expressions type variables must not be applied to type expressions Thus for example the functions of the Monad class are not expressible However in extension to Haskell98 higher-rank types can be expressed This data type does not reflect all information of declaration Only the aspects needed by the FreeTheorems library are covered",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "Declaration",
          "package": "free-theorems",
          "partial": "Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#t:Declaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an abbreviation for some fixed type expression.\n   It does not occur in Haskell98 source code, but it can occur in generated\n   theorems.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "FixedTypeExpression",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#FixedTypeExpression",
          "type": "newtype"
        },
        "index": {
          "description": "Represents an abbreviation for some fixed type expression It does not occur in Haskell98 source code but it can occur in generated theorems",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "FixedTypeExpression",
          "package": "free-theorems",
          "partial": "Fixed Type Expression",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#t:FixedTypeExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identifier.\n   This data type tags every \u003ccode\u003eString\u003c/code\u003e occurring in a declaration or a type\n   expression.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "Identifier",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Identifier",
          "type": "newtype"
        },
        "index": {
          "description": "An identifier This data type tags every String occurring in declaration or type expression",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "Identifier",
          "package": "free-theorems",
          "partial": "Identifier",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003enewtype\u003c/code\u003e declaration for a type renaming.\n\u003c/p\u003e\u003cp\u003eNote that the context and the deriving parts of a \u003ccode\u003enewtype\u003c/code\u003e declaration are\n   ignored.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "NewtypeDeclaration",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#NewtypeDeclaration",
          "type": "data"
        },
        "index": {
          "description": "newtype declaration for type renaming Note that the context and the deriving parts of newtype declaration are ignored",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "NewtypeDeclaration",
          "package": "free-theorems",
          "partial": "Newtype Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#t:NewtypeDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type signature.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "Signature",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#Signature",
          "type": "data"
        },
        "index": {
          "description": "type signature",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "Signature",
          "package": "free-theorems",
          "partial": "Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies a Haskell type class.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "TypeClass",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeClass",
          "type": "newtype"
        },
        "index": {
          "description": "Identifies Haskell type class",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "TypeClass",
          "package": "free-theorems",
          "partial": "Type Class",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#t:TypeClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type for type constructors.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "TypeConstructor",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeConstructor",
          "type": "data"
        },
        "index": {
          "description": "The data type for type constructors",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "TypeConstructor",
          "package": "free-theorems",
          "partial": "Type Constructor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#t:TypeConstructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003etype\u003c/code\u003e declaration for a type synonym.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "TypeDeclaration",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeDeclaration",
          "type": "data"
        },
        "index": {
          "description": "type declaration for type synonym",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "TypeDeclaration",
          "package": "free-theorems",
          "partial": "Type Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#t:TypeDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Haskell type expression. This data type supports also higher-rank\n   functions. Unlike in Haskell98, a type variable must not be applied to\n   type expressions.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "TypeExpression",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeExpression",
          "type": "data"
        },
        "index": {
          "description": "Haskell type expression This data type supports also higher-rank functions Unlike in Haskell98 type variable must not be applied to type expressions",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "TypeExpression",
          "package": "free-theorems",
          "partial": "Type Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#t:TypeExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies a Haskell type variable\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "TypeVariable",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-BasicSyntax.html#TypeVariable",
          "type": "newtype"
        },
        "index": {
          "description": "Identifies Haskell type variable",
          "hierarchy": "Language Haskell FreeTheorems Syntax",
          "module": "Language.Haskell.FreeTheorems.Syntax",
          "name": "TypeVariable",
          "package": "free-theorems",
          "partial": "Type Variable",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Syntax.html#t:TypeVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData structures to describe theorems generated from types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Theorems",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html",
          "type": "module"
        },
        "index": {
          "description": "Data structures to describe theorems generated from types",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Theorems",
          "package": "free-theorems",
          "partial": "Theorems",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData constructors.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "DataConstructor",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#DataConstructor",
          "type": "data"
        },
        "index": {
          "description": "Data constructors",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "DataConstructor",
          "package": "free-theorems",
          "partial": "Data Constructor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#t:DataConstructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical formula constituting automatically generated theorems.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Formula",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Formula",
          "type": "data"
        },
        "index": {
          "description": "Logical formula constituting automatically generated theorems",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Formula",
          "package": "free-theorems",
          "partial": "Formula",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#t:Formula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicates occurring in formulas.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Predicate",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Predicate",
          "type": "data"
        },
        "index": {
          "description": "Predicates occurring in formulas",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Predicate",
          "package": "free-theorems",
          "partial": "Predicate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#t:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelations are the foundations of free theorems.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Relation",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Relation",
          "type": "data"
        },
        "index": {
          "description": "Relations are the foundations of free theorems",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Relation",
          "package": "free-theorems",
          "partial": "Relation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#t:Relation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe relation information stored with every relation.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelationInfo",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#RelationInfo",
          "type": "data"
        },
        "index": {
          "description": "The relation information stored with every relation",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelationInfo",
          "package": "free-theorems",
          "partial": "Relation Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#t:RelationInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relation variable.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelationVariable",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#RelationVariable",
          "type": "newtype"
        },
        "index": {
          "description": "relation variable",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelationVariable",
          "package": "free-theorems",
          "partial": "Relation Variable",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#t:RelationVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestrictions on functions and relations.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Restriction",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Restriction",
          "type": "data"
        },
        "index": {
          "description": "Restrictions on functions and relations",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Restriction",
          "package": "free-theorems",
          "partial": "Restriction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#t:Restriction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerms consisting of variables, applications and instantiations.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Term",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Term",
          "type": "data"
        },
        "index": {
          "description": "Terms consisting of variables applications and instantiations",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Term",
          "package": "free-theorems",
          "partial": "Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariables occurring in terms.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "TermVariable",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#TermVariable",
          "type": "newtype"
        },
        "index": {
          "description": "Variables occurring in terms",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "TermVariable",
          "package": "free-theorems",
          "partial": "Term Variable",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#t:TermVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA theorem which is generated from a type signature.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Theorem",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Theorem",
          "type": "type"
        },
        "index": {
          "description": "theorem which is generated from type signature",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Theorem",
          "package": "free-theorems",
          "partial": "Theorem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#t:Theorem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relational description of a class declaration.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "UnfoldedClass",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#UnfoldedClass",
          "type": "data"
        },
        "index": {
          "description": "relational description of class declaration",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "UnfoldedClass",
          "package": "free-theorems",
          "partial": "Unfolded Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#t:UnfoldedClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relational descriptions of a data constructor.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "UnfoldedDataCon",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#UnfoldedDataCon",
          "type": "data"
        },
        "index": {
          "description": "relational descriptions of data constructor",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "UnfoldedDataCon",
          "package": "free-theorems",
          "partial": "Unfolded Data Con",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#t:UnfoldedDataCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes unfolded lift relations.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "UnfoldedLift",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#UnfoldedLift",
          "type": "data"
        },
        "index": {
          "description": "Describes unfolded lift relations",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "UnfoldedLift",
          "package": "free-theorems",
          "partial": "Unfolded Lift",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#t:UnfoldedLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "BotPair",
          "package": "free-theorems",
          "signature": "BotPair",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#UnfoldedDataCon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "BotPair",
          "package": "free-theorems",
          "partial": "Bot Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:BotPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "BottomReflecting",
          "package": "free-theorems",
          "signature": "BottomReflecting",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Restriction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "BottomReflecting",
          "package": "free-theorems",
          "partial": "Bottom Reflecting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:BottomReflecting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "ConMore",
          "package": "free-theorems",
          "signature": "ConMore DataConstructor [TermVariable] [TermVariable] Formula",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#UnfoldedDataCon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "ConMore",
          "normalized": "ConMore DataConstructor[TermVariable][TermVariable]Formula",
          "package": "free-theorems",
          "partial": "Con More",
          "signature": "ConMore DataConstructor[TermVariable][TermVariable]Formula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:ConMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "ConPair",
          "package": "free-theorems",
          "signature": "ConPair DataConstructor",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#UnfoldedDataCon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "ConPair",
          "package": "free-theorems",
          "partial": "Con Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:ConPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first formula and the second formula.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Conjunction",
          "package": "free-theorems",
          "signature": "Conjunction Formula Formula",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Formula",
          "type": "function"
        },
        "index": {
          "description": "The first formula and the second formula",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Conjunction",
          "package": "free-theorems",
          "partial": "Conjunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:Conjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Continuous",
          "package": "free-theorems",
          "signature": "Continuous",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Restriction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Continuous",
          "package": "free-theorems",
          "partial": "Continuous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:Continuous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny other data constructor.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "DCon",
          "package": "free-theorems",
          "signature": "DCon String",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#DataConstructor",
          "type": "function"
        },
        "index": {
          "description": "Any other data constructor",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "DCon",
          "package": "free-theorems",
          "partial": "DCon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:DCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe binary data constructor \u003ccode\u003e:\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "DConConsList",
          "package": "free-theorems",
          "signature": "DConConsList",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#DataConstructor",
          "type": "function"
        },
        "index": {
          "description": "The binary data constructor",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "DConConsList",
          "package": "free-theorems",
          "partial": "DCon Cons List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:DConConsList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe nullary data constructor \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "DConEmptyList",
          "package": "free-theorems",
          "signature": "DConEmptyList",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#DataConstructor",
          "type": "function"
        },
        "index": {
          "description": "The nullary data constructor",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "DConEmptyList",
          "package": "free-theorems",
          "partial": "DCon Empty List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:DConEmptyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe n-ary tuple data constructor.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "DConTuple",
          "package": "free-theorems",
          "signature": "DConTuple Int",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#DataConstructor",
          "type": "function"
        },
        "index": {
          "description": "The n-ary tuple data constructor",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "DConTuple",
          "package": "free-theorems",
          "partial": "DCon Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:DConTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo formulas are equivalent.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Equivalence",
          "package": "free-theorems",
          "signature": "Equivalence Formula Formula",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Formula",
          "type": "function"
        },
        "index": {
          "description": "Two formulas are equivalent",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Equivalence",
          "package": "free-theorems",
          "partial": "Equivalence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:Equivalence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifies a function variable and two type expressions.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "ForallFunctions",
          "package": "free-theorems",
          "signature": "ForallFunctions (Either TermVariable TermVariable) (TypeExpression, TypeExpression) [Restriction] Formula",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Formula",
          "type": "function"
        },
        "index": {
          "description": "Quantifies function variable and two type expressions",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "ForallFunctions",
          "normalized": "ForallFunctions(Either TermVariable TermVariable)(TypeExpression,TypeExpression)[Restriction]Formula",
          "package": "free-theorems",
          "partial": "Forall Functions",
          "signature": "ForallFunctions(Either TermVariable TermVariable)(TypeExpression,TypeExpression)[Restriction]Formula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:ForallFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifies two term variables taken from a relation.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "ForallPairs",
          "package": "free-theorems",
          "signature": "ForallPairs (TermVariable, TermVariable) Relation Formula",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Formula",
          "type": "function"
        },
        "index": {
          "description": "Quantifies two term variables taken from relation",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "ForallPairs",
          "normalized": "ForallPairs(TermVariable,TermVariable)Relation Formula",
          "package": "free-theorems",
          "partial": "Forall Pairs",
          "signature": "ForallPairs(TermVariable,TermVariable)Relation Formula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:ForallPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifies a relation variable and two type expressions.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "ForallRelations",
          "package": "free-theorems",
          "signature": "ForallRelations RelationVariable (TypeExpression, TypeExpression) [Restriction] Formula",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Formula",
          "type": "function"
        },
        "index": {
          "description": "Quantifies relation variable and two type expressions",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "ForallRelations",
          "normalized": "ForallRelations RelationVariable(TypeExpression,TypeExpression)[Restriction]Formula",
          "package": "free-theorems",
          "partial": "Forall Relations",
          "signature": "ForallRelations RelationVariable(TypeExpression,TypeExpression)[Restriction]Formula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:ForallRelations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifies a term variable of a certain type.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "ForallVariables",
          "package": "free-theorems",
          "signature": "ForallVariables TermVariable TypeExpression Formula",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Formula",
          "type": "function"
        },
        "index": {
          "description": "Quantifies term variable of certain type",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "ForallVariables",
          "package": "free-theorems",
          "partial": "Forall Variables",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:ForallVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA quantified function.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "FunAbs",
          "package": "free-theorems",
          "signature": "FunAbs RelationInfo (Either TermVariable TermVariable) (TypeExpression, TypeExpression) [Restriction] Relation",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Relation",
          "type": "function"
        },
        "index": {
          "description": "quantified function",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "FunAbs",
          "normalized": "FunAbs RelationInfo(Either TermVariable TermVariable)(TypeExpression,TypeExpression)[Restriction]Relation",
          "package": "free-theorems",
          "partial": "Fun Abs",
          "signature": "FunAbs RelationInfo(Either TermVariable TermVariable)(TypeExpression,TypeExpression)[Restriction]Relation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:FunAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function variable.\n   It might be either a function to be applied on the left side (in\n   equational and inequational cases) or on the right side (in \n   inequational cases only).\n   In inequational cases, the term is additionally composed with the\n   semantic approximation partial order.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "FunVar",
          "package": "free-theorems",
          "signature": "FunVar RelationInfo (Either Term Term)",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Relation",
          "type": "function"
        },
        "index": {
          "description": "function variable It might be either function to be applied on the left side in equational and inequational cases or on the right side in inequational cases only In inequational cases the term is additionally composed with the semantic approximation partial order",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "FunVar",
          "package": "free-theorems",
          "partial": "Fun Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:FunVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first formula implies the second formula.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Implication",
          "package": "free-theorems",
          "signature": "Implication Formula Formula",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Formula",
          "type": "function"
        },
        "index": {
          "description": "The first formula implies the second formula",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Implication",
          "package": "free-theorems",
          "partial": "Implication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:Implication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo terms are equal.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "IsEqual",
          "package": "free-theorems",
          "signature": "IsEqual Term Term",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Predicate",
          "type": "function"
        },
        "index": {
          "description": "Two terms are equal",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "IsEqual",
          "package": "free-theorems",
          "partial": "Is Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:IsEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first term is less defined than the second one, based on the\n   semantical approximation order.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "IsLessEq",
          "package": "free-theorems",
          "signature": "IsLessEq Term Term",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Predicate",
          "type": "function"
        },
        "index": {
          "description": "The first term is less defined than the second one based on the semantical approximation order",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "IsLessEq",
          "package": "free-theorems",
          "partial": "Is Less Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:IsLessEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pair of two terms is contained in a relation.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "IsMember",
          "package": "free-theorems",
          "signature": "IsMember Term Term Relation",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Predicate",
          "type": "function"
        },
        "index": {
          "description": "The pair of two terms is contained in relation",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "IsMember",
          "package": "free-theorems",
          "partial": "Is Member",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:IsMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe term is not equal to \u003ccode\u003e_|_\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "IsNotBot",
          "package": "free-theorems",
          "signature": "IsNotBot Term",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Predicate",
          "type": "function"
        },
        "index": {
          "description": "The term is not equal to",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "IsNotBot",
          "package": "free-theorems",
          "partial": "Is Not Bot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:IsNotBot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant True Predicate\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "IsTrue",
          "package": "free-theorems",
          "signature": "IsTrue",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Predicate",
          "type": "function"
        },
        "index": {
          "description": "Constant True Predicate",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "IsTrue",
          "package": "free-theorems",
          "partial": "Is True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:IsTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "LeftClosed",
          "package": "free-theorems",
          "signature": "LeftClosed",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Restriction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "LeftClosed",
          "package": "free-theorems",
          "partial": "Left Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:LeftClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic formula.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Predicate",
          "package": "free-theorems",
          "signature": "Predicate Predicate",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Formula",
          "type": "function"
        },
        "index": {
          "description": "basic formula",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Predicate",
          "package": "free-theorems",
          "partial": "Predicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RVar",
          "package": "free-theorems",
          "signature": "RVar String",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#RelationVariable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RVar",
          "package": "free-theorems",
          "partial": "RVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:RVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relation corresponding to a type abstraction.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelAbs",
          "package": "free-theorems",
          "signature": "RelAbs RelationInfo RelationVariable (TypeExpression, TypeExpression) [Restriction] Relation",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Relation",
          "type": "function"
        },
        "index": {
          "description": "relation corresponding to type abstraction",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelAbs",
          "normalized": "RelAbs RelationInfo RelationVariable(TypeExpression,TypeExpression)[Restriction]Relation",
          "package": "free-theorems",
          "partial": "Rel Abs",
          "signature": "RelAbs RelationInfo RelationVariable(TypeExpression,TypeExpression)[Restriction]Relation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:RelAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic relation corresponding to a nullary type constructor.\n   Depending on the theorem type, this can be either an equivalence\n   relation or the semantic approximation partial order.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelBasic",
          "package": "free-theorems",
          "signature": "RelBasic RelationInfo",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Relation",
          "type": "function"
        },
        "index": {
          "description": "basic relation corresponding to nullary type constructor Depending on the theorem type this can be either an equivalence relation or the semantic approximation partial order",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelBasic",
          "package": "free-theorems",
          "partial": "Rel Basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:RelBasic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relation corresponding to a function type constructor.\n   The semantics of this relation differs with the language subset:\n   In the equational subset with seq, this relation is explicitly\n   requiring bottom-reflectiveness of its members.\n   In the inequational subset with seq, this relation is explicitly\n   requiring totality of its members.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelFun",
          "package": "free-theorems",
          "signature": "RelFun RelationInfo Relation Relation",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Relation",
          "type": "function"
        },
        "index": {
          "description": "relation corresponding to function type constructor The semantics of this relation differs with the language subset In the equational subset with seq this relation is explicitly requiring bottom-reflectiveness of its members In the inequational subset with seq this relation is explicitly requiring totality of its members",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelFun",
          "package": "free-theorems",
          "partial": "Rel Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:RelFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relation corresponding to a function type constructor.\n   The semantics of this relation differs with the language subset:\n   Apart from the equational subset with seq, it is equal to RelFun.\n   In the equational subset with Seq, this relation is _not_ \n   explicitly requiring bottom-reflectiveness of its members.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelFunLab",
          "package": "free-theorems",
          "signature": "RelFunLab RelationInfo Relation Relation",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Relation",
          "type": "function"
        },
        "index": {
          "description": "relation corresponding to function type constructor The semantics of this relation differs with the language subset Apart from the equational subset with seq it is equal to RelFun In the equational subset with Seq this relation is not explicitly requiring bottom-reflectiveness of its members",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelFunLab",
          "package": "free-theorems",
          "partial": "Rel Fun Lab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:RelFunLab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lifted relation for any nonnullary type constructor.\n   The semantics of lifted relations is differs with the language\n   subset:\n   In inequational subsets lifted relations explicitly require\n   left-closedness by composition with the semantic approximation \n   partial order.\n   In equational subsets with fix or seq, this relation requires\n   strictness explicitly by relating the undefined value with itself.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelLift",
          "package": "free-theorems",
          "signature": "RelLift RelationInfo TypeConstructor [Relation]",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Relation",
          "type": "function"
        },
        "index": {
          "description": "lifted relation for any nonnullary type constructor The semantics of lifted relations is differs with the language subset In inequational subsets lifted relations explicitly require left-closedness by composition with the semantic approximation partial order In equational subsets with fix or seq this relation requires strictness explicitly by relating the undefined value with itself",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelLift",
          "normalized": "RelLift RelationInfo TypeConstructor[Relation]",
          "package": "free-theorems",
          "partial": "Rel Lift",
          "signature": "RelLift RelationInfo TypeConstructor[Relation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:RelLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relation variable.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelVar",
          "package": "free-theorems",
          "signature": "RelVar RelationInfo RelationVariable",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Relation",
          "type": "function"
        },
        "index": {
          "description": "relation variable",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelVar",
          "package": "free-theorems",
          "partial": "Rel Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:RelVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelationInfo",
          "package": "free-theorems",
          "signature": "RelationInfo",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#RelationInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RelationInfo",
          "package": "free-theorems",
          "partial": "Relation Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:RelationInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RespectsClasses",
          "package": "free-theorems",
          "signature": "RespectsClasses [TypeClass]",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Restriction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "RespectsClasses",
          "normalized": "RespectsClasses[TypeClass]",
          "package": "free-theorems",
          "partial": "Respects Classes",
          "signature": "RespectsClasses[TypeClass]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:RespectsClasses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Strict",
          "package": "free-theorems",
          "signature": "Strict",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Restriction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Strict",
          "package": "free-theorems",
          "partial": "Strict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:Strict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "TVar",
          "package": "free-theorems",
          "signature": "TVar String",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#TermVariable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "TVar",
          "package": "free-theorems",
          "partial": "TVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:TVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication of a term to a term.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "TermApp",
          "package": "free-theorems",
          "signature": "TermApp Term Term",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Application of term to term",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "TermApp",
          "package": "free-theorems",
          "partial": "Term App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:TermApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of function terms\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "TermComp",
          "package": "free-theorems",
          "signature": "TermComp [Term]",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Composition of function terms",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "TermComp",
          "normalized": "TermComp[Term]",
          "package": "free-theorems",
          "partial": "Term Comp",
          "signature": "TermComp[Term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:TermComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstantiation of a term.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "TermIns",
          "package": "free-theorems",
          "signature": "TermIns Term TypeExpression",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Instantiation of term",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "TermIns",
          "package": "free-theorems",
          "partial": "Term Ins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:TermIns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA term variable.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "TermVar",
          "package": "free-theorems",
          "signature": "TermVar TermVariable",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Term",
          "type": "function"
        },
        "index": {
          "description": "term variable",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "TermVar",
          "package": "free-theorems",
          "partial": "Term Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:TermVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Total",
          "package": "free-theorems",
          "signature": "Total",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#Restriction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "Total",
          "package": "free-theorems",
          "partial": "Total",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:Total"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "UnfoldedClass",
          "package": "free-theorems",
          "signature": "UnfoldedClass [TypeClass] TypeClass (Either RelationVariable TermVariable) [Formula]",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#UnfoldedClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "UnfoldedClass",
          "normalized": "UnfoldedClass[TypeClass]TypeClass(Either RelationVariable TermVariable)[Formula]",
          "package": "free-theorems",
          "partial": "Unfolded Class",
          "signature": "UnfoldedClass[TypeClass]TypeClass(Either RelationVariable TermVariable)[Formula]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:UnfoldedClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "UnfoldedLift",
          "package": "free-theorems",
          "signature": "UnfoldedLift Relation [UnfoldedDataCon]",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#UnfoldedLift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "UnfoldedLift",
          "normalized": "UnfoldedLift Relation[UnfoldedDataCon]",
          "package": "free-theorems",
          "partial": "Unfolded Lift",
          "signature": "UnfoldedLift Relation[UnfoldedDataCon]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:UnfoldedLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the relation information from a relation.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "relationInfo",
          "package": "free-theorems",
          "signature": "Relation -\u003e RelationInfo",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#relationInfo",
          "type": "function"
        },
        "index": {
          "description": "Extracts the relation information from relation",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "relationInfo",
          "normalized": "Relation-\u003eRelationInfo",
          "package": "free-theorems",
          "partial": "Info",
          "signature": "Relation-\u003eRelationInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:relationInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe language subset in which a relation was generated.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "relationLanguageSubset",
          "package": "free-theorems",
          "signature": "LanguageSubset",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#RelationInfo",
          "type": "function"
        },
        "index": {
          "description": "The language subset in which relation was generated",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "relationLanguageSubset",
          "package": "free-theorems",
          "partial": "Language Subset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:relationLanguageSubset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the first components of pairs contained in a relation.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "relationLeftType",
          "package": "free-theorems",
          "signature": "TypeExpression",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#RelationInfo",
          "type": "function"
        },
        "index": {
          "description": "The type of the first components of pairs contained in relation",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "relationLeftType",
          "package": "free-theorems",
          "partial": "Left Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:relationLeftType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the second components of pairs contained in a \n   relation.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "relationRightType",
          "package": "free-theorems",
          "signature": "TypeExpression",
          "source": "src/Language-Haskell-FreeTheorems-Theorems.html#RelationInfo",
          "type": "function"
        },
        "index": {
          "description": "The type of the second components of pairs contained in relation",
          "hierarchy": "Language Haskell FreeTheorems Theorems",
          "module": "Language.Haskell.FreeTheorems.Theorems",
          "name": "relationRightType",
          "package": "free-theorems",
          "partial": "Right Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-Theorems.html#v:relationRightType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclares data types which describe valid declarations and valid type \n   signatures. A declaration or type signature is valid when all checks (see\n   \u003ca\u003eLanguage.Haskell.FreeTheorems.Frontend\u003c/a\u003e) were passed successfully.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "ValidSyntax",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-ValidSyntax.html",
          "type": "module"
        },
        "index": {
          "description": "Declares data types which describe valid declarations and valid type signatures declaration or type signature is valid when all checks see Language.Haskell.FreeTheorems.Frontend were passed successfully",
          "hierarchy": "Language Haskell FreeTheorems ValidSyntax",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "ValidSyntax",
          "package": "free-theorems",
          "partial": "Valid Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-ValidSyntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarks a valid declaration.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "ValidDeclaration",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-ValidSyntax.html#ValidDeclaration",
          "type": "data"
        },
        "index": {
          "description": "Marks valid declaration",
          "hierarchy": "Language Haskell FreeTheorems ValidSyntax",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "ValidDeclaration",
          "package": "free-theorems",
          "partial": "Valid Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-ValidSyntax.html#t:ValidDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarks a valid type signature.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "ValidSignature",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-ValidSyntax.html#ValidSignature",
          "type": "newtype"
        },
        "index": {
          "description": "Marks valid type signature",
          "hierarchy": "Language Haskell FreeTheorems ValidSyntax",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "ValidSignature",
          "package": "free-theorems",
          "partial": "Valid Signature",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-ValidSyntax.html#t:ValidSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "ValidDeclaration",
          "package": "free-theorems",
          "signature": "ValidDeclaration",
          "source": "src/Language-Haskell-FreeTheorems-ValidSyntax.html#ValidDeclaration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems ValidSyntax",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "ValidDeclaration",
          "package": "free-theorems",
          "partial": "Valid Declaration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-ValidSyntax.html#v:ValidDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "ValidSignature",
          "package": "free-theorems",
          "signature": "ValidSignature",
          "source": "src/Language-Haskell-FreeTheorems-ValidSyntax.html#ValidSignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems ValidSyntax",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "ValidSignature",
          "package": "free-theorems",
          "partial": "Valid Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-ValidSyntax.html#v:ValidSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts all type signatures from a list of declarations.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.FreeTheorems.ValidSyntax\",\"Language.Haskell.FreeTheorems\"]",
          "name": "filterSignatures",
          "package": "free-theorems",
          "signature": "[ValidDeclaration] -\u003e [ValidSignature]",
          "source": "src/Language-Haskell-FreeTheorems-ValidSyntax.html#filterSignatures",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-ValidSyntax.html#v:filterSignatures\",\"http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:filterSignatures\"]"
        },
        "index": {
          "description": "Extracts all type signatures from list of declarations",
          "hierarchy": "Language Haskell FreeTheorems ValidSyntax",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "filterSignatures",
          "normalized": "[ValidDeclaration]-\u003e[ValidSignature]",
          "package": "free-theorems",
          "partial": "Signatures",
          "signature": "[ValidDeclaration]-\u003e[ValidSignature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-ValidSyntax.html#v:filterSignatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates whether the declarations declares or depends on an \n   algebraic data type with strictness flag.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "isStrictDeclaration",
          "package": "free-theorems",
          "signature": "Bool",
          "source": "src/Language-Haskell-FreeTheorems-ValidSyntax.html#ValidDeclaration",
          "type": "function"
        },
        "index": {
          "description": "Indicates whether the declarations declares or depends on an algebraic data type with strictness flag",
          "hierarchy": "Language Haskell FreeTheorems ValidSyntax",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "isStrictDeclaration",
          "package": "free-theorems",
          "partial": "Strict Declaration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-ValidSyntax.html#v:isStrictDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the declaration structure hidden in a valid declaration.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "rawDeclaration",
          "package": "free-theorems",
          "signature": "Declaration",
          "source": "src/Language-Haskell-FreeTheorems-ValidSyntax.html#ValidDeclaration",
          "type": "function"
        },
        "index": {
          "description": "Returns the declaration structure hidden in valid declaration",
          "hierarchy": "Language Haskell FreeTheorems ValidSyntax",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "rawDeclaration",
          "package": "free-theorems",
          "partial": "Declaration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-ValidSyntax.html#v:rawDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the signature structure hidden in a valid type signature.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "rawSignature",
          "package": "free-theorems",
          "signature": "Signature",
          "source": "src/Language-Haskell-FreeTheorems-ValidSyntax.html#ValidSignature",
          "type": "function"
        },
        "index": {
          "description": "Returns the signature structure hidden in valid type signature",
          "hierarchy": "Language Haskell FreeTheorems ValidSyntax",
          "module": "Language.Haskell.FreeTheorems.ValidSyntax",
          "name": "rawSignature",
          "package": "free-theorems",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems-ValidSyntax.html#v:rawSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData structures and functions to automatically generate free theorems.\n\u003c/p\u003e\u003cp\u003eThis library is based on the following papers:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eTheorems For Free!\u003c/em\u003e, Philip Wadler, in Functional Programming Languages\n     and Computer Architecture Proceedings, 1989.\n     \u003ca\u003ehttp://homepages.inf.ed.ac.uk/wadler/papers/free/free.ps\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eThe Impact of seq on Free Theorems-Based Program Transformations\u003c/em\u003e,\n     Patricia Johann and Janis Voigtl&#228;nder, Fundamenta Informaticae,\n     2006. \u003ca\u003ehttp://www.orchid.inf.tu-dresden.de/~voigt/seqFinal.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe intended usage of this library is as follows.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Parse a list of declarations using one of two parsers \n       (\u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e or \n       \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e) or any other\n       suitable parser.\n       Use \u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e to obtain a list of valid declarations.\n\u003c/li\u003e\u003cli\u003e Optional:\n       Parse more declarations and validate them against the previously \n       loaded list of valid declarations with \u003ccode\u003e\u003ca\u003echeckAgainst\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Extract all valid signatures from a list of valid declarations by\n       \u003ccode\u003e\u003ca\u003efilterSignatures\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Interpret a signature (\u003ccode\u003e\u003ca\u003einterpret\u003c/a\u003e\u003c/code\u003e), transform it to a theorem\n       (\u003ccode\u003e\u003ca\u003easTheorem\u003c/a\u003e\u003c/code\u003e) and pretty-print it (\u003ccode\u003e\u003ca\u003eprettyTheorem\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e Optional: Specialise relation variables to functions \n       (\u003ccode\u003e\u003ca\u003erelationVariables\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003especialise\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e Optional: Extract lifted relations to show their definition\n       (\u003ccode\u003e\u003ca\u003eunfoldLifts\u003c/a\u003e\u003c/code\u003e) and pretty-print them (\u003ccode\u003e\u003ca\u003eprettyUnfoldedLift\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e Optional: Extract class constraints to show their definition\n       (\u003ccode\u003e\u003ca\u003eunfoldClasses\u003c/a\u003e\u003c/code\u003e) and pretty-print them (\u003ccode\u003e\u003ca\u003eprettyUnfoldedClass\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e Optional: Further simplify the Formulas (\u003ccode\u003e\u003ca\u003esimplify\u003c/a\u003e\u003c/code\u003e) or UnfoldedLift\n       (\u003ccode\u003e\u003ca\u003esimplifyUnfoldedLift\u003c/a\u003e\u003c/code\u003e) by syntactic transformations.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "FreeTheorems",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems.html",
          "type": "module"
        },
        "index": {
          "description": "Data structures and functions to automatically generate free theorems This library is based on the following papers Theorems For Free Philip Wadler in Functional Programming Languages and Computer Architecture Proceedings http homepages.inf.ed.ac.uk wadler papers free free.ps The Impact of seq on Free Theorems-Based Program Transformations Patricia Johann and Janis Voigtl nder Fundamenta Informaticae http www.orchid.inf.tu-dresden.de voigt seqFinal.pdf The intended usage of this library is as follows Parse list of declarations using one of two parsers parse or parse or any other suitable parser Use check to obtain list of valid declarations Optional Parse more declarations and validate them against the previously loaded list of valid declarations with checkAgainst Extract all valid signatures from list of valid declarations by filterSignatures Interpret signature interpret transform it to theorem asTheorem and pretty-print it prettyTheorem Optional Specialise relation variables to functions relationVariables and specialise Optional Extract lifted relations to show their definition unfoldLifts and pretty-print them prettyUnfoldedLift Optional Extract class constraints to show their definition unfoldClasses and pretty-print them prettyUnfoldedClass Optional Further simplify the Formulas simplify or UnfoldedLift simplifyUnfoldedLift by syntactic transformations",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "FreeTheorems",
          "package": "free-theorems",
          "partial": "Free Theorems",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper type for a \u003ccode\u003eWriter\u003c/code\u003e which stores pretty-printable documents along\n   with checked values.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "Checked",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Frontend-Error.html#Checked",
          "type": "type"
        },
        "index": {
          "description": "wrapper type for Writer which stores pretty-printable documents along with checked values",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "Checked",
          "package": "free-theorems",
          "partial": "Checked",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#t:Checked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structure describing the intermediate result of interpreting a type\n   expression as a relation.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "Intermediate",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Intermediate.html#Intermediate",
          "type": "data"
        },
        "index": {
          "description": "structure describing the intermediate result of interpreting type expression as relation",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "Intermediate",
          "package": "free-theorems",
          "partial": "Intermediate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#t:Intermediate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescriptions of the Haskell language subsets for which free theorems can\n   be generated.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "LanguageSubset",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-LanguageSubsets.html#LanguageSubset",
          "type": "data"
        },
        "index": {
          "description": "Descriptions of the Haskell language subsets for which free theorems can be generated",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "LanguageSubset",
          "package": "free-theorems",
          "partial": "Language Subset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#t:LanguageSubset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper type for \u003ccode\u003eWriter\u003c/code\u003e which stores pretty-printable documents along\n   with parsed values.\n   This type is provided as standard return type for parsers.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "Parsed",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-Frontend-Error.html#Parsed",
          "type": "type"
        },
        "index": {
          "description": "wrapper type for Writer which stores pretty-printable documents along with parsed values This type is provided as standard return type for parsers",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "Parsed",
          "package": "free-theorems",
          "partial": "Parsed",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#t:Parsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible options for pretty-printing theorems.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "PrettyTheoremOption",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-PrettyTheorems.html#PrettyTheoremOption",
          "type": "data"
        },
        "index": {
          "description": "Possible options for pretty-printing theorems",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "PrettyTheoremOption",
          "package": "free-theorems",
          "partial": "Pretty Theorem Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#t:PrettyTheoremOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result type for generating free theorems.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "TheoremType",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-LanguageSubsets.html#TheoremType",
          "type": "data"
        },
        "index": {
          "description": "The result type for generating free theorems",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "TheoremType",
          "package": "free-theorems",
          "partial": "Theorem Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#t:TheoremType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarks a valid declaration.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "ValidDeclaration",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-ValidSyntax.html#ValidDeclaration",
          "type": "data"
        },
        "index": {
          "description": "Marks valid declaration",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "ValidDeclaration",
          "package": "free-theorems",
          "partial": "Valid Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#t:ValidDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarks a valid type signature.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "ValidSignature",
          "package": "free-theorems",
          "source": "src/Language-Haskell-FreeTheorems-ValidSyntax.html#ValidSignature",
          "type": "data"
        },
        "index": {
          "description": "Marks valid type signature",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "ValidSignature",
          "package": "free-theorems",
          "partial": "Valid Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#t:ValidSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis subset describes only terms in which no undefinedness may.\n   This excludes terms defined using general recursion or selective\n   strictness (as offered by \u003ccode\u003eseq\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "BasicSubset",
          "package": "free-theorems",
          "signature": "BasicSubset",
          "source": "src/Language-Haskell-FreeTheorems-LanguageSubsets.html#LanguageSubset",
          "type": "function"
        },
        "index": {
          "description": "This subset describes only terms in which no undefinedness may This excludes terms defined using general recursion or selective strictness as offered by seq",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "BasicSubset",
          "package": "free-theorems",
          "partial": "Basic Subset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:BasicSubset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn equational free theorem should be generated.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "EquationalTheorem",
          "package": "free-theorems",
          "signature": "EquationalTheorem",
          "source": "src/Language-Haskell-FreeTheorems-LanguageSubsets.html#TheoremType",
          "type": "function"
        },
        "index": {
          "description": "An equational free theorem should be generated",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "EquationalTheorem",
          "package": "free-theorems",
          "partial": "Equational Theorem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:EquationalTheorem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo inequational free theorems should be generated.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "InequationalTheorem",
          "package": "free-theorems",
          "signature": "InequationalTheorem",
          "source": "src/Language-Haskell-FreeTheorems-LanguageSubsets.html#TheoremType",
          "type": "function"
        },
        "index": {
          "description": "Two inequational free theorems should be generated",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "InequationalTheorem",
          "package": "free-theorems",
          "partial": "Inequational Theorem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:InequationalTheorem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOmit mentioning language subsets explicitly for certain relations.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "OmitLanguageSubsets",
          "package": "free-theorems",
          "signature": "OmitLanguageSubsets",
          "source": "src/Language-Haskell-FreeTheorems-PrettyTheorems.html#PrettyTheoremOption",
          "type": "function"
        },
        "index": {
          "description": "Omit mentioning language subsets explicitly for certain relations",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "OmitLanguageSubsets",
          "package": "free-theorems",
          "partial": "Omit Language Subsets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:OmitLanguageSubsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOmits all instantiations of types. This option makes theorems \n   usually better readable.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "OmitTypeInstantiations",
          "package": "free-theorems",
          "signature": "OmitTypeInstantiations",
          "source": "src/Language-Haskell-FreeTheorems-PrettyTheorems.html#PrettyTheoremOption",
          "type": "function"
        },
        "index": {
          "description": "Omits all instantiations of types This option makes theorems usually better readable",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "OmitTypeInstantiations",
          "package": "free-theorems",
          "partial": "Omit Type Instantiations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:OmitTypeInstantiations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis subset describes terms in which undefined values may occur\n   such as introduced by a fixpoint combinator or possibly failing\n   pattern matches (if not all cases are covered).\n   This excludes any term based on \u003ccode\u003eseq\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "SubsetWithFix",
          "package": "free-theorems",
          "signature": "SubsetWithFix TheoremType",
          "source": "src/Language-Haskell-FreeTheorems-LanguageSubsets.html#LanguageSubset",
          "type": "function"
        },
        "index": {
          "description": "This subset describes terms in which undefined values may occur such as introduced by fixpoint combinator or possibly failing pattern matches if not all cases are covered This excludes any term based on seq",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "SubsetWithFix",
          "package": "free-theorems",
          "partial": "Subset With Fix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:SubsetWithFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditionally to the fix subset, this subset allows terms to\n   be defined using \u003ccode\u003eseq\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "SubsetWithSeq",
          "package": "free-theorems",
          "signature": "SubsetWithSeq TheoremType",
          "source": "src/Language-Haskell-FreeTheorems-LanguageSubsets.html#LanguageSubset",
          "type": "function"
        },
        "index": {
          "description": "Additionally to the fix subset this subset allows terms to be defined using seq",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "SubsetWithSeq",
          "package": "free-theorems",
          "partial": "Subset With Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:SubsetWithSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfolds an intermediate structure to a theorem with _all_ restrictions.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "asCompleteTheorem",
          "package": "free-theorems",
          "signature": "Intermediate -\u003e Theorem",
          "source": "src/Language-Haskell-FreeTheorems-Unfold.html#asCompleteTheorem",
          "type": "function"
        },
        "index": {
          "description": "Unfolds an intermediate structure to theorem with all restrictions",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "asCompleteTheorem",
          "normalized": "Intermediate-\u003eTheorem",
          "package": "free-theorems",
          "partial": "Complete Theorem",
          "signature": "Intermediate-\u003eTheorem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:asCompleteTheorem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfolds an intermediate structure to a theorem.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "asTheorem",
          "package": "free-theorems",
          "signature": "Intermediate -\u003e Theorem",
          "source": "src/Language-Haskell-FreeTheorems-Unfold.html#asTheorem",
          "type": "function"
        },
        "index": {
          "description": "Unfolds an intermediate structure to theorem",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "asTheorem",
          "normalized": "Intermediate-\u003eTheorem",
          "package": "free-theorems",
          "partial": "Theorem",
          "signature": "Intermediate-\u003eTheorem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:asTheorem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks a list of declarations.\n   It returns a list of all declarations which are valid and an error message\n   for all those declarations which are not valid.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "check",
          "package": "free-theorems",
          "signature": "[Declaration] -\u003e Checked [ValidDeclaration]",
          "source": "src/Language-Haskell-FreeTheorems-Frontend.html#check",
          "type": "function"
        },
        "index": {
          "description": "Checks list of declarations It returns list of all declarations which are valid and an error message for all those declarations which are not valid",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "check",
          "normalized": "[Declaration]-\u003eChecked[ValidDeclaration]",
          "package": "free-theorems",
          "signature": "[Declaration]-\u003eChecked[ValidDeclaration]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks a list of declarations against a given list of valid\n   declarations.\n   It returns a list of all declarations from the second argument which are\n   valid. Moreover, the result contains an error message for all those\n   declarations which are not valid.\n\u003c/p\u003e\u003cp\u003eThe declarations given in the second argument may be based on those of the\n   first argument. For example, if the first argument contains a valid\n   declaration of a type \"Foo\" and if the second argument contains the\n   following declaration\n\u003c/p\u003e\u003cpre\u003e type Bar = Foo\n\u003c/pre\u003e\u003cp\u003ethen also the declaration of \"Bar\" is valid.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "checkAgainst",
          "package": "free-theorems",
          "signature": "[ValidDeclaration] -\u003e [Declaration] -\u003e Checked [ValidDeclaration]",
          "source": "src/Language-Haskell-FreeTheorems-Frontend.html#checkAgainst",
          "type": "function"
        },
        "index": {
          "description": "Checks list of declarations against given list of valid declarations It returns list of all declarations from the second argument which are valid Moreover the result contains an error message for all those declarations which are not valid The declarations given in the second argument may be based on those of the first argument For example if the first argument contains valid declaration of type Foo and if the second argument contains the following declaration type Bar Foo then also the declaration of Bar is valid",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "checkAgainst",
          "normalized": "[ValidDeclaration]-\u003e[Declaration]-\u003eChecked[ValidDeclaration]",
          "package": "free-theorems",
          "partial": "Against",
          "signature": "[ValidDeclaration]-\u003e[Declaration]-\u003eChecked[ValidDeclaration]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:checkAgainst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterprets a valid signature as a relation. This is the key point for\n   generating free theorems.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "interpret",
          "package": "free-theorems",
          "signature": "[ValidDeclaration] -\u003e LanguageSubset -\u003e ValidSignature -\u003e Maybe Intermediate",
          "source": "src/Language-Haskell-FreeTheorems-Intermediate.html#interpret",
          "type": "function"
        },
        "index": {
          "description": "Interprets valid signature as relation This is the key point for generating free theorems",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "interpret",
          "normalized": "[ValidDeclaration]-\u003eLanguageSubset-\u003eValidSignature-\u003eMaybe Intermediate",
          "package": "free-theorems",
          "signature": "[ValidDeclaration]-\u003eLanguageSubset-\u003eValidSignature-\u003eMaybe Intermediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:interpret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-prints a declaration.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "prettyDeclaration",
          "package": "free-theorems",
          "signature": "Declaration -\u003e Doc",
          "source": "src/Language-Haskell-FreeTheorems-PrettyTypes.html#prettyDeclaration",
          "type": "function"
        },
        "index": {
          "description": "Pretty-prints declaration",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "prettyDeclaration",
          "normalized": "Declaration-\u003eDoc",
          "package": "free-theorems",
          "partial": "Declaration",
          "signature": "Declaration-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:prettyDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-prints a relation variable.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "prettyRelationVariable",
          "package": "free-theorems",
          "signature": "RelationVariable -\u003e Doc",
          "source": "src/Language-Haskell-FreeTheorems-PrettyTheorems.html#prettyRelationVariable",
          "type": "function"
        },
        "index": {
          "description": "Pretty-prints relation variable",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "prettyRelationVariable",
          "normalized": "RelationVariable-\u003eDoc",
          "package": "free-theorems",
          "partial": "Relation Variable",
          "signature": "RelationVariable-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:prettyRelationVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-prints a type signature.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "prettySignature",
          "package": "free-theorems",
          "signature": "Signature -\u003e Doc",
          "source": "src/Language-Haskell-FreeTheorems-PrettyTypes.html#prettySignature",
          "type": "function"
        },
        "index": {
          "description": "Pretty-prints type signature",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "prettySignature",
          "normalized": "Signature-\u003eDoc",
          "package": "free-theorems",
          "partial": "Signature",
          "signature": "Signature-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:prettySignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-prints a theorem.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "prettyTheorem",
          "package": "free-theorems",
          "signature": "[PrettyTheoremOption] -\u003e Theorem -\u003e Doc",
          "source": "src/Language-Haskell-FreeTheorems-PrettyTheorems.html#prettyTheorem",
          "type": "function"
        },
        "index": {
          "description": "Pretty-prints theorem",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "prettyTheorem",
          "normalized": "[PrettyTheoremOption]-\u003eTheorem-\u003eDoc",
          "package": "free-theorems",
          "partial": "Theorem",
          "signature": "[PrettyTheoremOption]-\u003eTheorem-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:prettyTheorem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-prints an unfolded type class.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "prettyUnfoldedClass",
          "package": "free-theorems",
          "signature": "[PrettyTheoremOption] -\u003e UnfoldedClass -\u003e Doc",
          "source": "src/Language-Haskell-FreeTheorems-PrettyTheorems.html#prettyUnfoldedClass",
          "type": "function"
        },
        "index": {
          "description": "Pretty-prints an unfolded type class",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "prettyUnfoldedClass",
          "normalized": "[PrettyTheoremOption]-\u003eUnfoldedClass-\u003eDoc",
          "package": "free-theorems",
          "partial": "Unfolded Class",
          "signature": "[PrettyTheoremOption]-\u003eUnfoldedClass-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:prettyUnfoldedClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-prints an unfolded lift relation.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "prettyUnfoldedLift",
          "package": "free-theorems",
          "signature": "[PrettyTheoremOption] -\u003e UnfoldedLift -\u003e Doc",
          "source": "src/Language-Haskell-FreeTheorems-PrettyTheorems.html#prettyUnfoldedLift",
          "type": "function"
        },
        "index": {
          "description": "Pretty-prints an unfolded lift relation",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "prettyUnfoldedLift",
          "normalized": "[PrettyTheoremOption]-\u003eUnfoldedLift-\u003eDoc",
          "package": "free-theorems",
          "partial": "Unfolded Lift",
          "signature": "[PrettyTheoremOption]-\u003eUnfoldedLift-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:prettyUnfoldedLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the declaration structure hidden in a valid declaration.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "rawDeclaration",
          "package": "free-theorems",
          "signature": "ValidDeclaration -\u003e Declaration",
          "source": "src/Language-Haskell-FreeTheorems-ValidSyntax.html#rawDeclaration",
          "type": "function"
        },
        "index": {
          "description": "Returns the declaration structure hidden in valid declaration",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "rawDeclaration",
          "normalized": "ValidDeclaration-\u003eDeclaration",
          "package": "free-theorems",
          "partial": "Declaration",
          "signature": "ValidDeclaration-\u003eDeclaration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:rawDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the signature structure hidden in a valid type signature.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "rawSignature",
          "package": "free-theorems",
          "signature": "ValidSignature -\u003e Signature",
          "source": "src/Language-Haskell-FreeTheorems-ValidSyntax.html#rawSignature",
          "type": "function"
        },
        "index": {
          "description": "Returns the signature structure hidden in valid type signature",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "rawSignature",
          "normalized": "ValidSignature-\u003eSignature",
          "package": "free-theorems",
          "partial": "Signature",
          "signature": "ValidSignature-\u003eSignature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:rawSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a list of all bound relation variables in an intermediate\n   structure, which can be specialised to a function. \n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "relationVariables",
          "package": "free-theorems",
          "signature": "Intermediate -\u003e [RelationVariable]",
          "source": "src/Language-Haskell-FreeTheorems-Intermediate.html#relationVariables",
          "type": "function"
        },
        "index": {
          "description": "Creates list of all bound relation variables in an intermediate structure which can be specialised to function",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "relationVariables",
          "normalized": "Intermediate-\u003e[RelationVariable]",
          "package": "free-theorems",
          "partial": "Variables",
          "signature": "Intermediate-\u003e[RelationVariable]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:relationVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper function for \u003ccode\u003erunWriter\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "runChecks",
          "package": "free-theorems",
          "signature": "Checked a -\u003e (a, [Doc])",
          "source": "src/Language-Haskell-FreeTheorems-Frontend-Error.html#runChecks",
          "type": "function"
        },
        "index": {
          "description": "wrapper function for runWriter",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "runChecks",
          "normalized": "Checked a-\u003e(a,[Doc])",
          "package": "free-theorems",
          "partial": "Checks",
          "signature": "Checked a-\u003e(a,[Doc])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:runChecks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems",
          "name": "simplify",
          "package": "free-theorems",
          "signature": "Formula -\u003e Formula",
          "source": "src/Language-Haskell-FreeTheorems-Theorems-Simplify.html#simplify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "simplify",
          "normalized": "Formula-\u003eFormula",
          "package": "free-theorems",
          "signature": "Formula-\u003eFormula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:simplify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.FreeTheorems",
          "name": "simplifyUnfoldedLift",
          "package": "free-theorems",
          "signature": "UnfoldedLift -\u003e UnfoldedLift",
          "source": "src/Language-Haskell-FreeTheorems-Theorems-Simplify.html#simplifyUnfoldedLift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "simplifyUnfoldedLift",
          "normalized": "UnfoldedLift-\u003eUnfoldedLift",
          "package": "free-theorems",
          "partial": "Unfolded Lift",
          "signature": "UnfoldedLift-\u003eUnfoldedLift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:simplifyUnfoldedLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialises a relation variable to a function variable in an intermediate\n   structure.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "specialise",
          "package": "free-theorems",
          "signature": "Intermediate -\u003e RelationVariable -\u003e Intermediate",
          "source": "src/Language-Haskell-FreeTheorems-Intermediate.html#specialise",
          "type": "function"
        },
        "index": {
          "description": "Specialises relation variable to function variable in an intermediate structure",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "specialise",
          "normalized": "Intermediate-\u003eRelationVariable-\u003eIntermediate",
          "package": "free-theorems",
          "signature": "Intermediate-\u003eRelationVariable-\u003eIntermediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:specialise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialises a relation variable to an inverse function variable.\n   This function does not modify intermediate structures in subsets with\n   equational theorems.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "specialiseInverse",
          "package": "free-theorems",
          "signature": "Intermediate -\u003e RelationVariable -\u003e Intermediate",
          "source": "src/Language-Haskell-FreeTheorems-Intermediate.html#specialiseInverse",
          "type": "function"
        },
        "index": {
          "description": "Specialises relation variable to an inverse function variable This function does not modify intermediate structures in subsets with equational theorems",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "specialiseInverse",
          "normalized": "Intermediate-\u003eRelationVariable-\u003eIntermediate",
          "package": "free-theorems",
          "partial": "Inverse",
          "signature": "Intermediate-\u003eRelationVariable-\u003eIntermediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:specialiseInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts all class constraints and returns their definition.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "unfoldClasses",
          "package": "free-theorems",
          "signature": "[ValidDeclaration] -\u003e Intermediate -\u003e [UnfoldedClass]",
          "source": "src/Language-Haskell-FreeTheorems-Unfold.html#unfoldClasses",
          "type": "function"
        },
        "index": {
          "description": "Extracts all class constraints and returns their definition",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "unfoldClasses",
          "normalized": "[ValidDeclaration]-\u003eIntermediate-\u003e[UnfoldedClass]",
          "package": "free-theorems",
          "partial": "Classes",
          "signature": "[ValidDeclaration]-\u003eIntermediate-\u003e[UnfoldedClass]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:unfoldClasses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts all lift relations and returns their definition.\n\u003c/p\u003e",
          "module": "Language.Haskell.FreeTheorems",
          "name": "unfoldLifts",
          "package": "free-theorems",
          "signature": "[ValidDeclaration] -\u003e Intermediate -\u003e [UnfoldedLift]",
          "source": "src/Language-Haskell-FreeTheorems-Unfold.html#unfoldLifts",
          "type": "function"
        },
        "index": {
          "description": "Extracts all lift relations and returns their definition",
          "hierarchy": "Language Haskell FreeTheorems",
          "module": "Language.Haskell.FreeTheorems",
          "name": "unfoldLifts",
          "normalized": "[ValidDeclaration]-\u003eIntermediate-\u003e[UnfoldedLift]",
          "package": "free-theorems",
          "partial": "Lifts",
          "signature": "[ValidDeclaration]-\u003eIntermediate-\u003e[UnfoldedLift]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-theorems/docs/Language-Haskell-FreeTheorems.html#v:unfoldLifts"
      }
    }
  ]
]