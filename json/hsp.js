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
        "word": "hsp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAttempt to render XHTML as well-formed HTML 4.01:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e no short tags are used, e.g., \u003cscript\u003e\u003c/script\u003e instead of \u003cscript /\u003e\n\u003c/li\u003e\u003cli\u003e the end tag is forbidden for some elements, for these we:\n\u003c/li\u003e\u003c/ol\u003e\u003cul\u003e\u003cli\u003e render only the open tag, e.g., \u003cbr\u003e\n\u003c/li\u003e\u003cli\u003e throw an error if the tag contains children\n\u003c/li\u003e\u003c/ul\u003e\u003col\u003e\u003cli\u003e optional end tags are always rendered\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eCurrently no validation is performed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HSP.HTML4",
          "name": "HTML4",
          "package": "hsp",
          "source": "src/HSP-HTML4.html",
          "type": "module"
        },
        "index": {
          "description": "Attempt to render XHTML as well-formed HTML no short tags are used e.g script script instead of script the end tag is forbidden for some elements for these we render only the open tag e.g br throw an error if the tag contains children optional end tags are always rendered Currently no validation is performed",
          "hierarchy": "HSP HTML4",
          "module": "HSP.HTML4",
          "name": "HTML4",
          "package": "hsp",
          "partial": "HTML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-HTML4.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.HTML4",
          "name": "html4Strict",
          "package": "hsp",
          "signature": "Maybe XMLMetaData",
          "source": "src/HSP-HTML4.html#html4Strict",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP HTML4",
          "module": "HSP.HTML4",
          "name": "html4Strict",
          "package": "hsp",
          "partial": "Strict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-HTML4.html#v:html4Strict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.HTML4",
          "name": "html4StrictFrag",
          "package": "hsp",
          "signature": "Maybe XMLMetaData",
          "source": "src/HSP-HTML4.html#html4StrictFrag",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP HTML4",
          "module": "HSP.HTML4",
          "name": "html4StrictFrag",
          "package": "hsp",
          "partial": "Strict Frag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-HTML4.html#v:html4StrictFrag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.HTML4",
          "name": "htmlEscapeChars",
          "package": "hsp",
          "signature": "[(Char, Builder)]",
          "source": "src/HSP-HTML4.html#htmlEscapeChars",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP HTML4",
          "module": "HSP.HTML4",
          "name": "htmlEscapeChars",
          "normalized": "[(Char,Builder)]",
          "package": "hsp",
          "partial": "Escape Chars",
          "signature": "[(Char,Builder)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-HTML4.html#v:htmlEscapeChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-prints HTML values.\n\u003c/p\u003e\u003cp\u003eError Handling:\n\u003c/p\u003e\u003cp\u003eSome tags (such as img) can not contain children in HTML. However,\n there is nothing to stop the caller from passing in XML which\n contains an img tag with children. There are three basic ways to\n handle this:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e drop the bogus children silently\n\u003c/li\u003e\u003cli\u003e call \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e / raise an exception\n\u003c/li\u003e\u003cli\u003e render the img tag with children -- even though it is invalid\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eCurrently we are taking approach #3, since no other attempts to\n validate the data are made in this function. Instead, you can run\n the output through a full HTML validator to detect the errors.\n\u003c/p\u003e\u003cp\u003e#1 seems like a poor choice, since it makes is easy to overlook the\n fact that data went missing.\n\u003c/p\u003e\u003cp\u003eWe could raising errors, but you have to be in the IO monad to\n catch them. Also, you have to use evaluate if you want to check for\n errors. This means you can not start sending the page until the\n whole page has been rendered. And you have to store the whole page\n in RAM at once. Similar problems occur if we return Either\n instead. We mostly care about catching errors and showing them in\n the browser during testing, so perhaps this can be configurable.\n\u003c/p\u003e\u003cp\u003eAnother solution would be a compile time error if an empty-only\n tag contained children.\n\u003c/p\u003e\u003cp\u003eFIXME: also verify that the domain is correct\n\u003c/p\u003e\u003cp\u003eFIXME: what to do if a namespace is encountered\n\u003c/p\u003e",
          "module": "HSP.HTML4",
          "name": "renderAsHTML",
          "package": "hsp",
          "signature": "XML -\u003e Text",
          "source": "src/HSP-HTML4.html#renderAsHTML",
          "type": "function"
        },
        "index": {
          "description": "Pretty-prints HTML values Error Handling Some tags such as img can not contain children in HTML However there is nothing to stop the caller from passing in XML which contains an img tag with children There are three basic ways to handle this drop the bogus children silently call error raise an exception render the img tag with children even though it is invalid Currently we are taking approach since no other attempts to validate the data are made in this function Instead you can run the output through full HTML validator to detect the errors seems like poor choice since it makes is easy to overlook the fact that data went missing We could raising errors but you have to be in the IO monad to catch them Also you have to use evaluate if you want to check for errors This means you can not start sending the page until the whole page has been rendered And you have to store the whole page in RAM at once Similar problems occur if we return Either instead We mostly care about catching errors and showing them in the browser during testing so perhaps this can be configurable Another solution would be compile time error if an empty-only tag contained children FIXME also verify that the domain is correct FIXME what to do if namespace is encountered",
          "hierarchy": "HSP HTML4",
          "module": "HSP.HTML4",
          "name": "renderAsHTML",
          "normalized": "XML-\u003eText",
          "package": "hsp",
          "partial": "As HTML",
          "signature": "XML-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-HTML4.html#v:renderAsHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.Monad",
          "name": "Monad",
          "package": "hsp",
          "source": "src/HSP-Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HSP Monad",
          "module": "HSP.Monad",
          "name": "Monad",
          "package": "hsp",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.Monad",
          "name": "HSPT",
          "package": "hsp",
          "source": "src/HSP-Monad.html#HSPT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "HSP Monad",
          "module": "HSP.Monad",
          "name": "HSPT",
          "package": "hsp",
          "partial": "HSPT",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-Monad.html#t:HSPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.Monad",
          "name": "HSPT",
          "package": "hsp",
          "signature": "HSPT",
          "source": "src/HSP-Monad.html#HSPT",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP Monad",
          "module": "HSP.Monad",
          "name": "HSPT",
          "package": "hsp",
          "partial": "HSPT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-Monad.html#v:HSPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.Monad",
          "name": "unHSPT",
          "package": "hsp",
          "signature": "m a",
          "source": "src/HSP-Monad.html#HSPT",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP Monad",
          "module": "HSP.Monad",
          "name": "unHSPT",
          "package": "hsp",
          "partial": "HSPT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-Monad.html#v:unHSPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEscaping between CDATA \u003ca\u003e=\u003c/a\u003e PCDATA\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HSP.XML.PCDATA",
          "name": "PCDATA",
          "package": "hsp",
          "source": "src/HSP-XML-PCDATA.html",
          "type": "module"
        },
        "index": {
          "description": "Escaping between CDATA PCDATA",
          "hierarchy": "HSP XML PCDATA",
          "module": "HSP.XML.PCDATA",
          "name": "PCDATA",
          "package": "hsp",
          "partial": "PCDATA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML-PCDATA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a normal string and transform it to PCDATA by escaping special characters.\n calls \u003ccode\u003e\u003ca\u003eescaper\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003exmlEscapeChars\u003c/a\u003e\u003c/code\u003e\n See also: \u003ccode\u003e\u003ca\u003eescaper\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HSP.XML.PCDATA",
          "name": "escape",
          "package": "hsp",
          "signature": "Text -\u003e Builder",
          "source": "src/HSP-XML-PCDATA.html#escape",
          "type": "function"
        },
        "index": {
          "description": "Take normal string and transform it to PCDATA by escaping special characters calls escaper with xmlEscapeChars See also escaper",
          "hierarchy": "HSP XML PCDATA",
          "module": "HSP.XML.PCDATA",
          "name": "escape",
          "normalized": "Text-\u003eBuilder",
          "package": "hsp",
          "signature": "Text-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML-PCDATA.html#v:escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a normal string and transform it to PCDATA by escaping special characters.\n See also: \u003ccode\u003e\u003ca\u003eescape\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003exmlEscapeChars\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HSP.XML.PCDATA",
          "name": "escaper",
          "package": "hsp",
          "signature": "[(Char, Builder)]-\u003e Text-\u003e Builder",
          "type": "function"
        },
        "index": {
          "description": "Take normal string and transform it to PCDATA by escaping special characters See also escape xmlEscapeChars",
          "hierarchy": "HSP XML PCDATA",
          "module": "HSP.XML.PCDATA",
          "name": "escaper",
          "normalized": "[(Char,Builder)]-\u003eText-\u003eBuilder",
          "package": "hsp",
          "signature": "[(Char,Builder)]-\u003eText-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML-PCDATA.html#v:escaper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML.PCDATA",
          "name": "xmlEscapeChars",
          "package": "hsp",
          "signature": "[(Char, Builder)]",
          "source": "src/HSP-XML-PCDATA.html#xmlEscapeChars",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP XML PCDATA",
          "module": "HSP.XML.PCDATA",
          "name": "xmlEscapeChars",
          "normalized": "[(Char,Builder)]",
          "package": "hsp",
          "partial": "Escape Chars",
          "signature": "[(Char,Builder)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML-PCDATA.html#v:xmlEscapeChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDatatypes and type classes comprising the basic model behind\n the scenes of Haskell Server Pages tags.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HSP.XML",
          "name": "XML",
          "package": "hsp",
          "source": "src/HSP-XML.html",
          "type": "module"
        },
        "index": {
          "description": "Datatypes and type classes comprising the basic model behind the scenes of Haskell Server Pages tags",
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "XML",
          "package": "hsp",
          "partial": "XML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an attribue value.\n\u003c/p\u003e",
          "module": "HSP.XML",
          "name": "AttrValue",
          "package": "hsp",
          "source": "src/HSP-XML.html#AttrValue",
          "type": "data"
        },
        "index": {
          "description": "Represents an attribue value",
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "AttrValue",
          "package": "hsp",
          "partial": "Attr Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:AttrValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML",
          "name": "Attribute",
          "package": "hsp",
          "source": "src/HSP-XML.html#Attribute",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "Attribute",
          "package": "hsp",
          "partial": "Attribute",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML",
          "name": "Attributes",
          "package": "hsp",
          "source": "src/HSP-XML.html#Attributes",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "Attributes",
          "package": "hsp",
          "partial": "Attributes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:Attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML",
          "name": "Children",
          "package": "hsp",
          "source": "src/HSP-XML.html#Children",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "Children",
          "package": "hsp",
          "partial": "Children",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:Children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML",
          "name": "NSName",
          "package": "hsp",
          "source": "src/HSP-XML.html#NSName",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "NSName",
          "package": "hsp",
          "partial": "NSName",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:NSName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML",
          "name": "Namespace",
          "package": "hsp",
          "source": "src/HSP-XML.html#Namespace",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "Namespace",
          "package": "hsp",
          "partial": "Namespace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:Namespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe XML datatype representation. Is either an Element or CDATA.\n\u003c/p\u003e",
          "module": "HSP.XML",
          "name": "XML",
          "package": "hsp",
          "source": "src/HSP-XML.html#XML",
          "type": "data"
        },
        "index": {
          "description": "The XML datatype representation Is either an Element or CDATA",
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "XML",
          "package": "hsp",
          "partial": "XML",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:XML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe XMLMetaData datatype\n\u003c/p\u003e\u003cp\u003eSpecify the DOCTYPE, content-type, and preferred render for XML data.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003esetMetaData\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewithMetaData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HSP.XML",
          "name": "XMLMetaData",
          "package": "hsp",
          "source": "src/HSP-XML.html#XMLMetaData",
          "type": "data"
        },
        "index": {
          "description": "The XMLMetaData datatype Specify the DOCTYPE content-type and preferred render for XML data See also setMetaData and withMetaData",
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "XMLMetaData",
          "package": "hsp",
          "partial": "XMLMeta Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#t:XMLMetaData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML",
          "name": "CDATA",
          "package": "hsp",
          "signature": "CDATA Bool Text",
          "source": "src/HSP-XML.html#XML",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "CDATA",
          "package": "hsp",
          "partial": "CDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:CDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML",
          "name": "Element",
          "package": "hsp",
          "signature": "Element NSName Attributes Children",
          "source": "src/HSP-XML.html#XML",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "Element",
          "package": "hsp",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML",
          "name": "MkAttr",
          "package": "hsp",
          "signature": "MkAttr (NSName, AttrValue)",
          "source": "src/HSP-XML.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "MkAttr",
          "normalized": "MkAttr(NSName,AttrValue)",
          "package": "hsp",
          "partial": "Mk Attr",
          "signature": "MkAttr(NSName,AttrValue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:MkAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML",
          "name": "NoValue",
          "package": "hsp",
          "signature": "NoValue",
          "source": "src/HSP-XML.html#AttrValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "NoValue",
          "package": "hsp",
          "partial": "No Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:NoValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML",
          "name": "Value",
          "package": "hsp",
          "signature": "Value Bool Text",
          "source": "src/HSP-XML.html#AttrValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "Value",
          "package": "hsp",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML",
          "name": "XMLMetaData",
          "package": "hsp",
          "signature": "XMLMetaData",
          "source": "src/HSP-XML.html#XMLMetaData",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "XMLMetaData",
          "package": "hsp",
          "partial": "XMLMeta Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:XMLMetaData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an attribue value from a string.\n\u003c/p\u003e",
          "module": "HSP.XML",
          "name": "attrVal",
          "package": "hsp",
          "signature": "Text -\u003e AttrValue",
          "source": "src/HSP-XML.html#attrVal",
          "type": "function"
        },
        "index": {
          "description": "Create an attribue value from string",
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "attrVal",
          "normalized": "Text-\u003eAttrValue",
          "package": "hsp",
          "partial": "Val",
          "signature": "Text-\u003eAttrValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:attrVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbeds a string as a CDATA XML value.\n\u003c/p\u003e",
          "module": "HSP.XML",
          "name": "cdata",
          "package": "hsp",
          "signature": "Text -\u003e XML",
          "source": "src/HSP-XML.html#cdata",
          "type": "function"
        },
        "index": {
          "description": "Embeds string as CDATA XML value",
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "cdata",
          "normalized": "Text-\u003eXML",
          "package": "hsp",
          "signature": "Text-\u003eXML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:cdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML",
          "name": "contentType",
          "package": "hsp",
          "signature": "Text",
          "source": "src/HSP-XML.html#XMLMetaData",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "contentType",
          "package": "hsp",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:contentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(show doctype when rendering, DOCTYPE string)\n\u003c/p\u003e",
          "module": "HSP.XML",
          "name": "doctype",
          "package": "hsp",
          "signature": "(Bool, Text)",
          "source": "src/HSP-XML.html#XMLMetaData",
          "type": "function"
        },
        "index": {
          "description": "show doctype when rendering DOCTYPE string",
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "doctype",
          "normalized": "(Bool,Text)",
          "package": "hsp",
          "signature": "(Bool,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:doctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML",
          "name": "fromStringLit",
          "package": "hsp",
          "signature": "String -\u003e Text",
          "source": "src/HSP-XML.html#fromStringLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "fromStringLit",
          "normalized": "String-\u003eText",
          "package": "hsp",
          "partial": "String Lit",
          "signature": "String-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:fromStringLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether an XML value is an Element or CDATA\n\u003c/p\u003e",
          "module": "HSP.XML",
          "name": "isCDATA",
          "package": "hsp",
          "signature": "XML -\u003e Bool",
          "source": "src/HSP-XML.html#isCDATA",
          "type": "function"
        },
        "index": {
          "description": "Test whether an XML value is an Element or CDATA",
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "isCDATA",
          "normalized": "XML-\u003eBool",
          "package": "hsp",
          "partial": "CDATA",
          "signature": "XML-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:isCDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether an XML value is an Element or CDATA\n\u003c/p\u003e",
          "module": "HSP.XML",
          "name": "isElement",
          "package": "hsp",
          "signature": "XML -\u003e Bool",
          "source": "src/HSP-XML.html#isElement",
          "type": "function"
        },
        "index": {
          "description": "Test whether an XML value is an Element or CDATA",
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "isElement",
          "normalized": "XML-\u003eBool",
          "package": "hsp",
          "partial": "Element",
          "signature": "XML-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:isElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an attribue value from a string.\n\u003c/p\u003e",
          "module": "HSP.XML",
          "name": "pAttrVal",
          "package": "hsp",
          "signature": "Text -\u003e AttrValue",
          "source": "src/HSP-XML.html#pAttrVal",
          "type": "function"
        },
        "index": {
          "description": "Create an attribue value from string",
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "pAttrVal",
          "normalized": "Text-\u003eAttrValue",
          "package": "hsp",
          "partial": "Attr Val",
          "signature": "Text-\u003eAttrValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:pAttrVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbeds a string as a CDATA XML value.\n\u003c/p\u003e",
          "module": "HSP.XML",
          "name": "pcdata",
          "package": "hsp",
          "signature": "Text -\u003e XML",
          "source": "src/HSP-XML.html#pcdata",
          "type": "function"
        },
        "index": {
          "description": "Embeds string as CDATA XML value",
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "pcdata",
          "normalized": "Text-\u003eXML",
          "package": "hsp",
          "signature": "Text-\u003eXML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:pcdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XML",
          "name": "preferredRenderer",
          "package": "hsp",
          "signature": "XML -\u003e Builder",
          "source": "src/HSP-XML.html#XMLMetaData",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "preferredRenderer",
          "normalized": "XML-\u003eBuilder",
          "package": "hsp",
          "partial": "Renderer",
          "signature": "XML-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:preferredRenderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-prints XML values.\n\u003c/p\u003e",
          "module": "HSP.XML",
          "name": "renderXML",
          "package": "hsp",
          "signature": "XML -\u003e Text",
          "source": "src/HSP-XML.html#renderXML",
          "type": "function"
        },
        "index": {
          "description": "Pretty-prints XML values",
          "hierarchy": "HSP XML",
          "module": "HSP.XML",
          "name": "renderXML",
          "normalized": "XML-\u003eText",
          "package": "hsp",
          "partial": "XML",
          "signature": "XML-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XML.html#v:renderXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe class and monad transformer that forms the basis of the literal XML\n syntax translation. Literal tags will be translated into functions of\n the GenerateXML class, and any instantiating monads with associated XML\n types can benefit from that syntax.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HSP.XMLGenerator",
          "name": "XMLGenerator",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html",
          "type": "module"
        },
        "index": {
          "description": "The class and monad transformer that forms the basis of the literal XML syntax translation Literal tags will be translated into functions of the GenerateXML class and any instantiating monads with associated XML types can benefit from that syntax",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "XMLGenerator",
          "package": "hsp",
          "partial": "XMLGenerator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "AppendChild",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#AppendChild",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "AppendChild",
          "package": "hsp",
          "partial": "Append Child",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:AppendChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "Attr",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#Attr",
          "type": "data"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "Attr",
          "package": "hsp",
          "partial": "Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilarly embed values as attributes of an XML element.\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "EmbedAsAttr",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#EmbedAsAttr",
          "type": "class"
        },
        "index": {
          "description": "Similarly embed values as attributes of an XML element",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "EmbedAsAttr",
          "package": "hsp",
          "partial": "Embed As Attr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:EmbedAsAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed values as child nodes of an XML element. The parent type will be clear\n from the context so it is not mentioned.\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "EmbedAsChild",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#EmbedAsChild",
          "type": "class"
        },
        "index": {
          "description": "Embed values as child nodes of an XML element The parent type will be clear from the context so it is not mentioned",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "EmbedAsChild",
          "package": "hsp",
          "partial": "Embed As Child",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:EmbedAsChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "GenAttribute",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#GenAttribute",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "GenAttribute",
          "package": "hsp",
          "partial": "Gen Attribute",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:GenAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "GenAttributeList",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#GenAttributeList",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "GenAttributeList",
          "package": "hsp",
          "partial": "Gen Attribute List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:GenAttributeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "GenChild",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#GenChild",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "GenChild",
          "package": "hsp",
          "partial": "Gen Child",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:GenChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "GenChildList",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#GenChildList",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "GenChildList",
          "package": "hsp",
          "partial": "Gen Child List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:GenChildList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonyms to avoid writing out the XMLnGenT all the time\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "GenXML",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#GenXML",
          "type": "type"
        },
        "index": {
          "description": "Type synonyms to avoid writing out the XMLnGenT all the time",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "GenXML",
          "package": "hsp",
          "partial": "Gen XML",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:GenXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "GenXMLList",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#GenXMLList",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "GenXMLList",
          "package": "hsp",
          "partial": "Gen XMLList",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:GenXMLList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames can be simple or qualified with a domain. We want to conveniently\n use both simple strings or pairs wherever a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e is expected.\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "IsName",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#IsName",
          "type": "class"
        },
        "index": {
          "description": "Names can be simple or qualified with domain We want to conveniently use both simple strings or pairs wherever Name is expected",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "IsName",
          "package": "hsp",
          "partial": "Is Name",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:IsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "Name",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "Name",
          "package": "hsp",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet attributes on XML elements\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "SetAttr",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#SetAttr",
          "type": "class"
        },
        "index": {
          "description": "Set attributes on XML elements",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "SetAttr",
          "package": "hsp",
          "partial": "Set Attr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:SetAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "TypeCast",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#TypeCast",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "TypeCast",
          "package": "hsp",
          "partial": "Type Cast",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:TypeCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "TypeCast'",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#TypeCast%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "TypeCast'",
          "package": "hsp",
          "partial": "Type Cast'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:TypeCast-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "TypeCast''",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#TypeCast%27%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "TypeCast''",
          "package": "hsp",
          "partial": "Type Cast''",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:TypeCast-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "TypeCastM",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#TypeCastM",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "TypeCastM",
          "package": "hsp",
          "partial": "Type Cast",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:TypeCastM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "TypeCastM'",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#TypeCastM%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "TypeCastM'",
          "package": "hsp",
          "partial": "Type Cast M'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:TypeCastM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "TypeCastM''",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#TypeCastM%27%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "TypeCastM''",
          "package": "hsp",
          "partial": "Type Cast M''",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:TypeCastM-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate XML values in some XMLGenerator monad.\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "XMLGen",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#XMLGen",
          "type": "class"
        },
        "index": {
          "description": "Generate XML values in some XMLGenerator monad",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "XMLGen",
          "package": "hsp",
          "partial": "XMLGen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:XMLGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad transformer that allows a monad to generate XML values.\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "XMLGenT",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#XMLGenT",
          "type": "newtype"
        },
        "index": {
          "description": "The monad transformer that allows monad to generate XML values",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "XMLGenT",
          "package": "hsp",
          "partial": "XMLGen",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:XMLGenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "XMLGenerator",
          "package": "hsp",
          "source": "src/HSP-XMLGenerator.html#XMLGenerator",
          "type": "class"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "XMLGenerator",
          "package": "hsp",
          "partial": "XMLGenerator",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#t:XMLGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprepend the list of \u003ccode\u003eattr\u003c/code\u003e to the attributes for the \u003ccode\u003eelem\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "(\u003c\u003c@)",
          "package": "hsp",
          "signature": "elem -\u003e [attr] -\u003e GenXML m",
          "source": "src/HSP-XMLGenerator.html#%3C%3C%40",
          "type": "function"
        },
        "index": {
          "description": "prepend the list of attr to the attributes for the elem",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "(\u003c\u003c@) \u003c\u003c@",
          "normalized": "a-\u003e[b]-\u003eGenXML c",
          "package": "hsp",
          "signature": "elem-\u003e[attr]-\u003eGenXML m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:-60--60--64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eappend children to the children of \u003ccode\u003eelem\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "(\u003c\u003c:)",
          "package": "hsp",
          "signature": "elem -\u003e [c] -\u003e GenXML m",
          "source": "src/HSP-XMLGenerator.html#%3C%3C%3A",
          "type": "function"
        },
        "index": {
          "description": "append children to the children of elem",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "(\u003c\u003c:) \u003c\u003c:",
          "normalized": "a-\u003e[b]-\u003eGenXML c",
          "package": "hsp",
          "signature": "elem-\u003e[c]-\u003eGenXML m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:-60--60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprepend \u003ccode\u003eattr\u003c/code\u003e to the list of attributes for the \u003ccode\u003eelem\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "(\u003c@)",
          "package": "hsp",
          "signature": "elem -\u003e attr -\u003e GenXML m",
          "source": "src/HSP-XMLGenerator.html#%3C%40",
          "type": "function"
        },
        "index": {
          "description": "prepend attr to the list of attributes for the elem",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "(\u003c@) \u003c@",
          "normalized": "a-\u003eb-\u003eGenXML c",
          "package": "hsp",
          "signature": "elem-\u003eattr-\u003eGenXML m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:-60--64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eappend child to the children of \u003ccode\u003eelem\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "(\u003c:)",
          "package": "hsp",
          "signature": "elem -\u003e c -\u003e GenXML m",
          "source": "src/HSP-XMLGenerator.html#%3C%3A",
          "type": "function"
        },
        "index": {
          "description": "append child to the children of elem",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "(\u003c:) \u003c:",
          "normalized": "a-\u003eb-\u003eGenXML c",
          "package": "hsp",
          "signature": "elem-\u003ec-\u003eGenXML m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:-60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": ":=",
          "package": "hsp",
          "signature": "n := a",
          "source": "src/HSP-XMLGenerator.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": ":=",
          "package": "hsp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "XMLGenT",
          "package": "hsp",
          "signature": "XMLGenT (m a)",
          "source": "src/HSP-XMLGenerator.html#XMLGenT",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "XMLGenT",
          "package": "hsp",
          "partial": "XMLGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:XMLGenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eappend child to the children of \u003ccode\u003eelem\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "app",
          "package": "hsp",
          "signature": "elem -\u003e c -\u003e GenXML m",
          "source": "src/HSP-XMLGenerator.html#app",
          "type": "function"
        },
        "index": {
          "description": "append child to the children of elem",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "app",
          "normalized": "a-\u003eb-\u003eGenXML c",
          "package": "hsp",
          "signature": "elem-\u003ec-\u003eGenXML m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:app"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "appAll",
          "package": "hsp",
          "signature": "elem -\u003e GenChildList m -\u003e GenXML m",
          "source": "src/HSP-XMLGenerator.html#appAll",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "appAll",
          "normalized": "a-\u003eGenChildList b-\u003eGenXML b",
          "package": "hsp",
          "partial": "All",
          "signature": "elem-\u003eGenChildList m-\u003eGenXML m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:appAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "appChild",
          "package": "hsp",
          "signature": "elem -\u003e GenChild m -\u003e GenXML m",
          "source": "src/HSP-XMLGenerator.html#appChild",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "appChild",
          "normalized": "a-\u003eGenChild b-\u003eGenXML b",
          "package": "hsp",
          "partial": "Child",
          "signature": "elem-\u003eGenChild m-\u003eGenXML m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:appChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "asAttr",
          "package": "hsp",
          "signature": "a -\u003e GenAttributeList m",
          "source": "src/HSP-XMLGenerator.html#asAttr",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "asAttr",
          "normalized": "a-\u003eGenAttributeList b",
          "package": "hsp",
          "partial": "Attr",
          "signature": "a-\u003eGenAttributeList m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:asAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "asChild",
          "package": "hsp",
          "signature": "c -\u003e GenChildList m",
          "source": "src/HSP-XMLGenerator.html#asChild",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "asChild",
          "normalized": "a-\u003eGenChildList b",
          "package": "hsp",
          "partial": "Child",
          "signature": "c-\u003eGenChildList m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:asChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "genEElement",
          "package": "hsp",
          "signature": "Name (StringType m) -\u003e [XMLGenT m [AttributeType m]] -\u003e XMLGenT m (XMLType m)",
          "source": "src/HSP-XMLGenerator.html#genEElement",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "genEElement",
          "normalized": "Name(StringType a)-\u003e[XMLGenT a[AttributeType a]]-\u003eXMLGenT a(XMLType a)",
          "package": "hsp",
          "partial": "EElement",
          "signature": "Name(StringType m)-\u003e[XMLGenT m[AttributeType m]]-\u003eXMLGenT m(XMLType m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:genEElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "genElement",
          "package": "hsp",
          "signature": "Name (StringType m) -\u003e [XMLGenT m [AttributeType m]] -\u003e [XMLGenT m [ChildType m]] -\u003e XMLGenT m (XMLType m)",
          "source": "src/HSP-XMLGenerator.html#genElement",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "genElement",
          "normalized": "Name(StringType a)-\u003e[XMLGenT a[AttributeType a]]-\u003e[XMLGenT a[ChildType a]]-\u003eXMLGenT a(XMLType a)",
          "package": "hsp",
          "partial": "Element",
          "signature": "Name(StringType m)-\u003e[XMLGenT m[AttributeType m]]-\u003e[XMLGenT m[ChildType m]]-\u003eXMLGenT m(XMLType m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:genElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emap the inner monad\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "mapXMLGenT",
          "package": "hsp",
          "signature": "(m a -\u003e n b) -\u003e XMLGenT m a -\u003e XMLGenT n b",
          "source": "src/HSP-XMLGenerator.html#mapXMLGenT",
          "type": "function"
        },
        "index": {
          "description": "map the inner monad",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "mapXMLGenT",
          "normalized": "(a b-\u003ec d)-\u003eXMLGenT a b-\u003eXMLGenT c d",
          "package": "hsp",
          "partial": "XMLGen",
          "signature": "(m a-\u003en b)-\u003eXMLGenT m a-\u003eXMLGenT n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:mapXMLGenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "pcdataToChild",
          "package": "hsp",
          "signature": "StringType m -\u003e ChildType m",
          "source": "src/HSP-XMLGenerator.html#pcdataToChild",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "pcdataToChild",
          "normalized": "StringType a-\u003eChildType a",
          "package": "hsp",
          "partial": "To Child",
          "signature": "StringType m-\u003eChildType m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:pcdataToChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprepend \u003ccode\u003eattr\u003c/code\u003e to the list of attributes for the \u003ccode\u003eelem\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "set",
          "package": "hsp",
          "signature": "elem -\u003e attr -\u003e GenXML m",
          "source": "src/HSP-XMLGenerator.html#set",
          "type": "function"
        },
        "index": {
          "description": "prepend attr to the list of attributes for the elem",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "set",
          "normalized": "a-\u003eb-\u003eGenXML c",
          "package": "hsp",
          "signature": "elem-\u003eattr-\u003eGenXML m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "setAll",
          "package": "hsp",
          "signature": "elem -\u003e GenAttributeList m -\u003e GenXML m",
          "source": "src/HSP-XMLGenerator.html#setAll",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "setAll",
          "normalized": "a-\u003eGenAttributeList b-\u003eGenXML b",
          "package": "hsp",
          "partial": "All",
          "signature": "elem-\u003eGenAttributeList m-\u003eGenXML m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:setAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "setAttr",
          "package": "hsp",
          "signature": "elem -\u003e GenAttribute m -\u003e GenXML m",
          "source": "src/HSP-XMLGenerator.html#setAttr",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "setAttr",
          "normalized": "a-\u003eGenAttribute b-\u003eGenXML b",
          "package": "hsp",
          "partial": "Attr",
          "signature": "elem-\u003eGenAttribute m-\u003eGenXML m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:setAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "toName",
          "package": "hsp",
          "signature": "n -\u003e Name s",
          "source": "src/HSP-XMLGenerator.html#toName",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "toName",
          "normalized": "a-\u003eName b",
          "package": "hsp",
          "partial": "Name",
          "signature": "n-\u003eName s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:toName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "typeCast",
          "package": "hsp",
          "signature": "a -\u003e b",
          "source": "src/HSP-XMLGenerator.html#typeCast",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "typeCast",
          "normalized": "a-\u003eb",
          "package": "hsp",
          "partial": "Cast",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:typeCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "typeCast'",
          "package": "hsp",
          "signature": "t -\u003e a -\u003e b",
          "source": "src/HSP-XMLGenerator.html#typeCast%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "typeCast'",
          "normalized": "a-\u003eb-\u003ec",
          "package": "hsp",
          "partial": "Cast'",
          "signature": "t-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:typeCast-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "typeCast''",
          "package": "hsp",
          "signature": "t -\u003e a -\u003e b",
          "source": "src/HSP-XMLGenerator.html#typeCast%27%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "typeCast''",
          "normalized": "a-\u003eb-\u003ec",
          "package": "hsp",
          "partial": "Cast''",
          "signature": "t-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:typeCast-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "typeCastM",
          "package": "hsp",
          "signature": "ma x -\u003e mb x",
          "source": "src/HSP-XMLGenerator.html#typeCastM",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "typeCastM",
          "normalized": "a b-\u003ec b",
          "package": "hsp",
          "partial": "Cast",
          "signature": "ma x-\u003emb x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:typeCastM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "typeCastM'",
          "package": "hsp",
          "signature": "t -\u003e ma x -\u003e mb x",
          "source": "src/HSP-XMLGenerator.html#typeCastM%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "typeCastM'",
          "normalized": "a-\u003eb c-\u003ed c",
          "package": "hsp",
          "partial": "Cast M'",
          "signature": "t-\u003ema x-\u003emb x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:typeCastM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "typeCastM''",
          "package": "hsp",
          "signature": "t -\u003e ma x -\u003e mb x",
          "source": "src/HSP-XMLGenerator.html#typeCastM%27%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "typeCastM''",
          "normalized": "a-\u003eb c-\u003ed c",
          "package": "hsp",
          "partial": "Cast M''",
          "signature": "t-\u003ema x-\u003emb x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:typeCastM-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eun-lift.\n\u003c/p\u003e",
          "module": "HSP.XMLGenerator",
          "name": "unXMLGenT",
          "package": "hsp",
          "signature": "XMLGenT m a -\u003e m a",
          "source": "src/HSP-XMLGenerator.html#unXMLGenT",
          "type": "function"
        },
        "index": {
          "description": "un-lift",
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "unXMLGenT",
          "normalized": "XMLGenT a b-\u003ea b",
          "package": "hsp",
          "partial": "XMLGen",
          "signature": "XMLGenT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:unXMLGenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.XMLGenerator",
          "name": "xmlToChild",
          "package": "hsp",
          "signature": "XMLType m -\u003e ChildType m",
          "source": "src/HSP-XMLGenerator.html#xmlToChild",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSP XMLGenerator",
          "module": "HSP.XMLGenerator",
          "name": "xmlToChild",
          "normalized": "XMLType a-\u003eChildType a",
          "package": "hsp",
          "partial": "To Child",
          "signature": "XMLType m-\u003eChildType m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP-XMLGenerator.html#v:xmlToChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP",
          "name": "HSP",
          "package": "hsp",
          "source": "src/HSP.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HSP",
          "module": "HSP",
          "name": "HSP",
          "package": "hsp",
          "partial": "HSP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsp/docs/HSP.html#"
      }
    }
  ]
]