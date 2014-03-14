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
        "word": "hexpat-pickle"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003ehexpat-pickle\u003c/em\u003e provides XML picklers that plug into the parse tree of the\n \u003cem\u003ehexpat\u003c/em\u003e package, giving XML serialization with excellent performance.\n Picklers are source code similar to those of the \u003cem\u003eHXT\u003c/em\u003e package. The concept and\n design was lifted entirely from \u003cem\u003eHXT\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThe API differences between \u003cem\u003eHXT\u003c/em\u003e and \u003cem\u003ehexpat-pickle\u003c/em\u003e are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eXmlPickler\u003c/a\u003e\u003c/code\u003e take one extra argument, indicating the part of the\n        XML tree we are working with.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003expElem\u003c/a\u003e\u003c/code\u003e takes three arguments to \u003cem\u003eHXT\u003c/em\u003e's two, because we treat attributes\n        and child nodes separately, while \u003cem\u003eHXT\u003c/em\u003e groups them together.\n\u003c/li\u003e\u003cli\u003e Two type adapters (absent in \u003cem\u003eHXT\u003c/em\u003e), \u003ccode\u003e\u003ca\u003expRoot\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003expContent\u003c/a\u003e\u003c/code\u003e are needed in certain\n        places.  See below.\n\u003c/li\u003e\u003cli\u003e These \u003cem\u003eHXT\u003c/em\u003e picklers are missing: \u003ccode\u003expCondSeq\u003c/code\u003e, \u003ccode\u003expSeq\u003c/code\u003e, \u003ccode\u003expChoice\u003c/code\u003e, \u003ccode\u003expList1\u003c/code\u003e\n        (\u003ccode\u003e\u003ca\u003expListMinLen\u003c/a\u003e\u003c/code\u003e may be substituted), \u003ccode\u003expElemWithAttrValue\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe data type \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e t a\u003c/code\u003e represents both a pickler (converting Haskell data\n to XML) and an unpickler (XML to Haskell data), so your code only needs to be\n written once for both serialization and deserialization.  The \u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e primitives, such\n as \u003ccode\u003e\u003ca\u003expElem\u003c/a\u003e\u003c/code\u003e for XML elements, may be composed into complex arrangements using\n \u003ccode\u003e\u003ca\u003expPair\u003c/a\u003e\u003c/code\u003e and other combinators.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003et\u003c/code\u003e argument (absent in \u003cem\u003eHXT\u003c/em\u003e) represents the part of the XML tree\n that this \u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e works on. \u003ccode\u003et\u003c/code\u003e has \u003cem\u003ethree\u003c/em\u003e possible values. These are the\n most general types, and your picklers should not use any other types for \u003ccode\u003et\u003c/code\u003e.\n Here they are, assuming we are using the \u003cem\u003eString\u003c/em\u003e type for our strings:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e [\u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e String String] a\u003c/code\u003e \u003cem\u003e(for working with an XML element)\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e String a\u003c/code\u003e \u003cem\u003e(for working with text content)\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eAttributes\u003c/a\u003e\u003c/code\u003e String String) a\u003c/code\u003e \u003cem\u003e(for working with attributes)\u003c/em\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe reason why you a list of \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e instead of just one when working with a single\n element is because the unpickler of \u003ccode\u003e\u003ca\u003expElem\u003c/a\u003e\u003c/code\u003e needs to see the whole list of nodes\n so that it can 1. skip whitespace, and 2. search to match the specified tag name.\n\u003c/p\u003e\u003cp\u003eThe top level of the document does not follow this rule, because it is a single\n \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e type.  \u003ccode\u003e\u003ca\u003expRoot\u003c/a\u003e\u003c/code\u003e is needed to adapt this to type [\u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e] for your\n pickler to use.  You would typically define a pickler for a whole document with\n \u003ccode\u003e\u003ca\u003expElem\u003c/a\u003e\u003c/code\u003e, then pickle it to a single \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ccode\u003e\u003ca\u003epickleTree\u003c/a\u003e\u003c/code\u003e (xpRoot myDocPickler) value\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe type for \u003cem\u003etext content\u003c/em\u003e works for attribute values directly, but if you want\n to use it as the text content of an element, you need to adapt it by wrapping with\n \u003ccode\u003e\u003ca\u003expContent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ehexpat-pickle\u003c/em\u003e can work with the following string types:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String\n\u003c/li\u003e\u003cli\u003e Data.ByteString\n\u003c/li\u003e\u003cli\u003e Data.Text\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eand it is extensible to any other string type by making it an instance of\n \u003ccode\u003e\u003ca\u003eGenericXMLString\u003c/a\u003e\u003c/code\u003e.  We select the type for XML \u003cem\u003etag\u003c/em\u003e and \u003cem\u003etext\u003c/em\u003e separately\n in our four \"tree part\" types as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e [Node tag text] a\u003c/code\u003e \u003cem\u003e(for working with an XML element)\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e text a\u003c/code\u003e \u003cem\u003e(for working with text content)\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e (Attributes tag text) a\u003c/code\u003e \u003cem\u003e(for working with attributes)\u003c/em\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003etag\u003c/em\u003e may be a string type, or it may be a QName type defined in\n the \u003ccode\u003e\u003ca\u003eQualified\u003c/a\u003e\u003c/code\u003e module.  (Or you can extend it any way you like.)\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003eText.XML.Expat.Tree\u003c/em\u003e and \u003cem\u003eText.XML.Expat.Qualified\u003c/em\u003e provide the follow\n useful shortcuts for common cases of \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eAttributes\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eUNode\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUAttributes\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eQNode\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eQAttributes\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe type class \u003ccode\u003e\u003ca\u003eXmlPickler\u003c/a\u003e\u003c/code\u003e is used to extend a polymorphic \u003ccode\u003e\u003ca\u003expickle\u003c/a\u003e\u003c/code\u003e function\n to provide a pickler for a new type, in a similar way to \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHere is a simple and complete example to get you started:\n\u003c/p\u003e\u003cpre\u003e import Text.XML.Expat.Pickle\n import Text.XML.Expat.Tree\n import qualified Data.ByteString.Lazy as L\n \n -- Person name, age and description\n data Person = Person String Int String\n \n xpPerson :: PU [UNode String] Person\n xpPerson =\n     -- How to wrap and unwrap a Person\n     xpWrap (\\((name, age), descr) -\u003e Person name age descr,\n             \\(Person name age descr) -\u003e ((name, age), descr)) $\n     xpElem \"person\"\n         (xpPair\n             (xpAttr \"name\" xpText0)\n             (xpAttr \"age\" xpickle))\n         (xpContent xpText0)\n \n people = [\n     Person \"Dave\" 27 \"A fat thin man with long short hair\",\n     Person \"Jane\" 21 \"Lives in a white house with green windows\"]\n \n main = do\n     L.putStrLn $\n         pickleXML (xpRoot $ xpElemNodes \"people\" $ xpList xpPerson) people\n\u003c/pre\u003e\u003cp\u003eProgram output:\n\u003c/p\u003e\u003cpre\u003e \u003c?xml version=\"1.0\" encoding=\"UTF-8\"?\u003e\n \u003cpeople\u003e\u003cperson name=\"Dave\" age=\"27\"\u003eA fat thin man with long short hair\u003c/person\u003e\n \u003cperson name=\"Jane\" age=\"21\"\u003eLives in a white house with green windows\u003c/person\u003e\u003c/people\u003e\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "Pickle",
          "package": "hexpat-pickle",
          "source": "src/Text-XML-Expat-Pickle.html",
          "type": "module"
        },
        "index": {
          "description": "hexpat-pickle provides XML picklers that plug into the parse tree of the hexpat package giving XML serialization with excellent performance Picklers are source code similar to those of the HXT package The concept and design was lifted entirely from HXT The API differences between HXT and hexpat-pickle are PU and XmlPickler take one extra argument indicating the part of the XML tree we are working with xpElem takes three arguments to HXT two because we treat attributes and child nodes separately while HXT groups them together Two type adapters absent in HXT xpRoot and xpContent are needed in certain places See below These HXT picklers are missing xpCondSeq xpSeq xpChoice xpList1 xpListMinLen may be substituted xpElemWithAttrValue The data type PU represents both pickler converting Haskell data to XML and an unpickler XML to Haskell data so your code only needs to be written once for both serialization and deserialization The PU primitives such as xpElem for XML elements may be composed into complex arrangements using xpPair and other combinators The argument absent in HXT represents the part of the XML tree that this PU works on has three possible values These are the most general types and your picklers should not use any other types for Here they are assuming we are using the String type for our strings PU Node String String for working with an XML element PU String for working with text content PU Attributes String String for working with attributes The reason why you list of Node instead of just one when working with single element is because the unpickler of xpElem needs to see the whole list of nodes so that it can skip whitespace and search to match the specified tag name The top level of the document does not follow this rule because it is single Node type xpRoot is needed to adapt this to type Node for your pickler to use You would typically define pickler for whole document with xpElem then pickle it to single Node with pickleTree xpRoot myDocPickler value The type for text content works for attribute values directly but if you want to use it as the text content of an element you need to adapt it by wrapping with xpContent hexpat-pickle can work with the following string types String Data.ByteString Data.Text and it is extensible to any other string type by making it an instance of GenericXMLString We select the type for XML tag and text separately in our four tree part types as follows PU Node tag text for working with an XML element PU text for working with text content PU Attributes tag text for working with attributes tag may be string type or it may be QName type defined in the Qualified module Or you can extend it any way you like The Text.XML.Expat.Tree and Text.XML.Expat.Qualified provide the follow useful shortcuts for common cases of Node and Attributes UNode UAttributes QNode QAttributes The type class XmlPickler is used to extend polymorphic xpickle function to provide pickler for new type in similar way to Read and Show Here is simple and complete example to get you started import Text.XML.Expat.Pickle import Text.XML.Expat.Tree import qualified Data.ByteString.Lazy as Person name age and description data Person Person String Int String xpPerson PU UNode String Person xpPerson How to wrap and unwrap Person xpWrap name age descr Person name age descr Person name age descr name age descr xpElem person xpPair xpAttr name xpText0 xpAttr age xpickle xpContent xpText0 people Person Dave fat thin man with long short hair Person Jane Lives in white house with green windows main do L.putStrLn pickleXML xpRoot xpElemNodes people xpList xpPerson people Program output xml version encoding UTF-8 people person name Dave age fat thin man with long short hair person person name Jane age Lives in white house with green windows person people",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "Pickle",
          "package": "hexpat-pickle",
          "partial": "Pickle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType shortcut for attributes\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "Attributes",
          "package": "hexpat-pickle",
          "type": "type"
        },
        "index": {
          "description": "Type shortcut for attributes",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "Attributes",
          "package": "hexpat-pickle",
          "partial": "Attributes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#t:Attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstraction for any string type you want to use as xml text (that is,\n attribute values or element text content). If you want to use a\n new string type with \u003cem\u003ehexpat\u003c/em\u003e, you must make it an instance of\n \u003ccode\u003e\u003ca\u003eGenericXMLString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "GenericXMLString",
          "package": "hexpat-pickle",
          "type": "class"
        },
        "index": {
          "description": "An abstraction for any string type you want to use as xml text that is attribute values or element text content If you want to use new string type with hexpat you must make it an instance of GenericXMLString",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "GenericXMLString",
          "package": "hexpat-pickle",
          "partial": "Generic XMLString",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#t:GenericXMLString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType shortcut for attributes with namespaced names\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "NAttributes",
          "package": "hexpat-pickle",
          "type": "type"
        },
        "index": {
          "description": "Type shortcut for attributes with namespaced names",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "NAttributes",
          "package": "hexpat-pickle",
          "partial": "NAttributes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#t:NAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for a node where namespaced names are used for tags\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "NNode",
          "package": "hexpat-pickle",
          "type": "type"
        },
        "index": {
          "description": "Type alias for node where namespaced names are used for tags",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "NNode",
          "package": "hexpat-pickle",
          "partial": "NNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#t:NNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure tree representation that uses a list as its container type.\n\u003c/p\u003e\u003cp\u003eIn the \u003ccode\u003ehexpat\u003c/code\u003e package, a list of nodes has the type \u003ccode\u003e[Node tag text]\u003c/code\u003e, but note\n that you can also use the more general type function \u003ccode\u003e\u003ca\u003eListOf\u003c/a\u003e\u003c/code\u003e to give a list of\n any node type, using that node's associated list type, e.g.\n \u003ccode\u003eListOf (UNode Text)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "Node",
          "package": "hexpat-pickle",
          "type": "type"
        },
        "index": {
          "description": "pure tree representation that uses list as its container type In the hexpat package list of nodes has the type Node tag text but note that you can also use the more general type function ListOf to give list of any node type using that node associated list type e.g ListOf UNode Text",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "Node",
          "package": "hexpat-pickle",
          "partial": "Node",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA two-way pickler/unpickler that pickles an arbitrary\n data type ''a'' to a part of an XML tree ''t''.\n A \u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e can be composed using the pickler primitives defined in this module.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eunpickleTree\u003c/em\u003e, \u003cem\u003eunpickleTree'\u003c/em\u003e and \u003cem\u003epickleTree\u003c/em\u003e should be used directly by\n the caller.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "PU",
          "package": "hexpat-pickle",
          "source": "src/Text-XML-Expat-Pickle.html#PU",
          "type": "data"
        },
        "index": {
          "description": "two-way pickler unpickler that pickles an arbitrary data type to part of an XML tree PU can be composed using the pickler primitives defined in this module unpickleTree unpickleTree and pickleTree should be used directly by the caller",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "PU",
          "package": "hexpat-pickle",
          "partial": "PU",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#t:PU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "ParseOptions",
          "package": "hexpat-pickle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "ParseOptions",
          "package": "hexpat-pickle",
          "partial": "Parse Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#t:ParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType shortcut for attributes with qualified names\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "QAttributes",
          "package": "hexpat-pickle",
          "type": "type"
        },
        "index": {
          "description": "Type shortcut for attributes with qualified names",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "QAttributes",
          "package": "hexpat-pickle",
          "partial": "QAttributes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#t:QAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for a node where qualified names are used for tags\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "QNode",
          "package": "hexpat-pickle",
          "type": "type"
        },
        "index": {
          "description": "Type alias for node where qualified names are used for tags",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "QNode",
          "package": "hexpat-pickle",
          "partial": "QNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#t:QNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType shortcut for attributes with unqualified names where tag and\n text are the same string type.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "UAttributes",
          "package": "hexpat-pickle",
          "type": "type"
        },
        "index": {
          "description": "Type shortcut for attributes with unqualified names where tag and text are the same string type",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "UAttributes",
          "package": "hexpat-pickle",
          "partial": "UAttributes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#t:UAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for a node with unqualified tag names where tag and\n text are the same string type.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "UNode",
          "package": "hexpat-pickle",
          "type": "type"
        },
        "index": {
          "description": "Type alias for node with unqualified tag names where tag and text are the same string type",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "UNode",
          "package": "hexpat-pickle",
          "partial": "UNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#t:UNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception indicating an error during unpickling, using by the lazy variants.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "UnpickleException",
          "package": "hexpat-pickle",
          "source": "src/Text-XML-Expat-Pickle.html#UnpickleException",
          "type": "data"
        },
        "index": {
          "description": "An exception indicating an error during unpickling using by the lazy variants",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "UnpickleException",
          "package": "hexpat-pickle",
          "partial": "Unpickle Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#t:UnpickleException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a generalized pickler for converting a Haskell data of type \u003ccode\u003ea\u003c/code\u003e to/from a\n \u003ccode\u003et\u003c/code\u003e tree part, analogous to \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "XmlPickler",
          "package": "hexpat-pickle",
          "source": "src/Text-XML-Expat-Pickle.html#XmlPickler",
          "type": "class"
        },
        "index": {
          "description": "Define generalized pickler for converting Haskell data of type to from tree part analogous to Read Show",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "XmlPickler",
          "package": "hexpat-pickle",
          "partial": "Xml Pickler",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#t:XmlPickler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "PU",
          "package": "hexpat-pickle",
          "signature": "PU",
          "source": "src/Text-XML-Expat-Pickle.html#PU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "PU",
          "package": "hexpat-pickle",
          "partial": "PU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:PU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "ParseOptions",
          "package": "hexpat-pickle",
          "signature": "ParseOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "ParseOptions",
          "package": "hexpat-pickle",
          "partial": "Parse Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:ParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "UnpickleException",
          "package": "hexpat-pickle",
          "signature": "UnpickleException String",
          "source": "src/Text-XML-Expat-Pickle.html#UnpickleException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "UnpickleException",
          "package": "hexpat-pickle",
          "partial": "Unpickle Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:UnpickleException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "defaultParseOptions",
          "package": "hexpat-pickle",
          "signature": "ParseOptions tag text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "defaultParseOptions",
          "package": "hexpat-pickle",
          "partial": "Parse Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:defaultParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf provided, entity references (i.e. \u003ccode\u003e&nbsp;\u003c/code\u003e and friends) will\n be decoded into text using the supplied lookup function\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "entityDecoder",
          "package": "hexpat-pickle",
          "signature": "Maybe (tag -\u003e Maybe text)",
          "type": "function"
        },
        "index": {
          "description": "If provided entity references i.e nbsp and friends will be decoded into text using the supplied lookup function",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "entityDecoder",
          "normalized": "Maybe(a-\u003eMaybe b)",
          "package": "hexpat-pickle",
          "partial": "Decoder",
          "signature": "Maybe(tag-\u003eMaybe text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:entityDecoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "gxBreakOn",
          "package": "hexpat-pickle",
          "signature": "Char -\u003e s -\u003e (s, s)",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "gxBreakOn",
          "normalized": "Char-\u003ea-\u003e(a,a)",
          "package": "hexpat-pickle",
          "partial": "Break On",
          "signature": "Char-\u003es-\u003e(s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:gxBreakOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "gxFromByteString",
          "package": "hexpat-pickle",
          "signature": "ByteString -\u003e s",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "gxFromByteString",
          "normalized": "ByteString-\u003ea",
          "package": "hexpat-pickle",
          "partial": "From Byte String",
          "signature": "ByteString-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:gxFromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "gxFromChar",
          "package": "hexpat-pickle",
          "signature": "Char -\u003e s",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "gxFromChar",
          "normalized": "Char-\u003ea",
          "package": "hexpat-pickle",
          "partial": "From Char",
          "signature": "Char-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:gxFromChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "gxFromString",
          "package": "hexpat-pickle",
          "signature": "String -\u003e s",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "gxFromString",
          "normalized": "String-\u003ea",
          "package": "hexpat-pickle",
          "partial": "From String",
          "signature": "String-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:gxFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "gxHead",
          "package": "hexpat-pickle",
          "signature": "s -\u003e Char",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "gxHead",
          "normalized": "a-\u003eChar",
          "package": "hexpat-pickle",
          "partial": "Head",
          "signature": "s-\u003eChar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:gxHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "gxNullString",
          "package": "hexpat-pickle",
          "signature": "s -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "gxNullString",
          "normalized": "a-\u003eBool",
          "package": "hexpat-pickle",
          "partial": "Null String",
          "signature": "s-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:gxNullString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "gxTail",
          "package": "hexpat-pickle",
          "signature": "s -\u003e s",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "gxTail",
          "normalized": "a-\u003ea",
          "package": "hexpat-pickle",
          "partial": "Tail",
          "signature": "s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:gxTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "gxToByteString",
          "package": "hexpat-pickle",
          "signature": "s -\u003e ByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "gxToByteString",
          "normalized": "a-\u003eByteString",
          "package": "hexpat-pickle",
          "partial": "To Byte String",
          "signature": "s-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:gxToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "gxToString",
          "package": "hexpat-pickle",
          "signature": "s -\u003e String",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "gxToString",
          "normalized": "a-\u003eString",
          "package": "hexpat-pickle",
          "partial": "To String",
          "signature": "s-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:gxToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe encoding parameter, if provided, overrides the document's\n encoding declaration.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "overrideEncoding",
          "package": "hexpat-pickle",
          "signature": "Maybe Encoding",
          "type": "function"
        },
        "index": {
          "description": "The encoding parameter if provided overrides the document encoding declaration",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "overrideEncoding",
          "package": "hexpat-pickle",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:overrideEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell value of type \u003ccode\u003ea\u003c/code\u003e to a \u003ccode\u003et\u003c/code\u003e XML tree part.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "pickleTree",
          "package": "hexpat-pickle",
          "signature": "a -\u003e t",
          "source": "src/Text-XML-Expat-Pickle.html#PU",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell value of type to XML tree part",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "pickleTree",
          "normalized": "a-\u003eb",
          "package": "hexpat-pickle",
          "partial": "Tree",
          "signature": "a-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:pickleTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper that combines \u003ccode\u003e\u003ca\u003epickleTree\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003eformatXML\u003c/code\u003e to pickle to an\n XML document. Lazy variant returning lazy ByteString.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "pickleXML",
          "package": "hexpat-pickle",
          "signature": "PU (Node tag text) a -\u003e a -\u003e ByteString",
          "source": "src/Text-XML-Expat-Pickle.html#pickleXML",
          "type": "function"
        },
        "index": {
          "description": "helper that combines pickleTree with formatXML to pickle to an XML document Lazy variant returning lazy ByteString",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "pickleXML",
          "normalized": "PU(Node a b)c-\u003ec-\u003eByteString",
          "package": "hexpat-pickle",
          "partial": "XML",
          "signature": "PU(Node tag text)a-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:pickleXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper that combines \u003ccode\u003e\u003ca\u003epickleTree\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003eformatXML\u003c/code\u003e to pickle to an\n XML document. Strict variant returning strict ByteString.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "pickleXML'",
          "package": "hexpat-pickle",
          "signature": "PU (Node tag text) a -\u003e a -\u003e ByteString",
          "source": "src/Text-XML-Expat-Pickle.html#pickleXML%27",
          "type": "function"
        },
        "index": {
          "description": "helper that combines pickleTree with formatXML to pickle to an XML document Strict variant returning strict ByteString",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "pickleXML'",
          "normalized": "PU(Node a b)c-\u003ec-\u003eByteString",
          "package": "hexpat-pickle",
          "partial": "XML'",
          "signature": "PU(Node tag text)a-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:pickleXML-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily convert a \u003ccode\u003et\u003c/code\u003e XML tree part into a Haskell value of type \u003ccode\u003ea\u003c/code\u003e.\n In the event of an error, it throws \u003ccode\u003e\u003ca\u003eUnpickleException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "unpickleTree",
          "package": "hexpat-pickle",
          "signature": "t -\u003e a",
          "source": "src/Text-XML-Expat-Pickle.html#PU",
          "type": "function"
        },
        "index": {
          "description": "Lazily convert XML tree part into Haskell value of type In the event of an error it throws UnpickleException",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "unpickleTree",
          "normalized": "a-\u003eb",
          "package": "hexpat-pickle",
          "partial": "Tree",
          "signature": "t-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:unpickleTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estrictly convert a \u003ccode\u003et\u003c/code\u003e XML tree part into a Haskell value of type \u003ccode\u003ea\u003c/code\u003e, or give an\n unpickling error message as \u003ccode\u003eLeft error\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "unpickleTree'",
          "package": "hexpat-pickle",
          "signature": "t -\u003e Either String a",
          "source": "src/Text-XML-Expat-Pickle.html#PU",
          "type": "function"
        },
        "index": {
          "description": "strictly convert XML tree part into Haskell value of type or give an unpickling error message as Left error",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "unpickleTree'",
          "normalized": "a-\u003eEither String b",
          "package": "hexpat-pickle",
          "partial": "Tree'",
          "signature": "t-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:unpickleTree-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper that combines \u003ccode\u003eparseXML\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eunpickleTree\u003c/a\u003e\u003c/code\u003e to unpickle from an\n XML document - lazy version.   In the event of an error, it throws either\n \u003ccode\u003e\u003ca\u003eXMLParseException\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eUnpickleException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "unpickleXML",
          "package": "hexpat-pickle",
          "signature": "ParseOptions tag text -\u003e PU (Node tag text) a -\u003e ByteString -\u003e a",
          "source": "src/Text-XML-Expat-Pickle.html#unpickleXML",
          "type": "function"
        },
        "index": {
          "description": "helper that combines parseXML with unpickleTree to unpickle from an XML document lazy version In the event of an error it throws either XMLParseException or UnpickleException",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "unpickleXML",
          "normalized": "ParseOptions a b-\u003ePU(Node a b)c-\u003eByteString-\u003ec",
          "package": "hexpat-pickle",
          "partial": "XML",
          "signature": "ParseOptions tag text-\u003ePU(Node tag text)a-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:unpickleXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper that combines \u003ccode\u003eparseXML\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eunpickleTree\u003c/a\u003e\u003c/code\u003e to unpickle from an\n XML document - strict version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "unpickleXML'",
          "package": "hexpat-pickle",
          "signature": "ParseOptions tag text -\u003e PU (Node tag text) a -\u003e ByteString -\u003e Either String a",
          "source": "src/Text-XML-Expat-Pickle.html#unpickleXML%27",
          "type": "function"
        },
        "index": {
          "description": "helper that combines parseXML with unpickleTree to unpickle from an XML document strict version",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "unpickleXML'",
          "normalized": "ParseOptions a b-\u003ePU(Node a b)c-\u003eByteString-\u003eEither String c",
          "package": "hexpat-pickle",
          "partial": "XML'",
          "signature": "ParseOptions tag text-\u003ePU(Node tag text)a-\u003eByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:unpickleXML-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert XML text \u003c-\u003e a 4-tuple using the four arguments.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xp4Tuple",
          "package": "hexpat-pickle",
          "signature": "PU [t] a -\u003e PU [t] b -\u003e PU [t] c -\u003e PU [t] d -\u003e PU [t] (a, b, c, d)",
          "source": "src/Text-XML-Expat-Pickle.html#xp4Tuple",
          "type": "function"
        },
        "index": {
          "description": "Convert XML text tuple using the four arguments",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xp4Tuple",
          "normalized": "PU[a]b-\u003ePU[a]c-\u003ePU[a]d-\u003ePU[a]e-\u003ePU[a](b,c,d,e)",
          "package": "hexpat-pickle",
          "partial": "Tuple",
          "signature": "PU[t]a-\u003ePU[t]b-\u003ePU[t]c-\u003ePU[t]d-\u003ePU[t](a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xp4Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert XML text \u003c-\u003e a 5-tuple using the five arguments.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xp5Tuple",
          "package": "hexpat-pickle",
          "signature": "PU [t] a -\u003e PU [t] b -\u003e PU [t] c -\u003e PU [t] d -\u003e PU [t] e -\u003e PU [t] (a, b, c, d, e)",
          "source": "src/Text-XML-Expat-Pickle.html#xp5Tuple",
          "type": "function"
        },
        "index": {
          "description": "Convert XML text tuple using the five arguments",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xp5Tuple",
          "normalized": "PU[a]b-\u003ePU[a]c-\u003ePU[a]d-\u003ePU[a]e-\u003ePU[a]f-\u003ePU[a](b,c,d,e,f)",
          "package": "hexpat-pickle",
          "partial": "Tuple",
          "signature": "PU[t]a-\u003ePU[t]b-\u003ePU[t]c-\u003ePU[t]d-\u003ePU[t]e-\u003ePU[t](a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xp5Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert XML text \u003c-\u003e a 6-tuple using the six arguments.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xp6Tuple",
          "package": "hexpat-pickle",
          "signature": "PU [t] a -\u003e PU [t] b -\u003e PU [t] c -\u003e PU [t] d -\u003e PU [t] e -\u003e PU [t] f -\u003e PU [t] (a, b, c, d, e, f)",
          "source": "src/Text-XML-Expat-Pickle.html#xp6Tuple",
          "type": "function"
        },
        "index": {
          "description": "Convert XML text tuple using the six arguments",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xp6Tuple",
          "normalized": "PU[a]b-\u003ePU[a]c-\u003ePU[a]d-\u003ePU[a]e-\u003ePU[a]f-\u003ePU[a]g-\u003ePU[a](b,c,d,e,f,g)",
          "package": "hexpat-pickle",
          "partial": "Tuple",
          "signature": "PU[t]a-\u003ePU[t]b-\u003ePU[t]c-\u003ePU[t]d-\u003ePU[t]e-\u003ePU[t]f-\u003ePU[t](a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xp6Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an attribute with a fixed value.\n\u003c/p\u003e\u003cp\u003eUseful e.g. to declare namespaces. Is implemented by \u003ccode\u003e\u003ca\u003expAttrFixed\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpAddFixedAttr",
          "package": "hexpat-pickle",
          "signature": "tag -\u003e text -\u003e PU (Attributes tag text) a -\u003e PU (Attributes tag text) a",
          "source": "src/Text-XML-Expat-Pickle.html#xpAddFixedAttr",
          "type": "function"
        },
        "index": {
          "description": "Add an attribute with fixed value Useful e.g to declare namespaces Is implemented by xpAttrFixed",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpAddFixedAttr",
          "normalized": "a-\u003eb-\u003ePU(Attributes a b)c-\u003ePU(Attributes a b)c",
          "package": "hexpat-pickle",
          "partial": "Add Fixed Attr",
          "signature": "tag-\u003etext-\u003ePU(Attributes tag text)a-\u003ePU(Attributes tag text)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpAddFixedAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute one of a list of picklers. The \u003cem\u003eselector function\u003c/em\u003e is used during pickling, and\n the integer returned is taken as a 0-based index to select a pickler from \u003cem\u003epickler options\u003c/em\u003e.\n Unpickling is done by trying each list element in order until one succeeds\n (the \u003cem\u003eselector\u003c/em\u003e is not used).\n\u003c/p\u003e\u003cp\u003eThis is typically used to handle each constructor of a data type. However, it\n can be used wherever multiple serialization strategies apply to a single type.\n\u003c/p\u003e\u003cp\u003eNote on lazy unpickle: Because we're using a failure to pickle a child as\n the end condition it means children of xpAlt are evaluated strictly.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpAlt",
          "package": "hexpat-pickle",
          "signature": "(a -\u003e Int)-\u003e [PU t a]-\u003e PU t a",
          "type": "function"
        },
        "index": {
          "description": "Execute one of list of picklers The selector function is used during pickling and the integer returned is taken as based index to select pickler from pickler options Unpickling is done by trying each list element in order until one succeeds the selector is not used This is typically used to handle each constructor of data type However it can be used wherever multiple serialization strategies apply to single type Note on lazy unpickle Because we re using failure to pickle child as the end condition it means children of xpAlt are evaluated strictly",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpAlt",
          "normalized": "(a-\u003eInt)-\u003e[PU b a]-\u003ePU b a",
          "package": "hexpat-pickle",
          "partial": "Alt",
          "signature": "(a-\u003eInt)-\u003e[PU t a]-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate/parse an XML attribute of the specified name.  Fails if the attribute\n can't be found at this point in the tree.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpAttr",
          "package": "hexpat-pickle",
          "signature": "tag -\u003e PU text a -\u003e PU (Attributes tag text) a",
          "source": "src/Text-XML-Expat-Pickle.html#xpAttr",
          "type": "function"
        },
        "index": {
          "description": "Create parse an XML attribute of the specified name Fails if the attribute can be found at this point in the tree",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpAttr",
          "normalized": "a-\u003ePU b c-\u003ePU(Attributes a b)c",
          "package": "hexpat-pickle",
          "partial": "Attr",
          "signature": "tag-\u003ePU text a-\u003ePU(Attributes tag text)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePickle an attribute with the specified name and value, fail if the same attribute is\n not present on unpickle.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpAttrFixed",
          "package": "hexpat-pickle",
          "signature": "tag -\u003e text -\u003e PU (Attributes tag text) ()",
          "source": "src/Text-XML-Expat-Pickle.html#xpAttrFixed",
          "type": "function"
        },
        "index": {
          "description": "Pickle an attribute with the specified name and value fail if the same attribute is not present on unpickle",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpAttrFixed",
          "normalized": "a-\u003eb-\u003ePU(Attributes a b)()",
          "package": "hexpat-pickle",
          "partial": "Attr Fixed",
          "signature": "tag-\u003etext-\u003ePU(Attributes tag text)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpAttrFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptionally add an attribute, unwrapping a Maybe value.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpAttrImplied",
          "package": "hexpat-pickle",
          "signature": "tag -\u003e PU text a -\u003e PU (Attributes tag text) (Maybe a)",
          "source": "src/Text-XML-Expat-Pickle.html#xpAttrImplied",
          "type": "function"
        },
        "index": {
          "description": "Optionally add an attribute unwrapping Maybe value",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpAttrImplied",
          "normalized": "a-\u003ePU b c-\u003ePU(Attributes a b)(Maybe c)",
          "package": "hexpat-pickle",
          "partial": "Attr Implied",
          "signature": "tag-\u003ePU text a-\u003ePU(Attributes tag text)(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpAttrImplied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert/extract an attribute list literally in the xml stream.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpAttrs",
          "package": "hexpat-pickle",
          "signature": "PU [(tag, text)] [(tag, text)]",
          "source": "src/Text-XML-Expat-Pickle.html#xpAttrs",
          "type": "function"
        },
        "index": {
          "description": "Insert extract an attribute list literally in the xml stream",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpAttrs",
          "normalized": "PU[(a,b)][(a,b)]",
          "package": "hexpat-pickle",
          "partial": "Attrs",
          "signature": "PU[(tag,text)][(tag,text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you have a pickler that works with \u003cem\u003etext\u003c/em\u003e, and you want to use it as\n text content of an XML element, you need to wrap it with \u003cem\u003expContent\u003c/em\u003e.  See the\n example at the top.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpContent",
          "package": "hexpat-pickle",
          "signature": "PU text a -\u003e PU [Node tag text] a",
          "source": "src/Text-XML-Expat-Pickle.html#xpContent",
          "type": "function"
        },
        "index": {
          "description": "If you have pickler that works with text and you want to use it as text content of an XML element you need to wrap it with xpContent See the example at the top",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpContent",
          "normalized": "PU a b-\u003ePU[Node c a]b",
          "package": "hexpat-pickle",
          "partial": "Content",
          "signature": "PU text a-\u003ePU[Node tag text]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional conversion with default value\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003expWithDefault\u003c/a\u003e\u003c/code\u003e the default value is not encoded in the XML document,\n during unpickling the default value is inserted if the pickler fails\n\u003c/p\u003e\u003cp\u003eNote on lazy unpickle: The child is evaluated strictly.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpDefault",
          "package": "hexpat-pickle",
          "signature": "a -\u003e PU [t] a -\u003e PU [t] a",
          "source": "src/Text-XML-Expat-Pickle.html#xpDefault",
          "type": "function"
        },
        "index": {
          "description": "Optional conversion with default value Unlike xpWithDefault the default value is not encoded in the XML document during unpickling the default value is inserted if the pickler fails Note on lazy unpickle The child is evaluated strictly",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpDefault",
          "normalized": "a-\u003ePU[b]a-\u003ePU[b]a",
          "package": "hexpat-pickle",
          "partial": "Default",
          "signature": "a-\u003ePU[t]a-\u003ePU[t]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePickle \u003ccode\u003e(a,b)\u003c/code\u003e to/from an XML element of the specified name, where \u003ccode\u003ea\u003c/code\u003e\n is passed to a specified pickler for attributes and \u003ccode\u003eb\u003c/code\u003e to a pickler for child nodes.\n Unpickle fails if an element of this name can't be found at this point in the tree.\n\u003c/p\u003e\u003cp\u003eThis implementation differs from \u003cem\u003eHXT\u003c/em\u003e in that it unpickles elements of different\n names in any order, while \u003cem\u003eHXT\u003c/em\u003e's xpElem will fail if the XML order doesn't match\n the Haskell code.\n\u003c/p\u003e\u003cp\u003eIt also differs from \u003cem\u003eHXT\u003c/em\u003e in that it takes two pickler arguments, one for attributes\n and one for child nodes. When migrating from \u003cem\u003eHXT\u003c/em\u003e, often you can substitute just\n \u003ccode\u003e\u003ca\u003expElemAttrs\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003expElemNodes\u003c/a\u003e\u003c/code\u003e for \u003cem\u003eHXT\u003c/em\u003e's \u003ccode\u003e\u003ca\u003expElem\u003c/a\u003e\u003c/code\u003e, but where your element has both\n attributes and child nodes, you must split your data into a 2-tuple with \u003ccode\u003e\u003ca\u003expWrap\u003c/a\u003e\u003c/code\u003e,\n and separate the child picklers accordingly.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpElem",
          "package": "hexpat-pickle",
          "signature": "tag-\u003e PU [(tag, text)] a-\u003e PU [Node tag text] b-\u003e PU [Node tag text] (a, b)",
          "type": "function"
        },
        "index": {
          "description": "Pickle to from an XML element of the specified name where is passed to specified pickler for attributes and to pickler for child nodes Unpickle fails if an element of this name can be found at this point in the tree This implementation differs from HXT in that it unpickles elements of different names in any order while HXT xpElem will fail if the XML order doesn match the Haskell code It also differs from HXT in that it takes two pickler arguments one for attributes and one for child nodes When migrating from HXT often you can substitute just xpElemAttrs or xpElemNodes for HXT xpElem but where your element has both attributes and child nodes you must split your data into tuple with xpWrap and separate the child picklers accordingly",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpElem",
          "normalized": "a-\u003ePU[(a,b)]c-\u003ePU[Node a b]d-\u003ePU[Node a b](c,d)",
          "package": "hexpat-pickle",
          "partial": "Elem",
          "signature": "tag-\u003ePU[(tag,text)]a-\u003ePU[Node tag text]b-\u003ePU[Node tag text](a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper variant of xpElem for elements that contain attributes but no child tags.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpElemAttrs",
          "package": "hexpat-pickle",
          "signature": "tag-\u003e PU (Attributes tag text) a-\u003e PU [Node tag text] a",
          "type": "function"
        },
        "index": {
          "description": "helper variant of xpElem for elements that contain attributes but no child tags",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpElemAttrs",
          "normalized": "a-\u003ePU(Attributes a b)c-\u003ePU[Node a b]c",
          "package": "hexpat-pickle",
          "partial": "Elem Attrs",
          "signature": "tag-\u003ePU(Attributes tag text)a-\u003ePU[Node tag text]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpElemAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper variant of xpElem for elements that contain child nodes but no attributes.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpElemNodes",
          "package": "hexpat-pickle",
          "signature": "tag-\u003e PU [Node tag text] a-\u003e PU [Node tag text] a",
          "type": "function"
        },
        "index": {
          "description": "helper variant of xpElem for elements that contain child nodes but no attributes",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpElemNodes",
          "normalized": "a-\u003ePU[Node a b]c-\u003ePU[Node a b]c",
          "package": "hexpat-pickle",
          "partial": "Elem Nodes",
          "signature": "tag-\u003ePU[Node tag text]a-\u003ePU[Node tag text]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpElemNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert nothing \u003c-\u003e constant value. Does not output or consume any XML text.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpLift",
          "package": "hexpat-pickle",
          "signature": "a -\u003e PU [t] a",
          "source": "src/Text-XML-Expat-Pickle.html#xpLift",
          "type": "function"
        },
        "index": {
          "description": "Convert nothing constant value Does not output or consume any XML text",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpLift",
          "normalized": "a-\u003ePU[b]a",
          "package": "hexpat-pickle",
          "partial": "Lift",
          "signature": "a-\u003ePU[t]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert XML text \u003c-\u003e a list of elements. During unpickling, failure of the\n argument unpickler is the end-of-list condition (and it isn't a failure).\n\u003c/p\u003e\u003cp\u003eNote on lazy unpickle: Because we're using a failure to pickle a child as\n the end condition it means we're only lazy at the top-level xpList. Children\n of xpList are evaluated strictly. Use \u003ccode\u003e\u003ca\u003expList0\u003c/a\u003e\u003c/code\u003e to fix this.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpList",
          "package": "hexpat-pickle",
          "signature": "PU [Node tag text] a -\u003e PU [Node tag text] [a]",
          "source": "src/Text-XML-Expat-Pickle.html#xpList",
          "type": "function"
        },
        "index": {
          "description": "Convert XML text list of elements During unpickling failure of the argument unpickler is the end-of-list condition and it isn failure Note on lazy unpickle Because we re using failure to pickle child as the end condition it means we re only lazy at the top-level xpList Children of xpList are evaluated strictly Use xpList0 to fix this",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpList",
          "normalized": "PU[Node a b]c-\u003ePU[Node a b][c]",
          "package": "hexpat-pickle",
          "partial": "List",
          "signature": "PU[Node tag text]a-\u003ePU[Node tag text][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert XML text \u003c-\u003e a list of elements. Unlike \u003ccode\u003e\u003ca\u003expList\u003c/a\u003e\u003c/code\u003e, this function\n uses \u003cem\u003eno more elements\u003c/em\u003e as the end of list condition, which means it can\n evaluate its children lazily.\n\u003c/p\u003e\u003cp\u003eAny error in a child will cause an error to be reported.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpList0",
          "package": "hexpat-pickle",
          "signature": "PU [Node tag text] a -\u003e PU [Node tag text] [a]",
          "source": "src/Text-XML-Expat-Pickle.html#xpList0",
          "type": "function"
        },
        "index": {
          "description": "Convert XML text list of elements Unlike xpList this function uses no more elements as the end of list condition which means it can evaluate its children lazily Any error in child will cause an error to be reported",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpList0",
          "normalized": "PU[Node a b]c-\u003ePU[Node a b][c]",
          "package": "hexpat-pickle",
          "partial": "List",
          "signature": "PU[Node tag text]a-\u003ePU[Node tag text][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpList0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike xpList, but only succeed during deserialization if at least a minimum number of elements are unpickled.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpListMinLen",
          "package": "hexpat-pickle",
          "signature": "Int -\u003e PU [Node tag text] a -\u003e PU [Node tag text] [a]",
          "source": "src/Text-XML-Expat-Pickle.html#xpListMinLen",
          "type": "function"
        },
        "index": {
          "description": "Like xpList but only succeed during deserialization if at least minimum number of elements are unpickled",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpListMinLen",
          "normalized": "Int-\u003ePU[Node a b]c-\u003ePU[Node a b][c]",
          "package": "hexpat-pickle",
          "partial": "List Min Len",
          "signature": "Int-\u003ePU[Node tag text]a-\u003ePU[Node tag text][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpListMinLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard pickler for maps\n\u003c/p\u003e\u003cp\u003eThis pickler converts a map into a list of pairs of the form\n\u003c/p\u003e\u003cpre\u003e \u003celt attr=\"key\"\u003evalue\u003c/elt\u003e\n\u003c/pre\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpMap",
          "package": "hexpat-pickle",
          "signature": "tag-\u003e tag-\u003e PU text k-\u003e PU [Node tag text] v-\u003e PU [Node tag text] (Map k v)",
          "type": "function"
        },
        "index": {
          "description": "Standard pickler for maps This pickler converts map into list of pairs of the form elt attr key value elt",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpMap",
          "normalized": "a-\u003ea-\u003ePU b c-\u003ePU[Node a b]d-\u003ePU[Node a b](Map c d)",
          "package": "hexpat-pickle",
          "partial": "Map",
          "signature": "tag-\u003etag-\u003ePU text k-\u003ePU[Node tag text]v-\u003ePU[Node tag text](Map k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert XML text \u003c-\u003e a Maybe type. During unpickling, Nothing is returned\n if there's a failure during the unpickling of the first argument.  A typical\n example is:\n\u003c/p\u003e\u003cpre\u003e xpElemAttrs \"score\" $ xpOption $ xpAttr \"value\" xpickle\n\u003c/pre\u003e\u003cp\u003ein which \u003ccode\u003eJust 5\u003c/code\u003e would be encoded as \u003ccode\u003e\u003cscore value=\"5\"/\u003e\u003c/code\u003e and \u003ccode\u003eNothing\u003c/code\u003e would be\n encoded as \u003ccode\u003e\u003cscore/\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote on lazy unpickle: The argument is evaluated strictly.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpOption",
          "package": "hexpat-pickle",
          "signature": "PU [t] a -\u003e PU [t] (Maybe a)",
          "source": "src/Text-XML-Expat-Pickle.html#xpOption",
          "type": "function"
        },
        "index": {
          "description": "Convert XML text Maybe type During unpickling Nothing is returned if there failure during the unpickling of the first argument typical example is xpElemAttrs score xpOption xpAttr value xpickle in which Just would be encoded as score value and Nothing would be encoded as score Note on lazy unpickle The argument is evaluated strictly",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpOption",
          "normalized": "PU[a]b-\u003ePU[a](Maybe b)",
          "package": "hexpat-pickle",
          "partial": "Option",
          "signature": "PU[t]a-\u003ePU[t](Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert XML text \u003c-\u003e a 2-tuple using the two arguments.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpPair",
          "package": "hexpat-pickle",
          "signature": "PU [t] a -\u003e PU [t] b -\u003e PU [t] (a, b)",
          "source": "src/Text-XML-Expat-Pickle.html#xpPair",
          "type": "function"
        },
        "index": {
          "description": "Convert XML text tuple using the two arguments",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpPair",
          "normalized": "PU[a]b-\u003ePU[a]c-\u003ePU[a](b,c)",
          "package": "hexpat-pickle",
          "partial": "Pair",
          "signature": "PU[t]a-\u003ePU[t]b-\u003ePU[t](a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert XML text content \u003c-\u003e any type that implements \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n Fails on unpickle if \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpPrim",
          "package": "hexpat-pickle",
          "signature": "PU text n",
          "source": "src/Text-XML-Expat-Pickle.html#xpPrim",
          "type": "function"
        },
        "index": {
          "description": "Convert XML text content any type that implements Read and Show Fails on unpickle if read fails",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpPrim",
          "package": "hexpat-pickle",
          "partial": "Prim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdapts a list of nodes to a single node. Generally used at the top level of\n an XML document.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpRoot",
          "package": "hexpat-pickle",
          "signature": "PU [Node tag text] a -\u003e PU (Node tag text) a",
          "source": "src/Text-XML-Expat-Pickle.html#xpRoot",
          "type": "function"
        },
        "index": {
          "description": "Adapts list of nodes to single node Generally used at the top level of an XML document",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpRoot",
          "normalized": "PU[Node a b]c-\u003ePU(Node a b)c",
          "package": "hexpat-pickle",
          "partial": "Root",
          "signature": "PU[Node tag text]a-\u003ePU(Node tag text)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert XML text content \u003c-\u003e String. Empty strings result in unpickle failure (Be warned!).\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpText",
          "package": "hexpat-pickle",
          "signature": "PU text text",
          "source": "src/Text-XML-Expat-Pickle.html#xpText",
          "type": "function"
        },
        "index": {
          "description": "Convert XML text content String Empty strings result in unpickle failure Be warned",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpText",
          "package": "hexpat-pickle",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert XML text content \u003c-\u003e String. Handles empty strings.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpText0",
          "package": "hexpat-pickle",
          "signature": "PU text text",
          "source": "src/Text-XML-Expat-Pickle.html#xpText0",
          "type": "function"
        },
        "index": {
          "description": "Convert XML text content String Handles empty strings",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpText0",
          "package": "hexpat-pickle",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpText0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo output when pickling, always generates an error with the specified message on unpickling.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpThrow",
          "package": "hexpat-pickle",
          "signature": "String-\u003e PU [t] a",
          "type": "function"
        },
        "index": {
          "description": "No output when pickling always generates an error with the specified message on unpickling",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpThrow",
          "normalized": "String-\u003ePU[a]b",
          "package": "hexpat-pickle",
          "partial": "Throw",
          "signature": "String-\u003ePU[t]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpThrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert/extract a tree node literally in the xml stream.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpTree",
          "package": "hexpat-pickle",
          "signature": "PU [Node tag text] (Node tag text)",
          "source": "src/Text-XML-Expat-Pickle.html#xpTree",
          "type": "function"
        },
        "index": {
          "description": "Insert extract tree node literally in the xml stream",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpTree",
          "normalized": "PU[Node a b](Node a b)",
          "package": "hexpat-pickle",
          "partial": "Tree",
          "signature": "PU[Node tag text](Node tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert/extract a list of tree nodes literally in the xml stream.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpTrees",
          "package": "hexpat-pickle",
          "signature": "PU [Node tag text] [Node tag text]",
          "source": "src/Text-XML-Expat-Pickle.html#xpTrees",
          "type": "function"
        },
        "index": {
          "description": "Insert extract list of tree nodes literally in the xml stream",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpTrees",
          "normalized": "PU[Node a b][Node a b]",
          "package": "hexpat-pickle",
          "partial": "Trees",
          "signature": "PU[Node tag text][Node tag text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert XML text \u003c-\u003e a 3-tuple using the three arguments.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpTriple",
          "package": "hexpat-pickle",
          "signature": "PU [t] a -\u003e PU [t] b -\u003e PU [t] c -\u003e PU [t] (a, b, c)",
          "source": "src/Text-XML-Expat-Pickle.html#xpTriple",
          "type": "function"
        },
        "index": {
          "description": "Convert XML text tuple using the three arguments",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpTriple",
          "normalized": "PU[a]b-\u003ePU[a]c-\u003ePU[a]d-\u003ePU[a](b,c,d)",
          "package": "hexpat-pickle",
          "partial": "Triple",
          "signature": "PU[t]a-\u003ePU[t]b-\u003ePU[t]c-\u003ePU[t](a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpTriple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePickler that during pickling always uses the first pickler, and during\n unpickling tries the first, and on failure then tries the second.\n\u003c/p\u003e\u003cp\u003eNote on lazy unpickle: The first argument is evaluated strictly.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpTryCatch",
          "package": "hexpat-pickle",
          "signature": "PU t a -\u003e PU t a -\u003e PU t a",
          "source": "src/Text-XML-Expat-Pickle.html#xpTryCatch",
          "type": "function"
        },
        "index": {
          "description": "Pickler that during pickling always uses the first pickler and during unpickling tries the first and on failure then tries the second Note on lazy unpickle The first argument is evaluated strictly",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpTryCatch",
          "normalized": "PU a b-\u003ePU a b-\u003ePU a b",
          "package": "hexpat-pickle",
          "partial": "Try Catch",
          "signature": "PU t a-\u003ePU t a-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpTryCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert nothing \u003c-\u003e (). Does not output or consume any XML text. \n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpUnit",
          "package": "hexpat-pickle",
          "signature": "PU [t] ()",
          "source": "src/Text-XML-Expat-Pickle.html#xpUnit",
          "type": "function"
        },
        "index": {
          "description": "Convert nothing Does not output or consume any XML text",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpUnit",
          "normalized": "PU[a]()",
          "package": "hexpat-pickle",
          "partial": "Unit",
          "signature": "PU[t]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to use a pickler. On failure, return a default value.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003expDefault\u003c/a\u003e\u003c/code\u003e, the default value \u003cem\u003eis\u003c/em\u003e encoded in the XML document.\n\u003c/p\u003e\u003cp\u003eNote on lazy unpickle: The child is evaluated strictly.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpWithDefault",
          "package": "hexpat-pickle",
          "signature": "a -\u003e PU t a -\u003e PU t a",
          "source": "src/Text-XML-Expat-Pickle.html#xpWithDefault",
          "type": "function"
        },
        "index": {
          "description": "Attempt to use pickler On failure return default value Unlike xpDefault the default value is encoded in the XML document Note on lazy unpickle The child is evaluated strictly",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpWithDefault",
          "normalized": "a-\u003ePU b a-\u003ePU b a",
          "package": "hexpat-pickle",
          "partial": "With Default",
          "signature": "a-\u003ePU t a-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a lens to convert the type of your data structure to/from types that\n the pickler primitives can handle, with the \u003cem\u003eunpickle\u003c/em\u003e case first.\n Mostly this means the tuples used by \u003ccode\u003e\u003ca\u003expPair\u003c/a\u003e\u003c/code\u003e and friends. A typical example is:\n\u003c/p\u003e\u003cpre\u003e xpWrap (\\(name, address) -\u003e Person name address,\n         \\(Person name address) -\u003e (name, address)) $ ...\n\u003c/pre\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpWrap",
          "package": "hexpat-pickle",
          "signature": "(a -\u003e b, b -\u003e a) -\u003e PU t a -\u003e PU t b",
          "source": "src/Text-XML-Expat-Pickle.html#xpWrap",
          "type": "function"
        },
        "index": {
          "description": "Apply lens to convert the type of your data structure to from types that the pickler primitives can handle with the unpickle case first Mostly this means the tuples used by xpPair and friends typical example is xpWrap name address Person name address Person name address name address",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpWrap",
          "normalized": "(a-\u003eb,b-\u003ea)-\u003ePU c a-\u003ePU c b",
          "package": "hexpat-pickle",
          "partial": "Wrap",
          "signature": "(a-\u003eb,b-\u003ea)-\u003ePU t a-\u003ePU t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike xpWrap, except it strips Right (and treats Left as a failure) during unpickling.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpWrapEither",
          "package": "hexpat-pickle",
          "signature": "(a -\u003e Either String b, b -\u003e a) -\u003e PU t a -\u003e PU t b",
          "source": "src/Text-XML-Expat-Pickle.html#xpWrapEither",
          "type": "function"
        },
        "index": {
          "description": "Like xpWrap except it strips Right and treats Left as failure during unpickling",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpWrapEither",
          "normalized": "(a-\u003eEither String b,b-\u003ea)-\u003ePU c a-\u003ePU c b",
          "package": "hexpat-pickle",
          "partial": "Wrap Either",
          "signature": "(a-\u003eEither String b,b-\u003ea)-\u003ePU t a-\u003ePU t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpWrapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike xpWrap, but strips Just (and treats Nothing as a failure) during unpickling.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpWrapMaybe",
          "package": "hexpat-pickle",
          "signature": "(a -\u003e Maybe b, b -\u003e a) -\u003e PU t a -\u003e PU t b",
          "source": "src/Text-XML-Expat-Pickle.html#xpWrapMaybe",
          "type": "function"
        },
        "index": {
          "description": "Like xpWrap but strips Just and treats Nothing as failure during unpickling",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpWrapMaybe",
          "normalized": "(a-\u003eMaybe b,b-\u003ea)-\u003ePU c a-\u003ePU c b",
          "package": "hexpat-pickle",
          "partial": "Wrap Maybe",
          "signature": "(a-\u003eMaybe b,b-\u003ea)-\u003ePU t a-\u003ePU t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpWrapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike xpWrap, but strips Just (and treats Nothing as a failure) during unpickling,\n with specified error message for Nothing value.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpWrapMaybe_",
          "package": "hexpat-pickle",
          "signature": "String -\u003e (a -\u003e Maybe b, b -\u003e a) -\u003e PU t a -\u003e PU t b",
          "source": "src/Text-XML-Expat-Pickle.html#xpWrapMaybe_",
          "type": "function"
        },
        "index": {
          "description": "Like xpWrap but strips Just and treats Nothing as failure during unpickling with specified error message for Nothing value",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpWrapMaybe_",
          "normalized": "String-\u003e(a-\u003eMaybe b,b-\u003ea)-\u003ePU c a-\u003ePU c b",
          "package": "hexpat-pickle",
          "partial": "Wrap Maybe",
          "signature": "String-\u003e(a-\u003eMaybe b,b-\u003ea)-\u003ePU t a-\u003ePU t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpWrapMaybe_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe zero pickler\n\u003c/p\u003e\u003cp\u003eEncodes nothing, fails always during unpickling. (Same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003expThrow\u003c/a\u003e\u003c/code\u003e \"got xpZero\"\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpZero",
          "package": "hexpat-pickle",
          "signature": "PU [t] a",
          "source": "src/Text-XML-Expat-Pickle.html#xpZero",
          "type": "function"
        },
        "index": {
          "description": "The zero pickler Encodes nothing fails always during unpickling Same as xpThrow got xpZero",
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpZero",
          "normalized": "PU[a]b",
          "package": "hexpat-pickle",
          "partial": "Zero",
          "signature": "PU[t]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Pickle",
          "name": "xpickle",
          "package": "hexpat-pickle",
          "signature": "PU t a",
          "source": "src/Text-XML-Expat-Pickle.html#xpickle",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Pickle",
          "module": "Text.XML.Expat.Pickle",
          "name": "xpickle",
          "package": "hexpat-pickle",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-pickle/docs/Text-XML-Expat-Pickle.html#v:xpickle"
      }
    }
  ]
]