[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-HTML4.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAttempt to render XHTML as well-formed HTML 4.01:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e no short tags are used, e.g., \u003cscript\u003e\u003c/script\u003e instead of \u003cscript /\u003e\n\u003c/li\u003e\u003cli\u003e the end tag is forbidden for some elements, for these we:\n\u003c/li\u003e\u003c/ol\u003e\u003cul\u003e\u003cli\u003e render only the open tag, e.g., \u003cbr\u003e\n\u003c/li\u003e\u003cli\u003e throw an error if the tag contains children\n\u003c/li\u003e\u003c/ul\u003e\u003col\u003e\u003cli\u003e optional end tags are always rendered\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eCurrently no validation is performed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HSP.HTML4",
        "fct-package": "hsp",
        "fct-signature": "module",
        "fct-source": "src/HSP-HTML4.html",
        "fct-type": "module",
        "title": "HTML4"
      },
      "index": {
        "description": "Attempt to render XHTML as well-formed HTML no short tags are used e.g script script instead of script the end tag is forbidden for some elements for these we render only the open tag e.g br throw an error if the tag contains children optional end tags are always rendered Currently no validation is performed",
        "hierarchy": "HSP HTML4",
        "module": "HSP.HTML4",
        "name": "HTML4",
        "normalized": "",
        "package": "hsp",
        "partial": "HTML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-HTML4.html#v:html4Strict",
      "description": {
        "fct-module": "HSP.HTML4",
        "fct-package": "hsp",
        "fct-signature": "Maybe XMLMetaData",
        "fct-source": "src/HSP-HTML4.html#html4Strict",
        "fct-type": "function",
        "title": "html4Strict"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP HTML4",
        "module": "HSP.HTML4",
        "name": "html4Strict",
        "normalized": "",
        "package": "hsp",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-HTML4.html#v:html4StrictFrag",
      "description": {
        "fct-module": "HSP.HTML4",
        "fct-package": "hsp",
        "fct-signature": "Maybe XMLMetaData",
        "fct-source": "src/HSP-HTML4.html#html4StrictFrag",
        "fct-type": "function",
        "title": "html4StrictFrag"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP HTML4",
        "module": "HSP.HTML4",
        "name": "html4StrictFrag",
        "normalized": "",
        "package": "hsp",
        "partial": "Strict Frag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-HTML4.html#v:htmlEscapeChars",
      "description": {
        "fct-module": "HSP.HTML4",
        "fct-package": "hsp",
        "fct-signature": "[(Char, Builder)]",
        "fct-source": "src/HSP-HTML4.html#htmlEscapeChars",
        "fct-type": "function",
        "title": "htmlEscapeChars"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP HTML4",
        "module": "HSP.HTML4",
        "name": "htmlEscapeChars",
        "normalized": "[(Char,Builder)]",
        "package": "hsp",
        "partial": "Escape Chars",
        "signature": "[(Char,Builder)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-HTML4.html#v:renderAsHTML",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-prints HTML values.\n\u003c/p\u003e\u003cp\u003eError Handling:\n\u003c/p\u003e\u003cp\u003eSome tags (such as img) can not contain children in HTML. However,\n there is nothing to stop the caller from passing in XML which\n contains an img tag with children. There are three basic ways to\n handle this:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e drop the bogus children silently\n\u003c/li\u003e\u003cli\u003e call \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e / raise an exception\n\u003c/li\u003e\u003cli\u003e render the img tag with children -- even though it is invalid\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eCurrently we are taking approach #3, since no other attempts to\n validate the data are made in this function. Instead, you can run\n the output through a full HTML validator to detect the errors.\n\u003c/p\u003e\u003cp\u003e#1 seems like a poor choice, since it makes is easy to overlook the\n fact that data went missing.\n\u003c/p\u003e\u003cp\u003eWe could raising errors, but you have to be in the IO monad to\n catch them. Also, you have to use evaluate if you want to check for\n errors. This means you can not start sending the page until the\n whole page has been rendered. And you have to store the whole page\n in RAM at once. Similar problems occur if we return Either\n instead. We mostly care about catching errors and showing them in\n the browser during testing, so perhaps this can be configurable.\n\u003c/p\u003e\u003cp\u003eAnother solution would be a compile time error if an empty-only\n tag contained children.\n\u003c/p\u003e\u003cp\u003eFIXME: also verify that the domain is correct\n\u003c/p\u003e\u003cp\u003eFIXME: what to do if a namespace is encountered\n\u003c/p\u003e",
        "fct-module": "HSP.HTML4",
        "fct-package": "hsp",
        "fct-signature": "XML -\u003e Text",
        "fct-source": "src/HSP-HTML4.html#renderAsHTML",
        "fct-type": "function",
        "title": "renderAsHTML"
      },
      "index": {
        "description": "Pretty-prints HTML values Error Handling Some tags such as img can not contain children in HTML However there is nothing to stop the caller from passing in XML which contains an img tag with children There are three basic ways to handle this drop the bogus children silently call error raise an exception render the img tag with children even though it is invalid Currently we are taking approach since no other attempts to validate the data are made in this function Instead you can run the output through full HTML validator to detect the errors seems like poor choice since it makes is easy to overlook the fact that data went missing We could raising errors but you have to be in the IO monad to catch them Also you have to use evaluate if you want to check for errors This means you can not start sending the page until the whole page has been rendered And you have to store the whole page in RAM at once Similar problems occur if we return Either instead We mostly care about catching errors and showing them in the browser during testing so perhaps this can be configurable Another solution would be compile time error if an empty-only tag contained children FIXME also verify that the domain is correct FIXME what to do if namespace is encountered",
        "hierarchy": "HSP HTML4",
        "module": "HSP.HTML4",
        "name": "renderAsHTML",
        "normalized": "XML-\u003eText",
        "package": "hsp",
        "partial": "As HTML",
        "signature": "XML-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-Monad.html#",
      "description": {
        "fct-module": "HSP.Monad",
        "fct-package": "hsp",
        "fct-signature": "module",
        "fct-source": "src/HSP-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP Monad",
        "module": "HSP.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "hsp",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-Monad.html#t:HSPT",
      "description": {
        "fct-module": "HSP.Monad",
        "fct-package": "hsp",
        "fct-signature": "newtype",
        "fct-source": "src/HSP-Monad.html#HSPT",
        "fct-type": "newtype",
        "title": "HSPT"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP Monad",
        "module": "HSP.Monad",
        "name": "HSPT",
        "normalized": "",
        "package": "hsp",
        "partial": "HSPT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-Monad.html#v:HSPT",
      "description": {
        "fct-module": "HSP.Monad",
        "fct-package": "hsp",
        "fct-signature": "HSPT",
        "fct-source": "src/HSP-Monad.html#HSPT",
        "fct-type": "function",
        "title": "HSPT"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP Monad",
        "module": "HSP.Monad",
        "name": "HSPT",
        "normalized": "",
        "package": "hsp",
        "partial": "HSPT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-Monad.html#v:unHSPT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HSP.Monad",
        "fct-package": "hsp",
        "fct-signature": "m a",
        "fct-source": "src/HSP-Monad.html#HSPT",
        "fct-type": "function",
        "title": "unHSPT"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP Monad",
        "module": "HSP.Monad",
        "name": "unHSPT",
        "normalized": "",
        "package": "hsp",
        "partial": "HSPT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML-PCDATA.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEscaping between CDATA \u003ca\u003e=\u003c/a\u003e PCDATA\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HSP.XML.PCDATA",
        "fct-package": "hsp",
        "fct-signature": "module",
        "fct-source": "src/HSP-XML-PCDATA.html",
        "fct-type": "module",
        "title": "PCDATA"
      },
      "index": {
        "description": "Escaping between CDATA PCDATA",
        "hierarchy": "HSP XML PCDATA",
        "module": "HSP.XML.PCDATA",
        "name": "PCDATA",
        "normalized": "",
        "package": "hsp",
        "partial": "PCDATA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML-PCDATA.html#v:escape",
      "description": {
        "fct-descr": "\u003cp\u003eTake a normal string and transform it to PCDATA by escaping special characters.\n calls \u003ccode\u003e\u003ca\u003eescaper\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003exmlEscapeChars\u003c/a\u003e\u003c/code\u003e\n See also: \u003ccode\u003e\u003ca\u003eescaper\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HSP.XML.PCDATA",
        "fct-package": "hsp",
        "fct-signature": "Text -\u003e Builder",
        "fct-source": "src/HSP-XML-PCDATA.html#escape",
        "fct-type": "function",
        "title": "escape"
      },
      "index": {
        "description": "Take normal string and transform it to PCDATA by escaping special characters calls escaper with xmlEscapeChars See also escaper",
        "hierarchy": "HSP XML PCDATA",
        "module": "HSP.XML.PCDATA",
        "name": "escape",
        "normalized": "Text-\u003eBuilder",
        "package": "hsp",
        "partial": "",
        "signature": "Text-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML-PCDATA.html#v:escaper",
      "description": {
        "fct-descr": "\u003cp\u003eTake a normal string and transform it to PCDATA by escaping special characters.\n See also: \u003ccode\u003e\u003ca\u003eescape\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003exmlEscapeChars\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HSP.XML.PCDATA",
        "fct-package": "hsp",
        "fct-signature": "[(Char, Builder)]-\u003e Text-\u003e Builder",
        "fct-type": "function",
        "title": "escaper"
      },
      "index": {
        "description": "Take normal string and transform it to PCDATA by escaping special characters See also escape xmlEscapeChars",
        "hierarchy": "HSP XML PCDATA",
        "module": "HSP.XML.PCDATA",
        "name": "escaper",
        "normalized": "[(Char,Builder)]-\u003eText-\u003eBuilder",
        "package": "hsp",
        "partial": "",
        "signature": "[(Char,Builder)]-\u003eText-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML-PCDATA.html#v:xmlEscapeChars",
      "description": {
        "fct-module": "HSP.XML.PCDATA",
        "fct-package": "hsp",
        "fct-signature": "[(Char, Builder)]",
        "fct-source": "src/HSP-XML-PCDATA.html#xmlEscapeChars",
        "fct-type": "function",
        "title": "xmlEscapeChars"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML PCDATA",
        "module": "HSP.XML.PCDATA",
        "name": "xmlEscapeChars",
        "normalized": "[(Char,Builder)]",
        "package": "hsp",
        "partial": "Escape Chars",
        "signature": "[(Char,Builder)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDatatypes and type classes comprising the basic model behind\n the scenes of Haskell Server Pages tags.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "module",
        "fct-source": "src/HSP-XML.html",
        "fct-type": "module",
        "title": "XML"
      },
      "index": {
        "description": "Datatypes and type classes comprising the basic model behind the scenes of Haskell Server Pages tags",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "XML",
        "normalized": "",
        "package": "hsp",
        "partial": "XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:AttrValue",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents an attribue value.\n\u003c/p\u003e",
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "data",
        "fct-source": "src/HSP-XML.html#AttrValue",
        "fct-type": "data",
        "title": "AttrValue"
      },
      "index": {
        "description": "Represents an attribue value",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "AttrValue",
        "normalized": "",
        "package": "hsp",
        "partial": "Attr Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:Attribute",
      "description": {
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "newtype",
        "fct-source": "src/HSP-XML.html#Attribute",
        "fct-type": "newtype",
        "title": "Attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "Attribute",
        "normalized": "",
        "package": "hsp",
        "partial": "Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:Attributes",
      "description": {
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "type",
        "fct-source": "src/HSP-XML.html#Attributes",
        "fct-type": "type",
        "title": "Attributes"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "Attributes",
        "normalized": "",
        "package": "hsp",
        "partial": "Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:Children",
      "description": {
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "type",
        "fct-source": "src/HSP-XML.html#Children",
        "fct-type": "type",
        "title": "Children"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "Children",
        "normalized": "",
        "package": "hsp",
        "partial": "Children",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:NSName",
      "description": {
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "type",
        "fct-source": "src/HSP-XML.html#NSName",
        "fct-type": "type",
        "title": "NSName"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "NSName",
        "normalized": "",
        "package": "hsp",
        "partial": "NSName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:Namespace",
      "description": {
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "type",
        "fct-source": "src/HSP-XML.html#Namespace",
        "fct-type": "type",
        "title": "Namespace"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "Namespace",
        "normalized": "",
        "package": "hsp",
        "partial": "Namespace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:XML",
      "description": {
        "fct-descr": "\u003cp\u003eThe XML datatype representation. Is either an Element or CDATA.\n\u003c/p\u003e",
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "data",
        "fct-source": "src/HSP-XML.html#XML",
        "fct-type": "data",
        "title": "XML"
      },
      "index": {
        "description": "The XML datatype representation Is either an Element or CDATA",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "XML",
        "normalized": "",
        "package": "hsp",
        "partial": "XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:XMLMetaData",
      "description": {
        "fct-descr": "\u003cp\u003eThe XMLMetaData datatype\n\u003c/p\u003e\u003cp\u003eSpecify the DOCTYPE, content-type, and preferred render for XML data.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003esetMetaData\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewithMetaData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "data",
        "fct-source": "src/HSP-XML.html#XMLMetaData",
        "fct-type": "data",
        "title": "XMLMetaData"
      },
      "index": {
        "description": "The XMLMetaData datatype Specify the DOCTYPE content-type and preferred render for XML data See also setMetaData and withMetaData",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "XMLMetaData",
        "normalized": "",
        "package": "hsp",
        "partial": "XMLMeta Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:CDATA",
      "description": {
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "CDATA Bool Text",
        "fct-source": "src/HSP-XML.html#XML",
        "fct-type": "function",
        "title": "CDATA"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "CDATA",
        "normalized": "",
        "package": "hsp",
        "partial": "CDATA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:Element",
      "description": {
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "Element NSName Attributes Children",
        "fct-source": "src/HSP-XML.html#XML",
        "fct-type": "function",
        "title": "Element"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "Element",
        "normalized": "",
        "package": "hsp",
        "partial": "Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:MkAttr",
      "description": {
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "MkAttr (NSName, AttrValue)",
        "fct-source": "src/HSP-XML.html#Attribute",
        "fct-type": "function",
        "title": "MkAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "MkAttr",
        "normalized": "MkAttr(NSName,AttrValue)",
        "package": "hsp",
        "partial": "Mk Attr",
        "signature": "MkAttr(NSName,AttrValue)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:NoValue",
      "description": {
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "NoValue",
        "fct-source": "src/HSP-XML.html#AttrValue",
        "fct-type": "function",
        "title": "NoValue"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "NoValue",
        "normalized": "",
        "package": "hsp",
        "partial": "No Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:Value",
      "description": {
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "Value Bool Text",
        "fct-source": "src/HSP-XML.html#AttrValue",
        "fct-type": "function",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "Value",
        "normalized": "",
        "package": "hsp",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:XMLMetaData",
      "description": {
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "XMLMetaData",
        "fct-source": "src/HSP-XML.html#XMLMetaData",
        "fct-type": "function",
        "title": "XMLMetaData"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "XMLMetaData",
        "normalized": "",
        "package": "hsp",
        "partial": "XMLMeta Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:attrVal",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an attribue value from a string.\n\u003c/p\u003e",
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "Text -\u003e AttrValue",
        "fct-source": "src/HSP-XML.html#attrVal",
        "fct-type": "function",
        "title": "attrVal"
      },
      "index": {
        "description": "Create an attribue value from string",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "attrVal",
        "normalized": "Text-\u003eAttrValue",
        "package": "hsp",
        "partial": "Val",
        "signature": "Text-\u003eAttrValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:cdata",
      "description": {
        "fct-descr": "\u003cp\u003eEmbeds a string as a CDATA XML value.\n\u003c/p\u003e",
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "Text -\u003e XML",
        "fct-source": "src/HSP-XML.html#cdata",
        "fct-type": "function",
        "title": "cdata"
      },
      "index": {
        "description": "Embeds string as CDATA XML value",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "cdata",
        "normalized": "Text-\u003eXML",
        "package": "hsp",
        "partial": "",
        "signature": "Text-\u003eXML"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:contentType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "Text",
        "fct-source": "src/HSP-XML.html#XMLMetaData",
        "fct-type": "function",
        "title": "contentType"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "contentType",
        "normalized": "",
        "package": "hsp",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:doctype",
      "description": {
        "fct-descr": "\u003cp\u003e(show doctype when rendering, DOCTYPE string)\n\u003c/p\u003e",
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "(Bool, Text)",
        "fct-source": "src/HSP-XML.html#XMLMetaData",
        "fct-type": "function",
        "title": "doctype"
      },
      "index": {
        "description": "show doctype when rendering DOCTYPE string",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "doctype",
        "normalized": "(Bool,Text)",
        "package": "hsp",
        "partial": "",
        "signature": "(Bool,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:fromStringLit",
      "description": {
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "String -\u003e Text",
        "fct-source": "src/HSP-XML.html#fromStringLit",
        "fct-type": "function",
        "title": "fromStringLit"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "fromStringLit",
        "normalized": "String-\u003eText",
        "package": "hsp",
        "partial": "String Lit",
        "signature": "String-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:isCDATA",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether an XML value is an Element or CDATA\n\u003c/p\u003e",
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "XML -\u003e Bool",
        "fct-source": "src/HSP-XML.html#isCDATA",
        "fct-type": "function",
        "title": "isCDATA"
      },
      "index": {
        "description": "Test whether an XML value is an Element or CDATA",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "isCDATA",
        "normalized": "XML-\u003eBool",
        "package": "hsp",
        "partial": "CDATA",
        "signature": "XML-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:isElement",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether an XML value is an Element or CDATA\n\u003c/p\u003e",
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "XML -\u003e Bool",
        "fct-source": "src/HSP-XML.html#isElement",
        "fct-type": "function",
        "title": "isElement"
      },
      "index": {
        "description": "Test whether an XML value is an Element or CDATA",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "isElement",
        "normalized": "XML-\u003eBool",
        "package": "hsp",
        "partial": "Element",
        "signature": "XML-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:pAttrVal",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an attribue value from a string.\n\u003c/p\u003e",
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "Text -\u003e AttrValue",
        "fct-source": "src/HSP-XML.html#pAttrVal",
        "fct-type": "function",
        "title": "pAttrVal"
      },
      "index": {
        "description": "Create an attribue value from string",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "pAttrVal",
        "normalized": "Text-\u003eAttrValue",
        "package": "hsp",
        "partial": "Attr Val",
        "signature": "Text-\u003eAttrValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:pcdata",
      "description": {
        "fct-descr": "\u003cp\u003eEmbeds a string as a CDATA XML value.\n\u003c/p\u003e",
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "Text -\u003e XML",
        "fct-source": "src/HSP-XML.html#pcdata",
        "fct-type": "function",
        "title": "pcdata"
      },
      "index": {
        "description": "Embeds string as CDATA XML value",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "pcdata",
        "normalized": "Text-\u003eXML",
        "package": "hsp",
        "partial": "",
        "signature": "Text-\u003eXML"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:preferredRenderer",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "XML -\u003e Builder",
        "fct-source": "src/HSP-XML.html#XMLMetaData",
        "fct-type": "function",
        "title": "preferredRenderer"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "preferredRenderer",
        "normalized": "XML-\u003eBuilder",
        "package": "hsp",
        "partial": "Renderer",
        "signature": "XML-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:renderXML",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-prints XML values.\n\u003c/p\u003e",
        "fct-module": "HSP.XML",
        "fct-package": "hsp",
        "fct-signature": "XML -\u003e Text",
        "fct-source": "src/HSP-XML.html#renderXML",
        "fct-type": "function",
        "title": "renderXML"
      },
      "index": {
        "description": "Pretty-prints XML values",
        "hierarchy": "HSP XML",
        "module": "HSP.XML",
        "name": "renderXML",
        "normalized": "XML-\u003eText",
        "package": "hsp",
        "partial": "XML",
        "signature": "XML-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe class and monad transformer that forms the basis of the literal XML\n syntax translation. Literal tags will be translated into functions of\n the GenerateXML class, and any instantiating monads with associated XML\n types can benefit from that syntax.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "module",
        "fct-source": "src/HSP-XMLGenerator.html",
        "fct-type": "module",
        "title": "XMLGenerator"
      },
      "index": {
        "description": "The class and monad transformer that forms the basis of the literal XML syntax translation Literal tags will be translated into functions of the GenerateXML class and any instantiating monads with associated XML types can benefit from that syntax",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "XMLGenerator",
        "normalized": "",
        "package": "hsp",
        "partial": "XMLGenerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:AppendChild",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "class",
        "fct-source": "src/HSP-XMLGenerator.html#AppendChild",
        "fct-type": "class",
        "title": "AppendChild"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "AppendChild",
        "normalized": "",
        "package": "hsp",
        "partial": "Append Child",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:Attr",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "data",
        "fct-source": "src/HSP-XMLGenerator.html#Attr",
        "fct-type": "data",
        "title": "Attr"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "Attr",
        "normalized": "",
        "package": "hsp",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:EmbedAsAttr",
      "description": {
        "fct-descr": "\u003cp\u003eSimilarly embed values as attributes of an XML element.\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "class",
        "fct-source": "src/HSP-XMLGenerator.html#EmbedAsAttr",
        "fct-type": "class",
        "title": "EmbedAsAttr"
      },
      "index": {
        "description": "Similarly embed values as attributes of an XML element",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "EmbedAsAttr",
        "normalized": "",
        "package": "hsp",
        "partial": "Embed As Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:EmbedAsChild",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed values as child nodes of an XML element. The parent type will be clear\n from the context so it is not mentioned.\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "class",
        "fct-source": "src/HSP-XMLGenerator.html#EmbedAsChild",
        "fct-type": "class",
        "title": "EmbedAsChild"
      },
      "index": {
        "description": "Embed values as child nodes of an XML element The parent type will be clear from the context so it is not mentioned",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "EmbedAsChild",
        "normalized": "",
        "package": "hsp",
        "partial": "Embed As Child",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:GenAttribute",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "type",
        "fct-source": "src/HSP-XMLGenerator.html#GenAttribute",
        "fct-type": "type",
        "title": "GenAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "GenAttribute",
        "normalized": "",
        "package": "hsp",
        "partial": "Gen Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:GenAttributeList",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "type",
        "fct-source": "src/HSP-XMLGenerator.html#GenAttributeList",
        "fct-type": "type",
        "title": "GenAttributeList"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "GenAttributeList",
        "normalized": "",
        "package": "hsp",
        "partial": "Gen Attribute List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:GenChild",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "type",
        "fct-source": "src/HSP-XMLGenerator.html#GenChild",
        "fct-type": "type",
        "title": "GenChild"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "GenChild",
        "normalized": "",
        "package": "hsp",
        "partial": "Gen Child",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:GenChildList",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "type",
        "fct-source": "src/HSP-XMLGenerator.html#GenChildList",
        "fct-type": "type",
        "title": "GenChildList"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "GenChildList",
        "normalized": "",
        "package": "hsp",
        "partial": "Gen Child List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:GenXML",
      "description": {
        "fct-descr": "\u003cp\u003eType synonyms to avoid writing out the XMLnGenT all the time\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "type",
        "fct-source": "src/HSP-XMLGenerator.html#GenXML",
        "fct-type": "type",
        "title": "GenXML"
      },
      "index": {
        "description": "Type synonyms to avoid writing out the XMLnGenT all the time",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "GenXML",
        "normalized": "",
        "package": "hsp",
        "partial": "Gen XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:GenXMLList",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "type",
        "fct-source": "src/HSP-XMLGenerator.html#GenXMLList",
        "fct-type": "type",
        "title": "GenXMLList"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "GenXMLList",
        "normalized": "",
        "package": "hsp",
        "partial": "Gen XMLList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:IsName",
      "description": {
        "fct-descr": "\u003cp\u003eNames can be simple or qualified with a domain. We want to conveniently\n use both simple strings or pairs wherever a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e is expected.\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "class",
        "fct-source": "src/HSP-XMLGenerator.html#IsName",
        "fct-type": "class",
        "title": "IsName"
      },
      "index": {
        "description": "Names can be simple or qualified with domain We want to conveniently use both simple strings or pairs wherever Name is expected",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "IsName",
        "normalized": "",
        "package": "hsp",
        "partial": "Is Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:Name",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "type",
        "fct-source": "src/HSP-XMLGenerator.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "Name",
        "normalized": "",
        "package": "hsp",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:SetAttr",
      "description": {
        "fct-descr": "\u003cp\u003eSet attributes on XML elements\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "class",
        "fct-source": "src/HSP-XMLGenerator.html#SetAttr",
        "fct-type": "class",
        "title": "SetAttr"
      },
      "index": {
        "description": "Set attributes on XML elements",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "SetAttr",
        "normalized": "",
        "package": "hsp",
        "partial": "Set Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:TypeCast",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "class",
        "fct-source": "src/HSP-XMLGenerator.html#TypeCast",
        "fct-type": "class",
        "title": "TypeCast"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "TypeCast",
        "normalized": "",
        "package": "hsp",
        "partial": "Type Cast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:TypeCast-39-",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "class",
        "fct-source": "src/HSP-XMLGenerator.html#TypeCast%27",
        "fct-type": "class",
        "title": "TypeCast'"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "TypeCast'",
        "normalized": "",
        "package": "hsp",
        "partial": "Type Cast'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:TypeCast-39--39-",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "class",
        "fct-source": "src/HSP-XMLGenerator.html#TypeCast%27%27",
        "fct-type": "class",
        "title": "TypeCast''"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "TypeCast''",
        "normalized": "",
        "package": "hsp",
        "partial": "Type Cast''",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:TypeCastM",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "class",
        "fct-source": "src/HSP-XMLGenerator.html#TypeCastM",
        "fct-type": "class",
        "title": "TypeCastM"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "TypeCastM",
        "normalized": "",
        "package": "hsp",
        "partial": "Type Cast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:TypeCastM-39-",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "class",
        "fct-source": "src/HSP-XMLGenerator.html#TypeCastM%27",
        "fct-type": "class",
        "title": "TypeCastM'"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "TypeCastM'",
        "normalized": "",
        "package": "hsp",
        "partial": "Type Cast M'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:TypeCastM-39--39-",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "class",
        "fct-source": "src/HSP-XMLGenerator.html#TypeCastM%27%27",
        "fct-type": "class",
        "title": "TypeCastM''"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "TypeCastM''",
        "normalized": "",
        "package": "hsp",
        "partial": "Type Cast M''",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:XMLGen",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate XML values in some XMLGenerator monad.\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "class",
        "fct-source": "src/HSP-XMLGenerator.html#XMLGen",
        "fct-type": "class",
        "title": "XMLGen"
      },
      "index": {
        "description": "Generate XML values in some XMLGenerator monad",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "XMLGen",
        "normalized": "",
        "package": "hsp",
        "partial": "XMLGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:XMLGenT",
      "description": {
        "fct-descr": "\u003cp\u003eThe monad transformer that allows a monad to generate XML values.\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "newtype",
        "fct-source": "src/HSP-XMLGenerator.html#XMLGenT",
        "fct-type": "newtype",
        "title": "XMLGenT"
      },
      "index": {
        "description": "The monad transformer that allows monad to generate XML values",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "XMLGenT",
        "normalized": "",
        "package": "hsp",
        "partial": "XMLGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:XMLGenerator",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "class",
        "fct-source": "src/HSP-XMLGenerator.html#XMLGenerator",
        "fct-type": "class",
        "title": "XMLGenerator"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "XMLGenerator",
        "normalized": "",
        "package": "hsp",
        "partial": "XMLGenerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:-60--60--64-",
      "description": {
        "fct-descr": "\u003cp\u003eprepend the list of \u003ccode\u003eattr\u003c/code\u003e to the attributes for the \u003ccode\u003eelem\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "elem -\u003e [attr] -\u003e GenXML m",
        "fct-source": "src/HSP-XMLGenerator.html#%3C%3C%40",
        "fct-type": "function",
        "title": "(\u003c\u003c@)"
      },
      "index": {
        "description": "prepend the list of attr to the attributes for the elem",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "(\u003c\u003c@) \u003c\u003c@",
        "normalized": "a-\u003e[b]-\u003eGenXML c",
        "package": "hsp",
        "partial": "",
        "signature": "elem-\u003e[attr]-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:-60--60-:",
      "description": {
        "fct-descr": "\u003cp\u003eappend children to the children of \u003ccode\u003eelem\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "elem -\u003e [c] -\u003e GenXML m",
        "fct-source": "src/HSP-XMLGenerator.html#%3C%3C%3A",
        "fct-type": "function",
        "title": "(\u003c\u003c:)"
      },
      "index": {
        "description": "append children to the children of elem",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "(\u003c\u003c:) \u003c\u003c:",
        "normalized": "a-\u003e[b]-\u003eGenXML c",
        "package": "hsp",
        "partial": "",
        "signature": "elem-\u003e[c]-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:-60--64-",
      "description": {
        "fct-descr": "\u003cp\u003eprepend \u003ccode\u003eattr\u003c/code\u003e to the list of attributes for the \u003ccode\u003eelem\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "elem -\u003e attr -\u003e GenXML m",
        "fct-source": "src/HSP-XMLGenerator.html#%3C%40",
        "fct-type": "function",
        "title": "(\u003c@)"
      },
      "index": {
        "description": "prepend attr to the list of attributes for the elem",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "(\u003c@) \u003c@",
        "normalized": "a-\u003eb-\u003eGenXML c",
        "package": "hsp",
        "partial": "",
        "signature": "elem-\u003eattr-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:-60-:",
      "description": {
        "fct-descr": "\u003cp\u003eappend child to the children of \u003ccode\u003eelem\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "elem -\u003e c -\u003e GenXML m",
        "fct-source": "src/HSP-XMLGenerator.html#%3C%3A",
        "fct-type": "function",
        "title": "(\u003c:)"
      },
      "index": {
        "description": "append child to the children of elem",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "(\u003c:) \u003c:",
        "normalized": "a-\u003eb-\u003eGenXML c",
        "package": "hsp",
        "partial": "",
        "signature": "elem-\u003ec-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v::-61-",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "n := a",
        "fct-source": "src/HSP-XMLGenerator.html#Attr",
        "fct-type": "function",
        "title": ":="
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": ":=",
        "normalized": "",
        "package": "hsp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:XMLGenT",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "XMLGenT (m a)",
        "fct-source": "src/HSP-XMLGenerator.html#XMLGenT",
        "fct-type": "function",
        "title": "XMLGenT"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "XMLGenT",
        "normalized": "",
        "package": "hsp",
        "partial": "XMLGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:app",
      "description": {
        "fct-descr": "\u003cp\u003eappend child to the children of \u003ccode\u003eelem\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "elem -\u003e c -\u003e GenXML m",
        "fct-source": "src/HSP-XMLGenerator.html#app",
        "fct-type": "function",
        "title": "app"
      },
      "index": {
        "description": "append child to the children of elem",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "app",
        "normalized": "a-\u003eb-\u003eGenXML c",
        "package": "hsp",
        "partial": "",
        "signature": "elem-\u003ec-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:appAll",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "elem -\u003e GenChildList m -\u003e GenXML m",
        "fct-source": "src/HSP-XMLGenerator.html#appAll",
        "fct-type": "method",
        "title": "appAll"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "appAll",
        "normalized": "a-\u003eGenChildList b-\u003eGenXML b",
        "package": "hsp",
        "partial": "All",
        "signature": "elem-\u003eGenChildList m-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:appChild",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "elem -\u003e GenChild m -\u003e GenXML m",
        "fct-source": "src/HSP-XMLGenerator.html#appChild",
        "fct-type": "method",
        "title": "appChild"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "appChild",
        "normalized": "a-\u003eGenChild b-\u003eGenXML b",
        "package": "hsp",
        "partial": "Child",
        "signature": "elem-\u003eGenChild m-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:asAttr",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "a -\u003e GenAttributeList m",
        "fct-source": "src/HSP-XMLGenerator.html#asAttr",
        "fct-type": "method",
        "title": "asAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "asAttr",
        "normalized": "a-\u003eGenAttributeList b",
        "package": "hsp",
        "partial": "Attr",
        "signature": "a-\u003eGenAttributeList m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:asChild",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "c -\u003e GenChildList m",
        "fct-source": "src/HSP-XMLGenerator.html#asChild",
        "fct-type": "method",
        "title": "asChild"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "asChild",
        "normalized": "a-\u003eGenChildList b",
        "package": "hsp",
        "partial": "Child",
        "signature": "c-\u003eGenChildList m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:genEElement",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "Name (StringType m) -\u003e [XMLGenT m [AttributeType m]] -\u003e XMLGenT m (XMLType m)",
        "fct-source": "src/HSP-XMLGenerator.html#genEElement",
        "fct-type": "method",
        "title": "genEElement"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "genEElement",
        "normalized": "Name(StringType a)-\u003e[XMLGenT a[AttributeType a]]-\u003eXMLGenT a(XMLType a)",
        "package": "hsp",
        "partial": "EElement",
        "signature": "Name(StringType m)-\u003e[XMLGenT m[AttributeType m]]-\u003eXMLGenT m(XMLType m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:genElement",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "Name (StringType m) -\u003e [XMLGenT m [AttributeType m]] -\u003e [XMLGenT m [ChildType m]] -\u003e XMLGenT m (XMLType m)",
        "fct-source": "src/HSP-XMLGenerator.html#genElement",
        "fct-type": "method",
        "title": "genElement"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "genElement",
        "normalized": "Name(StringType a)-\u003e[XMLGenT a[AttributeType a]]-\u003e[XMLGenT a[ChildType a]]-\u003eXMLGenT a(XMLType a)",
        "package": "hsp",
        "partial": "Element",
        "signature": "Name(StringType m)-\u003e[XMLGenT m[AttributeType m]]-\u003e[XMLGenT m[ChildType m]]-\u003eXMLGenT m(XMLType m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:mapXMLGenT",
      "description": {
        "fct-descr": "\u003cp\u003emap the inner monad\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "(m a -\u003e n b) -\u003e XMLGenT m a -\u003e XMLGenT n b",
        "fct-source": "src/HSP-XMLGenerator.html#mapXMLGenT",
        "fct-type": "function",
        "title": "mapXMLGenT"
      },
      "index": {
        "description": "map the inner monad",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "mapXMLGenT",
        "normalized": "(a b-\u003ec d)-\u003eXMLGenT a b-\u003eXMLGenT c d",
        "package": "hsp",
        "partial": "XMLGen",
        "signature": "(m a-\u003en b)-\u003eXMLGenT m a-\u003eXMLGenT n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:pcdataToChild",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "StringType m -\u003e ChildType m",
        "fct-source": "src/HSP-XMLGenerator.html#pcdataToChild",
        "fct-type": "method",
        "title": "pcdataToChild"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "pcdataToChild",
        "normalized": "StringType a-\u003eChildType a",
        "package": "hsp",
        "partial": "To Child",
        "signature": "StringType m-\u003eChildType m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eprepend \u003ccode\u003eattr\u003c/code\u003e to the list of attributes for the \u003ccode\u003eelem\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "elem -\u003e attr -\u003e GenXML m",
        "fct-source": "src/HSP-XMLGenerator.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "prepend attr to the list of attributes for the elem",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "set",
        "normalized": "a-\u003eb-\u003eGenXML c",
        "package": "hsp",
        "partial": "",
        "signature": "elem-\u003eattr-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:setAll",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "elem -\u003e GenAttributeList m -\u003e GenXML m",
        "fct-source": "src/HSP-XMLGenerator.html#setAll",
        "fct-type": "method",
        "title": "setAll"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "setAll",
        "normalized": "a-\u003eGenAttributeList b-\u003eGenXML b",
        "package": "hsp",
        "partial": "All",
        "signature": "elem-\u003eGenAttributeList m-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:setAttr",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "elem -\u003e GenAttribute m -\u003e GenXML m",
        "fct-source": "src/HSP-XMLGenerator.html#setAttr",
        "fct-type": "method",
        "title": "setAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "setAttr",
        "normalized": "a-\u003eGenAttribute b-\u003eGenXML b",
        "package": "hsp",
        "partial": "Attr",
        "signature": "elem-\u003eGenAttribute m-\u003eGenXML m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:toName",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "n -\u003e Name s",
        "fct-source": "src/HSP-XMLGenerator.html#toName",
        "fct-type": "method",
        "title": "toName"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "toName",
        "normalized": "a-\u003eName b",
        "package": "hsp",
        "partial": "Name",
        "signature": "n-\u003eName s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:typeCast",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/HSP-XMLGenerator.html#typeCast",
        "fct-type": "method",
        "title": "typeCast"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "typeCast",
        "normalized": "a-\u003eb",
        "package": "hsp",
        "partial": "Cast",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:typeCast-39-",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "t -\u003e a -\u003e b",
        "fct-source": "src/HSP-XMLGenerator.html#typeCast%27",
        "fct-type": "method",
        "title": "typeCast'"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "typeCast'",
        "normalized": "a-\u003eb-\u003ec",
        "package": "hsp",
        "partial": "Cast'",
        "signature": "t-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:typeCast-39--39-",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "t -\u003e a -\u003e b",
        "fct-source": "src/HSP-XMLGenerator.html#typeCast%27%27",
        "fct-type": "method",
        "title": "typeCast''"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "typeCast''",
        "normalized": "a-\u003eb-\u003ec",
        "package": "hsp",
        "partial": "Cast''",
        "signature": "t-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:typeCastM",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "ma x -\u003e mb x",
        "fct-source": "src/HSP-XMLGenerator.html#typeCastM",
        "fct-type": "method",
        "title": "typeCastM"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "typeCastM",
        "normalized": "a b-\u003ec b",
        "package": "hsp",
        "partial": "Cast",
        "signature": "ma x-\u003emb x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:typeCastM-39-",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "t -\u003e ma x -\u003e mb x",
        "fct-source": "src/HSP-XMLGenerator.html#typeCastM%27",
        "fct-type": "method",
        "title": "typeCastM'"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "typeCastM'",
        "normalized": "a-\u003eb c-\u003ed c",
        "package": "hsp",
        "partial": "Cast M'",
        "signature": "t-\u003ema x-\u003emb x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:typeCastM-39--39-",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "t -\u003e ma x -\u003e mb x",
        "fct-source": "src/HSP-XMLGenerator.html#typeCastM%27%27",
        "fct-type": "method",
        "title": "typeCastM''"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "typeCastM''",
        "normalized": "a-\u003eb c-\u003ed c",
        "package": "hsp",
        "partial": "Cast M''",
        "signature": "t-\u003ema x-\u003emb x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:unXMLGenT",
      "description": {
        "fct-descr": "\u003cp\u003eun-lift.\n\u003c/p\u003e",
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "XMLGenT m a -\u003e m a",
        "fct-source": "src/HSP-XMLGenerator.html#unXMLGenT",
        "fct-type": "function",
        "title": "unXMLGenT"
      },
      "index": {
        "description": "un-lift",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "unXMLGenT",
        "normalized": "XMLGenT a b-\u003ea b",
        "package": "hsp",
        "partial": "XMLGen",
        "signature": "XMLGenT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:xmlToChild",
      "description": {
        "fct-module": "HSP.XMLGenerator",
        "fct-package": "hsp",
        "fct-signature": "XMLType m -\u003e ChildType m",
        "fct-source": "src/HSP-XMLGenerator.html#xmlToChild",
        "fct-type": "method",
        "title": "xmlToChild"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP XMLGenerator",
        "module": "HSP.XMLGenerator",
        "name": "xmlToChild",
        "normalized": "XMLType a-\u003eChildType a",
        "package": "hsp",
        "partial": "To Child",
        "signature": "XMLType m-\u003eChildType m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsp/docs/HSP.html#",
      "description": {
        "fct-module": "HSP",
        "fct-package": "hsp",
        "fct-signature": "module",
        "fct-source": "src/HSP.html",
        "fct-type": "module",
        "title": "HSP"
      },
      "index": {
        "description": "",
        "hierarchy": "HSP",
        "module": "HSP",
        "name": "HSP",
        "normalized": "",
        "package": "hsp",
        "partial": "HSP",
        "signature": ""
      }
    }
  }
]