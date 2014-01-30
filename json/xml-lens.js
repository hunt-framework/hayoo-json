[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUseful traversals inspired by XPath\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Lens.html",
        "fct-type": "module",
        "title": "Lens"
      },
      "index": {
        "description": "Useful traversals inspired by XPath",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "Lens",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#t:AsComment",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "class",
        "fct-source": "src/Text-XML-Lens.html#AsComment",
        "fct-type": "class",
        "title": "AsComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "AsComment",
        "normalized": "",
        "package": "xml-lens",
        "partial": "As Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#t:AsInstruction",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "class",
        "fct-source": "src/Text-XML-Lens.html#AsInstruction",
        "fct-type": "class",
        "title": "AsInstruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "AsInstruction",
        "normalized": "",
        "package": "xml-lens",
        "partial": "As Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#t:Document",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Document"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "Document",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#t:Element",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Element"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "Element",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#t:Instruction",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Instruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "Instruction",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eA fully qualified name.\n\u003c/p\u003e\u003cp\u003ePrefixes are not semantically important; they are included only to\n simplify pass-through parsing. When comparing names with \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\n methods, prefixes are ignored.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eIsString\u003c/code\u003e instance supports Clark notation; see\n \u003ca\u003ehttp://www.jclark.com/xml/xmlns.htm\u003c/a\u003e and\n \u003ca\u003ehttp://infohost.nmt.edu/tcc/help/pubs/pylxml/etree-QName.html\u003c/a\u003e. Use\n the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension for very simple \u003ccode\u003eName\u003c/code\u003e\n construction:\n\u003c/p\u003e\u003cpre\u003e myname :: Name\n myname = \"{http://example.com/ns/my-namespace}my-name\"\n\u003c/pre\u003e",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Name"
      },
      "index": {
        "description": "fully qualified name Prefixes are not semantically important they are included only to simplify pass-through parsing When comparing names with Eq or Ord methods prefixes are ignored The IsString instance supports Clark notation see http www.jclark.com xml xmlns.htm and http infohost.nmt.edu tcc help pubs pylxml etree-QName.html Use the OverloadedStrings language extension for very simple Name construction myname Name myname http example.com ns my-namespace my-name",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "Name",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#t:Node",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "Node",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:.-47-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003es just like XPath's slash.\n\u003c/p\u003e\u003cpre\u003e \n l ./ m &#8801; l . \u003ccode\u003e\u003ca\u003eplate\u003c/a\u003e\u003c/code\u003e . m\n\u003c/pre\u003e",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Traversal s t a a -\u003e Traversal a a u v -\u003e Traversal s t u v",
        "fct-source": "src/Text-XML-Lens.html#.%2F",
        "fct-type": "function",
        "title": "(./)"
      },
      "index": {
        "description": "Combine two Traversal just like XPath slash plate",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "(./) ./",
        "normalized": "Traversal a b c c-\u003eTraversal c c d e-\u003eTraversal a b d e",
        "package": "xml-lens",
        "partial": "",
        "signature": "Traversal s t a a-\u003eTraversal a a u v-\u003eTraversal s t u v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:Document",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Document",
        "fct-type": "function",
        "title": "Document"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "Document",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:Element",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Element",
        "fct-type": "function",
        "title": "Element"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "Element",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:Instruction",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Instruction",
        "fct-type": "function",
        "title": "Instruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "Instruction",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:Name",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Name",
        "fct-type": "function",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "Name",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:NodeComment",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "NodeComment Text",
        "fct-type": "function",
        "title": "NodeComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "NodeComment",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Node Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:NodeContent",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "NodeContent Text",
        "fct-type": "function",
        "title": "NodeContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "NodeContent",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Node Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:NodeElement",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "NodeElement Element",
        "fct-type": "function",
        "title": "NodeElement"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "NodeElement",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Node Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:NodeInstruction",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "NodeInstruction Instruction",
        "fct-type": "function",
        "title": "NodeInstruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "NodeInstruction",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Node Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:_Comment",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Prism' t Text",
        "fct-source": "src/Text-XML-Lens.html#_Comment",
        "fct-type": "method",
        "title": "_Comment"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "_Comment",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:_Content",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Prism' Node Text",
        "fct-source": "src/Text-XML-Lens.html#_Content",
        "fct-type": "function",
        "title": "_Content"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "_Content",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:_Element",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Prism' Node Element",
        "fct-source": "src/Text-XML-Lens.html#_Element",
        "fct-type": "function",
        "title": "_Element"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "_Element",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:_Instruction",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Prism' t Instruction",
        "fct-source": "src/Text-XML-Lens.html#_Instruction",
        "fct-type": "method",
        "title": "_Instruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "_Instruction",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:_instructionData",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Lens' Instruction Text",
        "fct-source": "src/Text-XML-Lens.html#_instructionData",
        "fct-type": "function",
        "title": "_instructionData"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "_instructionData",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:_instructionTarget",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Lens' Instruction Text",
        "fct-source": "src/Text-XML-Lens.html#_instructionTarget",
        "fct-type": "function",
        "title": "_instructionTarget"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "_instructionTarget",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Target",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:_nameLocalName",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Lens' Name Text",
        "fct-source": "src/Text-XML-Lens.html#_nameLocalName",
        "fct-type": "function",
        "title": "_nameLocalName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "_nameLocalName",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Local Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:_nameNamespace",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Lens' Name (Maybe Text)",
        "fct-source": "src/Text-XML-Lens.html#_nameNamespace",
        "fct-type": "function",
        "title": "_nameNamespace"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "_nameNamespace",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Namespace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:_namePrefix",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Lens' Name (Maybe Text)",
        "fct-source": "src/Text-XML-Lens.html#_namePrefix",
        "fct-type": "function",
        "title": "_namePrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "_namePrefix",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:attr",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Name -\u003e IndexedTraversal' Name Element Text",
        "fct-source": "src/Text-XML-Lens.html#attr",
        "fct-type": "function",
        "title": "attr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "attr",
        "normalized": "Name-\u003eIndexedTraversal' Name Element Text",
        "package": "xml-lens",
        "partial": "",
        "signature": "Name-\u003eIndexedTraversal' Name Element Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:attribute",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Name -\u003e IndexedLens' Name Element (Maybe Text)",
        "fct-source": "src/Text-XML-Lens.html#attribute",
        "fct-type": "function",
        "title": "attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "attribute",
        "normalized": "Name-\u003eIndexedLens' Name Element(Maybe Text)",
        "package": "xml-lens",
        "partial": "",
        "signature": "Name-\u003eIndexedLens' Name Element(Maybe Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:attributeIs",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Name -\u003e Text -\u003e Traversal' Element Element",
        "fct-source": "src/Text-XML-Lens.html#attributeIs",
        "fct-type": "function",
        "title": "attributeIs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "attributeIs",
        "normalized": "Name-\u003eText-\u003eTraversal' Element Element",
        "package": "xml-lens",
        "partial": "Is",
        "signature": "Name-\u003eText-\u003eTraversal' Element Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:attributeSatisfies",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Name -\u003e (Text -\u003e Bool) -\u003e Traversal' Element Element",
        "fct-source": "src/Text-XML-Lens.html#attributeSatisfies",
        "fct-type": "function",
        "title": "attributeSatisfies"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "attributeSatisfies",
        "normalized": "Name-\u003e(Text-\u003eBool)-\u003eTraversal' Element Element",
        "package": "xml-lens",
        "partial": "Satisfies",
        "signature": "Name-\u003e(Text-\u003eBool)-\u003eTraversal' Element Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:attrs",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Lens' Element (Map Name Text)",
        "fct-source": "src/Text-XML-Lens.html#attrs",
        "fct-type": "function",
        "title": "attrs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "attrs",
        "normalized": "",
        "package": "xml-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:comment",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse all comments of the element.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Traversal' Element Text",
        "fct-source": "src/Text-XML-Lens.html#comment",
        "fct-type": "function",
        "title": "comment"
      },
      "index": {
        "description": "Traverse all comments of the element",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "comment",
        "normalized": "",
        "package": "xml-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:doctype",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Lens' Prologue (Maybe Doctype)",
        "fct-source": "src/Text-XML-Lens.html#doctype",
        "fct-type": "function",
        "title": "doctype"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "doctype",
        "normalized": "",
        "package": "xml-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:documentEpilogue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "[Miscellaneous]",
        "fct-type": "function",
        "title": "documentEpilogue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "documentEpilogue",
        "normalized": "[Miscellaneous]",
        "package": "xml-lens",
        "partial": "Epilogue",
        "signature": "[Miscellaneous]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:documentPrologue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Prologue",
        "fct-type": "function",
        "title": "documentPrologue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "documentPrologue",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Prologue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:documentRoot",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Element",
        "fct-type": "function",
        "title": "documentRoot"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "documentRoot",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Root",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:el",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse elements which has the specified name.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Name -\u003e Traversal' Element Element",
        "fct-source": "src/Text-XML-Lens.html#el",
        "fct-type": "function",
        "title": "el"
      },
      "index": {
        "description": "Traverse elements which has the specified name",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "el",
        "normalized": "Name-\u003eTraversal' Element Element",
        "package": "xml-lens",
        "partial": "",
        "signature": "Name-\u003eTraversal' Element Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:elementAttributes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Map Name Text",
        "fct-type": "function",
        "title": "elementAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "elementAttributes",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:elementName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Name",
        "fct-type": "function",
        "title": "elementName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "elementName",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:elementNodes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "[Node]",
        "fct-type": "function",
        "title": "elementNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "elementNodes",
        "normalized": "[Node]",
        "package": "xml-lens",
        "partial": "Nodes",
        "signature": "[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:ell",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse elements which has the specified *local* name. \n\u003c/p\u003e",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Text -\u003e Traversal' Element Element",
        "fct-source": "src/Text-XML-Lens.html#ell",
        "fct-type": "function",
        "title": "ell"
      },
      "index": {
        "description": "Traverse elements which has the specified local name",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "ell",
        "normalized": "Text-\u003eTraversal' Element Element",
        "package": "xml-lens",
        "partial": "",
        "signature": "Text-\u003eTraversal' Element Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:entire",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse itself with its all children.&#12288;Rewriting subnodes of each children will break a traversal law.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Traversal' Element Element",
        "fct-source": "src/Text-XML-Lens.html#entire",
        "fct-type": "function",
        "title": "entire"
      },
      "index": {
        "description": "Traverse itself with its all children Rewriting subnodes of each children will break traversal law",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "entire",
        "normalized": "",
        "package": "xml-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:epilogue",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Lens' Document [Miscellaneous]",
        "fct-source": "src/Text-XML-Lens.html#epilogue",
        "fct-type": "function",
        "title": "epilogue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "epilogue",
        "normalized": "Lens' Document[Miscellaneous]",
        "package": "xml-lens",
        "partial": "",
        "signature": "Lens' Document[Miscellaneous]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:instructionData",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Text",
        "fct-type": "function",
        "title": "instructionData"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "instructionData",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:instructionTarget",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Text",
        "fct-type": "function",
        "title": "instructionTarget"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "instructionTarget",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Target",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:localName",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Lens' Element Text",
        "fct-source": "src/Text-XML-Lens.html#localName",
        "fct-type": "function",
        "title": "localName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "localName",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:name",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Lens' Element Name",
        "fct-source": "src/Text-XML-Lens.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "name",
        "normalized": "",
        "package": "xml-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:nameLocalName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Text",
        "fct-type": "function",
        "title": "nameLocalName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "nameLocalName",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Local Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:nameNamespace",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Maybe Text",
        "fct-type": "function",
        "title": "nameNamespace"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "nameNamespace",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Namespace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:namePrefix",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Maybe Text",
        "fct-type": "function",
        "title": "namePrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "namePrefix",
        "normalized": "",
        "package": "xml-lens",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:nodes",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Lens' Element [Node]",
        "fct-source": "src/Text-XML-Lens.html#nodes",
        "fct-type": "function",
        "title": "nodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "nodes",
        "normalized": "Lens' Element[Node]",
        "package": "xml-lens",
        "partial": "",
        "signature": "Lens' Element[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:prologue",
      "description": {
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Lens' Document Prologue",
        "fct-source": "src/Text-XML-Lens.html#prologue",
        "fct-type": "function",
        "title": "prologue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "prologue",
        "normalized": "",
        "package": "xml-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:root",
      "description": {
        "fct-descr": "\u003cp\u003eThe root element of the document.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Lens' Document Element",
        "fct-source": "src/Text-XML-Lens.html#root",
        "fct-type": "function",
        "title": "root"
      },
      "index": {
        "description": "The root element of the document",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "root",
        "normalized": "",
        "package": "xml-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-lens/docs/Text-XML-Lens.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse all contents of the element.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Lens",
        "fct-package": "xml-lens",
        "fct-signature": "Traversal' Element Text",
        "fct-source": "src/Text-XML-Lens.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "Traverse all contents of the element",
        "hierarchy": "Text XML Lens",
        "module": "Text.XML.Lens",
        "name": "text",
        "normalized": "",
        "package": "xml-lens",
        "partial": "",
        "signature": ""
      }
    }
  }
]