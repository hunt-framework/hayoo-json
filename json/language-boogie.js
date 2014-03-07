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
        "word": "language-boogie"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstract syntax tree for Boogie 2\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.AST",
          "name": "AST",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html",
          "type": "module"
        },
        "index": {
          "description": "Abstract syntax tree for Boogie",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "AST",
          "package": "language-boogie",
          "partial": "AST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-level declaration\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "BareDecl",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#BareDecl",
          "type": "data"
        },
        "index": {
          "description": "Top-level declaration",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "BareDecl",
          "package": "language-boogie",
          "partial": "Bare Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:BareDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "BareExpression",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#BareExpression",
          "type": "data"
        },
        "index": {
          "description": "Expression",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "BareExpression",
          "package": "language-boogie",
          "partial": "Bare Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:BareExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatement labeled by multiple labels\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "BareLStatement",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#BareLStatement",
          "type": "type"
        },
        "index": {
          "description": "Statement labeled by multiple labels",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "BareLStatement",
          "package": "language-boogie",
          "partial": "Bare LStatement",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:BareLStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatement\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "BareStatement",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#BareStatement",
          "type": "data"
        },
        "index": {
          "description": "Statement",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "BareStatement",
          "package": "language-boogie",
          "partial": "Bare Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:BareStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic block is a list of statements labeled by a single label;\n the list contains no jump, if or while statements,\n except for the last statement, which can be a goto or return\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "BasicBlock",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#BasicBlock",
          "type": "type"
        },
        "index": {
          "description": "Basic block is list of statements labeled by single label the list contains no jump if or while statements except for the last statement which can be goto or return",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "BasicBlock",
          "package": "language-boogie",
          "partial": "Basic Block",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:BasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcedure body transformed to basic blocks:\n consists of local variable declarations and a set of basic blocks\n (represented as a map from their labels to statement lists)\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "BasicBody",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#BasicBody",
          "type": "type"
        },
        "index": {
          "description": "Procedure body transformed to basic blocks consists of local variable declarations and set of basic blocks represented as map from their labels to statement lists",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "BasicBody",
          "package": "language-boogie",
          "partial": "Basic Body",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:BasicBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary operators  \n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "BinOp",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "data"
        },
        "index": {
          "description": "Binary operators",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "BinOp",
          "package": "language-boogie",
          "partial": "Bin Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:BinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatement block\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Block",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#Block",
          "type": "type"
        },
        "index": {
          "description": "Statement block",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Block",
          "package": "language-boogie",
          "partial": "Block",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcedure body: consists of local variable declarations and a statement block\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Body",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#Body",
          "type": "type"
        },
        "index": {
          "description": "Procedure body consists of local variable declarations and statement block",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Body",
          "package": "language-boogie",
          "partial": "Body",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:Body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcedure contract clause \n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Contract",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#Contract",
          "type": "data"
        },
        "index": {
          "description": "Procedure contract clause",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Contract",
          "package": "language-boogie",
          "partial": "Contract",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:Contract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-level declaration with a source position attached  \n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Decl",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#Decl",
          "type": "type"
        },
        "index": {
          "description": "Top-level declaration with source position attached",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Decl",
          "package": "language-boogie",
          "partial": "Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:Decl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression with a source position attached  \n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Expression",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#Expression",
          "type": "type"
        },
        "index": {
          "description": "Expression with source position attached",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Expression",
          "package": "language-boogie",
          "partial": "Expression",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:Expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormal argument of a function  \n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "FArg",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#FArg",
          "type": "type"
        },
        "index": {
          "description": "Formal argument of function",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "FArg",
          "package": "language-boogie",
          "partial": "FArg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:FArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifier\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Id",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#Id",
          "type": "type"
        },
        "index": {
          "description": "Identifier",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Id",
          "package": "language-boogie",
          "partial": "Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName declaration (identifier, type)\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "IdType",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#IdType",
          "type": "type"
        },
        "index": {
          "description": "Name declaration identifier type",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "IdType",
          "package": "language-boogie",
          "partial": "Id Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:IdType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName declaration with a where clause\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "IdTypeWhere",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#IdTypeWhere",
          "type": "data"
        },
        "index": {
          "description": "Name declaration with where clause",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "IdTypeWhere",
          "package": "language-boogie",
          "partial": "Id Type Where",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:IdTypeWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatement labeled by multiple labels with a source position attached  \n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "LStatement",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#LStatement",
          "type": "type"
        },
        "index": {
          "description": "Statement labeled by multiple labels with source position attached",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "LStatement",
          "package": "language-boogie",
          "partial": "LStatement",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:LStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of a type\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "NewType",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#NewType",
          "type": "data"
        },
        "index": {
          "description": "Definition of type",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "NewType",
          "package": "language-boogie",
          "partial": "New Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:NewType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParent edge of a constant declaration (uniqueness, parent name)\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "ParentEdge",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#ParentEdge",
          "type": "type"
        },
        "index": {
          "description": "Parent edge of constant declaration uniqueness parent name",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "ParentEdge",
          "package": "language-boogie",
          "partial": "Parent Edge",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:ParentEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParent information in a constant declaration\n (Nothing means no information, while empty list means no parents)\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "ParentInfo",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#ParentInfo",
          "type": "type"
        },
        "index": {
          "description": "Parent information in constant declaration Nothing means no information while empty list means no parents",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "ParentInfo",
          "package": "language-boogie",
          "partial": "Parent Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:ParentInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgram: a list of top-level declarations\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Program",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#Program",
          "type": "newtype"
        },
        "index": {
          "description": "Program list of top-level declarations",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Program",
          "package": "language-boogie",
          "partial": "Program",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifiers\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "QOp",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#QOp",
          "type": "data"
        },
        "index": {
          "description": "Quantifiers",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "QOp",
          "package": "language-boogie",
          "partial": "QOp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:QOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecification clause\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "SpecClause",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#SpecClause",
          "type": "data"
        },
        "index": {
          "description": "Specification clause",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "SpecClause",
          "package": "language-boogie",
          "partial": "Spec Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:SpecClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes of specification clauses\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "SpecType",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#SpecType",
          "type": "data"
        },
        "index": {
          "description": "Types of specification clauses",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "SpecType",
          "package": "language-boogie",
          "partial": "Spec Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:SpecType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatement with a source position attached  \n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Statement",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#Statement",
          "type": "type"
        },
        "index": {
          "description": "Statement with source position attached",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Statement",
          "package": "language-boogie",
          "partial": "Statement",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Type",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Type",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Type",
          "package": "language-boogie",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnary operators\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "UnOp",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#UnOp",
          "type": "data"
        },
        "index": {
          "description": "Unary operators",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "UnOp",
          "package": "language-boogie",
          "partial": "Un Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:UnOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWildcard or expression  \n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "WildcardExpression",
          "package": "language-boogie",
          "source": "src/Language-Boogie-AST.html#WildcardExpression",
          "type": "data"
        },
        "index": {
          "description": "Wildcard or expression",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "WildcardExpression",
          "package": "language-boogie",
          "partial": "Wildcard Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#t:WildcardExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "And",
          "package": "language-boogie",
          "signature": "And",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "And",
          "package": "language-boogie",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef args\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Application",
          "package": "language-boogie",
          "signature": "Application Id [Expression]",
          "source": "src/Language-Boogie-AST.html#BareExpression",
          "type": "function"
        },
        "index": {
          "description": "Application args",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Application",
          "normalized": "Application Id[Expression]",
          "package": "language-boogie",
          "partial": "Application",
          "signature": "Application Id[Expression]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAssign\u003c/a\u003e\u003c/code\u003e \u003ccode\u003evar_map_selects rhss\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Assign",
          "package": "language-boogie",
          "signature": "Assign [(Id, [[Expression]])] [Expression]",
          "source": "src/Language-Boogie-AST.html#BareStatement",
          "type": "function"
        },
        "index": {
          "description": "Assign var map selects rhss",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Assign",
          "normalized": "Assign[(Id,[[Expression]])][Expression]",
          "package": "language-boogie",
          "partial": "Assign",
          "signature": "Assign[(Id,[[Expression]])][Expression]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Axiom",
          "package": "language-boogie",
          "signature": "Axiom",
          "source": "src/Language-Boogie-AST.html#SpecType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Axiom",
          "package": "language-boogie",
          "partial": "Axiom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Axiom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "AxiomDecl",
          "package": "language-boogie",
          "signature": "AxiomDecl Expression",
          "source": "src/Language-Boogie-AST.html#BareDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "AxiomDecl",
          "package": "language-boogie",
          "partial": "Axiom Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:AxiomDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "BinaryExpression",
          "package": "language-boogie",
          "signature": "BinaryExpression BinOp Expression Expression",
          "source": "src/Language-Boogie-AST.html#BareExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "BinaryExpression",
          "package": "language-boogie",
          "partial": "Binary Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:BinaryExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebool \n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "BoolType",
          "package": "language-boogie",
          "signature": "BoolType",
          "source": "src/Language-Boogie-AST.html#Type",
          "type": "function"
        },
        "index": {
          "description": "bool",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "BoolType",
          "package": "language-boogie",
          "partial": "Bool Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:BoolType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003elabel\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Break",
          "package": "language-boogie",
          "signature": "Break (Maybe Id)",
          "source": "src/Language-Boogie-AST.html#BareStatement",
          "type": "function"
        },
        "index": {
          "description": "Break label",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Break",
          "package": "language-boogie",
          "partial": "Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCall\u003c/a\u003e\u003c/code\u003e \u003ccode\u003elhss proc_name args\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Call",
          "package": "language-boogie",
          "signature": "Call [Id] Id [Expression]",
          "source": "src/Language-Boogie-AST.html#BareStatement",
          "type": "function"
        },
        "index": {
          "description": "Call lhss proc name args",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Call",
          "normalized": "Call[Id]Id[Expression]",
          "package": "language-boogie",
          "partial": "Call",
          "signature": "Call[Id]Id[Expression]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCallForall\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eproc_name args\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "CallForall",
          "package": "language-boogie",
          "signature": "CallForall Id [WildcardExpression]",
          "source": "src/Language-Boogie-AST.html#BareStatement",
          "type": "function"
        },
        "index": {
          "description": "CallForall proc name args",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "CallForall",
          "normalized": "CallForall Id[WildcardExpression]",
          "package": "language-boogie",
          "partial": "Call Forall",
          "signature": "CallForall Id[WildcardExpression]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:CallForall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Coercion",
          "package": "language-boogie",
          "signature": "Coercion Expression Type",
          "source": "src/Language-Boogie-AST.html#BareExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Coercion",
          "package": "language-boogie",
          "partial": "Coercion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Coercion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eConstantDecl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eunique names type orderSpec complete\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "ConstantDecl",
          "package": "language-boogie",
          "signature": "ConstantDecl Bool [Id] Type ParentInfo Bool",
          "source": "src/Language-Boogie-AST.html#BareDecl",
          "type": "function"
        },
        "index": {
          "description": "ConstantDecl unique names type orderSpec complete",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "ConstantDecl",
          "normalized": "ConstantDecl Bool[Id]Type ParentInfo Bool",
          "package": "language-boogie",
          "partial": "Constant Decl",
          "signature": "ConstantDecl Bool[Id]Type ParentInfo Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:ConstantDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Div",
          "package": "language-boogie",
          "signature": "Div",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Div",
          "package": "language-boogie",
          "partial": "Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEnsures\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ee free\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Ensures",
          "package": "language-boogie",
          "signature": "Ensures Bool Expression",
          "source": "src/Language-Boogie-AST.html#Contract",
          "type": "function"
        },
        "index": {
          "description": "Ensures free",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Ensures",
          "package": "language-boogie",
          "partial": "Ensures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Ensures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Eq",
          "package": "language-boogie",
          "signature": "Eq",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Eq",
          "package": "language-boogie",
          "partial": "Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Equiv",
          "package": "language-boogie",
          "signature": "Equiv",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Equiv",
          "package": "language-boogie",
          "partial": "Equiv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Equiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Exists",
          "package": "language-boogie",
          "signature": "Exists",
          "source": "src/Language-Boogie-AST.html#QOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Exists",
          "package": "language-boogie",
          "partial": "Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Explies",
          "package": "language-boogie",
          "signature": "Explies",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Explies",
          "package": "language-boogie",
          "partial": "Explies",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Explies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Expr",
          "package": "language-boogie",
          "signature": "Expr Expression",
          "source": "src/Language-Boogie-AST.html#WildcardExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Expr",
          "package": "language-boogie",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efalse\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "FF",
          "package": "language-boogie",
          "signature": "FF",
          "source": "src/Language-Boogie-AST.html#BareExpression",
          "type": "function"
        },
        "index": {
          "description": "false",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "FF",
          "package": "language-boogie",
          "partial": "FF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:FF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Forall",
          "package": "language-boogie",
          "signature": "Forall",
          "source": "src/Language-Boogie-AST.html#QOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Forall",
          "package": "language-boogie",
          "partial": "Forall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Forall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFunctionDecl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ename type_args formals ret body\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "FunctionDecl",
          "package": "language-boogie",
          "signature": "FunctionDecl Id [Id] [FArg] FArg (Maybe Expression)",
          "source": "src/Language-Boogie-AST.html#BareDecl",
          "type": "function"
        },
        "index": {
          "description": "FunctionDecl name type args formals ret body",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "FunctionDecl",
          "normalized": "FunctionDecl Id[Id][FArg]FArg(Maybe Expression)",
          "package": "language-boogie",
          "partial": "Function Decl",
          "signature": "FunctionDecl Id[Id][FArg]FArg(Maybe Expression)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:FunctionDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Geq",
          "package": "language-boogie",
          "signature": "Geq",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Geq",
          "package": "language-boogie",
          "partial": "Geq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Geq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eGoto\u003c/a\u003e\u003c/code\u003e \u003ccode\u003elabels\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Goto",
          "package": "language-boogie",
          "signature": "Goto [Id]",
          "source": "src/Language-Boogie-AST.html#BareStatement",
          "type": "function"
        },
        "index": {
          "description": "Goto labels",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Goto",
          "normalized": "Goto[Id]",
          "package": "language-boogie",
          "partial": "Goto",
          "signature": "Goto[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Goto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Gt",
          "package": "language-boogie",
          "signature": "Gt",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Gt",
          "package": "language-boogie",
          "partial": "Gt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eHavoc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003evar_names\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Havoc",
          "package": "language-boogie",
          "signature": "Havoc [Id]",
          "source": "src/Language-Boogie-AST.html#BareStatement",
          "type": "function"
        },
        "index": {
          "description": "Havoc var names",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Havoc",
          "normalized": "Havoc[Id]",
          "package": "language-boogie",
          "partial": "Havoc",
          "signature": "Havoc[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Havoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "IdType",
          "package": "language-boogie",
          "signature": "IdType Id [Type]",
          "source": "src/Language-Boogie-AST.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "IdType",
          "normalized": "IdType Id[Type]",
          "package": "language-boogie",
          "partial": "Id Type",
          "signature": "IdType Id[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:IdType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "IdTypeWhere",
          "package": "language-boogie",
          "signature": "IdTypeWhere",
          "source": "src/Language-Boogie-AST.html#IdTypeWhere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "IdTypeWhere",
          "package": "language-boogie",
          "partial": "Id Type Where",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:IdTypeWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIf\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ewild_or_expr then_block else_block\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "If",
          "package": "language-boogie",
          "signature": "If WildcardExpression Block (Maybe Block)",
          "source": "src/Language-Boogie-AST.html#BareStatement",
          "type": "function"
        },
        "index": {
          "description": "If wild or expr then block else block",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "If",
          "package": "language-boogie",
          "partial": "If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIfExpr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003econd eThen eElse\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "IfExpr",
          "package": "language-boogie",
          "signature": "IfExpr Expression Expression Expression",
          "source": "src/Language-Boogie-AST.html#BareExpression",
          "type": "function"
        },
        "index": {
          "description": "IfExpr cond eThen eElse",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "IfExpr",
          "package": "language-boogie",
          "partial": "If Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:IfExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImplementationDecl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ename type_args formals rets body\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "ImplementationDecl",
          "package": "language-boogie",
          "signature": "ImplementationDecl Id [Id] [IdType] [IdType] [Body]",
          "source": "src/Language-Boogie-AST.html#BareDecl",
          "type": "function"
        },
        "index": {
          "description": "ImplementationDecl name type args formals rets body",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "ImplementationDecl",
          "normalized": "ImplementationDecl Id[Id][IdType][IdType][Body]",
          "package": "language-boogie",
          "partial": "Implementation Decl",
          "signature": "ImplementationDecl Id[Id][IdType][IdType][Body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:ImplementationDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Implies",
          "package": "language-boogie",
          "signature": "Implies",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Implies",
          "package": "language-boogie",
          "partial": "Implies",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Implies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Inline",
          "package": "language-boogie",
          "signature": "Inline",
          "source": "src/Language-Boogie-AST.html#SpecType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Inline",
          "package": "language-boogie",
          "partial": "Inline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Inline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eint\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "IntType",
          "package": "language-boogie",
          "signature": "IntType",
          "source": "src/Language-Boogie-AST.html#Type",
          "type": "function"
        },
        "index": {
          "description": "int",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "IntType",
          "package": "language-boogie",
          "partial": "Int Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:IntType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Lambda",
          "package": "language-boogie",
          "signature": "Lambda",
          "source": "src/Language-Boogie-AST.html#QOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Lambda",
          "package": "language-boogie",
          "partial": "Lambda",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Lambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Lc",
          "package": "language-boogie",
          "signature": "Lc",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Lc",
          "package": "language-boogie",
          "partial": "Lc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Lc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Leq",
          "package": "language-boogie",
          "signature": "Leq",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Leq",
          "package": "language-boogie",
          "partial": "Leq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Leq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "LoopInvariant",
          "package": "language-boogie",
          "signature": "LoopInvariant",
          "source": "src/Language-Boogie-AST.html#SpecType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "LoopInvariant",
          "package": "language-boogie",
          "partial": "Loop Invariant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:LoopInvariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Ls",
          "package": "language-boogie",
          "signature": "Ls",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Ls",
          "package": "language-boogie",
          "partial": "Ls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Ls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMapSelection\u003c/a\u003e\u003c/code\u003e \u003ccode\u003emap indexes\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "MapSelection",
          "package": "language-boogie",
          "signature": "MapSelection Expression [Expression]",
          "source": "src/Language-Boogie-AST.html#BareExpression",
          "type": "function"
        },
        "index": {
          "description": "MapSelection map indexes",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "MapSelection",
          "normalized": "MapSelection Expression[Expression]",
          "package": "language-boogie",
          "partial": "Map Selection",
          "signature": "MapSelection Expression[Expression]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:MapSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "MapType",
          "package": "language-boogie",
          "signature": "MapType [Id] [Type] Type",
          "source": "src/Language-Boogie-AST.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "MapType",
          "normalized": "MapType[Id][Type]Type",
          "package": "language-boogie",
          "partial": "Map Type",
          "signature": "MapType[Id][Type]Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:MapType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMapUpdate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003emap indexes rhs\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "MapUpdate",
          "package": "language-boogie",
          "signature": "MapUpdate Expression [Expression] Expression",
          "source": "src/Language-Boogie-AST.html#BareExpression",
          "type": "function"
        },
        "index": {
          "description": "MapUpdate map indexes rhs",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "MapUpdate",
          "normalized": "MapUpdate Expression[Expression]Expression",
          "package": "language-boogie",
          "partial": "Map Update",
          "signature": "MapUpdate Expression[Expression]Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:MapUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Minus",
          "package": "language-boogie",
          "signature": "Minus",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Minus",
          "package": "language-boogie",
          "partial": "Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Mod",
          "package": "language-boogie",
          "signature": "Mod",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Mod",
          "package": "language-boogie",
          "partial": "Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eModifies\u003c/a\u003e\u003c/code\u003e \u003ccode\u003evar_names free\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Modifies",
          "package": "language-boogie",
          "signature": "Modifies Bool [Id]",
          "source": "src/Language-Boogie-AST.html#Contract",
          "type": "function"
        },
        "index": {
          "description": "Modifies var names free",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Modifies",
          "normalized": "Modifies Bool[Id]",
          "package": "language-boogie",
          "partial": "Modifies",
          "signature": "Modifies Bool[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Modifies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Neg",
          "package": "language-boogie",
          "signature": "Neg",
          "source": "src/Language-Boogie-AST.html#UnOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Neg",
          "package": "language-boogie",
          "partial": "Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Neq",
          "package": "language-boogie",
          "signature": "Neq",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Neq",
          "package": "language-boogie",
          "partial": "Neq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Neq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "NewType",
          "package": "language-boogie",
          "signature": "NewType",
          "source": "src/Language-Boogie-AST.html#NewType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "NewType",
          "package": "language-boogie",
          "partial": "New Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:NewType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Not",
          "package": "language-boogie",
          "signature": "Not",
          "source": "src/Language-Boogie-AST.html#UnOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Not",
          "package": "language-boogie",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eNumeral\u003c/a\u003e\u003c/code\u003e \u003ccode\u003evalue\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Numeral",
          "package": "language-boogie",
          "signature": "Numeral Integer",
          "source": "src/Language-Boogie-AST.html#BareExpression",
          "type": "function"
        },
        "index": {
          "description": "Numeral value",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Numeral",
          "package": "language-boogie",
          "partial": "Numeral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Numeral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Old",
          "package": "language-boogie",
          "signature": "Old Expression",
          "source": "src/Language-Boogie-AST.html#BareExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Old",
          "package": "language-boogie",
          "partial": "Old",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Old"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Or",
          "package": "language-boogie",
          "signature": "Or",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Or",
          "package": "language-boogie",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Plus",
          "package": "language-boogie",
          "signature": "Plus",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Plus",
          "package": "language-boogie",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Postcondition",
          "package": "language-boogie",
          "signature": "Postcondition",
          "source": "src/Language-Boogie-AST.html#SpecType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Postcondition",
          "package": "language-boogie",
          "partial": "Postcondition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Postcondition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Precondition",
          "package": "language-boogie",
          "signature": "Precondition",
          "source": "src/Language-Boogie-AST.html#SpecType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Precondition",
          "package": "language-boogie",
          "partial": "Precondition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Precondition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate statement (assume or assert)\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Predicate",
          "package": "language-boogie",
          "signature": "Predicate SpecClause",
          "source": "src/Language-Boogie-AST.html#BareStatement",
          "type": "function"
        },
        "index": {
          "description": "Predicate statement assume or assert",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Predicate",
          "package": "language-boogie",
          "partial": "Predicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eProcedureDecl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ename type_args formals rets contract body\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "ProcedureDecl",
          "package": "language-boogie",
          "signature": "ProcedureDecl Id [Id] [IdTypeWhere] [IdTypeWhere] [Contract] (Maybe Body)",
          "source": "src/Language-Boogie-AST.html#BareDecl",
          "type": "function"
        },
        "index": {
          "description": "ProcedureDecl name type args formals rets contract body",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "ProcedureDecl",
          "normalized": "ProcedureDecl Id[Id][IdTypeWhere][IdTypeWhere][Contract](Maybe Body)",
          "package": "language-boogie",
          "partial": "Procedure Decl",
          "signature": "ProcedureDecl Id[Id][IdTypeWhere][IdTypeWhere][Contract](Maybe Body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:ProcedureDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Program",
          "package": "language-boogie",
          "signature": "Program [Decl]",
          "source": "src/Language-Boogie-AST.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Program",
          "normalized": "Program[Decl]",
          "package": "language-boogie",
          "partial": "Program",
          "signature": "Program[Decl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eQuantified\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eqop type_vars bound_vars expr\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Quantified",
          "package": "language-boogie",
          "signature": "Quantified QOp [Id] [IdType] Expression",
          "source": "src/Language-Boogie-AST.html#BareExpression",
          "type": "function"
        },
        "index": {
          "description": "Quantified qop type vars bound vars expr",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Quantified",
          "normalized": "Quantified QOp[Id][IdType]Expression",
          "package": "language-boogie",
          "partial": "Quantified",
          "signature": "Quantified QOp[Id][IdType]Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Quantified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRequires\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ee free\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Requires",
          "package": "language-boogie",
          "signature": "Requires Bool Expression",
          "source": "src/Language-Boogie-AST.html#Contract",
          "type": "function"
        },
        "index": {
          "description": "Requires free",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Requires",
          "package": "language-boogie",
          "partial": "Requires",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Requires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Return",
          "package": "language-boogie",
          "signature": "Return",
          "source": "src/Language-Boogie-AST.html#BareStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Return",
          "package": "language-boogie",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eonly used at the end of a block\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Skip",
          "package": "language-boogie",
          "signature": "Skip",
          "source": "src/Language-Boogie-AST.html#BareStatement",
          "type": "function"
        },
        "index": {
          "description": "only used at the end of block",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Skip",
          "package": "language-boogie",
          "partial": "Skip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "SpecClause",
          "package": "language-boogie",
          "signature": "SpecClause",
          "source": "src/Language-Boogie-AST.html#SpecClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "SpecClause",
          "package": "language-boogie",
          "partial": "Spec Clause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:SpecClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etrue\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "TT",
          "package": "language-boogie",
          "signature": "TT",
          "source": "src/Language-Boogie-AST.html#BareExpression",
          "type": "function"
        },
        "index": {
          "description": "true",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "TT",
          "package": "language-boogie",
          "partial": "TT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:TT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Times",
          "package": "language-boogie",
          "signature": "Times",
          "source": "src/Language-Boogie-AST.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Times",
          "package": "language-boogie",
          "partial": "Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "TypeDecl",
          "package": "language-boogie",
          "signature": "TypeDecl [NewType]",
          "source": "src/Language-Boogie-AST.html#BareDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "TypeDecl",
          "normalized": "TypeDecl[NewType]",
          "package": "language-boogie",
          "partial": "Type Decl",
          "signature": "TypeDecl[NewType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:TypeDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "UnaryExpression",
          "package": "language-boogie",
          "signature": "UnaryExpression UnOp Expression",
          "source": "src/Language-Boogie-AST.html#BareExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "UnaryExpression",
          "package": "language-boogie",
          "partial": "Unary Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:UnaryExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ename\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "Var",
          "package": "language-boogie",
          "signature": "Var Id",
          "source": "src/Language-Boogie-AST.html#BareExpression",
          "type": "function"
        },
        "index": {
          "description": "Var name",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Var",
          "package": "language-boogie",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "VarDecl",
          "package": "language-boogie",
          "signature": "VarDecl [IdTypeWhere]",
          "source": "src/Language-Boogie-AST.html#BareDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "VarDecl",
          "normalized": "VarDecl[IdTypeWhere]",
          "package": "language-boogie",
          "partial": "Var Decl",
          "signature": "VarDecl[IdTypeWhere]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:VarDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Where",
          "package": "language-boogie",
          "signature": "Where",
          "source": "src/Language-Boogie-AST.html#SpecType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Where",
          "package": "language-boogie",
          "partial": "Where",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Where"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ewild_or_expr free_loop_inv loop_body\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "While",
          "package": "language-boogie",
          "signature": "While WildcardExpression [SpecClause] Block",
          "source": "src/Language-Boogie-AST.html#BareStatement",
          "type": "function"
        },
        "index": {
          "description": "While wild or expr free loop inv loop body",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "While",
          "normalized": "While WildcardExpression[SpecClause]Block",
          "package": "language-boogie",
          "partial": "While",
          "signature": "While WildcardExpression[SpecClause]Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:While"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "Wildcard",
          "package": "language-boogie",
          "signature": "Wildcard",
          "source": "src/Language-Boogie-AST.html#WildcardExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "Wildcard",
          "package": "language-boogie",
          "partial": "Wildcard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:Wildcard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArgument name used for unnamed function arguments\n (does not matter, because it is never referred to from function's body)  \n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "dummyFArg",
          "package": "language-boogie",
          "signature": "[Char]",
          "source": "src/Language-Boogie-AST.html#dummyFArg",
          "type": "function"
        },
        "index": {
          "description": "Argument name used for unnamed function arguments does not matter because it is never referred to from function body",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "dummyFArg",
          "normalized": "[Char]",
          "package": "language-boogie",
          "partial": "FArg",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:dummyFArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "itwId",
          "package": "language-boogie",
          "signature": "Id",
          "source": "src/Language-Boogie-AST.html#IdTypeWhere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "itwId",
          "package": "language-boogie",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:itwId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "itwType",
          "package": "language-boogie",
          "signature": "Type",
          "source": "src/Language-Boogie-AST.html#IdTypeWhere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "itwType",
          "package": "language-boogie",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:itwType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "itwWhere",
          "package": "language-boogie",
          "signature": "Expression",
          "source": "src/Language-Boogie-AST.html#IdTypeWhere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "itwWhere",
          "package": "language-boogie",
          "partial": "Where",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:itwWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emapSelectExpr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em args\u003c/code\u003e : map selection expression with position of \u003ccode\u003em\u003c/code\u003e attached\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "mapSelectExpr",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e [Expression] -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-AST.html#mapSelectExpr",
          "type": "function"
        },
        "index": {
          "description": "mapSelectExpr args map selection expression with position of attached",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "mapSelectExpr",
          "normalized": "Pos BareExpression-\u003e[Expression]-\u003ePos BareExpression",
          "package": "language-boogie",
          "partial": "Select Expr",
          "signature": "Pos BareExpression-\u003e[Expression]-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:mapSelectExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDummy type used during type checking to denote error\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "noType",
          "package": "language-boogie",
          "signature": "Type",
          "source": "src/Language-Boogie-AST.html#noType",
          "type": "function"
        },
        "index": {
          "description": "Dummy type used during type checking to denote error",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "noType",
          "package": "language-boogie",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:noType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrip the where clause  \n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "noWhere",
          "package": "language-boogie",
          "signature": "IdTypeWhere -\u003e (Id, Type)",
          "source": "src/Language-Boogie-AST.html#noWhere",
          "type": "function"
        },
        "index": {
          "description": "Strip the where clause",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "noWhere",
          "normalized": "IdTypeWhere-\u003e(Id,Type)",
          "package": "language-boogie",
          "partial": "Where",
          "signature": "IdTypeWhere-\u003e(Id,Type)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:noWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enullaryType\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eid\u003c/code\u003e : type denoted by \u003ccode\u003eid\u003c/code\u003e without arguments\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "nullaryType",
          "package": "language-boogie",
          "signature": "Id -\u003e Type",
          "source": "src/Language-Boogie-AST.html#nullaryType",
          "type": "function"
        },
        "index": {
          "description": "nullaryType id type denoted by id without arguments",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "nullaryType",
          "normalized": "Id-\u003eType",
          "package": "language-boogie",
          "partial": "Type",
          "signature": "Id-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:nullaryType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock consisting of a single non-labeled statement\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "singletonBlock",
          "package": "language-boogie",
          "signature": "Pos a -\u003e [Pos ([a1], Pos a)]",
          "source": "src/Language-Boogie-AST.html#singletonBlock",
          "type": "function"
        },
        "index": {
          "description": "Block consisting of single non-labeled statement",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "singletonBlock",
          "normalized": "Pos a-\u003e[Pos([a],Pos a)]",
          "package": "language-boogie",
          "partial": "Block",
          "signature": "Pos a-\u003e[Pos([a],Pos a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:singletonBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean expression\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "specExpr",
          "package": "language-boogie",
          "signature": "Expression",
          "source": "src/Language-Boogie-AST.html#SpecClause",
          "type": "function"
        },
        "index": {
          "description": "Boolean expression",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "specExpr",
          "package": "language-boogie",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:specExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs it free (assumption) or checked (assertions)?\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "specFree",
          "package": "language-boogie",
          "signature": "Bool",
          "source": "src/Language-Boogie-AST.html#SpecClause",
          "type": "function"
        },
        "index": {
          "description": "Is it free assumption or checked assertions",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "specFree",
          "package": "language-boogie",
          "partial": "Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:specFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource of the clause\n\u003c/p\u003e",
          "module": "Language.Boogie.AST",
          "name": "specType",
          "package": "language-boogie",
          "signature": "SpecType",
          "source": "src/Language-Boogie-AST.html#SpecClause",
          "type": "function"
        },
        "index": {
          "description": "Source of the clause",
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "specType",
          "package": "language-boogie",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:specType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "tArgs",
          "package": "language-boogie",
          "signature": "[Id]",
          "source": "src/Language-Boogie-AST.html#NewType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "tArgs",
          "normalized": "[Id]",
          "package": "language-boogie",
          "partial": "Args",
          "signature": "[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:tArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "tId",
          "package": "language-boogie",
          "signature": "Id",
          "source": "src/Language-Boogie-AST.html#NewType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "tId",
          "package": "language-boogie",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:tId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.AST",
          "name": "tValue",
          "package": "language-boogie",
          "signature": "Maybe Type",
          "source": "src/Language-Boogie-AST.html#NewType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie AST",
          "module": "Language.Boogie.AST",
          "name": "tValue",
          "package": "language-boogie",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-AST.html#v:tValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic block transformation for imperative Boogie code\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.BasicBlocks",
          "name": "BasicBlocks",
          "package": "language-boogie",
          "source": "src/Language-Boogie-BasicBlocks.html",
          "type": "module"
        },
        "index": {
          "description": "Basic block transformation for imperative Boogie code",
          "hierarchy": "Language Boogie BasicBlocks",
          "module": "Language.Boogie.BasicBlocks",
          "name": "BasicBlocks",
          "package": "language-boogie",
          "partial": "Basic Blocks",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-BasicBlocks.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel of the first block in a procedure\n\u003c/p\u003e",
          "module": "Language.Boogie.BasicBlocks",
          "name": "startLabel",
          "package": "language-boogie",
          "signature": "[Char]",
          "source": "src/Language-Boogie-BasicBlocks.html#startLabel",
          "type": "function"
        },
        "index": {
          "description": "Label of the first block in procedure",
          "hierarchy": "Language Boogie BasicBlocks",
          "module": "Language.Boogie.BasicBlocks",
          "name": "startLabel",
          "normalized": "[Char]",
          "package": "language-boogie",
          "partial": "Label",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-BasicBlocks.html#v:startLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform procedure body into a sequence of basic blocks.\n A basic block starts with a label and contains no jump, if or while statements,\n except for the last statement, which can be a goto or return.\n\u003c/p\u003e",
          "module": "Language.Boogie.BasicBlocks",
          "name": "toBasicBlocks",
          "package": "language-boogie",
          "signature": "Block -\u003e [BasicBlock]",
          "source": "src/Language-Boogie-BasicBlocks.html#toBasicBlocks",
          "type": "function"
        },
        "index": {
          "description": "Transform procedure body into sequence of basic blocks basic block starts with label and contains no jump if or while statements except for the last statement which can be goto or return",
          "hierarchy": "Language Boogie BasicBlocks",
          "module": "Language.Boogie.BasicBlocks",
          "name": "toBasicBlocks",
          "normalized": "Block-\u003e[BasicBlock]",
          "package": "language-boogie",
          "partial": "Basic Blocks",
          "signature": "Block-\u003e[BasicBlock]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-BasicBlocks.html#v:toBasicBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExecution state for the interpreter\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.Environment",
          "name": "Environment",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Environment.html",
          "type": "module"
        },
        "index": {
          "description": "Execution state for the interpreter",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "Environment",
          "package": "language-boogie",
          "partial": "Environment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract memory: stores constraints associated with names and references\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "AbstractMemory",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Environment.html#AbstractMemory",
          "type": "data"
        },
        "index": {
          "description": "Abstract memory stores constraints associated with names and references",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "AbstractMemory",
          "package": "language-boogie",
          "partial": "Abstract Memory",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#t:AbstractMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecution state\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "Environment",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Environment.html#Environment",
          "type": "data"
        },
        "index": {
          "description": "Execution state",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "Environment",
          "package": "language-boogie",
          "partial": "Environment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#t:Environment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of a map value\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "MapRepr",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Environment.html#MapRepr",
          "type": "data"
        },
        "index": {
          "description": "Representation of map value",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "MapRepr",
          "package": "language-boogie",
          "partial": "Map Repr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#t:MapRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemory: stores concrete values associated with names and references\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "Memory",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Environment.html#Memory",
          "type": "data"
        },
        "index": {
          "description": "Memory stores concrete values associated with names and references",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "Memory",
          "package": "language-boogie",
          "partial": "Memory",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#t:Memory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore: stores variable values at runtime \n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "Store",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Environment.html#Store",
          "type": "type"
        },
        "index": {
          "description": "Store stores variable values at runtime",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "Store",
          "package": "language-boogie",
          "partial": "Store",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#t:Store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens that selects a store from memory\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "StoreLens",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Environment.html#StoreLens",
          "type": "type"
        },
        "index": {
          "description": "Lens that selects store from memory",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "StoreLens",
          "package": "language-boogie",
          "partial": "Store Lens",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#t:StoreLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun-time value\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "Value",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Environment.html#Value",
          "type": "data"
        },
        "index": {
          "description": "Run-time value",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "Value",
          "package": "language-boogie",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean value\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "BoolValue",
          "package": "language-boogie",
          "signature": "BoolValue Bool",
          "source": "src/Language-Boogie-Environment.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Boolean value",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "BoolValue",
          "package": "language-boogie",
          "partial": "Bool Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:BoolValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue of a user-defined type\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "CustomValue",
          "package": "language-boogie",
          "signature": "CustomValue Id Int",
          "source": "src/Language-Boogie-Environment.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Value of user-defined type",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "CustomValue",
          "package": "language-boogie",
          "partial": "Custom Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:CustomValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap that is derived from another map by redefining values at some keys\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "Derived",
          "package": "language-boogie",
          "signature": "Derived Ref (Map [Value] Value)",
          "source": "src/Language-Boogie-Environment.html#MapRepr",
          "type": "function"
        },
        "index": {
          "description": "Map that is derived from another map by redefining values at some keys",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "Derived",
          "normalized": "Derived Ref(Map[Value]Value)",
          "package": "language-boogie",
          "partial": "Derived",
          "signature": "Derived Ref(Map[Value]Value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:Derived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger value\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "IntValue",
          "package": "language-boogie",
          "signature": "IntValue Integer",
          "source": "src/Language-Boogie-Environment.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Integer value",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "IntValue",
          "package": "language-boogie",
          "partial": "Int Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:IntValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue of a map type: consists of an optional reference to the base map (if derived from base by updating) and key-value pairs that override base\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "MapValue",
          "package": "language-boogie",
          "signature": "MapValue MapRepr",
          "source": "src/Language-Boogie-Environment.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Value of map type consists of an optional reference to the base map if derived from base by updating and key-value pairs that override base",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "MapValue",
          "package": "language-boogie",
          "partial": "Map Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:MapValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference to a map stored in the heap\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "Reference",
          "package": "language-boogie",
          "signature": "Reference Ref",
          "source": "src/Language-Boogie-Environment.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Reference to map stored in the heap",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "Reference",
          "package": "language-boogie",
          "partial": "Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:Reference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap that comes directly from a non-deterministic choice, possibly with some key-value pairs defined\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "Source",
          "package": "language-boogie",
          "signature": "Source (Map [Value] Value)",
          "source": "src/Language-Boogie-Environment.html#MapRepr",
          "type": "function"
        },
        "index": {
          "description": "Map that comes directly from non-deterministic choice possibly with some key-value pairs defined",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "Source",
          "normalized": "Source(Map[Value]Value)",
          "package": "language-boogie",
          "partial": "Source",
          "signature": "Source(Map[Value]Value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "addGlobalDefinition",
          "package": "language-boogie",
          "signature": "Id -\u003e FDef -\u003e Environment m -\u003e Environment m",
          "source": "src/Language-Boogie-Environment.html#addGlobalDefinition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "addGlobalDefinition",
          "normalized": "Id-\u003eFDef-\u003eEnvironment a-\u003eEnvironment a",
          "package": "language-boogie",
          "partial": "Global Definition",
          "signature": "Id-\u003eFDef-\u003eEnvironment m-\u003eEnvironment m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:addGlobalDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "addMapConstraint",
          "package": "language-boogie",
          "signature": "Ref -\u003e FDef -\u003e Environment m -\u003e Environment m",
          "source": "src/Language-Boogie-Environment.html#addMapConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "addMapConstraint",
          "normalized": "Ref-\u003eFDef-\u003eEnvironment a-\u003eEnvironment a",
          "package": "language-boogie",
          "partial": "Map Constraint",
          "signature": "Ref-\u003eFDef-\u003eEnvironment m-\u003eEnvironment m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:addMapConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "addMapDefinition",
          "package": "language-boogie",
          "signature": "Ref -\u003e FDef -\u003e Environment m -\u003e Environment m",
          "source": "src/Language-Boogie-Environment.html#addMapDefinition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "addMapDefinition",
          "normalized": "Ref-\u003eFDef-\u003eEnvironment a-\u003eEnvironment a",
          "package": "language-boogie",
          "partial": "Map Definition",
          "signature": "Ref-\u003eFDef-\u003eEnvironment m-\u003eEnvironment m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:addMapDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "addProcedureImpl",
          "package": "language-boogie",
          "signature": "Id -\u003e PDef -\u003e Environment m -\u003e Environment m",
          "source": "src/Language-Boogie-Environment.html#addProcedureImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "addProcedureImpl",
          "normalized": "Id-\u003ePDef-\u003eEnvironment a-\u003eEnvironment a",
          "package": "language-boogie",
          "partial": "Procedure Impl",
          "signature": "Id-\u003ePDef-\u003eEnvironment m-\u003eEnvironment m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:addProcedureImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "amGlobals",
          "package": "language-boogie",
          "signature": "Lens AbstractMemory AbstractMemory AbstractStore AbstractStore",
          "source": "src/Language-Boogie-Environment.html#amGlobals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "amGlobals",
          "package": "language-boogie",
          "partial": "Globals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:amGlobals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "amHeap",
          "package": "language-boogie",
          "signature": "Lens AbstractMemory AbstractMemory (Map Ref ConstraintSet) (Map Ref ConstraintSet)",
          "source": "src/Language-Boogie-Environment.html#amHeap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "amHeap",
          "package": "language-boogie",
          "partial": "Heap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:amHeap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "amLocals",
          "package": "language-boogie",
          "signature": "Lens AbstractMemory AbstractMemory AbstractStore AbstractStore",
          "source": "src/Language-Boogie-Environment.html#amLocals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "amLocals",
          "package": "language-boogie",
          "partial": "Locals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:amLocals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edeepDeref\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eh v\u003c/code\u003e: Completely dereference value \u003ccode\u003ev\u003c/code\u003e given heap \u003ccode\u003eh\u003c/code\u003e (so that no references are left in \u003ccode\u003ev\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "deepDeref",
          "package": "language-boogie",
          "signature": "Heap Value -\u003e Value -\u003e Value",
          "source": "src/Language-Boogie-Environment.html#deepDeref",
          "type": "function"
        },
        "index": {
          "description": "deepDeref Completely dereference value given heap so that no references are left in",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "deepDeref",
          "normalized": "Heap Value-\u003eValue-\u003eValue",
          "package": "language-boogie",
          "partial": "Deref",
          "signature": "Heap Value-\u003eValue-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:deepDeref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of an empty map  \n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "emptyMap",
          "package": "language-boogie",
          "signature": "MapRepr",
          "source": "src/Language-Boogie-Environment.html#emptyMap",
          "type": "function"
        },
        "index": {
          "description": "Representation of an empty map",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "emptyMap",
          "package": "language-boogie",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:emptyMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty memory\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "emptyMemory",
          "package": "language-boogie",
          "signature": "Memory",
          "source": "src/Language-Boogie-Environment.html#emptyMemory",
          "type": "function"
        },
        "index": {
          "description": "Empty memory",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "emptyMemory",
          "package": "language-boogie",
          "partial": "Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:emptyMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA store with no variables\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "emptyStore",
          "package": "language-boogie",
          "signature": "Store",
          "source": "src/Language-Boogie-Environment.html#emptyStore",
          "type": "function"
        },
        "index": {
          "description": "store with no variables",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "emptyStore",
          "package": "language-boogie",
          "partial": "Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:emptyStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "envConstraints",
          "package": "language-boogie",
          "signature": "forall m.  Lens (Environment m) (Environment m) AbstractMemory AbstractMemory",
          "source": "src/Language-Boogie-Environment.html#envConstraints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "envConstraints",
          "package": "language-boogie",
          "partial": "Constraints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:envConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "envCustomCount",
          "package": "language-boogie",
          "signature": "forall m.  Lens (Environment m) (Environment m) (Map Id Int) (Map Id Int)",
          "source": "src/Language-Boogie-Environment.html#envCustomCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "envCustomCount",
          "package": "language-boogie",
          "partial": "Custom Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:envCustomCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "envGenerator",
          "package": "language-boogie",
          "signature": "forall m m.  Lens (Environment m) (Environment m) (Generator m) (Generator m)",
          "source": "src/Language-Boogie-Environment.html#envGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "envGenerator",
          "package": "language-boogie",
          "partial": "Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:envGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "envInOld",
          "package": "language-boogie",
          "signature": "forall m.  Lens (Environment m) (Environment m) Bool Bool",
          "source": "src/Language-Boogie-Environment.html#envInOld",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "envInOld",
          "package": "language-boogie",
          "partial": "In Old",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:envInOld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "envMemory",
          "package": "language-boogie",
          "signature": "forall m.  Lens (Environment m) (Environment m) Memory Memory",
          "source": "src/Language-Boogie-Environment.html#envMemory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "envMemory",
          "package": "language-boogie",
          "partial": "Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:envMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "envProcedures",
          "package": "language-boogie",
          "signature": "forall m.  Lens (Environment m) (Environment m) (Map Id [PDef]) (Map Id [PDef])",
          "source": "src/Language-Boogie-Environment.html#envProcedures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "envProcedures",
          "normalized": "a b Lens(Environment c)(Environment c)(Map Id[PDef])(Map Id[PDef])",
          "package": "language-boogie",
          "partial": "Procedures",
          "signature": "forall m. Lens(Environment m)(Environment m)(Map Id[PDef])(Map Id[PDef])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:envProcedures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "envQBound",
          "package": "language-boogie",
          "signature": "forall m.  Lens (Environment m) (Environment m) (Maybe Integer) (Maybe Integer)",
          "source": "src/Language-Boogie-Environment.html#envQBound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "envQBound",
          "package": "language-boogie",
          "partial": "QBound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:envQBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "envTypeContext",
          "package": "language-boogie",
          "signature": "forall m.  Lens (Environment m) (Environment m) Context Context",
          "source": "src/Language-Boogie-Environment.html#envTypeContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "envTypeContext",
          "package": "language-boogie",
          "partial": "Type Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:envTypeContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource reference and key-value pairs of a reference in a heap\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "flattenMap",
          "package": "language-boogie",
          "signature": "Heap Value -\u003e Ref -\u003e (Ref, Map [Value] Value)",
          "source": "src/Language-Boogie-Environment.html#flattenMap",
          "type": "function"
        },
        "index": {
          "description": "Source reference and key-value pairs of reference in heap",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "flattenMap",
          "normalized": "Heap Value-\u003eRef-\u003e(Ref,Map[Value]Value)",
          "package": "language-boogie",
          "partial": "Map",
          "signature": "Heap Value-\u003eRef-\u003e(Ref,Map[Value]Value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:flattenMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efunctionConst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ename\u003c/code\u003e : name of a map constant that corresponds function \u003ccode\u003ename\u003c/code\u003e\n (must be distinct from all global names)\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "functionConst",
          "package": "language-boogie",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Language-Boogie-Environment.html#functionConst",
          "type": "function"
        },
        "index": {
          "description": "functionConst name name of map constant that corresponds function name must be distinct from all global names",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "functionConst",
          "normalized": "[Char]-\u003e[Char]",
          "package": "language-boogie",
          "partial": "Const",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:functionConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einitEnv\u003c/a\u003e\u003c/code\u003e \u003ccode\u003etc gen\u003c/code\u003e: Initial environment in a type context \u003ccode\u003etc\u003c/code\u003e with a value generator \u003ccode\u003egen\u003c/code\u003e  \n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "initEnv",
          "package": "language-boogie",
          "signature": "Context -\u003e Generator m -\u003e Maybe Integer -\u003e Environment m",
          "source": "src/Language-Boogie-Environment.html#initEnv",
          "type": "function"
        },
        "index": {
          "description": "initEnv tc gen Initial environment in type context tc with value generator gen",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "initEnv",
          "normalized": "Context-\u003eGenerator a-\u003eMaybe Integer-\u003eEnvironment a",
          "package": "language-boogie",
          "partial": "Env",
          "signature": "Context-\u003eGenerator m-\u003eMaybe Integer-\u003eEnvironment m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:initEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "lookupCustomCount",
          "package": "language-boogie",
          "signature": "Id -\u003e Environment m -\u003e Int",
          "source": "src/Language-Boogie-Environment.html#lookupCustomCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "lookupCustomCount",
          "normalized": "Id-\u003eEnvironment a-\u003eInt",
          "package": "language-boogie",
          "partial": "Custom Count",
          "signature": "Id-\u003eEnvironment m-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:lookupCustomCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "lookupMapConstraints",
          "package": "language-boogie",
          "signature": "Ref -\u003e Environment m -\u003e ConstraintSet",
          "source": "src/Language-Boogie-Environment.html#lookupMapConstraints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "lookupMapConstraints",
          "normalized": "Ref-\u003eEnvironment a-\u003eConstraintSet",
          "package": "language-boogie",
          "partial": "Map Constraints",
          "signature": "Ref-\u003eEnvironment m-\u003eConstraintSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:lookupMapConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "lookupNameConstraints",
          "package": "language-boogie",
          "signature": "Id -\u003e Environment m -\u003e ConstraintSet",
          "source": "src/Language-Boogie-Environment.html#lookupNameConstraints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "lookupNameConstraints",
          "normalized": "Id-\u003eEnvironment a-\u003eConstraintSet",
          "package": "language-boogie",
          "partial": "Name Constraints",
          "signature": "Id-\u003eEnvironment m-\u003eConstraintSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:lookupNameConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "lookupProcedure",
          "package": "language-boogie",
          "signature": "Id -\u003e Environment m -\u003e [PDef]",
          "source": "src/Language-Boogie-Environment.html#lookupProcedure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "lookupProcedure",
          "normalized": "Id-\u003eEnvironment a-\u003e[PDef]",
          "package": "language-boogie",
          "partial": "Procedure",
          "signature": "Id-\u003eEnvironment m-\u003e[PDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:lookupProcedure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst component of \u003ccode\u003e\u003ca\u003eflattenMap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "mapSource",
          "package": "language-boogie",
          "signature": "Heap Value -\u003e Ref -\u003e Ref",
          "source": "src/Language-Boogie-Environment.html#mapSource",
          "type": "function"
        },
        "index": {
          "description": "First component of flattenMap",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "mapSource",
          "normalized": "Heap Value-\u003eRef-\u003eRef",
          "package": "language-boogie",
          "partial": "Source",
          "signature": "Heap Value-\u003eRef-\u003eRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:mapSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecond component of \u003ccode\u003e\u003ca\u003eflattenMap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "mapValues",
          "package": "language-boogie",
          "signature": "Heap Value -\u003e Ref -\u003e Map [Value] Value",
          "source": "src/Language-Boogie-Environment.html#mapValues",
          "type": "function"
        },
        "index": {
          "description": "Second component of flattenMap",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "mapValues",
          "normalized": "Heap Value-\u003eRef-\u003eMap[Value]Value",
          "package": "language-boogie",
          "partial": "Values",
          "signature": "Heap Value-\u003eRef-\u003eMap[Value]Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:mapValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "memConstants",
          "package": "language-boogie",
          "signature": "Lens Memory Memory Store Store",
          "source": "src/Language-Boogie-Environment.html#memConstants",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "memConstants",
          "package": "language-boogie",
          "partial": "Constants",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:memConstants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "memGlobals",
          "package": "language-boogie",
          "signature": "Lens Memory Memory Store Store",
          "source": "src/Language-Boogie-Environment.html#memGlobals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "memGlobals",
          "package": "language-boogie",
          "partial": "Globals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:memGlobals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "memHeap",
          "package": "language-boogie",
          "signature": "Lens Memory Memory (Heap Value) (Heap Value)",
          "source": "src/Language-Boogie-Environment.html#memHeap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "memHeap",
          "package": "language-boogie",
          "partial": "Heap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:memHeap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "memLocals",
          "package": "language-boogie",
          "signature": "Lens Memory Memory Store Store",
          "source": "src/Language-Boogie-Environment.html#memLocals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "memLocals",
          "package": "language-boogie",
          "partial": "Locals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:memLocals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "memOld",
          "package": "language-boogie",
          "signature": "Lens Memory Memory Store Store",
          "source": "src/Language-Boogie-Environment.html#memOld",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "memOld",
          "package": "language-boogie",
          "partial": "Old",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:memOld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ememoryDoc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003edebug mem\u003c/code\u003e : either user or debug representation of \u003ccode\u003emem\u003c/code\u003e, depending on \u003ccode\u003edebug\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "memoryDoc",
          "package": "language-boogie",
          "signature": "Bool -\u003e Memory -\u003e Doc",
          "source": "src/Language-Boogie-Environment.html#memoryDoc",
          "type": "function"
        },
        "index": {
          "description": "memoryDoc debug mem either user or debug representation of mem depending on debug",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "memoryDoc",
          "normalized": "Bool-\u003eMemory-\u003eDoc",
          "package": "language-boogie",
          "partial": "Doc",
          "signature": "Bool-\u003eMemory-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:memoryDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "mustAgree",
          "package": "language-boogie",
          "signature": "Heap Value -\u003e Map k Value -\u003e Map k Value -\u003e Bool",
          "source": "src/Language-Boogie-Environment.html#mustAgree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "mustAgree",
          "normalized": "Heap Value-\u003eMap a Value-\u003eMap a Value-\u003eBool",
          "package": "language-boogie",
          "partial": "Agree",
          "signature": "Heap Value-\u003eMap k Value-\u003eMap k Value-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:mustAgree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "mustDisagree",
          "package": "language-boogie",
          "signature": "Heap Value -\u003e Map k Value -\u003e Map k Value -\u003e Bool",
          "source": "src/Language-Boogie-Environment.html#mustDisagree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "mustDisagree",
          "normalized": "Heap Value-\u003eMap a Value-\u003eMap a Value-\u003eBool",
          "package": "language-boogie",
          "partial": "Disagree",
          "signature": "Heap Value-\u003eMap k Value-\u003eMap k Value-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:mustDisagree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eobjectEq\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eh v1 v2\u003c/code\u003e: is \u003ccode\u003ev1\u003c/code\u003e equal to \u003ccode\u003ev2\u003c/code\u003e in the Boogie semantics? Nothing if cannot be determined.\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "objectEq",
          "package": "language-boogie",
          "signature": "Heap Value -\u003e Value -\u003e Value -\u003e Maybe Bool",
          "source": "src/Language-Boogie-Environment.html#objectEq",
          "type": "function"
        },
        "index": {
          "description": "objectEq v1 v2 is v1 equal to v2 in the Boogie semantics Nothing if cannot be determined",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "objectEq",
          "normalized": "Heap Value-\u003eValue-\u003eValue-\u003eMaybe Bool",
          "package": "language-boogie",
          "partial": "Eq",
          "signature": "Heap Value-\u003eValue-\u003eValue-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:objectEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDummy user-defined type used to differentiate map values\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "refIdTypeName",
          "package": "language-boogie",
          "signature": "[Char]",
          "source": "src/Language-Boogie-Environment.html#refIdTypeName",
          "type": "function"
        },
        "index": {
          "description": "Dummy user-defined type used to differentiate map values",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "refIdTypeName",
          "normalized": "[Char]",
          "package": "language-boogie",
          "partial": "Id Type Name",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:refIdTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "setCustomCount",
          "package": "language-boogie",
          "signature": "Id -\u003e Int -\u003e Environment m -\u003e Environment m",
          "source": "src/Language-Boogie-Environment.html#setCustomCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "setCustomCount",
          "normalized": "Id-\u003eInt-\u003eEnvironment a-\u003eEnvironment a",
          "package": "language-boogie",
          "partial": "Custom Count",
          "signature": "Id-\u003eInt-\u003eEnvironment m-\u003eEnvironment m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:setCustomCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed store\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "storeDoc",
          "package": "language-boogie",
          "signature": "Store -\u003e Doc",
          "source": "src/Language-Boogie-Environment.html#storeDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed store",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "storeDoc",
          "normalized": "Store-\u003eDoc",
          "package": "language-boogie",
          "partial": "Doc",
          "signature": "Store-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:storeDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey-value pairs stored explicitly in a map representation\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "stored",
          "package": "language-boogie",
          "signature": "MapRepr -\u003e Map [Value] Value",
          "source": "src/Language-Boogie-Environment.html#stored",
          "type": "function"
        },
        "index": {
          "description": "Key-value pairs stored explicitly in map representation",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "stored",
          "normalized": "MapRepr-\u003eMap[Value]Value",
          "package": "language-boogie",
          "signature": "MapRepr-\u003eMap[Value]Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:stored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDummy user-defined type used to mark entities whose definitions are currently being evaluated\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "ucTypeName",
          "package": "language-boogie",
          "signature": "[Char]",
          "source": "src/Language-Boogie-Environment.html#ucTypeName",
          "type": "function"
        },
        "index": {
          "description": "Dummy user-defined type used to mark entities whose definitions are currently being evaluated",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "ucTypeName",
          "normalized": "[Char]",
          "package": "language-boogie",
          "partial": "Type Name",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:ucTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "unValueBool",
          "package": "language-boogie",
          "signature": "Value -\u003e Bool",
          "source": "src/Language-Boogie-Environment.html#unValueBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "unValueBool",
          "normalized": "Value-\u003eBool",
          "package": "language-boogie",
          "partial": "Value Bool",
          "signature": "Value-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:unValueBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "unValueMap",
          "package": "language-boogie",
          "signature": "Value -\u003e MapRepr",
          "source": "src/Language-Boogie-Environment.html#unValueMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "unValueMap",
          "normalized": "Value-\u003eMapRepr",
          "package": "language-boogie",
          "partial": "Value Map",
          "signature": "Value-\u003eMapRepr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:unValueMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euserStore\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eheap store\u003c/code\u003e : \u003ccode\u003estore\u003c/code\u003e with all reference values completely dereferenced given \u003ccode\u003eheap\u003c/code\u003e, and all auxiliary values removed\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "userStore",
          "package": "language-boogie",
          "signature": "Heap Value -\u003e Store -\u003e Store",
          "source": "src/Language-Boogie-Environment.html#userStore",
          "type": "function"
        },
        "index": {
          "description": "userStore heap store store with all reference values completely dereferenced given heap and all auxiliary values removed",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "userStore",
          "normalized": "Heap Value-\u003eStore-\u003eStore",
          "package": "language-boogie",
          "partial": "Store",
          "signature": "Heap Value-\u003eStore-\u003eStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:userStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed value\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "valueDoc",
          "package": "language-boogie",
          "signature": "Value -\u003e Doc",
          "source": "src/Language-Boogie-Environment.html#valueDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed value",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "valueDoc",
          "normalized": "Value-\u003eDoc",
          "package": "language-boogie",
          "partial": "Doc",
          "signature": "Value-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:valueDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003evalueFromInteger\u003c/a\u003e\u003c/code\u003e \u003ccode\u003et n\u003c/code\u003e: value of type \u003ccode\u003et\u003c/code\u003e with an integer code \u003ccode\u003en\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "valueFromInteger",
          "package": "language-boogie",
          "signature": "Type -\u003e Integer -\u003e Value",
          "source": "src/Language-Boogie-Environment.html#valueFromInteger",
          "type": "function"
        },
        "index": {
          "description": "valueFromInteger value of type with an integer code",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "valueFromInteger",
          "normalized": "Type-\u003eInteger-\u003eValue",
          "package": "language-boogie",
          "partial": "From Integer",
          "signature": "Type-\u003eInteger-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:valueFromInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVisible values of all identifiers in a memory (locals shadow globals) \n\u003c/p\u003e",
          "module": "Language.Boogie.Environment",
          "name": "visibleVariables",
          "package": "language-boogie",
          "signature": "Memory -\u003e Store",
          "source": "src/Language-Boogie-Environment.html#visibleVariables",
          "type": "function"
        },
        "index": {
          "description": "Visible values of all identifiers in memory locals shadow globals",
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "visibleVariables",
          "normalized": "Memory-\u003eStore",
          "package": "language-boogie",
          "partial": "Variables",
          "signature": "Memory-\u003eStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:visibleVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "vnot",
          "package": "language-boogie",
          "signature": "Value -\u003e Value",
          "source": "src/Language-Boogie-Environment.html#vnot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "vnot",
          "normalized": "Value-\u003eValue",
          "package": "language-boogie",
          "signature": "Value-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:vnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Environment",
          "name": "withHeap",
          "package": "language-boogie",
          "signature": "(Heap Value -\u003e (t, Heap Value)) -\u003e Environment m -\u003e (t, Environment m)",
          "source": "src/Language-Boogie-Environment.html#withHeap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Environment",
          "module": "Language.Boogie.Environment",
          "name": "withHeap",
          "normalized": "(Heap Value-\u003e(a,Heap Value))-\u003eEnvironment b-\u003e(a,Environment b)",
          "package": "language-boogie",
          "partial": "Heap",
          "signature": "(Heap Value-\u003e(t,Heap Value))-\u003eEnvironment m-\u003e(t,Environment m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Environment.html#v:withHeap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis monad transformer adds the ability to accumulate errors from several ErrorT computations\n and report them all at once.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.ErrorAccum",
          "name": "ErrorAccum",
          "package": "language-boogie",
          "source": "src/Language-Boogie-ErrorAccum.html",
          "type": "module"
        },
        "index": {
          "description": "This monad transformer adds the ability to accumulate errors from several ErrorT computations and report them all at once",
          "hierarchy": "Language Boogie ErrorAccum",
          "module": "Language.Boogie.ErrorAccum",
          "name": "ErrorAccum",
          "package": "language-boogie",
          "partial": "Error Accum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-ErrorAccum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError accumulator: \n used in combination with ErrorT to store intermediate computation results, \n when errors should be accumulated rather than reported immediately  \n\u003c/p\u003e",
          "module": "Language.Boogie.ErrorAccum",
          "name": "ErrorAccumT",
          "package": "language-boogie",
          "source": "src/Language-Boogie-ErrorAccum.html#ErrorAccumT",
          "type": "newtype"
        },
        "index": {
          "description": "Error accumulator used in combination with ErrorT to store intermediate computation results when errors should be accumulated rather than reported immediately",
          "hierarchy": "Language Boogie ErrorAccum",
          "module": "Language.Boogie.ErrorAccum",
          "name": "ErrorAccumT",
          "package": "language-boogie",
          "partial": "Error Accum",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-ErrorAccum.html#t:ErrorAccumT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.ErrorAccum",
          "name": "ErrorAccumT",
          "package": "language-boogie",
          "signature": "ErrorAccumT",
          "source": "src/Language-Boogie-ErrorAccum.html#ErrorAccumT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie ErrorAccum",
          "module": "Language.Boogie.ErrorAccum",
          "name": "ErrorAccumT",
          "package": "language-boogie",
          "partial": "Error Accum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-ErrorAccum.html#v:ErrorAccumT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform an error computation and default value into an error accumlator\n\u003c/p\u003e",
          "module": "Language.Boogie.ErrorAccum",
          "name": "accum",
          "package": "language-boogie",
          "signature": "ErrorT [e] m a -\u003e a -\u003e ErrorAccumT e m a",
          "source": "src/Language-Boogie-ErrorAccum.html#accum",
          "type": "function"
        },
        "index": {
          "description": "Transform an error computation and default value into an error accumlator",
          "hierarchy": "Language Boogie ErrorAccum",
          "module": "Language.Boogie.ErrorAccum",
          "name": "accum",
          "normalized": "ErrorT[a]b c-\u003ec-\u003eErrorAccumT a b c",
          "package": "language-boogie",
          "signature": "ErrorT[e]m a-\u003ea-\u003eErrorAccumT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-ErrorAccum.html#v:accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef def xs\u003c/code\u003e :\n Apply \u003ccode\u003ef\u003c/code\u003e to all \u003ccode\u003exs\u003c/code\u003e, accumulating errors and reporting them at the end\n\u003c/p\u003e",
          "module": "Language.Boogie.ErrorAccum",
          "name": "mapAccum",
          "package": "language-boogie",
          "signature": "(a -\u003e ErrorT [e] m b) -\u003e b -\u003e [a] -\u003e ErrorT [e] m [b]",
          "source": "src/Language-Boogie-ErrorAccum.html#mapAccum",
          "type": "function"
        },
        "index": {
          "description": "mapAccum def xs Apply to all xs accumulating errors and reporting them at the end",
          "hierarchy": "Language Boogie ErrorAccum",
          "module": "Language.Boogie.ErrorAccum",
          "name": "mapAccum",
          "normalized": "(a-\u003eErrorT[b]c d)-\u003ed-\u003e[a]-\u003eErrorT[b]c[d]",
          "package": "language-boogie",
          "partial": "Accum",
          "signature": "(a-\u003eErrorT[e]m b)-\u003eb-\u003e[a]-\u003eErrorT[e]m[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-ErrorAccum.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emapAccumA_\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e :\n Apply \u003ccode\u003ef\u003c/code\u003e to all \u003ccode\u003exs\u003c/code\u003e throwing away the result, accumulating errors\n\u003c/p\u003e",
          "module": "Language.Boogie.ErrorAccum",
          "name": "mapAccumA_",
          "package": "language-boogie",
          "signature": "(a -\u003e ErrorT [e] m ()) -\u003e [a] -\u003e ErrorAccumT e m ()",
          "source": "src/Language-Boogie-ErrorAccum.html#mapAccumA_",
          "type": "function"
        },
        "index": {
          "description": "mapAccumA xs Apply to all xs throwing away the result accumulating errors",
          "hierarchy": "Language Boogie ErrorAccum",
          "module": "Language.Boogie.ErrorAccum",
          "name": "mapAccumA_",
          "normalized": "(a-\u003eErrorT[b]c())-\u003e[a]-\u003eErrorAccumT b c()",
          "package": "language-boogie",
          "partial": "Accum",
          "signature": "(a-\u003eErrorT[e]m())-\u003e[a]-\u003eErrorAccumT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-ErrorAccum.html#v:mapAccumA_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003emapAccumA_\u003c/a\u003e\u003c/code\u003e, but reporting errors at the end\n\u003c/p\u003e",
          "module": "Language.Boogie.ErrorAccum",
          "name": "mapAccum_",
          "package": "language-boogie",
          "signature": "(a -\u003e ErrorT [e] m ()) -\u003e [a] -\u003e ErrorT [e] m ()",
          "source": "src/Language-Boogie-ErrorAccum.html#mapAccum_",
          "type": "function"
        },
        "index": {
          "description": "Same as mapAccumA but reporting errors at the end",
          "hierarchy": "Language Boogie ErrorAccum",
          "module": "Language.Boogie.ErrorAccum",
          "name": "mapAccum_",
          "normalized": "(a-\u003eErrorT[b]c())-\u003e[a]-\u003eErrorT[b]c()",
          "package": "language-boogie",
          "partial": "Accum",
          "signature": "(a-\u003eErrorT[e]m())-\u003e[a]-\u003eErrorT[e]m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-ErrorAccum.html#v:mapAccum_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform an error accumlator back into a regular error computation  \n\u003c/p\u003e",
          "module": "Language.Boogie.ErrorAccum",
          "name": "report",
          "package": "language-boogie",
          "signature": "ErrorAccumT e m a -\u003e ErrorT [e] m a",
          "source": "src/Language-Boogie-ErrorAccum.html#report",
          "type": "function"
        },
        "index": {
          "description": "Transform an error accumlator back into regular error computation",
          "hierarchy": "Language Boogie ErrorAccum",
          "module": "Language.Boogie.ErrorAccum",
          "name": "report",
          "normalized": "ErrorAccumT a b c-\u003eErrorT[a]b c",
          "package": "language-boogie",
          "signature": "ErrorAccumT e m a-\u003eErrorT[e]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-ErrorAccum.html#v:report"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.ErrorAccum",
          "name": "runErrorAccumT",
          "package": "language-boogie",
          "signature": "m ([e], a)",
          "source": "src/Language-Boogie-ErrorAccum.html#ErrorAccumT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie ErrorAccum",
          "module": "Language.Boogie.ErrorAccum",
          "name": "runErrorAccumT",
          "normalized": "a([b],c)",
          "package": "language-boogie",
          "partial": "Error Accum",
          "signature": "m([e],a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-ErrorAccum.html#v:runErrorAccumT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWithAccum_\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs ys\u003c/code\u003e :\n Apply type checking \u003ccode\u003ef\u003c/code\u003e to all \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003eys\u003c/code\u003e throwing away the result,\n accumulating errors and reporting them at the end\n\u003c/p\u003e",
          "module": "Language.Boogie.ErrorAccum",
          "name": "zipWithAccum_",
          "package": "language-boogie",
          "signature": "(a -\u003e b -\u003e ErrorT [e] m ()) -\u003e [a] -\u003e [b] -\u003e ErrorT [e] m ()",
          "source": "src/Language-Boogie-ErrorAccum.html#zipWithAccum_",
          "type": "function"
        },
        "index": {
          "description": "zipWithAccum xs ys Apply type checking to all xs and ys throwing away the result accumulating errors and reporting them at the end",
          "hierarchy": "Language Boogie ErrorAccum",
          "module": "Language.Boogie.ErrorAccum",
          "name": "zipWithAccum_",
          "normalized": "(a-\u003eb-\u003eErrorT[c]d())-\u003e[a]-\u003e[b]-\u003eErrorT[c]d()",
          "package": "language-boogie",
          "partial": "With Accum",
          "signature": "(a-\u003eb-\u003eErrorT[e]m())-\u003e[a]-\u003e[b]-\u003eErrorT[e]m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-ErrorAccum.html#v:zipWithAccum_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeterministic and non-deterministic input generators\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.Generator",
          "name": "Generator",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Generator.html",
          "type": "module"
        },
        "index": {
          "description": "Deterministic and non-deterministic input generators",
          "hierarchy": "Language Boogie Generator",
          "module": "Language.Boogie.Generator",
          "name": "Generator",
          "package": "language-boogie",
          "partial": "Generator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Generator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput generator\n\u003c/p\u003e",
          "module": "Language.Boogie.Generator",
          "name": "Generator",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Generator.html#Generator",
          "type": "data"
        },
        "index": {
          "description": "Input generator",
          "hierarchy": "Language Boogie Generator",
          "module": "Language.Boogie.Generator",
          "name": "Generator",
          "package": "language-boogie",
          "partial": "Generator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Generator.html#t:Generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Generator",
          "name": "Generator",
          "package": "language-boogie",
          "signature": "Generator",
          "source": "src/Language-Boogie-Generator.html#Generator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Generator",
          "module": "Language.Boogie.Generator",
          "name": "Generator",
          "package": "language-boogie",
          "partial": "Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Generator.html#v:Generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways generates the same default value\n\u003c/p\u003e",
          "module": "Language.Boogie.Generator",
          "name": "defaultGenerator",
          "package": "language-boogie",
          "signature": "Generator Identity",
          "source": "src/Language-Boogie-Generator.html#defaultGenerator",
          "type": "function"
        },
        "index": {
          "description": "Always generates the same default value",
          "hierarchy": "Language Boogie Generator",
          "module": "Language.Boogie.Generator",
          "name": "defaultGenerator",
          "package": "language-boogie",
          "partial": "Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Generator.html#v:defaultGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates all possible values once, in a predefined order\n\u003c/p\u003e",
          "module": "Language.Boogie.Generator",
          "name": "exhaustiveGenerator",
          "package": "language-boogie",
          "signature": "Maybe Integer -\u003e Generator Stream",
          "source": "src/Language-Boogie-Generator.html#exhaustiveGenerator",
          "type": "function"
        },
        "index": {
          "description": "Generates all possible values once in predefined order",
          "hierarchy": "Language Boogie Generator",
          "module": "Language.Boogie.Generator",
          "name": "exhaustiveGenerator",
          "normalized": "Maybe Integer-\u003eGenerator Stream",
          "package": "language-boogie",
          "partial": "Generator",
          "signature": "Maybe Integer-\u003eGenerator Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Generator.html#v:exhaustiveGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a (possibly infinite) nonempty list into a stream      \n\u003c/p\u003e",
          "module": "Language.Boogie.Generator",
          "name": "fromList",
          "package": "language-boogie",
          "signature": "[a] -\u003e Stream a",
          "source": "src/Language-Boogie-Generator.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert possibly infinite nonempty list into stream",
          "hierarchy": "Language Boogie Generator",
          "module": "Language.Boogie.Generator",
          "name": "fromList",
          "normalized": "[a]-\u003eStream a",
          "package": "language-boogie",
          "partial": "List",
          "signature": "[a]-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Generator.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Generator",
          "name": "genBool",
          "package": "language-boogie",
          "signature": "m Bool",
          "source": "src/Language-Boogie-Generator.html#Generator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Generator",
          "module": "Language.Boogie.Generator",
          "name": "genBool",
          "package": "language-boogie",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Generator.html#v:genBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Generator",
          "name": "genIndex",
          "package": "language-boogie",
          "signature": "Int -\u003e m Int",
          "source": "src/Language-Boogie-Generator.html#Generator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Generator",
          "module": "Language.Boogie.Generator",
          "name": "genIndex",
          "normalized": "Int-\u003ea Int",
          "package": "language-boogie",
          "partial": "Index",
          "signature": "Int-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Generator.html#v:genIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Generator",
          "name": "genInteger",
          "package": "language-boogie",
          "signature": "m Integer",
          "source": "src/Language-Boogie-Generator.html#Generator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Generator",
          "module": "Language.Boogie.Generator",
          "name": "genInteger",
          "package": "language-boogie",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Generator.html#v:genInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eintInterval\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e: interval centered around 0 of size n\n\u003c/p\u003e",
          "module": "Language.Boogie.Generator",
          "name": "intInterval",
          "package": "language-boogie",
          "signature": "t -\u003e (t, t)",
          "source": "src/Language-Boogie-Generator.html#intInterval",
          "type": "function"
        },
        "index": {
          "description": "intInterval interval centered around of size",
          "hierarchy": "Language Boogie Generator",
          "module": "Language.Boogie.Generator",
          "name": "intInterval",
          "normalized": "a-\u003e(a,a)",
          "package": "language-boogie",
          "partial": "Interval",
          "signature": "t-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Generator.html#v:intInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enatInterval\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e: interval starting from 0 of size n\n\u003c/p\u003e",
          "module": "Language.Boogie.Generator",
          "name": "natInterval",
          "package": "language-boogie",
          "signature": "t1 -\u003e (t, t1)",
          "source": "src/Language-Boogie-Generator.html#natInterval",
          "type": "function"
        },
        "index": {
          "description": "natInterval interval starting from of size",
          "hierarchy": "Language Boogie Generator",
          "module": "Language.Boogie.Generator",
          "name": "natInterval",
          "normalized": "a-\u003e(a,a)",
          "package": "language-boogie",
          "partial": "Interval",
          "signature": "t-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Generator.html#v:natInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerated values randomly; the same value can be generated multiple times\n\u003c/p\u003e",
          "module": "Language.Boogie.Generator",
          "name": "randomGenerator",
          "package": "language-boogie",
          "signature": "StdGen -\u003e Maybe Integer -\u003e Generator Stream",
          "source": "src/Language-Boogie-Generator.html#randomGenerator",
          "type": "function"
        },
        "index": {
          "description": "Generated values randomly the same value can be generated multiple times",
          "hierarchy": "Language Boogie Generator",
          "module": "Language.Boogie.Generator",
          "name": "randomGenerator",
          "normalized": "StdGen-\u003eMaybe Integer-\u003eGenerator Stream",
          "package": "language-boogie",
          "partial": "Generator",
          "signature": "StdGen-\u003eMaybe Integer-\u003eGenerator Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Generator.html#v:randomGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric heap with reference counting.\n This module provides relatively low-level interface to the heap data structure, while keeping its internal representation hidden and consistent.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.Heap",
          "name": "Heap",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Heap.html",
          "type": "module"
        },
        "index": {
          "description": "Generic heap with reference counting This module provides relatively low-level interface to the heap data structure while keeping its internal representation hidden and consistent",
          "hierarchy": "Language Boogie Heap",
          "module": "Language.Boogie.Heap",
          "name": "Heap",
          "package": "language-boogie",
          "partial": "Heap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Heap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeap\n\u003c/p\u003e",
          "module": "Language.Boogie.Heap",
          "name": "Heap",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Heap.html#Heap",
          "type": "data"
        },
        "index": {
          "description": "Heap",
          "hierarchy": "Language Boogie Heap",
          "module": "Language.Boogie.Heap",
          "name": "Heap",
          "package": "language-boogie",
          "partial": "Heap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Heap.html#t:Heap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference (index in the heap)\n\u003c/p\u003e",
          "module": "Language.Boogie.Heap",
          "name": "Ref",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Heap.html#Ref",
          "type": "type"
        },
        "index": {
          "description": "Reference index in the heap",
          "hierarchy": "Language Boogie Heap",
          "module": "Language.Boogie.Heap",
          "name": "Ref",
          "package": "language-boogie",
          "partial": "Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Heap.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ealloc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ev h\u003c/code\u003e : choose a free reference in heap \u003ccode\u003eh\u003c/code\u003e and store value \u003ccode\u003ev\u003c/code\u003e in there; return the reference and the updated heap\n\u003c/p\u003e",
          "module": "Language.Boogie.Heap",
          "name": "alloc",
          "package": "language-boogie",
          "signature": "a -\u003e Heap a -\u003e (Ref, Heap a)",
          "source": "src/Language-Boogie-Heap.html#alloc",
          "type": "function"
        },
        "index": {
          "description": "alloc choose free reference in heap and store value in there return the reference and the updated heap",
          "hierarchy": "Language Boogie Heap",
          "module": "Language.Boogie.Heap",
          "name": "alloc",
          "normalized": "a-\u003eHeap a-\u003e(Ref,Heap a)",
          "package": "language-boogie",
          "signature": "a-\u003eHeap a-\u003e(Ref,Heap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Heap.html#v:alloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eh r\u003c/code\u003e: value of \u003ccode\u003er\u003c/code\u003e in heap \u003ccode\u003eh\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Heap",
          "name": "at",
          "package": "language-boogie",
          "signature": "Heap a -\u003e Ref -\u003e a",
          "source": "src/Language-Boogie-Heap.html#at",
          "type": "function"
        },
        "index": {
          "description": "at value of in heap",
          "hierarchy": "Language Boogie Heap",
          "module": "Language.Boogie.Heap",
          "name": "at",
          "normalized": "Heap a-\u003eRef-\u003ea",
          "package": "language-boogie",
          "signature": "Heap a-\u003eRef-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Heap.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect some garbage reference in the heap and return that reference and the new heap;\n the heap must have garbage\n\u003c/p\u003e",
          "module": "Language.Boogie.Heap",
          "name": "dealloc",
          "package": "language-boogie",
          "signature": "Heap a -\u003e (Ref, Heap a)",
          "source": "src/Language-Boogie-Heap.html#dealloc",
          "type": "function"
        },
        "index": {
          "description": "Collect some garbage reference in the heap and return that reference and the new heap the heap must have garbage",
          "hierarchy": "Language Boogie Heap",
          "module": "Language.Boogie.Heap",
          "name": "dealloc",
          "normalized": "Heap a-\u003e(Ref,Heap a)",
          "package": "language-boogie",
          "signature": "Heap a-\u003e(Ref,Heap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Heap.html#v:dealloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edecRefCount\u003c/a\u003e\u003c/code\u003e \u003ccode\u003er h\u003c/code\u003e : decrease reference count of \u003ccode\u003er\u003c/code\u003e in \u003ccode\u003eh\u003c/code\u003e;\n \u003ccode\u003er\u003c/code\u003e must be present in \u003ccode\u003eh\u003c/code\u003e          \n\u003c/p\u003e",
          "module": "Language.Boogie.Heap",
          "name": "decRefCount",
          "package": "language-boogie",
          "signature": "Ref -\u003e Heap a -\u003e Heap a",
          "source": "src/Language-Boogie-Heap.html#decRefCount",
          "type": "function"
        },
        "index": {
          "description": "decRefCount decrease reference count of in must be present in",
          "hierarchy": "Language Boogie Heap",
          "module": "Language.Boogie.Heap",
          "name": "decRefCount",
          "normalized": "Ref-\u003eHeap a-\u003eHeap a",
          "package": "language-boogie",
          "partial": "Ref Count",
          "signature": "Ref-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Heap.html#v:decRefCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty heap\n\u003c/p\u003e",
          "module": "Language.Boogie.Heap",
          "name": "emptyHeap",
          "package": "language-boogie",
          "signature": "Heap a",
          "source": "src/Language-Boogie-Heap.html#emptyHeap",
          "type": "function"
        },
        "index": {
          "description": "Empty heap",
          "hierarchy": "Language Boogie Heap",
          "module": "Language.Boogie.Heap",
          "name": "emptyHeap",
          "package": "language-boogie",
          "partial": "Heap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Heap.html#v:emptyHeap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the heap have any garbage?\n\u003c/p\u003e",
          "module": "Language.Boogie.Heap",
          "name": "hasGarbage",
          "package": "language-boogie",
          "signature": "Heap a -\u003e Bool",
          "source": "src/Language-Boogie-Heap.html#hasGarbage",
          "type": "function"
        },
        "index": {
          "description": "Does the heap have any garbage",
          "hierarchy": "Language Boogie Heap",
          "module": "Language.Boogie.Heap",
          "name": "hasGarbage",
          "normalized": "Heap a-\u003eBool",
          "package": "language-boogie",
          "partial": "Garbage",
          "signature": "Heap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Heap.html#v:hasGarbage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed heap\n\u003c/p\u003e",
          "module": "Language.Boogie.Heap",
          "name": "heapDoc",
          "package": "language-boogie",
          "signature": "Heap a -\u003e Doc",
          "source": "src/Language-Boogie-Heap.html#heapDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed heap",
          "hierarchy": "Language Boogie Heap",
          "module": "Language.Boogie.Heap",
          "name": "heapDoc",
          "normalized": "Heap a-\u003eDoc",
          "package": "language-boogie",
          "partial": "Doc",
          "signature": "Heap a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Heap.html#v:heapDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eincRefCount\u003c/a\u003e\u003c/code\u003e \u003ccode\u003er h\u003c/code\u003e : increase reference count of \u003ccode\u003er\u003c/code\u003e in \u003ccode\u003eh\u003c/code\u003e;\n \u003ccode\u003er\u003c/code\u003e must be present in \u003ccode\u003eh\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Heap",
          "name": "incRefCount",
          "package": "language-boogie",
          "signature": "Ref -\u003e Heap a -\u003e Heap a",
          "source": "src/Language-Boogie-Heap.html#incRefCount",
          "type": "function"
        },
        "index": {
          "description": "incRefCount increase reference count of in must be present in",
          "hierarchy": "Language Boogie Heap",
          "module": "Language.Boogie.Heap",
          "name": "incRefCount",
          "normalized": "Ref-\u003eHeap a-\u003eHeap a",
          "package": "language-boogie",
          "partial": "Ref Count",
          "signature": "Ref-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Heap.html#v:incRefCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed reference\n\u003c/p\u003e",
          "module": "Language.Boogie.Heap",
          "name": "refDoc",
          "package": "language-boogie",
          "signature": "Ref -\u003e Doc",
          "source": "src/Language-Boogie-Heap.html#refDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed reference",
          "hierarchy": "Language Boogie Heap",
          "module": "Language.Boogie.Heap",
          "name": "refDoc",
          "normalized": "Ref-\u003eDoc",
          "package": "language-boogie",
          "partial": "Doc",
          "signature": "Ref-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Heap.html#v:refDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003er v h\u003c/code\u003e : set the value at reference \u003ccode\u003er\u003c/code\u003e to \u003ccode\u003ev\u003c/code\u003e in \u003ccode\u003eh\u003c/code\u003e;\n \u003ccode\u003er\u003c/code\u003e must be present in \u003ccode\u003eh\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Heap",
          "name": "update",
          "package": "language-boogie",
          "signature": "Ref -\u003e a -\u003e Heap a -\u003e Heap a",
          "source": "src/Language-Boogie-Heap.html#update",
          "type": "function"
        },
        "index": {
          "description": "update set the value at reference to in must be present in",
          "hierarchy": "Language Boogie Heap",
          "module": "Language.Boogie.Heap",
          "name": "update",
          "normalized": "Ref-\u003ea-\u003eHeap a-\u003eHeap a",
          "package": "language-boogie",
          "signature": "Ref-\u003ea-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Heap.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterpreter for Boogie 2\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "Interpreter",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Interpreter.html",
          "type": "module"
        },
        "index": {
          "description": "Interpreter for Boogie",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "Interpreter",
          "package": "language-boogie",
          "partial": "Interpreter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKinds of run-time failures\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "FailureKind",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Interpreter.html#FailureKind",
          "type": "data"
        },
        "index": {
          "description": "Kinds of run-time failures",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "FailureKind",
          "package": "language-boogie",
          "partial": "Failure Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#t:FailureKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Interpreter",
          "name": "FailureSource",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Interpreter.html#FailureSource",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "FailureSource",
          "package": "language-boogie",
          "partial": "Failure Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#t:FailureSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailures that occur during execution\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "RuntimeFailure",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Interpreter.html#RuntimeFailure",
          "type": "data"
        },
        "index": {
          "description": "Failures that occur during execution",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "RuntimeFailure",
          "package": "language-boogie",
          "partial": "Runtime Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#t:RuntimeFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a procedure or function call  \n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "StackFrame",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Interpreter.html#StackFrame",
          "type": "data"
        },
        "index": {
          "description": "Information about procedure or function call",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "StackFrame",
          "package": "language-boogie",
          "partial": "Stack Frame",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#t:StackFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Interpreter",
          "name": "StackTrace",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Interpreter.html#StackTrace",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "StackTrace",
          "package": "language-boogie",
          "partial": "Stack Trace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#t:StackTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest session summary\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "Summary",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Interpreter.html#Summary",
          "type": "data"
        },
        "index": {
          "description": "Test session summary",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "Summary",
          "package": "language-boogie",
          "partial": "Summary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#t:Summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of an execution\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "TestCase",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Interpreter.html#TestCase",
          "type": "data"
        },
        "index": {
          "description": "Description of an execution",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "TestCase",
          "package": "language-boogie",
          "partial": "Test Case",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#t:TestCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision by zero  \n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "DivisionByZero",
          "package": "language-boogie",
          "signature": "DivisionByZero",
          "source": "src/Language-Boogie-Interpreter.html#FailureSource",
          "type": "function"
        },
        "index": {
          "description": "Division by zero",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "DivisionByZero",
          "package": "language-boogie",
          "partial": "Division By Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:DivisionByZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError state reached (assertion violation)\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "Error",
          "package": "language-boogie",
          "signature": "Error",
          "source": "src/Language-Boogie-Interpreter.html#FailureKind",
          "type": "function"
        },
        "index": {
          "description": "Error state reached assertion violation",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "Error",
          "package": "language-boogie",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantification over an infinite set\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "InfiniteDomain",
          "package": "language-boogie",
          "signature": "InfiniteDomain Id Interval",
          "source": "src/Language-Boogie-Interpreter.html#FailureSource",
          "type": "function"
        },
        "index": {
          "description": "Quantification over an infinite set",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "InfiniteDomain",
          "package": "language-boogie",
          "partial": "Infinite Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:InfiniteDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMust be cought inside the interpreter and never reach the user\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "InternalException",
          "package": "language-boogie",
          "signature": "InternalException InternalCode",
          "source": "src/Language-Boogie-Interpreter.html#FailureSource",
          "type": "function"
        },
        "index": {
          "description": "Must be cought inside the interpreter and never reach the user",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "InternalException",
          "package": "language-boogie",
          "partial": "Internal Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:InternalException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality of two maps cannot be determined\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "MapEquality",
          "package": "language-boogie",
          "signature": "MapEquality Value Value",
          "source": "src/Language-Boogie-Interpreter.html#FailureSource",
          "type": "function"
        },
        "index": {
          "description": "Equality of two maps cannot be determined",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "MapEquality",
          "package": "language-boogie",
          "partial": "Map Equality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:MapEquality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state is OK in Boogie semantics, but the execution cannot continue due to the limitations of the interpreter\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "Nonexecutable",
          "package": "language-boogie",
          "signature": "Nonexecutable",
          "source": "src/Language-Boogie-Interpreter.html#FailureKind",
          "type": "function"
        },
        "index": {
          "description": "The state is OK in Boogie semantics but the execution cannot continue due to the limitations of the interpreter",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "Nonexecutable",
          "package": "language-boogie",
          "partial": "Nonexecutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:Nonexecutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Interpreter",
          "name": "RuntimeFailure",
          "package": "language-boogie",
          "signature": "RuntimeFailure",
          "source": "src/Language-Boogie-Interpreter.html#RuntimeFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "RuntimeFailure",
          "package": "language-boogie",
          "partial": "Runtime Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:RuntimeFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eViolation of user-defined specification\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "SpecViolation",
          "package": "language-boogie",
          "signature": "SpecViolation SpecClause",
          "source": "src/Language-Boogie-Interpreter.html#FailureSource",
          "type": "function"
        },
        "index": {
          "description": "Violation of user-defined specification",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "SpecViolation",
          "package": "language-boogie",
          "partial": "Spec Violation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:SpecViolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Interpreter",
          "name": "StackFrame",
          "package": "language-boogie",
          "signature": "StackFrame",
          "source": "src/Language-Boogie-Interpreter.html#StackFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "StackFrame",
          "package": "language-boogie",
          "partial": "Stack Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:StackFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Interpreter",
          "name": "Summary",
          "package": "language-boogie",
          "signature": "Summary",
          "source": "src/Language-Boogie-Interpreter.html#Summary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "Summary",
          "package": "language-boogie",
          "partial": "Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:Summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Interpreter",
          "name": "TestCase",
          "package": "language-boogie",
          "signature": "TestCase",
          "source": "src/Language-Boogie-Interpreter.html#TestCase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "TestCase",
          "package": "language-boogie",
          "partial": "Test Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:TestCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnreachable state reached (assumption violation)\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "Unreachable",
          "package": "language-boogie",
          "signature": "Unreachable",
          "source": "src/Language-Boogie-Interpreter.html#FailureKind",
          "type": "function"
        },
        "index": {
          "description": "Unreachable state reached assumption violation",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "Unreachable",
          "package": "language-boogie",
          "partial": "Unreachable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:Unreachable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage construct is not yet supported (should disappear in later versions)\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "UnsupportedConstruct",
          "package": "language-boogie",
          "signature": "UnsupportedConstruct String",
          "source": "src/Language-Boogie-Interpreter.html#FailureSource",
          "type": "function"
        },
        "index": {
          "description": "Language construct is not yet supported should disappear in later versions",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "UnsupportedConstruct",
          "package": "language-boogie",
          "partial": "Unsupported Construct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:UnsupportedConstruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of procedure or function\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "callName",
          "package": "language-boogie",
          "signature": "Id",
          "source": "src/Language-Boogie-Interpreter.html#StackFrame",
          "type": "function"
        },
        "index": {
          "description": "Name of procedure or function",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "callName",
          "package": "language-boogie",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:callName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource code position of the call\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "callPos",
          "package": "language-boogie",
          "signature": "SourcePos",
          "source": "src/Language-Boogie-Interpreter.html#StackFrame",
          "type": "function"
        },
        "index": {
          "description": "Source code position of the call",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "callPos",
          "package": "language-boogie",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:callPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate an expression;\n can have a side-effect of initializing variables that were not previously defined\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "eval",
          "package": "language-boogie",
          "signature": "Expression -\u003e Execution m Value",
          "source": "src/Language-Boogie-Interpreter.html#eval",
          "type": "function"
        },
        "index": {
          "description": "Evaluate an expression can have side-effect of initializing variables that were not previously defined",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "eval",
          "normalized": "Expression-\u003eExecution a Value",
          "package": "language-boogie",
          "signature": "Expression-\u003eExecution m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a basic statement\n (no jump, if or while statements allowed)\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "exec",
          "package": "language-boogie",
          "signature": "Statement -\u003e Execution m ()",
          "source": "src/Language-Boogie-Interpreter.html#exec",
          "type": "function"
        },
        "index": {
          "description": "Execute basic statement no jump if or while statements allowed",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "exec",
          "normalized": "Statement-\u003eExecution a()",
          "package": "language-boogie",
          "signature": "Statement-\u003eExecution m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexecProcedure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003esig def args lhss\u003c/code\u003e :\n Execute definition \u003ccode\u003edef\u003c/code\u003e of procedure \u003ccode\u003esig\u003c/code\u003e with actual arguments \u003ccode\u003eargs\u003c/code\u003e and call left-hand sides \u003ccode\u003elhss\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "execProcedure",
          "package": "language-boogie",
          "signature": "PSig -\u003e PDef -\u003e [Expression] -\u003e [Expression] -\u003e Execution m [Value]",
          "source": "src/Language-Boogie-Interpreter.html#execProcedure",
          "type": "function"
        },
        "index": {
          "description": "execProcedure sig def args lhss Execute definition def of procedure sig with actual arguments args and call left-hand sides lhss",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "execProcedure",
          "normalized": "PSig-\u003ePDef-\u003e[Expression]-\u003e[Expression]-\u003eExecution a[Value]",
          "package": "language-boogie",
          "partial": "Procedure",
          "signature": "PSig-\u003ePDef-\u003e[Expression]-\u003e[Expression]-\u003eExecution m[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:execProcedure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexecuteProgram\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep tc entryPoint\u003c/code\u003e :\n Execute program \u003ccode\u003ep\u003c/code\u003e \u003cem\u003enon-deterministically\u003c/em\u003e in type context \u003ccode\u003etc\u003c/code\u003e starting from procedure \u003ccode\u003eentryPoint\u003c/code\u003e \n and return an infinite list of possible outcomes (each either runtime failure or the final variable store).\n Whenever a value is unspecified, all values of the required type are tried exhaustively.\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "executeProgram",
          "package": "language-boogie",
          "signature": "Program -\u003e Context -\u003e Generator Stream -\u003e Maybe Integer -\u003e Id -\u003e [TestCase]",
          "source": "src/Language-Boogie-Interpreter.html#executeProgram",
          "type": "function"
        },
        "index": {
          "description": "executeProgram tc entryPoint Execute program non-deterministically in type context tc starting from procedure entryPoint and return an infinite list of possible outcomes each either runtime failure or the final variable store Whenever value is unspecified all values of the required type are tried exhaustively",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "executeProgram",
          "normalized": "Program-\u003eContext-\u003eGenerator Stream-\u003eMaybe Integer-\u003eId-\u003e[TestCase]",
          "package": "language-boogie",
          "partial": "Program",
          "signature": "Program-\u003eContext-\u003eGenerator Stream-\u003eMaybe Integer-\u003eId-\u003e[TestCase]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:executeProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexecuteProgramDet\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep tc entryPoint\u003c/code\u003e :\n Execute program \u003ccode\u003ep\u003c/code\u003e \u003cem\u003edeterministically\u003c/em\u003e in type context \u003ccode\u003etc\u003c/code\u003e starting from procedure \u003ccode\u003eentryPoint\u003c/code\u003e \n and return a single outcome.\n Whenever a value is unspecified, a default value of the required type is used.\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "executeProgramDet",
          "package": "language-boogie",
          "signature": "Program -\u003e Context -\u003e Maybe Integer -\u003e Id -\u003e TestCase",
          "source": "src/Language-Boogie-Interpreter.html#executeProgramDet",
          "type": "function"
        },
        "index": {
          "description": "executeProgramDet tc entryPoint Execute program deterministically in type context tc starting from procedure entryPoint and return single outcome Whenever value is unspecified default value of the required type is used",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "executeProgramDet",
          "normalized": "Program-\u003eContext-\u003eMaybe Integer-\u003eId-\u003eTestCase",
          "package": "language-boogie",
          "partial": "Program Det",
          "signature": "Program-\u003eContext-\u003eMaybe Integer-\u003eId-\u003eTestCase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:executeProgramDet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexecuteProgramGeneric\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep tc generator qbound entryPoint\u003c/code\u003e :\n Execute program \u003ccode\u003ep\u003c/code\u003e in type context \u003ccode\u003etc\u003c/code\u003e with input generator \u003ccode\u003egenerator\u003c/code\u003e, starting from procedure \u003ccode\u003eentryPoint\u003c/code\u003e,\n and return the outcome(s) embedded into the generator's monad.\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "executeProgramGeneric",
          "package": "language-boogie",
          "signature": "Program -\u003e Context -\u003e Generator m -\u003e Maybe Integer -\u003e Id -\u003e m TestCase",
          "source": "src/Language-Boogie-Interpreter.html#executeProgramGeneric",
          "type": "function"
        },
        "index": {
          "description": "executeProgramGeneric tc generator qbound entryPoint Execute program in type context tc with input generator generator starting from procedure entryPoint and return the outcome embedded into the generator monad",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "executeProgramGeneric",
          "normalized": "Program-\u003eContext-\u003eGenerator a-\u003eMaybe Integer-\u003eId-\u003ea TestCase",
          "package": "language-boogie",
          "partial": "Program Generic",
          "signature": "Program-\u003eContext-\u003eGenerator m-\u003eMaybe Integer-\u003eId-\u003em TestCase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:executeProgramGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKind of a run-time failure\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "failureKind",
          "package": "language-boogie",
          "signature": "RuntimeFailure -\u003e FailureKind",
          "source": "src/Language-Boogie-Interpreter.html#failureKind",
          "type": "function"
        },
        "index": {
          "description": "Kind of run-time failure",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "failureKind",
          "normalized": "RuntimeFailure-\u003eFailureKind",
          "package": "language-boogie",
          "partial": "Kind",
          "signature": "RuntimeFailure-\u003eFailureKind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:failureKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efinalStateDoc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003edebug tc\u003c/code\u003e : outputs of \u003ccode\u003etc\u003c/code\u003e, \n displayed in user or debug format depending on \u003ccode\u003edebug\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "finalStateDoc",
          "package": "language-boogie",
          "signature": "Bool -\u003e TestCase -\u003e Doc",
          "source": "src/Language-Boogie-Interpreter.html#finalStateDoc",
          "type": "function"
        },
        "index": {
          "description": "finalStateDoc debug tc outputs of tc displayed in user or debug format depending on debug",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "finalStateDoc",
          "normalized": "Bool-\u003eTestCase-\u003eDoc",
          "package": "language-boogie",
          "partial": "State Doc",
          "signature": "Bool-\u003eTestCase-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:finalStateDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eisFail\u003c/a\u003e\u003c/code\u003e \u003ccode\u003etc\u003c/code\u003e: Does \u003ccode\u003etc\u003c/code\u003e end in an error state?\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "isFail",
          "package": "language-boogie",
          "signature": "TestCase -\u003e Bool",
          "source": "src/Language-Boogie-Interpreter.html#isFail",
          "type": "function"
        },
        "index": {
          "description": "isFail tc Does tc end in an error state",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "isFail",
          "normalized": "TestCase-\u003eBool",
          "package": "language-boogie",
          "partial": "Fail",
          "signature": "TestCase-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:isFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eisInvalid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003etc\u003c/code\u003e: Does \u003ccode\u003etc\u003c/code\u003e and in an unreachable state?\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "isInvalid",
          "package": "language-boogie",
          "signature": "TestCase -\u003e Bool",
          "source": "src/Language-Boogie-Interpreter.html#isInvalid",
          "type": "function"
        },
        "index": {
          "description": "isInvalid tc Does tc and in an unreachable state",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "isInvalid",
          "normalized": "TestCase-\u003eBool",
          "package": "language-boogie",
          "partial": "Invalid",
          "signature": "TestCase-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:isInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eisNonexecutable\u003c/a\u003e\u003c/code\u003e \u003ccode\u003etc\u003c/code\u003e: Does \u003ccode\u003etc\u003c/code\u003e end in a non-executable state?\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "isNonexecutable",
          "package": "language-boogie",
          "signature": "TestCase -\u003e Bool",
          "source": "src/Language-Boogie-Interpreter.html#isNonexecutable",
          "type": "function"
        },
        "index": {
          "description": "isNonexecutable tc Does tc end in non-executable state",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "isNonexecutable",
          "normalized": "TestCase-\u003eBool",
          "package": "language-boogie",
          "partial": "Nonexecutable",
          "signature": "TestCase-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:isNonexecutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eisPass\u003c/a\u003e\u003c/code\u003e \u003ccode\u003etc\u003c/code\u003e: Does \u003ccode\u003etc\u003c/code\u003e end in a valid state?\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "isPass",
          "package": "language-boogie",
          "signature": "TestCase -\u003e Bool",
          "source": "src/Language-Boogie-Interpreter.html#isPass",
          "type": "function"
        },
        "index": {
          "description": "isPass tc Does tc end in valid state",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "isPass",
          "normalized": "TestCase-\u003eBool",
          "package": "language-boogie",
          "partial": "Pass",
          "signature": "TestCase-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:isPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect procedure implementations, and constant\u003cem\u003efunction\u003c/em\u003eglobal variable constraints\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "preprocess",
          "package": "language-boogie",
          "signature": "Program -\u003e SafeExecution m ()",
          "source": "src/Language-Boogie-Interpreter.html#preprocess",
          "type": "function"
        },
        "index": {
          "description": "Collect procedure implementations and constant function global variable constraints",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "preprocess",
          "normalized": "Program-\u003eSafeExecution a()",
          "package": "language-boogie",
          "signature": "Program-\u003eSafeExecution m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:preprocess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemory state at the time of failure\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "rtfMemory",
          "package": "language-boogie",
          "signature": "Memory",
          "source": "src/Language-Boogie-Interpreter.html#RuntimeFailure",
          "type": "function"
        },
        "index": {
          "description": "Memory state at the time of failure",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "rtfMemory",
          "package": "language-boogie",
          "partial": "Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:rtfMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation where the failure occurred\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "rtfPos",
          "package": "language-boogie",
          "signature": "SourcePos",
          "source": "src/Language-Boogie-Interpreter.html#RuntimeFailure",
          "type": "function"
        },
        "index": {
          "description": "Location where the failure occurred",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "rtfPos",
          "package": "language-boogie",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:rtfPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource of the failure\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "rtfSource",
          "package": "language-boogie",
          "signature": "FailureSource",
          "source": "src/Language-Boogie-Interpreter.html#RuntimeFailure",
          "type": "function"
        },
        "index": {
          "description": "Source of the failure",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "rtfSource",
          "package": "language-boogie",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:rtfSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStack trace from the program entry point to the procedure where the failure occurred\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "rtfTrace",
          "package": "language-boogie",
          "signature": "StackTrace",
          "source": "src/Language-Boogie-Interpreter.html#RuntimeFailure",
          "type": "function"
        },
        "index": {
          "description": "Stack trace from the program entry point to the procedure where the failure occurred",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "rtfTrace",
          "package": "language-boogie",
          "partial": "Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:rtfTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed run-time failure\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "runtimeFailureDoc",
          "package": "language-boogie",
          "signature": "Bool -\u003e RuntimeFailure -\u003e Doc",
          "source": "src/Language-Boogie-Interpreter.html#runtimeFailureDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed run-time failure",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "runtimeFailureDoc",
          "normalized": "Bool-\u003eRuntimeFailure-\u003eDoc",
          "package": "language-boogie",
          "partial": "Failure Doc",
          "signature": "Bool-\u003eRuntimeFailure-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:runtimeFailureDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of failing test cases\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "sFailCount",
          "package": "language-boogie",
          "signature": "Int",
          "source": "src/Language-Boogie-Interpreter.html#Summary",
          "type": "function"
        },
        "index": {
          "description": "Number of failing test cases",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "sFailCount",
          "package": "language-boogie",
          "partial": "Fail Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:sFailCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of invalid test cases\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "sInvalidCount",
          "package": "language-boogie",
          "signature": "Int",
          "source": "src/Language-Boogie-Interpreter.html#Summary",
          "type": "function"
        },
        "index": {
          "description": "Number of invalid test cases",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "sInvalidCount",
          "package": "language-boogie",
          "partial": "Invalid Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:sInvalidCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of nonexecutable test cases\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "sNonExecutableCount",
          "package": "language-boogie",
          "signature": "Int",
          "source": "src/Language-Boogie-Interpreter.html#Summary",
          "type": "function"
        },
        "index": {
          "description": "Number of nonexecutable test cases",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "sNonExecutableCount",
          "package": "language-boogie",
          "partial": "Non Executable Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:sNonExecutableCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of passing test cases\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "sPassCount",
          "package": "language-boogie",
          "signature": "Int",
          "source": "src/Language-Boogie-Interpreter.html#Summary",
          "type": "function"
        },
        "index": {
          "description": "Number of passing test cases",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "sPassCount",
          "package": "language-boogie",
          "partial": "Pass Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:sPassCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique failing test cases\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "sUniqueFailures",
          "package": "language-boogie",
          "signature": "[TestCase]",
          "source": "src/Language-Boogie-Interpreter.html#Summary",
          "type": "function"
        },
        "index": {
          "description": "Unique failing test cases",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "sUniqueFailures",
          "normalized": "[TestCase]",
          "package": "language-boogie",
          "partial": "Unique Failures",
          "signature": "[TestCase]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:sUniqueFailures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed test session summary\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "summaryDoc",
          "package": "language-boogie",
          "signature": "Summary -\u003e Doc",
          "source": "src/Language-Boogie-Interpreter.html#summaryDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed test session summary",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "summaryDoc",
          "normalized": "Summary-\u003eDoc",
          "package": "language-boogie",
          "partial": "Doc",
          "signature": "Summary-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:summaryDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailure the execution eded with, or Nothing if the execution ended in a valid state\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "tcFailure",
          "package": "language-boogie",
          "signature": "Maybe RuntimeFailure",
          "source": "src/Language-Boogie-Interpreter.html#TestCase",
          "type": "function"
        },
        "index": {
          "description": "Failure the execution eded with or Nothing if the execution ended in valid state",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "tcFailure",
          "package": "language-boogie",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:tcFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinal memory state (at the exit from the root procedure) \n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "tcMemory",
          "package": "language-boogie",
          "signature": "Memory",
          "source": "src/Language-Boogie-Interpreter.html#TestCase",
          "type": "function"
        },
        "index": {
          "description": "Final memory state at the exit from the root procedure",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "tcMemory",
          "package": "language-boogie",
          "partial": "Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:tcMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot procedure (entry point) of the execution\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "tcProcedure",
          "package": "language-boogie",
          "signature": "PSig",
          "source": "src/Language-Boogie-Interpreter.html#TestCase",
          "type": "function"
        },
        "index": {
          "description": "Root procedure entry point of the execution",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "tcProcedure",
          "package": "language-boogie",
          "partial": "Procedure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:tcProcedure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etestCaseSummary\u003c/a\u003e\u003c/code\u003e \u003ccode\u003edebug tc\u003c/code\u003e : Summary of \u003ccode\u003etc\u003c/code\u003e's inputs and outcome,\n displayed in user or debug format depending on \u003ccode\u003edebug\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "testCaseSummary",
          "package": "language-boogie",
          "signature": "Bool -\u003e TestCase -\u003e Doc",
          "source": "src/Language-Boogie-Interpreter.html#testCaseSummary",
          "type": "function"
        },
        "index": {
          "description": "testCaseSummary debug tc Summary of tc inputs and outcome displayed in user or debug format depending on debug",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "testCaseSummary",
          "normalized": "Bool-\u003eTestCase-\u003eDoc",
          "package": "language-boogie",
          "partial": "Case Summary",
          "signature": "Bool-\u003eTestCase-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:testCaseSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSummary of a set of test cases   \n\u003c/p\u003e",
          "module": "Language.Boogie.Interpreter",
          "name": "testSessionSummary",
          "package": "language-boogie",
          "signature": "[TestCase] -\u003e Summary",
          "source": "src/Language-Boogie-Interpreter.html#testSessionSummary",
          "type": "function"
        },
        "index": {
          "description": "Summary of set of test cases",
          "hierarchy": "Language Boogie Interpreter",
          "module": "Language.Boogie.Interpreter",
          "name": "testSessionSummary",
          "normalized": "[TestCase]-\u003eSummary",
          "package": "language-boogie",
          "partial": "Session Summary",
          "signature": "[TestCase]-\u003eSummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Interpreter.html#v:testSessionSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLattice of integer intervals\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.Intervals",
          "name": "Intervals",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Intervals.html",
          "type": "module"
        },
        "index": {
          "description": "Lattice of integer intervals",
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "Intervals",
          "package": "language-boogie",
          "partial": "Intervals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegers extended with infinity\n\u003c/p\u003e",
          "module": "Language.Boogie.Intervals",
          "name": "Extended",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Intervals.html#Extended",
          "type": "data"
        },
        "index": {
          "description": "Integers extended with infinity",
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "Extended",
          "package": "language-boogie",
          "partial": "Extended",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#t:Extended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger intervals\n\u003c/p\u003e",
          "module": "Language.Boogie.Intervals",
          "name": "Interval",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Intervals.html#Interval",
          "type": "data"
        },
        "index": {
          "description": "Integer intervals",
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "Interval",
          "package": "language-boogie",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLattice type class \n\u003c/p\u003e",
          "module": "Language.Boogie.Intervals",
          "name": "Lattice",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Intervals.html#Lattice",
          "type": "class"
        },
        "index": {
          "description": "Lattice type class",
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "Lattice",
          "package": "language-boogie",
          "partial": "Lattice",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#t:Lattice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision on integer intervals\n\u003c/p\u003e",
          "module": "Language.Boogie.Intervals",
          "name": "(//)",
          "package": "language-boogie",
          "signature": "Interval -\u003e Interval -\u003e Interval",
          "source": "src/Language-Boogie-Intervals.html#%2F%2F",
          "type": "function"
        },
        "index": {
          "description": "Division on integer intervals",
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "(//) //",
          "normalized": "Interval-\u003eInterval-\u003eInterval",
          "package": "language-boogie",
          "signature": "Interval-\u003eInterval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Intervals",
          "name": "(\u003c:)",
          "package": "language-boogie",
          "signature": "(\u003c:)",
          "source": "src/Language-Boogie-Intervals.html#%3C%3A",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "(\u003c:) \u003c:",
          "normalized": "()",
          "package": "language-boogie",
          "signature": "()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:-60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Intervals",
          "name": "Finite",
          "package": "language-boogie",
          "signature": "Finite Integer",
          "source": "src/Language-Boogie-Intervals.html#Extended",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "Finite",
          "package": "language-boogie",
          "partial": "Finite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:Finite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Intervals",
          "name": "Inf",
          "package": "language-boogie",
          "signature": "Inf",
          "source": "src/Language-Boogie-Intervals.html#Extended",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "Inf",
          "package": "language-boogie",
          "partial": "Inf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:Inf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Intervals",
          "name": "Interval",
          "package": "language-boogie",
          "signature": "Interval",
          "source": "src/Language-Boogie-Intervals.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "Interval",
          "package": "language-boogie",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Intervals",
          "name": "NegInf",
          "package": "language-boogie",
          "signature": "NegInf",
          "source": "src/Language-Boogie-Intervals.html#Extended",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "NegInf",
          "package": "language-boogie",
          "partial": "Neg Inf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:NegInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Intervals",
          "name": "bot",
          "package": "language-boogie",
          "signature": "bot",
          "source": "src/Language-Boogie-Intervals.html#bot",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "bot",
          "package": "language-boogie",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:bot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eextDiv\u003c/a\u003e\u003c/code\u003e \u003ccode\u003er a b\u003c/code\u003e : result of dividing \u003ccode\u003ea\u003c/code\u003e by \u003ccode\u003eb\u003c/code\u003e, rounded with \u003ccode\u003er\u003c/code\u003e in the finite case;\n dividing infinty by infinity yields \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Boogie.Intervals",
          "name": "extDiv",
          "package": "language-boogie",
          "signature": "(Ratio Integer -\u003e Integer) -\u003e Extended -\u003e Extended -\u003e Maybe Extended",
          "source": "src/Language-Boogie-Intervals.html#extDiv",
          "type": "function"
        },
        "index": {
          "description": "extDiv result of dividing by rounded with in the finite case dividing infinty by infinity yields Nothing",
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "extDiv",
          "normalized": "(Ratio Integer-\u003eInteger)-\u003eExtended-\u003eExtended-\u003eMaybe Extended",
          "package": "language-boogie",
          "partial": "Div",
          "signature": "(Ratio Integer-\u003eInteger)-\u003eExtended-\u003eExtended-\u003eMaybe Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:extDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs interval empty?\n\u003c/p\u003e",
          "module": "Language.Boogie.Intervals",
          "name": "isBottom",
          "package": "language-boogie",
          "signature": "Interval -\u003e Bool",
          "source": "src/Language-Boogie-Intervals.html#isBottom",
          "type": "function"
        },
        "index": {
          "description": "Is interval empty",
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "isBottom",
          "normalized": "Interval-\u003eBool",
          "package": "language-boogie",
          "partial": "Bottom",
          "signature": "Interval-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:isBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre both bounds of the interval finite?\n\u003c/p\u003e",
          "module": "Language.Boogie.Intervals",
          "name": "isBounded",
          "package": "language-boogie",
          "signature": "Interval -\u003e Bool",
          "source": "src/Language-Boogie-Intervals.html#isBounded",
          "type": "function"
        },
        "index": {
          "description": "Are both bounds of the interval finite",
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "isBounded",
          "normalized": "Interval-\u003eBool",
          "package": "language-boogie",
          "partial": "Bounded",
          "signature": "Interval-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:isBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Intervals",
          "name": "join",
          "package": "language-boogie",
          "signature": "join",
          "source": "src/Language-Boogie-Intervals.html#join",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "join",
          "package": "language-boogie",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Intervals",
          "name": "lower",
          "package": "language-boogie",
          "signature": "Extended",
          "source": "src/Language-Boogie-Intervals.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "lower",
          "package": "language-boogie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply function to all pairs of bounds coming from two different intervals\n\u003c/p\u003e",
          "module": "Language.Boogie.Intervals",
          "name": "mapBounds",
          "package": "language-boogie",
          "signature": "(Extended -\u003e Extended -\u003e t) -\u003e Interval -\u003e Interval -\u003e [t]",
          "source": "src/Language-Boogie-Intervals.html#mapBounds",
          "type": "function"
        },
        "index": {
          "description": "Apply function to all pairs of bounds coming from two different intervals",
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "mapBounds",
          "normalized": "(Extended-\u003eExtended-\u003ea)-\u003eInterval-\u003eInterval-\u003e[a]",
          "package": "language-boogie",
          "partial": "Bounds",
          "signature": "(Extended-\u003eExtended-\u003et)-\u003eInterval-\u003eInterval-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:mapBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Intervals",
          "name": "meet",
          "package": "language-boogie",
          "signature": "meet",
          "source": "src/Language-Boogie-Intervals.html#meet",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "meet",
          "package": "language-boogie",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:meet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll negative integers\n\u003c/p\u003e",
          "module": "Language.Boogie.Intervals",
          "name": "negatives",
          "package": "language-boogie",
          "signature": "Interval",
          "source": "src/Language-Boogie-Intervals.html#negatives",
          "type": "function"
        },
        "index": {
          "description": "All negative integers",
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "negatives",
          "package": "language-boogie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:negatives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll positive integers and 0\n\u003c/p\u003e",
          "module": "Language.Boogie.Intervals",
          "name": "nonNegatives",
          "package": "language-boogie",
          "signature": "Interval",
          "source": "src/Language-Boogie-Intervals.html#nonNegatives",
          "type": "function"
        },
        "index": {
          "description": "All positive integers and",
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "nonNegatives",
          "package": "language-boogie",
          "partial": "Negatives",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:nonNegatives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll netaive integers and 0\n\u003c/p\u003e",
          "module": "Language.Boogie.Intervals",
          "name": "nonPositives",
          "package": "language-boogie",
          "signature": "Interval",
          "source": "src/Language-Boogie-Intervals.html#nonPositives",
          "type": "function"
        },
        "index": {
          "description": "All netaive integers and",
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "nonPositives",
          "package": "language-boogie",
          "partial": "Positives",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:nonPositives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll positive integers\n\u003c/p\u003e",
          "module": "Language.Boogie.Intervals",
          "name": "positives",
          "package": "language-boogie",
          "signature": "Interval",
          "source": "src/Language-Boogie-Intervals.html#positives",
          "type": "function"
        },
        "index": {
          "description": "All positive integers",
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "positives",
          "package": "language-boogie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:positives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Intervals",
          "name": "top",
          "package": "language-boogie",
          "signature": "top",
          "source": "src/Language-Boogie-Intervals.html#top",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "top",
          "package": "language-boogie",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Intervals",
          "name": "upper",
          "package": "language-boogie",
          "signature": "Extended",
          "source": "src/Language-Boogie-Intervals.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Intervals",
          "module": "Language.Boogie.Intervals",
          "name": "upper",
          "package": "language-boogie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Intervals.html#v:upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious normal forms of Boolean expressions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.NormalForm",
          "name": "NormalForm",
          "package": "language-boogie",
          "source": "src/Language-Boogie-NormalForm.html",
          "type": "module"
        },
        "index": {
          "description": "Various normal forms of Boolean expressions",
          "hierarchy": "Language Boogie NormalForm",
          "module": "Language.Boogie.NormalForm",
          "name": "NormalForm",
          "package": "language-boogie",
          "partial": "Normal Form",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-NormalForm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation normal form of a Boolean expression:\n no negation above boolean connectives, quantifiers or relational operators;\n no boolean connectives except \u003ccode\u003e&&\u003c/code\u003e and \u003ccode\u003e||\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.NormalForm",
          "name": "negationNF",
          "package": "language-boogie",
          "signature": "Expression -\u003e Expression",
          "source": "src/Language-Boogie-NormalForm.html#negationNF",
          "type": "function"
        },
        "index": {
          "description": "Negation normal form of Boolean expression no negation above boolean connectives quantifiers or relational operators no boolean connectives except and",
          "hierarchy": "Language Boogie NormalForm",
          "module": "Language.Boogie.NormalForm",
          "name": "negationNF",
          "normalized": "Expression-\u003eExpression",
          "package": "language-boogie",
          "partial": "NF",
          "signature": "Expression-\u003eExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-NormalForm.html#v:negationNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation and prenex normal form of a Boolean expression\n\u003c/p\u003e",
          "module": "Language.Boogie.NormalForm",
          "name": "normalize",
          "package": "language-boogie",
          "signature": "Expression -\u003e Expression",
          "source": "src/Language-Boogie-NormalForm.html#normalize",
          "type": "function"
        },
        "index": {
          "description": "Negation and prenex normal form of Boolean expression",
          "hierarchy": "Language Boogie NormalForm",
          "module": "Language.Boogie.NormalForm",
          "name": "normalize",
          "normalized": "Expression-\u003eExpression",
          "package": "language-boogie",
          "signature": "Expression-\u003eExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-NormalForm.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrenex normal form of a Boolean expression:\n all quantifiers are pushed to the outside and any two quantifiers of the same kind in a row are glued together.\n Requires expression to be in the negation normal form.  \n\u003c/p\u003e",
          "module": "Language.Boogie.NormalForm",
          "name": "prenexNF",
          "package": "language-boogie",
          "signature": "Expression -\u003e Expression",
          "source": "src/Language-Boogie-NormalForm.html#prenexNF",
          "type": "function"
        },
        "index": {
          "description": "Prenex normal form of Boolean expression all quantifiers are pushed to the outside and any two quantifiers of the same kind in row are glued together Requires expression to be in the negation normal form",
          "hierarchy": "Language Boogie NormalForm",
          "module": "Language.Boogie.NormalForm",
          "name": "prenexNF",
          "normalized": "Expression-\u003eExpression",
          "package": "language-boogie",
          "partial": "NF",
          "signature": "Expression-\u003eExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-NormalForm.html#v:prenexNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsec-based parser for Boogie 2\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.Parser",
          "name": "Parser",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Parsec-based parser for Boogie",
          "hierarchy": "Language Boogie Parser",
          "module": "Language.Boogie.Parser",
          "name": "Parser",
          "package": "language-boogie",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-level declaration parser  \n\u003c/p\u003e",
          "module": "Language.Boogie.Parser",
          "name": "decl",
          "package": "language-boogie",
          "signature": "Parser Decl",
          "source": "src/Language-Boogie-Parser.html#decl",
          "type": "function"
        },
        "index": {
          "description": "Top-level declaration parser",
          "hierarchy": "Language Boogie Parser",
          "module": "Language.Boogie.Parser",
          "name": "decl",
          "package": "language-boogie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Parser.html#v:decl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression parser    \n\u003c/p\u003e",
          "module": "Language.Boogie.Parser",
          "name": "expression",
          "package": "language-boogie",
          "signature": "Parser Expression",
          "source": "src/Language-Boogie-Parser.html#expression",
          "type": "function"
        },
        "index": {
          "description": "Expression parser",
          "hierarchy": "Language Boogie Parser",
          "module": "Language.Boogie.Parser",
          "name": "expression",
          "package": "language-boogie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Parser.html#v:expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgram parser\n\u003c/p\u003e",
          "module": "Language.Boogie.Parser",
          "name": "program",
          "package": "language-boogie",
          "signature": "Parser Program",
          "source": "src/Language-Boogie-Parser.html#program",
          "type": "function"
        },
        "index": {
          "description": "Program parser",
          "hierarchy": "Language Boogie Parser",
          "module": "Language.Boogie.Parser",
          "name": "program",
          "package": "language-boogie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Parser.html#v:program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatement parser      \n\u003c/p\u003e",
          "module": "Language.Boogie.Parser",
          "name": "statement",
          "package": "language-boogie",
          "signature": "Parser Statement",
          "source": "src/Language-Boogie-Parser.html#statement",
          "type": "function"
        },
        "index": {
          "description": "Statement parser",
          "hierarchy": "Language Boogie Parser",
          "module": "Language.Boogie.Parser",
          "name": "statement",
          "package": "language-boogie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Parser.html#v:statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType parser  \n\u003c/p\u003e",
          "module": "Language.Boogie.Parser",
          "name": "type_",
          "package": "language-boogie",
          "signature": "Parser Type",
          "source": "src/Language-Boogie-Parser.html#type_",
          "type": "function"
        },
        "index": {
          "description": "Type parser",
          "hierarchy": "Language Boogie Parser",
          "module": "Language.Boogie.Parser",
          "name": "type_",
          "package": "language-boogie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Parser.html#v:type_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility for attaching source code positions to AST nodes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.Position",
          "name": "Position",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Position.html",
          "type": "module"
        },
        "index": {
          "description": "Utility for attaching source code positions to AST nodes",
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "Position",
          "package": "language-boogie",
          "partial": "Position",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnything with a source position attached \n\u003c/p\u003e",
          "module": "Language.Boogie.Position",
          "name": "Pos",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Position.html#Pos",
          "type": "data"
        },
        "index": {
          "description": "Anything with source position attached",
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "Pos",
          "package": "language-boogie",
          "partial": "Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eSourcePos\u003c/code\u003e represents source positions. It\n contains the name of the source (i.e. file name), a line number and\n a column number. \u003ccode\u003eSourcePos\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class. \n\u003c/p\u003e",
          "module": "Language.Boogie.Position",
          "name": "SourcePos",
          "package": "language-boogie",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type SourcePos represents source positions It contains the name of the source i.e file name line number and column number SourcePos is an instance of the Show Eq and Ord class",
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "SourcePos",
          "package": "language-boogie",
          "partial": "Source Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#t:SourcePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Position",
          "name": "Pos",
          "package": "language-boogie",
          "signature": "Pos",
          "source": "src/Language-Boogie-Position.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "Pos",
          "package": "language-boogie",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#v:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach position to a node    \n\u003c/p\u003e",
          "module": "Language.Boogie.Position",
          "name": "attachPos",
          "package": "language-boogie",
          "signature": "SourcePos -\u003e a -\u003e Pos a",
          "source": "src/Language-Boogie-Position.html#attachPos",
          "type": "function"
        },
        "index": {
          "description": "Attach position to node",
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "attachPos",
          "normalized": "SourcePos-\u003ea-\u003ePos a",
          "package": "language-boogie",
          "partial": "Pos",
          "signature": "SourcePos-\u003ea-\u003ePos a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#v:attachPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eattachPosBefore\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e : parser that behaves like \u003ccode\u003ep\u003c/code\u003e, but also attaches the source position before the first token it parsed to the result\n\u003c/p\u003e",
          "module": "Language.Boogie.Position",
          "name": "attachPosBefore",
          "package": "language-boogie",
          "signature": "Parser a -\u003e Parser (Pos a)",
          "source": "src/Language-Boogie-Position.html#attachPosBefore",
          "type": "function"
        },
        "index": {
          "description": "attachPosBefore parser that behaves like but also attaches the source position before the first token it parsed to the result",
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "attachPosBefore",
          "normalized": "Parser a-\u003eParser(Pos a)",
          "package": "language-boogie",
          "partial": "Pos Before",
          "signature": "Parser a-\u003eParser(Pos a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#v:attachPosBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach dummy position to a node\n\u003c/p\u003e",
          "module": "Language.Boogie.Position",
          "name": "gen",
          "package": "language-boogie",
          "signature": "a -\u003e Pos a",
          "source": "src/Language-Boogie-Position.html#gen",
          "type": "function"
        },
        "index": {
          "description": "Attach dummy position to node",
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "gen",
          "normalized": "a-\u003ePos a",
          "package": "language-boogie",
          "signature": "a-\u003ePos a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#v:gen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einheritPos\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef a\u003c/code\u003e : apply \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ea\u003c/code\u003e and attach \u003ccode\u003ea\u003c/code\u003e's position to the result\n\u003c/p\u003e",
          "module": "Language.Boogie.Position",
          "name": "inheritPos",
          "package": "language-boogie",
          "signature": "(Pos a -\u003e b) -\u003e Pos a -\u003e Pos b",
          "source": "src/Language-Boogie-Position.html#inheritPos",
          "type": "function"
        },
        "index": {
          "description": "inheritPos apply to and attach position to the result",
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "inheritPos",
          "normalized": "(Pos a-\u003eb)-\u003ePos a-\u003ePos b",
          "package": "language-boogie",
          "partial": "Pos",
          "signature": "(Pos a-\u003eb)-\u003ePos a-\u003ePos b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#v:inheritPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einheritPos2\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef a b\u003c/code\u003e : apply \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e and attach \u003ccode\u003ea\u003c/code\u003e's position to the result\n\u003c/p\u003e",
          "module": "Language.Boogie.Position",
          "name": "inheritPos2",
          "package": "language-boogie",
          "signature": "(Pos a -\u003e Pos b -\u003e c) -\u003e Pos a -\u003e Pos b -\u003e Pos c",
          "source": "src/Language-Boogie-Position.html#inheritPos2",
          "type": "function"
        },
        "index": {
          "description": "inheritPos2 apply to and and attach position to the result",
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "inheritPos2",
          "normalized": "(Pos a-\u003ePos b-\u003ec)-\u003ePos a-\u003ePos b-\u003ePos c",
          "package": "language-boogie",
          "partial": "Pos",
          "signature": "(Pos a-\u003ePos b-\u003ec)-\u003ePos a-\u003ePos b-\u003ePos c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#v:inheritPos2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDummy source position\n\u003c/p\u003e",
          "module": "Language.Boogie.Position",
          "name": "noPos",
          "package": "language-boogie",
          "signature": "SourcePos",
          "source": "src/Language-Boogie-Position.html#noPos",
          "type": "function"
        },
        "index": {
          "description": "Dummy source position",
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "noPos",
          "package": "language-boogie",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#v:noPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Position",
          "name": "node",
          "package": "language-boogie",
          "signature": "a",
          "source": "src/Language-Boogie-Position.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "node",
          "package": "language-boogie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#v:node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Position",
          "name": "position",
          "package": "language-boogie",
          "signature": "SourcePos",
          "source": "src/Language-Boogie-Position.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "position",
          "package": "language-boogie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#v:position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the column number from a source position. \n\u003c/p\u003e",
          "module": "Language.Boogie.Position",
          "name": "sourceColumn",
          "package": "language-boogie",
          "signature": "SourcePos -\u003e Column",
          "type": "function"
        },
        "index": {
          "description": "Extracts the column number from source position",
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "sourceColumn",
          "normalized": "SourcePos-\u003eColumn",
          "package": "language-boogie",
          "partial": "Column",
          "signature": "SourcePos-\u003eColumn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#v:sourceColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the line number from a source position. \n\u003c/p\u003e",
          "module": "Language.Boogie.Position",
          "name": "sourceLine",
          "package": "language-boogie",
          "signature": "SourcePos -\u003e Line",
          "type": "function"
        },
        "index": {
          "description": "Extracts the line number from source position",
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "sourceLine",
          "normalized": "SourcePos-\u003eLine",
          "package": "language-boogie",
          "partial": "Line",
          "signature": "SourcePos-\u003eLine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#v:sourceLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the name of the source from a source position. \n\u003c/p\u003e",
          "module": "Language.Boogie.Position",
          "name": "sourceName",
          "package": "language-boogie",
          "signature": "SourcePos -\u003e SourceName",
          "type": "function"
        },
        "index": {
          "description": "Extracts the name of the source from source position",
          "hierarchy": "Language Boogie Position",
          "module": "Language.Boogie.Position",
          "name": "sourceName",
          "normalized": "SourcePos-\u003eSourceName",
          "package": "language-boogie",
          "partial": "Name",
          "signature": "SourcePos-\u003eSourceName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Position.html#v:sourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty printer for Boogie 2\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "PrettyPrinter",
          "package": "language-boogie",
          "source": "src/Language-Boogie-PrettyPrinter.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty printer for Boogie",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "PrettyPrinter",
          "package": "language-boogie",
          "partial": "Pretty Printer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed abstract store\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "abstractStoreDoc",
          "package": "language-boogie",
          "signature": "AbstractStore -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#abstractStoreDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed abstract store",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "abstractStoreDoc",
          "normalized": "AbstractStore-\u003eDoc",
          "package": "language-boogie",
          "partial": "Store Doc",
          "signature": "AbstractStore-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:abstractStoreDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnclose in \u003c \u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "angles",
          "package": "language-boogie",
          "signature": "Doc -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#angles",
          "type": "function"
        },
        "index": {
          "description": "Enclose in",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "angles",
          "normalized": "Doc-\u003eDoc",
          "package": "language-boogie",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:angles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed binary operator\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "binOpDoc",
          "package": "language-boogie",
          "signature": "BinOp -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#binOpDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed binary operator",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "binOpDoc",
          "normalized": "BinOp-\u003eDoc",
          "package": "language-boogie",
          "partial": "Op Doc",
          "signature": "BinOp-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:binOpDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparate by commas\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "commaSep",
          "package": "language-boogie",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#commaSep",
          "type": "function"
        },
        "index": {
          "description": "Separate by commas",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "commaSep",
          "normalized": "[Doc]-\u003eDoc",
          "package": "language-boogie",
          "partial": "Sep",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:commaSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed constraint set  \n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "constraintSetDoc",
          "package": "language-boogie",
          "signature": "ConstraintSet -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#constraintSetDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed constraint set",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "constraintSetDoc",
          "normalized": "ConstraintSet-\u003eDoc",
          "package": "language-boogie",
          "partial": "Set Doc",
          "signature": "ConstraintSet-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:constraintSetDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed top-level declaration\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "declDoc",
          "package": "language-boogie",
          "signature": "Decl -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#declDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed top-level declaration",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "declDoc",
          "normalized": "Decl-\u003eDoc",
          "package": "language-boogie",
          "partial": "Doc",
          "signature": "Decl-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:declDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed expression  \n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "exprDoc",
          "package": "language-boogie",
          "signature": "Expression -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#exprDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed expression",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "exprDoc",
          "normalized": "Expression-\u003eDoc",
          "package": "language-boogie",
          "partial": "Doc",
          "signature": "Expression-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:exprDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efdefDoc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eisDef fdef\u003c/code\u003e : \u003ccode\u003efdef\u003c/code\u003e pretty-printed as definition if \u003ccode\u003eisDef\u003c/code\u003e and as constraint otherwise\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "fdefDoc",
          "package": "language-boogie",
          "signature": "Bool -\u003e FDef -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#fdefDoc",
          "type": "function"
        },
        "index": {
          "description": "fdefDoc isDef fdef fdef pretty-printed as definition if isDef and as constraint otherwise",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "fdefDoc",
          "normalized": "Bool-\u003eFDef-\u003eDoc",
          "package": "language-boogie",
          "partial": "Doc",
          "signature": "Bool-\u003eFDef-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:fdefDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.PrettyPrinter",
          "name": "nestDef",
          "package": "language-boogie",
          "signature": "Doc -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#nestDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "nestDef",
          "normalized": "Doc-\u003eDoc",
          "package": "language-boogie",
          "partial": "Def",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:nestDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNew line\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "newline",
          "package": "language-boogie",
          "signature": "Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#newline",
          "type": "function"
        },
        "index": {
          "description": "New line",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "newline",
          "package": "language-boogie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally produce a doc\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "option",
          "package": "language-boogie",
          "signature": "Bool -\u003e Doc -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#option",
          "type": "function"
        },
        "index": {
          "description": "Conditionally produce doc",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "option",
          "normalized": "Bool-\u003eDoc-\u003eDoc",
          "package": "language-boogie",
          "signature": "Bool-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value to doc\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "optionMaybe",
          "package": "language-boogie",
          "signature": "Maybe t -\u003e (t -\u003e Doc) -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#optionMaybe",
          "type": "function"
        },
        "index": {
          "description": "Convert Just value to doc",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "optionMaybe",
          "normalized": "Maybe a-\u003e(a-\u003eDoc)-\u003eDoc",
          "package": "language-boogie",
          "partial": "Maybe",
          "signature": "Maybe t-\u003e(t-\u003eDoc)-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:optionMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed program\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "programDoc",
          "package": "language-boogie",
          "signature": "Program -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#programDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed program",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "programDoc",
          "normalized": "Program-\u003eDoc",
          "package": "language-boogie",
          "partial": "Doc",
          "signature": "Program-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:programDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender document with tabs instead of spaces\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "renderWithTabs",
          "package": "language-boogie",
          "signature": "Doc -\u003e String",
          "source": "src/Language-Boogie-PrettyPrinter.html#renderWithTabs",
          "type": "function"
        },
        "index": {
          "description": "Render document with tabs instead of spaces",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "renderWithTabs",
          "normalized": "Doc-\u003eString",
          "package": "language-boogie",
          "partial": "With Tabs",
          "signature": "Doc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:renderWithTabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed function or procedure signature\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "sigDoc",
          "package": "language-boogie",
          "signature": "[Type] -\u003e [Type] -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#sigDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed function or procedure signature",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "sigDoc",
          "normalized": "[Type]-\u003e[Type]-\u003eDoc",
          "package": "language-boogie",
          "partial": "Doc",
          "signature": "[Type]-\u003e[Type]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:sigDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnclose in spaces    \n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "spaces",
          "package": "language-boogie",
          "signature": "Doc -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#spaces",
          "type": "function"
        },
        "index": {
          "description": "Enclose in spaces",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "spaces",
          "normalized": "Doc-\u003eDoc",
          "package": "language-boogie",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:spaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed statement\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "statementDoc",
          "package": "language-boogie",
          "signature": "Statement -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#statementDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed statement",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "statementDoc",
          "normalized": "Statement-\u003eDoc",
          "package": "language-boogie",
          "partial": "Doc",
          "signature": "Statement-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:statementDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed type\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "typeDoc",
          "package": "language-boogie",
          "signature": "Type -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#typeDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed type",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "typeDoc",
          "normalized": "Type-\u003eDoc",
          "package": "language-boogie",
          "partial": "Doc",
          "signature": "Type-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:typeDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed unary operator\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "unOpDoc",
          "package": "language-boogie",
          "signature": "UnOp -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#unOpDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed unary operator",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "unOpDoc",
          "normalized": "UnOp-\u003eDoc",
          "package": "language-boogie",
          "partial": "Op Doc",
          "signature": "UnOp-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:unOpDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparate by new lines\n\u003c/p\u003e",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "vsep",
          "package": "language-boogie",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Language-Boogie-PrettyPrinter.html#vsep",
          "type": "function"
        },
        "index": {
          "description": "Separate by new lines",
          "hierarchy": "Language Boogie PrettyPrinter",
          "module": "Language.Boogie.PrettyPrinter",
          "name": "vsep",
          "normalized": "[Doc]-\u003eDoc",
          "package": "language-boogie",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-PrettyPrinter.html#v:vsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTokens used in Boogie 2\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.Tokens",
          "name": "Tokens",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Tokens.html",
          "type": "module"
        },
        "index": {
          "description": "Tokens used in Boogie",
          "hierarchy": "Language Boogie Tokens",
          "module": "Language.Boogie.Tokens",
          "name": "Tokens",
          "package": "language-boogie",
          "partial": "Tokens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Tokens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of binary operators             \n\u003c/p\u003e",
          "module": "Language.Boogie.Tokens",
          "name": "binOpTokens",
          "package": "language-boogie",
          "signature": "[(BinOp, String)]",
          "source": "src/Language-Boogie-Tokens.html#binOpTokens",
          "type": "function"
        },
        "index": {
          "description": "Names of binary operators",
          "hierarchy": "Language Boogie Tokens",
          "module": "Language.Boogie.Tokens",
          "name": "binOpTokens",
          "normalized": "[(BinOp,String)]",
          "package": "language-boogie",
          "partial": "Op Tokens",
          "signature": "[(BinOp,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Tokens.html#v:binOpTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd of a multi-line comment\n\u003c/p\u003e",
          "module": "Language.Boogie.Tokens",
          "name": "commentEnd",
          "package": "language-boogie",
          "signature": "[Char]",
          "source": "src/Language-Boogie-Tokens.html#commentEnd",
          "type": "function"
        },
        "index": {
          "description": "End of multi-line comment",
          "hierarchy": "Language Boogie Tokens",
          "module": "Language.Boogie.Tokens",
          "name": "commentEnd",
          "normalized": "[Char]",
          "package": "language-boogie",
          "partial": "End",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Tokens.html#v:commentEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart of a single-line comment\n\u003c/p\u003e",
          "module": "Language.Boogie.Tokens",
          "name": "commentLine",
          "package": "language-boogie",
          "signature": "[Char]",
          "source": "src/Language-Boogie-Tokens.html#commentLine",
          "type": "function"
        },
        "index": {
          "description": "Start of single-line comment",
          "hierarchy": "Language Boogie Tokens",
          "module": "Language.Boogie.Tokens",
          "name": "commentLine",
          "normalized": "[Char]",
          "package": "language-boogie",
          "partial": "Line",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Tokens.html#v:commentLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart of a multi-line comment\n\u003c/p\u003e",
          "module": "Language.Boogie.Tokens",
          "name": "commentStart",
          "package": "language-boogie",
          "signature": "[Char]",
          "source": "src/Language-Boogie-Tokens.html#commentStart",
          "type": "function"
        },
        "index": {
          "description": "Start of multi-line comment",
          "hierarchy": "Language Boogie Tokens",
          "module": "Language.Boogie.Tokens",
          "name": "commentStart",
          "normalized": "[Char]",
          "package": "language-boogie",
          "partial": "Start",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Tokens.html#v:commentStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacters allowed in identifiers (in addition to letters and digits)\n\u003c/p\u003e",
          "module": "Language.Boogie.Tokens",
          "name": "identifierChars",
          "package": "language-boogie",
          "signature": "[Char]",
          "source": "src/Language-Boogie-Tokens.html#identifierChars",
          "type": "function"
        },
        "index": {
          "description": "Characters allowed in identifiers in addition to letters and digits",
          "hierarchy": "Language Boogie Tokens",
          "module": "Language.Boogie.Tokens",
          "name": "identifierChars",
          "normalized": "[Char]",
          "package": "language-boogie",
          "partial": "Chars",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Tokens.html#v:identifierChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeywords\n\u003c/p\u003e",
          "module": "Language.Boogie.Tokens",
          "name": "keywords",
          "package": "language-boogie",
          "signature": "[String]",
          "source": "src/Language-Boogie-Tokens.html#keywords",
          "type": "function"
        },
        "index": {
          "description": "Keywords",
          "hierarchy": "Language Boogie Tokens",
          "module": "Language.Boogie.Tokens",
          "name": "keywords",
          "normalized": "[String]",
          "package": "language-boogie",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Tokens.html#v:keywords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA character that is not allowed in identifiers (used for generating unique names)\n\u003c/p\u003e",
          "module": "Language.Boogie.Tokens",
          "name": "nonIdChar",
          "package": "language-boogie",
          "signature": "Char",
          "source": "src/Language-Boogie-Tokens.html#nonIdChar",
          "type": "function"
        },
        "index": {
          "description": "character that is not allowed in identifiers used for generating unique names",
          "hierarchy": "Language Boogie Tokens",
          "module": "Language.Boogie.Tokens",
          "name": "nonIdChar",
          "package": "language-boogie",
          "partial": "Id Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Tokens.html#v:nonIdChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopName\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eop table\u003c/code\u003e : lookup operator name in \u003ccode\u003etable\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Tokens",
          "name": "opName",
          "package": "language-boogie",
          "signature": "a1 -\u003e [(a1, a)] -\u003e a",
          "source": "src/Language-Boogie-Tokens.html#opName",
          "type": "function"
        },
        "index": {
          "description": "opName op table lookup operator name in table",
          "hierarchy": "Language Boogie Tokens",
          "module": "Language.Boogie.Tokens",
          "name": "opName",
          "normalized": "a-\u003e[(a,a)]-\u003ea",
          "package": "language-boogie",
          "partial": "Name",
          "signature": "a-\u003e[(a,a)]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Tokens.html#v:opName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther operators         \n\u003c/p\u003e",
          "module": "Language.Boogie.Tokens",
          "name": "otherOps",
          "package": "language-boogie",
          "signature": "[String]",
          "source": "src/Language-Boogie-Tokens.html#otherOps",
          "type": "function"
        },
        "index": {
          "description": "Other operators",
          "hierarchy": "Language Boogie Tokens",
          "module": "Language.Boogie.Tokens",
          "name": "otherOps",
          "normalized": "[String]",
          "package": "language-boogie",
          "partial": "Ops",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Tokens.html#v:otherOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of quantifiers    \n\u003c/p\u003e",
          "module": "Language.Boogie.Tokens",
          "name": "qOpTokens",
          "package": "language-boogie",
          "signature": "[(QOp, String)]",
          "source": "src/Language-Boogie-Tokens.html#qOpTokens",
          "type": "function"
        },
        "index": {
          "description": "Names of quantifiers",
          "hierarchy": "Language Boogie Tokens",
          "module": "Language.Boogie.Tokens",
          "name": "qOpTokens",
          "normalized": "[(QOp,String)]",
          "package": "language-boogie",
          "partial": "Op Tokens",
          "signature": "[(QOp,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Tokens.html#v:qOpTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of unary operators    \n\u003c/p\u003e",
          "module": "Language.Boogie.Tokens",
          "name": "unOpTokens",
          "package": "language-boogie",
          "signature": "[(UnOp, String)]",
          "source": "src/Language-Boogie-Tokens.html#unOpTokens",
          "type": "function"
        },
        "index": {
          "description": "Names of unary operators",
          "hierarchy": "Language Boogie Tokens",
          "module": "Language.Boogie.Tokens",
          "name": "unOpTokens",
          "normalized": "[(UnOp,String)]",
          "package": "language-boogie",
          "partial": "Op Tokens",
          "signature": "[(UnOp,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Tokens.html#v:unOpTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType checker for Boogie 2\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "TypeChecker",
          "package": "language-boogie",
          "source": "src/Language-Boogie-TypeChecker.html",
          "type": "module"
        },
        "index": {
          "description": "Type checker for Boogie",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "TypeChecker",
          "package": "language-boogie",
          "partial": "Type Checker",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTyping context\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "Context",
          "package": "language-boogie",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "data"
        },
        "index": {
          "description": "Typing context",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "Context",
          "package": "language-boogie",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType error with a source position and a pretty-printed message\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "TypeError",
          "package": "language-boogie",
          "source": "src/Language-Boogie-TypeChecker.html#TypeError",
          "type": "data"
        },
        "index": {
          "description": "Type error with source position and pretty-printed message",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "TypeError",
          "package": "language-boogie",
          "partial": "Type Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#t:TypeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.TypeChecker",
          "name": "Context",
          "package": "language-boogie",
          "signature": "Context",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "Context",
          "package": "language-boogie",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.TypeChecker",
          "name": "TypeError",
          "package": "language-boogie",
          "signature": "TypeError SourcePos Doc",
          "source": "src/Language-Boogie-TypeChecker.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "TypeError",
          "package": "language-boogie",
          "partial": "Type Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:TypeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll variables and constants (local-scope preferred)\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "allNames",
          "package": "language-boogie",
          "signature": "Context -\u003e Map Id Type",
          "source": "src/Language-Boogie-TypeChecker.html#allNames",
          "type": "function"
        },
        "index": {
          "description": "All variables and constants local-scope preferred",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "allNames",
          "normalized": "Context-\u003eMap Id Type",
          "package": "language-boogie",
          "partial": "Names",
          "signature": "Context-\u003eMap Id Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:allNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll variables that can have where clauses (everything except constants)\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "allVars",
          "package": "language-boogie",
          "signature": "Context -\u003e Map Id Type",
          "source": "src/Language-Boogie-TypeChecker.html#allVars",
          "type": "function"
        },
        "index": {
          "description": "All variables that can have where clauses everything except constants",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "allVars",
          "normalized": "Context-\u003eMap Id Type",
          "package": "language-boogie",
          "partial": "Vars",
          "signature": "Context-\u003eMap Id Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:allVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstant types (type synonyms resolved)\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxConstants",
          "package": "language-boogie",
          "signature": "Map Id Type",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "constant types type synonyms resolved",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxConstants",
          "package": "language-boogie",
          "partial": "Constants",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxConstants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elabels of all enclosing statements\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxEncLabels",
          "package": "language-boogie",
          "signature": "[Id]",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "labels of all enclosing statements",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxEncLabels",
          "normalized": "[Id]",
          "package": "language-boogie",
          "partial": "Enc Labels",
          "signature": "[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxEncLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of fresh type variables already generated\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxFreshTVCount",
          "package": "language-boogie",
          "signature": "Integer",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "number of fresh type variables already generated",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxFreshTVCount",
          "package": "language-boogie",
          "partial": "Fresh TVCount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxFreshTVCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction signatures (type synonyms resolved)\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxFunctions",
          "package": "language-boogie",
          "signature": "Map Id FSig",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "function signatures type synonyms resolved",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxFunctions",
          "package": "language-boogie",
          "partial": "Functions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eglobal variable types (type synonyms resolved)\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxGlobals",
          "package": "language-boogie",
          "signature": "Map Id Type",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "global variable types type synonyms resolved",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxGlobals",
          "package": "language-boogie",
          "partial": "Globals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxGlobals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis context inside a loop body?\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxInLoop",
          "package": "language-boogie",
          "signature": "Bool",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "is context inside loop body",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxInLoop",
          "package": "language-boogie",
          "partial": "In Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxInLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einput parameter types\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxIns",
          "package": "language-boogie",
          "signature": "Map Id Type",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "input parameter types",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxIns",
          "package": "language-boogie",
          "partial": "Ins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxIns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall labels of the enclosing procedure body\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxLabels",
          "package": "language-boogie",
          "signature": "[Id]",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "all labels of the enclosing procedure body",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxLabels",
          "normalized": "[Id]",
          "package": "language-boogie",
          "partial": "Labels",
          "signature": "[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocal variable types\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxLocals",
          "package": "language-boogie",
          "signature": "Map Id Type",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "local variable types",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxLocals",
          "package": "language-boogie",
          "partial": "Locals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxLocals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evariables in the modifies clause of the enclosing procedure\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxModifies",
          "package": "language-boogie",
          "signature": "[Id]",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "variables in the modifies clause of the enclosing procedure",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxModifies",
          "normalized": "[Id]",
          "package": "language-boogie",
          "partial": "Modifies",
          "signature": "[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxModifies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eposition in the source code\n Persistent context (not specific to any node, never gets restored):\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxPos",
          "package": "language-boogie",
          "signature": "SourcePos",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "position in the source code Persistent context not specific to any node never gets restored",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxPos",
          "package": "language-boogie",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprocedure signatures (type synonyms resolved)\n Local:\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxProcedures",
          "package": "language-boogie",
          "signature": "Map Id PSig",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "procedure signatures type synonyms resolved Local",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxProcedures",
          "package": "language-boogie",
          "partial": "Procedures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxProcedures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis the context two-state? (procedure body or postcondition)\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxTwoState",
          "package": "language-boogie",
          "signature": "Bool",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "is the context two-state procedure body or postcondition",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxTwoState",
          "package": "language-boogie",
          "partial": "Two State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxTwoState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype constructor arity\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxTypeConstructors",
          "package": "language-boogie",
          "signature": "Map Id Int",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "type constructor arity",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxTypeConstructors",
          "package": "language-boogie",
          "partial": "Type Constructors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxTypeConstructors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype synonym values\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxTypeSynonyms",
          "package": "language-boogie",
          "signature": "Map Id ([Id], Type)",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "type synonym values",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxTypeSynonyms",
          "normalized": "Map Id([Id],Type)",
          "package": "language-boogie",
          "partial": "Type Synonyms",
          "signature": "Map Id([Id],Type)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxTypeSynonyms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efree type variables\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxTypeVars",
          "package": "language-boogie",
          "signature": "[Id]",
          "source": "src/Language-Boogie-TypeChecker.html#Context",
          "type": "function"
        },
        "index": {
          "description": "free type variables",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "ctxTypeVars",
          "normalized": "[Id]",
          "package": "language-boogie",
          "partial": "Type Vars",
          "signature": "[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:ctxTypeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty context  \n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "emptyContext",
          "package": "language-boogie",
          "signature": "Context",
          "source": "src/Language-Boogie-TypeChecker.html#emptyContext",
          "type": "function"
        },
        "index": {
          "description": "Empty context",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "emptyContext",
          "package": "language-boogie",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:emptyContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eenterFunction\u003c/a\u003e\u003c/code\u003e \u003ccode\u003esig formals actuals mRetType c\u003c/code\u003e :\n Local context of function \u003ccode\u003esig\u003c/code\u003e with formal arguments \u003ccode\u003eformals\u003c/code\u003e and actual arguments \u003ccode\u003eactuals\u003c/code\u003e\n in a context where the return type is exprected to be \u003ccode\u003emRetType\u003c/code\u003e (if known)\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "enterFunction",
          "package": "language-boogie",
          "signature": "FSig -\u003e [Id] -\u003e [Expression] -\u003e Context -\u003e Context",
          "source": "src/Language-Boogie-TypeChecker.html#enterFunction",
          "type": "function"
        },
        "index": {
          "description": "enterFunction sig formals actuals mRetType Local context of function sig with formal arguments formals and actual arguments actuals in context where the return type is exprected to be mRetType if known",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "enterFunction",
          "normalized": "FSig-\u003e[Id]-\u003e[Expression]-\u003eContext-\u003eContext",
          "package": "language-boogie",
          "partial": "Function",
          "signature": "FSig-\u003e[Id]-\u003e[Expression]-\u003eContext-\u003eContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:enterFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eenterProcedure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003esig def actuals lhss c\u003c/code\u003e :\n Local context of procedure \u003ccode\u003esig\u003c/code\u003e with definition \u003ccode\u003edef\u003c/code\u003e and actual arguments \u003ccode\u003eactuals\u003c/code\u003e\n in a call with left-hand sides \u003ccode\u003elhss\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "enterProcedure",
          "package": "language-boogie",
          "signature": "PSig -\u003e PDef -\u003e [Expression] -\u003e [Expression] -\u003e Context -\u003e Context",
          "source": "src/Language-Boogie-TypeChecker.html#enterProcedure",
          "type": "function"
        },
        "index": {
          "description": "enterProcedure sig def actuals lhss Local context of procedure sig with definition def and actual arguments actuals in call with left-hand sides lhss",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "enterProcedure",
          "normalized": "PSig-\u003ePDef-\u003e[Expression]-\u003e[Expression]-\u003eContext-\u003eContext",
          "package": "language-boogie",
          "partial": "Procedure",
          "signature": "PSig-\u003ePDef-\u003e[Expression]-\u003e[Expression]-\u003eContext-\u003eContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:enterProcedure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal context of a quantified expression   \n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "enterQuantified",
          "package": "language-boogie",
          "signature": "[Id] -\u003e [IdType] -\u003e Context -\u003e Context",
          "source": "src/Language-Boogie-TypeChecker.html#enterQuantified",
          "type": "function"
        },
        "index": {
          "description": "Local context of quantified expression",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "enterQuantified",
          "normalized": "[Id]-\u003e[IdType]-\u003eContext-\u003eContext",
          "package": "language-boogie",
          "partial": "Quantified",
          "signature": "[Id]-\u003e[IdType]-\u003eContext-\u003eContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:enterQuantified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexprType\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec expr\u003c/code\u003e :\n Type of \u003ccode\u003eexpr\u003c/code\u003e in context \u003ccode\u003ec\u003c/code\u003e;\n fails if expr contains type errors.    \n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "exprType",
          "package": "language-boogie",
          "signature": "Context -\u003e Expression -\u003e Type",
          "source": "src/Language-Boogie-TypeChecker.html#exprType",
          "type": "function"
        },
        "index": {
          "description": "exprType expr Type of expr in context fails if expr contains type errors",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "exprType",
          "normalized": "Context-\u003eExpression-\u003eType",
          "package": "language-boogie",
          "partial": "Type",
          "signature": "Context-\u003eExpression-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:exprType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of functions and procedures\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "funProcNames",
          "package": "language-boogie",
          "signature": "Context -\u003e [Id]",
          "source": "src/Language-Boogie-TypeChecker.html#funProcNames",
          "type": "function"
        },
        "index": {
          "description": "Names of functions and procedures",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "funProcNames",
          "normalized": "Context-\u003e[Id]",
          "package": "language-boogie",
          "partial": "Proc Names",
          "signature": "Context-\u003e[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:funProcNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction signature by name\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "funSig",
          "package": "language-boogie",
          "signature": "Id -\u003e Context -\u003e FSig",
          "source": "src/Language-Boogie-TypeChecker.html#funSig",
          "type": "function"
        },
        "index": {
          "description": "Function signature by name",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "funSig",
          "normalized": "Id-\u003eContext-\u003eFSig",
          "package": "language-boogie",
          "partial": "Sig",
          "signature": "Id-\u003eContext-\u003eFSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:funSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal variables and constants\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "globalScope",
          "package": "language-boogie",
          "signature": "Context -\u003e Map Id Type",
          "source": "src/Language-Boogie-TypeChecker.html#globalScope",
          "type": "function"
        },
        "index": {
          "description": "Global variables and constants",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "globalScope",
          "normalized": "Context-\u003eMap Id Type",
          "package": "language-boogie",
          "partial": "Scope",
          "signature": "Context-\u003eMap Id Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:globalScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput parameters and local variables\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "localScope",
          "package": "language-boogie",
          "signature": "Context -\u003e Map Id Type",
          "source": "src/Language-Boogie-TypeChecker.html#localScope",
          "type": "function"
        },
        "index": {
          "description": "Input parameters and local variables",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "localScope",
          "normalized": "Context-\u003eMap Id Type",
          "package": "language-boogie",
          "partial": "Scope",
          "signature": "Context-\u003eMap Id Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:localScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll variables that can be assigned to (local variables and global variables)\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "mutableVars",
          "package": "language-boogie",
          "signature": "Context -\u003e Map Id Type",
          "source": "src/Language-Boogie-TypeChecker.html#mutableVars",
          "type": "function"
        },
        "index": {
          "description": "All variables that can be assigned to local variables and global variables",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "mutableVars",
          "normalized": "Context-\u003eMap Id Type",
          "package": "language-boogie",
          "partial": "Vars",
          "signature": "Context-\u003eMap Id Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:mutableVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcedure signature by name\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "procSig",
          "package": "language-boogie",
          "signature": "Id -\u003e Context -\u003e PSig",
          "source": "src/Language-Boogie-TypeChecker.html#procSig",
          "type": "function"
        },
        "index": {
          "description": "Procedure signature by name",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "procSig",
          "normalized": "Id-\u003eContext-\u003ePSig",
          "package": "language-boogie",
          "partial": "Sig",
          "signature": "Id-\u003eContext-\u003ePSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:procSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec t\u003c/code\u003e : type \u003ccode\u003et\u003c/code\u003e with all type synonyms resolved according to binding in \u003ccode\u003ec\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "resolve",
          "package": "language-boogie",
          "signature": "Context -\u003e Type -\u003e Type",
          "source": "src/Language-Boogie-TypeChecker.html#resolve",
          "type": "function"
        },
        "index": {
          "description": "resolve type with all type synonyms resolved according to binding in",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "resolve",
          "normalized": "Context-\u003eType-\u003eType",
          "package": "language-boogie",
          "signature": "Context-\u003eType-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:resolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.TypeChecker",
          "name": "setLocals",
          "package": "language-boogie",
          "signature": "Map Id Type -\u003e Context -\u003e Context",
          "source": "src/Language-Boogie-TypeChecker.html#setLocals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "setLocals",
          "normalized": "Map Id Type-\u003eContext-\u003eContext",
          "package": "language-boogie",
          "partial": "Locals",
          "signature": "Map Id Type-\u003eContext-\u003eContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:setLocals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck program and return type errors if present, and the global typing context otherwise \n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "typeCheckProgram",
          "package": "language-boogie",
          "signature": "Program -\u003e Either [TypeError] Context",
          "source": "src/Language-Boogie-TypeChecker.html#typeCheckProgram",
          "type": "function"
        },
        "index": {
          "description": "Check program and return type errors if present and the global typing context otherwise",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "typeCheckProgram",
          "normalized": "Program-\u003eEither[TypeError]Context",
          "package": "language-boogie",
          "partial": "Check Program",
          "signature": "Program-\u003eEither[TypeError]Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:typeCheckProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printed list of type errors\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "typeErrorsDoc",
          "package": "language-boogie",
          "signature": "[TypeError] -\u003e Doc",
          "source": "src/Language-Boogie-TypeChecker.html#typeErrorsDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printed list of type errors",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "typeErrorsDoc",
          "normalized": "[TypeError]-\u003eDoc",
          "package": "language-boogie",
          "partial": "Errors Doc",
          "signature": "[TypeError]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:typeErrorsDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType constructors and synonyms\n\u003c/p\u003e",
          "module": "Language.Boogie.TypeChecker",
          "name": "typeNames",
          "package": "language-boogie",
          "signature": "Context -\u003e [Id]",
          "source": "src/Language-Boogie-TypeChecker.html#typeNames",
          "type": "function"
        },
        "index": {
          "description": "Type constructors and synonyms",
          "hierarchy": "Language Boogie TypeChecker",
          "module": "Language.Boogie.TypeChecker",
          "name": "typeNames",
          "normalized": "Context-\u003e[Id]",
          "package": "language-boogie",
          "partial": "Names",
          "signature": "Context-\u003e[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-TypeChecker.html#v:typeNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious properties and transformations of Boogie program elements\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Boogie.Util",
          "name": "Util",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Various properties and transformations of Boogie program elements",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "Util",
          "package": "language-boogie",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract store: maps names to their constraints\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "AbstractStore",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Util.html#AbstractStore",
          "type": "type"
        },
        "index": {
          "description": "Abstract store maps names to their constraints",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "AbstractStore",
          "package": "language-boogie",
          "partial": "Abstract Store",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#t:AbstractStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstraint set: contains a list of definitions and a list of constraints\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "ConstraintSet",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Util.html#ConstraintSet",
          "type": "type"
        },
        "index": {
          "description": "Constraint set contains list of definitions and list of constraints",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "ConstraintSet",
          "package": "language-boogie",
          "partial": "Constraint Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#t:ConstraintSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction definition\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "FDef",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Util.html#FDef",
          "type": "data"
        },
        "index": {
          "description": "Function definition",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "FDef",
          "package": "language-boogie",
          "partial": "FDef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#t:FDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction signature\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "FSig",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Util.html#FSig",
          "type": "data"
        },
        "index": {
          "description": "Function signature",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "FSig",
          "package": "language-boogie",
          "partial": "FSig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#t:FSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcedure definition;\n a single procedure might have multiple definitions (one per body)\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "PDef",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Util.html#PDef",
          "type": "data"
        },
        "index": {
          "description": "Procedure definition single procedure might have multiple definitions one per body",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "PDef",
          "package": "language-boogie",
          "partial": "PDef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#t:PDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcedure signature \n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "PSig",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Util.html#PSig",
          "type": "data"
        },
        "index": {
          "description": "Procedure signature",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "PSig",
          "package": "language-boogie",
          "partial": "PSig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#t:PSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMapping from type variables to types\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "TypeBinding",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Util.html#TypeBinding",
          "type": "type"
        },
        "index": {
          "description": "Mapping from type variables to types",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "TypeBinding",
          "package": "language-boogie",
          "partial": "Type Binding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#t:TypeBinding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMapping from variables to expressions\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "VarBinding",
          "package": "language-boogie",
          "source": "src/Language-Boogie-Util.html#VarBinding",
          "type": "type"
        },
        "index": {
          "description": "Mapping from variables to expressions",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "VarBinding",
          "package": "language-boogie",
          "partial": "Var Binding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#t:VarBinding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|||)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C%7C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|||) |||",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|!=|)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C%21%3D%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|!=|) |!=|",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--33--61--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|%|)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C%25%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|%|) |%|",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--37--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|&|)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C%26%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|&|) |&|",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--38--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|*|)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C%2A%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|*|) |*|",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--42--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|+|)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C%2B%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|+|) |+|",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--43--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|-|)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C-%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|-|) |-|",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--45--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|/|)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C%2F%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|/|) |/|",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--47--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|\u003c|)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C%3C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|\u003c|) |\u003c|",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|\u003c=|)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C%3C%3D%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|\u003c=|) |\u003c=|",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--60--61--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|\u003c=\u003e|)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C%3C%3D%3E%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|\u003c=\u003e|) |\u003c=\u003e|",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--60--61--62--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|=|)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C%3D%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|=|) |=|",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--61--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|=\u003e|)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C%3D%3E%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|=\u003e|) |=\u003e|",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--61--62--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|\u003e|)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C%3E%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|\u003e|) |\u003e|",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--62--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "(|\u003e=|)",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#%7C%3E%3D%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "(|\u003e=|) |\u003e=|",
          "normalized": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:-124--62--61--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "FDef",
          "package": "language-boogie",
          "signature": "FDef",
          "source": "src/Language-Boogie-Util.html#FDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "FDef",
          "package": "language-boogie",
          "partial": "FDef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:FDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "FSig",
          "package": "language-boogie",
          "signature": "FSig",
          "source": "src/Language-Boogie-Util.html#FSig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "FSig",
          "package": "language-boogie",
          "partial": "FSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:FSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "PDef",
          "package": "language-boogie",
          "signature": "PDef",
          "source": "src/Language-Boogie-Util.html#PDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "PDef",
          "package": "language-boogie",
          "partial": "PDef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:PDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "PSig",
          "package": "language-boogie",
          "signature": "PSig",
          "source": "src/Language-Boogie-Util.html#PSig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "PSig",
          "package": "language-boogie",
          "partial": "PSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:PSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic version of \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e (executes boolean-valued computation for all arguments in a list until the first True is found) \n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "anyM",
          "package": "language-boogie",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m Bool",
          "source": "src/Language-Boogie-Util.html#anyM",
          "type": "function"
        },
        "index": {
          "description": "Monadic version of any executes boolean-valued computation for all arguments in list until the first True is found",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "anyM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb Bool",
          "package": "language-boogie",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:anyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eapplications\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eexpr\u003c/code\u003e : all function applications that occur in \u003ccode\u003eexpr\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "applications",
          "package": "language-boogie",
          "signature": "Expression -\u003e [(Id, [Expression])]",
          "source": "src/Language-Boogie-Util.html#applications",
          "type": "function"
        },
        "index": {
          "description": "applications expr all function applications that occur in expr",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "applications",
          "normalized": "Expression-\u003e[(Id,[Expression])]",
          "package": "language-boogie",
          "signature": "Expression-\u003e[(Id,[Expression])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:applications"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of abstract stores (values at the same key are concatenated)\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "asUnion",
          "package": "language-boogie",
          "signature": "AbstractStore -\u003e AbstractStore -\u003e AbstractStore",
          "source": "src/Language-Boogie-Util.html#asUnion",
          "type": "function"
        },
        "index": {
          "description": "Union of abstract stores values at the same key are concatenated",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "asUnion",
          "normalized": "AbstractStore-\u003eAbstractStore-\u003eAbstractStore",
          "package": "language-boogie",
          "partial": "Union",
          "signature": "AbstractStore-\u003eAbstractStore-\u003eAbstractStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:asUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "assume",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareStatement",
          "source": "src/Language-Boogie-Util.html#assume",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "assume",
          "normalized": "Pos BareExpression-\u003ePos BareStatement",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareStatement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:assume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake all postconditions in contracts free  \n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "assumePostconditions",
          "package": "language-boogie",
          "signature": "PSig -\u003e PSig",
          "source": "src/Language-Boogie-Util.html#assumePostconditions",
          "type": "function"
        },
        "index": {
          "description": "Make all postconditions in contracts free",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "assumePostconditions",
          "normalized": "PSig-\u003ePSig",
          "package": "language-boogie",
          "partial": "Postconditions",
          "signature": "PSig-\u003ePSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:assumePostconditions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake all preconditions in contracts free  \n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "assumePreconditions",
          "package": "language-boogie",
          "signature": "PSig -\u003e PSig",
          "source": "src/Language-Boogie-Util.html#assumePreconditions",
          "type": "function"
        },
        "index": {
          "description": "Make all preconditions in contracts free",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "assumePreconditions",
          "normalized": "PSig-\u003ePSig",
          "package": "language-boogie",
          "partial": "Preconditions",
          "signature": "PSig-\u003ePSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:assumePreconditions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a computation with state of type \u003ccode\u003et\u003c/code\u003e inside a computation with state of type \u003ccode\u003es\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "changeState",
          "package": "language-boogie",
          "signature": "(s -\u003e t) -\u003e (t -\u003e s -\u003e s) -\u003e StateT t m a -\u003e StateT s m a",
          "source": "src/Language-Boogie-Util.html#changeState",
          "type": "function"
        },
        "index": {
          "description": "Execute computation with state of type inside computation with state of type",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "changeState",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea-\u003ea)-\u003eStateT b c d-\u003eStateT a c d",
          "package": "language-boogie",
          "partial": "State",
          "signature": "(s-\u003et)-\u003e(t-\u003es-\u003es)-\u003eStateT t m a-\u003eStateT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:changeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "conjunction",
          "package": "language-boogie",
          "signature": "[Pos BareExpression] -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#conjunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "conjunction",
          "normalized": "[Pos BareExpression]-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "[Pos BareExpression]-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:conjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edeleteAll\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ekeys m\u003c/code\u003e : map \u003ccode\u003em\u003c/code\u003e with \u003ccode\u003ekeys\u003c/code\u003e removed from its domain\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "deleteAll",
          "package": "language-boogie",
          "signature": "[k] -\u003e Map k a -\u003e Map k a",
          "source": "src/Language-Boogie-Util.html#deleteAll",
          "type": "function"
        },
        "index": {
          "description": "deleteAll keys map with keys removed from its domain",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "deleteAll",
          "normalized": "[a]-\u003eMap a b-\u003eMap a b",
          "package": "language-boogie",
          "partial": "All",
          "signature": "[k]-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:deleteAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "eneg",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#eneg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "eneg",
          "normalized": "Pos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:eneg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "enot",
          "package": "language-boogie",
          "signature": "Pos BareExpression -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#enot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "enot",
          "normalized": "Pos BareExpression-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Pos BareExpression-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:enot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexprSubst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ebinding e\u003c/code\u003e : substitute all free variables in \u003ccode\u003ee\u003c/code\u003e according to \u003ccode\u003ebinding\u003c/code\u003e;\n all variables in the domain of \u003ccode\u003ebindings\u003c/code\u003e are considered free if not explicitly bound\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "exprSubst",
          "package": "language-boogie",
          "signature": "VarBinding -\u003e Expression -\u003e Expression",
          "source": "src/Language-Boogie-Util.html#exprSubst",
          "type": "function"
        },
        "index": {
          "description": "exprSubst binding substitute all free variables in according to binding all variables in the domain of bindings are considered free if not explicitly bound",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "exprSubst",
          "normalized": "VarBinding-\u003eExpression-\u003eExpression",
          "package": "language-boogie",
          "partial": "Subst",
          "signature": "VarBinding-\u003eExpression-\u003eExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:exprSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArguments (types may be less general than in the corresponding signature)\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "fdefArgs",
          "package": "language-boogie",
          "signature": "[IdType]",
          "source": "src/Language-Boogie-Util.html#FDef",
          "type": "function"
        },
        "index": {
          "description": "Arguments types may be less general than in the corresponding signature",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "fdefArgs",
          "normalized": "[IdType]",
          "package": "language-boogie",
          "partial": "Args",
          "signature": "[IdType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:fdefArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBody \n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "fdefBody",
          "package": "language-boogie",
          "signature": "Expression",
          "source": "src/Language-Boogie-Util.html#FDef",
          "type": "function"
        },
        "index": {
          "description": "Body",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "fdefBody",
          "package": "language-boogie",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:fdefBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCondition under which the definition applies\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "fdefGuard",
          "package": "language-boogie",
          "signature": "Expression",
          "source": "src/Language-Boogie-Util.html#FDef",
          "type": "function"
        },
        "index": {
          "description": "Condition under which the definition applies",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "fdefGuard",
          "package": "language-boogie",
          "partial": "Guard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:fdefGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntity to which the definition belongs\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "fdefName",
          "package": "language-boogie",
          "signature": "Id",
          "source": "src/Language-Boogie-Util.html#FDef",
          "type": "function"
        },
        "index": {
          "description": "Entity to which the definition belongs",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "fdefName",
          "package": "language-boogie",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:fdefName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType variables\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "fdefTV",
          "package": "language-boogie",
          "signature": "[Id]",
          "source": "src/Language-Boogie-Util.html#FDef",
          "type": "function"
        },
        "index": {
          "description": "Type variables",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "fdefTV",
          "normalized": "[Id]",
          "package": "language-boogie",
          "partial": "TV",
          "signature": "[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:fdefTV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree variables in an expression, in old state\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "freeOldVars",
          "package": "language-boogie",
          "signature": "Expression -\u003e [Id]",
          "source": "src/Language-Boogie-Util.html#freeOldVars",
          "type": "function"
        },
        "index": {
          "description": "Free variables in an expression in old state",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "freeOldVars",
          "normalized": "Expression-\u003e[Id]",
          "package": "language-boogie",
          "partial": "Old Vars",
          "signature": "Expression-\u003e[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:freeOldVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efreeSelections\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eexpr\u003c/code\u003e : all map selections that occur in \u003ccode\u003eexpr\u003c/code\u003e, where the map is a free variable\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "freeSelections",
          "package": "language-boogie",
          "signature": "Expression -\u003e [(Id, [Expression])]",
          "source": "src/Language-Boogie-Util.html#freeSelections",
          "type": "function"
        },
        "index": {
          "description": "freeSelections expr all map selections that occur in expr where the map is free variable",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "freeSelections",
          "normalized": "Expression-\u003e[(Id,[Expression])]",
          "package": "language-boogie",
          "partial": "Selections",
          "signature": "Expression-\u003e[(Id,[Expression])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:freeSelections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree variables in an expression, in current state\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "freeVars",
          "package": "language-boogie",
          "signature": "Expression -\u003e [Id]",
          "source": "src/Language-Boogie-Util.html#freeVars",
          "type": "function"
        },
        "index": {
          "description": "Free variables in an expression in current state",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "freeVars",
          "normalized": "Expression-\u003e[Id]",
          "package": "language-boogie",
          "partial": "Vars",
          "signature": "Expression-\u003e[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:freeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree variables in an expression, referred to in current state and old state\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "freeVarsTwoState",
          "package": "language-boogie",
          "signature": "Expression -\u003e ([Id], [Id])",
          "source": "src/Language-Boogie-Util.html#freeVarsTwoState",
          "type": "function"
        },
        "index": {
          "description": "Free variables in an expression referred to in current state and old state",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "freeVarsTwoState",
          "normalized": "Expression-\u003e([Id],[Id])",
          "package": "language-boogie",
          "partial": "Vars Two State",
          "signature": "Expression-\u003e([Id],[Id])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:freeVarsTwoState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'freshTVName \u003ccode\u003en\u003c/code\u003e : Fresh type variable with a unique identifier n\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "freshTVName",
          "package": "language-boogie",
          "signature": "a -\u003e [Char]",
          "source": "src/Language-Boogie-Util.html#freshTVName",
          "type": "function"
        },
        "index": {
          "description": "freshTVName Fresh type variable with unique identifier",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "freshTVName",
          "normalized": "a-\u003e[Char]",
          "package": "language-boogie",
          "partial": "TVName",
          "signature": "a-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:freshTVName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the element out of a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e and throw an error if its argument is \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "fromRight",
          "package": "language-boogie",
          "signature": "Either a b -\u003e b",
          "source": "src/Language-Boogie-Util.html#fromRight",
          "type": "function"
        },
        "index": {
          "description": "Extract the element out of Right and throw an error if its argument is Left",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "fromRight",
          "normalized": "Either a b-\u003eb",
          "package": "language-boogie",
          "partial": "Right",
          "signature": "Either a b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:fromRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efromTVNames\u003c/a\u003e\u003c/code\u003e \u003ccode\u003etvs tvs'\u003c/code\u003e : type binding that replaces type variables \u003ccode\u003etvs\u003c/code\u003e with type variables \u003ccode\u003etvs'\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "fromTVNames",
          "package": "language-boogie",
          "signature": "[Id] -\u003e [Id] -\u003e TypeBinding",
          "source": "src/Language-Boogie-Util.html#fromTVNames",
          "type": "function"
        },
        "index": {
          "description": "fromTVNames tvs tvs type binding that replaces type variables tvs with type variables tvs",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "fromTVNames",
          "normalized": "[Id]-\u003e[Id]-\u003eTypeBinding",
          "package": "language-boogie",
          "partial": "TVNames",
          "signature": "[Id]-\u003e[Id]-\u003eTypeBinding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:fromTVNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArgument types\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "fsigArgTypes",
          "package": "language-boogie",
          "signature": "[Type]",
          "source": "src/Language-Boogie-Util.html#FSig",
          "type": "function"
        },
        "index": {
          "description": "Argument types",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "fsigArgTypes",
          "normalized": "[Type]",
          "package": "language-boogie",
          "partial": "Arg Types",
          "signature": "[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:fsigArgTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap type as a function signature \n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "fsigFromType",
          "package": "language-boogie",
          "signature": "Type -\u003e FSig",
          "source": "src/Language-Boogie-Util.html#fsigFromType",
          "type": "function"
        },
        "index": {
          "description": "Map type as function signature",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "fsigFromType",
          "normalized": "Type-\u003eFSig",
          "package": "language-boogie",
          "partial": "From Type",
          "signature": "Type-\u003eFSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:fsigFromType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction name\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "fsigName",
          "package": "language-boogie",
          "signature": "Id",
          "source": "src/Language-Boogie-Util.html#FSig",
          "type": "function"
        },
        "index": {
          "description": "Function name",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "fsigName",
          "package": "language-boogie",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:fsigName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn type\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "fsigRetType",
          "package": "language-boogie",
          "signature": "Type",
          "source": "src/Language-Boogie-Util.html#FSig",
          "type": "function"
        },
        "index": {
          "description": "Return type",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "fsigRetType",
          "package": "language-boogie",
          "partial": "Ret Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:fsigRetType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction signature as a map type  \n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "fsigType",
          "package": "language-boogie",
          "signature": "FSig -\u003e Type",
          "source": "src/Language-Boogie-Util.html#fsigType",
          "type": "function"
        },
        "index": {
          "description": "Function signature as map type",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "fsigType",
          "normalized": "FSig-\u003eType",
          "package": "language-boogie",
          "partial": "Type",
          "signature": "FSig-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:fsigType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType variables\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "fsigTypeVars",
          "package": "language-boogie",
          "signature": "[Id]",
          "source": "src/Language-Boogie-Util.html#FSig",
          "type": "function"
        },
        "index": {
          "description": "Type variables",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "fsigTypeVars",
          "normalized": "[Id]",
          "package": "language-boogie",
          "partial": "Type Vars",
          "signature": "[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:fsigTypeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "internalError",
          "package": "language-boogie",
          "signature": "[Char] -\u003e t",
          "source": "src/Language-Boogie-Util.html#internalError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "internalError",
          "normalized": "[Char]-\u003ea",
          "package": "language-boogie",
          "partial": "Error",
          "signature": "[Char]-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:internalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einterval\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(lo, hi)\u003c/code\u003e : Interval from \u003ccode\u003elo\u003c/code\u003e to \u003ccode\u003ehi\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "interval",
          "package": "language-boogie",
          "signature": "(t, t) -\u003e [t]",
          "source": "src/Language-Boogie-Util.html#interval",
          "type": "function"
        },
        "index": {
          "description": "interval lo hi Interval from lo to hi",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "interval",
          "normalized": "(a,a)-\u003e[a]",
          "package": "language-boogie",
          "signature": "(t,t)-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ex\u003c/code\u003e \u003ccode\u003e\u003ca\u003eisFreeIn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e : does \u003ccode\u003ex\u003c/code\u003e occur free in \u003ccode\u003et\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "isFreeIn",
          "package": "language-boogie",
          "signature": "Id -\u003e Type -\u003e Bool",
          "source": "src/Language-Boogie-Util.html#isFreeIn",
          "type": "function"
        },
        "index": {
          "description": "isFreeIn does occur free in",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "isFreeIn",
          "normalized": "Id-\u003eType-\u003eBool",
          "package": "language-boogie",
          "partial": "Free In",
          "signature": "Id-\u003eType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:isFreeIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eisTypeVar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003econtextTypeVars v\u003c/code\u003e : Is \u003ccode\u003ev\u003c/code\u003e either one of  \u003ccode\u003econtextTypeVars\u003c/code\u003e or a freash type variable generated by \u003ccode\u003e\u003ca\u003efreshTVName\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "isTypeVar",
          "package": "language-boogie",
          "signature": "[Id] -\u003e Id -\u003e Bool",
          "source": "src/Language-Boogie-Util.html#isTypeVar",
          "type": "function"
        },
        "index": {
          "description": "isTypeVar contextTypeVars Is either one of contextTypeVars or freash type variable generated by freshTVName",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "isTypeVar",
          "normalized": "[Id]-\u003eId-\u003eBool",
          "package": "language-boogie",
          "partial": "Type Var",
          "signature": "[Id]-\u003eId-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:isTypeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "mapItwType",
          "package": "language-boogie",
          "signature": "(Type -\u003e Type) -\u003e IdTypeWhere -\u003e IdTypeWhere",
          "source": "src/Language-Boogie-Util.html#mapItwType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "mapItwType",
          "normalized": "(Type-\u003eType)-\u003eIdTypeWhere-\u003eIdTypeWhere",
          "package": "language-boogie",
          "partial": "Itw Type",
          "signature": "(Type-\u003eType)-\u003eIdTypeWhere-\u003eIdTypeWhere",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:mapItwType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodifies\u003c/a\u003e\u003c/code\u003e \u003ccode\u003especs\u003c/code\u003e : all modifies clauses in \u003ccode\u003especs\u003c/code\u003e   \n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "modifies",
          "package": "language-boogie",
          "signature": "[Contract] -\u003e [Id]",
          "source": "src/Language-Boogie-Util.html#modifies",
          "type": "function"
        },
        "index": {
          "description": "modifies specs all modifies clauses in specs",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "modifies",
          "normalized": "[Contract]-\u003e[Id]",
          "package": "language-boogie",
          "signature": "[Contract]-\u003e[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:modifies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Boogie.Util",
          "name": "num",
          "package": "language-boogie",
          "signature": "Integer -\u003e Pos BareExpression",
          "source": "src/Language-Boogie-Util.html#num",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "num",
          "normalized": "Integer-\u003ePos BareExpression",
          "package": "language-boogie",
          "signature": "Integer-\u003ePos BareExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eparamSubst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003esig def\u003c/code\u003e :\n Substitute parameter names from \u003ccode\u003esig\u003c/code\u003e in an expression with their equivalents from \u003ccode\u003edef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "paramSubst",
          "package": "language-boogie",
          "signature": "PSig -\u003e PDef -\u003e Expression -\u003e Expression",
          "source": "src/Language-Boogie-Util.html#paramSubst",
          "type": "function"
        },
        "index": {
          "description": "paramSubst sig def Substitute parameter names from sig in an expression with their equivalents from def",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "paramSubst",
          "normalized": "PSig-\u003ePDef-\u003eExpression-\u003eExpression",
          "package": "language-boogie",
          "partial": "Subst",
          "signature": "PSig-\u003ePDef-\u003eExpression-\u003eExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:paramSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBody\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "pdefBody",
          "package": "language-boogie",
          "signature": "BasicBody",
          "source": "src/Language-Boogie-Util.html#PDef",
          "type": "function"
        },
        "index": {
          "description": "Body",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "pdefBody",
          "package": "language-boogie",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:pdefBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstraints on local names\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "pdefConstraints",
          "package": "language-boogie",
          "signature": "AbstractStore",
          "source": "src/Language-Boogie-Util.html#PDef",
          "type": "function"
        },
        "index": {
          "description": "Constraints on local names",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "pdefConstraints",
          "package": "language-boogie",
          "partial": "Constraints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:pdefConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn-parameter names (in the same order as \u003ccode\u003e\u003ca\u003epsigArgs\u003c/a\u003e\u003c/code\u003e in the corresponding signature)\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "pdefIns",
          "package": "language-boogie",
          "signature": "[Id]",
          "source": "src/Language-Boogie-Util.html#PDef",
          "type": "function"
        },
        "index": {
          "description": "In-parameter names in the same order as psigArgs in the corresponding signature",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "pdefIns",
          "normalized": "[Id]",
          "package": "language-boogie",
          "partial": "Ins",
          "signature": "[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:pdefIns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll local names of a procedure definition  \n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "pdefLocals",
          "package": "language-boogie",
          "signature": "PDef -\u003e [Id]",
          "source": "src/Language-Boogie-Util.html#pdefLocals",
          "type": "function"
        },
        "index": {
          "description": "All local names of procedure definition",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "pdefLocals",
          "normalized": "PDef-\u003e[Id]",
          "package": "language-boogie",
          "partial": "Locals",
          "signature": "PDef-\u003e[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:pdefLocals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOut-parameter names (in the same order as \u003ccode\u003e\u003ca\u003epsigRets\u003c/a\u003e\u003c/code\u003e in the corresponding signature)\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "pdefOuts",
          "package": "language-boogie",
          "signature": "[Id]",
          "source": "src/Language-Boogie-Util.html#PDef",
          "type": "function"
        },
        "index": {
          "description": "Out-parameter names in the same order as psigRets in the corresponding signature",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "pdefOuts",
          "normalized": "[Id]",
          "package": "language-boogie",
          "partial": "Outs",
          "signature": "[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:pdefOuts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre any parameter names in this definition different for the procedure signature? (used for optimizing parameter renaming, True is a safe default)\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "pdefParamsRenamed",
          "package": "language-boogie",
          "signature": "Bool",
          "source": "src/Language-Boogie-Util.html#PDef",
          "type": "function"
        },
        "index": {
          "description": "Are any parameter names in this definition different for the procedure signature used for optimizing parameter renaming True is safe default",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "pdefParamsRenamed",
          "package": "language-boogie",
          "partial": "Params Renamed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:pdefParamsRenamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation of the (first line of the) procedure definition in the source\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "pdefPos",
          "package": "language-boogie",
          "signature": "SourcePos",
          "source": "src/Language-Boogie-Util.html#PDef",
          "type": "function"
        },
        "index": {
          "description": "Location of the first line of the procedure definition in the source",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "pdefPos",
          "package": "language-boogie",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:pdefPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epostconditions\u003c/a\u003e\u003c/code\u003e \u003ccode\u003especs\u003c/code\u003e : all postcondition clauses in \u003ccode\u003especs\u003c/code\u003e     \n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "postconditions",
          "package": "language-boogie",
          "signature": "[Contract] -\u003e [SpecClause]",
          "source": "src/Language-Boogie-Util.html#postconditions",
          "type": "function"
        },
        "index": {
          "description": "postconditions specs all postcondition clauses in specs",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "postconditions",
          "normalized": "[Contract]-\u003e[SpecClause]",
          "package": "language-boogie",
          "signature": "[Contract]-\u003e[SpecClause]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:postconditions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epreconditions\u003c/a\u003e\u003c/code\u003e \u003ccode\u003especs\u003c/code\u003e : all precondition clauses in \u003ccode\u003especs\u003c/code\u003e  \n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "preconditions",
          "package": "language-boogie",
          "signature": "[Contract] -\u003e [SpecClause]",
          "source": "src/Language-Boogie-Util.html#preconditions",
          "type": "function"
        },
        "index": {
          "description": "preconditions specs all precondition clauses in specs",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "preconditions",
          "normalized": "[Contract]-\u003e[SpecClause]",
          "package": "language-boogie",
          "signature": "[Contract]-\u003e[SpecClause]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:preconditions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes of in-parameters of a procedure signature\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "psigArgTypes",
          "package": "language-boogie",
          "signature": "PSig -\u003e [Type]",
          "source": "src/Language-Boogie-Util.html#psigArgTypes",
          "type": "function"
        },
        "index": {
          "description": "Types of in-parameters of procedure signature",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "psigArgTypes",
          "normalized": "PSig-\u003e[Type]",
          "package": "language-boogie",
          "partial": "Arg Types",
          "signature": "PSig-\u003e[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:psigArgTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn-parameters\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "psigArgs",
          "package": "language-boogie",
          "signature": "[IdTypeWhere]",
          "source": "src/Language-Boogie-Util.html#PSig",
          "type": "function"
        },
        "index": {
          "description": "In-parameters",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "psigArgs",
          "normalized": "[IdTypeWhere]",
          "package": "language-boogie",
          "partial": "Args",
          "signature": "[IdTypeWhere]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:psigArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContracts\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "psigContracts",
          "package": "language-boogie",
          "signature": "[Contract]",
          "source": "src/Language-Boogie-Util.html#PSig",
          "type": "function"
        },
        "index": {
          "description": "Contracts",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "psigContracts",
          "normalized": "[Contract]",
          "package": "language-boogie",
          "partial": "Contracts",
          "signature": "[Contract]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:psigContracts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePostconditions of a procedure signature\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "psigEnsures",
          "package": "language-boogie",
          "signature": "PSig -\u003e [SpecClause]",
          "source": "src/Language-Boogie-Util.html#psigEnsures",
          "type": "function"
        },
        "index": {
          "description": "Postconditions of procedure signature",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "psigEnsures",
          "normalized": "PSig-\u003e[SpecClause]",
          "package": "language-boogie",
          "partial": "Ensures",
          "signature": "PSig-\u003e[SpecClause]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:psigEnsures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies clauses of a procedure signature\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "psigModifies",
          "package": "language-boogie",
          "signature": "PSig -\u003e [Id]",
          "source": "src/Language-Boogie-Util.html#psigModifies",
          "type": "function"
        },
        "index": {
          "description": "Modifies clauses of procedure signature",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "psigModifies",
          "normalized": "PSig-\u003e[Id]",
          "package": "language-boogie",
          "partial": "Modifies",
          "signature": "PSig-\u003e[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:psigModifies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcedure name\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "psigName",
          "package": "language-boogie",
          "signature": "Id",
          "source": "src/Language-Boogie-Util.html#PSig",
          "type": "function"
        },
        "index": {
          "description": "Procedure name",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "psigName",
          "package": "language-boogie",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:psigName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll parameters of a procedure signature \n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "psigParams",
          "package": "language-boogie",
          "signature": "PSig -\u003e [IdTypeWhere]",
          "source": "src/Language-Boogie-Util.html#psigParams",
          "type": "function"
        },
        "index": {
          "description": "All parameters of procedure signature",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "psigParams",
          "normalized": "PSig-\u003e[IdTypeWhere]",
          "package": "language-boogie",
          "partial": "Params",
          "signature": "PSig-\u003e[IdTypeWhere]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:psigParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreconditions of a procedure signature\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "psigRequires",
          "package": "language-boogie",
          "signature": "PSig -\u003e [SpecClause]",
          "source": "src/Language-Boogie-Util.html#psigRequires",
          "type": "function"
        },
        "index": {
          "description": "Preconditions of procedure signature",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "psigRequires",
          "normalized": "PSig-\u003e[SpecClause]",
          "package": "language-boogie",
          "partial": "Requires",
          "signature": "PSig-\u003e[SpecClause]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:psigRequires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes of out-parameters of a procedure signature\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "psigRetTypes",
          "package": "language-boogie",
          "signature": "PSig -\u003e [Type]",
          "source": "src/Language-Boogie-Util.html#psigRetTypes",
          "type": "function"
        },
        "index": {
          "description": "Types of out-parameters of procedure signature",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "psigRetTypes",
          "normalized": "PSig-\u003e[Type]",
          "package": "language-boogie",
          "partial": "Ret Types",
          "signature": "PSig-\u003e[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:psigRetTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOut-parameters\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "psigRets",
          "package": "language-boogie",
          "signature": "[IdTypeWhere]",
          "source": "src/Language-Boogie-Util.html#PSig",
          "type": "function"
        },
        "index": {
          "description": "Out-parameters",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "psigRets",
          "normalized": "[IdTypeWhere]",
          "package": "language-boogie",
          "partial": "Rets",
          "signature": "[IdTypeWhere]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:psigRets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcedure signature as a map type\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "psigType",
          "package": "language-boogie",
          "signature": "PSig -\u003e Type",
          "source": "src/Language-Boogie-Util.html#psigType",
          "type": "function"
        },
        "index": {
          "description": "Procedure signature as map type",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "psigType",
          "normalized": "PSig-\u003eType",
          "package": "language-boogie",
          "partial": "Type",
          "signature": "PSig-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:psigType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType variables\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "psigTypeVars",
          "package": "language-boogie",
          "signature": "[Id]",
          "source": "src/Language-Boogie-Util.html#PSig",
          "type": "function"
        },
        "index": {
          "description": "Type variables",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "psigTypeVars",
          "normalized": "[Id]",
          "package": "language-boogie",
          "partial": "Type Vars",
          "signature": "[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:psigTypeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eremoveDomain\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ekeys m\u003c/code\u003e : map \u003ccode\u003em\u003c/code\u003e with the set of keys \u003ccode\u003ekeys\u003c/code\u003e removed from its domain\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "removeDomain",
          "package": "language-boogie",
          "signature": "Set k -\u003e Map k a -\u003e Map k a",
          "source": "src/Language-Boogie-Util.html#removeDomain",
          "type": "function"
        },
        "index": {
          "description": "removeDomain keys map with the set of keys keys removed from its domain",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "removeDomain",
          "normalized": "Set a-\u003eMap a b-\u003eMap a b",
          "package": "language-boogie",
          "partial": "Domain",
          "signature": "Set k-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:removeDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erenameTypeVars\u003c/a\u003e\u003c/code\u003e \u003ccode\u003etv newTV binding\u003c/code\u003e : \u003ccode\u003ebinding\u003c/code\u003e with each occurrence of one of \u003ccode\u003etv\u003c/code\u003e replaced with corresponding \u003ccode\u003enewTV\u003c/code\u003e \n (in both domain and range)\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "renameTypeVars",
          "package": "language-boogie",
          "signature": "[Id] -\u003e [Id] -\u003e TypeBinding -\u003e TypeBinding",
          "source": "src/Language-Boogie-Util.html#renameTypeVars",
          "type": "function"
        },
        "index": {
          "description": "renameTypeVars tv newTV binding binding with each occurrence of one of tv replaced with corresponding newTV in both domain and range",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "renameTypeVars",
          "normalized": "[Id]-\u003e[Id]-\u003eTypeBinding-\u003eTypeBinding",
          "package": "language-boogie",
          "partial": "Type Vars",
          "signature": "[Id]-\u003e[Id]-\u003eTypeBinding-\u003eTypeBinding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:renameTypeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erestrictDomain\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ekeys m\u003c/code\u003e : map \u003ccode\u003em\u003c/code\u003e restricted on the set of keys \u003ccode\u003ekeys\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "restrictDomain",
          "package": "language-boogie",
          "signature": "Set k -\u003e Map k a -\u003e Map k a",
          "source": "src/Language-Boogie-Util.html#restrictDomain",
          "type": "function"
        },
        "index": {
          "description": "restrictDomain keys map restricted on the set of keys keys",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "restrictDomain",
          "normalized": "Set a-\u003eMap a b-\u003eMap a b",
          "package": "language-boogie",
          "partial": "Domain",
          "signature": "Set k-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:restrictDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal tuple type constructor (used for representing procedure returns as a single type)\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "tupleType",
          "package": "language-boogie",
          "signature": "[Type] -\u003e Type",
          "source": "src/Language-Boogie-Util.html#tupleType",
          "type": "function"
        },
        "index": {
          "description": "Internal tuple type constructor used for representing procedure returns as single type",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "tupleType",
          "normalized": "[Type]-\u003eType",
          "package": "language-boogie",
          "partial": "Type",
          "signature": "[Type]-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:tupleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etypeSubst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ebinding t\u003c/code\u003e :\n Substitute all free type variables in \u003ccode\u003et\u003c/code\u003e according to binding;\n all variables in the domain of \u003ccode\u003ebindings\u003c/code\u003e are considered free if not explicitly bound\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "typeSubst",
          "package": "language-boogie",
          "signature": "TypeBinding -\u003e Type -\u003e Type",
          "source": "src/Language-Boogie-Util.html#typeSubst",
          "type": "function"
        },
        "index": {
          "description": "typeSubst binding Substitute all free type variables in according to binding all variables in the domain of bindings are considered free if not explicitly bound",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "typeSubst",
          "normalized": "TypeBinding-\u003eType-\u003eType",
          "package": "language-boogie",
          "partial": "Subst",
          "signature": "TypeBinding-\u003eType-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:typeSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunifier\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efv xs ys\u003c/code\u003e : most general unifier of \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003eys\u003c/code\u003e with shared free type variables of the context \u003ccode\u003efv\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "unifier",
          "package": "language-boogie",
          "signature": "[Id] -\u003e [Type] -\u003e [Type] -\u003e Maybe TypeBinding",
          "source": "src/Language-Boogie-Util.html#unifier",
          "type": "function"
        },
        "index": {
          "description": "unifier fv xs ys most general unifier of xs and ys with shared free type variables of the context fv",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "unifier",
          "normalized": "[Id]-\u003e[Type]-\u003e[Type]-\u003eMaybe TypeBinding",
          "package": "language-boogie",
          "signature": "[Id]-\u003e[Type]-\u003e[Type]-\u003eMaybe TypeBinding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:unifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithLocalState\u003c/a\u003e\u003c/code\u003e \u003ccode\u003elocalState e\u003c/code\u003e :\n Execute \u003ccode\u003ee\u003c/code\u003e in current state modified by \u003ccode\u003elocalState\u003c/code\u003e, and then restore current state\n\u003c/p\u003e",
          "module": "Language.Boogie.Util",
          "name": "withLocalState",
          "package": "language-boogie",
          "signature": "(s -\u003e t) -\u003e StateT t m a -\u003e StateT s m a",
          "source": "src/Language-Boogie-Util.html#withLocalState",
          "type": "function"
        },
        "index": {
          "description": "withLocalState localState Execute in current state modified by localState and then restore current state",
          "hierarchy": "Language Boogie Util",
          "module": "Language.Boogie.Util",
          "name": "withLocalState",
          "normalized": "(a-\u003eb)-\u003eStateT b c d-\u003eStateT a c d",
          "package": "language-boogie",
          "partial": "Local State",
          "signature": "(s-\u003et)-\u003eStateT t m a-\u003eStateT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-boogie/docs/Language-Boogie-Util.html#v:withLocalState"
      }
    }
  ]
]