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
        "word": "hsx"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for transforming abstract Haskell code extended with regular\n patterns into semantically equivalent normal abstract Haskell code. In\n other words, we transform away regular patterns.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HSX.Transform",
          "name": "Transform",
          "package": "hsx",
          "source": "src/HSX-Transform.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for transforming abstract Haskell code extended with regular patterns into semantically equivalent normal abstract Haskell code In other words we transform away regular patterns",
          "hierarchy": "HSX Transform",
          "module": "HSX.Transform",
          "name": "Transform",
          "package": "hsx",
          "partial": "Transform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-Transform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform away occurences of regular patterns from an abstract\n Haskell module, preserving semantics.\n\u003c/p\u003e",
          "module": "HSX.Transform",
          "name": "transform",
          "package": "hsx",
          "signature": "Module -\u003e Module",
          "source": "src/HSX-Transform.html#transform",
          "type": "function"
        },
        "index": {
          "description": "Transform away occurences of regular patterns from an abstract Haskell module preserving semantics",
          "hierarchy": "HSX Transform",
          "module": "HSX.Transform",
          "name": "transform",
          "normalized": "Module-\u003eModule",
          "package": "hsx",
          "signature": "Module-\u003eModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-Transform.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform expressions by traversing subterms.\n Of special interest are expressions that contain patterns as subterms,\n i.e. \u003ccode\u003elet\u003c/code\u003e, \u003ccode\u003ecase\u003c/code\u003e and lambda expressions, and also list comprehensions\n and \u003ccode\u003edo\u003c/code\u003e-expressions. All other expressions simply transform their\n sub-expressions, if any.\n Of special interest are of course also any xml expressions.\n\u003c/p\u003e",
          "module": "HSX.Transform",
          "name": "transformExp",
          "package": "hsx",
          "signature": "Exp -\u003e Exp",
          "source": "src/HSX-Transform.html#transformExp",
          "type": "function"
        },
        "index": {
          "description": "Transform expressions by traversing subterms Of special interest are expressions that contain patterns as subterms i.e let case and lambda expressions and also list comprehensions and do expressions All other expressions simply transform their sub-expressions if any Of special interest are of course also any xml expressions",
          "hierarchy": "HSX Transform",
          "module": "HSX.Transform",
          "name": "transformExp",
          "normalized": "Exp-\u003eExp",
          "package": "hsx",
          "partial": "Exp",
          "signature": "Exp-\u003eExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-Transform.html#v:transformExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe class and monad transformer that forms the basis of the literal XML\n syntax translation. Literal tags will be translated into functions of\n the GenerateXML class, and any instantiating monads with associated XML\n types can benefit from that syntax.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HSX.XMLGenerator",
          "name": "XMLGenerator",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html",
          "type": "module"
        },
        "index": {
          "description": "The class and monad transformer that forms the basis of the literal XML syntax translation Literal tags will be translated into functions of the GenerateXML class and any instantiating monads with associated XML types can benefit from that syntax",
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "XMLGenerator",
          "package": "hsx",
          "partial": "XMLGenerator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "AppendChild",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#AppendChild",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "AppendChild",
          "package": "hsx",
          "partial": "Append Child",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:AppendChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "Attr",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#Attr",
          "type": "data"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "Attr",
          "package": "hsx",
          "partial": "Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilarly embed values as attributes of an XML element.\n\u003c/p\u003e",
          "module": "HSX.XMLGenerator",
          "name": "EmbedAsAttr",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#EmbedAsAttr",
          "type": "class"
        },
        "index": {
          "description": "Similarly embed values as attributes of an XML element",
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "EmbedAsAttr",
          "package": "hsx",
          "partial": "Embed As Attr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:EmbedAsAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed values as child nodes of an XML element. The parent type will be clear\n from the context so it is not mentioned.\n\u003c/p\u003e",
          "module": "HSX.XMLGenerator",
          "name": "EmbedAsChild",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#EmbedAsChild",
          "type": "class"
        },
        "index": {
          "description": "Embed values as child nodes of an XML element The parent type will be clear from the context so it is not mentioned",
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "EmbedAsChild",
          "package": "hsx",
          "partial": "Embed As Child",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:EmbedAsChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "GenAttribute",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#GenAttribute",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "GenAttribute",
          "package": "hsx",
          "partial": "Gen Attribute",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:GenAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "GenAttributeList",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#GenAttributeList",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "GenAttributeList",
          "package": "hsx",
          "partial": "Gen Attribute List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:GenAttributeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "GenChild",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#GenChild",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "GenChild",
          "package": "hsx",
          "partial": "Gen Child",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:GenChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "GenChildList",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#GenChildList",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "GenChildList",
          "package": "hsx",
          "partial": "Gen Child List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:GenChildList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonyms to avoid writing out the XMLnGenT all the time\n\u003c/p\u003e",
          "module": "HSX.XMLGenerator",
          "name": "GenXML",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#GenXML",
          "type": "type"
        },
        "index": {
          "description": "Type synonyms to avoid writing out the XMLnGenT all the time",
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "GenXML",
          "package": "hsx",
          "partial": "Gen XML",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:GenXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "GenXMLList",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#GenXMLList",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "GenXMLList",
          "package": "hsx",
          "partial": "Gen XMLList",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:GenXMLList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames can be simple or qualified with a domain. We want to conveniently\n use both simple strings or pairs wherever a Name is expected.\n\u003c/p\u003e",
          "module": "HSX.XMLGenerator",
          "name": "IsName",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#IsName",
          "type": "class"
        },
        "index": {
          "description": "Names can be simple or qualified with domain We want to conveniently use both simple strings or pairs wherever Name is expected",
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "IsName",
          "package": "hsx",
          "partial": "Is Name",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:IsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "Name",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "Name",
          "package": "hsx",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet attributes on XML elements\n\u003c/p\u003e",
          "module": "HSX.XMLGenerator",
          "name": "SetAttr",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#SetAttr",
          "type": "class"
        },
        "index": {
          "description": "Set attributes on XML elements",
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "SetAttr",
          "package": "hsx",
          "partial": "Set Attr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:SetAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "TypeCast",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#TypeCast",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "TypeCast",
          "package": "hsx",
          "partial": "Type Cast",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:TypeCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "TypeCast'",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#TypeCast%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "TypeCast'",
          "package": "hsx",
          "partial": "Type Cast'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:TypeCast-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "TypeCast''",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#TypeCast%27%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "TypeCast''",
          "package": "hsx",
          "partial": "Type Cast''",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:TypeCast-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "TypeCastM",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#TypeCastM",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "TypeCastM",
          "package": "hsx",
          "partial": "Type Cast",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:TypeCastM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "TypeCastM'",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#TypeCastM%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "TypeCastM'",
          "package": "hsx",
          "partial": "Type Cast M'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:TypeCastM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "TypeCastM''",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#TypeCastM%27%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "TypeCastM''",
          "package": "hsx",
          "partial": "Type Cast M''",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:TypeCastM-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate XML values in some XMLGenerator monad.\n\u003c/p\u003e",
          "module": "HSX.XMLGenerator",
          "name": "XMLGen",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#XMLGen",
          "type": "class"
        },
        "index": {
          "description": "Generate XML values in some XMLGenerator monad",
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "XMLGen",
          "package": "hsx",
          "partial": "XMLGen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:XMLGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad transformer that allows a monad to generate XML values.\n\u003c/p\u003e",
          "module": "HSX.XMLGenerator",
          "name": "XMLGenT",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#XMLGenT",
          "type": "newtype"
        },
        "index": {
          "description": "The monad transformer that allows monad to generate XML values",
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "XMLGenT",
          "package": "hsx",
          "partial": "XMLGen",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:XMLGenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "XMLGenerator",
          "package": "hsx",
          "source": "src/HSX-XMLGenerator.html#XMLGenerator",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "XMLGenerator",
          "package": "hsx",
          "partial": "XMLGenerator",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:XMLGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "(\u003c\u003c@)",
          "package": "hsx",
          "signature": "elem -\u003e [a] -\u003e GenXML m",
          "source": "src/HSX-XMLGenerator.html#%3C%3C%40",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "(\u003c\u003c@) \u003c\u003c@",
          "normalized": "a-\u003e[b]-\u003eGenXML c",
          "package": "hsx",
          "signature": "elem-\u003e[a]-\u003eGenXML m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:-60--60--64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "(\u003c\u003c:)",
          "package": "hsx",
          "signature": "elem -\u003e [c] -\u003e GenXML m",
          "source": "src/HSX-XMLGenerator.html#%3C%3C%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "(\u003c\u003c:) \u003c\u003c:",
          "normalized": "a-\u003e[b]-\u003eGenXML c",
          "package": "hsx",
          "signature": "elem-\u003e[c]-\u003eGenXML m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:-60--60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "(\u003c@)",
          "package": "hsx",
          "signature": "elem -\u003e attr -\u003e GenXML m",
          "source": "src/HSX-XMLGenerator.html#%3C%40",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "(\u003c@) \u003c@",
          "normalized": "a-\u003eb-\u003eGenXML c",
          "package": "hsx",
          "signature": "elem-\u003eattr-\u003eGenXML m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:-60--64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "(\u003c:)",
          "package": "hsx",
          "signature": "elem -\u003e c -\u003e GenXML m",
          "source": "src/HSX-XMLGenerator.html#%3C%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "(\u003c:) \u003c:",
          "normalized": "a-\u003eb-\u003eGenXML c",
          "package": "hsx",
          "signature": "elem-\u003ec-\u003eGenXML m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:-60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": ":=",
          "package": "hsx",
          "signature": "n := a",
          "source": "src/HSX-XMLGenerator.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": ":=",
          "package": "hsx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "XMLGenT",
          "package": "hsx",
          "signature": "XMLGenT (m a)",
          "source": "src/HSX-XMLGenerator.html#XMLGenT",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "XMLGenT",
          "package": "hsx",
          "partial": "XMLGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:XMLGenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "app",
          "package": "hsx",
          "signature": "elem -\u003e c -\u003e GenXML m",
          "source": "src/HSX-XMLGenerator.html#app",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "app",
          "normalized": "a-\u003eb-\u003eGenXML c",
          "package": "hsx",
          "signature": "elem-\u003ec-\u003eGenXML m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:app"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "appAll",
          "package": "hsx",
          "signature": "elem -\u003e GenChildList m -\u003e GenXML m",
          "source": "src/HSX-XMLGenerator.html#appAll",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "appAll",
          "normalized": "a-\u003eGenChildList b-\u003eGenXML b",
          "package": "hsx",
          "partial": "All",
          "signature": "elem-\u003eGenChildList m-\u003eGenXML m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:appAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "appChild",
          "package": "hsx",
          "signature": "elem -\u003e GenChild m -\u003e GenXML m",
          "source": "src/HSX-XMLGenerator.html#appChild",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "appChild",
          "normalized": "a-\u003eGenChild b-\u003eGenXML b",
          "package": "hsx",
          "partial": "Child",
          "signature": "elem-\u003eGenChild m-\u003eGenXML m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:appChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "asAttr",
          "package": "hsx",
          "signature": "a -\u003e GenAttributeList m",
          "source": "src/HSX-XMLGenerator.html#asAttr",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "asAttr",
          "normalized": "a-\u003eGenAttributeList b",
          "package": "hsx",
          "partial": "Attr",
          "signature": "a-\u003eGenAttributeList m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:asAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "asChild",
          "package": "hsx",
          "signature": "c -\u003e GenChildList m",
          "source": "src/HSX-XMLGenerator.html#asChild",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "asChild",
          "normalized": "a-\u003eGenChildList b",
          "package": "hsx",
          "partial": "Child",
          "signature": "c-\u003eGenChildList m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:asChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "genEElement",
          "package": "hsx",
          "signature": "Name -\u003e [XMLGenT m [AttributeType m]] -\u003e XMLGenT m (XMLType m)",
          "source": "src/HSX-XMLGenerator.html#genEElement",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "genEElement",
          "normalized": "Name-\u003e[XMLGenT a[AttributeType a]]-\u003eXMLGenT a(XMLType a)",
          "package": "hsx",
          "partial": "EElement",
          "signature": "Name-\u003e[XMLGenT m[AttributeType m]]-\u003eXMLGenT m(XMLType m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:genEElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "genElement",
          "package": "hsx",
          "signature": "Name -\u003e [XMLGenT m [AttributeType m]] -\u003e [XMLGenT m [ChildType m]] -\u003e XMLGenT m (XMLType m)",
          "source": "src/HSX-XMLGenerator.html#genElement",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "genElement",
          "normalized": "Name-\u003e[XMLGenT a[AttributeType a]]-\u003e[XMLGenT a[ChildType a]]-\u003eXMLGenT a(XMLType a)",
          "package": "hsx",
          "partial": "Element",
          "signature": "Name-\u003e[XMLGenT m[AttributeType m]]-\u003e[XMLGenT m[ChildType m]]-\u003eXMLGenT m(XMLType m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:genElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emap the inner monad\n\u003c/p\u003e",
          "module": "HSX.XMLGenerator",
          "name": "mapXMLGenT",
          "package": "hsx",
          "signature": "(m a -\u003e n b) -\u003e XMLGenT m a -\u003e XMLGenT n b",
          "source": "src/HSX-XMLGenerator.html#mapXMLGenT",
          "type": "function"
        },
        "index": {
          "description": "map the inner monad",
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "mapXMLGenT",
          "normalized": "(a b-\u003ec d)-\u003eXMLGenT a b-\u003eXMLGenT c d",
          "package": "hsx",
          "partial": "XMLGen",
          "signature": "(m a-\u003en b)-\u003eXMLGenT m a-\u003eXMLGenT n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:mapXMLGenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "pcdataToChild",
          "package": "hsx",
          "signature": "String -\u003e ChildType m",
          "source": "src/HSX-XMLGenerator.html#pcdataToChild",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "pcdataToChild",
          "normalized": "String-\u003eChildType a",
          "package": "hsx",
          "partial": "To Child",
          "signature": "String-\u003eChildType m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:pcdataToChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "set",
          "package": "hsx",
          "signature": "elem -\u003e attr -\u003e GenXML m",
          "source": "src/HSX-XMLGenerator.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "set",
          "normalized": "a-\u003eb-\u003eGenXML c",
          "package": "hsx",
          "signature": "elem-\u003eattr-\u003eGenXML m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "setAll",
          "package": "hsx",
          "signature": "elem -\u003e GenAttributeList m -\u003e GenXML m",
          "source": "src/HSX-XMLGenerator.html#setAll",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "setAll",
          "normalized": "a-\u003eGenAttributeList b-\u003eGenXML b",
          "package": "hsx",
          "partial": "All",
          "signature": "elem-\u003eGenAttributeList m-\u003eGenXML m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:setAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "setAttr",
          "package": "hsx",
          "signature": "elem -\u003e GenAttribute m -\u003e GenXML m",
          "source": "src/HSX-XMLGenerator.html#setAttr",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "setAttr",
          "normalized": "a-\u003eGenAttribute b-\u003eGenXML b",
          "package": "hsx",
          "partial": "Attr",
          "signature": "elem-\u003eGenAttribute m-\u003eGenXML m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:setAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "toName",
          "package": "hsx",
          "signature": "n -\u003e Name",
          "source": "src/HSX-XMLGenerator.html#toName",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "toName",
          "normalized": "a-\u003eName",
          "package": "hsx",
          "partial": "Name",
          "signature": "n-\u003eName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:toName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "typeCast",
          "package": "hsx",
          "signature": "a -\u003e b",
          "source": "src/HSX-XMLGenerator.html#typeCast",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "typeCast",
          "normalized": "a-\u003eb",
          "package": "hsx",
          "partial": "Cast",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:typeCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "typeCast'",
          "package": "hsx",
          "signature": "t -\u003e a -\u003e b",
          "source": "src/HSX-XMLGenerator.html#typeCast%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "typeCast'",
          "normalized": "a-\u003eb-\u003ec",
          "package": "hsx",
          "partial": "Cast'",
          "signature": "t-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:typeCast-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "typeCast''",
          "package": "hsx",
          "signature": "t -\u003e a -\u003e b",
          "source": "src/HSX-XMLGenerator.html#typeCast%27%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "typeCast''",
          "normalized": "a-\u003eb-\u003ec",
          "package": "hsx",
          "partial": "Cast''",
          "signature": "t-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:typeCast-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "typeCastM",
          "package": "hsx",
          "signature": "ma x -\u003e mb x",
          "source": "src/HSX-XMLGenerator.html#typeCastM",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "typeCastM",
          "normalized": "a b-\u003ec b",
          "package": "hsx",
          "partial": "Cast",
          "signature": "ma x-\u003emb x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:typeCastM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "typeCastM'",
          "package": "hsx",
          "signature": "t -\u003e ma x -\u003e mb x",
          "source": "src/HSX-XMLGenerator.html#typeCastM%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "typeCastM'",
          "normalized": "a-\u003eb c-\u003ed c",
          "package": "hsx",
          "partial": "Cast M'",
          "signature": "t-\u003ema x-\u003emb x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:typeCastM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "typeCastM''",
          "package": "hsx",
          "signature": "t -\u003e ma x -\u003e mb x",
          "source": "src/HSX-XMLGenerator.html#typeCastM%27%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "typeCastM''",
          "normalized": "a-\u003eb c-\u003ed c",
          "package": "hsx",
          "partial": "Cast M''",
          "signature": "t-\u003ema x-\u003emb x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:typeCastM-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eun-lift.\n\u003c/p\u003e",
          "module": "HSX.XMLGenerator",
          "name": "unXMLGenT",
          "package": "hsx",
          "signature": "XMLGenT m a -\u003e m a",
          "source": "src/HSX-XMLGenerator.html#unXMLGenT",
          "type": "function"
        },
        "index": {
          "description": "un-lift",
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "unXMLGenT",
          "normalized": "XMLGenT a b-\u003ea b",
          "package": "hsx",
          "partial": "XMLGen",
          "signature": "XMLGenT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:unXMLGenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSX.XMLGenerator",
          "name": "xmlToChild",
          "package": "hsx",
          "signature": "XMLType m -\u003e ChildType m",
          "source": "src/HSX-XMLGenerator.html#xmlToChild",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSX XMLGenerator",
          "module": "HSX.XMLGenerator",
          "name": "xmlToChild",
          "normalized": "XMLType a-\u003eChildType a",
          "package": "hsx",
          "partial": "To Child",
          "signature": "XMLType m-\u003eChildType m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:xmlToChild"
      }
    }
  ]
]