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
        "word": "xml-conduit-writer"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOvercome XML insanity, node by node.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n let doc = document \"root\" $ do\n     element \"hello\" $ content \"world\"\n     element \"hierarchy\" $ do\n         element \"simple\" True\n         element \"as\" (\"it should be\" :: Text)\n         toXML $ Just . T.pack $ \"like this\"\n     comment \"that's it!\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.XML.Writer",
          "name": "Writer",
          "package": "xml-conduit-writer",
          "source": "src/Text-XML-Writer.html",
          "type": "module"
        },
        "index": {
          "description": "Overcome XML insanity node by node LANGUAGE OverloadedStrings let doc document root do element hello content world element hierarchy do element simple True element as it should be Text toXML Just T.pack like this comment that it",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "Writer",
          "package": "xml-conduit-writer",
          "partial": "Writer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide instances for this class to use your data\n as \u003ca\u003eXML\u003c/a\u003e nodes.\n\u003c/p\u003e",
          "module": "Text.XML.Writer",
          "name": "ToXML",
          "package": "xml-conduit-writer",
          "source": "src/Text-XML-Writer.html#ToXML",
          "type": "class"
        },
        "index": {
          "description": "Provide instances for this class to use your data as XML nodes",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "ToXML",
          "package": "xml-conduit-writer",
          "partial": "To XML",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#t:ToXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode container to be rendered as children nodes.\n\u003c/p\u003e",
          "module": "Text.XML.Writer",
          "name": "XML",
          "package": "xml-conduit-writer",
          "source": "src/Text-XML-Writer.html#XML",
          "type": "type"
        },
        "index": {
          "description": "Node container to be rendered as children nodes",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "XML",
          "package": "xml-conduit-writer",
          "partial": "XML",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#t:XML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach a prefix to a Name.\n\u003c/p\u003e\u003cp\u003eBecause simply placing a colon in an element name\n yields \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as a prefix and children will\n revert to en empty namespace.\n\u003c/p\u003e",
          "module": "Text.XML.Writer",
          "name": "(!:)",
          "package": "xml-conduit-writer",
          "signature": "Text -\u003e Name -\u003e Name",
          "source": "src/Text-XML-Writer.html#%21%3A",
          "type": "function"
        },
        "index": {
          "description": "Attach prefix to Name Because simply placing colon in an element name yields Nothing as prefix and children will revert to en empty namespace",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "(!:) !:",
          "normalized": "Text-\u003eName-\u003eName",
          "package": "xml-conduit-writer",
          "signature": "Text-\u003eName-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:-33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a text comment node.\n\u003c/p\u003e",
          "module": "Text.XML.Writer",
          "name": "comment",
          "package": "xml-conduit-writer",
          "signature": "Text -\u003e XML",
          "source": "src/Text-XML-Writer.html#comment",
          "type": "function"
        },
        "index": {
          "description": "Insert text comment node",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "comment",
          "normalized": "Text-\u003eXML",
          "package": "xml-conduit-writer",
          "signature": "Text-\u003eXML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert text content node.\n\u003c/p\u003e",
          "module": "Text.XML.Writer",
          "name": "content",
          "package": "xml-conduit-writer",
          "signature": "Text -\u003e XML",
          "source": "src/Text-XML-Writer.html#content",
          "type": "function"
        },
        "index": {
          "description": "Insert text content node",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "content",
          "normalized": "Text-\u003eXML",
          "package": "xml-conduit-writer",
          "signature": "Text-\u003eXML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a simple Document starting with a root element.\n\u003c/p\u003e",
          "module": "Text.XML.Writer",
          "name": "document",
          "package": "xml-conduit-writer",
          "signature": "Name-\u003e XML-\u003e Document",
          "type": "function"
        },
        "index": {
          "description": "Create simple Document starting with root element",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "document",
          "normalized": "Name-\u003eXML-\u003eDocument",
          "package": "xml-conduit-writer",
          "signature": "Name-\u003eXML-\u003eDocument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an \u003ca\u003eElement\u003c/a\u003e node constructed with name and children.\n\u003c/p\u003e",
          "module": "Text.XML.Writer",
          "name": "element",
          "package": "xml-conduit-writer",
          "signature": "Name -\u003e a -\u003e XML",
          "source": "src/Text-XML-Writer.html#element",
          "type": "function"
        },
        "index": {
          "description": "Insert an Element node constructed with name and children",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "element",
          "normalized": "Name-\u003ea-\u003eXML",
          "package": "xml-conduit-writer",
          "signature": "Name-\u003ea-\u003eXML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an \u003ca\u003eElement\u003c/a\u003e node constructed with name, attributes and children.\n\u003c/p\u003e",
          "module": "Text.XML.Writer",
          "name": "elementA",
          "package": "xml-conduit-writer",
          "signature": "Name -\u003e [(Name, Text)] -\u003e a -\u003e XML",
          "source": "src/Text-XML-Writer.html#elementA",
          "type": "function"
        },
        "index": {
          "description": "Insert an Element node constructed with name attributes and children",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "elementA",
          "normalized": "Name-\u003e[(Name,Text)]-\u003ea-\u003eXML",
          "package": "xml-conduit-writer",
          "signature": "Name-\u003e[(Name,Text)]-\u003ea-\u003eXML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:elementA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an \u003ca\u003eElement\u003c/a\u003e node converted from Maybe value or do nothing.\n\u003c/p\u003e",
          "module": "Text.XML.Writer",
          "name": "elementMaybe",
          "package": "xml-conduit-writer",
          "signature": "Name -\u003e Maybe a -\u003e XML",
          "source": "src/Text-XML-Writer.html#elementMaybe",
          "type": "function"
        },
        "index": {
          "description": "Insert an Element node converted from Maybe value or do nothing",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "elementMaybe",
          "normalized": "Name-\u003eMaybe a-\u003eXML",
          "package": "xml-conduit-writer",
          "partial": "Maybe",
          "signature": "Name-\u003eMaybe a-\u003eXML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:elementMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo nothing.\n\u003c/p\u003e",
          "module": "Text.XML.Writer",
          "name": "empty",
          "package": "xml-conduit-writer",
          "signature": "XML",
          "source": "src/Text-XML-Writer.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Do nothing",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "empty",
          "package": "xml-conduit-writer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an \u003ca\u003eInstruction\u003c/a\u003e node.\n\u003c/p\u003e",
          "module": "Text.XML.Writer",
          "name": "instruction",
          "package": "xml-conduit-writer",
          "signature": "Text -\u003e Text -\u003e XML",
          "source": "src/Text-XML-Writer.html#instruction",
          "type": "function"
        },
        "index": {
          "description": "Insert an Instruction node",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "instruction",
          "normalized": "Text-\u003eText-\u003eXML",
          "package": "xml-conduit-writer",
          "signature": "Text-\u003eText-\u003eXML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMass-convert to nodes.\n\u003c/p\u003e\u003cpre\u003e let array = element \"container\" $ many \"wrapper\" [1..3]\n\u003c/pre\u003e\u003cp\u003eWhich gives:\n\u003c/p\u003e\u003cpre\u003e \u003ccontainer\u003e\n     \u003cwrapper\u003e1\u003c/wrapper\u003e\n     \u003cwrapper\u003e2\u003c/wrapper\u003e\n     \u003cwrapper\u003e3\u003c/wrapper\u003e\n \u003c/container\u003e\n\u003c/pre\u003e\u003cp\u003eUse `mapM_ toXML xs` to convert a list without wrapping\n each item in separate element.\n\u003c/p\u003e\u003cpre\u003e let mess = element \"container\" $ mapM_ toXML [\"chunky\", \"chunk\"]\n\u003c/pre\u003e\u003cp\u003eContent nodes tend to glue together:\n\u003c/p\u003e\u003cpre\u003e \u003ccontainer\u003echunkychunk\u003c/container\u003e\n\u003c/pre\u003e",
          "module": "Text.XML.Writer",
          "name": "many",
          "package": "xml-conduit-writer",
          "signature": "Name-\u003e [a]-\u003e XML",
          "type": "function"
        },
        "index": {
          "description": "Mass-convert to nodes let array element container many wrapper Which gives container wrapper wrapper wrapper wrapper wrapper wrapper container Use mapM toXML xs to convert list without wrapping each item in separate element let mess element container mapM toXML chunky chunk Content nodes tend to glue together container chunkychunk container",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "many",
          "normalized": "Name-\u003e[a]-\u003eXML",
          "package": "xml-conduit-writer",
          "signature": "Name-\u003e[a]-\u003eXML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert one node.\n\u003c/p\u003e",
          "module": "Text.XML.Writer",
          "name": "node",
          "package": "xml-conduit-writer",
          "signature": "Node -\u003e XML",
          "source": "src/Text-XML-Writer.html#node",
          "type": "function"
        },
        "index": {
          "description": "Insert one node",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "node",
          "normalized": "Node-\u003eXML",
          "package": "xml-conduit-writer",
          "signature": "Node-\u003eXML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender document using xml-conduit's pretty-printer.\n\u003c/p\u003e",
          "module": "Text.XML.Writer",
          "name": "pprint",
          "package": "xml-conduit-writer",
          "signature": "Document -\u003e IO ()",
          "source": "src/Text-XML-Writer.html#pprint",
          "type": "function"
        },
        "index": {
          "description": "Render document using xml-conduit pretty-printer",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "pprint",
          "normalized": "Document-\u003eIO()",
          "package": "xml-conduit-writer",
          "signature": "Document-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:pprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert collected nodes to a list of child nodes.\n\u003c/p\u003e",
          "module": "Text.XML.Writer",
          "name": "render",
          "package": "xml-conduit-writer",
          "signature": "XML -\u003e [Node]",
          "source": "src/Text-XML-Writer.html#render",
          "type": "function"
        },
        "index": {
          "description": "Convert collected nodes to list of child nodes",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "render",
          "normalized": "XML-\u003e[Node]",
          "package": "xml-conduit-writer",
          "signature": "XML-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a SOAPv1.1 document.\n\u003c/p\u003e\u003cp\u003eEmpty header will be ignored.\n Envelope uses a \u003ccode\u003esoapenv\u003c/code\u003e prefix.\n Works great with \u003ccode\u003e\u003ca\u003eToXML\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cpre\u003e data BigData = BigData { webScale :: Bool }\n instance ToXML BigData where\n     toXML (BigData ws) = element (\"v\" !: \"{vendor:uri}bigData\") $ toXML ws\n let doc = soap () (BigData True)\n\u003c/pre\u003e",
          "module": "Text.XML.Writer",
          "name": "soap",
          "package": "xml-conduit-writer",
          "signature": "h -\u003e b -\u003e Document",
          "source": "src/Text-XML-Writer.html#soap",
          "type": "function"
        },
        "index": {
          "description": "Generate SOAPv1.1 document Empty header will be ignored Envelope uses soapenv prefix Works great with ToXML class data BigData BigData webScale Bool instance ToXML BigData where toXML BigData ws element vendor uri bigData toXML ws let doc soap BigData True",
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "soap",
          "normalized": "a-\u003eb-\u003eDocument",
          "package": "xml-conduit-writer",
          "signature": "h-\u003eb-\u003eDocument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:soap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Writer",
          "name": "toXML",
          "package": "xml-conduit-writer",
          "signature": "a -\u003e XML",
          "source": "src/Text-XML-Writer.html#toXML",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Writer",
          "module": "Text.XML.Writer",
          "name": "toXML",
          "normalized": "a-\u003eXML",
          "package": "xml-conduit-writer",
          "partial": "XML",
          "signature": "a-\u003eXML",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:toXML"
      }
    }
  ]
]