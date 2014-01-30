[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides combinators for generating XML documents.\n\u003c/p\u003e\u003cp\u003eAs an example, suppose you want to generate the following XML document:\n\u003c/p\u003e\u003cpre\u003e \u003c?xml version=\"1.0\"?\u003e\n \u003cpeople\u003e\n   \u003cperson age=\"32\"\u003eStefan\u003c/person\u003e\n   \u003cperson age=\"4\"\u003eJudith\u003c/person\u003e\n \u003c/people\u003e\n\u003c/pre\u003e\u003cp\u003eThen you could use the following Haskell code:\n\u003c/p\u003e\u003cpre\u003e\n let people = [(\"Stefan\", \"32\"), (\"Judith\", \"4\")]\n in \u003ccode\u003e\u003ca\u003edoc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDocInfo\u003c/a\u003e\u003c/code\u003e $\n      \u003ccode\u003e\u003ca\u003exelem\u003c/a\u003e\u003c/code\u003e \"people\" $\n        \u003ccode\u003e\u003ca\u003exelems\u003c/a\u003e\u003c/code\u003e $ map ((name, age) -\u003e \u003ccode\u003e\u003ca\u003exelem\u003c/a\u003e\u003c/code\u003e \"person\" (\u003ccode\u003e\u003ca\u003exattr\u003c/a\u003e\u003c/code\u003e \"age\" age \u003ccode\u003e\u003ca\u003e\u003c#\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003extext\u003c/a\u003e\u003c/code\u003e name)) people\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Generator.html",
        "fct-type": "module",
        "title": "Generator"
      },
      "index": {
        "description": "This module provides combinators for generating XML documents As an example suppose you want to generate the following XML document xml version people person age Stefan person person age Judith person people Then you could use the following Haskell code let people Stefan Judith in doc defaultDocInfo xelem people xelems map name age xelem person xattr age age xtext name people",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "Generator",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:AddChildren",
      "description": {
        "fct-descr": "\u003cp\u003eClass for adding children to an element.\n\u003c/p\u003e\u003cp\u003eThe various instances of this class allow the addition of different kinds\n of children.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "class",
        "fct-source": "src/Text-XML-Generator.html#AddChildren",
        "fct-type": "class",
        "title": "AddChildren"
      },
      "index": {
        "description": "Class for adding children to an element The various instances of this class allow the addition of different kinds of children",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "AddChildren",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Add Children",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Attr",
      "description": {
        "fct-descr": "\u003cp\u003eA piece of XML at the attribute level.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-Generator.html#Attr",
        "fct-type": "data",
        "title": "Attr"
      },
      "index": {
        "description": "piece of XML at the attribute level",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "Attr",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Doc",
      "description": {
        "fct-descr": "\u003cp\u003eA piece of XML at the document level.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-Generator.html#Doc",
        "fct-type": "data",
        "title": "Doc"
      },
      "index": {
        "description": "piece of XML at the document level",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "Doc",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:DocInfo",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDocInfo\u003c/a\u003e\u003c/code\u003e type contains all information of an XML document except the root element.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-Generator.html#DocInfo",
        "fct-type": "data",
        "title": "DocInfo"
      },
      "index": {
        "description": "The DocInfo type contains all information of an XML document except the root element",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "DocInfo",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Doc Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Elem",
      "description": {
        "fct-descr": "\u003cp\u003eA piece of XML at the element level.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-Generator.html#Elem",
        "fct-type": "data",
        "title": "Elem"
      },
      "index": {
        "description": "piece of XML at the element level",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "Elem",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Misc",
      "description": {
        "fct-descr": "\u003cp\u003eClass providing methods for adding processing instructions and comments.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "class",
        "fct-source": "src/Text-XML-Generator.html#Misc",
        "fct-type": "class",
        "title": "Misc"
      },
      "index": {
        "description": "Class providing methods for adding processing instructions and comments",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "Misc",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Misc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eA type for names\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-Generator.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "type for names",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "Name",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Namespace",
      "description": {
        "fct-descr": "\u003cp\u003eType for representing presence or absence of an XML namespace.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-Generator.html#Namespace",
        "fct-type": "data",
        "title": "Namespace"
      },
      "index": {
        "description": "Type for representing presence or absence of an XML namespace",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "Namespace",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Namespace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Prefix",
      "description": {
        "fct-descr": "\u003cp\u003eNamespace prefix.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-Generator.html#Prefix",
        "fct-type": "type",
        "title": "Prefix"
      },
      "index": {
        "description": "Namespace prefix",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "Prefix",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Renderable",
      "description": {
        "fct-descr": "\u003cp\u003eAny type subject to rendering must implement this type class.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "class",
        "fct-source": "src/Text-XML-Generator.html#Renderable",
        "fct-type": "class",
        "title": "Renderable"
      },
      "index": {
        "description": "Any type subject to rendering must implement this type class",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "Renderable",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Renderable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:TextContent",
      "description": {
        "fct-descr": "\u003cp\u003eText content subject to escaping.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-Generator.html#TextContent",
        "fct-type": "type",
        "title": "TextContent"
      },
      "index": {
        "description": "Text content subject to escaping",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "TextContent",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Text Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Uri",
      "description": {
        "fct-descr": "\u003cp\u003eNamespace URI.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-Generator.html#Uri",
        "fct-type": "type",
        "title": "Uri"
      },
      "index": {
        "description": "Namespace URI",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "Uri",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Uri",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Xml",
      "description": {
        "fct-descr": "\u003cp\u003eThe type \u003ccode\u003eXml t\u003c/code\u003e represent a piece of XML of type \u003ccode\u003et\u003c/code\u003e, where \u003ccode\u003et\u003c/code\u003e\n   is usually one of \u003ccode\u003e\u003ca\u003eElem\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAttr\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-Generator.html#Xml",
        "fct-type": "data",
        "title": "Xml"
      },
      "index": {
        "description": "The type Xml represent piece of XML of type where is usually one of Elem Attr or Doc",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "Xml",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:XmlOutput",
      "description": {
        "fct-descr": "\u003cp\u003eInstances of the \u003ccode\u003eXmlOutput\u003c/code\u003e class may serve as target of serializing an XML document.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "class",
        "fct-source": "src/Text-XML-Generator.html#XmlOutput",
        "fct-type": "class",
        "title": "XmlOutput"
      },
      "index": {
        "description": "Instances of the XmlOutput class may serve as target of serializing an XML document",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "XmlOutput",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Xml Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:-60--35--62-",
      "description": {
        "fct-descr": "\u003cp\u003eShortcut for constructing pairs. Used in combination with \u003ccode\u003e\u003ca\u003exelem\u003c/a\u003e\u003c/code\u003e for separating child-attributes\n   from child-elements.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "a -\u003e b -\u003e (a, b)",
        "fct-source": "src/Text-XML-Generator.html#%3C%23%3E",
        "fct-type": "function",
        "title": "(\u003c#\u003e)"
      },
      "index": {
        "description": "Shortcut for constructing pairs Used in combination with xelem for separating child-attributes from child-elements",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "(\u003c#\u003e) \u003c#\u003e",
        "normalized": "a-\u003eb-\u003e(a,b)",
        "package": "xmlgen",
        "partial": "",
        "signature": "a-\u003eb-\u003e(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "An infix synonym for mappend",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "xmlgen",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:DocInfo",
      "description": {
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "DocInfo",
        "fct-source": "src/Text-XML-Generator.html#DocInfo",
        "fct-type": "function",
        "title": "DocInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "DocInfo",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Doc Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:defaultDocInfo",
      "description": {
        "fct-descr": "\u003cp\u003eThe default document info (standalone, without document type, without content before/after the root element).\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "DocInfo",
        "fct-source": "src/Text-XML-Generator.html#defaultDocInfo",
        "fct-type": "function",
        "title": "defaultDocInfo"
      },
      "index": {
        "description": "The default document info standalone without document type without content before after the root element",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "defaultDocInfo",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Doc Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:defaultNamespace",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eNamespace\u003c/a\u003e\u003c/code\u003e value denoting the default namespace.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For elements, this is the namespace currently mapped to the empty prefix.\n\u003c/li\u003e\u003cli\u003e For attributes, the default namespace does not carry any namespace information.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Namespace",
        "fct-source": "src/Text-XML-Generator.html#defaultNamespace",
        "fct-type": "function",
        "title": "defaultNamespace"
      },
      "index": {
        "description": "Namespace value denoting the default namespace For elements this is the namespace currently mapped to the empty prefix For attributes the default namespace does not carry any namespace information",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "defaultNamespace",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Namespace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:doc",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an XML document from a \u003ccode\u003e\u003ca\u003eDocInfo\u003c/a\u003e\u003c/code\u003e value and the root element.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "DocInfo -\u003e Xml Elem -\u003e Xml Doc",
        "fct-source": "src/Text-XML-Generator.html#doc",
        "fct-type": "function",
        "title": "doc"
      },
      "index": {
        "description": "Constructs an XML document from DocInfo value and the root element",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "doc",
        "normalized": "DocInfo-\u003eXml Elem-\u003eXml Doc",
        "package": "xmlgen",
        "partial": "",
        "signature": "DocInfo-\u003eXml Elem-\u003eXml Doc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:docInfo_docType",
      "description": {
        "fct-descr": "\u003cp\u003eDocument type (N.B.: rendering does not escape this value)\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-XML-Generator.html#DocInfo",
        "fct-type": "function",
        "title": "docInfo_docType"
      },
      "index": {
        "description": "Document type N.B rendering does not escape this value",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "docInfo_docType",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Info Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:docInfo_postMisc",
      "description": {
        "fct-descr": "\u003cp\u003eContent after the root element\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Xml Doc",
        "fct-source": "src/Text-XML-Generator.html#DocInfo",
        "fct-type": "function",
        "title": "docInfo_postMisc"
      },
      "index": {
        "description": "Content after the root element",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "docInfo_postMisc",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Info Misc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:docInfo_preMisc",
      "description": {
        "fct-descr": "\u003cp\u003eContent before the root element\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Xml Doc",
        "fct-source": "src/Text-XML-Generator.html#DocInfo",
        "fct-type": "function",
        "title": "docInfo_preMisc"
      },
      "index": {
        "description": "Content before the root element",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "docInfo_preMisc",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Info Misc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:docInfo_standalone",
      "description": {
        "fct-descr": "\u003cp\u003eValue of the \u003ccode\u003estandalone\u003c/code\u003e attribute in the \u003ccode\u003e\u003c?xml ... ?\u003e\u003c/code\u003e header\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Bool",
        "fct-source": "src/Text-XML-Generator.html#DocInfo",
        "fct-type": "function",
        "title": "docInfo_standalone"
      },
      "index": {
        "description": "Value of the standalone attribute in the xml header",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "docInfo_standalone",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:fromBuilder",
      "description": {
        "fct-descr": "\u003cp\u003eCreates the target type from a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Builder -\u003e t",
        "fct-source": "src/Text-XML-Generator.html#fromBuilder",
        "fct-type": "method",
        "title": "fromBuilder"
      },
      "index": {
        "description": "Creates the target type from Builder",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "fromBuilder",
        "normalized": "Builder-\u003ea",
        "package": "xmlgen",
        "partial": "Builder",
        "signature": "Builder-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:namespace",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a qualified XML namespace.\n   The given URI must not be the empty string.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Prefix -\u003e Uri -\u003e Namespace",
        "fct-source": "src/Text-XML-Generator.html#namespace",
        "fct-type": "function",
        "title": "namespace"
      },
      "index": {
        "description": "Constructs qualified XML namespace The given URI must not be the empty string",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "namespace",
        "normalized": "Prefix-\u003eUri-\u003eNamespace",
        "package": "xmlgen",
        "partial": "",
        "signature": "Prefix-\u003eUri-\u003eNamespace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:noAttrs",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty attribute list.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Xml Attr",
        "fct-source": "src/Text-XML-Generator.html#noAttrs",
        "fct-type": "function",
        "title": "noAttrs"
      },
      "index": {
        "description": "The empty attribute list",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "noAttrs",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Attrs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:noElems",
      "description": {
        "fct-descr": "\u003cp\u003eNo elements at all.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Xml Elem",
        "fct-source": "src/Text-XML-Generator.html#noElems",
        "fct-type": "function",
        "title": "noElems"
      },
      "index": {
        "description": "No elements at all",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "noElems",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Elems",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:noNamespace",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eNamespace\u003c/a\u003e\u003c/code\u003e value denoting the absence of any XML namespace information.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Namespace",
        "fct-source": "src/Text-XML-Generator.html#noNamespace",
        "fct-type": "function",
        "title": "noNamespace"
      },
      "index": {
        "description": "Namespace value denoting the absence of any XML namespace information",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "noNamespace",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Namespace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xattr",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a simple-named attribute by escaping its value.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Name -\u003e TextContent -\u003e Xml Attr",
        "fct-source": "src/Text-XML-Generator.html#xattr",
        "fct-type": "function",
        "title": "xattr"
      },
      "index": {
        "description": "Construct simple-named attribute by escaping its value",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xattr",
        "normalized": "Name-\u003eTextContent-\u003eXml Attr",
        "package": "xmlgen",
        "partial": "",
        "signature": "Name-\u003eTextContent-\u003eXml Attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xattrQ",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an attribute by escaping its value.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Namespace -\u003e Name -\u003e TextContent -\u003e Xml Attr",
        "fct-source": "src/Text-XML-Generator.html#xattrQ",
        "fct-type": "function",
        "title": "xattrQ"
      },
      "index": {
        "description": "Construct an attribute by escaping its value",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xattrQ",
        "normalized": "Namespace-\u003eName-\u003eTextContent-\u003eXml Attr",
        "package": "xmlgen",
        "partial": "",
        "signature": "Namespace-\u003eName-\u003eTextContent-\u003eXml Attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xattrQRaw",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an attribute without escaping its value.\n \u003cem\u003eNote:\u003c/em\u003e attribute values are quoted with double quotes.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Namespace -\u003e Name -\u003e Builder -\u003e Xml Attr",
        "fct-source": "src/Text-XML-Generator.html#xattrQRaw",
        "fct-type": "function",
        "title": "xattrQRaw"
      },
      "index": {
        "description": "Construct an attribute without escaping its value Note attribute values are quoted with double quotes",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xattrQRaw",
        "normalized": "Namespace-\u003eName-\u003eBuilder-\u003eXml Attr",
        "package": "xmlgen",
        "partial": "QRaw",
        "signature": "Namespace-\u003eName-\u003eBuilder-\u003eXml Attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xattrs",
      "description": {
        "fct-descr": "\u003cp\u003eMerge a list of attributes into a single piece of XML at the attribute level.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "[Xml Attr] -\u003e Xml Attr",
        "fct-source": "src/Text-XML-Generator.html#xattrs",
        "fct-type": "function",
        "title": "xattrs"
      },
      "index": {
        "description": "Merge list of attributes into single piece of XML at the attribute level",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xattrs",
        "normalized": "[Xml Attr]-\u003eXml Attr",
        "package": "xmlgen",
        "partial": "",
        "signature": "[Xml Attr]-\u003eXml Attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xcomment",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an XML comment.\n \u003cem\u003eNote:\u003c/em\u003e No escaping is performed on the text of the comment.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "String -\u003e Xml t",
        "fct-source": "src/Text-XML-Generator.html#xcomment",
        "fct-type": "method",
        "title": "xcomment"
      },
      "index": {
        "description": "Constructs an XML comment Note No escaping is performed on the text of the comment",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xcomment",
        "normalized": "String-\u003eXml a",
        "package": "xmlgen",
        "partial": "",
        "signature": "String-\u003eXml t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xelem",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a simple-named element with the given children.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Name -\u003e c -\u003e Xml Elem",
        "fct-source": "src/Text-XML-Generator.html#xelem",
        "fct-type": "function",
        "title": "xelem"
      },
      "index": {
        "description": "Construct simple-named element with the given children",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xelem",
        "normalized": "Name-\u003ea-\u003eXml Elem",
        "package": "xmlgen",
        "partial": "",
        "signature": "Name-\u003ec-\u003eXml Elem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xelemEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a simple-named element without any children.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Name -\u003e Xml Elem",
        "fct-source": "src/Text-XML-Generator.html#xelemEmpty",
        "fct-type": "function",
        "title": "xelemEmpty"
      },
      "index": {
        "description": "Construct simple-named element without any children",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xelemEmpty",
        "normalized": "Name-\u003eXml Elem",
        "package": "xmlgen",
        "partial": "Empty",
        "signature": "Name-\u003eXml Elem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xelemQ",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an element with the given children.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Namespace -\u003e Name -\u003e c -\u003e Xml Elem",
        "fct-source": "src/Text-XML-Generator.html#xelemQ",
        "fct-type": "function",
        "title": "xelemQ"
      },
      "index": {
        "description": "Construct an element with the given children",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xelemQ",
        "normalized": "Namespace-\u003eName-\u003ea-\u003eXml Elem",
        "package": "xmlgen",
        "partial": "",
        "signature": "Namespace-\u003eName-\u003ec-\u003eXml Elem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xelemQEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an element without any children.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Namespace -\u003e Name -\u003e Xml Elem",
        "fct-source": "src/Text-XML-Generator.html#xelemQEmpty",
        "fct-type": "function",
        "title": "xelemQEmpty"
      },
      "index": {
        "description": "Construct an element without any children",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xelemQEmpty",
        "normalized": "Namespace-\u003eName-\u003eXml Elem",
        "package": "xmlgen",
        "partial": "QEmpty",
        "signature": "Namespace-\u003eName-\u003eXml Elem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xelemWithText",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003exelemWithText n t\u003c/code\u003e constructs an XML element with name \u003ccode\u003en\u003c/code\u003e and text content \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Name -\u003e TextContent -\u003e Xml Elem",
        "fct-source": "src/Text-XML-Generator.html#xelemWithText",
        "fct-type": "function",
        "title": "xelemWithText"
      },
      "index": {
        "description": "The expression xelemWithText constructs an XML element with name and text content",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xelemWithText",
        "normalized": "Name-\u003eTextContent-\u003eXml Elem",
        "package": "xmlgen",
        "partial": "With Text",
        "signature": "Name-\u003eTextContent-\u003eXml Elem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xelems",
      "description": {
        "fct-descr": "\u003cp\u003eMerges a list of elements into a single piece of XML at the element level.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "[Xml Elem] -\u003e Xml Elem",
        "fct-source": "src/Text-XML-Generator.html#xelems",
        "fct-type": "function",
        "title": "xelems"
      },
      "index": {
        "description": "Merges list of elements into single piece of XML at the element level",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xelems",
        "normalized": "[Xml Elem]-\u003eXml Elem",
        "package": "xmlgen",
        "partial": "",
        "signature": "[Xml Elem]-\u003eXml Elem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xempty",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty, polymorphic piece of XML.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Xml t",
        "fct-source": "src/Text-XML-Generator.html#xempty",
        "fct-type": "function",
        "title": "xempty"
      },
      "index": {
        "description": "An empty polymorphic piece of XML",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xempty",
        "normalized": "",
        "package": "xmlgen",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xentityRef",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a reference to the named entity.\n \u003cem\u003eNote:\u003c/em\u003e no escaping is performed on the name of the entity\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Name -\u003e Xml Elem",
        "fct-source": "src/Text-XML-Generator.html#xentityRef",
        "fct-type": "function",
        "title": "xentityRef"
      },
      "index": {
        "description": "Constructs reference to the named entity Note no escaping is performed on the name of the entity",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xentityRef",
        "normalized": "Name-\u003eXml Elem",
        "package": "xmlgen",
        "partial": "Ref",
        "signature": "Name-\u003eXml Elem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xhtmlFramesetDocInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDocument info for XHTML 1.0 frameset.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "DocInfo",
        "fct-source": "src/Text-XML-Generator.html#xhtmlFramesetDocInfo",
        "fct-type": "function",
        "title": "xhtmlFramesetDocInfo"
      },
      "index": {
        "description": "Document info for XHTML frameset",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xhtmlFramesetDocInfo",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Frameset Doc Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xhtmlRootElem",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs the root element of an XHTML document.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Text -\u003e Xml Elem -\u003e Xml Elem",
        "fct-source": "src/Text-XML-Generator.html#xhtmlRootElem",
        "fct-type": "function",
        "title": "xhtmlRootElem"
      },
      "index": {
        "description": "Constructs the root element of an XHTML document",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xhtmlRootElem",
        "normalized": "Text-\u003eXml Elem-\u003eXml Elem",
        "package": "xmlgen",
        "partial": "Root Elem",
        "signature": "Text-\u003eXml Elem-\u003eXml Elem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xhtmlStrictDocInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDocument info for XHTML 1.0 strict.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "DocInfo",
        "fct-source": "src/Text-XML-Generator.html#xhtmlStrictDocInfo",
        "fct-type": "function",
        "title": "xhtmlStrictDocInfo"
      },
      "index": {
        "description": "Document info for XHTML strict",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xhtmlStrictDocInfo",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Strict Doc Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xhtmlTransitionalDocInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDocument info for XHTML 1.0 transitional.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "DocInfo",
        "fct-source": "src/Text-XML-Generator.html#xhtmlTransitionalDocInfo",
        "fct-type": "function",
        "title": "xhtmlTransitionalDocInfo"
      },
      "index": {
        "description": "Document info for XHTML transitional",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xhtmlTransitionalDocInfo",
        "normalized": "",
        "package": "xmlgen",
        "partial": "Transitional Doc Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xprocessingInstruction",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a processing instruction with the given target and content.\n \u003cem\u003eNote:\u003c/em\u003e Rendering does not perform escaping on the target and the content.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "String -\u003e String -\u003e Xml t",
        "fct-source": "src/Text-XML-Generator.html#xprocessingInstruction",
        "fct-type": "method",
        "title": "xprocessingInstruction"
      },
      "index": {
        "description": "Constructs processing instruction with the given target and content Note Rendering does not perform escaping on the target and the content",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xprocessingInstruction",
        "normalized": "String-\u003eString-\u003eXml a",
        "package": "xmlgen",
        "partial": "Instruction",
        "signature": "String-\u003eString-\u003eXml t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xrender",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a given piece of XML.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Xml r -\u003e t",
        "fct-source": "src/Text-XML-Generator.html#xrender",
        "fct-type": "function",
        "title": "xrender"
      },
      "index": {
        "description": "Renders given piece of XML",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xrender",
        "normalized": "Xml a-\u003eb",
        "package": "xmlgen",
        "partial": "",
        "signature": "Xml r-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xtext",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a text node by escaping the given argument.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "TextContent -\u003e Xml Elem",
        "fct-source": "src/Text-XML-Generator.html#xtext",
        "fct-type": "function",
        "title": "xtext"
      },
      "index": {
        "description": "Constructs text node by escaping the given argument",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xtext",
        "normalized": "TextContent-\u003eXml Elem",
        "package": "xmlgen",
        "partial": "",
        "signature": "TextContent-\u003eXml Elem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xtextRaw",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a text node \u003cem\u003ewithout\u003c/em\u003e escaping the given argument.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Generator",
        "fct-package": "xmlgen",
        "fct-signature": "Builder -\u003e Xml Elem",
        "fct-source": "src/Text-XML-Generator.html#xtextRaw",
        "fct-type": "function",
        "title": "xtextRaw"
      },
      "index": {
        "description": "Constructs text node without escaping the given argument",
        "hierarchy": "Text XML Generator",
        "module": "Text.XML.Generator",
        "name": "xtextRaw",
        "normalized": "Builder-\u003eXml Elem",
        "package": "xmlgen",
        "partial": "Raw",
        "signature": "Builder-\u003eXml Elem"
      }
    }
  }
]