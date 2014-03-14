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
        "word": "xmlgen"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides combinators for generating XML documents.\n\u003c/p\u003e\u003cp\u003eAs an example, suppose you want to generate the following XML document:\n\u003c/p\u003e\u003cpre\u003e \u003c?xml version=\"1.0\"?\u003e\n \u003cpeople\u003e\n   \u003cperson age=\"32\"\u003eStefan\u003c/person\u003e\n   \u003cperson age=\"4\"\u003eJudith\u003c/person\u003e\n \u003c/people\u003e\n\u003c/pre\u003e\u003cp\u003eThen you could use the following Haskell code:\n\u003c/p\u003e\u003cpre\u003e\n let people = [(\"Stefan\", \"32\"), (\"Judith\", \"4\")]\n in \u003ccode\u003e\u003ca\u003edoc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDocInfo\u003c/a\u003e\u003c/code\u003e $\n      \u003ccode\u003e\u003ca\u003exelem\u003c/a\u003e\u003c/code\u003e \"people\" $\n        \u003ccode\u003e\u003ca\u003exelems\u003c/a\u003e\u003c/code\u003e $ map ((name, age) -\u003e \u003ccode\u003e\u003ca\u003exelem\u003c/a\u003e\u003c/code\u003e \"person\" (\u003ccode\u003e\u003ca\u003exattr\u003c/a\u003e\u003c/code\u003e \"age\" age \u003ccode\u003e\u003ca\u003e\u003c#\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003extext\u003c/a\u003e\u003c/code\u003e name)) people\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.XML.Generator",
          "name": "Generator",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides combinators for generating XML documents As an example suppose you want to generate the following XML document xml version people person age Stefan person person age Judith person people Then you could use the following Haskell code let people Stefan Judith in doc defaultDocInfo xelem people xelems map name age xelem person xattr age age xtext name people",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "Generator",
          "package": "xmlgen",
          "partial": "Generator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for adding children to an element.\n\u003c/p\u003e\u003cp\u003eThe various instances of this class allow the addition of different kinds\n of children.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "AddChildren",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html#AddChildren",
          "type": "class"
        },
        "index": {
          "description": "Class for adding children to an element The various instances of this class allow the addition of different kinds of children",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "AddChildren",
          "package": "xmlgen",
          "partial": "Add Children",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:AddChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA piece of XML at the attribute level.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "Attr",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html#Attr",
          "type": "data"
        },
        "index": {
          "description": "piece of XML at the attribute level",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "Attr",
          "package": "xmlgen",
          "partial": "Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA piece of XML at the document level.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "Doc",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html#Doc",
          "type": "data"
        },
        "index": {
          "description": "piece of XML at the document level",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "Doc",
          "package": "xmlgen",
          "partial": "Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDocInfo\u003c/a\u003e\u003c/code\u003e type contains all information of an XML document except the root element.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "DocInfo",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html#DocInfo",
          "type": "data"
        },
        "index": {
          "description": "The DocInfo type contains all information of an XML document except the root element",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "DocInfo",
          "package": "xmlgen",
          "partial": "Doc Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:DocInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA piece of XML at the element level.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "Elem",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html#Elem",
          "type": "data"
        },
        "index": {
          "description": "piece of XML at the element level",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "Elem",
          "package": "xmlgen",
          "partial": "Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass providing methods for adding processing instructions and comments.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "Misc",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html#Misc",
          "type": "class"
        },
        "index": {
          "description": "Class providing methods for adding processing instructions and comments",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "Misc",
          "package": "xmlgen",
          "partial": "Misc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Misc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for names\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "Name",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html#Name",
          "type": "type"
        },
        "index": {
          "description": "type for names",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "Name",
          "package": "xmlgen",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for representing presence or absence of an XML namespace.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "Namespace",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html#Namespace",
          "type": "data"
        },
        "index": {
          "description": "Type for representing presence or absence of an XML namespace",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "Namespace",
          "package": "xmlgen",
          "partial": "Namespace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Namespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNamespace prefix.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "Prefix",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html#Prefix",
          "type": "type"
        },
        "index": {
          "description": "Namespace prefix",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "Prefix",
          "package": "xmlgen",
          "partial": "Prefix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny type subject to rendering must implement this type class.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "Renderable",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html#Renderable",
          "type": "class"
        },
        "index": {
          "description": "Any type subject to rendering must implement this type class",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "Renderable",
          "package": "xmlgen",
          "partial": "Renderable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Renderable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText content subject to escaping.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "TextContent",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html#TextContent",
          "type": "type"
        },
        "index": {
          "description": "Text content subject to escaping",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "TextContent",
          "package": "xmlgen",
          "partial": "Text Content",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:TextContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNamespace URI.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "Uri",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html#Uri",
          "type": "type"
        },
        "index": {
          "description": "Namespace URI",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "Uri",
          "package": "xmlgen",
          "partial": "Uri",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003eXml t\u003c/code\u003e represent a piece of XML of type \u003ccode\u003et\u003c/code\u003e, where \u003ccode\u003et\u003c/code\u003e\n   is usually one of \u003ccode\u003e\u003ca\u003eElem\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAttr\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "Xml",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html#Xml",
          "type": "data"
        },
        "index": {
          "description": "The type Xml represent piece of XML of type where is usually one of Elem Attr or Doc",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "Xml",
          "package": "xmlgen",
          "partial": "Xml",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:Xml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstances of the \u003ccode\u003eXmlOutput\u003c/code\u003e class may serve as target of serializing an XML document.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "XmlOutput",
          "package": "xmlgen",
          "source": "src/Text-XML-Generator.html#XmlOutput",
          "type": "class"
        },
        "index": {
          "description": "Instances of the XmlOutput class may serve as target of serializing an XML document",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "XmlOutput",
          "package": "xmlgen",
          "partial": "Xml Output",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#t:XmlOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortcut for constructing pairs. Used in combination with \u003ccode\u003e\u003ca\u003exelem\u003c/a\u003e\u003c/code\u003e for separating child-attributes\n   from child-elements.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "(\u003c#\u003e)",
          "package": "xmlgen",
          "signature": "a -\u003e b -\u003e (a, b)",
          "source": "src/Text-XML-Generator.html#%3C%23%3E",
          "type": "function"
        },
        "index": {
          "description": "Shortcut for constructing pairs Used in combination with xelem for separating child-attributes from child-elements",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "(\u003c#\u003e) \u003c#\u003e",
          "normalized": "a-\u003eb-\u003e(a,b)",
          "package": "xmlgen",
          "signature": "a-\u003eb-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:-60--35--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "(\u003c\u003e)",
          "package": "xmlgen",
          "signature": "m -\u003e m -\u003e m",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for mappend",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "xmlgen",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Generator",
          "name": "DocInfo",
          "package": "xmlgen",
          "signature": "DocInfo",
          "source": "src/Text-XML-Generator.html#DocInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "DocInfo",
          "package": "xmlgen",
          "partial": "Doc Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:DocInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default document info (standalone, without document type, without content before/after the root element).\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "defaultDocInfo",
          "package": "xmlgen",
          "signature": "DocInfo",
          "source": "src/Text-XML-Generator.html#defaultDocInfo",
          "type": "function"
        },
        "index": {
          "description": "The default document info standalone without document type without content before after the root element",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "defaultDocInfo",
          "package": "xmlgen",
          "partial": "Doc Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:defaultDocInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eNamespace\u003c/a\u003e\u003c/code\u003e value denoting the default namespace.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For elements, this is the namespace currently mapped to the empty prefix.\n\u003c/li\u003e\u003cli\u003e For attributes, the default namespace does not carry any namespace information.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.Generator",
          "name": "defaultNamespace",
          "package": "xmlgen",
          "signature": "Namespace",
          "source": "src/Text-XML-Generator.html#defaultNamespace",
          "type": "function"
        },
        "index": {
          "description": "Namespace value denoting the default namespace For elements this is the namespace currently mapped to the empty prefix For attributes the default namespace does not carry any namespace information",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "defaultNamespace",
          "package": "xmlgen",
          "partial": "Namespace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:defaultNamespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an XML document from a \u003ccode\u003e\u003ca\u003eDocInfo\u003c/a\u003e\u003c/code\u003e value and the root element.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "doc",
          "package": "xmlgen",
          "signature": "DocInfo -\u003e Xml Elem -\u003e Xml Doc",
          "source": "src/Text-XML-Generator.html#doc",
          "type": "function"
        },
        "index": {
          "description": "Constructs an XML document from DocInfo value and the root element",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "doc",
          "normalized": "DocInfo-\u003eXml Elem-\u003eXml Doc",
          "package": "xmlgen",
          "signature": "DocInfo-\u003eXml Elem-\u003eXml Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument type (N.B.: rendering does not escape this value)\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "docInfo_docType",
          "package": "xmlgen",
          "signature": "Maybe String",
          "source": "src/Text-XML-Generator.html#DocInfo",
          "type": "function"
        },
        "index": {
          "description": "Document type N.B rendering does not escape this value",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "docInfo_docType",
          "package": "xmlgen",
          "partial": "Info Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:docInfo_docType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContent after the root element\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "docInfo_postMisc",
          "package": "xmlgen",
          "signature": "Xml Doc",
          "source": "src/Text-XML-Generator.html#DocInfo",
          "type": "function"
        },
        "index": {
          "description": "Content after the root element",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "docInfo_postMisc",
          "package": "xmlgen",
          "partial": "Info Misc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:docInfo_postMisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContent before the root element\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "docInfo_preMisc",
          "package": "xmlgen",
          "signature": "Xml Doc",
          "source": "src/Text-XML-Generator.html#DocInfo",
          "type": "function"
        },
        "index": {
          "description": "Content before the root element",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "docInfo_preMisc",
          "package": "xmlgen",
          "partial": "Info Misc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:docInfo_preMisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue of the \u003ccode\u003estandalone\u003c/code\u003e attribute in the \u003ccode\u003e\u003c?xml ... ?\u003e\u003c/code\u003e header\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "docInfo_standalone",
          "package": "xmlgen",
          "signature": "Bool",
          "source": "src/Text-XML-Generator.html#DocInfo",
          "type": "function"
        },
        "index": {
          "description": "Value of the standalone attribute in the xml header",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "docInfo_standalone",
          "package": "xmlgen",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:docInfo_standalone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates the target type from a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "fromBuilder",
          "package": "xmlgen",
          "signature": "Builder -\u003e t",
          "source": "src/Text-XML-Generator.html#fromBuilder",
          "type": "method"
        },
        "index": {
          "description": "Creates the target type from Builder",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "fromBuilder",
          "normalized": "Builder-\u003ea",
          "package": "xmlgen",
          "partial": "Builder",
          "signature": "Builder-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:fromBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a qualified XML namespace.\n   The given URI must not be the empty string.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "namespace",
          "package": "xmlgen",
          "signature": "Prefix -\u003e Uri -\u003e Namespace",
          "source": "src/Text-XML-Generator.html#namespace",
          "type": "function"
        },
        "index": {
          "description": "Constructs qualified XML namespace The given URI must not be the empty string",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "namespace",
          "normalized": "Prefix-\u003eUri-\u003eNamespace",
          "package": "xmlgen",
          "signature": "Prefix-\u003eUri-\u003eNamespace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:namespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty attribute list.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "noAttrs",
          "package": "xmlgen",
          "signature": "Xml Attr",
          "source": "src/Text-XML-Generator.html#noAttrs",
          "type": "function"
        },
        "index": {
          "description": "The empty attribute list",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "noAttrs",
          "package": "xmlgen",
          "partial": "Attrs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:noAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo elements at all.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "noElems",
          "package": "xmlgen",
          "signature": "Xml Elem",
          "source": "src/Text-XML-Generator.html#noElems",
          "type": "function"
        },
        "index": {
          "description": "No elements at all",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "noElems",
          "package": "xmlgen",
          "partial": "Elems",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:noElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eNamespace\u003c/a\u003e\u003c/code\u003e value denoting the absence of any XML namespace information.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "noNamespace",
          "package": "xmlgen",
          "signature": "Namespace",
          "source": "src/Text-XML-Generator.html#noNamespace",
          "type": "function"
        },
        "index": {
          "description": "Namespace value denoting the absence of any XML namespace information",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "noNamespace",
          "package": "xmlgen",
          "partial": "Namespace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:noNamespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a simple-named attribute by escaping its value.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xattr",
          "package": "xmlgen",
          "signature": "Name -\u003e TextContent -\u003e Xml Attr",
          "source": "src/Text-XML-Generator.html#xattr",
          "type": "function"
        },
        "index": {
          "description": "Construct simple-named attribute by escaping its value",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xattr",
          "normalized": "Name-\u003eTextContent-\u003eXml Attr",
          "package": "xmlgen",
          "signature": "Name-\u003eTextContent-\u003eXml Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xattr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an attribute by escaping its value.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xattrQ",
          "package": "xmlgen",
          "signature": "Namespace -\u003e Name -\u003e TextContent -\u003e Xml Attr",
          "source": "src/Text-XML-Generator.html#xattrQ",
          "type": "function"
        },
        "index": {
          "description": "Construct an attribute by escaping its value",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xattrQ",
          "normalized": "Namespace-\u003eName-\u003eTextContent-\u003eXml Attr",
          "package": "xmlgen",
          "signature": "Namespace-\u003eName-\u003eTextContent-\u003eXml Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xattrQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an attribute without escaping its value.\n \u003cem\u003eNote:\u003c/em\u003e attribute values are quoted with double quotes.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xattrQRaw",
          "package": "xmlgen",
          "signature": "Namespace -\u003e Name -\u003e Builder -\u003e Xml Attr",
          "source": "src/Text-XML-Generator.html#xattrQRaw",
          "type": "function"
        },
        "index": {
          "description": "Construct an attribute without escaping its value Note attribute values are quoted with double quotes",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xattrQRaw",
          "normalized": "Namespace-\u003eName-\u003eBuilder-\u003eXml Attr",
          "package": "xmlgen",
          "partial": "QRaw",
          "signature": "Namespace-\u003eName-\u003eBuilder-\u003eXml Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xattrQRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge a list of attributes into a single piece of XML at the attribute level.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xattrs",
          "package": "xmlgen",
          "signature": "[Xml Attr] -\u003e Xml Attr",
          "source": "src/Text-XML-Generator.html#xattrs",
          "type": "function"
        },
        "index": {
          "description": "Merge list of attributes into single piece of XML at the attribute level",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xattrs",
          "normalized": "[Xml Attr]-\u003eXml Attr",
          "package": "xmlgen",
          "signature": "[Xml Attr]-\u003eXml Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xattrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an XML comment.\n \u003cem\u003eNote:\u003c/em\u003e No escaping is performed on the text of the comment.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xcomment",
          "package": "xmlgen",
          "signature": "String -\u003e Xml t",
          "source": "src/Text-XML-Generator.html#xcomment",
          "type": "method"
        },
        "index": {
          "description": "Constructs an XML comment Note No escaping is performed on the text of the comment",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xcomment",
          "normalized": "String-\u003eXml a",
          "package": "xmlgen",
          "signature": "String-\u003eXml t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xcomment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a simple-named element with the given children.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xelem",
          "package": "xmlgen",
          "signature": "Name -\u003e c -\u003e Xml Elem",
          "source": "src/Text-XML-Generator.html#xelem",
          "type": "function"
        },
        "index": {
          "description": "Construct simple-named element with the given children",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xelem",
          "normalized": "Name-\u003ea-\u003eXml Elem",
          "package": "xmlgen",
          "signature": "Name-\u003ec-\u003eXml Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xelem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a simple-named element without any children.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xelemEmpty",
          "package": "xmlgen",
          "signature": "Name -\u003e Xml Elem",
          "source": "src/Text-XML-Generator.html#xelemEmpty",
          "type": "function"
        },
        "index": {
          "description": "Construct simple-named element without any children",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xelemEmpty",
          "normalized": "Name-\u003eXml Elem",
          "package": "xmlgen",
          "partial": "Empty",
          "signature": "Name-\u003eXml Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xelemEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an element with the given children.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xelemQ",
          "package": "xmlgen",
          "signature": "Namespace -\u003e Name -\u003e c -\u003e Xml Elem",
          "source": "src/Text-XML-Generator.html#xelemQ",
          "type": "function"
        },
        "index": {
          "description": "Construct an element with the given children",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xelemQ",
          "normalized": "Namespace-\u003eName-\u003ea-\u003eXml Elem",
          "package": "xmlgen",
          "signature": "Namespace-\u003eName-\u003ec-\u003eXml Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xelemQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an element without any children.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xelemQEmpty",
          "package": "xmlgen",
          "signature": "Namespace -\u003e Name -\u003e Xml Elem",
          "source": "src/Text-XML-Generator.html#xelemQEmpty",
          "type": "function"
        },
        "index": {
          "description": "Construct an element without any children",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xelemQEmpty",
          "normalized": "Namespace-\u003eName-\u003eXml Elem",
          "package": "xmlgen",
          "partial": "QEmpty",
          "signature": "Namespace-\u003eName-\u003eXml Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xelemQEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003exelemWithText n t\u003c/code\u003e constructs an XML element with name \u003ccode\u003en\u003c/code\u003e and text content \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xelemWithText",
          "package": "xmlgen",
          "signature": "Name -\u003e TextContent -\u003e Xml Elem",
          "source": "src/Text-XML-Generator.html#xelemWithText",
          "type": "function"
        },
        "index": {
          "description": "The expression xelemWithText constructs an XML element with name and text content",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xelemWithText",
          "normalized": "Name-\u003eTextContent-\u003eXml Elem",
          "package": "xmlgen",
          "partial": "With Text",
          "signature": "Name-\u003eTextContent-\u003eXml Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xelemWithText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges a list of elements into a single piece of XML at the element level.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xelems",
          "package": "xmlgen",
          "signature": "[Xml Elem] -\u003e Xml Elem",
          "source": "src/Text-XML-Generator.html#xelems",
          "type": "function"
        },
        "index": {
          "description": "Merges list of elements into single piece of XML at the element level",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xelems",
          "normalized": "[Xml Elem]-\u003eXml Elem",
          "package": "xmlgen",
          "signature": "[Xml Elem]-\u003eXml Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xelems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty, polymorphic piece of XML.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xempty",
          "package": "xmlgen",
          "signature": "Xml t",
          "source": "src/Text-XML-Generator.html#xempty",
          "type": "function"
        },
        "index": {
          "description": "An empty polymorphic piece of XML",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xempty",
          "package": "xmlgen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a reference to the named entity.\n \u003cem\u003eNote:\u003c/em\u003e no escaping is performed on the name of the entity\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xentityRef",
          "package": "xmlgen",
          "signature": "Name -\u003e Xml Elem",
          "source": "src/Text-XML-Generator.html#xentityRef",
          "type": "function"
        },
        "index": {
          "description": "Constructs reference to the named entity Note no escaping is performed on the name of the entity",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xentityRef",
          "normalized": "Name-\u003eXml Elem",
          "package": "xmlgen",
          "partial": "Ref",
          "signature": "Name-\u003eXml Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xentityRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument info for XHTML 1.0 frameset.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xhtmlFramesetDocInfo",
          "package": "xmlgen",
          "signature": "DocInfo",
          "source": "src/Text-XML-Generator.html#xhtmlFramesetDocInfo",
          "type": "function"
        },
        "index": {
          "description": "Document info for XHTML frameset",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xhtmlFramesetDocInfo",
          "package": "xmlgen",
          "partial": "Frameset Doc Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xhtmlFramesetDocInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs the root element of an XHTML document.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xhtmlRootElem",
          "package": "xmlgen",
          "signature": "Text -\u003e Xml Elem -\u003e Xml Elem",
          "source": "src/Text-XML-Generator.html#xhtmlRootElem",
          "type": "function"
        },
        "index": {
          "description": "Constructs the root element of an XHTML document",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xhtmlRootElem",
          "normalized": "Text-\u003eXml Elem-\u003eXml Elem",
          "package": "xmlgen",
          "partial": "Root Elem",
          "signature": "Text-\u003eXml Elem-\u003eXml Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xhtmlRootElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument info for XHTML 1.0 strict.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xhtmlStrictDocInfo",
          "package": "xmlgen",
          "signature": "DocInfo",
          "source": "src/Text-XML-Generator.html#xhtmlStrictDocInfo",
          "type": "function"
        },
        "index": {
          "description": "Document info for XHTML strict",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xhtmlStrictDocInfo",
          "package": "xmlgen",
          "partial": "Strict Doc Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xhtmlStrictDocInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument info for XHTML 1.0 transitional.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xhtmlTransitionalDocInfo",
          "package": "xmlgen",
          "signature": "DocInfo",
          "source": "src/Text-XML-Generator.html#xhtmlTransitionalDocInfo",
          "type": "function"
        },
        "index": {
          "description": "Document info for XHTML transitional",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xhtmlTransitionalDocInfo",
          "package": "xmlgen",
          "partial": "Transitional Doc Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xhtmlTransitionalDocInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a processing instruction with the given target and content.\n \u003cem\u003eNote:\u003c/em\u003e Rendering does not perform escaping on the target and the content.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xprocessingInstruction",
          "package": "xmlgen",
          "signature": "String -\u003e String -\u003e Xml t",
          "source": "src/Text-XML-Generator.html#xprocessingInstruction",
          "type": "method"
        },
        "index": {
          "description": "Constructs processing instruction with the given target and content Note Rendering does not perform escaping on the target and the content",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xprocessingInstruction",
          "normalized": "String-\u003eString-\u003eXml a",
          "package": "xmlgen",
          "partial": "Instruction",
          "signature": "String-\u003eString-\u003eXml t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xprocessingInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a given piece of XML.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xrender",
          "package": "xmlgen",
          "signature": "Xml r -\u003e t",
          "source": "src/Text-XML-Generator.html#xrender",
          "type": "function"
        },
        "index": {
          "description": "Renders given piece of XML",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xrender",
          "normalized": "Xml a-\u003eb",
          "package": "xmlgen",
          "signature": "Xml r-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xrender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a text node by escaping the given argument.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xtext",
          "package": "xmlgen",
          "signature": "TextContent -\u003e Xml Elem",
          "source": "src/Text-XML-Generator.html#xtext",
          "type": "function"
        },
        "index": {
          "description": "Constructs text node by escaping the given argument",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xtext",
          "normalized": "TextContent-\u003eXml Elem",
          "package": "xmlgen",
          "signature": "TextContent-\u003eXml Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xtext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a text node \u003cem\u003ewithout\u003c/em\u003e escaping the given argument.\n\u003c/p\u003e",
          "module": "Text.XML.Generator",
          "name": "xtextRaw",
          "package": "xmlgen",
          "signature": "Builder -\u003e Xml Elem",
          "source": "src/Text-XML-Generator.html#xtextRaw",
          "type": "function"
        },
        "index": {
          "description": "Constructs text node without escaping the given argument",
          "hierarchy": "Text XML Generator",
          "module": "Text.XML.Generator",
          "name": "xtextRaw",
          "normalized": "Builder-\u003eXml Elem",
          "package": "xmlgen",
          "partial": "Raw",
          "signature": "Builder-\u003eXml Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlgen/docs/Text-XML-Generator.html#v:xtextRaw"
      }
    }
  ]
]