[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOvercome XML insanity, node by node.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n let doc = document \"root\" $ do\n     element \"hello\" $ content \"world\"\n     element \"hierarchy\" $ do\n         element \"simple\" True\n         element \"as\" (\"it should be\" :: Text)\n         toXML $ Just . T.pack $ \"like this\"\n     comment \"that's it!\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Writer.html",
        "fct-type": "module",
        "title": "Writer"
      },
      "index": {
        "description": "Overcome XML insanity node by node LANGUAGE OverloadedStrings let doc document root do element hello content world element hierarchy do element simple True element as it should be Text toXML Just T.pack like this comment that it",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "Writer",
        "normalized": "",
        "package": "xml-conduit-writer",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#t:ToXML",
      "description": {
        "fct-descr": "\u003cp\u003eProvide instances for this class to use your data\n as \u003ca\u003eXML\u003c/a\u003e nodes.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "class",
        "fct-source": "src/Text-XML-Writer.html#ToXML",
        "fct-type": "class",
        "title": "ToXML"
      },
      "index": {
        "description": "Provide instances for this class to use your data as XML nodes",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "ToXML",
        "normalized": "",
        "package": "xml-conduit-writer",
        "partial": "To XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#t:XML",
      "description": {
        "fct-descr": "\u003cp\u003eNode container to be rendered as children nodes.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-Writer.html#XML",
        "fct-type": "type",
        "title": "XML"
      },
      "index": {
        "description": "Node container to be rendered as children nodes",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "XML",
        "normalized": "",
        "package": "xml-conduit-writer",
        "partial": "XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:-33-:",
      "description": {
        "fct-descr": "\u003cp\u003eAttach a prefix to a Name.\n\u003c/p\u003e\u003cp\u003eBecause simply placing a colon in an element name\n yields \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as a prefix and children will\n revert to en empty namespace.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "Text -\u003e Name -\u003e Name",
        "fct-source": "src/Text-XML-Writer.html#%21%3A",
        "fct-type": "function",
        "title": "(!:)"
      },
      "index": {
        "description": "Attach prefix to Name Because simply placing colon in an element name yields Nothing as prefix and children will revert to en empty namespace",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "(!:) !:",
        "normalized": "Text-\u003eName-\u003eName",
        "package": "xml-conduit-writer",
        "partial": "",
        "signature": "Text-\u003eName-\u003eName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:comment",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a text comment node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "Text -\u003e XML",
        "fct-source": "src/Text-XML-Writer.html#comment",
        "fct-type": "function",
        "title": "comment"
      },
      "index": {
        "description": "Insert text comment node",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "comment",
        "normalized": "Text-\u003eXML",
        "package": "xml-conduit-writer",
        "partial": "",
        "signature": "Text-\u003eXML"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:content",
      "description": {
        "fct-descr": "\u003cp\u003eInsert text content node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "Text -\u003e XML",
        "fct-source": "src/Text-XML-Writer.html#content",
        "fct-type": "function",
        "title": "content"
      },
      "index": {
        "description": "Insert text content node",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "content",
        "normalized": "Text-\u003eXML",
        "package": "xml-conduit-writer",
        "partial": "",
        "signature": "Text-\u003eXML"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:document",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a simple Document starting with a root element.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "Name-\u003e XML-\u003e Document",
        "fct-type": "function",
        "title": "document"
      },
      "index": {
        "description": "Create simple Document starting with root element",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "document",
        "normalized": "Name-\u003eXML-\u003eDocument",
        "package": "xml-conduit-writer",
        "partial": "",
        "signature": "Name-\u003eXML-\u003eDocument"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:element",
      "description": {
        "fct-descr": "\u003cp\u003eInsert an \u003ca\u003eElement\u003c/a\u003e node constructed with name and children.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "Name -\u003e a -\u003e XML",
        "fct-source": "src/Text-XML-Writer.html#element",
        "fct-type": "function",
        "title": "element"
      },
      "index": {
        "description": "Insert an Element node constructed with name and children",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "element",
        "normalized": "Name-\u003ea-\u003eXML",
        "package": "xml-conduit-writer",
        "partial": "",
        "signature": "Name-\u003ea-\u003eXML"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:elementA",
      "description": {
        "fct-descr": "\u003cp\u003eInsert an \u003ca\u003eElement\u003c/a\u003e node constructed with name, attributes and children.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "Name -\u003e [(Name, Text)] -\u003e a -\u003e XML",
        "fct-source": "src/Text-XML-Writer.html#elementA",
        "fct-type": "function",
        "title": "elementA"
      },
      "index": {
        "description": "Insert an Element node constructed with name attributes and children",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "elementA",
        "normalized": "Name-\u003e[(Name,Text)]-\u003ea-\u003eXML",
        "package": "xml-conduit-writer",
        "partial": "",
        "signature": "Name-\u003e[(Name,Text)]-\u003ea-\u003eXML"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:elementMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eInsert an \u003ca\u003eElement\u003c/a\u003e node converted from Maybe value or do nothing.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "Name -\u003e Maybe a -\u003e XML",
        "fct-source": "src/Text-XML-Writer.html#elementMaybe",
        "fct-type": "function",
        "title": "elementMaybe"
      },
      "index": {
        "description": "Insert an Element node converted from Maybe value or do nothing",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "elementMaybe",
        "normalized": "Name-\u003eMaybe a-\u003eXML",
        "package": "xml-conduit-writer",
        "partial": "Maybe",
        "signature": "Name-\u003eMaybe a-\u003eXML"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eDo nothing.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "XML",
        "fct-source": "src/Text-XML-Writer.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Do nothing",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "empty",
        "normalized": "",
        "package": "xml-conduit-writer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:instruction",
      "description": {
        "fct-descr": "\u003cp\u003eInsert an \u003ca\u003eInstruction\u003c/a\u003e node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "Text -\u003e Text -\u003e XML",
        "fct-source": "src/Text-XML-Writer.html#instruction",
        "fct-type": "function",
        "title": "instruction"
      },
      "index": {
        "description": "Insert an Instruction node",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "instruction",
        "normalized": "Text-\u003eText-\u003eXML",
        "package": "xml-conduit-writer",
        "partial": "",
        "signature": "Text-\u003eText-\u003eXML"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:many",
      "description": {
        "fct-descr": "\u003cp\u003eMass-convert to nodes.\n\u003c/p\u003e\u003cpre\u003e let array = element \"container\" $ many \"wrapper\" [1..3]\n\u003c/pre\u003e\u003cp\u003eWhich gives:\n\u003c/p\u003e\u003cpre\u003e \u003ccontainer\u003e\n     \u003cwrapper\u003e1\u003c/wrapper\u003e\n     \u003cwrapper\u003e2\u003c/wrapper\u003e\n     \u003cwrapper\u003e3\u003c/wrapper\u003e\n \u003c/container\u003e\n\u003c/pre\u003e\u003cp\u003eUse `mapM_ toXML xs` to convert a list without wrapping\n each item in separate element.\n\u003c/p\u003e\u003cpre\u003e let mess = element \"container\" $ mapM_ toXML [\"chunky\", \"chunk\"]\n\u003c/pre\u003e\u003cp\u003eContent nodes tend to glue together:\n\u003c/p\u003e\u003cpre\u003e \u003ccontainer\u003echunkychunk\u003c/container\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "Name-\u003e [a]-\u003e XML",
        "fct-type": "function",
        "title": "many"
      },
      "index": {
        "description": "Mass-convert to nodes let array element container many wrapper Which gives container wrapper wrapper wrapper wrapper wrapper wrapper container Use mapM toXML xs to convert list without wrapping each item in separate element let mess element container mapM toXML chunky chunk Content nodes tend to glue together container chunkychunk container",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "many",
        "normalized": "Name-\u003e[a]-\u003eXML",
        "package": "xml-conduit-writer",
        "partial": "",
        "signature": "Name-\u003e[a]-\u003eXML"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:node",
      "description": {
        "fct-descr": "\u003cp\u003eInsert one node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "Node -\u003e XML",
        "fct-source": "src/Text-XML-Writer.html#node",
        "fct-type": "function",
        "title": "node"
      },
      "index": {
        "description": "Insert one node",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "node",
        "normalized": "Node-\u003eXML",
        "package": "xml-conduit-writer",
        "partial": "",
        "signature": "Node-\u003eXML"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:pprint",
      "description": {
        "fct-descr": "\u003cp\u003eRender document using xml-conduit's pretty-printer.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "Document -\u003e IO ()",
        "fct-source": "src/Text-XML-Writer.html#pprint",
        "fct-type": "function",
        "title": "pprint"
      },
      "index": {
        "description": "Render document using xml-conduit pretty-printer",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "pprint",
        "normalized": "Document-\u003eIO()",
        "package": "xml-conduit-writer",
        "partial": "",
        "signature": "Document-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:render",
      "description": {
        "fct-descr": "\u003cp\u003eConvert collected nodes to a list of child nodes.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "XML -\u003e [Node]",
        "fct-source": "src/Text-XML-Writer.html#render",
        "fct-type": "function",
        "title": "render"
      },
      "index": {
        "description": "Convert collected nodes to list of child nodes",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "render",
        "normalized": "XML-\u003e[Node]",
        "package": "xml-conduit-writer",
        "partial": "",
        "signature": "XML-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:soap",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a SOAPv1.1 document.\n\u003c/p\u003e\u003cp\u003eEmpty header will be ignored.\n Envelope uses a \u003ccode\u003esoapenv\u003c/code\u003e prefix.\n Works great with \u003ccode\u003e\u003ca\u003eToXML\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cpre\u003e data BigData = BigData { webScale :: Bool }\n instance ToXML BigData where\n     toXML (BigData ws) = element (\"v\" !: \"{vendor:uri}bigData\") $ toXML ws\n let doc = soap () (BigData True)\n\u003c/pre\u003e",
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "h -\u003e b -\u003e Document",
        "fct-source": "src/Text-XML-Writer.html#soap",
        "fct-type": "function",
        "title": "soap"
      },
      "index": {
        "description": "Generate SOAPv1.1 document Empty header will be ignored Envelope uses soapenv prefix Works great with ToXML class data BigData BigData webScale Bool instance ToXML BigData where toXML BigData ws element vendor uri bigData toXML ws let doc soap BigData True",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "soap",
        "normalized": "a-\u003eb-\u003eDocument",
        "package": "xml-conduit-writer",
        "partial": "",
        "signature": "h-\u003eb-\u003eDocument"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-conduit-writer/docs/Text-XML-Writer.html#v:toXML",
      "description": {
        "fct-module": "Text.XML.Writer",
        "fct-package": "xml-conduit-writer",
        "fct-signature": "a -\u003e XML",
        "fct-source": "src/Text-XML-Writer.html#toXML",
        "fct-type": "method",
        "title": "toXML"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Writer",
        "module": "Text.XML.Writer",
        "name": "toXML",
        "normalized": "a-\u003eXML",
        "package": "xml-conduit-writer",
        "partial": "XML",
        "signature": "a-\u003eXML"
      }
    }
  }
]