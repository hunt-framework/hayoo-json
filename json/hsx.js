[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-Transform.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for transforming abstract Haskell code extended with regular\n patterns into semantically equivalent normal abstract Haskell code. In\n other words, we transform away regular patterns.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HSX.Transform",
        "fct-package": "hsx",
        "fct-signature": "module",
        "fct-source": "src/HSX-Transform.html",
        "fct-type": "module",
        "title": "Transform"
      },
      "index": {
        "description": "Functions for transforming abstract Haskell code extended with regular patterns into semantically equivalent normal abstract Haskell code In other words we transform away regular patterns",
        "hierarchy": "HSX Transform",
        "module": "HSX.Transform",
        "name": "Transform",
        "normalized": "",
        "package": "hsx",
        "partial": "Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-Transform.html#v:transform",
      "description": {
        "fct-descr": "\u003cp\u003eTransform away occurences of regular patterns from an abstract\n Haskell module, preserving semantics.\n\u003c/p\u003e",
        "fct-module": "HSX.Transform",
        "fct-package": "hsx",
        "fct-signature": "Module -\u003e Module",
        "fct-source": "src/HSX-Transform.html#transform",
        "fct-type": "function",
        "title": "transform"
      },
      "index": {
        "description": "Transform away occurences of regular patterns from an abstract Haskell module preserving semantics",
        "hierarchy": "HSX Transform",
        "module": "HSX.Transform",
        "name": "transform",
        "normalized": "Module-\u003eModule",
        "package": "hsx",
        "partial": "",
        "signature": "Module-\u003eModule"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-Transform.html#v:transformExp",
      "description": {
        "fct-descr": "\u003cp\u003eTransform expressions by traversing subterms.\n Of special interest are expressions that contain patterns as subterms,\n i.e. \u003ccode\u003elet\u003c/code\u003e, \u003ccode\u003ecase\u003c/code\u003e and lambda expressions, and also list comprehensions\n and \u003ccode\u003edo\u003c/code\u003e-expressions. All other expressions simply transform their\n sub-expressions, if any.\n Of special interest are of course also any xml expressions.\n\u003c/p\u003e",
        "fct-module": "HSX.Transform",
        "fct-package": "hsx",
        "fct-signature": "Exp -\u003e Exp",
        "fct-source": "src/HSX-Transform.html#transformExp",
        "fct-type": "function",
        "title": "transformExp"
      },
      "index": {
        "description": "Transform expressions by traversing subterms Of special interest are expressions that contain patterns as subterms i.e let case and lambda expressions and also list comprehensions and do expressions All other expressions simply transform their sub-expressions if any Of special interest are of course also any xml expressions",
        "hierarchy": "HSX Transform",
        "module": "HSX.Transform",
        "name": "transformExp",
        "normalized": "Exp-\u003eExp",
        "package": "hsx",
        "partial": "Exp",
        "signature": "Exp-\u003eExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe class and monad transformer that forms the basis of the literal XML\n syntax translation. Literal tags will be translated into functions of\n the GenerateXML class, and any instantiating monads with associated XML\n types can benefit from that syntax.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "module",
        "fct-source": "src/HSX-XMLGenerator.html",
        "fct-type": "module",
        "title": "XMLGenerator"
      },
      "index": {
        "description": "The class and monad transformer that forms the basis of the literal XML syntax translation Literal tags will be translated into functions of the GenerateXML class and any instantiating monads with associated XML types can benefit from that syntax",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "XMLGenerator",
        "normalized": "",
        "package": "hsx",
        "partial": "XMLGenerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:AppendChild",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "class",
        "fct-source": "src/HSX-XMLGenerator.html#AppendChild",
        "fct-type": "class",
        "title": "AppendChild"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "AppendChild",
        "normalized": "",
        "package": "hsx",
        "partial": "Append Child",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:Attr",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "data",
        "fct-source": "src/HSX-XMLGenerator.html#Attr",
        "fct-type": "data",
        "title": "Attr"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "Attr",
        "normalized": "",
        "package": "hsx",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:EmbedAsAttr",
      "description": {
        "fct-descr": "\u003cp\u003eSimilarly embed values as attributes of an XML element.\n\u003c/p\u003e",
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "class",
        "fct-source": "src/HSX-XMLGenerator.html#EmbedAsAttr",
        "fct-type": "class",
        "title": "EmbedAsAttr"
      },
      "index": {
        "description": "Similarly embed values as attributes of an XML element",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "EmbedAsAttr",
        "normalized": "",
        "package": "hsx",
        "partial": "Embed As Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:EmbedAsChild",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed values as child nodes of an XML element. The parent type will be clear\n from the context so it is not mentioned.\n\u003c/p\u003e",
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "class",
        "fct-source": "src/HSX-XMLGenerator.html#EmbedAsChild",
        "fct-type": "class",
        "title": "EmbedAsChild"
      },
      "index": {
        "description": "Embed values as child nodes of an XML element The parent type will be clear from the context so it is not mentioned",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "EmbedAsChild",
        "normalized": "",
        "package": "hsx",
        "partial": "Embed As Child",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:GenAttribute",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "type",
        "fct-source": "src/HSX-XMLGenerator.html#GenAttribute",
        "fct-type": "type",
        "title": "GenAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "GenAttribute",
        "normalized": "",
        "package": "hsx",
        "partial": "Gen Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:GenAttributeList",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "type",
        "fct-source": "src/HSX-XMLGenerator.html#GenAttributeList",
        "fct-type": "type",
        "title": "GenAttributeList"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "GenAttributeList",
        "normalized": "",
        "package": "hsx",
        "partial": "Gen Attribute List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:GenChild",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "type",
        "fct-source": "src/HSX-XMLGenerator.html#GenChild",
        "fct-type": "type",
        "title": "GenChild"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "GenChild",
        "normalized": "",
        "package": "hsx",
        "partial": "Gen Child",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:GenChildList",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "type",
        "fct-source": "src/HSX-XMLGenerator.html#GenChildList",
        "fct-type": "type",
        "title": "GenChildList"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "GenChildList",
        "normalized": "",
        "package": "hsx",
        "partial": "Gen Child List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:GenXML",
      "description": {
        "fct-descr": "\u003cp\u003eType synonyms to avoid writing out the XMLnGenT all the time\n\u003c/p\u003e",
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "type",
        "fct-source": "src/HSX-XMLGenerator.html#GenXML",
        "fct-type": "type",
        "title": "GenXML"
      },
      "index": {
        "description": "Type synonyms to avoid writing out the XMLnGenT all the time",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "GenXML",
        "normalized": "",
        "package": "hsx",
        "partial": "Gen XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:GenXMLList",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "type",
        "fct-source": "src/HSX-XMLGenerator.html#GenXMLList",
        "fct-type": "type",
        "title": "GenXMLList"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "GenXMLList",
        "normalized": "",
        "package": "hsx",
        "partial": "Gen XMLList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:IsName",
      "description": {
        "fct-descr": "\u003cp\u003eNames can be simple or qualified with a domain. We want to conveniently\n use both simple strings or pairs wherever a Name is expected.\n\u003c/p\u003e",
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "class",
        "fct-source": "src/HSX-XMLGenerator.html#IsName",
        "fct-type": "class",
        "title": "IsName"
      },
      "index": {
        "description": "Names can be simple or qualified with domain We want to conveniently use both simple strings or pairs wherever Name is expected",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "IsName",
        "normalized": "",
        "package": "hsx",
        "partial": "Is Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:Name",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "type",
        "fct-source": "src/HSX-XMLGenerator.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "Name",
        "normalized": "",
        "package": "hsx",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:SetAttr",
      "description": {
        "fct-descr": "\u003cp\u003eSet attributes on XML elements\n\u003c/p\u003e",
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "class",
        "fct-source": "src/HSX-XMLGenerator.html#SetAttr",
        "fct-type": "class",
        "title": "SetAttr"
      },
      "index": {
        "description": "Set attributes on XML elements",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "SetAttr",
        "normalized": "",
        "package": "hsx",
        "partial": "Set Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:TypeCast",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "class",
        "fct-source": "src/HSX-XMLGenerator.html#TypeCast",
        "fct-type": "class",
        "title": "TypeCast"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "TypeCast",
        "normalized": "",
        "package": "hsx",
        "partial": "Type Cast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:TypeCast-39-",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "class",
        "fct-source": "src/HSX-XMLGenerator.html#TypeCast%27",
        "fct-type": "class",
        "title": "TypeCast'"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "TypeCast'",
        "normalized": "",
        "package": "hsx",
        "partial": "Type Cast'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:TypeCast-39--39-",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "class",
        "fct-source": "src/HSX-XMLGenerator.html#TypeCast%27%27",
        "fct-type": "class",
        "title": "TypeCast''"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "TypeCast''",
        "normalized": "",
        "package": "hsx",
        "partial": "Type Cast''",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:TypeCastM",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "class",
        "fct-source": "src/HSX-XMLGenerator.html#TypeCastM",
        "fct-type": "class",
        "title": "TypeCastM"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "TypeCastM",
        "normalized": "",
        "package": "hsx",
        "partial": "Type Cast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:TypeCastM-39-",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "class",
        "fct-source": "src/HSX-XMLGenerator.html#TypeCastM%27",
        "fct-type": "class",
        "title": "TypeCastM'"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "TypeCastM'",
        "normalized": "",
        "package": "hsx",
        "partial": "Type Cast M'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:TypeCastM-39--39-",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "class",
        "fct-source": "src/HSX-XMLGenerator.html#TypeCastM%27%27",
        "fct-type": "class",
        "title": "TypeCastM''"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "TypeCastM''",
        "normalized": "",
        "package": "hsx",
        "partial": "Type Cast M''",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:XMLGen",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate XML values in some XMLGenerator monad.\n\u003c/p\u003e",
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "class",
        "fct-source": "src/HSX-XMLGenerator.html#XMLGen",
        "fct-type": "class",
        "title": "XMLGen"
      },
      "index": {
        "description": "Generate XML values in some XMLGenerator monad",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "XMLGen",
        "normalized": "",
        "package": "hsx",
        "partial": "XMLGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:XMLGenT",
      "description": {
        "fct-descr": "\u003cp\u003eThe monad transformer that allows a monad to generate XML values.\n\u003c/p\u003e",
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "newtype",
        "fct-source": "src/HSX-XMLGenerator.html#XMLGenT",
        "fct-type": "newtype",
        "title": "XMLGenT"
      },
      "index": {
        "description": "The monad transformer that allows monad to generate XML values",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "XMLGenT",
        "normalized": "",
        "package": "hsx",
        "partial": "XMLGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#t:XMLGenerator",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "class",
        "fct-source": "src/HSX-XMLGenerator.html#XMLGenerator",
        "fct-type": "class",
        "title": "XMLGenerator"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "XMLGenerator",
        "normalized": "",
        "package": "hsx",
        "partial": "XMLGenerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:-60--60--64-",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "elem -\u003e [a] -\u003e GenXML m",
        "fct-source": "src/HSX-XMLGenerator.html#%3C%3C%40",
        "fct-type": "function",
        "title": "(\u003c\u003c@)"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "(\u003c\u003c@) \u003c\u003c@",
        "normalized": "a-\u003e[b]-\u003eGenXML c",
        "package": "hsx",
        "partial": "",
        "signature": "elem-\u003e[a]-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:-60--60-:",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "elem -\u003e [c] -\u003e GenXML m",
        "fct-source": "src/HSX-XMLGenerator.html#%3C%3C%3A",
        "fct-type": "function",
        "title": "(\u003c\u003c:)"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "(\u003c\u003c:) \u003c\u003c:",
        "normalized": "a-\u003e[b]-\u003eGenXML c",
        "package": "hsx",
        "partial": "",
        "signature": "elem-\u003e[c]-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:-60--64-",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "elem -\u003e attr -\u003e GenXML m",
        "fct-source": "src/HSX-XMLGenerator.html#%3C%40",
        "fct-type": "function",
        "title": "(\u003c@)"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "(\u003c@) \u003c@",
        "normalized": "a-\u003eb-\u003eGenXML c",
        "package": "hsx",
        "partial": "",
        "signature": "elem-\u003eattr-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:-60-:",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "elem -\u003e c -\u003e GenXML m",
        "fct-source": "src/HSX-XMLGenerator.html#%3C%3A",
        "fct-type": "function",
        "title": "(\u003c:)"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "(\u003c:) \u003c:",
        "normalized": "a-\u003eb-\u003eGenXML c",
        "package": "hsx",
        "partial": "",
        "signature": "elem-\u003ec-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v::-61-",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "n := a",
        "fct-source": "src/HSX-XMLGenerator.html#Attr",
        "fct-type": "function",
        "title": ":="
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": ":=",
        "normalized": "",
        "package": "hsx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:XMLGenT",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "XMLGenT (m a)",
        "fct-source": "src/HSX-XMLGenerator.html#XMLGenT",
        "fct-type": "function",
        "title": "XMLGenT"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "XMLGenT",
        "normalized": "",
        "package": "hsx",
        "partial": "XMLGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:app",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "elem -\u003e c -\u003e GenXML m",
        "fct-source": "src/HSX-XMLGenerator.html#app",
        "fct-type": "function",
        "title": "app"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "app",
        "normalized": "a-\u003eb-\u003eGenXML c",
        "package": "hsx",
        "partial": "",
        "signature": "elem-\u003ec-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:appAll",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "elem -\u003e GenChildList m -\u003e GenXML m",
        "fct-source": "src/HSX-XMLGenerator.html#appAll",
        "fct-type": "method",
        "title": "appAll"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "appAll",
        "normalized": "a-\u003eGenChildList b-\u003eGenXML b",
        "package": "hsx",
        "partial": "All",
        "signature": "elem-\u003eGenChildList m-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:appChild",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "elem -\u003e GenChild m -\u003e GenXML m",
        "fct-source": "src/HSX-XMLGenerator.html#appChild",
        "fct-type": "method",
        "title": "appChild"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "appChild",
        "normalized": "a-\u003eGenChild b-\u003eGenXML b",
        "package": "hsx",
        "partial": "Child",
        "signature": "elem-\u003eGenChild m-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:asAttr",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "a -\u003e GenAttributeList m",
        "fct-source": "src/HSX-XMLGenerator.html#asAttr",
        "fct-type": "method",
        "title": "asAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "asAttr",
        "normalized": "a-\u003eGenAttributeList b",
        "package": "hsx",
        "partial": "Attr",
        "signature": "a-\u003eGenAttributeList m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:asChild",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "c -\u003e GenChildList m",
        "fct-source": "src/HSX-XMLGenerator.html#asChild",
        "fct-type": "method",
        "title": "asChild"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "asChild",
        "normalized": "a-\u003eGenChildList b",
        "package": "hsx",
        "partial": "Child",
        "signature": "c-\u003eGenChildList m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:genEElement",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "Name -\u003e [XMLGenT m [AttributeType m]] -\u003e XMLGenT m (XMLType m)",
        "fct-source": "src/HSX-XMLGenerator.html#genEElement",
        "fct-type": "method",
        "title": "genEElement"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "genEElement",
        "normalized": "Name-\u003e[XMLGenT a[AttributeType a]]-\u003eXMLGenT a(XMLType a)",
        "package": "hsx",
        "partial": "EElement",
        "signature": "Name-\u003e[XMLGenT m[AttributeType m]]-\u003eXMLGenT m(XMLType m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:genElement",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "Name -\u003e [XMLGenT m [AttributeType m]] -\u003e [XMLGenT m [ChildType m]] -\u003e XMLGenT m (XMLType m)",
        "fct-source": "src/HSX-XMLGenerator.html#genElement",
        "fct-type": "method",
        "title": "genElement"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "genElement",
        "normalized": "Name-\u003e[XMLGenT a[AttributeType a]]-\u003e[XMLGenT a[ChildType a]]-\u003eXMLGenT a(XMLType a)",
        "package": "hsx",
        "partial": "Element",
        "signature": "Name-\u003e[XMLGenT m[AttributeType m]]-\u003e[XMLGenT m[ChildType m]]-\u003eXMLGenT m(XMLType m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:mapXMLGenT",
      "description": {
        "fct-descr": "\u003cp\u003emap the inner monad\n\u003c/p\u003e",
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "(m a -\u003e n b) -\u003e XMLGenT m a -\u003e XMLGenT n b",
        "fct-source": "src/HSX-XMLGenerator.html#mapXMLGenT",
        "fct-type": "function",
        "title": "mapXMLGenT"
      },
      "index": {
        "description": "map the inner monad",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "mapXMLGenT",
        "normalized": "(a b-\u003ec d)-\u003eXMLGenT a b-\u003eXMLGenT c d",
        "package": "hsx",
        "partial": "XMLGen",
        "signature": "(m a-\u003en b)-\u003eXMLGenT m a-\u003eXMLGenT n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:pcdataToChild",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "String -\u003e ChildType m",
        "fct-source": "src/HSX-XMLGenerator.html#pcdataToChild",
        "fct-type": "method",
        "title": "pcdataToChild"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "pcdataToChild",
        "normalized": "String-\u003eChildType a",
        "package": "hsx",
        "partial": "To Child",
        "signature": "String-\u003eChildType m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:set",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "elem -\u003e attr -\u003e GenXML m",
        "fct-source": "src/HSX-XMLGenerator.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "set",
        "normalized": "a-\u003eb-\u003eGenXML c",
        "package": "hsx",
        "partial": "",
        "signature": "elem-\u003eattr-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:setAll",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "elem -\u003e GenAttributeList m -\u003e GenXML m",
        "fct-source": "src/HSX-XMLGenerator.html#setAll",
        "fct-type": "method",
        "title": "setAll"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "setAll",
        "normalized": "a-\u003eGenAttributeList b-\u003eGenXML b",
        "package": "hsx",
        "partial": "All",
        "signature": "elem-\u003eGenAttributeList m-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:setAttr",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "elem -\u003e GenAttribute m -\u003e GenXML m",
        "fct-source": "src/HSX-XMLGenerator.html#setAttr",
        "fct-type": "method",
        "title": "setAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "setAttr",
        "normalized": "a-\u003eGenAttribute b-\u003eGenXML b",
        "package": "hsx",
        "partial": "Attr",
        "signature": "elem-\u003eGenAttribute m-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:toName",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "n -\u003e Name",
        "fct-source": "src/HSX-XMLGenerator.html#toName",
        "fct-type": "method",
        "title": "toName"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "toName",
        "normalized": "a-\u003eName",
        "package": "hsx",
        "partial": "Name",
        "signature": "n-\u003eName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:typeCast",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/HSX-XMLGenerator.html#typeCast",
        "fct-type": "method",
        "title": "typeCast"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "typeCast",
        "normalized": "a-\u003eb",
        "package": "hsx",
        "partial": "Cast",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:typeCast-39-",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "t -\u003e a -\u003e b",
        "fct-source": "src/HSX-XMLGenerator.html#typeCast%27",
        "fct-type": "method",
        "title": "typeCast'"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "typeCast'",
        "normalized": "a-\u003eb-\u003ec",
        "package": "hsx",
        "partial": "Cast'",
        "signature": "t-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:typeCast-39--39-",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "t -\u003e a -\u003e b",
        "fct-source": "src/HSX-XMLGenerator.html#typeCast%27%27",
        "fct-type": "method",
        "title": "typeCast''"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "typeCast''",
        "normalized": "a-\u003eb-\u003ec",
        "package": "hsx",
        "partial": "Cast''",
        "signature": "t-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:typeCastM",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "ma x -\u003e mb x",
        "fct-source": "src/HSX-XMLGenerator.html#typeCastM",
        "fct-type": "method",
        "title": "typeCastM"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "typeCastM",
        "normalized": "a b-\u003ec b",
        "package": "hsx",
        "partial": "Cast",
        "signature": "ma x-\u003emb x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:typeCastM-39-",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "t -\u003e ma x -\u003e mb x",
        "fct-source": "src/HSX-XMLGenerator.html#typeCastM%27",
        "fct-type": "method",
        "title": "typeCastM'"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "typeCastM'",
        "normalized": "a-\u003eb c-\u003ed c",
        "package": "hsx",
        "partial": "Cast M'",
        "signature": "t-\u003ema x-\u003emb x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:typeCastM-39--39-",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "t -\u003e ma x -\u003e mb x",
        "fct-source": "src/HSX-XMLGenerator.html#typeCastM%27%27",
        "fct-type": "method",
        "title": "typeCastM''"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "typeCastM''",
        "normalized": "a-\u003eb c-\u003ed c",
        "package": "hsx",
        "partial": "Cast M''",
        "signature": "t-\u003ema x-\u003emb x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:unXMLGenT",
      "description": {
        "fct-descr": "\u003cp\u003eun-lift.\n\u003c/p\u003e",
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "XMLGenT m a -\u003e m a",
        "fct-source": "src/HSX-XMLGenerator.html#unXMLGenT",
        "fct-type": "function",
        "title": "unXMLGenT"
      },
      "index": {
        "description": "un-lift",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "unXMLGenT",
        "normalized": "XMLGenT a b-\u003ea b",
        "package": "hsx",
        "partial": "XMLGen",
        "signature": "XMLGenT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsx/docs/HSX-XMLGenerator.html#v:xmlToChild",
      "description": {
        "fct-module": "HSX.XMLGenerator",
        "fct-package": "hsx",
        "fct-signature": "XMLType m -\u003e ChildType m",
        "fct-source": "src/HSX-XMLGenerator.html#xmlToChild",
        "fct-type": "method",
        "title": "xmlToChild"
      },
      "index": {
        "description": "",
        "hierarchy": "HSX XMLGenerator",
        "module": "HSX.XMLGenerator",
        "name": "xmlToChild",
        "normalized": "XMLType a-\u003eChildType a",
        "package": "hsx",
        "partial": "To Child",
        "signature": "XMLType m-\u003eChildType m"
      }
    }
  }
]